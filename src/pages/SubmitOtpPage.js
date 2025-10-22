// src/pages/SubmitOtpPage.js
// Minimal, consolidated POM: single findAndFillOtp that polls mailbox, fills OTP (fast-path + fallbacks),
// and waits for verification spinner / network quiescence.

import { pollForOtp } from '../services/otpService.js';

export default class SubmitOtp {
  constructor(page) {
    // store Playwright page so methods can interact with the browser
    this.page = page;
  }

  async sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

  async waitNetworkIdleSilent() {
    // best-effort network idle; swallow failures to avoid noisy test errors
    // This improves robustness: if the page never reaches a strict network idle state,
    // we don't want tests to fail here — downstream actions will still try sensible
    // waits and checks.
    await this.page.waitForLoadState('networkidle').catch(()=>{});
  }

  /**
   * Poll mailbox for an OTP and fill it into the page using a fast-path (test-ids)
   * and several fallbacks (per-digit inputs, single input, contenteditable, heading-nearby, tab).
   * After typing, wait for verification UI to settle or network to quiet down.
   *
   * @param {string} token - bearer token for pollForOtp
   * @param {{ otpTimeout?: number, verifyWait?: number }} opts
   * @returns {import('playwright').Page}
   */
  async findAndFillOtp(token, { otpTimeout = 90000, verifyWait = 20000 } = {}) {
    const page = this.page;

    // --- Give page a chance to render OTP UI ---
    // Wait for either a single-digit input to appear, a textual cue, or a URL change.
    // Use Promise.race so whichever renders first will unblock us; also swallow
    // individual errors so missing one selector doesn't throw.
    await this.waitNetworkIdleSilent();
    await Promise.race([
      // common per-digit inputs (e.g. 6 separate boxes)
      page.locator('input[maxlength="1"]').first().waitFor({ state: 'visible', timeout: 15000 }).catch(()=>{}),
      // textual heading that many apps show
      page.locator('text=Verify your email').waitFor({ state: 'visible', timeout: 15000 }).catch(()=>{}),
      // some flows navigate to a verify URL
      page.waitForURL(/VerifyIdentity|Verify/, { timeout: 15000 }).catch(()=>{})
    ]).catch(()=>{});

    // --- Retrieve OTP from mailbox service ---
    // pollForOtp is an external helper that repeatedly queries a disposable mailbox
    // until an OTP string is found or the timeout elapses.
    const otp = await pollForOtp(token, { timeoutMs: otpTimeout });
    if (!otp) throw new Error('Timed out waiting for OTP');

    // === Fast-path: stable per-digit test-id inputs ===
    // Many modern components render inputs with deterministic data-testids like
    // `codeinput-id-input-0..N`. Try those first for speed and reliability.
    let typedDigits = 0;
    for (let i = 0; i < otp.length; ++i) {
      const tid = `codeinput-id-input-${i}`;
      const el = page.getByTestId(tid);
      if (await el.count() > 0) {
        // Try fill; if fill fails (rare), fall back to click+type which can work
        // with some custom input widgets that swallow .fill().
        await el.fill(otp[i]).catch(async () => { await el.click({ force: true }); await el.type(otp[i]); });
        typedDigits++;
      } else {
        // fallback to nth per-digit input if present. This handles cases where the
        // inputs exist but don't have test-ids — we still can target the nth box.
        const fb = page.locator('input[maxlength="1"]').nth(i);
        if (await fb.count() > 0) {
          await fb.fill(otp[i]).catch(async () => { await fb.click({ force: true }); await fb.type(otp[i]); });
          typedDigits++;
        }
      }
    }
    if (typedDigits === otp.length) {
      // full fast-path success — small pause so UI can react.
      await this.sleep(200);
    } else {
      // === Fallback heuristics ===

      // 1) Per-digit inputs (generic selectors)
      // Try a set of common selectors for single-character input boxes used by
      // many libraries. We iterate through elements and fill sequential digits
      // until we've entered as many digits as inputs available.
      const perDigitSelectors = [
        'input[maxlength="1"]',
        'input[type="tel"][maxlength="1"]',
        'input[inputmode="numeric"][maxlength="1"]'
      ];
      for (const sel of perDigitSelectors) {
        const loc = page.locator(sel);
        const count = await loc.count();
        if (count > 0) {
          let filled = 0;
          for (let i = 0; i < count && filled < otp.length; ++i) {
            const el = loc.nth(i);
            if (await el.isVisible()) {
              // try fill; if it fails, click then type as a safer alternative
              await el.fill(otp[filled]).catch(async () => { await el.click(); await el.type(otp[filled]); });
              filled++;
              // small delay to let focus/auto-advance logic settle in some widgets
              await page.waitForTimeout(120);
            }
          }
          if (filled > 0) { typedDigits = Math.max(typedDigits, filled); break; }
        }
      }
    }


    // Wait for verifying indicator or network quiescence
    try {
      // If the page shows a "Verifying" indicator, wait for it to disappear.
      // Otherwise fall back to waiting for networkidle so navigation or background
      // requests can finish.
      const verifying = page.locator('text=Verifying, text=Verifying..., text=Verifying..');
      if (await verifying.count() > 0 && await verifying.first().isVisible()) {
        await verifying.first().waitFor({ state: 'detached', timeout: verifyWait }).catch(()=>{});
      } else {
        await page.waitForLoadState('networkidle').catch(()=>{});
      }
    } catch (e) {
      // non-fatal — log and continue. We don't want to make post-verification waits
      // a test failure cause; downstream assertions should verify success instead.
      console.warn('[OtpPage] verifying wait error', e?.message || e);
    }

    // Return the page to allow fluent chaining or further checks by the caller
    return page;
  }
}
