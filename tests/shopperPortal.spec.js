// tests/shopperPortal.spec.js
// End-to-end Shopper Portal flow using modular POM structure

import { test } from '@playwright/test';
import SubmitEmailPage from '../src/pages/SubmitEmailPage.js';
import createMailTmAccount from '../src/services/mailTmService.js';
import OtpPage from '../src/pages/OtpPage.js';
import TosPage from '../src/pages/TosPage.js';
import PassportScanner from '../src/pages/PassportScanPage.js';
import PassportDetailsPage from '../src/pages/PassportDetailsPage.js';
import ConfirmPassportPage from '../src/pages/ConfirmPassportPage.js';
import CompleteDetailsPage from '../src/pages/CompleteDetailsPage.js';
import VerifyProfileSavedPage from '../src/pages/VerifyProfileSavedPage.js';


test('Shopper Portal end-to-end verification flow', async ({ page, baseURL }) => {
  try {
    // ---------- STEP 1: Create a disposable email address ----------
    const {address, token } = await createMailTmAccount();
    console.log('[spec] Mail.tm address created:', address);

    // ---------- STEP 2: Open the portal and submit the generated email ----------
    const submitEmailPage = new SubmitEmailPage(page, process.env.PORTAL_URL || 'https://globaltes-taxfree.planetpayment.com/ShopperPortalEU/');
    await submitEmailPage.openAndSubmitEmail(address);

    // ---------- STEP 3: Poll Mail.tm for OTP and fill it ----------
    const otpPage = new OtpPage(page);
    await otpPage.waitForAndFillOtp(token, { otpTimeout: 90000, verifyWait: 20000 });

    // ---------- STEP 4: Accept Terms of Service ----------
    const tos = new TosPage(page);
    await tos.acceptTermsAndContinue();

    // ---------- STEP 5: Choose “Enter passport manually” ----------
    const scanner = new PassportScanner(page);
    await scanner.scanPassport();
    await scanner.enterPassportManually();

    // ---------- STEP 6: Fill Passport Details ----------
    const passportDetails = new PassportDetailsPage(page);
    await passportDetails.fillPassportNumber();
    await passportDetails.fillPassportExpiryDate();
    await passportDetails.fillPassportCountry();
    await passportDetails.clickConfirm();

    // ---------- STEP 7: Confirm passport details ----------
    const confirmPassportPage = new ConfirmPassportPage(page);
    await confirmPassportPage.ConfirmDetails();

    // ---------- STEP 8: Fill complete personal details ----------
    const completeDetailsPage = new CompleteDetailsPage(page);
    await completeDetailsPage.fillCompleteDetails('Ireland');

    // ---------- STEP 9: Verify profile details saved ----------
    const verifyPage = new VerifyProfileSavedPage(page);
    await verifyPage.verifyProfileSaved(10000);

    console.log('[spec] ✅ Shopper Portal flow completed successfully!');
  } catch (err) {
    console.error('[spec] ❌ Test error:', err?.message || err);
    throw err;
  }
});
