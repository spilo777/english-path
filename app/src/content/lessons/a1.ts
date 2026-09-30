// Уроки уровня A1: основная линия курса (course.json), тела уроков — units/<id>.json по требованию
import { defineLessons } from './define';
import { lessonsByLevel } from './sources';

export const A1_Lessons = defineLessons({
    id: 'lessons-A1',
    title: 'Уроки A1',
    level: 'A1',
    icon: 'graduation-cap',
    source: lessonsByLevel('A1'),
});
