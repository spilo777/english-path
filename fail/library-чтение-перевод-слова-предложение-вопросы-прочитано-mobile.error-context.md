# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: library.spec.ts >> чтение: перевод слова, предложение, вопросы, прочитано
- Location: e2e/library.spec.ts:33:1

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  - 1
+ Received  + 3

- Array []
+ Array [
+   "Access to fetch at 'https://api.dictionaryapi.dev/api/v2/entries/en/ogre' from origin 'http://127.0.0.1:4173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.",
+ ]
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - navigation "Разделы" [ref=e4]:
      - link "Грамматика" [ref=e5] [cursor=pointer]:
        - /url: "#/"
      - link "Словарь 15" [ref=e9] [cursor=pointer]:
        - /url: "#/cards"
        - generic [ref=e12]: Словарь
        - generic [ref=e13]: "15"
      - link "Библиотека" [ref=e14] [cursor=pointer]:
        - /url: "#/library"
      - link "Профиль" [ref=e18] [cursor=pointer]:
        - /url: "#/profile"
    - main [ref=e22]:
      - generic [ref=e23]:
        - link "Назад" [ref=e24] [cursor=pointer]:
          - /url: "#/library"
        - generic [ref=e30]:
          - generic [ref=e31]:
            - generic [ref=e32]: A1
            - generic [ref=e33]: Мультфильмы · Shrek (2001) · 2 мин
          - heading "A Green Ogre" [level=1] [ref=e35]
          - generic [ref=e36]: Знакомство с огром Шреком и его друзьями
        - generic [ref=e37]:
          - button "Слушать" [ref=e38] [cursor=pointer]
          - generic "Что выделять по нажатию" [ref=e40]:
            - button "Слово" [ref=e41] [cursor=pointer]
            - button "Предложение" [ref=e43] [cursor=pointer]
          - combobox "Скорость" [ref=e45]:
            - option "0.7×"
            - option "0.85×" [selected]
            - option "1×"
          - button "Прочитано" [ref=e46] [cursor=pointer]
        - generic [ref=e48]:
          - paragraph [ref=e49]:
            - generic [ref=e50]: Once upon a time, there was a beautiful princess...
            - generic [ref=e51]: and an ogre who read about her in a book and then used the page as toilet paper.
            - generic [ref=e52]: That is how Shrek begins, and you know right away that this fairy tale is different.
          - paragraph [ref=e53]:
            - generic [ref=e54]: Shrek is an ogre, a big green monster from old stories.
            - generic [ref=e55]: He lives alone in a swamp, a wet place full of mud.
            - generic [ref=e56]: He likes mud baths and quiet evenings, and he doesn't like visitors.
            - generic [ref=e57]: "But one day his swamp is suddenly full of fairy tale characters: the Three Little Pigs, Pinocchio, the Gingerbread Man and many more."
            - generic [ref=e58]: The small and very angry Lord Farquaad sent them all away from his city.
          - paragraph [ref=e59]:
            - generic [ref=e60]: To get his swamp back, Shrek must save Princess Fiona from a tower, and a dragon guards the tower.
            - generic [ref=e61]: A talking donkey, called simply Donkey, goes with him.
            - generic [ref=e62]: Donkey talks, and talks, and never stops talking.
            - generic [ref=e63]: Shrek tries to get rid of him, but Donkey becomes his friend anyway.
          - paragraph [ref=e64]:
            - generic [ref=e65]: Shrek is not a simple monster.
            - generic [ref=e66]: “Ogres are like onions,” he says.
            - generic [ref=e67]: They have layers, and under the angry face there is a big heart.
          - paragraph [ref=e68]:
            - generic [ref=e69]: DreamWorks made the film in 2001.
            - generic [ref=e70]: It was a big hit, and it won the very first Oscar for Best Animated Feature.
        - paragraph [ref=e71]: Нажмите на слово — перевод и «+ В карточки». Кнопка «Всё предложение» в подсказке (или режим «Предложение» сверху) — перевод и озвучка целого предложения. Чтобы перевести фразу целиком, выделите несколько слов (долгое нажатие и протянуть).
        - generic [ref=e73]:
          - heading "Проверьте понимание" [level=3] [ref=e74]
          - generic [ref=e75]:
            - generic [ref=e76]: 1. Where does Shrek live?
            - generic [ref=e77]:
              - button "In a castle" [disabled] [ref=e78]
              - button "In a swamp" [disabled] [ref=e79]
              - button "In a tower" [disabled] [ref=e80]
          - generic [ref=e81]:
            - generic [ref=e82]: 2. What is Donkey's main habit?
            - generic [ref=e83]:
              - button "He sleeps all day" [disabled] [ref=e84]
              - button "He eats onions" [disabled] [ref=e85]
              - button "He never stops talking" [disabled] [ref=e86]
          - generic [ref=e87]:
            - generic [ref=e88]: 3. Why does Shrek compare ogres to onions?
            - generic [ref=e89]:
              - button "They have layers" [disabled] [ref=e90]
              - button "They smell bad" [disabled] [ref=e91]
              - button "They are green" [disabled] [ref=e92]
          - generic [ref=e93]:
            - generic [ref=e94]: 1 из 3
            - text: — хорошо. Перечитайте места с ошибками. Статья отмечена прочитанной.
        - generic [ref=e95]:
          - link "Следующая статья A1 A Sponge Under the Sea" [ref=e96] [cursor=pointer]:
            - /url: "#/read/lib-a1-spongebob"
            - generic [ref=e97]: Следующая статья A1
            - generic [ref=e98]: A Sponge Under the Sea
          - link "В библиотеку" [ref=e101] [cursor=pointer]:
            - /url: "#/library"
  - status [ref=e103]:
    - generic [ref=e106]:
      - generic [ref=e107]: Достижение получено
      - text: Читатель
      - generic [ref=e108]: Обычное · 81% учеников
```

# Test source

```ts
  1  | import { expect, test, type Page } from '@playwright/test';
  2  | 
  3  | const noHScroll = (page: Page) => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);
  4  | 
  5  | // Библиотека, чтение и книги: ключевые сценарии + нет ошибок в консоли
  6  | function watchErrors(page: Page): string[] {
  7  |     const errors: string[] = [];
  8  |     page.on('pageerror', (e) => errors.push(String(e)));
  9  |     page.on('console', (m) => {
  10 |         if (m.type() === 'error' && !/Failed to load resource|net::ERR/.test(m.text())) errors.push(m.text());
  11 |     });
  12 |     return errors;
  13 | }
  14 | 
  15 | test('витрина, все статьи с фильтрами и поиском, книги', async ({ page }) => {
  16 |     const errors = watchErrors(page);
  17 |     await page.goto('#/library');
  18 |     await expect(page.locator('main .page-title')).toHaveText('Библиотека');
  19 |     await expect(page.locator('.sec').first()).toBeVisible();
  20 |     await page.goto('#/library/all/' + encodeURIComponent('Игры'));
  21 |     await expect(page.locator('.fchip.on')).toContainText('Игры');
  22 |     await expect(page.locator('.lib-card').first()).toBeVisible();
  23 |     await page.goto('#/library/find');
  24 |     await page.locator('.lib-search').fill('Shrek');
  25 |     await expect(page.locator('.lib-card').first()).toContainText(/Shrek/i);
  26 |     await page.locator('.lib-search').fill('');
  27 |     await page.goto('#/library');
  28 |     await page.locator('.tabs a', { hasText: 'Книги' }).click();
  29 |     await expect(page.locator('.poster-grid .poster').first()).toBeVisible();
  30 |     expect(errors).toEqual([]);
  31 | });
  32 | 
  33 | test('чтение: перевод слова, предложение, вопросы, прочитано', async ({ page }) => {
  34 |     const errors = watchErrors(page);
  35 |     await page.goto('#/read/lib-a1-shrek');
  36 |     await page.locator('.reader-text .w', { hasText: 'ogre' }).first().click();
  37 |     await expect(page.locator('.popover .pw')).toBeVisible();
  38 |     await page.locator('.popover button', { hasText: 'Всё предложение' }).click();
  39 |     await expect(page.locator('.popover .ps-en')).toBeVisible();
  40 |     await page.keyboard.press('Escape');
  41 |     const qs = page.locator('.qz');
  42 |     const n = await qs.count();
  43 |     for (let i = 0; i < n; i++) await qs.nth(i).locator('.qz-btn').first().click();
  44 |     await expect(page.locator('.qz-res')).toBeVisible();
  45 |     await expect(page.locator('.reader-bar')).toContainText('Прочитано');
> 46 |     expect(errors).toEqual([]);
     |                    ^ Error: expect(received).toEqual(expected) // deep equality
  47 | });
  48 | 
  49 | test('свой текст: добавить, открыть, удалить', async ({ page }) => {
  50 |     const errors = watchErrors(page);
  51 |     await page.goto('#/library/new');
  52 |     await page.locator('.ut-title').fill('My test');
  53 |     await page.locator('.ut-box textarea').fill('Hello world. This is my text.');
  54 |     await page.locator('.ut-box .btn.primary').click();
  55 |     await expect(page).toHaveURL(/#\/read\/u-/);
  56 |     await expect(page.locator('.reader-text')).toContainText('Hello world');
  57 |     await page.goto('#/library');
  58 |     page.on('dialog', (d) => d.accept());
  59 |     await page.locator('.unit-row .icon-btn').first().click();
  60 |     await expect(page.locator('main')).not.toContainText('Мои тексты');
  61 |     expect(errors).toEqual([]);
  62 | });
  63 | 
  64 | test('книга: главы, чтение главы, прогресс', async ({ page }) => {
  65 |     const errors = watchErrors(page);
  66 |     await page.goto('#/book/bk-a1-aesop');
  67 |     await expect(page.locator('.chap-row')).toHaveCount(10);
  68 |     await page.locator('.chap-row').first().click();
  69 |     await page.locator('.reader-bar button', { hasText: 'Отметить' }).click();
  70 |     await page.locator('.chap-nav a', { hasText: 'Все главы' }).click();
  71 |     await expect(page.locator('.chap-row.done')).toHaveCount(1);
  72 |     await expect(page.locator('.book-info .pill-btn')).toContainText('ПРОДОЛЖИТЬ');
  73 |     expect(errors).toEqual([]);
  74 | });
  75 | 
  76 | test('слушать: вкладка библиотеки, каналы по уровням', async ({ page }) => {
  77 |     const errors = watchErrors(page);
  78 |     await page.goto('#/library');
  79 |     await page.locator('.tabs a', { hasText: 'Слушать' }).click();
  80 |     await expect(page).toHaveURL(/#\/listen$/);
  81 |     await expect(page.locator('.tabs a.on')).toContainText('Слушать');
  82 |     await expect(page.locator('.ls-groups button')).toHaveCount(3);
  83 |     await expect(page.locator('.ls-ch')).toHaveCount(3);
  84 |     await page.locator('.ls-groups button').nth(2).click();
  85 |     await expect(page.locator('.ls-ch')).toHaveCount(8);
  86 |     expect(await noHScroll(page)).toBe(true);
  87 |     expect(errors).toEqual([]);
  88 | });
  89 | 
  90 | test('библиотека: новая полка «Диалоги из фильмов и сериалов» и книги B2', async ({ page }) => {
  91 |     const errors = watchErrors(page);
  92 |     await page.goto('#/library');
  93 |     await expect(page.locator('.sec-head', { hasText: 'Диалоги из фильмов и сериалов' })).toBeVisible();
  94 |     await page.goto('#/book/bk-b2-dracula');
  95 |     await expect(page.locator('main')).toContainText('Dracula');
  96 |     expect(errors).toEqual([]);
  97 | });
  98 | 
```