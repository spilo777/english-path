// Грамматика по шагам для юнита a2-16: второе слово-действие в трёх формах (play / to play / playing), что уже знакомо (can + play, want to, am + -ing), кучка «to» (want, decide, hope… + not to), кучка «-ing» (enjoy, mind, finish, stop, suggest), like / love / hate / prefer / start — оба варианта, would like — только to, want you to / told me not to, make и let без to, to = «чтобы», to или for, wait for… to, типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a2-16'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея: три формы ─────────────
    { title: '«Хочу играть», «люблю играть» — три формы второго слова', steps: [
      { t: 'idea', text: `По-русски второе слово-действие почти всегда одинаковое: хочу <b>играть</b>, закончил <b>играть</b>. По-английски у него <b>три</b> формы — и какую брать, решает <b>первое</b> слово-действие.`,
        ex: [['I can play.', 'Я могу играть.'], ['I want to play.', 'Я хочу играть.'], ['I finished playing.', 'Я закончил играть.']],
        lit: [['I', 'я'], ['enjoy', 'наслаждаюсь'], ['playing', 'игранием']] },
      { t: 'idea', text: `Логики «почему именно так» тут почти нет — как у рода слов в русском (стол — он, кровать — она). Поэтому учим слова <b>кучками</b>: кучка «to», кучка «-ing» и кучка «можно и так, и так».`,
        tip: `Хорошая новость: кучка «-ing» на этом уровне маленькая — пять главных слов. Их выучить легче всего.` },
      { t: 'check', q: 'I enjoy ___ in the evening.', ru: 'Мне нравится рисовать по вечерам.', o: ['draw', 'to draw', 'drawing'], a: 2,
        why: 'После enjoy — всегда хвостик -ing.' },
      { t: 'idea', text: `Итог: смотрим на первое слово — оно решает, какой будет второе.`,
        rows: [['can / must + play', 'I can play.'], ['want + to play', 'I want to play.'], ['enjoy + playing', 'I enjoy playing.']] }
    ]},

    // ───────────── 2. Что уже знакомо ─────────────
    { title: 'Play, to play, playing — вы это уже знаете', steps: [
      { t: 'idea', text: `После <b>can, could, will, shall, might, may, must, should, would</b> слово-действие идёт в простой форме, без to. Так же после do / does / did.`,
        ex: [['You should sleep more.', 'Тебе стоит больше спать.'], ['It might rain later.', 'Позже может пойти дождь.'], ['Did you sleep well?', 'Ты хорошо спал?']],
        bad: 'I must to go.', good: 'I must <b>go</b>.' },
      { t: 'idea', text: `А после <b>want, have, going, would like, used</b> нужен мостик <b>to</b>. Вы давно говорите have to, going to, used to — это то же самое.`,
        ex: [['I have to go now.', 'Мне пора идти.'], ['What are you going to do tonight?', 'Что будешь делать вечером?'], ['I used to play football.', 'Раньше я играл в футбол.']],
        tip: `can, must, should — «короли»: им мостик to не нужен. want, have, going — обычные слова, им нужен мостик to.` },
      { t: 'check', q: 'You should ___ a break.', ru: 'Тебе стоит сделать перерыв.', o: ['take', 'to take', 'taking'], a: 0,
        why: 'После should — слово-действие без to.' },
      { t: 'check', q: 'I have ___ this logo by Friday.', ru: 'Мне надо закончить этот логотип к пятнице.', o: ['finish', 'to finish', 'finishing'], a: 1,
        why: 'have to + слово-действие: have to finish.' },
      { t: 'idea', text: `Итог: три формы вы уже знали. Третья, с хвостиком <b>-ing</b>, — после am / is / are, was / were: I’m working, she was sleeping.`,
        rows: [['can / must / should / did', 'play'], ['want / have / going / used', 'to play'], ['am / is / are / was', 'playing']] }
    ]},

    // ───────────── 3. Кучка «to» ─────────────
    { title: '«Решил купить» — кучка «to»', steps: [
      { t: 'idea', text: `Хотите сказать «Я решил завести блог». После <b>decide</b> (решать) второе слово идёт с <b>to</b> — как после want.`,
        lit: [['I', 'я'], ['decided', 'решил'], ['to start', 'завести'], ['a blog', 'блог']],
        ex: [['I decided to start a blog.', 'Я решил завести блог.'], ['I hope to see you soon.', 'Надеюсь скоро тебя увидеть.'], ['We plan to release the game in May.', 'Мы планируем выпустить игру в мае.']] },
      { t: 'idea', text: `Как запомнить эту кучку? Почти все слова в ней про то, что <b>ещё впереди</b>: хочу, планирую, решил, надеюсь, обещаю. to — как стрелка → в будущее.`,
        rows: [['желаю и планирую', 'want, need, plan, hope, expect'], ['решаю и обещаю', 'decide, promise, offer, refuse'], ['стараюсь и учусь', 'try, learn, forget (забыл сделать)']],
        tip: `хочу → сделать, решил → сделать, обещал → сделать. Стрелка вперёд = to.` },
      { t: 'check', q: 'We’ve decided ___ a new game together.', ru: 'Мы решили сделать новую игру вместе.', o: ['making', 'to make', 'make'], a: 1,
        why: 'decide — решение на будущее → to + слово-действие.' },
      { t: 'check', q: 'Don’t forget ___ your phone.', ru: 'Не забудь зарядить телефон.', o: ['charging', 'to charge', 'charge'], a: 1,
        why: 'forget + to: не забыть сделать.' },
      { t: 'idea', text: `«Решил <b>не</b> покупать», «обещал <b>не</b> опаздывать» — <b>not</b> ставим прямо перед to.`,
        lit: [['I', 'я'], ['decided', 'решил'], ['not', 'не'], ['to buy', 'покупать'], ['the game', 'игру']],
        ex: [['I decided not to buy the game.', 'Я решил не покупать игру.'], ['He promised not to be late.', 'Он обещал не опаздывать.']],
        bad: 'I decided to don’t buy it.', good: 'I decided <b>not to</b> buy it.' },
      { t: 'idea', text: `Итог: планы, решения, обещания → <b>to</b>. «Не делать» → <b>not to</b>.`,
        rows: [['want / decide / hope + to', 'I hope to win.'], ['… + not to', 'I decided not to go.']] }
    ]},

    // ───────────── 4. Кучка «-ing» ─────────────
    { title: '«Люблю рисовать», «закончил писать» — кучка «-ing»', steps: [
      { t: 'idea', text: `Хотите сказать «Мне нравится играть в кооп-игры». С <b>enjoy</b> (получать удовольствие) второе слово — только с <b>-ing</b>. to здесь нельзя.`,
        lit: [['I', 'я'], ['enjoy', 'наслаждаюсь'], ['playing', 'игрой'], ['co-op games', 'в кооп-игры']],
        ex: [['I enjoy playing co-op games.', 'Мне нравится играть в кооп-игры.'], ['Do you enjoy working from home?', 'Тебе нравится работать из дома?']],
        bad: 'I enjoy to play.', good: 'I enjoy <b>playing</b>.' },
      { t: 'idea', text: `Главных слов в кучке — пять. Все они про действие, которое <b>уже идёт</b>: им наслаждаешься, его заканчиваешь, его прекращаешь.`,
        rows: [['enjoy / mind', 'нравится / не против'], ['finish / stop', 'закончить / перестать'], ['suggest', 'предложить идею']],
        ex: [['I don’t mind waiting.', 'Я не против подождать.'], ['Stop talking and listen!', 'Хватит болтать, слушай!']],
        tip: `Запоминалка: «наслаждаюсь, не против, закончил, перестал, предложил» → Enjoy, Mind, Finish, Stop, Suggest. Всё это — про процесс, а процесс = -ing.` },
      { t: 'check', q: 'Have you finished ___ the report?', ru: 'Ты закончил писать отчёт?', o: ['to write', 'writing', 'write'], a: 1,
        why: 'После finish — только -ing.' },
      { t: 'check', q: 'Do you mind ___ a bit longer?', ru: 'Ты не против подождать ещё немного?', o: ['waiting', 'to wait', 'wait'], a: 0,
        why: 'После mind — только -ing.' },
      { t: 'idea', text: `Два «предложил». <b>offer</b> — предложил <b>сам</b> что-то сделать → to. <b>suggest</b> — предложил <b>идею</b> для всех → -ing.`,
        ex: [['Max offered to help.', 'Макс предложил (сам) помочь.'], ['Kate suggested ordering pizza.', 'Кейт предложила заказать пиццу.']],
        bad: 'She suggested to go out.', good: 'She suggested <b>going</b> out.' },
      { t: 'check', q: 'Kate suggested ___ a break.', ru: 'Кейт предложила сделать перерыв.', o: ['to take', 'take', 'taking'], a: 2,
        why: 'suggest — идея для всех → -ing.' },
      { t: 'idea', text: `Итог: пять слов про процесс — и после них только <b>-ing</b>.`,
        rows: [['enjoy / mind / finish', 'I enjoy drawing.'], ['stop / suggest', 'Stop talking!']] }
    ]},

    // ───────────── 5. like doing / like to do / would like to ─────────────
    { title: '«Люблю» и «хотел бы» — like и would like', steps: [
      { t: 'idea', text: `Третья кучка — «можно и так, и так»: <b>like, love, hate, prefer, start, begin, continue</b>. После них подходит и -ing, и to, смысл почти одинаковый.`,
        ex: [['I like playing chess. = I like to play chess.', 'Я люблю играть в шахматы.'], ['It started raining. = It started to rain.', 'Пошёл дождь.'], ['I prefer working at night.', 'Я предпочитаю работать ночью.']] },
      { t: 'check', q: 'I love ___ old films.', ru: 'Я обожаю смотреть старые фильмы.', o: ['watching', 'watch', 'to watching'], a: 0,
        why: 'После love можно -ing (или to watch). to + watching не бывает.' },
      { t: 'idea', text: `Но стоит добавить <b>would</b> — «хотел бы» — и остаётся <b>только to</b>. Это про конкретное желание сейчас.`,
        lit: [['I’d', 'я бы'], ['like', 'хотел'], ['to try', 'попробовать'], ['this game', 'эту игру']],
        ex: [['I’d like to try this game.', 'Я бы хотел попробовать эту игру.'], ['I’d love to go to Japan one day.', 'Я бы очень хотел когда-нибудь поехать в Японию.'], ['No, I’d prefer to stand.', 'Нет, я лучше постою.']],
        bad: 'I would like playing tonight.', good: 'I would like <b>to play</b> tonight.',
        tip: `like — нравится вообще (I like swimming). would like — хочу сейчас (I’d like to swim). would — как русское «бы»: где «бы», там to.` },
      { t: 'check', q: 'Would you like ___ with us tonight?', ru: 'Хочешь пойти с нами вечером?', o: ['coming', 'to come', 'come'], a: 1,
        why: 'После would like — только to.' },
      { t: 'idea', text: `Итог: like / love — оба варианта, would like / would love — только to.`,
        rows: [['like / love / hate / prefer / start', 'playing или to play'], ['would like / love / prefer / hate', 'только to play']] }
    ]},

    // ───────────── 6. want you to / told me to / make, let ─────────────
    { title: '«Хочу, чтобы ты пришёл» — want you to', steps: [
      { t: 'idea', text: `Хотите сказать «Я хочу, чтобы ты пришёл». По-английски никакого «что» и никакого второго «ты пришёл». Схема: <b>want + кто + to + действие</b>.`,
        lit: [['I', 'я'], ['want', 'хочу'], ['you', 'тебя'], ['to come', 'прийти']],
        ex: [['I want you to come.', 'Я хочу, чтобы ты пришёл.'], ['She wants me to wait.', 'Она хочет, чтобы я подождал.'], ['Do you want me to help you?', 'Хочешь, я тебе помогу?']],
        bad: 'I want that you come.', good: 'I want <b>you to come</b>.',
        tip: `«Кто» — это me, you, him, her, us, them или имя. Как в love me, call her — не I и не she.` },
      { t: 'check', q: 'Скажите: «Мама хочет, чтобы я позвонил»', o: ['Mum wants that I call.', 'Mum wants me to call.', 'Mum wants I call.'], a: 1,
        why: 'want + кто (me) + to + действие.' },
      { t: 'idea', text: `Так же работают <b>ask</b> (просить), <b>tell</b> (велеть), <b>advise</b> (советовать), <b>persuade</b> (уговорить), <b>teach</b> (учить), <b>expect</b> (ожидать). «Велел <b>не</b> ждать» — not прямо перед to.`,
        ex: [['The client asked us to change the colours.', 'Клиент попросил нас поменять цвета.'], ['My dad taught me to swim.', 'Папа научил меня плавать.'], ['The boss told me not to wait.', 'Начальник сказал мне не ждать.']],
        bad: 'He told me don’t wait.', good: 'He told me <b>not to</b> wait.' },
      { t: 'check', q: 'The teacher told us ___ late.', ru: 'Учитель велел нам не опаздывать.', o: ['don’t be', 'not to be', 'not be'], a: 1,
        why: 'Велел не делать → told + кто + not to.' },
      { t: 'idea', text: `Два исключения: <b>make</b> (заставлять) и <b>let</b> (разрешать). После них — без to, просто слово-действие.`,
        ex: [['This show always makes me laugh.', 'Это шоу всегда меня смешит.'], ['My mum didn’t let me play at night.', 'Мама не разрешала мне играть ночью.'], ['Let me see.', 'Дай посмотреть.']],
        bad: 'She made me to wait.', good: 'She made me <b>wait</b>.',
        tip: `Let’s go! — это тоже let (let us), поэтому и там нет to.` },
      { t: 'check', q: 'He let me ___ his tablet.', ru: 'Он разрешил мне взять его планшет.', o: ['to use', 'use', 'using'], a: 1,
        why: 'После let — слово-действие без to.' },
      { t: 'idea', text: `Итог: «хочу, чтобы кто-то сделал» — одна схема без «что».`,
        rows: [['want / ask / tell + кто + to', 'I want you to come.'], ['told + кто + not to', 'He told me not to wait.'], ['make / let + кто + действие', 'Let me see.']] }
    ]},

    // ───────────── 7. to = «чтобы» ─────────────
    { title: '«Пошёл в магазин, чтобы купить хлеб» — to = «чтобы»', steps: [
      { t: 'idea', text: `Хотите объяснить, <b>зачем</b> вы что-то сделали. Русское «чтобы» по-английски — просто <b>to</b> + действие. Никаких лишних слов.`,
        lit: [['I', 'я'], ['went', 'пошёл'], ['to the shop', 'в магазин'], ['to buy', 'чтобы купить'], ['some bread', 'хлеба']],
        ex: [['I went to the shop to buy some bread.', 'Я пошёл в магазин, чтобы купить хлеб.'], ['I need money to buy a new PC.', 'Мне нужны деньги, чтобы купить новый компьютер.'], ['Why are you going out? — To get some fresh air.', 'Зачем ты выходишь? — Подышать воздухом.']] },
      { t: 'check', q: 'I called Anna ___ her about the party.', ru: 'Я позвонил Анне, чтобы спросить про вечеринку.', o: ['for ask', 'to ask', 'for asking'], a: 1,
        why: 'Зачем? Дальше действие → to + действие.' },
      { t: 'idea', text: `А «для» по-русски тянет сказать for. Правило простое: если дальше <b>действие</b> — to, если <b>предмет</b> (кофе, отпуск, еда) — for.`,
        rows: [['to + действие', 'I went out to get a coffee.'], ['for + предмет', 'I went out for a coffee.']],
        bad: 'I came here for to learn English.', good: 'I came here <b>to learn</b> English.' },
      { t: 'check', q: 'Let’s go out ___ dinner.', ru: 'Давай сходим поужинать.', o: ['for', 'on', 'for to'], a: 0,
        why: 'Дальше предмет (dinner) → for.' },
      { t: 'idea', opt: true, text: `Необязательно: у <b>wait</b> три варианта. Ждать кого-то — wait <b>for</b> me. Ждать, чтобы что-то сделать, — wait <b>to</b> see. Ждать, пока что-то случится, — wait <b>for</b> the game <b>to</b> load.`,
        ex: [['Please wait for me.', 'Подожди меня.'], ['I’m waiting to see the doctor.', 'Я жду приёма у врача.'], ['We’re waiting for the game to load.', 'Мы ждём, пока загрузится игра.']] },
      { t: 'idea', text: `Итог: зачем? — to + действие. Для чего-то — for + предмет. «for to» не бывает.`,
        rows: [['to + действие', 'I came here to learn English.'], ['for + предмет', 'We need money for food.']] }
    ]},

    // ───────────── 8. Типичные ошибки ─────────────
    { title: 'Типичные ошибки — проверьте себя', steps: [
      { t: 'check', q: 'I’d like ___ to the beach.', ru: 'Я бы хотел пойти на пляж.', o: ['going', 'to go', 'go'], a: 1,
        why: 'would like → только to.' },
      { t: 'check', q: 'This film makes me ___.', ru: 'Этот фильм заставляет меня плакать.', o: ['to cry', 'cry', 'crying'], a: 1,
        why: 'После make — без to.' },
      { t: 'check', q: 'Has it stopped ___?', ru: 'Дождь перестал?', o: ['to rain', 'raining', 'rain'], a: 1,
        why: 'stop — из кучки «-ing».' },
      { t: 'idea', text: `Итог урока: русское «играть» по-английски бывает трёх видов. Смотрите на первое слово — и не переживайте, дальше потренируемся.`,
        rows: [['can / must / make / let', 'play'], ['want / decide / hope / would like / зачем?', 'to play'], ['enjoy / mind / finish / stop / suggest', 'playing']] }
    ]}
  ];
})();
