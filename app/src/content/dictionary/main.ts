// Основной словарь приложения (dict.json)
import { defineDictionary } from './define';
import { dictEntries } from './sources';

export const Main_Dictionary = defineDictionary({
    id: 'dict-main',
    title: 'Словарь',
    icon: 'translate',
    source: dictEntries,
});
