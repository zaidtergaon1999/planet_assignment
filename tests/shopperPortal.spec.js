// tests/shopperPortal.spec.js
// End-to-end Shopper Portal flow using modular POM structure

import { test } from '@playwright/test';
import SubmitEmail from '../src/pages/SubmitEmailPage.js';
import createMailTmAccount from '../src/services/mailTmService.js';
import SubmitOtp from '../src/pages/SubmitOtpPage.js';
import TosCheck from '../src/pages/TosPage.js';
import PassportButtons from '../src/pages/PassportButtonPage.js';
import PassportDetails from '../src/pages/PassportDetailsPage.js';
import ConfirmPassportButton from '../src/pages/ConfirmPassportPage.js';
import CompleteDetails from '../src/pages/CompleteDetailsPage.js';
import VerifyProfileSavedToast from '../src/pages/VerifyProfileSavedPage.js';


test('Shopper Portal end-to-end verification flow', async ({ page, baseURL }) => {
  try {
    // ---------- STEP 1: Create a disposable email address ----------
    const {address, token } = await createMailTmAccount();
    console.log('[spec] Mail.tm address created:', address);

    // ---------- STEP 2: Open the portal and submit the generated email ----------
    const submitEmail = new SubmitEmail(page, baseURL);
    await submitEmail.openAndSubmitEmail(address);

    // ---------- STEP 3: Poll Mail.tm for OTP and fill it ----------
    const submitOtp = new SubmitOtp(page);
    await submitOtp.waitForAndFillOtp(token);

    // ---------- STEP 4: Accept Terms of Service ----------
    const tosCheck = new TosCheck(page);
    await tosCheck.acceptTermsAndContinue();

    // ---------- STEP 5: Choose “Enter passport manually” ----------
    const passportClick = new PassportButtons(page);
    await passportClick.scanPassport();
    await passportClick.enterPassportManually();

    // ---------- STEP 6: Fill Passport Details ----------
    const passportDetails = new PassportDetails(page);
    await passportDetails.fillPassportNumber();
    await passportDetails.fillPassportExpiryDate();
    await passportDetails.fillPassportCountry();
    await passportDetails.clickConfirm();

    // ---------- STEP 7: Confirm passport details ----------
    const confirmPassportButton = new ConfirmPassportButton(page);
    await confirmPassportButton.ConfirmDetails();

    // ---------- STEP 8: Fill complete personal details ----------
    const completeDetails = new CompleteDetails(page);
    await completeDetails.fillCompleteDetails();

    // ---------- STEP 9: Verify profile details saved ----------
    const verifyProfile = new VerifyProfileSavedToast(page);
    await verifyProfile.verifyProfileSaved();

    console.log('[spec] ✅ Shopper Portal flow completed successfully!');
  } catch (err) {
    console.error('[spec] ❌ Test error:', err?.message || err);
    throw err;
  }
});
