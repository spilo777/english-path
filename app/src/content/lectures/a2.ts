// Грамматика уроков уровня A2 (из тел уроков units/<id>.json)
import { defineLectures } from './define';
import { lecturesByLevel } from './sources';

export const A2_Lectures = defineLectures({
    id: 'lectures-A2',
    title: 'Грамматика A2',
    level: 'A2',
    icon: 'chalkboard-teacher',
    source: lecturesByLevel('A2'),
});
