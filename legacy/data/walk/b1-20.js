// Грамматика по шагам для юнита b1-20: some в вопросах-предложениях и any = «любой»; any после if, without, hardly; none of, no- или any-; much или a lot, plenty of; little / few без a и only a little; most of the time, half of it, двое или больше, both … and / neither … nor / either … or; all или everybody, whole или all; each или every, every one of, «по … каждый»; типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'b1-20'); if (!u) return;
  u.walk = [
    // ───────────── 1. some в вопросах, any = любой ─────────────
    { title: 'Some в вопросе и any = «любой»', steps: [
      { t: 'idea', text: `Вы уже знаете: <b>some</b> — когда что-то точно есть, <b>any</b> — в вопросах и после not. Но хотите предложить гостю: «Хочешь кофе?» Это вопрос, а слово — <b>some</b>: мы предлагаем и ждём «да».`,
        lit: [['Would you like', 'не хочешь ли'], ['some', '(немного)'], ['coffee?', 'кофе?']],
        ex: [['Would you like some coffee? I’ve just made it.', 'Хочешь кофе? Я только что сварил.'], ['Can I have some water, please?', 'Можно мне воды?'], ['Are you looking for something?', 'Вы что-то ищете?']],
        tip: `Обычный вопрос, когда правда не знаем, — по-прежнему any: Do you have any questions?` },
      { t: 'check', q: 'Can I have ___ sugar, please?', ru: 'Можно мне сахару, пожалуйста?', o: ['some', 'none', 'a few'], a: 0,
        why: 'Просьба — ждём, что сахар есть → some, даже в вопросе.' },
      { t: 'idea', text: `Хотите сказать «Садись на любое место». Здесь <b>any</b> — «любой, неважно какой», и оно спокойно стоит в обычном предложении без not. Так же anybody (кто угодно), anything (что угодно), anywhere (куда угодно).`,
        lit: [['Take', 'бери'], ['any', 'любое'], ['seat', 'место']],
        ex: [['Call me any time.', 'Звони в любое время.'], ['You can use any font you like.', 'Можешь взять любой шрифт.'], ['This is easy. Anybody can learn it.', 'Это легко. Любой может научиться.']] },
      { t: 'check', q: 'They all go to the centre, so you can take ___ bus from this stop.', ru: 'Они все идут в центр, так что можно сесть на любой автобус с этой остановки.', o: ['some', 'any', 'no'], a: 1,
        why: '«Любой, неважно какой» → any.' },
      { t: 'idea', text: `Итог: решает смысл, а не «вопрос или нет».`,
        rows: [['предлагаю, прошу, жду «да»', 'Would you like some tea?'], ['правда не знаю', 'Do you have any questions?'], ['любой, неважно какой', 'Take any seat. Anybody can do it.']] }
    ]},

    // ───────────── 2. if, without, hardly ─────────────
    { title: '«Если что-нибудь…», «без всяких…» — any без not', steps: [
      { t: 'idea', text: `Хотите сказать «Дай знать, если что-нибудь понадобится». После <b>if</b> (если) мы не знаем, будет ли это, — поэтому <b>any</b>: anything, anyone, any questions.`,
        lit: [['Let me know', 'дай знать'], ['if', 'если'], ['you need', 'тебе нужно'], ['anything', 'что-нибудь']],
        ex: [['Let me know if you need anything.', 'Дай знать, если что-нибудь понадобится.'], ['If anyone has any questions, write them in the chat.', 'Если у кого-то есть вопросы, пишите в чат.'], ['Sorry for any trouble we caused.', 'Простите за доставленные неудобства (если они были).']] },
      { t: 'idea', text: `Слова <b>without</b> (без), <b>never</b> (никогда), <b>hardly</b> (почти не) уже несут «нет» внутри. not рядом нет, но после них — тоже <b>any</b>.`,
        ex: [['He left without saying anything.', 'Он ушёл, ничего не сказав.'], ['There’s hardly any milk left.', 'Молока почти не осталось.'], ['The test is easy. Hardly anybody fails.', 'Тест лёгкий. Почти никто не проваливается.']],
        bad: 'He left without saying nothing.', good: 'He left without saying <b>anything</b>.' },
      { t: 'check', q: 'Hardly ___ came to the meetup — maybe five people.', ru: 'На встречу почти никто не пришёл — человек пять.', o: ['nobody', 'anybody', 'somebody'], a: 1,
        why: 'hardly уже «почти не» → anybody. nobody дал бы два минуса.' },
      { t: 'idea', opt: true, text: `Мелочь, которая звучит естественно: после someone, anybody, nobody, everybody вместо «его / её» говорят <b>they / their</b> — ведь неизвестно, он это или она.`,
        ex: [['Someone has left their headphones here.', 'Кто-то оставил тут наушники.'], ['If anybody wants to leave early, they can.', 'Если кто-то хочет уйти пораньше — можно.'], ['Everybody said they had a great time.', 'Все сказали, что отлично провели время.']] },
      { t: 'idea', text: `Итог: any — везде, где «не знаем» или «нет» спрятано в слове.`,
        rows: [['после if', 'Let me know if you need anything.'], ['после without / never / hardly', 'without any notes · hardly anybody']] }
    ]},

    // ───────────── 3. none of; no- или any- ─────────────
    { title: '«Ни один из нас» — none of', steps: [
      { t: 'idea', text: `Вы уже знаете: <b>no</b> стоит перед словом (no time), <b>none</b> — вместо него (How much? — None). Хотите сказать «Никто из моих друзей не играет в шахматы» — берём <b>none of</b> + the / my / us / them.`,
        lit: [['None', 'ни один'], ['of', 'из'], ['my friends', 'моих друзей'], ['play', 'играет'], ['chess', 'в шахматы']],
        ex: [['None of my friends play chess.', 'Никто из моих друзей не играет в шахматы.'], ['None of the rooms are available.', 'Ни один номер не свободен.'], ['None of this code is mine.', 'Ни одна строчка этого кода не моя.']] },
      { t: 'idea', text: `А is или are после none of the players? Можно и так, и так — оба верны. В разговоре чаще are / were. Главное — никакого not: минус уже в none.`,
        ex: [['None of the players were ready.', 'Ни один игрок не был готов.'], ['None of us knew the answer.', 'Никто из нас не знал ответа.']],
        bad: 'None of us didn’t know. · No of us knew.', good: '<b>None of us</b> knew.' },
      { t: 'check', q: 'How much money do you have? — ___. I spent it all.', ru: 'Сколько у тебя денег? — Нисколько. Я всё потратил.', o: ['No', 'None', 'Not'], a: 1,
        why: 'Ответ одним словом, без слова после → none.' },
      { t: 'idea', text: `Не путайте <b>no-</b> и <b>any-</b> в обычном предложении: nobody — «никто», anybody — «кто угодно». Одна буква — и смысл наоборот.`,
        rows: [['It’s a boring job. Nobody wants to do it.', 'никто не хочет'], ['It’s an easy job. Anybody can do it.', 'кто угодно может']],
        ex: [['I’m not hungry. I want nothing.', 'Я не голоден. Ничего не хочу.'], ['I’m starving. I could eat anything.', 'Умираю с голоду. Съел бы что угодно.']] },
      { t: 'check', q: 'I’m so hungry. I could eat ___.', ru: 'Я так голоден. Съел бы что угодно.', o: ['nothing', 'anything', 'none'], a: 1,
        why: '«Что угодно» → anything. nothing — «ничего».' },
      { t: 'idea', text: `Итог: none — один, без слова после, или none of + группа.`,
        rows: [['none of + the / my / us', 'None of us knew.'], ['nobody / anybody', 'никто / кто угодно']] }
    ]},

    // ───────────── 4. much или a lot; plenty of ─────────────
    { title: '«Много денег» — a lot, а не much', steps: [
      { t: 'idea', text: `Вы знаете: much — с тем, что не считаем, many — с тем, что считаем. Новое: в обычном предложении с «да» much звучит книжно. В разговоре — <b>a lot (of)</b>. А в вопросах и с not much хорош.`,
        rows: [['We spent a lot of money.', 'We didn’t spend much money.'], ['I play a lot.', 'Do you play much?']],
        bad: 'We spent much money on the trip.', good: 'We spent <b>a lot of</b> money on the trip.',
        tip: `С too / so much нормально и с «да»: I spend too much time on my phone. А many хорош везде: many years.` },
      { t: 'check', q: 'Скажите: «Я много играю по выходным»', o: ['I play much at weekends.', 'I play a lot at weekends.', 'I play many at weekends.'], a: 1,
        why: 'Предложение с «да», в разговоре → a lot.' },
      { t: 'idea', text: `Хотите сказать «Не спеши, у нас полно времени». Для «с запасом, больше чем нужно» есть <b>plenty of</b>. Подходит и к тому, что считаем, и к тому, что нет.`,
        lit: [['We’ve got', 'у нас есть'], ['plenty of', 'полно, с запасом'], ['time', 'времени']],
        ex: [['Don’t rush. We’ve got plenty of time.', 'Не спеши. Времени полно.'], ['There are plenty of cafés nearby.', 'Рядом полно кафе.'], ['There’s plenty to do in this city.', 'В этом городе есть чем заняться.']] },
      { t: 'check', q: 'Relax, there are ___ seats — the cinema is half empty.', ru: 'Расслабься, мест полно — кинотеатр наполовину пуст.', o: ['plenty of', 'much', 'plenty'], a: 0,
        why: '«С запасом» + слово после → plenty of.' },
      { t: 'idea', text: `Итог: much — в вопросах и с not, a lot и plenty of — везде.`,
        rows: [['«да», в разговоре', 'a lot of money · I play a lot'], ['вопрос / not', 'Do you play much? · not much time'], ['с запасом', 'plenty of time']] }
    ]},

    // ───────────── 5. little / few без a ─────────────
    { title: 'Little и few без a — «почти нет»', steps: [
      { t: 'idea', text: `Вы уже знаете: <b>a little / a few</b> — «немного, но есть», <b>little / few</b> — «мало, почти нет». Сравните две фразы — отличие только в одной букве a, а итог разговора противоположный.`,
        ex: [['He speaks a little English, so we managed to talk.', 'Он немного говорит по-английски, и мы смогли пообщаться.'], ['He speaks little English, so we used a translator.', 'Он почти не говорит по-английски, пришлось взять переводчик.']],
        tip: `a — стакан наполовину полон («есть, хватает»). Без a — наполовину пуст («почти нет, не хватает»).` },
      { t: 'idea', text: `Хотите сказать «Мало кто прошёл эту игру». Это <b>few people</b> — упор на то, что почти никто. А <b>a few people</b> — «несколько человек», упор на то, что они есть.`,
        lit: [['Few', 'мало'], ['people', 'людей'], ['finished', 'прошли'], ['the game', 'игру']],
        ex: [['Few people finished the game — it’s really hard.', 'Мало кто прошёл игру — она очень сложная.'], ['A few people finished it in one day.', 'Несколько человек прошли её за день.'], ['She has very little spare time these days.', 'У неё сейчас очень мало свободного времени.']] },
      { t: 'check', q: 'The game is so hard that ___ people ever finish it.', ru: 'Игра такая сложная, что мало кто её проходит.', o: ['few', 'a few', 'little'], a: 0,
        why: '«Мало кто», упор на нехватке + people (считаем) → few.' },
      { t: 'idea', text: `После <b>only</b> (только) — всегда с a: only a little, only a few. «Только немного» — это всё-таки «есть».`,
        bad: 'We only have little time.', good: 'We only have <b>a little</b> time.',
        ex: [['There were only a few players online.', 'Онлайн было всего несколько игроков.']] },
      { t: 'check', q: 'Hurry up! We only have ___ time before the train.', ru: 'Быстрее! У нас совсем немного времени до поезда.', o: ['little', 'a little', 'a few'], a: 1,
        why: 'После only — с a; time не считаем → a little.' },
      { t: 'idea', text: `Итог: с a — есть и хватает, без a — почти нет.`,
        rows: [['хватает', 'a little time · a few friends · only a few'], ['почти нет', 'little time · few people · very little']] }
    ]},

    // ───────────── 6. most of the time, half of it, двое или больше ─────────────
    { title: 'Most of the time, half of it — и когда их двое', steps: [
      { t: 'idea', text: `Вы уже знаете: most people (вообще), most of my friends (группа), most of them (перед them / us / it — всегда of). Частая ловушка: «большую часть времени» — это <b>most of the time</b>, с the.`,
        bad: 'Most of people play on phones. · I spend most of time at home.', good: '<b>Most people</b> play on phones. · I spend <b>most of the time</b> at home.',
        ex: [['I was ill, so I spent most of the day in bed.', 'Я болел и провёл большую часть дня в кровати.']] },
      { t: 'idea', text: `<b>half</b> (половина) ведёт себя как all: перед the / my / this of можно не ставить, а перед it / them — обязательно. И никакого the перед half.`,
        ex: [['half this pizza = half of this pizza', 'половина этой пиццы'], ['I’ve only read half of it.', 'Я прочитал только половину.'], ['Half is mine, half is yours.', 'Половина моя, половина твоя.']],
        bad: 'I’ve read half it. · The half is mine.', good: 'I’ve read <b>half of it</b>. · <b>Half</b> is mine.' },
      { t: 'check', q: 'Скажите: «Я прочитал только половину»', o: ['I’ve only read half it.', 'I’ve only read half of it.', 'I’ve only read the half of it.'], a: 1,
        why: 'Перед it нужен of, а the перед half не ставят.' },
      { t: 'idea', text: `both, either, neither — только про двоих. Если больше двух, у каждого есть «пара»:`,
        rows: [['двое', 'больше двух'], ['either of them — любой', 'any of them'], ['neither of them — ни один', 'none of them'], ['both of them — оба', 'all of them']] },
      { t: 'check', q: 'We tried five restaurants. ___ of them had a free table.', ru: 'Мы попробовали пять ресторанов. Ни в одном не было свободного столика.', o: ['Neither', 'None', 'Either'], a: 1,
        why: 'Ресторанов больше двух → none. neither — только про двоих.' },
      { t: 'idea', text: `Про двоих есть пары-связки: <b>both … and</b> (и … и), <b>neither … nor</b> (ни … ни), <b>either … or</b> (либо … либо). В neither … nor минус уже есть — not не нужен.`,
        lit: [['Neither', 'ни'], ['Max', 'Макс'], ['nor', 'ни'], ['Liza', 'Лиза'], ['came', 'пришли']],
        ex: [['Both Max and Liza were late.', 'И Макс, и Лиза опоздали.'], ['She’s either in a meeting or at lunch.', 'Она либо на встрече, либо на обеде.'], ['I was both tired and hungry.', 'Я был и уставшим, и голодным.']] },
      { t: 'check', q: 'Скажите: «Ни Макс, ни Лиза не пришли»', o: ['Neither Max and Liza came.', 'Neither Max nor Liza came.', 'Neither Max nor Liza didn’t come.'], a: 1,
        why: 'neither … nor, и без not: минус уже в neither.' },
      { t: 'idea', text: `Итог: of перед it / them, двое — both / either / neither.`,
        rows: [['группа, часть', 'most of the time · half of it'], ['двое / больше', 'neither — none · either — any · both — all'], ['пары', 'both … and · neither … nor · either … or']] }
    ]},

    // ───────────── 7. all, everybody, whole ─────────────
    { title: '«Все», «всё», «целый» — everybody и whole', steps: [
      { t: 'idea', text: `Хотите сказать «Все были довольны». По-русски «все» — одно слово. По-английски отдельное <b>all</b> в значении «все люди» или «всё» почти не говорят — берут <b>everybody</b> и <b>everything</b>.`,
        bad: 'All were happy. · He thinks he knows all.', good: '<b>Everybody</b> was happy. · He thinks he knows <b>everything</b>.',
        tip: `all хорош рядом со словом: all my friends, all the tickets, all of us.` },
      { t: 'check', q: 'Скажите: «Он думает, что знает всё»', o: ['He thinks he knows all.', 'He thinks he knows everything.', 'He thinks he knows every.'], a: 1,
        why: '«Всё» отдельно → everything. Одно all так не говорят.' },
      { t: 'idea', opt: true, text: `Есть пара устойчивых фраз с одним all: <b>all about</b> (всё о) и <b>All I need is…</b> (всё, что мне нужно, — это…). Здесь all = «единственное, что».`,
        ex: [['He knows all about fonts.', 'Он знает всё о шрифтах.'], ['All I need is a good night’s sleep.', 'Всё, что мне нужно, — это выспаться.']] },
      { t: 'idea', text: `Хотите сказать «Я посмотрел весь сезон». Если это <b>одна</b> вещь целиком, от начала до конца, — <b>whole</b> (целый). Ставится после the / my / a.`,
        lit: [['I watched', 'я посмотрел'], ['the', '(тот)'], ['whole', 'целый'], ['season', 'сезон']],
        ex: [['I watched the whole season in one night.', 'Я посмотрел весь сезон за одну ночь.'], ['He ate a whole pizza.', 'Он съел целую пиццу.'], ['I played the whole day. = I played all day.', 'Я играл весь день.']] },
      { t: 'idea', text: `А с тем, что не считаем (деньги, информация, время), whole не ставят — только <b>all the</b>.`,
        rows: [['whole + одна вещь', 'the whole season · a whole pizza'], ['all the + не считаем', 'all the money · all the information']],
        bad: 'I read the whole information.', good: 'I read <b>all the</b> information.' },
      { t: 'check', q: 'I spent ___ money on the new laptop.', ru: 'Я потратил все деньги на новый ноутбук.', o: ['the whole', 'all the', 'every'], a: 1,
        why: 'Деньги не считаем → all the. whole — только с одной вещью.' },
      { t: 'idea', text: `Итог: «все / всё» отдельно — everybody / everything; «целый» — whole или all the.`,
        rows: [['все / всё', 'Everybody was happy. · He knows everything.'], ['одна вещь целиком', 'the whole season'], ['не считаем', 'all the money']] }
    ]},

    // ───────────── 8. each или every ─────────────
    { title: 'Каждый: each или every', steps: [
      { t: 'idea', text: `Вы уже знаете <b>every</b> — «каждый» как часть всех (every day). Есть второе «каждый» — <b>each</b>: мы смотрим на каждого <b>по отдельности</b>, по одному.`,
        ex: [['Check each screen carefully before the release.', 'Проверьте каждый экран по отдельности перед релизом.'], ['I want to visit every country in Europe.', 'Хочу побывать во всех странах Европы.'], ['Each quest has its own reward.', 'У каждого квеста своя награда.']],
        tip: `every ≈ all (все вместе), each — «каждый по одному».` },
      { t: 'idea', text: `Когда их <b>двое</b> — только each. А «как часто» — только every: every day, every fifteen minutes.`,
        ex: [['In chess, each player has sixteen pieces.', 'В шахматах у каждого игрока (их двое) 16 фигур.'], ['There’s a train every fifteen minutes.', 'Поезд ходит каждые 15 минут.']] },
      { t: 'check', q: 'In a football match, ___ team has eleven players.', ru: 'В футбольном матче у каждой из двух команд одиннадцать игроков.', o: ['each', 'every', 'all'], a: 0,
        why: 'Команд две → только each.' },
      { t: 'check', q: 'There’s a bus ___ ten minutes.', ru: 'Автобус ходит каждые десять минут.', o: ['each', 'every', 'all'], a: 1,
        why: 'Как часто → every.' },
      { t: 'idea', text: `each может стоять с of и один: each of them, each one, Each is unique. А <b>every of</b> не бывает — только <b>every one of</b> (каждый из).`,
        ex: [['Each of them has its own style.', 'У каждого из них свой стиль.'], ['Have you seen all her films? — Yes, every one of them.', 'Ты видел все её фильмы? — Да, все до одного.']],
        bad: 'I’ve seen every of her films.', good: 'I’ve seen <b>every one of</b> her films.' },
      { t: 'check', q: 'I’ve read every ___ her books — all six.', ru: 'Я прочитал все её книги до одной — все шесть.', o: ['of', 'one of', 'each of'], a: 1,
        why: 'every of не бывает → every one of.' },
      { t: 'idea', opt: true, text: `each в конце = «за штуку, на каждого»: The stickers are three dollars each. И не путайте <b>everyone</b> (слитно, = everybody, люди) и <b>every one</b> (каждый из них — люди и вещи).`,
        ex: [['It’s a hundred and twenty per night, so sixty each.', '120 за ночь, то есть по 60 с каждого.'], ['She gets invited to lots of parties and goes to every one.', 'Её зовут на кучу вечеринок, и она ходит на каждую.']] },
      { t: 'idea', text: `Итог урока: some — есть, any — «неважно какой», none of, a lot вместо much, few — почти нет, whole — целый, each — по одному.`,
        rows: [['двое или по отдельности', 'each player · each of them'], ['все, как часто', 'every country · every day'], ['каждый из', 'every one of (не every of)']] }
    ]}
  ];
})();
