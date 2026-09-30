// Письма: деловые и личные письма с разбором (вид зарегистрирован, материалы появятся позже)
import type { Level } from '@utils/level';

export interface Letter {
    id: string;
    title: string;
    level: Level;
    /** formal — деловое, informal — личное */
    style: 'formal' | 'informal';
    text: string;
    /** Разбор: обороты и шаблоны, HTML */
    notes?: string;
}
