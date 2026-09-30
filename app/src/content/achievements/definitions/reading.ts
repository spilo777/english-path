// Достижения: чтение и аудио
import { CATS, type AddAch } from '../add';

export function readingAch(add: AddAch) {
    const { R } = CATS;
    add(R, 'read_1', 'book-open', 'Читатель', 'Прочитайте первый текст', 81, 1, (c) => c.textsRead);
    add(R, 'read_10', 'books', 'Библиотекарь', 'Прочитайте 10 текстов', 42, 10, (c) => c.textsRead);
    add(R, 'read_all', 'bookmarks', 'Книжный червь', 'Прочитайте все тексты курса', 14, 1, (c) => c.allCourseTextsRead);
    add(R, 'user_1', 'download-simple', 'Свой контент', 'Добавьте свой текст', 32, 1, (c) => c.userTexts);
    add(R, 'user_10', 'archive', 'Куратор', 'Добавьте 10 своих текстов', 7.7, 10, (c) => c.userTexts);
    add(
        R,
        'look_50',
        'magnifying-glass',
        'Любопытный',
        'Посмотрите перевод 50 слов в текстах',
        54,
        50,
        (c) => c.lookups,
    );
    add(R, 'look_500', 'binoculars', 'Исследователь', 'Посмотрите перевод 500 слов', 19, 500, (c) => c.lookups);
    add(R, 'look_2000', 'planet', 'Первооткрыватель', 'Посмотрите перевод 2 000 слов', 5.6, 2000, (c) => c.lookups);
    add(R, 'listen_1', 'headphones', 'Аудиофил', 'Прослушайте текст целиком', 47, 1, (c) => c.listened);
    add(R, 'listen_25', 'radio', 'Радиоволна', 'Прослушайте целиком 25 текстов', 11, 25, (c) => c.listened);
}
