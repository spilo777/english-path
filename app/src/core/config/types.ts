// Настройки движка: всё, что раньше было зашито константами в модулях. Значения по умолчанию — в ./defaults
import type { Level } from '@utils/level';

export interface EngineConfig {
    app: {
        name: string;
        /** Версия сборки (VITE_BUILD): попадает в адреса данных как ?v= */
        build: string;
    };
    data: {
        /** Папка с JSON относительно страницы */
        root: string;
    };
    /** Ключи браузерного хранилища. Читаются при запуске; менять нельзя — пропадёт сохранённое */
    storage: {
        progressKey: string;
        authKey: string;
        audioCache: string;
        covers: { key: string; ttlDays: number };
        feed: { key: string; ttlHours: number };
    };
    levels: {
        /** Вся шкала, включая уровни без материалов */
        all: Level[];
        /** Уровни, для которых есть материалы */
        active: Level[];
        names: Record<Level, string>;
    };
    course: {
        /** Тест урока сдан при такой доле верных ответов */
        passMark: number;
        /** С какого уровня учиться по умолчанию */
        defaultStart: Level;
    };
    srs: {
        /** Учебный день начинается в этот час (как в Anki) */
        dayStartHour: number;
        /** После стольких забываний слово помечается трудным */
        leechAt: number;
        /** Интервал (дни), с которого карточка считается выученной */
        learnedIvl: number;
        /** Новых слов в день по умолчанию */
        newPerDay: number;
    };
    /** Очки за день: карточка, упражнение, прочитанный текст (так же считает лига на сервере) */
    xp: { review: number; exercise: number; read: number };
    reading: {
        /** Слов на одной «странице» — для счётчика прочитанных страниц в профиле */
        pageWords: number;
        /** Сколько секунд без действий в читалке время ещё идёт (дальше — пауза) */
        idleSecs: number;
    };
    cloud: {
        url: string;
        /** publishable/anon — публичный ключ: доступ к данным защищён RLS в базе */
        key: string;
        sdkUrl: string;
        /** С какого числа учеников показывать реальную редкость достижений */
        minUsersForRarity: number;
        rarityTtlMinutes: number;
        pushDebounceMs: number;
    };
    speech: {
        /** Скорость речи по умолчанию */
        rate: number;
        /** Словарь с записями произношения */
        dictionaryApi: string;
    };
}

/** Частичный конфиг: любые поля на любой глубине можно не указывать */
export type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends unknown[] ? T[K] : T[K] extends object ? DeepPartial<T[K]> : T[K];
};
