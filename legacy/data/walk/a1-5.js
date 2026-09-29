// Грамматика по шагам для юнита a1-5: Present Continuous — am/is/are + -ing, написание -ing, not и вопрос, «сейчас» или «обычно», погода и одежда.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-5'); if (!u) return;
  u.walk = [
    // ───────────── 1. «Сейчас» — отдельный способ сказать ─────────────
    { title: '«Обычно» и «прямо сейчас» — два разных способа', steps: [
      { t: 'idea', text: `Хотите сказать «Тихо, я работаю» — прямо сейчас. По-русски это те же слова, что «Я работаю из дома» (вообще). По-английски это <b>две разные фразы</b>.`,
        ex: [['I work from home.', 'Я работаю из дома. (вообще)'], ['Sorry, I am working.', 'Извини, я работаю. (сейчас)'], ['The cat is sleeping.', 'Кот спит. (сейчас)']] },
      { t: 'idea', text: `Для «прямо сейчас» английский берёт знакомое am / is / are и добавляет к слову-действию хвостик <b>-ing</b>. Получается «я есть работающий».`,
        lit: [['I', 'я'], ['am', '(есть)'], ['working', 'работающий'], ['now', 'сейчас']],
        ex: [['I am working now.', 'Я сейчас работаю.'], ['She is reading.', 'Она читает.'], ['They are playing.', 'Они играют.']],
        tip: `-ing значит «продолжается»: как видео на паузе — действие идёт прямо в этом кадре. Слово now (сейчас) — знак, что нужен -ing.` },
      { t: 'check', q: 'Скажите: «Не звони, я сейчас играю»', o: ['I play now.', 'I am playing now.', 'I playing now.'], a: 1,
        why: 'Прямо сейчас → am + playing. Без am нельзя.' },
      { t: 'idea', text: `Итог: одно русское «я работаю» — две английские фразы:`,
        rows: [['обычно, вообще', 'I work.'], ['прямо сейчас', 'I am working.']] }
    ]},

    // ───────────── 2. Формула ─────────────
    { title: 'Две половинки: am / is / are + -ing', steps: [
      { t: 'idea', text: `Фраза «сейчас» собирается из двух частей. Первая — am / is / are, выбираем по тому же правилу, что в уроке 1. Вторая — слово-действие с -ing.`,
        rows: [['I', 'am', 'I am working.'], ['he / she / it, Tom', 'is', 'Tom is working.'], ['you / we / they', 'are', 'We are working.']] },
      { t: 'check', q: 'Tom ___ cooking.', ru: 'Том готовит.', o: ['am', 'is', 'are'], a: 1, why: 'Tom — один, он → is.' },
      { t: 'idea', text: `Нужны <b>обе</b> половинки, как две половинки билета. Без am / is / are — сломано. Без -ing — тоже сломано.`,
        bad: 'I working now. / She is work.', good: 'I <b>am</b> work<b>ing</b> now. / She is work<b>ing</b>.',
        ex: [['I am waiting for you.', 'Я тебя жду.'], ['Look, Kate is coming!', 'Смотри, Кейт идёт!'], ['Max is making a new game.', 'Макс делает новую игру.']] },
      { t: 'check', q: 'They ___ a film at the moment.', ru: 'Они сейчас смотрят фильм.', o: ['watching', 'are watching', 'are watch'], a: 1,
        why: 'Нужны обе части: are + watching.' },
      { t: 'idea', text: `В разговоре am / is / are сжимают, как в уроке 1: I’m, she’s, they’re. Хвостик -ing никуда не девается.`,
        rows: [['I am working', 'I’m working'], ['She is reading', 'She’s reading'], ['They are playing', 'They’re playing']] },
      { t: 'idea', text: `Итог: <b>кто + am / is / are + слово-действие с -ing</b>.`,
        rows: [['I’m', 'working'], ['he / she / it is', 'working'], ['you / we / they are', 'working']] }
    ]},

    // ───────────── 3. Как пишется -ing ─────────────
    { title: 'Как пишется -ing', steps: [
      { t: 'idea', text: `Чаще всего -ing просто приклеивается к слову, ничего не меняя.`,
        ex: [['work → working', 'работать → работающий'], ['play → playing', 'играть'], ['read → reading', 'читать']] },
      { t: 'idea', text: `Если слово кончается на <b>-e</b>, которую не слышно (write, make, come), эта e уходит, и на её место встаёт -ing.`,
        rows: [['write', 'writing', 'She is writing.'], ['make', 'making', 'Max is making a game.'], ['come', 'coming', 'Kate is coming.']],
        bad: 'writeing, makeing', good: 'writ<b>ing</b>, mak<b>ing</b>',
        tip: `Буква e молчит — значит, её можно убрать без потерь.` },
      { t: 'check', q: 'She is ___ a message. (write)', ru: 'Она пишет сообщение.', o: ['writeing', 'writting', 'writing'], a: 2,
        why: 'Молчащая e уходит: write → writing, одна t.' },
      { t: 'idea', text: `Короткое слово из трёх букв, где в конце «гласная (a, e, i, o, u) + не гласная»: sit, run, get. Последняя буква пишется <b>два раза</b>.`,
        rows: [['sit', 'sitting'], ['run', 'running'], ['get', 'getting']],
        bad: 'siting, runing', good: 'si<b>tt</b>ing, ru<b>nn</b>ing',
        tip: `Двойная буква держит слово коротким: sitting читается как sit + ing, а не «сайтинг».` },
      { t: 'check', q: 'We are ___ at the table. (sit)', ru: 'Мы сидим за столом.', o: ['siting', 'sitting', 'siteing'], a: 1,
        why: 'sit — короткое, гласная + t → tt: sitting.' },
      { t: 'idea', opt: true, text: `Буквы y и w в конце не удваиваем: playing, snowing. Длинные слова тоже нет: listening. А lie (лежать) пишется lying.`,
        ex: [['play → playing', ''], ['listen → listening', ''], ['lie → lying', 'лежать → лежащий']] },
      { t: 'idea', text: `Итог: три правила написания -ing.`,
        rows: [['обычно', 'work → working'], ['молчащая -e уходит', 'make → making'], ['короткое слово, последняя буква два раза', 'sit → sitting']] }
    ]},

    // ───────────── 4. not ─────────────
    { title: '«Не» — как с am / is / are', steps: [
      { t: 'idea', text: `Хотите сказать «Я не сплю». В фразе уже есть am / is / are, поэтому «не» делаем как в уроке 2: <b>not</b> сразу после него. Помощник do здесь не нужен.`,
        lit: [['I', 'я'], ['am', '(есть)'], ['not', 'не'], ['sleeping', 'спящий']],
        ex: [['I am not sleeping.', 'Я не сплю.'], ['He is not working.', 'Он не работает.'], ['They are not playing.', 'Они не играют.']] },
      { t: 'check', q: 'Скажите: «Она не спит»', o: ['She doesn’t sleeping.', 'She is not sleeping.', 'She not sleeping.'], a: 1,
        why: 'Есть -ing → «не» через is + not. do с -ing не бывает.' },
      { t: 'idea', text: `Сжимаем тоже как в уроке 2: isn’t, aren’t, а с «я» — только I’m not.`,
        rows: [['I am not', 'I’m not sleeping.'], ['is not', 'He isn’t working.'], ['are not', 'They aren’t playing.']],
        tip: `Можно и вторым способом: she’s not working, they’re not playing. Оба верны.` },
      { t: 'check', q: 'We ___ waiting for you.', ru: 'Мы тебя не ждём.', o: ['don’t', 'aren’t', 'not'], a: 1,
        why: 'we → are → aren’t. don’t — для фраз без -ing.' },
      { t: 'idea', text: `Самая частая ошибка: русское «не делаю» тянет сказать don’t. Правило простое — увидели <b>-ing</b>, значит, do в этой фразе не появится никогда.`,
        bad: 'He doesn’t working.', good: 'He <b>isn’t</b> working.',
        ex: [['I don’t work on Sunday.', 'Я не работаю по воскресеньям. (обычно)'], ['I’m not working now.', 'Я сейчас не работаю.']] },
      { t: 'idea', text: `Итог: «не» + сейчас = <b>am / is / are + not + -ing</b>.`,
        rows: [['I', 'I’m not working.'], ['he / she / it', 'He isn’t working.'], ['you / we / they', 'They aren’t working.']] }
    ]},

    // ───────────── 5. Вопрос ─────────────
    { title: 'Вопрос: Are you sleeping?', steps: [
      { t: 'idea', text: `Хотите спросить «Ты спишь?». Как в уроке 2: am / is / are <b>прыгает в начало</b>, а -ing остаётся на месте.`,
        lit: [['Are', '(есть)'], ['you', 'ты'], ['sleeping', 'спящий'], ['?', '']],
        ex: [['Are you sleeping?', 'Ты спишь?'], ['Is he working?', 'Он работает?'], ['Are they playing?', 'Они играют?']],
        bad: 'Do you sleeping?', good: '<b>Are</b> you sleeping?' },
      { t: 'check', q: '___ he working at the moment?', ru: 'Он сейчас работает?', o: ['Do', 'Does', 'Is'], a: 2,
        why: 'Есть -ing → вопрос через is: Is he working?' },
      { t: 'idea', text: `«Кто» может быть длинным: Max, your friends, the cat. Он встаёт <b>между</b> is / are и -ing, и не разрывается.`,
        lit: [['Is', '(есть)'], ['your friend', 'твой друг'], ['playing', 'играющий'], ['?', '']],
        bad: 'Is working Max today?', good: 'Is <b>Max</b> working today?',
        ex: [['Are your friends playing?', 'Твои друзья играют?'], ['Is the cat sleeping?', 'Кот спит?']] },
      { t: 'check', q: 'Скажите: «Том готовит?»', o: ['Is cooking Tom?', 'Is Tom cooking?', 'Does Tom cooking?'], a: 1,
        why: 'Is — в начало, потом Tom, потом cooking.' },
      { t: 'idea', text: `Итог: вопрос = <b>Am / Is / Are + кто + -ing?</b>`,
        rows: [['Are you', 'sleeping?'], ['Is Tom', 'cooking?'], ['Are they', 'playing?']] }
    ]},

    // ───────────── 6. Короткий ответ и What are you doing? ─────────────
    { title: 'Короткий ответ и «What are you doing?»', steps: [
      { t: 'idea', text: `Отвечать целой фразой не нужно. Короткий ответ — как в уроке 2: «да / нет» + кто + am / is / are. Без -ing.`,
        rows: [['Are you sleeping?', 'Yes, I am.', 'No, I’m not.'], ['Is he working?', 'Yes, he is.', 'No, he isn’t.'], ['Are they playing?', 'Yes, they are.', 'No, they aren’t.']],
        bad: 'Are you working? — Yes, I do.', good: 'Are you working? — Yes, I <b>am</b>.' },
      { t: 'check', q: 'Are you sleeping? — No, I ___.', ru: 'Ты спишь? — Нет.', o: ['don’t', 'am not', 'isn’t'], a: 1,
        why: 'Спросили Are you → отвечаем I am not (I’m not).' },
      { t: 'idea', text: `Хотите спросить «Что ты делаешь?». Слово-вопрос (What, Where, Who) встаёт в самое начало, а дальше всё как обычно: are + you + -ing.`,
        lit: [['What', 'что'], ['are', '(есть)'], ['you', 'ты'], ['doing', 'делающий'], ['?', '']],
        ex: [['What are you doing?', 'Что ты делаешь?'], ['Where are you going?', 'Куда ты идёшь?'], ['Who are you waiting for?', 'Кого ты ждёшь?']],
        bad: 'What you are doing?', good: 'What <b>are you</b> doing?',
        tip: `What are you doing? — самая частая фраза в чатах и играх. Выучите целиком.` },
      { t: 'check', q: 'Скажите: «Что ты делаешь?» (сейчас)', o: ['What you doing?', 'What are you doing?', 'What do you doing?'], a: 1,
        why: 'What + are + you + doing. Без are нельзя, do с -ing не бывает.' },
      { t: 'idea', text: `Итог: короткий ответ — Yes, I am / No, I’m not. Слово-вопрос — в начало:`,
        rows: [['What', 'are you doing?'], ['Where', 'are you going?'], ['Who', 'are you waiting for?']] }
    ]},

    // ───────────── 7. Сейчас или обычно ─────────────
    { title: 'Сейчас или обычно? Как выбрать', steps: [
      { t: 'idea', text: `Перед фразой задайте себе один вопрос: это <b>обычно, регулярно</b> или <b>прямо сейчас</b>? Обычно — форма из урока 3 (I work). Сейчас — -ing (I’m working).`,
        rows: [['I work from home.', 'I’m working now.'], ['Max plays every evening.', 'Look! Max is playing.'], ['She usually drinks tea.', 'Today she’s drinking coffee.']],
        tip: `Слова-подсказки работают как дорожные знаки: every day, usually, often → «обычно»; now, right now, at the moment, Look! → «сейчас».` },
      { t: 'check', q: 'Max ___ from home every day.', ru: 'Макс работает из дома каждый день.', o: ['works', 'is working', 'working'], a: 0,
        why: 'every day — «обычно» → works, без -ing.' },
      { t: 'check', q: 'Look! The cat ___ on my laptop.', ru: 'Смотри! Кот спит на моём ноутбуке.', o: ['sleeps', 'is sleeping', 'sleeping'], a: 1,
        why: 'Look! — прямо сейчас → is sleeping.' },
      { t: 'idea', text: `Два похожих вопроса — разный смысл. <b>What do you do?</b> — «Кем ты работаешь?» (вообще). <b>What are you doing?</b> — «Что ты делаешь?» (сейчас).`,
        ex: [['What do you do? — I’m a designer.', 'Кем ты работаешь? — Я дизайнер.'], ['What are you doing? — I’m reading.', 'Что ты делаешь? — Читаю.']] },
      { t: 'idea', opt: true, text: `Некоторые слова — не действие, а то, что у нас в голове: like, love, want, need, know, understand. Их не ставят с -ing даже «прямо сейчас».`,
        bad: 'I’m wanting a coffee now.', good: 'I <b>want</b> a coffee now.',
        ex: [['I like this game.', 'Мне нравится эта игра.'], ['Do you understand me?', 'Ты меня понимаешь?'], ['I need help now.', 'Мне сейчас нужна помощь.']],
        tip: `Это самое частое место ошибок — не переживайте, дальше потренируемся.` },
      { t: 'check', q: 'I ___ a coffee now.', ru: 'Я сейчас хочу кофе.', o: ['want', 'am wanting', 'wanting'], a: 0,
        why: 'want — «в голове», не действие → без -ing, даже с now.' },
      { t: 'idea', text: `Итог: спросите себя «обычно или сейчас?» — и смотрите на слова-знаки.`,
        rows: [['every day, usually', 'I work.'], ['now, Look!', 'I’m working.'], ['like, want, know, need', 'всегда без -ing']] }
    ]},

    // ───────────── 8. Погода и одежда ─────────────
    { title: 'Идёт дождь, на нём куртка', steps: [
      { t: 'idea', text: `Хотите сказать «Идёт дождь». По-английски дождь не «идёт» — он «дождит», и делает это <b>it</b> (оно): It is raining.`,
        lit: [['It', 'оно'], ['is', '(есть)'], ['raining', 'дождящее']],
        ex: [['It’s raining.', 'Идёт дождь.'], ['Look, it’s snowing!', 'Смотри, идёт снег!'], ['It isn’t raining now.', 'Сейчас дождя нет.']],
        bad: 'Rain is going.', good: 'It’s <b>raining</b>.' },
      { t: 'check', q: 'Скажите: «Идёт снег!»', o: ['Snow is going!', 'It’s snowing!', 'It snows now!'], a: 1,
        why: 'Погода → it; прямо сейчас → is snowing.' },
      { t: 'idea', text: `Про погоду без действия — просто it is: It’s cold. It’s sunny today. А про одежду — <b>wearing</b>: «на нём куртка» = он носит куртку сейчас.`,
        lit: [['He', 'он'], ['is', '(есть)'], ['wearing', 'носящий'], ['a jacket', 'куртку']],
        ex: [['He is wearing a black jacket.', 'На нём чёрная куртка.'], ['I’m wearing jeans.', 'Я в джинсах.'], ['It’s warm today.', 'Сегодня тепло.']] },
      { t: 'check', q: 'Скажите: «На ней красное платье» (сейчас)', o: ['She is wearing a red dress.', 'On her a red dress.', 'She wears a red dress.'], a: 0,
        why: 'Сейчас на ней → is wearing. wears — это «обычно носит».' },
      { t: 'idea', text: `Итог: погода — через it, одежда «на ком-то сейчас» — через wearing.`,
        rows: [['идёт дождь / снег', 'It’s raining. / It’s snowing.'], ['холодно / тепло', 'It’s cold. / It’s warm.'], ['на нём куртка', 'He’s wearing a jacket.']] }
    ]}
  ];
})();
