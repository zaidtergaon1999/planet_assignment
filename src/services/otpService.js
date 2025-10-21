// src/services/otpService.js
// Utility service that polls Mail.tm for incoming messages and extracts a 4–6 digit OTP.
// This file is used to dynamically fetch verification codes during automated tests.
// It’s designed to work even when emails take several seconds to arrive.

// --- Imports ---
// We use `node-fetch` to perform HTTP requests. If your environment (like Node >=18 or Playwright)
// already provides a global `fetch`, you can remove this import safely.
import fetch from 'node-fetch';

// --- Helper sleep function ---
// Small promise-based delay utility to wait between polling attempts.
async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

/**
 * Poll the Mail.tm API repeatedly until an OTP email arrives or the timeout is reached.
 *
 * @param {string} token - The Mail.tm Bearer token obtained after login/registration.
 * @param {Object} opts - Configuration options for polling.
 * @param {number} opts.timeoutMs - Maximum time (ms) to keep polling before giving up. Default 90 seconds.
 * @param {number} opts.pollInterval - Delay (ms) between consecutive polls. Default 3 seconds.
 * @returns {string|null} The extracted OTP code if found, otherwise null after timeout.
 */
export async function pollForOtp(token, { timeoutMs = 90000, pollInterval = 3000 } = {}) {
  const start = Date.now(); // record start time to manage timeout manually

  // Keep polling until either OTP found or timeout reached.
  while (Date.now() - start < timeoutMs) {
    try {
      // --- Step 1: Fetch the message list ---
      // Mail.tm API endpoint returns the most recent messages in the inbox.
      const listResp = await fetch('https://api.mail.tm/messages', {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (listResp.ok) {
        const listJson = await listResp.json();
        // Extract the message array (API response uses Hydra format)
        const messages = listJson['hydra:member'] || [];

        // --- Step 2: If messages exist, fetch the latest one ---
        if (messages.length > 0) {
          const id = messages[0].id; // newest message (first entry)
          const msgResp = await fetch(`https://api.mail.tm/messages/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
          });

          if (msgResp.ok) {
            const msgJson = await msgResp.json();

            // --- Step 3: Extract the OTP from the email body ---
            // Mail.tm message body may appear in `text`, `html`, or fallback to the raw JSON string.
            const bodyText = msgJson.text || msgJson.html || JSON.stringify(msgJson);

            // Match any 4–6 consecutive digits (common OTP length).
            const m = String(bodyText).match(/(\d{4,6})/);

            if (m) return m[1]; // OTP found → return immediately
            else console.log('[otpService] Mail arrived but OTP not found yet.');
          }
        }
      } else {
        // Handle error responses gracefully (e.g., expired token, network issues)
        console.warn('[otpService] list request failed:', await listResp.text().catch(()=>listResp.status));
      }
    } catch (e) {
      // Log transient network or parsing errors without stopping the loop
      console.warn('[otpService] poll error:', e?.message || e);
    }

    // --- Step 4: Wait before next poll attempt ---
    await sleep(pollInterval);
  }

  // If loop completes without finding OTP → return null to signal timeout
  return null;
}