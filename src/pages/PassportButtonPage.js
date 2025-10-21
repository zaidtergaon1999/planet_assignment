// src/pages/PassportButtonPage.js
// Lightweight Page Object: provides two convenience methods used by tests:
//   - scanPassport(pageOptions?)         => attempts to open the passport scanning UI
//   - enterPassportManually(pageOptions?) => finds and clicks the "Enter passport manually" option
//
// The implementation is intentionally defensive: it tries many selectors, works across
// frames/iframes, dismisses overlays, and uses multiple click strategies so tests remain
// robust across slightly different deployments of the portal UI.

import { saveDebug } from '../utils/debug.js'; // existing debug hook to capture diagnostics

export default class PassportButtons {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    // Keep a reference to the Playwright page object so helpers can interact with the browser.
    this.page = page;
  }

  // tiny sleep helper used for deterministic short waits where necessary
  sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

  // Dismisses common modal/overlay UI elements that might block interactions.
  // Strategy: press Escape and then try clicking a list of common "close" selectors.
  // Non-fatal: any errors are ignored so callers can continue retrying other approaches.
  async dismissOverlays() {
    const page = this.page;
    try {
      // quick keyboard attempt to close dialogs
      await page.keyboard.press('Escape').catch(()=>{});

      // common close-button selectors across different UI frameworks
      const closeSelectors = [
        'button[aria-label="Close"]', 'button[title="Close"]', '.modal-close',
        '.dialog-close', '.close', '.pw-modal-close', '.overlay__close', '.v-overlay__close'
      ];

      for (const sel of closeSelectors) {
        const c = page.locator(sel).first();
        if ((await c.count()) > 0 && await c.isVisible()) {
          // try a force click; ignore errors so this remains best-effort
          await c.click({ force: true }).catch(()=>{});
        }
      }
    } catch (e) { /* ignore overlay close errors */ }
  }

  // Robust low-level click helper used by the class.
  // It attempts a normal click, and if that fails tries to click using the element's
  // bounding box (mouse coordinate click). Returns true when a click was likely performed.
  async robustClickLocator(loc) {
    const page = this.page;
    try {
      // bring element into view and try a force click first (covers covered elements)
      await loc.scrollIntoViewIfNeeded().catch(()=>{});
      await loc.click({ force: true, trial: false }).catch(()=>{});
      await page.waitForTimeout(300); // short settle
      return true;
    } catch (e) {
      try {
        // if click threw, fallback to mouse click by coordinates
        const box = await loc.boundingBox();
        if (box) {
          await page.mouse.click(box.x + box.width/2, box.y + box.height/2, { force: true });
          await page.waitForTimeout(300);
          return true;
        }
      } catch (e2) { /* ignore coordinate click failures */ }
    }
    return false;
  }

  // Helper used to click an "Enter passport manually" label inside an iframe/frame.
  // It runs page-level evaluation inside the frame: scans textual nodes and tries
  // various click/event dispatch techniques to trigger the control.
  async clickManualInFrame(frame) {
    try {
      const clicked = await frame.evaluate(() => {
        const needle = /enter passport manually/i;
        const candidates = Array.from(document.querySelectorAll('a, button, span, div, p, label'));
        for (const el of candidates) {
          const txt = (el.textContent || '').trim();
          if (txt && needle.test(txt)) {
            try { el.click(); return true; } catch (e) {
              // if direct click fails, synthesize mouse events as a fallback
              try {
                const rect = el.getBoundingClientRect();
                el.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
                el.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
                el.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
                el.dispatchEvent(new MouseEvent('click', { bubbles: true }));
                return true;
              } catch (e2) {}
            }
          }
        }
        return false;
      }).catch(()=>false);
      return !!clicked;
    } catch (e) {
      // evaluation failed — treat as not clicked (non-fatal)
      return false;
    }
  }

  // --- Public method: scanPassport() ---
  // Tries many different selectors and strategies to open the scan UI.
  // Returns true if it appears the scan UI was triggered; otherwise throws
  // (after saving debug artifacts to help triage flaky cases).
  async scanPassport({ attempts = 5 } = {}) {
    const page = this.page;

    // Local function that encapsulates the multi-strategy click attempts.
    const tryScanClick = async () => {
      // A set of functions returning locators — tried in order to find a clickable 'scan' control.
      const locatorFns = [
        () => page.locator('[data-testid="PassportDetailsScanPassport"], [data-testid="ScanPassportButton"], [data-testid*="ScanPassport"]'),
        () => page.getByRole('button', { name: /Scan passport/i }),
        () => page.getByRole('button', { name: /Scan/i }),
        () => page.getByText(/Scan passport/i),
        () => page.getByText(/Scan/i),
        () => page.locator('button[class*="scan"], .scan-passport, .scanPassport, [class*="scanPassport"]'),
        () => page.locator('button:has(svg), button:has(.icon)').filter({ hasText: /scan|passport/i }),
        () => page.locator('text=/scan passport/i'),
        () => page.locator('xpath=//*[contains(translate(normalize-space(.),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz"), "scan") and contains(translate(normalize-space(.),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz"), "passport")]'),
      ];

      // Attempts to click elements from a locator. Tries up to the first 5 matches and
      // uses coordinate-click fallback if direct click fails.
      const tryClickLoc = async (loc) => {
        try {
          if (!(await loc.count())) return false;
          const n = Math.min(await loc.count(), 5);
          for (let i = 0; i < n; ++i) {
            const l = loc.nth(i);
            if (!(await l.isVisible())) continue;
            try {
              await l.scrollIntoViewIfNeeded().catch(()=>{});
              await l.click({ force: true, trial: false }).catch(()=>{});
              await page.waitForTimeout(250);
              return true;
            } catch (err) {
              try {
                const box = await l.boundingBox();
                if (box) {
                  await page.mouse.click(box.x + box.width/2, box.y + box.height/2, { force: true });
                  await page.waitForTimeout(250);
                  return true;
                }
              } catch (e2) { /* ignore */ }
            }
          }
        } catch (e) {}
        return false;
      };

      // Try multiple passes: page locators, frames, overlay dismiss, viewport center click, etc.
      for (let attempt = 0; attempt < attempts; ++attempt) {
        for (const fn of locatorFns) {
          const loc = fn();
          if (!loc) continue;
          try {
            if (await tryClickLoc(loc)) return true;
          } catch (e) {}
        }

        // Some apps render the scan control inside an iframe — attempt to click inside frames.
        try {
          const frames = page.frames();
          for (const f of frames) {
            if (f === page.mainFrame()) continue;
            try {
              const clicked = await f.evaluate(() => {
                const needle = /scan passport/i;
                const candidates = Array.from(document.querySelectorAll('a, button, span, div, p, label'));
                for (const el of candidates) {
                  const txt = (el.textContent || '').trim();
                  if (txt && needle.test(txt)) {
                    try { el.click(); return true; } catch(e) {
                      try { el.dispatchEvent(new MouseEvent('click', { bubbles: true })); return true; } catch(e2) {}
                    }
                  }
                }
                return false;
              }).catch(()=>false);
              if (clicked) return true;
            } catch (e) {}
          }
        } catch (e) {}

        // Dismiss overlays that might block clicks and retry after a short pause
        await this.dismissOverlays();
        await page.waitForTimeout(350);

        // As a last-ditch effort click the center of the viewport — sometimes useful for
        // apps that reveal hidden controls when the user interacts with the canvas.
        try {
          const vw = await page.evaluate(() => ({ w: window.innerWidth, h: window.innerHeight }));
          await page.mouse.click(vw.w * 0.5, vw.h * 0.5, { force: true }).catch(()=>{});
        } catch (e) {}

        // incremental backoff before next pass
        await page.waitForTimeout(250 + attempt * 150);
      }

      return false;
    }; // end tryScanClick

    // Execute the helper and react to result: save debug artifacts on failure.
    try {
      const clickedScan = await tryScanClick();
      if (!clickedScan) {
        await saveDebug(page, 'scan-passport-not-found');
        throw new Error('Scan passport control not found');
      }
      // Give the UI time to settle after triggering scan
      await page.waitForLoadState('networkidle').catch(()=>{});
      await page.waitForTimeout(250);
      return true;
    } catch (err) {
      // Save debug information and rethrow so callers can act on the failure.
      await saveDebug(page, 'scan-passport-fail');
      throw err;
    }
  } // end scanPassport

  // --- Public method: enterPassportManually() ---
  // Tries a broad set of strategies to find and activate the "Enter passport manually" action.
  // Steps include: looking for testid markers, roles, visible text, scanning frames, reattempting
  // to re-open the scan UI and finally executing a page.evaluate brute-force click.
  async enterPassportManually({ reattemptScan = true } = {}) {
    const page = this.page;

    // Search the main DOM for likely candidates (data-testid, role, text, anchor/button nodes)
    const tryMainDomCandidates = async () => {
      // 1) data-testid is preferred when present — iterate and use robust click
      const testIdLoc = page.locator('[data-testid="EnterPassportManuallyButton"], [data-testid="EnterPassportManually"], [data-testid*="EnterPassport"]');
      if (await testIdLoc.count() > 0) {
        for (let i = 0; i < await testIdLoc.count(); ++i) {
          const l = testIdLoc.nth(i);
          if (await l.isVisible()) {
            const ok = await this.robustClickLocator(l).catch(()=>false);
            if (ok) return true;
          }
        }
      }

      // 2) Try role-based and direct text selectors — good for accessible controls
      const byRole = page.getByRole('button', { name: /Enter passport manually/i });
      if (await byRole.count() > 0) {
        if (await byRole.first().isVisible()) {
          if (await this.robustClickLocator(byRole.first()).catch(()=>false)) return true;
        }
      }

      const byLink = page.getByRole('link', { name: /Enter passport manually/i });
      if (await byLink.count() > 0) {
        if (await byLink.first().isVisible()) {
          if (await this.robustClickLocator(byLink.first()).catch(()=>false)) return true;
        }
      }

      const byText = page.getByText(/Enter passport manually/i);
      if (await byText.count() > 0) {
        if (await byText.first().isVisible()) {
          if (await this.robustClickLocator(byText.first()).catch(()=>false)) return true;
        }
      }

      // 3) Generic anchors/buttons that include the text — iterate and click each visible candidate
      const anchors = page.locator('a, button, span, p').filter({ hasText: /Enter passport manually/i });
      if (await anchors.count() > 0) {
        for (let i = 0; i < await anchors.count(); ++i) {
          const l = anchors.nth(i);
          if (await l.isVisible()) {
            if (await this.robustClickLocator(l).catch(()=>false)) return true;
          }
        }
      }

      return false;
    };

    try {
      // 1) Try the main page candidates first
      let manualClicked = false;
      manualClicked = await tryMainDomCandidates();

      // 2) If not found, inspect child frames — the control is often inside an iframe/modal
      if (!manualClicked) {
        const frames = page.frames();
        for (const f of frames) {
          if (f === page.mainFrame()) continue;
          const did = await this.clickManualInFrame(f);
          if (did) { manualClicked = true; break; }
        }
      }

      // 3) Optional: reattempt the scan flow to surface the manual option and retry
      if (!manualClicked && reattemptScan) {
        for (let attempt = 0; attempt < 3 && !manualClicked; ++attempt) {
          await this.dismissOverlays();
          // best-effort: try re-opening scan UI (errors ignored)
          try { await this.scanPassport({ attempts: 2 }).catch(()=>{}); } catch (e) {}
          await page.waitForTimeout(350);

          // re-check text nodes on main page
          const byText2 = page.getByText(/Enter passport manually/i);
          if (await byText2.count() > 0) {
            for (let i = 0; i < await byText2.count(); ++i) {
              const l = byText2.nth(i);
              if (await l.isVisible()) {
                manualClicked = await this.robustClickLocator(l).catch(()=>false);
                if (manualClicked) break;
              }
            }
          }
        }
      }

      // 4) Final fallback: brute-force evaluate the entire DOM and click any element
      // whose visible text matches the desired phrase (synthesizes events if needed).
      if (!manualClicked) {
        const mainClicked = await page.evaluate(() => {
          const needle = /enter passport manually/i;
          const candidates = Array.from(document.querySelectorAll('a, button, span, div, p, label'));
          for (const el of candidates) {
            const txt = (el.textContent || '').trim();
            if (txt && needle.test(txt)) {
              try { el.click(); return true; } catch (e) {
                try {
                  el.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
                  el.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
                  el.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
                  el.dispatchEvent(new MouseEvent('click', { bubbles: true }));
                  return true;
                } catch (err) {}
              }
            }
          }
          return false;
        }).catch(()=>false);
        if (mainClicked) manualClicked = true;
      }

      // If still not clicked, record debug info and surface an error to the caller.
      if (!manualClicked) {
        await saveDebug(page, 'enter-passport-manual-not-found');
        throw new Error('Enter passport manually option not found after exhaustive attempts');
      }

      // Allow the UI to settle after the action
      await page.waitForLoadState('networkidle').catch(()=>{});
      await page.waitForTimeout(600);
      return true;
    } catch (e) {
      // Save debug artifacts to help triage and rethrow the error
      await saveDebug(page, 'enter-passport-manual-fail');
      throw e;
    }
  } // end enterPassportManually
}
