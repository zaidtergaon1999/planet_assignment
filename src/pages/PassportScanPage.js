// src/pages/PassportScanPage.js
// Page Object Model (POM) for handling the "Scan passport" → "Enter passport manually" flow.
// This file contains a compact, defensive set of helpers to:
//  - click the Scan Passport control (which may open a camera/modal/iframe)
//  - reliably locate and click the "Enter passport manually" action that follows
// The code is defensive because the scan UI may appear as an overlay, iframe, or new page.

import { saveDebug } from '../utils/debug.js'; // adjust if your debug util is default-export

export default class PassportScanPage {
  /**
   * Constructor
   * @param {import('playwright').Page} page - Playwright page instance used to interact with the app.
   *
   * Initializes:
   *  - stable selectors used to locate the scan button and label
   *  - a list of candidate selectors / text patterns that represent the "Enter passport manually" action
   */
  constructor(page) {
    this.page = page;
    // Selector that targets the primary "Scan passport" control (data-testid used for stability)
    this.scanBtnSel = '[data-testid="PassportDetailsScanPassport"]';
    // Optional label element associated with scan control (some UIs place the click target on the label)
    this.scanLabelSel = '[data-testid="PassportDetailsScanPassportLabel"]';
    // Fallback candidate selectors that might represent the "Enter passport manually" link or button.
    // We try them in order when searching for the manual-enter action.
    this.enterManualCandidates = [
      '[data-testid="EnterPassportManuallyButton"]',
      '[data-testid="EnterPassportManually"]',
      '[data-testid*="EnterPassport"]',
      'text=/Enter passport manually/i'
    ];
  }

  // sleep
  // Small convenience wrapper around setTimeout to introduce short pauses where needed.
  sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

  // clickScanPassport
  // Purpose:
  //  - Ensure we are on the PassportDetails area (best-effort)
  //  - Wait for the Scan button to be visible
  //  - Click the Scan control using a sequence of robust strategies:
  //      1) direct force click on the control
  //      2) click the label if the direct click didn't produce the expected UI change
  //      3) as a last resort, execute a DOM click via page.evaluate
  //  - After clicking, wait for either the ScanPassport URL or the manual-entry UI to appear.
  //
  // Notes:
  //  - Many pages render camera/scanner UI in modals, overlays, or separate frames. This method is defensive
  //    and uses multiple fallbacks to handle those variations.
  async clickScanPassport({ timeout = 30000 } = {}) {
    const page = this.page;

    // Best-effort: wait for page to be the passport details page or for network to settle
    await page.waitForURL(/\/PassportDetails/i, { timeout }).catch(() => {});
    await page.waitForLoadState('networkidle').catch(() => {});

    // Wait for the primary scan button to be visible
    const btn = page.locator(this.scanBtnSel).first();
    await btn.waitFor({ state: 'visible', timeout });

    // 1) Preferred approach: scroll into view and click forcefully
    await btn.scrollIntoViewIfNeeded().catch(()=>{});
    await btn.click({ force: true }).catch(()=>{});

    // 2) If clicking didn't surface manual-entry UI, try clicking the label near the control (some UIs)
    const manualSel = this.enterManualCandidates[0];
    const manualExists = await page.locator(manualSel).first().count() > 0;
    if (!manualExists) {
      const label = page.locator(this.scanLabelSel).first();
      if (await label.count() > 0 && await label.isVisible()) {
        await label.scrollIntoViewIfNeeded().catch(()=>{});
        await label.click({ force: true }).catch(()=>{});
      } else {
        // 3) Final fallback: programmatic DOM click in case the control is not clickable via Playwright locators
        await page.evaluate(sel => { const e = document.querySelector(sel); if (e) e.click(); }, this.scanBtnSel).catch(()=>{});
      }
    }

    // Wait for either:
    //  - navigation to /ScanPassport (if app navigates), OR
    //  - the manual-entry UI element(s) to appear (overlay/alternative)
    await Promise.race([
      page.waitForURL(/\/ScanPassport/i, { timeout }).catch(() => {}),
      page.waitForSelector(this.enterManualCandidates.join(','), { timeout }).catch(() => {})
    ]);

    // Allow background requests / rendering to settle
    await page.waitForLoadState('networkidle').catch(() => {});
    return this.page;
  }

  // clickEnterPassportManually
  // Purpose:
  //  - Robustly locate and click the "Enter passport manually" control which might live:
  //      - in the main page DOM
  //      - inside one of the page's frames (camera/modal often hosted in iframe)
  //      - in a newly opened popup/tab (some implementations open a new window)
  //  - The method polls the main page, its frames, and any newly opened pages for the candidate selectors.
  //  - If successful, it switches `this.page` to the newly opened page if needed and returns that page.
  //
  // Arguments:
  //  - pollInterval: how frequently to retry (ms)
  //  - pollTimeout: maximum time to keep trying before failing (ms)
  //
  // Behavior on failure:
  //  - captures debug artifacts via saveDebug (if available) and throws an Error.
  async clickEnterPassportManually({ pollInterval = 1000, pollTimeout = 45000 } = {}) {
    const page = this.page;
    const ctx = page.context();
    const deadline = Date.now() + pollTimeout;

    // Track newly opened pages so we can search them if the UI opens a new popup
    const newPages = [];
    const onNew = (p) => newPages.push(p);
    ctx.on('page', onNew);

    // tryClickInPage: helper that tries each candidate selector within a given page/frame
    const tryClickInPage = async (p) => {
      for (const sel of this.enterManualCandidates) {
        const loc = p.locator(sel).first();
        if (await loc.count() === 0) continue;
        if (!(await loc.isVisible())) continue;
        await loc.scrollIntoViewIfNeeded().catch(()=>{});
        await loc.click({ force: true });
        return true;
      }
      return false;
    };

    let clicked = false;

    // Poll loop: search main page → frames → any new pages until deadline or click succeeds
    while (Date.now() < deadline && !clicked) {
      // 1) Try the current page
      clicked = await tryClickInPage(page);
      if (clicked) break;

      // 2) Try frames (frame locators usually supported; handle exceptions defensively)
      for (const f of page.frames()) {
        try {
          if (await tryClickInPage(f)) { clicked = true; break; }
        } catch {}
      }
      if (clicked) break;

      // 3) Try newly opened pages/popups (captured via context 'page' event)
      for (const np of newPages.slice()) {
        if (np.isClosed && np.isClosed()) continue;
        if (await tryClickInPage(np)) {
          // If we successfully clicked in a popup, switch the POM to use this new page
          this.page = np;
          clicked = true;
          break;
        }
      }
      if (clicked) break;

      // Wait briefly before retrying
      await page.waitForTimeout(pollInterval);
    }

    // Stop listening for new pages
    ctx.off('page', onNew);

    // If we failed to find/click the control, capture debug and raise an error
    if (!clicked) {
      if (typeof saveDebug === 'function') await saveDebug(page, 'enter-manual-not-found');
      // Try to capture debug for any new pages too
      try { for (const np of newPages) if (!np.isClosed()) await saveDebug(np, 'enter-manual-newpage'); } catch {}
      throw new Error('Enter passport manually element not found');
    }

    // Wait for any network or navigation to settle after the click
    await this.page.waitForLoadState('networkidle').catch(()=>{});
    return this.page;
  }

  // proceedToManualEntry
  // Convenience method that performs the full sequence:
  //  - click the Scan Passport control
  //  - short pause to allow modal/frame to render
  //  - click the Enter Passport Manually control (robust across frames/popups)
  async proceedToManualEntry(opts = {}) {
    await this.clickScanPassport(opts);
    // brief pause to let camera modal/popover settle (adjust if necessary)
    await this.sleep(500);
    await this.clickEnterPassportManually(opts);
    return this.page;
  }
}
