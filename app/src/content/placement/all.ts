// Тест на уровень: по 13 вопросов на ступень A1–B2
import { definePlacement } from './define';
import { placementItems } from './sources';

export const Placement_Test = definePlacement({
    id: 'placement',
    title: 'Тест на уровень',
    icon: 'exam',
    source: placementItems,
});
