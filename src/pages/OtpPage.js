// src/pages/OtpPage.js
// POM for OTP UI interactions. Keeps all DOM logic and delegates mailbox polling to otpService.

import { pollForOtp } from '../services/otpService.js'; // <- service import

export default class OtpPage {
  constructor(page) {
    this.page = page;
  }

  async waitNetworkIdle() {
    await this.page.waitForLoadState('networkidle').catch(()=>{});
  }

  async sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

  async saveDebug(tag = 'otp-debug') {
    try {
      await this.page.screenshot({ path: `debug-${tag}.png`, fullPage: true });
      console.log(`[OtpPage] Saved debug screenshot: debug-${tag}.png`);
    } catch (e) { console.warn('[OtpPage] saveDebug failed:', e?.message || e); }
  }

  // --- DOM filling logic (unchanged behavior) ---
  async findAndFillOtp(otp) {
    const page = this.page;
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
            try { await el.fill(otp[filled]); } catch (e) { await el.click(); await el.type(otp[filled]); }
            filled++; await page.waitForTimeout(120);
          }
        }
        if (filled > 0) return true;
      }
    }

    const numericSingle = page.locator('input[inputmode="numeric"], input[type="tel"], input[type="number"], input[type="text"]');
    const ncount = await numericSingle.count();
    for (let i = 0; i < ncount; ++i) {
      const el = numericSingle.nth(i);
      if (!(await el.isVisible())) continue;
      const name = (await el.getAttribute('name') || '').toLowerCase();
      const placeholder = (await el.getAttribute('placeholder') || '').toLowerCase();
      if (name.includes('otp') || name.includes('code') || placeholder.includes('otp') || placeholder.includes('code')) {
        await el.fill(otp).catch(async () => { await el.click({ force: true }); await el.type(otp); });
        return true;
      }
    }
    for (let i = 0; i < ncount; ++i) {
      const el = numericSingle.nth(i);
      if (await el.isVisible()) { await el.fill(otp).catch(async () => { await el.click({ force: true }); await el.type(otp); }); return true; }
    }

    const contentEd = page.locator('[contenteditable="true"], [role="textbox"], [tabindex]');
    const ccount = await contentEd.count();
    for (let i = 0; i < ccount; ++i) {
      const el = contentEd.nth(i);
      if (!(await el.isVisible())) continue;
      try {
        await el.click({ force: true });
        for (let d = 0; d < otp.length; ++d) { await page.keyboard.type(String(otp[d])); await page.waitForTimeout(120); }
        return true;
      } catch (e) {}
    }

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

    for (let t = 0; t < 12; ++t) {
      await page.keyboard.press('Tab'); await page.waitForTimeout(120);
      const activeTag = await page.evaluate(() => document.activeElement && document.activeElement.tagName);
      if (!activeTag) continue;
      await page.keyboard.type(otp);
      return true;
    }

    return false;
  }

  /**
   * Main flow: wait for OTP UI, ask otpService to poll mailbox, then fill OTP on the page.
   * @param {string} token - Mail.tm bearer token
   * @param {Object} options
   * @param {number} options.otpTimeout - passed to pollForOtp (ms)
   * @param {number} options.verifyWait - how long to wait for verifying UI to disappear (ms)
   */
  async waitForAndFillOtp(token, { otpTimeout = 90000, verifyWait = 20000 } = {}) {
    await this.waitNetworkIdle();

    // best-effort waits for OTP UI
    await Promise.race([
      this.page.locator('input[maxlength="1"]').first().waitFor({ state: 'visible', timeout: 15000 }).catch(()=>{}),
      this.page.locator('text=Verify your email').waitFor({ state: 'visible', timeout: 15000 }).catch(()=>{}),
      this.page.waitForURL(/VerifyIdentity|Verify/, { timeout: 15000 }).catch(()=>{})
    ]).catch(()=>{});

    console.log('[OtpPage] Requesting OTP from service (polling mailbox)...');
    // <-- call the service function imported above
    const otp = await pollForOtp(token, { timeoutMs: otpTimeout });

    if (!otp) {
      await this.saveDebug('no-otp');
      throw new Error('Timed out waiting for OTP');
    }
    console.log('[OtpPage] Got OTP:', otp);

    // Try targeted per-digit testid filling first (unchanged)
    for (let i = 0; i < otp.length; ++i) {
      const tid = `codeinput-id-input-${i}`;
      const el = this.page.getByTestId(tid);
      if (await el.count() > 0) {
        await el.fill(otp[i]).catch(async () => { await el.click({ force: true }); await el.type(otp[i]); });
      } else {
        const fb = this.page.locator('input[maxlength="1"]').nth(i);
        if (await fb.count() > 0) await fb.fill(otp[i]).catch(async () => { await fb.click({ force: true }); await fb.type(otp[i]); });
      }
    }

    const filled = await this.findAndFillOtp(otp);
    if (!filled) { await this.saveDebug('no-otp-inputs'); throw new Error('Could not fill OTP'); }
    console.log('[OtpPage] OTP typed');

    await this.sleep(500);
    try {
      const verifying = this.page.locator('text=Verifying, text=Verifying..., text=Verifying..');
      if (await verifying.count() > 0 && await verifying.first().isVisible()) {
        await verifying.first().waitFor({ state: 'detached', timeout: verifyWait }).catch(()=>{});
      } else {
        await this.page.waitForLoadState('networkidle').catch(()=>{});
      }
    } catch (e) {
      console.warn('[OtpPage] Verifying wait error', e?.message || e);
    }

    return this.page;
  }
}
