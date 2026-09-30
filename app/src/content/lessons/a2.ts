// Уроки уровня A2: основная линия курса (course.json), тела уроков — units/<id>.json по требованию
import { defineLessons } from './define';
import { lessonsByLevel } from './sources';

export const A2_Lessons = defineLessons({
    id: 'lessons-A2',
    title: 'Уроки A2',
    level: 'A2',
    icon: 'graduation-cap',
    source: lessonsByLevel('A2'),
});
