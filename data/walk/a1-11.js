// Грамматика по шагам для юнита a1-11: my / mine, вся семья I — me — my — mine, hers / his / theirs без повтора, a friend of mine, Whose…?, Kate’s camera, friends’ и the end of the film.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-11'); if (!u) return;
  u.walk = [
    // ───────────── 1. my и mine ─────────────
    { title: '«Мой» бывает двух видов', steps: [
      { t: 'idea', text: `Хотите сказать: «Это мой ноутбук». По-английски: This is <b>my</b> laptop. Слово my вы знаете с урока 7 — после него всегда стоит предмет.`,
        lit: [['This', 'это'], ['is', '(есть)'], ['my', 'мой'], ['laptop.', 'ноутбук']],
        ex: [['This is my laptop.', 'Это мой ноутбук.'], ['Is this your bag?', 'Это твоя сумка?'], ['I like her jacket.', 'Мне нравится её куртка.']] },
      { t: 'idea', text: `А теперь: «Этот ноутбук — <b>мой</b>». Предмета после «мой» нет — и по-английски слово меняется: This laptop is <b>mine</b>. По-русски «мой» одно, по-английски — два.`,
        lit: [['This laptop', 'этот ноутбук'], ['is', '(есть)'], ['mine.', 'мой']],
        ex: [['This laptop is mine.', 'Этот ноутбук — мой.'], ['This coffee is mine.', 'Этот кофе мой.'], ['These headphones are mine.', 'Эти наушники мои.']] },
      { t: 'idea', text: `Правило простое: есть предмет после слова → <b>my</b>. Предмета нет → <b>mine</b>.`,
        bad: 'This phone is my.', good: 'This phone is <b>mine</b>.',
        tip: `mine «съедает» предмет: my laptop = mine. Два слова стали одним.` },
      { t: 'check', q: 'This bag is ___.', ru: 'Эта сумка — моя.', o: ['my', 'mine', 'me'], a: 1,
        why: 'После слова нет предмета → mine.' },
      { t: 'check', q: 'Can I use ___ keyboard?', ru: 'Можно твою клавиатуру?', o: ['your', 'yours', 'you'], a: 0,
        why: 'Дальше стоит предмет (keyboard) → your.' },
      { t: 'idea', text: `Так же работает пара your / <b>yours</b>. «Твоя куртка» = your jacket, а «куртка твоя» (без предмета после слова) = <b>yours</b>.`,
        ex: [['Is this your jacket?', 'Это твоя куртка?'], ['Is this jacket yours?', 'Эта куртка твоя?'], ['My laptop is old, but yours is new.', 'Мой ноутбук старый, а твой новый.']] },
      { t: 'check', q: 'Скажите: «Эта куртка твоя?»', o: ['Is this jacket your?', 'Is this jacket yours?', 'Is this yours jacket?'], a: 1,
        why: 'После слова предмета нет → yours. Перед предметом было бы your.' },
      { t: 'idea', text: `Итог: смотрите, что стоит после слова.`,
        rows: [['есть предмет', 'my bag', 'your bag'], ['предмета нет', 'mine', 'yours']] }
    ]},

    // ───────────── 2. Вся семья слов ─────────────
    { title: 'Вся семья: I — me — my — mine', steps: [
      { t: 'idea', text: `У «я» в английском четыре вида, и три вы уже знаете: <b>I</b> (я делаю), <b>me</b> (меня, мне), <b>my</b> (мой + предмет). Сегодня добавился четвёртый — <b>mine</b> (мой, без предмета).`,
        ex: [['I know Max.', 'Я знаю Макса.'], ['Max knows me.', 'Макс знает меня.'], ['It’s my game. It’s mine.', 'Это моя игра. Она моя.']] },
      { t: 'idea', text: `И так для каждого. Последний столбик — новый, остальные вы видели в уроке 7.`,
        rows: [['I — me — my', 'mine'], ['you — you — your', 'yours'], ['she — her — her', 'hers'], ['we — us — our', 'ours'], ['they — them — their', 'theirs']],
        tip: `Почти все новые слова кончаются на <b>-s</b>: yours, hers, ours, theirs. Одно без -s — mine.` },
      { t: 'check', q: 'That table is ___.', ru: 'Тот стол — наш.', o: ['our', 'ours', 'us'], a: 1,
        why: 'Предмета после слова нет (= our table) → ours.' },
      { t: 'check', q: 'Скажите: «Это их проблема, а не наша»', o: ['It’s their problem, not ours.', 'It’s theirs problem, not our.', 'It’s their problem, not our.'], a: 0,
        why: 'their + problem (есть предмет), а «наша» без предмета — ours.' },
      { t: 'idea', text: `Заметьте: у «он» слово одно и то же — <b>his</b> и с предметом, и без. His phone — его телефон. The phone is his — телефон его.`,
        rows: [['he — him — his', 'his'], ['his skin', 'The skin is his.']],
        ex: [['Is this his laptop or hers? — It’s his.', 'Это его ноутбук или её? — Его.']] },
      { t: 'check', q: 'Is this ___ car? — Yes, it’s his.', ru: 'Это его машина? — Да, его.', o: ['him', 'his', 'he'], a: 1,
        why: 'his — одинаковое и с предметом, и без него.' },
      { t: 'idea', text: `Итог: четыре вида слова «я», и последний — без предмета.`,
        rows: [['я делаю', 'I'], ['меня, мне', 'me'], ['мой + предмет', 'my'], ['мой (без предмета)', 'mine']] }
    ]},

    // ───────────── 3. Без повтора ─────────────
    { title: 'Зачем нужны mine, yours, hers', steps: [
      { t: 'idea', text: `Эти слова нужны, чтобы не говорить предмет второй раз. «Мой ноутбук старый, а её — новый»: второй раз «ноутбук» не повторяем, ставим hers.`,
        lit: [['My laptop', 'мой ноутбук'], ['is old,', 'старый'], ['but', 'а'], ['hers', 'её (ноутбук)'], ['is new.', 'новый']],
        ex: [['My laptop is old, but hers is new.', 'Мой ноутбук старый, а её новый.'], ['Is this charger (зарядка) mine or yours?', 'Эта зарядка моя или твоя?'], ['We went in our car, and they went in theirs.', 'Мы поехали на нашей машине, а они на своей.']] },
      { t: 'idea', text: `Русское «свой» в английском — это my, your, her, their по смыслу. «Я забыл зонт, и она дала мне свой» → she gave me <b>hers</b> (= her umbrella).`,
        bad: 'I took the my bag.', good: 'I took <b>my</b> bag. (= свою сумку)',
        ex: [['I forgot my umbrella, so she gave me hers.', 'Я забыл зонт, и она дала мне свой.'], ['I often play my sister’s games.', 'Я часто играю в игры сестры.']] },
      { t: 'check', q: 'My keyboard is old, but ___ is new. (у неё)', ru: 'Моя клавиатура старая, а её новая.', o: ['her', 'hers', 'she'], a: 1,
        why: 'Предмет не повторяем (= her keyboard) → hers.' },
      { t: 'idea', text: `В этих словах <b>никогда</b> нет апострофа. Не your’s, не her’s — только yours, hers.`,
        bad: 'Is it your’s? / It’s her’s.', good: 'Is it <b>yours</b>? / It’s <b>hers</b>.',
        tip: `Апостроф с -s — это про хозяина (Kate’s), об этом ниже. У yours / hers / ours / theirs его нет.` },
      { t: 'check', q: 'Скажите: «Эти деньги — её»', o: ['The money is her’s.', 'The money is hers.', 'The money is her.'], a: 1,
        why: '«Её» без предмета — hers, и без апострофа.' },
      { t: 'idea', text: `Итог: без предмета — mine / yours / his / hers / ours / theirs, без апострофа.`,
        rows: [['her laptop →', 'hers'], ['our car →', 'ours'], ['their problem →', 'theirs']] }
    ]},

    // ───────────── 4. a friend of mine ─────────────
    { title: '«Один мой друг» — a friend of mine', steps: [
      { t: 'idea', text: `Хотите сказать «Я играл с одним своим другом». Друзей много, речь об одном из них — по-английски это <b>a friend of mine</b>.`,
        lit: [['a friend', 'один друг'], ['of', 'из'], ['mine', 'моих']],
        ex: [['I played with a friend of mine.', 'Я играл с одним своим другом.'], ['Kate came with a friend of hers.', 'Катя пришла со своей подругой.'], ['He is a friend of ours.', 'Он наш друг.']] },
      { t: 'idea', text: `После <b>of</b> здесь всегда слово из последнего столбика: mine, yours, his, hers, ours, theirs. Не me и не him.`,
        bad: 'a friend of me / a friend of him', good: 'a friend of <b>mine</b> / a friend of <b>his</b>',
        ex: [['Are those people friends of yours?', 'Те люди — твои друзья?'], ['My cousin is a friend of mine too.', 'Мой двоюродный брат — ещё и мой друг.']] },
      { t: 'check', q: 'Tom was in the café with a friend of ___.', ru: 'Том был в кафе со своим другом.', o: ['him', 'his', 'he'], a: 1,
        why: 'a friend of + mine / yours / his… → his.' },
      { t: 'check', q: 'Скажите: «Она моя подруга»', o: ['She’s a friend of me.', 'She’s a friend of my.', 'She’s a friend of mine.'], a: 2,
        why: 'После of — mine, не me и не my.' },
      { t: 'idea', text: `Итог: один из моих друзей — a friend of mine.`,
        rows: [['a friend of', 'mine / yours / his / hers'], ['friends of', 'ours / theirs']] }
    ]},

    // ───────────── 5. Whose ─────────────
    { title: '«Чья это сумка?» — Whose', steps: [
      { t: 'idea', text: `Хотите спросить: «Чья это сумка?». Слово «чей / чья / чьё / чьи» — одно: <b>whose</b> [huːz]. Дальше — предмет, потом is this.`,
        lit: [['Whose', 'чья'], ['bag', 'сумка'], ['is', '(есть)'], ['this?', 'это']],
        ex: [['Whose bag is this?', 'Чья это сумка?'], ['Whose jacket is on the chair?', 'Чья куртка на стуле?'], ['Whose keys are these?', 'Чьи это ключи?']] },
      { t: 'idea', text: `Отвечают как раз словами из этого урока: It’s <b>mine</b>. They’re <b>hers</b>. Один предмет → is this, много → are these.`,
        rows: [['Whose phone is this?', 'It’s mine.'], ['Whose headphones are these?', 'They’re hers.']] },
      { t: 'check', q: '___ keys are these? — They’re mine.', ru: 'Чьи это ключи? — Мои.', o: ['Who', 'Whose', 'What'], a: 1,
        why: 'Спрашиваем «чьи» → Whose.' },
      { t: 'idea', text: `Не путайте с who. Who is this bag? — это «Кто эта сумка?». «Чья» — только whose.`,
        bad: 'Who is this bag?', good: '<b>Whose</b> bag is this?',
        tip: `whose и who’s (= who is) звучат одинаково. Who’s that? — Кто это? Whose car is that? — Чья это машина?` },
      { t: 'check', q: 'Скажите: «Чья это куртка?»', o: ['Who is this jacket?', 'Whose jacket is this?', 'Whose is jacket this?'], a: 1,
        why: 'Whose + предмет + is this.' },
      { t: 'idea', text: `Итог: «чей» — whose, ответ — mine / yours / hers.`,
        rows: [['один предмет', 'Whose bag is this?', 'It’s mine.'], ['много', 'Whose keys are these?', 'They’re yours.']] }
    ]},

    // ───────────── 6. Kate’s ─────────────
    { title: '«Телефон Кати» — Kate’s phone', steps: [
      { t: 'idea', text: `Хотите сказать «телефон Кати». По-русски сначала вещь, потом хозяин. По-английски наоборот: хозяин, к нему <b>’s</b>, потом вещь — <b>Kate’s phone</b>.`,
        lit: [['Kate’s', 'Кати (Катин)'], ['phone', 'телефон']],
        ex: [['Kate’s phone', 'телефон Кати'], ['my brother’s car', 'машина моего брата'], ['the boss’s office', 'кабинет начальника']] },
      { t: 'idea', text: `Так говорят о людях: сначала кто, потом что. Через «of» о людях обычно не говорят.`,
        bad: 'the car of my brother', good: 'my brother’s car',
        ex: [['I stayed at my sister’s flat.', 'Я жил в квартире сестры.'], ['Our neighbour’s dog is very loud.', 'Собака нашего соседа очень громкая.'], ['Tom’s wife is a designer.', 'Жена Тома — дизайнер.']] },
      { t: 'check', q: 'Скажите: «Это телефон моего друга»', o: ['It’s the phone of my friend.', 'It’s my friend’s phone.', 'It’s my friend phone.'], a: 1,
        why: 'О людях: хозяин + ’s + предмет.' },
      { t: 'idea', text: `После ’s предмет можно не повторять, если и так ясно. My laptop is new, but <b>Kate’s</b> is old — «у Кати старый» (= Kate’s laptop).`,
        ex: [['My laptop is new, but Kate’s is old.', 'Мой ноутбук новый, а у Кати старый.'], ['Whose umbrella is this? — It’s my sister’s.', 'Чей это зонт? — Сестры.'], ['I was at Paul’s last night.', 'Вчера вечером я был у Пола (дома).']] },
      { t: 'check', q: 'Whose bag is this? — It’s my ___.', ru: 'Чья это сумка? — Моего брата.', o: ['brother', 'brother’s', 'brothers'], a: 1,
        why: '«Чья» → хозяин + ’s: my brother’s (= my brother’s bag).' },
      { t: 'idea', text: `Итог: у людей — хозяин + ’s + вещь.`,
        rows: [['телефон Кати', 'Kate’s phone'], ['машина брата', 'my brother’s car'], ['у Пола (дома)', 'at Paul’s']] }
    ]},

    // ───────────── 7. friends’ и the end of ─────────────
    { title: 'friend’s или friends’? А для вещей — of', steps: [
      { t: 'idea', text: `Хозяин может быть один, а может быть несколько. Один друг → my friend<b>’s</b> house. Несколько друзей (friends, уже с -s) → my friends<b>’</b> house: только апостроф после s.`,
        rows: [['один друг', 'my friend’s house', 'дом друга'], ['несколько друзей', 'my friends’ house', 'дом друзей'], ['двое родителей', 'my parents’ house', 'дом родителей']],
        tip: `На слух friend’s и friends’ одинаковы. Разница только на письме.` },
      { t: 'check', q: 'Скажите: «Машина моих родителей»', o: ['my parent’s car', 'my parents’ car', 'my parents car'], a: 1,
        why: 'Родителей двое, слово кончается на -s → только апостроф после s.' },
      { t: 'idea', text: `Слово children (дети) уже «много», но без -s. Тогда как обычно — ’s: the children<b>’s</b> room.`, opt: true,
        ex: [['the children’s room', 'детская комната'], ['the people’s names (имена)', 'имена людей']] },
      { t: 'idea', text: `А для вещей, мест, фильмов, игр — не ’s, а <b>the … of …</b>: «конец фильма» — the end <b>of</b> the film. Сначала что, потом of, потом чьё.`,
        lit: [['the end', 'конец'], ['of', '(чего)'], ['the film', 'фильма']],
        bad: 'the game’s name / the film’s end', good: 'the name <b>of</b> the game / the end <b>of</b> the film',
        ex: [['What’s the name of this game?', 'Как называется эта игра?'], ['I didn’t see the end of the film.', 'Я не видел конец фильма.'], ['What’s the name of your character?', 'Как зовут твоего персонажа?']] },
      { t: 'check', q: 'Скажите: «Как называется эта игра?»', o: ['What’s the name of this game?', 'What’s this game’s name?', 'What’s the game name?'], a: 0,
        why: 'Игра — вещь → the name of…' },
      { t: 'check', q: 'Скажите: «Комната моего брата маленькая»', o: ['The room of my brother is small.', 'My brother’s room is small.', 'My brothers’ room is small.'], a: 1,
        why: 'Брат — человек, один → my brother’s room.' },
      { t: 'idea', text: `Итог юнита: my + предмет, mine без предмета · Whose…? — «чей?» · у людей Kate’s, у вещей the name of.`,
        rows: [['один хозяин', 'my sister’s room'], ['много хозяев на -s', 'my parents’ house'], ['вещь, фильм, игра', 'the end of the film']] }
    ]}
  ];
})();
