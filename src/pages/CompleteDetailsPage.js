// CompleteDetailsPage - Handles personal information form
import fs from 'fs';
import path from 'path';

export default class CompleteDetails {
  constructor(page) {
    this.page = page;
  }

  // Utility to pick random item from array
  pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Fill first name and surname from test data
  async fillNames() {
    const d = JSON.parse(fs.readFileSync('./src/data/data.json', 'utf8'));
    const firstName = this.pick(d.givenNames);
    const surname = this.pick(d.surnames);
    await this.page.fill('#Input_GivenNames', firstName);
    await this.page.fill('#Input_Surname', surname);
    console.log(`[CompleteDetails] Names: ${firstName} ${surname}`);
    return firstName;
  }

  // Generate random DOB ensuring user is 16+ years old
  async fillDateOfBirth() {
    await this.page.locator('input[placeholder="DD/MM/YYYY"]').click({ force: true });

    const year = Math.floor(Math.random() * (new Date().getFullYear() - 16 - 1950 + 1)) + 1950;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;

    await this.page.locator('.date-picker__month-year').click({ force: true });
    await this.page.locator(`button[data-year="${year}"]`).click({ force: true });
    await this.page.locator(`button[data-month="${month - 1}"]`).click({ force: true });
    await this.page.locator(`button:has-text("${day}")`).first().click({ force: true });

    const ok = this.page.locator('button:has-text("OK"), button:has-text("Done")').first();
    if (await ok.count()) await ok.click({ force: true });
  }

  // Select nationality from custom dropdown
  async selectNationality(country = 'Ireland') {
    await this.page.locator('[data-testid="NationalityValue"]').click({ force: true });
    await this.page.getByText(country, { exact: false }).first().click({ force: true });
  }

  // Select permanent residence country from custom dropdown
  async selectPermanentResidence(country = 'Ireland') {
    await this.page.locator('[data-testid="CountryOrRegionValue"]').click({ force: true });
    await this.page.waitForSelector('.custom-dropdown-list__overlay, .custom-dropdown-list__dropdown', { timeout: 2000 }).catch(() => {});

    const opt = this.page.locator('.custom-dropdown-list__overlay, .custom-dropdown-list__dropdown').locator(`text=${country}`).first();
    if (await opt.count()) await opt.click({ force: true });
    else await this.page.getByText(country, { exact: false }).first().click({ force: true }).catch(() => {});
  }

  // Fill all address fields with random test data
  async fillAddressFields() {
    const d = JSON.parse(fs.readFileSync('./src/data/data.json', 'utf8'));
    await this.page.fill('#Input_AddressLine1', this.pick(d.addresses1));
    await this.page.fill('#Input_AddressLine2', this.pick(d.addresses2));
    await this.page.fill('#Input_Postcode', this.pick(d.postcodes));
    await this.page.fill('#Input_City', this.pick(d.cities));
    await this.page.fill('#Input_State', this.pick(d.states));
  }

  // Select country code and fill random 8-digit phone number
  async fillMobileNumber(country = 'Ireland') {
    await this.page.locator('.phone-number-input__flag').click({ force: true });
    const search = this.page.locator('[data-testid="MobileNumberSearchInput"]').first();
    await search.waitFor({ state: 'visible', timeout: 3000 });
    await search.fill(country);
    await search.press('Enter');
    const digits = String(Math.floor(10000000 + Math.random() * 90000000));
    await this.page.locator('[data-testid="MobileNumberInput"]').type(digits);
  }

  // Save form and wait for navigation (max 10s)
  async clickSave() {
    await this.page.locator('[data-testid="SaveButton"]').click({ force: true });
    await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  }
}
