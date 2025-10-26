// services/mailTmService.js
import fetch from 'node-fetch';

export default async function createMailTmAccount() {
  try {
    const domainResp = await fetch('https://api.mail.tm/domains');
    if (!domainResp.ok) throw new Error('Failed to fetch mail.tm domains');
    
    const domJson = await domainResp.json();
    const members = domJson['hydra:member'] || domJson;
    if (!Array.isArray(members) || members.length === 0) {
      throw new Error('No mail.tm domains available');
    }
    
    const domain = members[0].domain || members[0].name || members[0];
    const randomId = Date.now();
    const address = `user_${randomId}@${domain}`;
    const password = `P@ssw0rd${randomId}`;

    const acctResp = await fetch('https://api.mail.tm/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address, password }),
    });
    if (!acctResp.ok) throw new Error('Failed to create Mail.tm account');

    const tokenResp = await fetch('https://api.mail.tm/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address, password }),
    });
    if (!tokenResp.ok) throw new Error('Failed to get Mail.tm token');

    const tokenJson = await tokenResp.json();
    const token = tokenJson.token;
    if (!token) throw new Error('Mail.tm token missing from response');

    console.log('✅ Successfully created disposable Mail.tm account.');
    return { address, password, token };
  } catch (error) {
    console.error('❌ Failed to create Mail.tm account:', error.message);
    throw error;
  }
}
