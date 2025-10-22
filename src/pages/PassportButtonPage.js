// pages/PassportButtons.js
// -----------------------------------------------------------------------------
// Page Object Model (POM) for handling the two key buttons on the passport
// verification screen:
//
//   1. "Scan Passport"  → opens camera/scan flow
//   2. "Enter Passport Manually" → switches to manual entry form
//
// Responsibilities:
//   - Locate and click either button reliably.
//   - Handle UI variations with regex-based locators.
//   - Provide a single, clean log output (✅ or ❌) for test reporting.
//
// Design Philosophy:
//   - Lightweight and robust: no unnecessary waits or logs.
//   - Consistent with the other POMs (e.g., SubmitEmail, SubmitOtp, PassportDetails).
// -----------------------------------------------------------------------------

export default class PassportButtons {
  /**
   * Constructor
   * ---------------------------------------------------------------------------
   * @param {import('playwright').Page} page - The Playwright page instance
   * used to control the browser in this POM.
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * clickScanPassport
   * ---------------------------------------------------------------------------
   * Clicks the "Scan Passport" button on the verification screen.
   * Uses a case-insensitive match to ensure it works across different locales
   * or capitalization styles.
   *
   * Includes a single success/failure log for clean CI output.
   */
  async clickScanPassport() {
    try {
      // Locate and click the "Scan Passport" button using a role-based locator.
      await this.page.getByRole('button', { name: /scan passport/i }).click();

      // ✅ Final success log
      console.log('✅ "Scan Passport" button clicked successfully.');
    } catch (error) {
      // ❌ Final failure log
      console.error('❌ Failed to click "Scan Passport" button:', error.message);
    }
  }

  /**
   * clickEnterPassportManually
   * ---------------------------------------------------------------------------
   * Clicks the "Enter Passport Manually" button.
   * This is used when users prefer to input passport details directly instead of scanning.
   *
   * Uses regex-based matching to handle UI variations and provides one clean final log.
   */
  async clickEnterPassportManually() {
    try {
      // Locate and click the "Enter Passport Manually" button by role and label.
      await this.page.getByRole('button', { name: /enter passport manually/i }).click();

      // ✅ Final success log
      console.log('✅ "Enter Passport Manually" button clicked successfully.');
    } catch (error) {
      // ❌ Final failure log
      console.error('❌ Failed to click "Enter Passport Manually" button:', error.message);
    }
  }
}
