// Каналы для аудирования уровня B2
import { defineListenings } from './define';
import { channelsIn } from './sources';

export const B2_Listenings = defineListenings({
    id: 'listening-B2',
    title: 'Слушать B2',
    level: 'B2',
    icon: 'headphones',
    source: channelsIn('B2'),
});
