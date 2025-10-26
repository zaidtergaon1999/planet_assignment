// reloginWithSavedEmail.spec.js - Verifies saved user profile after relogin
import { test, expect } from '@playwright/test';
import SubmitEmail from '../src/pages/SubmitEmailPage.js';
import SubmitOtp from '../src/pages/SubmitOtpPage.js';
import VerifyProfileSavedToast from '../src/pages/VerifyProfileSavedPage.js';
import { loadCredentials } from '../src/services/credentialManager.js';
import { clearOldMessages } from '../src/services/otpService.js';

test('Relogin - verify existing user profile', async ({ page, baseURL }) => {
  try {
    // Load saved credentials from previous E2E test
    const credentials = loadCredentials();
    
    if (!credentials) {
      console.error('❌ No saved credentials found.');
      console.log('💡 Run the main E2E test first: npm run test:e2e');
      throw new Error('No saved credentials - run main test first');
    }

    const { address, token, userProfile } = credentials;
    const firstName = userProfile?.firstName;

    console.log(`🔐 Relogin with saved email: ${address}`);
    console.log(`📅 Account created at: ${credentials.createdAt}`);
    if (firstName) console.log(`👤 Expected user: ${firstName}`);

    // Clear old messages to ensure fresh OTP retrieval
    console.log('🧹 Clearing old messages from mailbox...');
    const oldMessageIds = await clearOldMessages(token);

    // Submit saved email address
    const submitEmail = new SubmitEmail(page, baseURL);
    await submitEmail.openAndSubmitEmail(address);

    // Wait for fresh OTP (skipping old message IDs)
    console.log('⏳ Waiting for NEW OTP...');
    const submitOtp = new SubmitOtp(page);
    await submitOtp.findAndFillOtp(token, { skipMessageIds: oldMessageIds });

    console.log('✅ Successfully logged in!');

    // User should land on profile page (registration already complete)
    console.log('🔍 Verifying existing user profile...');
    await page.waitForTimeout(3000);

    // Verify firstName appears on profile page ("Hello {firstName}")
    if (firstName) {
      const verifyProfile = new VerifyProfileSavedToast(page);
      const nameFound = await verifyProfile.verifyUserName(firstName);
      
      expect(nameFound).toBeTruthy();
      console.log(`✅ Profile verified! User "${firstName}" is already registered.`);
      console.log('💡 Registration was skipped - user logged directly into their profile!');
    } else {
      console.warn('⚠️ No firstName saved from previous test - skipping name verification');
    }

    // Save screenshot of verified profile
    await page.screenshot({ path: 'test-results/relogin-profile-verified.png' });
    console.log('📸 Screenshot saved: test-results/relogin-profile-verified.png');
    
  } catch (err) {
    console.error('❌ Relogin test error:', err?.message || err);
    throw err;
  }
});
