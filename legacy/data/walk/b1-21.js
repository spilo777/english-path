// Грамматика по шагам для юнита b1-21: «который» не склоняется — порядок слов вместо падежей; who / that / which в живой речи, that после everything / the only / the best; who / that вместо he / she / it — без повтора, согласование глагола; когда «который» можно выбросить и когда нельзя; предлог в конце (the guy I work with); whose — «чей» в середине фразы; what или that («то, что» и «всё, что»); как объяснить незнакомое слово; типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'b1-21'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: '«Который» не склоняется', steps: [
      { t: 'idea', text: `Вы уже знаете (A2): «который» — это <b>who</b> для людей, <b>which</b> для вещей, <b>that</b> для всех. И иногда его можно выбросить: the game I bought.`,
        ex: [['The girl who drew this art lives in Kazan.', 'Девушка, которая нарисовала этот арт, живёт в Казани.'], ['The series you recommended is great.', 'Сериал, который ты посоветовал, отличный.']] },
      { t: 'idea', text: `Теперь главный секрет. У русского «который» шесть форм: которому, с которым, о котором… В английском форма одна (или ноль), а всё остальное делает <b>порядок слов</b>.`,
        rows: [['Парень, который мне позвонил', 'the guy who called me'], ['Парень, которому я позвонил', 'the guy I called'], ['Парень, с которым я работаю', 'the guy I work with']] },
      { t: 'idea', text: `Посмотрите на вторую строчку. «Которому» по-английски нет — есть просто «парень + я + позвонил». Кто звонил, видно по тому, кто стоит перед словом-действием.`,
        lit: [['the guy', 'парень'], ['I', 'я'], ['called', 'позвонил']],
        ex: [['The guy I called didn’t answer.', 'Парень, которому я позвонил, не ответил.'], ['The guy who called me was angry.', 'Парень, который мне позвонил, был зол.']] },
      { t: 'check', q: 'Скажите: «Парень, которого я пригласил»', o: ['the guy who invited me', 'the guy I invited', 'the guy invited me'], a: 1,
        why: 'Приглашал я → the guy + I + invited.' },
      { t: 'idea', text: `Ещё одно отличие: по-русски перед «который» всегда запятая. В английском в таких уточняющих фразах запятой нет — кусок с who прилипает к слову, как подпись к картинке.`,
        ex: [['The woman who lives next door is a vet.', 'Женщина, которая живёт по соседству, — ветеринар.'], ['I don’t trust people who never lose.', 'Я не доверяю людям, которые никогда не проигрывают.']] },
      { t: 'idea', text: `Итог: английский не склоняет «который» — он меняет порядок слов. И запятых нет.`,
        rows: [['который сам сделал', 'the guy who called me'], ['которому / которого я…', 'the guy I called']] }
    ]},

    // ───────────── 2. who, that, which в живой речи ─────────────
    { title: 'who, that, which — что говорят на самом деле', steps: [
      { t: 'idea', text: `Правило из A2 верное, но у носителей есть привычки. Для людей почти всегда <b>who</b>. Для вещей в разговоре чаще <b>that</b>, а which звучит чуть более «книжно».`,
        rows: [['люди', 'обычно who', 'можно that, нельзя which'], ['вещи, животные', 'обычно that', 'можно which, нельзя who']],
        ex: [['Do you know anyone who wants a used monitor?', 'Знаешь кого-нибудь, кто хочет б/у монитор?'], ['I work for a studio that makes mobile games.', 'Я работаю в студии, которая делает мобильные игры.']] },
      { t: 'check', q: 'Where’s the nearest shop ___ sells SIM cards?', ru: 'Где ближайший магазин, в котором продаются сим-карты?', o: ['who', 'that', 'what'], a: 1,
        why: 'Магазин — не человек → that (или which), who только для людей.' },
      { t: 'check', q: 'The driver ___ caused the accident was fined.', ru: 'Водителя, который устроил аварию, оштрафовали.', o: ['which', 'who', 'what'], a: 1,
        why: 'Водитель — человек → who. which для людей — ошибка.' },
      { t: 'idea', text: `После <b>everything, something, anything, nothing, all, the only</b> и после «самый» (the best, the worst, the first) говорят <b>that</b> — или вообще ничего.`,
        ex: [['Is there anything that I can do?', 'Я могу чем-то помочь?'], ['The only thing that matters is the deadline.', 'Единственное, что важно (matters), — дедлайн.'], ['It’s the best game I’ve ever played.', 'Это лучшая игра, в которую я играл.']] },
      { t: 'check', q: 'This is the only chair ___ doesn’t hurt my back.', ru: 'Это единственный стул, от которого не болит спина.', o: ['who', 'that', 'what'], a: 1,
        why: 'После the only → that; стул — вещь.' },
      { t: 'idea', text: `Итог: люди — who, вещи — that (which тоже можно). После all / everything / the only / the best — that или ничего.`,
        rows: [['люди', 'a player who…'], ['вещи', 'a tool that…'], ['после everything, the only, the best', 'that / ничего']] }
    ]},

    // ───────────── 3. who / that вместо he / she / it ─────────────
    { title: 'who встаёт на место he / she — не дублируем', steps: [
      { t: 'idea', text: `Склеиваем две фразы: «Я встретил девушку. Она UI-дизайнер». <b>who</b> встаёт на место she — и she исчезает. Второй раз её не повторяем.`,
        rows: [['I met a girl. She is a UI designer.', 'I met a girl who is a UI designer.'], ['A patch came out. It fixed the lag.', 'The patch that came out fixed the lag.']] },
      { t: 'idea', text: `По-русски «который она» звучит дико, а по-английски «who she» ошибаются часто. Думайте так: who / that — это уже и есть «он / она / оно».`,
        bad: 'I have a colleague who she draws amazing icons.', good: 'I have a colleague <b>who draws</b> amazing icons.' },
      { t: 'check', q: 'Where are the files ___ on the server?', ru: 'Где файлы, которые были на сервере?', o: ['they were', 'that were', 'were'], a: 1,
        why: 'that заменяет they: the files that were…' },
      { t: 'idea', text: `Слово-действие после who смотрит на слово <b>перед</b> who. Один человек — хвостик -s, много людей — без него.`,
        rows: [['a person who plays', 'один → plays'], ['people who play', 'много → play']],
        ex: [['A streamer is a person who plays games for an audience.', 'Стример — человек, который играет для зрителей (audience).'], ['I don’t like people who complain all the time.', 'Не люблю людей, которые всё время жалуются.']] },
      { t: 'check', q: 'People who ___ this game are crazy.', ru: 'Люди, которые играют в эту игру, — сумасшедшие.', o: ['plays', 'play', 'they play'], a: 1,
        why: 'people — много → play без -s; they не повторяем.' },
      { t: 'idea', text: `Итог: who / that уже заменили he / she / it / they — второе такое слово не нужно.`,
        rows: [['так нельзя', 'a friend who he lives…'], ['так правильно', 'a friend who lives…']] }
    ]},

    // ───────────── 4. Когда «который» можно выбросить ─────────────
    { title: 'Когда «который» можно выбросить, а когда нет', steps: [
      { t: 'idea', text: `Вы уже видели: the game I bought — «которую» выбросили. Но the girl lives upstairs — ошибка. Всё решает один вопрос: <b>кто делает действие</b>?`,
        rows: [['«который» делает сам', 'the woman who lives next door'], ['с «которым» что-то делают другие', 'the woman (who) I wanted to see']] },
      { t: 'idea', text: `Проверка за секунду: посмотрите на слово сразу после who / that. Там слово-действие (who <b>lives</b>, that <b>were</b>) — «который» сам действует, оставляем.`,
        ex: [['The people who work in our office are friendly.', 'Люди, которые работают у нас в офисе, дружелюбные.'], ['Where are the keys that were on the table?', 'Где ключи, которые лежали на столе?']],
        bad: 'The people work in our office are friendly.', good: 'The people <b>who</b> work in our office are friendly.' },
      { t: 'idea', text: `Там кто-то другой (that <b>I</b> bought, who <b>Kate</b> met) — слово можно убрать. В разговоре его обычно и убирают.`,
        lit: [['the keys', 'ключи'], ['(that)', '(которые)'], ['you', 'ты'], ['lost', 'потерял']],
        ex: [['Did you find the keys you lost?', 'Ты нашёл ключи, которые потерял?'], ['The skin I bought yesterday looks terrible.', 'Скин, который я вчера купил, выглядит ужасно.']] },
      { t: 'check', q: 'The designer ___ the logo is on holiday.', ru: 'Дизайнер, который сделал логотип, в отпуске.', o: ['made', 'who made', 'who made it'], a: 1,
        why: 'Сразу слово-действие made — «который» сам сделал → who обязателен, it не нужен.' },
      { t: 'check', q: 'The logo ___ is on the website.', ru: 'Логотип, который сделал дизайнер, на сайте.', o: ['the designer made', 'the designer made it', 'who the designer made'], a: 0,
        why: 'Логотип сделал дизайнер → «который» можно убрать; it не повторяем; who — только для людей.' },
      { t: 'idea', text: `Осторожно: если перепутать, смысл переворачивается. Одни и те же слова — два разных человека.`,
        rows: [['the man who called me', 'человек, который мне позвонил'], ['the man I called', 'человек, которому я позвонил']] },
      { t: 'check', q: 'Скажите: «Человек, которому я позвонил, не ответил»', o: ['The man who called me didn’t answer.', 'The man I called didn’t answer.', 'The man called me didn’t answer.'], a: 1,
        why: 'Звонил я → the man + I + called.' },
      { t: 'idea', text: `Итог: после who / that стоит слово-действие — слово нужно; стоит другой человек — можно убрать.`,
        rows: [['who + слово-действие', 'нельзя убрать: the man who called me'], ['who + I / you / Kate', 'можно убрать: the man I called']] }
    ]},

    // ───────────── 5. Предлог в конце ─────────────
    { title: 'Предлог — в конец: the guy I work with', steps: [
      { t: 'idea', text: `По-русски маленькое слово стоит перед «которым»: <b>с</b> которым, <b>о</b> котором. В английском предлог (to, with, about, on) остаётся при своём слове-действии — в самом конце.`,
        lit: [['the guy', 'парень'], ['I', 'я'], ['work', 'работаю'], ['with', 'с (ним)']],
        ex: [['This is the guy I work with.', 'Это парень, с которым я работаю.'], ['Do you know the woman Tom is talking to?', 'Ты знаешь женщину, с которой разговаривает Том?']] },
      { t: 'idea', text: `Предлог «приклеен» к своему слову: <b>work with, look for, talk about, rely on, apply for, wait for</b>. Не отрывайте его — донесите до конца фразы.`,
        ex: [['Are these the files you were looking for?', 'Это те файлы, которые ты искал?'], ['I didn’t get the job I applied for.', 'Я не получил работу, на которую подавался.'], ['Max is someone you can rely on.', 'Макс — человек, на которого можно положиться.']] },
      { t: 'check', q: 'Скажите: «Кто та девушка, о которой ты говорил?»', o: ['Who is the girl about you were talking?', 'Who is the girl you were talking about?', 'Who is the girl you were talking about her?'], a: 1,
        why: 'Предлог about уходит в конец, her не повторяем.' },
      { t: 'idea', text: `Без предлога смысл ломается. «That’s the song I told you» — «Вот песня, которую я тебе сказал». Нужно <b>about</b>.`,
        bad: 'That’s the song I told you.', good: 'That’s the song I told you <b>about</b>.',
        ex: [['That’s the level I got stuck on.', 'Вот уровень, на котором я застрял.']] },
      { t: 'check', q: 'The bed I slept ___ was awful.', ru: 'Кровать, на которой я спал, была ужасной.', o: ['(ничего)', 'in', 'in it'], a: 1,
        why: 'sleep in a bed → in в конце, it не повторяем.' },
      { t: 'idea', text: `who / that можно и оставить — предлог всё равно в конце: the server <b>that</b> we play <b>on</b>. А «with who I work» — русский порядок, так не говорят.`,
        bad: 'This is the team with who I work.', good: 'This is the team I work <b>with</b>.' },
      { t: 'check', q: 'Oleg is someone you can rely ___.', ru: 'Олег — человек, на которого можно положиться.', o: ['(ничего)', 'on', 'on him'], a: 1,
        why: 'rely on — предлог остаётся в конце, him не повторяем.' },
      { t: 'idea', text: `Итог: «с которым / о котором / на котором» → предлог в конец, без him / it.`,
        rows: [['с которым я работаю', 'the guy I work with'], ['о которой ты говорил', 'the girl you were talking about']] }
    ]},

    // ───────────── 6. whose ─────────────
    { title: '«Чей» внутри фразы — whose', steps: [
      { t: 'idea', text: `Вы знаете <b>whose</b> из вопроса: Whose bag is this? (Чья это сумка?). То же слово работает внутри фразы — «у которого», «чей».`,
        lit: [['I have a friend', 'у меня есть друг'], ['whose', 'чей'], ['brother', 'брат'], ['is a streamer', 'стример']],
        ex: [['I have a friend whose brother is a streamer.', 'У меня есть друг, у которого брат — стример.'], ['The player whose account was banned is back.', 'Игрок, чей аккаунт забанили, вернулся.']] },
      { t: 'idea', text: `Русский хочет сказать «который его брат» или «у которого». По-английски это одно слово whose — и his / her после него не ставим.`,
        bad: 'I have a friend who his brother is a streamer.', good: 'I have a friend <b>whose</b> brother is a streamer.' },
      { t: 'check', q: 'That’s the designer ___ icons we use.', ru: 'Это дизайнер, чьи иконки мы используем.', o: ['who', 'whose', 'who’s'], a: 1,
        why: '«Чьи иконки» → whose; who’s = who is.' },
      { t: 'check', q: 'Скажите: «Я знаю девушку, у которой три кота»', o: ['I know a girl who has three cats.', 'I know a girl whose has three cats.', 'I know a girl who her has three cats.'], a: 0,
        why: 'После «у которой» идёт has (имеет) — это обычный who + has. whose ставим только перед предметом: whose cats.' },
      { t: 'idea', text: `Итог: whose + предмет = «чей / у которого». Сразу после whose — всегда вещь или человек, которые кому-то принадлежат.`,
        rows: [['у которого брат', 'a friend whose brother…'], ['чей аккаунт', 'the player whose account…']] }
    ]},

    // ───────────── 7. what или that ─────────────
    { title: '«То, что» и «всё, что» — what или that', steps: [
      { t: 'idea', text: `Хотите сказать: «То, что случилось, — моя вина». «То, что» — это <b>what</b>. Оно стоит само по себе, без слова перед ним.`,
        ex: [['What happened was my fault.', 'То, что случилось, — моя вина.'], ['That’s exactly what I need.', 'Это именно то, что мне нужно.'], ['I’ll do what I can.', 'Сделаю, что смогу.']] },
      { t: 'idea', text: `А «всё, что» — это <b>everything that</b> (или просто everything). Если перед «что» есть слово — everything, all, the game — нужен that или ничего, но не what.`,
        bad: 'Everything what he said was true.', good: 'Everything <b>(that)</b> he said was true.',
        tip: `Пара для запоминания: <b>то, что = what</b>; <b>всё, что = everything that</b>.` },
      { t: 'check', q: 'She apologised for ___ she said.', ru: 'Она извинилась за то, что сказала.', o: ['that', 'what', 'which'], a: 1,
        why: 'Перед «что» нет слова, «то, что» → what.' },
      { t: 'check', q: 'I remember everything ___ you told me.', ru: 'Я помню всё, что ты мне сказал.', o: ['what', 'that', 'who'], a: 1,
        why: 'После everything → that (или ничего), не what.' },
      { t: 'idea', text: `Живая конструкция: <b>What I like about… is…</b> — «Что мне нравится в… — так это…».`,
        lit: [['What', 'то, что'], ['I like', 'мне нравится'], ['about this game', 'в этой игре'], ['is', '(есть)'], ['the music', 'музыка']],
        ex: [['What I like about this game is the music.', 'Что мне нравится в этой игре — так это музыка.'], ['What I need right now is coffee.', 'Что мне сейчас нужно — так это кофе.']] },
      { t: 'idea', text: `Итог: без слова перед «что» — what; после everything / all / предмета — that или ничего.`,
        rows: [['то, что', 'what I need'], ['всё, что', 'everything (that) I need'], ['игра, которую', 'the game (that) I bought']] }
    ]},

    // ───────────── 8. Объясняем незнакомое слово ─────────────
    { title: 'Забыли слово? Опишите его', steps: [
      { t: 'idea', text: `Забыли слово «зарядка»? Не молчите — опишите: «это штука, которой ты…». Так делают и носители, и собеседник сам подскажет слово.`,
        rows: [['It’s a thing (that) you use to…', 'It’s a thing you use to charge your phone.'], ['It’s someone who…', 'It’s someone who fixes pipes.'], ['It’s something that…', 'It’s something that happens when the game freezes.']] },
      { t: 'check', q: 'Вы забыли слово «зарядка». Как описать?', o: ['It’s a thing you use to charge your phone.', 'It’s a thing you use it to charge your phone.', 'It’s a thing what charges your phone.'], a: 0,
        why: '«которой ты» — слово можно убрать, it не повторяем, what после thing нельзя.' },
      { t: 'idea', text: `Ещё фразы, которые звучат очень естественно: the one (тот, что), the last thing (только… не хватало), anyone who (каждый, кто).`,
        ex: [['The one I bought is black.', 'Тот, что я купил, чёрный.'], ['The last thing I need is another meeting.', 'Только ещё одного созвона мне не хватало.'], ['Anyone who has played Dark Souls knows this feeling.', 'Каждый, кто играл в Dark Souls, знает это чувство.']] },
      { t: 'check', q: 'A liar is someone ___ doesn’t tell the truth.', ru: 'Лжец — это тот, кто не говорит правду.', o: ['who', 'what', 'which'], a: 0,
        why: 'someone — человек, и сразу идёт doesn’t → who обязателен.' },
      { t: 'idea', text: `Итог урока: люди — who, вещи — that · сам действует — слово нужно, с ним делают — можно убрать · предлог в конец · whose = чей · то, что = what.`,
        rows: [['the guy who called me / the guy I called', 'кто действует'], ['the guy I work with', 'предлог в конце'], ['a friend whose brother… / what I need', 'чей / то, что']] }
    ]}
  ];
})();
