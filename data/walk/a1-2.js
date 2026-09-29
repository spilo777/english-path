// Грамматика по шагам для юнита a1-2: not, Are you…?, What/Where/Who/How, this/that/these/those, множественное число, a/an.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-2'); if (!u) return;
  u.walk = [
    // ───────────── 1. not ─────────────
    { title: 'Как сказать «не»', steps: [
      { t: 'idea', text: `Хотите сказать «Я не устал». В английском «не» — это слово <b>not</b>, и стоит оно сразу после am / is / are.`,
        lit: [['I', 'я'], ['am', '(есть)'], ['not', 'не'], ['tired', 'уставший']],
        ex: [['I am not tired.', 'Я не устал.'], ['She is not at home.', 'Она не дома.'], ['We are not late.', 'Мы не опоздали.']],
        tip: `Русское «нет дома», «нет здесь» — это тоже is + not: Tom is not at home. — Тома нет дома. Отдельного слова для «нет» не нужно.` },
      { t: 'check', q: 'Скажите: «Он не дизайнер»', o: ['He not a designer.', 'He is not a designer.', 'He is a designer not.'], a: 1,
        why: 'not стоит сразу после is. Без is предложения не бывает.' },
      { t: 'idea', text: `В разговоре not почти всегда сжимают: is not → <b>isn’t</b>, are not → <b>aren’t</b>. Смысл тот же.`,
        rows: [['is not', 'isn’t', 'He isn’t here.'], ['are not', 'aren’t', 'They aren’t late.']],
        tip: `Апостроф ’ показывает, что букву «o» выкинули. Есть и второй способ — he’s not, they’re not: It’s not expensive. Оба верны.` },
      { t: 'check', q: 'She ___ a student.', ru: 'Она не студентка.', o: ['isn’t', 'aren’t', 'not'], a: 0, why: 'she → is → isn’t.' },
      { t: 'idea', text: `С «я» так сжать нельзя — слова «amn’t» в английском нет. Говорят <b>I’m not</b>.`,
        bad: 'I amn’t hungry.', good: 'I<b>’m not</b> hungry.',
        ex: [['I’m not tired.', 'Я не устал.'], ['I’m not a student.', 'Я не студент.'], ['I’m not from London.', 'Я не из Лондона.']] },
      { t: 'check', q: 'I ___ at work.', ru: 'Я не на работе.', o: ['amn’t', '’m not', 'isn’t'], a: 1, why: 'Формы amn’t нет: I am not = I’m not.' },
      { t: 'check', q: 'Какой вариант НЕправильный?', o: ['It isn’t cold.', 'It’s not cold.', 'It not cold.'], a: 2,
        why: 'isn’t и ’s not — оба верны, а просто not без is — нет.' },
      { t: 'idea', text: `Итог: «не» = <b>not</b> сразу после am / is / are. В разговоре — коротко:`,
        rows: [['I am not', 'I’m not'], ['he / she / it is not', 'isn’t'], ['you / we / they are not', 'aren’t']] }
    ]},

    // ───────────── 2. Are you…? ─────────────
    { title: 'Вопрос: Are you…? и короткий ответ', steps: [
      { t: 'idea', text: `Хотите спросить «Ты дома?». По-русски мы просто меняем голос. По-английски am / is / are <b>прыгает в начало</b>.`,
        lit: [['Are', '(есть)'], ['you', 'ты'], ['at home', 'дома'], ['?', '']],
        ex: [['Are you at home?', 'Ты дома?'], ['Is it expensive?', 'Это дорого?'], ['Am I late?', 'Я опоздал?']],
        bad: 'You are tired?', good: '<b>Are you</b> tired?' },
      { t: 'idea', text: `«Кто» может быть длинным: your friend, my cat, Tom and Anna. Весь этот кусок стоит сразу после is / are и не разрывается.`,
        lit: [['Is', '(есть)'], ['your cat', 'твой кот'], ['at home', 'дома'], ['?', '']],
        bad: 'Is at home your cat?', good: 'Is <b>your cat</b> at home?',
        ex: [['Is your friend a designer?', 'Твой друг дизайнер?'], ['Are Tom and Anna here?', 'Том и Анна здесь?']] },
      { t: 'check', q: 'Скажите: «Твой друг дизайнер?»', o: ['Your friend is a designer?', 'Is your friend a designer?', 'Is a designer your friend?'], a: 1,
        why: 'Is — в начало, потом your friend целиком, потом остальное.' },
      { t: 'idea', text: `Отвечать целым предложением не нужно. Короткий ответ — это «да / нет» + кто + то же самое am / is / are.`,
        rows: [['Are you OK?', 'Yes, I am.', 'No, I’m not.'], ['Is it new?', 'Yes, it is.', 'No, it isn’t.'], ['Are they here?', 'Yes, they are.', 'No, they aren’t.']],
        tip: `В ответе «да» в конце не сокращаем: Yes, I <b>am</b>. Yes, it <b>is</b>. — а не «Yes, I’m».` },
      { t: 'check', q: 'Are you tired? — Yes, ___.', ru: 'Ты устал? — Да.', o: ['I’m', 'I am', 'I are'], a: 1, why: 'В конце «да»-ответа — полное I am.' },
      { t: 'check', q: 'Is Tom at work? — No, ___.', ru: 'Том на работе? — Нет.', o: ['he isn’t', 'he not', 'he aren’t'], a: 0, why: 'Tom → he → is → he isn’t (или he’s not).' },
      { t: 'idea', text: `Итог: в вопросе am / is / are идёт первым, а «кто» — сразу за ним. Короткий ответ — тем же словом.`,
        rows: [['Вопрос', 'Are you at home?'], ['Да', 'Yes, I am.'], ['Нет', 'No, I’m not.']] }
    ]},

    // ───────────── 3. What / Where / Who / How ─────────────
    { title: 'Где? Что? Кто? Как?', steps: [
      { t: 'idea', text: `Хотите спросить «Где мой телефон?». Слово «где» — <b>where</b> — ставим в самое начало, а дальше всё как в обычном вопросе: is + кто.`,
        lit: [['Where', 'где'], ['is', '(есть)'], ['my phone', 'мой телефон'], ['?', '']],
        rows: [['what', 'что, какой', 'What is this?'], ['where', 'где', 'Where is my bag?'], ['who', 'кто', 'Who is that man?']],
        ex: [['How are you?', 'Как ты? Как дела?']] },
      { t: 'check', q: '___ is that woman? — She is my teacher.', ru: '___ та женщина? — Она моя учительница.', o: ['What', 'Who', 'Where'], a: 1, why: 'Спрашиваем про человека → who.' },
      { t: 'idea', text: `Самая частая ошибка — после слова-вопроса забыть переставить is / are вперёд. Порядок всегда один: слово-вопрос → is / are → кто.`,
        bad: 'How old you are?', good: 'How old <b>are you</b>?',
        ex: [['Where are you?', 'Где ты?'], ['What is your name?', 'Как тебя зовут? (дословно «что твоё имя»)']] },
      { t: 'check', q: 'Скажите: «Где мои книги?»', o: ['Where my books are?', 'Where are my books?', 'Where is my books?'], a: 1, why: 'Where → are (книг много) → my books.' },
      { t: 'idea', text: `Три вопроса стоит выучить целиком — они звучат не по-русски. Обратите внимание: from — в самом конце.`,
        rows: [['Where are you from?', 'Откуда ты?'], ['How old are you?', 'Сколько тебе лет? («насколько ты старый»)'], ['I am twenty.', 'Мне двадцать. («я есть двадцать»)']],
        tip: `Возраст — тоже через am / is / are, а не «мне»: I am twenty. She is ten.` },
      { t: 'check', q: 'Правильный вопрос:', o: ['Where you are from?', 'Where are you from?', 'From where you are?'], a: 1, why: 'Where + are + you, а from уходит в конец.' },
      { t: 'idea', text: `В разговоре слово-вопрос сливается с is: <b>what’s, where’s, who’s</b>. Это то же самое, только быстрее.`,
        ex: [['What’s this?', 'Что это?'], ['Where’s Anna?', 'Где Анна?'], ['Who’s that?', 'Кто это (там)?']] },
      { t: 'idea', text: `Итог: слово-вопрос → is / are → кто. From — в конце.`,
        rows: [['Where is my phone?', 'Где мой телефон?'], ['Who is that man?', 'Кто тот мужчина?'], ['Where are you from?', 'Откуда ты?']] }
    ]},

    // ───────────── 4. this / that / these / those ─────────────
    { title: 'Этот, тот, эти, те', steps: [
      { t: 'idea', text: `Хотите сказать «Это мой телефон». Если предмет рядом — <b>this</b>. Если вон там, далеко — <b>that</b>.`,
        lit: [['This', 'это'], ['is', '(есть)'], ['my phone', 'мой телефон']],
        ex: [['This is my room.', 'Это моя комната.'], ['That is a big house.', 'Вон то — большой дом.'], ['Is that your car?', 'Это (там) твоя машина?']] },
      { t: 'check', q: 'Сумка лежит вон там. Скажите: «Это твоя сумка?»', o: ['Is this your bag?', 'Is that your bag?', 'That your bag?'], a: 1, why: 'Далеко → that; is — в начало вопроса.' },
      { t: 'idea', text: `Если предметов много, слова другие: рядом — <b>these</b> (эти), далеко — <b>those</b> (те).`,
        rows: [['', 'рядом', 'далеко'], ['один', 'this', 'that'], ['много', 'these', 'those']],
        ex: [['These books are new.', 'Эти книги новые.'], ['Those people are my friends.', 'Те люди — мои друзья.']],
        tip: `Длинные слова — для многого: th-ese, th-ose длиннее, чем this и that. Больше букв — больше предметов.` },
      { t: 'check', q: '___ are my friends. (вон там, много)', ru: 'Те люди — мои друзья.', o: ['That', 'These', 'Those'], a: 2, why: 'Далеко + много → those.' },
      { t: 'idea', text: `Эти четыре слова можно ставить прямо перед предметом: this chair, those cats. Если предметов много — слово тоже «многое».`,
        bad: 'This books are new.', good: '<b>These</b> books are new.',
        ex: [['This chair is old.', 'Этот стул старый.'], ['That car is expensive.', 'Та машина дорогая.'], ['Those cats are big.', 'Те коты большие.']] },
      { t: 'check', q: '___ apples are cheap. (у меня в руках)', ru: 'Эти яблоки дешёвые.', o: ['This', 'These', 'Those'], a: 1, why: 'Рядом + много → these.' },
      { t: 'idea', text: `Три живые ситуации, где this и that звучат не так, как русское «это». Учите их готовыми фразами.`,
        rows: [['Знакомим людей', 'Anna, this is Max.'], ['По телефону: я — this, вы — that', 'Hi, this is Ilya. Is that Tom?'], ['Ответ на чужие слова', 'Oh, that’s nice!']] },
      { t: 'check', q: 'Знакомим: «Tom, ___ is Anna.»', ru: 'Том, это Анна.', o: ['this', 'these', 'that'], a: 0, why: 'Представляем одного человека рядом → this is…' },
      { t: 'idea', text: `Итог: this / that — один, these / those — много; this / these — рядом, that / those — далеко.`,
        rows: [['This is my phone.', 'Это мой телефон.'], ['These books are new.', 'Эти книги новые.'], ['Those people are nice.', 'Те люди приятные.']] }
    ]},

    // ───────────── 5. Много: -s ─────────────
    { title: 'Один и много: book → books', steps: [
      { t: 'idea', text: `Хотите сказать «книги», а не «книга». Добавляем в конец слова <b>-s</b> — и всё.`,
        rows: [['book → books', 'книга → книги'], ['phone → phones', 'телефон → телефоны'], ['car → cars', 'машина → машины']],
        tip: `Как русское «-ы / -и», только почти всегда одинаково: одна буква s.` },
      { t: 'idea', text: `Много предметов — это «они» (they). А после they, как вы помните, всегда <b>are</b>.`,
        bad: 'My books is on the table.', good: 'My books <b>are</b> on the table.',
        ex: [['These apples are cheap.', 'Эти яблоки дешёвые.'], ['My friends are here.', 'Мои друзья здесь.']] },
      { t: 'check', q: 'Скажите: «Мои книги новые»', o: ['My book are new.', 'My books are new.', 'My books is new.'], a: 1, why: 'Книг много → books, а много → are.' },
      { t: 'idea', text: `Если слово кончается на <b>s, sh, ch, x</b>, одну s не выговорить — добавляем <b>-es</b>: box → boxes. Появляется лишний слог «из».`,
        rows: [['box → boxes', 'коробка → коробки'], ['bus → buses', 'автобус → автобусы']] },
      { t: 'check', q: 'one box — two ___', ru: 'одна коробка — две коробки', o: ['boxs', 'boxes', 'boxies'], a: 1, why: 'После x добавляем -es.' },
      { t: 'idea', text: `Слово на <b>y</b>: если перед y не гласная (не a, e, i, o, u) — y меняется на <b>ies</b>: city (город) → cities. А если гласная — просто s: boy (мальчик) → boys.`,
        rows: [['city → cities', 't + y → ies'], ['boy → boys', 'o + y → просто s']] },
      { t: 'check', q: 'one city — two ___', ru: 'один город — два города', o: ['citys', 'cityes', 'cities'], a: 2, why: 'Перед y стоит t (не гласная) → ies.' },
      { t: 'idea', opt: true, text: `Редкость: несколько слов на <b>f / fe</b> меняют её на <b>ves</b>: knife (нож) → knives, wife (жена) → wives. Таких слов мало — встретите, узнаете.`,
        rows: [['knife → knives', 'нож → ножи'], ['wife → wives', 'жена → жёны']] },
      { t: 'idea', text: `Итог: много = <b>-s</b> (после s, sh, ch, x — -es), и дальше <b>are</b>.`,
        rows: [['books, phones', '+ s'], ['boxes, buses', '+ es'], ['My books are new.', 'много → are']] }
    ]},

    // ───────────── 6. Особые слова ─────────────
    { title: 'Особые слова: men, children, people', steps: [
      { t: 'idea', text: `Несколько очень частых слов делают «много» без -s — меняется само слово. Их просто запоминают, как русское «человек → люди».`,
        rows: [['man → men', 'мужчина → мужчины'], ['woman → women', 'женщина → женщины'], ['child → children', 'ребёнок → дети']],
        tip: `women читается «уимин» — меняется звук в начале, а не в конце.` },
      { t: 'check', q: 'one child — two ___', ru: 'один ребёнок — двое детей', o: ['childs', 'childes', 'children'], a: 2, why: 'Особое слово: child → children.' },
      { t: 'idea', text: `<b>people</b> (люди) — это уже «много», хотя буквы s нет. Значит, после него <b>are</b>, и второе «много» ему не нужно.`,
        bad: 'These people is nice. / These peoples are nice.', good: 'These people <b>are</b> nice.',
        ex: [['Those people are my friends.', 'Те люди — мои друзья.'], ['People are nice here.', 'Люди здесь приятные.']] },
      { t: 'check', q: 'Those people ___ my friends.', ru: 'Те люди — мои друзья.', o: ['is', 'are', 'am'], a: 1, why: 'people — много (они) → are.' },
      { t: 'idea', opt: true, text: `Ещё несколько особых слов — на будущее. Foot (ступня) → feet, tooth (зуб) → teeth. А fish (рыба) и sheep (овца) вообще не меняются: one fish — two fish.`,
        rows: [['foot → feet', 'ступня → ступни'], ['tooth → teeth', 'зуб → зубы'], ['fish → fish, sheep → sheep', 'не меняются']] },
      { t: 'idea', opt: true, text: `Редкость: jeans (джинсы) и glasses (очки) в английском всегда «много», даже если вещь одна — как и по-русски. Поэтому с ними <b>are</b>.`,
        ex: [['My jeans are new.', 'Мои джинсы новые.'], ['Where are my glasses?', 'Где мои очки?']] },
      { t: 'idea', text: `Итог: четыре слова без -s, и после всех них — are.`,
        rows: [['man → men, woman → women', 'мужчины, женщины'], ['child → children', 'дети'], ['people', 'люди (уже много)']] }
    ]},

    // ───────────── 7. a / an ─────────────
    { title: 'Маленькое слово a: «один»', steps: [
      { t: 'idea', text: `Хотите сказать «Она учитель». Перед одним человеком или предметом англичане ставят <b>a</b> — остаток слова one («один»). На русский оно не переводится.`,
        lit: [['She', 'она'], ['is', '(есть)'], ['a', '(один)'], ['teacher', 'учитель']],
        ex: [['She is a teacher.', 'Она учитель.'], ['This is a laptop.', 'Это ноутбук.'], ['It’s a big house.', 'Это большой дом.']] },
      { t: 'check', q: 'Скажите: «Макс дизайнер»', o: ['Max is designer.', 'Max is a designer.', 'Max a designer.'], a: 1, why: 'Один человек, говорим кто он → a designer. И is не выкидываем.' },
      { t: 'idea', text: `Если следующее слово начинается с гласного звука (a, e, i, o, u), a превращается в <b>an</b> — так легче выговорить. Смотрим на самое первое слово после.`,
        rows: [['a', 'a phone, a bag, a new car'], ['an', 'an apple, an old car, an expensive bag']],
        tip: `Не «a apple» — два «а» подряд сливаются, поэтому между ними вставили n.` },
      { t: 'check', q: 'It is ___ old house.', ru: 'Это старый дом.', o: ['a', 'an', '—'], a: 1, why: 'old начинается с гласного звука → an.' },
      { t: 'idea', text: `Раз a значит «один», с «многими» его не бывает. И если перед предметом уже стоит my, your, this, that — a тоже не нужно.`,
        bad: 'These are a books. / This is a my bag.', good: 'These are books. / This is my bag.',
        ex: [['They are apples.', 'Это яблоки.'], ['That is your phone.', 'Это твой телефон.']] },
      { t: 'check', q: 'Those are ___ cats.', ru: 'Это коты.', o: ['a', 'an', '—'], a: 2, why: 'cats — много, a / an не ставим.' },
      { t: 'idea', opt: true, text: `Редкость: важен <b>звук</b>, а не буква. Hour (час) читается «ауэр», h молчит → an hour. University (университет) звучит «юни…» → a university.`,
        rows: [['an hour', 'h не читается'], ['a university', 'звучит «ю»']] },
      { t: 'idea', text: `Итог: один предмет или человек → <b>a</b> (перед гласным звуком — <b>an</b>). Много или my / your / this — без a.`,
        rows: [['a phone, a teacher', 'один'], ['an apple, an old car', 'один, гласный звук'], ['books, my bag', 'без a']] }
    ]}
  ];
})();
