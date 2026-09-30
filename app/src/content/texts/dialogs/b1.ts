// Диалоги уровня B1 из библиотеки (library.json, kind: dialogue)
import { defineTexts } from '../define';
import { dialogsByLevel } from '../sources';

export const B1_Dialogs = defineTexts({
    id: 'dialogs-B1',
    title: 'Диалоги B1',
    level: 'B1',
    icon: 'chat-circle-dots',
    tags: ['dialog'],
    source: dialogsByLevel('B1'),
});
