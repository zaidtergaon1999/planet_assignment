# Planet Shopper Portal - E2E Automation

Complete end-to-end test automation for Planet Shopper Portal using Playwright and Mail.tm disposable email service.

## Features

- ✅ **Full Registration Flow** - Email → OTP → TOS → Passport → Profile Completion
- ✅ **Credential Persistence** - Save and reuse email accounts across test runs
- ✅ **Fresh OTP Handling** - Smart message filtering ensures only new OTPs are retrieved
- ✅ **NPS Popup Blocking** - CSS injection prevents survey popups from blocking interactions
- ✅ **Profile Verification** - Relogin tests verify saved user profiles
- ✅ **Page Object Model** - Clean, maintainable architecture with separated concerns

## Quick Start

### Installation

```bash
npm install
```

### Run Tests

```bash
# Full E2E test (creates new account)
npm run test:e2e

# Relogin test (uses saved account)
npm run test:relogin
```

### Manage Credentials

```bash
# View saved credentials
npm run creds:show

# Clear saved credentials
npm run creds:clear

# Create new account
npm run creds:new
```

## Project Structure

```
planet_assignment/
├── src/
│   ├── data/
│   │   ├── data.json              # Test data (names, addresses, etc.)
│   │   └── mail-credentials.json  # Saved email credentials
│   ├── pages/                     # Page Object Models
│   │   ├── CompleteDetailsPage.js
│   │   ├── ConfirmPassportPage.js
│   │   ├── PassportButtonPage.js
│   │   ├── PassportDetailsPage.js
│   │   ├── SubmitEmailPage.js
│   │   ├── SubmitOtpPage.js
│   │   ├── TosPage.js
│   │   └── VerifyProfileSavedPage.js
│   ├── services/                  # Business logic
│   │   ├── credentialManager.js   # Save/load credentials
│   │   ├── mailTmService.js       # Create Mail.tm accounts
│   │   └── otpService.js          # Poll for OTP codes
│   └── utils/
│       ├── manageCredentials.js   # CLI credential manager
│       └── npshandler.js          # NPS popup blocker
├── tests/
│   ├── shopperPortalE2E.spec.js   # Full registration test
│   └── reloginWithSavedEmail.spec.js # Profile verification test
├── playwright.config.js
└── package.json
```

## How It Works

### 1. E2E Test Flow (shopperPortalE2E.spec.js)

1. **Create Email Account** - Generate disposable email via Mail.tm API
2. **Submit Email** - Enter email address in portal
3. **Retrieve OTP** - Poll Mail.tm inbox for verification code
4. **Submit OTP** - Fill OTP in 6-digit input fields
5. **Accept TOS** - Check Terms of Service checkbox
6. **Passport Entry** - Click "Scan Passport" → "Enter Manually"
7. **Block NPS Popup** - Inject CSS to hide survey popups
8. **Fill Passport** - Random passport number, expiry date, country
9. **Confirm Passport** - Click confirm button
10. **Complete Details** - Fill name, DOB (16+), address, mobile
11. **Save Profile** - Submit form and save firstName to credentials
12. **Verify Saved** - Check for success toast message

### 2. Relogin Test Flow (reloginWithSavedEmail.spec.js)

1. **Load Credentials** - Read saved email from previous E2E test
2. **Clear Old Messages** - Mark existing messages as read
3. **Submit Email** - Enter saved email address
4. **Get Fresh OTP** - Wait for NEW OTP (skip old message IDs)
5. **Submit OTP** - Fill fresh OTP code
6. **Verify Profile** - Check "Hello {firstName}" appears on page
7. **Screenshot** - Save proof of successful profile verification

## Key Components

### Page Objects

All page interactions are encapsulated in dedicated classes:

- **SubmitEmailPage** - Opens portal and submits email
- **SubmitOtpPage** - Retrieves and fills OTP
- **TosPage** - Accepts Terms of Service
- **PassportButtonPage** - Clicks passport scanning options
- **PassportDetailsPage** - Fills passport information
- **ConfirmPassportPage** - Confirms passport details
- **CompleteDetailsPage** - Fills personal information form
- **VerifyProfileSavedPage** - Checks success messages

### Services

Business logic separated from page objects:

- **mailTmService** - Creates disposable email accounts via Mail.tm API
- **otpService** - Polls inbox for OTP codes with message filtering
- **credentialManager** - Saves/loads email credentials and user profiles

### Utilities

- **npshandler** - Multi-strategy NPS popup blocker (CSS injection, dismiss buttons)
- **manageCredentials** - CLI tool for credential management

## Configuration

### Playwright Config (playwright.config.js)

```javascript
{
  testDir: './tests',
  timeout: 120000,              // 2 minutes per test
  headless: false,              // Show browser
  slowMo: 300,                  // 300ms delay between actions
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  baseURL: 'https://globaltes-taxfree.planetpayment.com/ShopperPortalEU/'
}
```

### Camera Disable

Fake media streams prevent camera from activating:
```javascript
launchOptions: {
  args: [
    '--use-fake-ui-for-media-stream',
    '--use-fake-device-for-media-stream',
  ]
}
```

## Test Data

Random test data from `src/data/data.json`:

- **Names**: givenNames, surnames
- **Addresses**: addresses1, addresses2, cities, states, postcodes
- **Generated**: Passport numbers (1 letter + 7 digits), DOB (16+ years), mobile numbers (8 digits)

## Credential Persistence

Saved to `src/data/mail-credentials.json`:

```json
{
  "address": "user_1761489331706@tiffincrane.com",
  "password": "SecurePass123!",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "createdAt": "2025-10-26T14:35:32.010Z",
  "userProfile": {
    "firstName": "Cian"
  }
}
```

## Fresh OTP Handling

**Problem**: Mail.tm keeps old messages, causing relogin to use stale OTPs

**Solution**: 
1. `clearOldMessages()` - Marks existing messages as seen, returns their IDs
2. `pollForOtp()` - Skips messages with old IDs, only returns fresh OTPs

```javascript
// Before login
const oldMessageIds = await clearOldMessages(token);

// During login - skip old messages
await submitOtp.findAndFillOtp(token, { skipMessageIds: oldMessageIds });
```

## NPS Popup Blocking

Multi-strategy approach:

1. **CSS Injection** - Hide popup with `display: none !important`
2. **Dismiss Buttons** - Click "Ask Me Later" if found
3. **Random Score** - Submit random rating if popup persists
4. **Iframe Handling** - Check inside iframes for nested popups

## Troubleshooting

### No saved credentials
```bash
# Run E2E test first to create credentials
npm run test:e2e
```

### Old OTP error
Fresh OTP logic already implemented - test should handle this automatically

### DOB validation error
DOB generation ensures 16+ years: `maxYear = currentYear - 16`

### Camera light turns on
Disabled via config: `--use-fake-ui-for-media-stream`

### NPS popup blocking passport input
CSS injection runs before passport entry - popup should be hidden

## Dependencies

```json
{
  "@playwright/test": "^1.56.1",
  "node-fetch": "^3.3.2"
}
```

## License

ISC

---

**Author**: Zaid Tergaon  
**Last Updated**: October 26, 2025

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Run Tests

```bash
# Full E2E test (headed mode) default mode
npm run test:e2e 

# Full E2E test (headless mode)
npm run test:e2e -- -- headless

# Debug mode
npm run test:e2e -- --debug

# Relogin test (uses saved credentials)
npm run test:relogin


```


##  Configuration

### Credential Management

```bash
# Show saved credentials
npm run creds:show

# Create new account (force new)
npm run creds:new

# Clear saved credentials
npm run creds:clear
```


##  Test Workflow

### First Run (E2E)
1. Creates fresh Mail.tm account
2. Submits email to portal
3. Waits for OTP email
4. Completes registration flow
5. Saves credentials with firstName

### Subsequent Run (Relogin)
1. Loads saved email
2. Clears old OTP messages
3. Submits saved email
4. Gets **fresh OTP** for this login
5. Skips registration (user exists)
6. Verifies name on profile: "Hello {firstName}"

##  Test Reports

After test execution:

```bash
# View HTML report
npx playwright show-report

# Reports located at:
playwright-report/index.html
```

##  Key Components

### Page Objects

**SubmitEmailPage** - Email submission
**SubmitOtpPage** - OTP input with fresh message filtering
**PassportDetailsPage** - Passport data + NPS blocking
**CompleteDetailsPage** - Personal details with age validation
**VerifyProfileSavedPage** - Profile verification with name assertion

### Services

**mailTmService** - Creates disposable email accounts
**otpService** - Polls for OTPs, filters old messages
**credentialManager** - Persists credentials across runs

### Utils

**npshandler** - Multi-strategy NPS popup blocking:
- CSS injection
- Dismiss button clicking
- Iframe handling

##  Example Output

```
 Successfully created disposable Mail.tm account.
 Created fresh email: user_1761479934734@tiffincrane.com
 Email submitted successfully and Continue clicked.
 OTP received successfully from Mail.tm.
 OTP extracted: 040536
 Successfully accepted Terms of Service and continued.
 Passport details successfully entered and confirmed.
 Complete details filled and saved successfully.
 User profile saved: Conor

# Relogin Test
 Relogin with saved email: user_1761479934734@tiffincrane.com
 Clearing old messages from mailbox...
 Waiting for NEW OTP...
 OTP extracted: 668687
 User name verified on page: "Hello Conor"
 Profile verified! User "Conor" is already registered.
```

##  Troubleshooting

### OTP Not Received
- Check Mail.tm service status
- Verify token hasn't expired
- Ensure old messages are cleared

### Test Failures
- Check screenshot in 	est-results/
- Review trace file for detailed steps
- Verify portal URL is accessible

### Age Validation Error
- DOB must be 16+ years ago
- Check CompleteDetailsPage date calculation

##  Notes

- Mail.tm accounts are temporary (session-based)
- Credentials stored locally (not in git)
- NPS popups blocked via CSS injection
- Fresh OTP guaranteed via message filtering

##  License

MIT

---

**Built with  using Playwright + JavaScript**
