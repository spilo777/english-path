import { expect, test, type Page } from '@playwright/test';

// Словарь и повторение карточек: тестовый прогресс с карточками (часть к повторению, часть новые)
const DAY = 86_400_000;
function progress() {
  const now = Date.now();
  const card = (en: string, ru: string, state: string, due: number, ivl: number, ex = '', exRu = '') =>
    ({ id: en, en, ru, ex, exRu, src: 'manual', state, due, ivl, ease: 2.5, reps: state === 'new' ? 0 : 1, lapses: 0, step: 0, added: now - 5 * DAY, mod: now });
  const list = [
    card('apple', 'яблоко', 'review', now - 1000, 3, 'I eat an **apple**.', 'Я ем яблоко.'),
    card('house', 'дом', 'review', now - 2000, 10),
    card('run', 'бегать', 'learn', now - 3000, 0),
    card('cat', 'кошка', 'review', now + 5 * DAY, 30),
    card('table', 'стол', 'new', 0, 0),
    card('window', 'окно', 'new', 0, 0),
  ];
  return {
    cards: Object.fromEntries(list.map((c) => [c.id, c])), known: { dog: now },
    settings: { newPerDay: 2, rate: 0.9, voice: '', cardMode: 'en-ru', decks: { A1: true, A2: false, B1: false, B2: false }, autoImg: false, liveVoice: false, sfx: false },
    activity: {}, newToday: { date: '', count: 0 }, stats: {}, ach: {}, units: {}, textsRead: {}, userTexts: [],
  };
}

function watch(page: Page) {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error' && !/Failed to load resource|net::ERR/.test(m.text())) errors.push(m.text()); });
  return errors;
}

test.beforeEach(async ({ page }) => {
  const state = JSON.stringify(progress());
  await page.addInitScript((s) => { if (!sessionStorage.getItem('e2e-init')) { sessionStorage.setItem('e2e-init', '1'); localStorage.setItem('englishpath.v1', s); } }, state);
});

test('словарь: счётчики, колода, «Знаю», списки', async ({ page }) => {
  const errors = watch(page);
  await page.goto('#/cards');
  await expect(page.locator('.page-title')).toHaveText('Словарь');
  await expect(page.locator('.now-card')).toContainText('3 на повторение · 2 новые');
  await expect(page.locator('.tiles4 .tile').first()).toContainText('2');
  await page.goto('#/deck/A1');
  await expect(page.locator('.word-item')).toHaveCount(150);
  await page.locator('.word-item').first().locator('button[data-known]').click();
  await expect(page.locator('.word-item').first()).toContainText('знаю');
  await page.goto('#/words/all');
  await expect(page.locator('.page-title')).toContainText('Все · 6');
  await page.goto('#/topic/basics-numbers-1');
  await expect(page.locator('.topic-hero h1')).toBeVisible();
  expect(errors).toEqual([]);
});

test('повторение: несколько карточек и итог', async ({ page }) => {
  const errors = watch(page);
  await page.goto('#/review');
  const card = page.getByTestId('flashcard');
  await expect(card).toBeVisible();
  await expect(page.locator('.ex-head')).toContainText('осталось 5');
  for (let i = 0; i < 5; i++) {
    await page.locator('.fc-show').click();
    await expect(page.locator('.grades .btn')).toHaveCount(4);
    await page.locator('.grades .btn').nth(3).click(); // «Легко» — карточка уходит из сессии
  }
  await expect(page.locator('.result h2')).toHaveText('На сегодня всё!');
  await expect(page.locator('.result')).toContainText('Повторено карточек: 5');
  const s = await page.evaluate(() => JSON.parse(localStorage.getItem('englishpath.v1') || '{}'));
  expect(s.newToday.count).toBe(2);
  expect(s.cards.table.state).toBe('review');
  await page.goto('#/cards');
  await expect(page.locator('.now-card')).toContainText('На сегодня всё повторено');
  expect(errors).toEqual([]);
});

test('«Уже знаю это слово» на любой карточке: в выученные, дальше следующее', async ({ page }) => {
  const errors = watch(page);
  await page.goto('#/review');
  const front = page.locator('.fc .front');
  await expect(front).toBeVisible();
  const first = (await front.innerText()).trim();
  await page.getByRole('button', { name: 'Уже знаю это слово' }).click();
  await expect(front).not.toHaveText(first);
  const s = await page.evaluate(() => JSON.parse(localStorage.getItem('englishpath.v1') || '{}'));
  expect(s.known[first]).toBeTruthy();
  expect(s.cards[first]).toBeUndefined();
  // кнопка есть и после «Показать ответ»
  await page.locator('.fc-show').click();
  await expect(page.getByRole('button', { name: 'Уже знаю это слово' })).toBeVisible();
  expect(errors).toEqual([]);
});

test('занятие вне очереди: знакомая карточка не меняет расписание, есть «Уже знаю»', async ({ page }) => {
  const errors = watch(page);
  await page.goto('#/cards');
  await page.locator('.now-extra').click();
  await expect(page.locator('.rv-topic')).toHaveText('Вне очереди');
  // первыми идут «должники», затем ближайшие; ищем карточку, которой ещё не пора (cat — через 5 дней)
  for (let i = 0; i < 12; i++) {
    const w = (await page.locator('.fc .front').innerText()).trim();
    if (w === 'cat') break;
    await page.getByRole('button', { name: 'Уже знаю это слово' }).click();
  }
  await expect(page.locator('.fc .front')).toHaveText('cat');
  const before = await page.evaluate(() => JSON.parse(localStorage.getItem('englishpath.v1') || '{}').cards.cat.due);
  await page.locator('.fc-show').click();
  await expect(page.locator('.grades .btn.good')).toContainText('как было');
  await page.locator('.grades .btn.good').click();
  const after = await page.evaluate(() => JSON.parse(localStorage.getItem('englishpath.v1') || '{}').cards.cat.due);
  expect(after).toBe(before);
  expect(errors).toEqual([]);
});
