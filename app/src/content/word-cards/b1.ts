// Слова уровня B1: частотная колода words.json, отбор по уровню
import { defineWordCards } from './define';
import { deckByLevel } from './sources';

export const B1_WordCards = defineWordCards({
    id: 'deck-B1',
    title: 'Слова B1',
    level: 'B1',
    icon: 'mountains',
    source: deckByLevel('B1'),
});
