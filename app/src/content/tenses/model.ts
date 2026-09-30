// Времена английского: карточка времени и упражнения тренажёра (tenses.json)
import type { Level } from '@utils/level';

export interface TenseEx {
    q: string;
    v?: string;
    o: string[];
    a: number;
    why?: string;
}
export interface Tense {
    id: string;
    name: string;
    ru: string;
    time: 'present' | 'past' | 'future';
    aspect: 'simple' | 'continuous' | 'perfect' | 'perfect-continuous' | 'going-to';
    level: Level;
    freq: number;
    one: string;
    formula: { plus: string; minus: string; q: string };
    markers: string[];
    compare: string[];
    html: string;
    ex: TenseEx[];
}
