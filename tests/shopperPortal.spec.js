// tests/shopperPortal.spec.js
// This test file performs a **complete end-to-end automation** of the Shopper Portal flow.
// It validates all major stages: Email submission, OTP verification, Terms acceptance,
// Passport entry (manual flow), Passport confirmation, personal details completion, and profile save verification.

// ------------------------------ Imports ------------------------------
import { test } from '@playwright/test';  // Playwright test runner API
import { createPortalContext } from '../src/helpers/browserFixture.js';  // Helper to create a fresh browser context with fake camera setup
import SubmitEmailPage from '../src/pages/SubmitEmailPage.js';           // POM: for submitting email address
import OtpPage from '../src/pages/OtpPage.js';                           // POM: for polling OTP from mail.tm and entering it
import { createMailTmAccount } from '../src/services/mailTmService.js';  // Service: creates temporary email using Mail.tm API
import TosPage from '../src/pages/TosPage.js';                           // POM: handles Terms of Service acceptance
import PassportScanPage from '../src/pages/PassportScanPage.js';
import PassportDetailsPage from '../src/pages/PassportDetailsPage.js';   // POM: fills passport details (number, expiry, country)
import { ConfirmPassportPage } from '../src/pages/ConfirmPassportPage.js'; // POM: confirms passport details before proceeding
import CompleteDetailsPage from '../src/pages/CompleteDetailsPage';      // POM: fills out the user's personal details form
import VerifyProfileSavedPage from '../src/pages/VerifyProfileSavedPage'; // POM: verifies that profile details were successfully saved


// ------------------------------ Test Definition ------------------------------
// The main Playwright test that runs the full Shopper Portal verification flow.
// It uses Page Object Model (POM) structure to keep each step modular, reusable, and readable.
test('Shopper Portal end-to-end verification flow', async () => {

  // Create a new browser context with fake camera options to avoid permission prompts.
  // headless: false means visible mode for debugging, slowMo adds delay between actions for stability.
  const { context, portalUrl } = await createPortalContext({ headless: false, slowMo: 500 });

  try {
    // ---------- STEP 1: Create a disposable email address ----------
    // Uses Mail.tm API to dynamically create a new temporary mailbox and retrieves a token for polling.
    const { address, token } = await createMailTmAccount();
    console.log('[spec] Mail.tm address created:', address);

    // ---------- STEP 2: Create a new browser tab and navigate to the portal ----------
    // Create a new Playwright page (tab) within the same browser context.
    const page = await context.newPage();

    // Initialize the SubmitEmailPage POM with the page and portal URL.
    const submitEmailPage = new SubmitEmailPage(page, portalUrl);

    // ---------- STEP 3: Open the portal and submit the generated email ----------
    // This simulates the user entering their email and clicking Continue to receive an OTP.
    await submitEmailPage.openAndSubmitEmail(address);

    // ---------- STEP 4: Poll Mail.tm for OTP and fill it on the OTP page ----------
    // Creates an instance of the OTP page and uses its logic to wait for an OTP email.
    // Once received, it enters the OTP code and proceeds to verification.
    const otpPage = new OtpPage(page);
    await otpPage.waitForAndFillOtp(token, { otpTimeout: 90000, verifyWait: 20000 });

    // ---------- STEP 5: Accept Terms of Service (TOS) ----------
    // Ticks the "I agree to Terms" checkbox and clicks Continue.
    const tos = new TosPage(page);
    await tos.acceptTermsAndContinue();

    // ---------- STEP 6: Choose "Enter passport manually" option ----------
    // Handles both Scan and Manual entry UI paths, choosing manual input.
    const passportScan = new PassportScanPage(page);
    await passportScan.proceedToManualEntry({ timeout: 30000 });

    // after accepting TOS and continuing:


    // ---------- STEP 7: Fill Passport Details ----------
    // Randomly generates a passport number, picks a random expiry day, selects country, and clicks Confirm.
    const passportDetails = new PassportDetailsPage(page);
    await passportDetails.fillPassportNumber();
    await passportDetails.fillPassportExpiryDate();
    await passportDetails.fillPassportCountry();
    await passportDetails.clickConfirm();

    // ---------- STEP 8: Confirm passport details ----------
    // Confirms the previously entered passport data by clicking "Confirm and Continue".
    const confirmPassportPage = new ConfirmPassportPage(page);
    await confirmPassportPage.ConfirmDetails();

    // ---------- STEP 9: Fill complete personal details ----------
    // Enters name, address, nationality, residence, and phone details, then saves/continues.
    const completeDetailsPage = new CompleteDetailsPage(page);
    await completeDetailsPage.fillCompleteDetails('Ireland');

    // ---------- STEP 10: Verify profile details were successfully saved ----------
    // Waits for the "Profile details saved" confirmation toast/text to appear.
    const verifyPage = new VerifyProfileSavedPage(page);
    await verifyPage.verifyProfileSaved(10000); // optional timeout, default 10s


  } catch (err) {
    // Global error handler for any step in the flow.
    // Logs the error and rethrows it so the Playwright test runner marks it as failed.
    console.error('[spec] Test error:', err?.message || err);
    throw err;
  } finally {
    // ---------- Cleanup ----------
    // Browser closing is commented out intentionally for debugging visibility.
    // Uncomment in CI or production runs to avoid leaving browsers open.
    // await browser.close();
  }
});
