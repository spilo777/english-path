// Достижения: секретные
import { CATS, type AddAch } from '../add';

export function secretAch(add: AddAch) {
    const { X } = CATS;
    add(X, 'logo', 'egg', 'Пасхалка', 'Нажмите на логотип 10 раз', 2.9, 1, (c) => c.logo, { hidden: true });
    add(X, 'insomnia', 'moon-stars', 'Бессонница', 'Занимайтесь между 3 и 5 часами ночи', 1.9, 1, (c) => c.insomnia, {
        hidden: true,
    });
    add(X, 'newyear', 'tree-evergreen', 'Новогоднее чудо', 'Занимайтесь 1 января', 1.2, 1, (c) => c.newyear, {
        hidden: true,
    });
    add(X, 'speedrun', 'timer', 'Спидран', '50 повторений меньше чем за 5 минут', 3.3, 1, (c) => c.speedrun, {
        hidden: true,
    });
    add(
        X,
        'no_idk',
        'robot',
        'Без подсказок',
        'Пройдите практику юнита, ни разу не нажав «Не знаю» и без ошибок',
        9.4,
        1,
        (c) => c.flawlessPractice,
        { hidden: true },
    );
}
