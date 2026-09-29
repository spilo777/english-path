// Грамматика по шагам для юнита b1-3: Present Perfect — это «сейчас» (результат отменился → Past Simple), новость и подробности, just / already / yet / still, открытый период (recently, so far, since), «самый… ever» и «It’s the first time», история без даты, одни и те же слова — открытый или закрытый период, итоговые проверки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'b1-3'); if (!u) return;
  u.walk = [
    // ───────────── 1. Present Perfect — это «сейчас» ─────────────
    { title: '«А сейчас это правда?»', steps: [
      { t: 'idea', text: `Вы уже знаете (A2): have / has + третья форма, just, already, yet, ever, never, а с yesterday, ago, last… — только Past Simple. Теперь главное открытие B1: Present Perfect — это по сути <b>настоящее</b> время.`,
        ex: [['I’ve lost my keys.', 'Я потерял ключи. (и сейчас их нет)'], ['I lost my keys yesterday.', 'Я потерял ключи вчера.']] },
      { t: 'idea', text: `Хотите сказать «Кейт ушла из команды». По-русски непонятно, где она сейчас. По-английски <b>has left</b> сразу сообщает: её в команде <b>нет и сейчас</b>.`,
        lit: [['Kate', 'Кейт'], ['has', '(имеет)'], ['left', 'ушедшей'], ['the team', 'из команды']],
        ex: [['Kate has left the team.', 'Кейт ушла из команды. (её нет)'], ['The server has gone down.', 'Сервер упал. (лежит сейчас)'], ['I’ve forgotten my password.', 'Я забыл пароль. (не могу войти)']] },
      { t: 'idea', text: `А если результат <b>уже отменился</b> — вернулась, починили, вспомнил? Тогда have done невозможен, остаётся только Past Simple.`,
        rows: [['так и есть сейчас', 'They’ve gone away. They’ll be back on Monday.'], ['было, но уже не так', 'They went away, but they’re back now.']],
        bad: 'The server has gone down for an hour, but now it works.', good: 'The server <b>went</b> down for an hour, but now it works.' },
      { t: 'check', q: 'I ___ my password, but then I remembered it.', ru: 'Я забыл пароль, но потом вспомнил.', o: ['have forgotten', 'forgot', 'forget'], a: 1,
        why: 'Сейчас пароль помню — результат отменился → только Past Simple.' },
      { t: 'check', q: 'They ___ away for a week, but now they’re back.', ru: 'Они уезжали на неделю, но сейчас вернулись.', o: ['have gone', 'went', 'go'], a: 1,
        why: 'Они уже дома: have gone значило бы, что их нет сейчас.' },
      { t: 'idea', text: `Итог: перед have done спросите себя «А сейчас это правда?». Если «уже нет» — Past Simple.`,
        rows: [['результат есть сейчас', 'Kate has left the team.'], ['результат отменился', 'Kate left the team, but she came back.']],
        tip: `He has lost his headphones — их нет. He lost them, but then he found them — нашёл, история закончилась.` }
    ]},

    // ───────────── 2. Новость → подробности ─────────────
    { title: 'Жанр «новость»: There’s been…', steps: [
      { t: 'idea', text: `Present Perfect — голос новостей, чатов и уведомлений: что-то случилось, дата не важна. Хотите сказать «Произошла авария»? Начало такое: <b>There’s been</b> (= there has been).`,
        lit: [['There', '(там)'], ['’s been', 'имеется бывшей'], ['an accident', 'авария'], ['on the road', 'на дороге']],
        ex: [['There’s been an accident on the road.', 'На дороге произошла авария.'], ['There’s been a problem with the server.', 'Возникла проблема с сервером.']] },
      { t: 'check', q: 'Скажите: «С сервером возникла проблема» (новость)', o: ['It has been a problem with the server.', 'There’s been a problem with the server.', 'There has a problem with the server.'], a: 1,
        why: '«Что-то появилось, случилось» → There’s been, а не It. И без been нельзя.' },
      { t: 'idea', text: `Так же звучат заголовки и патчноуты (списки изменений в игре). Никаких дат — только что есть сейчас.`,
        ex: [['The police have arrested three hackers.', 'Полиция арестовала трёх хакеров.'], ['The studio has announced a sequel!', 'Студия анонсировала продолжение (sequel)!'], ['Prices have risen again.', 'Цены опять выросли.']] },
      { t: 'idea', text: `Вы помните из A2: после новости идут подробности — и время меняется на Past Simple. На B1 добавим: «Это был не я» — тоже про тот момент, поэтому <b>It wasn’t me</b>.`,
        ex: [['Somebody has deleted the main file!', 'Кто-то удалил главный файл! (новость)'], ['It wasn’t me. When did you last open it?', 'Это не я. Когда ты его последний раз открывал?'], ['I opened it yesterday, and it was fine.', 'Вчера открывал — всё было нормально.']],
        bad: 'It hasn’t been me! How it happened?', good: 'It <b>wasn’t</b> me! How <b>did</b> it <b>happen</b>?' },
      { t: 'check', q: '— I’ve broken my glasses! — Oh no! How ___ that happen?', ru: '— Я разбил очки! — Ой! Как это случилось?', o: ['has', 'did', 'was'], a: 1,
        why: 'Новость уже прозвучала, «как?» — подробности → did … happen.' },
      { t: 'idea', text: `Итог: новость без даты — have done (и There’s been). Вопросы и детали — Past Simple.`,
        rows: [['новость', 'Somebody has stolen my bike!'], ['подробности', 'When did it happen? It wasn’t me.']] }
    ]},

    // ───────────── 3. just, already, yet, still ─────────────
    { title: 'just, already, yet, still — тонкости', steps: [
      { t: 'idea', text: `Вы уже знаете: just — только что, already — уже, yet — уже? / ещё не. Нюанс B1: <b>already</b> в конце вопроса звучит как удивление — «так быстро?!».`,
        ex: [['Have you finished already? Wow!', 'Ты уже закончил? Ничего себе!'], ['Has the patch come out yet?', 'Патч уже вышел? (жду его)']] },
      { t: 'check', q: 'Wait, have you finished ___? That was fast!', ru: 'Погоди, ты уже закончил? Быстро!', o: ['yet', 'already', 'just now'], a: 1,
        why: 'Раньше, чем ожидали, с удивлением → already.' },
      { t: 'idea', text: `Когда ждёте давно и это раздражает, говорите <b>still … not</b>: «до сих пор не». still встаёт перед haven’t.`,
        lit: [['They', 'они'], ['still', 'до сих пор'], ['haven’t', 'не имеют'], ['fixed', 'исправленным'], ['it!', 'это!']],
        ex: [['They still haven’t fixed it!', 'Они до сих пор это не исправили!'], ['She still hasn’t forgiven me.', 'Она до сих пор меня не простила.']] },
      { t: 'check', q: 'Скажите: «Мы ждём месяц, а они до сих пор не исправили баг!»', o: ['They haven’t still fixed the bug!', 'They still haven’t fixed the bug!', 'They yet haven’t fixed the bug!'], a: 1,
        why: 'still стоит перед haven’t; yet — в конце фразы, не в начале.' },
      { t: 'idea', text: `Ловушка: <b>just</b> (только что) — с have done, а <b>just now</b> (минуту назад) — это точка в прошлом, с Past Simple.`,
        rows: [['just', 'I’ve just sent it.'], ['just now', 'I sent it just now.']],
        bad: 'I’ve sent it just now.', good: 'I <b>sent</b> it just now.' },
      { t: 'check', q: 'I talked to the boss ___.', ru: 'Я поговорил с начальником минуту назад.', o: ['just now', 'yet', 'so far'], a: 0,
        why: 'just now — точка «минуту назад», подходит к Past Simple talked.' },
      { t: 'idea', text: `Итог: already в конце — удивление, yet — ждём, still … not — ждём давно, just now — точка.`,
        rows: [['already / yet / just', 'have done'], ['still haven’t', 'до сих пор не'], ['just now', 'Past Simple']],
        tip: `В американских сериалах слышно I just saw him, Did you eat yet? — это нормально для just, already, yet. Но с датой и ago have done неправилен и в Америке.` }
    ]},

    // ───────────── 4. Открытый период ─────────────
    { title: 'Период ещё идёт: recently, so far, since', steps: [
      { t: 'idea', text: `Есть слова, которые обозначают отрезок «от прошлого до сейчас»: <b>recently, lately</b> (в последнее время), <b>in the last few days</b> (за последние дни). Период не закрыт → have done.`,
        ex: [['Have you heard from Max recently?', 'Ты что-нибудь слышал от Макса в последнее время?'], ['I’ve watched a lot of anime lately.', 'В последнее время я смотрю много аниме.'], ['We’ve fixed forty bugs in the last few days.', 'За последние дни мы исправили сорок багов.']],
        tip: `recently бывает и с Past Simple, если это одно событие: I bought a new monitor recently. А lately и so far — почти всегда с have done.` },
      { t: 'check', q: 'I haven’t seen Kate ___. Is she OK?', ru: 'Я не видел Кейт в последнее время. С ней всё в порядке?', o: ['yesterday', 'recently', 'ago'], a: 1,
        why: '«В последнее время» — открытый период → recently. yesterday и ago с haven’t не бывают.' },
      { t: 'idea', text: `<b>so far</b> — «пока что, до сих пор», <b>since we arrived</b> — «с тех пор как мы приехали». Оба смотрят до сейчас, поэтому Past Simple тут — ошибка.`,
        ex: [['So far the new build hasn’t crashed.', 'Пока что новая сборка не падала.'], ['It’s snowed every day since we arrived.', 'С нашего приезда снег идёт каждый день.']],
        bad: 'I didn’t have any problems so far.', good: 'I <b>haven’t had</b> any problems so far.' },
      { t: 'check', q: 'We ___ any serious problems so far.', ru: 'Пока что у нас не было серьёзных проблем.', o: ['didn’t have', 'haven’t had', 'haven’t have'], a: 1,
        why: 'so far — период до сих пор открыт → haven’t had.' },
      { t: 'check', q: 'The weather ___ terrible since we arrived.', ru: 'С тех пор как мы приехали, погода ужасная.', o: ['was', 'has been', 'is'], a: 1,
        why: 'since we arrived — с того момента до сейчас → has been.' },
      { t: 'idea', text: `«Я её не видел» — два смысла. <b>I haven’t seen her</b> — в последнее время, не знаю, где она. <b>I didn’t see her</b> — в тот прошедший момент, например на вечеринке.`,
        ex: [['— Where’s Lisa? — No idea. I haven’t seen her.', '— Где Лиза? — Без понятия, не видел её.'], ['— Was Lisa at the party? — I don’t think so. I didn’t see her.', '— Лиза была на вечеринке? — Вряд ли, я её не видел.']],
        tip: `С this morning то же: в 11 утра — Have you seen Kate this morning? В 7 вечера утро кончилось — Did you see Kate this morning?` },
      { t: 'check', q: '— Was Tom at the meeting yesterday? — I don’t think so. I ___ him there.', ru: '— Том был вчера на встрече? — Вряд ли. Я его там не видел.', o: ['haven’t seen', 'didn’t see', 'don’t see'], a: 1,
        why: 'Вчерашняя встреча закончилась — речь о том моменте → didn’t see.' },
      { t: 'idea', text: `Итог: период «до сейчас» — have done. Закончившийся момент — Past Simple.`,
        rows: [['recently, lately, in the last few days', 'have done'], ['so far, since we arrived, today', 'have done'], ['вчерашняя встреча, утро уже прошло', 'Past Simple']] }
    ]},

    // ───────────── 5. Опыт: самый… ever и первый раз ─────────────
    { title: '«Лучшее, что я видел» и «я здесь впервые»', steps: [
      { t: 'idea', text: `Хотите сказать «Это лучшая игра, в которую я играл». Речь обо всей жизни до сейчас, поэтому после «самый» идёт <b>I’ve ever</b> + третья форма.`,
        lit: [['This is', 'это'], ['the best game', 'лучшая игра'], ['I’ve', 'я имею'], ['ever', 'когда-либо'], ['played', 'сыгранной']],
        ex: [['It’s the worst ending I’ve ever seen.', 'Худшая концовка (ending) из всех, что я видел.'], ['It’s one of the funniest shows I’ve ever watched.', 'Один из самых смешных сериалов, что я смотрел.']],
        bad: 'It’s the best film I ever see.', good: 'It’s the best film I<b>’ve ever seen</b>.' },
      { t: 'check', q: 'It’s the most beautiful city I ___.', ru: 'Это самый красивый город, в котором я бывал.', o: ['ever visit', 'have ever visited', 'have ever visit'], a: 1,
        why: '«Самый» + опыт за всю жизнь → I’ve ever + третья форма (visited).' },
      { t: 'idea', text: `«Я впервые в Лондоне» — по-русски тут настоящее время. А по-английски после <b>It’s the first time</b> всегда have + третья форма.`,
        lit: [['It’s', 'это'], ['the first time', 'первый раз'], ['I’ve been', 'я побывал'], ['to London', 'в Лондоне']],
        ex: [['It’s the first time I’ve been to London.', 'Я впервые в Лондоне.'], ['This is the first time I’ve driven a car.', 'Я впервые за рулём.']],
        bad: 'It’s the first time I am in London.', good: 'It’s the first time I<b>’ve been</b> to London.' },
      { t: 'check', q: 'This is the first time I ___ sushi.', ru: 'Я впервые ем суши.', o: ['eat', 'have eaten', 'has eaten'], a: 1,
        why: 'It’s the first time + have done, даже если по-русски «ем». С I — have, не has.' },
      { t: 'idea', text: `То же со вторым, третьим разом. А ещё «впервые» можно сказать через <b>never … before</b> (никогда раньше).`,
        ex: [['It’s the second time the game has crashed today.', 'Игра падает уже второй раз за сегодня.'], ['This is the third time you’ve been late this week!', 'Ты уже третий раз за неделю опаздываешь!'], ['I’ve never driven a car before.', 'Я никогда раньше не водил машину.']] },
      { t: 'check', q: 'It’s the second time the game ___ today.', ru: 'Игра падает уже второй раз за сегодня.', o: ['crashes', 'has crashed', 'have crashed'], a: 1,
        why: 'It’s the second time + have done; game — одна → has crashed.' },
      { t: 'idea', text: `Итог: слышите «впервые», «уже второй раз», «самый … в жизни» — включайте have + третья форма, что бы ни говорил русский.`,
        rows: [['the best / the worst … I’ve ever', 'the best game I’ve ever played'], ['It’s the first (second) time + have done', 'It’s the first time I’ve been here.']] }
    ]},

    // ───────────── 6. История без даты ─────────────
    { title: 'История, а не новость: Past Simple без даты', steps: [
      { t: 'idea', text: `Вы помните из A2: «сейчас» → have done, «история» → Past Simple. Новое: история — это ещё и великие люди прошлого, изобретения, чья-то закончившаяся жизнь. Там Past Simple, <b>даже если даты нет</b>.`,
        ex: [['Leonardo da Vinci painted the Mona Lisa.', 'Леонардо да Винчи написал «Мону Лизу».'], ['Who invented the computer mouse?', 'Кто изобрёл компьютерную мышь?'], ['Alexey Pajitnov created Tetris.', 'Тетрис создал Алексей Пажитнов.']],
        bad: 'Who has painted the Mona Lisa?', good: 'Who <b>painted</b> the Mona Lisa?' },
      { t: 'check', q: 'Who ___ Tetris?', ru: 'Кто создал Тетрис?', o: ['has created', 'created', 'creates'], a: 1,
        why: 'Исторический факт, не новость → Past Simple.' },
      { t: 'idea', text: `Рождение, детство, школа — тоже закрытые страницы. «Где ты родился?» — только <b>Where were you born?</b>`,
        ex: [['Where were you born? — I was born in Omsk.', 'Где ты родился? — В Омске.'], ['My grandmother grew up in Odessa.', 'Моя бабушка выросла в Одессе.']],
        bad: 'Where have you been born?', good: 'Where <b>were</b> you <b>born</b>?' },
      { t: 'check', q: 'Where ___ born?', ru: 'Где ты родился?', o: ['have you been', 'were you', 'are you'], a: 1,
        why: 'Рождение — закрытое событие → were you born.' },
      { t: 'check', q: 'My parents ___ up in the same town.', ru: 'Мои родители выросли в одном городе.', o: ['have grown', 'grew', 'grow'], a: 1,
        why: 'Детство закончилось — закрытый этап жизни → grew up.' },
      { t: 'idea', text: `Итог: новость о живом «сейчас» — have done. История, рождение, детство — Past Simple, даже без даты.`,
        rows: [['новость (have done)', 'My friend has written a game.'], ['история (Past Simple)', 'Hideo Kojima wrote Metal Gear.']],
        tip: `Детство, школа, работа великих людей — это альбом с фотографиями. Всё закрыто → Past Simple.` }
    ]},

    // ───────────── 7. Одни и те же слова ─────────────
    { title: 'Одни и те же слова: период открыт или закрыт?', steps: [
      { t: 'idea', text: `Вы помните из A2: for бывает в обоих временах — так же ведут себя never, a great holiday, a lot of work. Решает одно: <b>период ещё открыт</b> или <b>уже закрыт</b>?`,
        rows: [['открыт: вся жизнь до сейчас', 'I’ve never ridden a horse (лошадь).'], ['закрыт: детство кончилось', 'I never rode a bike when I was a kid.']],
        bad: 'My grandfather has never been abroad. (его уже нет)', good: 'My grandfather <b>never went</b> abroad (за границу).' },
      { t: 'check', q: 'Grandpa ___ to the sea. He lived all his life in the mountains.', ru: 'Дедушка никогда не был на море. Он всю жизнь прожил в горах.', o: ['has never been', 'never went', 'never goes'], a: 1,
        why: 'Жизнь дедушки — закрытый период → never went.' },
      { t: 'idea', text: `Мы ещё внутри — have done. Всё закончилось — Past Simple.`,
        rows: [['последний день отпуска', 'It’s been a great holiday!'], ['уже дома', 'It was a great holiday!']],
        ex: [['I’ve done a lot of work today.', 'Сегодня я много сделал.'], ['Have you enjoyed the course so far?', 'Тебе пока нравится курс?'], ['Did you enjoy the film?', 'Тебе понравился фильм? (он уже кончился)']] },
      { t: 'idea', text: `Период с началом и концом — <b>from … to …</b> (с … по …) — всегда закрыт.`,
        ex: [['I worked at that studio from 2018 to 2022.', 'Я работал в той студии с 2018 по 2022 год.']],
        bad: 'I have worked there from 2018 to 2022.', good: 'I <b>worked</b> there from 2018 to 2022.' },
      { t: 'check', q: 'She ___ in Kazan from 2015 to 2020. Now she lives in Riga.', ru: 'Она жила в Казани с 2015 по 2020 год. Теперь живёт в Риге.', o: ['has lived', 'lived', 'lives'], a: 1,
        why: 'from … to … и «теперь живёт в Риге» — период закрыт → lived.' },
      { t: 'idea', text: `Итог: одинаковые слова — разные времена. Спросите: период ещё идёт?`,
        rows: [['идёт: вся жизнь, today, so far', 'have done'], ['закрыт: детство, from … to …, жизнь в прошлом', 'Past Simple']] }
    ]},

    // ───────────── 8. Проверьте себя ─────────────
    { title: 'Проверьте себя', steps: [
      { t: 'check', q: 'I ___ my keys, but then I found them in my bag.', ru: 'Я потерял ключи, но потом нашёл их в сумке.', o: ['have lost', 'lost', 'lose'], a: 1,
        why: 'Ключи нашлись — «потерял» уже не правда сейчас → lost.' },
      { t: 'check', q: 'This is the third time you ___ late this week!', ru: 'Ты уже третий раз за неделю опаздываешь!', o: ['are', 'have been', 'were'], a: 1,
        why: 'This is the third time + have done → have been.' },
      { t: 'check', q: '— Anna has left her job! — Really? Why ___ that?', ru: '— Анна ушла с работы! — Правда? Почему она так сделала?', o: ['she has done', 'did she do', 'she did'], a: 1,
        why: 'Новость прозвучала, «почему?» — подробности → did she do.' },
      { t: 'idea', text: `Итог урока: Present Perfect — о <b>сейчас</b>: новость, результат, открытый период, «впервые» и «самый … ever». Всё <b>закрытое</b> — история, детство, from … to …, отменённый результат — Past Simple.`,
        rows: [['сейчас: новость, so far, first time, the best … ever', 'have / has + третья форма'], ['закрыто: история, born, from … to …, результат отменился', 'Past Simple']] }
    ]}
  ];
})();
