import { expect, test, type Page } from '@playwright/test';

// Главная, курс, карта книг, времена: состояние с пройденными уроками A1, ключевые клики, нет ошибок консоли
const day = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };

function state() {
  const units: Record<string, unknown> = {};
  for (const id of ['a1-0', 'a1-1', 'a1-2', 'a1-3']) units[id] = { steps: { words: true, grammar: true, reading: true, practice: true }, testBest: 0.9 };
  units['a1-4'] = { steps: { words: true, grammar: true }, testBest: null };
  return {
    cards: {}, units, textsRead: {}, userTexts: [], activity: { [day()]: { reviews: 0, exercises: 3, reads: 0 } },
    newToday: { date: day(), count: 0 }, known: {}, settings: { newPerDay: 15, rate: 1, voice: '', cardMode: 'en-ru', decks: {} },
    stats: {}, ach: {}, tenses: { 'present-simple': { best: 0.9, at: 1 } },
  };
}

function watch(page: Page): string[] {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error' && !/Failed to load resource|net::ERR/.test(m.text())) errors.push(m.text()); });
  return errors;
}

test.beforeEach(async ({ page }) => {
  await page.goto('#/settings');
  await page.evaluate((s) => localStorage.setItem('englishpath.v1', s), JSON.stringify(state()));
});

test('главная: продолжить текущий урок и план', async ({ page }) => {
  const errors = watch(page);
  await page.goto('#/');
  await page.reload();
  await expect(page.locator('.continue-card')).toContainText('юнит 4');
  await expect(page.locator('.plan-grid .task')).toHaveCount(4);
  await page.locator('.continue-card').click();
  await expect(page).toHaveURL(/#\/unit\/a1-4\/reading/);
  expect(errors).toEqual([]);
});

test('курс: уровни сворачиваются, пройденные и закрытые уроки', async ({ page }) => {
  const errors = watch(page);
  await page.goto('#/course');
  await page.reload();
  const a1 = page.locator('.lvl[data-lvl=A1]');
  await expect(a1).toHaveClass(/open/);
  await expect(a1.locator('.unit-row.passed')).toHaveCount(4);
  await expect(a1.locator('.lvl-head')).toContainText('Дальше: урок 4');
  await page.locator('.lvl[data-lvl=A2] .lvl-head').click();
  await expect(page.locator('.lvl[data-lvl=A2]')).toHaveClass(/open/);
  await a1.locator('.lvl-head').click();
  await expect(a1).not.toHaveClass(/open/);
  expect(errors).toEqual([]);
});

test('по учебнику: переключение книг', async ({ page }) => {
  const errors = watch(page);
  await page.goto('#/books/red');
  await page.reload();
  await expect(page.locator('.bm-row.done').first()).toBeVisible();
  await page.locator('.wl-seg a').nth(2).click();
  await expect(page).toHaveURL(/#\/books\/green/);
  await expect(page.locator('.book-head')).toBeVisible();
  expect(errors).toEqual([]);
});

test('времена: упражнения до результата и сохранение', async ({ page }) => {
  const errors = watch(page);
  await page.goto('#/tenses');
  await page.reload();
  await expect(page.locator('.tense-tile')).toHaveCount(13);
  await page.goto('#/tenses/past-simple/practice');
  for (let i = 0; i < 40 && (await page.locator('.option').count()); i++) {
    await page.locator('.option').first().click();
    await page.locator('.tq-next .btn').click();
  }
  await expect(page.locator('.result')).toBeVisible();
  const best = await page.evaluate(() => JSON.parse(localStorage.getItem('englishpath.v1') || '{}').tenses['past-simple'].best);
  expect(typeof best).toBe('number');
  await page.goto('#/tenses/train');
  await page.locator('.wl-seg a', { hasText: 'до B1' }).click();
  await page.locator('.option').first().click();
  await expect(page.locator('.feedback')).toBeVisible();
  expect(errors).toEqual([]);
});
