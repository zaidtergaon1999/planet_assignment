// playwright.config.js
import { devices } from '@playwright/test';

const portalUrl = process.env.PORTAL_URL || 'https://globaltes-taxfree.planetpayment.com/ShopperPortalEU/';

export const testDir = './tests';
export const timeout = 120000;
export const expect = { timeout: 5000 };
export const fullyParallel = false;
export const forbidOnly = !!process.env.CI;
export const retries = process.env.CI ? 2 : 0;
export const workers = process.env.CI ? 2 : undefined;
export const reporter = [['list'], ['html', { open: 'never' }]];
export const use = {
    // Base URL your POMs can use (so you can call page.goto('/') or use baseURL)
    baseURL: portalUrl,

    // Common context-level options:
    headless: false, // set false for visible debugging; set true in CI if you prefer
    viewport: { width: 1280, height: 800 },
    actionTimeout: 0,
    navigationTimeout: 60000,
    // Save screenshots on failure, retain videos only when failing
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    // Trace strategy: keep on first retry (good for debugging flaky tests)
    trace: 'on',

    // Launch options applied to the browser. slowMo set to 500 as requested.
    launchOptions: {
        // slowMo here inserts a delay between Playwright actions.
        slowMo: 500,
        args: [
            '--use-fake-ui-for-media-stream',
            '--use-fake-device-for-media-stream',
            '--disable-infobars',
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ],
    },

    // Grant camera permission for contexts (applies to the context created by Playwright)
    // Note: this grants permission globally for test contexts. If you need per-origin, see snippet below.
    permissions: ['camera'],
    // Retain traces/screenshots in the artifacts folder
    // Playwright will write them to test-results by default when configured above.
};
export const projects = [
    {
        name: 'chromium',
        use: {
            browserName: 'chromium',
            ...devices['Desktop Chrome']
        },
    },
    // add firefox or webkit projects here if you want cross-browser runs
    // {
    //   name: 'webkit',
    //   use: { browserName: 'webkit', ...devices['Desktop Safari'] },
    // },
];
export const outputDir = 'test-results/';
