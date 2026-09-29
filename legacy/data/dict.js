// Базовый словарь для перевода по тапу. Слова из юнитов добавляются автоматически.
// Формат: 'слово': 'перевод'. Неправильные формы — в FORMS (форма → словарная форма).
window.DICT = {
  // служебные
  'a': 'неопределённый артикль (один, какой-то)', 'an': 'неопределённый артикль перед гласным звуком', 'the': 'определённый артикль (тот самый)',
  'and': 'и, а', 'but': 'но', 'or': 'или', 'so': 'поэтому, так', 'because': 'потому что', 'if': 'если', 'then': 'тогда, потом', 'than': 'чем',
  'to': 'к, в, до; частица перед глаголом', 'of': 'предлог родительного падежа («из», «о»)', 'in': 'в', 'on': 'на', 'at': 'в, на (место, время)', 'for': 'для, за, на',
  'with': 'с', 'without': 'без', 'from': 'из, от', 'by': 'у, около; на (транспорт)', 'about': 'о, про; около', 'after': 'после, за', 'before': 'до, перед',
  'up': 'вверх', 'down': 'вниз', 'out': 'наружу, вне', 'into': 'в (внутрь)', 'over': 'над, через', 'under': 'под', 'behind': 'позади, за', 'near': 'рядом',
  'all': 'все, весь', 'every': 'каждый', 'some': 'несколько, немного', 'any': 'любой, какой-нибудь', 'no': 'нет; никакой', 'not': 'не', 'very': 'очень',
  'too': 'тоже; слишком', 'also': 'также', 'only': 'только', 'just': 'просто, только что', 'now': 'сейчас', 'today': 'сегодня', 'tomorrow': 'завтра',
  'yesterday': 'вчера', 'again': 'снова', 'here': 'здесь', 'there': 'там', 'where': 'где', 'what': 'что, какой', 'who': 'кто', 'why': 'почему',
  'when': 'когда', 'how': 'как', 'which': 'который', 'this': 'этот, это', 'that': 'тот, то; что (союз)', 'these': 'эти', 'those': 'те',
  'much': 'много (неисчисл.)', 'many': 'много (исчисл.)', 'lot': 'много (a lot)', 'more': 'больше', 'most': 'больше всего', 'little': 'маленький; мало',
  'one': 'один', 'two': 'два', 'three': 'три', 'four': 'четыре', 'five': 'пять', 'six': 'шесть', 'seven': 'семь', 'eight': 'восемь', 'nine': 'девять', 'ten': 'десять',
  'eleven': 'одиннадцать', 'twelve': 'двенадцать', 'twenty': 'двадцать', 'hundred': 'сто', 'first': 'первый', 'last': 'последний', 'next': 'следующий',
  'zero': 'ноль', 'well': 'хорошо; ну', 'yes': 'да', 'ok': 'хорошо, ладно', 'oh': 'ох, о!', 'cool': 'круто; прохладный',
  // местоимения
  'i': 'я', 'you': 'ты, вы', 'he': 'он', 'she': 'она', 'it': 'оно, это', 'we': 'мы', 'they': 'они',
  'me': 'меня, мне', 'him': 'его, ему', 'her': 'её, ей; её (чей)', 'us': 'нас, нам', 'them': 'их, им',
  'my': 'мой', 'your': 'твой, ваш', 'his': 'его (чей)', 'its': 'его, её (о предмете)', 'our': 'наш', 'their': 'их (чей)',
  'mine': 'мой (без сущ.)', 'yours': 'твой (без сущ.)',
  // сокращения
  "i'm": 'я (есть) — I am', "you're": 'ты (есть) — you are', "he's": 'он (есть) — he is', "she's": 'она (есть) — she is', "it's": 'это (есть) — it is',
  "we're": 'мы (есть) — we are', "they're": 'они (есть) — they are', "isn't": 'не является — is not', "aren't": 'не являются — are not',
  "don't": 'не — do not', "doesn't": 'не — does not', "can't": 'не могу — cannot', "that's": 'это — that is', "what's": 'что (есть) — what is',
  "let's": 'давай(те) — let us', "hasn't": 'не имеет — has not', "haven't": 'не имею — have not', "i've": 'я имею — I have', "wasn't": 'не был — was not', "weren't": 'не были — were not', "couldn't": 'не мог — could not', "i'd": 'я бы — I would', "you've": 'ты имеешь — you have', "we've": 'мы имеем — we have', "there's": 'есть, имеется — there is', "shouldn't": 'не следует — should not', "i'll": 'я буду — I will', "won't": 'не буду — will not', "didn't": 'не (в прошлом) — did not',
  // глаголы
  'be': 'быть', 'have': 'иметь', 'do': 'делать', 'can': 'мочь, уметь', 'will': 'будет (будущее время)', 'would': 'бы',
  'go': 'идти, ехать', 'come': 'приходить', 'get': 'получать, становиться', 'make': 'делать, создавать', 'take': 'брать', 'give': 'давать',
  'see': 'видеть', 'look': 'смотреть', 'watch': 'смотреть, наблюдать', 'hear': 'слышать', 'listen': 'слушать', 'say': 'сказать', 'tell': 'рассказать',
  'talk': 'разговаривать', 'speak': 'говорить', 'ask': 'спрашивать', 'answer': 'отвечать; ответ', 'know': 'знать', 'think': 'думать', 'understand': 'понимать',
  'want': 'хотеть', 'need': 'нуждаться', 'like': 'нравиться; как', 'love': 'любить', 'use': 'использовать', 'open': 'открывать; открытый', 'close': 'закрывать',
  'work': 'работать; работа', 'live': 'жить', 'play': 'играть', 'read': 'читать', 'write': 'писать', 'drink': 'пить', 'eat': 'есть',
  'sleep': 'спать', 'run': 'бежать', 'walk': 'ходить, гулять', 'jump': 'прыгать', 'sit': 'сидеть', 'stand': 'стоять', 'move': 'двигаться',
  'start': 'начинать', 'finish': 'заканчивать', 'stop': 'останавливать(ся)', 'help': 'помогать; помощь', 'try': 'пытаться, пробовать',
  'find': 'находить', 'lose': 'терять, проигрывать', 'win': 'побеждать', 'buy': 'покупать', 'pay': 'платить', 'study': 'учиться', 'learn': 'учить, изучать',
  'feel': 'чувствовать', 'wait': 'ждать', 'call': 'звонить, звать', 'let': 'позволять', 'put': 'класть', 'keep': 'хранить, продолжать',
  'change': 'менять; изменение', 'choose': 'выбирать', 'select': 'выбирать', 'press': 'нажимать', 'save': 'сохранять', 'load': 'загружать',
  'die': 'умирать', 'kill': 'убивать', 'attack': 'атаковать', 'drop': 'бросить, выбросить', 'pick': 'подбирать, выбирать', 'join': 'присоединяться',
  'continue': 'продолжать', 'quit': 'выходить', 'exit': 'выход; выходить', 'wake': 'просыпаться', 'meet': 'встречать, знакомиться',
  'welcome': 'добро пожаловать', 'thank': 'благодарить', 'thanks': 'спасибо', 'please': 'пожалуйста', 'sorry': 'извините',
  'hello': 'привет, здравствуйте', 'hi': 'привет', 'goodbye': 'до свидания', 'bye': 'пока',
  // существительные
  'name': 'имя', 'friend': 'друг', 'people': 'люди', 'person': 'человек', 'man': 'мужчина', 'woman': 'женщина', 'child': 'ребёнок',
  'student': 'студент', 'teacher': 'учитель', 'designer': 'дизайнер', 'engineer': 'инженер', 'artist': 'художник', 'king': 'король',
  'home': 'дом (родной)', 'house': 'дом (здание)', 'room': 'комната', 'office': 'офис', 'city': 'город', 'street': 'улица', 'shop': 'магазин', 'gym': 'спортзал',
  'café': 'кафе', 'cafe': 'кафе', 'bed': 'кровать', 'door': 'дверь', 'window': 'окно', 'table': 'стол', 'chair': 'стул', 'box': 'коробка',
  'phone': 'телефон', 'laptop': 'ноутбук', 'computer': 'компьютер', 'screen': 'экран', 'book': 'книга', 'bag': 'сумка', 'car': 'машина', 'bus': 'автобус',
  'cat': 'кошка', 'dog': 'собака', 'fish': 'рыба', 'apple': 'яблоко', 'water': 'вода', 'milk': 'молоко', 'coffee': 'кофе', 'tea': 'чай', 'breakfast': 'завтрак',
  'lunch': 'обед', 'dinner': 'ужин', 'food': 'еда', 'day': 'день', 'week': 'неделя', 'weekend': 'выходные', 'morning': 'утро', 'evening': 'вечер',
  'night': 'ночь', 'time': 'время; раз', 'minute': 'минута', 'hour': 'час', 'year': 'год', 'life': 'жизнь', 'lives': 'жизни',
  'game': 'игра', 'film': 'фильм', 'video': 'видео', 'music': 'музыка', 'sport': 'спорт', 'text': 'текст', 'word': 'слово', 'language': 'язык',
  'english': 'английский', 'russian': 'русский', 'spanish': 'испанский', 'question': 'вопрос', 'problem': 'проблема', 'team': 'команда', 'meeting': 'встреча',
  'monday': 'понедельник', 'tuesday': 'вторник', 'wednesday': 'среда', 'thursday': 'четверг', 'friday': 'пятница', 'saturday': 'суббота', 'sunday': 'воскресенье',
  'russia': 'Россия', 'moscow': 'Москва', 'london': 'Лондон', 'kazan': 'Казань', 'york': 'Йорк (New York — Нью-Йорк)', 'england': 'Англия',
  'youtube': 'YouTube', 'x': 'X (буква, кнопка)',
  'anna': 'Анна (имя)', 'tom': 'Том (имя)', 'max': 'Макс (имя)', 'kate': 'Кейт (имя)', 'sam': 'Сэм (имя)', 'lily': 'Лили (имя)', 'ilya': 'Илья (имя)', 'lisa': 'Лиза (имя)', 'mira': 'Мира (имя)', 'lina': 'Лина (имя)', 'spain': 'Испания', 'canada': 'Канада', 'barcelona': 'Барселона', 'min': 'мин (минута)', 'sec': 'сек (секунда)', 'mid': 'мид (центральная линия в игре)', 'ty': 'спасибо (thank you, в чате)', 'log': 'журнал; бревно', 'luna': 'Луна (кличка)',
  // страны, студии, экран
  'american': 'американский', 'america': 'Америка', 'british': 'британский', 'japanese': 'японский', 'japan': 'Япония', 'german': 'немецкий', 'french': 'французский', 'korean': 'корейский', 'korea': 'Корея', 'spanish': 'испанский', 'usa': 'США', 'uk': 'Великобритания', 'europe': 'Европа', 'european': 'европейский', 'mexico': 'Мексика', 'mexican': 'мексиканский', 'poland': 'Польша', 'polish': 'польский', 'sweden': 'Швеция', 'canada': 'Канада',
  'hollywood': 'Голливуд', 'netflix': 'Netflix (стриминговый сервис)', 'disney': 'Disney (студия)', 'pixar': 'Pixar (студия анимации)', 'dreamworks': 'DreamWorks (студия)', 'hbo': 'HBO (телеканал, стриминг)', 'bbc': 'BBC (британская телерадиокомпания)', 'nbc': 'NBC (американский телеканал)', 'ghibli': 'Ghibli (японская студия анимации)', 'emmy': 'Эмми (телепремия)', 'oscar': 'Оскар (кинопремия)',
  'anime': 'аниме', 'manga': 'манга (японские комиксы)', 'animation': 'анимация, мультипликация', 'animated': 'анимационный, мультипликационный', 'sitcom': 'ситком, комедийный сериал', 'spoiler': 'спойлер', 'storytelling': 'повествование, умение рассказывать историю', 'live-action': 'игровой (с живыми актёрами)', 'fictional': 'вымышленный', 'glitch': 'глюк, баг', 'console': 'игровая приставка', 'role-playing': 'ролевой', 'mod': 'мод (модификация игры)', 'spin-off': 'спин-офф, ответвление', 'fandom': 'фандом, сообщество фанатов', 'franchise': 'франшиза', 'sequel': 'сиквел, продолжение', 'prequel': 'приквел', 'showrunner': 'шоураннер (главный автор сериала)', 'binge-watch': 'смотреть запоем', 'streaming': 'стриминг, потоковое видео', 'esports': 'киберспорт', 'speedrun': 'спидран (быстрое прохождение)', 'indie': 'инди, независимый', 'ogre': 'огр, людоед', 'swamp': 'болото', 'fairy': 'фея; сказочный', 'teenage': 'подростковый', 'teen': 'подросток', 'cannot': 'не может (can not)', 'realise': 'осознавать, понимать', 'dr': 'доктор (Dr.)', 'v': 'против; пятый', 'j': 'буква J', 'r': 'буква R',
  'mom': 'мама', 'dad': 'папа', 'gray': 'серый', 'grey': 'серый', 'favorite': 'любимый', 'favourite': 'любимый', 'neighbor': 'сосед', 'neighbour': 'сосед', 'colorful': 'красочный', 'colourful': 'красочный', 'crude': 'грубый, неотёсанный', 'witty': 'остроумный', 'soviet': 'советский', 'premiere': 'премьера; выходить на экраны', 'astonishing': 'поразительный', 'dungeon': 'подземелье', 'china': 'Китай', 'chinese': 'китайский', 'africa': 'Африка', 'african': 'африканский', 'panda': 'панда', 'goose': 'гусь', 'dragon': 'дракон', 'robot': 'робот', 'alien': 'пришелец, инопланетянин', 'superhero': 'супергерой', 'villain': 'злодей', 'hero': 'герой', 'episode': 'эпизод, серия', 'season': 'сезон', 'series': 'сериал; серия', 'cartoon': 'мультфильм', 'scene': 'сцена', 'plot': 'сюжет', 'twist': 'поворот сюжета', 'cast': 'актёрский состав', 'actor': 'актёр', 'actress': 'актриса', 'director': 'режиссёр', 'viewer': 'зритель', 'fan': 'фанат, поклонник', 'genre': 'жанр', 'comedy': 'комедия', 'drama': 'драма', 'horror': 'ужасы', 'thriller': 'триллер', 'sci-fi': 'научная фантастика', 'fantasy': 'фэнтези', 'detective': 'детектив', 'kingdom': 'королевство', 'princess': 'принцесса', 'prince': 'принц', 'castle': 'замок', 'magic': 'магия; волшебный', 'monster': 'монстр', 'zombie': 'зомби', 'wizard': 'волшебник', 'witch': 'ведьма',
  // игровое
  'level': 'уровень', 'quest': 'квест, задание', 'mission': 'миссия', 'health': 'здоровье', 'damage': 'урон', 'enemy': 'враг', 'weapon': 'оружие',
  'skill': 'навык', 'inventory': 'инвентарь', 'map': 'карта', 'key': 'ключ; клавиша', 'item': 'предмет', 'reward': 'награда', 'boss': 'босс',
  'player': 'игрок', 'character': 'персонаж', 'settings': 'настройки', 'options': 'настройки, варианты', 'difficulty': 'сложность', 'mode': 'режим',
  'point': 'точка; очко', 'points': 'очки', 'warrior': 'воин', 'mage': 'маг', 'stick': 'стик, палка', 'button': 'кнопка', 'top': 'верх', 'shame': 'стыд, позор',
  'tip': 'совет, подсказка', 'luck': 'удача', 'loading': 'загрузка', 'audio': 'звук', 'graphics': 'графика', 'controls': 'управление', 'subtitles': 'субтитры',
  // прилагательные
  'good': 'хороший', 'bad': 'плохой', 'best': 'лучший', 'better': 'лучше', 'big': 'большой', 'small': 'маленький', 'new': 'новый', 'old': 'старый',
  'long': 'длинный', 'short': 'короткий', 'fast': 'быстрый', 'slow': 'медленный', 'hot': 'горячий', 'cold': 'холодный', 'happy': 'счастливый',
  'tired': 'уставший', 'hungry': 'голодный', 'fine': 'хорошо, в порядке', 'nice': 'приятный', 'late': 'поздно', 'early': 'рано',
  'expensive': 'дорогой', 'cheap': 'дешёвый', 'easy': 'лёгкий', 'hard': 'трудный', 'strong': 'сильный', 'weak': 'слабый', 'low': 'низкий',
  'high': 'высокий', 'full': 'полный', 'empty': 'пустой', 'black': 'чёрный', 'white': 'белый', 'red': 'красный', 'green': 'зелёный',
  'quiet': 'тихий', 'friendly': 'дружелюбный', 'smart': 'умный', 'rare': 'редкий', 'left': 'левый', 'right': 'правый; правильный',
  'fun': 'весёлый; веселье', 'free': 'свободный, бесплатный', 'ready': 'готовый', 'real': 'настоящий', 'normal': 'нормальный', 'same': 'тот же',
  // наречия частоты
  'always': 'всегда', 'usually': 'обычно', 'often': 'часто', 'sometimes': 'иногда', 'never': 'никогда', 'together': 'вместе', 'o\'clock': 'ровно (о времени)'
};

// Неправильные и особые формы → словарная форма
window.FORMS = {
  'am': 'be', 'is': 'be', 'are': 'be', 'was': 'be', 'were': 'be', 'been': 'be', 'being': 'be',
  'has': 'have', 'had': 'have', 'does': 'do', 'did': 'do', 'done': 'do', 'goes': 'go', 'went': 'go', 'gone': 'go',
  'men': 'man', 'women': 'woman', 'children': 'child', 'people': 'people',
  'got': 'get', 'made': 'make', 'took': 'take', 'gave': 'give', 'saw': 'see', 'said': 'say', 'told': 'tell', 'knew': 'know', 'thought': 'think',
  'found': 'find', 'lost': 'lose', 'won': 'win', 'bought': 'buy', 'paid': 'pay', 'felt': 'feel', 'put': 'put', 'ran': 'run', 'came': 'come',
  'ate': 'eat', 'drank': 'drink', 'slept': 'sleep', 'read': 'read', 'wrote': 'write', 'spoke': 'speak', 'understood': 'understand', 'died': 'die',
  'met': 'meet', 'flew': 'fly', 'swam': 'swim', 'wolves': 'wolf', 'knives': 'knife', 'lives': 'live', 'feet': 'foot', 'teeth': 'tooth', 'mice': 'mouse', 'began': 'begin', 'brought': 'bring', 'built': 'build', 'caught': 'catch', 'chose': 'choose', 'drove': 'drive', 'fell': 'fall', 'fought': 'fight', 'forgot': 'forget', 'grew': 'grow', 'heard': 'hear', 'held': 'hold', 'kept': 'keep', 'knew': 'know', 'left': 'leave', 'lent': 'lend', 'meant': 'mean', 'rode': 'ride', 'rang': 'ring', 'sang': 'sing', 'sat': 'sit', 'sold': 'sell', 'sent': 'send', 'shot': 'shoot', 'spent': 'spend', 'stood': 'stand', 'stole': 'steal', 'taught': 'teach', 'threw': 'throw', 'woke': 'wake', 'wore': 'wear', 'broke': 'break', 'broken': 'break', 'spoken': 'speak', 'written': 'write', 'taken': 'take', 'given': 'give', 'seen': 'see', 'eaten': 'eat', 'became': 'become', 'become': 'become', 'known': 'know', 'shown': 'show', 'drawn': 'draw', 'grown': 'grow', 'thrown': 'throw', 'flown': 'fly', 'hidden': 'hide', 'chosen': 'choose', 'forgotten': 'forget', 'gotten': 'get', 'ridden': 'ride', 'fallen': 'fall', 'begun': 'begin', 'sung': 'sing', 'swum': 'swim', 'driven': 'drive', 'beaten': 'beat', 'bitten': 'bite', 'stolen': 'steal', 'woken': 'wake', 'worn': 'wear', 'torn': 'tear', 'sold': 'sell', 'told': 'tell', 'dug': 'dig', 'hid': 'hide', 'led': 'lead', 'fed': 'feed', 'fled': 'flee', 'bent': 'bend', 'dealt': 'deal', 'meant': 'mean', 'studies': 'study', 'watches': 'watch', 'coffees': 'coffee', 'lives': 'live', 'boxes': 'box', 'better': 'good', 'best': 'good'
};
