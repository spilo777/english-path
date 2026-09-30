// Источники уроков: индекс курса (course.json, небольшой), полный урок units/<id>.json (лениво),
// компактный индекс lessons.json и программа по учебникам (syllabus.json)
import type { Level } from '@utils/level';
import { paths } from '../../core/data/paths';
import { derive, jsonSource, type Source } from '../base';
import type { CourseIndex, LessonUnit, Syllabus, Unit, UnitMeta } from './model';
import { mainUnits } from './progress';

export const courseIndex = jsonSource<CourseIndex>(paths.course);
export const lessonsIndex = jsonSource<LessonUnit[]>(paths.lessons);
export const syllabus = jsonSource<Syllabus>(paths.syllabus);

const bodies = new Map<string, Source<Unit>>();
/** Полный урок: грамматика, слова, тексты, упражнения. Грузится, только когда нужен */
export function unitBody(id: string): Source<Unit> {
    let s = bodies.get(id);
    if (!s) bodies.set(id, (s = jsonSource<Unit>(paths.unit(id))));
    return s;
}

/** Урок в движке: описание из индекса курса + ленивое тело */
export interface Lesson extends UnitMeta {
    readonly body: Source<Unit>;
}
const toLesson = (u: UnitMeta): Lesson => ({ ...u, body: unitBody(u.id) });

/** Основные уроки уровня по порядку */
export const lessonsByLevel = (l: Level): Source<Lesson[]> =>
    derive(courseIndex, 'lessons:' + l, (c) => mainUnits(c).filter((u) => u.level === l).map(toLesson));

/** Игровые уроки (отдельная ветка курса) */
export const gameLessons: Source<Lesson[]> = derive(courseIndex, 'lessons:games', (c) =>
    c.units.filter((u) => u.track === 'games').map(toLesson),
);
