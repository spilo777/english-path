// Грамматика по шагам для юнита a2-11: короткий ответ эхом помощника, Yes, I am / …, but he is, реакции Have you? / Do you?, хвостики …, isn’t it?, too / either, So am I / Neither do I, enough, too / too much / too many.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a2-11'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: 'Английский отвечает эхом', steps: [
      { t: 'idea', text: `Хотите ответить «Да» на «Ты устал?». По-русски хватает «Да». По-английски добавляют <b>кто + помощник</b> из вопроса: Are you tired? — Yes, I <b>am</b>.`,
        lit: [['Yes,', 'да,'], ['I', 'я'], ['am.', '(есть)']],
        ex: [['Are you tired? — Yes, I am.', 'Ты устал? — Да.'], ['Can you swim? — Yes, I can.', 'Ты умеешь плавать? — Да.'], ['Did you like it? — Yes, I did.', 'Тебе понравилось? — Да.']] },
      { t: 'idea', text: `Помощники: am / is / are, was / were, have / has, can, will. Нашли такой в первой фразе — повторите его; не нашли (обычное слово-действие: like, play, went) — берите <b>do / does / did</b>, как в вопросах из A1.`,
        rows: [['сейчас / было', 'am, is, are · was, were'], ['обычное действие', 'do, does · did'], ['другие', 'have, has · can · will']],
        ex: [['Do you play chess? — Yes, I do.', 'Ты играешь в шахматы? — Да.'], ['Have you finished? — Yes, I have.', 'Ты закончил? — Да.']] },
      { t: 'check', q: 'Do you play chess? — Yes, I ___.', ru: 'Ты играешь в шахматы? — Да.', o: ['do', 'play', 'am'], a: 0,
        why: 'В вопросе помощник do → и в ответе do.' },
      { t: 'idea', text: `Итог: короткий ответ по-английски — эхо помощника из первой фразы.`,
        rows: [['есть помощник', 'берём его же'], ['нет помощника', 'do / does / did']] }
    ]},

    // ───────────── 2. Короткие ответы и «…, а он да» ─────────────
    { title: 'Yes, I am. — She isn’t, but he is', steps: [
      { t: 'idea', text: `Короткий ответ = <b>Yes / No + кто + помощник</b>. Остальное не повторяем — и так понятно. В «нет» помощник получает not.`,
        ex: [['Have you finished the logo? — No, I haven’t.', 'Ты закончил логотип? — Нет.'], ['Is there a save point here? — Yes, there is.', 'Здесь есть точка сохранения? — Да.'], ['Will Anna come? — She might. / Are you leaving? — I must.', 'Анна придёт? — Может быть. / Уходишь? — Надо.']],
        bad: 'Do you like pizza? — Yes, I like.', good: 'Do you like pizza? — Yes, I <b>do</b>.' },
      { t: 'idea', text: `Тот же приём — во второй половине фразы после <b>but</b> («а, но»). Хотите сказать «Я не люблю ужасы, а сестра любит» — повторяем только помощник.`,
        lit: [['I', 'я'], ['don’t like', 'не люблю'], ['horror,', 'ужасы,'], ['but', 'а'], ['my sister', 'моя сестра'], ['does.', '(любит)']],
        ex: [['Kate isn’t tired, but Max is.', 'Кейт не устала, а Макс устал.'], ['Tom has got a PS5, but I haven’t.', 'У Тома есть PS5, а у меня нет.'], ['I was busy, but I’m not now.', 'Я был занят, а сейчас нет.']] },
      { t: 'check', q: 'I don’t play Dota, but my brother ___.', ru: 'Я не играю в Доту, а брат играет.', o: ['don’t', 'does', 'is'], a: 1,
        why: 'play — обычное действие сейчас, brother — он → does.' },
      { t: 'idea', text: `В конце фразы помощник звучит <b>полностью</b>: короткие I’m, he’s, we’ve там нельзя. А isn’t, haven’t, can’t — можно.`,
        bad: 'Are you busy? — Yes, I’m.', good: 'Are you busy? — Yes, I <b>am</b>.' },
      { t: 'check', q: 'Max isn’t hungry, but I ___.', ru: 'Макс не голоден, а я голоден.', o: ['’m', 'am', 'do'], a: 1,
        why: 'В конце фразы помощник полный: I am.' },
      { t: 'idea', text: `Итог: не повторяем всю фразу — только кто + помощник.`,
        rows: [['ответ', 'Yes, I am. / No, I didn’t.'], ['«а он — да»', 'I don’t, but he does.'], ['в конце', 'I am, не I’m']] }
    ]},

    // ───────────── 3. Реакции «Правда?» ─────────────
    { title: 'Oh, have you? — «Правда? Да ну?»', steps: [
      { t: 'idea', text: `Вам говорят: «Я учу японский». По-русски вы скажете «Правда?». По-английски — мини-вопрос: <b>помощник + кто</b>. Так видно, что вы слушаете.`,
        lit: [['Are', '(есть ли)'], ['you?', 'ты?']],
        ex: [['I’m learning Japanese. — Are you? Why?', 'Я учу японский. — Правда? Зачем?'], ['Anna has bought a new laptop. — Has she?', 'Анна купила новый ноутбук. — Да?'], ['I was at the concert. — Were you?', 'Я был на концерте. — Да? И как?']] },
      { t: 'idea', text: `Обычное слово-действие (play, works, won) → реакция с <b>do / does / did</b>.`,
        ex: [['I play the guitar. — Do you?', 'Я играю на гитаре. — Правда?'], ['Kate works at night. — Does she?', 'Кейт работает по ночам. — Серьёзно?'], ['We won the tournament! — Did you? Cool!', 'Мы выиграли турнир! — Правда? Круто!']],
        bad: 'I watched the finale last night. — Were you?', good: 'I watched the finale last night. — <b>Did</b> you?' },
      { t: 'check', q: 'Kate speaks three languages. — ___ Which ones?', ru: 'Кейт говорит на трёх языках. — Правда? На каких?', o: ['Is she?', 'Does she?', 'Do she?'], a: 1,
        why: 'speaks — обычное действие, Kate — она → Does she?' },
      { t: 'idea', text: `Если в фразе было not, реакция тоже с not. Голос в конце идёт вверх — это интерес; можно добавить <b>Really?</b>`,
        ex: [['Max can’t drive. — Can’t he?', 'Макс не умеет водить. — Да?'], ['I’m not hungry. — Aren’t you? I am.', 'Я не голоден. — Нет? А я да.'], ['Tom doesn’t eat meat. — Doesn’t he?', 'Том не ест мясо. — Да ну?']] },
      { t: 'check', q: 'Tom can’t swim. — ___ I didn’t know that.', ru: 'Том не умеет плавать. — Да? Я не знал.', o: ['Can he?', 'Can’t he?', 'Doesn’t he?'], a: 1,
        why: 'Фраза с can’t → реакция тоже с минусом: Can’t he?' },
      { t: 'idea', text: `Итог: «Правда?» = помощник + кто. Знак тот же, что в услышанной фразе.`,
        rows: [['I’ve finished.', 'Have you?'], ['Kate won.', 'Did she?'], ['Max can’t come.', 'Can’t he?']] }
    ]},

    // ───────────── 4. Хвостики ─────────────
    { title: '…, isn’t it? — «…, да?» в конце', steps: [
      { t: 'idea', text: `Хотите сказать «Классная игра, да?». По-английски «да?» в конце — это хвостик-вопрос: <b>помощник + кто</b>. Главное отличие: знак меняется — после «да»-фразы хвостик с not.`,
        lit: [['It’s', 'это (есть)'], ['a great game,', 'классная игра,'], ['isn’t', 'не есть'], ['it?', 'она?']],
        ex: [['It’s a great game, isn’t it?', 'Классная игра, да?'], ['Max was at the party, wasn’t he?', 'Макс был на вечеринке, правда?'], ['You’ll help me, won’t you?', 'Ты мне поможешь, да?']] },
      { t: 'check', q: 'The last level was hard, ___?', ru: 'Последний уровень был трудный, да?', o: ['wasn’t it', 'isn’t it', 'was it'], a: 0,
        why: 'Плюс в прошлом (was) → хвостик wasn’t it.' },
      { t: 'idea', text: `И наоборот: фраза с not → хвостик <b>без</b> not. Минус → плюс.`,
        ex: [['You aren’t busy, are you?', 'Ты ведь не занят?'], ['They didn’t win, did they?', 'Они ведь не выиграли?'], ['Tom can’t come, can he?', 'Том не сможет прийти, да?']] },
      { t: 'check', q: 'You don’t play Fortnite, ___?', ru: 'Ты ведь не играешь в Фортнайт?', o: ['don’t you', 'do you', 'are you'], a: 1,
        why: 'Минус (don’t) → хвостик с плюсом: do you?' },
      { t: 'idea', text: `«…, да?» — это не всегда isn’t it. Помощника берём из фразы, а нет его — do / does / did. И вместо имени — he, she, it, they.`,
        bad: 'You like this series, isn’t it? Max is at home, isn’t Max?', good: 'You like this series, <b>don’t you</b>? Max is at home, isn’t <b>he</b>?',
        tip: `Особый случай: «Я опоздал, да?» — <b>I’m late, aren’t I?</b> Формы «amn’t» нет.` },
      { t: 'idea', text: `Итог: хвостик = помощник + кто, знак наоборот.`,
        rows: [['плюс → минус', 'You’ve played it, haven’t you?'], ['минус → плюс', 'Kate doesn’t live here, does she?'], ['нет помощника', 'You speak German, don’t you?']] }
    ]},

    // ───────────── 5. too и either ─────────────
    { title: '«Тоже» бывает двух видов', steps: [
      { t: 'idea', text: `Хотите сказать «Я тоже устал». После обычной «да»-фразы «тоже» — <b>too</b> в самом конце.`,
        lit: [['I’m', 'я (есть)'], ['tired', 'уставший'], ['too.', 'тоже']],
        ex: [['I’m tired. — I’m tired too.', 'Я устал. — Я тоже.'], ['I liked the film. — I liked it too.', 'Мне понравился фильм. — Мне тоже.']] },
      { t: 'idea', text: `А после фразы с not «тоже» — это <b>either</b> [айзэ]. Too после not нельзя.`,
        lit: [['I', 'я'], ['can’t', 'не могу'], ['cook', 'готовить'], ['either.', 'тоже']],
        bad: 'I don’t like spiders too.', good: 'I don’t like spiders <b>either</b>.' },
      { t: 'check', q: 'I don’t like spicy food. — I don’t like it ___.', ru: 'Я не люблю острую еду. — Я тоже.', o: ['too', 'either', 'also'], a: 1,
        why: 'После not «тоже» — either.' },
      { t: 'check', q: 'Anna is a designer. Her brother is a designer ___.', ru: 'Анна дизайнер. Её брат тоже дизайнер.', o: ['too', 'either', 'neither'], a: 0,
        why: 'Фраза без not → too.' },
      { t: 'idea', text: `Итог: «тоже» в конце фразы.`,
        rows: [['после «да»', '… too'], ['после «не»', '… either']] }
    ]},

    // ───────────── 6. So am I / Neither do I ─────────────
    { title: 'So do I. — Neither do I.', steps: [
      { t: 'idea', text: `Короче и живее «я тоже» — <b>So + помощник + I</b>. Порядок необычный: помощник стоит перед I.`,
        lit: [['So', 'так'], ['am', '(есть)'], ['I.', 'я']],
        ex: [['I’m hungry. — So am I.', 'Я голоден. — Я тоже.'], ['I play Minecraft. — So do I.', 'Я играю в Майнкрафт. — Я тоже.'], ['I slept badly. — So did I.', 'Я плохо спал. — Я тоже.']] },
      { t: 'idea', text: `«Я тоже нет» — <b>Neither + помощник + I</b>. В neither уже есть «не», поэтому второе not не нужно.`,
        lit: [['Neither', 'тоже не'], ['do', '(помощник)'], ['I.', 'я']],
        bad: 'I don’t like cold weather. — Neither don’t I.', good: 'I don’t like cold weather. — Neither <b>do</b> I.' },
      { t: 'check', q: 'I didn’t watch the new episode. — ___', ru: 'Я не смотрел новую серию. — Я тоже.', o: ['Neither did I.', 'So did I.', 'Neither didn’t I.'], a: 0,
        why: 'Минус в прошлом → Neither did I, без второго not.' },
      { t: 'idea', text: `Можно не только про себя: вместо I — любой человек. И помните: <b>never</b> (никогда) — тоже «не», значит Neither.`,
        ex: [['Kate can’t draw. — Neither can Tom.', 'Кейт не умеет рисовать. — Том тоже.'], ['I was late today. — So was Max.', 'Я сегодня опоздал. — Макс тоже.'], ['I never go to the gym. — Neither do I.', 'Я никогда не хожу в спортзал. — Я тоже.']] },
      { t: 'check', q: 'I’ve never been to Japan. — ___', ru: 'Я никогда не был в Японии. — Я тоже.', o: ['So have I.', 'Neither have I.', 'Neither I have.'], a: 1,
        why: 'never — это «не», помощник have → Neither have I.' },
      { t: 'idea', text: `Итог: «я тоже» — So, «я тоже нет» — Neither (или <b>Nor</b>: Nor am I). В чате проще: <b>Me too.</b> / <b>Me neither.</b>`,
        rows: [['я тоже', 'So am I. / So do I. / So would I.'], ['я тоже нет', 'Neither am I. / Neither do I. / Neither will I.']] }
    ]},

    // ───────────── 7. enough ─────────────
    { title: 'enough — «достаточно»', steps: [
      { t: 'idea', text: `Помните из игр not enough gold? <b>enough</b> — «достаточно, хватает». С предметом (money, time, players) enough стоит <b>перед</b> ним.`,
        lit: [['We', 'мы'], ['don’t have', 'не имеем'], ['enough', 'достаточно'], ['players.', 'игроков']],
        ex: [['We don’t have enough players.', 'У нас не хватает игроков.'], ['Is there enough space on your disk?', 'На диске хватает места?'], ['I’ve got enough time today.', 'Сегодня у меня достаточно времени.']] },
      { t: 'idea', text: `А со словом-признаком (какой? как?: fast, good, big) — наоборот: enough стоит <b>после</b> него. Как по-русски «быстрый достаточно».`,
        lit: [['This PC', 'этот компьютер'], ['isn’t', 'не (есть)'], ['fast', 'быстрый'], ['enough.', 'достаточно']],
        bad: 'This laptop isn’t enough fast. We have money enough.', good: 'This laptop isn’t <b>fast enough</b>. We have <b>enough money</b>.' },
      { t: 'check', q: 'My laptop isn’t ___ for this game.', ru: 'Мой ноутбук недостаточно мощный для этой игры.', o: ['enough powerful', 'powerful enough', 'enough power'], a: 1,
        why: 'Признак + enough: powerful enough.' },
      { t: 'idea', text: `enough может стоять и один. «Для кого» — <b>for</b> + кто, «чтобы сделать» — <b>to</b> + слово-действие.`,
        ex: [['More pizza? — No, thanks. I’ve had enough.', 'Ещё пиццы? — Нет, спасибо, я наелся.'], ['This T-shirt isn’t big enough for me.', 'Эта футболка мне мала.'], ['Is Max old enough to play this game?', 'Максу уже можно играть в эту игру?']] },
      { t: 'check', q: 'My English is good enough ___ series.', ru: 'Мой английский достаточно хорош, чтобы смотреть сериалы.', o: ['for watch', 'to watch', 'watch'], a: 1,
        why: '«Чтобы сделать» → to + слово-действие.' },
      { t: 'idea', text: `Итог: с предметом enough впереди, с признаком — позади.`,
        rows: [['предмет', 'enough money / enough time'], ['признак', 'fast enough / good enough'], ['для чего', '… enough to play']] }
    ]},

    // ───────────── 8. too = слишком ─────────────
    { title: 'too — «слишком»', steps: [
      { t: 'idea', text: `Хотите сказать «Музыка слишком громкая». <b>too</b> перед словом-признаком = «слишком»: больше, чем нужно, и это мешает.`,
        lit: [['The music', 'музыка'], ['is', '(есть)'], ['too', 'слишком'], ['loud.', 'громкая']],
        ex: [['The music is too loud.', 'Музыка слишком громкая.'], ['I can’t play now. I’m too tired.', 'Не могу играть, я слишком устал.'], ['You work too hard.', 'Ты слишком много работаешь.']] },
      { t: 'idea', text: `too — это не «очень»! Хорошее «очень» — <b>very</b> или <b>really</b>. too — только когда плохо.`,
        bad: 'This game is too good! I love it.', good: 'This game is <b>really</b> good! I love it.',
        tip: `Место решает: I’m tired <b>too</b> (в конце) — «я тоже устал». I’m <b>too</b> tired (перед признаком) — «я слишком устал».` },
      { t: 'check', q: 'This boss is ___ hard for me. I can’t beat him.', ru: 'Этот босс для меня слишком сложный. Я не могу его победить.', o: ['very', 'too', 'enough'], a: 1,
        why: 'Сложность мешает победить → too.' },
      { t: 'idea', text: `«Слишком много» — как с much / many из A1: <b>too much</b> с тем, что не считают (time, sugar), <b>too many</b> — с тем, что считают (ads, people).`,
        ex: [['I spend too much time on my phone.', 'Я провожу слишком много времени в телефоне.'], ['There are too many ads in this app.', 'В этом приложении слишком много рекламы.'], ['I ate too much.', 'Я переел.']] },
      { t: 'check', q: 'There are ___ bugs in this build.', ru: 'В этой сборке слишком много багов.', o: ['too much', 'too many', 'too'], a: 1,
        why: 'Баги можно посчитать → too many.' },
      { t: 'idea', text: `too и not enough — две стороны одной проблемы. И «для кого / чтобы» — так же: <b>for</b> кто, <b>to</b> + слово-действие.`,
        rows: [['The chair is too low.', '= It isn’t high enough.'], ['The jacket is too small.', '= It isn’t big enough.']],
        ex: [['These shoes are too tight for me.', 'Эти ботинки мне слишком тесные.'], ['I’m too tired to go out.', 'Я слишком устал, чтобы куда-то идти.']],
        tip: `Можно сразу обоих: He speaks too fast <b>for me to</b> understand — «Он говорит слишком быстро, я не понимаю».` },
      { t: 'idea', text: `Итог урока: короткий ответ — помощник из первой фразы (Yes, I am · Did you? · isn’t it? · So do I). А ещё: too = слишком, enough — перед предметом и после признака.`,
        rows: [['слишком', 'too loud / too much / too many'], ['достаточно', 'enough money / fast enough'], ['тоже', 'too · either · So do I · Neither do I']] }
    ]}
  ];
})();
