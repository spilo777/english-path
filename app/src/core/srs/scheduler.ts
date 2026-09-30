// Расписание повторений: вариант SM-2 как в Anki (учебный день с 4 утра, fuzz, leech)
import { DAY } from '@utils/date';
import { DEFAULT_CONFIG } from '../config/defaults';
import { getConfig } from '../config/current';
import type { Card } from '../progress/types';

export function fmtIvl(ms: number): string {
    const m = Math.round(ms / 60000);
    if (m < 60) return m + ' мин';
    const h = Math.round(m / 60);
    if (h < 24) return h + ' ч';
    const d = Math.round(ms / DAY);
    if (d < 31) return d + ' дн';
    const mo = Math.round(d / 30);
    if (mo < 12) return mo + ' мес';
    return (d / 365).toFixed(1) + ' г';
}

/** Новый учебный день начинается в 4 утра по местному времени — как в Anki */
export const DAY_START_HOUR = DEFAULT_CONFIG.srs.dayStartHour;
/** После стольких забываний слово помечается трудным (Anki: leech threshold) */
export const LEECH_AT = DEFAULT_CONFIG.srs.leechAt;

/** Начало текущего учебного дня (4:00; до 4 утра — ещё вчерашний день) */
export function studyDayStart(now = Date.now()): number {
    const d = new Date(now);
    d.setHours(getConfig().srs.dayStartHour, 0, 0, 0);
    if (d.getTime() > now) d.setDate(d.getDate() - 1);
    return d.getTime();
}

/** Срок «через n дней»: начало того учебного дня, а не та же минута — утром слово уже ждёт */
export function dueInDays(n: number, now = Date.now()): number {
    const d = new Date(studyDayStart(now));
    d.setDate(d.getDate() + n);
    return d.getTime();
}

/** Разброс интервала (как fuzz в Anki), чтобы слова одного дня не приходили кучей в один день */
export function fuzzIvl(ivl: number, rnd = Math.random()): number {
    if (ivl < 3) return ivl;
    const f = ivl < 7 ? 0.15 : ivl < 20 ? 0.1 : 0.05;
    const d = Math.max(1, Math.round(ivl * f));
    return Math.max(1, ivl + Math.round((rnd * 2 - 1) * d));
}

/**
 * grade: 0 снова, 1 трудно, 2 хорошо, 3 легко. Возвращает новую версию карточки.
 * fuzz — случайный разброс интервала (при настоящей оценке; для подписей на кнопках — без него)
 */
export function schedule(c: Card, grade: 0 | 1 | 2 | 3, now = Date.now(), opts: { fuzz?: boolean } = {}): Card {
    const n: Card = { ...c };
    const fz = (ivl: number) => (opts.fuzz ? fuzzIvl(ivl) : ivl);
    if (c.state === 'new' || c.state === 'learn') {
        if (grade === 0) {
            n.state = 'learn';
            n.step = 0;
            n.due = now + 60_000;
        } else if (grade === 1) {
            n.state = 'learn';
            n.due = now + 5 * 60_000;
        } else if (grade === 2) {
            if ((c.step || 0) === 0) {
                n.state = 'learn';
                n.step = 1;
                n.due = now + 10 * 60_000;
            } else {
                n.state = 'review';
                n.ivl = 1;
                n.due = dueInDays(1, now);
                n.reps = 1;
            }
        } else {
            n.state = 'review';
            n.ivl = fz(4);
            n.due = dueInDays(n.ivl, now);
            n.reps = 1;
        }
    } else {
        const ivl = Math.max(1, c.ivl || 1);
        // опоздание в днях: вспомнил спустя больше времени — следующий интервал длиннее (как в Anki)
        const late = Math.max(0, Math.floor((studyDayStart(now) - studyDayStart(c.due || now)) / DAY));
        if (grade === 0) {
            n.lapses = (c.lapses || 0) + 1;
            n.ease = Math.max(1.3, c.ease - 0.2);
            n.state = 'learn';
            n.step = 1;
            n.ivl = 1;
            n.due = now + 10 * 60_000;
            const leech = getConfig().srs.leechAt;
            if (n.lapses >= leech && (n.lapses - leech) % (leech / 2) === 0) n.leech = true;
        } else if (grade === 1) {
            n.ease = Math.max(1.3, c.ease - 0.15);
            n.ivl = Math.max(ivl + 1, Math.round((ivl + late / 4) * 1.2));
        } else if (grade === 2) {
            n.ivl = Math.max(ivl + 1, Math.round((ivl + late / 2) * c.ease));
        } else {
            n.ease = c.ease + 0.15;
            n.ivl = Math.max(ivl + 2, Math.round((ivl + late) * c.ease * 1.3));
        }
        if (grade > 0) {
            n.ivl = fz(n.ivl);
            n.reps = (c.reps || 0) + 1;
            n.due = dueInDays(n.ivl, now);
        }
    }
    n.mod = now;
    return n;
}
