// pages/SubmitEmailPage.js
// -----------------------------------------------------------------------------
// Page Object Model (POM) for handling the initial step of submitting an email
// address on the portal login page.
//
// Responsibilities:
//   - Open the target portal (dynamic via environment variable or constructor).
//   - Detect the correct email input field (flexible selector).
//   - Fill in the provided email and click the "Continue" button.
//   - Wait for the next page’s DOM readiness.
//   - Log only one final result (✅ success / ❌ failure).
//
// This POM is intentionally lightweight — no heavy network waits or multiple logs.
// Designed for speed and reliability in CI/CD and local test runs.
// -----------------------------------------------------------------------------

export default class SubmitEmail {
  /**
   * Constructor
   * ---------------------------------------------------------------------------
   * @param {import('playwright').Page} page - Playwright page instance for browser automation.
   * @param {string} [portalUrl=process.env.PORTAL_URL] - Optional portal URL. Defaults to env variable.
   *
   * Stores references for the page and portal URL, and defines flexible selectors
   * for the email input and the Continue button.
   */
  constructor(page, portalUrl = process.env.PORTAL_URL) {
    this.page = page;
    this.portalUrl = portalUrl;

    // Smart, flexible email selector:
    // Covers most possible email input variations used in login pages.
    this.emailSelector =
      'input[type="email"], input[name*=email], input[placeholder*="Email"]';

    // Explicit Continue button selector using role + regex for case-insensitive match.
    this.continueButton = this.page.getByRole('button', { name: /^Continue$/i });
  }

  /**
   * openAndSubmitEmail
   * ---------------------------------------------------------------------------
   * Opens the given portal and submits the provided email.
   *
   * Workflow Steps:
   *   1. Navigate to the target portal URL.
   *   2. Wait until the email input field is visible.
   *   3. Fill in the given email address.
   *   4. Click the "Continue" button to move to the next step (OTP or login).
   *   5. Wait for the next page DOM to load.
   *   6. Log one final result (✅ success / ❌ failure).
   *
   * @param {string} address - The email address to submit.
   * @param {{ timeout?: number }} opts - Optional configuration for waits.
   * @returns {Promise<import('playwright').Page>} The current Playwright page for chaining.
   */
  async openAndSubmitEmail(address, { timeout = 30000 } = {}) {
    const page = this.page;

    try {
      // -----------------------------------------------------------------------
      // STEP 1: Determine and open the target portal URL
      // -----------------------------------------------------------------------
      const targetUrl = this.portalUrl || '/';
      if (!this.portalUrl) {
        // Fallback: warn if URL is not provided (helps catch misconfigurations)
        console.warn(
          '[SubmitEmailPage] portalUrl not provided — using fallback base URL (/)'
        );
      }

      // Navigate to the portal; wait until basic DOM is ready
      await page.goto(targetUrl, { waitUntil: 'domcontentloaded' });

      // -----------------------------------------------------------------------
      // STEP 2: Wait for the email input field to become visible
      // -----------------------------------------------------------------------
      // This ensures the form is interactive before attempting to type.
      await page.locator(this.emailSelector).waitFor({ state: 'visible', timeout });

      // -----------------------------------------------------------------------
      // STEP 3: Fill in the provided email address
      // -----------------------------------------------------------------------
      await page.locator(this.emailSelector).fill(address);

      // -----------------------------------------------------------------------
      // STEP 4: Click the "Continue" button to proceed
      // -----------------------------------------------------------------------
      // Uses Playwright’s role-based locator for stability across UI frameworks.
      await this.continueButton.first().click();

      // -----------------------------------------------------------------------
      // STEP 5: Wait for the next page's DOM to load
      // -----------------------------------------------------------------------
      // Light DOM wait ensures minimal delay before next step (e.g., OTP page).
      await page.waitForLoadState('domcontentloaded');

      // -----------------------------------------------------------------------
      // STEP 6: Final Success Log
      // -----------------------------------------------------------------------
      console.log('✅ Email submitted successfully and Continue clicked.');
    } catch (error) {
      // -----------------------------------------------------------------------
      // STEP 6 (Alternative): Final Failure Log
      // -----------------------------------------------------------------------
      console.error('❌ Failed to submit email or proceed:', error.message);
    }

    // -------------------------------------------------------------------------
    // STEP 7: Return the same page instance
    // -------------------------------------------------------------------------
    // Allows fluent chaining — the next POM (e.g., SubmitOtp) continues on this tab.
    return page;
  }
}
