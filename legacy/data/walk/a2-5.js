// Грамматика по шагам для юнита a2-5: будущее «с планом» без will — договорённости (am/is/are + -ing), расписания (Present Simple), going to «решил», not и вопросы с going to, going to «видно сейчас», -ing или going to, итог и типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a2-5'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: 'Будущее «с планом» — без will', steps: [
      { t: 'idea', text: `Хотите сказать «Завтра я встречаюсь с Максом». По-русски мы говорим о завтра в <b>настоящем</b> времени — и по-английски тоже можно. Берём знакомое am / is / are + хвостик -ing и добавляем слово-время.`,
        lit: [['I', 'я'], ['’m', '(есть)'], ['meeting', 'встречающийся'], ['Max', 'Макс'], ['tomorrow', 'завтра']],
        ex: [['I’m meeting Max tomorrow.', 'Завтра я встречаюсь с Максом.'], ['We’re playing tonight.', 'Сегодня вечером мы играем.'], ['She’s working next week.', 'На следующей неделе она работает.']] },
      { t: 'idea', text: `А куда делось «буду» — will? Для планов оно обычно <b>не нужно</b>. Новое только одно: слово-время (tomorrow, tonight, next week) отправляет знакомую фразу в будущее.`,
        ex: [['I’m working.', 'Я работаю. (сейчас)'], ['I’m working tomorrow.', 'Завтра я работаю.']],
        tip: `Какую форму брать, зависит от того, что это за будущее: договорились, решили или это расписание. Разберём по очереди.` },
      { t: 'check', q: 'Скажите: «Завтра я играю с друзьями» (мы договорились)', o: ['I play with friends tomorrow.', 'I’m playing with friends tomorrow.', 'I playing with friends tomorrow.'], a: 1,
        why: 'Договорённость на будущее → am + -ing + tomorrow.' },
      { t: 'idea', text: `Итог: планы на будущее — знакомые формы плюс слово-время. А если видно сейчас, что будет, — тоже going to.`,
        rows: [['договорились', 'I’m meeting Max.'], ['решил, собираюсь', 'I’m going to buy it.'], ['по расписанию', 'The train leaves at 7.30.']] }
    ]},

    // ───────────── 2. Договорённости ─────────────
    { title: 'Договорились: I’m meeting Max tomorrow', steps: [
      { t: 'idea', text: `Если вы <b>уже договорились</b> — с другом, с клиентом, с врачом, — берите am / is / are + -ing и добавляйте, <b>когда</b>. Для англичанина это значит: «уже стоит в календаре».`,
        ex: [['I’m meeting a client on Monday.', 'В понедельник у меня встреча с клиентом.'], ['Kate is going to the dentist on Friday.', 'В пятницу Кейт идёт к стоматологу.'], ['We’re having a party next Saturday.', 'В следующую субботу у нас вечеринка.']] },
      { t: 'check', q: 'I can’t play tonight. I ___ my sister at eight.', ru: 'Я не могу играть вечером. В восемь я встречаюсь с сестрой.', o: ['meet', 'am meeting', 'met'], a: 1,
        why: 'Договорились на вечер → am + meeting.' },
      { t: 'idea', text: `«Не» — как в A1: <b>not</b> сразу после am / is / are. Частая ошибка — взять doesn’t, как в «обычно».`,
        bad: 'Max doesn’t come to the party next week.', good: 'Max <b>isn’t coming</b> to the party next week.',
        ex: [['I’m not working next week.', 'На следующей неделе я не работаю.'], ['Tom isn’t coming tonight.', 'Том сегодня вечером не придёт.']] },
      { t: 'check', q: 'Скажите: «Я не иду на вечеринку в субботу»', o: ['I don’t go to the party on Saturday.', 'I’m not going to the party on Saturday.', 'I not going to the party on Saturday.'], a: 1,
        why: 'План (здесь — его нет) → am not + going. Без am нельзя.' },
      { t: 'idea', text: `Вопрос о планах: am / is / are встаёт <b>перед</b> «кто». Никакого do.`,
        lit: [['What', 'что'], ['are', '(есть)'], ['you', 'ты'], ['doing', 'делающий'], ['tonight', 'сегодня вечером']],
        bad: 'Do you go out tonight?', good: '<b>Are</b> you <b>going</b> out tonight?',
        tip: `What are you doing tonight? — самый частый вопрос о планах. Без tonight он значит «что ты делаешь сейчас», так что слово-время обязательно.` },
      { t: 'check', q: '___ you ___ anything next weekend?', ru: 'Ты что-нибудь делаешь в следующие выходные?', o: ['Do … do', 'Are … doing', 'Did … do'], a: 1,
        why: 'Спрашиваем о планах → Are you doing…?' },
      { t: 'idea', text: `Итог: договорились → <b>am / is / are + -ing + когда</b>.`,
        rows: [['да', 'I’m meeting Max tomorrow.'], ['не', 'I’m not working next week.'], ['вопрос', 'Are you going out tonight?']] }
    ]},

    // ───────────── 3. Расписания ─────────────
    { title: 'По расписанию: The train leaves at 7.30', steps: [
      { t: 'idea', text: `Будущее зависит не от людей, а от <b>расписания</b>: поезд, фильм, урок, распродажа. Тогда берите обычное «как всегда» — leaves, starts. Как по-русски: «Поезд <b>отправляется</b> в 7:30».`,
        ex: [['The train leaves at 7.30.', 'Поезд уходит в 7:30.'], ['The film starts at nine.', 'Фильм начинается в девять.'], ['The sale ends on Sunday.', 'Распродажа заканчивается в воскресенье.']],
        tip: `Одно (поезд, фильм) — не забудьте -s: it leaves, it starts.` },
      { t: 'check', q: 'The concert ___ at 7.30.', ru: 'Концерт начинается в 7:30. (по программе)', o: ['start', 'starts', 'is start'], a: 1,
        why: 'Программа → форма «как всегда», концерт — один → starts.' },
      { t: 'idea', text: `Вопрос про расписание — через знакомое <b>does</b>, как в A1. Слово-действие после does — без -s.`,
        lit: [['What time', 'во сколько'], ['does', '(вопрос)'], ['your flight', 'твой рейс'], ['arrive', 'прибывать']],
        ex: [['What time does your flight arrive?', 'Во сколько прилетает твой рейс?'], ['When does the game come out?', 'Когда выходит игра?']] },
      { t: 'check', q: 'What time ___ the bus leave?', ru: 'Во сколько уходит автобус?', o: ['is', 'does', 'do'], a: 1,
        why: 'Расписание автобуса → вопрос с does.' },
      { t: 'idea', text: `Как выбрать? Время решает <b>человек</b> (договорился) → -ing. Время стоит в <b>таблице</b>, на сайте, в программе → leaves, starts.`,
        rows: [['люди', 'I’m going to a concert tomorrow.'], ['расписание', 'The concert starts at 7.30.']] },
      { t: 'check', q: 'Kate and I ___ to the cinema on Saturday.', ru: 'Мы с Кейт идём в кино в субботу.', o: ['go', 'are going', 'goes'], a: 1,
        why: 'Это план людей, а не расписание → are going.' },
      { t: 'idea', text: `Итог: расписание → форма «как всегда», вопрос через does.`,
        rows: [['да', 'The train leaves at 7.30.'], ['вопрос', 'What time does it leave?']] }
    ]},

    // ───────────── 4. going to — решил ─────────────
    { title: 'Я решил: I’m going to…', steps: [
      { t: 'idea', text: `Хотите сказать «Я собираюсь купить новую мышку». Это <b>be going to</b> + слово-действие: решение уже принято, теперь это намерение. Договариваться ни с кем не нужно.`,
        lit: [['I', 'я'], ['’m', '(есть)'], ['going to', 'собирающийся'], ['buy', 'купить'], ['a new mouse', 'новую мышку']],
        ex: [['I’m going to buy a new mouse.', 'Я собираюсь купить новую мышку.'], ['She’s going to sell her car.', 'Она собирается продать машину.'], ['I’m going to finish this level tonight.', 'Сегодня вечером я пройду этот уровень.']] },
      { t: 'idea', text: `Нужны все три части: am / is / are + going to + слово-действие. А после going to слово-действие <b>голое</b>: без -s и без -ing.`,
        bad: 'I going to buy it. / She is going to plays.', good: 'I<b>’m</b> going to <b>buy</b> it. / She is going to <b>play</b>.' },
      { t: 'check', q: 'She ___ her old PC.', ru: 'Она собирается продать свой старый компьютер.', o: ['is going to sell', 'going to sell', 'is going sell'], a: 0,
        why: 'Все три части: is + going to + sell.' },
      { t: 'idea', opt: true, text: `В сериалах и играх вы услышите <b>gonna</b> — это going to в быстрой речи. Говорить можно, писать в учёбе лучше полностью.`,
        ex: [['I’m gonna win!', 'Я выиграю!'], ['I’m going to win!', 'то же самое, полностью']] },
      { t: 'idea', text: `Итог: решил, собираюсь → <b>am / is / are + going to + слово-действие</b>.`,
        rows: [['I’m', 'going to buy it.'], ['he / she is', 'going to buy it.'], ['you / we / they are', 'going to buy it.']] }
    ]},

    // ───────────── 5. going to: не и вопрос ─────────────
    { title: 'going to: «не» и вопрос', steps: [
      { t: 'idea', text: `«Не собираюсь» — not снова сразу после am / is / are. Остальное не меняется.`,
        ex: [['I’m not going to buy it.', 'Я не собираюсь это покупать.'], ['I’m not going to have lunch. I’m not hungry.', 'Я не буду обедать. Я не голоден.'], ['They aren’t going to wait.', 'Они не собираются ждать.']] },
      { t: 'check', q: 'I ___ going to have breakfast.', ru: 'Я не собираюсь завтракать.', o: ['don’t', 'am not', 'not'], a: 1,
        why: 'Со словом going to «не» — через am not, без do.' },
      { t: 'idea', text: `Вопрос: am / is / are встаёт перед «кто». Никакого do — это самая частая ошибка, не переживайте.`,
        lit: [['Are', '(есть)'], ['you', 'ты'], ['going to', 'собирающийся'], ['invite', 'пригласить'], ['Anna', 'Анну']],
        bad: 'Do you going to invite Anna?', good: '<b>Are you</b> going to invite Anna?',
        ex: [['Is Tom going to stream today?', 'Том будет сегодня стримить?'], ['What are you going to wear?', 'Что ты наденешь?']] },
      { t: 'check', q: 'What ___ going to do after the course?', ru: 'Что ты собираешься делать после курса?', o: ['you are', 'are you', 'do you'], a: 1,
        why: 'В вопросе are стоит перед you: What are you going to do?' },
      { t: 'idea', opt: true, text: `С go обычно не говорят going to go — проще через -ing: I’m going to the gym. Но going to go — тоже правильно.`,
        ex: [['I’m going to the gym tonight.', 'Вечером я иду в спортзал.'], ['I’m going to go to the gym.', 'то же, но длиннее']] },
      { t: 'idea', text: `Итог: «не» и вопрос — как всегда с am / is / are.`,
        rows: [['не', 'I’m not going to buy it.'], ['вопрос', 'Are you going to buy it?'], ['с what', 'What are you going to buy?']] }
    ]},

    // ───────────── 6. going to — видно сейчас ─────────────
    { title: 'Видно уже сейчас: It’s going to rain', steps: [
      { t: 'idea', text: `Хотите сказать «Смотри на тучи! Сейчас пойдёт дождь». Мы <b>видим сейчас</b> знак, по которому ясно, что будет. Это второе значение going to: «всё к тому идёт».`,
        lit: [['It', '(оно)'], ['’s', '(есть)'], ['going to', 'собирающееся'], ['rain', 'дождить']],
        ex: [['Look at those clouds! It’s going to rain.', 'Посмотри на тучи! Сейчас пойдёт дождь.'], ['Careful! That cup is going to fall.', 'Осторожно! Чашка сейчас упадёт.']] },
      { t: 'idea', text: `Проверка простая: есть знак прямо сейчас (часы, счёт, тучи)? Из него понятно, что будет? Значит, going to.`,
        bad: 'Look at the sky! It rains soon.', good: 'Look at the sky! It<b>’s going to rain</b>.',
        ex: [['It’s nine and I’m not ready. I’m going to be late.', 'Уже девять, а я не готов. Я опоздаю.'], ['My HP is very low. I’m going to die!', 'Здоровья (HP) почти нет. Меня сейчас убьют!']] },
      { t: 'check', q: 'Скажите: «Уже 8:55, а встреча в 9:00. Я опоздаю»', o: ['I’m being late.', 'I’m going to be late.', 'I was late.'], a: 1,
        why: 'Видно по часам, что опоздание будет → going to be late.' },
      { t: 'check', q: 'Look at the score! We ___!', ru: 'Посмотри на счёт! Мы выиграем!', o: ['are going to win', 'win', 'won'], a: 0,
        why: 'По счёту уже видно, чем кончится → going to.' },
      { t: 'idea', text: `Итог: знак прямо сейчас → <b>going to</b>.`,
        rows: [['тучи', 'It’s going to rain.'], ['часы', 'I’m going to be late.'], ['счёт 3:0', 'We’re going to win.']] }
    ]},

    // ───────────── 7. -ing или going to ─────────────
    { title: '-ing или going to?', steps: [
      { t: 'idea', text: `Часто подходят обе формы, смысл почти тот же. Оттенок такой: <b>-ing</b> — «уже договорились», <b>going to</b> — «я так решил».`,
        rows: [['договорились с Максом', 'I’m meeting Max at six.'], ['решил, ещё не договорился', 'I’m going to call Max.']],
        ex: [['We’re flying to Spain in July.', 'В июле летим в Испанию. (билеты куплены)'], ['We’re going to travel more.', 'Мы будем больше путешествовать. (намерение)']] },
      { t: 'idea', text: `Сомневаетесь — берите <b>going to</b>, для плана он подходит почти всегда. А -ing без договорённости звучит странно.`,
        bad: 'I’m learning Chinese next year.', good: 'I’m <b>going to learn</b> Chinese next year.' },
      { t: 'check', q: 'Скажите: «Я решил: в этом году я начну бегать»', o: ['I’m starting running this year.', 'I’m going to start running this year.', 'I start running this year.'], a: 1,
        why: 'Личное решение, ни с кем не договаривались → going to.' },
      { t: 'idea', text: `Погоду никто не планирует и не назначает. Поэтому про дождь и снег — только going to, не -ing.`,
        bad: 'It’s raining tomorrow.', good: 'It<b>’s going to rain</b> tomorrow.' },
      { t: 'check', q: 'Скажите: «Завтра будет снег» (так в прогнозе погоды)', o: ['It’s snowing tomorrow.', 'It’s going to snow tomorrow.', 'It snows tomorrow.'], a: 1,
        why: 'Погоду не планируют → going to snow.' },
      { t: 'idea', text: `Итог: договорились → -ing, решил или не уверены → going to.`,
        rows: [['договорились', 'I’m meeting Max.'], ['решил', 'I’m going to call Max.'], ['погода', 'It’s going to rain.']] }
    ]},

    // ───────────── 8. Типичные ошибки ─────────────
    { title: 'Проверьте себя: типичные ошибки', steps: [
      { t: 'check', q: 'Скажите: «Завтра я встречаюсь с друзьями»', o: ['I meet my friends tomorrow.', 'I’m meeting my friends tomorrow.', 'I meeting my friends tomorrow.'], a: 1,
        why: 'Договорились → am + meeting, не форма «как всегда».' },
      { t: 'check', q: 'Скажите: «Ты идёшь гулять сегодня вечером?»', o: ['Do you go out tonight?', 'Are you going out tonight?', 'You are going out tonight?'], a: 1,
        why: 'Вопрос о плане: are встаёт перед you, никакого do.' },
      { t: 'check', q: 'The film ___ at 9.', ru: 'Фильм начинается в 9. (по программе кино)', o: ['start', 'starts', 'is start'], a: 1,
        why: 'Программа → форма «как всегда», фильм — один → starts.' },
      { t: 'check', q: 'Look! It ___ soon.', ru: 'Смотри! Скоро пойдёт дождь.', o: ['rains', 'is going to rain', 'raining'], a: 1,
        why: 'Знак виден сейчас → is going to rain.' },
      { t: 'idea', text: `Итог урока: договорились → I’m meeting · решил → I’m going to meet · по расписанию → it starts · видно сейчас → it’s going to rain.`,
        rows: [['договорились', 'I’m meeting Max.'], ['решил или видно сейчас', 'I’m going to buy it. / It’s going to rain.'], ['расписание', 'The train leaves at 7.30.']] }
    ]}
  ];
})();
