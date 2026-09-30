// Все достижения по порядку: описания — в ./definitions/<категория>.ts, цвет значка — по месту в общем списке
import type { AddAch } from './add';
import { wordsAch } from './definitions/words';
import { streakAch } from './definitions/streak';
import { courseAch } from './definitions/course';
import { exercisesAch } from './definitions/exercises';
import { readingAch } from './definitions/reading';
import { miscAch } from './definitions/misc';
import { secretAch } from './definitions/secret';
import { extraAch } from './definitions/extra';
import type { Ach } from './model';

function buildList(): Ach[] {
    const L: Ach[] = [];
    const add: AddAch = (cat, id, icon, title, desc, pct, need, val, extra = {}) =>
        L.push({ cat, id, icon, title, desc, pct, need, val, color: ['#8b5cf6', '#5b4ff5'], ...extra });
    wordsAch(add);
    streakAch(add);
    courseAch(add);
    exercisesAch(add);
    readingAch(add);
    miscAch(add);
    secretAch(add);
    extraAch(add);

    // у каждого значка свой яркий цвет, чтобы соседние не сливались
    L.forEach((a, i) => {
        a.color = a.cat === 'Секретные' ? ['#475569', '#0f172a'] : PALETTE[(i * 5) % PALETTE.length];
    });
    return L;
}

const PALETTE: [string, string][] = [
    ['#8b5cf6', '#5b21b6'],
    ['#f97316', '#c2410c'],
    ['#06b6d4', '#0e7490'],
    ['#22c55e', '#15803d'],
    ['#ec4899', '#be185d'],
    ['#3b82f6', '#1d4ed8'],
    ['#eab308', '#a16207'],
    ['#14b8a6', '#0f766e'],
    ['#ef4444', '#b91c1c'],
    ['#a855f7', '#7e22ce'],
    ['#84cc16', '#4d7c0f'],
    ['#0ea5e9', '#0369a1'],
    ['#f43f5e', '#9f1239'],
    ['#6366f1', '#4338ca'],
];

export const ACH_LIST: Ach[] = buildList();

/** Цвет категории (для заголовков групп) */
export const CAT_COLORS: Record<string, [string, string]> = {
    'Слова и карточки': ['#8b5cf6', '#5b4ff5'],
    Регулярность: ['#fb923c', '#ef4444'],
    Курс: ['#38bdf8', '#2563eb'],
    Упражнения: ['#4ade80', '#16a34a'],
    'Чтение и аудио': ['#2dd4bf', '#0e7490'],
    Разное: ['#f472b6', '#be185d'],
    Секретные: ['#64748b', '#1e293b'],
};
