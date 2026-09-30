// Достижения: серии
import { CATS, type AddAch } from '../add';

export function streakAch(add: AddAch) {
    const { S } = CATS;
    add(S, 'streak_3', 'flame', 'Разогрев', 'Занимайтесь 3 дня подряд', 66, 3, (c) => c.bestStreak);
    add(S, 'streak_7', 'calendar-check', 'Неделя', '7 дней подряд', 44, 7, (c) => c.bestStreak);
    add(S, 'streak_14', 'calendar-dots', 'Две недели', '14 дней подряд', 29, 14, (c) => c.bestStreak);
    add(S, 'streak_30', 'moon-stars', 'Месяц без пропусков', '30 дней подряд', 15, 30, (c) => c.bestStreak);
    add(S, 'streak_60', 'shooting-star', 'Привычка', '60 дней подряд', 7.8, 60, (c) => c.bestStreak);
    add(S, 'streak_100', 'fire', 'Сто дней', '100 дней подряд', 3.7, 100, (c) => c.bestStreak);
    add(S, 'streak_180', 'mountains', 'Полгода', '180 дней подряд', 1.7, 180, (c) => c.bestStreak);
    add(S, 'streak_365', 'globe-hemisphere-west', 'Год английского', '365 дней подряд', 0.7, 365, (c) => c.bestStreak);
    add(S, 'days_10', 'push-pin', 'Десять дней', 'Занимайтесь 10 разных дней', 52, 10, (c) => c.activeDays);
    add(S, 'days_50', 'map-pin', 'Пятьдесят дней', 'Занимайтесь 50 разных дней', 21, 50, (c) => c.activeDays);
    add(S, 'days_100', 'compass', 'Сто дней в пути', 'Занимайтесь 100 разных дней', 11, 100, (c) => c.activeDays);
    add(S, 'days_250', 'anchor', 'Скала', 'Занимайтесь 250 разных дней', 3.4, 250, (c) => c.activeDays);
    add(
        S,
        'weekend_10',
        'couch',
        'Выходной — не повод',
        'Занимайтесь в 10 разных выходных дней',
        28,
        10,
        (c) => c.weekendDays,
    );
    add(S, 'early', 'sun-horizon', 'Ранняя пташка', 'Занимайтесь до 7 утра', 24, 1, (c) => c.early);
    add(S, 'owl', 'moon', 'Сова', 'Занимайтесь после полуночи', 22, 1, (c) => c.owl);
    add(
        S,
        'comeback',
        'arrow-u-up-left',
        'Возвращение',
        'Вернитесь к занятиям после перерыва в неделю и больше',
        13,
        1,
        (c) => c.comeback,
    );
}
