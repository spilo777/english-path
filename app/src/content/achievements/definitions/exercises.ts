// Достижения: упражнения
import { CATS, type AddAch } from '../add';

export function exercisesAch(add: AddAch) {
    const { E } = CATS;
    add(E, 'ex_50', 'pencil', 'Разминка', 'Выполните 50 заданий', 71, 50, (c) => c.exercises);
    add(E, 'ex_250', 'note-pencil', 'Практик', 'Выполните 250 заданий', 45, 250, (c) => c.exercises);
    add(E, 'ex_1000', 'notebook', 'Тренировка', 'Выполните 1 000 заданий', 22, 1000, (c) => c.exercises);
    add(E, 'ex_5000', 'barbell', 'Железная воля', 'Выполните 5 000 заданий', 4.9, 5000, (c) => c.exercises);
    add(E, 'exs_10', 'lightning', 'Серия 10', '10 правильных ответов подряд', 56, 10, (c) => c.exStreakBest);
    add(E, 'exs_25', 'lightning', 'Серия 25', '25 правильных ответов подряд', 26, 25, (c) => c.exStreakBest);
    add(E, 'exs_50', 'cloud-lightning', 'Безошибочный', '50 правильных ответов подряд', 7.9, 50, (c) => c.exStreakBest);
    add(E, 'listen_ex_50', 'ear', 'Чуткое ухо', 'Правильно запишите на слух 50 фраз', 19, 50, (c) => c.listenRight);
}
