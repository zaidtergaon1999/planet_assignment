// src/pages/SubmitOtpPage.js
// POM for OTP UI interactions. Keeps all DOM logic and delegates mailbox polling to otpService.
//
// This file's responsibilities:
// 1. Provide robust helpers that locate OTP input fields on many different page implementations.
// 2. Delegate the mailbox polling / retrieval of the OTP value to otpService (pollForOtp).
// 3. Try multiple strategies to type the OTP into the page (per-digit inputs, single inputs, contenteditable, focused element, etc).
// 4. Provide small debugging helpers (screenshot) and defensive waits for network/verification states.

import { pollForOtp } from '../services/otpService.js'; // <- service import

export default class SubmitOtp {
  constructor(page) {
    // The Playwright Page object this POM will act upon.
    // Tests should pass the test's `page` here.
    this.page = page;
  }

  // --- Utility helpers ---

  async waitNetworkIdle() {
    // Wait for the page to reach a 'networkidle' load state.
    // This is a best-effort helper to reduce flakiness — networkidle can throw if page is already closed,
    // so we swallow any errors to avoid noisy failures.
    await this.page.waitForLoadState('networkidle').catch(()=>{});
  }

  async sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
  // Minimal sleep helper used to add small delays between UI interactions.
  // Prefer small sleeps only where necessary — Playwright auto-waits for most actions.

  async saveDebug(tag = 'otp-debug') {
    // Save a full-page screenshot for debugging when OTP retrieval/filling fails.
    // Tag allows distinguishing screenshots (e.g. 'no-otp', 'no-otp-inputs').
    try {
      await this.page.screenshot({ path: `debug-${tag}.png`, fullPage: true });
      console.log(`[OtpPage] Saved debug screenshot: debug-${tag}.png`);
    } catch (e) { console.warn('[OtpPage] saveDebug failed:', e?.message || e); }
  }

  // --- DOM filling logic (unchanged behavior) ---
  // findAndFillOtp tries many strategies (in order) to locate OTP inputs and fill the code:
  // 1. common per-digit inputs (maxlength="1", inputmode numeric, tel)
  // 2. single numeric/text inputs with names/placeholders that include 'otp' or 'code'
  // 3. any visible numeric/text input
  // 4. contenteditable / role=textbox elements
  // 5. nearby inputs that live next to a heading like "Enter the code"
  // 6. finally, tries to tab into a focused input and type the OTP
  //
  // The function returns true when it successfully entered the OTP, otherwise false.
  async findAndFillOtp(otp) {
    const page = this.page;

    // First look for common per-digit input patterns (one character per input).
    const perDigitSelectors = [
      'input[maxlength="1"]',
      'input[type="tel"][maxlength="1"]',
      'input[inputmode="numeric"][maxlength="1"]'
    ];
    for (const sel of perDigitSelectors) {
      const loc = page.locator(sel);
      const count = await loc.count();
      if (count > 0) {
        // Fill each visible per-digit input in order using the corresponding OTP character.
        let filled = 0;
        for (let i = 0; i < count && filled < otp.length; ++i) {
          const el = loc.nth(i);
          if (await el.isVisible()) {
            // Try direct .fill first; fallback to click+type if fill errors (some inputs behave odd).
            try { await el.fill(otp[filled]); } catch (e) { await el.click(); await el.type(otp[filled]); }
            filled++;
            // small inter-character pause to mimic human typing and give frontend scripts time to react
            await page.waitForTimeout(120);
          }
        }
        // If any characters were filled here, assume success for per-digit flow.
        if (filled > 0) return true;
      }
    }

    // If per-digit inputs weren't found, look for single numeric-like inputs that may accept the whole OTP.
    // This locator is intentionally broad to capture many real-world forms.
    const numericSingle = page.locator('input[inputmode="numeric"], input[type="tel"], input[type="number"], input[type="text"]');
    const ncount = await numericSingle.count();

    // Prefer inputs that have 'otp' or 'code' in their name/placeholder attributes.
    for (let i = 0; i < ncount; ++i) {
      const el = numericSingle.nth(i);
      if (!(await el.isVisible())) continue;
      // Lowercase attributes for robust substring checks.
      const name = (await el.getAttribute('name') || '').toLowerCase();
      const placeholder = (await el.getAttribute('placeholder') || '').toLowerCase();
      if (name.includes('otp') || name.includes('code') || placeholder.includes('otp') || placeholder.includes('code')) {
        // Try to fill; fallback to force-click+type if .fill fails (some frameworks prevent fill).
        await el.fill(otp).catch(async () => { await el.click({ force: true }); await el.type(otp); });
        return true;
      }
    }

    // If none of the inputs had clear otp/code hints, fill the first visible numeric/text input.
    for (let i = 0; i < ncount; ++i) {
      const el = numericSingle.nth(i);
      if (await el.isVisible()) {
        await el.fill(otp).catch(async () => { await el.click({ force: true }); await el.type(otp); });
        return true;
      }
    }

    // Some pages use contenteditable or ARIA textboxes instead of inputs — attempt to type into those.
    const contentEd = page.locator('[contenteditable="true"], [role="textbox"], [tabindex]');
    const ccount = await contentEd.count();
    for (let i = 0; i < ccount; ++i) {
      const el = contentEd.nth(i);
      if (!(await el.isVisible())) continue;
      try {
        // Click into the element and type each digit with small delays.
        await el.click({ force: true });
        for (let d = 0; d < otp.length; ++d) { await page.keyboard.type(String(otp[d])); await page.waitForTimeout(120); }
        return true;
      } catch (e) { /* ignore and try the next candidate */ }
    }

    // Some pages present a heading like "Enter the code we sent" and place inputs nearby.
    // Look for a set of known header texts, then try to find inputs within the header's container.
    const headings = ['text=Enter the code', 'text=Verify your email', 'text=Enter the code we sent', 'text=Enter the code we sent to'];
    for (const h of headings) {
      const header = page.locator(h);
      if (await header.count() > 0) {
        // Move up to the container and search for focusable descendants.
        const container = header.locator('..');
        const focusables = container.locator('input, [tabindex], [role="textbox"], button');
        const fc = await focusables.count();
        for (let i = 0; i < fc; ++i) {
          const el = focusables.nth(i);
          if (!(await el.isVisible())) continue;
          try {
            // Click to focus and type OTP (covers custom input widgets).
            await el.click({ force: true });
            await page.keyboard.type(otp);
            return true;
          } catch (e) { /* ignore and continue */ }
        }
      }
    }

    // Last-resort strategy: simulate pressing Tab repeatedly to move focus to the OTP field,
    // then type the code. This can handle forms that only accept typed input on the focused element.
    for (let t = 0; t < 12; ++t) {
      await page.keyboard.press('Tab'); await page.waitForTimeout(120);
      // Use page.evaluate to read the tag name of the activeElement in the page context.
      const activeTag = await page.evaluate(() => document.activeElement && document.activeElement.tagName);
      if (!activeTag) continue;
      await page.keyboard.type(otp);
      return true;
    }

    // If all strategies fail, return false so the caller can take a screenshot or throw.
    return false;
  }

  /**
   * Main flow: wait for OTP UI, ask otpService to poll mailbox, then fill OTP on the page.
   * @param {string} token - Mail.tm bearer token
   * @param {Object} options
   * @param {number} options.otpTimeout - passed to pollForOtp (ms)
   * @param {number} options.verifyWait - how long to wait for verifying UI to disappear (ms)
   *
   * High-level steps:
   *  1. Wait briefly for OTP-related UI to appear (per-digit inputs, "Verify your email" label, or a Verify URL).
   *  2. Call pollForOtp(token, { timeoutMs }) to retrieve the OTP (this function lives in services/otpService.js).
   *  3. If OTP received, attempt targeted per-digit testid filling (fast path), then fall back to findAndFillOtp.
   *  4. Wait a short moment for verification indicators to settle, and return the page object.
   */
  async waitForAndFillOtp(token, { otpTimeout = 90000, verifyWait = 20000 } = {}) {
    // Give the page time to settle (network calls complete, scripts load).
    await this.waitNetworkIdle();

    // Best-effort waits for common OTP UI indicators so we don't start polling too early.
    // Using Promise.race with short timeouts prevents blocking if UI doesn't present exactly as expected.
    await Promise.race([
      this.page.locator('input[maxlength="1"]').first().waitFor({ state: 'visible', timeout: 15000 }).catch(()=>{}),
      this.page.locator('text=Verify your email').waitFor({ state: 'visible', timeout: 15000 }).catch(()=>{}),
      this.page.waitForURL(/VerifyIdentity|Verify/, { timeout: 15000 }).catch(()=>{})
    ]).catch(()=>{});

    console.log('[OtpPage] Requesting OTP from service (polling mailbox)...');

    // Call the external OTP polling service to fetch the code from the mailbox.
    // pollForOtp should return the OTP string, or falsy if it times out.
    const otp = await pollForOtp(token, { timeoutMs: otpTimeout });

    if (!otp) {
      // If OTP retrieval failed, save a debug screenshot and throw a descriptive error.
      await this.saveDebug('no-otp');
      throw new Error('Timed out waiting for OTP');
    }
    console.log('[OtpPage] Got OTP:', otp);

    // Fast path: many implementations provide per-digit inputs with stable test-ids like 'codeinput-id-input-{i}'.
    // Try to fill those first (more deterministic).
    for (let i = 0; i < otp.length; ++i) {
      const tid = `codeinput-id-input-${i}`;
      const el = this.page.getByTestId(tid);
      if (await el.count() > 0) {
        // Fill each test-id input individually; fallback to click+type if needed.
        await el.fill(otp[i]).catch(async () => { await el.click({ force: true }); await el.type(otp[i]); });
      } else {
        // If test-id isn't present, try the nth per-digit input locator as fallback.
        const fb = this.page.locator('input[maxlength="1"]').nth(i);
        if (await fb.count() > 0) await fb.fill(otp[i]).catch(async () => { await fb.click({ force: true }); await fb.type(otp[i]); });
      }
    }

    // If fast-path did not type the full code, use the broader findAndFillOtp which tries many heuristics.
    const filled = await this.findAndFillOtp(otp);
    if (!filled) { await this.saveDebug('no-otp-inputs'); throw new Error('Could not fill OTP'); }
    console.log('[OtpPage] OTP typed');

    // Small post-type delay to allow frontend to start verification flow.
    await this.sleep(500);

    try {
      // Wait for any "Verifying..." indicator to detach (disappear) or else wait for networkidle.
      // This gives the page some time to complete validation and navigate or show errors.
      const verifying = this.page.locator('text=Verifying, text=Verifying..., text=Verifying..');
      if (await verifying.count() > 0 && await verifying.first().isVisible()) {
        await verifying.first().waitFor({ state: 'detached', timeout: verifyWait }).catch(()=>{});
      } else {
        // If no explicit verifying indicator, wait briefly for network to quiet down.
        await this.page.waitForLoadState('networkidle').catch(()=>{});
      }
    } catch (e) {
      // Non-fatal: log verification wait errors but continue.
      console.warn('[OtpPage] Verifying wait error', e?.message || e);
    }

    // Return the page so callers can continue the flow (assertions/navigation etc).
    return this.page;
  }
}
