// Грамматика по шагам для юнита a2-1: Past Continuous — was / were + -ing, «не» и вопрос, момент в прошлом, фон истории, Past Simple или Past Continuous, when и while, типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a2-1'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: '«Я играл» бывает двух видов', steps: [
      { t: 'idea', text: `Хотите сказать: «Вчера в девять я играл». По-русски «играл» — и когда игра шла в тот момент, и когда играл два часа и лёг спать. В английском это две разные фразы.`,
        ex: [['I played for two hours.', 'Я играл два часа. (целиком)'], ['At nine I was playing.', 'В девять я играл. (шла игра)']] },
      { t: 'idea', text: `Если действие <b>шло</b> в какой-то момент прошлого — уже началось и ещё не закончилось, — берём <b>was / were</b> и хвостик <b>-ing</b>. Это называется Past Continuous.`,
        lit: [['I', 'я'], ['was', '(был)'], ['playing', 'играющий'], ['at nine', 'в девять']],
        ex: [['I was playing at nine.', 'В девять я играл.'], ['It was raining.', 'Шёл дождь.'], ['We were watching a series.', 'Мы смотрели сериал.']],
        tip: `Это стоп-кадр из прошлого. Нажали паузу в 21:00 — а на экране вы с геймпадом в руках: I was playing.` },
      { t: 'check', q: 'Скажите: «Вчера в 8 вечера я рисовал логотип»', o: ['I drew a logo at 8 pm yesterday.', 'I was drawing a logo at 8 pm yesterday.', 'I am drawing a logo at 8 pm yesterday.'], a: 1,
        why: 'В 8 вечера рисование шло, было в процессе → was drawing.' },
      { t: 'idea', text: `Итог: «делал в тот момент» = <b>was / were + -ing</b>. Помните I am playing из A1? То же самое, только am / is / are «переехали» в прошлое.`,
        rows: [['шло в момент прошлого', 'I was playing.'], ['сейчас (A1)', 'I am playing.']] }
    ]},

    // ───────────── 2. Как построить ─────────────
    { title: 'Две половинки: was / were + -ing', steps: [
      { t: 'idea', text: `Was или were выбираем как в A1, когда учили «я был»: я и один человек или предмет — <b>was</b>, все остальные — <b>were</b>. Вторая половинка — слово-действие с -ing.`,
        rows: [['I / he / she / it, Tom', 'was', 'Tom was working.'], ['you / we / they', 'were', 'We were working.']],
        bad: 'I was play. / They was working.', good: 'I was play<b>ing</b>. / They <b>were</b> working.',
        tip: `-ing пишется как в A1: make → making, run → running, sit → sitting, lie (лежать) → lying.` },
      { t: 'check', q: 'My friends ___ waiting for me.', ru: 'Мои друзья ждали меня.', o: ['was', 'were', 'are'], a: 1,
        why: 'My friends — они (they) → were.' },
      { t: 'idea', text: `«Не» ставим после was / were, как в A1: <b>wasn’t</b> = was not, <b>weren’t</b> = were not.`,
        ex: [['She wasn’t working.', 'Она не работала.'], ['They weren’t playing.', 'Они не играли.'], ['I wasn’t listening.', 'Я не слушал.']] },
      { t: 'idea', text: `Вопрос: was / were выходит вперёд — как в Are you sleeping? Ответ короткий, повторяем was / were.`,
        lit: [['Were', '(был ли)'], ['you', 'ты'], ['sleeping?', 'спящий?']],
        rows: [['Were you sleeping?', 'Yes, I was. / No, I wasn’t.'], ['Was it raining?', 'Yes, it was. / No, it wasn’t.']] },
      { t: 'check', q: '___ you listening? — No, sorry, I wasn’t.', ru: 'Ты слушал? — Нет, извини.', o: ['Was', 'Were', 'Did'], a: 1,
        why: 'Вопрос с -ing: were выходит вперёд; you → were. Did здесь не нужен.' },
      { t: 'idea', text: `С вопросительным словом — сначала оно, потом was / were, потом кто: <b>What were you doing?</b>`,
        ex: [['What were you doing at ten?', 'Что ты делал в десять?'], ['Where was she going?', 'Куда она шла?'], ['Why were they laughing?', 'Почему они смеялись?']] },
      { t: 'check', q: 'Скажите: «Что ты делал в полночь?»', o: ['What you were doing at midnight?', 'What were you doing at midnight?', 'What did you doing at midnight?'], a: 1,
        why: 'What + were + you + doing: were встаёт перед you.' },
      { t: 'idea', text: `Итог: одна формула на всё — меняется только место was / were.`,
        rows: [['да', 'I was working.'], ['нет', 'I wasn’t working.'], ['вопрос', 'Were you working?']] }
    ]},

    // ───────────── 3. Момент в прошлом ─────────────
    { title: 'Что происходило в тот момент', steps: [
      { t: 'idea', text: `Такая фраза почти всегда привязана к моменту: в десять, в полночь, в это время на прошлой неделе. Действие началось <b>до</b> этого момента и шло <b>после</b>.`,
        rows: [['20:00', 'начал работать'], ['22:30', 'I was working at 10.30.'], ['23:00', 'закончил']] },
      { t: 'idea', text: `Слова-подсказки: <b>at 8 o’clock yesterday</b>, <b>at midnight</b>, <b>at this time last week</b> (в это время на прошлой неделе).`,
        ex: [['I was working at 10 last night.', 'Вчера в 10 вечера я работал.'], ['It wasn’t raining in the morning.', 'Утром дождя не было.'], ['What were you doing at 3?', 'Что ты делал в 3?']] },
      { t: 'check', q: 'At this time last week I ___ on a beach.', ru: 'В это время на прошлой неделе я лежал на пляже.', o: ['lay', 'was lying', 'am lying'], a: 1,
        why: 'В тот момент действие шло → was lying (lie → lying).' },
      { t: 'idea', text: `Ещё так говорят о ситуации «на время»: где жили тогда, что было надето в тот день.`,
        ex: [['In 2022 we were living in Kazan.', 'В 2022-м мы жили в Казани.'], ['Yesterday she was wearing jeans.', 'Вчера она была в джинсах.']] },
      { t: 'idea', text: `Итог: момент прошлого + что шло в этот момент.`,
        rows: [['сейчас', 'I’m working now.'], ['в момент прошлого', 'I was working at 10.']] }
    ]},

    // ───────────── 4. Фон истории ─────────────
    { title: 'Фон истории — как первые кадры сериала', steps: [
      { t: 'idea', text: `Начинаем историю — рисуем фон: погода, кто что делал вокруг. Это was / were + -ing.`,
        ex: [['It was snowing.', 'Шёл снег.'], ['The sun was shining.', 'Светило солнце.'], ['People were hurrying home.', 'Люди спешили домой.']] },
      { t: 'idea', text: `А то, что <b>случилось</b> в кадре, — обычное прошлое, вторая форма (came, saw).`,
        ex: [['It was raining. Then a man came in.', 'Шёл дождь. Потом вошёл мужчина.']],
        tip: `was / were + -ing — декорации. Вторая форма — то, что происходит на сцене.` },
      { t: 'idea', text: `Так же объясняют, почему что-то не сделали: «я не слышал — я был в душе».`,
        ex: [['I didn’t hear the phone. I was taking a shower.', 'Я не слышал телефон. Я был в душе.'], ['Sorry, I wasn’t listening.', 'Прости, я не слушал.'], ['It was raining, so we didn’t go out.', 'Шёл дождь, поэтому мы не пошли гулять.']] },
      { t: 'check', q: 'I didn’t answer your call. I ___ a film.', ru: 'Я не ответил на звонок. Я смотрел фильм.', o: ['watched', 'was watching', 'watch'], a: 1,
        why: 'Объясняем, что шло в момент звонка → was watching.' },
      { t: 'idea', text: `Итог: фон — was / were + -ing, события — вторая форма.`,
        rows: [['фон', 'It was raining.'], ['событие', 'A man came in.']] }
    ]},

    // ───────────── 5. Past Simple или Past Continuous ─────────────
    { title: 'Целиком или в процессе', steps: [
      { t: 'idea', text: `Вторая форма (played) — действие <b>целиком</b>, от начала до конца. was / were + -ing — <b>середина</b> действия, процесс в какой-то момент.`,
        rows: [['целиком', 'We played from 10 to 12.'], ['в процессе', 'At 11 we were playing.']] },
      { t: 'idea', text: `Если сказано, сколько длилось или чем кончилось, — это целиком, вторая форма. Вопрос и «не» — через did, как в A1.`,
        bad: 'Yesterday I was watching three episodes.', good: 'Yesterday I <b>watched</b> three episodes.',
        rows: [['Did you watch the match?', 'Were you watching TV at 9?'], ['It didn’t rain.', 'It wasn’t raining.']] },
      { t: 'check', q: 'Yesterday I ___ a logo from 2 to 5, then I sent it.', ru: 'Вчера я делал логотип с двух до пяти, потом отправил.', o: ['designed', 'was designing', 'design'], a: 0,
        why: 'С двух до пяти — целиком, от начала до конца → designed.' },
      { t: 'idea', text: `Итог: целиком — вторая форма, в процессе — was / were + -ing.`,
        rows: [['целиком', 'I watched it.'], ['одно за другим', 'I got up, took a shower and made coffee.'], ['шло в момент', 'I was watching it.']] },
      { t: 'idea', opt: true, text: `Некоторые слова — не действие, а состояние: <b>know, want, like, love, need, understand</b>, have (иметь). С -ing они почти не бывают — в прошлом просто вторая форма.`,
        bad: 'I was knowing the answer.', good: 'I <b>knew</b> the answer.' },
      { t: 'check', q: 'He ___ the answer, but he didn’t say it.', ru: 'Он знал ответ, но не сказал.', o: ['was knowing', 'knew', 'was know'], a: 1,
        why: 'know — состояние, с -ing не бывает → knew.' }
    ]},

    // ───────────── 6. when ─────────────
    { title: '«Я играл, когда позвонил босс» — when', steps: [
      { t: 'idea', text: `Хотите сказать: «Я рисовал, когда позвонил босс». Длинное действие шло — was / were + -ing. Короткое событие его прервало — вторая форма. Связывает их <b>when</b> (когда).`,
        lit: [['I was drawing', 'я рисовал (шло)'], ['when', 'когда'], ['the boss called', 'позвонил босс (раз!)']],
        ex: [['I was drawing when the boss called.', 'Я рисовал, когда позвонил босс.'], ['We were playing when the lights went out.', 'Мы играли, когда отключили свет.']] },
      { t: 'check', q: 'I ___ a shower when you called.', ru: 'Я был в душе, когда ты позвонил.', o: ['took', 'was taking', 'was take'], a: 1,
        why: 'Душ — длинный процесс, звонок его прервал → was taking.' },
      { t: 'idea', text: `Самая частая ошибка — поставить -ing и в короткое событие. Звонок — это «раз!», значит вторая форма.`,
        bad: 'I was reading when the phone was ringing.', good: 'I was reading when the phone <b>rang</b>.',
        tip: `When можно поставить и в начало — тогда нужна запятая: When I saw Max, he was waiting for a bus.` },
      { t: 'check', q: 'She was crossing the road when she ___ her phone.', ru: 'Она переходила дорогу, когда уронила телефон.', o: ['was dropping', 'dropped', 'drops'], a: 1,
        why: 'Уронила — короткое событие посреди процесса → dropped.' },
      { t: 'idea', text: `Одна форма меняет весь смысл. Сравните две фразы про ужин.`,
        rows: [['When Max came, we were having dinner.', 'ужин уже шёл, Макс пришёл посреди'], ['When Max came, we had dinner.', 'Макс пришёл, потом поужинали']] },
      { t: 'check', q: 'When Max came, we ___ dinner. (ужин уже шёл)', ru: 'Когда Макс пришёл, мы ужинали.', o: ['had', 'were having', 'have'], a: 1,
        why: 'Ужин уже шёл, Макс его прервал → were having.' },
      { t: 'idea', text: `Итог: длинное шло — was / were + -ing, короткое случилось — вторая форма.`,
        rows: [['процесс', 'I was drawing'], ['+ when + событие', 'when the boss called.']] }
    ]},

    // ───────────── 7. while ─────────────
    { title: '«Пока я стримил» — while', steps: [
      { t: 'idea', text: `<b>while</b> — «пока, в то время как». После него обычно стоит длинное действие: was / were + -ing.`,
        lit: [['My phone died', 'телефон сел'], ['while', 'пока'], ['I was streaming', 'я стримил (шло)']],
        ex: [['My phone died while I was streaming.', 'Телефон сел, пока я стримил.'], ['Kate fell asleep while she was watching the film.', 'Кейт уснула, пока смотрела фильм.']] },
      { t: 'check', q: 'The game crashed ___ I was saving it.', ru: 'Игра вылетела, пока я её сохранял.', o: ['while', 'so', 'but'], a: 0,
        why: 'Пока шёл процесс (сохранение) → while + was saving.' },
      { t: 'idea', text: `Два процесса <b>одновременно</b> — оба с -ing.`,
        ex: [['While I was cooking, my brother was playing FIFA.', 'Пока я готовил, брат играл в FIFA.'], ['I was listening to music while I was working.', 'Я слушал музыку, пока работал.']] },
      { t: 'check', q: 'While I was cooking, my brother ___ a game.', ru: 'Пока я готовил, брат играл в игру.', o: ['played', 'was playing', 'were playing'], a: 1,
        why: 'Два процесса шли одновременно → оба с -ing; brother — он → was.' },
      { t: 'idea', text: `Итог: when — чаще с коротким событием, while — с длинным процессом.`,
        rows: [['when', 'when the phone rang'], ['while', 'while I was sleeping']],
        tip: `while — длинное слово для длинного действия. when — короткое, как щелчок.` }
    ]},

    // ───────────── 8. Типичные ошибки ─────────────
    { title: 'Проверьте себя: частые ошибки', steps: [
      { t: 'idea', text: `Соберём места, где русскоговорящие ошибаются чаще всего. Не переживайте — это последняя разминка.`,
        rows: [['I was play.', 'I was playing.'], ['Did you sleeping?', 'Were you sleeping?'], ['I was knowing him.', 'I knew him.']] },
      { t: 'check', q: 'Скажите: «Ты спал, когда я позвонил?»', o: ['Did you sleeping when I called?', 'Were you sleeping when I called?', 'Were you sleep when I called?'], a: 1,
        why: 'Вопрос про процесс: Were + you + sleeping. Did с -ing не дружит.' },
      { t: 'check', q: 'The game ___ while I was fighting the last boss.', ru: 'Игра вылетела, пока я дрался с последним боссом.', o: ['was crashing', 'crashed', 'crashes'], a: 1,
        why: 'Вылет — короткое событие посреди процесса → crashed.' },
      { t: 'idea', text: `Итог урока: <b>was / were + -ing</b> — что шло в момент прошлого, а короткое событие, которое его прервало, — вторая форма.`,
        rows: [['шло', 'I was playing'], ['случилось', 'when the lights went out.']] }
    ]}
  ];
})();
