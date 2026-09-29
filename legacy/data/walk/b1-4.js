// Грамматика по шагам для юнита b1-4: have been + -ing — следы недавнего процесса, упрёк, «сколько уже» и повторы; have been doing или have done (процесс или результат, How long или How many); глаголы-состояния, want / mean; for и since глубже; When…? или How long…?; It’s been ages since….
(function () {
  const u = COURSE.units.find((x) => x.id === 'b1-4'); if (!u) return;
  u.walk = [
    // ───────────── 1. Напоминание и новое: следы процесса ─────────────
    { title: 'Ты бегал? — процесс, который только что закончился', steps: [
      { t: 'idea', text: `Вы уже знаете (a2-3): <b>have / has been + хвостик -ing</b> говорит, сколько уже идёт процесс. Это время называется Present Perfect Continuous — «процесс от прошлого до сейчас».`,
        lit: [['I', 'я'], ['have been', '(уже столько-то)'], ['learning', 'учу'], ['Japanese', 'японский'], ['for six months', 'полгода']],
        ex: [['I’ve been learning Japanese for six months.', 'Я учу японский полгода.'], ['It’s been raining all day.', 'Весь день идёт дождь.']] },
      { t: 'idea', text: `Новое: процесс мог <b>только что закончиться</b>, а его следы видны сейчас. Хотите спросить запыхавшегося друга: «Ты бегал?» — Have you been running?`,
        lit: [['Have', '(вопрос)'], ['you', 'ты'], ['been running?', 'бегал (только что)?']],
        ex: [['Why are you out of breath? Have you been running?', 'Почему ты запыхался? Ты бегал?'], ['Your eyes are red. Have you been crying?', 'У тебя красные глаза. Ты плакала?']] },
      { t: 'check', q: 'Your hands are covered in paint. ___?', ru: 'У тебя руки в краске. Ты красил?', o: ['Do you paint', 'Have you been painting', 'Are you painting'], a: 1,
        why: 'Процесс только что закончился, следы видны сейчас → have been + -ing.' },
      { t: 'idea', text: `А почему не Did you run? Did спрашивает про момент в прошлом, как в рассказе. Здесь мы смотрим на «сейчас» и на следы.`,
        bad: 'Why are you so tired? What do you do?', good: 'Why are you so tired? What <b>have</b> you <b>been doing</b>?',
        tip: `Видите след — мокро, грязно, устал, запыхался — спрашивайте have you been…-ing.` },
      { t: 'check', q: 'Скажите: «Почему ты мокрый? Ты плавал?»', o: ['Why are you wet? Do you swim?', 'Why are you wet? Have you been swimming?', 'Why are you wet? Are you swimming?'], a: 1,
        why: 'Мокрый — след недавнего процесса → have you been swimming.' },
      { t: 'idea', text: `Итог: процесс шёл до сейчас или только что закончился, а следы видны — have been + -ing.`,
        rows: [['сколько уже идёт', 'I’ve been learning it for a year.'], ['следы процесса', 'Have you been running?']] }
    ]},

    // ───────────── 2. Следы и упрёк ─────────────
    { title: 'Кто брал мою кружку? — след и упрёк', steps: [
      { t: 'idea', text: `Следы бывают любые: мокрая улица, усталость, бардак (mess). Мы подчёркиваем, что процесс шёл какое-то время.`,
        ex: [['The street is wet. It’s been raining.', 'Улица мокрая. Шёл дождь.'], ['Sorry, I’m exhausted. I’ve been working since six.', 'Прости, я без сил. Я работаю с шести.'], ['Where have you been? I’ve been calling you all day!', 'Где ты был? Я весь день тебе звоню!']] },
      { t: 'idea', text: `Часто это звучит как <b>упрёк или подозрение</b>: «кто-то тут что-то делал».`,
        ex: [['Who’s been using my mug?', 'Кто брал мою кружку?'], ['Someone’s been eating my pizza!', 'Кто-то таскал мою пиццу!'], ['You’ve been playing all night, haven’t you?', 'Ты всю ночь играл, да?']] },
      { t: 'check', q: 'The kitchen smells of smoke. Who ___ here?', ru: 'На кухне пахнет дымом. Кто тут готовил?', o: ['have been cooking', 'has been cooking', 'is cooking'], a: 1,
        why: 'Запах — след недавнего процесса → has been cooking.' },
      { t: 'idea', text: `Итог: видите след и хотите сказать «кто-то тут делал» — have / has been + -ing.`,
        rows: [['след', 'It’s been raining.'], ['упрёк', 'Who’s been using my mug?']] }
    ]},

    // ───────────── 3. Сколько уже и повторы ─────────────
    { title: 'Сколько уже идёт и что повторяется', steps: [
      { t: 'idea', text: `Просто сейчас идёт — am / is / are + -ing. Сколько уже идёт (How long, for, since, all day) — have been + -ing.`,
        rows: [['Hurry up! We’re waiting.', 'We’ve been waiting for forty minutes!'], ['Don’t disturb me. I’m working.', 'I’ve been working since eight.']],
        bad: 'I am working here since 2022.', good: 'I<b>’ve been working</b> here since 2022.' },
      { t: 'check', q: 'I ___ for you for an hour!', ru: 'Я жду тебя уже час!', o: ['am waiting', 'have been waiting', 'wait'], a: 1,
        why: '«Уже час» — сколько идёт процесс → have been waiting.' },
      { t: 'check', q: 'Shh! I ___ on a call right now.', ru: 'Тише! Я сейчас на созвоне.', o: ['have been', 'am', 'have been being'], a: 1,
        why: 'Просто сейчас, без «сколько уже» → am.' },
      { t: 'idea', text: `have been + -ing — это не только одно длинное действие, но и <b>повторы</b> за период: каждый вечер, в последнее время (lately).`,
        ex: [['We’ve been going to this cafe for years.', 'Мы ходим в это кафе уже много лет.'], ['I’ve been playing chess online a lot lately.', 'В последнее время я много играю в шахматы онлайн.'], ['I haven’t been sleeping well recently.', 'В последнее время я плохо сплю.']] },
      { t: 'check', q: 'We ___ this cafe every Friday for years.', ru: 'Мы уже много лет ходим в это кафе по пятницам.', o: ['are visiting', 'have been visiting', 'visit'], a: 1,
        why: 'Повторы за период до сейчас (for years) → have been visiting.' },
      { t: 'idea', text: `Итог: слышите русское настоящее + «уже / с… / сколько / в последнее время» — почти всегда have been + -ing.`,
        rows: [['просто сейчас', 'I’m working.'], ['сколько уже', 'I’ve been working since eight.'], ['повторы', 'I’ve been playing a lot lately.']] }
    ]},

    // ───────────── 4. Процесс или результат ─────────────
    { title: 'have been doing или have done: процесс или результат', steps: [
      { t: 'idea', text: `Главная ловушка урока. Оба времени смотрят на «сейчас», но на разное: <b>have been doing</b> — процесс (чем был занят), <b>have done</b> — результат (что готово).`,
        rows: [['She’s been painting her room.', 'вся в краске, может, ещё не закончила'], ['She’s painted her room.', 'комната готова, она жёлтая']],
        tip: `Спросите себя: мне важно, чем человек был занят, или что теперь готово?` },
      { t: 'idea', text: `Поэтому процесс может быть и не закончен, а результат — закончен всегда.`,
        ex: [['I’ve been reading this book for a week.', 'Я читаю эту книгу неделю (ещё читаю).'], ['I’ve read it. It’s great.', 'Я её прочитал. Она классная.'], ['Someone has eaten all the pizza!', 'Кто-то съел всю пиццу! (коробка пустая)']] },
      { t: 'check', q: 'Good news: the bug is gone! We ___ it.', ru: 'Хорошие новости: бага больше нет! Мы его исправили.', o: ['have been fixing', 'have fixed', 'are fixing'], a: 1,
        why: 'Работа готова, важен результат → have fixed.' },
      { t: 'check', q: 'Why are your hands black? ___ the bike?', ru: 'Почему у тебя чёрные руки? Ты возился с велосипедом?', o: ['Have you been repairing', 'Are you repairing', 'Do you repair'], a: 0,
        why: 'Руки чёрные — след процесса, чем был занят → have you been repairing.' },
      { t: 'idea', text: `Итог: процесс и следы — have been doing; готовый результат — have done.`,
        rows: [['процесс', 'I’ve been repairing the chair.'], ['результат', 'I’ve repaired the chair — it’s fine now.']] }
    ]},

    // ───────────── 5. How long или How many ─────────────
    { title: 'Сколько по времени или сколько штук', steps: [
      { t: 'idea', text: `Самая точная подсказка — вопрос. <b>How long</b> (сколько по времени) — have been doing. <b>How many / how much</b> (сколько штук) и <b>сколько раз</b> — have done.`,
        rows: [['How long…?', 'How long have you been playing?'], ['How many…?', 'How many levels have you finished?'], ['сколько раз', 'I’ve watched it three times.']] },
      { t: 'idea', text: `Одна и та же работа — две фразы. Часы и «всё утро» — процесс; число штук — результат.`,
        lit: [['I’ve designed', 'я нарисовал (готово)'], ['twelve', 'двенадцать'], ['so far', 'пока что']],
        ex: [['I’ve been designing icons all morning.', 'Я всё утро рисую иконки.'], ['I’ve designed twelve so far.', 'Пока нарисовал двенадцать.']],
        bad: 'I’ve been writing five emails this morning.', good: 'I<b>’ve written</b> five emails this morning.' },
      { t: 'check', q: 'I’ve been reading since lunch. I ___ three chapters so far.', ru: 'Я читаю с обеда. Пока прочитал три главы.', o: ['have been reading', 'have read', 'am reading'], a: 1,
        why: 'Три главы — количество, результат → have read.' },
      { t: 'check', q: 'How long ___ that book?', ru: 'Сколько ты уже читаешь эту книгу?', o: ['have you read', 'have you been reading', 'do you read'], a: 1,
        why: 'How long — сколько по времени идёт процесс → have you been reading.' },
      { t: 'idea', text: `Итог: есть число часов, дней, «весь день» — have been doing. Есть число штук или раз — have done.`,
        rows: [['сколько времени', 'I’ve been reading for two hours.'], ['сколько штук', 'I’ve read 80 pages.']],
        ex: [['I’m learning Korean, but I haven’t been learning it very long.', 'Я учу корейский, но недавно.'], ['I’m learning Korean, but I haven’t learnt much yet.', 'Я учу корейский, но пока выучил немного.']] }
    ]},

    // ───────────── 6. Когда -ing нельзя ─────────────
    { title: 'Когда -ing нельзя: know, have, be', steps: [
      { t: 'idea', text: `Вы уже знаете (b1-1): know, like, believe, understand, be, have (иметь) — это состояния, с -ing они не бывают. Для них «сколько уже» — только have + третья форма.`,
        ex: [['I’ve known Oleg since university.', 'Я знаю Олега с универа.'], ['How long have you had this laptop?', 'Сколько у тебя этот ноутбук?'], ['I’ve had a headache all day.', 'У меня весь день болит голова.']],
        bad: 'I’ve been knowing him for years.', good: 'I<b>’ve known</b> him for years.' },
      { t: 'check', q: 'How long ___ Lena?', ru: 'Сколько ты знаешь Лену?', o: ['have you been knowing', 'have you known', 'do you know'], a: 1,
        why: 'know — состояние, без -ing → have you known.' },
      { t: 'idea', text: `Исключение — <b>want</b> (хотеть) и <b>mean</b> в значении «собираться». Они отлично живут в have been + -ing: «давно хочу», «давно собираюсь».`,
        lit: [['I’ve been meaning', 'я давно собираюсь'], ['to call you', 'позвонить тебе']],
        ex: [['I’ve been meaning to call you, but I keep forgetting.', 'Я давно собираюсь тебе позвонить, но всё забываю.'], ['I’ve been wanting to try this game for months.', 'Я уже несколько месяцев хочу попробовать эту игру.']] },
      { t: 'check', q: 'I’ve ___ to ask you something.', ru: 'Я давно собираюсь тебя кое о чём спросить.', o: ['been meaning', 'been mean', 'meaning'], a: 0,
        why: 'mean («собираться») можно в have been + -ing: I’ve been meaning to…' },
      { t: 'idea', text: `Итог: состояния — have + третья форма; want и mean — можно с -ing.`,
        rows: [['состояние', 'I’ve known her since school.'], ['исключение', 'I’ve been meaning to call you.']] },
      { t: 'idea', opt: true, text: `live и work можно и так, и так — смысл одинаковый. Но со словом <b>always</b> (всегда) — только простая форма.`,
        ex: [['I’ve lived here for five years. = I’ve been living here for five years.', 'Я живу здесь пять лет.']],
        bad: 'I’ve always been living in big cities.', good: 'I<b>’ve always lived</b> in big cities.' }
    ]},

    // ───────────── 7. for и since глубже ─────────────
    { title: 'for и since: нюансы живой речи', steps: [
      { t: 'idea', text: `База вам знакома: for + отрезок, since + точка старта. Нюанс: в утвердительной фразе for можно опустить, а в отрицании — нет (там вместо for бывает in).`,
        ex: [['They’ve been married ten years.', 'Они женаты десять лет.'], ['I haven’t had a day off for months.', 'У меня несколько месяцев не было выходного.'], ['I haven’t had a day off in months.', 'То же самое.']],
        bad: 'We haven’t met ten years.', good: 'We haven’t met <b>for</b> ten years.' },
      { t: 'check', q: 'We haven’t talked ___ ages.', ru: 'Мы сто лет не разговаривали.', o: ['—', 'for', 'since'], a: 1,
        why: 'В отрицании for не опускают: haven’t talked for ages.' },
      { t: 'idea', text: `«Не делал с тех пор» — обычно простая форма, have + третья форма, а не -ing.`,
        ex: [['I haven’t played it since March.', 'Я не играл в неё с марта.'], ['Max hasn’t posted anything for weeks.', 'Макс ничего не выкладывал уже несколько недель.']] },
      { t: 'check', q: 'I ___ this game since March — no time!', ru: 'Я не играл в эту игру с марта — нет времени!', o: ['am not playing', 'haven’t played', 'don’t play'], a: 1,
        why: '«Не делал с тех пор» → haven’t played since.' },
      { t: 'idea', text: `Со словом <b>all</b> предлог не нужен: all my life. А <b>ever since</b> — «с тех самых пор».`,
        ex: [['I’ve lived here all my life.', 'Я живу здесь всю жизнь.'], ['We met in 2015 and we’ve been friends ever since.', 'Мы познакомились в 2015-м и с тех пор дружим.']],
        bad: 'I’ve lived here for all my life.', good: 'I’ve lived here <b>all</b> my life.' },
      { t: 'check', q: 'I’ve been playing this game ___ my life.', ru: 'Я играю в эту игру всю жизнь.', o: ['for all', 'all', 'since all'], a: 1,
        why: 'С all предлог не нужен: all my life.' },
      { t: 'idea', text: `Итог: for в отрицании нужен (или in); с all — без предлога; ever since — «с тех пор».`,
        rows: [['отрицание', 'I haven’t played for ages.'], ['all', 'all my life, all day'], ['ever since', 'we’ve been friends ever since']] }
    ]},

    // ───────────── 8. When или How long ─────────────
    { title: 'When…? или How long…?', steps: [
      { t: 'idea', text: `<b>When…?</b> спрашивает о точке в прошлом — значит, did и вторая форма. <b>How long…?</b> спрашивает о длине периода до сейчас — have (been).`,
        rows: [['When did it start raining?', 'It started an hour ago.'], ['How long has it been raining?', 'For an hour. / Since two o’clock.']] },
      { t: 'check', q: 'Скажите: «Когда ты начал учить английский?»', o: ['When have you started learning English?', 'When did you start learning English?', 'How long did you start learning English?'], a: 1,
        why: 'When — точка в прошлом → did you start.' },
      { t: 'idea', text: `Классическая ловушка — жениться. Свадьба — событие в точке: got married. «Женаты столько-то» — состояние до сих пор: have been married.`,
        rows: [['They got married five years ago.', 'Они поженились пять лет назад.'], ['They’ve been married for five years.', 'Они женаты пять лет.']],
        bad: 'They are married for five years.', good: 'They<b>’ve been</b> married for five years.' },
      { t: 'check', q: 'They ___ married ten years ago.', ru: 'Они поженились десять лет назад.', o: ['have got', 'got', 'have been'], a: 1,
        why: 'Свадьба — событие в точке (ago) → got married.' },
      { t: 'idea', text: `Итог: When? — did и вторая форма; How long? — have (been).`,
        rows: [['точка', 'When did you meet?'], ['длина до сейчас', 'How long have you known each other?']] },
      { t: 'idea', opt: true, text: `<b>Since when…?</b> — «с каких это пор?», часто с удивлением.`,
        ex: [['Since when do you like horror games?', 'С каких это пор тебе нравятся хорроры?']] }
    ]},

    // ───────────── 9. It’s been ages since… ─────────────
    { title: 'It’s been ages since… — «сто лет не…»', steps: [
      { t: 'idea', text: `Хотите сказать «Я не видел Олега два года». Очень частый разговорный способ: <b>It’s been</b> + срок + <b>since</b> + вторая форма.`,
        lit: [['It’s been', 'прошло'], ['two years', 'два года'], ['since', 'с тех пор, как'], ['I last saw', 'я в последний раз видел'], ['Oleg', 'Олега']],
        ex: [['It’s been two years since I last saw Oleg.', 'Я не видел Олега два года.'], ['It’s ages since we went to the cinema.', 'Мы сто лет не ходили в кино.'], ['It’s been a while! How are you?', 'Давно не виделись! Как ты?']] },
      { t: 'idea', text: `Русское «не видел» тянет вставить not. Но после since стоит момент, когда это было в последний раз, — без отрицания.`,
        bad: 'It’s two years since I haven’t seen him.', good: 'It’s two years since I <b>last saw</b> him.',
        tip: `Три способа сказать одно: I haven’t seen her for a year. · It’s been a year since I last saw her. · The last time I saw her was a year ago.` },
      { t: 'check', q: 'It’s been three months since I ___ a game.', ru: 'Я уже три месяца не проходил ни одной игры.', o: ['haven’t finished', 'finished', 'have finished'], a: 1,
        why: 'После since — точка в прошлом → вторая форма, без отрицания.' },
      { t: 'check', q: 'How long is it since you ___ your parents?', ru: 'Сколько прошло с тех пор, как ты в последний раз навещал родителей?', o: ['have visited', 'last visited', 'haven’t visited'], a: 1,
        why: 'После since — момент в прошлом → last visited.' },
      { t: 'idea', text: `Итог урока: процесс и следы — have been doing; результат, штуки, состояния — have done; When? — did; It’s been + срок + since + вторая форма.`,
        rows: [['How long / следы', 'I’ve been working all day.'], ['How many / готово', 'I’ve written five emails.'], ['давно не', 'It’s been ages since we played.']] }
    ]}
  ];
})();
