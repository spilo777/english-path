// Грамматика по шагам для юнита a1-14: at / on / in во времени, части дня, без предлога с this / last / next, in five minutes, in / on / at в месте, готовые фразы at home / in bed / on the bus, next to / between / behind / opposite / under.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-14'); if (!u) return;
  u.walk = [
    // ───────────── 1. Время: at / on / in ─────────────
    { title: 'Одно русское «в» — три английских слова', steps: [
      { t: 'idea', text: `Хотите сказать: «Игра начинается в восемь». По-русски здесь «в». По-английски для часов на циферблате — слово <b>at</b>: at eight.`,
        lit: [['The game', 'игра'], ['starts', 'начинается'], ['at', 'в'], ['eight', 'восемь']],
        ex: [['The game starts at eight.', 'Игра начинается в восемь.'], ['I get up at seven.', 'Я встаю в семь.'], ['The shop closes at half past nine.', 'Магазин закрывается в полдесятого.']] },
      { t: 'idea', text: `Теперь «в понедельник». Тут «в» — уже другое слово: <b>on</b>. Так со всеми днями: on Monday, on Friday, on Sunday.`,
        lit: [['See you', 'увидимся'], ['on', 'в'], ['Friday', 'пятницу']],
        ex: [['See you on Friday.', 'Увидимся в пятницу.'], ['I play football on Saturday.', 'Я играю в футбол в субботу.'], ['I don’t work on Sundays.', 'Я не работаю по воскресеньям.']],
        tip: `on + день с буквой s на конце (on Sundays) = «по воскресеньям».` },
      { t: 'check', q: 'Скажите: «Увидимся в семь»', o: ['See you in seven.', 'See you on seven.', 'See you at seven.'], a: 2, why: 'Время на часах → at: at seven.' },
      { t: 'check', q: 'I have English ___ Tuesday.', ru: 'У меня английский во вторник.', o: ['at', 'on', 'in'], a: 1, why: 'День недели → on: on Tuesday.' },
      { t: 'idea', text: `А «в апреле», «в 2020 году», «летом»? Это большие куски времени. Для них — третье слово: <b>in</b>. Чем больше кусок времени, тем «глубже» мы в нём — in.`,
        rows: [['точка на часах', 'at', 'at eight, at midnight'], ['один день', 'on', 'on Monday, on my birthday'], ['длиннее дня', 'in', 'in April, in summer, in 2020']],
        ex: [['My birthday is in May.', 'Мой день рождения в мае.'], ['I was born in 1996.', 'Я родился в 1996 году.'], ['It’s cold here in winter.', 'Здесь холодно зимой.']] },
      { t: 'idea', text: `Число (дата) — это тоже один день, как в календаре. Поэтому дата идёт с <b>on</b>: on 5 May, on 12 March.`,
        ex: [['The game comes out on 12 March.', 'Игра выходит 12 марта.'], ['The party is on 5 May.', 'Вечеринка 5 мая.']],
        tip: `Спросите себя: это точка на часах (at), один день (on) или что-то длиннее дня (in)?` },
      { t: 'check', q: 'We went to the sea ___ August.', ru: 'Мы ездили на море в августе.', o: ['at', 'on', 'in'], a: 2, why: 'Месяц — длиннее дня → in.' },
      { t: 'idea', text: `Итог: русское «в» о времени — это три слова, смотря насколько большой кусок времени.`,
        rows: [['at', 'часы', 'at eight'], ['on', 'день, дата', 'on Monday, on 5 May'], ['in', 'месяц, год, время года', 'in April, in 2020, in summer']] }
    ]},

    // ───────────── 2. Утром, ночью, на выходных ─────────────
    { title: 'Утром, вечером, ночью, на выходных', steps: [
      { t: 'idea', text: `Хотите сказать «утром», «вечером». По-английски это <b>in the</b> + часть дня: in the morning, in the afternoon, in the evening. Слово the тут обязательно.`,
        lit: [['I', 'я'], ['drink coffee', 'пью кофе'], ['in the', 'в'], ['morning', 'утро']],
        ex: [['I drink coffee in the morning.', 'Утром я пью кофе.'], ['I play games in the evening.', 'Вечером я играю в игры.'], ['We have a call in the afternoon.', 'Днём у нас созвон.']] },
      { t: 'idea', text: `А вот «ночью» — не по правилу: <b>at night</b>, без the. И ещё два таких же: <b>at the weekend</b> (на выходных) и <b>at Christmas</b> (на Рождество).`,
        bad: 'in the night · in the weekend', good: '<b>at night</b> · <b>at the weekend</b>',
        tip: `Ночь и выходные — «точки» в неделе, куда мы попадаем, как в at eight. Поэтому at.` },
      { t: 'check', q: 'I can’t sleep ___ night.', ru: 'Я не могу спать ночью.', o: ['in the', 'at', 'on the'], a: 1, why: 'Ночь — не по правилу: at night, без the.' },
      { t: 'idea', text: `А если «в понедельник утром»? В фразе есть день — и день побеждает: <b>on</b> Monday morning. Не in, а on.`,
        lit: [['on', 'в'], ['Monday', 'понедельник'], ['morning', 'утром']],
        ex: [['We have a call on Monday morning.', 'У нас созвон в понедельник утром.'], ['I play on Friday night.', 'Я играю в пятницу ночью.']],
        tip: `Есть название дня → on. Нет дня → in the morning, at night.` },
      { t: 'check', q: 'The party is ___ Saturday evening.', ru: 'Вечеринка в субботу вечером.', o: ['in the', 'on', 'at'], a: 1, why: 'В фразе есть день (Saturday) → on.' },
      { t: 'idea', text: `Итог: части дня — in the, кроме ночи; с днём недели — всегда on.`,
        rows: [['in the morning / afternoon / evening', 'утром / днём / вечером'], ['at night · at the weekend', 'ночью · на выходных'], ['on Monday morning', 'в понедельник утром']] }
    ]},

    // ───────────── 3. Без предлога и «через» ─────────────
    { title: 'Когда «в» не нужно совсем — и как сказать «через»', steps: [
      { t: 'idea', text: `Хотите сказать «на следующей неделе», «прошлым летом». Перед словами <b>this, last, next, every</b> никакого at / on / in не ставим. Вообще ничего.`,
        lit: [['See you', 'увидимся'], ['next', 'следующий'], ['week', 'неделя']],
        ex: [['See you next week.', 'Увидимся на следующей неделе.'], ['I was busy last summer.', 'Прошлым летом я был занят.'], ['I play every evening.', 'Я играю каждый вечер.']],
        bad: 'on next Monday · in last summer', good: '<b>next Monday</b> · <b>last summer</b>' },
      { t: 'idea', text: `То же самое с yesterday, today, tomorrow (завтра): никакого «в» перед ними. I saw Tom yesterday. — Я видел Тома вчера.`,
        ex: [['I saw Tom yesterday.', 'Я видел Тома вчера.'], ['I’m at home today.', 'Сегодня я дома.'], ['This evening I’m free.', 'Сегодня вечером я свободен.']],
        tip: `Слова this / last / next / every / today / yesterday / tomorrow уже сами отвечают «когда?». Помощник им не нужен.` },
      { t: 'check', q: 'I bought this game ___ last week.', ru: 'Я купил эту игру на прошлой неделе.', o: ['on', 'in', '— (ничего)'], a: 2, why: 'Перед last / next / this / every предлог не ставим.' },
      { t: 'check', q: 'Скажите: «Мы встречаемся в следующую пятницу»', o: ['We meet on next Friday.', 'We meet next Friday.', 'We meet in next Friday.'], a: 1, why: 'next уже стоит — at / on / in не нужно.' },
      { t: 'idea', text: `А как сказать «через пять минут»? Хочется after, но по-английски это <b>in</b>: in five minutes (минут). Считаем от «сейчас».`,
        lit: [['The game', 'игра'], ['starts', 'начинается'], ['in', 'через'], ['five minutes', 'пять минут']],
        ex: [['The game starts in five minutes.', 'Игра начнётся через пять минут.'], ['See you in an hour.', 'Увидимся через час.'], ['I come back in two weeks.', 'Я вернусь через две недели.']],
        tip: `Как таймер в игре: «in 5… 4… 3…». Через — это in.` },
      { t: 'check', q: 'Скажите: «Через час»', o: ['after an hour', 'in an hour', 'on an hour'], a: 1, why: '«Через» от сейчас = in + срок.' },
      { t: 'idea', text: `Итог: this / last / next / every / yesterday / today — без предлога; «через» — in.`,
        rows: [['next week, last summer, every day', 'без at / on / in'], ['yesterday, today, tomorrow', 'без at / on / in'], ['in five minutes, in an hour', '«через»']] }
    ]},

    // ───────────── 4. Место: in / on / at ─────────────
    { title: 'Где: внутри, на поверхности, у точки', steps: [
      { t: 'idea', text: `Теперь про место. Хотите сказать «ключи в сумке» — то есть внутри. Внутри = <b>in</b>: in the bag, in the box, in the kitchen, in Moscow.`,
        lit: [['My keys', 'мои ключи'], ['are', '(есть)'], ['in', 'в'], ['the bag', 'сумке']],
        ex: [['My keys are in the bag.', 'Ключи в сумке.'], ['Max is in the kitchen.', 'Макс на кухне.'], ['I live in Moscow.', 'Я живу в Москве.']],
        tip: `Можно закрыть крышку или дверь? Значит внутри — in.` },
      { t: 'idea', text: `«На столе», «на стене» — это поверхность. Что-то лежит сверху или висит на ней. Поверхность = <b>on</b>: on the desk, on the wall, on the floor.`,
        ex: [['My phone is on the desk.', 'Мой телефон на столе.'], ['There is a photo on the wall.', 'На стене фотография.'], ['The cat is on the sofa.', 'Кот на диване.']],
        tip: `Здесь русское «на» и английское on совпадают — приятная редкость.` },
      { t: 'check', q: 'The milk is ___ the fridge.', ru: 'Молоко в холодильнике.', o: ['in', 'on', 'at'], a: 0, why: 'Внутри холодильника, дверь можно закрыть → in.' },
      { t: 'check', q: 'Скажите: «Ключи на столе»', o: ['The keys are in the table.', 'The keys are on the table.', 'The keys are at the table.'], a: 1, why: 'Лежат сверху, на поверхности → on.' },
      { t: 'idea', text: `Третье слово — <b>at</b>: «у точки». Кто-то стоит у двери, ждёт на остановке, сидит за своим столом. Мы не внутри и не сверху — мы рядом, в этой точке.`,
        lit: [['Someone', 'кто-то'], ['is', '(есть)'], ['at', 'у'], ['the door', 'двери']],
        ex: [['Someone is at the door.', 'Кто-то у двери.'], ['I’m waiting at the bus stop.', 'Я жду на остановке.'], ['Anna is at her desk.', 'Анна за своим столом.']],
        tip: `Представьте точку на карте: «я здесь» — at.` },
      { t: 'check', q: 'Wait for me ___ the bus stop.', ru: 'Подожди меня на остановке.', o: ['in', 'on', 'at'], a: 2, why: 'Остановка — точка, у которой стоят → at.' },
      { t: 'idea', text: `Итог: три вопроса о месте — внутри? сверху? у точки?`,
        rows: [['in', 'внутри', 'in the bag, in the room, in London'], ['on', 'на поверхности', 'on the desk, on the wall'], ['at', 'у точки', 'at the door, at the bus stop']] },
      { t: 'idea', opt: true, text: `Ещё три «точки» с at: at the top (наверху), at the end of the street (в конце улицы), at the corner (на углу). А «на юге России» — in the south of Russia (юг — south).`,
        ex: [['Write your name at the top.', 'Напишите имя наверху.'], ['My house is at the end of the street.', 'Мой дом в конце улицы.']] }
    ]},

    // ───────────── 5. Готовые фразы места ─────────────
    { title: 'Дома, на работе, в постели, в автобусе', steps: [
      { t: 'idea', text: `Хотите сказать «Я дома», «Она на работе». Тут не «внутри», а «в своей точке жизни»: <b>at home</b>, <b>at work</b>, <b>at school</b>. Лучше запомнить целиком.`,
        lit: [['She', 'она'], ['is', '(есть)'], ['at', 'на'], ['work', 'работе']],
        ex: [['I’m at home.', 'Я дома.'], ['She’s at work.', 'Она на работе.'], ['Tom is at university.', 'Том в университете.']],
        bad: 'I’m in home. She’s in work.', good: 'I’m <b>at</b> home. She’s <b>at</b> work.' },
      { t: 'idea', text: `А «в постели» и «в больнице» — с <b>in</b>: in bed, in hospital. Без the — как go to bed, go to work из прошлого урока.`,
        ex: [['Max is ill. He’s in bed.', 'Макс болеет (ill — больной). Он в постели.'], ['His dad is in hospital.', 'Его папа в больнице.'], ['I read in bed at night.', 'Ночью я читаю в постели.']] },
      { t: 'check', q: 'Where’s Kate? — She’s ___ work.', ru: 'Где Кейт? — Она на работе.', o: ['in', 'at', 'on'], a: 1, why: 'at work, at home, at school — готовые фразы с at.' },
      { t: 'idea', text: `Транспорт делится на два вида. Машина, такси — сидим внутри: <b>in</b> a car, in a taxi. Автобус, поезд, самолёт — мы «на борту»: <b>on</b> the bus, on the train, on the plane.`,
        rows: [['in', 'a car, a taxi', 'I’m in the car.'], ['on', 'the bus, the train, the plane', 'I read on the bus.']],
        tip: `В автобусе можно встать и пройти — вы на нём, как на палубе: on. В машине только сидишь внутри: in.` },
      { t: 'idea', text: `Ещё два места, где русский подводит. «На фото» — по-английски <b>in</b> the photo (вы внутри картинки). «У Кейт (дома)» — <b>at</b> Kate’s: at + имя с ’s.`,
        ex: [['Who is the man in this photo?', 'Кто этот мужчина на фото?'], ['I was at Max’s.', 'Я был у Макса.'], ['I met Anna at a party.', 'Я познакомился с Анной на вечеринке.']],
        bad: 'He’s on the photo.', good: 'He’s <b>in</b> the photo.' },
      { t: 'check', q: 'I always listen to music ___ the bus.', ru: 'В автобусе я всегда слушаю музыку.', o: ['in', 'on', 'at'], a: 1, why: 'Автобус, поезд, самолёт — on.' },
      { t: 'check', q: 'Where were you? — ___ Tom’s. We played games.', ru: 'Где ты был? — У Тома. Мы играли.', o: ['In', 'On', 'At'], a: 2, why: 'У кого-то дома — at + имя с ’s.' },
      { t: 'idea', text: `Итог: эти фразы учим целиком, как слова.`,
        rows: [['at', 'home, work, school, Kate’s, a party'], ['in', 'bed, hospital, a car, a photo'], ['on', 'the bus, the train, the plane, the first floor']] }
    ]},

    // ───────────── 6. Рядом, между, за, напротив, под ─────────────
    { title: 'Рядом с, между, за, напротив, под', steps: [
      { t: 'idea', text: `Хотите сказать «Мой стол рядом с окном». «Рядом с» — это два слова: <b>next to</b>. А «между» — <b>between</b> … and …`,
        lit: [['My desk', 'мой стол'], ['is', '(есть)'], ['next to', 'рядом с'], ['the window', 'окном']],
        ex: [['My desk is next to the window.', 'Мой стол рядом с окном.'], ['Sit next to me!', 'Садись рядом со мной!'], ['The bank is between the café and the shop.', 'Банк между кафе и магазином.']] },
      { t: 'check', q: 'Скажите: «Кафе рядом с банком»', o: ['The café is next the bank.', 'The café is next to the bank.', 'The café is next of the bank.'], a: 1, why: '«Рядом с» — всегда два слова: next to.' },
      { t: 'idea', text: `Теперь «перед» и «за». <b>In front of</b> — прямо перед носом, с той же стороны. <b>Behind</b> — сзади, позади.`,
        ex: [['I sit in front of a computer all day.', 'Я весь день сижу перед компьютером.'], ['The cat is behind the sofa.', 'Кот за диваном.'], ['There’s a car in front of our house.', 'Перед нашим домом машина.']],
        tip: `in front of — три слова, behind — одно. Не путайте: behind без of.` },
      { t: 'idea', text: `«Напротив» — <b>opposite</b>: лицом к лицу, между вами что-то есть — стол, улица. И после opposite нет никакого of.`,
        bad: 'The shop is opposite of the park.', good: 'The shop is <b>opposite</b> the park.',
        ex: [['The gym (спортзал) is opposite the cinema.', 'Спортзал напротив кинотеатра.'], ['Anna sat opposite me.', 'Анна сидела напротив меня.']],
        tip: `В очереди человек стоит in front of you. В кафе друг сидит opposite you.` },
      { t: 'check', q: 'Скажите: «Мой дом напротив парка»', o: ['My house is opposite of the park.', 'My house is in front of the park.', 'My house is opposite the park.'], a: 2, why: '«Напротив», через дорогу → opposite, без of.' },
      { t: 'idea', text: `«Под» — <b>under</b>. «Над» (выше, не касаясь) — <b>above</b>, «ниже» — <b>below</b>. А «слева / справа» — on the left / on the right.`,
        ex: [['The cat is under the bed.', 'Кот под кроватью.'], ['There is a shelf (полка) above my desk.', 'Над моим столом полка.'], ['I’m on the left in this photo.', 'На этом фото я слева.']],
        bad: 'The shelf is on the desk. (она висит над столом)', good: 'The shelf is <b>above</b> the desk. — on = касается, above = выше' },
      { t: 'check', q: 'My shoes are ___ the bed.', ru: 'Мои ботинки под кроватью.', o: ['above', 'under', 'behind'], a: 1, why: '«Под» = under.' },
      { t: 'idea', text: `Итог: где что стоит — по одному слову на вопрос.`,
        rows: [['next to · between', 'рядом с · между'], ['in front of · behind · opposite', 'перед · за · напротив'], ['under · above · below', 'под · над · ниже']] }
    ]}
  ];
})();
