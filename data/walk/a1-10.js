// Грамматика по шагам для юнита a1-10: помощник did, didn't + начальная форма, Did you…? и короткие ответы, вопросительные слова, was/were или did, разговор о выходных.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-10'); if (!u) return;
  u.walk = [
    // ───────────── 1. Помощник did ─────────────
    { title: '«Ты ходил в кино?» — слово-сигнал Did', steps: [
      { t: 'idea', text: `Хотите спросить: «Ты ходил в кино?». По-русски это та же фраза, только голос идёт вверх. По-английски в начало нужно слово-сигнал <b>Did</b> — «это вопрос о прошлом».`,
        lit: [['Did', '(вопрос о прошлом)'], ['you', 'ты'], ['go', 'ходил'], ['to the cinema?', 'в кино?']],
        ex: [['Did you go to the cinema?', 'Ты ходил в кино?'], ['Did you like the film?', 'Тебе понравился фильм?'], ['Did you play yesterday?', 'Ты играл вчера?']] },
      { t: 'idea', text: `Смотрите: «ходил» — это went, а в вопросе стоит <b>go</b>. Did уже показывает прошлое, поэтому слово-действие возвращается в форму как в словаре: went → go, bought → buy, played → play.`,
        bad: 'Did you went to the cinema?', good: 'Did you <b>go</b> to the cinema?',
        tip: `Представьте, что did «забирает» прошлое себе. Слову-действию больше нечего нести — оно становится простым.` },
      { t: 'check', q: 'Скажите: «Тебе понравилось?»', o: ['Did you liked it?', 'Did you like it?', 'Do you liked it?'], a: 1,
        why: 'Прошлое показывает did, слово-действие остаётся как в словаре: like.' },
      { t: 'check', q: 'Скажите: «Ты купил билеты?»', o: ['Did you buy the tickets?', 'Did you bought the tickets?', 'You bought the tickets?'], a: 0,
        why: 'В начале Did, а дальше buy — не bought: прошлое уже показал did.' },
      { t: 'idea', text: `Помните, в настоящем вопросы делали <b>do / does</b>: Do you play? Does she play? В прошлом место обоих занимает одно слово <b>did</b> — для всех: I, you, he, she, we, they.`,
        rows: [['обычно', 'Do you play?', 'Does she play?'], ['вчера', 'Did you play?', 'Did she play?']],
        tip: `Слова yesterday, last night, last week, ago — сигнал: нужен did, а не do / does.` },
      { t: 'check', q: '___ Tom play football last week?', ru: 'Том играл в футбол на прошлой неделе?', o: ['Does', 'Did', 'Do'], a: 1,
        why: 'last week — прошлое, а в прошлом для всех одно слово: Did.' },
      { t: 'idea', text: `Итог: вопрос о прошлом начинается с <b>Did</b>, а слово-действие после него — как в словаре.`,
        rows: [['Вопрос о прошлом', 'Did + кто + слово как в словаре?'], ['went / bought / played →', 'go / buy / play'], ['do / does в прошлом →', 'did (один для всех)']] }
    ]},

    // ───────────── 2. didn't ─────────────
    { title: '«Я не ходил» — didn’t', steps: [
      { t: 'idea', text: `Хотите сказать «Я не ходил». Перед словом-действием ставим <b>didn’t</b> (коротко от did not) — и оно тоже стоит как в словаре: I didn’t go.`,
        lit: [['I', 'я'], ['didn’t', 'не (в прошлом)'], ['go', 'ходил']],
        ex: [['I didn’t go.', 'Я не ходил.'], ['She didn’t buy it.', 'Она это не купила.'], ['We didn’t watch the film.', 'Мы не смотрели фильм.']] },
      { t: 'idea', text: `Правило одного «вчера»: прошлое в фразе показывается <b>один раз</b>. Есть didn’t — значит дальше слово без -ed и без второй формы.`,
        bad: 'I didn’t went. / I not went.', good: 'I <b>didn’t go</b>.',
        tip: `didn’t — для всех одинаково: I didn’t, she didn’t, they didn’t. Никакого doesn’t в прошлом.` },
      { t: 'check', q: 'She didn’t ___ the message.', ru: 'Она не прочитала сообщение.', o: ['read', 'reads', 'readed'], a: 0,
        why: 'После didn’t — слово как в словаре: read.' },
      { t: 'check', q: 'Скажите: «Вчера я не играл»', o: ['I not played yesterday.', 'I didn’t play yesterday.', 'I didn’t played yesterday.'], a: 1,
        why: '«Не» в прошлом — didn’t, а play после него без -ed.' },
      { t: 'idea', text: `Очень частая схема в разговоре: «сделал, <b>но не</b>…». Первая часть — обычное прошлое, вторая — с didn’t.`,
        ex: [['I played, but I didn’t win.', 'Я играл, но не выиграл.'], ['She called, but I didn’t answer.', 'Она звонила, но я не ответил.'], ['We went to the cinema, but we didn’t like the film.', 'Мы сходили в кино, но фильм нам не понравился.']] },
      { t: 'idea', text: `«У меня не было времени» — тут have обычное слово-действие: I didn’t have time. Так же с едой: I didn’t have breakfast (я не завтракал).`,
        bad: 'I hadn’t time.', good: 'I <b>didn’t have</b> time.',
        ex: [['I didn’t have time.', 'У меня не было времени.'], ['He didn’t have breakfast.', 'Он не завтракал.']] },
      { t: 'check', q: 'Скажите: «У меня не было времени»', o: ['I hadn’t time.', 'I didn’t have time.', 'I didn’t had time.'], a: 1,
        why: 'have в прошлом отрицается как все слова-действия: didn’t + have.' },
      { t: 'idea', text: `Итог: «не» в прошлом — это <b>didn’t</b> + слово как в словаре, одинаково для всех.`,
        rows: [['I went. →', 'I didn’t go.'], ['She bought it. →', 'She didn’t buy it.'], ['I had time. →', 'I didn’t have time.']] }
    ]},

    // ───────────── 3. Did + кто + глагол, короткие ответы ─────────────
    { title: 'Did + кто + слово-действие. И как ответить', steps: [
      { t: 'idea', text: `Порядок вопроса всегда один: <b>Did</b> → кто → слово-действие. «Кто» может быть длинным (your friends, Anna and Kate) — порядок не меняется.`,
        lit: [['Did', '(вопрос о прошлом)'], ['your friends', 'твои друзья'], ['come?', 'пришли?']],
        ex: [['Did Tom win?', 'Том выиграл?'], ['Did your friend call you?', 'Твой друг тебе звонил?'], ['Did it rain on Sunday?', 'В воскресенье шёл дождь?']] },
      { t: 'check', q: 'Скажите: «Твои друзья пришли?»', o: ['Did your friends came?', 'Did come your friends?', 'Did your friends come?'], a: 2,
        why: 'Did + кто (your friends) + слово как в словаре (come).' },
      { t: 'idea', text: `На вопрос «Did you…?» отвечают коротко: <b>Yes, I did.</b> / <b>No, I didn’t.</b> Повторяем did, а не само слово-действие.`,
        bad: 'Did you like it? — Yes, I liked.', good: 'Did you like it? — Yes, I <b>did</b>.',
        rows: [['Yes, I did.', 'No, I didn’t.'], ['Yes, she did.', 'No, she didn’t.'], ['Yes, they did.', 'No, they didn’t.']] },
      { t: 'check', q: 'Did they win? — No, they ___.', ru: 'Они выиграли? — Нет.', o: ['didn’t', 'don’t', 'weren’t'], a: 0,
        why: 'Вопрос с did → и короткий ответ с did: No, they didn’t.' },
      { t: 'check', q: 'Did Anna come to the party? — Yes, she ___.', ru: 'Анна пришла на вечеринку? — Да.', o: ['came', 'did', 'was'], a: 1,
        why: 'В коротком ответе повторяем помощника: Yes, she did.' },
      { t: 'idea', text: `Итог: вопрос — Did + кто + слово как в словаре, ответ — коротко через did.`,
        rows: [['Вопрос', 'Did your friends come?'], ['Да', 'Yes, they did.'], ['Нет', 'No, they didn’t.']] }
    ]},

    // ───────────── 4. Вопросительные слова ─────────────
    { title: 'Куда? Когда? Кого? — слово-вопрос впереди', steps: [
      { t: 'idea', text: `Хотите спросить «Куда ты ходил?». Слово-вопрос (<b>where</b>) ставим самым первым, а дальше всё как обычно: did → кто → слово-действие.`,
        lit: [['Where', 'куда'], ['did', '(вопрос о прошлом)'], ['you', 'ты'], ['go?', 'ходил?']],
        ex: [['Where did you go?', 'Куда ты ходил?'], ['When did you come back?', 'Когда ты вернулся?'], ['Who did you meet?', 'Кого ты встретил?']] },
      { t: 'idea', text: `«Что ты делал?» — <b>What did you do?</b> Здесь два разных «do»: did — помощник, а do — слово «делать»; это нормально, так и говорят.`,
        bad: 'What you did? / What did you did?', good: 'What did you <b>do</b>?',
        ex: [['What did you do yesterday?', 'Что ты делал вчера?'], ['What did you do at the weekend?', 'Что ты делал на выходных?']] },
      { t: 'check', q: 'Скажите: «Что ты делал вчера?»', o: ['What you did yesterday?', 'What did you do yesterday?', 'What did you did yesterday?'], a: 1,
        why: 'What + did + you + do. Второе слово-действие — как в словаре.' },
      { t: 'check', q: '___ did you go last summer? — To the sea.', ru: '… ты ездил прошлым летом? — На море.', o: ['What', 'Where', 'Who'], a: 1,
        why: 'Ответ — место (to the sea), значит вопрос «куда»: Where.' },
      { t: 'idea', text: `Ещё слова-вопросы: <b>why</b> (почему), <b>how</b> (как), <b>how long</b> (сколько времени). Схема та же: слово-вопрос → did → кто → слово-действие.`,
        rows: [['Why did you leave?', 'Почему ты ушёл?'], ['How did you get there?', 'Как ты туда добрался?'], ['How long did you stay?', 'Сколько ты там пробыл?']] },
      { t: 'idea', opt: true, text: `Редкий случай: если «кто» в вопросе — тот, кто сам это сделал, did не нужен, слово-действие стоит в прошлом: Who won? (Кто победил?). Сравните: Who did you meet? (Кого ты встретил?) — здесь did есть.`,
        rows: [['Кто звонил?', 'Who called?'], ['Кому ты звонил?', 'Who did you call?']] },
      { t: 'idea', text: `Итог: слово-вопрос впереди, потом did, кто и слово как в словаре.`,
        rows: [['Куда ты ходил?', 'Where did you go?'], ['Что ты делал?', 'What did you do?'], ['Сколько ты там пробыл?', 'How long did you stay?']] }
    ]},

    // ───────────── 5. was / were или did ─────────────
    { title: 'was / were или did?', steps: [
      { t: 'idea', text: `Хотите спросить «Было весело?». Тут слово «было» — это was / were, и с ними помощник did <b>не нужен</b>: просто ставим was вперёд.`,
        lit: [['Was', 'было'], ['it', 'это'], ['fun?', 'весело?']],
        ex: [['Was it fun?', 'Было весело?'], ['Were you at home?', 'Ты был дома?'], ['Where were you?', 'Где ты был?']] },
      { t: 'idea', text: `Как выбрать: найдите в русской фразе действие. «Был / была / были» или действия нет вообще → was / were; настоящее действие (ходил, смотрел, купил) → did.`,
        rows: [['Было весело?', 'Was it fun?'], ['Тебе было весело? (have fun — действие)', 'Did you have fun?'], ['Где ты был?', 'Where were you?'], ['Куда ты ходил?', 'Where did you go?']] },
      { t: 'idea', text: `Вместе они не встречаются: либо was / were, либо did. Это самое частое место ошибок — не переживайте, сейчас потренируемся.`,
        bad: 'Did you were at home? / I wasn’t go to work.', good: '<b>Were</b> you at home? / I <b>didn’t go</b> to work.' },
      { t: 'check', q: '___ the weather good?', ru: 'Погода была хорошая?', o: ['Did', 'Was', 'Were'], a: 1,
        why: '«Была хорошая» — действия нет; the weather = it → Was.' },
      { t: 'check', q: '___ you watch the new film?', ru: 'Ты смотрел новый фильм?', o: ['Did', 'Were', 'Was'], a: 0,
        why: 'watch — действие → Did.' },
      { t: 'check', q: 'I ___ tired, so I ___ to the concert.', ru: 'Я устал, поэтому не пошёл на концерт.', o: ['was / didn’t go', 'did / wasn’t go', 'was / didn’t went'], a: 0,
        why: '«Был уставший» → was; «не пошёл» — действие → didn’t go.' },
      { t: 'idea', text: `Итог: «был / была / было» — was / were без did; действие — did + слово как в словаре.`,
        rows: [['был, была, были (какой? где?)', 'Was it fun? / I wasn’t at home.'], ['действие (ходил, купил, смотрел)', 'Did you go? / I didn’t go.']] }
    ]},

    // ───────────── 6. Разговор о выходных ─────────────
    { title: '«Как прошли выходные?» — разговор', steps: [
      { t: 'idea', text: `Теперь можно расспросить друга о выходных. Три вопроса, которых хватает почти всегда: How was your weekend? → What did you do? → Did you have fun?`,
        rows: [['How was your weekend?', 'Как прошли выходные?'], ['What did you do?', 'Что ты делал?'], ['Did you have fun?', 'Было весело?']] },
      { t: 'idea', text: `Ответ строится из того, что вы уже умеете: обычное прошлое, didn’t для «не», и but для «но».`,
        ex: [['It was OK. I stayed at home.', 'Нормально. Я остался дома.'], ['I went to a party, but I didn’t stay long.', 'Я ходил на вечеринку, но не остался надолго.'], ['I didn’t do a lot. I slept and played games.', 'Я мало что делал. Спал и играл.']] },
      { t: 'check', q: 'Скажите: «Куда ты ездил на выходных?»', o: ['Where you went at the weekend?', 'Where did you go at the weekend?', 'Where were you go at the weekend?'], a: 1,
        why: 'Слово-вопрос + did + you + go. Без was / were: «ездил» — действие.' },
      { t: 'check', q: 'Did you go to the concert? — No, I ___. I ___ tired.', ru: 'Ты ходил на концерт? — Нет. Я устал.', o: ['didn’t / was', 'wasn’t / did', 'didn’t / did'], a: 0,
        why: 'Короткий ответ на Did → didn’t; «я устал» — was tired.' },
      { t: 'idea', text: `Итог: три вопроса о прошлом — и вы можете вести разговор о выходных.`,
        rows: [['Как было?', 'How was your weekend?'], ['Что делал?', 'What did you do?'], ['Ходил? Понравилось?', 'Did you go? Did you like it?']],
        tip: `Потренируйтесь: спросите себя эти три вопроса и ответьте тремя-четырьмя фразами про свои выходные.` }
    ]}
  ];
})();
