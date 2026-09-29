// Грамматика по шагам для юнита b1-15: напоминание про кучки «-ing» и «to» из A2; кучка -ing глубже (avoid, admit, deny, consider, imagine, risk, recommend, postpone; give up, put off, carry on, keep; not + -ing); -ing с «чужим» исполнителем (remember her saying), having done, that после admit / deny / suggest / recommend; кучка to глубже (manage, afford, fail, tend, deserve, agree, arrange, threaten, learn, dare; thinking of + -ing); seem / appear / pretend / claim + to do / to be doing / to have done; what to do, how to, whether to; want someone to — persuade, warn, remind, invite, encourage, get, force, allow, enable, expect, would prefer, help (с to и без); пассив (was warned to, be allowed to), make / let без to и их пассив; типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'b1-15'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: 'Первое слово решает, какое будет второе', steps: [
      { t: 'idea', text: `Вы уже знаете (урок A2-16): после <b>enjoy / finish / mind</b> — хвостик <b>-ing</b>, после <b>want / decide / hope</b> — <b>to</b>, а «хочу, чтобы ты…» — <b>I want you to…</b>. Теперь кучки станут больше, а фразы — хитрее.`,
        ex: [['I enjoy drawing.', 'Мне нравится рисовать.'], ['I decided to start a blog.', 'Я решил завести блог.'], ['I want you to come.', 'Я хочу, чтобы ты пришёл.']] },
      { t: 'idea', text: `Итог: русский часто говорит через «что…» или «чтобы…», а английский — одним словом-действием с <b>-ing</b> или <b>to</b>.`,
        lit: [['He', 'он'], ['denied', 'отрицал'], ['taking', 'взятие'], ['my headphones', 'моих наушников']],
        rows: [['-ing — само действие, факт', 'He denied taking my headphones.'], ['to — то, что впереди', 'She persuaded me to apply for the job.']],
        tip: `-ing — «держу действие в руках и смотрю на него». to — «стрелка вперёд, к действию». Это зацепка для памяти, а не закон: слова всё равно учим кучками.` }
    ]},

    // ───────────── 2. Кучка -ing ─────────────
    { title: '«Избегаю», «отрицаю», «подумываю» — кучка -ing', steps: [
      { t: 'idea', text: `Хотите сказать «Я стараюсь не созваниваться по утрам». По-английски — <b>avoid</b> (избегать) + <b>-ing</b>. Так же ведут себя <b>admit</b> (признать) и <b>deny</b> (отрицать).`,
        lit: [['I', 'я'], ['avoid', 'избегаю'], ['having', 'иметь'], ['calls', 'созвоны'], ['in the morning', 'утром']],
        ex: [['I avoid having calls in the morning.', 'Я стараюсь не созваниваться по утрам.'], ['He admitted using cheats.', 'Он признал, что пользовался читами.'], ['She denied reading my messages.', 'Она отрицала, что читала мои сообщения.']],
        bad: 'He admitted to cheat.', good: 'He admitted <b>cheating</b>.' },
      { t: 'idea', text: `Ещё пять слов из этой кучки. Поставить после них to — одна из самых заметных ошибок на B1.`,
        rows: [['consider — обдумывать', 'We’re considering moving to Kazan.'], ['imagine — представить', 'Imagine living without the internet!'], ['risk — рисковать', 'You risk losing everything.'], ['recommend — советовать', 'I recommend watching it in English.'], ['postpone — отложить', 'They postponed launching the beta.']],
        tip: `В британской речи есть ещё <b>fancy</b> (хотеть, разг.): I don’t fancy going out tonight. — Что-то не хочется никуда идти.` },
      { t: 'check', q: 'I’m considering ___ a new monitor.', ru: 'Я подумываю купить новый монитор.', o: ['to buy', 'buying', 'buy'], a: 1,
        why: 'consider — кучка -ing, to после него нельзя.' },
      { t: 'idea', text: `Короткие разговорные пары из двух слов — тоже с <b>-ing</b>: <b>give up</b> (бросить), <b>put off</b> (откладывать на потом), <b>carry on</b> (продолжать).`,
        ex: [['I’ve given up playing ranked.', 'Я бросил играть в рейтинговые матчи.'], ['Stop putting off calling the client.', 'Хватит откладывать звонок клиенту.'], ['Carry on working, I’ll be quiet.', 'Продолжай работать, я тихо.']] },
      { t: 'idea', text: `А <b>keep doing</b> — лучший перевод для «всё время», «то и дело», особенно когда это раздражает.`,
        lit: [['The game', 'игра'], ['keeps', 'продолжает'], ['freezing', 'зависание']],
        ex: [['The game keeps freezing.', 'Игра всё время зависает.'], ['You keep interrupting me!', 'Ты всё время меня перебиваешь!']] },
      { t: 'check', q: 'My laptop ___.', ru: 'Мой ноутбук постоянно вылетает.', o: ['keeps to crash', 'keeps crashing', 'always crash'], a: 1,
        why: '«Постоянно, то и дело» → keep + -ing.' },
      { t: 'idea', text: `Итог: «не делать» здесь — <b>not</b> прямо перед -ing: He admitted <b>not reading</b> the brief (задание). Главные слова кучки:`,
        rows: [['avoid / admit / deny / consider', '+ doing'], ['give up / put off / carry on / keep', '+ doing'], ['… + not + -ing', 'I enjoy not having to work.']] }
    ]},

    // ───────────── 3. -ing с «чужим» исполнителем, having done, that ─────────────
    { title: '«Не помню, чтобы она так говорила» — -ing с другим человеком', steps: [
      { t: 'idea', text: `Хотите сказать «Не могу представить, как Макс играет в хоррор». Действие делает не я, а Макс — его просто вставляем между словами: <b>imagine + кто-то + -ing</b>.`,
        lit: [['I can’t imagine', 'не могу представить'], ['Max', 'Макса'], ['playing', 'играющим'], ['a horror game', 'в хоррор']],
        ex: [['I can’t imagine Max playing a horror game.', 'Не могу представить, как Макс играет в хоррор.'], ['I don’t remember her saying that.', 'Не помню, чтобы она такое говорила.'], ['Sorry to keep you waiting.', 'Извините, что заставил вас ждать.']],
        tip: `Так же со stop: You can’t stop people leaving bad reviews (отзывы). — Людям не запретишь оставлять плохие отзывы.` },
      { t: 'check', q: 'I don’t remember him ___ that.', ru: 'Не помню, чтобы он это говорил.', o: ['to say', 'saying', 'said'], a: 1,
        why: 'remember + кто-то + -ing: him saying.' },
      { t: 'idea', text: `После <b>admit, deny, suggest, recommend</b> можно сказать и целым предложением с <b>that</b> (что) — как в русском.`,
        rows: [['They denied copying our design.', 'They denied that they had copied our design.'], ['Kate suggested ordering sushi.', 'Kate suggested that we order sushi.']] },
      { t: 'idea', text: `Ловушка: у <b>suggest</b> не бывает «suggest кого-то to». Либо -ing, либо that. А вот <b>advise</b> (советовать) так умеет.`,
        bad: 'Kate suggested me to order sushi.', good: 'Kate suggested <b>that I order</b> sushi. / Kate <b>advised me to</b> order sushi.' },
      { t: 'check', q: 'Kate suggested ___ sushi.', ru: 'Кейт предложила, чтобы мы заказали суши.', o: ['us to order', 'that we order', 'to order'], a: 1,
        why: 'suggest не бывает с to. Либо ordering, либо that we order.' },
      { t: 'idea', opt: true, text: `Необязательно: <b>having + третья форма</b> (having broken) подчёркивает, что действие уже закончилось. Но простое -ing почти всегда подходит тоже.`,
        ex: [['He admitted having broken the build. = He admitted breaking the build.', 'Он признал, что сломал сборку.'], ['I regret having said that. = I regret saying that.', 'Жалею, что это сказал.']] },
      { t: 'idea', text: `Итог: другой человек встаёт прямо перед -ing, а suggest дружит только с -ing или that.`,
        rows: [['imagine / remember + кто-то + -ing', 'I can’t imagine him saying that.'], ['suggest + -ing / that', 'She suggested that we wait.']] }
    ]},

    // ───────────── 4. Кучка to ─────────────
    { title: '«Сумел», «не могу себе позволить» — кучка to', steps: [
      { t: 'idea', text: `К знакомым decide, hope, promise, refuse, offer добавим два важных слова: <b>manage</b> (суметь, справиться) и <b>afford</b> (позволить себе — по деньгам или по времени). После них — <b>to</b>.`,
        lit: [['I', 'я'], ['can’t afford', 'не могу позволить себе'], ['to buy', 'купить'], ['a new GPU', 'новую видеокарту']],
        ex: [['We managed to finish on time.', 'Мы успели закончить вовремя.'], ['I can’t afford to buy a new GPU.', 'Я не могу позволить себе новую видеокарту.']],
        bad: 'I can’t afford buying it.', good: 'I can’t afford <b>to buy</b> it.' },
      { t: 'check', q: 'We managed ___ the boss on the last try.', ru: 'Мы смогли победить босса с последней попытки.', o: ['beating', 'to beat', 'beat'], a: 1,
        why: 'manage — кучка to. Помните B1-8: managed to — «сумел» один раз, в трудной ситуации.' },
      { t: 'idea', text: `Ещё слова кучки to. <b>tend to</b> — очень английское: так смягчают «всегда». «Не делать» — <b>not to</b>.`,
        rows: [['fail — не суметь', 'The update failed to install.'], ['tend — обычно', 'I tend to work late.'], ['deserve — заслуживать', 'You deserve to win.'], ['agree / arrange — согласиться / договориться', 'We’ve arranged to meet at six.'], ['threaten / learn — угрожать / научиться', 'She threatened to leave the team.']],
        ex: [['I promised not to tell anyone.', 'Я обещал никому не говорить.']] },
      { t: 'idea', text: `Хотите сказать «Думаю купить Switch». Рука тянется к think to — но так нельзя. Здесь <b>thinking of + -ing</b>.`,
        lit: [['I’m', 'я'], ['thinking', 'думаю'], ['of', 'о'], ['buying', 'покупке'], ['a Switch', 'свитча']],
        bad: 'I’m thinking to buy a Switch.', good: 'I’m thinking <b>of buying</b> a Switch.' },
      { t: 'check', q: 'I’m thinking ___ to Kazan.', ru: 'Я подумываю переехать в Казань.', o: ['to move', 'of moving', 'moving'], a: 1,
        why: '«Думаю сделать» → thinking of + -ing.' },
      { t: 'idea', text: `Итог: успехи, решения, планы → <b>to</b>; «подумываю» → <b>of + -ing</b>.`,
        rows: [['manage / afford / fail / tend + to', 'I tend to work late.'], ['… + not to', 'We decided not to go.'], ['thinking of + -ing', 'I’m thinking of moving.']],
        tip: `<b>dare</b> (осмелиться) — с to или без: I didn’t dare (to) ask her. А после daren’t — только без to: I daren’t tell my boss.` }
    ]},

    // ───────────── 5. seem / appear / pretend / claim ─────────────
    { title: '«Кажется, я потерял ключи» — seem to', steps: [
      { t: 'idea', text: `Хотите сказать «Похоже, он знает всех». По-русски главное слово — «похоже», а по-английски главный — <b>он</b>: He <b>seems to</b> know everyone. Так же <b>appear</b> (казаться), <b>pretend</b> (делать вид), <b>claim</b> (утверждать).`,
        lit: [['He', 'он'], ['seems', 'кажется'], ['to know', 'знающим'], ['everyone', 'всех']],
        ex: [['He seems to know everyone.', 'Похоже, он знает всех.'], ['You seem to have a lot of friends.', 'Похоже, у тебя много друзей.']],
        bad: 'It seems me that he is angry.', good: 'He <b>seems to be</b> angry.' },
      { t: 'idea', text: `Если это происходит <b>прямо сейчас</b> — <b>to be + -ing</b>.`,
        ex: [['The server appears to be down.', 'Похоже, сервер лежит.'], ['She pretended to be working.', 'Она делала вид, что работает.']],
        bad: 'He pretended that he is sleeping.', good: 'He pretended <b>to be sleeping</b>.' },
      { t: 'check', q: 'When I came in, Max ___.', ru: 'Когда я вошёл, Макс делал вид, что работает.', o: ['pretended that he works', 'pretended to be working', 'pretended working'], a: 1,
        why: 'pretend + to; «в тот момент, в процессе» → to be working.' },
      { t: 'idea', text: `Если это <b>уже случилось</b> — <b>to have + третья форма</b> (lost, deleted). «Не» — перед to.`,
        lit: [['I', 'я'], ['seem', 'кажусь'], ['to have lost', 'потерявшим'], ['my keys', 'ключи']],
        ex: [['I seem to have lost my keys.', 'Кажется, я потерял ключи.'], ['They claim to have fixed all the bugs.', 'Они утверждают, что исправили все баги.'], ['He pretended not to see me.', 'Он сделал вид, что не видит меня.']],
        tip: `Тоже можно: It seems that I’ve lost my keys. А вот «It seems me…» не бывает никогда.` },
      { t: 'check', q: 'Скажите: «Кажется, я удалил файл»', o: ['It seems me I deleted the file.', 'I seem to delete the file.', 'I seem to have deleted the file.'], a: 2,
        why: 'Уже случилось → seem to have + третья форма.' },
      { t: 'idea', text: `Итог: главный — человек, а время показывает форма после to.`,
        rows: [['обычно', 'He seems to know everyone.'], ['прямо сейчас', 'The server appears to be down.'], ['уже случилось', 'I seem to have lost my keys.']] }
    ]},

    // ───────────── 6. what to do, how to ─────────────
    { title: '«Не знаю, что сказать» — what to do, how to', steps: [
      { t: 'idea', text: `Хотите сказать «Не знаю, что сказать». Никакого must не нужно: вопросительное слово + <b>to</b> + действие.`,
        lit: [['I don’t know', 'не знаю'], ['what', 'что'], ['to say', 'сказать']],
        bad: 'I don’t know what I must say.', good: 'I don’t know <b>what to say</b>.' },
      { t: 'idea', text: `Так работают what, how, where, which после <b>know, decide, remember, forget, learn, explain, understand, ask</b>.`,
        ex: [['Have you decided where to go on holiday?', 'Решил, куда поехать в отпуск?'], ['I can never remember how to take a screenshot on a Mac.', 'Никак не запомню, как делать скриншот на маке.'], ['We couldn’t decide which game to buy.', 'Не могли решить, какую игру купить.']] },
      { t: 'check', q: 'I don’t know ___ it.', ru: 'Я не знаю, как это сделать.', o: ['how do', 'how to do', 'how doing'], a: 1,
        why: '«Как сделать» → how to + действие.' },
      { t: 'idea', text: `С человеком: <b>show / tell / ask / teach</b> + кого-то + what / how to. А «ли» — <b>whether to</b>, часто вместе с or not.`,
        ex: [['Can you show me how to export this?', 'Покажешь, как это экспортировать?'], ['She’ll tell you what to do.', 'Она скажет, что делать.'], ['I can’t decide whether to go or not.', 'Не могу решить, идти или нет.']],
        tip: `С <b>why</b> так не работает: не «why to go», а why I should go — почему мне стоит идти.` },
      { t: 'check', q: 'Can you show me ___ a screenshot?', ru: 'Покажешь, как сделать скриншот?', o: ['how to take', 'how take', 'how I must take'], a: 0,
        why: 'show me + how to + действие.' },
      { t: 'idea', text: `Итог: «что делать», «куда идти», «как быть» — одна схема без must.`,
        rows: [['know / decide / forget + what / how / where + to', 'I don’t know what to do.'], ['show / tell + кого-то + how to', 'Show me how to do it.'], ['whether to … or not', 'I can’t decide whether to go or not.']] }
    ]},

    // ───────────── 7. want someone to — новые слова ─────────────
    { title: '«Уговорил меня пойти» — кто-то + to', steps: [
      { t: 'idea', text: `Вы уже знаете: <b>want / ask / tell / advise + кто-то + to</b> (I want you to come). По той же схеме уговаривают, напоминают, приглашают и заставляют.`,
        rows: [['persuade — уговорить', 'I persuaded Anna to try the game.'], ['remind / invite — напомнить / пригласить', 'Remind me to call Sam.'], ['encourage — вдохновить', 'My mentor encouraged me to share my work.'], ['force — заставить (силой)', 'The bug forced us to delay the release.'], ['allow / enable / expect — разрешать / давать возможность / ожидать', 'The app allows you to share files.']] },
      { t: 'check', q: 'Скажите: «Он уговорил меня пойти»', o: ['He persuaded that I go.', 'He persuaded me to go.', 'He persuaded me go.'], a: 1,
        why: 'persuade + кто-то (me) + to + действие.' },
      { t: 'idea', text: `<b>warn</b> (предупредить) обычно говорит «не делай» — ставим <b>not to</b>. А <b>get someone to</b> — «добиться, чтобы кто-то сделал».`,
        lit: [['He', 'он'], ['warned', 'предупредил'], ['us', 'нас'], ['not to open', 'не открывать'], ['the file', 'файл']],
        ex: [['He warned us not to open the file.', 'Он предупредил нас не открывать файл.'], ['I got my brother to fix my PC.', 'Я добился, чтобы брат починил мне компьютер.']] },
      { t: 'check', q: 'They warned me ___ the link.', ru: 'Меня предупредили не нажимать на ссылку.', o: ['don’t click', 'not to click', 'to don’t click'], a: 1,
        why: 'warn + кто-то + not to + действие.' },
      { t: 'idea', text: `Два особых слова. <b>help</b> — можно с to и без: оба варианта верны. <b>would prefer</b> (предпочёл бы) — тоже по схеме «кто-то + to».`,
        ex: [['Can you help me move the sofa?', 'Поможешь передвинуть диван?'], ['Can you help me to move the sofa?', 'То же самое.'], ['I’d prefer you to call, not text.', 'Я бы предпочёл, чтобы ты позвонил, а не писал.']] },
      { t: 'check', q: 'Can you help me ___ this bug?', ru: 'Поможешь мне исправить этот баг?', o: ['fixing', 'fix', 'that I fix'], a: 1,
        why: 'help me + действие (с to или без). -ing и that здесь нельзя.' },
      { t: 'idea', text: `Итог: одна схема на много слов — кто-то + to, «не делать» → not to. help — с to или без.`,
        rows: [['persuade / remind / warn / allow + кто-то + to', 'Remind me to call Sam.'], ['warn + кто-то + not to', 'He warned us not to go.'], ['help + кто-то + (to) + действие', 'Help me (to) move it.']] }
    ]},

    // ───────────── 8. Пассив, make и let ─────────────
    { title: '«Меня попросили», «нам не разрешали» — пассив, make и let', steps: [
      { t: 'idea', text: `Хотите сказать «Нас попросили подождать». Это пассив: человек выходит вперёд, дальше <b>was / were + третья форма</b>, а <b>to</b> остаётся на месте.`,
        lit: [['We', 'мы'], ['were asked', 'были попрошены'], ['to wait', 'подождать'], ['outside', 'снаружи']],
        ex: [['We were asked to wait outside.', 'Нас попросили подождать снаружи.'], ['I was warned not to click the link.', 'Меня предупредили не нажимать на ссылку.'], ['Are we allowed to park here?', 'Здесь можно парковаться?']] },
      { t: 'check', q: 'We aren’t ___ phones here.', ru: 'Здесь нельзя пользоваться телефонами.', o: ['allowed use', 'allowed to use', 'allow to use'], a: 1,
        why: 'Пассив: are + allowed + to + действие.' },
      { t: 'idea', text: `Помните с A2: <b>make</b> (заставить) и <b>let</b> (позволить) — без to. А в пассиве у make <b>появляется to</b>, а let меняем на <b>be allowed to</b>.`,
        rows: [['They made us wait.', 'We were made to wait.'], ['My parents didn’t let me play at night.', 'I wasn’t allowed to play at night.']],
        bad: 'She made me to redo it.', good: 'She made me <b>redo</b> it.' },
      { t: 'check', q: 'We ___ for an hour.', ru: 'Нас заставили ждать целый час.', o: ['were made wait', 'were made to wait', 'made to wait'], a: 1,
        why: 'Пассив от make → were made + to.' },
      { t: 'idea', text: `Итог: в пассиве to остаётся; make в пассиве получает to, а let превращается в allowed to.`,
        rows: [['make / let + кто-то + действие', 'They let us leave early.'], ['was / were made + to', 'We were made to wait.'], ['was / were allowed + to', 'We were allowed to leave early.']] }
    ]},

    // ───────────── 9. Типичные ошибки ─────────────
    { title: 'Типичные ошибки — проверьте себя', steps: [
      { t: 'check', q: 'He denied ___ it.', ru: 'Он отрицал, что сломал это.', o: ['to break', 'breaking', 'break'], a: 1,
        why: 'deny — кучка -ing.' },
      { t: 'check', q: 'He admitted ___ the brief.', ru: 'Он признал, что не прочитал задание.', o: ['not to read', 'not reading', 'reading not'], a: 1,
        why: 'admit + -ing, а not ставим прямо перед -ing.' },
      { t: 'check', q: 'I wasn’t ___ at night.', ru: 'Мне не разрешали играть по ночам.', o: ['let to play', 'let play', 'allowed to play'], a: 2,
        why: 'Пассив от let → be allowed to.' },
      { t: 'idea', text: `Итог урока в одной таблице. Много кучек — не переживайте, дальше потренируемся.`,
        rows: [['avoid / deny / keep / consider', '+ doing'], ['manage / afford / tend / seem', '+ to do (seem to have done)'], ['know / decide', '+ what / how to do'], ['persuade / warn / allow + кто-то', '+ to do'], ['make / let + кто-то', '+ do']] }
    ]}
  ];
})();
