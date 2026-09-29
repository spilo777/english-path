// Грамматика по шагам для юнита a1-7: can / can't, вопрос Can…?, просьбы Can you…? / Can I…? / Could…?, me / him / her / them, my / his / their.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-7'); if (!u) return;
  u.walk = [
    // ───────────── 1. can — «умею» и «могу» ─────────────
    { title: 'Одно слово вместо «умею» и «могу»', steps: [
      { t: 'idea', text: `Хотите сказать «Я умею плавать». По-русски есть «умею» (навык) и «могу» (есть возможность). По-английски оба — одно короткое слово <b>can</b>.`,
        lit: [['I', 'я'], ['can', 'умею / могу'], ['swim', 'плавать']],
        ex: [['I can swim.', 'Я умею плавать.'], ['She can draw.', 'Она умеет рисовать.'], ['I can play at five.', 'Я могу поиграть в пять.']] },
      { t: 'idea', text: `Что стоит после can? Слово-действие (плавать, рисовать, готовить) — <b>ровно как в словаре</b>. Никакого to перед ним и никакого -s в конце.`,
        bad: 'I can to swim. / She can draws.', good: 'I can <b>swim</b>. / She can <b>draw</b>.',
        ex: [['He can play the guitar.', 'Он умеет играть на гитаре.'], ['Max can draw very fast.', 'Макс умеет очень быстро рисовать.']],
        tip: `can — «сильное» слово: всё делает само. Слово-действие после него отдыхает — голое, без to и без -s.` },
      { t: 'check', q: 'Скажите: «Она умеет готовить»', o: ['She can cooks.', 'She can to cook.', 'She can cook.'], a: 2,
        why: 'После can слово-действие как в словаре: cook.' },
      { t: 'idea', text: `И ещё хорошая новость: can не меняется. Для «я», «он», «они» — одно и то же <b>can</b>. Никаких cans и никаких do / does.`,
        rows: [['I / you / we / they', 'can', 'We can play chess.'], ['he / she / it, Tom', 'can', 'Tom can play chess.']],
        ex: [['They can dance.', 'Они умеют танцевать.'], ['Kate can ride a bike.', 'Кейт умеет кататься на велосипеде.']] },
      { t: 'check', q: 'Tom ___ very well.', ru: 'Том очень хорошо готовит.', o: ['can cook', 'cans cook', 'can cooks'], a: 0,
        why: 'can для всех одинаковый, и cook после него без -s.' },
      { t: 'idea', text: `Итог: «умею» и «могу» = <b>can</b>. Формула одна для всех:`,
        rows: [['кто', 'can', 'слово-действие как в словаре'], ['I', 'can', 'swim'], ['Tom', 'can', 'draw']] }
    ]},

    // ───────────── 2. can't и вопрос Can…? ─────────────
    { title: 'Не умею — и «Умеешь?»', steps: [
      { t: 'idea', text: `Хотите сказать «Я не умею водить». Добавляем к can хвостик <b>-n’t</b>: <b>can’t</b>. Слово-действие после него всё так же голое.`,
        lit: [['I', 'я'], ['can’t', 'не умею'], ['drive', 'водить']],
        ex: [['I can’t drive.', 'Я не умею водить.'], ['He can’t sing.', 'Он не умеет петь.'], ['We can’t play today.', 'Мы не можем играть сегодня.']],
        tip: `Полная форма пишется слитно — cannot. В разговоре почти всегда can’t.` },
      { t: 'check', q: 'Скажите: «Макс не умеет плавать»', o: ['Max doesn’t can swim.', 'Max can’t swim.', 'Max can’t swims.'], a: 1,
        why: 'Не умеет = can’t, и swim после него без -s. do / does с can не нужны.' },
      { t: 'idea', text: `Хотите спросить «Ты умеешь плавать?». Берём фразу «You can swim» и переносим <b>can</b> в самое начало. Больше ничего не добавляем.`,
        lit: [['Can', 'умеешь'], ['you', 'ты'], ['swim', 'плавать'], ['?', '']],
        ex: [['Can you swim?', 'Ты умеешь плавать?'], ['Can he cook?', 'Он умеет готовить?'], ['Can they play chess?', 'Они умеют играть в шахматы?']],
        bad: 'Do you can swim?', good: '<b>Can you</b> swim?' },
      { t: 'idea', text: `Отвечаем коротко тем же словом: <b>Yes, I can.</b> / <b>No, I can’t.</b> Вопрос с can — ответ тоже с can.`,
        ex: [['Can you drive? — Yes, I can.', 'Умеешь водить? — Да.'], ['Can Kate sing? — No, she can’t.', 'Кейт умеет петь? — Нет.']] },
      { t: 'check', q: 'Can he cook? — No, he ___.', ru: 'Он умеет готовить? — Нет.', o: ['doesn’t', 'can’t', 'isn’t'], a: 1,
        why: 'Вопрос с can → и ответ с can: No, he can’t.' },
      { t: 'idea', text: `Если есть слово-вопрос (что, где, когда), оно встаёт перед can: <b>What can you do?</b> — Что ты умеешь?`,
        lit: [['What', 'что'], ['can', 'умеешь'], ['you', 'ты'], ['do', 'делать'], ['?', '']],
        ex: [['What can you do?', 'Что ты умеешь?'], ['Where can I sit?', 'Где мне можно сесть?'], ['When can you play?', 'Когда ты можешь поиграть?']] },
      { t: 'idea', text: `Насколько хорошо — говорим в конце фразы: <b>very well</b> (очень хорошо), <b>a bit</b> (немного), <b>at all</b> (совсем не — только с can’t).`,
        rows: [['I can swim very well.', 'Я очень хорошо плаваю.'], ['I can cook a bit.', 'Я немного умею готовить.'], ['I can’t dance at all.', 'Я совсем не умею танцевать.']] },
      { t: 'check', q: 'Скажите: «Я совсем не умею петь»', o: ['I can’t sing at all.', 'I can’t at all sing.', 'I can sing at all.'], a: 0,
        why: 'at all — в самом конце и только с can’t.' },
      { t: 'idea', text: `Итог: три вида одной фразы — и во всех can стоит рядом с голым словом-действием.`,
        rows: [['умею', 'I can swim.'], ['не умею', 'I can’t swim.'], ['умеешь?', 'Can you swim? — Yes, I can. / No, I can’t.']] }
    ]},

    // ───────────── 3. Просьбы ─────────────
    { title: 'Попросить и спросить разрешения', steps: [
      { t: 'idea', text: `Хотите попросить: «Можешь мне помочь?». Это тот же вопрос с can: <b>Can you</b> + что сделать. Слово please (пожалуйста) — в конце.`,
        lit: [['Can', 'можешь'], ['you', 'ты'], ['help', 'помочь'], ['me', 'мне'], ['?', '']],
        ex: [['Can you help me?', 'Можешь мне помочь?'], ['Can you repeat, please?', 'Можете повторить, пожалуйста?'], ['Can you call me at six?', 'Можешь позвонить мне в шесть?']],
        tip: `Ответить просто: Sure! / Of course. (конечно) — или Sorry, I can’t. (извини, не могу).` },
      { t: 'check', q: 'Скажите: «Можешь подождать, пожалуйста?»', o: ['You can wait, please?', 'Can you wait, please?', 'Can wait, please?'], a: 1,
        why: 'Просьба к другому = вопрос: Can you + что сделать.' },
      { t: 'idea', text: `А если «Можно мне…?» — просим разрешения для себя. По-русски «мне» можно не говорить, по-английски «я» обязательно: <b>Can I</b> + что сделать.`,
        lit: [['Can', 'можно'], ['I', 'мне'], ['sit', 'сесть'], ['here', 'здесь'], ['?', '']],
        ex: [['Can I sit here?', 'Можно (мне) здесь сесть?'], ['Can I look at your laptop?', 'Можно посмотреть твой ноутбук?'], ['Can I play?', 'Можно поиграть?']],
        bad: 'Can sit here?', good: 'Can <b>I</b> sit here?' },
      { t: 'idea', text: `Попросить что-то дать — <b>Can I have…?</b> Дословно «могу я иметь?», а по смыслу «дайте мне, пожалуйста». Так заказывают в кафе.`,
        lit: [['Can', 'можно'], ['I', 'мне'], ['have', '(иметь)'], ['a coffee', 'кофе'], ['?', '']],
        ex: [['Can I have a coffee, please?', 'Мне кофе, пожалуйста.'], ['Can I have some water?', 'Можно мне воды?']] },
      { t: 'check', q: 'Скажите: «Можно поиграть?»', o: ['Can you play?', 'Can play?', 'Can I play?'], a: 2,
        why: 'Просим разрешения для себя → Can I…? «Я» нужно назвать.' },
      { t: 'idea', text: `Есть «мягкий» can — <b>could</b>. <b>Could you…?</b> / <b>Could I…?</b> — то же самое, но вежливее. Пригодится с незнакомыми людьми.`,
        ex: [['Could you help me, please?', 'Не могли бы вы мне помочь?'], ['Could I sit here?', 'Можно мне здесь сесть?']],
        tip: `Can — с друзьями, could — с незнакомыми или когда просите о чём-то важном.` },
      { t: 'check', q: 'Самая вежливая просьба к незнакомому человеку:', o: ['You help me.', 'Could you help me, please?', 'Do you can help me?'], a: 1,
        why: 'Could you…, please? — мягкая вежливая просьба.' },
      { t: 'idea', opt: true, text: `У could есть и второе значение — can «в прошлом»: <b>I couldn’t sleep.</b> — Я не мог уснуть. Про прошлое подробно поговорим в уроках 8–9, пока только заметьте.`,
        ex: [['I couldn’t sleep.', 'Я не мог уснуть.'], ['Max couldn’t come.', 'Макс не смог прийти.']] },
      { t: 'idea', text: `Итог: просьба — это вопрос с can. Главное — не забыть «я», когда просите для себя.`,
        rows: [['Можешь…?', 'Can you help me?'], ['Можно мне…?', 'Can I sit here?'], ['Дайте мне…', 'Can I have a coffee, please?']] }
    ]},

    // ───────────── 4. me / him / her / them ─────────────
    { title: '«Меня, ему, с ней» — вторая форма слов я / он / она', steps: [
      { t: 'idea', text: `Хотите сказать «Помоги мне». По-русски «я» меняется на «мне», «меня», «мной». По-английски тоже есть вторая форма — но всего <b>одна</b>: <b>me</b>.`,
        lit: [['Help', 'помоги'], ['me', 'мне']],
        ex: [['Help me!', 'Помоги мне!'], ['Play with me!', 'Поиграй со мной!'], ['Call me at six.', 'Позвони мне в шесть.']],
        tip: `Одно me на все русские «меня / мне / мной». Английский тут проще.` },
      { t: 'check', q: 'Скажите: «Послушай меня!»', o: ['Listen to me!', 'Listen to I!', 'Listen to my!'], a: 0,
        why: 'Кого послушать? меня → me. I бывает только «делающим».' },
      { t: 'idea', text: `У каждого слова-«кто» есть своя вторая форма: <b>he → him</b>, <b>she → her</b>, <b>we → us</b>, <b>they → them</b>. А you и it не меняются вовсе.`,
        rows: [['I → me', 'he → him', 'she → her'], ['we → us', 'they → them', 'you → you, it → it']],
        ex: [['I know him.', 'Я его знаю.'], ['Call her.', 'Позвони ей.'], ['Can you help us?', 'Можешь нам помочь?']],
        tip: `Про вещи так же: одна вещь — it, много — them: Where are my shoes? — You’re wearing them! (Где мои туфли? — Ты в них!)` },
      { t: 'check', q: 'Kate is my friend. I play with ___ every Friday.', ru: 'Кейт моя подруга. Я играю с ней каждую пятницу.', o: ['she', 'her', 'them'], a: 1,
        why: 'С кем играю? с ней → her.' },
      { t: 'idea', text: `Как выбрать? Смотрите, где стоит слово. <b>Перед</b> словом-действием (кто делает) — I, he, she. <b>После</b> него или после with, to, for, at — me, him, her.`,
        lit: [['I', 'я (делаю)'], ['know', 'знаю'], ['him', 'его (кого)']],
        ex: [['She likes me, and I like her.', 'Я ей нравлюсь, и она мне нравится.'], ['This message is for you.', 'Это сообщение для тебя.'], ['Why are you looking at her?', 'Почему ты на неё смотришь?']],
        bad: 'Tom is my friend. I play with he.', good: 'Tom is my friend. I play with <b>him</b>.' },
      { t: 'check', q: 'We are here! Can you help ___?', ru: 'Мы здесь! Можешь нам помочь?', o: ['we', 'us', 'our'], a: 1,
        why: 'Кому помочь? нам → us. Слово стоит после help.' },
      { t: 'idea', text: `Итог: делает — одна форма, получает — другая.`,
        rows: [['I → me', 'he → him', 'she → her'], ['we → us', 'they → them', 'you → you']] }
    ]},

    // ───────────── 5. my / his / their ─────────────
    { title: '«Чей?» — my, his, her, their', steps: [
      { t: 'idea', text: `Хотите сказать «его велосипед», «их дом». Для «чей?» есть третий набор слов: он ставится <b>перед предметом</b>. my и your вы уже знаете.`,
        rows: [['I → my', 'he → his', 'she → her'], ['we → our', 'they → their', 'you → your']],
        ex: [['This is his bike.', 'Это его велосипед.'], ['Their house is big.', 'Их дом большой.'], ['Our flat is small.', 'Наша квартира маленькая.']] },
      { t: 'check', q: 'Max has got a bike. ___ bike is new.', ru: 'У Макса есть велосипед. Его велосипед новый.', o: ['Him', 'His', 'He'], a: 1,
        why: 'Чей велосипед? Макса (he) → his. Перед предметом — «чей».' },
      { t: 'idea', text: `Слово зависит от <b>хозяина</b>, а не от предмета. Хозяин мужчина — his, хозяйка женщина — her. Что за предмет — неважно.`,
        ex: [['his bag', 'его сумка'], ['her phone', 'её телефон'], ['her guitar', 'её гитара']],
        bad: 'Anna loves his cat. (про кошку Анны)', good: 'Anna loves <b>her</b> cat.' },
      { t: 'idea', text: `Слова «свой» в английском нет. Каждый раз смотрим, кто хозяин: он любит свою собаку — «он любит <b>его</b> собаку».`,
        lit: [['He', 'он'], ['loves', 'любит'], ['his', 'свою (его)'], ['dog', 'собаку']],
        ex: [['He loves his dog.', 'Он любит свою собаку.'], ['She loves her dog.', 'Она любит свою собаку.'], ['They love their house.', 'Они любят свой дом.']] },
      { t: 'check', q: 'Скажите: «Они любят свою квартиру»', o: ['They love our flat.', 'They love them flat.', 'They love their flat.'], a: 2,
        why: '«Свою» при хозяевах they → their.' },
      { t: 'check', q: 'Kate loves ___ cat.', ru: 'Кейт любит свою кошку.', o: ['his', 'her', 'she'], a: 1,
        why: 'Хозяйка — Кейт (she) → her.' },
      { t: 'idea', opt: true, text: `Для «чей» у вещи есть слово <b>its</b> — без апострофа. А <b>it’s</b> с апострофом — это it is. Путают даже носители.`,
        ex: [['It’s a good game. I like its music.', 'Это хорошая игра. Мне нравится её музыка.']],
        tip: `Видите апостроф — читайте «it is». Подходит по смыслу? Значит, it’s. Нет — its.` },
      { t: 'idea', text: `Итог: «чей?» — слово перед предметом, выбираем по хозяину. «Свой» переводим как his / her / their.`,
        rows: [['I → my', 'we → our'], ['he → his', 'she → her'], ['they → their', 'you → your']] }
    ]},

    // ───────────── 6. Всё вместе ─────────────
    { title: 'Всё вместе: I — me — my', steps: [
      { t: 'idea', text: `Три набора — одна таблица. Выбор зависит от роли: делает → кого / кому → чей.`,
        rows: [['кто делает', 'кого / кому', 'чей'], ['I', 'me', 'my'], ['he', 'him', 'his'], ['she', 'her', 'her'], ['we', 'us', 'our'], ['they', 'them', 'their']],
        ex: [['I like my friends, and they like me.', 'Я люблю своих друзей, а они любят меня.'], ['She can help us with our game.', 'Она может помочь нам с нашей игрой.']] },
      { t: 'check', q: 'Kate is my friend. ___ can draw very well.', ru: 'Кейт моя подруга. Она очень хорошо рисует.', o: ['Her', 'She', 'Him'], a: 1,
        why: 'Слово делает действие (кто умеет?) → She.' },
      { t: 'idea', text: `Слово <b>her</b> стоит в двух колонках. Разница простая: если сразу после her идёт предмет — это «чей». Если нет — «её, ей».`,
        rows: [['I like her.', 'Она мне нравится.'], ['I like her game.', 'Мне нравится её игра.']] },
      { t: 'check', q: 'I know Lisa. I like ___.', ru: 'Я знаю Лизу. Она мне нравится.', o: ['she', 'her', 'their'], a: 1,
        why: 'Кто нравится? её → her, слово стоит после like.' },
      { t: 'check', q: 'Скажите: «Они знают его, а он знает их»', o: ['They know him, and he knows them.', 'They know he, and him knows they.', 'Them know him, and he knows they.'], a: 0,
        why: 'Делает → they / he; кого → him / them.' },
      { t: 'idea', text: `Итог урока в одной строке: <b>can</b> + голое слово-действие для всех · делает — I / he / she, кого — me / him / her, чей — my / his / her.`,
        rows: [['I can help you.', 'Я могу тебе помочь.'], ['Can you help me?', 'Можешь мне помочь?'], ['This is my game. I love its music.', 'Это моя игра. Я люблю её музыку.']] }
    ]}
  ];
})();
