import { expect, test, type Page } from '@playwright/test';

// Профиль, награды, статистика, настройки и аккаунт: ключевые сценарии без обращения к серверу

const day = (back: number) => {
    const d = new Date(Date.now() - back * 86_400_000);
    return (
        d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0')
    );
};

function state() {
    const now = Date.now();
    const activity: Record<string, { reviews: number; exercises: number; reads: number }> = {};
    [0, 1, 2, 5, 9].forEach((i) => {
        activity[day(i)] = { reviews: 5 + i, exercises: 3, reads: i % 2 };
    });
    const card = (id: string, st: 'new' | 'learn' | 'review', ivl: number) => ({
        id,
        en: id,
        ru: 'x',
        ex: '',
        exRu: '',
        src: 'deck',
        state: st,
        due: now,
        ivl,
        ease: 2.5,
        reps: 1,
        lapses: 0,
        step: 0,
        added: now,
        mod: now,
    });
    return {
        cards: { cat: card('cat', 'review', 30), dog: card('dog', 'learn', 1), sun: card('sun', 'new', 0) },
        units: {},
        textsRead: {},
        userTexts: [],
        activity,
        newToday: { date: '', count: 0 },
        known: { and: now },
        settings: {
            newPerDay: 15,
            rate: 0.9,
            voice: '',
            cardMode: 'en-ru',
            decks: { A1: true, A2: true, B1: true, B2: true },
            autoImg: true,
            liveVoice: true,
            accent: 'us',
            sfx: true,
        },
        stats: {},
        ach: { rev_1: now },
    };
}

function watchErrors(page: Page): string[] {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(String(e)));
    page.on('console', (m) => {
        if (m.type() === 'error' && !/Failed to load resource|net::ERR/.test(m.text())) errors.push(m.text());
    });
    return errors;
}

const noHScroll = (page: Page) => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);
const saved = (page: Page) => page.evaluate(() => JSON.parse(localStorage.getItem('englishpath.v1') || '{}'));

test.beforeEach(async ({ page }) => {
    // состояние кладём один раз, чтобы перезагрузки его не затирали
    await page.addInitScript((s) => {
        if (!sessionStorage.getItem('e2e-init')) {
            localStorage.setItem('englishpath.v1', s);
            sessionStorage.setItem('e2e-init', '1');
        }
    }, JSON.stringify(state()));
});

test('профиль → награды → статистика', async ({ page }, info) => {
    const errors = watchErrors(page);
    await page.goto('#/profile');
    await expect(page.locator('main .page-title')).toHaveText('Профиль');
    await expect(page.locator('.pc-day.on').first()).toBeVisible();
    await expect(page.locator('.pc-me')).toContainText(/Гость|@/);
    await expect(page.locator('.pcard .pc-title')).toHaveCount(7);
    expect(await noHScroll(page)).toBe(true);
    await page.screenshot({ path: `shots/${info.project.name}-profile.png`, fullPage: true });

    await page.locator('.menu-list a[href="#/achievements"]').click();
    await expect(page.locator('main .page-title')).toHaveText('Награды');
    await expect(page.locator('.ach').first()).toBeVisible();
    // лестница званий по нажатию на уровень
    await page.locator('.pf-engbtn').click();
    await expect(page.locator('.pf-step')).toHaveCount(10);
    await expect(page.locator('.pf-step.now')).toHaveCount(1);
    await page.locator('.seg button', { hasText: 'Получены' }).click();
    // награды сохраняются с небольшой задержкой — сверяем, пока число не совпадёт
    await expect
        .poll(async () => (await page.locator('.ach').count()) === Object.keys((await saved(page)).ach).length)
        .toBe(true);
    await page.locator('.seg button', { hasText: 'Впереди' }).click();
    await expect(page.locator('.ach.got')).toHaveCount(0);
    expect(await noHScroll(page)).toBe(true);

    await page.locator('.backlink').click();
    await expect(page).toHaveURL(/#\/profile$/);
    await page.locator('.menu-list a[href="#/stats"]').click();
    await expect(page.locator('main .page-title')).toHaveText('Прогресс');
    await expect(page.locator('.pf-bar')).toHaveCount(30);
    await expect(page.locator('.pf-lrow').first()).toBeVisible();
    expect(await noHScroll(page)).toBe(true);
    await page.screenshot({ path: `shots/${info.project.name}-stats.png`, fullPage: true });
    expect(errors).toEqual([]);
});

test('настройки: лимит, переключатели, сброс с подтверждением', async ({ page }, info) => {
    const errors = watchErrors(page);
    await page.goto('#/settings');
    await expect(page.locator('main .page-title')).toHaveText('Настройки');
    await page.locator('.st-select').first().selectOption('25');
    expect((await saved(page)).settings.newPerDay).toBe(25);
    await page.locator('.st-check').first().click();
    expect((await saved(page)).settings.autoImg).toBe(false);
    expect(await noHScroll(page)).toBe(true);
    await page.screenshot({ path: `shots/${info.project.name}-settings.png`, fullPage: true });

    await page.getByRole('button', { name: 'Стереть весь прогресс' }).click();
    await expect(page.locator('.st-confirm')).toBeVisible();
    await page.locator('.st-confirm').getByRole('button', { name: 'Отмена' }).click();
    await expect(page.locator('.st-confirm')).toHaveCount(0);
    expect(Object.keys((await saved(page)).cards).length).toBe(3);

    await page.getByRole('button', { name: 'Стереть весь прогресс' }).click();
    await page.getByRole('button', { name: 'Да, стереть' }).click();
    await expect(page).toHaveURL(/#\/$/);
    expect(Object.keys((await saved(page)).cards).length).toBe(0);
    expect(errors).toEqual([]);
});

test('аккаунт: форма проверяется без отправки на сервер', async ({ page }, info) => {
    const errors = watchErrors(page);
    await page.goto('#/account');
    await expect(page.locator('.auth-card h1')).toBeVisible();
    const form = page.locator('.auth-form');
    if (await form.count()) {
        // пустая почта и короткий пароль — ошибки показываются до обращения к облаку
        await page.locator('.auth-cta').click();
        await expect(page.locator('.auth-err.show')).toContainText('name@example.com');
        await page.locator('input[type=email]').fill('someone@example.com');
        await page.locator('.pw input').fill('123');
        await page.locator('.auth-cta').click();
        await expect(page.locator('.auth-err.show')).toContainText('минимум 6');
        await page.locator('.pw-eye').click();
        await expect(page.locator('.pw input')).toHaveAttribute('type', 'text');
        await page.locator('.seg button', { hasText: 'Вход' }).click();
        await expect(page.locator('input[type=email]')).toHaveValue('someone@example.com');
        await page.getByRole('button', { name: 'Забыли пароль?' }).click();
        await expect(page.locator('.auth-card h1')).toHaveText('Восстановление пароля');
    } else {
        await expect(page.locator('.auth-card')).toContainText('Облако сейчас недоступно');
    }
    expect(await noHScroll(page)).toBe(true);
    await page.screenshot({ path: `shots/${info.project.name}-account.png`, fullPage: true });
    expect(errors).toEqual([]);
});

test('лига и друзья: страница открывается из профиля', async ({ page }) => {
    const errors = watchErrors(page);
    await page.goto('#/profile');
    await page.locator('.pc-league a.pc-title').click();
    await expect(page.locator('main .page-title')).toHaveText('Лига и друзья');
    // гость видит приглашение войти (очки считаются по облачному прогрессу)
    await expect(page.locator('main')).toContainText(/Войти|Лига|Друзья/);
    expect(await noHScroll(page)).toBe(true);
    expect(errors).toEqual([]);
});
