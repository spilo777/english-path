// Грамматика по шагам для юнита a1-16: I’d like (вежливое «хочу»), Would you like + предмет / to + глагол, Would you like vs Do you like, просьбы (Wait! Sit down, please), Don’t + глагол, Be careful / Don’t be late, пожелания Have a nice day, Let’s / Let’s not.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-16'); if (!u) return;
  u.walk = [
    // ───────────── 1. I’d like — вежливое «хочу» ─────────────
    { title: 'Как вежливо сказать «хочу»', steps: [
      { t: 'idea', text: `Хотите сказать в кафе: «Мне кофе, пожалуйста». По-английски <b>I want…</b> («я хочу») с незнакомым человеком звучит резко, почти как приказ — так в кафе не говорят.`,
        bad: 'I want a coffee.', good: 'I’d like a coffee, please.' },
      { t: 'idea', text: `Вежливое «хочу» — <b>I’d like</b>: «я бы хотел». Слово <b>would</b> — это английское «бы», а I’d — сокращение от I would.`,
        lit: [['I’d', 'я бы'], ['like', 'хотел'], ['a coffee', 'кофе'], ['please', 'пожалуйста']],
        ex: [['I’d like a coffee, please.', 'Мне кофе, пожалуйста.'], ['I’d like some water.', 'Мне бы воды.'], ['I’d like an apple.', 'Я бы хотел яблоко.']],
        tip: `Пишется I’d, читается «айд» — одним коротким звуком.` },
      { t: 'check', q: 'Скажите вежливо: «Мне чай, пожалуйста»', o: ['I want tea, please.', 'I’d like some tea, please.', 'Would like tea, please.'], a: 1,
        why: 'I’d like — вежливое «я бы хотел». I want — резко, а без I предложение сломано.' },
      { t: 'idea', text: `После I’d like можно назвать любую вещь: еду, напиток, предмет. Перед вещью — <b>a</b> (одна штука) или <b>some</b> (немного): a coffee, some water.`,
        ex: [['I’m thirsty. I’d like some juice.', 'Я хочу пить. Мне бы сока.'], ['I’d like a big pizza (пицца), please.', 'Мне большую пиццу, пожалуйста.'], ['I’d like some information, please.', 'Мне нужна информация, пожалуйста.']] },
      { t: 'check', q: 'I’m hungry. ___ a sandwich (бутерброд), please.', ru: 'Я голоден. Мне бутерброд, пожалуйста.', o: ['I want', 'I’d like', 'I’d'], a: 1,
        why: 'Вежливо — I’d like. Одно I’d без like ничего не значит.' },
      { t: 'idea', text: `Итог: в кафе и с незнакомыми «хочу» — это I’d like.`,
        rows: [['I want a coffee.', 'резко, как приказ'], ['I’d like a coffee, please.', 'вежливо'], ['I’d = I would', '«я бы»']] }
    ]},

    // ───────────── 2. Would you like + предмет? ─────────────
    { title: 'Предлагаем: Would you like…?', steps: [
      { t: 'idea', text: `Теперь наоборот — вы угощаете: «Хочешь чаю?». Берём то же would like, только would ставим вперёд, а вместо I — you: <b>Would you like</b> some tea?`,
        lit: [['Would', 'бы'], ['you', 'ты'], ['like', 'хотел'], ['some tea', 'чаю']],
        ex: [['Would you like some tea?', 'Хочешь чаю?'], ['Would you like a chocolate?', 'Хочешь шоколадку?'], ['Would you like some juice?', 'Хочешь сока?']],
        tip: `Когда угощаете, ставьте some, а не any: вы ждёте ответа «да». Any — когда сомневаетесь, есть ли вообще.` },
      { t: 'idea', text: `Отвечают на такое коротко. Да — <b>Yes, please.</b> Нет — <b>No, thank you</b> или <b>No, thanks.</b>`,
        rows: [['да', 'Yes, please.'], ['нет', 'No, thanks.'], ['не сейчас', 'Not now, thanks. Maybe later (позже).']],
        bad: 'Yes, I would like.', good: 'Yes, please.' },
      { t: 'check', q: 'Would you like some coffee? — ___', ru: 'Хочешь кофе? — …', o: ['Yes, I like.', 'Yes, please.', 'Yes, I would like.'], a: 1,
        why: 'На угощение отвечают Yes, please или No, thanks — без повтора would like.' },
      { t: 'check', q: 'Скажите: «Хочешь сока?»', o: ['You would like some juice?', 'Would you like some juice?', 'Would like you some juice?'], a: 1,
        why: 'В вопросе would идёт первым, потом you, потом like.' },
      { t: 'idea', text: `Спросить «что будете?» — <b>What would you like?</b> Слово what ставим в самое начало, дальше всё как в обычном вопросе.`,
        lit: [['What', 'что'], ['would', 'бы'], ['you', 'ты'], ['like', 'хотел']],
        ex: [['What would you like? — Tea, please.', 'Что будете? — Чай, пожалуйста.'], ['What would you like, tea or coffee?', 'Что хочешь — чай или кофе?']] },
      { t: 'check', q: 'What ___ like, tea or coffee?', ru: 'Что хочешь — чай или кофе?', o: ['would you', 'you would', 'would'], a: 0,
        why: 'Порядок в вопросе: what → would → you → like.' },
      { t: 'idea', text: `Итог: угощаем через Would you like + some / a + вещь.`,
        rows: [['Would you like some tea?', 'Хочешь чаю?'], ['Yes, please. / No, thanks.', 'ответ'], ['What would you like?', 'Что будете?']] }
    ]},

    // ───────────── 3. Would you like to + глагол? ─────────────
    { title: 'Приглашаем: Would you like to…?', steps: [
      { t: 'idea', text: `Хотите позвать друга: «Хочешь поиграть с нами?». Теперь после like идёт не вещь, а действие. Перед действием обязательно маленькое слово <b>to</b>: like <b>to play</b>.`,
        lit: [['Would you like', 'хочешь'], ['to', '—'], ['play', 'поиграть'], ['with us', 'с нами']],
        ex: [['Would you like to play with us tonight?', 'Хочешь поиграть с нами сегодня вечером?'], ['Would you like to come to my party?', 'Хочешь прийти ко мне на вечеринку?'], ['Would you like to go to the cinema?', 'Хочешь сходить в кино?']] },
      { t: 'idea', text: `Это самое частое место ошибок: to пропадает. Запомните пару: вещь — без to, действие — с to.`,
        rows: [['вещь', 'Would you like some tea?'], ['действие', 'Would you like to play?']],
        bad: 'Would you like go out?', good: 'Would you like <b>to</b> go out? (go out — сходить куда-нибудь)' },
      { t: 'check', q: 'Would you like ___ with us?', ru: 'Хочешь поиграть с нами?', o: ['play', 'to play', 'playing'], a: 1,
        why: 'play — действие, поэтому перед ним to.' },
      { t: 'idea', text: `Ответ на приглашение: «С удовольствием!» — <b>Yes, I’d love to!</b> Действие не повторяют, а to остаётся; отказ — <b>Sorry, I can’t. I’m busy.</b>`,
        rows: [['да', 'Yes, I’d love to! / Sure!'], ['нет', 'Sorry, I can’t. I’m busy.']],
        tip: `love здесь сильнее, чем like: не «хотел бы», а «очень хотел бы».` },
      { t: 'idea', text: `О себе так же — <b>I’d like to</b> + действие: «я бы хотел (сделать)».`,
        lit: [['I’d', 'я бы'], ['like', 'хотел'], ['to stay', 'остаться'], ['at home', 'дома']],
        ex: [['I’d like to stay at home tonight.', 'Сегодня вечером я бы хотел остаться дома.'], ['I’d like to learn Japanese (японский).', 'Я бы хотел выучить японский.'], ['What would you like to do on Saturday?', 'Чем хочешь заняться в субботу?']] },
      { t: 'check', q: 'Скажите: «Я бы хотел пойти домой»', o: ['I’d like go home.', 'I’d like to go home.', 'I’d to like go home.'], a: 1,
        why: 'go — действие → I’d like to go. Без to нельзя, и to стоит сразу перед действием.' },
      { t: 'idea', text: `Итог: вещь — без to, действие — с to.`,
        rows: [['Would you like some tea?', 'вещь'], ['Would you like to play?', 'действие'], ['Yes, I’d love to! / Sorry, I can’t.', 'ответ']] }
    ]},

    // ───────────── 4. Would you like vs Do you like ─────────────
    { title: 'Would you like…? или Do you like…?', steps: [
      { t: 'idea', text: `Вы уже знаете <b>Do you like</b> pizza? — «Ты любишь пиццу?» (вообще). А <b>Would you like</b> some pizza? — «Хочешь пиццы?» (сейчас). Слова похожи, а вопросы разные.`,
        rows: [['Do you like…?', 'нравится вообще', 'Yes, I do. I love it.'], ['Would you like…?', 'хочешь сейчас', 'Yes, please.']] },
      { t: 'idea', text: `То же о себе: <b>I like</b> coffee — люблю кофе вообще. <b>I’d like</b> a coffee — хочу кофе сейчас. Вся разница — в маленьком ’d.`,
        ex: [['I like coffee.', 'Я люблю кофе.'], ['I’d like a coffee.', 'Я хочу кофе (сейчас).'], ['I’d like to go home.', 'Я хочу домой (сейчас).']],
        tip: `Видите ’d — значит «бы, сейчас». Нет ’d — «вообще, всегда».` },
      { t: 'check', q: '___ your new job (работа)? — Yes, it’s great.', ru: 'Тебе нравится новая работа? — Да, отличная.', o: ['Would you like', 'Do you like', 'Are you like'], a: 1,
        why: 'Спрашиваем, нравится ли вообще → Do you like. Are с like не бывает.' },
      { t: 'check', q: 'I’m thirsty. I ___ some water.', ru: 'Я хочу пить. Мне бы воды.', o: ['like', '’d like', 'am like'], a: 1,
        why: 'Хочу сейчас → I’d like. I like some water — «люблю воду вообще», странно.' },
      { t: 'check', q: 'Скажите: «Хочешь мороженого (ice cream)?»', ru: 'Хочешь мороженого?', o: ['Do you like an ice cream?', 'Would you like an ice cream?', 'Do you want like an ice cream?'], a: 1,
        why: 'Предлагаете сейчас → Would you like. Do you like — «любишь ли вообще».' },
      { t: 'idea', text: `Итог: ’d — «сейчас», без ’d — «вообще».`,
        rows: [['Do you like…? / I like…', 'вообще, всегда'], ['Would you like…? / I’d like…', 'сейчас, в этот раз']] }
    ]},

    // ───────────── 5. Do it! — просьбы ─────────────
    { title: 'Подожди! Садись! — просьбы', steps: [
      { t: 'idea', text: `Хотите сказать: «Подожди меня». По-русски слово меняется: ждать → подожди. По-английски берём глагол (слово-действие) как в словаре и ничего не добавляем: <b>Wait</b> for me.`,
        lit: [['Wait', 'подожди'], ['for', '—'], ['me', 'меня'], ['please', 'пожалуйста']],
        ex: [['Wait for me, please.', 'Подожди меня, пожалуйста.'], ['Come here and look at this!', 'Иди сюда и посмотри!'], ['Sit down, please.', 'Садитесь, пожалуйста.']] },
      { t: 'idea', text: `Слово you не ставим — и так ясно, что говорите ему. Чтобы не звучало как приказ, добавьте <b>please</b> в начало или в конец.`,
        bad: 'You wait for me.', good: 'Wait for me, please.',
        ex: [['Please sit down.', 'Садитесь, пожалуйста.'], ['Turn off the TV (телевизор), please.', 'Выключи телевизор, пожалуйста.'], ['Hurry up! The bus is here.', 'Поторопись! Автобус пришёл.']] },
      { t: 'check', q: 'Скажите: «Иди сюда, пожалуйста»', o: ['You come here, please.', 'Come here, please.', 'To come here, please.'], a: 1,
        why: 'Просьба начинается с глагола как в словаре. Без you и без to.' },
      { t: 'idea', text: `Той же формой желают хорошего: <b>Have a nice day!</b> — Хорошего дня! Дословно «имей хороший день».`,
        lit: [['Have', 'имей'], ['a nice', 'хороший'], ['day', 'день']],
        ex: [['Have a nice day!', 'Хорошего дня!'], ['Have fun!', 'Повеселитесь!'], ['Have a good trip!', 'Хорошей поездки!']],
        tip: `Have a chocolate. — «угощайся шоколадкой», то же, что Would you like a chocolate?` },
      { t: 'check', q: 'Скажите: «Хорошего дня!»', o: ['Good day to you!', 'Have a nice day!', 'You have a nice day!'], a: 1,
        why: 'Пожелание — Have a … без you.' },
      { t: 'idea', text: `Итог: просьба = глагол как в словаре, без you.`,
        rows: [['Wait for me, please.', 'Подожди меня.'], ['Sit down, please.', 'Садитесь.'], ['Have a nice day!', 'Хорошего дня!']] }
    ]},

    // ───────────── 6. Don’t! Be careful! ─────────────
    { title: 'Не трогай! Не опаздывай!', steps: [
      { t: 'idea', text: `«Не делай» — ставим <b>Don’t</b> перед глаголом: Don’t touch my keyboard. Это то же самое «не», что в I don’t know.`,
        lit: [['Don’t', 'не'], ['touch', 'трогай'], ['my keyboard', 'мою клавиатуру']],
        ex: [['Don’t worry.', 'Не волнуйся.'], ['Don’t forget your keys.', 'Не забудь ключи.'], ['Don’t go there!', 'Не ходи туда!']] },
      { t: 'check', q: 'Скажите: «Не трогай мой телефон»', o: ['Not touch my phone!', 'Don’t touch my phone!', 'Don’t touching my phone!'], a: 1,
        why: 'Запрет — Don’t + глагол как в словаре. Одного not мало, -ing не нужен.' },
      { t: 'idea', text: `«Не опаздывай», «Осторожно!» — здесь нет действия, есть слово «какой?»: late, careful, quiet. Английский добавляет глагол <b>be</b> («быть»): Be careful! Don’t be late!`,
        lit: [['Don’t', 'не'], ['be', 'будь'], ['late', 'поздним']],
        bad: 'Don’t late!', good: 'Don’t <b>be</b> late!',
        ex: [['Be careful!', 'Осторожно!'], ['Be quiet, please. I’m working.', 'Тише, пожалуйста. Я работаю.'], ['Don’t be sad.', 'Не грусти.']] },
      { t: 'check', q: '___ quiet, please! I’m working.', ru: 'Тише, пожалуйста! Я работаю.', o: ['Be', 'Are', 'Do'], a: 0,
        why: 'quiet — «какой?», не действие, поэтому перед ним be.' },
      { t: 'check', q: 'Скажите: «Не опаздывай!»', o: ['Don’t late!', 'Don’t be late!', 'Not be late!'], a: 1,
        why: 'late — «какой?» → нужен be; «не» в просьбе — Don’t.' },
      { t: 'idea', text: `Итог: «не делай» — Don’t + глагол; если слово «какой?» — Be / Don’t be.`,
        rows: [['Don’t touch it!', 'действие'], ['Be careful!', 'слово «какой?»'], ['Don’t be late!', 'слово «какой?» с «не»']] }
    ]},

    // ───────────── 7. Let’s / Let’s not ─────────────
    { title: 'Давай! — Let’s', steps: [
      { t: 'idea', text: `Хотите сказать: «Пошли!» или «Давай закажем пиццу» — то есть сделаем вместе, я и ты. Для этого <b>Let’s</b> + глагол как в словаре, без to.`,
        lit: [['Let’s', 'давай'], ['order', 'закажем'], ['a pizza', 'пиццу']],
        ex: [['Let’s go!', 'Пошли!'], ['Let’s play one more game.', 'Давай ещё одну игру.'], ['Come on, let’s watch a film!', 'Ну давай, посмотрим фильм!']],
        bad: 'Let’s to go. · Let’s going.', good: 'Let’s go.',
        tip: `Let’s = let us, «позволь нам». Go — иди (ты). Let’s go — пойдём (мы).` },
      { t: 'check', q: 'Let’s ___ a taxi (такси).', ru: 'Давай возьмём такси.', o: ['to take', 'take', 'taking'], a: 1,
        why: 'После Let’s — глагол как в словаре, без to и без -ing.' },
      { t: 'idea', text: `«Давай не будем» — <b>Let’s not</b> + глагол. Не don’t, а именно not: It’s cold. Let’s not go out.`,
        lit: [['Let’s', 'давай'], ['not', 'не'], ['go out', 'пойдём гулять']],
        bad: 'Let’s don’t go.', good: 'Let’s <b>not</b> go.',
        ex: [['Let’s not go out. Let’s stay at home.', 'Давай не пойдём гулять. Останемся дома.'], ['Let’s not play this level (уровень) again.', 'Давай не будем снова играть этот уровень.']] },
      { t: 'idea', text: `Ответ на Let’s: согласны — <b>Good idea!</b>, <b>OK, let’s.</b>, <b>Sure!</b> Не согласны — <b>No, let’s not.</b> или сразу предлагайте своё.`,
        rows: [['да', 'Good idea! / OK, let’s. / Sure!'], ['нет', 'No, let’s not.'], ['своё', 'No, let’s watch a film.']] },
      { t: 'check', q: 'Скажите: «Давай не будем смотреть этот фильм»', o: ['Let’s not watch this film.', 'Let’s don’t watch this film.', 'Don’t let’s watch this film.'], a: 0,
        why: '«Давай не будем» — Let’s not + глагол.' },
      { t: 'check', q: 'Только Том идёт спать: «___ to bed, Tom. You look tired.»', ru: 'Иди спать, Том. Ты выглядишь уставшим.', o: ['Let’s go', 'Go', 'Going'], a: 1,
        why: 'Просьба к одному человеку — просто глагол. Let’s — это «мы вместе».' },
      { t: 'idea', text: `Итог: три способа сказать «сделай / сделаем».`,
        rows: [['Go!', 'иди (ты)'], ['Let’s go! / Let’s not go.', 'пойдём / не пойдём (мы)'], ['Would you like to go?', 'хочешь пойти? (вежливо)']] }
    ]}
  ];
})();
