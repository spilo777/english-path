// Фразовые глаголы всех уровней: слова колоды с частью речи phr
import { defineWordCards } from './define';
import { deckByPos } from './sources';

export const Phrases_WordCards = defineWordCards({
    id: 'deck-phr',
    title: 'Фразовые глаголы',
    icon: 'puzzle-piece',
    source: deckByPos('phr'),
});
