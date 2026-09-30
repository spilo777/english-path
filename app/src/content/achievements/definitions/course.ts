// Достижения: курс
import { CATS, type AddAch } from '../add';

export function courseAch(add: AddAch) {
    const { K } = CATS;
    add(K, 'unit_0', 'footprints', 'Первый шаг', 'Пройдите юнит 0', 86, 1, (c) => c.passed('a1-0'));
    add(K, 'units_3', 'stairs', 'Лестница', 'Пройдите 3 юнита', 58, 3, (c) => c.unitsPassed);
    add(K, 'units_6', 'wall', 'Фундамент', 'Пройдите 6 юнитов', 34, 6, (c) => c.unitsPassed);
    add(K, 'a1_done', 'graduation-cap', 'Выпускник A1', 'Пройдите все юниты уровня A1', 18, 1, (c) =>
        c.levelDone('A1'),
    );
    add(K, 'a2_done', 'graduation-cap', 'Выпускник A2', 'Пройдите все юниты уровня A2', 8.9, 1, (c) =>
        c.levelDone('A2'),
    );
    add(K, 'b1_done', 'graduation-cap', 'Выпускник B1', 'Пройдите все юниты уровня B1', 3.8, 1, (c) =>
        c.levelDone('B1'),
    );
    add(
        K,
        'b2_done',
        'seal-check',
        'Выпускник B2',
        'Пройдите все юниты уровня B2. Цель курса достигнута',
        1.4,
        1,
        (c) => c.levelDone('B2'),
    );
    add(K, 'perfect_1', 'star', 'Отличник', 'Сдайте тест на 100%', 51, 1, (c) => c.perfectTests);
    add(K, 'perfect_5', 'scroll', 'Круглый отличник', 'Сдайте 5 разных тестов на 100%', 23, 5, (c) => c.perfectTests);
    add(K, 'perfect_all', 'eye', 'Перфекционист', 'Сдайте все тесты A1 на 100%', 4.6, 1, (c) => c.perfectLevel('A1'));
    add(K, 'first_try', 'target', 'С первой попытки', 'Сдайте 5 тестов с первой попытки', 27, 5, (c) => c.firstTry);
    add(K, 'games_1', 'joystick', 'Игрок', 'Пройдите первый игровой модуль', 62, 1, (c) => c.gamesPassed);
    add(K, 'games_3', 'game-controller', 'Геймер', 'Пройдите три игровых модуля', 21, 3, (c) => c.gamesPassed);
}
