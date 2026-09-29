// Грамматика по шагам для юнита b1-16: -ing смотрит назад, to — вперёд; remember / forget; regret; stop и go on (start, continue, bother — без разницы); try to и try -ing; need to и needs -ing, help, can’t help; like doing / like to do, enjoy, would like to, would like to have done; prefer … to …, would prefer to, would rather, I’d rather you did; типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'b1-16'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: '-ing смотрит назад, to — вперёд', steps: [
      { t: 'idea', text: `Вы уже знаете: после одних слов-действий идёт to (want to), после других -ing (enjoy playing), а после like и start — и так, и так. Теперь самое интересное: слова, у которых от формы <b>меняется смысл</b>.`,
        ex: [['I enjoy playing.', 'Мне нравится играть.'], ['I want to play.', 'Я хочу поиграть.']] },
      { t: 'idea', text: `Хотите сказать «Я помню, как запирал дверь» и «Не забудь запереть дверь». По-русски разницу несут слова «как» и «не забудь». По-английски — только форма: <b>-ing</b> — про то, что уже было, <b>to</b> — про то, что ещё надо сделать.`,
        lit: [['I', 'я'], ['remember', 'помню'], ['locking', '(как) запирал'], ['the door', 'дверь']],
        ex: [['I remember locking the door.', 'Я помню, как запирал дверь.'], ['Remember to lock the door.', 'Не забудь запереть дверь.']],
        tip: `<b>to</b> — как стрелка вперёд: «помни → потом запри». <b>-ing</b> — как фотография: «помню картинку, где я запираю дверь».` },
      { t: 'check', q: 'I clearly remember ___ the door. So why is it open?', ru: 'Я точно помню, как запирал дверь. Почему же она открыта?', o: ['to lock', 'locking', 'lock'], a: 1,
        why: 'Запирал раньше, а сейчас вспоминаю → remember + -ing.' },
      { t: 'idea', text: `Итог: у некоторых слов форма после них решает, о чём речь — о прошлом или о будущем.`,
        rows: [['-ing', 'уже было / уже идёт', 'I remember locking it.'], ['to', 'ещё впереди, цель', 'Remember to lock it.']] }
    ]},

    // ───────────── 2. remember и forget ─────────────
    { title: '«Не забудь сделать» и «помню, как сделал» — remember, forget', steps: [
      { t: 'idea', text: `<b>remember to</b> — не забыть сделать дело, которое впереди. Так говорят в просьбах и напоминаниях.`,
        ex: [['Remember to save your work.', 'Не забудь сохранить работу.'], ['Did you remember to feed the cat?', 'Ты не забыл покормить кота?']] },
      { t: 'idea', text: `<b>remember + -ing</b> — помнить то, что уже было, как картинку. С not: «не помню, чтобы…».`,
        ex: [['I remember saving it.', 'Я помню, как сохранял её.'], ['I don’t remember agreeing to this deadline.', 'Не помню, чтобы я соглашался на этот дедлайн.']] },
      { t: 'check', q: 'Did you remember ___ the file? — Oh no, I forgot!', ru: 'Ты не забыл сохранить файл? — Ой, забыл!', o: ['saving', 'to save', 'save'], a: 1,
        why: 'Дело, которое надо было сделать, а его не сделали → remember + to.' },
      { t: 'idea', text: `С <b>forget</b> то же самое. <b>forgot to</b> — забыл сделать. <b>never forget + -ing</b> — никогда не забуду, как это было.`,
        ex: [['I forgot to call Mum.', 'Я забыл позвонить маме.'], ['I’ll never forget seeing the ocean.', 'Никогда не забуду, как увидел океан.']],
        tip: `forget + -ing почти всегда живёт во фразе I’ll never forget… В остальных случаях «не помню, как…» — I don’t remember + -ing.` },
      { t: 'check', q: 'Sorry, I forgot ___ you back yesterday.', ru: 'Извини, я вчера забыл тебе перезвонить.', o: ['calling', 'to call', 'call'], a: 1,
        why: 'Надо было позвонить, но не позвонил → forget + to.' },
      { t: 'idea', text: `Итог: to — дело впереди, -ing — картинка из прошлого.`,
        rows: [['remember / forget + to', 'Don’t forget to buy bread.'], ['remember + -ing', 'I remember meeting him.'], ['never forget + -ing', 'I’ll never forget seeing it.']] }
    ]},

    // ───────────── 3. regret ─────────────
    { title: '«Жалею, что сделал» — regret', steps: [
      { t: 'idea', text: `Хотите сказать «Жалею, что купил этот стул». <b>regret</b> (сожалеть) смотрит назад — на то, что уже сделано, поэтому <b>regret + -ing</b>. «Жалею, что не…» — regret not + -ing.`,
        lit: [['I', 'я'], ['regret', 'жалею'], ['buying', '(что) купил'], ['this chair', 'этот стул']],
        ex: [['I regret buying this chair.', 'Жалею, что купил этот стул.'], ['Do you regret not going to art school?', 'Жалеешь, что не пошёл в художку?']] },
      { t: 'check', q: 'I regret ___ so rude to her. I’ll say sorry.', ru: 'Жалею, что был так груб с ней. Извинюсь.', o: ['to be', 'being', 'be'], a: 1,
        why: 'Был груб в прошлом и жалею → regret + -ing.' },
      { t: 'idea', opt: true, text: `<b>regret to</b> встречается почти только в официальных письмах: «с сожалением сообщаем». Дальше идут inform, say, tell.`,
        ex: [['We regret to inform you that the tour is cancelled.', 'С сожалением сообщаем, что тур отменён.'], ['We regret to say that the event has been cancelled.', 'К сожалению, мероприятие отменено.']] },
      { t: 'idea', text: `Итог: в жизни о своих поступках — regret + -ing.`,
        rows: [['regret + -ing', 'I regret buying it.'], ['regret not + -ing', 'I regret not going.'], ['regret to inform (официально)', 'We regret to inform you…']] }
    ]},

    // ───────────── 4. stop и go on ─────────────
    { title: '«Бросил» и «остановился, чтобы» — stop, go on', steps: [
      { t: 'idea', text: `<b>stop + -ing</b> — прекратить то, что делал. <b>stop + to</b> — остановиться, <b>чтобы</b> что-то сделать. Здесь to — знакомое «чтобы».`,
        lit: [['We', 'мы'], ['stopped', 'остановились'], ['to buy', 'чтобы купить'], ['some snacks', 'перекус']],
        ex: [['I stopped playing at two a.m.', 'Я перестал играть в два ночи.'], ['We stopped to buy some snacks.', 'Мы остановились, чтобы купить перекус.']] },
      { t: 'check', q: 'On the way home we stopped ___ coffee.', ru: 'По дороге домой мы остановились, чтобы выпить кофе.', o: ['having', 'to have', 'have'], a: 1,
        why: 'Остановились, чтобы… → stop + to. stopped having — «перестали пить кофе».' },
      { t: 'idea', text: `<b>go on</b> (продолжать) устроен похоже. <b>go on + -ing</b> — продолжать то же самое. <b>go on + to</b> — перейти к новому, «а потом стал…».`,
        ex: [['She paused and went on talking.', 'Она сделала паузу и продолжила говорить.'], ['He started as a tester and went on to become a lead designer.', 'Он начинал тестировщиком, а потом стал ведущим дизайнером.']] },
      { t: 'check', q: 'After the break, she went on ___ about the same design.', ru: 'После перерыва она продолжила рассказывать о том же дизайне.', o: ['to talk', 'talking', 'talk'], a: 1,
        why: 'Продолжила то же самое → go on + -ing.' },
      { t: 'idea', text: `А после <b>start, begin, continue, intend</b> (собираться) и <b>bother</b> (утруждать себя) разницы нет: можно и -ing, и to.`,
        ex: [['It started raining. = It started to rain.', 'Пошёл дождь.'], ['Don’t bother calling. = Don’t bother to call.', 'Можешь не звонить.'], ['I intend to finish it tonight.', 'Собираюсь закончить сегодня.']],
        tip: `Два -ing подряд звучат коряво: It’s starting <b>to rain</b>, а не It’s starting raining.` },
      { t: 'idea', text: `Итог: stop и go on меняют смысл, start и continue — нет.`,
        rows: [['stop + -ing / stop + to', 'перестать / остановиться, чтобы'], ['go on + -ing / go on + to', 'продолжать то же / перейти к новому'], ['start, continue, bother', 'без разницы']] }
    ]},

    // ───────────── 5. try ─────────────
    { title: '«Стараться» и «попробовать» — try to, try -ing', steps: [
      { t: 'idea', text: `<b>try to</b> — стараться, прилагать усилие. Получится ли — неизвестно, часто дальше идёт «но не вышло».`,
        ex: [['I tried to stay awake, but I fell asleep.', 'Я старался не уснуть, но уснул.'], ['Please try to be on time.', 'Постарайтесь, пожалуйста, не опаздывать.']] },
      { t: 'check', q: 'Скажите: «Постарайся не опаздывать»', o: ['Try be on time.', 'Try to be on time.', 'Try to being on time.'], a: 1,
        why: 'Усилие, старание → try + to + простая форма.' },
      { t: 'idea', text: `<b>try + -ing</b> — попробовать как эксперимент: «сделай так и посмотри, поможет ли». Так говорит техподдержка.`,
        lit: [['Try', 'попробуй'], ['restarting', '(как вариант) перезапустить'], ['the app', 'приложение']],
        ex: [['Try restarting the app.', 'Попробуй перезапустить приложение.'], ['If you can’t sleep, try reading a paper book.', 'Если не спится, попробуй почитать бумажную книгу.']],
        tip: `С предметом — просто try + что-то: Try this cake! Try the other option.` },
      { t: 'check', q: 'I ___ the logo to the left, but it looked worse, so I moved it back.', ru: 'Я попробовал сдвинуть логотип влево, но стало хуже, и я вернул его назад.', o: ['tried to move', 'tried moving', 'tried move'], a: 1,
        why: 'Сдвинул и посмотрел, что вышло, — эксперимент → try + -ing.' },
      { t: 'idea', text: `Итог: try to — «стараюсь», try -ing — «пробую как вариант».`,
        rows: [['try to + действие', 'I tried to open it, but…'], ['try + -ing', 'Try opening it in another app.']] }
    ]},

    // ───────────── 6. need, help, can’t help ─────────────
    { title: '«Телефон надо зарядить» и «не могу не смеяться» — need, can’t help', steps: [
      { t: 'idea', text: `Вы уже знаете <b>I need to</b> — мне надо сделать. Здесь делает сам человек.`,
        ex: [['I need to charge my phone.', 'Мне надо зарядить телефон.'], ['We need to update the icons.', 'Нам надо обновить иконки.']] },
      { t: 'idea', text: `А если «надо» про вещь — <b>needs + -ing</b>. Телефон сам себя не зарядит: его должен кто-то зарядить. Помните пассив (с предметом что-то делают) из B1-12? needs charging = needs to be charged.`,
        lit: [['My phone', 'мой телефон'], ['needs', 'нуждается'], ['charging', '(в) зарядке']],
        ex: [['My phone needs charging.', 'Телефон надо зарядить.'], ['This shirt doesn’t need ironing.', 'Эту рубашку не нужно гладить.']],
        bad: 'My laptop needs to clean.', good: 'My laptop needs <b>cleaning</b>.' },
      { t: 'check', q: 'My hair is too long. It needs ___.', ru: 'Волосы слишком длинные. Их надо подстричь.', o: ['to cut', 'cutting', 'cut'], a: 1,
        why: 'Волосы сами себя не стригут → needs + -ing.' },
      { t: 'idea', text: `<b>help</b> — с to или без, одинаково. А <b>can’t help + -ing</b> — совсем другое: «не могу удержаться», «ничего не могу с собой поделать».`,
        lit: [['I', 'я'], ['can’t help', 'не могу удержаться'], ['laughing', '(от) смеха']],
        ex: [['Can you help me (to) choose a font?', 'Поможешь выбрать шрифт?'], ['I can’t help laughing at this meme.', 'Не могу не смеяться над этим мемом.'], ['I’m nervous. I can’t help it.', 'Я нервничаю. Ничего не могу поделать.']] },
      { t: 'check', q: 'He looked so funny that we couldn’t help ___.', ru: 'Он выглядел так смешно, что мы не могли не смеяться.', o: ['to laugh', 'laughing', 'laugh'], a: 1,
        why: 'can’t help + -ing = не могу удержаться.' },
      { t: 'idea', text: `Итог: кто делает — need to; что-то нуждается — needs + -ing; не удержался — can’t help + -ing.`,
        rows: [['I need to + действие', 'I need to charge my phone.'], ['вещь + needs + -ing', 'My phone needs charging.'], ['can’t help + -ing', 'I can’t help smiling.']] }
    ]},

    // ───────────── 7. like doing / like to do ─────────────
    { title: '«Нравится» и «хотел бы» — like, enjoy, would like', steps: [
      { t: 'idea', text: `Вы уже знаете: после <b>like, love, hate</b> можно и -ing, и to. Если ситуация уже есть (вы там живёте, работаете) или вам нравится сам процесс, чаще берут <b>-ing</b>.`,
        ex: [['Lena lives in Riga now. She likes living there.', 'Лена теперь живёт в Риге. Ей там нравится.'], ['I hated working in that office.', 'Я ненавидел работать в том офисе.'], ['I don’t like being interrupted.', 'Не люблю, когда меня перебивают.']] },
      { t: 'idea', text: `<b>like to</b> — когда вы делаете что-то по привычке, потому что так правильно, хоть и не в радость.`,
        ex: [['I like to back up my files every Friday.', 'Я стараюсь делать копию файлов каждую пятницу.'], ['I like to buy tickets in advance.', 'Я предпочитаю покупать билеты заранее.']] },
      { t: 'idea', text: `<b>enjoy</b> и <b>mind</b> — только -ing. <b>would like / would love / would prefer</b> — только to: это желание про конкретный раз.`,
        ex: [['I like watching anime.', 'Люблю смотреть аниме (вообще).'], ['I’d like to watch this one tonight.', 'Хочу посмотреть вот это сегодня.']],
        bad: 'I enjoy to work here.', good: 'I enjoy <b>working</b> here.' },
      { t: 'check', q: 'I’d like ___ this film tonight.', ru: 'Я бы хотел посмотреть этот фильм сегодня вечером.', o: ['watching', 'to watch', 'watch'], a: 1,
        why: 'would like — только to.' },
      { t: 'idea', text: `Хотите сказать «Я бы хотел сходить на концерт, но заболел». Это сожаление о прошлом: <b>would like to have</b> + третья форма (seen, been, come).`,
        lit: [['I’d like', 'я бы хотел'], ['to have seen', '(тогда) увидеть'], ['the concert', 'концерт']],
        ex: [['I’d like to have seen the concert, but I was ill.', 'Я бы хотел сходить на концерт, но заболел.'], ['We’d love to have come, but our flight was cancelled.', 'Мы бы с радостью приехали, но рейс отменили.']] },
      { t: 'check', q: 'It’s a shame I missed your party. I would love ___ there, but I was ill.', ru: 'Жаль, что я пропустил твою вечеринку. Я бы с радостью там был, но заболел.', o: ['to be', 'to have been', 'being'], a: 1,
        why: 'Сожаление о прошлом → would love to have + третья форма.' },
      { t: 'idea', text: `Итог: like — и так, и так; enjoy — только -ing; would like — только to.`,
        rows: [['like + -ing / like + to', 'процесс, ситуация / привычка'], ['enjoy, mind + -ing', 'I enjoy working here.'], ['would like to (have done)', 'хочу / хотел бы, но не вышло']] }
    ]},

    // ───────────── 8. prefer и would rather ─────────────
    { title: '«Я бы лучше…» — prefer и would rather', steps: [
      { t: 'idea', text: `<b>prefer</b> — предпочитать вообще. «Чай, а не кофе» — prefer X <b>to</b> Y. Со словами-действиями: prefer doing to doing или prefer to do rather than do.`,
        ex: [['I prefer tea to coffee.', 'Я предпочитаю чай кофе.'], ['I prefer drawing to writing.', 'Я больше люблю рисовать, чем писать.'], ['I prefer to walk rather than take the bus.', 'Я предпочитаю ходить пешком, а не ездить на автобусе.']] },
      { t: 'check', q: 'I prefer games ___ films.', ru: 'Я предпочитаю игры фильмам.', o: ['than', 'to', 'from'], a: 1,
        why: 'prefer X to Y. than здесь нельзя.' },
      { t: 'idea', text: `«Я бы лучше…» в конкретной ситуации: <b>I’d prefer to</b> или <b>I’d rather</b>. После would rather слово-действие идёт <b>без to</b>.`,
        lit: [['I’d rather', 'я бы лучше'], ['stay in', 'остался дома'], ['than', 'чем'], ['go out', 'пошёл гулять']],
        ex: [['I’d prefer to stay in tonight.', 'Я бы лучше остался дома сегодня.'], ['I’d rather stay in than go out.', 'Я бы лучше остался дома, чем пошёл куда-то.'], ['Do you want to come? — I’d rather not.', 'Пойдёшь? — Пожалуй, нет.']],
        tip: `Запомните пару: prefer … <b>to</b> …, но rather … <b>than</b> …. Никогда наоборот.` },
      { t: 'check', q: 'Shall we order pizza? — I’d rather ___ something.', ru: 'Закажем пиццу? — Я бы лучше что-нибудь приготовил.', o: ['to cook', 'cook', 'cooking'], a: 1,
        why: 'would rather + слово-действие без to.' },
      { t: 'idea', text: `«Я бы предпочёл, чтобы <b>ты</b>…» — I’d rather you + вторая форма (drove, didn’t). Форма прошлая, а смысл — сейчас, как после wish из B1-11.`,
        lit: [['I’d rather', 'я бы предпочёл'], ['you', '(чтобы) ты'], ['didn’t tell', 'не рассказывал'], ['anyone', 'никому']],
        ex: [['I’d rather you drove. I’m tired.', 'Лучше веди ты. Я устал.'], ['Shall I post the video? — I’d rather you didn’t.', 'Выложить видео? — Лучше не надо.']] },
      { t: 'check', q: 'Who’s going to call the client? — I’d rather you ___ it.', ru: 'Кто позвонит клиенту? — Лучше ты.', o: ['doing', 'did', 'to do'], a: 1,
        why: 'would rather + другой человек + вторая форма: you did.' },
      { t: 'idea', text: `Итог: prefer — с to, would rather — без to, а про другого человека — вторая форма.`,
        rows: [['prefer X to Y / I’d prefer to', 'I’d prefer to stay in.'], ['I’d rather + действие (than…)', 'I’d rather stay in.'], ['I’d rather you + вторая форма', 'I’d rather you didn’t.']] }
    ]},

    // ───────────── 9. Типичные ошибки ─────────────
    { title: 'Типичные ошибки — проверьте себя', steps: [
      { t: 'check', q: 'Скажите: «Не забудь прислать мне файл»', o: ['Don’t forget sending me the file.', 'Don’t forget to send me the file.', 'Don’t forget send me the file.'], a: 1,
        why: 'Дело впереди → forget + to.' },
      { t: 'check', q: 'Скажите: «Я бы лучше пошёл пешком»', o: ['I’d rather to walk.', 'I’d rather walk.', 'I’d rather walking.'], a: 1,
        why: 'После would rather — без to.' },
      { t: 'idea', text: `Итог урока: -ing — назад, to — вперёд.`,
        rows: [['remember / forget / regret / stop / go on', '-ing — было, to — впереди'], ['try to / try -ing', 'стараться / попробовать'], ['needs -ing, can’t help -ing, I’d rather do', 'prefer X to Y, I’d rather you did']] }
    ]}
  ];
})();
