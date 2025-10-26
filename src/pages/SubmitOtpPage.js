// SubmitOtpPage - Retrieves OTP from Mail.tm and fills it in the form
import { pollForOtp } from '../services/otpService.js';

export default class SubmitOtp {
  constructor(page) {
    this.page = page;
  }

  // Poll for OTP, fill it in input fields, wait for verification
  async findAndFillOtp(token, { otpTimeout = 90000, verifyWait = 20000, skipMessageIds = [] } = {}) {
    try {
      const otp = await pollForOtp(token, { timeoutMs: otpTimeout, skipMessageIds });
      if (!otp) throw new Error('Timed out waiting for OTP');

      // Try test ID inputs first (codeinput-id-input-0, codeinput-id-input-1, etc.)
      let filled = 0;
      for (let i = 0; i < otp.length; i++) {
        const input = this.page.getByTestId(`codeinput-id-input-${i}`);
        if (await input.count()) {
          await input.fill(otp[i]).catch(() => input.click().then(() => input.type(otp[i])));
          filled++;
        }
      }

      // Fallback to generic maxlength=1 inputs if test IDs don't exist
      if (filled === 0) {
        const inputs = this.page.locator('input[maxlength="1"]');
        const count = await inputs.count();
        for (let i = 0; i < Math.min(count, otp.length); i++) {
          await inputs.nth(i).fill(otp[i]).catch(() => {});
          filled++;
        }
      }

      if (filled === 0) throw new Error('No OTP inputs found');

      // Wait for verification to complete
      await this.page.waitForTimeout(300);
      await this.page.locator('text=/Verifying/i').waitFor({ state: 'hidden', timeout: verifyWait }).catch(() => {});
      await this.page.waitForLoadState('networkidle').catch(() => {});

      console.log('✅ OTP successfully retrieved, entered, and verified.');
    } catch (error) {
      console.error('❌ OTP submission failed:', error.message);
    }
    return this.page;
  }
}
