export default class PassportDetails {
  constructor(page) { this.page = page; }

  // 1) passport number: 1 uppercase letter + 7 digits
  async fillPassportNumber() {
    const num = String.fromCharCode(65 + Math.floor(Math.random()*26))
                + Array.from({length:7},()=>Math.floor(Math.random()*10)).join('');
    const el = this.page.locator('#Input_PassportNumber, [data-testid="PassportNumberInput"]').first();
    await el.fill(num);
    this.chosenPassportNumber = num;
    return num;
  }

  // 2) expiry date: safe random day (1..28), format DD/MM/YYYY (two years in future)
  async fillPassportExpiryDate() {
  const page = this.page;
  // open the date picker
  await page.locator('input[placeholder="DD/MM/YYYY"]').click({ force: true });
  await page.waitForSelector('.date-picker, .date-picker__month-year');

  // generate random day/month/year
  const year = 2026 + Math.floor(Math.random() * 4); // 2026–2029
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1;

  // open year & month dropdowns (if present) and pick random values
  await page.locator('.date-picker__month-year, .datepicker__month-year').click({ force: true }).catch(()=>{});
  await page.locator(`button[data-year="${year}"]`).click({ force: true }).catch(()=>{});
  await page.locator(`button[data-month="${month - 1}"]`).click({ force: true }).catch(()=>{});

  // click the random day
  await page.locator(`button:has-text("${day}")`).first().click({ force: true }).catch(()=>{});

  // confirm if needed
  const ok = page.locator('button:has-text("OK"), button:has-text("Done")').first();
  if (await ok.count()) await ok.click({ force: true });

  this.chosenExpiry = `${String(day).padStart(2,'0')}/${String(month).padStart(2,'0')}/${year}`;
  return this.chosenExpiry;
}



  // 3) country: open the dropdown then click the first visible match (falls back silently if not found)
  async fillPassportCountry(country = 'Ireland') {
    this.selectedCountry = country;
    const trigger = this.page.locator('[data-testid="PassportCountryValue"], [data-testid="PassportCountryLabel"], [data-testid="PassportCountry"]').first();
    if (await trigger.count()) await trigger.click({ force: true });
    await this.page.waitForTimeout(200);
    // try to click an option that matches the country text
    const opt = this.page.getByText(new RegExp(country, 'i')).first();
    if (await opt.count()) await opt.click({ force: true }).catch(()=>{});
    return this.selectedCountry;
  }

  // 4) confirm button
  async clickConfirm() {
    await this.page.locator('[data-testid="ConfirmPassportButton"], button:has-text("Confirm")').first().click({ force: true });
  }
}
