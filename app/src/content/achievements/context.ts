// Контекст достижений: значения из прогресса и данных курса; какие достижения получены только что
import { DAY, dayKey } from '@utils/date';
import { LEVELS, type Level } from '@utils/level';
import { pctOf } from '../../core/achievements/rarity';
import { detectNew, engagementOf, points, type Engagement } from '../../core/achievements/runtime';
import { Cloud } from '../../core/cloud/client';
import { bestStreak } from '../../core/progress/counters';
import type { Progress } from '../../core/progress/types';
import { cardLearned } from '../../core/srs/classify';
import { mainUnits, passed as passedU } from '../lessons/progress';
import type { DeckWord } from '../word-cards/model';
import { ACH_LIST } from './list';
import type { Ach, AchCtx, AchExtra } from './model';

/** Основная линия уроков (как в курсе) */
export const achMainUnits = mainUnits;

/** Слова колоды уровня: всего / выучено / «знаю» */
export function deckStats(s: Progress, deck: DeckWord[], lvl: Level) {
    let total = 0,
        learned = 0,
        study = 0,
        known = 0;
    deck.forEach((w) => {
        if (w.lvl !== lvl) return;
        total++;
        const c = s.cards[w.id];
        if (s.known[w.id]) known++;
        else if (cardLearned(c)) learned++;
        else if (c && c.state !== 'new') study++;
    });
    return { total, learned, study, known };
}

export function achCtx(s: Progress, extra: AchExtra): AchCtx {
    const cards = Object.values(s.cards);
    const acts = Object.entries(s.activity);
    const st = s.stats;
    const main = mainUnits(extra.course);
    const levelUnits = (l: Level) => main.filter((u) => u.level === l);
    const lib = extra.library;
    const deckDone: Record<string, number> = {},
        deckHalf: Record<string, number> = {};
    LEVELS.forEach((l) => {
        const d = deckStats(s, extra.deck, l);
        deckDone[l] = d.total > 0 && d.learned + d.known >= d.total ? 1 : 0;
        deckHalf[l] = d.total && (d.learned + d.known) * 2 >= d.total ? 1 : 0;
    });
    const n = (k: string) => Number(st[k]) || 0;
    const b = (k: string) => (st[k] ? 1 : 0);
    const readCat: Record<string, number> = { Сериалы: 0, Мультфильмы: 0, Игры: 0 };
    lib.forEach((t) => {
        if (s.textsRead[t.id] && t.cat) readCat[t.cat] = (readCat[t.cat] || 0) + 1;
    });
    const anime = lib.filter((t) => t.cat === 'Аниме');
    return {
        reviews: acts.reduce((a, [, v]) => a + (v.reviews || 0), 0),
        exercises: acts.reduce((a, [, v]) => a + (v.exercises || 0), 0),
        dayMax: acts.reduce((a, [, v]) => Math.max(a, v.reviews || 0), 0),
        activeDays: acts.length,
        weekendDays: acts.filter(([d]) => [0, 6].includes(new Date(d + 'T12:00').getDay())).length,
        bestStreak: bestStreak(s),
        learned: cards.filter(cardLearned).length,
        mastered: cards.filter((c) => c.state === 'review' && c.ivl >= 90).length,
        known: Object.keys(s.known).length,
        ownCards: cards.filter((c) => c.src === 'manual' || String(c.src).startsWith('text:')).length,
        deckDone,
        deckHalf,
        passed: (id) => (passedU(s, id) ? 1 : 0),
        unitsPassed: main.filter((u) => passedU(s, u.id)).length,
        gamesPassed: extra.course.units.filter((u) => u.track === 'games' && passedU(s, u.id)).length,
        levelDone: (l) => (levelUnits(l).length && levelUnits(l).every((u) => passedU(s, u.id)) ? 1 : 0),
        perfectTests: Object.keys(st.perfect || {}).length,
        perfectLevel: (l) => (levelUnits(l).length && levelUnits(l).every((u) => (st.perfect || {})[u.id]) ? 1 : 0),
        firstTry: Object.keys(st.firstTryUnits || {}).length,
        textsRead: Object.keys(s.textsRead).length,
        allCourseTextsRead:
            extra.courseTexts && extra.courseTexts.length && extra.courseTexts.every((id) => s.textsRead[id]) ? 1 : 0,
        userTexts: s.userTexts.length,
        achCount: Object.keys(s.ach).length,
        allOthers: ACH_LIST.every((a) => a.id === 'platinum' || s.ach[a.id]) ? 1 : 0,
        lookups: n('lookups'),
        listened: n('listened'),
        exStreakBest: n('exStreakBest'),
        ruEn: n('ruEn'),
        cleanSessions: n('cleanSessions'),
        listenRight: n('listenRight'),
        early: b('early'),
        owl: b('owl'),
        insomnia: b('insomnia'),
        newyear: b('newyear'),
        comeback: b('comeback'),
        backup: b('backup'),
        voice: b('voice'),
        logo: b('logo'),
        speedrun: b('speedrun'),
        flawless: b('flawless'),
        flawlessPractice: b('flawless'),
        mixRev: n('mixRev'),
        late: n('late'),
        mini: n('mini'),
        miniRight: n('miniRight'),
        speaks: n('speaks'),
        phrases: cards.filter((c) => c.id.includes(' ') && String(c.src).startsWith('text:')).length,
        customImgs: cards.filter((c) => c.img).length,
        fullWeekend: acts.some(([d]) => {
            const x = new Date(d + 'T12:00');
            return x.getDay() === 6 && !!s.activity[dayKey(new Date(x.getTime() + DAY))];
        })
            ? 1
            : 0,
        retryPassed: b('retry'),
        exType: Object.assign({ order: 0, tr: 0, gap: 0, choice: 0, listen: 0 }, st.exType || {}),
        libAll: lib.length && lib.every((t) => s.textsRead[t.id]) ? 1 : 0,
        readB2: lib.some((t) => t.level === 'B2' && s.textsRead[t.id]) ? 1 : 0,
        readCat,
        animeAll: anime.length && anime.every((t) => s.textsRead[t.id]) ? 1 : 0,
        quizPerfect: Object.entries(s.quiz || {}).filter(([id, v]) => {
            const t = lib.find((x) => x.id === id);
            return !!t && !!t.questions && v >= t.questions.length;
        }).length,
        account: Cloud.user() ? 1 : 0,
        halloween: b('halloween'),
        midnight: b('midnight'),
        allDay: b('allDay'),
    };
}

let lastExtra: AchExtra | null = null;
/** Запомнить данные курса для checkAch без параметра (вызывает useAchContextData) */
export const setAchExtra = (e: AchExtra | null) => {
    if (e) lastExtra = e;
};

/** Какие достижения получены только что (прогресс не меняет — запись делает вызывающий).
 *  Без данных курса проверка не выполняется: иначе условия «все …» сработали бы на пустых списках. */
export function checkAch(s: Progress, extra: AchExtra | null = lastExtra): Ach[] {
    if (!extra) return [];
    return detectNew(ACH_LIST, s.ach, (ach) => achCtx({ ...s, ach }, extra));
}

/** Очки, уровень и звание ученика по полученным достижениям */
export function engagement(s: Progress): Engagement {
    return engagementOf(ACH_LIST.filter((a) => s.ach[a.id]).reduce((sum, a) => sum + points(pctOf(a)), 0));
}

/** Ближайшие к получению (для «Главной») */
export function nearAch(s: Progress, c: AchCtx, n = 3): { a: Ach; p: number }[] {
    return ACH_LIST.filter((a) => !s.ach[a.id] && !a.hidden && a.need > 1)
        .map((a) => ({ a, p: Math.min(1, a.val(c) / a.need) }))
        .filter((x) => x.p > 0)
        .sort((x, y) => y.p - x.p)
        .slice(0, n);
}
