#!/usr/bin/env node
// src/utils/manageCredentials.js
import { loadCredentials, clearCredentials, getOrCreateAccount } from '../services/credentialManager.js';

const command = process.argv[2];

async function main() {
  switch (command) {
    case 'show':
      const creds = loadCredentials();
      if (creds) {
        console.log('\n📧 Saved Credentials:');
        console.log('━'.repeat(50));
        console.log('Email:    ', creds.address);
        console.log('Password: ', creds.password);
        console.log('Token:    ', creds.token.substring(0, 20) + '...');
        console.log('Created:  ', creds.createdAt);
        console.log('━'.repeat(50));
      } else {
        console.log('❌ No saved credentials found');
      }
      break;

    case 'clear':
      clearCredentials();
      break;

    case 'new':
      console.log('🔄 Creating new account (forcing new creation)...');
      const newCreds = await getOrCreateAccount(true);
      console.log('\n📧 New Account Created:');
      console.log('━'.repeat(50));
      console.log('Email:    ', newCreds.address);
      console.log('Password: ', newCreds.password);
      console.log('━'.repeat(50));
      break;

    case 'help':
    default:
      console.log('\n📋 Credential Manager Commands:');
      console.log('━'.repeat(50));
      console.log('  npm run creds:show   - Show saved credentials');
      console.log('  npm run creds:clear  - Clear saved credentials');
      console.log('  npm run creds:new    - Create new account');
      console.log('━'.repeat(50));
      break;
  }
}

main().catch(console.error);
