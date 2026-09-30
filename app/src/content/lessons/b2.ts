// Уроки уровня B2: основная линия курса (course.json), тела уроков — units/<id>.json по требованию
import { defineLessons } from './define';
import { lessonsByLevel } from './sources';

export const B2_Lessons = defineLessons({
    id: 'lessons-B2',
    title: 'Уроки B2',
    level: 'B2',
    icon: 'graduation-cap',
    source: lessonsByLevel('B2'),
});
