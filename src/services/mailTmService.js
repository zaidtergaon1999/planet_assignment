// services/mailTmService.js
// This service provides a helper function to create a disposable email account using the Mail.tm API.
// It returns an object containing the generated email address, password, and access token.
// This is useful for automation flows that require temporary email addresses for OTP or signup verification.

import fetch from 'node-fetch'; // For Node <18 environments that don't have global `fetch`. Remove if running on Node 18+.

// Main exported function: creates a Mail.tm account and returns { address, password, token }.
export default async function createMailTmAccount() {

  // ---------- Step 1: Fetch available mail.tm domains ----------
  // Mail.tm provides domains that can be used for disposable email accounts.
  // This step retrieves a list of domains from the public API endpoint.
  const domainResp = await fetch('https://api.mail.tm/domains');

  // If the request fails (non-OK response), throw an error with additional context.
  if (!domainResp.ok) {
    const txt = await domainResp.text().catch(() => domainResp.status);
    throw new Error('Failed to fetch mail.tm domains: ' + txt);
  }

  // Parse the response JSON to extract the available domain list.
  const domJson = await domainResp.json();
  // The domains are typically found under the "hydra:member" array.
  const members = domJson['hydra:member'] || domJson;

  // Validate that at least one domain is available.
  if (!Array.isArray(members) || members.length === 0) {
    throw new Error('No mail.tm domains available');
  }

  // Pick the first available domain from the list for simplicity.
  const domain = members[0].domain || members[0].name || members[0];

  // ---------- Step 2: Generate credentials for a new disposable account ----------
  // Create a unique identifier using the current timestamp.
  const randomId = Date.now();
  // Construct a unique email address using the domain fetched earlier.
  const address = `zaidtergaon_${randomId}@${domain}`;
  // Generate a simple password pattern for this temporary account.
  const password = `P@ssw0rd${randomId}`;

  // ---------- Step 3: Create the Mail.tm account ----------
  // POST to the accounts endpoint to register a new mailbox using the generated credentials.
  const acctResp = await fetch('https://api.mail.tm/accounts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ address, password })
  });

  // If the account creation request fails, throw an error.
  if (!acctResp.ok) {
    const txt = await acctResp.text().catch(() => '');
    throw new Error('Failed to create Mail.tm account: ' + txt);
  }

  // ---------- Step 4: Obtain an authentication token ----------
  // Mail.tm requires an authentication token to access mailbox content (e.g., to read incoming emails).
  // We log in with the newly created credentials to retrieve a valid JWT token.
  const tokenResp = await fetch('https://api.mail.tm/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ address, password })
  });

  // If login fails or token retrieval fails, throw an error.
  if (!tokenResp.ok) {
    const txt = await tokenResp.text().catch(() => tokenResp.status);
    throw new Error('Failed to get Mail.tm token: ' + txt);
  }

  // Parse the token from the API response.
  const tokenJson = await tokenResp.json();
  const token = tokenJson.token;

  // Ensure the token is present, otherwise throw an error.
  if (!token) throw new Error('Mail.tm token missing');

  // ---------- Step 5: Return the created account credentials ----------
  // The returned object includes the generated email address, password, and token.
  return { address, password, token };
}
