// otpService - Polls Mail.tm API for OTP codes
import fetch from 'node-fetch';

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Marks all existing messages as read to avoid using old OTPs
export async function clearOldMessages(token) {
  try {
    const listResp = await fetch('https://api.mail.tm/messages', {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (listResp.ok) {
      const listJson = await listResp.json();
      const messages = listJson['hydra:member'] || [];
      console.log(`[otpService] Found ${messages.length} existing messages - marking as seen`);
      
      // Mark all messages as seen (ignore errors)
      for (const msg of messages) {
        try {
          await fetch(`https://api.mail.tm/messages/${msg.id}`, {
            method: 'PATCH',
            headers: { 
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ seen: true })
          });
        } catch (e) {
          // Ignore - some messages might not support PATCH
        }
      }
      
      return messages.map(m => m.id); // Return IDs to skip later
    }
    return [];
  } catch (error) {
    console.warn('[otpService] Failed to clear old messages:', error.message);
    return [];
  }
}

// Poll Mail.tm inbox for new OTP code (6 digits pattern)
export async function pollForOtp(token, { timeoutMs = 90000, pollInterval = 3000, skipMessageIds = [] } = {}) {
  const start = Date.now();
  const startTime = new Date(start).toISOString();
  let lastMessageId = null;

  try {
    console.log(`[otpService] Starting OTP poll at ${startTime}`);
    if (skipMessageIds.length > 0) {
      console.log(`[otpService] Skipping ${skipMessageIds.length} old message(s)`);
    }
    
    while (Date.now() - start < timeoutMs) {
      try {
        const listResp = await fetch('https://api.mail.tm/messages', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (listResp.ok) {
          const listJson = await listResp.json();
          const messages = listJson['hydra:member'] || [];

          if (messages.length > 0) {
            const newestMessage = messages[0]; // Newest message is first
            
            // Skip if this was an old message from before test started
            if (skipMessageIds.includes(newestMessage.id)) {
              console.log('[otpService] Skipping old message, waiting for new OTP...');
              await sleep(pollInterval);
              continue;
            }
            
            // Only process NEW messages (not checked before)
            if (newestMessage.id !== lastMessageId) {
              const msgResp = await fetch(`https://api.mail.tm/messages/${newestMessage.id}`, {
                headers: { Authorization: `Bearer ${token}` },
              });

              if (msgResp.ok) {
                const msgJson = await msgResp.json();
                const msgCreatedAt = msgJson.createdAt;
                const bodyText = msgJson.text || msgJson.html || JSON.stringify(msgJson);
                const match = String(bodyText).match(/(\d{4,6})/); // Match 4-6 digit codes

                if (match) {
                  const otp = match[1];
                  console.log('✅ OTP received successfully from Mail.tm.');
                  console.log(`[otpService] Message ID: ${newestMessage.id}`);
                  console.log(`[otpService] Message created: ${msgCreatedAt}`);
                  console.log(`[otpService] OTP extracted: ${otp}`);
                  return otp;
                } else {
                  console.log('[otpService] Message found but no OTP pattern matched');
                }
              }
              
              lastMessageId = newestMessage.id;
            }
          }
        }
      } catch (e) {
        console.warn('[otpService] Polling error:', e?.message);
      }

      await sleep(pollInterval); // Wait before next poll
    }

    console.error('❌ OTP retrieval timed out after', timeoutMs / 1000, 'seconds.');
    return null;
  } catch (error) {
    console.error('❌ Failed to poll Mail.tm for OTP:', error.message);
    return null;
  }
}
