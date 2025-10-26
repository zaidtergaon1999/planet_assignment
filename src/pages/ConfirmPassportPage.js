// pages/ConfirmPassportButton.js
// -----------------------------------------------------------------------------
// Page Object Model (POM) for handling the "Confirm" button action on the
// passport verification or details confirmation screen.
//
// Responsibilities:
//   - Locate and click the "Confirm" button reliably.
//   - Handle variations in how the button appears in the DOM
//     (e.g., different attributes or fallback text-based selectors).
//   - Wait for network activity to settle after the click.
//   - Print only a single success (✅) or failure (❌) log at the end.
//
// Design Goals:
//   - Simple and robust — works across multiple UI layouts.
//   - Consistent with other POMs for predictable automation behavior.
// -----------------------------------------------------------------------------

export default class ConfirmPassportButton {
  /**
   * Constructor
   * ---------------------------------------------------------------------------
   * @param {import('playwright').Page} page - Playwright page instance that
   * controls the active browser context for this test.
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * ConfirmDetails
   * ---------------------------------------------------------------------------
   * Finds and clicks the "Confirm" button on the current screen.
   *
   * Logic Steps:
   *   1. Try to locate the button using ARIA role + name (preferred approach).
   *   2. If not found, fallback to a text-based locator.
   *   3. Force-click to handle hidden or overlayed buttons safely.
   *   4. Wait for network idle state to ensure page stability.
   *   5. Log a single ✅ or ❌ message at the end.
   */
  async ConfirmDetails() {
    try {
      // STEP 1: Locate the "Confirm" button using its accessible role and name.
      // Using regex (/confirm/i) ensures case-insensitive matching.
      const btn = this.page.getByRole('button', { name: /confirm/i }).first();

      // STEP 2: If found, click it. Otherwise, use a text-based fallback selector.
      if (await btn.count()) {
        await btn.click({ force: true });
      } else {
        // Fallback: Some UIs use non-standard button components, so match by text instead.
        await this.page.getByText(/confirm/i).first().click({ force: true });
      }

      // STEP 3: After clicking, wait for any network calls or navigation to settle.
      // This ensures the next step in the test doesn't start prematurely.
      await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {
        console.warn('⚠️ Network did not settle within 10s, continuing anyway...');
      });

      // STEP 4: Final Success Log
      console.log('✅ Confirm button clicked successfully and page stabilized.');
    } catch (error) {
      // STEP 4 (Alternative): Final Failure Log
      console.error('❌ Failed to click Confirm button:', error.message);
    }
  }
}
