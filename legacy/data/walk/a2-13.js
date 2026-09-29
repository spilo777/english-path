// Грамматика по шагам для юнита a2-13: английский не оставляет «дырок» (one вместо повтора), one / ones, one или it, most people / most of my friends, all / most / some / any / none + of them / of it, both / either / neither, both of them / neither of us, a few / a little и few / little, типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a2-13'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея + one ─────────────
    { title: '«Синяя» — английский не оставляет пустоты', steps: [
      { t: 'idea', text: `Хотите ответить: «Какая куртка твоя? — Синяя». По-русски слово «куртка» выбросили, и всё понятно. По-английски пустое место нельзя: туда встаёт заменитель <b>one</b> (одна такая вещь).`,
        lit: [['The blue', 'синяя'], ['one', '(та, одна)']],
        ex: [['Which jacket is yours? — The blue one.', 'Какая куртка твоя? — Синяя.'], ['Which skin do you like? — This one. No, that one!', 'Какой скин нравится? — Этот. Нет, вон тот!'], ['Which one is yours?', 'Который твой?']],
        tip: `Правило всего урока: если в русском после «синяя», «оба», «большинство» висит пустота — в английском туда просится <b>one / ones</b> или <b>of them / of us</b>.` },
      { t: 'idea', text: `Хотите сказать «Мне нужна ручка. У тебя есть?». По-английски после have тоже нужна вещь — снова <b>one</b>. Здесь one = a pen (какая-нибудь ручка).`,
        lit: [['Do you', '(вопрос)'], ['have', 'иметь'], ['one', '(одну такую)']],
        ex: [['I need a pen. Do you have one?', 'Мне нужна ручка. У тебя есть?'], ['Is there a supermarket near here? — Yes, there’s one on the corner.', 'Тут есть супермаркет? — Да, на углу.'], ['That cookie was great. I’ll have another one.', 'Классное печенье (cookie). Возьму ещё одно.']] },
      { t: 'check', q: 'Скажите: «Мне нужна зарядка. У тебя есть?»', o: ['I need a charger. Do you have?', 'I need a charger. Do you have one?', 'I need a charger. Do you have ones?'], a: 1,
        why: 'Одна любая зарядка → one. Пустое место после have нельзя.' },
      { t: 'check', q: 'Скажите: «Чёрный логотип мне не нравится, а белый — да»', o: ['I don’t like the black logo, but I like the white.', 'I don’t like the black logo, but I like the white one.', 'I don’t like the black logo, but I like the white ones.'], a: 1,
        why: 'Логотип один → the white one. Просто the white — пустота.' },
      { t: 'idea', text: `Итог: вместо повтора одной вещи ставим <b>one</b>.`,
        rows: [['после «какой-нибудь»', 'Do you have one?'], ['после «синий, этот, ещё»', 'the blue one · this one · another one']] }
    ]},

    // ───────────── 2. ones; one или it ─────────────
    { title: 'Много вещей — ones. И чем one отличается от it', steps: [
      { t: 'idea', text: `Хотите сказать «Старые наушники сломались. Куплю новые». Вещей много — поэтому не one, а <b>ones</b>. Работает так же: the red ones, new ones, Which ones?`,
        lit: [['I’ll buy', 'куплю'], ['new', 'новые'], ['ones', '(такие)']],
        ex: [['My sneakers are very old. I need some new ones.', 'Кроссовки старые. Нужны новые.'], ['Which books are yours? — The ones on the table.', 'Какие книги твои? — Те, что на столе.'], ['I like these ones.', 'Мне нравятся вот эти.']],
        bad: 'My headphones are broken. I need new one.', good: 'I need new <b>ones</b>.' },
      { t: 'check', q: 'These glasses are dirty. Can we have some clean ___?', ru: 'Эти стаканы грязные. Можно нам чистые?', o: ['one', 'ones', 'it'], a: 1,
        why: 'Стаканов много → ones.' },
      { t: 'idea', text: `А почему не <b>it</b>? it — это <b>тот самый</b> предмет. one — <b>какой-нибудь такой же</b>, другой.`,
        ex: [['I’ve lost my phone. I can’t find it.', 'Не могу найти свой телефон (тот самый).'], ['I’ve lost my phone. I need to buy a new one.', 'Нужно купить другой телефон.']],
        tip: `it = «его, тот же». one = «такой же, но другой».` },
      { t: 'check', q: 'I broke my mouse, so I bought a new ___.', ru: 'Я сломал мышку, поэтому купил новую.', o: ['it', 'one', 'ones'], a: 1,
        why: 'Новая, другая мышь (одна) → one. it было бы про ту же сломанную.' },
      { t: 'idea', opt: true, text: `Две мелочи. Буква a уже «спрятана» внутри one: не a one. И one / ones — только для того, что можно посчитать; для воды, денег, времени — some / any.`,
        bad: 'Yes, there’s a one on the left.', good: 'Yes, there’s <b>one</b> on the left. · I need some water. Do you have <b>any</b>?' },
      { t: 'idea', text: `Итог: одна вещь — <b>one</b>, много — <b>ones</b>, тот самый предмет — <b>it</b>.`,
        rows: [['одна такая же', 'the red one · a new one'], ['много таких же', 'the red ones · new ones'], ['тот самый', 'I can’t find it.']] }
    ]},

    // ───────────── 3. most people / most of my friends ─────────────
    { title: '«Большинство людей» и «большинство моих друзей»', steps: [
      { t: 'idea', text: `Хотите сказать «Большинство людей любят музыку». Это про людей <b>вообще</b> — берём <b>most</b> и сразу слово, без of. Так же all, some, no.`,
        lit: [['Most', 'большинство'], ['people', 'людей'], ['like', 'любят'], ['music', 'музыку']],
        ex: [['Most people like music.', 'Большинство людей любят музыку.'], ['Some games are too long.', 'Некоторые игры слишком длинные.'], ['He has no friends here.', 'У него тут нет друзей.']],
        tip: `«Вообще» — это когда перед словом нет the / my / these: Children like cartoons (дети вообще). Where are the children? — это уже наши, конкретные дети.` },
      { t: 'idea', text: `А «большинство <b>моих</b> друзей» — это конкретная группа (the, my, these, Kate’s). Тогда нужен <b>of</b> («из»): most of, some of, any of, none of (ни один из).`,
        lit: [['Most', 'большинство'], ['of', 'из'], ['my friends', 'моих друзей']],
        ex: [['Most of my friends play on PC.', 'Большинство моих друзей играют на ПК.'], ['Some of these games are free.', 'Некоторые из этих игр бесплатные.'], ['None of my friends live near me.', 'Никто из моих друзей не живёт рядом.']],
        tip: `С all слово of можно пропустить: all the players = all of the players, all my life = all of my life.` },
      { t: 'check', q: '___ designers use Figma today.', ru: 'Большинство дизайнеров сегодня пользуются Figma.', o: ['Most of', 'Most', 'The most'], a: 1,
        why: 'Дизайнеры вообще, без the / my → Most.' },
      { t: 'idea', text: `Частая ловушка: «большинство» — это просто <b>most</b>, без the. А <b>the most</b> — это «самый» из прошлого урока (the most interesting).`,
        bad: 'The most of my friends are gamers. · Most of people drive too fast.', good: '<b>Most of</b> my friends are gamers. · <b>Most people</b> drive too fast.' },
      { t: 'check', q: '___ the levels in this game are easy.', ru: 'Большинство уровней в этой игре лёгкие.', o: ['Most', 'Most of', 'The most of'], a: 1,
        why: 'Перед the (конкретная группа) → most of.' },
      { t: 'idea', text: `Итог: вообще — без of, конкретная группа — с of.`,
        rows: [['вообще', 'Most people like music.'], ['из группы: the / my / these', 'Most of my friends play on PC.'], ['«ни один из»', 'None of my friends live here.']] }
    ]},

    // ───────────── 4. all of it, most of them ─────────────
    { title: '«Большинство из них», «весь» — of them, of it', steps: [
      { t: 'idea', text: `Хотите сказать «Большинство из них — из Бразилии». Перед словами <b>them, us, you, it</b> (их, нас, вас, его) после all / most / some / any / none всегда стоит <b>of</b>.`,
        lit: [['Most', 'большинство'], ['of', 'из'], ['them', 'них'], ['are', '(есть)'], ['from Brazil', 'из Бразилии']],
        ex: [['Some of us are going out tonight.', 'Некоторые из нас идут гулять вечером.'], ['None of us knew the answer.', 'Никто из нас не знал ответа.'], ['Most of you have played this level.', 'Большинство из вас проходили этот уровень.']],
        bad: 'I know all them. · Most them are from Brazil.', good: 'I know <b>all of them</b>. · <b>Most of them</b> are from Brazil.' },
      { t: 'check', q: 'I got a lot of emails, but I didn’t read ___.', ru: 'Мне пришло много писем, но я не прочитал ни одного.', o: ['any them', 'any of them', 'any of it'], a: 1,
        why: 'Перед them всегда of; писем много → them.' },
      { t: 'idea', text: `them или it? <b>them</b> — про много вещей или людей. <b>it</b> — про одну вещь или то, что не считаем (торт, деньги, серия).`,
        ex: [['I bought a pizza and ate all of it.', 'Я купил пиццу и съел всю.'], ['You can have some of this cake, but not all of it.', 'Можешь взять немного торта, но не весь.'], ['How many of these films have you seen? — None of them.', 'Сколько из этих фильмов ты видел? — Ни одного.']] },
      { t: 'check', q: 'This series is great. I watched all of ___ in two days.', ru: 'Этот сериал классный. Я посмотрел его весь за два дня.', o: ['them', 'it', 'one'], a: 1,
        why: 'Сериал один, целиком → all of it.' },
      { t: 'idea', text: `Итог: перед them / us / you / it — всегда <b>of</b>.`,
        rows: [['много', 'all of them · most of us · none of them'], ['одна вещь / не считаем', 'all of it · some of it']] }
    ]},

    // ───────────── 5. both, either, neither ─────────────
    { title: 'Когда их ровно два: both, either, neither', steps: [
      { t: 'idea', text: `Хотите сказать «Обе игры отличные». Про <b>две</b> вещи — <b>both</b> (оба, обе). После both слово стоит во множественном: both games.`,
        lit: [['Both', 'обе'], ['games', 'игры'], ['are', '(есть)'], ['great', 'отличные']],
        ex: [['I’ve played Portal and Portal 2. Both games are great.', 'Обе игры отличные.'], ['Pizza or burgers? — Both!', 'Пицца или бургеры? — И то, и другое!']],
        bad: 'Both game are good.', good: 'Both <b>games</b> are good.',
        tip: `Если вариантов три и больше — не both, а <b>all</b>: All three games are good.` },
      { t: 'idea', text: `<b>either</b> — «любой из двух, всё равно какой». <b>neither</b> — «ни тот, ни другой». После них слово в единственном: either server, neither font.`,
        ex: [['There are two servers. You can play on either server.', 'Можно играть на любом из двух.'], ['Tea or coffee? — Either. I don’t mind.', 'Чай или кофе? — Любое, мне всё равно.'], ['Tea or coffee? — Neither, thanks.', 'Ничего, спасибо.']],
        tip: `Для трёх и больше вместо neither — <b>none</b>: None of the five fonts looked good.` },
      { t: 'check', q: 'Would you like the red one or the blue one? — ___. I don’t mind.', ru: 'Тебе красный или синий? — Любой. Мне всё равно.', o: ['Neither', 'Either', 'Both'], a: 1,
        why: '«Любой, мне всё равно» → Either.' },
      { t: 'idea', text: `Помните правило одного минуса из прошлого урока? <b>neither</b> = not + either. Поэтому или <b>not … either</b>, или <b>neither</b> без not.`,
        bad: 'I don’t want neither.', good: 'I don’t want <b>either</b>. / <b>Neither</b>.' },
      { t: 'check', q: 'I don’t like ___ of these two songs.', ru: 'Мне не нравится ни одна из этих двух песен.', o: ['neither', 'either', 'both'], a: 1,
        why: 'Уже есть don’t → either. neither дал бы два минуса.' },
      { t: 'idea', text: `Итог: both, either, neither — только про двоих.`,
        rows: [['both + много', 'both games — обе'], ['either + одно', 'either game — любая из двух'], ['neither + одно', 'neither game — ни одна (без not)']] }
    ]},

    // ───────────── 6. both of them, neither of us ─────────────
    { title: '«Никто из нас двоих» — both of them, neither of us', steps: [
      { t: 'idea', text: `Хотите сказать «Никто из нас двоих не был голоден». Как и most, эти три слова цепляются к группе через <b>of</b>: both / either / neither of + the, my, them, us.`,
        lit: [['Neither', 'ни один'], ['of', 'из'], ['us', 'нас'], ['was', 'был'], ['hungry', 'голоден']],
        ex: [['Paul has two sisters. Both of them are married.', 'У Пола две сестры. Обе замужем.'], ['Neither of my parents plays games.', 'Никто из моих родителей не играет.'], ['I don’t know either of them.', 'Я не знаю ни одного из них.']],
        tip: `После neither of по правилам ставят was, plays. В разговоре часто слышно и were, play — это тоже нормально.` },
      { t: 'idea', text: `Когда of можно пропустить? Только у <b>both</b> перед the / my / these. Перед them / us / you — of нужен всегда.`,
        rows: [['both + the / my', 'both (of) my brothers'], ['either / neither + the / my', 'neither of my brothers'], ['любое + them / us / you', 'both of them · neither of us']],
        bad: 'Neither my friends is here. · Both them are online.', good: 'Neither <b>of</b> my friends is here. · Both <b>of</b> them are online.' },
      { t: 'check', q: 'Max and I tried, but ___ us could beat the boss.', ru: 'Мы с Максом пытались, но ни один из нас не смог победить босса.', o: ['neither', 'neither of', 'either of'], a: 1,
        why: 'Перед us нужен of; у could нет not → neither of.' },
      { t: 'check', q: 'I’ve got two brothers. Both ___ are designers.', ru: 'У меня два брата. Оба дизайнеры.', o: ['them', 'of them', 'of it'], a: 1,
        why: 'Перед them нужен of; братьев двое → them.' },
      { t: 'idea', text: `Итог: к группе — через <b>of</b>; перед them / us — of всегда.`,
        rows: [['оба из них', 'both of them'], ['любой из вас', 'either of you'], ['никто из нас', 'neither of us']] }
    ]},

    // ───────────── 7. a few, a little ─────────────
    { title: '«Немного» и «мало»: a little, a few', steps: [
      { t: 'idea', text: `Хотите сказать «Я немного говорю по-испански». Для того, что <b>не считаем</b> (время, деньги, вода, язык), «немного» — <b>a little</b>.`,
        lit: [['I', 'я'], ['speak', 'говорю'], ['a little', 'немного'], ['Spanish', 'по-испански']],
        ex: [['I speak a little Spanish.', 'Я немного говорю по-испански.'], ['Can you wait a little? I’m almost ready.', 'Подождёшь немного? Я почти готов.'], ['Do you play chess? — A little.', 'Играешь в шахматы? — Немного.']] },
      { t: 'idea', text: `Для того, что <b>считаем</b> (дни, друзья, вопросы), «несколько» — <b>a few</b>.`,
        ex: [['We’re going to the sea for a few days.', 'Едем на море на несколько дней.'], ['I have a few questions about the brief.', 'У меня пара вопросов по брифу.'], ['Are there any cafés near the office? — Yes, a few.', 'Да, несколько.']],
        tip: `Пары из прошлых уроков: a little — как much (не считаем), a few — как many (считаем).`,
        bad: 'I have a few time. · She has a little friends.', good: 'I have <b>a little</b> time. · She has <b>a few</b> friends.' },
      { t: 'check', q: 'Can I ask you ___ questions?', ru: 'Можно задать тебе несколько вопросов?', o: ['a little', 'a few', 'little'], a: 1,
        why: 'Вопросы можно посчитать → a few.' },
      { t: 'idea', text: `Буква a очень важна. Без неё <b>little / few</b> = «мало, почти нет» — упор на то, что не хватает.`,
        ex: [['I have a little money, so let’s get a coffee.', 'Деньги есть — хватит на кофе.'], ['I have little money, so I can’t buy the new game.', 'Денег почти нет.'], ['Few people came to the meetup.', 'На встречу (meetup) пришло мало людей.']],
        tip: `В разговоре вместо little / few часто говорят not much / not many: I don’t have much time.` },
      { t: 'check', q: 'The café was almost empty. There were ___ people.', ru: 'Кафе было почти пустое. Людей было мало.', o: ['a few', 'few', 'a little'], a: 1,
        why: 'Почти пусто = мало, почти нет → few (без a).' },
      { t: 'idea', text: `Итог: с a — «немного, есть», без a — «мало, почти нет».`,
        rows: [['не считаем', 'a little time — немного · little time — почти нет'], ['считаем', 'a few days — несколько · few days — почти нет']] }
    ]},

    // ───────────── 8. Ловушки ─────────────
    { title: 'Ловушки: проверьте себя', steps: [
      { t: 'idea', text: `Почти все ошибки урока — про пустоту или про of. Пустоту после «синий» закрываем one / ones, а перед my / them ставим of.`,
        bad: 'I don’t like the black, I like the white. · I’ve read all them.', good: 'I don’t like the black <b>one</b>, I like the white <b>one</b>. · I’ve read <b>all of them</b>.' },
      { t: 'check', q: 'Скажите: «Большинство людей играют на телефонах»', o: ['Most of people play on phones.', 'Most people play on phones.', 'The most people play on phones.'], a: 1,
        why: 'Люди вообще → Most people, без of и без the.' },
      { t: 'check', q: 'Скажите: «Никто из нас не знал ответа»', o: ['Nobody of us knew the answer.', 'None of us knew the answer.', 'None us knew the answer.'], a: 1,
        why: '«Никто из» группы → none of; перед us — of.' },
      { t: 'check', q: 'I have ___ friends here, so I’m never lonely.', ru: 'У меня тут есть несколько друзей, поэтому мне никогда не одиноко.', o: ['few', 'a few', 'a little'], a: 1,
        why: 'Друзья есть (плюс), их считаем → a few.' },
      { t: 'idea', text: `Итог урока: не оставляйте пустоту, к группе цепляйтесь через of, про двоих — both / either / neither.`,
        rows: [['вместо повтора', 'the blue one · new ones'], ['из группы', 'most people, но most of my friends / most of them'], ['немного', 'a little (не считаем) · a few (считаем)']] }
    ]}
  ];
})();
