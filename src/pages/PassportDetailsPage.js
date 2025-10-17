// PassportDetailsPage.js
// Playwright Page Object for filling passport details.
// Exports: default class PassportDetailsPage

export default class PassportDetailsPage {
  /**
   * Constructor
   * @param {import('@playwright/test').Page} page - Playwright page instance used to interact with the browser.
   *
   * The page object is stored so all methods can access the current browser tab.
   * selectedCountry is initialized to 'Ireland' as a sensible default used by several helpers.
   */
  constructor(page) {
    this.page = page;
    this.selectedCountry = 'Ireland';
  }

  // Helper: randomPassportNumber
  // Generate a pseudo-random passport number in the format:
  //   1 uppercase letter (A-Z) followed by 7 digits (0-9).
  // This is used to populate passport number fields with realistic-looking values.
  randomPassportNumber() {
    const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    let digits = '';
    for (let i = 0; i < 7; ++i) digits += Math.floor(Math.random() * 10);
    return letter + digits;
  }

  // 1) fillPassportNumber
  // - Finds a passport number input using multiple likely selectors (id, testid, placeholder).
  // - Waits for a visible input, generates a random passport number, and fills it.
  // - Uses a robust fill approach (fill, otherwise click+type) to handle controlled React inputs.
  // - Stores chosenPassportNumber on the class for later inspection by test code.
  // - On failure logs a warning, optionally triggers a saveDebug, and rethrows the error.
  async fillPassportNumber() {
    const page = this.page;
    try {
      const passportNumberSel = '#Input_PassportNumber, input[data-testid="PassportNumberInput"], input[id*=PassportNumber], input[placeholder*="Passport number"], input[placeholder*="Passport"]';
      const passportNumInput = page.locator(passportNumberSel).first();
      await passportNumInput.waitFor({ state: 'visible', timeout: 10000 });
      const newPassport = this.randomPassportNumber();
      await passportNumInput.fill(newPassport).catch(async () => { await passportNumInput.click({ force: true }); await passportNumInput.type(newPassport); });
      console.log('Filled passport number:', newPassport);
      // store for later if needed
      this.chosenPassportNumber = newPassport;
      return newPassport;
    } catch (err) {
      // Log for diagnostics — best practice in flaky UI tests to continue debug flow.
      console.warn('Passport number fill failed:', err?.message || err);
      // If a saveDebug utility is available globally, attempt to capture state for investigation.
      if (typeof saveDebug === 'function') await saveDebug(page, 'passport-num-fail');
      // Re-throw so test frameworks can mark the test as failed.
      throw err;
    }
  }

  // 2) fillPassportExpiryDate
  // - Opens an expiry date control (tries many common selectors to trigger a datepicker).
  // - Picks a random safe day (1..28) to avoid month-length issues (Feb, 30-day months).
  // - Attempts several strategies to click the day cell (exact text, enumerated candidates, evaluate fallback).
  // - Clicks an OK button if the datepicker requires confirmation.
  // - Stores chosenExpiryDay for later inspection and returns it.
  // - On failure logs and optionally saves debug data, but *does not* throw (flow continues).
  async fillPassportExpiryDate() {
    const page = this.page;
    try {
      const expirySelectors = [
        'input[placeholder*="expiry"]',
        'input[name*=expiry]',
        'input[aria-label*="expiry"]',
        'input[placeholder*="DD/MM"]',
        'input[placeholder*="DD/MM/YYYY"]',
        'input[type="date"]',
        '.date-picker__input-wrapper > .input-text',
        'input' // last-resort
      ];
      let clicked = false;
      // Try to open a date picker by clicking the first visible candidate
      for (const s of expirySelectors) {
        const el = page.locator(s).first();
        if (await el.count() > 0 && await el.isVisible()) {
          await el.click({ force: true }).catch(()=>{});
          clicked = true;
          break;
        }
      }
      if (!clicked) throw new Error('Expiry input not found to open date picker');

      // small delay for calendar overlay to render
      await page.waitForTimeout(300);

      // choose a random day (1..28) to avoid month-length edge cases
      const day = String(Math.floor(Math.random() * 28) + 1);

      // Try clicking the exact day text using getByText (preferred for semantic match)
      let dayClicked = false;
      const exact = page.getByText(new RegExp(`^${day}$`));
      if (await exact.count() > 0) {
        for (let i = 0; i < await exact.count(); ++i) {
          const c = exact.nth(i);
          if (await c.isVisible()) {
            await c.click({ force: true }).catch(()=>{});
            dayClicked = true;
            break;
          }
        }
      }

      // Fallback: search generic buttons/divs/spans with that day text and click first visible
      if (!dayClicked) {
        const candidates = page.locator('button, div, span').filter({ hasText: new RegExp(`^${day}$`) });
        for (let i = 0; i < await candidates.count(); ++i) {
          const c = candidates.nth(i);
          if (!(await c.isVisible())) continue;
          await c.click({ force: true }).catch(()=>{});
          dayClicked = true;
          break;
        }
      }

      // Last-resort fallback: page.evaluate to find and click the first node whose trimmed text equals day
      if (!dayClicked) {
        const clicked = await page.evaluate((d) => {
          const nodes = Array.from(document.querySelectorAll('button, div, span'));
          for (const n of nodes) {
            if ((n.textContent || '').trim() === String(d)) {
              try { n.click(); return true; } catch (e) {}
            }
          }
          return false;
        }, day).catch(()=>false);
        if (!clicked) throw new Error('Could not click expiry day: ' + day);
      }

      // If the datepicker requires confirmation, attempt to click OK (common pattern)
      const okBtn = page.getByRole('button', { name: /^OK$/i }).first();
      if (await okBtn.count() > 0 && await okBtn.isVisible()) {
        await okBtn.click({ force: true }).catch(()=>{});
      } else {
        // Try other casing variants via a text search
        const anyOk = page.locator('text=OK, text=Ok, text=ok').first();
        if (await anyOk.count() > 0 && await anyOk.isVisible()) await anyOk.click({ force: true }).catch(()=>{});
      }

      console.log('Expiry day selected:', day);
      // store for later if needed
      this.chosenExpiryDay = day;
      // slight pause to let the widget update
      await page.waitForTimeout(200);
      return day;
    } catch (err) {
      // Non-fatal: record and continue (expiry selection may not be critical for subsequent steps)
      console.warn('Expiry selection failed:', err?.message || err);
      if (typeof saveDebug === 'function') await saveDebug(page, 'expiry-fail');
      // don't throw — allow flow to try country & confirm as fallback
      return null;
    }
  }

  // 3) fillPassportCountry
  // - Attempts to open the passport-country selector by finding a "Passport country" label and activating a nearby trigger.
  // - If label-based approach fails, clicks the first visible combobox/select as a generic fallback.
  // - Tries multiple search/input selectors inside the dropdown to type the desired country.
  // - Clicks the first matching option (by role/option patterns) and updates this.selectedCountry to the visible selection text.
  // - On missing option it logs a warning and optionally saves a debug screenshot.
  // - Returns the selected country string or null on failure.
  async fillPassportCountry(country = 'Ireland') {
    const page = this.page;
    this.selectedCountry = country || this.selectedCountry;

    try {
      // Try to find and activate a control near the "Passport country" label
      const passportCountryLabel = page.getByText(/Passport country/i).first();
      if (await passportCountryLabel.count() > 0) {
        const parent = passportCountryLabel.locator('..');
        const trigger = parent.locator('button, div[role="combobox"], .select, .dropdown, .mat-select-trigger, .v-select__slot, input').first();
        if (await trigger.count() > 0 && await trigger.isVisible()) {
          await trigger.click({ force: true }).catch(()=>{});
        } else {
          // fallback: clicking the label itself to focus the control (works with some libraries)
          await passportCountryLabel.click({ force: true }).catch(()=>{});
        }
      } else {
        // fallback: click the first visible select/combobox on the page
        const genericTrigger = page.locator('div[role="combobox"], .v-select__slot, .mat-select-trigger, select').first();
        if (await genericTrigger.count() > 0 && await genericTrigger.isVisible()) await genericTrigger.click({ force: true }).catch(()=>{});
      }

      // small delay for dropdown overlay to appear
      await page.waitForTimeout(300);

      // search for a dropdown search input and type the selected country
      const searchSelectors = [
        'input[placeholder*="Search"]',
        'input[aria-label*="search"]',
        'input[type="search"]',
        'input[role="combobox"]',
        'input[role="searchbox"]',
        '.v-select__search input',
        'input'
      ];
      let typed = false;
      for (const s of searchSelectors) {
        const sEl = page.locator(s).first();
        if (await sEl.count() > 0 && await sEl.isVisible()) {
          await sEl.fill(this.selectedCountry).catch(async () => { await sEl.click({ force: true }); await sEl.type(this.selectedCountry); });
          typed = true;
          break;
        }
      }
      if (!typed) {
        // If no search box found, attempt to type via keyboard (dropdown likely focused)
        await page.keyboard.type(this.selectedCountry).catch(()=>{});
      }

      // small pause to allow filtering results to appear
      await page.waitForTimeout(400);

      // Click the first matching option in common dropdown structures
      const optionLoc = page.locator('div[role="option"], li[role="option"], .v-list-item, .option, .dropdown-item, .mat-option, .list-item').filter({ hasText: new RegExp(this.selectedCountry, 'i') }).first();
      if (await optionLoc.count() > 0 && await optionLoc.isVisible()) {
        await optionLoc.click({ force: true }).catch(()=>{});
        try {
          const txt = (await optionLoc.textContent()) || '';
          if (txt.trim()) this.selectedCountry = txt.trim();
        } catch (e) { /* ignore text read failure */ }
      } else {
        // Fallback generic text match anywhere on the page
        const anyCountry = page.getByText(new RegExp(this.selectedCountry, 'i')).first();
        if (await anyCountry.count() > 0 && await anyCountry.isVisible()) {
          await anyCountry.click({ force: true }).catch(()=>{});
          try {
            const txt = (await anyCountry.textContent()) || '';
            if (txt.trim()) this.selectedCountry = txt.trim();
          } catch (e) {}
        } else {
          // If country not found, record debug info but continue (tests may still proceed)
          console.warn(`Country option ${this.selectedCountry} not found in dropdown; saving debug.`);
          if (typeof saveDebug === 'function') await saveDebug(page, 'country-not-found');
          // keep selectedCountry as fallback
        }
      }

      console.log('Country selected (attempted):', this.selectedCountry);
      await page.waitForTimeout(300);
      return this.selectedCountry;
    } catch (err) {
      // On failure log and optionally capture debug data for analysis.
      console.warn('Country selection failed:', err?.message || err);
      if (typeof saveDebug === 'function') await saveDebug(page, 'country-fail');
      return null;
    }
  }

  // 4) clickConfirm
  // - Attempts to click a Confirm/Confirm and continue/Next button using a role-based selector first.
  // - Falls back to a text-based getByText search (covers non-ARIA-labelled controls).
  // - If neither is found it saves debug information (if available) and throws an error.
  // - This function returns true on success and throws on failure so callers can react appropriately.
  async clickConfirm() {
    const page = this.page;
    try {
      // Preferred strategy: ARIA role-based button lookup (robust and accessible)
      const confirmBtn = page.getByRole('button', { name: /Confirm|Confirm and continue|Confirm and Continue/i }).first();
      if (await confirmBtn.count() > 0 && await confirmBtn.isVisible()) {
        await confirmBtn.click({ force: true });
        console.log('Clicked Confirm button');
        return true;
      } else {
        // Text fallback: find any visible element containing a confirm-like label and click it
        const anyConfirm = page.getByText(/Confirm and continue|Confirm|Next/i).first();
        if (await anyConfirm.count() > 0 && await anyConfirm.isVisible()) {
          await anyConfirm.click({ force: true });
          console.log('Clicked fallback Confirm');
          return true;
        } else {
          // If nothing found — capture debug data and surface an error for test failure
          if (typeof saveDebug === 'function') await saveDebug(page, 'confirm-not-found');
          throw new Error('Confirm button not found');
        }
      }
    } catch (err) {
      // Log, capture optional debug screenshot, and rethrow so the test runner sees the failure.
      console.warn('Confirm click failed:', err?.message || err);
      if (typeof saveDebug === 'function') await saveDebug(page, 'confirm-click-fail');
      throw err;
    }
  }
}