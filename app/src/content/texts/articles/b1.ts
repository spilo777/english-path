// Статьи уровня B1 из библиотеки (library.json)
import { defineTexts } from '../define';
import { articlesByLevel } from '../sources';

export const B1_Articles = defineTexts({
    id: 'articles-B1',
    title: 'Статьи B1',
    level: 'B1',
    icon: 'article',
    tags: ['article'],
    source: articlesByLevel('B1'),
});
