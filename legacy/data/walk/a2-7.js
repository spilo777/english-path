// Грамматика по шагам для юнита a2-7: одно русское «может» — can / might / may / could; might — «возможно»; might not и «точно» против «возможно»; may = might и вежливое May I…?; could — can в прошлом; вежливые просьбы Can you…? / Could you…? / Can I…?; типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a2-7'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: 'Одно «может» — несколько слов', steps: [
      { t: 'idea', text: `Русское «могу / может» делает много работ: «я <b>могу</b> прийти», «я, <b>может быть</b>, приду», «я не <b>смог</b>», «не <b>могли бы</b> вы…». В английском для каждой работы — своё слово.`,
        ex: [['I can come on Saturday.', 'Я могу прийти в субботу.'], ['I might come.', 'Может быть, я приду.'], ['I couldn’t come yesterday.', 'Я не смог прийти вчера.'], ['Could you help me?', 'Не могли бы вы мне помочь?']] },
      { t: 'idea', text: `Вот три слова этого урока. <b>can</b> вы знаете с A1 — «умею / могу». Новые — <b>might</b> (или <b>may</b>) и <b>could</b>.`,
        rows: [['can', 'умею, есть возможность', 'I can draw.'], ['might / may', 'возможно, будет (не уверен)', 'It might rain.'], ['could', 'мог (в прошлом) / вежливая просьба', 'Could you wait?']] },
      { t: 'check', q: 'Скажите: «Может быть, я куплю эту игру»', o: ['I can buy this game.', 'I might buy this game.', 'I could buy this game yesterday.'], a: 1,
        why: '«Может быть» про будущее, вы не уверены → might.' },
      { t: 'idea', text: `Хорошая новость: все они ведут себя как знакомый <b>can</b>. Одна форма для всех (he might, she could), после них — слово-действие как в словаре: без to и без -s.`,
        rows: [['кто', 'can / could / might / may', 'слово-действие как в словаре'], ['She', 'might', 'come.'], ['He', 'could', 'swim.']],
        tip: `И в вопросе никаких do / does — как с can.` },
      { t: 'check', q: 'Kate ___ late.', ru: 'Кейт, возможно, опоздает.', o: ['might be', 'mights be', 'might to be'], a: 0,
        why: 'might одно для всех, дальше голое be — без -s и без to.' },
      { t: 'idea', text: `Итог: одно русское «может» — разные английские слова. Все работают по формуле can.`,
        rows: [['умею / могу', 'can'], ['возможно, будет', 'might / may'], ['мог / не могли бы вы…', 'could']] }
    ]},

    // ───────────── 2. might ─────────────
    { title: 'might — «возможно, будет»', steps: [
      { t: 'idea', text: `Хотите сказать «Может пойти дождь». Вы <b>не уверены</b>: возможно, но не точно. Для этого есть <b>might</b> — по-русски «возможно», «может быть», «вдруг».`,
        lit: [['It', '(оно)'], ['might', 'возможно'], ['rain', 'дождить']],
        ex: [['Take an umbrella. It might rain.', 'Возьми зонт. Может пойти дождь.'], ['Max might be late.', 'Макс, возможно, опоздает.'], ['Buy a ticket! You might win.', 'Купи билет! Вдруг выиграешь.']],
        tip: `might стоит там же, где стоял бы can: между «кто» и словом-действием. I might play tonight.` },
      { t: 'check', q: 'Anna ___ join us later.', ru: 'Анна, возможно, присоединится к нам позже.', o: ['mights', 'might', 'might to'], a: 1,
        why: 'might — одна форма для всех, дальше слово-действие без to.' },
      { t: 'idea', text: `<b>might be</b> — ещё и догадка о том, что происходит <b>сейчас</b>. Кто-то не отвечает — вы гадаете почему.`,
        ex: [['Kate isn’t answering. She might be asleep.', 'Кейт не отвечает. Может, она спит (asleep — спящий).'], ['He might be at work.', 'Может, он на работе.']] },
      { t: 'idea', text: `Короткий ответ — просто <b>I might.</b> Слово-действие повторять не нужно. Это как «Может быть» в ответ.`,
        ex: [['Are you going to the party? — I might.', 'Ты пойдёшь на вечеринку? — Может быть.'], ['Are you playing tonight? — I might.', 'Будешь играть вечером? — Может.']] },
      { t: 'check', q: 'Are you playing tonight? — I ___. I’m not sure yet.', ru: 'Будешь играть вечером? — Может быть. Ещё не уверен.', o: ['might', 'might play to', 'mighting'], a: 0,
        why: 'Короткий ответ: I might — слово-действие можно не повторять.' },
      { t: 'idea', text: `Итог: не уверены насчёт будущего (или гадаете про «сейчас») — <b>might</b> + слово-действие.`,
        rows: [['возможно, будет', 'It might rain.'], ['догадка про сейчас', 'She might be asleep.'], ['короткий ответ', 'I might.']] }
    ]},

    // ───────────── 3. might not и «точно» против «возможно» ─────────────
    { title: '«Возможно, не…» и «точно» против «может быть»', steps: [
      { t: 'idea', text: `Хотите сказать «Возможно, я не приду». Никаких don’t: просто поставьте <b>not</b> после might.`,
        lit: [['I', 'я'], ['might', 'возможно'], ['not', 'не'], ['come', 'приду']],
        ex: [['I might not play today. I’m really tired.', 'Возможно, я сегодня не буду играть. Я очень устал.'], ['Anna might not come to the meeting.', 'Анна, может быть, не придёт на встречу.']],
        bad: 'I don’t might come.', good: 'I <b>might not</b> come.' },
      { t: 'check', q: 'Скажите: «Возможно, я не пойду на работу завтра»', o: ['I don’t might go to work tomorrow.', 'I might not go to work tomorrow.', 'I might go not to work tomorrow.'], a: 1,
        why: 'Отрицание: might + not + слово-действие, без do.' },
      { t: 'idea', text: `Помните, как говорить о будущем <b>уверенно</b>? I’m playing, I’m going to, I will. Если не уверены — ставьте might.`,
        rows: [['точно (решено)', 'возможно (не уверен)'], ['I’m playing with Max tomorrow.', 'I might play with Max tomorrow.'], ['Kate is going to call later.', 'Kate might call later.'], ['It will be cold.', 'It might be cold.']] },
      { t: 'check', q: 'Скажите: «Кейт, может быть, позвонит позже»', o: ['Kate is going to call later.', 'Kate might call later.', 'Kate might calls later.'], a: 1,
        why: 'Не уверены → might, и call без -s.' },
      { t: 'idea', text: `Ещё один способ сказать то же: <b>maybe</b> («может быть») в начале фразы + will. <b>Maybe I’ll come.</b> = <b>I might come.</b>`,
        ex: [['Maybe I’ll call you later.', 'Может быть, я позвоню тебе позже.'], ['I might call you later.', 'Я, возможно, позвоню тебе позже.']],
        tip: `maybe — одно слово, стоит в начале. may be в два слова — это «возможно, есть»: He may be at home.` },
      { t: 'check', q: '___ I’ll stay at home tonight.', ru: 'Может быть, я останусь сегодня дома.', o: ['May be', 'Maybe', 'Might'], a: 1,
        why: 'В начале фразы «может быть» — одно слово maybe.' },
      { t: 'idea', opt: true, text: `Сжатую форму <b>mightn’t</b> почти не используют, а вопрос <b>Might you…?</b> звучит странно. Спрашивайте как обычно, а отвечайте с might.`,
        ex: [['Are you going to come? — I might not.', 'Ты придёшь? — Может, и нет.']] },
      { t: 'idea', text: `Итог: «возможно, не…» — <b>might not</b>. Уверены — will / going to; не уверены — might или maybe.`,
        rows: [['возможно, не', 'I might not come.'], ['может быть', 'I might come. = Maybe I’ll come.']] }
    ]},

    // ───────────── 4. may ─────────────
    { title: 'may — то же might, и вежливое May I…?', steps: [
      { t: 'idea', text: `<b>may</b> в значении «возможно» — то же самое, что <b>might</b>. Звучит чуть официальнее: в новостях, письмах, прогнозах погоды.`,
        ex: [['I may be late tonight.', 'Я, возможно, сегодня опоздаю.'], ['The forecast says it may snow.', 'В прогнозе говорят, может пойти снег.'], ['The game may not be ready this year.', 'Игра может не выйти в этом году.']] },
      { t: 'check', q: 'There ___ be a storm tonight.', ru: 'Ночью, возможно, будет гроза.', o: ['may', 'mays', 'may to'], a: 0,
        why: 'may как might: одна форма, дальше be без to.' },
      { t: 'idea', text: `Второе значение — <b>May I…?</b> «Можно мне…?». Это <b>самая вежливая</b> просьба о разрешении: с незнакомыми, начальником, на собеседовании.`,
        lit: [['May', 'можно'], ['I', 'мне'], ['ask', 'задать'], ['a question', 'вопрос'], ['?', '']],
        ex: [['May I ask a question?', 'Можно задать вопрос?'], ['May I sit here? — Yes, of course.', 'Можно здесь сесть? — Да, конечно.'], ['May I come in?', 'Можно войти?']] },
      { t: 'check', q: 'Вы на собеседовании: «Можно задать вопрос?»', o: ['May I ask a question?', 'May you ask a question?', 'I may ask a question?'], a: 0,
        why: 'Вежливое разрешение: May I + слово-действие?' },
      { t: 'idea', text: `May так работает только с <b>I</b> и <b>we</b>: May I…? May we…? Попросить другого человека — уже <b>Could you…?</b>`,
        bad: 'May you help me?', good: '<b>Could you</b> help me?',
        tip: `С друзьями в чате хватает Can I…? На собеседовании или в письме клиенту — May I…? или Could I…?` },
      { t: 'check', q: 'Скажите: «Не могли бы вы открыть окно?»', o: ['May you open the window?', 'Could you open the window?', 'May I open you the window?'], a: 1,
        why: 'Просим другого → Could you…? May — только May I / May we.' },
      { t: 'idea', text: `Итог: may = might («возможно»), а ещё May I…? — очень вежливое «можно мне?».`,
        rows: [['возможно', 'It may snow.'], ['можно мне?', 'May I come in?']] }
    ]},

    // ───────────── 5. could — прошлое ─────────────
    { title: 'could — «мог, смог» в прошлом', steps: [
      { t: 'idea', text: `Помните can? У него есть вторая форма для прошлого — <b>could</b>: «мог», «умел», «получилось». А <b>couldn’t</b> — «не мог», «не смог».`,
        rows: [['сейчас', 'в прошлом'], ['I can swim.', 'When I was six, I could swim.'], ['I can’t sleep.', 'I couldn’t sleep last night.']],
        ex: [['Two years ago I couldn’t speak English. Now I can!', 'Два года назад я не мог говорить по-английски. Теперь могу!']] },
      { t: 'idea', text: `Русское «не смог» — почти всегда <b>couldn’t</b>. Никаких didn’t: couldn’t уже само про прошлое.`,
        lit: [['I', 'я'], ['couldn’t', 'не смог'], ['find', 'найти'], ['my charger', 'свою зарядку']],
        ex: [['I couldn’t find my charger.', 'Я не смог найти зарядку.'], ['Max couldn’t come yesterday.', 'Макс не смог прийти вчера.'], ['I couldn’t remember my password.', 'Я не мог вспомнить пароль.']],
        bad: 'I didn’t can open the file. / I can’t sleep yesterday.', good: 'I <b>couldn’t</b> open the file. / I <b>couldn’t</b> sleep yesterday.' },
      { t: 'check', q: 'I was so tired, but I ___ sleep.', ru: 'Я так устал, но не мог уснуть.', o: ['can’t', 'couldn’t', 'didn’t can'], a: 1,
        why: 'Прошлое от can’t → couldn’t.' },
      { t: 'idea', text: `Вопрос — как с can: <b>could</b> выходит вперёд. Ответ коротко: Yes, I could. / No, I couldn’t.`,
        lit: [['Could', 'умел'], ['you', 'ты'], ['read', 'читать'], ['when you were five', 'когда тебе было пять'], ['?', '']],
        ex: [['Could you read when you were five? — No, I couldn’t.', 'Ты умел читать в пять лет? — Нет.'], ['Could you see it?', 'Тебе было видно?']] },
      { t: 'check', q: '___ your brother draw when he was a kid?', ru: 'Твой брат умел рисовать, когда был ребёнком?', o: ['Did', 'Could', 'Can'], a: 1,
        why: 'Вопрос об умении в прошлом: Could + кто + слово-действие.' },
      { t: 'idea', text: `Итог: could / couldn’t — это can / can’t в прошлом.`,
        rows: [['мог, умел', 'I could swim.'], ['не смог', 'I couldn’t find it.'], ['умел?', 'Could you read?']] }
    ]},

    // ───────────── 6. Вежливые просьбы ─────────────
    { title: 'Could you…? — вежливая просьба', steps: [
      { t: 'idea', text: `В просьбах <b>could</b> — не прошлое, а <b>вежливость</b>, как русское «не могли бы вы». Can you…? — проще, Could you…? — мягче.`,
        lit: [['Could', 'не могли бы'], ['you', 'вы'], ['send', 'прислать'], ['me', 'мне'], ['the file', 'файл'], ['please?', 'пожалуйста?']],
        ex: [['Can you wait a moment, please?', 'Подожди минутку, пожалуйста.'], ['Could you send me the file, please?', 'Не могли бы вы прислать мне файл?'], ['Could you turn the music down?', 'Не могли бы вы сделать музыку потише?']] },
      { t: 'idea', text: `Русское «Вы <b>не</b> могли бы…?» по-английски — <b>без not</b>. Couldn’t you…? звучит как упрёк: «Ты что, не мог помочь?»`,
        bad: 'Couldn’t you help me?', good: '<b>Could you</b> help me, please?',
        tip: `Добавьте please в конце — и просьба идеальна.` },
      { t: 'check', q: 'Скажите: «Не могли бы вы повторить?»', o: ['Couldn’t you repeat that?', 'Could you repeat that, please?', 'May you repeat that?'], a: 1,
        why: 'Вежливая просьба: Could you…, please? — без not.' },
      { t: 'idea', text: `Просим для себя — <b>Can I…? / Could I…?</b> Вещь — <b>Can I have…?</b> (или get в кафе), разрешение — Can I / Could I / May I + слово-действие.`,
        rows: [['другой сделал', 'Could you pass me the salt?'], ['получить вещь', 'Can I have a glass of water?'], ['разрешение', 'Could I borrow your charger?']],
        ex: [['Can I get a coffee, please?', 'Можно мне кофе? (в кафе)'], ['Could I use your phone?', 'Можно воспользоваться вашим телефоном?']] },
      { t: 'check', q: 'Скажите: «Можно одолжить твою зарядку?»', o: ['Could you borrow my charger?', 'Could I borrow your charger?', 'Can borrow your charger?'], a: 1,
        why: 'Просим для себя → Could I…? И «я» нужно назвать.' },
      { t: 'idea', text: `Отвечают так: <b>Sure.</b> <b>Of course.</b> <b>No problem.</b> Или Sorry, I can’t. Не повторяйте could в ответе: разрешают через <b>can</b>.`,
        bad: 'Could I borrow your pen? — Yes, you could.', good: 'Could I borrow your pen? — <b>Sure</b>. / Yes, you <b>can</b>.' },
      { t: 'check', q: 'Can I sit here? — Yes, ___.', ru: 'Можно здесь сесть? — Да, конечно.', o: ['I can', 'of course', 'you could'], a: 1,
        why: 'Разрешаем: Yes, of course / Sure. «I can» — это про себя, не про него.' },
      { t: 'idea', text: `Итог: просьба к другому — Could you…? Для себя — Can I…? / Could I…? / May I…? И всегда без not.`,
        rows: [['сделайте', 'Could you help me, please?'], ['можно мне', 'Can I / Could I / May I…?'], ['ответ', 'Sure. / Of course. / No problem.']] }
    ]},

    // ───────────── 7. Типичные ошибки ─────────────
    { title: 'Типичные ошибки — проверьте себя', steps: [
      { t: 'idea', text: `Почти все ошибки урока — от русского языка: лишнее to, лишний do, лишнее «не». Проверьте себя — это самое частое место ошибок, не переживайте.`,
        rows: [['It might to rain.', 'It might rain.'], ['I don’t might come.', 'I might not come.'], ['I didn’t can find it.', 'I couldn’t find it.']] },
      { t: 'check', q: 'He ___ late. He’s still at work.', ru: 'Он, возможно, опоздает. Он ещё на работе.', o: ['mights be', 'might be', 'might to be'], a: 1,
        why: 'might без -s, дальше be без to.' },
      { t: 'check', q: 'Скажите: «Я не смог его найти»', o: ['I didn’t can find it.', 'I can’t find it yesterday.', 'I couldn’t find it.'], a: 2,
        why: '«Не смог» → couldn’t, без did.' },
      { t: 'idea', text: `Итог урока: might / may — возможно; could / couldn’t — мог / не смог; Could you…? Can I…? May I…? — вежливые просьбы. После всех — слово-действие без to.`,
        rows: [['возможно', 'might / may + слово-действие'], ['в прошлом', 'could / couldn’t'], ['просьба', 'Could you…? / Can I…? / May I…?']] }
    ]}
  ];
})();
