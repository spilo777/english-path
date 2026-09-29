import { expect, test, type Page } from '@playwright/test';

// Страница урока: шаги, слова, грамматика (Walk и обычная), тест со сдачей, сброс урока; без ошибок консоли
type Ex = { t: string; q?: string; o?: string[]; a: number | string | string[] };
type UnitJson = { id: string; test: Ex[] };
type Meta = { id: string; level: string; num: number; track: string };

const STORE = 'englishpath.v1';
const LO: Record<string, number> = { A1: 1, A2: 2, B1: 3, B2: 4 };

function watchErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error' && !/Failed to load resource|net::ERR/.test(m.text())) errors.push(m.text()); });
  return errors;
}

/** Прогресс: сданы все основные уроки до id (чтобы урок был открыт) */
async function unlockUpTo(page: Page, id: string) {
  const course = (await (await page.request.get('data/course.json')).json()) as { units: Meta[] };
  const main = course.units.filter((u) => u.track === 'main').sort((a, b) => (LO[a.level] - LO[b.level]) || (a.num - b.num));
  const units: Record<string, { steps: Record<string, boolean>; testBest: number }> = {};
  for (const u of main) { if (u.id === id) break; units[u.id] = { steps: {}, testBest: 1 }; }
  await page.addInitScript(([key, val]) => {
    if (!sessionStorage.getItem('e2e-init')) { sessionStorage.setItem('e2e-init', '1'); localStorage.setItem(key, val); }
  }, [STORE, JSON.stringify({ units })] as const);
}

const squash = (x: string) => x.replace(/[\s_ ]+/g, '').toLowerCase();

test('урок a1-0: слова, грамматика, тест, сброс', async ({ page }) => {
  const errors = watchErrors(page);
  await unlockUpTo(page, 'a1-0');
  await page.goto('#/unit/a1-0');
  // без шага — открывается следующий непройденный (слова)
  await expect(page).toHaveURL(/#\/unit\/a1-0\/words$/);
  await expect(page.locator('main h1, main .page-title').first()).toBeVisible();
  await page.getByRole('button', { name: '+ Добавить все в карточки' }).click();
  await expect(page.locator('.steps a').first().locator('.ph-check')).toHaveCount(1);
  await expect(page).toHaveURL(/\/words$/);

  await page.getByRole('link', { name: /Дальше: Грамматика/ }).click();
  await expect(page.locator('.walk')).toBeVisible();

  // тест: ответы берём из данных урока
  const list = ((await (await page.request.get('data/units/a1-0.json')).json()) as UnitJson).test;
  await page.goto('#/unit/a1-0/test');
  await page.getByRole('button', { name: 'Начать тест' }).click();
  for (let i = 0; i < 40 && !(await page.locator('.ex-wrap.result').count()); i++) {
    const q = squash(await page.locator('.ex-q').first().innerText());
    const e = list.find((x) => x.q && squash(x.q) === q);
    if (await page.locator('.options .option').count()) {
      const right = e && e.o ? e.o[e.a as number] : '';
      await page.locator('.options .option').filter({ hasText: new RegExp('^' + right.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$') }).first().click();
    } else {
      await page.locator('input.input').fill(e ? (e.a as string[])[0] : 'x');
      await page.getByRole('button', { name: 'Проверить' }).click();
    }
    await page.getByRole('button', { name: /Дальше/ }).click();
  }
  await expect(page.locator('.ex-wrap.result')).toBeVisible();
  await expect(page.getByRole('link', { name: /Следующий юнит/ })).toBeVisible();
  const best = await page.evaluate((k) => JSON.parse(localStorage.getItem(k) || '{}').units['a1-0'].testBest as number, STORE);
  expect(best).toBeGreaterThanOrEqual(0.8);
  await expect(page.locator('.steps a').nth(4).locator('.ph-check')).toHaveCount(1);

  // сброс с подтверждением на странице
  await page.getByRole('button', { name: /Заново/ }).click();
  await expect(page.locator('.ut-confirm')).toBeVisible();
  await page.getByRole('button', { name: 'Сбросить урок' }).click();
  await expect(page).toHaveURL(/#\/unit\/a1-0\/words$/);
  await expect(page.locator('.steps .ph-check')).toHaveCount(0);
  await page.waitForTimeout(400);
  expect(errors).toEqual([]);
});

for (const id of ['a1-3', 'a2-4', 'b1-4']) {
  test(`урок ${id}: грамматика и чтение`, async ({ page }, info) => {
    const errors = watchErrors(page);
    await unlockUpTo(page, id);
    await page.goto(`#/unit/${id}/grammar`);
    await expect(page.locator('.steps a.active')).toContainText('Грамматика');
    if (/^(a[12]|b1)-/.test(id)) await expect(page.locator('.walk')).toBeVisible(); // A1–B1 — грамматика по шагам
    else await expect(page.locator('.lesson .stack .card').first()).toBeVisible();
    await page.goto(`#/unit/${id}/reading`);
    await expect(page.locator('.ut-texts .unit-row').first()).toBeVisible();
    await page.waitForTimeout(400);
    await page.screenshot({ path: `shots/${info.project.name}-unit_${id}.png`, fullPage: true });
    expect(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth)).toBe(false);
    expect(errors).toEqual([]);
  });
}

test('чтение в уроке: внизу — следующий текст и переход к практике', async ({ page }) => {
  const errors = watchErrors(page);
  await unlockUpTo(page, 'a1-3');
  await page.goto('#/unit/a1-3/reading');
  const n = await page.locator('.ut-texts .unit-row').count();
  await page.locator('.ut-texts .unit-row').first().click();
  for (let i = 0; i < n - 1; i++) {
    await page.locator('.read-end .next-read').click();
    await expect(page.locator('.read-end')).toBeVisible();
  }
  await page.locator('.read-end a.btn.primary', { hasText: 'Практика' }).click();
  await expect(page).toHaveURL(/#\/unit\/a1-3\/practice$/);
  await expect(page.locator('.steps a', { hasText: 'Чтение' }).locator('.ph-check')).toHaveCount(1);
  expect(errors).toEqual([]);
});

test('закрытый и готовящийся урок', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('#/unit/a1-5');
  await expect(page.locator('.ut-stub h2')).toHaveText('Урок пока закрыт');
  await page.goto('#/unit/b2-7');
  await expect(page.locator('.ut-stub h2')).toHaveText('Готовится');
  expect(errors).toEqual([]);
});
