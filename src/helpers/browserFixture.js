// helpers/browserFixture.js

// Import the Playwright library for browser automation and testing
import playwright from 'playwright';

/**
 * Creates and configures a Playwright browser context for the Planet Shopper Portal.
 * 
 * This helper is used to consistently launch a Chromium browser
 * with specific settings (like fake camera input) to support tests that
 * require camera permissions or scanning functionality.
 *
 * @param {Object} options - Optional settings for the browser.
 * @param {boolean} [options.headless=false] - Whether to run the browser in headless mode (no UI).
 * @param {number} [options.slowMo=0] - Adds a delay (in ms) between operations for easier debugging.
 * 
 * @returns {Object} - Returns an object containing { browser, context, portalUrl }.
 */
export async function createPortalContext({ headless = false, slowMo = 0 } = {}) {
  // --- Step 1: Launch a new Chromium browser instance ---
  // We configure it to fake camera input so the web app doesn’t ask for real camera access.
  const browser = await playwright.chromium.launch({
    headless, // If true, runs without showing the UI (useful for CI)
    slowMo,   // Optional delay between actions (useful for debugging)
    args: [
      '--use-fake-ui-for-media-stream',    // Automatically allow camera/microphone prompts
      '--use-fake-device-for-media-stream' // Simulate a fake camera input
    ]
  });

  // --- Step 2: Define the Shopper Portal URL ---
  // This is the target web application under test.
  const portalUrl = 'https://globaltes-taxfree.planetpayment.com/ShopperPortalEU/';

  // --- Step 3: Create a new browser context ---
  // A context is an isolated browser session (like an incognito window).
  // It allows multiple test sessions to run independently in the same browser.
  const context = await browser.newContext();

  // --- Step 4: Attempt to grant camera permission for the target site ---
  // This ensures the site can use the (fake) camera without asking the user.
  // The operation may fail on some systems — it’s non-critical, so we catch errors gracefully.
  try {
    await context.grantPermissions(['camera'], { origin: portalUrl });
  } catch (e) {
    console.warn('grantPermissions failed (non-fatal):', e?.message || e);
  }

  // --- Step 5: Return the initialized objects ---
  // The caller can use these to open pages, perform tests, and close the browser later.
  return { browser, context, portalUrl };
}
