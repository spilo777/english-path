// Грамматика по шагам для юнита a1-8: was / were, wasn’t / weren’t, вопрос, вопросительные слова, yesterday / last / ago, возраст и погода в прошлом.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-8'); if (!u) return;
  u.walk = [
    // ───────────── 1. «Был» — это was / were ─────────────
    { title: '«Я был дома» — то же самое, только в прошлом', steps: [
      { t: 'idea', text: `Хотите сказать «Я был дома». Вы помните: «Я дома» — это <b>I am at home</b>, без am нельзя. В прошлом всё то же, только вместо am встаёт <b>was</b> («был»).`,
        lit: [['I', 'я'], ['was', 'был'], ['at home', 'дома']],
        ex: [['I was at home.', 'Я был дома.'], ['I was tired.', 'Я устал.'], ['I was busy.', 'Я был занят.']] },
      { t: 'idea', text: `Хорошая новость: слово «был» есть и в русском. Так что здесь ничего не пропадает — was просто стоит на месте русского «был».`,
        bad: 'Yesterday I at home.', good: 'Yesterday I <b>was</b> at home.',
        tip: `am / is / are — «есть» сейчас. was — «был» тогда. Одно и то же слово, только вчерашнее.` },
      { t: 'check', q: 'Скажите: «Вчера я был в офисе»', o: ['Yesterday I at the office.', 'Yesterday I was at the office.', 'Yesterday I am at the office.'], a: 1,
        why: 'Вчера — прошлое, значит, не am, а was. Совсем без слова нельзя.' },
      { t: 'idea', text: `А как сказать «Было холодно»? По-русски тут нет «кто». По-английски «кто» нужен всегда — ставим <b>it</b>: <b>It was cold</b>.`,
        lit: [['It', 'оно'], ['was', 'было'], ['cold', 'холодно']],
        ex: [['It was cold yesterday.', 'Вчера было холодно.'], ['It was fun!', 'Было весело!'], ['It was late.', 'Было поздно.']],
        tip: `Русское «было …» в начале фразы (было весело, было поздно, было холодно) почти всегда = <b>It was …</b>.` },
      { t: 'check', q: 'Скажите: «Было весело!»', o: ['Was fun!', 'It was fun!', 'It fun!'], a: 1,
        why: 'Нужны оба: «кто» (it) и «был» (was).' },
      { t: 'idea', text: `Итог: «был» по-английски — <b>was</b>, и без него нельзя, как без am.`,
        rows: [['Я дома.', 'I am at home.'], ['Я был дома.', 'I was at home.'], ['Было холодно.', 'It was cold.']] }
    ]},

    // ───────────── 2. was или were ─────────────
    { title: 'was или were — смотря кто', steps: [
      { t: 'idea', text: `У am / is / are было три вида. У «был» — только два. Где было am или is — теперь <b>was</b>. Где было are — теперь <b>were</b>.`,
        rows: [['I am → I was', 'I was tired.'], ['he / she / it is → was', 'She was busy.'], ['you / we / they are → were', 'They were in the park.']] },
      { t: 'idea', text: `То есть один человек или предмет — was. Много — were. И «ты / вы» — всегда were, даже если «ты» один.`,
        ex: [['The party was nice.', 'Вечеринка была классная.'], ['My friends were at the party.', 'Мои друзья были на вечеринке.'], ['Today I am fine, but yesterday I was tired.', 'Сегодня я в порядке, а вчера устал.']],
        bad: 'You was at home.', good: 'You <b>were</b> at home.' },
      { t: 'check', q: 'Tom and Anna ___ at the cinema yesterday.', ru: 'Том и Анна были вчера в кино.', o: ['was', 'were', 'are'], a: 1,
        why: 'Том и Анна — двое (они) → were.' },
      { t: 'check', q: 'The shop ___ closed.', ru: 'Магазин был закрыт.', o: ['was', 'were', 'is'], a: 0,
        why: 'Магазин — один (it) → was.' },
      { t: 'check', q: 'Скажите: «Ты вчера был дома»', o: ['You was at home yesterday.', 'You were at home yesterday.', 'You are at home yesterday.'], a: 1,
        why: 'С you всегда were, даже про одного человека.' },
      { t: 'idea', text: `Итог: два слова вместо трёх.`,
        rows: [['я, он, она, оно, Том', 'was'], ['ты, вы, мы, они', 'were']] }
    ]},

    // ───────────── 3. Мне было… ─────────────
    { title: '«Мне было скучно», «мне было десять»', steps: [
      { t: 'idea', text: `Хотите сказать «Мне было скучно». По-русски начинаем с «мне». По-английски такого «мне» нет: начинаем с <b>I</b> и ставим <b>was</b>. Дословно: «Я был скучающий».`,
        lit: [['I', 'я'], ['was', 'был'], ['bored', 'скучающий']],
        ex: [['I was bored.', 'Мне было скучно.'], ['She was sad.', 'Ей было грустно.'], ['I was scared.', 'Мне было страшно.']],
        bad: 'To me was boring.', good: 'I was bored.' },
      { t: 'check', q: 'Скажите: «Ей было грустно»', o: ['To her was sad.', 'She was sad.', 'It was sad her.'], a: 1,
        why: 'Без «ей» — начинаем с she: She + was + sad.' },
      { t: 'idea', text: `Возраст — так же. «Мне было десять» — <b>I was ten</b>. Дословно «я был десять». Никаких «лет» и никакого «имел».`,
        lit: [['I', 'я'], ['was', 'был'], ['ten', 'десять']],
        ex: [['I was ten.', 'Мне было десять.'], ['Last year my cat was two.', 'В прошлом году коту было два.'], ['When I was ten, I was scared of dogs.', 'Когда мне было десять, я боялся собак.']],
        bad: 'I had ten years.', good: 'I was ten.' },
      { t: 'check', q: 'Скажите: «Мне было десять»', o: ['I had ten years.', 'I was ten.', 'To me was ten.'], a: 1,
        why: 'Возраст — через was: I was ten.' },
      { t: 'idea', text: `Два похожих слова про скуку. <b>bored</b> — так чувствую я (мне скучно). <b>boring</b> — такой фильм, вечер, игра (скучный).`,
        rows: [['я, она, мы (чувство)', 'bored', 'I was bored.'], ['фильм, вечер, игра (какой)', 'boring', 'The film was boring.']],
        tip: `Скажете «I was boring» — выйдет «я был скучным человеком». Про себя — bored.` },
      { t: 'check', q: 'I was at home all day. I was ___.', ru: 'Я весь день был дома. Мне было скучно.', o: ['boring', 'bored', 'bore'], a: 1,
        why: 'Про свои чувства — bored. Boring — про сам день или фильм.' },
      { t: 'idea', text: `Итог: русское «мне было …» по-английски всегда начинается с <b>I was</b>.`,
        rows: [['Мне было скучно.', 'I was bored.'], ['Мне было десять.', 'I was ten.'], ['Фильм был скучный.', 'The film was boring.']] }
    ]},

    // ───────────── 4. wasn’t / weren’t ─────────────
    { title: '«Не был» — wasn’t, weren’t', steps: [
      { t: 'idea', text: `Хотите сказать «Я не был на работе». Делаем как с am / is / are в уроке 2: <b>not</b> сразу после was / were. Больше ничего не нужно.`,
        lit: [['I', 'я'], ['was', 'был'], ['not', 'не'], ['at work', 'на работе']],
        ex: [['I was not at work.', 'Я не был на работе.'], ['They were not there.', 'Их там не было.'], ['The shop was not open.', 'Магазин был закрыт.']] },
      { t: 'idea', text: `В разговоре сжимаем: was not → <b>wasn’t</b>, were not → <b>weren’t</b>.`,
        rows: [['was not', 'wasn’t', 'I wasn’t at work.'], ['were not', 'weren’t', 'They weren’t there.']],
        ex: [['The film wasn’t boring.', 'Фильм был нескучный.'], ['We weren’t at home last night.', 'Нас не было дома вчера вечером.']] },
      { t: 'check', q: 'Скажите: «Её не было дома»', o: ['She not was at home.', 'She wasn’t at home.', 'She weren’t at home.'], a: 1,
        why: 'she → was, «не» → wasn’t. not стоит после was.' },
      { t: 'idea', text: `Помощник don’t / doesn’t из урока 3 тут не нужен. Помните правило: если в фразе есть am / is / are — а теперь и was / were — do не появляется.`,
        bad: 'I didn’t was busy. / I not was busy.', good: 'I <b>wasn’t</b> busy.' },
      { t: 'check', q: 'The shoes ___ expensive.', ru: 'Ботинки были недорогие.', o: ['wasn’t', 'weren’t', 'don’t'], a: 1,
        why: 'Ботинки — их много (они) → were → weren’t.' },
      { t: 'idea', text: `Итог: «не был» = was / were + not.`,
        rows: [['I / he / she / it', 'wasn’t'], ['you / we / they', 'weren’t']] }
    ]},

    // ───────────── 5. Вопрос ─────────────
    { title: 'Вопрос: Were you at home?', steps: [
      { t: 'idea', text: `Хотите спросить «Ты был дома?». По-русски мы спрашиваем голосом. По-английски — порядком слов: was / were <b>прыгает в начало</b>, как am / is / are в уроке 2.`,
        lit: [['Were', 'был'], ['you', 'ты'], ['at home', 'дома'], ['?', '']],
        ex: [['Were you at home?', 'Ты был дома?'], ['Was it fun?', 'Было весело?'], ['Were they expensive?', 'Они были дорогие?']],
        bad: 'You were at home?', good: '<b>Were you</b> at home?' },
      { t: 'check', q: 'Скажите: «Магазин был открыт?»', o: ['The shop was open?', 'Was the shop open?', 'Was open the shop?'], a: 1,
        why: 'Was в начало, потом «кто» (the shop), потом остальное.' },
      { t: 'idea', text: `Коротко ответить — повторите was / were, как в уроке 2 повторяли am / is / are. «Нет» — wasn’t / weren’t.`,
        rows: [['Were you busy?', 'Yes, I was.', 'No, I wasn’t.'], ['Was the museum open?', 'Yes, it was.', 'No, it wasn’t.'], ['Were they angry?', 'Yes, they were.', 'No, they weren’t.']] },
      { t: 'check', q: 'Were they at school? — No, they ___.', ru: 'Они были в школе? — Нет.', o: ['wasn’t', 'weren’t', 'aren’t'], a: 1,
        why: 'В ответе повторяем слово из вопроса: were → weren’t.' },
      { t: 'idea', text: `Итог: <b>Was / Were + кто + остальное?</b> Ответ — тем же словом.`,
        rows: [['Was it fun?', 'Yes, it was.'], ['Were you there?', 'No, I wasn’t.']] }
    ]},

    // ───────────── 6. Где? Как? Почему? + born ─────────────
    { title: 'Где ты был? Как прошло? Где родился?', steps: [
      { t: 'idea', text: `Хотите спросить «Где ты был вчера?». Слово-вопрос (where — где) ставим <b>самым первым</b>, а дальше всё как в обычном вопросе: were, потом you.`,
        lit: [['Where', 'где'], ['were', 'был'], ['you', 'ты'], ['yesterday', 'вчера'], ['?', '']],
        ex: [['Where were you yesterday?', 'Где ты был вчера?'], ['Where was Anna?', 'Где была Анна?'], ['Who was there?', 'Кто там был?']],
        bad: 'Where you were yesterday?', good: 'Where <b>were you</b> yesterday?' },
      { t: 'check', q: 'Where ___ Anna yesterday?', ru: 'Где вчера была Анна?', o: ['was', 'were', 'is'], a: 0,
        why: 'Анна — одна (она) → was; yesterday — прошлое.' },
      { t: 'idea', text: `Самый полезный вопрос — <b>How was …?</b> («Как прошло …?»). Про фильм, поездку, игру, выходные. А «почему» — <b>why</b>: Why were you late?`,
        ex: [['How was the party?', 'Как прошла вечеринка?'], ['How was your weekend?', 'Как прошли выходные?'], ['Why were you late?', 'Почему ты опоздал?']],
        tip: `Хотите спросить друга про вчерашнее — почти всегда подойдёт How was it?` },
      { t: 'check', q: 'Скажите: «Как прошла поездка?»', o: ['How the trip was?', 'How was the trip?', 'How trip was?'], a: 1,
        why: 'How — первым, потом was, потом «что» (the trip).' },
      { t: 'idea', text: `«Родился» по-английски — «был рождён»: <b>was / were born</b>. Одно слово born, но was / were перед ним обязательно.`,
        lit: [['I', 'я'], ['was', 'был'], ['born', 'рождён'], ['in Kazan', 'в Казани']],
        ex: [['I was born in Kazan.', 'Я родился в Казани.'], ['Where were you born?', 'Где ты родился?'], ['My friends were born in 1995.', 'Мои друзья родились в 1995 году.']],
        bad: 'I born in Kazan.', good: 'I <b>was</b> born in Kazan.' },
      { t: 'check', q: 'Скажите: «Где ты родился?»', o: ['Where you were born?', 'Where were you born?', 'Where you born?'], a: 1,
        why: 'Where + were + you + born. Без were нельзя.' },
      { t: 'idea', text: `Итог: слово-вопрос → was / were → кто → остальное.`,
        rows: [['Where were you?', 'Где ты был?'], ['How was it?', 'Как прошло?'], ['Where were you born?', 'Где ты родился?']] }
    ]},

    // ───────────── 7. Когда: yesterday / last / ago ─────────────
    { title: 'Когда это было: yesterday, last, ago', steps: [
      { t: 'idea', text: `Три слова показывают «это было в прошлом» — и сразу зовут was / were. Первое — <b>yesterday</b> (вчера). Ставим в начало или в конец.`,
        ex: [['I was at the office yesterday.', 'Вчера я был в офисе.'], ['Yesterday it was cold.', 'Вчера было холодно.'], ['yesterday morning', 'вчера утром']] },
      { t: 'idea', text: `Второе — <b>last</b> (прошлый): last week, last month, last year. Никакого «в» перед ним: не «in last year», а просто last year.`,
        ex: [['We were in Spain last year.', 'В прошлом году мы были в Испании.'], ['Last week I was busy.', 'На прошлой неделе я был занят.'], ['last Saturday', 'в прошлую субботу']],
        bad: 'We were in Rome in last year.', good: 'We were in Rome <b>last year</b>.' },
      { t: 'check', q: 'We were in Paris ___ year.', ru: 'В прошлом году мы были в Париже.', o: ['in last', 'last', 'yesterday'], a: 1,
        why: '«В прошлом году» — last year, без in.' },
      { t: 'idea', text: `Третье — <b>ago</b> (назад). По-русски «два дня назад» — «назад» в конце. По-английски точно так же: two days <b>ago</b>. Только после срока, не перед.`,
        lit: [['two', 'два'], ['days', 'дня'], ['ago', 'назад']],
        ex: [['I was there two days ago.', 'Я был там два дня назад.'], ['She was here an hour ago.', 'Она была здесь час назад.'], ['A year ago I was a student.', 'Год назад я был студентом.']],
        bad: 'I was there ago two days.', good: 'I was there two days <b>ago</b>.' },
      { t: 'check', q: 'Скажите: «три года назад»', o: ['ago three years', 'three years ago', 'three years last'], a: 1,
        why: 'ago — после срока, как русское «назад».' },
      { t: 'idea', text: `Одна ловушка: «вчера вечером» — это <b>last night</b>, а не «yesterday evening… night». Просто запомните пару.`,
        ex: [['Were you at home last night?', 'Ты был дома вчера вечером?'], ['Last night it was fun.', 'Вчера вечером было весело.']],
        tip: `last night — «прошлая ночь / прошлый вечер», то есть вчерашний.` },
      { t: 'check', q: 'Were you at home ___?', ru: 'Ты был дома вчера вечером?', o: ['last night', 'yesterday ago', 'in last evening'], a: 0,
        why: '«Вчера вечером» — last night, без in.' },
      { t: 'idea', text: `Итог: увидели одно из этих слов — берите was / were.`,
        rows: [['yesterday', 'вчера', 'I was there yesterday.'], ['last …', 'прошлый …', 'last week, last night'], ['… ago', '… назад', 'two days ago']] }
    ]}
  ];
})();
