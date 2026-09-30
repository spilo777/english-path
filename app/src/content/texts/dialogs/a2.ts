// Диалоги уровня A2 из библиотеки (library.json, kind: dialogue)
import { defineTexts } from '../define';
import { dialogsByLevel } from '../sources';

export const A2_Dialogs = defineTexts({
    id: 'dialogs-A2',
    title: 'Диалоги A2',
    level: 'A2',
    icon: 'chat-circle-dots',
    tags: ['dialog'],
    source: dialogsByLevel('A2'),
});
