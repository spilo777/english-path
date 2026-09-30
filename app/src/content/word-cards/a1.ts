// Слова уровня A1: частотная колода words.json, отбор по уровню
import { defineWordCards } from './define';
import { deckByLevel } from './sources';

export const A1_WordCards = defineWordCards({
    id: 'deck-A1',
    title: 'Слова A1',
    level: 'A1',
    icon: 'plant',
    source: deckByLevel('A1'),
});
