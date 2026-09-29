// Грамматика по шагам для юнита a1-3: Present Simple — I work / she works, -s / -es / -ies, has, когда используется, always / usually / never, every day / in the morning / at seven.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-3'); if (!u) return;
  u.walk = [
    // ───────────── 1. Действие без am / is / are ─────────────
    { title: 'Действие без am / is / are', steps: [
      { t: 'idea', text: `Хотите сказать «Я работаю из дома». Слово «работаю» — это глагол (слово-действие: работаю, играю, живу), и по-английски всё очень просто: <b>I work</b> from home.`,
        lit: [['I', 'я'], ['work', 'работаю'], ['from home', 'из дома']],
        ex: [['I work from home.', 'Я работаю из дома.'], ['I live in Kazan.', 'Я живу в Казани.'], ['We play games at night.', 'Мы играем в игры ночью.']] },
      { t: 'idea', text: `В прошлых уроках мы всегда ставили am / is / are. Здесь его нет: слово-действие само держит предложение, и am рядом с ним — ошибка.`,
        bad: 'I am work from home.', good: 'I <b>work</b> from home.',
        tip: `В предложении ровно одно главное слово. Есть действие (work, play, live) — оно и главное. Нет действия — главным становится am / is / are.` },
      { t: 'check', q: 'Скажите: «Я живу в Москве»', o: ['I am live in Moscow.', 'I live in Moscow.', 'Am I live in Moscow.'], a: 1,
        why: 'Есть слово-действие live — am не нужен.' },
      { t: 'idea', text: `А когда am / is / are всё-таки нужен? Когда действия нет — мы говорим, <b>кто</b> мы или <b>какие</b>: I am a designer. I am tired.`,
        rows: [['Есть действие', 'I work. I play. I live.'], ['Нет действия', 'I am tired. I am a designer.']],
        ex: [['I work from home.', 'Я работаю из дома.'], ['I am at home.', 'Я дома.']] },
      { t: 'idea', text: `Итог: есть слово-действие — am / is / are не ставим.`,
        rows: [['Я работаю', 'I work'], ['Я живу', 'I live'], ['Я дизайнер (нет действия)', 'I am a designer']] }
    ]},

    // ───────────── 2. Хвостик -s ─────────────
    { title: 'Хвостик -s для он / она / оно', steps: [
      { t: 'idea', text: `Хотите сказать «Она работает из дома». Слово-действие берём как в словаре, но после <b>he / she / it</b> к нему прилипает буква <b>s</b>: work → work<b>s</b>.`,
        lit: [['She', 'она'], ['works', 'работает'], ['from home', 'из дома']],
        ex: [['She works from home.', 'Она работает из дома.'], ['He lives in London.', 'Он живёт в Лондоне.'], ['It sleeps on the chair.', 'Он (кот) спит на стуле.']] },
      { t: 'idea', text: `Для всех остальных — I, you, we, they — слово-действие остаётся как в словаре, без s. Хвостик только у he / she / it.`,
        rows: [['I / you / we / they', 'work', 'We play games.'], ['he / she / it', 'works', 'She plays games.']],
        tip: `Запоминалка: «он, она, оно — хвостик s».` },
      { t: 'check', q: 'Tom ___ English.', ru: 'Том говорит по-английски.', o: ['speak', 'speaks', 'is speak'], a: 1, why: 'Tom = he → speak + s. И без is: speak — действие.' },
      { t: 'check', q: 'My friends ___ games at night.', ru: 'Мои друзья играют в игры ночью.', o: ['play', 'plays', 'are play'], a: 0, why: 'My friends = they → без s и без are.' },
      { t: 'idea', text: `Имя, один человек или один предмет — это тоже he / she / it, значит с s. А много людей или предметов — это they, без s.`,
        ex: [['Max works from home.', 'Макс работает из дома.'], ['Max and Anna work from home.', 'Макс и Анна работают из дома.'], ['My cat sleeps in a box.', 'Мой кот спит в коробке.'], ['These cats sleep in a box.', 'Эти коты спят в коробке.']],
        tip: `Не путайте два хвостика: у предметов s значит «много» (cats), у слова-действия s значит «один» (sleeps). My friend works — My friends work: s как будто переезжает.` },
      { t: 'check', q: 'People ___ English here.', ru: 'Люди здесь говорят по-английски.', o: ['speaks', 'speak', 'is speak'], a: 1, why: 'people — это много (они) → без s.' },
      { t: 'idea', text: `Итог: he / she / it (и любое имя, один человек или предмет) → слово-действие + <b>s</b>. Остальные — без s.`,
        rows: [['I work', 'he works'], ['we live', 'she lives'], ['they play', 'Max plays']] }
    ]},

    // ───────────── 3. -s, -es, -ies ─────────────
    { title: '-s, -es или -ies: как пишется хвостик', steps: [
      { t: 'idea', text: `Обычно просто добавляем s: work → works, read → reads, like → likes. Но у нескольких слов хвостик пишется чуть иначе — правила те же, что у «много» из прошлого урока (box → boxes).`,
        rows: [['work', 'works'], ['read', 'reads'], ['like', 'likes']] },
      { t: 'idea', text: `Если слово кончается на <b>s, sh, ch, x</b>, добавляем <b>es</b> — иначе не выговорить: watch → watches. И два коротких слова на <b>o</b> тоже берут es: go → goes, do → does.`,
        rows: [['watch', 'watches', 'ch → es'], ['go', 'goes', 'o → es'], ['do', 'does', 'o → es']],
        ex: [['He watches videos.', 'Он смотрит видео.'], ['She goes to work at eight.', 'Она идёт на работу в восемь.']] },
      { t: 'check', q: 'He ___ videos in the evening.', ru: 'Он смотрит видео вечером.', o: ['watchs', 'watches', 'watchies'], a: 1, why: 'После ch добавляем es.' },
      { t: 'idea', text: `Слово кончается на <b>y</b>? Смотрим на букву перед y. Если это не гласная (гласные — a, e, i, o, u), то y меняем на <b>ies</b>: study → studies. Если гласная — просто s: play → plays.`,
        rows: [['study', 'studies', 'd + y → ies'], ['play', 'plays', 'a + y → s']],
        bad: 'She studys English. / She plaies games.', good: 'She stud<b>ies</b> English. / She pla<b>ys</b> games.' },
      { t: 'check', q: 'Anna ___ English every day.', ru: 'Анна учит английский каждый день.', o: ['studys', 'studies', 'studyes'], a: 1, why: 'Перед y стоит d (не гласная) → ies.' },
      { t: 'check', q: 'My cat ___ in the box.', ru: 'Мой кот играет в коробке.', o: ['plays', 'plaies', 'playes'], a: 0, why: 'Перед y гласная a → просто s.' },
      { t: 'idea', text: `Итог: обычно +s; после s / sh / ch / x и у go, do — +es; y после «не гласной» → ies.`,
        rows: [['works, reads, plays', '+ s'], ['watches, goes, does', '+ es'], ['studies', 'y → ies']] }
    ]},

    // ───────────── 4. has и звук хвостика ─────────────
    { title: 'has и как звучит хвостик', steps: [
      { t: 'idea', text: `Одно слово не по правилам — <b>have</b> (иметь, «у меня есть»). После he / she / it оно превращается в <b>has</b>, и это очень частое слово.`,
        lit: [['She', 'она'], ['has', 'имеет (у неё есть)'], ['a dog', 'собаку']],
        bad: 'He haves a dog.', good: 'He <b>has</b> a dog.',
        ex: [['She has a dog.', 'У неё есть собака.'], ['He has breakfast at eight.', 'Он завтракает в восемь.'], ['Max has a new laptop.', 'У Макса новый ноутбук.']] },
      { t: 'check', q: 'Max ___ a big table.', ru: 'У Макса большой стол.', o: ['haves', 'has', 'have'], a: 1, why: 'have после he / she / it → has.' },
      { t: 'idea', text: `На письме хвостик один, а звучит по-разному. После k, p, t, f — глухое [с]: works, likes. После остальных букв — звонкое [з]: plays, lives, reads.`,
        rows: [['[с]', 'после k, p, t, f', 'works, likes, gets up'], ['[з]', 'после остальных', 'plays, lives, reads, goes']],
        tip: `Русскоговорящие часто говорят везде «с». Попробуйте: «плейз», «ливз», «ридз».` },
      { t: 'idea', text: `После s / sh / ch / x хвостик es — это отдельный слог [из]: watches — «уотч-из». А слово does звучит неожиданно — «даз».`,
        rows: [['watches', '«уотч-из»'], ['does', '«даз»'], ['goes', '«гоуз»']],
        tip: `Правило то же, что у «много»: books [с], phones [з], boxes [из]. Выучили одно — знаете и другое.` },
      { t: 'check', q: 'Как звучит хвостик в watches?', ru: 'watches — смотрит', o: ['[с]', '[з]', '[из]'], a: 2, why: 'После ch появляется лишний слог [из].' },
      { t: 'idea', text: `Итог: have → <b>has</b>; хвостик звучит трояко.`,
        rows: [['works, likes', '[с]'], ['plays, lives', '[з]'], ['watches', '[из]']] }
    ]},

    // ───────────── 5. Когда так говорят ─────────────
    { title: 'Когда так говорят: обычно, всегда, «мне нравится»', steps: [
      { t: 'idea', text: `Эти предложения — про «вообще, обычно»: что я делаю каждый день, где живу, где работаю. Не «прямо сейчас», а моя обычная жизнь.`,
        ex: [['I get up at seven.', 'Я встаю в семь.'], ['Anna works in an office.', 'Анна работает в офисе.'], ['She lives in Kazan.', 'Она живёт в Казани.']] },
      { t: 'idea', text: `И про то, что верно всегда — как устроен мир: кошки любят коробки, дети любят игры.`,
        ex: [['Cats love boxes.', 'Кошки любят коробки.'], ['Children like games.', 'Дети любят игры.'], ['People in London speak English.', 'Люди в Лондоне говорят по-английски.']],
        tip: `Спросите себя: «это так каждый день / всегда?» Если да — говорим именно так: I work, she works.` },
      { t: 'check', q: 'Скажите: «Дети любят игры»', o: ['Children likes games.', 'Children like games.', 'Children are like games.'], a: 1,
        why: 'children — много (они) → без s; like — действие, значит are не нужен.' },
      { t: 'idea', text: `«Мне нравится», «я хочу» — тоже обычные слова-действия: <b>like</b>, <b>love</b>, <b>want</b>. Тот, кому нравится, стоит в начале, и никакого am рядом.`,
        lit: [['I', 'я'], ['like', 'люблю (мне нравится)'], ['this game', 'эту игру']],
        bad: 'I am like this game. / Me like this game.', good: 'I <b>like</b> this game.',
        ex: [['I like this game.', 'Мне нравится эта игра.'], ['Max likes coffee.', 'Максу нравится кофе.'], ['She wants a new phone.', 'Она хочет новый телефон.']] },
      { t: 'check', q: 'Скажите: «Она хочет новый телефон»', o: ['She wants a new phone.', 'She is want a new phone.', 'She want a new phone.'], a: 0,
        why: 'want — действие, is не нужен; she → want + s.' },
      { t: 'idea', text: `Итог: обычно / всегда / каждый день → слово-действие как в словаре (+s для he / she / it). like, love, want — такие же слова.`,
        rows: [['привычка', 'I get up at seven.'], ['факт', 'Cats love boxes.'], ['нравится / хочу', 'She likes tea. I want coffee.']] }
    ]},

    // ───────────── 6. always / usually / never ─────────────
    { title: 'Всегда, обычно, никогда — куда ставить', steps: [
      { t: 'idea', text: `Хотите сказать «Я обычно встаю в семь». Слово «обычно» — <b>usually</b>, и стоит оно прямо <b>перед</b> словом-действием.`,
        lit: [['I', 'я'], ['usually', 'обычно'], ['get up', 'встаю'], ['at seven', 'в семь']],
        rows: [['always', 'всегда', '100%'], ['usually / often', 'обычно / часто', '80% / 60%'], ['sometimes / never', 'иногда / никогда', '30% / 0%']],
        ex: [['I usually get up at seven.', 'Я обычно встаю в семь.'], ['She often plays with friends.', 'Она часто играет с друзьями.'], ['We sometimes eat at the office.', 'Мы иногда едим в офисе.']] },
      { t: 'check', q: 'Правильный порядок:', o: ['We play often games.', 'We often play games.', 'We often games play.'], a: 1, why: 'often — прямо перед словом-действием play.' },
      { t: 'idea', text: `С am / is / are наоборот: слово «как часто» стоит <b>после</b> него. He is always late.`,
        bad: 'He always is late.', good: 'He <b>is always</b> late.',
        ex: [['He is always late.', 'Он всегда опаздывает.'], ['I am never tired in the morning.', 'Я никогда не устаю по утрам.'], ['She is usually happy.', 'Она обычно весёлая.']],
        tip: `Как not в прошлом уроке: is not → is never. am / is / are идёт первым, а «как часто» — за ним.` },
      { t: 'check', q: 'Правильный порядок:', o: ['She usually is happy.', 'She is usually happy.', 'Usually is she happy.'], a: 1, why: 'С is слово «как часто» стоит после него.' },
      { t: 'idea', text: `<b>never</b> уже значит «не». Второе «не» не нужно, а слово-действие не меняется: у he / she / it всё так же с s.`,
        lit: [['She', 'она'], ['never', 'никогда не'], ['drinks', 'пьёт'], ['coffee', 'кофе']],
        bad: 'She never not drinks coffee.', good: 'She <b>never drinks</b> coffee.' },
      { t: 'check', q: 'He never ___ breakfast.', ru: 'Он никогда не завтракает.', o: ['has', 'have', 'not has'], a: 0, why: 'never не меняет слово-действие: he → has. Второе «не» не нужно.' },
      { t: 'idea', text: `Итог: слово «как часто» — перед действием, но после am / is / are.`,
        rows: [['I usually get up', 'перед действием'], ['She is always late', 'после is'], ['She never drinks', 'never = уже «не»']] }
    ]},

    // ───────────── 7. every day / in the morning / at seven ─────────────
    { title: 'Когда: каждый день, утром, в семь', steps: [
      { t: 'idea', text: `Хотите сказать «Я читаю каждый день». Слова о времени ставим в <b>конец</b> предложения — не между «я» и действием, как бывает в русском.`,
        lit: [['I', 'я'], ['read', 'читаю'], ['every day', 'каждый день']],
        bad: 'I every day read.', good: 'I read <b>every day</b>.',
        ex: [['I read every day.', 'Я читаю каждый день.'], ['Max studies English every day.', 'Макс учит английский каждый день.'], ['She plays games every evening.', 'Она играет в игры каждый вечер.']] },
      { t: 'idea', text: `«Утром» и «вечером» — с двумя маленькими словами <b>in the</b>: in the morning, in the evening. А «ночью» — <b>at</b> night.`,
        rows: [['in the morning', 'утром'], ['in the evening', 'вечером'], ['at night', 'ночью']],
        tip: `Учите как целое: in the morning — три слова, at night — два.` },
      { t: 'check', q: 'Скажите: «Он читает вечером»', o: ['He reads in the evening.', 'He in the evening reads.', 'He reads at the evening.'], a: 0,
        why: 'he → reads; in the evening — в конце.' },
      { t: 'check', q: 'We play games ___ night.', ru: 'Мы играем в игры ночью.', o: ['in the', 'at', 'on'], a: 1, why: '«ночью» — at night, без the.' },
      { t: 'idea', text: `Время по часам — всегда <b>at</b>: at seven, at eight, at twelve. Тоже в конце.`,
        bad: 'He goes to work in seven.', good: 'He goes to work <b>at seven</b>.',
        ex: [['I get up at seven.', 'Я встаю в семь.'], ['He goes to work at eight.', 'Он идёт на работу в восемь.'], ['We eat at twelve.', 'Мы едим в двенадцать.']] },
      { t: 'check', q: 'She has breakfast ___ eight.', ru: 'Она завтракает в восемь.', o: ['in', 'at', 'on'], a: 1, why: 'Время по часам → at.' },
      { t: 'idea', text: `Итог: слова о времени — в конец предложения.`,
        rows: [['every day / every evening', 'каждый день / вечер'], ['in the morning / in the evening', 'утром / вечером'], ['at night / at seven', 'ночью / в семь']] }
    ]}
  ];
})();
