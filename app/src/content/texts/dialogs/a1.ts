// Диалоги уровня A1 из библиотеки (library.json, kind: dialogue)
import { defineTexts } from '../define';
import { dialogsByLevel } from '../sources';

export const A1_Dialogs = defineTexts({
    id: 'dialogs-A1',
    title: 'Диалоги A1',
    level: 'A1',
    icon: 'chat-circle-dots',
    tags: ['dialog'],
    source: dialogsByLevel('A1'),
});
