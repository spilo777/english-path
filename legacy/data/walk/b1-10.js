// Грамматика по шагам для юнита b1-10: главная идея (совет, упрёк, «бы», вежливость); should — «так должно быть», should have done — «надо было», shouldn’t have done, ought to, should или must; suggest (that) I do, it’s important that…, strange that … should, If … should / Should you…; had better (’d = had, про сейчас, без to, ’d better not, hadn’t we?, should или had better); It’s time to do / It’s time we did (about / high time); would — «я бы», will или would, would have done; would в пересказе, wouldn’t = «никак не хотел», would = «бывало» (только действия, не состояния); вежливые просьбы, разрешение, предложения (Could you…?, Do you think you could…?, Can I have…?, May I…?, Do you mind if…?, Would you mind if I did…?, Would you like…?, I’d like…); типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'b1-10'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: 'Совет, упрёк, «бы» и вежливость', steps: [
      { t: 'idea', text: `Вы уже умеете советовать с <b>should</b> и просить с <b>Could you…?</b>. Теперь — оттенки: «надо было», «лучше бы…, а то», «пора бы уже», «я бы» и вежливые фразы из жизни.`,
        ex: [['You should have told me earlier.', 'Надо было сказать мне раньше.'], ['You’d better take an umbrella.', 'Лучше возьми зонт (а то промокнешь).'], ['It’s time you updated your CV.', 'Пора бы тебе обновить резюме.'], ['I wouldn’t call him.', 'Я бы не стал ему звонить.'], ['Do you mind if I sit here?', 'Вы не против, если я сяду здесь?']],
        tip: `Две подсказки на весь урок: «бы» почти всегда = would, а «надо было» = should have + третья форма (done, seen).` },
      { t: 'check', q: 'Скажите: «Я бы не стал это покупать»', o: ['I won’t buy it.', 'I wouldn’t buy it.', 'I didn’t buy it.'], a: 1,
        why: '«бы» — воображаемая ситуация → wouldn’t.' },
      { t: 'idea', text: `Итог: в уроке пять тем — should поглубже, suggest that…, had better, it’s time и would, а в конце — вежливые просьбы.`,
        rows: [['надо было', 'should have done'], ['лучше…, а то', '’d better do'], ['пора бы / я бы', 'it’s time we did / would']] }
    ]},

    // ───────────── 2. should глубже ─────────────
    { title: 'should: «так должно быть» и «надо было»', steps: [
      { t: 'idea', text: `Вы уже знаете: <b>should</b> — «тебе стоит» (совет), без to. Но should ещё говорит, <b>как должно быть</b> по плану или по логике.`,
        lit: [['He', 'он'], ['should', 'должен (по плану)'], ['be', 'быть'], ['here', 'здесь'], ['by now', 'уже, к этому времени']],
        ex: [['Where’s Pavel? He should be here by now.', 'Где Павел? Он уже должен быть тут.'], ['The price is wrong. It should be ten euros.', 'Цена неправильная. Должно быть десять евро.'], ['It’s a small bug. It shouldn’t take long.', 'Это мелкий баг. Много времени не займёт.']] },
      { t: 'check', q: 'The match starts at 7. It’s 7:05, and Dan ___ here, but he isn’t.', ru: 'Матч в 7. Уже 7:05, Дан уже должен быть тут, но его нет.', o: ['should be', 'should to be', 'should is'], a: 0,
        why: 'Так должно быть по плану → should be, без to.' },
      { t: 'idea', text: `Хотите сказать «Надо было сказать мне раньше» — вы не сказали, а жаль. Это <b>should have</b> + третья форма.`,
        lit: [['You', 'ты'], ['should have', 'надо было'], ['told', 'сказать (3-я форма)'], ['me', 'мне'], ['earlier', 'раньше']],
        bad: 'You should told me earlier.', good: 'You <b>should have told</b> me earlier.' },
      { t: 'check', q: 'Скажите: «Надо было лечь спать раньше»', o: ['I should go to bed earlier.', 'I should have gone to bed earlier.', 'I should went to bed earlier.'], a: 1,
        why: 'Прошлое, которое не случилось → should have + третья форма (gone).' },
      { t: 'idea', text: `«Не надо было» (сделал — зря) — <b>shouldn’t have</b> + третья форма. А should have been — «должны были быть (а их нет)».`,
        ex: [['I shouldn’t have eaten that third burger.', 'Не надо было есть третий бургер.'], ['I regret it. I shouldn’t have said that.', 'Я жалею. Не надо было этого говорить.'], ['They should have been here an hour ago.', 'Они должны были прийти час назад.']] },
      { t: 'idea', text: `<b>ought to</b> — то же should, только с to. Звучит чуть более книжно.`,
        ex: [['You ought to call her.', 'Тебе следует ей позвонить.'], ['We ought not to be late.', 'Нам не следует опаздывать.'], ['You ought to have come!', 'Тебе надо было прийти!']],
        tip: `should — «стоит», мягко. must — «обязательно, без вариантов»: You should apologize (совет) — You must apologize (без вариантов).` },
      { t: 'idea', text: `Итог: should — совет или «так должно быть»; should have done — «надо было», shouldn’t have done — «не надо было».`,
        rows: [['должен быть уже', 'He should be here by now.'], ['надо было', 'I should have told you.'], ['не надо было', 'I shouldn’t have said that.']] }
    ]},

    // ───────────── 3. suggest that… ─────────────
    { title: '«Что посоветуешь?» — suggest (that) I do', steps: [
      { t: 'idea', text: `Хотите спросить «Что посоветуешь сделать?». По-русски тянет сказать suggest me to do — так нельзя. После suggest идёт <b>кто + слово-действие</b>, как обычная фраза.`,
        lit: [['What', 'что'], ['do you suggest', 'ты советуешь'], ['I', 'я'], ['do?', 'сделаю?']],
        bad: 'What do you suggest me to do?', good: 'What do you suggest <b>I do</b>?',
        ex: [['I suggest we take a short break.', 'Предлагаю сделать небольшой перерыв.'], ['I suggest you read this.', 'Советую тебе прочитать это.'], ['She suggested taking a taxi.', 'Она предложила взять такси (с хвостиком -ing — тоже можно).']] },
      { t: 'check', q: 'What do you suggest ___?', ru: 'Что ты посоветуешь мне сделать?', o: ['me to do', 'I do', 'to me do'], a: 1,
        why: 'После suggest нет «кого + to». Правильно: suggest (that) I do.' },
      { t: 'idea', text: `После <b>suggest, recommend, insist</b> и <b>it’s important / essential that</b> глагол часто стоит в начальной форме — даже для he / she. Можно и через should.`,
        ex: [['The doctor recommended that he rest.', 'Врач рекомендовал ему отдохнуть.'], ['She insisted that I stay for dinner.', 'Она настояла, чтобы я остался на ужин.'], ['It’s important that everyone should be on time.', 'Важно, чтобы все пришли вовремя.']],
        tip: `Третий вариант — обычное время: The lead suggested that we tested it. Так чаще говорят в британском.` },
      { t: 'idea', opt: true, text: `Редко: should после «странно, что…» и в «если вдруг». В официальных письмах should ставят в начало вместо if.`,
        ex: [['It’s strange that he should be late.', 'Странно, что он опаздывает.'], ['If you should have any questions, email me.', 'Если вдруг будут вопросы — пишите.'], ['Should you have any questions, please contact us.', 'Если у вас возникнут вопросы, свяжитесь с нами.']],
        tip: `В британском разговоре I should wait иногда = «я бы на твоём месте подождал». Сейчас чаще говорят I’d wait.` },
      { t: 'idea', text: `Итог: suggest / recommend / insist + (that) + кто + слово-действие. Без «me to».`,
        rows: [['что посоветуешь?', 'What do you suggest I do?'], ['предлагаю…', 'I suggest we take a break.'], ['или с -ing', 'I suggest taking a break.']] }
    ]},

    // ───────────── 4. had better ─────────────
    { title: 'had better — «лучше…, а то будет плохо»', steps: [
      { t: 'idea', text: `Хотите сказать «Встреча через пять минут. Мне лучше идти» — а то опоздаю. Это <b>I’d better go</b>: совет про эту ситуацию с намёком на проблему.`,
        lit: [['I', 'мне'], ['’d better', 'лучше (а то…)'], ['go', 'идти']],
        ex: [['The meeting starts in five minutes. I’d better go.', 'Встреча через пять минут. Мне лучше идти.'], ['You’d better save the file, or you’ll lose everything.', 'Лучше сохрани файл, а то потеряешь всё.'], ['You’d better stay calm.', 'Тебе лучше сохранять спокойствие.']],
        tip: `’d здесь = had, а не would. Похоже на прошлое, но смысл — сейчас или потом: I’d better call him tomorrow. Вопрос-хвостик: We’d better leave, hadn’t we?` },
      { t: 'idea', text: `После had better слово-действие <b>без to</b>. «Лучше не» — <b>’d better not</b>, not стоит после better.`,
        bad: 'You’d better to hurry. You’d not better go.', good: 'You’d better <b>hurry</b>. You’d better <b>not</b> go.',
        ex: [['We’d better not wake the baby.', 'Нам лучше не будить малыша.']] },
      { t: 'check', q: 'The battery is at 2%. You’d better ___ your phone.', ru: 'Батарея на 2%. Лучше заряди телефон.', o: ['to charge', 'charge', 'charging'], a: 1,
        why: 'После had better — слово-действие без to.' },
      { t: 'idea', text: `Чем отличается от should? should — совет вообще, в любой ситуации. had better — только про конкретный случай, где есть риск.`,
        rows: [['совет вообще', 'You should go out more often.'], ['здесь и сейчас + риск', 'It starts at eight. You’d better go now.']] },
      { t: 'check', q: 'It’s a great book. You ___ read it some day.', ru: 'Отличная книга. Тебе стоит когда-нибудь её прочитать (просто совет, без спешки и риска).', o: ['should', '’d better', '’d better to'], a: 0,
        why: 'Совет вообще, без «а то» → should.' },
      { t: 'idea', text: `Итог: ’d better (not) + слово-действие без to — «лучше…, а то будет плохо». ’d = had.`,
        rows: [['лучше пойду', 'I’d better go.'], ['лучше не надо', 'You’d better not go.'], ['совет вообще', 'should, не had better']] }
    ]},

    // ───────────── 5. It’s time ─────────────
    { title: '«Пора» и «давно пора бы» — It’s time', steps: [
      { t: 'idea', text: `Просто «пора идти» — <b>It’s time to go</b>. Кому пора — через for: It’s time for us to go.`,
        lit: [['It’s time', 'пора'], ['for us', 'нам'], ['to go', 'идти']],
        ex: [['It’s time to go.', 'Пора идти.'], ['It’s time for us to go.', 'Нам пора идти.']] },
      { t: 'idea', text: `А с упрёком «давно пора бы» — <b>It’s time + кто + прошедшая форма</b>. Хотя речь о сейчас!`,
        lit: [['It’s time', 'пора'], ['you', 'тебе'], ['updated', 'обновил бы (прош. форма)'], ['your portfolio', 'своё портфолио']],
        ex: [['It’s late. It’s time we went home.', 'Поздно. Пора нам домой.'], ['It’s time you took this seriously.', 'Пора бы тебе отнестись к этому серьёзно.']],
        tip: `Как в русском «пора бы <b>сделал</b>»: прошедшая форма + «бы» = этого ещё нет, а должно бы.` },
      { t: 'check', q: 'The kids are still up at midnight! It’s time they ___ in bed.', ru: 'Дети не спят в полночь! Им давно пора быть в кровати.', o: ['are', 'were', 'be'], a: 1,
        why: 'It’s time + кто + прошедшая форма → were.' },
      { t: 'idea', text: `Для сильного упрёка добавляют <b>about</b> или <b>high</b>: «давно пора».`,
        ex: [['It’s about time they fixed this bug.', 'Давно пора бы починить этот баг.'], ['It’s high time somebody cleaned up this mess.', 'Давно пора кому-нибудь разобрать этот бардак.']],
        bad: 'It’s time you to go to bed.', good: 'It’s time you <b>went</b> to bed.' },
      { t: 'idea', text: `Итог: «пора» — It’s time to do. «Давно пора бы» — It’s time + кто + прошедшая форма.`,
        rows: [['пора идти', 'It’s time to go.'], ['пора бы нам домой', 'It’s time we went home.'], ['давно пора', 'It’s about / high time they fixed it.']] }
    ]},

    // ───────────── 6. would — «я бы» ─────────────
    { title: '«Я бы…» — would и would have done', steps: [
      { t: 'idea', text: `Вы уже знаете would из «Если бы…»: If I had a car, I’d drive to work. Но «бы» бывает и без if — просто воображаем.`,
        ex: [['It would be nice to work from Bali.', 'Было бы здорово работать с Бали.'], ['I’d love to try VR.', 'Я бы с удовольствием попробовал VR.'], ['Shall I tell him? — I wouldn’t say anything.', 'Сказать ему? — Я бы ничего не говорил.']],
        rows: [['will — реальный план', 'I’ll call Lena. I have her number.'], ['would — «бы», а на деле нет', 'I’d call Lena, but I don’t have her number.']] },
      { t: 'check', q: 'I ___ stay longer, but I have to go.', ru: 'Я бы остался подольше, но мне надо идти.', o: ['will', 'would', 'am'], a: 1,
        why: 'Остаться не получится — это «бы» → would.' },
      { t: 'idea', text: `«Бы» о прошлом, которого не было: <b>would have</b> + третья форма. «Тебе бы понравилось» — но ты не пришёл.`,
        lit: [['You', 'тебе'], ['would have', 'бы (о прошлом)'], ['loved', 'понравилось (3-я форма)'], ['it', 'это']],
        ex: [['It’s a pity you missed it. You would have loved it.', 'Жаль, что ты пропустил. Тебе бы понравилось.'], ['I don’t know what we’d have done without you.', 'Не знаю, что бы мы без тебя делали.']] },
      { t: 'check', q: 'It’s a pity you didn’t come. You ___ it.', ru: 'Жаль, что ты не пришёл. Тебе бы понравилось.', o: ['would enjoy', 'would have enjoyed', 'will enjoy'], a: 1,
        why: 'Воображаемое прошлое, которого не было → would have + третья форма.' },
      { t: 'idea', text: `Итог: «я бы» сейчас — would + слово-действие. «Я бы» о прошлом — would have + третья форма.`,
        rows: [['я бы не стал', 'I wouldn’t buy it.'], ['тебе бы понравилось (тогда)', 'You would have loved it.']] }
    ]},

    // ───────────── 7. would — пересказ, отказ, «бывало» ─────────────
    { title: '«Сказал, что…», «никак не хотел», «бывало» — ещё три would', steps: [
      { t: 'idea', text: `Помните пересказ: «Он сказал, что позвонит»? will при шаге в прошлое становится <b>would</b>.`,
        ex: [['Tom said he’d call me on Sunday.', 'Том сказал, что позвонит мне в воскресенье.'], ['She promised she wouldn’t be late.', 'Она обещала, что не опоздает.']] },
      { t: 'check', q: 'Tom said he ___ call me yesterday, but he didn’t.', ru: 'Том сказал, что позвонит мне вчера, но не позвонил.', o: ['will', 'would', 'would to'], a: 1,
        why: 'Пересказ в прошлом: will → would, без to.' },
      { t: 'idea', text: `<b>wouldn’t</b> ещё значит «никак не хотел, отказывался». Даже про вещи: игра «не хотела» запускаться.`,
        lit: [['The game', 'игра'], ['wouldn’t', 'никак не хотела'], ['start', 'запускаться']],
        ex: [['I tried to help, but he wouldn’t listen.', 'Я пытался помочь, но он никак не хотел слушать.'], ['The game wouldn’t start.', 'Игра никак не запускалась.']] },
      { t: 'check', q: 'The laptop ___ turn on, so I took it to a repair shop.', ru: 'Ноутбук никак не включался, поэтому я отнёс его в ремонт.', o: ['won’t', 'wouldn’t', 'didn’t would'], a: 1,
        why: 'Отказ в прошлом → wouldn’t.' },
      { t: 'idea', text: `И <b>would</b> = «бывало, раньше регулярно» — как used to. Но только для действий (играли, ходили), не для «имел, был, любил».`,
        ex: [['Whenever it rained, we would play board games.', 'Всякий раз, когда шёл дождь, мы играли в настолки.']],
        bad: 'I would have a dog when I was a child.', good: 'I <b>used to have</b> a dog when I was a child.' },
      { t: 'check', q: 'When I was a child, I ___ a cat.', ru: 'Когда я был ребёнком, у меня была кошка.', o: ['would have', 'used to have', 'would had'], a: 1,
        why: 'have = «иметь» — это состояние, не действие → только used to.' },
      { t: 'idea', text: `Итог: ещё три роли would — пересказ will, «никак не хотел» и «бывало» (только действия).`,
        rows: [['сказал, что позвонит', 'He said he’d call.'], ['никак не хотел', 'He wouldn’t listen.'], ['бывало, играли', 'We would play outside.']] }
    ]},

    // ───────────── 8. Вежливо ─────────────
    { title: 'Вежливо: просьбы, разрешение, предложения', steps: [
      { t: 'idea', text: `Попросить сделать — <b>Could you…?</b>. Ещё мягче — <b>Do you think you could…?</b> («как думаете, вы могли бы…?»). С Do you think обычно берут could.`,
        ex: [['Could you send me the link?', 'Можешь прислать ссылку?'], ['Do you think you could review my layout?', 'Как думаешь, сможешь посмотреть мой макет?'], ['Could you do me a favour?', 'Можешь сделать мне одолжение?']] },
      { t: 'check', q: 'Скажите: «Как думаете, вы могли бы мне помочь?»', o: ['Do you think could you help me?', 'Do you think you could help me?', 'Are you think you could help me?'], a: 1,
        why: 'После Do you think — обычный порядок: you could help.' },
      { t: 'idea', text: `Попросить вещь или разрешение — <b>Can I…? / Could I…? / May I…?</b>. May — самое официальное.`,
        ex: [['Can I have a latte, please?', 'Можно мне латте?'], ['Could I borrow your charger?', 'Можно взять твою зарядку (на время)?'], ['May I ask a question?', 'Можно задать вопрос?']],
        tip: `borrow — брать на время, lend — давать на время: Could you lend me your charger? — «Одолжишь мне зарядку?»` },
      { t: 'idea', text: `Мягче всего — <b>Do you mind if I…?</b> («Вы не против, если я…?»). С <b>Would you mind if I…</b> ещё вежливее, и слово-действие тогда в прошедшей форме.`,
        ex: [['Do you mind if I open the window?', 'Вы не против, если я открою окно?'], ['Is it all right if I leave early?', 'Ничего, если я уйду пораньше?'], ['Would you mind if I left early on Friday?', 'Вы не будете против, если я уйду в пятницу пораньше?']],
        tip: `Осторожно с ответом: mind — «быть против». «Не против» = No, not at all. Go ahead. А Yes значит «да, я против»!` },
      { t: 'check', q: 'Do you mind if I use your mouse? — ___ Go ahead.', ru: 'Ты не против, если я возьму твою мышку? — Нет, конечно. Бери.', o: ['Yes, I do.', 'No, not at all.', 'Yes, please.'], a: 1,
        why: 'Do you mind = «ты против?». Разрешаем → No, not at all.' },
      { t: 'idea', text: `Предложить — <b>Would you like…?</b>, сказать, чего хочешь, — <b>I’d like…</b>. Do you like…? — это «ты вообще любишь?».`,
        bad: 'Do you like some coffee?', good: '<b>Would you like</b> some coffee?',
        ex: [['Would you like to join our team?', 'Хотите присоединиться к нашей команде?'], ['I’d like some tea, please.', 'Мне чаю, пожалуйста.'], ['Can I get you a coffee?', 'Принести тебе кофе?']] },
      { t: 'check', q: 'Скажите гостю: «Хочешь чего-нибудь попить?»', o: ['Do you like something to drink?', 'Would you like something to drink?', 'Will you like something to drink?'], a: 1,
        why: 'Предложение → Would you like…? А Do you like — «любишь ли вообще».' },
      { t: 'idea', text: `Итог: просим — Could you…?, разрешение — Can / Could / May I…?, мягко — Do you mind if…?, предлагаем — Would you like…?`,
        rows: [['просьба', 'Could you / Do you think you could…?'], ['разрешение', 'Could I…? / Do you mind if I…?'], ['предложение', 'Would you like…? / Can I get you…?']] }
    ]},

    // ───────────── 9. Типичные ошибки ─────────────
    { title: 'Типичные ошибки — проверьте себя', steps: [
      { t: 'check', q: 'We ___ now, or we’ll miss the train.', ru: 'Нам лучше выйти сейчас, а то опоздаем на поезд.', o: ['’d better to leave', '’d better leave', '’d better leaving'], a: 1,
        why: 'had better + слово-действие без to.' },
      { t: 'check', q: 'It’s midnight. It’s time you ___ to bed.', ru: 'Полночь. Пора бы тебе лечь спать.', o: ['goes', 'went', 'going'], a: 1,
        why: 'It’s time + кто + прошедшая форма → went.' },
      { t: 'check', q: 'Скажите: «Она посоветовала мне прочитать эту книгу»', o: ['She suggested me to read this book.', 'She suggested that I read this book.', 'She suggested to read me this book.'], a: 1,
        why: 'suggest + (that) + кто + слово-действие.' },
      { t: 'idea', text: `Итог урока: «надо было», «лучше, а то», «пора бы», «бы» и вежливые просьбы — всё на своих местах.`,
        rows: [['should have done / ’d better do', 'надо было / лучше, а то'], ['suggest that I do / it’s time we did', 'посоветовать / пора бы'], ['would / Could you…? / Do you mind if…?', 'бы / просьбы']] }
    ]}
  ];
})();
