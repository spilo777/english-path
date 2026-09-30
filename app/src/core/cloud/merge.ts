// Слияние двух состояний прогресса (локальное + облачное) и то, что уходит в облако. Чистые функции
import { unionKeys } from '@utils/collections';
import type { Card, DayActivity, Progress, UnitProgress, UserText } from '../progress/types';

export const num = (x: unknown): number => (typeof x === 'number' && isFinite(x) ? x : 0);
export type Obj = Record<string, unknown>;
export const obj = (x: unknown): Obj => (x && typeof x === 'object' && !Array.isArray(x) ? (x as Obj) : {});

/** Слияние прогресса: a — локальное (приоритет для «своих» полей), b — облачное */
export function merge(a0: Partial<Progress> | null | undefined, b0: Partial<Progress> | null | undefined): Progress {
    const a = (a0 || {}) as Partial<Progress>,
        b = (b0 || {}) as Partial<Progress>;
    const out = Object.assign({}, a) as Progress;
    // удаления (надгробия): id → время удаления
    const deleted: Record<string, number> = Object.assign({}, a.deleted || {});
    Object.entries(b.deleted || {}).forEach(([k, t]) => {
        deleted[k] = Math.max(num(deleted[k]), num(t));
    });
    out.deleted = deleted;
    // карточки: побеждает изменённая позже
    const ca = a.cards || {},
        cb = b.cards || {};
    const cards: Record<string, Card> = {};
    unionKeys(ca, cb).forEach((id) => {
        const x = ca[id],
            y = cb[id];
        let c: Card | null = !x
            ? y
            : !y
              ? x
              : num(x.mod) !== num(y.mod)
                ? num(x.mod) > num(y.mod)
                    ? x
                    : y
                : num(x.reps) >= num(y.reps)
                  ? x
                  : y;
        const del = deleted['card:' + id];
        if (c && del && del >= num(c.mod || c.added)) c = null;
        if (c) cards[id] = c;
    });
    out.cards = cards;
    // юниты: шаги объединяем, лучший результат теста — максимум, грамматика по шагам — дальше продвинутая;
    // копия, изменённая раньше «Начать заново» (надгробие unit:<id>), не считается
    const ua = a.units || {},
        ub = b.units || {};
    const units: Progress['units'] = {};
    unionKeys(ua, ub).forEach((id) => {
        const reset = num(deleted['unit:' + id]);
        const alive = (u: UnitProgress | undefined): UnitProgress | null =>
            u && (!reset || num(u.mod) >= reset) ? u : null;
        const x = alive(ua[id]),
            y = alive(ub[id]);
        if (!x && !y) {
            if (reset) units[id] = { steps: {}, testBest: null, mod: reset };
            return;
        }
        if (!x || !y) {
            units[id] = Object.assign({}, (x || y) as UnitProgress);
            return;
        }
        const tb = [x.testBest, y.testBest].filter((v): v is number => v != null);
        const newer = num(x.mod) >= num(y.mod) ? x : y;
        const wx = x.walk,
            wy = y.walk;
        const far = (w?: UnitProgress['walk']) => (w ? (w.done ? 1e6 : w.part * 1000 + w.step) : -1);
        units[id] = Object.assign({}, newer, {
            steps: Object.assign({}, x.steps || {}, y.steps || {}),
            testBest: tb.length ? Math.max(...tb) : null,
        });
        const mod = Math.max(num(x.mod), num(y.mod));
        if (mod) units[id].mod = mod;
        else delete units[id].mod;
        const walk = far(wx) >= far(wy) ? wx : wy;
        if (walk) units[id].walk = walk;
        else delete units[id].walk;
    });
    out.units = units;
    out.textsRead = Object.assign({}, b.textsRead || {}, a.textsRead || {});
    out.watched = Object.assign({}, b.watched || {}, a.watched || {});
    // свои тексты: объединяем по id, минус удалённые
    const texts: Record<string, UserText> = {};
    [...(b.userTexts || []), ...(a.userTexts || [])].forEach((t) => {
        if (t && t.id && !deleted['text:' + t.id]) texts[t.id] = t;
    });
    out.userTexts = Object.values(texts).sort((x, y) => String(y.id).localeCompare(String(x.id)));
    // активность по дням: максимум по каждому полю
    const aa = a.activity || {},
        ab = b.activity || {};
    const act: Record<string, DayActivity> = {};
    unionKeys(aa, ab).forEach((d) => {
        const x: Obj = aa[d] || {},
            y: Obj = ab[d] || {};
        const day: Record<string, number> = {};
        unionKeys(x, y).forEach((k) => {
            day[k] = Math.max(num(x[k]), num(y[k]));
        });
        act[d] = day as DayActivity;
    });
    out.activity = act;
    // лимит новых слов на сегодня
    const na = a.newToday || { date: '', count: 0 },
        nb = b.newToday || { date: '', count: 0 };
    out.newToday =
        na.date === nb.date
            ? { date: na.date, count: Math.max(num(na.count), num(nb.count)) }
            : String(na.date) > String(nb.date)
              ? na
              : nb;
    // «знаю»: объединение, минус снятые (в старых данных значение могло быть true)
    const known: Record<string, number> = Object.assign({}, b.known || {}, a.known || {});
    Object.keys(known).forEach((id) => {
        const del = deleted['known:' + id];
        const v: unknown = known[id];
        if (del && del >= num(v === true ? 0 : v)) delete known[id];
    });
    out.known = known;
    // достижения: самая ранняя дата получения
    const ach: Record<string, number> = Object.assign({}, b.ach || {});
    Object.entries(a.ach || {}).forEach(([k, t]) => {
        ach[k] = ach[k] ? Math.min(num(ach[k]), num(t)) : t;
    });
    out.ach = ach;
    // счётчики: числа — максимум, вложенные объекты — по ключам
    const sa: Obj = a.stats || {},
        sbb: Obj = b.stats || {};
    const st: Obj = {};
    unionKeys(sa, sbb).forEach((k) => {
        const x = sa[k],
            y = sbb[k];
        if ((x && typeof x === 'object') || (y && typeof y === 'object')) {
            const ox = obj(x),
                oy = obj(y);
            const o: Obj = Object.assign({}, oy, ox);
            Object.keys(o).forEach((kk) => {
                if (typeof ox[kk] === 'number' || typeof oy[kk] === 'number')
                    o[kk] = Math.max(num(ox[kk]), num(oy[kk]));
            });
            st[k] = o;
        } else st[k] = Math.max(num(x), num(y));
    });
    st.exStreak = num(sa.exStreak); // текущая серия — локальная
    out.stats = st;
    // настройки: более свежие
    out.settings = (num(a.settingsMod) >= num(b.settingsMod) ? a.settings : b.settings) as Progress['settings'];
    out.settingsMod = Math.max(num(a.settingsMod), num(b.settingsMod));
    out.imgCache = Object.assign({}, b.imgCache || {}, a.imgCache || {});
    const quiz: Record<string, number> = Object.assign({}, b.quiz || {});
    Object.entries(a.quiz || {}).forEach(([k, v]) => {
        quiz[k] = Math.max(num(quiz[k]), num(v));
    });
    out.quiz = quiz;
    // тренажёр времён: лучший результат и самая поздняя попытка
    if (a.tenses || b.tenses) {
        const ta = a.tenses || {},
            tb = b.tenses || {};
        const tenses: NonNullable<Progress['tenses']> = {};
        unionKeys(ta, tb).forEach((k) => {
            const x = obj(ta[k]),
                y = obj(tb[k]);
            const r: { best?: number; at?: number } = {};
            if (x.best != null || y.best != null) r.best = Math.max(num(x.best), num(y.best));
            if (x.at != null || y.at != null) r.at = Math.max(num(x.at), num(y.at));
            tenses[k] = r;
        });
        out.tenses = tenses;
    }
    // позиция в книге: дальняя глава
    if (a.bookPos || b.bookPos) {
        const pa = a.bookPos || {},
            pb = b.bookPos || {};
        const pos: Record<string, number> = {};
        unionKeys(pa, pb).forEach((k) => {
            pos[k] = Math.max(num(pa[k]), num(pb[k]));
        });
        out.bookPos = pos;
    }
    // время суток занятий (утро 1, день 2, вечер 4): объединение битов
    if (a.dayParts || b.dayParts) {
        const da = a.dayParts || {},
            db = b.dayParts || {};
        const parts: Record<string, number> = {};
        unionKeys(da, db).forEach((k) => {
            parts[k] = num(da[k]) | num(db[k]);
        });
        out.dayParts = parts;
    }
    return out;
}

/** Что отправляем в облако: кеш картинок у каждого устройства свой */
export function payload(s: Progress): Omit<Progress, 'imgCache'> {
    const p: Partial<Progress> = Object.assign({}, s);
    delete p.imgCache;
    return p as Omit<Progress, 'imgCache'>;
}
export const strip = (s: Progress) => JSON.stringify(payload(s));
