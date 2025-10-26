import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 120000, // 2 minutes max per test
    fullyParallel: false,
    retries: 0,
    reporter: [['list'], ['html', { open: 'never' }]],
    use: {
        baseURL: 'https://globaltes-taxfree.planetpayment.com/ShopperPortalEU/',
        headless: false, // Show browser during test execution
        viewport: { width: 1280, height: 800 },
        navigationTimeout: 60000,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on',
        launchOptions: {
            slowMo: 300, // 300ms delay between actions for visibility
            args: [
                '--use-fake-ui-for-media-stream', // Prevent camera from activating
                '--use-fake-device-for-media-stream',
            ],
        },
        permissions: [], // No camera/mic permissions granted
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
    outputDir: 'test-results/',
});
