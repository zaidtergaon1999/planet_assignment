// pages/SubmitEmailPage.js
// Minimal POM for opening portal and submitting an email (optimized per your requirements).

export default class SubmitEmail {
  /**
   * @param {import('playwright').Page} page
   * @param {string} portalUrl
   */
  constructor(page, portalUrl = process.env.PORTAL_URL) {
    this.page = page;
    this.portalUrl = portalUrl;
    // Flexible but concise email selector
    this.emailSelector = 'input[type="email"], input[name*=email], input[placeholder*="Email"]';
    // Explicit: button labelled "Continue" (case-insensitive)
    this.continueButton = this.page.getByRole('button', { name: /^Continue$/i });
  }

  /**
   * Open the portal and submit the email.
   * - No networkidle waits
   * - Requires the "Continue" button to exist and be clicked
   *
   * @param {string} address
   * @param {{ timeout?: number }} opts
   * @returns {import('playwright').Page}
   */
  async openAndSubmitEmail(address, { timeout = 30000 } = {}) {
    const targetUrl = this.portalUrl || '/';
    if (!this.portalUrl) console.warn('[SubmitEmailPage] portalUrl not provided — falling back to baseURL /');

    // Ensure the page's DOM is ready enough to find the email input.
    await this.page.goto(targetUrl, { waitUntil: 'domcontentloaded' });

    // Wait for visible email input before interacting
    await this.page.locator(this.emailSelector).waitFor({ state: 'visible', timeout });

    // Fill the email
    await this.page.locator(this.emailSelector).fill(address);

    // Click the explicit Continue button (assumes it must be clicked)
    await this.continueButton.first().click();

    // Wait for the next page's DOM to load (lightweight)
    await this.page.waitForLoadState('domcontentloaded');

    // Return the page so the next POM (OTP) can continue on the same tab
    return this.page;
  }
}
