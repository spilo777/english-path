// Операции над прогрессом: урок, активность дня, серии, надгробия для синхронизации
import { DAY, dayKey, today } from '@utils/date';
import type { Progress, UnitProgress } from './types';

/** Прогресс урока для изменения (вызывать внутри update): заодно отмечает время изменения */
export function unitState(s: Progress, id: string): UnitProgress {
    const u = (s.units[id] = s.units[id] || { steps: {}, testBest: null });
    u.mod = Date.now();
    return u;
}

/** «Начать заново»: пустой урок + надгробие, чтобы старая копия из облака не вернула пройденное */
export function resetUnit(s: Progress, id: string) {
    const t = Date.now();
    s.units[id] = { steps: {}, testBest: null, mod: t };
    s.deleted = s.deleted || {};
    s.deleted['unit:' + id] = t;
}

/** Учесть активность за сегодня (карточки, упражнения, чтение) и «особые» моменты для достижений */
export function track(s: Progress, kind: 'reviews' | 'exercises' | 'reads', n = 1) {
    const d = today();
    if (!s.activity[d]) {
        const prev = Object.keys(s.activity).sort().pop();
        if (prev && (new Date(d).getTime() - new Date(prev).getTime()) / DAY >= 7) s.stats.comeback = 1;
    }
    const now = new Date(),
        h = now.getHours();
    if (h >= 4 && h < 7) s.stats.early = 1;
    if (h >= 0 && h < 4) s.stats.owl = 1;
    if (h >= 3 && h < 5) s.stats.insomnia = 1;
    if (now.getMonth() === 0 && now.getDate() === 1) s.stats.newyear = 1;
    if (now.getMonth() === 9 && now.getDate() === 31) s.stats.halloween = 1;
    s.dayParts = s.dayParts || {};
    s.dayParts[d] = (s.dayParts[d] || 0) | (h < 12 ? 1 : h < 18 ? 2 : 4);
    if (s.dayParts[d] === 7) s.stats.allDay = 1;
    s.activity[d] = s.activity[d] || { reviews: 0, exercises: 0, reads: 0 };
    s.activity[d][kind] = (s.activity[d][kind] || 0) + n;
}

/** Ответ в любом упражнении: серия верных, статистика, активность */
export function recordAnswer(s: Progress, ok: boolean) {
    track(s, 'exercises');
    s.stats.ansAll = (s.stats.ansAll || 0) + 1; // для «Успеваемости» в профиле
    if (ok) s.stats.ansOk = (s.stats.ansOk || 0) + 1;
    s.stats.exStreak = ok ? (s.stats.exStreak || 0) + 1 : 0;
    s.stats.exStreakBest = Math.max(s.stats.exStreakBest || 0, s.stats.exStreak);
}

export function streak(s: Progress): number {
    const d = new Date();
    let n = 0;
    if (!s.activity[dayKey(d)]) d.setDate(d.getDate() - 1);
    while (s.activity[dayKey(d)]) {
        n++;
        d.setDate(d.getDate() - 1);
    }
    return n;
}

export function bestStreak(s: Progress): number {
    const days = Object.keys(s.activity).sort();
    let best = 0,
        cur = 0,
        prev: number | null = null;
    days.forEach((d) => {
        const t = new Date(d).getTime();
        cur = prev != null && Math.round((t - prev) / DAY) === 1 ? cur + 1 : 1;
        best = Math.max(best, cur);
        prev = t;
    });
    return best;
}

/** Надгробие для синхронизации удалений между устройствами */
export const tomb = (s: Progress, key: string) => {
    s.deleted = s.deleted || {};
    s.deleted[key] = Date.now();
};
