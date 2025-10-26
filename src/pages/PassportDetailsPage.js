// PassportDetailsPage - Handles passport information entry
export default class PassportDetails {
  constructor(page) {
    this.page = page;
  }

  // Generate and fill random passport number (1 letter + 7 digits)
  async fillPassportNumber() {
    const num = String.fromCharCode(65 + Math.floor(Math.random() * 26)) + 
                 Array.from({ length: 7 }, () => Math.floor(Math.random() * 10)).join('');
    
    await this.page.locator('#Input_PassportNumber').fill(num);
    console.log(`[PassportDetails] Filled passport: ${num}`);
    return num;
  }

  // Select random future expiry date (2026-2029)
  async fillPassportExpiryDate() {
    await this.page.locator('input[placeholder="DD/MM/YYYY"]').click({ force: true });
    
    const year = 2026 + Math.floor(Math.random() * 4);
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;

    await this.page.locator('.date-picker__month-year').click({ force: true });
    await this.page.locator(`button[data-year="${year}"]`).click({ force: true });
    await this.page.locator(`button[data-month="${month - 1}"]`).click({ force: true });
    await this.page.locator(`button:has-text("${day}")`).first().click({ force: true });
    
    const ok = this.page.locator('button:has-text("OK"), button:has-text("Done")').first();
    if (await ok.count()) await ok.click({ force: true });
  }

  // Select passport issuing country from dropdown
  async fillPassportCountry(country = 'Ireland') {
    await this.page.locator('[data-testid="PassportCountryValue"]').click({ force: true });
    await this.page.waitForTimeout(200);
    await this.page.getByText(new RegExp(country, 'i')).first().click({ force: true });
  }

  // Click confirm button to proceed to next step
  async clickConfirm() {
    await this.page.locator('[data-testid="ConfirmPassportButton"]').click({ force: true });
  }
}
