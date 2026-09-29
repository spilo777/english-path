import { expect, test, type Page } from '@playwright/test';

// Библиотека, чтение и книги: ключевые сценарии + нет ошибок в консоли
function watchErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error' && !/Failed to load resource|net::ERR/.test(m.text())) errors.push(m.text()); });
  return errors;
}

test('витрина, все статьи с фильтрами и поиском, книги', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('#/library');
  await expect(page.locator('main .page-title')).toHaveText('Библиотека');
  await expect(page.locator('.sec').first()).toBeVisible();
  await page.goto('#/library/all/' + encodeURIComponent('Игры'));
  await expect(page.locator('.fchip.on')).toContainText('Игры');
  await expect(page.locator('.lib-card').first()).toBeVisible();
  await page.goto('#/library/find');
  await page.locator('.lib-search').fill('Shrek');
  await expect(page.locator('.lib-card').first()).toContainText(/Shrek/i);
  await page.locator('.lib-search').fill('');
  await page.goto('#/library/books');
  await expect(page.locator('.poster-grid .poster').first()).toBeVisible();
  expect(errors).toEqual([]);
});

test('чтение: перевод слова, предложение, вопросы, прочитано', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('#/read/lib-a1-shrek');
  await page.locator('.reader-text .w', { hasText: 'ogre' }).first().click();
  await expect(page.locator('.popover .pw')).toBeVisible();
  await page.locator('.popover button', { hasText: 'Всё предложение' }).click();
  await expect(page.locator('.popover .ps-en')).toBeVisible();
  await page.keyboard.press('Escape');
  const qs = page.locator('.qz');
  const n = await qs.count();
  for (let i = 0; i < n; i++) await qs.nth(i).locator('.qz-btn').first().click();
  await expect(page.locator('.qz-res')).toBeVisible();
  await expect(page.locator('.reader-bar')).toContainText('Прочитано');
  expect(errors).toEqual([]);
});

test('свой текст: добавить, открыть, удалить', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('#/library/new');
  await page.locator('.ut-title').fill('My test');
  await page.locator('.ut-box textarea').fill('Hello world. This is my text.');
  await page.locator('.ut-box .btn.primary').click();
  await expect(page).toHaveURL(/#\/read\/u-/);
  await expect(page.locator('.reader-text')).toContainText('Hello world');
  await page.goto('#/library');
  page.on('dialog', (d) => d.accept());
  await page.locator('.unit-row .icon-btn').first().click();
  await expect(page.locator('main')).not.toContainText('Мои тексты');
  expect(errors).toEqual([]);
});

test('книга: главы, чтение главы, прогресс', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('#/book/bk-a1-aesop');
  await expect(page.locator('.chap-row')).toHaveCount(10);
  await page.locator('.chap-row').first().click();
  await page.locator('.reader-bar button', { hasText: 'Отметить' }).click();
  await page.locator('.chap-nav a', { hasText: 'Все главы' }).click();
  await expect(page.locator('.chap-row.done')).toHaveCount(1);
  await expect(page.locator('.book-info .pill-btn')).toContainText('ПРОДОЛЖИТЬ');
  expect(errors).toEqual([]);
});

test('слушать: три канала и переход из библиотеки', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('#/library');
  await expect(page.locator('.ls-card')).toHaveCount(3);
  await page.locator('.ls-card').first().click();
  await expect(page.locator('main .page-title')).toHaveText('Слушать');
  await expect(page.locator('.ls-ch')).toHaveCount(3);
  expect(errors).toEqual([]);
});

test('библиотека: новая полка «Диалоги из фильмов и сериалов» и книги B2', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('#/library');
  await expect(page.locator('.sec-head', { hasText: 'Диалоги из фильмов и сериалов' })).toBeVisible();
  await page.goto('#/book/bk-b2-dracula');
  await expect(page.locator('main')).toContainText('Dracula');
  expect(errors).toEqual([]);
});
