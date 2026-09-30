// Грамматика уроков уровня A1 (из тел уроков units/<id>.json)
import { defineLectures } from './define';
import { lecturesByLevel } from './sources';

export const A1_Lectures = defineLectures({
    id: 'lectures-A1',
    title: 'Грамматика A1',
    level: 'A1',
    icon: 'chalkboard-teacher',
    source: lecturesByLevel('A1'),
});
