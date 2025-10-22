export default class PassportButtons {
  constructor(page) { this.page = page; }

  async clickScanPassport() {
    await this.page.getByRole('button', { name: /scan passport/i }).click();
  }

  async clickEnterPassportManually() {
    await this.page.getByRole('button', { name: /enter passport manually/i }).click();
  }
}
