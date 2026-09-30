// Грамматика уроков уровня B1 (из тел уроков units/<id>.json)
import { defineLectures } from './define';
import { lecturesByLevel } from './sources';

export const B1_Lectures = defineLectures({
    id: 'lectures-B1',
    title: 'Грамматика B1',
    level: 'B1',
    icon: 'chalkboard-teacher',
    source: lecturesByLevel('B1'),
});
