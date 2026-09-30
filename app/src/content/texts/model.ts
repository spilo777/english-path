// Тексты: статьи и диалоги библиотеки, тексты уроков (library.json, units/<id>.json, lessons.json)

export interface Question {
    q: string;
    o: string[];
    a: number;
}

export interface TextItem {
    id: string;
    title: string;
    level: string;
    text: string;
    questions?: Question[];
    // только у статей библиотеки
    cat?: string;
    about?: string;
    ru?: string;
    kind?: 'dialogue' | string;
    /** обложка: статья английской Википедии (главное фото) или поиск в Wikimedia Commons */
    wiki?: string;
    /** обложка, подобранная при сборке (build/covers.mjs) */
    img?: string;
    commons?: string;
}

/** Текст урока в индексе lessons.json: без тела, счётчики посчитаны при экспорте */
export interface LessonText {
    id: string;
    title: string;
    level: string;
    words: number;
    lines: number;
    q: number;
}
