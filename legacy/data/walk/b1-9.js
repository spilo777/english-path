// Грамматика по шагам для юнита b1-9: главная идея (оттенки «может быть» и «надо»); may / might сейчас (might be, might be doing, might know, may not, maybe или may be); might have done — догадки о прошлом (и could / couldn’t have); might о будущем (might have to, might be able to, might as well, might в if); must и have to (правила — must, все времена have to, have got to); mustn’t, don’t have to, needn’t; needn’t have done или didn’t need to; типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'b1-9'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: '«Может быть» и «надо» — у каждого оттенка своё слово', steps: [
      { t: 'idea', text: `Вы уже знаете <b>might / may</b> — «возможно» и <b>must / have to / mustn’t / don’t have to</b> — «надо / нельзя / не обязательно». Теперь — оттенки: «может, уже ушёл», «можно и пешком», «зря волновался».`,
        ex: [['He might have gone home.', 'Он, может, уже ушёл домой.'], ['We might have to wait.', 'Нам, возможно, придётся подождать.'], ['No bus. We might as well walk.', 'Автобуса нет. Можно и пешком.'], ['You needn’t have worried.', 'Зря ты волновался.']] },
      { t: 'check', q: 'Скажите: «Возможно, он забыл» (уже, в прошлом)', o: ['He might forget.', 'He might have forgotten.', 'He might forgot.'], a: 1,
        why: 'О прошлом после might ставим have + третья форма (forgotten).' },
      { t: 'idea', text: `Итог: оттенок «уже было» даёт have + третья форма, а «можно и…», «придётся», «зря» — готовые связки урока.`,
        rows: [['возможно, было', 'might have done'], ['возможно, придётся / можно и…', 'might have to / might as well'], ['зря сделал', 'needn’t have done']] }
    ]},

    // ───────────── 2. may / might сейчас ─────────────
    { title: 'may / might про «сейчас»', steps: [
      { t: 'idea', text: `Вы уже знаете: might be — догадка про «сейчас». Кроме be, после might может стоять be + хвостик -ing или любое слово-действие.`,
        rows: [['might be + где / какой', 'Lena might be at the gym.', 'Может, Лена в зале.'], ['might be + -ing', 'He might be streaming right now.', 'Может, он сейчас стримит.'], ['might + слово-действие', 'Ask Oleg. He might know.', 'Спроси Олега. Он, может, знает.']] },
      { t: 'check', q: 'Don’t call Max now. He ___ a raid.', ru: 'Не звони Максу сейчас. Может, он прямо сейчас проходит рейд.', o: ['might play', 'might be playing', 'might played'], a: 1,
        why: 'Процесс прямо сейчас → might be + -ing.' },
      { t: 'idea', text: `«Может, это неправда» — not после may / might, без don’t. may и might здесь почти одинаковы: may чуть официальнее.`,
        lit: [['It', 'это'], ['may', 'возможно'], ['not', 'не'], ['be', '(есть)'], ['true', 'правда']],
        ex: [['It may not be true.', 'Может, это неправда.'], ['She might not know about the meeting.', 'Может, она не знает о встрече.']],
        tip: `В разговоре бывает mightn’t, а вот mayn’t не говорят.` },
      { t: 'idea', text: `Помните maybe? Это одно слово «может быть» в начале фразы, глагола в нём нет. А <b>may be</b> — два слова: may + be.`,
        bad: 'It maybe a bug.', good: 'It <b>may be</b> a bug. / <b>Maybe</b> it’s a bug.' },
      { t: 'check', q: 'Where’s Kate? — She ___ in the meeting room.', ru: 'Где Кейт? — Может, она в переговорке.', o: ['maybe', 'may be', 'may is'], a: 1,
        why: 'Нужно слово-действие: may + be. maybe — без глагола.' },
      { t: 'idea', text: `Итог: догадка про сейчас — might / may + be, be + -ing или слово-действие.`,
        rows: [['где / какой', 'She might be at home.'], ['что делает', 'He might be playing.'], ['не…', 'It may not be true.']] }
    ]},

    // ───────────── 3. might have done ─────────────
    { title: 'might have done — «может, так и было»', steps: [
      { t: 'idea', text: `Хотите сказать «Аня не ответила. Может, она спала». Догадка о прошлом — <b>may / might have</b> + третья форма. Само might не меняется, прошлое показывает have.`,
        lit: [['She', 'она'], ['might', 'возможно'], ['have', '(прошлое)'], ['been', 'была'], ['asleep', 'спящей']],
        ex: [['Anna didn’t reply. She might have been asleep.', 'Аня не ответила. Может, она спала.'], ['I may have left my headphones at the office.', 'Может, я оставил наушники в офисе.']],
        bad: 'He might forgot the password.', good: 'He might <b>have forgotten</b> the password.' },
      { t: 'check', q: 'I can’t find my phone. I ___ it in the taxi.', ru: 'Не могу найти телефон. Может, я оставил его в такси.', o: ['may leave', 'may have left', 'may left'], a: 1,
        why: 'Догадка о прошлом → may have + третья форма (left).' },
      { t: 'idea', text: `«Может, он не видел» — not перед have. А «может, всю ночь играли» (процесс) — have been + -ing.`,
        ex: [['He might not have seen your message.', 'Может, он не видел твоё сообщение.'], ['They may have been playing online all night.', 'Может, они всю ночь играли онлайн.']] },
      { t: 'check', q: 'Скажите: «Может, он не видел твоё сообщение»', o: ['He might not have seen your message.', 'He didn’t might see your message.', 'He might have not see your message.'], a: 0,
        why: 'might + not + have + третья форма, без didn’t.' },
      { t: 'idea', text: `could тоже значит «возможно» — и про сейчас, и про прошлое. Но с «не» смысл меняется: couldn’t have — «исключено», как can’t have из прошлого урока.`,
        rows: [['He might not have got my email.', 'Может, не получил (а может, и получил).'], ['He couldn’t have got my email.', 'Не мог получить — исключено.']],
        ex: [['It could be a bug.', 'Возможно, это баг.'], ['You could have deleted the file by mistake.', 'Может, ты удалил файл по ошибке.']] },
      { t: 'check', q: 'The server was down all day, so she ___ the update.', ru: 'Сервер весь день лежал, так что она не могла скачать обновление. Исключено.', o: ['might not have downloaded', 'couldn’t have downloaded', 'may not download'], a: 1,
        why: '«Исключено» → couldn’t have + третья форма. might not have — только «возможно, нет».' },
      { t: 'idea', text: `Итог: «возможно, было» — may / might have done; «возможно, не было» — might not have done; «исключено» — couldn’t have done.`,
        rows: [['может, было', 'She might have left.'], ['может, не было', 'She might not have left.'], ['точно не было', 'She couldn’t have left.']] }
    ]},

    // ───────────── 4. might о будущем ─────────────
    { title: 'might о будущем: придётся, смогу, можно и…', steps: [
      { t: 'idea', text: `Вы уже знаете: I’m going to buy — решено, I might buy — возможно. Так же с be + -ing: уверены — will be / are, не уверены — might be.`,
        rows: [['уверен', 'I’ll be working at eight.'], ['не уверен', 'I might be working at eight.'], ['не уверен', 'We might be flying to Tbilisi in May.']] },
      { t: 'idea', text: `Хотите сказать «Возможно, придётся подождать». might must нельзя: два таких слова подряд не ставят. Вместо must — <b>have to</b>, вместо can — <b>be able to</b>.`,
        lit: [['We', 'нам'], ['might', 'возможно'], ['have to', 'придётся'], ['wait', 'подождать']],
        ex: [['We might have to wait a bit.', 'Возможно, придётся немного подождать.'], ['I might be able to help you tomorrow.', 'Может, я смогу помочь тебе завтра.'], ['There might not be enough time.', 'Времени может не хватить.']],
        bad: 'We might must wait.', good: 'We might <b>have to</b> wait.' },
      { t: 'check', q: 'Скажите: «Возможно, нам придётся переделать макет»', o: ['We might must redo the layout.', 'We might have to redo the layout.', 'We might to redo the layout.'], a: 1,
        why: 'Два таких слова подряд нельзя → might + have to.' },
      { t: 'idea', text: `<b>might as well</b> (или may as well) — «можно и…, лучшего варианта всё равно нет». Это не «возможно», а вывод: причин не делать нет.`,
        lit: [['We', 'мы'], ['might as well', 'можем и'], ['walk', 'пешком пойти']],
        ex: [['The next bus is in an hour. We might as well walk.', 'Автобус через час. Можно и пешком.'], ['The game is on sale. I may as well buy it now.', 'Игра со скидкой. Возьму уж сейчас.'], ['Nothing’s on TV. We might as well go to bed.', 'По телику ничего. Можно и спать лечь.']] },
      { t: 'check', q: 'The café is closed. We ___ go home.', ru: 'Кафе закрыто. Можно и домой пойти — других вариантов нет.', o: ['might as well', 'might be', 'may have'], a: 0,
        why: '«Можно и…, лучше вариантов нет» → might as well + слово-действие.' },
      { t: 'idea', opt: true, text: `Тонкость: в нереальной ситуации с if («если бы») говорят только might, не may. Подробнее про if — в уроке b1-11.`,
        ex: [['If they paid me more, I might stay.', 'Если бы мне платили больше, я, может, и остался бы.']] },
      { t: 'idea', text: `Итог: «возможно, придётся» — might have to; «может, смогу» — might be able to; «можно и…» — might as well.`,
        rows: [['придётся', 'We might have to wait.'], ['смогу', 'I might be able to help.'], ['можно и…', 'We might as well walk.']] }
    ]},

    // ───────────── 5. must и have to ─────────────
    { title: 'must и have to: кто решил, что надо', steps: [
      { t: 'idea', text: `Вы уже знаете: <b>must</b> — «я сам так считаю», <b>have to</b> — «так устроено»: работа, расписание, закон. Для совета годятся оба.`,
        rows: [['моё мнение', 'I must call Mum. It’s been weeks.'], ['факт, обязанность', 'I have to be at the office at nine.'], ['совет — оба', 'You must watch this! / You have to try this game!']] },
      { t: 'idea', text: `Новое: в <b>письменных правилах</b> и инструкциях пишут must. Так выглядят правила сайта, игры, офиса.`,
        ex: [['Files must be uploaded by Friday.', 'Файлы нужно загрузить до пятницы.'], ['Passwords must contain at least eight characters.', 'Пароль должен содержать минимум восемь символов.'], ['Members must be online for two raids a week.', 'Участники обязаны быть онлайн на двух рейдах в неделю.']] },
      { t: 'check', q: 'Players ___ be polite in the chat. (правила гильдии)', ru: 'Игроки обязаны быть вежливыми в чате.', o: ['must', 'had to', 'must to'], a: 0,
        why: 'Письменное правило → must, и без to. had to — это прошлое.' },
      { t: 'idea', text: `have to живёт как обычное слово-действие, поэтому у него есть все времена. Кроме had to и will have to, часто говорят <b>going to have to</b> и <b>haven’t had to</b>.`,
        lit: [['I', 'мне'], ['haven’t', '(не было)'], ['had to', 'приходилось'], ['fix bugs', 'чинить баги'], ['for ages', 'целую вечность']],
        ex: [['I’m going to have to buy a new laptop.', 'Придётся покупать новый ноутбук.'], ['I haven’t had to fix bugs at night for ages.', 'Мне давно не приходилось чинить баги ночью.'], ['We had to restart the server twice.', 'Пришлось дважды перезапускать сервер.']],
        tip: `В разговоре вместо have to часто говорят <b>have got to</b>: I’ve got to go — «Мне пора». Have you got to work tomorrow?` },
      { t: 'check', q: 'I haven’t ___ work at night for ages.', ru: 'Мне давно не приходилось работать ночью.', o: ['had to', 'must', 'have to'], a: 0,
        why: 'haven’t + третья форма → haven’t had to. У must таких форм нет.' },
      { t: 'check', q: 'Скажите: «Тебе приходится работать по субботам?»', o: ['Do you have to work on Saturdays?', 'Have you to work on Saturdays?', 'Do you must work on Saturdays?'], a: 0,
        why: 'have to — обычное слово-действие: вопрос через do.' },
      { t: 'idea', text: `Итог: мнение — must или have to; факт — have to; письменное правило — must. Все остальные времена — только через have to.`,
        rows: [['правило, инструкция', 'Files must be uploaded.'], ['пришлось / придётся', 'had to / will (going to) have to'], ['давно не приходилось', 'haven’t had to']] }
    ]},

    // ───────────── 6. mustn’t, don’t have to, needn’t ─────────────
    { title: 'mustn’t, don’t have to, needn’t — три разных «не»', steps: [
      { t: 'idea', text: `Вы уже знаете: mustn’t — «нельзя», don’t have to / don’t need to — «не обязательно». Новое слово — <b>needn’t</b>: «нет нужды» (но можно).`,
        rows: [['mustn’t', 'нельзя', 'You mustn’t share your password.'], ['don’t have to', 'не обязательно', 'You don’t have to reply today.'], ['needn’t = don’t need to', 'нет нужды', 'You needn’t hurry.']] },
      { t: 'idea', text: `needn’t ведёт себя как must: одно на всех, без to и без do. А don’t need to — как обычное слово-действие: с do и с to.`,
        lit: [['You', 'тебе'], ['needn’t', 'не нужно'], ['rush', 'спешить']],
        bad: 'You needn’t to wait. / You don’t need wait.', good: 'You <b>needn’t wait</b>. / You <b>don’t need to wait</b>.',
        tip: `needn’t чаще звучит в британском английском, don’t need to — везде.` },
      { t: 'check', q: 'You ___ rush. We have plenty of time.', ru: 'Не нужно спешить. У нас полно времени.', o: ['needn’t', 'needn’t to', 'don’t need'], a: 0,
        why: 'После needn’t — слово-действие без to.' },
      { t: 'idea', text: `Сравните на одной ситуации. needn’t — «не надо, я сам», mustn’t — «ни в коем случае».`,
        ex: [['You needn’t tell Igor. I’ll tell him myself.', 'Не надо говорить Игорю, я сам скажу.'], ['You mustn’t tell Igor. It’s a surprise.', 'Нельзя говорить Игорю, это сюрприз.']] },
      { t: 'check', q: 'It’s a surprise. You ___ tell Igor!', ru: 'Это сюрприз. Тебе нельзя говорить Игорю!', o: ['needn’t', 'mustn’t', 'don’t need to'], a: 1,
        why: 'Запрет → mustn’t. needn’t — лишь «нет нужды».' },
      { t: 'check', q: 'The meeting is optional. You ___ come.', ru: 'Встреча по желанию. Можешь не приходить.', o: ['mustn’t', 'needn’t', 'needn’t to'], a: 1,
        why: 'Можно, но не обязательно → needn’t, и без to.' },
      { t: 'idea', text: `Итог: нельзя — mustn’t; не обязательно, нет нужды — don’t have to, don’t need to или needn’t (без to).`,
        rows: [['нельзя', 'You mustn’t go.'], ['можно не…', 'You don’t have to / don’t need to go.'], ['то же, короче', 'You needn’t go.']] }
    ]},

    // ───────────── 7. needn’t have done или didn’t need to ─────────────
    { title: '«Зря сделал» или «не было нужды»', steps: [
      { t: 'idea', text: `Хотите сказать «Всё обошлось. Зря ты волновался». Сделал — а оказалось, не нужно было: <b>needn’t have</b> + третья форма.`,
        lit: [['You', 'ты'], ['needn’t', 'не нужно'], ['have', '(прошлое)'], ['worried', 'волновался']],
        rows: [['сейчас', 'It’ll be fine. You needn’t worry.', 'Не волнуйся.'], ['прошлое', 'It was fine. You needn’t have worried.', 'Зря ты волновался.']] },
      { t: 'check', q: 'I bought a new charger, but then found the old one. I ___ it.', ru: 'Я купил новую зарядку, а потом нашёл старую. Зря покупал.', o: ['needn’t buy', 'needn’t have bought', 'mustn’t have bought'], a: 1,
        why: 'Купил, а оказалось зря → needn’t have + третья форма.' },
      { t: 'idea', text: `А <b>didn’t need to</b> (= didn’t have to) просто сообщает: нужды не было. Обычно это значит, что и не делали.`,
        ex: [['We didn’t need to book a table, so we didn’t.', 'Бронировать столик было не нужно, мы и не стали.'], ['I didn’t have to pay for the course. It was free.', 'Мне не пришлось платить за курс. Он был бесплатным.']] },
      { t: 'idea', text: `Главная разница — что было на самом деле. Если сделали всё равно, после didn’t need to добавляют but I did anyway.`,
        rows: [['We needn’t have booked a table.', 'Забронировали — зря.'], ['We didn’t need to book a table.', 'Нужды не было (обычно не бронировали).'], ['I didn’t need to get up early, but I did anyway.', 'Встал рано, хотя мог не вставать.']] },
      { t: 'check', q: 'The file was small, so I ___ compress it. I sent it as it was.', ru: 'Файл был маленький, так что сжимать его не было нужды. Я отправил как есть.', o: ['didn’t need to', 'needn’t have', 'mustn’t'], a: 0,
        why: 'Не сжимал, нужды не было → didn’t need to. needn’t have — если бы сжал зря.' },
      { t: 'idea', text: `Частая пара: needn’t have + could have. «Зря сделал так — мог бы по-другому».`,
        ex: [['You needn’t have taken a taxi. You could have walked.', 'Не нужно было брать такси, мог бы дойти пешком.']] },
      { t: 'check', q: 'Скажите: «Зря мы брали такси — вокзал был в пяти минутах»', o: ['We needn’t have taken a taxi. The station was five minutes away.', 'We needn’t take a taxi. The station was five minutes away.', 'We didn’t need take a taxi. The station was five minutes away.'], a: 0,
        why: 'Взяли, а оказалось зря → needn’t have + третья форма.' },
      { t: 'idea', text: `Итог: сделал зря — needn’t have done; нужды не было (и обычно не делал) — didn’t need to / didn’t have to.`,
        rows: [['сделал зря', 'I needn’t have worried.'], ['нужды не было', 'I didn’t need to worry, so I didn’t.']] }
    ]},

    // ───────────── 8. Типичные ошибки ─────────────
    { title: 'Типичные ошибки — проверьте себя', steps: [
      { t: 'idea', text: `Почти все ошибки урока — от русского: «вчера надо было» через must, лишнее to после needn’t, might без have о прошлом. Это самое частое место ошибок — не переживайте.`,
        rows: [['Last night I must finish the design.', 'Last night I had to finish the design.'], ['You needn’t to explain.', 'You needn’t explain.'], ['You mustn’t come — it’s optional.', 'You don’t have to come — it’s optional.']] },
      { t: 'check', q: 'Last night I ___ finish the design.', ru: 'Вчера вечером мне пришлось доделывать дизайн.', o: ['must', 'had to', 'have to'], a: 1,
        why: 'У must нет прошлого; «пришлось» → had to.' },
      { t: 'check', q: 'She didn’t come. She ___ about it.', ru: 'Она не пришла. Может, она забыла об этом.', o: ['might forgot', 'might have forgotten', 'might forget'], a: 1,
        why: 'Догадка о прошлом → might have + третья форма.' },
      { t: 'check', q: 'It’s fine. You ___ explain.', ru: 'Всё нормально. Не нужно объяснять.', o: ['needn’t to', 'needn’t', 'don’t need'], a: 1,
        why: 'needn’t + слово-действие без to; don’t need — только с to.' },
      { t: 'idea', text: `Итог урока: might do / might have done — возможно сейчас / тогда; might as well — можно и…; must — я считаю, have to — так надо, had to — пришлось; mustn’t — нельзя; needn’t have done — сделал зря.`,
        rows: [['возможно / возможно, было', 'might do / might have done'], ['нельзя / не обязательно', 'mustn’t / don’t have to, needn’t'], ['зря / нужды не было', 'needn’t have done / didn’t need to']] }
    ]}
  ];
})();
