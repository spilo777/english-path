// Грамматика по шагам для юнита a1-1 (am / is / are): пошаговый разговор вместо справочника.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-1'); if (!u) return;
  u.walk = [
    // ───────── 1. am / is / are ─────────
    { title: 'Слово, которого нет в русском', steps: [
      { t: 'idea', text: `Хотите сказать «Я дизайнер». По-русски это два слова. По-английски — три: между «я» и «дизайнер» обязательно стоит маленькое слово <b>am</b>.`,
        lit: [['I', 'я'], ['am', '(есть)'], ['a designer', 'дизайнер']],
        ex: [['I am a designer.', 'Я дизайнер.'], ['I am from Moscow.', 'Я из Москвы.'], ['I am tired.', 'Я устал.']] },
      { t: 'idea', text: `Что это за слово? В старом русском говорили «я есмь дизайнер». Потом «есмь» пропало, а в английском осталось — это <b>am</b>, и без него предложение сломано.`,
        bad: 'I designer.', good: 'I <b>am</b> a designer.',
        tip: `Представьте, что в русском на этом месте стоит невидимое «есть»: Я <i>есть</i> дизайнер.` },
      { t: 'check', q: 'Скажите: «Я из Казани»', o: ['I from Kazan.', 'I am from Kazan.', 'Am I from Kazan.'], a: 1, why: 'После I всегда идёт am. Без него нельзя.' },
      { t: 'idea', text: `У этого слова три вида — смотря кто говорит. Для «я» — <b>am</b>. Для одного человека или предмета (он, она, оно, Том, телефон) — <b>is</b>. Для всех остальных (ты, вы, мы, они) — <b>are</b>.`,
        rows: [['I', 'am', 'I am tired.'], ['he / she / it, Tom', 'is', 'Tom is tired.'], ['you / we / they', 'are', 'We are tired.']] },
      { t: 'check', q: 'Anna ___ a designer.', ru: 'Анна дизайнер.', o: ['am', 'is', 'are'], a: 1, why: 'Анна — одна, она → is.' },
      { t: 'check', q: 'My friends ___ here.', ru: 'Мои друзья здесь.', o: ['am', 'is', 'are'], a: 2, why: 'Друзья — их много (они) → are.' },
      { t: 'idea', text: `Итог: по-английски нельзя «Я дизайнер» — только «Я <b>am</b> дизайнер». Кто говорит → какое слово:`,
        rows: [['я', 'am'], ['один (он, она, оно)', 'is'], ['много и «ты / вы»', 'are']] }
    ]},

    // ───────── 2. is или are: один или много ─────────
    { title: 'Один или много: is или are', steps: [
      { t: 'idea', text: `Самое частое место сомнений — <b>is</b> или <b>are</b>. Правило одно: считаем, о скольких идёт речь. Один человек или предмет — <b>is</b>. Не важно, это «он», имя или «мой друг».`,
        ex: [['Tom is at work.', 'Том на работе.'], ['My friend is a teacher.', 'Мой друг учитель.'], ['The game is good.', 'Игра хорошая.']] },
      { t: 'check', q: 'Kate ___ my friend.', ru: 'Кейт моя подруга.', o: ['am', 'is', 'are'], a: 1, why: 'Кейт — одна (она) → is.' },
      { t: 'idea', text: `Двое и больше — <b>are</b>. «Том и Анна» — это «они», а «Том и я» — это «мы»: в обоих случаях <b>are</b>.`,
        lit: [['Tom and I', 'Том и я (= мы)'], ['are', '(есть)'], ['friends', 'друзья']],
        bad: 'Tom and I am friends.', good: 'Tom and I <b>are</b> friends.' },
      { t: 'check', q: 'Tom and Anna ___ at home.', ru: 'Том и Анна дома.', o: ['am', 'is', 'are'], a: 2, why: 'Том и Анна — двое (они) → are.' },
      { t: 'idea', text: `С <b>you</b> русский мешает: это и «ты», и «вы». Слово после него всегда <b>are</b> — даже если вы говорите с одним человеком.`,
        ex: [['You are my friend.', 'Ты мой друг.'], ['You are late, Tom!', 'Ты опоздал, Том!']],
        bad: 'You is my friend.', good: 'You <b>are</b> my friend.' },
      { t: 'check', q: 'Скажите Тому: «Ты хороший дизайнер»', o: ['You is a good designer.', 'You are a good designer.', 'You am a good designer.'], a: 1, why: 'you → всегда are, даже к одному человеку.' },
      { t: 'idea', text: `Итог: считаем, сколько людей или предметов. Один → <b>is</b>, двое и больше → <b>are</b>, «ты / вы» → всегда <b>are</b>.`,
        rows: [['Tom, my friend, the game', 'is'], ['Tom and Anna, my friends, Tom and I', 'are'], ['you', 'are']] }
    ]},

    // ───────── 3. Короткие формы ─────────
    { title: 'Коротко, как говорят в жизни', steps: [
      { t: 'idea', text: `В разговоре и в чате «I am» почти всегда сжимают в <b>I’m</b>. Букву «a» выкинули, а на её месте поставили значок ’. Смысл тот же.`,
        ex: [['I’m Anna.', 'Я Анна.'], ['I’m tired.', 'Я устал.'], ['I’m from Kazan.', 'Я из Казани.']],
        tip: `Значок ’ (апостроф) — это след от пропавшей буквы: I am → I’m.` },
      { t: 'idea', text: `Так же сжимают <b>is</b> и <b>are</b>: is → <b>’s</b>, are → <b>’re</b>. Так короче говорить и печатать.`,
        rows: [['he is / she is / it is', 'he’s / she’s / it’s'], ['you are / we are / they are', 'you’re / we’re / they’re'], ['Tom is', 'Tom’s']],
        ex: [['She’s at home.', 'Она дома.'], ['It’s late.', 'Уже поздно.'], ['We’re friends.', 'Мы друзья.']] },
      { t: 'check', q: 'Коротко: «we are»', ru: 'мы (есть)', o: ['we’s', 'we’re', 'wer'], a: 1, why: 'are → ’re, поэтому we’re.' },
      { t: 'check', q: 'Коротко: «she is»', ru: 'она (есть)', o: ['she’s', 'she’re', 'shes'], a: 0, why: 'is → ’s, поэтому she’s. Значок ’ обязателен.' },
      { t: 'check', q: 'Скажите другу в чате: «Я голоден»', o: ['I hungry.', 'I’m hungry.', 'Im hungry.'], a: 1, why: 'I am → I’m. Без ’m фраза сломана, без значка ’ — ошибка на письме.' },
      { t: 'idea', text: `Итог: полная форма и короткая — одно и то же. В чате и в разговоре — коротко, в официальном письме — полностью.`,
        rows: [['I am', 'I’m'], ['he / she / it is', 'he’s / she’s / it’s'], ['you / we / they are', 'you’re / we’re / they’re']] }
    ]},

    // ───────── 4. Отрицание ─────────
    { title: 'Как сказать «не»', steps: [
      { t: 'idea', text: `Хотите сказать «Я не устал». Слово «не» по-английски — <b>not</b>. Ставим его сразу <b>после</b> am / is / are, а не перед словом, как в русском.`,
        lit: [['I', 'я'], ['am', '(есть)'], ['not', 'не'], ['tired', 'уставший']],
        ex: [['I am not tired.', 'Я не устал.'], ['She is not at home.', 'Она не дома.'], ['We are not late.', 'Мы не опоздали.']] },
      { t: 'check', q: 'Скажите: «Он не дизайнер»', o: ['He not a designer.', 'He is not a designer.', 'He is a designer not.'], a: 1, why: 'not стоит сразу после is. Без is предложения не бывает.' },
      { t: 'idea', text: `В разговоре is not сжимают в <b>isn’t</b>, а are not — в <b>aren’t</b>. Значок ’ снова показывает пропавшую букву «o».`,
        ex: [['He isn’t a teacher.', 'Он не учитель.'], ['They aren’t at work.', 'Они не на работе.']] },
      { t: 'idea', text: `Только с <b>I</b> так сжать нельзя: слова «amn’t» нет. Говорят <b>I’m not</b>.`,
        bad: 'I amn’t hungry.', good: 'I<b>’m not</b> hungry.' },
      { t: 'check', q: 'They ___ at home. They are at work.', ru: 'Они не дома. Они на работе.', o: ['isn’t', 'aren’t', 'amn’t'], a: 1, why: 'they → are → are not = aren’t.' },
      { t: 'check', q: 'Скажите: «Я не из Лондона»', o: ['I amn’t from London.', 'I’m not from London.', 'I not from London.'], a: 1, why: 'Для I есть только I’m not.' },
      { t: 'idea', text: `Итог: «не» = <b>not</b> сразу после am / is / are. Вопросы («Ты устал?») — в следующем уроке.`,
        rows: [['I', 'am not', 'I’m not'], ['he / she / it', 'is not', 'isn’t'], ['you / we / they', 'are not', 'aren’t']] }
    ]},

    // ───────── 5. it ─────────
    { title: 'it — для предметов', steps: [
      { t: 'idea', text: `По-русски кофе — «он», игра — «она». По-английски у предметов нет «он» и «она»: про любую вещь говорят <b>it</b>. И после it всегда <b>is</b>.`,
        ex: [['The game? It is good.', 'Игра? Она хорошая.'], ['The coffee? It’s good.', 'Кофе? Он хороший.']],
        bad: 'The game? She is good.', good: 'The game? <b>It</b> is good.' },
      { t: 'check', q: 'Про чай: «Он хороший»', o: ['He is good.', 'It is good.', 'She is good.'], a: 1, why: 'Чай — предмет, а для предметов только it.' },
      { t: 'idea', text: `Ещё <b>it</b> ставят, когда говорят о времени: «Поздно» по-русски — одно слово, по-английски нужны все три.`,
        lit: [['It', '(оно)'], ['is', '(есть)'], ['late', 'поздно']],
        ex: [['It’s late.', 'Поздно.'], ['It is late, Tom!', 'Уже поздно, Том!']] },
      { t: 'idea', text: `Итог: вещь, игра, кофе, чай и время — всегда <b>it</b>, и с ним всегда <b>is</b>.`,
        rows: [['the game', 'It is good.'], ['the coffee', 'It’s good.'], ['время', 'It’s late.']] }
    ]},

    // ───────── 6. a / an ─────────
    { title: 'a / an перед профессией', steps: [
      { t: 'idea', text: `Хотите сказать «Она учитель». Когда говорим, <b>кто</b> человек по профессии, перед словом ставим маленькое <b>a</b>. На русский оно не переводится.`,
        lit: [['She', 'она'], ['is', '(есть)'], ['a', '(один)'], ['teacher', 'учитель']],
        ex: [['I am a student.', 'Я студент.'], ['He is a designer.', 'Он дизайнер.'], ['Tom is a good friend.', 'Том хороший друг.']],
        bad: 'She is teacher.', good: 'She is <b>a</b> teacher.' },
      { t: 'check', q: 'Скажите: «Макс дизайнер»', o: ['Max is designer.', 'Max is a designer.', 'Max a designer.'], a: 1, why: 'Профессия → нужно a. И is пропускать нельзя.' },
      { t: 'idea', text: `Если следующее слово начинается с гласного звука (a, e, i, o, u), вместо a говорят <b>an</b> — так проще произнести. Смотрим на слово сразу после, а не на профессию.`,
        rows: [['an artist', 'artist начинается с «а»'], ['a good artist', 'good начинается с «g»'], ['a student', 'student начинается с «s»']],
        tip: `«a artist» говорить неудобно — два «а» подряд. Поэтому между ними встаёт n: an artist.` },
      { t: 'check', q: 'Anna is ___ artist.', ru: 'Анна художница.', o: ['a', 'an', '—'], a: 1, why: 'artist начинается с гласного звука → an.' },
      { t: 'idea', text: `А вот если после am / is / are идёт <b>какой</b> (уставший, счастливый) или <b>где</b> (дома, на работе) — никакого a не нужно.`,
        bad: 'I am a tired.', good: 'I am tired.',
        ex: [['We are happy.', 'Мы счастливы.'], ['She is at home.', 'Она дома.']] },
      { t: 'check', q: 'We are ___ tired.', ru: 'Мы устали.', o: ['a', 'an', '—'], a: 2, why: 'tired — это «какой», а не «кто». a не нужно.' },
      { t: 'idea', opt: true, text: `Когда людей много, <b>a</b> тоже не ставят — оно значит «один». Вместо этого у слова появляется хвостик -s.`,
        ex: [['They are students.', 'Они студенты.'], ['Sam and Lily are designers.', 'Сэм и Лили дизайнеры.']] },
      { t: 'idea', text: `Итог: один человек + профессия → <b>a</b> (или <b>an</b>, если дальше гласный звук). «Какой» и «где» — без a.`,
        rows: [['кто (профессия)', 'a designer, an artist'], ['какой', 'tired, happy'], ['где', 'at home, at work']] }
    ]},

    // ───────── 7. Живые фразы ─────────
    { title: 'Как дела, откуда ты, сколько лет', steps: [
      { t: 'idea', text: `Вопрос «Как дела?» — это <b>How are you?</b>. Дословно «как ты есть?». Ответ тоже с am: <b>I’m fine, thanks</b>.`,
        lit: [['How', 'как'], ['are', '(есть)'], ['you', 'ты']],
        ex: [['How are you? — I’m fine, thanks.', 'Как дела? — Хорошо, спасибо.'], ['And you? — I’m fine too.', 'А ты? — Тоже хорошо.']] },
      { t: 'check', q: 'How are you? — ___', ru: 'Как дела? — …', o: ['I’m fine, thanks.', 'I fine, thanks.', 'Fine am I.'], a: 0, why: 'Отвечаем с I’m: I’m fine, thanks.' },
      { t: 'idea', text: `«Мне двадцать» по-русски — без глагола и с «мне». По-английски говорят «я есть двадцать»: <b>I’m twenty</b>. Никаких «лет» и «имею».`,
        lit: [['I', 'я'], ['am', '(есть)'], ['twenty', 'двадцать']],
        bad: 'I have twenty years.', good: 'I’m twenty.',
        ex: [['I’m nineteen.', 'Мне девятнадцать.'], ['Anna is twenty.', 'Анне двадцать.']] },
      { t: 'check', q: 'Скажите: «Мне восемнадцать»', o: ['I have eighteen.', 'I’m eighteen.', 'Me eighteen.'], a: 1, why: 'Возраст — через am / is / are: I’m + число.' },
      { t: 'idea', text: `«Я опоздал» по-английски — не действие, а состояние: <b>I’m late</b>, дословно «я поздний». Обычно добавляют sorry — без него звучит резко.`,
        ex: [['Sorry, I’m late!', 'Извините, я опоздал!'], ['Tom is late.', 'Том опаздывает.']],
        tip: `Так же I’m hungry — «я голодный», а не «я хочу есть». Состояние → am / is / are.` },
      { t: 'idea', text: `Итог: как дела, откуда, сколько лет, опоздал — всё через am / is / are.`,
        rows: [['Как дела? — Хорошо.', 'How are you? — I’m fine.'], ['Я из Казани.', 'I’m from Kazan.'], ['Мне двадцать.', 'I’m twenty.']] }
    ]}
  ];
})();
