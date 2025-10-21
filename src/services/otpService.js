// src/services/otpService.js
// Poll Mail.tm messages and extract a 4-6 digit OTP.
// If running on Node >=18 you can remove the node-fetch import and use global fetch.
import fetch from 'node-fetch'; // remove if your environment already provides global fetch

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

/**
 * Polls the Mail.tm API for messages and extracts the first 4-6 digit code it finds.
 * @param {string} token - Mail.tm bearer token
 * @param {Object} opts
 * @param {number} opts.timeoutMs - total poll timeout in ms (default 90_000)
 * @param {number} opts.pollInterval - poll interval in ms (default 3000)
 * @returns {string|null} OTP string or null on timeout
 */
export async function pollForOtp(token, { timeoutMs = 90000, pollInterval = 3000 } = {}) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const listResp = await fetch('https://api.mail.tm/messages', {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (listResp.ok) {
        const listJson = await listResp.json();
        const messages = listJson['hydra:member'] || [];
        if (messages.length > 0) {
          const id = messages[0].id;
          const msgResp = await fetch(`https://api.mail.tm/messages/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          if (msgResp.ok) {
            const msgJson = await msgResp.json();
            const bodyText = msgJson.text || msgJson.html || JSON.stringify(msgJson);
            const m = String(bodyText).match(/(\d{4,6})/);
            if (m) return m[1];
            else console.log('[otpService] Mail arrived but OTP not found yet.');
          }
        }
      } else {
        console.warn('[otpService] list request failed:', await listResp.text().catch(()=>listResp.status));
      }
    } catch (e) {
      console.warn('[otpService] poll error:', e?.message || e);
    }
    await sleep(pollInterval);
  }
  return null;
}
