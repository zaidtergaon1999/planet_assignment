// src/pages/PassportScanner.js
// Thin wrapper class exposing two methods:
//   - scanPassport(pageOptions?)         => tries to open the scan UI
//   - enterPassportManually(pageOptions?) => clicks the "Enter passport manually" option
//
// Based almost verbatim on the implementation in tests/shopperPortal.spec.js
import { saveDebug } from '../utils/debug.js'; // keep your existing debug hook

export default class PassportScanner {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  // small sleep util
  sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

  // dismiss some common overlays
  async dismissOverlays() {
    const page = this.page;
    try {
      await page.keyboard.press('Escape').catch(()=>{});
      const closeSelectors = [
        'button[aria-label="Close"]', 'button[title="Close"]', '.modal-close',
        '.dialog-close', '.close', '.pw-modal-close', '.overlay__close', '.v-overlay__close'
      ];
      for (const sel of closeSelectors) {
        const c = page.locator(sel).first();
        if ((await c.count()) > 0 && await c.isVisible()) {
          await c.click({ force: true }).catch(()=>{});
        }
      }
    } catch (e) { /* ignore */ }
  }

  // robust click helper used in both methods
  async robustClickLocator(loc) {
    const page = this.page;
    try {
      await loc.scrollIntoViewIfNeeded().catch(()=>{});
      await loc.click({ force: true, trial: false }).catch(()=>{});
      await page.waitForTimeout(300);
      return true;
    } catch (e) {
      try {
        const box = await loc.boundingBox();
        if (box) {
          await page.mouse.click(box.x + box.width/2, box.y + box.height/2, { force: true });
          await page.waitForTimeout(300);
          return true;
        }
      } catch (e2) { /* ignore */ }
    }
    return false;
  }

  // helper to click "Enter passport manually" inside a frame via page.evaluate
  async clickManualInFrame(frame) {
    try {
      const clicked = await frame.evaluate(() => {
        const needle = /enter passport manually/i;
        const candidates = Array.from(document.querySelectorAll('a, button, span, div, p, label'));
        for (const el of candidates) {
          const txt = (el.textContent || '').trim();
          if (txt && needle.test(txt)) {
            try { el.click(); return true; } catch (e) {
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
      return false;
    }
  }

  // --- Public: scanPassport() ---
  // Attempts to open the scan UI using many strategies (selectors, frames, center click, retries).
  // Returns true if it appears likely the scan UI opened (best-effort), otherwise throws.
  async scanPassport({ attempts = 5 } = {}) {
    const page = this.page;

    // tryScanClick (copied / adapted)
    const tryScanClick = async () => {
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

      for (let attempt = 0; attempt < attempts; ++attempt) {
        for (const fn of locatorFns) {
          const loc = fn();
          if (!loc) continue;
          try {
            if (await tryClickLoc(loc)) return true;
          } catch (e) {}
        }

        // try clicking inside frames (scan UI sometimes in iframe)
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

        // dismiss overlays and retry
        await this.dismissOverlays();
        await page.waitForTimeout(350);

        // try clicking center of viewport
        try {
          const vw = await page.evaluate(() => ({ w: window.innerWidth, h: window.innerHeight }));
          await page.mouse.click(vw.w * 0.5, vw.h * 0.5, { force: true }).catch(()=>{});
        } catch (e) {}

        await page.waitForTimeout(250 + attempt * 150);
      }

      return false;
    }; // end tryScanClick

    // run tryScanClick and handle result
    try {
      const clickedScan = await tryScanClick();
      if (!clickedScan) {
        await saveDebug(page, 'scan-passport-not-found');
        throw new Error('Scan passport control not found');
      }
      // small settle
      await page.waitForLoadState('networkidle').catch(()=>{});
      await page.waitForTimeout(250);
      return true;
    } catch (err) {
      await saveDebug(page, 'scan-passport-fail');
      throw err;
    }
  } // end scanPassport

  // --- Public: enterPassportManually() ---
  // Attempts to click the "Enter passport manually" control by trying:
  //  - testid locators, role, link, text, anchors, frames, re-clicking scan, and final DOM evaluate click
  async enterPassportManually({ reattemptScan = true } = {}) {
    const page = this.page;

    // helper to look for testid / role / text candidates in main page
    const tryMainDomCandidates = async () => {
      // 1) Prefer explicit data-testid if available
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

      // 2) Try common roles / direct text
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

      // 3) CSS anchors/buttons that include text
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
      // 1) Try main DOM & frames
      let manualClicked = false;
      manualClicked = await tryMainDomCandidates();

      // 2) Try searching in child frames (camera/modal may be in iframe)
      if (!manualClicked) {
        const frames = page.frames();
        for (const f of frames) {
          if (f === page.mainFrame()) continue;
          const did = await this.clickManualInFrame(f);
          if (did) { manualClicked = true; break; }
        }
      }

      // 3) If still not clicked, attempt re-clicking scan (if requested) and retry a few times
      if (!manualClicked && reattemptScan) {
        for (let attempt = 0; attempt < 3 && !manualClicked; ++attempt) {
          await this.dismissOverlays();
          // attempt to re-open scan (best-effort) — we call scanPassport but ignore if it errors
          try { await this.scanPassport({ attempts: 2 }).catch(()=>{}); } catch (e) {}
          await page.waitForTimeout(350);

          // retry main DOM text search
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

      // 4) Final brute-force DOM evaluate click if not found
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

      if (!manualClicked) {
        await saveDebug(page, 'enter-passport-manual-not-found');
        throw new Error('Enter passport manually option not found after exhaustive attempts');
      }

      // allow UI to settle
      await page.waitForLoadState('networkidle').catch(()=>{});
      await page.waitForTimeout(600);
      return true;
    } catch (e) {
      await saveDebug(page, 'enter-passport-manual-fail');
      throw e;
    }
  } // end enterPassportManually
}
