// Каналы для аудирования уровня A2
import { defineListenings } from './define';
import { channelsIn } from './sources';

export const A2_Listenings = defineListenings({
    id: 'listening-A2',
    title: 'Слушать A2',
    level: 'A2',
    icon: 'headphones',
    source: channelsIn('A2'),
});
