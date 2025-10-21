// pages/VerifyProfileSavedPage.js
// Page Object Model (POM) that verifies the successful saving of user profile details.
// Specifically, it checks for a toast or confirmation message that says "Profile details saved"
// and waits for a short period before continuing to ensure stability in subsequent steps.

export default class VerifyProfileSavedToast {
  /**
   * Constructor
   * @param {import('playwright').Page} page - Playwright page instance used to interact with the browser.
   *
   * Stores the page object reference so that this class can perform actions
   * and checks on the same browser tab where the test is running.
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * verifyProfileSaved
   *
   * Purpose:
   *  - Checks if the text or toast "Profile details saved" appears on the page,
   *    which indicates that the profile update was successful.
   *  - Once visible, it waits for 10 seconds to allow any background processes,
   *    animations, or subsequent auto-navigation to complete safely.
   *  - Returns `true` if the confirmation text is found within the timeout window,
   *    otherwise returns `false`.
   *
   * This function is designed for use at the end of the profile update flow to confirm success.
   *
   * @param {number} timeout - Maximum time (in milliseconds) to wait for the toast/text to appear. Default is 10000 ms (10s).
   * @returns {Promise<boolean>} - Resolves to true if the text appears within the timeout, false otherwise.
   */
  async verifyProfileSaved(timeout = 10000) {
    const page = this.page;
    try {
      // Locate the success toast/message that indicates profile details have been saved
      const toast = page.locator('text=Profile details saved');

      // Wait for the toast message to become visible within the specified timeout
      await toast.waitFor({ state: 'visible', timeout });

      // Log to console for debug visibility
      console.log('Profile details saved toast visible — waiting 10 seconds...');

      // Wait for 10 seconds to give time for UI stabilization or redirection
      await page.waitForTimeout(10000);

      // Return true to signal success (toast appeared and wait completed)
      return true;
    } catch (e) {
      // If the toast never appeared or a timeout occurred, return false (no error thrown)
      return false;
    }
  }
}
