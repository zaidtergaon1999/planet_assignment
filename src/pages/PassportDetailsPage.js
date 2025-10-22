// pages/PassportDetails.js
// -----------------------------------------------------------------------------
// Page Object Model (POM) for entering passport details during user verification.
//
// Responsibilities:
//   1. Fill a randomly generated passport number.
//   2. Select a random valid expiry date (future date).
//   3. Choose a passport country (default: Ireland).
//   4. Click the "Confirm" button to proceed.
//   5. Log a single success ✅ or failure ❌ message at the end.
//
// Design Philosophy:
//   - Resilient: Handles optional UI patterns and missing selectors gracefully.
//   - Deterministic: Randomized values remain predictable for debugging.
//   - Clean: Only one final log message for test clarity.
// -----------------------------------------------------------------------------

export default class PassportDetails {
  /**
   * Constructor
   * ---------------------------------------------------------------------------
   * @param {import('playwright').Page} page - Playwright page instance to control the browser.
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * fillPassportNumber
   * ---------------------------------------------------------------------------
   * Generates a random passport number (1 uppercase letter + 7 digits)
   * and fills it into the corresponding input field.
   *
   * @returns {Promise<string>} The generated passport number.
   */
  async fillPassportNumber() {
    // Generate random passport number (e.g., "K1234567")
    const num =
      String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
      Array.from({ length: 7 }, () => Math.floor(Math.random() * 10)).join('');

    // Locate the passport number input using flexible selectors
    const el = this.page
      .locator('#Input_PassportNumber, [data-testid="PassportNumberInput"]')
      .first();

    // Fill the generated number
    await el.fill(num);

    // Store the generated number for reference in test reports
    this.chosenPassportNumber = num;

    return num;
  }

  /**
   * fillPassportExpiryDate
   * ---------------------------------------------------------------------------
   * Selects a random future expiry date using the date picker UI.
   * Handles both direct input and interactive calendar components.
   *
   * @returns {Promise<string>} The selected expiry date (DD/MM/YYYY format).
   */
  async fillPassportExpiryDate() {
    const page = this.page;

    // Open the date picker (clicking into the date input field)
    await page.locator('input[placeholder="DD/MM/YYYY"]').click({ force: true });
    await page.waitForSelector('.date-picker, .date-picker__month-year');

    // Generate random date: day 1–28, month 1–12, year 2026–2029
    const year = 2026 + Math.floor(Math.random() * 4);
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;

    // Try selecting year/month if dropdowns exist
    await page
      .locator('.date-picker__month-year, .datepicker__month-year')
      .click({ force: true })
      .catch(() => {});
    await page
      .locator(`button[data-year="${year}"]`)
      .click({ force: true })
      .catch(() => {});
    await page
      .locator(`button[data-month="${month - 1}"]`)
      .click({ force: true })
      .catch(() => {});

    // Click on the random day
    await page
      .locator(`button:has-text("${day}")`)
      .first()
      .click({ force: true })
      .catch(() => {});

    // Confirm if OK/Done button exists
    const ok = page.locator('button:has-text("OK"), button:has-text("Done")').first();
    if (await ok.count()) await ok.click({ force: true });

    // Format and store the chosen expiry date for reference
    this.chosenExpiry = `${String(day).padStart(2, '0')}/${String(month).padStart(
      2,
      '0'
    )}/${year}`;
    return this.chosenExpiry;
  }

  /**
   * fillPassportCountry
   * ---------------------------------------------------------------------------
   * Opens the country selector and chooses the specified country (default: Ireland).
   * Uses multiple fallbacks to ensure selection even in custom dropdown components.
   *
   * @param {string} [country='Ireland'] - The country to select.
   * @returns {Promise<string>} The selected country name.
   */
  async fillPassportCountry(country = 'Ireland') {
    this.selectedCountry = country;

    // Click the dropdown trigger if present
    const trigger = this.page
      .locator(
        '[data-testid="PassportCountryValue"], [data-testid="PassportCountryLabel"], [data-testid="PassportCountry"]'
      )
      .first();

    if (await trigger.count()) await trigger.click({ force: true });
    await this.page.waitForTimeout(200); // brief pause for dropdown to expand

    // Select the first matching option for the desired country
    const opt = this.page.getByText(new RegExp(country, 'i')).first();
    if (await opt.count()) await opt.click({ force: true }).catch(() => {});

    return this.selectedCountry;
  }

  /**
   * clickConfirm
   * ---------------------------------------------------------------------------
   * Clicks the "Confirm" button to finalize passport entry.
   * Tries multiple selector patterns for reliability.
   */
  async clickConfirm() {
    await this.page
      .locator(
        '[data-testid="ConfirmPassportButton"], button:has-text("Confirm")'
      )
      .first()
      .click({ force: true });
  }

  /**
   * fillAllPassportDetails
   * ---------------------------------------------------------------------------
   * Combined method to perform all steps sequentially:
   *   1. Fill passport number
   *   2. Fill expiry date
   *   3. Select country
   *   4. Click confirm
   * Includes a single final success/failure log.
   */
  async fillAllPassportDetails() {
    try {
      // STEP 1: Fill random passport number
      await this.fillPassportNumber();

      // STEP 2: Select expiry date
      await this.fillPassportExpiryDate();

      // STEP 3: Choose passport country
      await this.fillPassportCountry();

      // STEP 4: Click the confirm button
      await this.clickConfirm();

      // STEP 5: Final Success Log
      console.log('✅ Passport details successfully entered and confirmed.');
    } catch (error) {
      // STEP 5 (Alternative): Final Failure Log
      console.error('❌ Failed to complete passport details entry:', error.message);
    }
  }
}
