import { expect, test } from '@playwright/test';

// Тест на уровень: A1 и A2 — верно, B1 — «Не знаю» → уровень B1, уроки ниже открыты
test('тест на уровень: результат и открытие уроков', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  await page.goto('#/placement');
  const bank = await page.evaluate(async () => (await fetch(new URL('data/placement.json', document.baseURI))).json()) as Record<string, { q: string; o: string[]; a: number }[]>;
  const norm = (t: string) => t.replace(/_+/g, ' ').replace(/\s+/g, ' ').trim();
  const answerOf = (txt: string) => {
    for (const lv of Object.values(bank)) for (const q of lv) if (norm(q.q) === norm(txt)) return q.o[q.a];
    throw new Error('нет вопроса: ' + txt);
  };
  await page.getByRole('button', { name: 'Начать тест' }).click();
  for (let i = 0; i < 40 && (await page.locator('.place-q').count()); i++) {
    const stage = (await page.locator('.place-stage').innerText()).trim();
    const txt = await page.locator('.place-text').innerText();
    if (stage === 'A1' || stage === 'A2') await page.getByRole('button', { name: answerOf(txt), exact: true }).click();
    else await page.locator('.place-idk').click();
    await page.waitForTimeout(300);
  }
  // сданы A1 и A2 → уровень сейчас A2, учить дальше B1
  await expect(page.locator('.place-level')).toHaveText('A2');
  await expect(page.locator('.place-next')).toContainText('B1');
  await page.getByRole('button', { name: 'Начать с B1' }).click();
  await expect(page.locator('.place-note')).toContainText('B1');
  await page.goto('#/unit/a2-10');
  await expect(page.locator('main')).not.toContainText('пока закрыт');
  await page.goto('#/unit/b1-2');
  await expect(page.locator('main')).toContainText('пока закрыт');
  expect(errors).toEqual([]);
});
