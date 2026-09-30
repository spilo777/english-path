// Уроки уровня B1: основная линия курса (course.json), тела уроков — units/<id>.json по требованию
import { defineLessons } from './define';
import { lessonsByLevel } from './sources';

export const B1_Lessons = defineLessons({
    id: 'lessons-B1',
    title: 'Уроки B1',
    level: 'B1',
    icon: 'graduation-cap',
    source: lessonsByLevel('B1'),
});
