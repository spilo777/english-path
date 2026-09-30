// Разделы приложения (как в меню): Грамматика, Словарь, Библиотека, Профиль
import { Category, Collection } from '@engine';
import { All_Achievements } from '../content/achievements/all';
import { Adapted_Books } from '../content/books/adapted';
import { Original_Books } from '../content/books/original';
import { A1_Listenings } from '../content/listening/a1';
import { A2_Listenings } from '../content/listening/a2';
import { B1_Listenings } from '../content/listening/b1';
import { B2_Listenings } from '../content/listening/b2';
import { Placement_Test } from '../content/placement/all';
import { All_Tenses } from '../content/tenses/all';
import { A1_Articles } from '../content/texts/articles/a1';
import { A2_Articles } from '../content/texts/articles/a2';
import { B1_Articles } from '../content/texts/articles/b1';
import { B2_Articles } from '../content/texts/articles/b2';
import { A1_Dialogs } from '../content/texts/dialogs/a1';
import { A2_Dialogs } from '../content/texts/dialogs/a2';
import { B1_Dialogs } from '../content/texts/dialogs/b1';
import { B2_Dialogs } from '../content/texts/dialogs/b2';
import {
    dictionary_collection,
    wc_La1_collection,
    wc_La2_collection,
    wc_Lb1_collection,
    wc_Lb2_collection,
    wc_phrases_collection,
} from './collections/words';
import { grammarCourse } from './courses/grammar';

export const grammarCategory = new Category({ id: 'grammar', title: 'Грамматика', icon: 'graduation-cap' })
    .addCourse(grammarCourse)
    .addCollection(new Collection({ id: 'tenses' }).addTenses(All_Tenses))
    .addCollection(new Collection({ id: 'placement' }).addPlacement(Placement_Test));

export const wordsCategory = new Category({ id: 'words', title: 'Словарь', icon: 'cards' })
    .addCollection(wc_La1_collection)
    .addCollection(wc_La2_collection)
    .addCollection(wc_Lb1_collection)
    .addCollection(wc_Lb2_collection)
    .addCollection(wc_phrases_collection)
    .addCollection(dictionary_collection);

/** Библиотека делится по уровням: статьи, диалоги и каналы «Слушать» уровня — одна коллекция */
export const libraryCategory = new Category({ id: 'library', title: 'Библиотека', icon: 'books' })
    .splitByLevel([
        A1_Articles,
        A1_Dialogs,
        A1_Listenings,
        A2_Articles,
        A2_Dialogs,
        A2_Listenings,
        B1_Articles,
        B1_Dialogs,
        B1_Listenings,
        B2_Articles,
        B2_Dialogs,
        B2_Listenings,
    ])
    .addCollection(new Collection({ id: 'books', title: 'Книги' }).addBooks(Adapted_Books, Original_Books));

const achievements = new Collection({ id: 'achievements' }).addAchievements(All_Achievements);
const PROFILE = { id: 'profile', title: 'Профиль', icon: 'user-circle' };
export const profileCategory = new Category(PROFILE).addCollection(achievements);
