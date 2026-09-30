// Статьи уровня A1 из библиотеки (library.json)
import { defineTexts } from '../define';
import { articlesByLevel } from '../sources';

export const A1_Articles = defineTexts({
    id: 'articles-A1',
    title: 'Статьи A1',
    level: 'A1',
    icon: 'article',
    tags: ['article'],
    source: articlesByLevel('A1'),
});
