// Слой catalog: что содержит приложение. Движок собирается здесь и передаётся интерфейсу (<EngineProvider>)
import { ENEngine } from '@engine';
import { grammarCategory, libraryCategory, profileCategory, wordsCategory } from './categories';
import { engineConfig } from './engine.config';

export const engine = new ENEngine(engineConfig)
    .addCategory(grammarCategory)
    .addCategory(wordsCategory)
    .addCategory(libraryCategory)
    .addCategory(profileCategory);
