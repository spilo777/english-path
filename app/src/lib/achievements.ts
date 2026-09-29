// Достижения. pct — оценочная доля учеников, которые его получают (как «редкость» в Steam).
// val(c) — текущее значение, need — цель. hidden — секретное (описание скрыто до получения).
import { useEffect, useMemo, useState } from 'react';
import { Cloud, useCloud } from './cloud';
import { loadJSON, paths, useCourse, useDeck, useLibrary } from './data';
import { bestStreak, DAY, PASS, useProgress } from './store';
import type { CourseIndex, DeckWord, Level, Progress, TextItem, Unit, UnitMeta } from './types';
import { LEVELS, LEVEL_ORDER } from './types';

/** Значения, от которых зависят достижения */
export interface AchCtx {
  reviews: number; exercises: number; dayMax: number; activeDays: number; weekendDays: number; bestStreak: number;
  learned: number; mastered: number; known: number; ownCards: number;
  deckDone: Record<string, number>; deckHalf: Record<string, number>;
  passed: (id: string) => number; unitsPassed: number; gamesPassed: number;
  levelDone: (l: Level) => number; perfectTests: number; perfectLevel: (l: Level) => number; firstTry: number;
  textsRead: number; allCourseTextsRead: number; userTexts: number; achCount: number; allOthers: number;
  lookups: number; listened: number; exStreakBest: number; ruEn: number; cleanSessions: number; listenRight: number;
  early: number; owl: number; insomnia: number; newyear: number; comeback: number; backup: number; voice: number;
  logo: number; speedrun: number; flawless: number; flawlessPractice: number;
  mixRev: number; late: number; mini: number; miniRight: number; speaks: number; phrases: number; customImgs: number;
  fullWeekend: number; retryPassed: number; exType: Record<string, number>;
  libAll: number; readB2: number; readCat: Record<string, number>; animeAll: number; quizPerfect: number;
  account: number; halloween: number; midnight: number; allDay: number;
}

export interface Ach {
  cat: string; id: string; icon: string; title: string; desc: string;
  /** оценочная доля учеников с достижением, % */
  pct: number;
  need: number;
  val: (c: AchCtx) => number;
  hidden?: boolean;
  /** цвета значка: [светлый, тёмный] */
  color: [string, string];
}

function buildList(): Ach[] {
  const L: Ach[] = [];
  const add = (cat: string, id: string, icon: string, title: string, desc: string, pct: number, need: number, val: (c: AchCtx) => number, extra: { hidden?: boolean } = {}) =>
    L.push({ cat, id, icon, title, desc, pct, need, val, color: ['#8b5cf6', '#5b4ff5'], ...extra });

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


// ── Дополнительные достижения
add(C, 'rev_250', 'stack-simple', 'Четверть тысячи', 'Сделайте 250 повторений', 63, 250, (c) => c.reviews);
add(C, 'rev_2500', 'lightning-a', 'Разгон', 'Сделайте 2 500 повторений', 27, 2500, (c) => c.reviews);
add(C, 'learn_25', 'flower', 'Первые всходы', 'Выучите 25 слов', 53, 25, (c) => c.learned);
add(C, 'learn_750', 'mountains', 'Горная тропа', 'Выучите 750 слов', 12.5, 750, (c) => c.learned);
add(C, 'learn_1500', 'television-simple', 'Смотрю сериалы', 'Выучите 1 500 слов', 6.7, 1500, (c) => c.learned);
add(C, 'learn_2500', 'chat-circle-dots', 'Свободный разговор', 'Выучите 2 500 слов', 3.5, 2500, (c) => c.learned);
add(C, 'deck_A1_half', 'circle-half', 'Половина пути A1', 'Выучите или отметьте «знаю» половину колоды A1', 24, 1, (c) => c.deckHalf.A1);
add(C, 'deck_A2_half', 'circle-half-tilt', 'Половина пути A2', 'Половина колоды A2', 13, 1, (c) => c.deckHalf.A2);
add(C, 'known_1000', 'brain', 'Уже многое знаю', 'Отметьте «знаю» 1 000 слов', 2.8, 1000, (c) => c.known);
add(C, 'mix_200', 'shuffle', 'Вперемешку', '200 повторений в режиме «вперемешку»', 14, 200, (c) => c.mixRev);
add(C, 'phrase_10', 'quotes', 'Фразёр', 'Добавьте в карточки 10 фраз из текстов', 17, 10, (c) => c.phrases);
add(C, 'img_10', 'image', 'Визуал', 'Поставьте 10 своих картинок в карточки', 9, 10, (c) => c.customImgs);

add(S, 'streak_21', 'repeat', 'Привычка сформирована', '21 день подряд', 22, 21, (c) => c.bestStreak);
add(S, 'streak_45', 'flame', 'Горю английским', '45 дней подряд', 10.5, 45, (c) => c.bestStreak);
add(S, 'streak_250', 'sun', 'Солнцестояние', '250 дней подряд', 1.2, 250, (c) => c.bestStreak);
add(S, 'days_365', 'calendar-star', 'Целый год занятий', 'Занимайтесь 365 разных дней', 1.5, 365, (c) => c.activeDays);
add(S, 'late_100', 'moon', 'Вечерний режим', '100 повторений после 23:00', 11, 100, (c) => c.late);
add(S, 'weekend_full', 'confetti', 'Полные выходные', 'Занимайтесь и в субботу, и в воскресенье одних выходных', 34, 1, (c) => c.fullWeekend);

add(K, 'units_9', 'buildings', 'Этажи знаний', 'Пройдите 9 юнитов', 21, 9, (c) => c.unitsPassed);
add(K, 'mini_20', 'question', 'Любознательный', 'Ответьте на 20 мини-проверок в грамматике', 58, 20, (c) => c.mini);
add(K, 'mini_100', 'chalkboard-teacher', 'Грамотей', 'Ответьте на 100 мини-проверок', 16, 100, (c) => c.mini);
add(K, 'mini_right_100', 'exam', 'Грамматик', '100 правильных ответов в мини-проверках', 11, 100, (c) => c.miniRight);
add(K, 'test_retry', 'arrow-counter-clockwise', 'Не сдаюсь', 'Пересдайте тест, который не получился с первого раза', 33, 1, (c) => c.retryPassed);

add(E, 'order_50', 'puzzle-piece', 'Конструктор', 'Соберите 50 предложений из слов', 26, 50, (c) => c.exType.order);
add(E, 'tr_100', 'translate', 'Переводчик', 'Сделайте 100 переводов на английский', 18, 100, (c) => c.exType.tr);
add(E, 'gap_100', 'text-aa', 'Вставлю слово', 'Заполните 100 пропусков', 24, 100, (c) => c.exType.gap);
add(E, 'exs_100', 'star-four', 'Сотня без ошибок', '100 правильных ответов подряд', 2.4, 100, (c) => c.exStreakBest);
add(E, 'ex_10000', 'mountains', 'Эверест', 'Выполните 10 000 заданий', 1.6, 10000, (c) => c.exercises);

add(R, 'read_25', 'book-bookmark', 'Запойный читатель', 'Прочитайте 25 текстов', 19, 25, (c) => c.textsRead);
add(R, 'read_50', 'books', 'Полка статей', 'Прочитайте 50 текстов', 8.5, 50, (c) => c.textsRead);
add(R, 'read_lib_all', 'crown-simple', 'Весь каталог', 'Прочитайте все статьи библиотеки', 1.9, 1, (c) => c.libAll);
add(R, 'read_b2', 'rocket', 'Первая статья B2', 'Прочитайте статью уровня B2', 9.6, 1, (c) => c.readB2);
add(R, 'cat_series', 'television', 'Сериаломан', 'Прочитайте 10 статей о сериалах', 13, 10, (c) => c.readCat['Сериалы']);
add(R, 'cat_cartoons', 'palette', 'Мультипликатор', 'Прочитайте 10 статей о мультфильмах', 13, 10, (c) => c.readCat['Мультфильмы']);
add(R, 'cat_games', 'game-controller', 'Читающий геймер', 'Прочитайте 8 статей об играх', 15, 8, (c) => c.readCat['Игры']);
add(R, 'cat_anime', 'flower-lotus', 'Отаку', 'Прочитайте все статьи об аниме', 12, 1, (c) => c.animeAll);
add(R, 'quiz_perfect_10', 'check-square', 'Всё понял', '10 статей с вопросами на 100%', 16, 10, (c) => c.quizPerfect);
add(R, 'speak_300', 'speaker-high', 'Меломан', 'Нажмите «послушать» 300 раз', 29, 300, (c) => c.speaks);

add(M, 'cloud', 'cloud-check', 'В облаке', 'Создайте аккаунт и войдите', 41, 1, (c) => c.account);
add(M, 'ach_45', 'medal', 'Полпути к платине', 'Получите 45 достижений', 7.3, 45, (c) => c.achCount);
add(M, 'ach_90', 'crown', 'Коллекционер легенд', 'Получите 90 достижений', 0.9, 90, (c) => c.achCount);

add(X, 'halloween', 'ghost', 'Кошелёк или жизнь', 'Занимайтесь 31 октября', 2.2, 1, (c) => c.halloween, { hidden: true });
add(X, 'midnight', 'clock-countdown', 'Ровно полночь', 'Ответьте на карточку ровно в 00:00', 0.8, 1, (c) => c.midnight, { hidden: true });
add(X, 'marathon_day', 'person-simple-run', 'Английский весь день', 'Занимайтесь утром, днём и вечером одного дня', 4.1, 1, (c) => c.allDay, { hidden: true });

  // у каждого значка свой яркий цвет, чтобы соседние не сливались
  L.forEach((a, i) => { a.color = a.cat === 'Секретные' ? ['#475569', '#0f172a'] : PALETTE[(i * 5) % PALETTE.length]; });
  return L;
}

const PALETTE: [string, string][] = [['#8b5cf6', '#5b21b6'], ['#f97316', '#c2410c'], ['#06b6d4', '#0e7490'], ['#22c55e', '#15803d'], ['#ec4899', '#be185d'], ['#3b82f6', '#1d4ed8'],
  ['#eab308', '#a16207'], ['#14b8a6', '#0f766e'], ['#ef4444', '#b91c1c'], ['#a855f7', '#7e22ce'], ['#84cc16', '#4d7c0f'], ['#0ea5e9', '#0369a1'], ['#f43f5e', '#9f1239'], ['#6366f1', '#4338ca']];

export const ACH_LIST: Ach[] = buildList();

export type TierCls = 'legend' | 'epic' | 'rare' | 'uncommon' | 'common';
export interface AchTier { max: number; name: string; cls: TierCls }
export const ACH_TIERS: AchTier[] = [
  { max: 2, name: 'Легендарное', cls: 'legend' },
  { max: 8, name: 'Эпическое', cls: 'epic' },
  { max: 20, name: 'Редкое', cls: 'rare' },
  { max: 50, name: 'Необычное', cls: 'uncommon' },
  { max: 101, name: 'Обычное', cls: 'common' },
];
export const tier = (pct: number): AchTier => ACH_TIERS.find((t) => pct < t.max) || ACH_TIERS[ACH_TIERS.length - 1];
/** Очки вовлечённости: чем реже достижение, тем больше очков */
export const points = (pct: number) => Math.round(5 + 12 * Math.log2(100 / pct));
export const RANKS = ['Новичок', 'Ученик', 'Старательный', 'Упорный', 'Знаток', 'Мастер слов', 'Эксперт', 'Полиглот', 'Грандмастер', 'Легенда'];
/** Цвет категории (для заголовков групп) */
export const CAT_COLORS: Record<string, [string, string]> = {
  'Слова и карточки': ['#8b5cf6', '#5b4ff5'],
  'Регулярность': ['#fb923c', '#ef4444'],
  'Курс': ['#38bdf8', '#2563eb'],
  'Упражнения': ['#4ade80', '#16a34a'],
  'Чтение и аудио': ['#2dd4bf', '#0e7490'],
  'Разное': ['#f472b6', '#be185d'],
  'Секретные': ['#64748b', '#1e293b'],
};

// ───────── контекст ─────────

/** Данные курса, нужные достижениям (собирает useAchContextData) */
export interface AchExtra {
  course: CourseIndex;
  /** частотная колода (words.json) */
  deck: DeckWord[];
  /** статьи библиотеки */
  library: TextItem[];
  /** id всех текстов уроков; null — не загружены (значит «все тексты курса» точно не прочитаны) */
  courseTexts: string[] | null;
}

const LVL_N = LEVEL_ORDER;
export const achMainUnits = (course: CourseIndex): UnitMeta[] =>
  course.units.filter((u) => u.track === 'main').sort((a, b) => (LVL_N[a.level] - LVL_N[b.level]) || (a.num - b.num));
const passedU = (s: Progress, id: string) => { const u = s.units[id]; return !!(u && u.testBest != null && u.testBest >= PASS); };
const dayKey = (x: Date) => x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0');

/** Слова колоды уровня: всего / выучено / «знаю» */
export function deckStats(s: Progress, deck: DeckWord[], lvl: Level) {
  let total = 0, learned = 0, study = 0, known = 0;
  deck.forEach((w) => {
    if (w.lvl !== lvl) return;
    total++;
    const c = s.cards[w.id];
    if (s.known[w.id]) known++; else if (c && c.state === 'review' && c.ivl >= 21) learned++; else if (c && c.state !== 'new') study++;
  });
  return { total, learned, study, known };
}

export function achCtx(s: Progress, extra: AchExtra): AchCtx {
  const cards = Object.values(s.cards);
  const acts = Object.entries(s.activity);
  const st = s.stats;
  const mainUnits = achMainUnits(extra.course);
  const levelUnits = (l: Level) => mainUnits.filter((u) => u.level === l);
  const lib = extra.library;
  const deckDone: Record<string, number> = {}, deckHalf: Record<string, number> = {};
  LEVELS.forEach((l) => {
    const d = deckStats(s, extra.deck, l);
    deckDone[l] = d.total > 0 && d.learned + d.known >= d.total ? 1 : 0;
    deckHalf[l] = d.total && (d.learned + d.known) * 2 >= d.total ? 1 : 0;
  });
  const n = (k: string) => Number(st[k]) || 0;
  const b = (k: string) => (st[k] ? 1 : 0);
  const readCat: Record<string, number> = { 'Сериалы': 0, 'Мультфильмы': 0, 'Игры': 0 };
  lib.forEach((t) => { if (s.textsRead[t.id] && t.cat) readCat[t.cat] = (readCat[t.cat] || 0) + 1; });
  const anime = lib.filter((t) => t.cat === 'Аниме');
  return {
    reviews: acts.reduce((a, [, v]) => a + (v.reviews || 0), 0),
    exercises: acts.reduce((a, [, v]) => a + (v.exercises || 0), 0),
    dayMax: acts.reduce((a, [, v]) => Math.max(a, v.reviews || 0), 0),
    activeDays: acts.length,
    weekendDays: acts.filter(([d]) => [0, 6].includes(new Date(d + 'T12:00').getDay())).length,
    bestStreak: bestStreak(s),
    learned: cards.filter((c) => c.state === 'review' && c.ivl >= 21).length,
    mastered: cards.filter((c) => c.state === 'review' && c.ivl >= 90).length,
    known: Object.keys(s.known).length,
    ownCards: cards.filter((c) => c.src === 'manual' || String(c.src).startsWith('text:')).length,
    deckDone, deckHalf,
    passed: (id) => (passedU(s, id) ? 1 : 0),
    unitsPassed: mainUnits.filter((u) => passedU(s, u.id)).length,
    gamesPassed: extra.course.units.filter((u) => u.track === 'games' && passedU(s, u.id)).length,
    levelDone: (l) => (levelUnits(l).length && levelUnits(l).every((u) => passedU(s, u.id)) ? 1 : 0),
    perfectTests: Object.keys(st.perfect || {}).length,
    perfectLevel: (l) => (levelUnits(l).length && levelUnits(l).every((u) => (st.perfect || {})[u.id]) ? 1 : 0),
    firstTry: Object.keys(st.firstTryUnits || {}).length,
    textsRead: Object.keys(s.textsRead).length,
    allCourseTextsRead: extra.courseTexts && extra.courseTexts.length && extra.courseTexts.every((id) => s.textsRead[id]) ? 1 : 0,
    userTexts: s.userTexts.length,
    achCount: Object.keys(s.ach).length,
    allOthers: ACH_LIST.every((a) => a.id === 'platinum' || s.ach[a.id]) ? 1 : 0,
    lookups: n('lookups'), listened: n('listened'), exStreakBest: n('exStreakBest'), ruEn: n('ruEn'), cleanSessions: n('cleanSessions'), listenRight: n('listenRight'),
    early: b('early'), owl: b('owl'), insomnia: b('insomnia'), newyear: b('newyear'), comeback: b('comeback'), backup: b('backup'),
    voice: b('voice'), logo: b('logo'), speedrun: b('speedrun'), flawless: b('flawless'), flawlessPractice: b('flawless'),
    mixRev: n('mixRev'), late: n('late'), mini: n('mini'), miniRight: n('miniRight'), speaks: n('speaks'),
    phrases: cards.filter((c) => c.id.includes(' ') && String(c.src).startsWith('text:')).length,
    customImgs: cards.filter((c) => c.img).length,
    fullWeekend: acts.some(([d]) => { const x = new Date(d + 'T12:00'); return x.getDay() === 6 && !!s.activity[dayKey(new Date(x.getTime() + DAY))]; }) ? 1 : 0,
    retryPassed: b('retry'),
    exType: Object.assign({ order: 0, tr: 0, gap: 0, choice: 0, listen: 0 }, st.exType || {}),
    libAll: lib.length && lib.every((t) => s.textsRead[t.id]) ? 1 : 0,
    readB2: lib.some((t) => t.level === 'B2' && s.textsRead[t.id]) ? 1 : 0,
    readCat,
    animeAll: anime.length && anime.every((t) => s.textsRead[t.id]) ? 1 : 0,
    quizPerfect: Object.entries(s.quiz || {}).filter(([id, v]) => { const t = lib.find((x) => x.id === id); return !!t && !!t.questions && v >= t.questions.length; }).length,
    account: Cloud.user() ? 1 : 0,
    halloween: b('halloween'), midnight: b('midnight'), allDay: b('allDay'),
  };
}

let lastExtra: AchExtra | null = null;
/** Запомнить данные курса для checkAch без параметра (вызывает useAchContextData) */
export const setAchExtra = (e: AchExtra | null) => { if (e) lastExtra = e; };

/** Какие достижения получены только что (прогресс не меняет — запись делает вызывающий).
 *  Без данных курса проверка не выполняется: иначе условия «все …» сработали бы на пустых списках. */
export function checkAch(s: Progress, extra: AchExtra | null = lastExtra): Ach[] {
  if (!extra) return [];
  const fresh: Ach[] = [];
  const ach = { ...s.ach };
  const now = Date.now();
  // несколько проходов: новые достижения двигают «коллекционера»
  for (let pass = 0; pass < 3; pass++) {
    const c = achCtx({ ...s, ach }, extra);
    let any = false;
    ACH_LIST.forEach((a) => { if (!ach[a.id] && a.val(c) >= a.need) { ach[a.id] = now; fresh.push(a); any = true; } });
    if (!any) break;
  }
  return fresh;
}

/** Реальный процент по всем ученикам из облака, иначе — оценка */
export const pctOf = (a: Ach): number => { const r = Cloud.realPct(a.id); return r == null ? a.pct : Math.max(0.1, r); };
/** Проценты — реальная статистика облака */
export const pctReal = () => Cloud.realPct('rev_1') != null;

export interface Engagement { xp: number; lvl: number; into: number; need: number; rank: string }
export function engagement(s: Progress): Engagement {
  const xp = ACH_LIST.filter((a) => s.ach[a.id]).reduce((sum, a) => sum + points(pctOf(a)), 0);
  let lvl = 1, need = 60, acc = 0;
  while (xp >= acc + need) { acc += need; lvl++; need = Math.round(need * 1.25); }
  return { xp, lvl, into: xp - acc, need, rank: RANKS[Math.min(RANKS.length - 1, Math.floor((lvl - 1) / 2))] };
}

/** Ближайшие к получению (для «Главной») */
export function nearAch(s: Progress, c: AchCtx, n = 3): { a: Ach; p: number }[] {
  return ACH_LIST.filter((a) => !s.ach[a.id] && !a.hidden && a.need > 1)
    .map((a) => ({ a, p: Math.min(1, a.val(c) / a.need) })).filter((x) => x.p > 0)
    .sort((x, y) => y.p - x.p).slice(0, n);
}

// ───────── хуки ─────────

/** Id текстов уроков. Уровни грузятся, только когда «прочитаны все тексты курса» в принципе возможно:
 *  у каждого юнита курса есть хотя бы один прочитанный текст (id текстов — t-<юнит>-<n>). */
function courseTextsNeeded(s: Progress, course: CourseIndex): boolean {
  if (s.ach.read_all) return false;
  const read = Object.keys(s.textsRead);
  return course.units.every((u) => read.some((id) => id.startsWith('t-' + u.id + '-')));
}

/** Собирает данные курса для достижений. Пока что-то грузится — null */
export function useAchContextData(): AchExtra | null {
  const s = useProgress();
  const { data: course } = useCourse();
  const deck = useDeck();
  const { data: library } = useLibrary();
  const [courseTexts, setCourseTexts] = useState<string[] | null>(null);
  const wantTexts = !!course && courseTextsNeeded(s, course);
  useEffect(() => {
    if (!wantTexts || !course || courseTexts) return;
    let alive = true;
    const lvls = [...new Set(course.units.map((u) => u.level))];
    Promise.all(lvls.map((l) => loadJSON<Unit[]>(paths.units(l))))
      .then((all) => { if (alive) setCourseTexts(all.flat().flatMap((u) => u.texts.map((t) => t.id))); })
      .catch(() => { /* нет сети — проверим позже */ });
    return () => { alive = false; };
  }, [wantTexts, course, courseTexts]);
  const extra = useMemo<AchExtra | null>(
    () => (course && deck && library ? { course, deck, library, courseTexts } : null),
    [course, deck, library, courseTexts],
  );
  useEffect(() => { setAchExtra(extra); }, [extra]);
  return extra;
}

/** Контекст достижений для карточек (перерисовывается при изменении прогресса и облака) */
export function useAchCtx(): AchCtx | null {
  const s = useProgress();
  const extra = useAchContextData();
  useCloud();
  return extra ? achCtx(s, extra) : null;
}
