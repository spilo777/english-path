// Грамматика по шагам для юнита b1-13: пересказ смотрит из «сейчас» рассказчика; полная карта сдвигов (had done, had been doing, was going to, might, had to); что не сдвигается (did, would, should, had better); когда сдвиг не нужен (всё ещё правда, says) и когда обязателен (оказалось неправдой, But you said…); tomorrow → the next day, here → there; say / tell / explain to me; просьбы и приказы (told me to, asked me not to); пересказ вопросов (asked where I lived); вопросы да/нет (asked if / whether).
(function () {
  const u = COURSE.units.find((x) => x.id === 'b1-13'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: 'Пересказ: всё, что после said, отъезжает назад', steps: [
      { t: 'idea', text: `Вы уже знаете из A2: после said слово делает шаг назад. По-русски время в пересказе «замирает», а по-английски рассказчик смотрит из своего <b>сейчас</b>: слова сказаны в прошлом — и их содержание уезжает в прошлое.`,
        lit: [['Max', 'Макс'], ['said', 'сказал'], ['he', 'он'], ['was', '(был)'], ['tired', 'уставший']],
        ex: [['Anna said she had already sent the file.', 'Аня сказала, что уже отправила файл.'], ['She asked me not to be late.', 'Она попросила меня не опаздывать.'], ['He asked me where I lived.', 'Он спросил, где я живу.']],
        tip: `said — как машина времени: всё, что едет за ним, отъезжает на одну остановку назад. В этом уроке — все сдвиги, просьбы и вопросы.` },
      { t: 'check', q: 'Kate: “I’m working from home.” → Kate said she ___ from home.', ru: 'Кейт: «Я работаю из дома». (Сейчас она уже в офисе.) → Кейт сказала, что работает из дома.', o: ['is working', 'was working', 'has worked'], a: 1,
        why: 'После said шаг назад: am working → was working.' },
      { t: 'idea', text: `Итог: пересказываем чужие слова — смотрим из своего «сейчас» и делаем шаг назад.`,
        rows: [['“I’m tired.”', 'He said he was tired.'], ['“I’m working.”', 'She said she was working.']] }
    ]},

    // ───────────── 2. Полная карта сдвигов ─────────────
    { title: 'Полная карта: had done, was going to, might', steps: [
      { t: 'idea', text: `Человек говорит: «Я потерял наушники» — I’ve lost my headset. В пересказе have done становится <b>had done</b> (Past Perfect из урока B1-5: had + третья форма — «сделал ещё до того момента»).`,
        lit: [['Liza', 'Лиза'], ['said', 'сказала'], ['she', 'она'], ['had lost', 'потеряла (до того)'], ['her headset', 'свои наушники']],
        ex: [['“I’ve finished the icons.” → Vera said she had finished the icons.', 'Вера сказала, что закончила иконки.']],
        bad: 'He said he had finish the level.', good: 'He said he <b>had finished</b> the level.' },
      { t: 'check', q: '“I’ve never played Dota.” → She said she ___ Dota.', ru: '«Я никогда не играла в Доту». (Это было год назад — с тех пор она сыграла сотню матчей.) → Она сказала, что никогда не играла в Доту.', o: ['has never played', 'had never played', 'had never play'], a: 1,
        why: 'have played → had played, после had — третья форма.' },
      { t: 'idea', text: `Длинные формы шагают назад целиком: have been doing → <b>had been doing</b>, am going to → <b>was going to</b>.`,
        ex: [['“I’ve been waiting for ages.” → He said he had been waiting for ages.', 'Он сказал, что ждёт уже целую вечность.'], ['“I’m going to quit the guild.” → Dan said he was going to quit the guild.', 'Дэн сказал, что собирается уйти из гильдии.']] },
      { t: 'idea', text: `Маленькие слова-помощники: will → would и can → could вы знаете. Ещё два: may → <b>might</b>, must («обязан») → обычно <b>had to</b>.`,
        ex: [['The seller said I might need a bigger monitor.', 'Продавец сказал, что мне, может, понадобится монитор побольше.'], ['Support said I had to update the drivers.', 'Поддержка сказала, что мне надо обновить драйверы.']],
        tip: `После must можно оставить и must: He said I must update… — тоже верно.` },
      { t: 'check', q: '“I’m going to call the client.” → Anna said she ___ call the client.', ru: '«Я собираюсь позвонить клиенту». (Это было утром, а днём она уже позвонила.) → Аня сказала, что собирается позвонить клиенту.', o: ['is going to', 'was going to', 'would going to'], a: 1,
        why: 'am going to → was going to.' },
      { t: 'check', q: '“I can’t open the file.” → He said he ___ open the file.', ru: '«Я не могу открыть файл». (Потом он всё-таки его открыл.) → Он сказал, что не может открыть файл.', o: ['can’t', 'couldn’t', 'hadn’t'], a: 1,
        why: 'can → could, значит can’t → couldn’t.' },
      { t: 'idea', text: `Итог: каждая форма отходит на один шаг назад.`,
        rows: [['have done / have been doing', 'had done / had been doing'], ['am going to / will', 'was going to / would'], ['can / may / must', 'could / might / had to']] }
    ]},

    // ───────────── 3. Что не сдвигается ─────────────
    { title: 'did, would, should — дальше ехать некуда', steps: [
      { t: 'idea', text: `А если человек сказал в Past Simple — «Я не спал»? Можно оставить как есть, а можно сдвинуть в had done — оба варианта нормальны. Сдвиг полезен, когда важно, что это было <b>раньше</b>.`,
        ex: [['“We played until 3 a.m.” → Max said they played until 3 a.m.', 'Макс сказал, что они играли до трёх ночи.'], ['“I didn’t sleep.” → He said he hadn’t slept, so he was a zombie.', 'Он сказал, что не спал, поэтому он как зомби.']] },
      { t: 'idea', text: `Не меняются <b>would, could, should, might, had better, used to</b> и had done — они уже «прошлые», дальше назад ехать некуда.`,
        ex: [['“I should call my mum.” → He said he should call his mum.', 'Он сказал, что ему надо бы позвонить маме.'], ['“You’d better save the game.” → She said I’d better save the game.', 'Она сказала, что мне лучше сохранить игру.']] },
      { t: 'check', q: '“You should update your portfolio.” → The recruiter said I ___ update my portfolio.', ru: '«Вам стоит обновить портфолио». → Рекрутер сказал, что мне стоит обновить портфолио.', o: ['should', 'would should', 'had should'], a: 0,
        why: 'should уже не сдвигается — оставляем как есть.' },
      { t: 'idea', text: `Итог: пересказ за четыре шага — найти глагол, сдвинуть назад, поменять «я / ты» по смыслу, проверить слова времени и места.`,
        rows: [['did', 'did или had done'], ['would, could, should, might', 'без изменений']] }
    ]},

    // ───────────── 4. Когда сдвиг не нужен ─────────────
    { title: 'Когда можно не сдвигать — и когда обязательно', steps: [
      { t: 'idea', text: `Если сказанное <b>до сих пор правда</b>, настоящее время можно оставить. Том всё ещё на той работе — годятся оба варианта.`,
        ex: [['Tom said his new job is boring. / …was boring.', 'Том сказал, что новая работа скучная. (оба верны)'], ['Our teacher said the Earth goes round the Sun.', 'Учитель сказал, что Земля вращается вокруг Солнца.']] },
      { t: 'idea', text: `Если ситуация <b>закончилась</b> или сказанное <b>оказалось неправдой</b> — только прошедшее. Дэн сказал: «Макс в Испании», а вы встречаете Макса в кино.`,
        bad: 'Max! Dan said you are in Spain!', good: 'Max! Dan said you <b>were</b> in Spain!',
        ex: [['Paul said he had to go. (и ушёл)', 'Павел сказал, что ему надо идти.'], ['But you said you didn’t like horror games!', 'Но ты же говорил, что не любишь хорроры!']],
        tip: `But you said… — «Но ты же говорил…» — живая фраза для споров, и в ней тоже прошедшее.` },
      { t: 'check', q: 'Anna said you ___ ill!', ru: 'Аня говорила, что Кейт больна, а вы видите Кейт на вечеринке: «Аня сказала, что ты болеешь!»', o: ['are', 'were', 'have been'], a: 1,
        why: 'Сказанное оказалось неправдой → только прошедшее: were.' },
      { t: 'idea', text: `Если глагол пересказа в <b>настоящем</b> — says, tells, the game says, — сдвига нет вообще. Так пересказывают свежие сообщения, новости, правила.`,
        ex: [['Max says he’s running late.', 'Макс пишет, что опаздывает.'], ['The forecast says it will snow tonight.', 'В прогнозе сказано, что ночью будет снег.'], ['The game says the server is down.', 'Игра пишет, что сервер не работает.']] },
      { t: 'check', q: 'The notification says the update ___ ready.', ru: 'Уведомление пишет, что обновление готово.', o: ['is', 'was', 'had been'], a: 0,
        why: 'says — в настоящем → сдвига нет: is.' },
      { t: 'idea', text: `Итог: всё ещё правда — можно без сдвига; оказалось неправдой — только сдвиг; says — без сдвига.`,
        rows: [['всё ещё правда', 'said it is / was'], ['оказалось неправдой', 'said you were…'], ['says, tells', 'без сдвига']] }
    ]},

    // ───────────── 5. tomorrow, here ─────────────
    { title: '«Завтра» и «здесь» тоже переезжают', steps: [
      { t: 'idea', text: `В понедельник Макс сказал: “I’ll send it <b>tomorrow</b>.” В пятницу вы жалуетесь: завтра уже давно прошло. Поэтому tomorrow → <b>the next day</b> — «на следующий день».`,
        lit: [['Max said', 'Макс сказал'], ['he would send it', 'он пришлёт это'], ['the next day', 'на следующий день']],
        ex: [['Max said he would send it the next day, and he still hasn’t!', 'Макс обещал прислать на следующий день — и до сих пор не прислал!']] },
      { t: 'idea', text: `Так же переезжают и другие слова времени — если пересказываем в другой день.`,
        rows: [['today / tonight', 'that day / that night'], ['yesterday', 'the day before (the previous day)'], ['next week / two days ago', 'the following week / two days before']],
        tip: `now в пересказе часто становится then — «тогда».` },
      { t: 'idea', text: `Пересказываем в тот же день — ничего не меняем. А в другом месте here → <b>there</b>, this → <b>that</b>. «Я, ты, мой» меняем по смыслу: кто рассказывает и кому.`,
        ex: [['Morning: “I’ll call you tomorrow.” Evening: Kate said she’d call me tomorrow.', 'Завтра ещё не наступило — tomorrow остаётся.'], ['“I love it here.” → Dan said he loved it there.', 'Дэн сказал, что ему там очень нравится.']] },
      { t: 'check', q: 'Two weeks ago he said he would come ___.', ru: 'Две недели назад он сказал, что придёт на следующий день.', o: ['tomorrow', 'the next day', 'the day before'], a: 1,
        why: 'Тот «завтрашний» день давно прошёл → the next day.' },
      { t: 'check', q: 'Dan said he was happy ___.', ru: 'Год назад в Казани Дэн сказал: «Мне здесь хорошо». Теперь вы в Москве: Дэн сказал, что ему там хорошо.', o: ['here', 'there', 'then'], a: 1,
        why: 'Рассказываем в другом месте → here становится there.' },
      { t: 'idea', text: `Итог: другой день — tomorrow → the next day; другое место — here → there. Тот же день и место — ничего не трогаем.`,
        rows: [['tomorrow / yesterday', 'the next day / the day before'], ['here / this', 'there / that']] }
    ]},

    // ───────────── 6. say, tell, explain ─────────────
    { title: 'say, tell, explain — кому и как', steps: [
      { t: 'idea', text: `Вы уже знаете: <b>told me</b>, но <b>said</b> (to me). Новое: explain, mention, complain, admit, reply ведут себя как say — человек только через <b>to</b>. «Объясни мне» — explain <b>to me</b>.`,
        lit: [['He', 'он'], ['explained', 'объяснил'], ['to me', 'мне'], ['how the tool worked', 'как работает инструмент']],
        bad: 'He explained me the rules.', good: 'He explained the rules <b>to me</b>.' },
      { t: 'check', q: 'Can you explain ___?', ru: 'Можешь объяснить мне задачу?', o: ['me the task', 'the task to me', 'the task me'], a: 1,
        why: 'explain + что + to + кому.' },
      { t: 'idea', text: `Человек сразу после глагола, без to, стоит только после <b>tell, ask, promise, remind, warn</b> (предупредить).`,
        ex: [['She reminded me that the call was at ten.', 'Она напомнила мне, что созвон в десять.'], ['He promised me he would reply.', 'Он пообещал мне, что ответит.']],
        bad: 'She said me that she was busy.', good: 'She <b>told me</b> she was busy. / She <b>said</b> she was busy.' },
      { t: 'check', q: 'The team lead ___ us that the deadline had moved.', ru: 'Тимлид сказал нам, что дедлайн сдвинулся.', o: ['said', 'told', 'explained'], a: 1,
        why: 'Сразу после глагола стоит человек (us) → только told.' },
      { t: 'idea', opt: true, text: `Ещё живые слова пересказа: <b>claim</b> (утверждал — может, неправда), <b>add</b> (добавил), <b>whisper</b> (прошептал), <b>shout</b> (крикнул), <b>announce</b> (объявил).`,
        ex: [['He claimed he had never seen the email.', 'Он утверждал, что не видел письма.'], ['The studio announced that the game would be free.', 'Студия объявила, что игра будет бесплатной.']] },
      { t: 'idea', text: `Итог: человек сразу — только после tell, ask, promise, remind, warn. У остальных — через to.`,
        rows: [['told me / reminded me', 'человек сразу'], ['said / explained / complained to me', 'человек через to']] }
    ]},

    // ───────────── 7. Просьбы и приказы ─────────────
    { title: 'Просьбы и приказы: told me to…, asked me not to…', steps: [
      { t: 'idea', text: `Хотите сказать «Олег попросил меня помочь ему». Просьбу пересказываем так: <b>asked</b> + кого + <b>to</b> + глагол. Приказ или указание — <b>told</b> + кого + to.`,
        lit: [['Oleg', 'Олег'], ['asked', 'попросил'], ['me', 'меня'], ['to help', 'помочь'], ['him', 'ему']],
        ex: [['“Hurry up!” → I told him to hurry up.', 'Я сказал ему поторопиться.'], ['“Can you help me with the layout?” → Olga asked me to help her with the layout.', 'Ольга попросила меня помочь ей с макетом.']],
        tip: `Время тут сдвигать не нужно — у to + глагол его нет.` },
      { t: 'check', q: 'Скажите: «Он попросил меня позвонить ему»', o: ['He asked me call him.', 'He asked me to call him.', 'He said me to call him.'], a: 1,
        why: 'Просьба → asked + кого + to + глагол.' },
      { t: 'idea', text: `«Не делай» → <b>not to</b>. Слово don’t в пересказ не переносим.`,
        ex: [['“Don’t touch my PC!” → He told me not to touch his PC.', 'Он сказал мне не трогать его компьютер.'], ['“Please don’t share the link.” → Anna asked us not to share the link.', 'Аня попросила нас не делиться ссылкой.']],
        bad: 'She told me don’t be late.', good: 'She told me <b>not to be</b> late.' },
      { t: 'check', q: '“Don’t be late,” the coach said. → The coach told us ___ late.', ru: '«Не опаздывайте», — сказал тренер. → Тренер сказал нам не опаздывать.', o: ['not to be', 'don’t be', 'to don’t be'], a: 0,
        why: 'Запрет → told + кого + not to + глагол.' },
      { t: 'idea', opt: true, text: `Без человека — <b>said not to</b>; предупреждение — <b>warned</b> + кого + not to. И не путайте три ask: asked me to (попросил сделать), asked for (попросил вещь), asked if (спросил).`,
        ex: [['“Don’t worry.” → She said not to worry.', 'Она сказала не волноваться.'], ['She asked for the bill.', 'Она попросила счёт.']] },
      { t: 'idea', text: `Итог: просьба — asked me to, приказ — told me to, «не делай» — not to.`,
        rows: [['просьба', 'She asked me to call her.'], ['приказ', 'He told me to wait.'], ['запрет', 'He told us not to worry.']] }
    ]},

    // ───────────── 8. Пересказ вопросов ─────────────
    { title: 'Пересказ вопросов: he asked me where I lived', steps: [
      { t: 'idea', text: `Хотите сказать «Он спросил, где я живу». В пересказанном вопросе порядок слов как в обычном предложении: сначала <b>кто</b>, потом глагол. Время сдвигаем, как обычно.`,
        lit: [['He', 'он'], ['asked me', 'спросил меня'], ['where', 'где'], ['I', 'я'], ['lived', 'живу']],
        bad: 'She asked me where do I live?', good: 'She asked me where <b>I lived</b>.' },
      { t: 'idea', text: `do / does / did при этом исчезают, а в конце — точка, не «?». Это уже не вопрос, а рассказ о вопросе.`,
        rows: [['“What do you do in your free time?”', 'She asked what I did in my free time.'], ['“Why did you leave your last job?”', 'She asked why I had left my last job.']] },
      { t: 'check', q: '“Where do you live?” → She asked where ___.', ru: '«Где ты живёшь?» → Она спросила, где я живу.', o: ['did I live', 'I lived', 'I did live'], a: 1,
        why: 'do исчезает, «кто» перед глаголом, шаг назад: I lived.' },
      { t: 'idea', text: `С is, can, have done то же самое: «кто» встаёт вперёд, помощник — после него.`,
        ex: [['“Where are you working now?” → She asked where I was working.', 'Она спросила, где я сейчас работаю.'], ['“How long have you been designing?” → She asked how long I had been designing.', 'Она спросила, сколько я уже занимаюсь дизайном.'], ['She wondered why nobody had answered.', 'Ей было интересно, почему никто не ответил.']],
        tip: `Вместо asked часто говорят wanted to know («хотел узнать») или wondered («задавался вопросом») — порядок тот же.` },
      { t: 'check', q: '“Where is the meeting room?” → He asked me where ___.', ru: '«Где переговорка?» → Он спросил меня, где переговорка.', o: ['was the meeting room', 'the meeting room was', 'is the meeting room'], a: 1,
        why: 'Сначала кто/что (the meeting room), потом was.' },
      { t: 'idea', text: `Итог: asked + где / почему / сколько + кто + глагол; без do / did и без «?».`,
        rows: [['“Where do you work?”', 'She asked where I worked.'], ['“Why are you late?”', 'He asked why I was late.']] }
    ]},

    // ───────────── 9. Вопросы да / нет ─────────────
    { title: '«Спросил, есть ли…» — asked if / whether', steps: [
      { t: 'idea', text: `А если в вопросе нет вопросительного слова, и ответ — «да» или «нет»? Тогда ставим <b>if</b> или <b>whether</b> — это русское «ли». Дальше — тот же прямой порядок.`,
        lit: [['They', 'они'], ['asked me', 'спросили меня'], ['if', 'ли'], ['I', 'я'], ['had', 'имел'], ['a driving licence', 'права']],
        ex: [['“Have you worked with Figma?” → She asked if I had worked with Figma.', 'Она спросила, работал ли я в Фигме.'], ['“Can you start on Monday?” → She wanted to know whether I could start on Monday.', 'Она хотела знать, могу ли я начать в понедельник.']] },
      { t: 'check', q: '“Do you play chess?” → He asked me ___ chess.', ru: '«Ты играешь в шахматы?» → Он спросил меня, играю ли я в шахматы.', o: ['if I played', 'if do I play', 'that I played'], a: 0,
        why: 'Вопрос да/нет → if + прямой порядок + шаг назад.' },
      { t: 'idea', text: `Частая ошибка: после said идёт that, и хочется поставить that и после asked. Нельзя — после ask только if / whether или вопросительное слово.`,
        bad: 'He asked me that I was free.', good: 'He asked me <b>if</b> I was free.' },
      { t: 'check', q: 'Скажите: «Меня спросили, готов ли я переехать»', o: ['They asked me that I was willing to move.', 'They asked me if I was willing to move.', 'They asked me if was I willing to move.'], a: 1,
        why: 'Да/нет → if, потом кто (I) и глагол (was).' },
      { t: 'check', q: '“Are you busy?” → Anna asked ___ busy.', ru: '«Ты занят?» → Аня спросила, занят ли я.', o: ['that I was', 'if I was', 'if I am was'], a: 1,
        why: 'if + I + was: прямой порядок и шаг назад.' },
      { t: 'idea', text: `Итог урока: пересказ = шаг назад (кроме того, что всё ещё правда), told me to / not to, asked where I lived / if I was — без do и без «?».`,
        rows: [['утверждение', 'She said she would call.'], ['просьба', 'She asked me not to be late.'], ['вопрос', 'She asked where I lived / if I was free.']] }
    ]}
  ];
})();
