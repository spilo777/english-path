// Достижения. pct — оценочная доля учеников, которые его получают (как «редкость» в Steam).
// val(c) — текущее значение, need — цель. hidden — секретное (описание скрыто до получения).
(function () {
  const L = [];
  const add = (cat, id, icon, title, desc, pct, need, val, extra = {}) => L.push(Object.assign({ cat, id, icon, title, desc, pct, need, val }, extra));

  // ── Карточки и слова
  const C = 'Слова и карточки';
  add(C, 'rev_1', 'cards', 'Первая карточка', 'Повторите первую карточку', 94, 1, (c) => c.reviews);
  add(C, 'rev_100', 'stack', 'Сотня', 'Сделайте 100 повторений', 72, 100, (c) => c.reviews);
  add(C, 'rev_500', 'stack-plus', 'Втянулся', 'Сделайте 500 повторений', 54, 500, (c) => c.reviews);
  add(C, 'rev_1000', 'books', 'Тысячник', 'Сделайте 1 000 повторений', 41, 1000, (c) => c.reviews);
  add(C, 'rev_5000', 'brain', 'Машина повторений', 'Сделайте 5 000 повторений', 17, 5000, (c) => c.reviews);
  add(C, 'rev_10000', 'gear-fine', 'Десять тысяч', 'Сделайте 10 000 повторений', 8.5, 10000, (c) => c.reviews);
  add(C, 'rev_25000', 'bank', 'Монумент', 'Сделайте 25 000 повторений', 2.6, 25000, (c) => c.reviews);
  add(C, 'learn_10', 'plant', 'Первые ростки', 'Выучите 10 слов надолго (интервал 3+ недели)', 61, 10, (c) => c.learned);
  add(C, 'learn_50', 'leaf', 'Полсотни', 'Выучите 50 слов', 46, 50, (c) => c.learned);
  add(C, 'learn_100', 'tree', 'Сотня слов', 'Выучите 100 слов', 35, 100, (c) => c.learned);
  add(C, 'learn_250', 'chats-circle', 'Уже можно объясниться', 'Выучите 250 слов', 24, 250, (c) => c.learned);
  add(C, 'learn_500', 'map-trifold', 'Путешественник', 'Выучите 500 слов', 16, 500, (c) => c.learned);
  add(C, 'learn_1000', 'castle-turret', 'Тысяча слов', 'Выучите 1 000 слов — это уже 85% бытовой речи', 9.2, 1000, (c) => c.learned);
  add(C, 'learn_2000', 'game-controller', 'Играю без словаря', 'Выучите 2 000 слов', 4.8, 2000, (c) => c.learned);
  add(C, 'learn_3000', 'book-open-text', 'Читаю книги', 'Выучите 3 000 слов', 2.3, 3000, (c) => c.learned);
  add(C, 'learn_4000', 'crown', 'Словарь в голове', 'Выучите 4 000 слов', 1.1, 4000, (c) => c.learned);
  add(C, 'master_100', 'shield-check', 'Железная память', '100 слов с интервалом больше 3 месяцев', 7.5, 100, (c) => c.mastered);
  add(C, 'master_1000', 'diamond', 'Алмазная память', '1 000 слов с интервалом больше 3 месяцев', 1.6, 1000, (c) => c.mastered);
  add(C, 'deck_A1', 'medal', 'A1 покорён', 'Выучите или отметьте «знаю» все слова колоды A1', 12, 1, (c) => c.deckDone.A1);
  add(C, 'deck_A2', 'medal-military', 'A2 покорён', 'Закройте колоду A2', 6.8, 1, (c) => c.deckDone.A2);
  add(C, 'deck_B1', 'trophy', 'B1 покорён', 'Закройте колоду B1', 3.2, 1, (c) => c.deckDone.B1);
  add(C, 'deck_B2', 'crown-simple', 'B2 покорён', 'Закройте колоду B2', 1.3, 1, (c) => c.deckDone.B2);
  add(C, 'known_50', 'sunglasses', 'Я это знаю', 'Отметьте «знаю» 50 слов', 31, 50, (c) => c.known);
  add(C, 'known_300', 'student', 'Не новичок', 'Отметьте «знаю» 300 слов', 9.8, 300, (c) => c.known);
  add(C, 'ruen_100', 'arrows-left-right', 'Обратная сторона', '100 повторений в режиме «рус → англ»', 21, 100, (c) => c.ruEn);
  add(C, 'ruen_1000', 'microphone', 'Говорю сам', '1 000 повторений в режиме «рус → англ»', 5.9, 1000, (c) => c.ruEn);
  add(C, 'clean_1', 'sparkle', 'Без единой ошибки', 'Сессия из 20+ карточек без «Снова»', 26, 1, (c) => c.cleanSessions);
  add(C, 'clean_10', 'star-four', 'Чистая работа', '10 сессий из 20+ карточек без «Снова»', 7.2, 10, (c) => c.cleanSessions);
  add(C, 'day_100', 'person-simple-run', 'Марафон', '100 повторений за один день', 15, 100, (c) => c.dayMax);
  add(C, 'day_300', 'rocket-launch', 'Ультрамарафон', '300 повторений за один день', 3.9, 300, (c) => c.dayMax);
  add(C, 'manual_1', 'pencil-simple-line', 'Своё слово', 'Добавьте слово в карточки вручную или из текста', 48, 1, (c) => c.ownCards);
  add(C, 'manual_50', 'basket', 'Собиратель', 'Добавьте 50 своих слов', 11, 50, (c) => c.ownCards);

  // ── Серии
  const S = 'Регулярность';
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
  add(S, 'weekend_10', 'couch', 'Выходной — не повод', 'Занимайтесь в 10 разных выходных дней', 28, 10, (c) => c.weekendDays);
  add(S, 'early', 'sun-horizon', 'Ранняя пташка', 'Занимайтесь до 7 утра', 24, 1, (c) => c.early);
  add(S, 'owl', 'moon', 'Сова', 'Занимайтесь после полуночи', 22, 1, (c) => c.owl);
  add(S, 'comeback', 'arrow-u-up-left', 'Возвращение', 'Вернитесь к занятиям после перерыва в неделю и больше', 13, 1, (c) => c.comeback);

  // ── Курс
  const K = 'Курс';
  add(K, 'unit_0', 'footprints', 'Первый шаг', 'Пройдите юнит 0', 86, 1, (c) => c.passed('a1-0'));
  add(K, 'units_3', 'stairs', 'Лестница', 'Пройдите 3 юнита', 58, 3, (c) => c.unitsPassed);
  add(K, 'units_6', 'wall', 'Фундамент', 'Пройдите 6 юнитов', 34, 6, (c) => c.unitsPassed);
  add(K, 'a1_done', 'graduation-cap', 'Выпускник A1', 'Пройдите все юниты уровня A1', 18, 1, (c) => c.levelDone('A1'));
  add(K, 'a2_done', 'graduation-cap', 'Выпускник A2', 'Пройдите все юниты уровня A2', 8.9, 1, (c) => c.levelDone('A2'));
  add(K, 'b1_done', 'graduation-cap', 'Выпускник B1', 'Пройдите все юниты уровня B1', 3.8, 1, (c) => c.levelDone('B1'));
  add(K, 'b2_done', 'seal-check', 'Выпускник B2', 'Пройдите все юниты уровня B2. Цель курса достигнута', 1.4, 1, (c) => c.levelDone('B2'));
  add(K, 'perfect_1', 'star', 'Отличник', 'Сдайте тест на 100%', 51, 1, (c) => c.perfectTests);
  add(K, 'perfect_5', 'scroll', 'Круглый отличник', 'Сдайте 5 разных тестов на 100%', 23, 5, (c) => c.perfectTests);
  add(K, 'perfect_all', 'eye', 'Перфекционист', 'Сдайте все тесты A1 на 100%', 4.6, 1, (c) => c.perfectLevel('A1'));
  add(K, 'first_try', 'target', 'С первой попытки', 'Сдайте 5 тестов с первой попытки', 27, 5, (c) => c.firstTry);
  add(K, 'games_1', 'joystick', 'Игрок', 'Пройдите первый игровой модуль', 62, 1, (c) => c.gamesPassed);
  add(K, 'games_3', 'game-controller', 'Геймер', 'Пройдите три игровых модуля', 21, 3, (c) => c.gamesPassed);

  // ── Упражнения
  const E = 'Упражнения';
  add(E, 'ex_50', 'pencil', 'Разминка', 'Выполните 50 заданий', 71, 50, (c) => c.exercises);
  add(E, 'ex_250', 'note-pencil', 'Практик', 'Выполните 250 заданий', 45, 250, (c) => c.exercises);
  add(E, 'ex_1000', 'notebook', 'Тренировка', 'Выполните 1 000 заданий', 22, 1000, (c) => c.exercises);
  add(E, 'ex_5000', 'barbell', 'Железная воля', 'Выполните 5 000 заданий', 4.9, 5000, (c) => c.exercises);
  add(E, 'exs_10', 'lightning', 'Серия 10', '10 правильных ответов подряд', 56, 10, (c) => c.exStreakBest);
  add(E, 'exs_25', 'lightning', 'Серия 25', '25 правильных ответов подряд', 26, 25, (c) => c.exStreakBest);
  add(E, 'exs_50', 'cloud-lightning', 'Безошибочный', '50 правильных ответов подряд', 7.9, 50, (c) => c.exStreakBest);
  add(E, 'listen_ex_50', 'ear', 'Чуткое ухо', 'Правильно запишите на слух 50 фраз', 19, 50, (c) => c.listenRight);

  // ── Чтение и аудио
  const R = 'Чтение и аудио';
  add(R, 'read_1', 'book-open', 'Читатель', 'Прочитайте первый текст', 81, 1, (c) => c.textsRead);
  add(R, 'read_10', 'books', 'Библиотекарь', 'Прочитайте 10 текстов', 42, 10, (c) => c.textsRead);
  add(R, 'read_all', 'bookmarks', 'Книжный червь', 'Прочитайте все тексты курса', 14, 1, (c) => c.allCourseTextsRead);
  add(R, 'user_1', 'download-simple', 'Свой контент', 'Добавьте свой текст', 32, 1, (c) => c.userTexts);
  add(R, 'user_10', 'archive', 'Куратор', 'Добавьте 10 своих текстов', 7.7, 10, (c) => c.userTexts);
  add(R, 'look_50', 'magnifying-glass', 'Любопытный', 'Посмотрите перевод 50 слов в текстах', 54, 50, (c) => c.lookups);
  add(R, 'look_500', 'binoculars', 'Исследователь', 'Посмотрите перевод 500 слов', 19, 500, (c) => c.lookups);
  add(R, 'look_2000', 'planet', 'Первооткрыватель', 'Посмотрите перевод 2 000 слов', 5.6, 2000, (c) => c.lookups);
  add(R, 'listen_1', 'headphones', 'Аудиофил', 'Прослушайте текст целиком', 47, 1, (c) => c.listened);
  add(R, 'listen_25', 'radio', 'Радиоволна', 'Прослушайте целиком 25 текстов', 11, 25, (c) => c.listened);

  // ── Разное
  const M = 'Разное';
  add(M, 'backup', 'floppy-disk', 'Страховка', 'Сохраните резервную копию прогресса', 16, 1, (c) => c.backup);
  add(M, 'voice', 'waveform', 'Свой голос', 'Выберите голос озвучки в настройках', 19, 1, (c) => c.voice);
  add(M, 'ach_10', 'medal', 'Коллекционер', 'Получите 10 достижений', 38, 10, (c) => c.achCount);
  add(M, 'ach_30', 'trophy', 'Охотник за ачивками', 'Получите 30 достижений', 13, 30, (c) => c.achCount);
  add(M, 'ach_60', 'sparkle', 'Легенда', 'Получите 60 достижений', 2.1, 60, (c) => c.achCount);
  add(M, 'platinum', 'diamonds-four', 'Платина', 'Получите все остальные достижения', 0.2, 1, (c) => c.allOthers);

  // ── Секретные
  const X = 'Секретные';
  add(X, 'logo', 'egg', 'Пасхалка', 'Нажмите на логотип 10 раз', 2.9, 1, (c) => c.logo, { hidden: true });
  add(X, 'insomnia', 'moon-stars', 'Бессонница', 'Занимайтесь между 3 и 5 часами ночи', 1.9, 1, (c) => c.insomnia, { hidden: true });
  add(X, 'newyear', 'tree-evergreen', 'Новогоднее чудо', 'Занимайтесь 1 января', 1.2, 1, (c) => c.newyear, { hidden: true });
  add(X, 'speedrun', 'timer', 'Спидран', '50 повторений меньше чем за 5 минут', 3.3, 1, (c) => c.speedrun, { hidden: true });
  add(X, 'no_idk', 'robot', 'Без подсказок', 'Пройдите практику юнита, ни разу не нажав «Не знаю» и без ошибок', 9.4, 1, (c) => c.flawlessPractice, { hidden: true });

  const TIERS = [
    { max: 2, name: 'Легендарное', cls: 'legend' },
    { max: 8, name: 'Эпическое', cls: 'epic' },
    { max: 20, name: 'Редкое', cls: 'rare' },
    { max: 50, name: 'Необычное', cls: 'uncommon' },
    { max: 101, name: 'Обычное', cls: 'common' }
  ];
  const tier = (pct) => TIERS.find((t) => pct < t.max);
  // очки вовлечённости: чем реже достижение, тем больше очков
  const points = (pct) => Math.round(5 + 12 * Math.log2(100 / pct));
  const RANKS = ['Новичок', 'Ученик', 'Старательный', 'Упорный', 'Знаток', 'Мастер слов', 'Эксперт', 'Полиглот', 'Грандмастер', 'Легенда'];

  window.ACH = { list: L, tier, points, RANKS };
})();
