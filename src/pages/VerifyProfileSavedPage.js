// pages/VerifyProfileSavedToast.js
// ----------------------------------------------------------------------
// Page Object Model (POM) that verifies whether the "Profile details saved"
// confirmation toast appears after a user saves their profile.
// ----------------------------------------------------------------------

export default class VerifyProfileSavedToast {
  /**
   * Constructor - called when creating an instance of this class.
   * @param {import('playwright').Page} page - The Playwright Page instance 
   * that represents the browser tab. It allows us to interact with the UI.
   */
  constructor(page) {
    // Store the page instance so all methods can use it for UI interactions
    this.page = page;
  }

  /**
   * Verifies if the "Profile details saved" toast notification appears.
   * @param {number} timeout - How long to wait (in milliseconds) before giving up. Default: 10 seconds.
   * @returns {Promise<boolean>} Returns true if toast is found; false otherwise.
   */
  async verifyProfileSaved(timeout = 10000) {
    // Define a locator that targets any visible element containing the exact text "Profile details saved"
    const toast = this.page.locator('text=Profile details saved');

    try {
      // Wait until the toast becomes visible within the given timeout.
      // If found before timeout, Playwright continues without throwing an error.
      await toast.waitFor({ state: 'visible', timeout });

      // Log success message for debugging purposes
      console.log('✅ Profile details saved');

      // Wait an additional 3 seconds to ensure the UI settles
      // (useful when the next step depends on the toast disappearing or another animation finishing)
      await this.page.waitForTimeout(3000);

      // Return true to indicate verification was successful
      return true;
    } catch {
      // If the locator doesn’t appear within the timeout, Playwright throws an error
      // This catch block handles that gracefully
      console.warn('⚠️ Profile save confirmation not found');

      // Return false to indicate the toast was not found
      return false;
    }
  }
}
