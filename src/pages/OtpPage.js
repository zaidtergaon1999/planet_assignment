// pages/OtpPage.js
// POM for the OTP page: poll Mail.tm for OTP, fill robustly, wait for verification / next page.

// Import fetch for Node environments that don't provide global fetch.
// If running on Node >= 18 or an environment that already has global fetch, you can remove this import.
import fetch from 'node-fetch'; // if using node >=18 you can use global fetch; otherwise install node-fetch
// If your environment supports global fetch, remove the import above.

export default class OtpPage {
  /**
   * Constructor
   * @param {import('playwright').Page} page - Playwright page instance used to interact with the browser.
   */
  constructor(page) {
    // Store the Playwright page so all methods can interact with the current browser tab.
    this.page = page;
  }

  // waitNetworkIdle
  // Small helper that waits for the page's network to be idle. Any errors are ignored (best-effort).
  async waitNetworkIdle() {
    await this.page.waitForLoadState('networkidle').catch(()=>{});
  }

  // sleep
  // Tiny utility to pause execution for a given number of milliseconds.
  // Useful where Playwright explicit waits don't exist or to allow UI micro-animations to settle.
  async sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

  // saveDebug
  // Saves a full-page screenshot for debugging when OTP flow fails or for diagnostics.
  // Logs path on success and warns on failure.
  async saveDebug(tag = 'otp-debug') {
    try {
      await this.page.screenshot({ path: `debug-${tag}.png`, fullPage: true });
      console.log(`[OtpPage] Saved debug screenshot: debug-${tag}.png`);
    } catch (e) {
      console.warn('[OtpPage] saveDebug failed:', e?.message || e);
    }
  }

  // pollForOtp
  // Polls the Mail.tm API for messages belonging to the mailbox associated with `token`.
  // - Repeatedly fetches messages list until a message with 4-6 digit code is found.
  // - timeoutMs controls how long to poll before giving up.
  // - pollInterval controls interval between poll attempts.
  // Returns the first matched OTP digits string (e.g. "123456") or null on timeout.
  async pollForOtp(token, { timeoutMs = 90000, pollInterval = 3000 } = {}) {
    const start = Date.now();
    // Loop until timeout
    while (Date.now() - start < timeoutMs) {
      try {
        // 1) Fetch the list of messages from Mail.tm
        const listResp = await fetch('https://api.mail.tm/messages', { headers: { Authorization: `Bearer ${token}` } });
        if (listResp.ok) {
          const listJson = await listResp.json();
          const messages = listJson['hydra:member'] || [];
          // 2) If any messages exist, fetch the first message body
          if (messages.length > 0) {
            const id = messages[0].id;
            const msgResp = await fetch(`https://api.mail.tm/messages/${id}`, { headers: { Authorization: `Bearer ${token}` } });
            if (msgResp.ok) {
              const msgJson = await msgResp.json();
              // Prefer plain text, then html, then the whole JSON as a fallback
              const bodyText = msgJson.text || msgJson.html || JSON.stringify(msgJson);
              // 3) Try to extract a 4-6 digit OTP using a regex
              const m = String(bodyText).match(/(\d{4,6})/);
              if (m) return m[1]; // return digits if found
              else console.log('[OtpPage] Mail arrived but no OTP digits yet.');
            }
          }
        } else {
          // Non-2xx response from Mail.tm list endpoint — log for diagnostics
          console.warn('[OtpPage] Mail.tm list request failed:', await listResp.text().catch(()=>listResp.status));
        }
      } catch (e) {
        // Network or JSON parsing errors — log and retry
        console.warn('[OtpPage] Mail.tm poll error:', e?.message || e);
      }
      // Wait before next poll
      await this.sleep(pollInterval);
    }
    // Timed out without seeing OTP
    return null;
  }

  // findAndFillOtp
  // Robust multi-strategy method to input the OTP into the page:
  // 1) Try per-digit inputs (common pattern: several 1-char inputs)
  // 2) Try single numeric-ish inputs (by name/placeholder heuristics first)
  // 3) Try contenteditable or textbox roles
  // 4) Try container heuristics near headings like "Enter the code"
  // 5) As last resort, Tab through focusable elements and type into the active element
  // Returns true if typing was attempted on at least one element, false otherwise.
  async findAndFillOtp(otp) {
    const page = this.page;

    // 1) per-digit inputs - find inputs sized for one digit and fill them one-by-one
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
        // Iterate visible per-digit inputs and fill digits sequentially
        for (let i = 0; i < count && filled < otp.length; ++i) {
          const el = loc.nth(i);
          if (await el.isVisible()) {
            try { await el.fill(otp[filled]); } catch (e) { await el.click(); await el.type(otp[filled]); }
            filled++; await page.waitForTimeout(120);
          }
        }
        // If we filled at least one input, consider success
        if (filled > 0) return true;
      }
    }

    // 2) single numeric-ish inputs - try inputs that accept numbers
    // First pass: prefer inputs where name/placeholder suggests OTP/code
    const numericSingle = page.locator('input[inputmode="numeric"], input[type="tel"], input[type="number"], input[type="text"]');
    const ncount = await numericSingle.count();
    for (let i = 0; i < ncount; ++i) {
      const el = numericSingle.nth(i);
      if (!(await el.isVisible())) continue;
      const name = (await el.getAttribute('name') || '').toLowerCase();
      const placeholder = (await el.getAttribute('placeholder') || '').toLowerCase();
      // If the input appears to be an OTP/code field, fill it
      if (name.includes('otp') || name.includes('code') || placeholder.includes('otp') || placeholder.includes('code')) {
        await el.fill(otp).catch(async () => { await el.click({ force: true }); await el.type(otp); });
        return true;
      }
    }
    // Second pass: fill the first visible numeric-like input if nothing matched heuristics
    for (let i = 0; i < ncount; ++i) {
      const el = numericSingle.nth(i);
      if (await el.isVisible()) { await el.fill(otp).catch(async () => { await el.click({ force: true }); await el.type(otp); }); return true; }
    }

    // 3) contenteditable regions / role="textbox" - type the OTP into any visible editable container
    const contentEd = page.locator('[contenteditable="true"], [role="textbox"], [tabindex]');
    const ccount = await contentEd.count();
    for (let i = 0; i < ccount; ++i) {
      const el = contentEd.nth(i);
      if (!(await el.isVisible())) continue;
      try {
        await el.click({ force: true });
        for (let d = 0; d < otp.length; ++d) { await page.keyboard.type(String(otp[d])); await page.waitForTimeout(120); }
        return true;
      } catch (e) { /* continue to next candidate */ }
    }

    // 4) headings container heuristic:
    // If the page contains headings like "Enter the code", search nearby inputs/buttons and try typing into them.
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
          try { await el.click({ force: true }); await page.keyboard.type(otp); return true; } catch (e) {}
        }
      }
    }

    // 5) Tab until we find a focusable element where we can type the OTP
    // We iterate a reasonable number of times to avoid infinite loops.
    for (let t = 0; t < 12; ++t) {
      await page.keyboard.press('Tab');
      await page.waitForTimeout(120);
      const activeTag = await page.evaluate(() => document.activeElement && document.activeElement.tagName);
      if (!activeTag) continue;
      await page.keyboard.type(otp);
      return true;
    }

    // If none of the strategies succeeded, return false
    return false;
  }

  /**
   * waitForAndFillOtp
   * Main entry for OTP flow:
   * - Waits for OTP UI to appear (best-effort)
   * - Polls Mail.tm for an OTP using a provided token
   * - Attempts targeted per-digit testid filling first
   * - Falls back to robust findAndFillOtp if targeted fills not available
   * - Waits for verification to complete or for navigation to proceed, then returns the page
   *
   * @param {string} token - Mail.tm bearer token used to poll the mailbox
   * @param {Object} options
   * @param {number} options.otpTimeout - maximum time (ms) to wait for the OTP to arrive
   * @param {number} options.verifyWait - maximum time (ms) to wait for verification UI to disappear
   */
  async waitForAndFillOtp(token, { otpTimeout = 90000, verifyWait = 20000 } = {}) {
    // Ensure network activity is settled before starting the polling/fill sequence
    await this.waitNetworkIdle();

    // Best-effort: wait for either per-digit inputs, a "Verify your email" message, or a verifying URL
    // These are non-fatal waits (catch) to avoid blocking flow if page uses different UI.
    await Promise.race([
      this.page.locator('input[maxlength="1"]').first().waitFor({ state: 'visible', timeout: 15000 }).catch(()=>{}),
      this.page.locator('text=Verify your email').waitFor({ state: 'visible', timeout: 15000 }).catch(()=>{}),
      this.page.waitForURL(/VerifyIdentity|Verify/, { timeout: 15000 }).catch(()=>{})
    ]).catch(()=>{});

    console.log('[OtpPage] Polling for OTP...');
    // Poll mailbox for OTP digits
    const otp = await this.pollForOtp(token, { timeoutMs: otpTimeout });
    if (!otp) {
      // Save screenshot for debugging and throw
      await this.saveDebug('no-otp');
      throw new Error('Timed out waiting for OTP');
    }
    console.log('[OtpPage] Got OTP:', otp);

    // Try targeted per-digit testid filling first (if the page uses predictable test ids)
    for (let i = 0; i < otp.length; ++i) {
      const tid = `codeinput-id-input-${i}`;
      const el = this.page.getByTestId(tid);
      if (await el.count() > 0) {
        // Fill each test-id input with the corresponding digit (with fallback to click+type)
        await el.fill(otp[i]).catch(async () => { await el.click({ force: true }); await el.type(otp[i]); });
      } else {
        // If the test-id isn't present, fall back to nth per-digit input
        const fb = this.page.locator('input[maxlength="1"]').nth(i);
        if (await fb.count() > 0) await fb.fill(otp[i]).catch(async () => { await fb.click({ force: true }); await fb.type(otp[i]); });
      }
    }

    // If targeted filling didn't cover the field(s), use robust fallback
    const filled = await this.findAndFillOtp(otp);
    if (!filled) { await this.saveDebug('no-otp-inputs'); throw new Error('Could not fill OTP'); }
    console.log('[OtpPage] OTP typed');

    // Short pause then wait for verifying UI to disappear or for network idle/navigation
    await this.sleep(500);
    try {
      // Wait for any "Verifying..." messages to detach, else wait for network to become idle
      const verifying = this.page.locator('text=Verifying, text=Verifying..., text=Verifying..');
      if (await verifying.count() > 0 && await verifying.first().isVisible()) {
        await verifying.first().waitFor({ state: 'detached', timeout: verifyWait }).catch(()=>{});
      } else {
        await this.page.waitForLoadState('networkidle').catch(()=>{});
      }
    } catch (e) {
      // Non-fatal: log and continue
      console.warn('[OtpPage] Verifying wait error', e?.message || e);
    }

    // Return the Playwright page for caller chaining/inspection
    return this.page;
  }
}
