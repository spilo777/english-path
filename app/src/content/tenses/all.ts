// Все времена английского: от Present Simple до Future Perfect Continuous
import { defineTenses } from './define';
import { tenses } from './sources';

export const All_Tenses = defineTenses({
    id: 'tenses-all',
    title: 'Времена',
    icon: 'clock',
    source: tenses,
});
