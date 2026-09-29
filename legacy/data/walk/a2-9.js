// Грамматика по шагам для юнита a2-9: used to — «раньше, а теперь нет», didn’t use to / Did you use to…?, used to только о прошлом (usually, Past Simple), be / have / do — три помощника и их пары, ловушки (I am agree, Are you like…), три формы глагола: где 2-я = 3-я и где все разные.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a2-9'); if (!u) return;
  u.walk = [
    // ───────────── 1. used to ─────────────
    { title: '«Раньше я играл» — used to', steps: [
      { t: 'idea', text: `Хотите сказать «Раньше я играл в „Доту“ каждый вечер» — а теперь уже нет. Для этого есть готовые слова <b>used to</b> («раньше»), после них — слово-действие в самом простом виде.`,
        lit: [['I', 'я'], ['used to', 'раньше (а теперь нет)'], ['play', 'играть'], ['Dota', '«Доту»'], ['every evening', 'каждый вечер']],
        ex: [['I used to play Dota every evening.', 'Раньше я играл в «Доту» каждый вечер.'], ['She used to work in a print shop.', 'Раньше она работала в типографии.'], ['We used to have a PS3.', 'Раньше у нас была PS3.']],
        tip: `Произносится «юстэ»: s глухая, d не слышно. Про себя переводите: «раньше… а теперь нет».` },
      { t: 'idea', text: `used to одно для всех: I used to, she used to, they used to — без -s. И подходит и для того, что делали много раз (play, draw), и для того, что просто было (be, have, like, live).`,
        ex: [['Max used to live in Kazan.', 'Раньше Макс жил в Казани.'], ['I used to like horror films.', 'Раньше я любил ужастики.'], ['This series used to be funny.', 'Раньше этот сериал был смешным.']] },
      { t: 'check', q: 'Скажите: «Раньше я жил в Казани»', o: ['I use to live in Kazan.', 'I used to live in Kazan.', 'I used to lived in Kazan.'], a: 1,
        why: 'Раньше, а теперь нет → used to (с d), дальше простое live.' },
      { t: 'check', q: 'There ___ a café here.', ru: 'Здесь раньше было кафе.', o: ['used to be', 'used to is', 'use to be'], a: 0,
        why: 'После used to — простое слово: be, а не is.' },
      { t: 'idea', text: `Итог: «раньше было, а теперь нет» → used to + простое слово-действие. Одно для всех.`,
        rows: [['делал часто', 'I used to draw every day.'], ['просто было', 'We used to have a dog.']] }
    ]},

    // ───────────── 2. Не и вопрос ─────────────
    { title: '«Раньше я не…», «Ты раньше…?»', steps: [
      { t: 'idea', text: `Помните did из A1: I didn’t go, а не didn’t went? С used to так же. did уже показал прошлое, поэтому у used пропадает d: <b>didn’t use to</b>.`,
        lit: [['I', 'я'], ['didn’t', '(не — в прошлом)'], ['use to', 'раньше'], ['like', 'любить'], ['coffee', 'кофе']],
        ex: [['I didn’t use to like coffee.', 'Раньше я не любил кофе.'], ['She didn’t use to wear glasses.', 'Раньше она не носила очки.']],
        bad: 'I didn’t used to like it.', good: 'I didn’t <b>use</b> to like it.' },
      { t: 'check', q: 'She didn’t ___ to wear glasses.', ru: 'Раньше она не носила очки.', o: ['use', 'used', 'using'], a: 0,
        why: 'После didn’t — use без d: прошлое уже показал did.' },
      { t: 'idea', text: `Вопрос — тоже через did, и тоже use без d: <b>Did you use to…?</b> Короткий ответ — как с любым did: Yes, I did. / No, I didn’t.`,
        lit: [['Did', '(вопрос о прошлом)'], ['you', 'ты'], ['use to', 'раньше'], ['have', 'иметь'], ['long hair?', 'длинные волосы?']],
        ex: [['Did you use to have long hair?', 'У тебя раньше были длинные волосы?'], ['What games did you use to play?', 'В какие игры ты раньше играл?'], ['Where did you use to work?', 'Где ты раньше работал?']] },
      { t: 'check', q: '___ you use to play football at school?', ru: 'Ты в школе играл в футбол?', o: ['Did', 'Do', 'Were'], a: 0,
        why: 'Вопрос с used to строится через did.' },
      { t: 'idea', opt: true, text: `В живой речи вместо didn’t use to часто говорят <b>never used to</b> — «раньше никогда не…». Здесь did нет, поэтому used — с d.`,
        ex: [['I never used to watch anime.', 'Раньше я никогда не смотрел аниме.']] },
      { t: 'idea', text: `Итог: с did — use без d.`,
        rows: [['да', 'I used to play chess.'], ['нет', 'I didn’t use to play chess.'], ['вопрос', 'Did you use to play chess?']] }
    ]},

    // ───────────── 3. Только о прошлом ─────────────
    { title: 'used to — только про «раньше»', steps: [
      { t: 'idea', text: `used to бывает <b>только в прошлом</b>. Чтобы сказать, что вы обычно делаете сейчас, берём знакомое настоящее, часто со словом <b>usually</b> (обычно).`,
        rows: [['раньше', 'I used to get up at ten.'], ['сейчас', 'Now I usually get up at seven.']],
        bad: 'I use to drink coffee in the morning.', good: 'I <b>usually</b> drink coffee in the morning.' },
      { t: 'check', q: 'Now I ___ coffee every morning.', ru: 'Сейчас я пью кофе каждое утро.', o: ['used to drink', 'use to drink', 'usually drink'], a: 2,
        why: 'Сейчас → настоящее (usually drink). used to — только о прошлом.' },
      { t: 'idea', text: `А чем used to отличается от обычного прошлого (watched, went)? watched — просто «было». used to — «долго, много раз, а теперь нет». Про один случай, про «вчера» used to не годится.`,
        rows: [['один раз, вчера', 'I watched a horror film last night.'], ['много раз, теперь нет', 'I used to watch horror films every weekend.'], ['сколько раз', 'I went to Spain three times.']],
        bad: 'I used to go to the cinema yesterday.', good: 'I <b>went</b> to the cinema yesterday.' },
      { t: 'check', q: 'Last night I ___ a horror film.', ru: 'Вчера вечером я посмотрел ужастик.', o: ['used to watch', 'watched', 'use to watch'], a: 1,
        why: 'Один раз, вчера вечером → обычное прошлое: watched.' },
      { t: 'idea', text: `Итог: used to — про долгое «раньше». Для «сейчас» и для «один раз вчера» — другие времена.`,
        rows: [['раньше, много раз', 'I used to play tennis.'], ['сейчас', 'I usually play football.'], ['один раз', 'I played tennis yesterday.']],
        tip: `Не путайте с I’m used to it — «я привык»: там впереди am / is / are, это другое выражение, разберём позже.` }
    ]},

    // ───────────── 4. be, have, do ─────────────
    { title: 'be, have, do — три помощника', steps: [
      { t: 'idea', text: `Вы уже знаете три маленьких слова-помощника: am / is / are (это <b>be</b>), <b>have</b> / has, <b>do</b> / does / did. У каждого своя пара — своя форма слова-действия. Знаете пару — знаете время.`,
        rows: [['be (am, is, are, was, were)', '+ -ing', 'I’m working. We were playing.'], ['have / has', '+ третья форма', 'She has finished. I’ve seen it.'], ['do / does / did', '+ простое слово', 'Do you work? I didn’t go.']] },
      { t: 'check', q: 'What ___ you doing at ten last night?', ru: 'Что ты делал вчера в десять вечера?', o: ['did', 'were', 'have'], a: 1,
        why: 'doing (с -ing) — пара be; прошлое, you → were.' },
      { t: 'idea', text: `Как построить вопрос или «не»? Посмотрите на обычную фразу: есть там am / is / are, was / were, have / has? Есть — он выходит вперёд или берёт not. Нет — зовём do / does / did, а слово-действие ставим в простой вид.`,
        rows: [['She is streaming.', 'Is she streaming?', 'She isn’t streaming.'], ['You have played it.', 'Have you played it?', 'You haven’t played it.'], ['He works from home.', 'Does he work from home?', 'He doesn’t work from home.']],
        ex: [['They were sleeping. → Were they sleeping?', 'Они спали. → Они спали?'], ['Our team won. → Did our team win?', 'Наша команда выиграла. → Наша команда выиграла?']] },
      { t: 'check', q: '___ you finished the design yet?', ru: 'Ты уже закончил дизайн?', o: ['Did', 'Have', 'Are'], a: 1,
        why: 'finished + yet — это have + третья форма.' },
      { t: 'idea', text: `Итог: помощник и форма слова всегда идут парой.`,
        rows: [['be', '-ing'], ['have', 'третья форма'], ['do', 'простое слово']],
        tip: `Есть и четвёртая пара: be + третья форма — «это сделали». This game was made in Poland. — Эта игра сделана в Польше. Подробно — в отдельном уроке.` }
    ]},

    // ───────────── 5. Ловушки ─────────────
    { title: 'Ловушки: не смешиваем помощников', steps: [
      { t: 'idea', text: `Самая частая ошибка — помощник от одного времени, а слово-действие от другого. Проверяйте пару: нет -ing — значит, не be.`,
        rows: [['Are you like this game?', '→ Do you like this game?'], ['Do you working today?', '→ Are you working today?']],
        tip: `Увидели -ing — ищите am / is / are. Нет -ing и нет have — ищите do.` },
      { t: 'idea', text: `После have — третья форма, после did — простое слово. Не наоборот.`,
        rows: [['Have you finish?', '→ Have you finished?'], ['Did you finished?', '→ Did you finish?']] },
      { t: 'check', q: '___ your brother like horror films?', ru: 'Твой брат любит ужастики?', o: ['Is', 'Does', 'Has'], a: 1,
        why: 'like — обычное слово-действие без -ing, он → does.' },
      { t: 'idea', text: `Ловушка для нас: «я согласен» по-английски — это слово-действие <b>agree</b> («соглашаюсь»). Поэтому am не нужно — как и в I work.`,
        lit: [['I', 'я'], ['agree', 'соглашаюсь']],
        bad: 'I am agree. · I’m work in a studio.', good: 'I <b>agree</b>. · I <b>work</b> in a studio.' },
      { t: 'check', q: 'Скажите: «Я не согласен»', o: ['I am not agree.', 'I don’t agree.', 'I not agree.'], a: 1,
        why: 'agree — обычное слово-действие, «не» через don’t.' },
      { t: 'idea', text: `be, have, do бывают и просто словами «быть», «иметь», «делать». Тогда живут по обычным правилам: have и do зовут себе помощника do, а be — сам себе помощник.`,
        ex: [['Were you at home yesterday?', 'Ты был дома вчера?'], ['Do you have a PS5? · I didn’t have time.', 'У тебя есть PS5? · У меня не было времени.'], ['What did you do at the weekend?', 'Что ты делал на выходных?']],
        tip: `В Have you had lunch? два have: первое — помощник, второе — «есть (еду)» в третьей форме. Это нормально, как did … do.` },
      { t: 'idea', text: `Итог: сначала найдите помощника, потом проверьте форму после него.`,
        rows: [['-ing', 'Are you working?'], ['обычное слово', 'Do you like it? · I agree.'], ['третья форма', 'Have you finished?']] }
    ]},

    // ───────────── 6. Три формы: 2-я = 3-я ─────────────
    { title: 'Три формы: где вторая = третья', steps: [
      { t: 'idea', text: `У каждого слова-действия три формы. Первая — простая (see). Вторая — для «вчера» (saw). Третья — после have (have <b>seen</b>).`,
        rows: [['1-я', 'see', 'I see it.'], ['2-я', 'saw', 'I saw it yesterday.'], ['3-я', 'seen', 'I have seen it.']] },
      { t: 'idea', text: `У правильных слов вторая и третья одинаковые: -ed (played — have played). Хорошая новость: у многих частых неправильных они <b>тоже совпадают</b>.`,
        ex: [['I bought it yesterday.', 'Я купил это вчера.'], ['I have bought it.', 'Я это купил.'], ['It was bought online.', 'Это купили онлайн.']] },
      { t: 'idea', text: `Есть слова, где все три формы одинаковые: cut (резать), put (класть), let (позволять), hit (ударять), cost (стоить), shut (закрывать), hurt (ранить, болеть), read (читать). И группа на «о:т»:`,
        rows: [['buy, bring, think', 'bought, brought, thought'], ['fight, catch, teach', 'fought, caught, taught']],
        tip: `read пишется одинаково, но сейчас — «рид», а в прошлом — «ред»: I read a book yesterday.` },
      { t: 'check', q: 'I have ___ a new keyboard.', ru: 'Я купил новую клавиатуру.', o: ['buyed', 'bought', 'buy'], a: 1,
        why: 'have + третья форма; buy — bought — bought, без -ed.' },
      { t: 'idea', text: `Ещё три группы, где 2-я = 3-я: на -t, на -d и короткие, где меняется одна буква.`,
        rows: [['на -t', 'slept, kept, felt, left, met, sent, spent, lost, built'], ['на -d', 'had, made, said, paid, heard, sold, told, found, understood'], ['короткие', 'got, sat, won']],
        tip: `said и paid звучат «сэд» и «пэйд», а heard — «хёрд», не «хирд».` },
      { t: 'check', q: 'She has ___ me about the new project.', ru: 'Она рассказала мне о новом проекте.', o: ['told', 'telled', 'tell'], a: 0,
        why: 'tell — told — told: вторая и третья одинаковые, -ed не нужно.' },
      { t: 'idea', text: `Итог: знаете вторую форму таких слов — знаете и третью.`,
        rows: [['yesterday', 'I bought / I spent / I told'], ['have', 'I have bought / spent / told']] }
    ]},

    // ───────────── 7. Все три формы разные ─────────────
    { title: 'Где все три формы разные', steps: [
      { t: 'idea', text: `У этих слов третья форма своя, и часто она кончается на <b>-n / -en</b>. Учите их группами — они похожи.`,
        rows: [['speak — spoke — spoken', 'break, choose, steal, forget, wake, drive, ride, write'], ['know — knew — known', 'grow, throw, fly, draw, show, wear'], ['take — took — taken', 'give, see, eat, fall']],
        tip: `Например: broke — broken, wrote — written, drew — drawn, fell — fallen.` },
      { t: 'check', q: 'Someone has ___ my password!', ru: 'Кто-то украл мой пароль!', o: ['stole', 'stolen', 'steal'], a: 1,
        why: 'has + третья форма: steal — stole — stolen.' },
      { t: 'idea', text: `Ещё группа «i — a — u»: begin — began — begun, drink — drank — drunk, swim — swam — swum, sing — sang — sung. Похоже: run — ran — <b>run</b>, come — came — <b>come</b>, become — became — <b>become</b>.`,
        ex: [['She has become a streamer.', 'Она стала стримером.']],
        tip: `run, come, become — хитрецы: третья форма совпадает с первой.` },
      { t: 'idea', text: `Самые частые, учим первыми: be — was / were — <b>been</b>, go — went — <b>gone</b>, do — did — <b>done</b>. И главное: третья форма никогда не стоит одна — перед ней have / has. Одна стоит только вторая.`,
        bad: 'I have wrote the text. · I seen this film.', good: 'I have <b>written</b> the text. · I <b>saw</b> / I <b>have seen</b> this film.' },
      { t: 'check', q: 'Have you ever ___ a horse?', ru: 'Ты когда-нибудь ездил верхом?', o: ['rode', 'ridden', 'ride'], a: 1,
        why: 'have + третья форма: ride — rode — ridden.' },
      { t: 'idea', text: `Итог: вторая — одна, третья — только с have.`,
        rows: [['вчера', 'I wrote / I saw / I went'], ['have', 'I have written / seen / gone']] }
    ]},

    // ───────────── 8. Проверьте себя ─────────────
    { title: 'Проверьте себя: весь урок', steps: [
      { t: 'check', q: 'Did you ___ to live here?', ru: 'Ты раньше жил здесь?', o: ['used', 'use', 'using'], a: 1,
        why: 'После did — use без d.' },
      { t: 'check', q: 'Скажите: «Ты любишь суши?»', o: ['Are you like sushi?', 'Do you like sushi?', 'You like sushi?'], a: 1,
        why: 'like — обычное слово-действие, вопрос через do.' },
      { t: 'check', q: 'I have ___ this series.', ru: 'Я смотрел этот сериал.', o: ['saw', 'seen', 'see'], a: 1,
        why: 'После have — третья форма: see — saw — seen.' },
      { t: 'idea', text: `Итог урока: used to — «раньше, а теперь нет»; помощник и форма идут парой; неправильные слова учим группами.`,
        rows: [['раньше', 'used to / didn’t use to / Did you use to…?'], ['пары', 'be + -ing · have + 3-я · do + простое'], ['формы', 'buy — bought — bought · see — saw — seen']] }
    ]}
  ];
})();
