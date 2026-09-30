// Слой content: тексты — статьи и диалоги библиотеки
import { A1_Articles } from './articles/a1';
import { A2_Articles } from './articles/a2';
import { B1_Articles } from './articles/b1';
import { B2_Articles } from './articles/b2';
import { A1_Dialogs } from './dialogs/a1';
import { A2_Dialogs } from './dialogs/a2';
import { B1_Dialogs } from './dialogs/b1';
import { B2_Dialogs } from './dialogs/b2';

export { A1_Articles, A2_Articles, B1_Articles, B2_Articles, A1_Dialogs, A2_Dialogs, B1_Dialogs, B2_Dialogs };
export const LEVEL_Articles = [A1_Articles, A2_Articles, B1_Articles, B2_Articles];
export const LEVEL_Dialogs = [A1_Dialogs, A2_Dialogs, B1_Dialogs, B2_Dialogs];

export * from './define';
export * from './recommend';
export * from './resolve';
export type * from './model';
export * from './sources';
