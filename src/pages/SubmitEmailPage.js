// SubmitEmailPage - Opens portal and submits email address
export default class SubmitEmail {
  constructor(page, portalUrl = process.env.PORTAL_URL) {
    this.page = page;
    this.portalUrl = portalUrl;
    this.emailSelector = 'input[type="email"], input[name*=email], input[placeholder*="Email"]';
    this.continueButton = page.getByRole('button', { name: /^Continue$/i });
  }

  // Navigate to portal, fill email, click Continue
  async openAndSubmitEmail(address, { timeout = 30000 } = {}) {
    try {
      await this.page.goto(this.portalUrl || '/', { waitUntil: 'domcontentloaded' });
      await this.page.locator(this.emailSelector).waitFor({ state: 'visible', timeout });
      await this.page.locator(this.emailSelector).fill(address);
      await this.continueButton.first().click();
      await this.page.waitForLoadState('domcontentloaded');
      console.log('✅ Email submitted successfully and Continue clicked.');
    } catch (error) {
      console.error('❌ Failed to submit email:', error.message);
    }
    return this.page;
  }
}
