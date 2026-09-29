// Грамматика по шагам для юнита b1-19: одно или много — брюки, новости, -ics, a pair of; группы людей, police, people, суммы и сроки (series — opt); noun + noun (a phone case, a two-hour meeting); 's или of, апостроф, yesterday’s; myself — где не нужен, «сам», each other; a friend of mine, my own, on my own / by myself; there или it (there must be, there’s bound to be, It’s hard to…); типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'b1-19'); if (!u) return;
  u.walk = [
    // ───────────── 1. Брюки, новости, физика ─────────────
    { title: '«Новости хорошие» — где английский считает по-своему', steps: [
      { t: 'idea', text: `Хотите сказать «Мои наушники сломались». По-русски «наушники» — много, и по-английски тоже: <b>headphones are</b>. Вещи «из двух половинок» всегда во множественном числе.`,
        ex: [['My headphones are broken.', 'Мои наушники сломались.'], ['These jeans are too long.', 'Эти джинсы слишком длинные.'], ['Where are the scissors? I can’t find them.', 'Где ножницы? Не могу их найти.']],
        tip: `Так же: trousers (брюки), shorts, pyjamas, glasses (очки). Две штанины, два стекла — значит are и them.` },
      { t: 'idea', text: `А «одни очки», «новые джинсы» — без a. Если очень нужно посчитать, говорим <b>a pair of</b> — «пара».`,
        lit: [['a pair of', 'пара (одна штука)'], ['glasses', 'очков']],
        bad: 'I bought a new jeans.', good: 'I bought new jeans. / I bought <b>a new pair of</b> jeans.' },
      { t: 'check', q: 'My glasses ___ on the desk, I think.', ru: 'Мои очки, кажется, на столе.', o: ['is', 'are', 'am'], a: 1,
        why: 'glasses — вещь из двух половинок → are.' },
      { t: 'idea', text: `Теперь наоборот. «Новости хорошие» — по-русски много, а по-английски <b>news is</b>: это одна порция информации. Так же слова на -ics: <b>maths, physics, politics</b> — одно занятие, is.`,
        ex: [['The news is good.', 'Новости хорошие.'], ['Maths was my worst subject at school.', 'Математика была моим худшим предметом.'], ['Politics doesn’t interest me at all.', 'Политика меня вообще не интересует.']],
        bad: 'The news are bad.', good: 'The news <b>is</b> bad.',
        tip: `Не меняются вообще: <b>series</b> (сериал), <b>species</b> (вид), <b>means</b> (способ): a great series — three Korean series.` },
      { t: 'check', q: 'The news ___ really bad today.', ru: 'Новости сегодня очень плохие.', o: ['is', 'are', 'were'], a: 0,
        why: 'news — одна порция информации → is. И today — значит сейчас, не were.' },
      { t: 'idea', text: `Итог: не верьте русскому числу — смотрите, как видит англичанин.`,
        rows: [['jeans, glasses, headphones, scissors', 'are, them; одна штука — a pair of'], ['news, maths, politics', 'is, it']] }
    ]},

    // ───────────── 2. Люди, полиция, суммы ─────────────
    { title: '«Полиция уже едет», «Два часа — это долго»', steps: [
      { t: 'idea', text: `«Полиция едет» — по-русски одна полиция. А по-английски <b>police</b> — это много людей, поэтому всегда <b>are</b>. Одного человека зовут <b>a police officer</b>.`,
        ex: [['The police are on their way.', 'Полиция уже едет.'], ['The police are looking for the driver.', 'Полиция ищет водителя.'], ['A police officer asked me for my passport.', 'Полицейский попросил мой паспорт.']],
        bad: 'The police is here. A police asked me.', good: 'The police <b>are</b> here. A <b>police officer</b> asked me.' },
      { t: 'check', q: 'Скажите: «Меня остановил полицейский»', o: ['A police stopped me.', 'A police officer stopped me.', 'A polices stopped me.'], a: 1,
        why: 'Один человек — a police officer. Слово police с a не бывает.' },
      { t: 'idea', text: `Группы людей — <b>team, staff</b> (персонал), <b>family, band, crew, audience</b> — бывают и с is (группа как одно целое), и с are (люди внутри). В британском английском are очень частое.`,
        ex: [['The staff here are really friendly.', 'Персонал здесь очень дружелюбный.'], ['Our team is / are playing in the final tonight.', 'Наша команда сегодня играет в финале.'], ['The audience were laughing all through the show.', 'Зрители смеялись всё шоу.']],
        tip: `И ещё: person → <b>people</b>, не persons. They’re really nice people.` },
      { t: 'idea', text: `Теперь наоборот. «Два часа — это долго»: часов много, но это один срок, поэтому <b>is</b>. Так же деньги и расстояние — одна «порция».`,
        ex: [['Two hours is too long for a meeting.', 'Два часа — слишком долго для встречи.'], ['Three hundred dollars is a lot for a keyboard.', 'Триста долларов — много за клавиатуру.'], ['Ten kilometres isn’t far by bike.', 'Десять километров на велосипеде — недалеко.']] },
      { t: 'check', q: 'Fifty dollars ___ too much for a skin in a game.', ru: 'Пятьдесят долларов — слишком много за скин в игре.', o: ['is', 'are', 'have'], a: 0,
        why: 'Сумма денег — одно целое → is.' },
      { t: 'idea', text: `Итог: считаем по смыслу, а не по виду слова.`,
        rows: [['police, people', 'всегда are'], ['team, staff, family', 'is или are'], ['деньги, время, расстояние', 'is (одно целое)']] }
    ]},

    // ───────────── 3. Noun + noun ─────────────
    { title: '«Чехол для телефона» — два слова-предмета подряд', steps: [
      { t: 'idea', text: `Хотите сказать «чехол для телефона» или «игровое кресло». По-русски меняем слово: «игровой», «для телефона». По-английски просто кладём два слова-предмета рядом.`,
        lit: [['a phone', '(какой? для телефона)'], ['case', 'чехол']],
        ex: [['a phone case', 'чехол для телефона'], ['my work laptop', 'мой рабочий ноутбук'], ['a birthday present', 'подарок на день рождения']] },
      { t: 'idea', text: `Главное слово — всегда <b>последнее</b>. Первое только отвечает «какой? для чего?». Читайте с конца: a game engine — «движок… какой? игровой».`,
        ex: [['a design course', 'курс по дизайну'], ['a gaming chair', 'кресло для игр (-ing = «для чего»)'], ['a shoe shop', 'обувной магазин']],
        bad: 'I went to a shoes shop.', good: 'I went to a <b>shoe</b> shop.',
        tip: `Первое слово обычно без -s, даже если смысл «много»: в магазине много туфель, но a shoe shop.` },
      { t: 'check', q: 'Скажите: «чехол для телефона»', o: ['a case phone', 'a phone case', 'a phones case'], a: 1,
        why: 'Главное слово (case) — в конце, первое — без -s.' },
      { t: 'idea', text: `Число тоже может стать «каким?». Тогда пишем через дефис и <b>без -s</b>: встреча какая? двухчасовая — a two-hour meeting. Но просто число — с -s: two hours.`,
        rows: [['a two-hour meeting', 'The meeting lasted two hours.'], ['a ten-minute break', 'We had a break for ten minutes.'], ['a six-year-old boy', 'He’s six years old.']],
        bad: 'We have a two-hours meeting.', good: 'We have a <b>two-hour</b> meeting.' },
      { t: 'check', q: 'It’s a ___ flight from Moscow to Sochi.', ru: 'Из Москвы в Сочи — двухчасовой перелёт.', o: ['two-hour', 'two-hours', 'two hours'], a: 0,
        why: 'Число перед словом-предметом → через дефис и без -s.' },
      { t: 'idea', text: `Не путайте: <b>a coffee cup</b> — кофейная чашка (может быть пустой), а <b>a cup of coffee</b> — чашка с кофе.`, opt: true,
        ex: [['a pizza box', 'коробка из-под пиццы'], ['a box of pizza', 'коробка с пиццей']],
        tip: `Слитно или раздельно (keyboard, screenshot, но phone case) — правила нет. Сомневаетесь — пишите раздельно.` },
      { t: 'idea', text: `Итог: главное слово в конце, первое — «какой?» и без -s.`,
        rows: [['какой? + главное', 'a phone case, a gaming chair'], ['число-«какой?»', 'a two-hour meeting (без -s)']] }
    ]},

    // ───────────── 4. 's или of ─────────────
    { title: '«Комп брата» и «конец фильма» — ’s или of', steps: [
      { t: 'idea', text: `Вы уже знаете: «комп моего брата» — <b>my brother’s PC</b>. Новое: ’s ставим в основном после людей и животных. Для вещей и их частей — <b>of</b>.`,
        lit: [['the end', 'конец'], ['of', '(чего?)'], ['the film', 'фильма']],
        ex: [['my brother’s PC', 'комп моего брата'], ['the end of the film', 'конец фильма'], ['What’s the name of this song?', 'Как называется эта песня?']],
        bad: 'the computer of Tom · the end film', good: '<b>Tom’s</b> computer · the end <b>of</b> the film' },
      { t: 'check', q: 'Как лучше: «начало месяца»?', o: ['the beginning month', 'the beginning of the month', 'the month beginning'], a: 1,
        why: 'Часть чего-то (beginning, end, top) → of.' },
      { t: 'idea', text: `Где апостроф? Один — <b>’s</b>: my sister’s room. Много, и слово уже на -s, — только <b>’</b> после s: my sisters’ room (комната сестёр). Много без -s — снова ’s: children’s games.`,
        rows: [['один', 'my sister’s room'], ['много на -s', 'my sisters’ room'], ['много без -s', 'children’s, people’s']] },
      { t: 'check', q: 'My parents share one car. It’s my ___ car.', ru: 'У родителей одна машина на двоих. Это машина моих родителей.', o: ['parent’s', 'parents’', 'parents’s'], a: 1,
        why: 'Родителей двое, слово на -s → апостроф после s.' },
      { t: 'idea', text: `Время тоже любит ’s: «вчерашний стрим» — <b>yesterday’s stream</b>. А ’s может стоять и без слова после: It’s Anna’s — это Аннино.`,
        ex: [['Did you watch yesterday’s stream?', 'Ты смотрел вчерашний стрим?'], ['I’ve got a week’s holiday in May.', 'В мае у меня неделя отпуска.'], ['This isn’t my charger. It’s Anna’s.', 'Это не моя зарядка. Это Аннина.']],
        tip: `Ещё тонкости: two weeks’ holiday; двое вместе — Max and Liza’s cat; компании — и ’s, и of (the company’s decision); ’s = «для»: a children’s book (детская книга).` },
      { t: 'check', q: 'Did you watch ___ stream?', ru: 'Ты смотрел вчерашний стрим?', o: ['yesterday’s', 'the yesterday', 'of yesterday'], a: 0,
        why: 'Время + ’s → yesterday’s stream.' },
      { t: 'idea', text: `Итог: люди и животные — ’s, вещи и части — of.`,
        rows: [['люди, животные, время', 'Tom’s laptop, yesterday’s stream'], ['вещи, части', 'the end of the film'], ['много на -s', 'my parents’ car']] }
    ]},

    // ───────────── 5. myself, each other ─────────────
    { title: 'myself: «представлюсь», «сам» и «друг друга»', steps: [
      { t: 'idea', text: `Вы уже знаете: myself — когда действие возвращается на себя (I cut myself), а feel, relax, meet — без него. Новое: несколько слов, где myself нужен всегда — <b>introduce, blame, behave, enjoy</b>.`,
        ex: [['Let me introduce myself. I’m Ilya, the new UI designer.', 'Позвольте представиться. Я Илья, новый UI-дизайнер.'], ['Don’t blame yourself.', 'Не вини себя.'], ['Kids, behave yourselves!', 'Дети, ведите себя хорошо!']],
        bad: 'We enjoyed at the party.', good: 'We enjoyed <b>ourselves</b> at the party. / We enjoyed <b>the party</b>.' },
      { t: 'idea', text: `А здесь myself не нужен, хотя по-русски есть «-ся» или «себя»: <b>relax, concentrate</b> (сосредоточиться), <b>feel, meet</b>. И обычно без него: washed, got dressed.`,
        bad: 'Relax yourself and concentrate yourself.', good: '<b>Relax</b> and <b>concentrate</b>.',
        ex: [['I feel much better today.', 'Мне сегодня гораздо лучше.'], ['I got up, washed and got dressed.', 'Я встал, умылся и оделся.']] },
      { t: 'check', q: 'I’m so tired, I can’t ___.', ru: 'Я так устал, не могу сосредоточиться.', o: ['concentrate myself', 'concentrate', 'concentrate me'], a: 1,
        why: 'concentrate, relax, feel — без myself.' },
      { t: 'idea', text: `Второе значение myself — «сам, а не кто-то другой». Ставим в конец фразы или сразу после слова, к которому относится.`,
        lit: [['I', 'я'], ['drew', 'нарисовал'], ['it', 'это'], ['myself', 'сам']],
        ex: [['Who drew this? — I drew it myself.', 'Кто это нарисовал? — Я сам.'], ['I’m not going to fix your bug. Fix it yourself.', 'Не буду чинить твой баг. Почини сам.'], ['The game itself is short, but the soundtrack is amazing.', 'Сама игра короткая, но саундтрек потрясающий.']] },
      { t: 'idea', text: `И напоминание: «друг друга» — только <b>each other</b>, никогда не themselves. themselves — каждый себя.`,
        ex: [['Kate and Den took photos of each other.', 'Кейт и Дэн сфотографировали друг друга.'], ['Kate and Den took a photo of themselves.', 'Кейт и Дэн сфотографировали себя (оба на фото).'], ['How long have you known each other?', 'Сколько вы знакомы?']] },
      { t: 'check', q: 'Max looked at Liza, and Liza looked at Max. They looked at ___.', ru: 'Макс посмотрел на Лизу, а Лиза — на Макса. Они посмотрели друг на друга.', o: ['themselves', 'each other', 'theirselves'], a: 1,
        why: 'Каждый смотрел на другого → each other.' },
      { t: 'idea', text: `Итог: myself = «себя» и «сам»; each other = «друг друга».`,
        rows: [['introduce / blame / enjoy myself', 'relax, concentrate, feel, meet — без'], ['I did it myself', 'сам, не кто-то другой'], ['each other', 'друг друга']] }
    ]},

    // ───────────── 6. a friend of mine, my own, on my own ─────────────
    { title: '«Один мой друг», «своя комната», «сам, в одиночку»', steps: [
      { t: 'idea', text: `Хотите сказать «Один мой коллега переезжает в Берлин». Друзей и коллег у вас несколько, речь об одном — <b>a colleague of mine</b>. После of — mine, yours, ours или Tom’s.`,
        lit: [['a colleague', 'один коллега'], ['of', 'из'], ['mine', 'моих']],
        ex: [['A colleague of mine is moving to Berlin.', 'Один мой коллега переезжает в Берлин.'], ['She’s a friend of my brother’s.', 'Она подруга моего брата.'], ['That was a great idea of yours!', 'Это была твоя отличная идея!']],
        bad: 'He’s a colleague of me.', good: 'He’s a colleague <b>of mine</b>.' },
      { t: 'check', q: 'Скажите: «Одна моя подруга — дизайнер»', o: ['A friend of me is a designer.', 'A friend of mine is a designer.', 'A my friend is a designer.'], a: 1,
        why: 'Одна из моих подруг → a friend of mine.' },
      { t: 'idea', text: `«Своя комната», «свой ноутбук» — ни с кем не общий: <b>my own</b>. own стоит только после my / your / his / our / their, никогда после a.`,
        ex: [['I don’t want to share. I want my own room.', 'Не хочу делить. Хочу свою комнату.'], ['Every character has its own story.', 'У каждого персонажа своя история.'], ['Why do you need my laptop? Use your own!', 'Зачем тебе мой ноутбук? Пользуйся своим!']],
        bad: 'I want an own studio.', good: 'I want <b>my own</b> studio. / I want a studio <b>of my own</b>.',
        tip: `my own — ещё и «сам, а не купил»: She makes her own music. А It’s my own fault — «Я сам виноват».` },
      { t: 'check', q: 'We don’t rent. We have ___ house.', ru: 'Мы не снимаем. У нас свой дом.', o: ['an own', 'our own', 'own'], a: 1,
        why: 'own всегда после my / our / their…, никогда после a.' },
      { t: 'idea', text: `«Один, без никого» — <b>on my own</b>. Это то же, что by myself из A2. Главное — не смешивать: on + own, by + myself.`,
        rows: [['on my / his / our own', 'by myself / himself / ourselves']],
        ex: [['I live on my own.', 'Я живу один.'], ['Did you finish the level by yourself?', 'Ты сам прошёл уровень?']],
        bad: 'I went there by my own.', good: 'I went there <b>on my own</b>. / … <b>by myself</b>.' },
      { t: 'check', q: 'Nobody helped me. I did it ___.', ru: 'Никто мне не помогал. Я сделал это сам.', o: ['on my own', 'by my own', 'on myself'], a: 0,
        why: 'on + my own или by + myself. Смешивать нельзя.' },
      { t: 'idea', text: `Итог: три похожие фразы с разным смыслом.`,
        rows: [['a friend of mine', 'один из моих друзей'], ['my own room', 'своя, ни с кем не общая'], ['on my own = by myself', 'один, без помощи']] }
    ]},

    // ───────────── 7. there или it ─────────────
    { title: '«Там была пробка» — there или it', steps: [
      { t: 'idea', text: `Вы уже знаете: <b>there is</b> — «что-то есть», <b>it</b> — погода, время, «трудно найти». Новое: there — впервые сообщаем, что что-то есть. it — про то, что уже знаем.`,
        ex: [['There’s a new café near the office. It’s really cosy.', 'Рядом с офисом новое кафе. Оно очень уютное.'], ['Sorry I’m late. There was a huge traffic jam.', 'Извини, опоздал. Была огромная пробка.'], ['She called me at midnight. It was a total surprise.', 'Она позвонила мне в полночь. Это было полной неожиданностью.']],
        bad: 'It was a long queue outside.', good: '<b>There was</b> a long queue outside.',
        tip: `Русское «была пробка» тянет к it was. Но it — «это самое», а пробки в разговоре ещё не было.` },
      { t: 'check', q: 'We went to the new escape room. ___ was great!', ru: 'Мы сходили в новый квест-рум. Было здорово!', o: ['There', 'It', 'They'], a: 1,
        why: 'Про конкретное место, о котором уже сказали → it.' },
      { t: 'idea', text: `there работает с любыми временами и словами-помощниками: there might be, there must be, there used to be. И <b>there’s bound to be</b> — «точно будет».`,
        lit: [['There’s', 'есть'], ['bound to be', 'точно будет'], ['a queue', 'очередь']],
        ex: [['It’s Friday. There’s bound to be a queue.', 'Пятница. Точно будет очередь.'], ['There used to be a computer club here.', 'Раньше здесь был компьютерный клуб.'], ['There must have been a reason.', 'Должно быть, была причина.']],
        tip: `Ещё: There’s supposed to be a lift. — Тут вроде должен быть лифт. There should have been a warning. — Должно было быть предупреждение.` },
      { t: 'check', q: 'Why did he leave so suddenly? ___ must have been a reason.', ru: 'Почему он так внезапно ушёл? Должно быть, была причина.', o: ['It', 'There', 'That'], a: 1,
        why: 'Говорим, что причина существовала → there must have been.' },
      { t: 'idea', text: `И ещё it: вместо длинного начала. Не «Выучить язык за месяц — трудно», а <b>It’s hard to</b> learn a language in a month. Так же It’s a shame (жаль) и It took us… (у нас ушло).`,
        ex: [['It’s a shame you can’t come.', 'Жаль, что ты не можешь прийти.'], ['It took us two hours to set up the server.', 'У нас ушло два часа на настройку сервера.'], ['It’s not worth waiting. Let’s go.', 'Не стоит ждать. Пойдём.']],
        tip: `Как выбрать: после there — вещь, после it — признак. Живут у стадиона: There must be a lot of noise (много шума) = It must be very noisy (очень шумно). И не забывайте: there — ещё и «там»: Nobody lives there.` },
      { t: 'check', q: '___ took me ten minutes to find the bug.', ru: 'У меня ушло десять минут, чтобы найти баг.', o: ['There', 'It', 'This'], a: 1,
        why: '«Ушло столько-то времени» → It took…' },
      { t: 'idea', text: `Итог: there — впервые сообщаем, что что-то есть; it — «это самое» или признак.`,
        rows: [['there + вещь (впервые)', 'There was a strong wind. There must be a lot of noise.'], ['it + признак или «это самое»', 'It was windy. It must be noisy. It was great.'], ['it вместо длинного начала', 'It’s hard to… It took us…']] }
    ]},

    // ───────────── 8. Ловушки ─────────────
    { title: 'Ловушки урока — проверьте себя', steps: [
      { t: 'check', q: 'Скажите: «Два часа — слишком долго»', o: ['Two hours are too long.', 'Two hours is too long.', 'Two hour is too long.'], a: 1,
        why: 'Срок — одно целое → is.' },
      { t: 'idea', text: `Итог урока: считаем, как англичанин; главное слово последнее; люди — ’s, вещи — of; there — «есть», it — «это самое».`,
        rows: [['trousers are, news is, police are, two hours is', 'a two-hour meeting, a shoe shop'], ['my father’s car, the name of the song', 'myself = себя и сам, each other = друг друга'], ['my own, on my own, a friend of mine', 'There was a queue. It was great.']] }
    ]}
  ];
})();
