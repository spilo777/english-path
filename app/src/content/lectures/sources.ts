// Грамматика уроков: блоки объяснения и пошаговая прогулка из units/<id>.json
import type { Level } from '@utils/level';
import { all, chain, derive, type Source } from '../base';
import { lessonsByLevel, type Lesson } from '../lessons/sources';
import type { Unit } from '../lessons/model';
import type { GrammarBlock, WalkPart } from './model';

/** Лекция = грамматика одного урока */
export interface Lecture {
    /** id урока */
    id: string;
    title: string;
    level: Level;
    grammar: GrammarBlock[];
    walk?: WalkPart[];
}

function toLecture(u: Unit): Lecture {
    return { id: u.id, title: u.title, level: u.level, grammar: u.grammar, walk: u.walk };
}

const lectures = new Map<string, Source<Lecture>>();
/** Лекция урока (грузит тело урока) */
export function lectureOf(l: Lesson): Source<Lecture> {
    let s = lectures.get(l.id);
    if (!s) lectures.set(l.id, (s = derive(l.body, 'lecture:' + l.id, toLecture)));
    return s;
}

/** Лекции всех уроков уровня (грузит все уроки уровня — для списков и поиска, не для одной страницы) */
export function lecturesByLevel(lv: Level): Source<Lecture[]> {
    const ofLessons = (ls: Lesson[]) => all('lectures:' + lv + ':all', ls.map(lectureOf));
    return chain(lessonsByLevel(lv), 'lectures:' + lv, ofLessons);
}
