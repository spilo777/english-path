// Карточки слов: строка частотной колоды (words.json), слово колоды, слова уроков и тематические подборки
import type { Level } from '@utils/level';

/** Слово урока: [english, перевод, пример, перевод примера] */
export type UnitWord = [string, string, string, string];

/** Слово частотной колоды: [english, перевод, пример, перевод примера, уровень, часть речи, ранг] */
export type DeckWordRow = [string, string, string, string, Level, string, number];

export interface DeckWord {
    id: string;
    en: string;
    ru: string;
    ex: string;
    exRu: string;
    lvl: Level;
    pos: string;
    rank: number;
}

/** Карточка слова в движке — то же, что слово колоды */
export type WordCard = DeckWord;

export interface TopicCat {
    id: string;
    title: string;
    tone: string;
}
export interface TopicCol {
    id: string;
    cat: string;
    title: string;
    icon: string;
    level: Level;
    words: UnitWord[];
}
