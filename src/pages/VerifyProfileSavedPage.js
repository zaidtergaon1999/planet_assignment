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

  /**
   * Verifies that the user's name appears on the profile/welcome page
   * @param {string} firstName - The expected first name to verify
   * @param {number} timeout - How long to wait (in milliseconds) before giving up. Default: 10 seconds.
   * @returns {Promise<boolean>} Returns true if name is found; false otherwise.
   */
  async verifyUserName(firstName, timeout = 10000) {
    if (!firstName) {
      console.warn('⚠️ No firstName provided for verification');
      return false;
    }

    try {
      // Look for text containing "hello" or "Hi" followed by the firstName
      const nameSelectors = [
        `text=/hello\\s+${firstName}/i`,
        `text=/hi\\s+${firstName}/i`,
        `text=/${firstName}/i`,
      ];

      for (const selector of nameSelectors) {
        const nameElement = this.page.locator(selector).first();
        if (await nameElement.isVisible({ timeout: 2000 }).catch(() => false)) {
          const text = await nameElement.textContent();
          console.log(`✅ User name verified on page: "${text.trim()}"`);
          return true;
        }
      }

      console.warn(`⚠️ User name "${firstName}" not found on page`);
      return false;
    } catch (error) {
      console.warn(`⚠️ Failed to verify user name: ${error.message}`);
      return false;
    }
  }
}
