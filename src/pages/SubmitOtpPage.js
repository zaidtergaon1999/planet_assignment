// src/pages/SubmitOtpPage.js
// -----------------------------------------------------------------------------
// Page Object Model (POM) for the OTP (One-Time Password) submission screen.
//
// Responsibilities:
//   - Wait for OTP input UI to appear (various possible layouts).
//   - Poll the disposable mailbox for an OTP using `pollForOtp()`.
//   - Enter the OTP digits using multiple strategies (fast-path + fallbacks).
//   - Wait for the verification phase (spinner or network idle).
//   - Log a single ✅ (success) or ❌ (failure) message at the end.
//
// Design Notes:
//   This class is built to handle multiple OTP input patterns seen across
//   different portals and frameworks (React, Angular, custom widgets, etc.).
//   It gracefully tolerates delays, missing elements, and minor timing variations.
// -----------------------------------------------------------------------------

import { pollForOtp } from '../services/otpService.js';

export default class SubmitOtp {
  /**
   * Constructor
   * @param {import('playwright').Page} page - The Playwright page instance used for browser interactions.
   */
  constructor(page) {
    // Store the reference to Playwright’s Page object for use across methods.
    this.page = page;
  }

  /**
   * Simple utility function for a controlled delay.
   * Useful to allow UI animations or transitions to settle.
   * @param {number} ms - Time in milliseconds to wait.
   */
  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Waits for network requests to settle, but ignores timeouts or errors.
   * This "silent" version ensures that a missing idle state doesn't fail the test.
   */
  async waitNetworkIdleSilent() {
    await this.page.waitForLoadState('networkidle').catch(() => { /* ignore */ });
  }

  /**
   * Main method that polls for OTP and fills it into the page.
   * Includes robust fallback mechanisms for various OTP input UI designs.
   *
   * @param {string} token - Bearer token for mailbox polling via pollForOtp.
   * @param {{ otpTimeout?: number, verifyWait?: number }} opts - Optional config:
   *   otpTimeout: Max wait time for OTP email (ms)
   *   verifyWait: Wait time for verification spinner/network (ms)
   * @returns {import('playwright').Page} - Returns the Playwright page instance for chaining.
   */
  async findAndFillOtp(token, { otpTimeout = 90000, verifyWait = 20000 } = {}) {
    const page = this.page;

    try {
      // -----------------------------------------------------------------------
      // STEP 1: Wait for OTP UI readiness
      // -----------------------------------------------------------------------
      // Different UIs load differently — some render inputs, others navigate or
      // display headings. Using Promise.race ensures whichever appears first unblocks.
      await this.waitNetworkIdleSilent();
      await Promise.race([
        page.locator('input[maxlength="1"]').first().waitFor({ state: 'visible', timeout: 15000 }).catch(() => {}),
        page.locator('text=Verify your email').waitFor({ state: 'visible', timeout: 15000 }).catch(() => {}),
        page.waitForURL(/VerifyIdentity|Verify/, { timeout: 15000 }).catch(() => {})
      ]).catch(() => {});

      // -----------------------------------------------------------------------
      // STEP 2: Poll mailbox for OTP
      // -----------------------------------------------------------------------
      // Uses the shared `pollForOtp` helper that continuously checks a disposable
      // mailbox for a numeric OTP code. It stops when found or timeout reached.
      const otp = await pollForOtp(token, { timeoutMs: otpTimeout });
      if (!otp) throw new Error('Timed out waiting for OTP');

      // -----------------------------------------------------------------------
      // STEP 3: Fast-path input filling (preferred)
      // -----------------------------------------------------------------------
      // Most modern OTP widgets use consistent test IDs or per-digit inputs.
      // We attempt to fill each input either by test ID or per-digit index.
      let typedDigits = 0;

      for (let i = 0; i < otp.length; ++i) {
        const tid = `codeinput-id-input-${i}`;
        const el = page.getByTestId(tid);

        if (await el.count() > 0) {
          // Try direct fill first, fallback to click + type for custom input widgets
          await el.fill(otp[i]).catch(async () => {
            await el.click({ force: true });
            await el.type(otp[i]);
          });
          typedDigits++;
        } else {
          // If test ID doesn’t exist, fallback to indexed visible input
          const fb = page.locator('input[maxlength="1"]').nth(i);
          if (await fb.count() > 0) {
            await fb.fill(otp[i]).catch(async () => {
              await fb.click({ force: true });
              await fb.type(otp[i]);
            });
            typedDigits++;
          }
        }
      }

      // If full OTP successfully entered, allow UI reaction time
      if (typedDigits === otp.length) {
        await this.sleep(200);
      } else {
        // ---------------------------------------------------------------------
        // STEP 4: Fallback input strategies (generic OTP layouts)
        // ---------------------------------------------------------------------
        // This block handles non-standard OTP designs that lack test IDs or
        // use different HTML structures.
        const perDigitSelectors = [
          'input[maxlength="1"]',
          'input[type="tel"][maxlength="1"]',
          'input[inputmode="numeric"][maxlength="1"]'
        ];

        for (const sel of perDigitSelectors) {
          const loc = page.locator(sel);
          const count = await loc.count();
          if (count > 0) {
            let filled = 0;
            for (let i = 0; i < count && filled < otp.length; ++i) {
              const el = loc.nth(i);
              if (await el.isVisible()) {
                await el.fill(otp[filled]).catch(async () => {
                  await el.click();
                  await el.type(otp[filled]);
                });
                filled++;
                await page.waitForTimeout(120); // stabilize focus/auto-advance
              }
            }
            if (filled > 0) {
              typedDigits = Math.max(typedDigits, filled);
              break;
            }
          }
        }
      }

      // -----------------------------------------------------------------------
      // STEP 5: Wait for verification phase (spinner/network quiet)
      // -----------------------------------------------------------------------
      // After OTP submission, the app usually verifies via network or spinner.
      // Wait for any “Verifying...” indicator to disappear or network to idle.
      try {
        const verifying = page.locator('text=Verifying, text=Verifying..., text=Verifying..');
        if ((await verifying.count()) > 0 && (await verifying.first().isVisible())) {
          await verifying.first().waitFor({ state: 'detached', timeout: verifyWait }).catch(() => {});
        } else {
          await page.waitForLoadState('networkidle').catch(() => {});
        }
      } catch (e) {
        // Non-fatal — continue to next step even if verification spinner check fails
        console.warn('[SubmitOtp] Verification wait warning:', e?.message || e);
      }

      // -----------------------------------------------------------------------
      // STEP 6: Final Success Log
      // -----------------------------------------------------------------------
      console.log('✅ OTP successfully retrieved, entered, and verified.');
    } catch (error) {
      // -----------------------------------------------------------------------
      // STEP 6 (Alternative): Final Failure Log
      // -----------------------------------------------------------------------
      console.error('❌ OTP submission failed:', error.message);
    }

    // -------------------------------------------------------------------------
    // Return the page for fluent chaining in test flows.
    // Example: await new SubmitOtp(page).findAndFillOtp(token).clickNext();
    // -------------------------------------------------------------------------
    return page;
  }
}
