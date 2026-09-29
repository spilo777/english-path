// Грамматика по шагам для юнита a2-10: сравнение -er / more + than, как выбрать -er или more (слоги, -e, удвоение, -y → -ier), особые слова better / worse / further и «как делаем» (harder, more slowly), than me, more than / less than, much / a bit, not as … as, as … as, as much / many as, the same as, «самый» the -est / the most, in / of, the best … I’ve ever, one of the best + много штук, типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a2-10'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: '«Быстрее», «дороже» — -er или more', steps: [
      { t: 'idea', text: `Хотите сказать «Этот ноутбук быстрее». В русском к слову добавляем «-ее». В английском почти так же: к короткому слову добавляем <b>-er</b>. fast (быстрый) → <b>faster</b> (быстрее).`,
        lit: [['This laptop', 'этот ноутбук'], ['is', '(есть)'], ['faster', 'быстрее']],
        ex: [['This laptop is faster.', 'Этот ноутбук быстрее.'], ['It’s colder today.', 'Сегодня холоднее.'], ['It’s cheaper to buy games on sale.', 'Дешевле покупать игры на распродаже.']],
        tip: `is не пропадает и здесь: «Этот ноутбук <i>есть</i> быстрее».` },
      { t: 'check', q: 'Скажите: «Моя клавиатура дешевле»', o: ['My keyboard cheaper.', 'My keyboard is cheaper.', 'My keyboard is more cheap.'], a: 1,
        why: 'cheap — короткое слово → cheaper, и is на месте.' },
      { t: 'idea', text: `С длинным словом -er не цепляют: перед ним ставят <b>more</b> — как русское «более». Но никогда оба сразу: «более быстрее» — ошибка и там, и тут.`,
        lit: [['This keyboard', 'эта клавиатура'], ['is', '(есть)'], ['more', 'более'], ['expensive', 'дорогая']],
        ex: [['This keyboard is more expensive.', 'Эта клавиатура дороже.'], ['This chair is more comfortable.', 'Этот стул удобнее.'], ['The new part is more interesting.', 'Новая часть интереснее.']],
        bad: 'more faster · more cheaper', good: '<b>faster</b> · <b>cheaper</b>' },
      { t: 'idea', text: `С чем сравниваем — ставим после слова <b>than</b> («чем»).`,
        lit: [['My PC', 'мой компьютер'], ['is', '(есть)'], ['faster', 'быстрее'], ['than', 'чем'], ['yours', 'твой']],
        ex: [['My PC is faster than yours.', 'Мой компьютер быстрее твоего.'], ['The new part is more interesting than the old one.', 'Новая часть интереснее старой.']],
        bad: 'My laptop is lighter then yours.', good: 'My laptop is lighter <b>than</b> yours.',
        tip: `<b>than</b> — «чем», <b>then</b> — «потом». Звучат почти одинаково. Сравнение — всегда th<b>a</b>n.` },
      { t: 'check', q: 'Скажите: «Сегодня холоднее»', o: ['Today is more cold.', 'It’s colder today.', 'It’s more colder today.'], a: 1,
        why: 'cold — короткое → colder; погода — через it, и никаких more + -er вместе.' },
      { t: 'idea', text: `Итог: короткое слово + -er, длинное — more + слово. «Чем» — than.`,
        rows: [['короткое', 'faster than…'], ['длинное', 'more expensive than…'], ['нельзя', 'more faster']] }
    ]},

    // ───────────── 2. Как выбрать ─────────────
    { title: '-er или more: как выбрать', steps: [
      { t: 'idea', text: `Считайте кусочки слова с одним гласным звуком: old — один, bo-ring — два, ex-pen-sive — три. <b>Один кусочек</b> → -er. <b>Два и больше</b> → more.`,
        rows: [['old, cheap, fast, loud', 'older, cheaper, faster, louder'], ['boring, famous, expensive', 'more boring, more famous, more expensive']] },
      { t: 'check', q: 'famous → ?', ru: 'знаменитый → знаменитее', o: ['famouser', 'more famous', 'most famouser'], a: 1,
        why: 'fa-mous — два кусочка → more famous.' },
      { t: 'idea', text: `Особый случай: слово на <b>-y</b> из двух кусочков. y меняется на i, и добавляем -er: easy → <b>easier</b>.`,
        ex: [['This level is easier.', 'Этот уровень легче.'], ['I’m busier today.', 'Сегодня я занят сильнее.'], ['My old laptop was heavier.', 'Мой старый ноутбук был тяжелее.']],
        bad: 'more easy · busyer', good: '<b>easier</b> · <b>busier</b>' },
      { t: 'idea', text: `Две мелочи в написании. Слово уже кончается на -e → добавляем только <b>-r</b>: nice → nicer, late → later. Короткое слово вида «не гласная — гласная — не гласная» удваивает последнюю букву: big → <b>bigger</b>, hot → <b>hotter</b>.`,
        rows: [['nice, late, large', 'nicer, later, larger'], ['big, hot, thin', 'bigger, hotter, thinner']] },
      { t: 'check', q: 'My new monitor is ___ than the old one.', ru: 'Мой новый монитор больше старого.', o: ['biger', 'bigger', 'more big'], a: 1,
        why: 'b-i-g: гласная между двумя не гласными → g удваиваем: bigger.' },
      { t: 'idea', text: `Несколько частых слов из двух кусочков тоже обычно берут -er: <b>quiet → quieter</b>, <b>simple</b> (простой) → <b>simpler</b>, clever → cleverer, narrow (узкий) → narrower.`,
        ex: [['This café is quieter.', 'Это кафе тише.'], ['The new app is simpler.', 'Новое приложение проще.']], opt: true },
      { t: 'idea', text: `Итог: один кусочек → -er, на -y → -ier, всё длиннее → more.`,
        rows: [['old, big, nice', 'older, bigger, nicer'], ['easy, busy', 'easier, busier'], ['comfortable', 'more comfortable']] }
    ]},

    // ───────────── 3. Особые слова и «как делаем» ─────────────
    { title: 'better, worse и «работает усерднее»', steps: [
      { t: 'idea', text: `Три слова живут по своим правилам — как went у go. Их надо просто знать в лицо.`,
        rows: [['good / well — хороший / хорошо', 'better — лучше'], ['bad / badly — плохой / плохо', 'worse — хуже'], ['far — далеко', 'further — дальше']],
        bad: 'gooder · more good · badder', good: '<b>better</b> · <b>worse</b>' },
      { t: 'check', q: 'Today I feel ___ than yesterday.', ru: 'Сегодня я чувствую себя лучше, чем вчера.', o: ['gooder', 'better', 'more good'], a: 1,
        why: 'good / well → better — особое слово.' },
      { t: 'idea', text: `Сравнивать можно не только «какой», но и «как делаем» (быстро, усердно, рано). Короткие слова так же берут -er: hard → <b>harder</b>, fast → faster, early → <b>earlier</b>.`,
        ex: [['Kate works harder than me.', 'Кейт работает усерднее меня.'], ['Can you come earlier?', 'Можешь прийти пораньше?']] },
      { t: 'idea', text: `А слова на -ly (slowly — медленно, carefully — осторожно) и often (часто) берут <b>more</b>. early — исключение: -ly здесь часть самого слова, поэтому earlier.`,
        ex: [['Please speak more slowly.', 'Говорите, пожалуйста, медленнее.'], ['I want to play more often.', 'Я хочу играть чаще.']],
        bad: 'Speak slowlier.', good: 'Speak <b>more slowly</b>.' },
      { t: 'check', q: 'Please drive ___.', ru: 'Пожалуйста, веди машину осторожнее.', o: ['carefullier', 'more carefully', 'more careful'], a: 1,
        why: 'Слово на -ly (carefully) → more carefully.' },
      { t: 'idea', text: `Итог: good → better, bad → worse, far → further. «Как делаем»: короткое + -er, на -ly — more.`,
        rows: [['особые', 'better, worse, further'], ['как делаем', 'harder, earlier, more slowly']] }
    ]},

    // ───────────── 4. than, much, a bit ─────────────
    { title: '«Намного больше, чем я» — than, much, a bit', steps: [
      { t: 'idea', text: `Хотите сказать «Она выше меня». После than в разговоре ставят <b>me, him, her, us, them</b> — не I и не she.`,
        lit: [['She’s', 'она (есть)'], ['taller', 'выше'], ['than', 'чем'], ['me', 'я / меня']],
        ex: [['She’s taller than me.', 'Она выше меня.'], ['He plays better than her.', 'Он играет лучше неё.'], ['You play more than me.', 'Ты играешь больше меня.']] },
      { t: 'idea', text: `Можно и полностью — со словом-действием после I / she: than <b>I am</b>, than <b>she does</b>, than <b>we did</b>. Это чуть официальнее.`,
        rows: [['She’s taller than me.', 'She’s taller than I am.'], ['He plays better than her.', 'He plays better than she does.']], opt: true },
      { t: 'check', q: 'Tom runs faster than ___.', ru: 'Том бегает быстрее меня.', o: ['me', 'my', 'mine'], a: 0,
        why: 'После than в разговоре — me.' },
      { t: 'idea', text: `«Намного» перед сравнением — <b>much</b> или <b>a lot</b>. «Немного» — <b>a bit</b> или <b>a little</b>. very со сравнением не ставят.`,
        lit: [['Moscow', 'Москва'], ['is', '(есть)'], ['much', 'намного'], ['bigger', 'больше'], ['than', 'чем'], ['Kazan', 'Казань']],
        ex: [['Moscow is much bigger than Kazan.', 'Москва намного больше Казани.'], ['Max is a bit older than Kate.', 'Макс немного старше Кейт.']],
        bad: 'This game is very better.', good: 'This game is <b>much</b> better.' },
      { t: 'check', q: 'The new phone is ___ more expensive than the old one.', ru: 'Новый телефон намного дороже старого.', o: ['very', 'much', 'more'], a: 1,
        why: '«Намного» перед сравнением — much, не very.' },
      { t: 'idea', text: `«Больше, чем» и «меньше, чем» — <b>more than</b> и <b>less than</b>. Часто — с числами.`,
        ex: [['The game costs more than seventy dollars.', 'Игра стоит больше семидесяти долларов.'], ['The episode was less than twenty minutes.', 'Серия шла меньше двадцати минут.']] },
      { t: 'idea', text: `Итог: X is + -er / more + than Y. Намного — much, немного — a bit.`,
        rows: [['намного', 'much bigger than me'], ['немного', 'a bit older than Kate'], ['больше / меньше', 'more than 70, less than 20']] }
    ]},

    // ───────────── 5. not as … as, the same as ─────────────
    { title: '«Не такой быстрый, как» — not as … as', steps: [
      { t: 'idea', text: `Часто вежливее сказать «не такой хороший, как», чем «хуже». Для этого — <b>not as</b> + обычное слово + <b>as</b>. Без -er и без more!`,
        lit: [['The sequel', 'продолжение'], ['isn’t', 'не (есть)'], ['as', 'такое'], ['good', 'хорошее'], ['as', 'как'], ['the first game', 'первая игра']],
        ex: [['The sequel isn’t as good as the first game.', 'Продолжение не такое хорошее, как первая игра.'], ['Kazan isn’t as big as Moscow.', 'Казань не такая большая, как Москва.'], ['Your drawing is as good as mine.', 'Твой рисунок такой же хороший, как мой.']],
        tip: `Без not — «такой же… как»: as good as.` },
      { t: 'check', q: 'My laptop isn’t as ___ as yours.', ru: 'Мой ноутбук не такой быстрый, как твой.', o: ['fast', 'faster', 'fastest'], a: 0,
        why: 'Между as … as — обычная форма слова, без -er.' },
      { t: 'idea', text: `«Не так много» — <b>as much as</b>, если это не считают штуками (time, money), и <b>as many as</b>, если штуки (people, games). После as, как после than, — me / him / her.`,
        ex: [['She isn’t as old as me.', 'Она не такая взрослая, как я.'], ['I don’t play as often as you.', 'Я играю не так часто, как ты.'], ['I don’t have as much free time as you.', 'У меня не так много свободного времени, как у тебя.'], ['I don’t know as many people as Max.', 'Я знаю не так много людей, как Макс.'], ['I don’t go out as much as you.', 'Я выхожу из дома не так часто, как ты.']] },
      { t: 'check', q: 'I don’t have as ___ free time as you.', ru: 'У меня не так много свободного времени, как у тебя.', o: ['many', 'much', 'more'], a: 1,
        why: 'Время штуками не считают → as much as.' },
      { t: 'idea', text: `«Такой же, как» и «то же, что» — <b>the same as</b>. Не like!`,
        ex: [['My phone is the same as yours.', 'У меня такой же телефон, как у тебя.'], ['My chair is the same colour as yours.', 'Мой стул того же цвета, что и твой.'], ['I finished at the same time as Kate.', 'Я закончил одновременно с Кейт.']],
        bad: 'the same like yours', good: 'the same <b>as</b> yours' },
      { t: 'check', q: 'My keyboard is the same ___ yours.', ru: 'У меня такая же клавиатура, как у тебя.', o: ['like', 'as', 'than'], a: 1,
        why: '«Такой же, как» — the same as.' },
      { t: 'idea', text: `Итог: -er / more дружит с than, а as — с as. Не смешивайте.`,
        rows: [['не такой, как', 'not as fast as'], ['такой же, как', 'as good as · the same as'], ['нельзя', 'not as fast than · older as']] }
    ]},

    // ───────────── 6. «Самый» ─────────────
    { title: '«Самый старый», «самый дорогой»', steps: [
      { t: 'idea', text: `Когда что-то больше (лучше, дороже) <b>всех</b> — это «самый». Короткое слово: <b>the</b> + слово + <b>-est</b>. Длинное: <b>the most</b> + слово.`,
        lit: [['It’s', 'это'], ['the', '(тот самый)'], ['biggest', 'самая большая'], ['map', 'карта'], ['in the game', 'в игре']],
        ex: [['It’s the biggest map in the game.', 'Это самая большая карта в игре.'], ['It’s the most expensive keyboard in the shop.', 'Это самая дорогая клавиатура в магазине.']],
        rows: [['old, big, easy', 'the oldest, the biggest, the easiest'], ['expensive', 'the most expensive'], ['good, bad, far', 'the best, the worst, the furthest']] },
      { t: 'idea', text: `Слово <b>the</b> обязательно — даже когда после «самого» ничего нет.`,
        ex: [['Kate is the best player in our team.', 'Кейт — лучший игрок в нашей команде.'], ['Max is good, but Kate is the best.', 'Макс хорош, но Кейт лучше всех.']],
        bad: 'He is best player. · the most best', good: 'He is <b>the</b> best player. · <b>the best</b>' },
      { t: 'check', q: 'Kate is ___ player in our team.', ru: 'Кейт — лучший игрок в нашей команде.', o: ['the best', 'the better', 'best'], a: 0,
        why: 'Лучше всех → the best, с the.' },
      { t: 'idea', text: `«Самый в…» — <b>in</b> + место или группа: in the world, in our team, in the city. Но: of the year, of all.`,
        ex: [['It’s the biggest city in Russia.', 'Это самый большой город в России.'], ['Where is the nearest metro station?', 'Где ближайшая станция метро?'], ['It’s the best game of the year.', 'Это лучшая игра года.']],
        bad: 'the biggest city of Russia', good: 'the biggest city <b>in</b> Russia' },
      { t: 'idea', text: `«Самый… из всех, что я видел» — the best / the worst + <b>I’ve ever</b> + третья форма (seen, played). Помните I’ve ever из урока про Present Perfect? Тот же кусочек.`,
        lit: [['It’s', 'это'], ['the worst', 'худший'], ['film', 'фильм'], ['I’ve ever seen', 'что я когда-либо видел']],
        ex: [['It’s the worst film I’ve ever seen.', 'Это худший фильм, что я видел.'], ['This is the best game I’ve ever played.', 'Это лучшая игра, в которую я играл.'], ['What’s the most expensive thing you’ve ever bought?', 'Какая самая дорогая вещь, что ты покупал?']] },
      { t: 'check', q: 'This is ___ game I’ve ever played.', ru: 'Это лучшая игра, в которую я играл.', o: ['the better', 'the best', 'best'], a: 1,
        why: '«Самый» + I’ve ever → the best, с the.' },
      { t: 'idea', text: `Итог: «самый» — the -est или the most, с in для места.`,
        rows: [['короткое', 'the oldest, the best'], ['длинное', 'the most expensive'], ['из всех, что…', 'the best … I’ve ever seen']] }
    ]},

    // ───────────── 7. Типичные ошибки ─────────────
    { title: '«Один из лучших» и проверка себя', steps: [
      { t: 'idea', text: `Последняя мелочь. «Один из самых» — <b>one of the</b> + -est + много штук (games, films).`,
        ex: [['It’s one of the best games of the year.', 'Это одна из лучших игр года.']],
        bad: 'one of the best game', good: 'one of the best <b>games</b>' },
      { t: 'check', q: 'It’s one of the best ___ of the year.', ru: 'Это один из лучших фильмов года.', o: ['film', 'films', 'filmes'], a: 1,
        why: 'one of the best + много штук → films.' },
      { t: 'check', q: 'This level isn’t as easy ___ the first.', ru: 'Этот уровень не такой лёгкий, как первый.', o: ['than', 'as', 'that'], a: 1,
        why: 'not as … as — второе слово тоже as.' },
      { t: 'check', q: 'He’s the tallest ___ the class.', ru: 'Он самый высокий в классе.', o: ['of', 'in', 'than'], a: 1,
        why: 'Самый в группе → in the class.' },
      { t: 'idea', text: `Итог урока: короткое -er, длинное more + than · much / a bit · not as … as · «самый» — the -est / the most + in. Частые ошибки — слева, как надо — справа:`,
        rows: [['more cheaper · very bigger · older as me', 'cheaper · much bigger · older than me'], ['not as easy than · the same like', 'not as easy as · the same as'], ['the most best · one of the best film', 'the best · one of the best films']] }
    ]}
  ];
})();
