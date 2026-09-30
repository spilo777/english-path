// Достижения English Path: контекст значений и данные курса, от которых они зависят
import type { Level } from '@utils/level';
import type { AchDef } from '../../core/achievements/runtime';
import type { CourseIndex } from '../lessons/model';
import type { TextItem } from '../texts/model';
import type { DeckWord } from '../word-cards/model';

/** Значения, от которых зависят достижения */
export interface AchCtx {
    reviews: number;
    exercises: number;
    dayMax: number;
    activeDays: number;
    weekendDays: number;
    bestStreak: number;
    learned: number;
    mastered: number;
    known: number;
    ownCards: number;
    deckDone: Record<string, number>;
    deckHalf: Record<string, number>;
    passed: (id: string) => number;
    unitsPassed: number;
    gamesPassed: number;
    levelDone: (l: Level) => number;
    perfectTests: number;
    perfectLevel: (l: Level) => number;
    firstTry: number;
    textsRead: number;
    allCourseTextsRead: number;
    userTexts: number;
    achCount: number;
    allOthers: number;
    lookups: number;
    listened: number;
    exStreakBest: number;
    ruEn: number;
    cleanSessions: number;
    listenRight: number;
    early: number;
    owl: number;
    insomnia: number;
    newyear: number;
    comeback: number;
    backup: number;
    voice: number;
    logo: number;
    speedrun: number;
    flawless: number;
    flawlessPractice: number;
    mixRev: number;
    late: number;
    mini: number;
    miniRight: number;
    speaks: number;
    phrases: number;
    customImgs: number;
    fullWeekend: number;
    retryPassed: number;
    exType: Record<string, number>;
    libAll: number;
    readB2: number;
    readCat: Record<string, number>;
    animeAll: number;
    quizPerfect: number;
    account: number;
    halloween: number;
    midnight: number;
    allDay: number;
}

/** Достижение English Path */
export type Ach = AchDef<AchCtx>;

/** Данные курса, нужные достижениям (собирает useAchContextData) */
export interface AchExtra {
    course: CourseIndex;
    /** частотная колода (words.json) */
    deck: DeckWord[];
    /** статьи библиотеки */
    library: TextItem[];
    /** id всех текстов уроков; null — не загружены (значит «все тексты курса» точно не прочитаны) */
    courseTexts: string[] | null;
}
