// Механика достижений без содержания: редкость (tier), очки вовлечённости, уровни и звания, поиск новых.
// Сами достижения (что и за что) — в content/achievements.

/** Достижение: val(c) — текущее значение из контекста C, need — цель. hidden — описание скрыто до получения */
export interface AchDef<C> {
    cat: string;
    id: string;
    icon: string;
    title: string;
    desc: string;
    /** оценочная доля учеников с достижением, % */
    pct: number;
    need: number;
    val: (c: C) => number;
    hidden?: boolean;
    /** цвета значка: [светлый, тёмный] */
    color: [string, string];
}

export type TierCls = 'legend' | 'epic' | 'rare' | 'uncommon' | 'common';
export interface AchTier {
    max: number;
    name: string;
    cls: TierCls;
}
export const ACH_TIERS: AchTier[] = [
    { max: 2, name: 'Легендарное', cls: 'legend' },
    { max: 8, name: 'Эпическое', cls: 'epic' },
    { max: 20, name: 'Редкое', cls: 'rare' },
    { max: 50, name: 'Необычное', cls: 'uncommon' },
    { max: 101, name: 'Обычное', cls: 'common' },
];
export const tier = (pct: number): AchTier => ACH_TIERS.find((t) => pct < t.max) || ACH_TIERS[ACH_TIERS.length - 1];
/** Очки вовлечённости: чем реже достижение, тем больше очков */
export const points = (pct: number) => Math.round(5 + 12 * Math.log2(100 / pct));
export const RANKS = [
    'Новичок',
    'Ученик',
    'Старательный',
    'Упорный',
    'Знаток',
    'Мастер слов',
    'Эксперт',
    'Полиглот',
    'Грандмастер',
    'Легенда',
];

export interface Engagement {
    xp: number;
    lvl: number;
    into: number;
    need: number;
    rank: string;
}
/** Уровень и звание по сумме очков: уровень n требует на 25% больше очков, чем предыдущий */
export function engagementOf(xp: number): Engagement {
    let lvl = 1,
        need = 60,
        acc = 0;
    while (xp >= acc + need) {
        acc += need;
        lvl++;
        need = Math.round(need * 1.25);
    }
    return { xp, lvl, into: xp - acc, need, rank: RANKS[Math.min(RANKS.length - 1, Math.floor((lvl - 1) / 2))] };
}

/** Сколько очков всего нужно, чтобы достичь уровня lvl (уровень 1 — с нуля) */
export function levelStartXp(lvl: number): number {
    let need = 60,
        acc = 0;
    for (let l = 1; l < lvl; l++) {
        acc += need;
        need = Math.round(need * 1.25);
    }
    return acc;
}

export interface RankStep {
    rank: string;
    from: number;
    to: number;
    xp: number;
}
/** Лестница званий: каждое звание — два уровня; xp — сколько очков нужно для первого уровня звания */
export function rankLadder(): RankStep[] {
    return RANKS.map((rank, i) => ({ rank, from: i * 2 + 1, to: i * 2 + 2, xp: levelStartXp(i * 2 + 1) }));
}

/** Новые достижения: те, чья цель достигнута, но ещё не отмечены. Несколько проходов —
 *  только что полученные могут открыть «коллекционные» (сколько достижений собрано) */
export function detectNew<C>(
    list: readonly AchDef<C>[],
    got: Record<string, number>,
    ctxOf: (got: Record<string, number>) => C,
    now = Date.now(),
): AchDef<C>[] {
    const fresh: AchDef<C>[] = [];
    const ach = { ...got };
    for (let pass = 0; pass < 3; pass++) {
        const c = ctxOf(ach);
        let any = false;
        list.forEach((a) => {
            if (!ach[a.id] && a.val(c) >= a.need) {
                ach[a.id] = now;
                fresh.push(a);
                any = true;
            }
        });
        if (!any) break;
    }
    return fresh;
}
