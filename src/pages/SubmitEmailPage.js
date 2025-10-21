// pages/SubmitEmailPage.js
// POM for the first page: open portal and submit generated email address.

// Export a Page Object Model class that encapsulates interactions with the "submit email" screen.
// The class is intentionally defensive about selectors so it works across slightly different UIs.
export default class SubmitEmail {
  /**
   * Constructor
   *
   * @param {import('playwright').Page} page - Playwright page instance used to drive the browser.
   * @param {string} portalUrl - The base URL of the Shopper Portal to open when submitting the email.
   *
   * The constructor saves the page and portalUrl for later use and defines commonly-used selectors:
   * - `emailSelector` is a flexible selector matching common email input patterns.
   * - `continueRole` is a role-based locator for buttons labelled "Continue" or "Next".
   */
  constructor(page, portalUrl = process.env.PORTAL_URL) {
    this.page = page;
    this.portalUrl = portalUrl;
    // primary email selectors - kept flexible to match different markup variants
    this.emailSelector = 'input[type="email"], input[name*=email], input[placeholder*="Email"]';
    // Role-based locator for the typical continue/next button used to submit the email form
    this.continueRole = this.page.getByRole('button', { name: /Continue|Next/i });
  }

  // waitNetworkIdle
  // Small helper to wait until the page's network activity subsides.
  // Use before or after important UI transitions to reduce flakiness from in-flight requests.
  async waitNetworkIdle() {
    // call before significant page interactions
    await this.page.waitForLoadState('networkidle').catch(()=>{});
  }

  /**
   * openAndSubmitEmail
   *
   * High-level flow:
   *  1. Navigate to the portal URL and wait until network is quiet.
   *  2. Wait for an email input to become visible (uses a flexible selector).
   *  3. Fill the generated `address` into the input.
   *  4. Attempt to submit by clicking a role-based Continue/Next button if present;
   *     otherwise simulate pressing Enter in the email field.
   *  5. Wait for networkidle again, then return the Playwright page instance for chaining (e.g. OTP step).
   *
   * This function intentionally leaves the page open (does not close the browser) because the next
   * step (OTP polling/fill) will continue on the same page.
   *
   * @param {string} address - Email address to type into the form.
   * @param {Object} opts
   * @param {number} opts.timeout - How long to wait for the email input to appear (ms).
   * @returns {import('playwright').Page} - The Playwright page after submission (for further steps).
   */
  async openAndSubmitEmail(address, { timeout = 50000 } = {}) {
    // 1) Navigate to the Shopper Portal and wait for network to settle
    const targetUrl = this.portalUrl || '/'; // use baseURL from playwright config when portalUrl not provided
    if (!this.portalUrl) console.warn('[SubmitEmailPage] portalUrl not provided — falling back to baseURL /');
    await this.page.goto(targetUrl, { waitUntil: 'networkidle' });    await this.waitNetworkIdle();

    // 2) Ensure the email input is visible before interacting
    await this.page.locator(this.emailSelector).waitFor({ state: 'visible', timeout });
    // 3) Fill the email address into the input
    await this.page.locator(this.emailSelector).fill(address);
    console.log('[SubmitEmailPage] Filled email:', address);

    // 4) Prefer clicking a role-based Continue/Next button if present, otherwise press Enter in the input
    if (await this.continueRole.count() > 0) {
      await this.continueRole.first().click().catch(()=>{});
    } else {
      // Some forms submit on Enter — this is the fallback
      await this.page.locator(this.emailSelector).press('Enter').catch(()=>{});
    }
    console.log('[SubmitEmailPage] Submitted email and left page open.');

    // 5) Wait briefly for navigation or async processing, then return the page for the next flow (OTP)
    await this.page.waitForLoadState('networkidle').catch(()=>{});
    return this.page;
  }
}
