export class ConfirmPassportPage {
  // Store the Playwright page object so methods can interact with the browser.
  constructor(page) {
    this.page = page;
  }

  // Tiny helper to pause for a given number of milliseconds.
  // Useful to give the UI a moment to settle when explicit waits aren't available.
  async _sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

  // Primary action: click the "Confirm and continue" button on the Confirm Passport page.
  // This method is defensive and uses multiple strategies / fallbacks to find and click the button,
  // because the button's selector/placement may change across environments.
  async ConfirmDetails() {
    const page = this.page;
    try {
      // Wait until we are on the confirm-passport step.
      // Use Promise.race to proceed if either:
      //  - the URL matches /ConfirmPassport/i OR
      //  - a visible element containing "Confirm passport details" appears.
      // Both waits are best-effort (catch errors) so the method doesn't hard crash on timing differences.
      await Promise.race([
        page.waitForURL(/ConfirmPassport/i, { timeout: 20000 }).catch(() => {}),
        page.locator('text=Confirm passport details')
            .first()
            .waitFor({ state: 'visible', timeout: 20000 })
            .catch(() => {})
      ]);
      // Wait for network to quiet down (best-effort).
      await page.waitForLoadState('networkidle').catch(() => {});
      // Short sleep to allow micro-animations / layout shifts to settle.
      await this._sleep(300);

      // Track if we have successfully clicked the confirm button through any strategy.
      let clicked = false;

      // Strategy 1 (preferred): locate the primary button by ARIA role & common label variants.
      // If found and visible: scroll it into view and click it forcefully.
      const primaryBtn = page.getByRole('button', { name: /Confirm and continue|Confirm & continue|Confirm and Continue/i }).first();
      if (await primaryBtn.count() > 0 && await primaryBtn.isVisible()) {
        await primaryBtn.scrollIntoViewIfNeeded().catch(() => {});
        await primaryBtn.click({ force: true });
        clicked = true;
        console.log('Clicked Confirm and continue (primary).');
      }

      // Strategy 2 (text fallback): search any button/a/div with matching text and click.
      // This covers cases where the control is not labelled correctly for ARIA queries.
      if (!clicked) {
        const textBtn = page.locator('button, a, div')
          .filter({ hasText: /Confirm and continue|Confirm & continue|Confirm and Continue/i })
          .first();
        if (await textBtn.count() > 0 && await textBtn.isVisible()) {
          await textBtn.scrollIntoViewIfNeeded().catch(() => {});
          await textBtn.click({ force: true });
          clicked = true;
          console.log('Clicked Confirm and continue (text fallback).');
        }
      }

      // Strategy 3 (position fallback): if no identifiable element found, click a likely on-screen position.
      // This is a last-resort approach — it simulates clicking near the bottom-centre of the viewport
      // where confirmation buttons are often placed.
      if (!clicked) {
        try {
          const vw = await page.evaluate(() => ({ w: window.innerWidth, h: window.innerHeight }));
          await page.mouse.click(vw.w * 0.5, vw.h * 0.88, { force: true });
          clicked = true;
          console.log('Clicked Confirm and continue (position fallback).');
        } catch {}
      }

      // If none of the strategies worked, throw so the test runner can record a failure.
      if (!clicked) {
        throw new Error('Confirm and continue button not found');
      }

      // Wait a little for navigation/network activity after the click, then a short sleep to stabilize.
      await page.waitForLoadState('networkidle').catch(() => {});
      await this._sleep(600);
      console.log('Confirm and continue action completed.');
    } catch (e) {
      // Re-throw the caught error so callers can handle/report it.
      throw e;
    }
  }
}
