// Грамматика по шагам для юнита a2-17: маленькое слово после глагола вместо падежа, прилагательное + предлог (afraid of, good at) и -ing после предлога, глагол + предлог (listen to, wait for, depend on) и глаголы без предлога (call you), look at / for / after / up, фразовые глаголы направления (go in, get up), put it on — куда ставить it / them, фразовые глаголы «как новое слово» и геймерские, типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a2-17'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: '«Жду тебя» — маленькое слово вместо окончания', steps: [
      { t: 'idea', text: `Хотите сказать «Я жду тебя». По-русски связь показывает окончание: тебя, собак, музыку. В английском таких окончаний нет — эту работу делает маленькое слово после слова-действия: wait <b>for</b>.`,
        lit: [['I’m', 'я'], ['waiting', 'жду'], ['for', '(для)'], ['you', 'тебя']],
        ex: [['I’m waiting for you.', 'Я жду тебя.'], ['Listen to this song.', 'Послушай эту песню.'], ['I’m afraid of spiders.', 'Я боюсь пауков (spiders).']],
        tip: `Учите не слово, а <b>пару</b>: не «wait», а «wait for»; не «afraid», а «afraid of». Как предмет из набора в игре: без второй части не работает.` },
      { t: 'check', q: 'Скажите: «Я жду автобус»', o: ['I’m waiting the bus.', 'I’m waiting for the bus.', 'I’m waiting to the bus.'], a: 1,
        why: 'Ждать кого-то / что-то = wait for.' },
      { t: 'idea', text: `Иногда к слову-действию приклеивается частица (up, out, on, off…) — и получается <b>новый</b> глагол с новым смыслом: give (давать) → <b>give up</b> (сдаваться). Такие пары называют <b>фразовые глаголы</b>.`,
        ex: [['Don’t give up!', 'Не сдавайся!'], ['Turn on the light.', 'Включи свет.'], ['I get up at eight.', 'Я встаю в восемь.']] },
      { t: 'idea', text: `Итог: в этом уроке три вида пар — и каждую учим целиком.`,
        rows: [['описание + маленькое слово', 'afraid of, good at, interested in'], ['действие + маленькое слово', 'listen to, wait for, look at'], ['фразовый глагол', 'get up, give up, pick up, log in']] }
    ]},

    // ───────────── 2. Прилагательное + предлог ─────────────
    { title: '«Боюсь», «умею», «интересуюсь»: afraid of, good at, interested in', steps: [
      { t: 'idea', text: `Хотите сказать «Я хорошо рисую». По-английски: «я есть хороший <b>at</b> рисовании». После слова-описания (afraid, good) стоит своё маленькое слово, и почти никогда не такое, как в русском.`,
        lit: [['I’m', 'я (есть)'], ['good', 'хороший'], ['at', 'в'], ['drawing', 'рисовании']],
        ex: [['I’m good at drawing.', 'Я хорошо рисую.'], ['He’s bad at maths.', 'Он плохо знает математику.'], ['Are you afraid of the dark?', 'Ты боишься темноты?']],
        tip: `scared of = afraid of (боится): My cat is scared of the vacuum cleaner (пылесоса).` },
      { t: 'idea', text: `Ещё частые пары: <b>interested in</b> (интересуется), <b>proud of</b> (гордится), <b>fed up with</b> (надоело), <b>full of</b> (полный чего), <b>different from</b> (отличается от), <b>married to</b> (женат / замужем за).`,
        ex: [['I’m interested in UX design.', 'Я интересуюсь UX-дизайном.'], ['I’m fed up with this bug.', 'Меня достал этот баг.'], ['Anna is married to a programmer.', 'Анна замужем за программистом.']],
        bad: 'She’s interested by games. She’s married with a doctor.', good: 'She’s interested <b>in</b> games. She’s married <b>to</b> a doctor.' },
      { t: 'check', q: 'I’m not very good ___ drawing faces.', ru: 'Я не очень хорошо рисую лица.', o: ['at', 'in', 'on'], a: 0,
        why: 'Хорошо / плохо уметь = good at / bad at.' },
      { t: 'idea', text: `Хотите сказать «Спасибо, что помог». После маленьких слов at, of, for, in, without слово-действие всегда с хвостиком <b>-ing</b> — как в прошлом уроке после enjoy и before / after.`,
        lit: [['Thank you', 'спасибо'], ['for', 'за'], ['helping', 'помогание'], ['me', 'мне']],
        ex: [['I’m good at finding bugs.', 'Я хорошо нахожу баги.'], ['He left without saying goodbye.', 'Он ушёл, не попрощавшись.'], ['Max is thinking of buying a new monitor.', 'Макс подумывает купить новый монитор.']],
        tip: `<b>to</b> перед глаголом (want to go) — особое слово. А после <b>at, in, of, for, about, with, without</b> — только <b>-ing</b>: Thank you for <b>helping</b>, не for help me.` },
      { t: 'check', q: 'She left the call without ___ anything.', ru: 'Она вышла из созвона, ничего не сказав.', o: ['to say', 'say', 'saying'], a: 2,
        why: 'После without слово-действие с -ing.' },
      { t: 'idea', opt: true, text: `Пары, где маленькое слово меняет смысл: angry <b>with</b> кем-то, но angry <b>about</b> чём-то; kind / nice <b>of</b> you (мило с твоей стороны), но nice <b>to</b> кому-то; sorry <b>about</b> / <b>for</b> — извини за; feel sorry <b>for</b> — жалеть кого-то.`,
        ex: [['Why are you angry with me? — Players are angry about the update.', 'Почему ты злишься на меня? — Игроки злятся из-за обновления.'], ['It was kind of you to help me. — She’s nice to new players.', 'Мило с твоей стороны. — Она добра к новичкам.'], ['I’m sorry for being late. — I feel sorry for him.', 'Извини, что опоздал. — Мне его жаль.']] },
      { t: 'idea', text: `Итог: слово-описание + своё маленькое слово; дальше — кто / что или слово-действие с -ing.`,
        rows: [['afraid of, good at, interested in', 'I’m afraid of spiders.'], ['+ -ing', 'I’m good at drawing.'], ['thank you for / without + -ing', 'Thank you for helping me.']] }
    ]},

    // ───────────── 3. Глагол + предлог ─────────────
    { title: '«Слушать музыку», «ждать Макса»: listen to, wait for, depend on', steps: [
      { t: 'idea', text: `Хотите сказать «Я слушаю музыку». По-русски — без всяких добавок. По-английски listen требует <b>to</b> перед тем, что слушаем. Так же wait <b>for</b> — ждать.`,
        lit: [['I’m', 'я'], ['listening', 'слушаю'], ['to', '(к)'], ['music', 'музыку']],
        ex: [['Listen to this soundtrack!', 'Послушай этот саундтрек!'], ['Wait for me! I’m almost ready.', 'Подожди меня! Я почти готов.']],
        bad: 'I’m listening music. Wait me!', good: 'I’m listening <b>to</b> music. Wait <b>for</b> me!' },
      { t: 'idea', text: `Ещё пары: <b>depend on</b> (зависеть от), <b>belong to</b> (принадлежать), <b>happen to</b> (случиться с), <b>ask for</b> (просить), <b>talk to … about</b> (говорить с … о), <b>thank for</b>, <b>think about / of</b> (думать о).`,
        ex: [['It depends on the price.', 'Это зависит от цены.'], ['What happened to your phone?', 'Что случилось с твоим телефоном?'], ['What do you think of the new logo?', 'Как тебе новый логотип?']],
        tip: `Перед what / where / how можно без on: It depends what time you start (во сколько начнёте).` },
      { t: 'check', q: 'Do you like horror games? — It depends ___ the game.', ru: 'Тебе нравятся хорроры? — Зависит от игры.', o: ['of', 'from', 'on'], a: 2,
        why: 'Зависеть от = depend on (не of и не from).' },
      { t: 'idea', text: `А теперь ловушка наоборот: по-русски маленькое слово есть, а по-английски его <b>нет</b>. call / phone / text / email, meet, discuss, answer берут человека или вещь сразу.`,
        ex: [['I’ll call you tonight.', 'Я позвоню тебе вечером.'], ['Let’s meet Anna at the café.', 'Давай встретимся с Анной в кафе.'], ['Let’s discuss the plan.', 'Давай обсудим план.']],
        bad: 'I’ll call to you. Let’s discuss about it.', good: 'I’ll call you. Let’s discuss it.' },
      { t: 'check', q: 'I’ll text ___ after the meeting.', ru: 'Я напишу тебе после встречи.', o: ['you', 'to you', 'for you'], a: 0,
        why: 'call / text / email + человек — без маленького слова.' },
      { t: 'idea', text: `Итог: у одних слов-действий есть своё маленькое слово, у других — наоборот, нет.`,
        rows: [['listen to, wait for, depend on', 'Wait for me!'], ['call, text, meet, discuss — без него', 'I’ll call you.']] }
    ]},

    // ───────────── 4. look at / for / after ─────────────
    { title: 'Look at, look for, look after — один глагол, разные смыслы', steps: [
      { t: 'idea', text: `look — «смотреть». Добавим маленькое слово — и получится другое действие: <b>look at</b> — смотреть на, <b>look for</b> — искать.`,
        lit: [['I’m', 'я'], ['looking', 'смотрю'], ['for', '(за)'], ['my headphones', 'мои наушники = ищу']],
        ex: [['Look at the camera and smile.', 'Посмотри в камеру и улыбнись.'], ['I’m looking for my headphones.', 'Я ищу наушники.'], ['She’s looking for a new job.', 'Она ищет новую работу.']],
        tip: `<b>look for</b> — искать (процесс), <b>find</b> — найти (результат): I’m looking for my keys, but I can’t find them.` },
      { t: 'check', q: 'I can’t find my mouse. I’m looking ___ it.', ru: 'Не могу найти мышку. Я её ищу.', o: ['at', 'for', 'after'], a: 1,
        why: 'Искать = look for.' },
      { t: 'idea', text: `Ещё три: <b>look after</b> — присматривать, беречь; <b>look up</b> — посмотреть (слово в словаре, в интернете); <b>Look out!</b> — Осторожно!`,
        ex: [['Can you look after my cat this weekend?', 'Присмотришь за моей кошкой на выходных?'], ['I didn’t know the word, so I looked it up.', 'Я не знал слова и посмотрел его.'], ['Look out! There’s a car!', 'Осторожно! Машина!']],
        tip: `Bye! Look after yourself. — Пока! Береги себя.` },
      { t: 'check', q: 'Скажите: «Я ищу ключи»', o: ['I’m looking my keys.', 'I’m looking at my keys.', 'I’m looking for my keys.'], a: 2,
        why: 'Искать = look for. look at — просто смотреть на них.' },
      { t: 'idea', text: `Итог: одно look — четыре смысла, всё решает маленькое слово.`,
        rows: [['look at', 'смотреть на'], ['look for', 'искать'], ['look after / look up', 'присматривать / посмотреть слово']] }
    ]},

    // ───────────── 5. Фразовые глаголы направления ─────────────
    { title: 'Go in, get up, sit down — частица показывает, куда', steps: [
      { t: 'idea', text: `Хотите сказать «Я вошёл». По-русски направление в приставке: <b>в</b>ошёл, <b>вы</b>шел, <b>у</b>бежал. По-английски — в частице после глагола: go <b>in</b>, go <b>out</b>, run <b>away</b>, come <b>back</b>.`,
        lit: [['The door was open,', 'дверь была открыта'], ['so I', 'и я'], ['went', 'пошёл'], ['in', 'внутрь']],
        ex: [['The door was open, so I went in.', 'Дверь была открыта, и я вошёл.'], ['The taxi stopped and we got out.', 'Такси остановилось, и мы вышли.'], ['He’ll be back on Monday.', 'Он вернётся в понедельник.']] },
      { t: 'idea', text: `Самые частые частицы и их направление. Смысл часто можно угадать, как по русской приставке.`,
        rows: [['up / down', 'вверх / вниз', 'stand up, sit down, fall down'], ['on / off', 'в транспорт / из', 'get on the bus, get off'], ['over / round', 'через, переворот / кругом', 'fall over, look round']],
        ex: [['I got on the bus at the station and got off at the park.', 'Я сел в автобус у вокзала и вышел у парка.'], ['Somebody called my name, so I looked round.', 'Кто-то назвал меня, и я оглянулся.']] },
      { t: 'check', q: 'This is my stop. I need to get ___.', ru: 'Это моя остановка. Мне надо выйти.', o: ['off', 'on', 'down'], a: 0,
        why: 'Выйти из автобуса = get off; сесть в него = get on.' },
      { t: 'idea', text: `<b>get up</b> — встать с кровати, <b>stand up</b> — встать на ноги, <b>sit down</b> — сесть. В прошлом меняется только первое слово — вторая форма: get up → <b>got</b> up, wake up → <b>woke</b> up. Частица остаётся.`,
        ex: [['I usually get up at eight.', 'Я обычно встаю в восемь.'], ['Yesterday I got up at ten.', 'Вчера я встал в десять.'], ['Please sit down.', 'Садитесь, пожалуйста.']] },
      { t: 'check', q: 'Yesterday I ___ at six.', ru: 'Вчера я проснулся в шесть.', o: ['wake up', 'woke up', 'waked up'], a: 1,
        why: 'Вторая форма у wake — woke; up не меняется.' },
      { t: 'idea', text: `Итог: частица = направление, как русская приставка. В прошлом меняем только первое слово.`,
        rows: [['go in / go out', 'войти / выйти'], ['get on / get off', 'сесть / выйти (транспорт)'], ['get up → got up', 'встать → встал']] }
    ]},

    // ───────────── 6. Put it on ─────────────
    { title: 'Put it on, а не put on it: куда ставить it', steps: [
      { t: 'idea', text: `Хотите сказать «Я надел куртку». Можно двумя способами: put on my jacket или put my jacket on. Обычное слово (the light, my jacket) встаёт до или после частицы — оба варианта верны.`,
        lit: [['I', 'я'], ['put', 'положил'], ['my jacket', 'мою куртку'], ['on', '(на) = надел']],
        ex: [['It was cold, so I put on my jacket.', 'Было холодно, и я надел куртку.'], ['I put my jacket on.', 'Я надел куртку.'], ['Can you turn the TV off?', 'Выключишь телевизор?']] },
      { t: 'idea', text: `А вот <b>it / them / me / him / her / us</b> встаёт <b>только в середину</b>: put <b>it</b> on, take <b>them</b> off. Это самое частое место ошибок — не переживайте, дальше потренируемся.`,
        ex: [['Here’s your jacket. Put it on.', 'Вот твоя куртка. Надень её.'], ['Your shoes are wet. Take them off.', 'Ботинки мокрые. Сними их.'], ['Wake me up at seven.', 'Разбуди меня в семь.']],
        bad: 'Turn off it. Pick up them.', good: 'Turn <b>it</b> off. Pick <b>them</b> up.',
        tip: `Глаголы с маленьким словом из частей 3–4 так не разрываются: look for it, wait for them, listen to it.` },
      { t: 'check', q: 'These jeans look nice. Can I try ___?', ru: 'Классные джинсы. Можно их примерить?', o: ['on them', 'them on', 'them in'], a: 1,
        why: 'them — только в середину: try them on.' },
      { t: 'idea', text: `Частые глаголы, которые так работают: turn on / off (включить / выключить), turn up / down (громче / тише), pick up (поднять), put down (положить), give back (вернуть), throw away (выбросить), put away (убрать), fill in (заполнить).`,
        ex: [['The music is too loud. Turn it down.', 'Музыка слишком громкая. Сделай тише.'], ['Don’t throw it away!', 'Не выбрасывай это!'], ['Please fill in this form.', 'Заполните, пожалуйста, эту форму.']] },
      { t: 'check', q: 'I’m going to sleep. Please turn ___.', ru: 'Я иду спать. Выключи, пожалуйста, его.', o: ['off it', 'it off', 'it on'], a: 1,
        why: 'Выключить = turn off; it — в середину: turn it off.' },
      { t: 'idea', opt: true, text: `Ещё так работают: bring / take / put back (принести / отнести / положить обратно), pay back (вернуть деньги), try on (примерить), look up (посмотреть слово), give up (бросить).`,
        tip: `Реже: put out (потушить), cross out (зачеркнуть), knock over (опрокинуть), show sb round (показать всё вокруг): put it out, Don’t knock it over!`,
        ex: [['I’ll pay you back tomorrow.', 'Я верну тебе деньги завтра.'], ['Chess was boring, so I gave it up.', 'Шахматы были скучными, и я их бросил.'], ['Let me show you round.', 'Давай я тебе всё покажу.']] },
      { t: 'idea', text: `Итог: обычное слово — где удобно, it / them — только в середину.`,
        rows: [['turn on the light', 'turn the light on'], ['turn it on', 'не turn on it'], ['look for it', 'маленькое слово не разрываем']] }
    ]},

    // ───────────── 7. Фразовые глаголы как новые слова ─────────────
    { title: 'Give up, log in, run out of — учим как новые слова', steps: [
      { t: 'idea', text: `У некоторых фразовых глаголов смысл по направлению не угадать — их учим как новое слово: <b>carry on / go on</b> (продолжать), <b>hold on</b> (подожди), <b>grow up</b> (вырасти), <b>break down</b> (сломаться о технике), <b>take off</b> (взлетать).`,
        ex: [['Hold on, I’m coming.', 'Подожди, я иду.'], ['I grew up in a small town.', 'Я вырос в маленьком городе.'], ['My old PC broke down.', 'Мой старый компьютер сломался.']] },
      { t: 'check', q: 'Our flight ___ an hour late.', ru: 'Наш самолёт взлетел на час позже.', o: ['took off', 'took up', 'took out'], a: 0,
        why: 'Взлетать (о самолёте) = take off.' },
      { t: 'idea', text: `В приложениях и играх: <b>log in / log out</b> (войти / выйти), <b>sign up</b> (зарегистрироваться), <b>set up</b> (настроить), <b>find out</b> (узнать), <b>figure out</b> (разобраться), <b>level up</b> (повысить уровень), <b>run out of</b> (закончиться у кого-то).`,
        ex: [['Log in with your email.', 'Войди через почту.'], ['I signed up for the beta test.', 'Я записался на бета-тест.'], ['I’ve run out of potions!', 'У меня кончились зелья (potions)!']],
        tip: `<b>run out of</b> — сразу три слова, если «у кого и что»: We’ve run out of time. Если кончилось само — без of: Time ran out.` },
      { t: 'check', q: 'I can’t heal — I’ve ___ potions.', ru: 'Не могу лечиться — у меня кончились зелья.', o: ['run out of', 'run out', 'given up'], a: 0,
        why: 'Кончилось что-то у меня = run out of + что.' },
      { t: 'idea', opt: true, text: `Ещё из жизни: go off (зазвонить — о будильнике), speak up (говорить громче), wash up (мыть посуду), slow down (сбавить скорость), get on (справиться: How did you get on? — Как прошло?).`,
        tip: `Из игр: hurry up (быстрее), come on (давай!), catch up (догнать), team up (объединиться), power up (усилиться), use up (израсходовать), take down (завалить), back up (сделать копию), shut down (выключиться), watch out! (осторожно).`,
        ex: [['My alarm went off at six.', 'Мой будильник зазвонил в шесть.'], ['Can you speak up? I can’t hear you.', 'Можешь громче? Я тебя не слышу.'], ['Hurry up, the zone is closing!', 'Быстрее, зона закрывается!']] },
      { t: 'idea', text: `Итог: такие глаголы учим целиком, как новое слово, вместе с частицей.`,
        rows: [['give up, carry on, hold on', 'сдаться, продолжать, подожди'], ['log in, sign up, set up', 'войти, зарегистрироваться, настроить'], ['run out of', 'закончиться (у кого-то)']] }
    ]},

    // ───────────── 8. Типичные ошибки ─────────────
    { title: 'Ловушки: проверьте себя', steps: [
      { t: 'check', q: 'Скажите: «Спасибо, что пригласил меня»', o: ['Thanks for invite me.', 'Thanks for inviting me.', 'Thanks to invite me.'], a: 1,
        why: 'После for — слово-действие с -ing.' },
      { t: 'check', q: 'I’ll phone ___ mum tonight.', ru: 'Я позвоню маме вечером.', o: ['my', 'to my', 'for my'], a: 0,
        why: 'phone / call + человек — без маленького слова.' },
      { t: 'check', q: 'Your coat is here. ___.', ru: 'Твоё пальто здесь. Надень его.', o: ['Put on it', 'Put it on', 'Put on'], a: 1,
        why: 'it — только в середину: put it on.' },
      { t: 'idea', text: `Итог урока: учим парами, после маленького слова — -ing, а it / them во фразовом глаголе — в середину.`,
        rows: [['пары', 'afraid of, good at, listen to, wait for, depend on'], ['без маленького слова', 'call you, text me, meet Anna'], ['it / them в середину', 'turn it off, pick them up']] }
    ]}
  ];
})();
