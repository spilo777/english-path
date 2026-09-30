// Каналы для аудирования уровня B1
import { defineListenings } from './define';
import { channelsIn } from './sources';

export const B1_Listenings = defineListenings({
    id: 'listening-B1',
    title: 'Слушать B1',
    level: 'B1',
    icon: 'headphones',
    source: channelsIn('B1'),
});
