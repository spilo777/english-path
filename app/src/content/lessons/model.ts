// Уроки (юниты курса): индекс course.json, полный юнит units/<id>.json, компактный индекс lessons.json, учебники Мёрфи
import type { Level } from '@utils/level';
import type { Exercise } from '../exercises/model';
import type { GrammarBlock, WalkPart } from '../lectures/model';
import type { LessonText, TextItem } from '../texts/model';
import type { UnitWord } from '../word-cards/model';

export interface BookRefs {
    red?: number[];
    blue?: number[];
    green?: number[];
}

export interface UnitMeta {
    id: string;
    level: Level;
    num: number;
    track: 'main' | 'games';
    title: string;
    summary: string;
    books: BookRefs | null;
    unlockAfter: string | null;
    hasWalk: boolean;
}

export interface Unit extends Omit<UnitMeta, 'books' | 'unlockAfter' | 'hasWalk'> {
    books?: BookRefs;
    unlockAfter?: string;
    grammar: GrammarBlock[];
    walk?: WalkPart[];
    words: UnitWord[];
    texts: TextItem[];
    practice: Exercise[];
    test: Exercise[];
}

/** Юнит в индексе lessons.json (порядок — как в старых units/<уровень>.json) */
export interface LessonUnit {
    id: string;
    level: Level;
    track: 'main' | 'games';
    words: string[];
    texts: LessonText[];
}

export interface CourseIndex {
    levels: { id: Level; title: string; goal: string }[];
    units: UnitMeta[];
}

export interface SyllabusBook {
    name: string;
    short: string;
    author: string;
    level: string;
    units: Record<string, string>;
}
export interface SyllabusLesson {
    id: string;
    level: Level;
    title: string;
    red: number[];
    blue: number[];
    green: number[];
}
export interface Syllabus {
    books: Record<'red' | 'blue' | 'green', SyllabusBook>;
    lessons: SyllabusLesson[];
}
