// Помощник описания достижений: категории и функция добавления
import type { AchCtx } from './model';

/** Категории достижений (порядок — как в профиле) */
export const CATS = {
    C: 'Слова и карточки',
    S: 'Регулярность',
    K: 'Курс',
    E: 'Упражнения',
    R: 'Чтение и аудио',
    M: 'Разное',
    X: 'Секретные',
} as const;

export type AddAch = (
    cat: string,
    id: string,
    icon: string,
    title: string,
    desc: string,
    pct: number,
    need: number,
    val: (c: AchCtx) => number,
    extra?: { hidden?: boolean },
) => void;
