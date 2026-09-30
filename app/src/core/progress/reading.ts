// Время чтения: секунды в читалке по дням (Progress.readTime). Часы идут, пока страница видна и ученик
// что-то делает (прокрутка, касания, клавиши, озвучка) — не дольше config.reading.idleSecs после последнего действия.
import { dayKey, today, weekOf } from '@utils/date';
import { getConfig } from '../config/current';
import { update } from './store';
import type { Progress } from './types';

/** Добавить секунды чтения за день (внутри update) */
export function addReadTime(s: Progress, secs: number, day: string = today()): void {
    const n = Math.round(secs);
    if (!(n > 0)) return;
    s.readTime = s.readTime || {};
    s.readTime[day] = (s.readTime[day] || 0) + n;
}

export interface ReadTimeStats {
    /** Секунды: сегодня, на этой неделе (с понедельника), всего */
    today: number;
    week: number;
    total: number;
    /** Дней, в которые что-то читалось */
    days: number;
}

export function readTimeStats(s: Progress, now: Date = new Date()): ReadTimeStats {
    const d = dayKey(now);
    const w = weekOf(d);
    const r: ReadTimeStats = { today: 0, week: 0, total: 0, days: 0 };
    for (const [k, v] of Object.entries(s.readTime || {})) {
        const secs = typeof v === 'number' && v > 0 ? v : 0;
        if (!secs) continue;
        r.total += secs;
        r.days++;
        if (k === d) r.today += secs;
        if (weekOf(k) === w) r.week += secs;
    }
    return r;
}

// ───────── часы читалки ─────────
const TICK_MS = 5000;
const FLUSH_MS = 30_000;
const ACTIVITY = ['scroll', 'wheel', 'pointerdown', 'keydown', 'touchstart'] as const;

let lastActive = 0;

/** Отметить действие ученика (озвучка текста вслух тоже считается чтением) */
export function markReadingActivity(): void {
    lastActive = Date.now();
}

/**
 * Запустить часы чтения (открыта читалка). Возвращает функцию остановки: она сохраняет накопленное
 * и отправляет в облако. Каждые 30 с накопленное тихо сохраняется на устройстве.
 */
export function startReadingClock(): () => void {
    if (typeof document === 'undefined') return () => undefined;
    const idleMs = getConfig().reading.idleSecs * 1000;
    let acc = 0;
    let prev = Date.now();
    lastActive = prev;

    const tick = () => {
        const now = Date.now();
        // не больше двух тиков за раз: вкладка спала — это не чтение
        const dt = Math.min(now - prev, TICK_MS * 2);
        prev = now;
        if (document.visibilityState === 'visible' && now - lastActive <= idleMs) acc += dt;
    };
    const flush = (silent: boolean) => {
        tick();
        const secs = Math.floor(acc / 1000);
        if (secs < 1) return;
        acc -= secs * 1000;
        update((s) => addReadTime(s, secs), { silent });
    };
    const onVis = () => {
        if (document.visibilityState === 'visible') {
            prev = Date.now();
            markReadingActivity();
        } else flush(true);
    };

    ACTIVITY.forEach((e) => document.addEventListener(e, markReadingActivity, { capture: true, passive: true }));
    document.addEventListener('visibilitychange', onVis);
    const t1 = setInterval(tick, TICK_MS);
    const t2 = setInterval(() => flush(true), FLUSH_MS);

    return () => {
        clearInterval(t1);
        clearInterval(t2);
        ACTIVITY.forEach((e) => document.removeEventListener(e, markReadingActivity, { capture: true }));
        document.removeEventListener('visibilitychange', onVis);
        flush(false);
    };
}

/** Коротко для крупных цифр: «25 мин», «1,5 ч», «12 ч» */
export function fmtDurationShort(secs: number): string {
    const m = Math.floor(Math.max(0, secs) / 60);
    if (m < 60) return m + ' мин';
    const h = m / 60;
    return (h < 10 ? String(Math.round(h * 10) / 10).replace('.', ',') : String(Math.round(h))) + ' ч';
}

/** Длительность по-русски: «< 1 мин», «25 мин», «3 ч 5 мин» */
export function fmtDuration(secs: number): string {
    const m = Math.floor(Math.max(0, secs) / 60);
    if (m < 1) return secs > 0 ? '< 1 мин' : '0 мин';
    if (m < 60) return m + ' мин';
    const h = Math.floor(m / 60);
    const r = m % 60;
    return r ? `${h} ч ${r} мин` : `${h} ч`;
}
