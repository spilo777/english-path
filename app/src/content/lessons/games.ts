// Игровые уроки: отдельная ветка курса, открываются после указанного урока (unlockAfter)
import { defineLessons } from './define';
import { gameLessons } from './sources';

export const Games_Lessons = defineLessons({
    id: 'lessons-games',
    title: 'Уроки-игры',
    icon: 'game-controller',
    source: gameLessons,
});
