// Прогресс по книге: главы, отмеченные прочитанными (textsRead['<id книги>#<глава>'])
import type { Progress } from '../../core/progress/types';
import type { BookMeta } from './model';

/** Число глав книги */
export const chapN = (b: Pick<BookMeta, 'chapters'>): number => b.chapters || 0;

/** Сколько глав прочитано */
export function chaptersRead(s: Progress, b: Pick<BookMeta, 'id' | 'chapters'>): number {
    let n = 0;
    for (let i = 0; i < chapN(b); i++) if (s.textsRead[b.id + '#' + i]) n++;
    return n;
}
