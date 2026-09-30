// Грамматика уроков уровня B2 (из тел уроков units/<id>.json)
import { defineLectures } from './define';
import { lecturesByLevel } from './sources';

export const B2_Lectures = defineLectures({
    id: 'lectures-B2',
    title: 'Грамматика B2',
    level: 'B2',
    icon: 'chalkboard-teacher',
    source: lecturesByLevel('B2'),
});
