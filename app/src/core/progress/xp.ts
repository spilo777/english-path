// Очки за день: веса в конфиге движка (xp.*), по умолчанию как в лиге на сервере — 1 / 2 / 10
import { getConfig } from '../config/current';
import type { DayActivity } from './types';

/** Очки за день по активности: карточки, упражнения, прочитанные тексты */
export function dayXp(a: Partial<DayActivity> | undefined): number {
    if (!a) return 0;
    const w = getConfig().xp;
    return (a.reviews || 0) * w.review + (a.exercises || 0) * w.exercise + (a.reads || 0) * w.read;
}
