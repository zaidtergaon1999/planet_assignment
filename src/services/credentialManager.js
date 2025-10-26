// credentialManager - Save/load email credentials for test reuse
import fs from 'fs';
import createMailTmAccount from './mailTmService.js';

const CREDENTIALS_FILE = './src/data/mail-credentials.json';

// Save credentials to JSON file
export function saveCredentials(credentials) {
  try {
    const data = {
      ...credentials,
      createdAt: new Date().toISOString(),
    };
    fs.writeFileSync(CREDENTIALS_FILE, JSON.stringify(data, null, 2));
    console.log('✅ Credentials saved to:', CREDENTIALS_FILE);
    return true;
  } catch (error) {
    console.warn('⚠️ Failed to save credentials:', error.message);
    return false;
  }
}

// Save user profile (firstName) to existing credentials
export function saveUserProfile(firstName) {
  try {
    const existing = loadCredentials();
    if (existing) {
      existing.userProfile = { firstName };
      fs.writeFileSync(CREDENTIALS_FILE, JSON.stringify(existing, null, 2));
      console.log('✅ User profile saved:', firstName);
      return true;
    }
    return false;
  } catch (error) {
    console.warn('⚠️ Failed to save user profile:', error.message);
    return false;
  }
}

// Load saved credentials from file
export function loadCredentials() {
  try {
    if (fs.existsSync(CREDENTIALS_FILE)) {
      const data = JSON.parse(fs.readFileSync(CREDENTIALS_FILE, 'utf-8'));
      console.log('✅ Loaded saved credentials:', data.address);
      return data;
    }
    return null;
  } catch (error) {
    console.warn('⚠️ Failed to load credentials:', error.message);
    return null;
  }
}

// Delete saved credentials file
export function clearCredentials() {
  try {
    if (fs.existsSync(CREDENTIALS_FILE)) {
      fs.unlinkSync(CREDENTIALS_FILE);
      console.log('✅ Credentials cleared');
      return true;
    }
    return false;
  } catch (error) {
    console.warn('⚠️ Failed to clear credentials:', error.message);
    return false;
  }
}

// Get saved account or create new one (with token verification)
export async function getOrCreateAccount(forceNew = false) {
  if (!forceNew) {
    const saved = loadCredentials();
    if (saved) {
      // Verify token still works before reusing
      try {
        const fetch = (await import('node-fetch')).default;
        const resp = await fetch('https://api.mail.tm/messages', {
          headers: { Authorization: `Bearer ${saved.token}` },
        });
        if (resp.ok) {
          console.log('✅ Reusing existing Mail.tm account');
          return saved;
        } else {
          console.log('⚠️ Saved credentials expired, creating new account...');
        }
      } catch (e) {
        console.warn('⚠️ Failed to verify saved credentials:', e.message);
      }
    }
  }

  // Create new account and save it
  const credentials = await createMailTmAccount();
  saveCredentials(credentials);
  return credentials;
}
