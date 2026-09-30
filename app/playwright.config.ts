import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: 'e2e',
    timeout: 30_000,
    reporter: [['list']],
    use: { baseURL: process.env.E2E_URL || 'http://127.0.0.1:4173/', trace: 'off', screenshot: 'only-on-failure' },
    // в CI сервер предпросмотра поднимает сам Playwright
    webServer: process.env.CI
        ? {
              command: 'npx vite preview --port 4173 --strictPort --host 127.0.0.1 --base ' + (process.env.BASE || '/'),
              url: process.env.E2E_URL || 'http://127.0.0.1:4173/',
              reuseExistingServer: false,
              timeout: 60_000,
          }
        : undefined,
    projects: [
        { name: 'mobile', use: { ...devices['iPhone 13'], browserName: 'chromium' } },
        { name: 'desktop', use: { viewport: { width: 1440, height: 900 } } },
    ],
});
