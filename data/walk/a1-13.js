// Грамматика по шагам для юнита a1-13: a = «какой-то один», the = «тот самый»; a/an; три причины для the; алгоритм из трёх вопросов; «вообще» без the; go to work / go home / go to the cinema; слова, которые всегда с the.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-13'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: '«Какая-то игра» или «та самая игра»', steps: [
      { t: 'idea', text: `Хотите сказать: «Я купил игру. Игра классная». По-русски «игра» оба раза звучит одинаково. По-английски перед словом стоит маленькое слово-подсказка: <b>a</b> — «какая-то одна», <b>the</b> — «та самая».`,
        lit: [['I', 'я'], ['bought', 'купил'], ['a', '(какую-то одну)'], ['game.', 'игру.'], ['The', '(та самая)'], ['game', 'игра'], ['is great.', 'классная.']],
        ex: [['I bought a game. The game is great.', 'Я купил игру. Игра классная.'], ['I have a cat. The cat is old.', 'У меня есть кот. Кот старый.']] },
      { t: 'idea', text: `<b>a</b> — «какой-то один из многих»: игр на свете много, я купил одну. <b>the</b> — «тот самый, о котором мы оба знаем»: та игра, о которой я только что сказал.`,
        bad: 'I bought a game. A game is great.', good: 'I bought a game. <b>The</b> game is great.',
        tip: `a — это старое слово one («один»). the — почти that («тот»). Хочется сказать «какой-то / один» → a. «Тот самый / этот» → the.` },
      { t: 'check', q: 'I bought a phone. ___ phone is very fast.', ru: 'Я купил телефон. Телефон очень быстрый.', o: ['A', 'The', '—'], a: 1,
        why: 'Телефон уже назвали — во второй фразе это тот самый телефон → the.' },
      { t: 'check', q: 'Скажите: «Можно задать вопрос?»', o: ['Can I ask question?', 'Can I ask a question?', 'Can I ask the question?'], a: 1,
        why: 'Какой-то один вопрос, собеседник его ещё не знает → a. Совсем без слова нельзя.' },
      { t: 'idea', text: `Итог: перед словом-предметом почти всегда стоит подсказка — какой он.`,
        rows: [['a', 'какой-то один из многих', 'I bought a game.'], ['the', 'тот самый, мы оба знаем какой', 'The game is great.']] }
    ]},

    // ───────────── 2. a / an ─────────────
    { title: 'a или an — один из многих', steps: [
      { t: 'idea', text: `Хотите сказать «Она дизайнер». Дизайнеров много, она — одна из них, поэтому по-английски обязательно <b>a</b>: She is <b>a</b> designer. Так же с любой «одной штукой», о которой говорим впервые.`,
        lit: [['She', 'она'], ['is', '(есть)'], ['a', '(одна из многих)'], ['designer.', 'дизайнер.']],
        ex: [['She is a designer.', 'Она дизайнер.'], ['Is there a bank near here?', 'Здесь рядом есть банк?'], ['I need a new laptop.', 'Мне нужен новый ноутбук.']] },
      { t: 'idea', text: `Если слово начинается с гласного <b>звука</b> (а, э, и, о, у), вместо a говорят <b>an</b>: an apple, an old game. Смысл тот же — просто так удобнее произносить.`,
        rows: [['a', 'перед не-гласным звуком', 'a game, a laptop'], ['an', 'перед гласным звуком', 'an apple, an old game'], ['an', 'hour (h не читается)', 'an hour']],
        tip: `Попробуйте сказать «a apple» — два «а» сливаются. Буква n их разделяет: an apple.` },
      { t: 'check', q: 'I’ve got ___ umbrella.', ru: 'У меня есть зонт.', o: ['a', 'an', 'the'], a: 1,
        why: 'umbrella начинается с гласного звука → an.' },
      { t: 'check', q: 'It was ___ good game.', ru: 'Это была хорошая игра.', o: ['a', 'an', '—'], a: 0,
        why: 'Смотрим на первый звук сразу после подсказки: good — не гласный → a. Слово good подсказку не отменяет.' },
      { t: 'idea', text: `a / an — это «один». Поэтому его не бывает перед «много» (chairs) и перед тем, что не считают по штукам (water, music, money — прошлый урок).`,
        bad: 'I need a water. I bought a new chairs.', good: 'I need water. I bought new chairs.',
        tip: `Проверка: можно ли сказать «один …»? «Один стул» — да → a chair. «Одна вода» — нет → water без a.` },
      { t: 'check', q: 'We need ___ milk.', ru: 'Нам нужно молоко.', o: ['a', 'an', '—'], a: 2,
        why: 'Молоко не считают по штукам, «одно молоко» не скажешь → без a.' },
      { t: 'idea', text: `Итог: a / an = «один какой-то». Только с одной штукой, которую можно посчитать.`,
        rows: [['одна штука, впервые', 'a laptop, an apple'], ['много', 'laptops — без a'], ['не по штукам', 'water, music — без a']] }
    ]},

    // ───────────── 3. the ─────────────
    { title: 'the — когда понятно, о каком речь', steps: [
      { t: 'idea', text: `<b>the</b> ставим, когда и вы, и собеседник знаете, о каком именно предмете речь. Причина первая: <b>уже говорили</b> о нём.`,
        lit: [['I bought', 'я купил'], ['a jacket', 'куртку (какую-то)'], ['and a hat.', 'и шапку.'], ['The jacket', 'куртка (та самая)'], ['was cheap.', 'была дешёвая.']],
        ex: [['I bought a jacket and a hat. The jacket was cheap.', 'Я купил куртку и шапку. Куртка была дешёвая.'], ['We stayed in a hotel. The hotel was nice.', 'Мы жили в отеле. Отель был хороший.']] },
      { t: 'idea', text: `Причина вторая: <b>он тут один</b>, понятно из ситуации. В комнате одна дверь и один свет, в квартире одна кухня — про них всегда the.`,
        ex: [['Close the door, please.', 'Закрой дверь, пожалуйста.'], ['Where’s Max? — In the kitchen.', 'Где Макс? — На кухне.'], ['Turn off the light.', 'Выключи свет.']],
        tip: `Так же с городом: the station, the airport, the city centre — в городе они одни, понятно какие.` },
      { t: 'check', q: 'Can you open ___ window? (в комнате одно окно)', ru: 'Можешь открыть окно?', o: ['a', 'the', '—'], a: 1,
        why: 'Окно одно, оба понимают какое → the.' },
      { t: 'idea', text: `Причина третья: <b>уточнили словами</b>, какой именно. «Имя этой улицы» — у улицы одно имя; «конец фильма» — конец один: the name of this street, the end of the film.`,
        ex: [['What’s the name of this street?', 'Как называется эта улица?'], ['I didn’t like the end of the film.', 'Мне не понравился конец фильма.'], ['The boss of our office is nice.', 'Начальник нашего офиса хороший.']],
        tip: `the можно ставить перед чем угодно: the game, the games, the music in this game. Главное — понятно, какие именно.` },
      { t: 'check', q: 'Who is ___ man in this photo?', ru: 'Кто этот мужчина на этом фото?', o: ['a', 'the', '—'], a: 1,
        why: 'Уточнили словами: тот, что на этом фото → the.' },
      { t: 'check', q: 'Скажите в гостях: «Где ванная?»', o: ['Where is a bathroom?', 'Where is the bathroom?', 'Where is bathroom?'], a: 1,
        why: 'В квартире ванная одна — понятно какая → the. Совсем без подсказки нельзя.' },
      { t: 'idea', text: `Итог: the = «тот самый». Три причины, почему собеседник понимает, какой:`,
        rows: [['уже говорили', 'I bought a game. The game is great.'], ['он тут один', 'Close the door.'], ['уточнили словами', 'the end of the film']] }
    ]},

    // ───────────── 4. Алгоритм ─────────────
    { title: 'a, the или ничего — три вопроса', steps: [
      { t: 'idea', text: `Не надо «чувствовать». Перед словом задайте себе три вопроса по порядку. Вопрос 1: <b>уже есть «хозяин»</b> — my, your, this, Max’s, some, two? Тогда подсказка не нужна: хозяин уже всё сказал.`,
        bad: 'It’s the my phone. This is a Kate’s bag.', good: 'It’s my phone. This is Kate’s bag.',
        ex: [['This is my laptop.', 'Это мой ноутбук.'], ['I like this game.', 'Мне нравится эта игра.'], ['I have two cats.', 'У меня два кота.']] },
      { t: 'check', q: 'It’s ___ his laptop.', ru: 'Это его ноутбук.', o: ['a', 'the', '—'], a: 2,
        why: 'Есть his — «хозяин» уже стоит, a / the не нужны.' },
      { t: 'idea', text: `Вопрос 2: <b>понятно, какой именно</b> (уже говорили / он тут один / уточнили)? → the. Вопрос 3: непонятно какой, но это <b>одна штука</b>, которую можно посчитать? → a. Иначе — ничего.`,
        rows: [['1. есть my / this / two?', '→ ничего', 'my game'], ['2. понятно какой?', '→ the', 'the game'], ['3. одна штука, какая-то?', '→ a / an', 'a game'], ['нет: много или не по штукам', '→ ничего', 'games, music']] },
      { t: 'idea', text: `Прогоним одну историю через три вопроса. Смотрите, как одно слово laptop каждый раз получает разную подсказку.`,
        rows: [['I bought a laptop.', '3: одна штука, какая-то → a'], ['The laptop is fast.', '2: уже говорили → the'], ['My laptop is old.', '1: есть my → ничего']],
        tip: `«Ноутбуки дорогие» (все вообще, много) — Laptops are expensive: подсказки нет.` },
      { t: 'check', q: 'I need ___ new phone. (какой-нибудь)', ru: 'Мне нужен новый телефон.', o: ['a', 'the', '—'], a: 0,
        why: 'Хозяина нет, какой именно — непонятно, но это одна штука → a.' },
      { t: 'check', q: 'Скажите: «Открой дверь» (в комнате)', o: ['Open a door.', 'Open the door.', 'Open door.'], a: 1,
        why: 'Хозяина нет; дверь в комнате одна, понятно какая → the.' },
      { t: 'idea', text: `Итог: три вопроса по порядку — и ответ готов.`,
        rows: [['есть my / this / two', 'ничего'], ['понятно какой', 'the'], ['одна штука, какая-то', 'a / an, иначе ничего']] }
    ]},

    // ───────────── 5. «Вообще» — без the ─────────────
    { title: '«Я люблю музыку» — без the', steps: [
      { t: 'idea', text: `Хотите сказать «Я люблю музыку». Русскому хочется поставить the — но нет: когда речь о чём-то <b>вообще</b> (вся музыка, все игры), подсказки не нужно. I like music.`,
        bad: 'I like the music and the games.', good: 'I like music and games.',
        ex: [['I like music.', 'Я люблю музыку.'], ['Games are fun.', 'Игры — это весело.'], ['I don’t like cold weather.', 'Я не люблю холодную погоду.']] },
      { t: 'idea', text: `Сравните: «вообще» — без the, «эти конкретные» — the. Разница только в том, обо всех ли речь.`,
        rows: [['I like music.', 'The music in this game is great.'], ['Cats are nice.', 'The cats in this house are big.'], ['I like games.', 'The games on my phone are old.']],
        tip: `Если можно добавить «вообще, все» — the не ставим. Если «вот эти» — the.` },
      { t: 'check', q: '___ dogs are nice. (все собаки)', ru: 'Собаки хорошие.', o: ['The', 'A', '—'], a: 2,
        why: 'Собаки вообще, все → без подсказки.' },
      { t: 'idea', text: `Тоже без the: спорт и игры (play football, play chess), языки (I speak English), еда по времени дня (have breakfast, have lunch) и next / last + время (next week, last summer).`,
        bad: 'I play the football. See you the next week.', good: 'I play football. See you next week.',
        tip: `Инструмент — с the, спорт — без: play <b>the</b> guitar, но play football. И watch TV — тоже без the.` },
      { t: 'check', q: 'I had ___ lunch with Tom.', ru: 'Я обедал с Томом.', o: ['a', 'the', '—'], a: 2,
        why: 'breakfast, lunch, dinner — без подсказки: have lunch.' },
      { t: 'check', q: 'Do you play ___ tennis?', ru: 'Ты играешь в теннис?', o: ['a', 'the', '—'], a: 2,
        why: 'Спорт — без the: play tennis. А вот play the guitar — с the.' },
      { t: 'idea', text: `Итог: обо всём вообще — без the.`,
        rows: [['вообще', 'I like music. Games are fun.'], ['спорт, языки, еда по времени', 'play football, speak English, have lunch'], ['next / last + время', 'next week, last summer']] }
    ]},

    // ───────────── 6. go to work, go home ─────────────
    { title: 'go to work, go home, go to the cinema', steps: [
      { t: 'idea', text: `Хотите сказать «Я иду на работу». Некоторые места называют по их главному делу: работа — работать, кровать — спать, школа — учиться. Про них говорят <b>без the</b>: go to work, go to bed.`,
        lit: [['I', 'я'], ['go', 'иду'], ['to', 'на'], ['work.', 'работу.']],
        ex: [['I go to work at nine.', 'Я иду на работу в девять.'], ['I went to bed at midnight (в полночь).', 'Я лёг спать в полночь.'], ['His dad is in hospital.', 'Его папа в больнице.']] },
      { t: 'idea', text: `Слово home ещё короче: перед ним нет ни the, ни to. «Я иду домой» — I’m going home.`,
        bad: 'I’m going to home. I go to the work.', good: 'I’m going home. I go to work.',
        tip: `Пары «куда / где»: go to work — at work, go to school — at school, go home — at home, go to bed — in bed.` },
      { t: 'check', q: 'I’m tired. I’m going ___.', ru: 'Я устал. Я иду домой.', o: ['to home', 'home', 'to the home'], a: 1,
        why: 'go home — без to и без the.' },
      { t: 'check', q: 'Скажите: «Она на работе»', o: ['She is at the work.', 'She is at work.', 'She is at a work.'], a: 1,
        why: 'Работа как дело, а не место → at work, без подсказки.' },
      { t: 'idea', text: `А обычные места города — <b>с the</b>: go to the cinema, the bank, the station, the airport. К врачу — тоже: go to the doctor, go to the dentist.`,
        ex: [['We went to the cinema last night.', 'Вчера вечером мы ходили в кино.'], ['I need to go to the dentist.', 'Мне нужно к стоматологу.'], ['Take a taxi to the airport.', 'Возьми такси до аэропорта.']],
        tip: `Одна фраза-якорь со всем правилом: I go to work, then I go to the cinema, then I go home and go to bed.` },
      { t: 'check', q: 'She is ___ bank. She needs some money.', ru: 'Она в банке. Ей нужны деньги.', o: ['at', 'at the', 'in a'], a: 1,
        why: 'Банк — обычное место в городе → at the bank.' },
      { t: 'idea', text: `Итог: место как «дело» — без the, home — вообще без to, обычные места города — с the.`,
        rows: [['работа, школа, кровать', 'go to work, go to school, go to bed'], ['дом', 'go home, at home'], ['кино, банк, вокзал, врач', 'go to the cinema, go to the doctor']] }
    ]},

    // ───────────── 7. Всегда с the ─────────────
    { title: 'Слова, которые всегда с the', steps: [
      { t: 'idea', opt: true, text: `Есть вещи, которые на всех одни: солнце, небо, мир. Собеседник всегда понимает, о каком речь — поэтому с ними the: the sun, the sky, the world.`,
        ex: [['The sun is hot today.', 'Сегодня солнце жаркое.'], ['It’s the best game in the world.', 'Это лучшая игра в мире.'], ['I listen to the radio.', 'Я слушаю радио.']],
        tip: `Ещё так: the police (полиция), the sea (море), the internet.` },
      { t: 'idea', opt: true, text: `«Тот же самый», «лучший», «конец», «верх» — по смыслу единственные, поэтому тоже с the: the same, the best, the end, the top, the middle.`,
        bad: 'We live in same city. Who is best player?', good: 'We live in <b>the</b> same city. Who is <b>the</b> best player?',
        ex: [['We work in the same office.', 'Мы работаем в одном и том же офисе.'], ['Write your name at the top.', 'Напишите имя наверху.']] },
      { t: 'check', q: 'We live in ___ same street.', ru: 'Мы живём на одной и той же улице.', o: ['a', 'the', '—'], a: 1,
        why: 'the same — всегда с the.' },
      { t: 'idea', text: `Итог юнита в одной строке: есть my / this → ничего · понятно какой → the · один из многих → a / an · много или вообще → ничего · go to work, go home, но go to the cinema.`,
        rows: [['the sun, the world, the same, the best', 'всегда the'], ['play the guitar', 'the'], ['play football, watch TV', 'без the']] }
    ]}
  ];
})();
