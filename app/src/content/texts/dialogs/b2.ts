// Диалоги уровня B2 из библиотеки (library.json, kind: dialogue)
import { defineTexts } from '../define';
import { dialogsByLevel } from '../sources';

export const B2_Dialogs = defineTexts({
    id: 'dialogs-B2',
    title: 'Диалоги B2',
    level: 'B2',
    icon: 'chat-circle-dots',
    tags: ['dialog'],
    source: dialogsByLevel('B2'),
});
