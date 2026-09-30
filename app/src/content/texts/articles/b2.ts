// Статьи уровня B2 из библиотеки (library.json)
import { defineTexts } from '../define';
import { articlesByLevel } from '../sources';

export const B2_Articles = defineTexts({
    id: 'articles-B2',
    title: 'Статьи B2',
    level: 'B2',
    icon: 'article',
    tags: ['article'],
    source: articlesByLevel('B2'),
});
