// Источники текстов: библиотека (library.json) — статьи lib-* и диалоги dlg-*, по уровням
import type { Level } from '@utils/level';
import { paths } from '../../core/data/paths';
import { derive, jsonSource, type Source } from '../base';
import type { TextItem } from './model';

/** Все тексты библиотеки: статьи и диалоги */
export const library = jsonSource<TextItem[]>(paths.library);

export const isDialog = (t: TextItem) => t.kind === 'dialogue';

/** Статьи уровня (всё, что не диалог) */
export function articlesByLevel(l: Level): Source<TextItem[]> {
    return derive(library, 'articles:' + l, (list) => list.filter((t) => t.level === l && !isDialog(t)));
}

/** Диалоги уровня */
export function dialogsByLevel(l: Level): Source<TextItem[]> {
    return derive(library, 'dialogs:' + l, (list) => list.filter((t) => t.level === l && isDialog(t)));
}
