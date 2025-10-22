// services/mailTmService.js
// -----------------------------------------------------------------------------
// Purpose:
//   This service creates a **disposable email account** using the Mail.tm API.
//
// Usage Context:
//   Ideal for automation flows where temporary email accounts are needed
//   (e.g., signup tests, OTP verification, or sandbox login scenarios).
//
// Functionality Overview:
//   1. Fetch available domains from Mail.tm.
//   2. Generate a random unique email + password.
//   3. Create the account on Mail.tm.
//   4. Authenticate and retrieve an access token.
//   5. Return the credentials ({ address, password, token }) with one clean log.
//
// Note: Uses `node-fetch` for Node <18 environments. If running Node 18+, you can
//       remove the import since `fetch` is globally available.
// -----------------------------------------------------------------------------

import fetch from 'node-fetch'; // Remove if using Node 18+ (global fetch available)

export default async function createMailTmAccount() {
  try {
    // -------------------------------------------------------------------------
    // STEP 1: Fetch available mail.tm domains
    // -------------------------------------------------------------------------
    // Mail.tm provides temporary email domains through their public API.
    // We’ll retrieve this list and use one of them to create our disposable mailbox.
    const domainResp = await fetch('https://api.mail.tm/domains');

    // Validate HTTP response; if not OK, throw with additional error info.
    if (!domainResp.ok) {
      const txt = await domainResp.text().catch(() => domainResp.status);
      throw new Error('Failed to fetch mail.tm domains: ' + txt);
    }

    // Parse the response JSON to extract domain information.
    const domJson = await domainResp.json();
    const members = domJson['hydra:member'] || domJson; // Some responses wrap under "hydra:member"

    // Ensure at least one domain is available.
    if (!Array.isArray(members) || members.length === 0) {
      throw new Error('No mail.tm domains available');
    }

    // Use the first domain in the list (simplest and sufficient for automation).
    const domain = members[0].domain || members[0].name || members[0];

    // -------------------------------------------------------------------------
    // STEP 2: Generate unique credentials for this temporary mailbox
    // -------------------------------------------------------------------------
    // Use the current timestamp to ensure uniqueness across test runs.
    const randomId = Date.now();
    const address = `user_${randomId}@${domain}`;
    const password = `P@ssw0rd${randomId}`;

    // -------------------------------------------------------------------------
    // STEP 3: Create the Mail.tm account using the generated credentials
    // -------------------------------------------------------------------------
    // This registers a new mailbox that can later receive verification emails.
    const acctResp = await fetch('https://api.mail.tm/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address, password }),
    });

    // Validate account creation response.
    if (!acctResp.ok) {
      const txt = await acctResp.text().catch(() => '');
      throw new Error('Failed to create Mail.tm account: ' + txt);
    }

    // -------------------------------------------------------------------------
    // STEP 4: Authenticate to obtain an access token
    // -------------------------------------------------------------------------
    // We now log in with the newly created credentials to receive a JWT token.
    const tokenResp = await fetch('https://api.mail.tm/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address, password }),
    });

    // Validate authentication response.
    if (!tokenResp.ok) {
      const txt = await tokenResp.text().catch(() => tokenResp.status);
      throw new Error('Failed to get Mail.tm token: ' + txt);
    }

    // Extract the token from the response body.
    const tokenJson = await tokenResp.json();
    const token = tokenJson.token;

    // Ensure the token was returned.
    if (!token) throw new Error('Mail.tm token missing from response');

    // -------------------------------------------------------------------------
    // STEP 5: Log final success and return account credentials
    // -------------------------------------------------------------------------
    console.log('✅ Successfully created disposable Mail.tm account.');
    return { address, password, token };
  } catch (error) {
    // -------------------------------------------------------------------------
    // STEP 5 (Alternative): Log final failure if any step fails
    // -------------------------------------------------------------------------
    console.error('❌ Failed to create Mail.tm disposable account:', error.message);
    throw error; // Re-throw to allow upstream handling in tests
  }
}
