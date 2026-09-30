// Достижения: дополнительные достижения
import { CATS, type AddAch } from '../add';

export function extraAch(add: AddAch) {
    const { C, E, K, M, R, S, X } = CATS;
    add(C, 'rev_250', 'stack-simple', 'Четверть тысячи', 'Сделайте 250 повторений', 63, 250, (c) => c.reviews);
    add(C, 'rev_2500', 'lightning-a', 'Разгон', 'Сделайте 2 500 повторений', 27, 2500, (c) => c.reviews);
    add(C, 'learn_25', 'flower', 'Первые всходы', 'Выучите 25 слов', 53, 25, (c) => c.learned);
    add(C, 'learn_750', 'mountains', 'Горная тропа', 'Выучите 750 слов', 12.5, 750, (c) => c.learned);
    add(C, 'learn_1500', 'television-simple', 'Смотрю сериалы', 'Выучите 1 500 слов', 6.7, 1500, (c) => c.learned);
    add(C, 'learn_2500', 'chat-circle-dots', 'Свободный разговор', 'Выучите 2 500 слов', 3.5, 2500, (c) => c.learned);
    add(
        C,
        'deck_A1_half',
        'circle-half',
        'Половина пути A1',
        'Выучите или отметьте «знаю» половину колоды A1',
        24,
        1,
        (c) => c.deckHalf.A1,
    );
    add(C, 'deck_A2_half', 'circle-half-tilt', 'Половина пути A2', 'Половина колоды A2', 13, 1, (c) => c.deckHalf.A2);
    add(C, 'known_1000', 'brain', 'Уже многое знаю', 'Отметьте «знаю» 1 000 слов', 2.8, 1000, (c) => c.known);
    add(C, 'mix_200', 'shuffle', 'Вперемешку', '200 повторений в режиме «вперемешку»', 14, 200, (c) => c.mixRev);
    add(C, 'phrase_10', 'quotes', 'Фразёр', 'Добавьте в карточки 10 фраз из текстов', 17, 10, (c) => c.phrases);
    add(C, 'img_10', 'image', 'Визуал', 'Поставьте 10 своих картинок в карточки', 9, 10, (c) => c.customImgs);

    add(S, 'streak_21', 'repeat', 'Привычка сформирована', '21 день подряд', 22, 21, (c) => c.bestStreak);
    add(S, 'streak_45', 'flame', 'Горю английским', '45 дней подряд', 10.5, 45, (c) => c.bestStreak);
    add(S, 'streak_250', 'sun', 'Солнцестояние', '250 дней подряд', 1.2, 250, (c) => c.bestStreak);
    add(
        S,
        'days_365',
        'calendar-star',
        'Целый год занятий',
        'Занимайтесь 365 разных дней',
        1.5,
        365,
        (c) => c.activeDays,
    );
    add(S, 'late_100', 'moon', 'Вечерний режим', '100 повторений после 23:00', 11, 100, (c) => c.late);
    add(
        S,
        'weekend_full',
        'confetti',
        'Полные выходные',
        'Занимайтесь и в субботу, и в воскресенье одних выходных',
        34,
        1,
        (c) => c.fullWeekend,
    );

    add(K, 'units_9', 'buildings', 'Этажи знаний', 'Пройдите 9 юнитов', 21, 9, (c) => c.unitsPassed);
    add(K, 'mini_20', 'question', 'Любознательный', 'Ответьте на 20 мини-проверок в грамматике', 58, 20, (c) => c.mini);
    add(K, 'mini_100', 'chalkboard-teacher', 'Грамотей', 'Ответьте на 100 мини-проверок', 16, 100, (c) => c.mini);
    add(
        K,
        'mini_right_100',
        'exam',
        'Грамматик',
        '100 правильных ответов в мини-проверках',
        11,
        100,
        (c) => c.miniRight,
    );
    add(
        K,
        'test_retry',
        'arrow-counter-clockwise',
        'Не сдаюсь',
        'Пересдайте тест, который не получился с первого раза',
        33,
        1,
        (c) => c.retryPassed,
    );

    add(E, 'order_50', 'puzzle-piece', 'Конструктор', 'Соберите 50 предложений из слов', 26, 50, (c) => c.exType.order);
    add(E, 'tr_100', 'translate', 'Переводчик', 'Сделайте 100 переводов на английский', 18, 100, (c) => c.exType.tr);
    add(E, 'gap_100', 'text-aa', 'Вставлю слово', 'Заполните 100 пропусков', 24, 100, (c) => c.exType.gap);
    add(
        E,
        'exs_100',
        'star-four',
        'Сотня без ошибок',
        '100 правильных ответов подряд',
        2.4,
        100,
        (c) => c.exStreakBest,
    );
    add(E, 'ex_10000', 'mountains', 'Эверест', 'Выполните 10 000 заданий', 1.6, 10000, (c) => c.exercises);

    add(R, 'read_25', 'book-bookmark', 'Запойный читатель', 'Прочитайте 25 текстов', 19, 25, (c) => c.textsRead);
    add(R, 'read_50', 'books', 'Полка статей', 'Прочитайте 50 текстов', 8.5, 50, (c) => c.textsRead);
    add(R, 'read_lib_all', 'crown-simple', 'Весь каталог', 'Прочитайте все статьи библиотеки', 1.9, 1, (c) => c.libAll);
    add(R, 'read_b2', 'rocket', 'Первая статья B2', 'Прочитайте статью уровня B2', 9.6, 1, (c) => c.readB2);
    add(
        R,
        'cat_series',
        'television',
        'Сериаломан',
        'Прочитайте 10 статей о сериалах',
        13,
        10,
        (c) => c.readCat['Сериалы'],
    );
    add(
        R,
        'cat_cartoons',
        'palette',
        'Мультипликатор',
        'Прочитайте 10 статей о мультфильмах',
        13,
        10,
        (c) => c.readCat['Мультфильмы'],
    );
    add(
        R,
        'cat_games',
        'game-controller',
        'Читающий геймер',
        'Прочитайте 8 статей об играх',
        15,
        8,
        (c) => c.readCat['Игры'],
    );
    add(R, 'cat_anime', 'flower-lotus', 'Отаку', 'Прочитайте все статьи об аниме', 12, 1, (c) => c.animeAll);
    add(
        R,
        'quiz_perfect_10',
        'check-square',
        'Всё понял',
        '10 статей с вопросами на 100%',
        16,
        10,
        (c) => c.quizPerfect,
    );
    add(R, 'speak_300', 'speaker-high', 'Меломан', 'Нажмите «послушать» 300 раз', 29, 300, (c) => c.speaks);

    add(M, 'cloud', 'cloud-check', 'В облаке', 'Создайте аккаунт и войдите', 41, 1, (c) => c.account);
    add(M, 'ach_45', 'medal', 'Полпути к платине', 'Получите 45 достижений', 7.3, 45, (c) => c.achCount);
    add(M, 'ach_90', 'crown', 'Коллекционер легенд', 'Получите 90 достижений', 0.9, 90, (c) => c.achCount);

    add(X, 'halloween', 'ghost', 'Кошелёк или жизнь', 'Занимайтесь 31 октября', 2.2, 1, (c) => c.halloween, {
        hidden: true,
    });
    add(
        X,
        'midnight',
        'clock-countdown',
        'Ровно полночь',
        'Ответьте на карточку ровно в 00:00',
        0.8,
        1,
        (c) => c.midnight,
        { hidden: true },
    );
    add(
        X,
        'marathon_day',
        'person-simple-run',
        'Английский весь день',
        'Занимайтесь утром, днём и вечером одного дня',
        4.1,
        1,
        (c) => c.allDay,
        { hidden: true },
    );
}
