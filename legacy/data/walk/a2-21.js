// Грамматика по шагам для юнита a2-21: предлог в конце вопроса (Who are you talking to?), короткие Who with? / What for?, What is it like? vs What does it look like?, вопрос внутри фразы (Do you know where Max is?), без do/does/did, if / whether = «ли», what to do.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a2-21'); if (!u) return;
  u.walk = [
    // ───────────── 1. Предлог уезжает в конец ─────────────
    { title: '«С кем ты говоришь?» — предлог уезжает в конец', steps: [
      { t: 'idea', text: `Хотите спросить: «<b>С кем</b> ты разговариваешь?». По-русски «с» стоит в самом начале. По-английски первым идёт только слово-вопрос <b>who</b>, а маленькое «с» (<b>to</b>) уезжает в самый конец.`,
        lit: [['Who', 'кто / кем'], ['are', '(помощник)'], ['you', 'ты'], ['talking', 'разговариваешь'], ['to?', 'с?']],
        ex: [['Who are you talking to?', 'С кем ты разговариваешь?'], ['Who are you waiting for?', 'Кого ты ждёшь?'], ['What are you looking at?', 'На что ты смотришь?']] },
      { t: 'idea', text: `Почему так? Маленькое слово «прилипает» к своему слову-действию: <b>talk to</b>, <b>wait for</b>, <b>look at</b>. В вопросе слово-действие стоит ближе к концу — и его «хвостик» едет вместе с ним.`,
        rows: [['Anna is talking to somebody.', 'Who is Anna talking to?'], ['He is waiting for someone.', 'Who is he waiting for?']],
        bad: 'With who are you playing?', good: '<b>Who</b> are you playing <b>with</b>?',
        tip: `Такие маленькие слова (to, for, at, about, with) зовут предлогами. Помощник (are, do, did) стоит, как в A1, сразу после слова-вопроса.` },
      { t: 'check', q: 'Скажите: «О чём ты думаешь?»', o: ['About what are you thinking?', 'What are you thinking about?', 'What you are thinking about?'], a: 1,
        why: 'What — в начале, about — в конце, а между ними обычный порядок вопроса: are you thinking.' },
      { t: 'idea', text: `Итог: слово-вопрос — в начало, предлог — в самый конец.`,
        rows: [['С кем ты говоришь?', 'Who are you talking to?'], ['О чём ты думаешь?', 'What are you thinking about?']] }
    ]},

    // ───────────── 2. Частые пары слово-действие + предлог ─────────────
    { title: 'Частые пары: work on, listen to, belong to', steps: [
      { t: 'idea', text: `У многих слов-действий есть «свой» предлог. В вопросе он всегда в конце — даже если по-русски предлога нет вовсе («Что ты слушаешь?»).`,
        lit: [['What', 'что'], ['are', '(помощник)'], ['you', 'ты'], ['listening', 'слушаешь'], ['to?', '(к)?']],
        ex: [['What are you listening to?', 'Что ты слушаешь?'], ['What are you working on?', 'Над чем ты работаешь?'], ['What are you afraid of?', 'Чего ты боишься?']] },
      { t: 'idea', text: `С do / does / did — то же самое. «Чья это сумка?» по-английски спрашивают «Кому принадлежит эта сумка?» — <b>belong to</b>, и to уходит в конец.`,
        rows: [['Who does this bag belong to?', 'Чья это сумка?'], ['Which company does she work for?', 'На какую компанию она работает?'], ['What did you pay for?', 'За что ты заплатил?']] },
      { t: 'check', q: 'Скажите: «Над каким проектом ты работаешь?»', o: ['On which project are you working?', 'Which project you are working on?', 'Which project are you working on?'], a: 2,
        why: 'Which project — в начале, on — в конце, между ними порядок вопроса: are you working.' },
      { t: 'idea', text: `Один такой вопрос вы знаете ещё с A1: <b>Where are you from?</b> — «Откуда ты?». Здесь from тоже стоит в конце.`,
        ex: [['Where are you from?', 'Откуда ты?'], ['What are you interested in?', 'Чем ты интересуешься?'], ['Who do you agree with?', 'С кем ты согласен?']] },
      { t: 'check', q: 'The podcast was about something. → What ___?', ru: 'Подкаст был о чём-то. → О чём был подкаст?', o: ['was the podcast about', 'about was the podcast', 'the podcast was about'], a: 0,
        why: 'Вопрос: was выходит вперёд, about — последним.' },
      { t: 'idea', text: `В книгах встречается <b>With whom…?</b> — предлог впереди. Это очень официально: в разговоре, чатах и играх так почти не говорят.`, opt: true,
        ex: [['With whom are you playing?', 'С кем вы играете? (официально, редко)'], ['Who are you playing with?', 'С кем ты играешь? (обычно)']] },
      { t: 'idea', text: `Итог: слово-действие держит свой предлог, а в вопросе он в конце.`,
        rows: [['listen to', 'What are you listening to?'], ['belong to', 'Who does it belong to?'], ['work on', 'What are you working on?']] }
    ]},

    // ───────────── 3. Who with? What for? ─────────────
    { title: 'Коротко: Who with? What for?', steps: [
      { t: 'idea', text: `В разговоре часто переспрашивают двумя словами. Друг говорит: «Иду вечером на концерт». Вы: «С кем?» — <b>Who with?</b> Порядок тот же: сначала слово-вопрос, потом предлог.`,
        rows: [['I’m going to a concert tonight.', 'Who with?', 'С кем?'], ['We need to talk.', 'What about?', 'О чём?'], ['I got a strange email.', 'Who from?', 'От кого?']] },
      { t: 'idea', text: `Самое полезное — <b>What for?</b> = «Зачем? Для чего?». Можно и полным вопросом, for всё равно в конце.`,
        ex: [['What is this button for?', 'Для чего эта кнопка?'], ['What do you need a second monitor for?', 'Зачем тебе второй монитор?'], ['What did you do that for?', 'Зачем ты это сделал? (с упрёком)']],
        bad: 'For what? · With who?', good: '<b>What for?</b> · <b>Who with?</b>' },
      { t: 'check', q: 'I’m learning Japanese. — ___? — To play games without translation.', ru: 'Я учу японский. — Зачем? — Чтобы играть без перевода.', o: ['For what', 'What for', 'Why for'], a: 1,
        why: '«Зачем?» = What for? — for стоит в конце.' },
      { t: 'idea', text: `Итог: короткий вопрос-реакция = слово-вопрос + предлог, как эхо.`,
        rows: [['С кем? / О чём?', 'Who with? / What about?'], ['Зачем? / Откуда?', 'What for? / Where from?']] }
    ]},

    // ───────────── 4. What is it like? ─────────────
    { title: '«Какой он? Как там?» — What is it like?', steps: [
      { t: 'idea', text: `Хотите спросить: «Какой у тебя новый начальник?». По-английски: <b>What is your new boss like?</b> Здесь like — не «нравится», а «похожий на», поэтому он в конце, как любой предлог.`,
        lit: [['What', 'что / на что'], ['is', '(есть)'], ['your new boss', 'твой новый начальник'], ['like?', 'похож?']],
        ex: [['What’s your new boss like?', 'Какой у тебя новый начальник?'], ['What are your neighbours like?', 'Какие у тебя соседи?'], ['What was the weather like?', 'Какая была погода?']],
        bad: 'How is the weather like?', good: '<b>What</b> is the weather like?',
        tip: `How и like вместе не ставим. Можно просто How is the weather? — но без like.` },
      { t: 'check', q: 'Скажите: «Какая там еда?»', o: ['How is the food like?', 'What is the food like?', 'What does the food like?'], a: 1,
        why: 'Просим описать → What + is + the food + like.' },
      { t: 'idea', text: `Не путайте похожие вопросы — смысл у них разный.`,
        rows: [['What is he like?', 'какой он (характер)'], ['What does he look like?', 'как он выглядит'], ['What does he like?', 'что ему нравится']],
        tip: `How is he? — «как он?» (как дела, как здоровье).` },
      { t: 'check', q: 'Скажите: «Как выглядит твой брат?»', o: ['What is your brother like?', 'What does your brother look like?', 'How does your brother look like?'], a: 1,
        why: 'Внешность → What does … look like? А What is he like? — про характер.' },
      { t: 'idea', text: `Итог: «Какой он? Как там?» → What is … like? Внешность → What does … look like?`,
        rows: [['Какой он?', 'What is he like?'], ['Как он выглядит?', 'What does he look like?']] }
    ]},

    // ───────────── 5. Do you know where…? ─────────────
    { title: '«Ты не знаешь, где Макс?» — вопрос внутри фразы', steps: [
      { t: 'idea', text: `Прямо спросить: <b>Where is Max?</b> А вежливо: «Ты не знаешь, где Макс?». Тогда вопрос прячется внутрь фразы — и перестаёт быть вопросом: сначала <b>кто</b>, потом <b>is</b>, как в обычном предложении.`,
        lit: [['Do you know', 'ты знаешь'], ['where', 'где'], ['Max', 'Макс'], ['is?', '(есть)?']],
        ex: [['Do you know where Max is?', 'Ты не знаешь, где Макс?'], ['Can you tell me what time it is?', 'Не подскажете, который час?'], ['I don’t know how old she is.', 'Я не знаю, сколько ей лет.']],
        bad: 'Do you know where is the station?', good: 'Do you know where <b>the station is</b>?' },
      { t: 'check', q: 'Could you tell me where ___?', ru: 'Не подскажете, где лифт?', o: ['is the lift', 'the lift is', 'the lift'], a: 1,
        why: 'Вопрос внутри фразы → обычный порядок: the lift is.' },
      { t: 'idea', text: `Так же с can, was, have и хвостиком -ing: помощник встаёт обратно после «кто».`,
        rows: [['Where can I park?', 'Do you know where I can park?'], ['When are they coming?', 'I’m not sure when they’re coming.'], ['What was he doing?', 'I don’t remember what he was doing.']] },
      { t: 'idea', text: `Частые начала таких фраз. Знак вопроса ставим, только если само начало — вопрос.`,
        rows: [['Do you know…? / Can you tell me…?', 'Ты не знаешь…? / Не подскажете…?'], ['I don’t know… / I’m not sure…', 'Не знаю… / Не уверен…'], ['I wonder…', 'Интересно… (точка в конце)']],
        tip: `Could you tell me…? — ещё вежливее, чем Can you tell me…?` },
      { t: 'check', q: 'Скажите: «Не знаю, сколько ему лет.»', o: ['I don’t know how old is he.', 'I don’t know how old he is.', 'I don’t know how old he?'], a: 1,
        why: 'Вопрос внутри фразы: he is, а в конце точка — начало «I don’t know» не вопрос.' },
      { t: 'idea', text: `Итог: прямой вопрос → помощник впереди. Вопрос внутри фразы → сначала кто, потом is / can / are.`,
        rows: [['Where is Max?', 'Do you know where Max is?'], ['Where can I park?', 'Can you tell me where I can park?']] }
    ]},

    // ───────────── 6. Без do / does / did ─────────────
    { title: '«Не знаю, где он живёт» — без do, does, did', steps: [
      { t: 'idea', text: `Прямой вопрос: <b>Where does he live?</b> Внутри фразы помощник does просто исчезает, а его -s возвращается к слову-действию: <b>where he lives</b>.`,
        lit: [['I don’t know', 'я не знаю'], ['where', 'где'], ['he', 'он'], ['lives', 'живёт']],
        ex: [['I don’t know where he lives.', 'Не знаю, где он живёт.'], ['Do you know what Kate wants?', 'Ты не знаешь, чего хочет Кейт?'], ['Do you know what this word means?', 'Ты знаешь, что значит это слово?']] },
      { t: 'check', q: 'Do you know what time the shop ___?', ru: 'Ты не знаешь, во сколько закрывается магазин?', o: ['does close', 'closes', 'close'], a: 1,
        why: 'does исчезает, а -s переходит к слову-действию: the shop closes.' },
      { t: 'idea', text: `С did — так же: did исчезает, а слово-действие встаёт во вторую форму (went, said, put).`,
        rows: [['Why did she leave?', 'Do you know why she left?'], ['What did you say?', 'Sorry, I didn’t hear what you said.'], ['Where did I put my keys?', 'I can’t remember where I put my keys.']],
        bad: 'I don’t know what did he say.', good: 'I don’t know what he <b>said</b>.' },
      { t: 'check', q: 'I don’t remember where ___ my password.', ru: 'Не помню, где я записал пароль.', o: ['did I write', 'I wrote', 'I did write'], a: 1,
        why: 'did исчезает, слово-действие во второй форме: I wrote.' },
      { t: 'idea', text: `Помните «Кто выиграл?» из A1 — там did не было с самого начала. Значит, и внутри фразы ничего не меняется.`,
        ex: [['What happened? → Tell me what happened.', 'Расскажи, что случилось.'], ['Who broke it? → Nobody knows who broke it.', 'Никто не знает, кто это сломал.']] },
      { t: 'idea', text: `Итог: внутри фразы нет do / does / did. Закройте пальцем начало — остаток должен звучать как обычное предложение.`,
        rows: [['Where does he live?', '…where he lives.'], ['What did she say?', '…what she said.']] }
    ]},

    // ───────────── 7. if / whether = «ли» ─────────────
    { title: '«Ты не знаешь, придёт ли он?» — if = «ли»', steps: [
      { t: 'idea', text: `А если в вопросе нет слова-вопроса: <b>Is Max online?</b> Внутри фразы вместо него ставим <b>if</b> — это русское «ли». Дальше — снова обычный порядок.`,
        lit: [['Do you know', 'ты знаешь'], ['if', 'ли'], ['Max', 'Макс'], ['is online?', 'в сети?']],
        ex: [['Do you know if Max is online?', 'Ты не знаешь, Макс в сети?'], ['I don’t know if Anna can come.', 'Не знаю, сможет ли Анна прийти.'], ['I wonder if they’ve got a PS5.', 'Интересно, есть ли у них PS5.']] },
      { t: 'idea', text: `do / does / did исчезают и здесь. Вместо if можно <b>whether</b> — то же «ли», чуть официальнее, часто с <b>or not</b>.`,
        rows: [['Does she like sushi?', 'I don’t know if she likes sushi.'], ['Did anybody call?', 'Do you know whether anybody called?'], ['Is the game free?', 'I’m not sure whether it’s free or not.']],
        bad: 'Do you know is he at home?', good: 'Do you know <b>if he is</b> at home?' },
      { t: 'check', q: 'Can you tell me ___ this app is free?', ru: 'Не подскажете, бесплатное ли это приложение?', o: ['is', 'if', 'what'], a: 1,
        why: 'Вопрос «да/нет» (Is it free?) → внутри фразы if.' },
      { t: 'idea', text: `Не путайте два if. <b>if = «если»</b> (урок a2-20): после него нет will. <b>if = «ли»</b>: will можно и нужно, когда речь о будущем.`,
        rows: [['если', 'If it rains, we’ll stay home.'], ['ли', 'I don’t know if it will rain tomorrow.']] },
      { t: 'check', q: 'Скажите: «Не знаю, понравится ли ей подарок.»', o: ['I don’t know if she likes the present.', 'I don’t know if she will like the present.', 'I don’t know will she like the present.'], a: 1,
        why: 'if = «ли», речь о будущем → will можно: if she will like.' },
      { t: 'idea', text: `Удобный приём: слово-вопрос + <b>to</b> + слово-действие = «что / как мне делать».`, opt: true,
        ex: [['I don’t know what to do.', 'Не знаю, что делать.'], ['Can you tell me how to get to the station?', 'Не подскажете, как пройти к вокзалу?'], ['I can’t decide which game to buy.', 'Не могу решить, какую игру купить.']] },
      { t: 'idea', text: `Итог: вопрос «да/нет» внутри фразы → if (или whether) + обычный порядок.`,
        rows: [['Is Max online?', 'Do you know if Max is online?'], ['Did he call?', 'I’m not sure if he called.']] }
    ]},

    // ───────────── 8. Итог урока ─────────────
    { title: 'Главные ошибки — проверьте себя', steps: [
      { t: 'check', q: 'Скажите: «С кем ты живёшь?»', o: ['With who do you live?', 'Who do you live with?', 'Who you live with?'], a: 1,
        why: 'Who — в начало, with — в конец, помощник do на своём месте.' },
      { t: 'check', q: 'Скажите: «Зачем тебе это нужно?»', o: ['For what do you need it?', 'What do you need it for?', 'What for you need it?'], a: 1,
        why: '«Зачем?» = What … for? — for в самом конце.' },
      { t: 'check', q: 'Скажите: «Какая у тебя новая работа?»', o: ['How is your new job like?', 'What is your new job like?', 'What does your new job like?'], a: 1,
        why: 'Просим описать → What is … like? How с like не ставим.' },
      { t: 'check', q: 'Do you know where ___?', ru: 'Ты не знаешь, где Анна?', o: ['is Anna', 'Anna is', 'does Anna'], a: 1,
        why: 'Вопрос внутри фразы → обычный порядок: Anna is.' },
      { t: 'check', q: 'I don’t know ___ it is free.', ru: 'Не знаю, бесплатно ли это.', o: ['is', 'if', 'does'], a: 1,
        why: 'Вопрос «да/нет» внутри фразы → if = «ли».' },
      { t: 'idea', text: `Итог урока: предлог — в конец вопроса. Спрятанный вопрос — обычный порядок и без do / did.`,
        rows: [['предлог в конце', 'Who are you talking to? What’s it like?'], ['вопрос внутри', 'Do you know where he lives?'], ['«ли»', 'I don’t know if she’s coming.']] }
    ]}
  ];
})();
