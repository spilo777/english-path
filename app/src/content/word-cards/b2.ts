// Слова уровня B2: частотная колода words.json, отбор по уровню
import { defineWordCards } from './define';
import { deckByLevel } from './sources';

export const B2_WordCards = defineWordCards({
    id: 'deck-B2',
    title: 'Слова B2',
    level: 'B2',
    icon: 'rocket-launch',
    source: deckByLevel('B2'),
});
