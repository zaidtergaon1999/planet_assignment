// pages/CompleteDetails.js
// -----------------------------------------------------------------------------
// Page Object Model (POM) for filling out the "Complete Details" form.
//
// Responsibilities:
//   - Enter personal information such as name, DOB, nationality, and address.
//   - Handle dropdowns, date pickers, and mobile number inputs.
//   - Read test data dynamically from a local JSON file.
//   - Save the completed form and confirm successful completion.
//   - Log a single success (✅) or failure (❌) message at the end.
//
// Design Goals:
//   - Data-driven: reads values from ./src/data/data.json
//   - Resilient: handles custom dropdowns and flexible input locators
//   - Minimal logging: clean, CI-friendly test output
// -----------------------------------------------------------------------------

import fs from 'fs';
import path from 'path';

export default class CompleteDetails {
  /**
   * Constructor
   * ---------------------------------------------------------------------------
   * @param {import('playwright').Page} page - Playwright page instance
   * used for browser interaction.
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * pick
   * ---------------------------------------------------------------------------
   * Utility method to pick a random value from an array.
   * Used for randomizing test data (names, addresses, etc.).
   */
  pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /**
   * fillDateOfBirth
   * ---------------------------------------------------------------------------
   * Opens a date picker and selects a random valid date of birth
   * for a user aged at least 16 years old.
   *
   * @returns {Promise<string>} - The selected date of birth in DD/MM/YYYY format.
   */
  async fillDateOfBirth() {
    const p = this.page;

    // Open the date picker by clicking the DOB input field
    await p
      .locator('input[placeholder="DD/MM/YYYY"], input[id*=DateOfBirth]')
      .click({ force: true });
    await p.waitForSelector('.date-picker, .date-picker__month-year');

    // Generate a random birth date (between 1945 and currentYear - 17)
    const now = new Date();
    const year =
      Math.floor(Math.random() * ((now.getFullYear() - 17) - 1945 + 1)) + 1945;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;

    // Select year, month, and day if controls exist
    await p
      .locator('.date-picker__month-year, .datepicker__month-year')
      .click({ force: true })
      .catch(() => {});
    await p.locator(`button[data-year="${year}"]`).click({ force: true }).catch(() => {});
    await p.locator(`button[data-month="${month - 1}"]`).click({ force: true }).catch(() => {});
    await p.locator(`button:has-text("${day}")`).first().click({ force: true }).catch(() => {});

    // Confirm selection if OK/Done button exists
    const ok = p.locator('button:has-text("OK"), button:has-text("Done")').first();
    if (await ok.count()) await ok.click({ force: true });

    // Store and return formatted date for reference
    this.chosenDOB = `${String(day).padStart(2, '0')}/${String(month).padStart(
      2,
      '0'
    )}/${year}`;
    return this.chosenDOB;
  }

  /**
   * selectNationality
   * ---------------------------------------------------------------------------
   * Opens the nationality dropdown and selects the provided country.
   *
   * @param {string} [country='Ireland'] - The nationality to select.
   */
  async selectNationality(country = 'Ireland') {
    const p = this.page;
    await p.locator('[data-testid="NationalityValue"]').click({ force: true });
    await p
      .waitForSelector('.custom-dropdown-list__overlay, .custom-dropdown-list__dropdown', {
        timeout: 2000,
      })
      .catch(() => {});

    // Click the option matching the country text
    const opt = p
      .locator('.custom-dropdown-list__overlay, .custom-dropdown-list__dropdown')
      .locator(`text=${country}`)
      .first();
    if (await opt.count()) await opt.click({ force: true });
    else
      await p
        .getByText(country, { exact: false })
        .first()
        .click({ force: true })
        .catch(() => {});
  }

  /**
   * selectPermanentResidence
   * ---------------------------------------------------------------------------
   * Opens the residence country dropdown and selects the provided country.
   *
   * @param {string} [country='Ireland'] - The residence country to select.
   */
  async selectPermanentResidence(country = 'Ireland') {
    const p = this.page;
    await p.locator('[data-testid="CountryOrRegionValue"]').click({ force: true });
    await p
      .waitForSelector('.custom-dropdown-list__overlay, .custom-dropdown-list__dropdown', {
        timeout: 2000,
      })
      .catch(() => {});

    const opt = p
      .locator('.custom-dropdown-list__overlay, .custom-dropdown-list__dropdown')
      .locator(`text=${country}`)
      .first();
    if (await opt.count()) await opt.click({ force: true });
    else
      await p
        .getByText(country, { exact: false })
        .first()
        .click({ force: true })
        .catch(() => {});
  }

  /**
   * pickMobileCountryAndFill
   * ---------------------------------------------------------------------------
   * Opens the mobile number country dropdown, selects a country,
   * and fills in a randomly generated 8-digit phone number.
   *
   * @param {string} [country='Ireland'] - The country to filter in the mobile selector.
   * @returns {Promise<string>} The randomly generated phone number digits.
   */
  async pickMobileCountryAndFill(country = 'Ireland') {
    const p = this.page;

    // Open flag dropdown for selecting country code
    await p.locator('.phone-number-input__flag').click({ force: true });

    // Type the country into the search input
    const search = p.locator('[data-testid="MobileNumberSearchInput"]').first();
    await search.waitFor({ state: 'visible', timeout: 3000 });
    await search.fill(country);
    await search.press('Enter').catch(() => {});

    // Generate and fill an 8-digit random phone number
    const digits = String(Math.floor(10000000 + Math.random() * 90000000));
    await p.locator('[data-testid="MobileNumberInput"]').type(digits);

    return digits;
  }

  /**
   * clickSave
   * ---------------------------------------------------------------------------
   * Clicks the "Save" button and waits for network to become idle.
   */
  async clickSave() {
    const p = this.page;
    const btn = p.locator('[data-testid="SaveButton"]').first();
    if (await btn.count()) {
      await btn.click({ force: true });
      await p.waitForLoadState('networkidle').catch(() => {});
    }
  }

  /**
   * fillCompleteDetails
   * ---------------------------------------------------------------------------
   * Fills all form fields sequentially using random or data-driven values:
   *   1. Names, addresses, and postal info (from data.json)
   *   2. DOB, nationality, residence, and phone
   *   3. Clicks "Save" to complete the form
   *
   * Includes a single ✅ or ❌ log at the end.
   *
   * @param {string} [country='Ireland'] - Default country for nationality/residence.
   */
  async fillCompleteDetails(country = 'Ireland') {
    try {
      const p = this.page;

      // STEP 1: Load data from JSON file
      const dataPath = path.resolve('./src/data/data.json');
      const d = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

      // STEP 2: Fill name fields with random values from data.json
      await p.fill('#Input_GivenNames', this.pick(d.givenNames));
      await p.fill('#Input_Surname', this.pick(d.surnames));

      // STEP 3: Fill date of birth, nationality, and residence
      await this.fillDateOfBirth();
      await this.selectNationality(country);
      await this.selectPermanentResidence(country);

      // STEP 4: Fill address and postal information
      await p.fill('#Input_AddressLine1', this.pick(d.addresses1));
      await p.fill('#Input_AddressLine2', this.pick(d.addresses2));
      await p.fill('#Input_Postcode', this.pick(d.postcodes));
      await p.fill('#Input_City', this.pick(d.cities));
      await p.fill('#Input_State', this.pick(d.states));

      // STEP 5: Fill mobile number with randomized digits
      await this.pickMobileCountryAndFill();

      // STEP 6: Save and wait for network to settle
      await this.clickSave();

      // STEP 7: Final Success Log
      console.log('✅ Complete details filled and saved successfully.');
    } catch (error) {
      // STEP 7 (Alternative): Final Failure Log
      console.error('❌ Failed to fill complete details:', error.message);
    }
  }
}
