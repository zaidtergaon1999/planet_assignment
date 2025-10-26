// shopperPortalE2E.spec.js - Full registration flow test
import { test } from '@playwright/test';
import SubmitEmail from '../src/pages/SubmitEmailPage.js';
import { getOrCreateAccount, saveUserProfile } from '../src/services/credentialManager.js';
import SubmitOtp from '../src/pages/SubmitOtpPage.js';
import TosCheck from '../src/pages/TosPage.js';
import PassportButtons from '../src/pages/PassportButtonPage.js';
import PassportDetails from '../src/pages/PassportDetailsPage.js';
import ConfirmPassportButton from '../src/pages/ConfirmPassportPage.js';
import CompleteDetails from '../src/pages/CompleteDetailsPage.js';
import VerifyProfileSavedToast from '../src/pages/VerifyProfileSavedPage.js';
import { handleNpsPopup } from '../src/utils/npshandler.js';

test('Shopper Portal end-to-end verification flow', async ({ page, baseURL }) => {
  try {
    // Create fresh disposable email account
    const { address, token } = await getOrCreateAccount(true);
    console.log(`📧 Created fresh email: ${address}`);

    // Submit email address to portal
    const submitEmail = new SubmitEmail(page, baseURL);
    await submitEmail.openAndSubmitEmail(address);

    // Retrieve and submit OTP from Mail.tm
    const submitOtp = new SubmitOtp(page);
    await submitOtp.findAndFillOtp(token);

    // Check if user already exists (lands on CompleteDetails) or new user
    await page.waitForTimeout(2000);
    const currentUrl = page.url();
    console.log(`[spec] Current URL after OTP: ${currentUrl}`);

    if (currentUrl.includes('CompleteDetails')) {
      // Existing user - skip to filling details
      console.log('[spec] 🔄 Existing user detected - skipping to CompleteDetails');
      
      const completeDetails = new CompleteDetails(page);
      const firstName = await completeDetails.fillNames();
      await completeDetails.fillDateOfBirth();
      await completeDetails.selectNationality();
      await completeDetails.selectPermanentResidence();
      await completeDetails.fillAddressFields();
      await completeDetails.fillMobileNumber();
      await completeDetails.clickSave();
      
      // Save firstName for relogin test verification
      if (firstName) saveUserProfile(firstName);

      // Verify profile saved toast appears
      const verifyProfile = new VerifyProfileSavedToast(page);
      await verifyProfile.verifyProfileSaved();
      
    } else {
      // New user - complete full registration flow
      console.log('[spec] 👤 New user - completing full registration flow');
      
      // Accept Terms of Service
      const tosCheck = new TosCheck(page);
      await tosCheck.acceptTermsAndContinue();

      // Click "Scan Passport" then "Enter Manually"
      const passportClick = new PassportButtons(page);
      await passportClick.clickScanPassport();
      await passportClick.clickEnterPassportManually();

      // Block NPS popup before entering passport details
      console.log('[spec] Checking for NPS popup...');
      await handleNpsPopup(page, { timeout: 5000 }).catch((err) => {
        console.warn('[spec] NPS handler error (non-fatal):', err?.message);
      });
      await page.waitForTimeout(500);

      // Fill passport details (number, expiry, country)
      const passportDetails = new PassportDetails(page);
      await passportDetails.fillPassportNumber();
      await passportDetails.fillPassportExpiryDate();
      await passportDetails.fillPassportCountry();
      await passportDetails.clickConfirm();

      // Confirm passport details page
      const confirmPassportButton = new ConfirmPassportButton(page);
      await confirmPassportButton.ConfirmDetails();

      // Fill complete personal details form
      const completeDetails = new CompleteDetails(page);
      const firstName = await completeDetails.fillNames();
      await completeDetails.fillDateOfBirth();
      await completeDetails.selectNationality();
      await completeDetails.selectPermanentResidence();
      await completeDetails.fillAddressFields();
      await completeDetails.fillMobileNumber();
      await completeDetails.clickSave();
      
      // Save firstName for relogin test verification
      if (firstName) saveUserProfile(firstName);

      // Verify profile saved toast appears
      const verifyProfile = new VerifyProfileSavedToast(page);
      await verifyProfile.verifyProfileSaved();
    }

    console.log('[spec] ✅ Shopper Portal flow completed successfully!');
  } catch (err) {
    console.error('[spec] ❌ Test error:', err?.message || err);
    throw err;
  }
});
