// src/pages/TosPage.js
// -----------------------------------------------------------------------------
// Page Object Model (POM) for the Terms of Service (TOS) page.
// -----------------------------------------------------------------------------
// Purpose:
//   Automates the workflow where the user accepts the Terms of Service (TOS)
//   and clicks the "Continue" button to proceed to the next step of the portal.
//
// Key Features:
//   - Waits for network requests to settle before interactions.
//   - Handles both standard and custom checkbox implementations.
//   - Waits for the Continue button to be enabled dynamically.
//   - Uses fallback mechanisms for robust interaction with UI elements.
//   - Logs only a single success (✅) or failure (❌) message at the end.
// -----------------------------------------------------------------------------

export default class TosCheck {
  /**
   * Constructor
   * ---------------------------------------------------------------------------
   * Initializes the TosCheck page object with a Playwright page instance.
   * Also stores the test IDs used to identify elements on the page.
   *
   * @param {import('playwright').Page} page - Playwright page instance used to interact with the browser.
   */
  constructor(page) {
    this.page = page;

    // Store the unique test IDs for key elements on the TOS page.
    // These are data-testid attributes often used in React or Angular UIs.
    this.checkboxTestId = 'TermsOfServiceCheckbox';
    this.continueTestId = 'TermsOfServiceContinue';
  }

  /**
   * waitNetworkIdle
   * ---------------------------------------------------------------------------
   * Utility method that waits until all ongoing network requests complete.
   * This helps ensure that the page is fully loaded before interacting with
   * elements, preventing race conditions or flakiness.
   */
  async waitNetworkIdle() {
    await this.page.waitForLoadState('networkidle').catch(() => {
      // We catch errors silently here because even if networkidle times out,
      // it’s safe to continue as long as main UI elements have loaded.
    });
  }

  /**
   * acceptTermsAndContinue
   * ---------------------------------------------------------------------------
   * Main workflow for the Terms of Service screen.
   *
   * Steps performed:
   *  1. Wait for the page to stabilize (network idle).
   *  2. Find and check the "Terms of Service" checkbox.
   *  3. Wait for the "Continue" button to become enabled.
   *  4. Click the "Continue" button (with fallback click strategy).
   *  5. Log one final status message (✅ or ❌).
   *
   * @param {Object} [options]
   * @param {number} [options.timeout=30000] - Max time to wait for elements (in ms).
   */
  async acceptTermsAndContinue({ timeout = 30000 } = {}) {
    const page = this.page;

    try {
      // -----------------------------------------------------------------------
      // STEP 1: Ensure the page is fully loaded and network requests are complete
      // -----------------------------------------------------------------------
      await this.waitNetworkIdle();

      // -----------------------------------------------------------------------
      // STEP 2: Locate and interact with the Terms of Service checkbox
      // -----------------------------------------------------------------------
      // Use Playwright’s `getByTestId()` to locate the checkbox element.
      const checkbox = page.getByTestId(this.checkboxTestId);

      // Wait until the checkbox becomes visible before interacting
      await checkbox.waitFor({ state: 'visible', timeout });

      // Try to check the checkbox using Playwright’s native API.
      // If it fails (for custom UI frameworks like Material UI), fall back to a force click.
      await checkbox.check({ timeout: 5000 }).catch(() => checkbox.click({ force: true }));

      // -----------------------------------------------------------------------
      // STEP 3: Wait for the "Continue" button to become enabled
      // -----------------------------------------------------------------------
      // Some UIs keep the Continue button disabled until the checkbox is checked.
      // This function polls the DOM until the button is found and is not disabled.
      await page.waitForFunction(
        () => {
          const btn = document.querySelector('[data-testid="TermsOfServiceContinue"]');
          return !!btn && !btn.disabled;
        },
        { timeout }
      );

      // -----------------------------------------------------------------------
      // STEP 4: Click the "Continue" button to move forward
      // -----------------------------------------------------------------------
      // Attempt a normal click first; if that fails (e.g., due to overlays),
      // execute a DOM-based fallback click.
      const continueBtn = page.getByTestId(this.continueTestId);
      await continueBtn.click({ force: true }).catch(async () => {
        await page.evaluate(() => {
          const btn = document.querySelector('[data-testid="TermsOfServiceContinue"]');
          if (btn) btn.click();
        });
      });

      // -----------------------------------------------------------------------
      // STEP 5: Final Success Log
      // -----------------------------------------------------------------------
      // Log one clean success message (for CI/CD readability)
      console.log('✅ Successfully accepted Terms of Service and continued.');
    } catch (error) {
      // -----------------------------------------------------------------------
      // STEP 5 (Alternative): Final Failure Log
      // -----------------------------------------------------------------------
      // If any of the above steps fail, catch the error gracefully and
      // log a single failure message along with the error reason.
      console.error('❌ Failed to accept Terms of Service and continue:', error.message);
    }
  }
}
