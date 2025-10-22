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

    // If not yet fully typed, try single-input strategies
    if (typedDigits < otp.length) {
      // Collect likely single inputs: numeric/text inputs which could accept the
      // whole OTP at once (common on mobile-first or older forms).
      const numericSingle = page.locator('input[inputmode="numeric"], input[type="tel"], input[type="number"], input[type="text"]');
      const ncount = await numericSingle.count();

      // Prefer inputs that hint at otp/code using attributes/placeholders
      let usedSingle = false;
      for (let i = 0; i < ncount; ++i) {
        const el = numericSingle.nth(i);
        if (!(await el.isVisible())) continue;
        // read name/placeholder attributes, guard with empty string
        const name = (await el.getAttribute('name') || '').toLowerCase();
        const placeholder = (await el.getAttribute('placeholder') || '').toLowerCase();
        if (name.includes('otp') || name.includes('code') || placeholder.includes('otp') || placeholder.includes('code')) {
          // If attribute hints strongly this is the OTP field, attempt to fill full string
          await el.fill(otp).catch(async () => { await el.click({ force: true }); await el.type(otp); });
          usedSingle = true;
          break;
        }
      }
      if (!usedSingle) {
        // If no clear hint was found, just fill the first visible numeric/text input
        for (let i = 0; i < ncount; ++i) {
          const el = numericSingle.nth(i);
          if (await el.isVisible()) {
            await el.fill(otp).catch(async () => { await el.click({ force: true }); await el.type(otp); });
            usedSingle = true;
            break;
          }
        }
      }
      if (usedSingle) typedDigits = otp.length;
    }

    // Try contenteditable / role=textbox if still not filled
    if (typedDigits < otp.length) {
      // Some apps use contenteditable divs or ARIA textboxes instead of inputs.
      const contentEd = page.locator('[contenteditable="true"], [role="textbox"], [tabindex]');
      const ccount = await contentEd.count();
      for (let i = 0; i < ccount; ++i) {
        const el = contentEd.nth(i);
        if (!(await el.isVisible())) continue;
        try {
          // click into the element and type digits with small pauses so the
          // target's internal handlers register them correctly.
          await el.click({ force: true });
          for (let d = 0; d < otp.length; ++d) { await page.keyboard.type(String(otp[d])); await page.waitForTimeout(120); }
          typedDigits = otp.length;
          break;
        } catch (e) { /* try next element if typing failed */ }
      }
    }

    // Heading-nearby heuristic
    if (typedDigits < otp.length) {
      // Search for common headings near OTP fields and attempt to find a
      // focusable input in the same container. This helps with apps that
      // structure markup semantically but lack helpful attributes.
      const headings = ['text=Enter the code', 'text=Verify your email', 'text=Enter the code we sent', 'text=Enter the code we sent to'];
      for (const h of headings) {
        const header = page.locator(h);
        if (await header.count() > 0) {
          const container = header.locator('..');
          const focusables = container.locator('input, [tabindex], [role="textbox"], button');
          const fc = await focusables.count();
          for (let i = 0; i < fc; ++i) {
            const el = focusables.nth(i);
            if (!(await el.isVisible())) continue;
            try {
              await el.click({ force: true });
              await page.keyboard.type(otp);
              typedDigits = otp.length;
              break;
            } catch (e) { /* ignore and try next focusable */ }
          }
          if (typedDigits >= otp.length) break;
        }
      }
    }

    // Final fallback: tab into a focused element and type
    if (typedDigits < otp.length) {
      // iterate a limited number of Tabs to find something that accepts typing
      for (let t = 0; t < 12; ++t) {
        await page.keyboard.press('Tab'); await page.waitForTimeout(120);
        const activeTag = await page.evaluate(() => document.activeElement && document.activeElement.tagName);
        if (!activeTag) continue;
        // when activeElement exists, attempt to type the whole OTP
        await page.keyboard.type(otp);
        typedDigits = otp.length;
        break;
      }
    }

    if (typedDigits < otp.length) throw new Error('Could not fill OTP');

    // Small post-type pause to allow any client-side validation/auto-submit to run
    await this.sleep(500);

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
