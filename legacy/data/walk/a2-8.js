// Грамматика по шагам для юнита a2-8: надо / нельзя / не обязательно / стоит, must (и had to в прошлом), have to (has to, had to, вопросы с do/does/did), must или have to (и will have to), mustn’t и don’t have to / don’t need to, как их не перепутать, should / shouldn’t, I think you should / I don’t think you should / Do you think…?, ought to.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a2-8'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: 'Надо, нельзя, не обязательно, стоит', steps: [
      { t: 'idea', text: `Хотите сказать «Мне надо идти». По-английски «надо» — это <b>must</b> или <b>have to</b>. Кто — впереди, потом «надо», потом слово-действие.`,
        lit: [['I', 'я'], ['have to', 'надо'], ['go', 'идти']],
        ex: [['I have to go.', 'Мне надо идти.'], ['I must go.', 'Мне надо идти.'], ['We have to work today.', 'Нам сегодня надо работать.']] },
      { t: 'idea', text: `По-русски есть ещё «нельзя», «не обязательно» и «стоит». В английском у каждого смысла своё слово — и путать их опасно.`,
        rows: [['нельзя', 'You mustn’t be late.'], ['не обязательно', 'You don’t have to come.'], ['стоит (совет)', 'You should rest.']] },
      { t: 'check', q: '«Тебе стоит попробовать эту игру» — какое слово нужно?', o: ['must', 'should', 'mustn’t'], a: 1,
        why: '«Стоит» — это совет, а совет → should.' },
      { t: 'idea', text: `Итог: четыре русских смысла — четыре английских слова. Дальше разберём каждое по очереди.`,
        rows: [['надо', 'must / have to'], ['нельзя / не обязательно', 'mustn’t / don’t have to'], ['стоит', 'should']] }
    ]},

    // ───────────── 2. must ─────────────
    { title: 'must — «надо, я так считаю»', steps: [
      { t: 'idea', text: `Хотите сказать «Я так голоден, мне надо что-нибудь съесть». Это вы <b>сами</b> решили, что надо, — тут подходит <b>must</b>.`,
        lit: [['I', 'я'], ['must', 'надо'], ['eat', 'съесть'], ['something', 'что-нибудь']],
        ex: [['I’m so hungry. I must eat something.', 'Я так голоден. Мне надо что-нибудь съесть.'], ['This game is amazing. You must play it!', 'Эта игра потрясающая. Обязательно сыграй!'], ['I must call my mum.', 'Мне надо позвонить маме.']] },
      { t: 'idea', text: `Помните can? must ведёт себя так же: одно слово для всех (she must), и после него слово-действие без to и без -s.`,
        bad: 'I must to go. She musts work.', good: 'I <b>must go</b>. She <b>must work</b>.' },
      { t: 'check', q: 'Anna ___ finish the design today.', ru: 'Анне надо закончить дизайн сегодня.', o: ['musts', 'must', 'must to'], a: 1,
        why: 'must одно для всех, после него — глагол без to.' },
      { t: 'idea', text: `А «вчера мне пришлось…»? У must <b>нет прошлого</b>. Вместо него берём <b>had to</b> — «пришлось, надо было».`,
        lit: [['We', 'мы'], ['had to', 'пришлось'], ['walk', 'идти пешком'], ['home', 'домой']],
        ex: [['There were no buses. We had to walk home.', 'Автобусов не было. Нам пришлось идти домой пешком.'], ['Yesterday I had to work late.', 'Вчера мне пришлось работать допоздна.']],
        bad: 'Yesterday I must work late.', good: 'Yesterday I <b>had to</b> work late.' },
      { t: 'check', q: 'Last night I ___ finish the design for the client.', ru: 'Вчера вечером мне пришлось закончить дизайн для клиента.', o: ['must', 'had to', 'musted'], a: 1,
        why: 'Прошлое (last night) → had to. У must прошлого нет.' },
      { t: 'idea', text: `Итог: must — «надо», одно на всех, без to. Для прошлого — had to.`,
        rows: [['сейчас', 'I must go.'], ['вчера', 'I had to go.']] }
    ]},

    // ───────────── 3. have to ─────────────
    { title: 'have to — «приходится»', steps: [
      { t: 'idea', text: `Хотите сказать «Мне завтра надо к стоматологу». Это не ваше желание, так сложилось: запись, работа, правила. Для таких «надо» чаще берут <b>have to</b>.`,
        lit: [['I', 'я'], ['have to', 'надо'], ['go', 'идти'], ['to the dentist', 'к стоматологу'], ['tomorrow', 'завтра']],
        ex: [['I have to go to the dentist tomorrow.', 'Мне завтра надо к стоматологу.'], ['You have to be eighteen to play this game.', 'В эту игру можно играть только с восемнадцати.'], ['We have to follow the rules.', 'Нам надо соблюдать правила.']] },
      { t: 'idea', text: `Внутри have to — знакомое have. Поэтому у he / she — <b>has to</b>, а в прошлом у всех <b>had to</b>.`,
        rows: [['I / you / we / they', 'have to go'], ['he / she / it', 'has to go'], ['вчера — все', 'had to go']],
        ex: [['Anna starts at seven, so she has to get up at six.', 'Анна начинает в семь, поэтому ей приходится вставать в шесть.']],
        tip: `В речи have to звучит как «хэфта», has to — «хэста». Услышали «I hafta go» — это I have to go.` },
      { t: 'check', q: 'Max ___ work on Sundays.', ru: 'Максу приходится работать по воскресеньям.', o: ['have to', 'has to', 'must to'], a: 1,
        why: 'Max — он → has to.' },
      { t: 'idea', text: `Вопрос с have to — как с обычным словом-действием: впереди <b>do / does / did</b>. must в такой вопрос не ставят.`,
        lit: [['Does', '(вопрос)'], ['Max', 'Макс'], ['have to', 'надо'], ['work', 'работать'], ['on Sundays?', 'по воскресеньям?']],
        ex: [['What time do you have to leave?', 'Во сколько тебе надо уходить?'], ['Does Max have to work on Sundays?', 'Максу приходится работать по воскресеньям?'], ['Why did you have to stay late?', 'Почему тебе пришлось задержаться?']],
        bad: 'Do you must go? Did you had to wait?', good: '<b>Do you have to</b> go? Did you <b>have to</b> wait?' },
      { t: 'check', q: '___ Kate have to wear a uniform at work?', ru: 'Кейт надо носить форму на работе?', o: ['Does', 'Do', 'Must'], a: 0,
        why: 'Вопрос с have to — через помощника; Kate — она → Does.' },
      { t: 'idea', text: `Итог: have to — «приходится». Живёт как have: has to, had to, а вопросы — через do / does / did.`,
        rows: [['сейчас', 'I have to… / she has to…'], ['вопрос', 'Do you have to…? / Does she have to…?'], ['вчера', 'I had to… / Did you have to…?']] }
    ]},

    // ───────────── 4. must или have to ─────────────
    { title: 'must или have to?', steps: [
      { t: 'idea', text: `Когда это <b>ваше мнение</b> или совет от души — можно и must, и have to. Разницы почти нет.`,
        ex: [['It’s a great show. You must see it!', 'Отличный сериал. Обязательно посмотри!'], ['It’s a great show. You have to see it!', 'То же самое.'], ['I really must clean my room.', 'Мне правда надо убраться в комнате. (я сам решил)']] },
      { t: 'idea', text: `Когда это <b>факт</b> — расписание, правило, так требует начальник, — берут have to.`,
        ex: [['Jane has to go to the doctor at four.', 'Джейн надо к врачу в четыре. (у неё запись)'], ['I have to send the report by Friday.', 'Мне нужно сдать отчёт до пятницы. (так сказал начальник)']],
        tip: `Не уверены — берите have to. Он подходит почти всегда, а must — не всегда.` },
      { t: 'check', q: 'Tom can’t come to the meeting — he ___ fly to Berlin.', ru: 'Том не придёт на встречу — ему надо лететь в Берлин (так по работе).', o: ['must', 'has to', 'should'], a: 1,
        why: 'Это факт, а не ваше мнение → have to (he has to).' },
      { t: 'idea', text: `А «придётся» в будущем? Помните will? Ставим его перед have to: <b>will have to</b>. Сочетания will must не бывает.`,
        lit: [['We', 'мы'], ['’ll have to', 'придётся'], ['come back', 'вернуться'], ['tomorrow', 'завтра']],
        ex: [['The shop is closed. We’ll have to come back tomorrow.', 'Магазин закрыт. Придётся вернуться завтра.']],
        bad: 'We will must wait.', good: 'We <b>will have to</b> wait.' },
      { t: 'check', q: 'Скажите: «Придётся подождать»', o: ['We’ll must wait.', 'We’ll have to wait.', 'We have to will wait.'], a: 1,
        why: 'Будущее от «надо» → will have to.' },
      { t: 'idea', text: `Итог: своё мнение — must или have to. Факт или правило — have to. Прошлое и будущее — только через have.`,
        rows: [['моё мнение', 'I must… / I have to…'], ['факт, правило', 'I have to… / she has to…'], ['вчера / завтра', 'had to / will have to']] }
    ]},

    // ───────────── 5. mustn’t и don’t have to ─────────────
    { title: '«Нельзя» и «не обязательно»', steps: [
      { t: 'idea', text: `Хотите сказать «Тебе нельзя говорить свой пароль». Это запрет, красный знак «стоп». По-английски — <b>mustn’t</b> (= must not).`,
        lit: [['You', 'ты'], ['mustn’t', 'нельзя'], ['share', 'сообщать'], ['your password', 'свой пароль']],
        ex: [['You mustn’t share your password.', 'Нельзя никому сообщать свой пароль.'], ['You mustn’t touch the cables.', 'Нельзя трогать провода.'], ['I mustn’t forget to call Mum.', 'Мне нельзя забыть позвонить маме.']] },
      { t: 'check', q: 'Скажите: «Нельзя писать спойлеры в чат!»', o: ['You don’t have to post spoilers in the chat!', 'You mustn’t post spoilers in the chat!', 'You must post not spoilers in the chat!'], a: 1,
        why: 'Запрет → mustn’t + слово-действие.' },
      { t: 'idea', text: `А теперь «Тебе не обязательно приходить»: можешь прийти, можешь не приходить — как хочешь. Это <b>don’t have to</b> или <b>don’t need to</b> («не нужно»). Никакого запрета.`,
        lit: [['You', 'ты'], ['don’t have to', 'не обязан'], ['come', 'приходить']],
        ex: [['You don’t have to buy the DLC.', 'DLC покупать не обязательно.'], ['You don’t need to shout. I can hear you.', 'Не нужно кричать. Я тебя слышу.'], ['We didn’t have to wait long.', 'Нам не пришлось долго ждать.']] },
      { t: 'check', q: 'She ___ work tomorrow. It’s her day off.', ru: 'Ей не нужно завтра работать. У неё выходной.', o: ['doesn’t have to', 'mustn’t', 'don’t have to'], a: 0,
        why: 'Не обязательно, и она → doesn’t have to.' },
      { t: 'idea', text: `Итог: смыслы <b>противоположные</b>. mustn’t — «не делай!», don’t have to / don’t need to — «можешь не делать».`,
        rows: [['You mustn’t go.', 'Тебе нельзя уходить. Оставайся!'], ['You don’t have to go.', 'Можешь не уходить — как хочешь.']] }
    ]},

    // ───────────── 6. Как не перепутать ─────────────
    { title: 'Как не перепутать: проверка «если хочешь»', steps: [
      { t: 'idea', text: `Почему путают? По-русски «не надо» значит и «нельзя», и «не обязательно». Проверка: добавьте к русской фразе «…но можешь, если хочешь».`,
        rows: [['звучит нормально', 'don’t have to'], ['звучит глупо', 'mustn’t']],
        tip: `«Можешь не приходить, но приходи, если хочешь» — нормально → don’t have to. «Нельзя трогать провода, но трогай, если хочешь» — глупо → mustn’t.` },
      { t: 'idea', text: `Это самое частое место ошибок — не переживайте. Главная беда: хотели сказать «можешь не приходить», а сказали грубый запрет.`,
        bad: 'You mustn’t come tomorrow. (= тебе запрещено приходить!)', good: 'You <b>don’t have to</b> come tomorrow.' },
      { t: 'check', q: 'The meeting is online. You ___ come to the office.', ru: 'Встреча онлайн. Приходить в офис не обязательно.', o: ['mustn’t', 'don’t have to', 'must'], a: 1,
        why: '«…но можешь, если хочешь» звучит нормально → don’t have to.' },
      { t: 'check', q: 'This is a secret. You ___ tell Max!', ru: 'Это секрет. Тебе нельзя говорить Максу!', o: ['don’t have to', 'mustn’t', 'don’t need to'], a: 1,
        why: '«…но скажи, если хочешь» — глупо. Это запрет → mustn’t.' },
      { t: 'check', q: 'Скажите: «Завтра суббота, можно не вставать рано»', o: ['It’s Saturday tomorrow, so I mustn’t get up early.', 'It’s Saturday tomorrow, so I don’t have to get up early.', 'It’s Saturday tomorrow, so I haven’t to get up early.'], a: 1,
        why: 'Вставать можно, но не обязательно → don’t have to.' },
      { t: 'idea', text: `Итог: перед ответом спросите себя «а если хочется — можно?». Можно → don’t have to. Нельзя ни в коем случае → mustn’t.`,
        rows: [['можно, но не обязательно', 'don’t have to / don’t need to'], ['нельзя совсем', 'mustn’t']] }
    ]},

    // ───────────── 7. should ─────────────
    { title: 'should — «тебе стоит» (совет)', steps: [
      { t: 'idea', text: `Хотите дать совет: «Ты устал, тебе стоит лечь спать». Это <b>should</b> — «стоит, лучше бы». Как must: одно на всех, после него слово-действие без to.`,
        lit: [['You', 'тебе'], ['should', 'стоит'], ['go to bed', 'лечь спать']],
        ex: [['You look tired. You should go to bed.', 'Ты выглядишь уставшим. Тебе стоит лечь спать.'], ['You should try this game.', 'Тебе стоит попробовать эту игру.'], ['You should eat healthy food.', 'Тебе стоит есть полезную еду.']] },
      { t: 'check', q: 'The film is great. You ___ watch it.', ru: 'Фильм отличный. Тебе стоит его посмотреть.', o: ['should to', 'should', 'shoulds'], a: 1,
        why: 'Совет → should + слово-действие, без to и без -s.' },
      { t: 'idea', text: `«Не стоит» — <b>shouldn’t</b>. А если совет сильный, «обязательно!», — берут must.`,
        ex: [['You shouldn’t play games all night.', 'Не стоит играть всю ночь.'], ['He shouldn’t work so much.', 'Ему не стоит так много работать.']],
        rows: [['You should see it.', 'стоит посмотреть (мягко)'], ['You must see it!', 'обязательно посмотри! (сильно)']] },
      { t: 'check', q: 'Скажите: «Тебе не стоит работать так допоздна»', o: ['You don’t should work so late.', 'You shouldn’t work so late.', 'You shouldn’t to work so late.'], a: 1,
        why: 'should + not → shouldn’t, без do и без to.' },
      { t: 'idea', text: `Итог: should — мягкий совет, shouldn’t — «не стоит». Одно на всех, без to.`,
        rows: [['стоит', 'You should rest.'], ['не стоит', 'You shouldn’t work so late.']] }
    ]},

    // ───────────── 8. I think you should ─────────────
    { title: '«Думаю, тебе стоит» и «Как думаешь, мне стоит?»', steps: [
      { t: 'idea', text: `Советы часто начинают с <b>I think</b> — «я думаю». А чтобы спросить совета — <b>Do you think I should…?</b> («Как думаешь, мне стоит…?»).`,
        lit: [['Do you think', 'как думаешь'], ['I', 'мне'], ['should', 'стоит'], ['learn', 'выучить'], ['Blender?', 'Blender?']],
        ex: [['I think you should talk to your boss.', 'Я думаю, тебе стоит поговорить с начальником.'], ['Do you think I should learn Blender?', 'Как думаешь, мне стоит выучить Blender?'], ['What time do you think we should start?', 'Как думаешь, во сколько нам начать?']] },
      { t: 'check', q: 'Скажите: «Как думаешь, мне стоит это купить?»', o: ['You think I should buy it?', 'Do you think I should buy it?', 'Do you think I should to buy it?'], a: 1,
        why: 'Do you think + I should + слово-действие без to.' },
      { t: 'idea', text: `Помните I don’t think … will? Здесь так же: «думаю, не стоит» говорят через <b>I don’t think</b> you should — «не» переезжает к think.`,
        lit: [['I', 'я'], ['don’t think', 'не думаю'], ['you', 'тебе'], ['should', 'стоит'], ['buy it', 'это покупать']],
        bad: 'I think you shouldn’t buy it.', good: 'I <b>don’t think</b> you <b>should</b> buy it.' },
      { t: 'check', q: 'Скажите: «Не думаю, что тебе стоит покупать этот ноутбук»', o: ['I don’t think you should buy this laptop.', 'I not think you should buy this laptop.', 'I think you don’t should buy this laptop.'], a: 0,
        why: '«Не» уходит к think: I don’t think you should + слово-действие.' },
      { t: 'idea', text: `Короткий ответ-совет — без повтора действия: <b>I think you should</b>. Помните Shall I…? («Мне…?») — вот ответ на него.`,
        ex: [['Shall I call her? — Yes, I think you should.', 'Позвонить ей? — Да, думаю, стоит.'], ['Should I ask Anna? — Yes, you should.', 'Мне спросить Анну? — Да, стоит.']] },
      { t: 'idea', text: `Иногда вместо should говорят <b>ought to</b> — смысл тот же, просто реже. Здесь to есть: ought to rest.`,
        ex: [['You ought to rest.', 'Тебе стоит отдохнуть.'], ['Tom ought to see a doctor.', 'Тому стоит сходить к врачу.']], opt: true },
      { t: 'idea', text: `Итог: совет — I think you should, «не стоит» — I don’t think you should, спросить совета — Do you think I should…?`,
        rows: [['совет', 'I think you should…'], ['«не стоит»', 'I don’t think you should…'], ['спросить', 'Do you think I should…?']] }
    ]}
  ];
})();
