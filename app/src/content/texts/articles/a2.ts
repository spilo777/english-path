// Статьи уровня A2 из библиотеки (library.json)
import { defineTexts } from '../define';
import { articlesByLevel } from '../sources';

export const A2_Articles = defineTexts({
    id: 'articles-A2',
    title: 'Статьи A2',
    level: 'A2',
    icon: 'article',
    tags: ['article'],
    source: articlesByLevel('A2'),
});
