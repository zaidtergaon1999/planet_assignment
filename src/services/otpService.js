// src/services/otpService.js
// -----------------------------------------------------------------------------
// Utility service to poll Mail.tm inbox for an incoming OTP (One-Time Password).
//
// Responsibilities:
//   - Repeatedly check Mail.tm API for new messages.
//   - Retrieve and parse the most recent email for a 4–6 digit OTP code.
//   - Return the OTP if found within the timeout window.
//   - Provide a single clean log (✅ success or ❌ failure) for CI clarity.
//
// Design Goals:
//   - Robust against network delays and transient failures.
//   - Non-fatal: logs warnings, retries automatically until timeout.
//   - Minimal external dependencies, only using `fetch`.
// -----------------------------------------------------------------------------

// --- Imports ---
// Use `node-fetch` for environments < Node 18.
// If running in Node 18+ or Playwright (where fetch is global), this import can be safely removed.
import fetch from 'node-fetch';

// --- Helper: Sleep utility ---------------------------------------------------
// A simple promise-based delay function to pause between polling attempts.
async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * pollForOtp
 * ---------------------------------------------------------------------------
 * Continuously polls the Mail.tm inbox for incoming OTP emails until:
 *   - The OTP is found, OR
 *   - The timeout period expires.
 *
 * @param {string} token - The Mail.tm Bearer token obtained from authentication.
 * @param {Object} opts - Configuration options.
 * @param {number} [opts.timeoutMs=90000] - Maximum total wait time (ms).
 * @param {number} [opts.pollInterval=3000] - Delay (ms) between consecutive polls.
 *
 * @returns {Promise<string|null>} - The extracted OTP code if found, otherwise null.
 */
export async function pollForOtp(
  token,
  { timeoutMs = 90000, pollInterval = 3000 } = {}
) {
  const start = Date.now(); // Record start time for manual timeout tracking

  try {
    // -------------------------------------------------------------------------
    // STEP 1: Poll repeatedly until OTP found or timeout reached
    // -------------------------------------------------------------------------
    while (Date.now() - start < timeoutMs) {
      try {
        // --- Step 1.1: Fetch message list from Mail.tm -----------------------
        // Retrieves recent messages for the authenticated mailbox.
        const listResp = await fetch('https://api.mail.tm/messages', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (listResp.ok) {
          const listJson = await listResp.json();
          // Extract array of messages (Mail.tm uses Hydra-formatted JSON)
          const messages = listJson['hydra:member'] || [];

          // --- Step 1.2: If any messages exist, fetch the newest one ----------
          if (messages.length > 0) {
            const id = messages[0].id; // newest message ID
            const msgResp = await fetch(`https://api.mail.tm/messages/${id}`, {
              headers: { Authorization: `Bearer ${token}` },
            });

            if (msgResp.ok) {
              const msgJson = await msgResp.json();

              // --- Step 1.3: Extract OTP digits from message body -------------
              // OTPs may appear in plain text, HTML, or raw JSON.
              const bodyText =
                msgJson.text || msgJson.html || JSON.stringify(msgJson);

              // Match any 4–6 consecutive digits (standard OTP length)
              const match = String(bodyText).match(/(\d{4,6})/);

              if (match) {
                const otp = match[1];
                console.log('✅ OTP received successfully from Mail.tm.');
                return otp;
              } else {
                console.log('[otpService] Email arrived but OTP digits not found yet.');
              }
            }
          }
        } else {
          // Handle non-200 responses gracefully
          console.warn(
            '[otpService] Message list request failed:',
            await listResp.text().catch(() => listResp.status)
          );
        }
      } catch (e) {
        // --- Step 1.4: Handle transient network or parsing errors gracefully ---
        console.warn('[otpService] Polling error:', e?.message || e);
      }

      // --- Step 1.5: Wait before next poll attempt ---------------------------
      await sleep(pollInterval);
    }

    // -------------------------------------------------------------------------
    // STEP 2: Timeout reached without finding OTP
    // -------------------------------------------------------------------------
    console.error('❌ OTP retrieval timed out after waiting for', timeoutMs / 1000, 'seconds.');
    return null;
  } catch (error) {
    // -------------------------------------------------------------------------
    // STEP 3: Fatal error (should rarely occur)
    // -------------------------------------------------------------------------
    console.error('❌ Failed to poll Mail.tm for OTP:', error.message);
    return null;
  }
}
