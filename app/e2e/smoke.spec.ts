import { expect, test } from '@playwright/test';

// Обходит основные экраны: нет ошибок в консоли, есть заголовок, делается скриншот для отчёта
const ROUTES = ['', 'course', 'unit/a1-0', 'library', 'cards', 'profile', 'tenses', 'settings'];

for (const r of ROUTES) {
    test(`экран /${r || 'home'}`, async ({ page }, info) => {
        const errors: string[] = [];
        page.on('pageerror', (e) => errors.push(String(e)));
        page.on('console', (m) => {
            if (m.type() === 'error' && !/Failed to load resource|net::ERR/.test(m.text())) errors.push(m.text());
        });
        await page.goto('#/' + r);
        await expect(page.locator('main h1, main .page-title').first()).toBeVisible();
        await page.waitForTimeout(600);
        await page.screenshot({
            path: `shots/${info.project.name}-${(r || 'home').replace(/\//g, '_')}.png`,
            fullPage: true,
        });
        expect(errors).toEqual([]);
    });
}
