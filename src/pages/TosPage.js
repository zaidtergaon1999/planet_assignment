// src/pages/TosPage.js
// Page Object Model (POM) for interacting with the Terms of Service (TOS) page.
// This page handles checking the terms acceptance box and clicking "Continue" to proceed.

export default class TosCheck {
  /**
   * Constructor
   * @param {import('playwright').Page} page - Playwright page instance to interact with the browser.
   *
   * Stores the page reference and defines the test IDs for the key elements used on this page:
   *  - Terms of Service checkbox
   *  - Continue button
   */
  constructor(page) {
    this.page = page;
    // Data-testid selectors for the TOS elements (commonly used in React-based portals)
    this.checkboxTestId = 'TermsOfServiceCheckbox';
    this.continueTestId = 'TermsOfServiceContinue';
  }

  // waitNetworkIdle
  // Utility to pause until the network becomes idle.
  // Ensures that background API requests (if any) finish before user interactions.
  async waitNetworkIdle() {
    await this.page.waitForLoadState('networkidle').catch(() => {});
  }

  /**
   * acceptTermsAndContinue
   *
   * Core workflow for the Terms of Service screen:
   *  1. Waits for page readiness (network idle state).
   *  2. Waits for the TOS checkbox to appear, then checks or clicks it.
   *  3. Waits for the "Continue" button to become enabled.
   *  4. Clicks the "Continue" button to proceed to the next page.
   *
   * This method is resilient — it tries multiple interaction strategies in case
   * UI libraries handle checkbox and button elements differently.
   *
   * @param {Object} [options]
   * @param {number} [options.timeout=30000] - Maximum wait time for elements (ms).
   */
  async acceptTermsAndContinue({ timeout = 30000 } = {}) {
    const page = this.page;

    // ---------- Accept TOS ----------
    // Wait for the page to stabilize before interacting
    await this.waitNetworkIdle();

    // Locate the Terms of Service checkbox using its test ID and ensure it’s visible
    const checkbox = page.getByTestId(this.checkboxTestId);
    await checkbox.waitFor({ state: 'visible', timeout });

    // Try to "check" the checkbox via Playwright's built-in method
    // If that fails (e.g. due to a custom UI library), fall back to a force-click
    try {
      await checkbox.check({ timeout: 5000 });
    } catch {
      await checkbox.click({ force: true });
    }

    // Wait until the "Continue" button becomes enabled
    // This ensures that clicking will succeed even if it was initially disabled
    await page.waitForFunction(
      () => {
        const btn = document.querySelector('[data-testid="TermsOfServiceContinue"]');
        return !!btn && !btn.disabled;
      },
      { timeout }
    );

    // ---------- Click Continue ----------
    // Locate the Continue button using test ID
    const continueBtn = page.getByTestId(this.continueTestId);

    // Try clicking the button directly
    // If the normal click fails (e.g., due to overlays or JS control), use DOM-based fallback
    await continueBtn.click({ force: true }).catch(async () => {
      await page.evaluate(() => {
        const btn = document.querySelector('[data-testid="TermsOfServiceContinue"]');
        if (btn) btn.click();
      });
    });
    
    // After clicking Continue, the next step (passport scanning or manual entry)
    // will be triggered by the next page or component in the test flow.
  }
}
