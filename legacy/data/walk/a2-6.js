// Грамматика по шагам для юнита a2-6: will — будущее без готового плана, форма will / ’ll / won’t, прогноз (I think… will, probably, I don’t think), решение прямо сейчас (I’ll get it), will или going to / -ing, Shall I…? / Shall we…?, типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a2-6'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: '«Я буду дома» — будущее без плана', steps: [
      { t: 'idea', text: `Хотите сказать «Завтра я буду дома». Берём знакомое I am at home и ставим перед ним слово <b>will</b> («буду»). А am превращается в <b>be</b>: I will be at home.`,
        lit: [['I', 'я'], ['will', 'буду'], ['be', '(есть)'], ['at home', 'дома'], ['tomorrow', 'завтра']],
        ex: [['I will be at home tomorrow.', 'Завтра я буду дома.'], ['I will be at work.', 'Я буду на работе.'], ['The game will be great.', 'Игра будет отличной.']] },
      { t: 'idea', text: `Посмотрите на одну фразу в трёх временах. Вчера — was, сейчас — am, завтра — will be.`,
        rows: [['вчера', 'I was at work.'], ['сейчас', 'I am at work.'], ['завтра', 'I will be at work.']],
        tip: `will be — это русское «буду». Только по-английски «буду» всегда из двух слов.` },
      { t: 'check', q: 'Скажите: «Вечером я буду дома»', o: ['I’m being at home this evening.', 'I’ll be at home this evening.', 'I be at home this evening.'], a: 1,
        why: 'Просто факт о будущем → will be (коротко I’ll be).' },
      { t: 'idea', text: `Итог: will = «буду / будет». Это будущее <b>без готового плана</b>: думаем, что так будет, или решаем прямо сейчас (план — это going to из прошлого урока).`,
        rows: [['план уже есть', 'I’m going to… / I’m meeting…'], ['плана нет', 'I will… / I’ll…']] }
    ]},

    // ───────────── 2. Форма ─────────────
    { title: 'will, ’ll, won’t — одно на всех', steps: [
      { t: 'idea', text: `Помните can? will работает так же: одно слово для всех (I will, she will), и после него слово-действие в самом простом виде — без to, без -s, без -ing.`,
        rows: [['I / you / we / they', 'will come'], ['he / she / it', 'will come']],
        bad: 'I will to call you. She wills come. He will comes.', good: 'I will <b>call</b> you. She <b>will come</b>. He will <b>come</b>.' },
      { t: 'check', q: 'Tom ___ tomorrow.', ru: 'Том придёт завтра.', o: ['will comes', 'will come', 'wills come'], a: 1,
        why: 'will одно для всех, а после него — come без -s.' },
      { t: 'idea', text: `В разговоре will почти всегда сжимают: I will → <b>I’ll</b>, we will → we’ll, it will → it’ll. «Не буду» — <b>won’t</b> (= will not).`,
        lit: [['I', 'я'], ['won’t', 'не буду'], ['be', '(есть)'], ['late', 'опоздавший']],
        ex: [['I’ll call you back.', 'Я тебе перезвоню.'], ['I won’t be late.', 'Я не опоздаю.'], ['It won’t happen again.', 'Это не повторится.']] },
      { t: 'idea', text: `Вопрос — как с can: will выходит вперёд. Короткий ответ — тоже с will.`,
        lit: [['Will', '(будет ли)'], ['you', 'ты'], ['be', '(есть)'], ['at home?', 'дома?']],
        ex: [['Will you be at home tonight?', 'Ты будешь дома вечером?'], ['Yes, I will. / No, I won’t.', 'Да. / Нет.'], ['Who will win?', 'Кто выиграет?']] },
      { t: 'check', q: '___ you be at the office tomorrow?', ru: 'Ты будешь завтра в офисе?', o: ['Do', 'Will', 'Are'], a: 1,
        why: 'Вопрос о будущем → will выходит вперёд.' },
      { t: 'check', q: 'Tom ___ here tomorrow — he’s in Berlin.', ru: 'Тома завтра здесь не будет — он в Берлине.', o: ['won’t be', 'won’t is', 'not will be'], a: 0,
        why: '«Не будет» → won’t + be.' },
      { t: 'idea', text: `Не путайте <b>won’t</b> [воунт] — «не буду» и <b>want</b> [уонт] — «хочу». В won’t звук «оу», как в no.`,
        ex: [['I won’t go.', 'Я не пойду.'], ['I want to go.', 'Я хочу пойти.']], opt: true },
      { t: 'idea', text: `Итог: will — одно на всех, после него простое слово-действие.`,
        rows: [['да', 'I’ll be there.'], ['нет', 'I won’t be there.'], ['вопрос', 'Will you be there?']] }
    ]},

    // ───────────── 3. Прогноз ─────────────
    { title: '«Думаю, мы выиграем» — прогноз', steps: [
      { t: 'idea', text: `will — когда вы знаете или думаете, что будет. Рядом часто стоят <b>I think</b> («думаю»), <b>I’m sure</b> («уверен»), <b>I hope</b> («надеюсь»).`,
        ex: [['I think the update will be great.', 'Думаю, обновление будет отличным.'], ['I’m sure you’ll like this series.', 'Уверен, тебе понравится этот сериал.'], ['Do you think they’ll fix the bug?', 'Как думаешь, они исправят баг?']] },
      { t: 'check', q: 'Скажите: «Думаю, ты сдашь экзамен»', o: ['I think you pass the exam.', 'I think you’ll pass the exam.', 'I think you will to pass the exam.'], a: 1,
        why: 'Прогноз о будущем → will + pass.' },
      { t: 'idea', text: `«Думаю, что <b>не</b>…» по-английски говорят иначе: «не» переезжает в начало — <b>I don’t think</b> … will.`,
        lit: [['I', 'я'], ['don’t think', 'не думаю'], ['it', '(оно)'], ['will rain', 'будет дождь']],
        bad: 'I think it won’t rain today.', good: 'I <b>don’t think</b> it <b>will</b> rain today.',
        tip: `По-английски говорят «Я не думаю, что будет дождь». Так звучит естественно.` },
      { t: 'check', q: 'Скажите: «Думаю, Кейт не придёт»', o: ['I think Kate won’t come.', 'I don’t think Kate will come.', 'I don’t think Kate won’t come.'], a: 1,
        why: '«Думаю, что не…» → I don’t think + will.' },
      { t: 'idea', text: `<b>probably</b> — «наверное». Если «да» — ставим после will. Если «нет» — перед won’t.`,
        rows: [['да', 'We’ll probably win.'], ['нет', 'I probably won’t come.']],
        ex: [['We’ll probably go out tonight.', 'Мы, наверное, пойдём куда-нибудь вечером.'], ['I probably won’t buy it.', 'Я, наверное, не куплю это.']] },
      { t: 'check', q: 'We ___ finish the project on time.', ru: 'Мы, наверное, закончим проект вовремя.', o: ['probably will', 'will probably', 'probably'], a: 1,
        why: 'В «да»-фразе probably стоит после will.' },
      { t: 'idea', text: `Итог: думаю / уверен → will. «Думаю, что не» → I don’t think … will.`,
        rows: [['думаю, да', 'I think we’ll win.'], ['думаю, нет', 'I don’t think we’ll win.'], ['наверное', 'We’ll probably win.']] }
    ]},

    // ───────────── 4. Решение прямо сейчас ─────────────
    { title: '«Я открою!» — решаю прямо сейчас', steps: [
      { t: 'idea', text: `Самое живое место для will: вы решаете <b>в момент разговора</b> — помочь, пообещать, согласиться. Почти всегда коротко: <b>I’ll</b>.`,
        ex: [['The doorbell! — I’ll get it.', 'Звонят! — Я открою.'], ['The phone is ringing. — I’ll answer it.', 'Звонит телефон. — Я отвечу.'], ['I promise I’ll call you.', 'Обещаю, я тебе позвоню.']] },
      { t: 'idea', text: `По-русски «Я открою!», «Я перезвоню» звучат почти как настоящее. Но это будущее-решение, и по-английски нужен <b>I’ll</b>. Без него фраза звучит как «я обычно открываю».`,
        bad: 'I call you tomorrow, OK?', good: 'I<b>’ll call</b> you tomorrow, OK?' },
      { t: 'check', q: 'Скажите: «Не волнуйся, я помогу»', o: ['Don’t worry, I help you.', 'Don’t worry, I’ll help you.', 'Don’t worry, I’m going to help you.'], a: 1,
        why: 'Предлагаете помощь прямо сейчас → I’ll.' },
      { t: 'idea', text: `Когда решаете вслух, удобно начинать с <b>I think I’ll…</b> — «пожалуй, я…». «Пожалуй, не…» — <b>I don’t think I’ll…</b>`,
        ex: [['I’m tired. I think I’ll go to bed early.', 'Я устал. Пожалуй, лягу пораньше.'], ['It’s raining. I don’t think I’ll go out.', 'Идёт дождь. Пожалуй, не пойду гулять.']] },
      { t: 'check', q: 'I’m tired. I think I ___ to bed early.', ru: 'Я устал. Пожалуй, лягу пораньше.', o: ['go', '’ll go', 'goes'], a: 1,
        why: 'Решаете вслух прямо сейчас → I think I’ll…' },
      { t: 'idea', text: `Итог: решил только что, предлагаю, обещаю → I’ll.`,
        rows: [['помощь', 'I’ll carry it.'], ['обещание', 'I’ll call you.'], ['«пожалуй»', 'I think I’ll…']] }
    ]},

    // ───────────── 5. will или going to ─────────────
    { title: 'will или going to?', steps: [
      { t: 'idea', text: `Главный вопрос: решение принято <b>сейчас</b> или <b>раньше</b>? Сейчас → will. Раньше, уже есть план → going to (или am / is / are + -ing, как в прошлом уроке).`,
        rows: [['решаю сейчас', 'Oh, no milk! I’ll buy some.'], ['решил раньше', 'I’m going to buy milk after work.']] },
      { t: 'idea', text: `Одна ситуация — два ответа. Друг зовёт в кино, вы соглашаетесь → will. А если билеты куплены ещё вчера → -ing.`,
        ex: [['Cinema? OK, I’ll come with you.', 'Кино? Ладно, я пойду с тобой.'], ['We’re going to the cinema on Saturday. We’ve got tickets.', 'В субботу мы идём в кино. Билеты есть.']] },
      { t: 'check', q: 'The phone is ringing! — OK, I ___ answer it.', ru: 'Телефон звонит! — Хорошо, я отвечу.', o: ['’ll', '’m going to', 'am'], a: 0,
        why: 'Решили в эту секунду → I’ll.' },
      { t: 'check', q: 'Why are you putting on your jacket? — I ___ out.', ru: 'Зачем ты надеваешь куртку? — Я ухожу.', o: ['’ll go', '’m going', 'go'], a: 1,
        why: 'Он уже одевается — решение принято раньше → I’m going out.' },
      { t: 'idea', text: `О планах спрашивают тоже без will: «Что делаешь в выходные?» — What <b>are you doing</b>…? А «не могу, работаю» — I’m working: это известно заранее.`,
        bad: 'I can’t meet tomorrow. I’ll work.', good: 'I can’t meet tomorrow. I<b>’m working</b>.' },
      { t: 'check', q: 'We ___ to the theatre tonight. We’ve got tickets.', ru: 'Сегодня вечером мы идём в театр. Билеты есть.', o: ['’ll go', '’re going', 'go'], a: 1,
        why: 'Билеты куплены — план готов заранее → -ing, не will.' },
      { t: 'idea', text: `Для прогнозов разница такая: will — «я так думаю», going to — «вижу знаки прямо сейчас».`,
        ex: [['I think it will rain later.', 'Думаю, позже будет дождь. (моё мнение)'], ['Look at those clouds! It’s going to rain.', 'Смотри, какие тучи! Сейчас пойдёт дождь. (видно)']], opt: true },
      { t: 'idea', text: `Итог: сейчас решил или просто думаю → will. План уже был → going to / -ing.`,
        rows: [['решаю сейчас / думаю', 'will'], ['план, договорились', 'going to / am + -ing']] }
    ]},

    // ───────────── 6. Shall I / Shall we ─────────────
    { title: '«Открыть окно?» — Shall I…? Shall we…?', steps: [
      { t: 'idea', text: `Хотите предложить: «Открыть окно?», «Помочь?» По-русски это одно слово с вопросом. По-английски — <b>Shall I</b> + слово-действие?`,
        lit: [['Shall', '(мне…?)'], ['I', 'я'], ['open', 'открыть'], ['the window?', 'окно?']],
        ex: [['It’s hot in here. Shall I open the window?', 'Тут жарко. Открыть окно?'], ['Shall I send you the file now? — Yes, please.', 'Прислать тебе файл сейчас? — Да, пожалуйста.'], ['Shall I turn on the light?', 'Включить свет?']] },
      { t: 'check', q: 'Скажите: «Заказать пиццу?» (предлагаете сами)', o: ['Will I order pizza?', 'Shall I order pizza?', 'Do I order pizza?'], a: 1,
        why: 'Предлагаете что-то сделать сами → Shall I…?' },
      { t: 'idea', text: `А «Пойдём? Сыграем?» — предложить вместе — это <b>Shall we…?</b> Похоже на Let’s из A1, только вопросом: «давай…?»`,
        ex: [['It’s a nice day. Shall we go for a walk?', 'Хороший день. Может, пройдёмся?'], ['Shall we order pizza?', 'Закажем пиццу?']] },
      { t: 'idea', text: `Советуемся о деталях — слово-вопрос встаёт впереди: <b>What shall we…?</b>, <b>What time shall we…?</b>`,
        ex: [['What shall we play tonight?', 'Во что сыграем вечером?'], ['Let’s meet on Friday. — OK, what time shall we meet?', 'Давай встретимся в пятницу. — Хорошо, во сколько?'], ['What shall I wear?', 'Что мне надеть?']] },
      { t: 'check', q: 'It’s a nice day. ___ we go for a walk?', ru: 'Хороший день. Может, пройдёмся?', o: ['Do', 'Shall', 'Will'], a: 1,
        why: 'Предлагаем вместе, «давай…?» → Shall we…?' },
      { t: 'idea', text: `shall бывает только с <b>I</b> и <b>we</b>. Ещё I shall / we shall иногда = I will / we will, но это звучит официально. Живое — только We shall see («Посмотрим»).`,
        bad: 'Tom shall be late.', good: 'Tom <b>will</b> be late.', opt: true },
      { t: 'idea', text: `Итог: предложить сделать самому → Shall I…? Предложить вместе → Shall we…?`,
        rows: [['мне сделать?', 'Shall I open the window?'], ['давай…?', 'Shall we go for a walk?'], ['во сколько?', 'What time shall we meet?']] }
    ]},

    // ───────────── 7. Типичные ошибки ─────────────
    { title: 'Типичные ошибки — проверьте себя', steps: [
      { t: 'idea', text: `Соберём места, где русскоговорящие ошибаются чаще всего. Не переживайте — пройдём их по одному.`,
        rows: [['I will to help you.', 'I will help you.'], ['She wills be happy.', 'She will be happy.'], ['I think he won’t win.', 'I don’t think he will win.']] },
      { t: 'check', q: 'Скажите: «Я помогу тебе»', o: ['I will to help you.', 'I will help you.', 'I will helping you.'], a: 1,
        why: 'После will — простое слово-действие, без to.' },
      { t: 'check', q: 'Скажите: «Закрыть дверь?» (предлагаете сами)', o: ['Do I close the door?', 'Shall I close the door?', 'Will I close the door?'], a: 1,
        why: 'Предложение сделать самому → Shall I…?' },
      { t: 'check', q: 'Скажите: «Я не опоздаю»', o: ['I don’t want be late.', 'I won’t be late.', 'I not will be late.'], a: 1,
        why: '«Не буду» → won’t. want — это «хочу».' },
      { t: 'idea', text: `Итог урока: will + слово-действие — прогноз и решение прямо сейчас. Shall I / Shall we…? — предложить. Готовые планы — going to / -ing.`,
        rows: [['думаю / решаю сейчас', 'I’ll… / I think… will'], ['предлагаю', 'Shall I…? / Shall we…?'], ['план уже есть', 'going to / -ing']] }
    ]}
  ];
})();
