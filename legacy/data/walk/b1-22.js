// Грамматика по шагам для юнита b1-22: bored / boring (-ed — что я чувствую, -ing — какое оно) и предлоги после -ed; порядок нескольких слов-признаков и the first two; прилагательное или наречие глубже (look / get / seem, наречие перед признаком и перед третьей формой, friendly); well-known, lately, hardly; so и such; too / enough глубже (for … to, без it, too vs not enough); quite, pretty, rather, fairly.
(function () {
  const u = COURSE.units.find((x) => x.id === 'b1-22'); if (!u) return;
  u.walk = [
    // ───────────── 1. bored / boring ─────────────
    { title: 'I’m bored ≠ I’m boring', steps: [
      { t: 'idea', text: `Хотите сказать «Мне скучно». Рука тянется к <b>boring</b> — ведь «скучный». Но «мне скучно» — это про то, что вы чувствуете, и по-английски это <b>I’m bored</b>.`,
        lit: [['I’m', 'я (есть)'], ['bored', 'скучающий']],
        ex: [['I’m bored.', 'Мне скучно.'], ['The series is boring.', 'Сериал скучный.'], ['I’m bored because my job is boring.', 'Мне скучно, потому что работа скучная.']] },
      { t: 'idea', text: `У многих слов-признаков две формы. <b>-ing</b> — то, что вызывает чувство (фильм, игра, работа). <b>-ed</b> — тот, кто это чувство испытывает (я, вы, друзья).`,
        rows: [['-ing — какое оно', 'The game is exciting.', 'Игра захватывающая.'], ['-ed — что я чувствую', 'I’m excited.', 'Я в предвкушении.']],
        ex: [['The ending was disappointing. I was disappointed.', 'Концовка разочаровала. Я был разочарован.'], ['The menu is so confusing. I’m confused.', 'Меню такое запутанное. Я сбит с толку.'], ['That sound is annoying. I’m annoyed.', 'Этот звук раздражает. Я раздражён.']],
        tip: `-ing — «источник» (игра на экране), -ed — «получатель» (тот, кто сидит перед экраном). Так же: interesting / interested, exhausting / exhausted, terrifying / terrified, amazing / amazed, relaxing / relaxed, embarrassing / embarrassed, satisfying / satisfied.` },
      { t: 'check', q: 'The tutorial was so ___ that I closed the game.', ru: 'Обучение было таким запутанным, что я закрыл игру.', o: ['confused', 'confusing', 'confuse'], a: 1,
        why: 'Обучение вызывает путаницу → -ing.' },
      { t: 'idea', text: `Главная ловушка. <b>-ing</b> про человека значит, что он вызывает это чувство у других. I’m bored — мне скучно. I’m boring — я скучный, зануда!`,
        ex: [['Max is so boring. He only talks about his car.', 'Макс такой зануда. Говорит только о своей машине.'], ['Did you meet anyone interesting at the party?', 'Встретил кого-нибудь интересного на вечеринке?']],
        bad: 'I’m so boring at this meeting.', good: 'I’m so <b>bored</b> at this meeting.' },
      { t: 'check', q: 'Скажите: «Мне скучно. Давай во что-нибудь поиграем»', o: ['I’m boring. Let’s play something.', 'I’m bored. Let’s play something.', 'I bored. Let’s play something.'], a: 1,
        why: 'Мне скучно — моё чувство → I’m bored. I’m boring — «я зануда».' },
      { t: 'idea', text: `После формы на -ed часто стоит своё маленькое слово: <b>interested in, excited about, bored with, disappointed with, satisfied with, tired of</b> (надоело).`,
        lit: [['I’m', 'я (есть)'], ['interested', 'заинтересованный'], ['in', 'в'], ['UX design', 'UX-дизайне']],
        ex: [['Are you interested in joining our team?', 'Вам интересно присоединиться к нашей команде?'], ['I’m so excited about the new season.', 'Я так жду новый сезон.'], ['I’m tired of this meta.', 'Мне надоела эта мета.']],
        bad: 'I’m interesting in UX design.', good: 'I’m <b>interested in</b> UX design.' },
      { t: 'check', q: 'Скажите: «Меня интересует моушн-дизайн»', o: ['I’m interesting in motion design.', 'I’m interested in motion design.', 'I’m interested motion design.'], a: 1,
        why: 'Моё чувство → interested, и после него in.' },
      { t: 'idea', text: `Итог: -ing — какое оно (вызывает чувство), -ed — что я чувствую. Про себя почти всегда -ed.`,
        rows: [['The film is boring.', 'Фильм скучный.'], ['I’m bored.', 'Мне скучно.'], ['I’m interested in…', 'Меня интересует…']] }
    ]},

    // ───────────── 2. Порядок слов-признаков ─────────────
    { title: 'a nice new wooden desk — порядок признаков', steps: [
      { t: 'idea', text: `Хотите сказать «красивый старый стол». По-русски можно и «старый красивый». В английском, когда признаков два и больше, первым идёт <b>мнение</b> (nice, beautiful), потом — факты.`,
        lit: [['a', '—'], ['beautiful', 'красивый'], ['old', 'старый'], ['table', 'стол']],
        ex: [['a nice new flat', 'хорошая новая квартира'], ['a beautiful old table', 'красивый старый стол'], ['a comfortable black gaming chair', 'удобное чёрное игровое кресло']] },
      { t: 'idea', text: `Факты тоже идут по очереди: <b>размер → возраст → форма → цвет → откуда → из чего</b> + предмет. Чем ближе признак к сути (материал, «для чего»), тем ближе он к предмету.`,
        ex: [['a small black plastic mouse', 'маленькая чёрная пластиковая мышка'], ['an old Japanese film', 'старый японский фильм'], ['a beautiful large round wooden table', 'красивый большой круглый деревянный стол'], ['a long narrow street', 'длинная узкая улица']],
        tip: `and ставят только между двумя цветами: a black <b>and</b> white film. Остальные признаки — без and: a long black coat, не a long and black coat.` },
      { t: 'check', q: 'She has ___.', ru: 'У неё маленькая чёрная кожаная сумка (leather — кожаный).', o: ['a leather small black bag', 'a small black leather bag', 'a black small leather bag'], a: 1,
        why: 'Размер → цвет → материал.' },
      { t: 'idea', text: `Хотите сказать «первые две серии». По-русски число идёт вторым — и по-английски тоже: сначала <b>first / next / last</b>, потом число.`,
        lit: [['the', '—'], ['first', 'первые'], ['two', 'две'], ['episodes', 'серии']],
        ex: [['I didn’t enjoy the first two episodes.', 'Мне не понравились первые две серии.'], ['I’ll be busy for the next few weeks.', 'Я буду занят следующие несколько недель.']],
        bad: 'the two first days', good: 'the <b>first two</b> days' },
      { t: 'check', q: 'The ___ levels are easy.', ru: 'Первые два уровня — лёгкие.', o: ['two first', 'first two', 'firsts two'], a: 1,
        why: 'Сначала first, потом число: the first two.' },
      { t: 'idea', text: `Итог: мнение — первым, материал и «для чего» — вплотную к предмету.`,
        rows: [['мнение → размер → возраст', 'a nice big old house'], ['→ цвет → материал', 'a small black leather bag'], ['first / next / last + число', 'the first two days']] }
    ]},

    // ───────────── 3. Прилагательное или наречие ─────────────
    { title: 'Какой? или как? — глубже', steps: [
      { t: 'idea', text: `Вы уже знаете (A1): какой? — quick, как? — quickly; после look, feel, sound, smell, taste — «какой?». Так же после <b>be, get, become</b> (становиться) и <b>seem</b> (казаться).`,
        ex: [['She speaks perfect English. / She speaks English perfectly.', 'Она говорит на прекрасном английском. / Она прекрасно говорит по-английски.'], ['The film got more and more boring.', 'Фильм становился всё скучнее.'], ['This coffee tastes strange.', 'У этого кофе странный вкус.']],
        tip: `Но если look = «смотреть», это уже действие → -ly: Look at the screen <b>carefully</b>. — Внимательно посмотри на экран.` },
      { t: 'check', q: 'This pizza smells ___.', ru: 'Эта пицца потрясающе пахнет.', o: ['amazing', 'amazingly', 'amazed'], a: 0,
        why: 'smell = «пахнет какой» → слово-признак без -ly.' },
      { t: 'idea', text: `Слово на -ly ставят и перед другим признаком — оно усиливает его, как русское «на удивление лёгкий».`,
        lit: [['The exam', 'экзамен'], ['was', 'был'], ['surprisingly', 'на удивление'], ['easy', 'лёгким']],
        ex: [['I’m terribly sorry.', 'Мне ужасно жаль.'], ['It’s a reasonably cheap café.', 'Это вполне недорогое кафе.'], ['She learns incredibly quickly.', 'Она учится невероятно быстро.']] },
      { t: 'idea', text: `И перед третьей формой (organised, designed, written): как сделано? → -ly. Здесь русское «плохо организован» так и тянет сказать bad.`,
        ex: [['badly organised', 'плохо организован'], ['beautifully drawn', 'красиво нарисован'], ['seriously injured', 'серьёзно ранен']],
        bad: 'The meetup was bad organised.', good: 'The meetup was <b>badly</b> organised.' },
      { t: 'check', q: 'The new level is ___ designed.', ru: 'Новый уровень красиво сделан.', o: ['beautiful', 'beautifully', 'beauty'], a: 1,
        why: 'Перед третьей формой (designed) — слово на -ly.' },
      { t: 'idea', opt: true, text: `Ловушка: <b>friendly, lonely, lovely, silly, elderly</b> (пожилой), <b>ugly</b> кончаются на -ly, но это слова «какой?». Слова «как?» от них нет — говорят <b>in a … way</b>.`,
        ex: [['She answered in a friendly way.', 'Она ответила дружелюбно.'], ['He felt lonely in the new city.', 'Ему было одиноко в новом городе.']] },
      { t: 'idea', text: `Итог: какой? — после be / look / seem; как? — у действия, перед другим признаком и перед третьей формой.`,
        rows: [['You look tired.', 'после look — «какой?»'], ['surprisingly easy', '-ly перед признаком'], ['badly organised', '-ly перед третьей формой']] }
    ]},

    // ───────────── 4. well-known, lately, hardly ─────────────
    { title: 'well-known, lately, hardly', steps: [
      { t: 'idea', text: `Вы уже знаете: good → well, а hard, fast, late не меняются. Новое: <b>well</b> + третья форма через дефис — готовое слово «какой?».`,
        lit: [['a', '—'], ['well-known', 'хорошо известный'], ['artist', 'художник']],
        ex: [['He’s a well-known game designer.', 'Он известный геймдизайнер.'], ['It’s a well-paid job, but it’s boring.', 'Работа хорошо оплачивается, но она скучная.'], ['The kids were well-behaved.', 'Дети хорошо себя вели.']] },
      { t: 'idea', text: `<b>lately</b> — не «поздно», а «в последнее время» (как recently). «Поздно» — по-прежнему <b>late</b>.`,
        ex: [['Have you played anything good lately?', 'Играл во что-нибудь хорошее в последнее время?'], ['I got home late.', 'Я поздно пришёл домой.']] },
      { t: 'check', q: 'Have you seen Kate ___?', ru: 'Ты видел Кейт в последнее время?', o: ['late', 'lately', 'later'], a: 1,
        why: '«В последнее время» → lately.' },
      { t: 'idea', text: `<b>hardly</b> — не «усердно», а «почти не». Ставится перед словом-действием, а после can / could.`,
        rows: [['He tried hard.', 'Он очень старался.'], ['He hardly tried.', 'Он почти не старался.'], ['I can hardly hear you.', 'Я тебя почти не слышу.']] },
      { t: 'idea', text: `hardly уже значит «не» — второе not не нужно. Удобно с any / anyone / ever: «почти нисколько, почти никто, почти никогда».`,
        ex: [['There’s hardly any milk left.', 'Молока почти не осталось.'], ['Hardly anyone came to the stream.', 'На стрим почти никто не пришёл.'], ['I hardly ever go out on weekdays.', 'Я почти никогда не выхожу в будни.']],
        bad: 'I hardly didn’t sleep.', good: 'I <b>hardly</b> slept.',
        tip: `It’s hardly surprising — «Неудивительно» (hardly = «уж точно не»).` },
      { t: 'check', q: 'My neighbours were so loud that I could ___ sleep.', ru: 'Соседи так шумели, что я почти не мог спать.', o: ['hard', 'hardly', 'not hardly'], a: 1,
        why: '«Почти не» → hardly после could, без второго not.' },
      { t: 'idea', text: `Итог: три слова, которые выглядят знакомо, но значат своё.`,
        rows: [['well-known / well-paid', 'известный / хорошо оплачиваемый'], ['lately', 'в последнее время'], ['hardly', 'почти не (без второго not)']] }
    ]},

    // ───────────── 5. so и such ─────────────
    { title: 'so и such — «такой», «так»', steps: [
      { t: 'idea', text: `Хотите сказать «Это была такая глупая история». «Такой / так» — это <b>so</b> или <b>such</b>. Есть слово-предмет (story, game, people) → such. Нет → so.`,
        rows: [['The story was so stupid.', 'It was such a stupid story.'], ['They are so nice.', 'They are such nice people.'], ['It happened so quickly.', 'You’re such an optimist!']],
        bad: 'It was so good game.', good: 'It was <b>such a</b> good game.',
        tip: `Уберите признак. Остался предмет (such a … game) — нужен such. Ничего не осталось (so …!) — so. И порядок: <b>such a</b>, не a such.` },
      { t: 'check', q: 'It was ___ boring film that I left.', ru: 'Это был такой скучный фильм, что я ушёл.', o: ['so', 'such a', 'such'], a: 1,
        why: 'Есть предмет film (один) → such a.' },
      { t: 'idea', text: `«Так…, что» — <b>so / such … (that)</b>. В разговоре that часто пропускают.`,
        lit: [['I was', 'я был'], ['so', 'так'], ['tired', 'уставший'], ['(that)', '(что)'], ['I fell asleep', 'я уснул']],
        ex: [['I was so tired I fell asleep on the sofa.', 'Я так устал, что уснул на диване.'], ['It was such nice weather that we worked outside.', 'Была такая хорошая погода, что мы работали на улице.'], ['How can you say such a thing?', 'Как ты можешь такое говорить?']] },
      { t: 'check', q: 'The level was ___ hard that I gave up.', ru: 'Уровень был таким сложным, что я сдался.', o: ['so', 'such', 'such a'], a: 0,
        why: 'Нет предмета, только hard → so.' },
      { t: 'idea', text: `Исключение: с <b>much / many</b> всегда so, хотя дальше идёт предмет. А «так долго» — <b>so long</b> = <b>such a long time</b>.`,
        ex: [['Sorry I’m late — there was so much traffic.', 'Извини за опоздание — были такие пробки.'], ['I haven’t seen her for so long.', 'Я не видел её так давно.'], ['There’s no such word.', 'Такого слова нет.']] },
      { t: 'check', q: 'There were ___ people that we couldn’t get in.', ru: 'Было так много людей, что мы не смогли войти.', o: ['so many', 'such many', 'so much'], a: 0,
        why: 'С many — so; людей можно посчитать → many.' },
      { t: 'idea', text: `Итог: so — перед признаком, such (a) — перед признаком с предметом.`,
        rows: [['so + признак', 'so boring, so quickly'], ['such (a) + признак + предмет', 'such a boring film'], ['so much / so many', 'so many people']] }
    ]},

    // ───────────── 6. too и enough ─────────────
    { title: 'too heavy to carry — too и enough глубже', steps: [
      { t: 'idea', text: `Вы уже знаете (A2): too loud, fast enough, enough time — и «для кого / чтобы»: <b>for</b> кто + <b>to</b> + действие. Этим удобно говорить о ком-то конкретном.`,
        lit: [['The text', 'текст'], ['is', '(есть)'], ['too small', 'слишком мелкий'], ['for me', 'для меня'], ['to read', 'чтобы читать']],
        ex: [['It’s too far to walk.', 'Слишком далеко, чтобы идти пешком.'], ['Does he have enough experience for the job?', 'У него достаточно опыта для этой работы?'], ['The street is wide enough for two cars to pass.', 'Улица достаточно широкая, чтобы проехали две машины.']] },
      { t: 'check', q: 'The text is too small ___ read.', ru: 'Текст слишком мелкий, я не могу его прочитать.', o: ['for me to', 'for me', 'me to'], a: 0,
        why: 'Для кого — for me, что сделать — to read.' },
      { t: 'idea', text: `Новое: «его / её» в конце не повторяем — предмет уже назван в начале. Маленькое слово вроде on при этом остаётся.`,
        ex: [['The soup was too hot to eat.', 'Суп был слишком горячим, чтобы есть.'], ['This chair isn’t strong enough to stand on.', 'Этот стул недостаточно крепкий, чтобы на него встать.']],
        bad: 'The wallet was too big to put it in my pocket.', good: 'The wallet was too big <b>to put</b> in my pocket.',
        tip: `А после so … that — новое полное предложение, там it нужен: The soup was so hot that we couldn’t eat <b>it</b>.` },
      { t: 'check', q: 'These boxes are too heavy ___.', ru: 'Эти коробки слишком тяжёлые, их не унести.', o: ['to carry', 'to carry them', 'for carry'], a: 0,
        why: 'Коробки уже названы в начале → просто to carry.' },
      { t: 'idea', text: `too и not … enough — одна проблема с двух сторон: «больше, чем надо» и «меньше, чем надо». enough может стоять и один.`,
        rows: [['You work too hard.', 'You don’t work hard enough.'], ['There are too many people.', 'There aren’t enough chairs.'], ['There’s too much furniture.', 'There isn’t enough space.']],
        ex: [['We don’t need more money. We have enough.', 'Нам не нужно больше денег. Нам хватает.']] },
      { t: 'check', q: 'You don’t work ___.', ru: 'Ты работаешь недостаточно усердно.', o: ['hard enough', 'enough hard', 'too hard'], a: 0,
        why: 'Признак + enough: hard enough.' },
      { t: 'idea', text: `Итог: too / enough + for кто + to действие, а «его» в конце не нужен.`,
        rows: [['too small for me to read', 'для кого и что сделать'], ['too heavy to carry', 'без it в конце'], ['too hard ↔ not hard enough', 'больше / меньше, чем нужно']] }
    ]},

    // ───────────── 7. quite, pretty, rather, fairly ─────────────
    { title: 'quite, pretty, rather, fairly — «довольно»', steps: [
      { t: 'idea', text: `Хотите сказать «довольно хорошая игра». Есть четыре слова, все — «довольно», но разной силы. Это шкала между a bit (немного) и very (очень).`,
        rows: [['fairly', 'нормально, но могло быть лучше'], ['quite ≈ pretty', 'довольно, заметно больше «немного»; pretty — разговорное'], ['rather', 'довольно, часто о неприятном']],
        ex: [['My room is fairly big, but I’d like a bigger one.', 'Комната неплохая по размеру, но я хочу побольше.'], ['She’s quite famous.', 'Она довольно известная.'], ['The new patch is pretty good.', 'Новый патч довольно хороший.']] },
      { t: 'idea', text: `<b>rather</b> чаще говорят о неприятном. А о хорошем rather звучит как приятное удивление.`,
        ex: [['It’s rather cold today.', 'Сегодня довольно холодно.'], ['These dumplings are rather good! Where did you get them?', 'А пельмени-то неплохие! Где ты их взял?']] },
      { t: 'check', q: 'The hotel was ___ nice, but nothing special.', ru: 'Отель был неплохой, но ничего особенного.', o: ['fairly', 'extremely', 'such'], a: 0,
        why: 'fairly — «нормально, но могло быть лучше».' },
      { t: 'idea', text: `Место a: <b>quite a</b> + признак, но <b>a pretty / a fairly</b>. И только quite бывает с a + предмет, с a lot of и с like.`,
        lit: [['We live in', 'мы живём в'], ['quite', 'довольно'], ['an', '—'], ['old house', 'старом доме']],
        ex: [['She has a pretty good job.', 'У неё довольно хорошая работа.'], ['It was quite a surprise.', 'Это был прямо сюрприз.'], ['I quite like horror games.', 'Мне, в общем, нравятся хорроры.']],
        bad: 'We live in a quite old house.', good: 'We live in <b>quite an</b> old house.' },
      { t: 'check', q: 'It was ___ day, so we went to the beach.', ru: 'Был довольно хороший день, и мы пошли на пляж.', o: ['a quite nice', 'quite a nice', 'quite nice'], a: 1,
        why: 'quite стоит перед a: quite a nice day.' },
      { t: 'idea', text: `У quite есть второе значение — «совсем, полностью»: с sure, right, true, different и с agree. А <b>not quite</b> — «не совсем».`,
        ex: [['Are you sure? — Yes, quite sure.', 'Ты уверен? — Да, совершенно.'], ['I quite agree with you.', 'Полностью с тобой согласен.'], ['Are you ready? — Not quite.', 'Ты готов? — Почти.']],
        tip: `Смысл зависит от слова рядом: quite interesting — довольно интересный, quite true — совершенно верно. В американском английском quite часто звучит почти как very.` },
      { t: 'check', q: 'I don’t ___ understand.', ru: 'Я не совсем понимаю.', o: ['quite', 'pretty', 'fairly'], a: 0,
        why: 'not quite = не совсем; с pretty и fairly так не говорят.' },
      { t: 'idea', text: `Итог: fairly слабее, quite ≈ pretty ≈ rather сильнее, и у quite своё место перед a.`,
        rows: [['fairly < quite ≈ pretty ≈ rather', 'от «нормально» к «довольно»'], ['quite a nice day', 'но a pretty nice day'], ['quite sure / not quite', 'совершенно / не совсем']] }
    ]}
  ];
})();
