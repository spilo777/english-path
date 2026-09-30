// Каналы для аудирования уровня A1
import { defineListenings } from './define';
import { channelsIn } from './sources';

export const A1_Listenings = defineListenings({
    id: 'listening-A1',
    title: 'Слушать A1',
    level: 'A1',
    icon: 'headphones',
    source: channelsIn('A1'),
});
