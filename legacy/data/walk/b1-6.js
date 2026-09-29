// Грамматика по шагам для юнита b1-6: выбор формы будущего по смыслу — когда принято решение, -ing и форма «как всегда» для будущего (тонкости), going to глубже (намерение, признаки), was / were going to (не сбылось), I’ll и won’t (решение, обещание, отказ), Will you…? / Shall I…? / Shall we…?, прогнозы с will (probably, I’m sure, I wonder, I hope), will или going to — как выбрать.
(function () {
  const u = COURSE.units.find((x) => x.id === 'b1-6'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: 'Главное: КОГДА вы решили', steps: [
      { t: 'idea', text: `Вы уже знаете три способа сказать о будущем: I’m meeting (договорились), I’m going to (решил), I’ll (решаю сейчас или думаю). По-русски на всё хватает одного «позвоню». По-английски выбор зависит от того, <b>когда появилось решение</b>.`,
        rows: [['договорились', 'I’m meeting Kate tomorrow.'], ['решил раньше', 'I’m going to call her.'], ['решаю сейчас', 'OK, I’ll call her.']] },
      { t: 'idea', text: `Одна русская фраза — два английских ответа. Друг говорит: «Тебе звонил Гарри». Если вы узнали это только что — <b>I’ll</b>. Если уже знали и решили раньше — <b>I’m going to</b>.`,
        ex: [['Harry called you. — Did he? OK, I’ll call him.', 'Тебе звонил Гарри. — Да? Ладно, я ему позвоню. (узнал сейчас)'], ['Harry called you. — I know. I’m going to call him.', 'Тебе звонил Гарри. — Знаю, я ему позвоню. (решил раньше)']] },
      { t: 'check', q: '— The printer isn’t working. — Oh, really? I ___ at it.', ru: '— Принтер не работает. — Да? Сейчас посмотрю.', o: ['’ll look', '’ll looking', 'look'], a: 0,
        why: '«Oh, really?» — узнал только сейчас и тут же решил → I’ll.' },
      { t: 'idea', text: `Итог: сначала спросите себя «договорились? решил раньше? решаю сейчас?» — и форма найдётся. Ещё две вещи — расписание и прогноз — разберём ниже.`,
        rows: [['договорились', 'am / is / are + -ing'], ['решил раньше', 'going to'], ['решаю сейчас', 'will (’ll)']] }
    ]},

    // ───────────── 2. -ing и «как всегда» для будущего ─────────────
    { title: 'Договорились и расписание: тонкости', steps: [
      { t: 'idea', text: `Вы уже знаете: договорились → am / is / are + -ing. Новое: для таких планов will звучит неестественно — как будто вы решаете только сейчас.`,
        bad: 'What do you do tonight?', good: 'What <b>are</b> you <b>doing</b> tonight? Alex <b>is getting</b> married next month.',
        tip: `Осторожно: What do you do? — это «Кем ты работаешь?». Про планы — только What are you doing…?` },
      { t: 'check', q: 'What ___ on Saturday evening? — I’m meeting some friends.', ru: 'Что ты делаешь в субботу вечером? — Встречаюсь с друзьями.', o: ['do you do', 'are you doing', 'you are doing'], a: 1,
        why: 'Спрашиваем о договорённостях → are you doing. What do you do? — про работу.' },
      { t: 'idea', text: `С go и come форма -ing значит «вот прямо сейчас иду». По-русски «Иду!», «Я спать» — по-английски обязательно am + -ing.`,
        lit: [['I', 'я'], ['’m', '(есть)'], ['coming', 'идущий']],
        ex: [['I’m tired. I’m going to bed.', 'Я устал. Я спать.'], ['Are you ready? — Yes, I’m coming!', 'Ты готов? — Да, иду!']] },
      { t: 'check', q: 'Скажите: «Ужин готов! — Иду!»', o: ['Dinner’s ready! — I come!', 'Dinner’s ready! — I’m coming!', 'Dinner’s ready! — I coming!'], a: 1,
        why: '«Иду прямо сейчас» → I’m coming, не I come.' },
      { t: 'idea', text: `Вы уже знаете: расписание → форма «как всегда» (leaves, starts). Новое: так можно и про людей, если план жёсткий, как в расписании. А для встреч с людьми обычнее -ing.`,
        ex: [['I start my new job on Monday.', 'В понедельник я выхожу на новую работу.'], ['What time do you finish tomorrow?', 'Во сколько ты завтра заканчиваешь?'], ['What time are you meeting Kate?', 'Во сколько ты встречаешься с Кейт?']],
        tip: `Про экзамен, запись к врачу, урок часто говорят просто I’ve got: I’ve got an exam next week.` },
      { t: 'check', q: 'Скажите: «Во сколько завтра начинается матч?» (по расписанию)', o: ['What time does the match start tomorrow?', 'What time the match starts tomorrow?', 'What time will the match starts tomorrow?'], a: 0,
        why: 'Расписание → форма «как всегда», вопрос через does.' },
      { t: 'idea', text: `Итог: договорились — -ing (не will); «иду прямо сейчас» — -ing; расписание и жёсткий график — форма «как всегда».`,
        rows: [['договорились', 'What are you doing tonight?'], ['прямо сейчас', 'I’m coming!'], ['расписание', 'My train leaves at 6.40.']] }
    ]},

    // ───────────── 3. going to глубже ─────────────
    { title: 'going to: намерение и признаки', steps: [
      { t: 'idea', text: `Вы уже знаете: going to = «я уже решил». Договорился ли с кем-то — неважно. А <b>I’m just going to</b> — «я только сделаю это (и сразу)».`,
        ex: [['Your shoes are dirty. — I know. I’m going to clean them.', 'У тебя грязные ботинки. — Знаю, почищу. (решил, ни с кем не договаривался)'], ['I’m just going to reply to this email.', 'Я только отвечу на это письмо.']] },
      { t: 'idea', text: `Часто -ing и going to подходят обе. Но есть пара, где смысл разный: «не знаю планов на завтра» и «не знаю, как быть».`,
        rows: [['I don’t know what I’m doing tomorrow.', 'не знаю своих планов на завтра'], ['I don’t know what I’m going to do.', 'не решил, как быть']] },
      { t: 'check', q: 'Скажите: «Я поругался с начальником и не знаю, как мне теперь быть»', o: ['I argued with my boss and I don’t know what I do.', 'I argued with my boss and I don’t know what I’m going to do.', 'I argued with my boss and I don’t know what I’m doing tomorrow.'], a: 1,
        why: '«Как быть» — решения ещё нет → what I’m going to do.' },
      { t: 'idea', text: `Вы уже знаете: going to — прогноз, когда <b>признаки видно сейчас</b>. Признак бывает и внутри вас (плохо себя чувствую), и в новостях.`,
        ex: [['Look at his health bar — he’s going to die!', 'Посмотри на его здоровье — его сейчас убьют!'], ['I feel awful. I think I’m going to be sick.', 'Мне ужасно. Кажется, меня сейчас стошнит.'], ['Prices are going to go up.', 'Цены вырастут.']] },
      { t: 'check', q: 'Look at the time! We ___ late.', ru: 'Посмотри на часы! Мы опоздаем.', o: ['are going to be', 'going to be', 'are going be'], a: 0,
        why: 'Видно по часам → are + going to + be. Нужны все три части.' },
      { t: 'idea', opt: true, text: `В речи, песнях и чатах going to звучит как <b>gonna</b>. Понимать надо, но в рабочих письмах пишите полностью.`,
        ex: [['I’m gonna win.', 'Я выиграю.'], ['I’m going to finish it today.', 'Я закончу это сегодня. (в письме)']] },
      { t: 'idea', text: `Итог: going to — решил (неважно, договорился ли) или видно по признакам.`,
        rows: [['решил', 'I’m going to clean them.'], ['сразу, только', 'I’m just going to reply.'], ['видно сейчас', 'I’m going to be sick.']] }
    ]},

    // ───────────── 4. was / were going to ─────────────
    { title: '«Собирался, но…»: was going to', steps: [
      { t: 'idea', text: `Хотите сказать «Мы собирались лететь, но поехали поездом». План был в прошлом и <b>не сбылся</b>. Берём going to и меняем am / is / are на <b>was / were</b>.`,
        lit: [['We', 'мы'], ['were', '(были)'], ['going to', 'собирающиеся'], ['fly', 'лететь'], ['but…', 'но…']],
        ex: [['We were going to fly, but we took the train in the end.', 'Мы собирались лететь, но в итоге поехали поездом.'], ['I was going to take a day off, but I couldn’t.', 'Я собирался взять выходной, но не смог.']] },
      { t: 'idea', text: `Так же — ожидание, которое не сбылось, и «как раз собирался». А если вы кого-то перебили: «что ты хотел сказать?»`,
        ex: [['I was just going to call you!', 'Я как раз собирался тебе позвонить!'], ['I thought it was going to be hard, but it wasn’t.', 'Думал, будет сложно, а нет.'], ['Sorry, what were you going to say?', 'Прости, что ты хотел сказать?']] },
      { t: 'check', q: 'We ___ buy a new sofa, but we spent the money on a trip.', ru: 'Мы собирались купить новый диван, но потратили деньги на поездку.', o: ['are going to', 'were going to', 'will'], a: 1,
        why: 'План в прошлом, который не состоялся → were going to.' },
      { t: 'check', q: 'Скажите: «Прости, я тебя перебил. Что ты хотел сказать?»', o: ['Sorry, I interrupted you. What you were going to say?', 'Sorry, I interrupted you. What were you going to say?', 'Sorry, I interrupted you. What did you going to say?'], a: 1,
        why: 'В вопросе were встаёт перед you: What were you going to say?' },
      { t: 'idea', text: `Итог: собирался, но не вышло → <b>was / were going to</b>.`,
        rows: [['план', 'I was going to take a day off, but…'], ['ожидание', 'I thought it was going to be hard.'], ['вопрос', 'What were you going to say?']] }
    ]},

    // ───────────── 5. I’ll и won’t ─────────────
    { title: 'I’ll — решаю, обещаю; won’t — «не хочет»', steps: [
      { t: 'idea', text: `Вы уже знаете: <b>I’ll</b> — решение, которое родилось в эту секунду. Форма «как всегда» тут не подходит. Зачем ещё нужен I’ll:`,
        bad: 'Oh, I forgot to reply. I reply now.', good: 'Oh, I forgot to reply. I<b>’ll reply</b> now.',
        rows: [['предложить помощь', 'That box looks heavy. I’ll help you.'], ['согласиться', 'Sure, I’ll send it tonight.'], ['пообещать', 'I’ll pay you back on Friday.']] },
      { t: 'check', q: 'Скажите: «Коробка тяжёлая? Давай я помогу»', o: ['Is the box heavy? I help you.', 'Is the box heavy? I’ll help you.', 'Is the box heavy? I’m helping you.'], a: 1,
        why: 'Предлагаете помощь прямо сейчас → I’ll.' },
      { t: 'idea', text: `Новое: <b>won’t</b> значит ещё и «отказывается, никак не хочет» — про людей и даже про вещи.`,
        ex: [['I’ve tried to help, but she won’t listen.', 'Я пытался помочь, но она не хочет слушать.'], ['The game won’t launch.', 'Игра никак не запускается.'], ['The door won’t open.', 'Дверь не открывается.']] },
      { t: 'check', q: 'Скажите: «Мой ноутбук никак не включается»', o: ['My laptop won’t turn on.', 'My laptop not will turn on.', 'My laptop won’t to turn on.'], a: 0,
        why: '«Никак не хочет» → won’t + слово-действие без to.' },
      { t: 'idea', text: `Но то, что <b>решено раньше</b>, через will не говорят. Сравните: договорились вчера → -ing; договариваемся прямо в разговоре → I’ll.`,
        ex: [['I’m meeting Kate tomorrow.', 'Завтра встречаюсь с Кейт. (договорились раньше)'], ['I’ll meet you at ten, OK?', 'Встретимся в десять, хорошо? (договариваемся сейчас)']] },
      { t: 'check', q: 'I can’t play on Saturday. I ___ on holiday — we’ve booked a hotel.', ru: 'Я не могу играть в субботу. Я уезжаю в отпуск — мы забронировали отель.', o: ['’ll go', '’m going', 'go'], a: 1,
        why: 'Отель забронирован — решено раньше → I’m going, не I’ll go.' },
      { t: 'idea', text: `Итог: I’ll — решаю, предлагаю, обещаю прямо сейчас; won’t — ещё и «никак не хочет».`,
        rows: [['решаю сейчас', 'I’ll reply now.'], ['отказ', 'The game won’t launch.'], ['решено раньше', 'I’m going on holiday.']] }
    ]},

    // ───────────── 6. Will you…? / Shall I…? ─────────────
    { title: 'Will you…? и Shall I…?', steps: [
      { t: 'idea', text: `Вы уже знаете: Shall I…? — «мне сделать?», Shall we…? — «давай вместе?». Новое: <b>Will you…?</b> — просьба «сделай, пожалуйста».`,
        rows: [['Shall I shut the door?', 'Закрыть дверь? (я могу)'], ['Will you shut the door?', 'Закрой дверь. (хочу, чтобы ты)']],
        ex: [['Will you turn the music down, please?', 'Сделай, пожалуйста, музыку потише.']] },
      { t: 'check', q: 'Скажите соседу: «Сделай, пожалуйста, потише»', o: ['Shall you turn it down, please?', 'Will you turn it down, please?', 'Do you turn it down, please?'], a: 1,
        why: 'Просим другого → Will you…? Shall — только с I и we.' },
      { t: 'idea', text: `Когда просите совета — слово-вопрос впереди: <b>What shall I do?</b> («Что мне делать?»), <b>Where shall we…?</b>`,
        ex: [['I’ve lost my passport. What shall I do?', 'Я потерял паспорт. Что мне делать?'], ['Where shall we have lunch?', 'Где пообедаем?'], ['Shall we catch up next week?', 'Может, встретимся на следующей неделе?']] },
      { t: 'check', q: 'I’ve lost my keys. What ___?', ru: 'Я потерял ключи. Что мне делать?', o: ['I shall do', 'shall I do', 'shall do I'], a: 1,
        why: 'Вопрос-совет: What + shall + I + do.' },
      { t: 'idea', opt: true, text: `В обычных фразах shall бывает только с I и we — это официально и по-британски. В разговоре все говорят I’ll / we’ll. «Не» — shan’t = won’t.`,
        ex: [['We shall probably go to Italy. = We’ll probably go to Italy.', 'Мы, наверное, поедем в Италию.'], ['I shan’t be here tomorrow. = I won’t be here tomorrow.', 'Завтра меня здесь не будет.']],
        bad: 'She shall be angry.', good: 'She <b>will</b> be angry.' },
      { t: 'idea', text: `Итог: прошу тебя → Will you…? Предлагаю сам → Shall I…? Советуюсь → What shall I / we…?`,
        rows: [['просьба', 'Will you close the window?'], ['предложение', 'Shall I close the window?'], ['совет', 'What shall we do?']] }
    ]},

    // ───────────── 7. Прогнозы с will ─────────────
    { title: 'Прогнозы: probably, I’m sure, I wonder, I hope', steps: [
      { t: 'idea', text: `Вы уже знаете: will — когда думаете или ожидаете, что так будет. Новое — слова-спутники: <b>I’m sure</b> («уверен»), <b>I wonder</b> («интересно»), <b>I bet</b> («спорим»).`,
        ex: [['Don’t worry, I’m sure you’ll pass.', 'Не волнуйся, уверен, ты сдашь.'], ['I wonder what will happen in season two.', 'Интересно, что будет во втором сезоне.'], ['I bet he’ll be late again.', 'Спорим, он опять опоздает.']] },
      { t: 'idea', text: `С probably («наверное») порядок твёрдый: «да» — после will, «нет» — перед won’t.`,
        bad: 'I probably will be late. / I won’t probably come.', good: 'I<b>’ll probably</b> be late. / I <b>probably won’t</b> come.',
        rows: [['да', 'will + probably'], ['нет', 'probably + won’t']] },
      { t: 'check', q: 'She ___ come to the party.', ru: 'Она, скорее всего, не придёт на вечеринку.', o: ['won’t probably', 'probably won’t', 'not probably will'], a: 1,
        why: '«Нет» → probably стоит перед won’t.' },
      { t: 'idea', text: `А после <b>I hope</b> обычно ставят форму «как всегда», хотя речь о будущем: слово hope уже само смотрит вперёд.`,
        ex: [['I hope it doesn’t rain tomorrow.', 'Надеюсь, завтра не будет дождя.'], ['I hope you enjoy the game.', 'Надеюсь, игра тебе понравится.']],
        tip: `I hope it won’t rain тоже встречается, но форма «как всегда» звучит естественнее.` },
      { t: 'check', q: 'I hope the servers ___ on the first day.', ru: 'Надеюсь, серверы не упадут в первый день.', o: ['don’t crash', 'not crash', 'doesn’t crash'], a: 0,
        why: 'После I hope — форма «как всегда»; серверов много → don’t crash.' },
      { t: 'idea', opt: true, text: `will бывает и про <b>сейчас</b> — как уверенная догадка: «он наверняка…».`,
        ex: [['Don’t call Dima now. He’ll be busy.', 'Не звони Диме сейчас. Он наверняка занят.']] },
      { t: 'idea', text: `Итог: прогноз-мнение → will со спутниками; probably — после will, но перед won’t; после I hope — форма «как всегда».`,
        rows: [['уверен', 'I’m sure you’ll pass.'], ['наверное', 'I’ll probably… / I probably won’t…'], ['надеюсь', 'I hope it doesn’t rain.']] }
    ]},

    // ───────────── 8. will или going to ─────────────
    { title: 'will или going to: выбор за 3 секунды', steps: [
      { t: 'idea', text: `Решение: принято сейчас → will, принято раньше → going to. Прогноз: по мнению и опыту → will, по фактам прямо сейчас → going to.`,
        rows: [['решаю сейчас', 'Great idea! We’ll invite everyone.'], ['решил раньше', 'We’re going to invite everyone.'], ['мнение / опыт', 'Jane will be late. She’s always late.']] },
      { t: 'check', q: '— Anna is in hospital. — Yes, I know. I ___ her this evening.', ru: '— Анна в больнице. — Да, знаю. Я навещу её сегодня вечером.', o: ['’m going visit', '’m going to visit', 'visit'], a: 1,
        why: '«Yes, I know» — уже знал и решил раньше → going to.' },
      { t: 'check', q: '— We haven’t got any milk. — Really? I ___ some on my way home.', ru: '— У нас нет молока. — Правда? Куплю по дороге домой.', o: ['buy', '’ll buy', '’ll to buy'], a: 1,
        why: '«Really?» — узнал только сейчас → I’ll.' },
      { t: 'idea', text: `Когда прогноз — просто мнение, часто годятся обе формы. А если «доказательство» прямо перед глазами — только going to.`,
        ex: [['I think the weather will be nice. = I think it’s going to be nice.', 'Думаю, погода будет хорошая. (обе годятся)'], ['These boots are good. They’ll last for years.', 'Ботинки хорошие. Прослужат годы.']],
        bad: 'Look at those clouds! It will rain.', good: 'Look at those clouds! It<b>’s going to rain</b>.' },
      { t: 'check', q: 'Скажите: «Мы собирались запустить приложение летом, но клиент поменял дизайн»', o: ['We’re going to launch the app in summer, but the client changed the design.', 'We were going to launch the app in summer, but the client changed the design.', 'We’ll launch the app in summer, but the client changed the design.'], a: 1,
        why: 'План в прошлом, который не сбылся → were going to.' },
      { t: 'idea', opt: true, text: `Тонкость: I think Max <b>is going</b> to the party — он, по-моему, уже решил. I think Max <b>will go</b> — по-моему, он решит пойти.`,
        ex: [['I think Max is going to the party.', 'По-моему, Макс идёт на вечеринку. (уже решил)'], ['I think Max will go to the party.', 'Думаю, Макс пойдёт. (моё мнение)']] },
      { t: 'idea', text: `Итог урока: договорились → -ing; расписание → форма «как всегда»; решил раньше или видно по фактам → going to; решаю сейчас, обещаю, думаю → will; не сбылось → was going to.`,
        rows: [['договорились / расписание', 'I’m meeting Kate. / The train leaves at 6.'], ['решил раньше / видно', 'I’m going to… / It’s going to rain.'], ['сейчас / мнение', 'I’ll help. / I’m sure you’ll pass.']] }
    ]}
  ];
})();
