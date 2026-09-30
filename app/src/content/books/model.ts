// Книги: адаптированные и оригинальные (books/index.json, books/<id>.json)
import type { Level } from '@utils/level';

export interface BookMeta {
    id: string;
    title: string;
    author: string;
    level: Level;
    kind: 'adapted' | 'original';
    wiki?: string;
    img?: string;
    ru?: string;
    chapters: number;
    words: number;
}
export interface Book extends Omit<BookMeta, 'chapters'> {
    chapters: { title: string; text: string }[];
}
