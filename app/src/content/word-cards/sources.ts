// Источники слов: частотная колода words.json → WordCard, выборки по уровню и части речи, слова урока
import { paths } from '../../core/data/paths';
import { derive, jsonSource, type Source } from '../base';
import type { Level } from '@utils/level';
import type { DeckWordRow, TopicCat, TopicCol, UnitWord, WordCard } from './model';

/** Строка words.json → карточка слова */
export const toWordCard = (w: DeckWordRow): WordCard => ({
    id: w[0].toLowerCase(),
    en: w[0],
    ru: w[1],
    ex: w[2],
    exRu: w[3],
    lvl: w[4],
    pos: w[5],
    rank: w[6],
});

const toDeck = (rows: DeckWordRow[]): WordCard[] => rows.map(toWordCard);
/** Вся частотная колода (~4000 слов), в порядке частоты */
export const deck: Source<WordCard[]> = jsonSource(paths.words, toDeck);

const byLevel = new Map<Level, Source<WordCard[]>>();
/** Слова колоды одного уровня */
export function deckByLevel(l: Level): Source<WordCard[]> {
    let s = byLevel.get(l);
    if (!s) byLevel.set(l, (s = derive(deck, 'deck:' + l, (all) => all.filter((w) => w.lvl === l))));
    return s;
}

const byPos = new Map<string, Source<WordCard[]>>();
/** Слова колоды с частью речи (phr — фразовые глаголы) */
export function deckByPos(pos: string): Source<WordCard[]> {
    let s = byPos.get(pos);
    if (!s) byPos.set(pos, (s = derive(deck, 'deck:pos:' + pos, (all) => all.filter((w) => w.pos === pos))));
    return s;
}

/** Тематические подборки (topics.json) */
export const topics = jsonSource<{ cats: TopicCat[]; cols: TopicCol[] }>(paths.topics);

/** Слово урока или подборки ([en, ru, пример, перевод]) → карточка на уровне lvl */
export const unitWordToCard = (w: UnitWord, lvl: Level): WordCard => ({
    id: w[0].toLowerCase(),
    en: w[0],
    ru: w[1],
    ex: w[2],
    exRu: w[3],
    lvl,
    pos: '',
    rank: 0,
});
