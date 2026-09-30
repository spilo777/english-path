// Словарь: колоды частотных слов по уровням и фразовые глаголы
import { Collection } from '@engine';
import { Main_Dictionary } from '../../content/dictionary/main';
import { A1_WordCards } from '../../content/word-cards/a1';
import { A2_WordCards } from '../../content/word-cards/a2';
import { B1_WordCards } from '../../content/word-cards/b1';
import { B2_WordCards } from '../../content/word-cards/b2';
import { Phrases_WordCards } from '../../content/word-cards/phrases';

export const wc_La1_collection = new Collection().addWordCards(A1_WordCards);
export const wc_La2_collection = new Collection().addWordCards(A2_WordCards);
export const wc_Lb1_collection = new Collection().addWordCards(B1_WordCards);
export const wc_Lb2_collection = new Collection().addWordCards(B2_WordCards);
export const wc_phrases_collection = new Collection().addWordCards(Phrases_WordCards);
export const dictionary_collection = new Collection({ id: 'dictionary' }).addDictionaries(Main_Dictionary);
