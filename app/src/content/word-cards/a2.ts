// Слова уровня A2: частотная колода words.json, отбор по уровню
import { defineWordCards } from './define';
import { deckByLevel } from './sources';

export const A2_WordCards = defineWordCards({
    id: 'deck-A2',
    title: 'Слова A2',
    level: 'A2',
    icon: 'tree-evergreen',
    source: deckByLevel('A2'),
});
