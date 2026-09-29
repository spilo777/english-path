// Грамматика по шагам для юнита b1-23: повтор формы сравнения (-ier, more slowly, further, elder), much / far / slightly / a bit + сравнение, very нельзя, even + сравнение; no bigger / isn’t any bigger / any better? / not … any longer; better and better, more and more; the more…, the more…, the sooner the better; not as … as, less … than, the same as, than me; as … as, as soon as possible, twice as … as; «самый» in / of, the best … I’ve ever…, one of the + много штук; порядок слов (глагол + что, где → когда), always / probably / all / both в середине, have to, probably перед won’t, короткий ответ; still / yet / still hasn’t / any more (повтор), still = «всё равно», already в конце, no longer; even — «даже», not even, even though / even if / even when; итог.
(function () {
  const u = COURSE.units.find((x) => x.id === 'b1-23'); if (!u) return;
  u.walk = [
    // ───────────── 1. Форма сравнения: повтор и пограничные случаи ─────────────
    { title: 'Вспоминаем: -er, more и хитрые случаи', steps: [
      { t: 'idea', text: `Вы уже умеете сравнивать (урок a2-10): короткое слово + <b>-er</b>, длинное — <b>more</b> + слово, «самый» — the -est / the most. Теперь научимся говорить точнее: насколько лучше, как что-то меняется и от чего зависит.`,
        ex: [['It’s far better now.', 'Сейчас гораздо лучше.'], ['It’s getting harder and harder.', 'Становится всё сложнее и сложнее.'], ['The sooner the better.', 'Чем раньше, тем лучше.'], ['He didn’t even say hello.', 'Он даже не поздоровался.']],
        tip: `Русское «больше» по-английски бывает трёх видов: <b>more</b> (больше по количеству), <b>not … any more</b> (больше не — перестал) и <b>even</b> + сравнение (ещё больше). Всё это — в этом уроке.` },
      { t: 'idea', text: `Два пограничных случая. Слово из двух кусочков на <b>-y</b> меняет y на <b>-ier</b>: easy → easier. А «как делаем» на <b>-ly</b> (slowly — медленно) берёт more: <b>more slowly</b>.`,
        rows: [['early, easy, busy', 'earlier, easier, busier'], ['slowly, carefully', 'more slowly, more carefully']],
        bad: 'Speak slowlier. · It’s more easy.', good: 'Speak <b>more slowly</b>. · It’s <b>easier</b>.',
        tip: `quiet и simple можно и так, и так: quieter = more quiet. Ошибкой не будет.` },
      { t: 'check', q: 'Could you talk a bit ___? My English isn’t that good yet.', ru: 'Можешь говорить чуть медленнее? Мой английский пока не настолько хорош.', o: ['slowlier', 'more slowly', 'more slow'], a: 1,
        why: 'slowly кончается на -ly → more slowly.' },
      { t: 'idea', opt: true, text: `Две мелочи. <b>further</b> — не только «дальше», но и «дополнительный, ещё»: further questions. А <b>elder</b> (старший) — только про семью и только перед словом: my elder brother; в остальных случаях — older.`,
        ex: [['Do you have any further questions?', 'У вас есть ещё вопросы?'], ['My elder sister lives in Kazan.', 'Моя старшая сестра живёт в Казани.'], ['My sister is older than me.', 'Моя сестра старше меня.']],
        bad: 'My brother is elder than me. · He looks elder than he is.', good: 'My brother is <b>older</b> than me. · He looks <b>older</b> than he is.',
        tip: `Так же и eldest: their eldest son (их старший сын), но the oldest building in town (самое старое здание в городе).` },
      { t: 'idea', text: `Итог: форму сравнения вы знаете, добавили -ier и more slowly.`,
        rows: [['короткое / на -y', 'faster, easier'], ['длинное / на -ly', 'more convenient, more slowly'], ['особые', 'better, worse, further']] }
    ]},

    // ───────────── 2. Насколько: much / far / slightly, even ─────────────
    { title: '«Гораздо лучше», «чуть быстрее», «ещё лучше»', steps: [
      { t: 'idea', text: `Хотите сказать «Новая версия гораздо стабильнее». Помните much и a bit перед сравнением? Добавим ещё два слова: <b>far</b> — «гораздо» и <b>slightly</b> — «чуть-чуть, едва заметно».`,
        lit: [['The new version', 'новая версия'], ['is', '(есть)'], ['far', 'гораздо'], ['more stable', 'стабильнее']],
        ex: [['The new version is far more stable.', 'Новая версия гораздо стабильнее (stable — стабильный).'], ['This font is slightly bigger.', 'Этот шрифт чуть крупнее.'], ['I felt terrible in the morning, but I feel a lot better now.', 'Утром было ужасно, а сейчас мне гораздо лучше.']],
        bad: 'This laptop is very faster. · It’s more better.', good: 'This laptop is <b>much / far</b> faster. · It’s <b>much</b> better.',
        tip: `very — только с обычным словом: very fast. Со сравнением — much / far / a lot.` },
      { t: 'check', q: 'Скажите: «Новое меню гораздо удобнее»', o: ['The new menu is very more convenient.', 'The new menu is far more convenient.', 'The new menu is far convenienter.'], a: 1,
        why: '«Гораздо» → far; convenient — длинное слово → more convenient.' },
      { t: 'idea', text: `Первый сезон был отличный, а второй — <b>ещё</b> лучше. «Ещё» перед сравнением — это <b>even</b>: и так уже было хорошо, а стало ещё сильнее.`,
        lit: [['The second one', 'второй'], ['is', '(есть)'], ['even', 'ещё'], ['better', 'лучше']],
        ex: [['The first season was great, but the second one is even better.', 'Первый сезон был отличный, а второй ещё лучше.'], ['I got up at six, but Tom got up even earlier.', 'Я встал в шесть, а Том — ещё раньше.']],
        bad: 'The second season is more better.', good: 'The second season is <b>even</b> better.' },
      { t: 'check', q: 'The first part was bad, and the second one is ___ worse.', ru: 'Первая часть была плохой, а вторая — ещё хуже.', o: ['very', 'even', 'more'], a: 1,
        why: 'И так было плохо, а стало «ещё хуже» → even worse.' },
      { t: 'idea', text: `Итог: «насколько» ставим прямо перед сравнением. very сюда не встаёт.`,
        rows: [['гораздо', 'much / far / a lot + better'], ['чуть-чуть', 'a bit / slightly + bigger'], ['ещё (и так уже)', 'even + better']] }
    ]},

    // ───────────── 3. no bigger, any better, any longer ─────────────
    { title: '«Ничуть не больше» и «хоть немного лучше»', steps: [
      { t: 'idea', text: `Хотите сказать «Их офис ничуть не больше нашего». Ставим <b>no</b> прямо перед сравнением: no bigger. no уже значит «не» — второе not не нужно.`,
        lit: [['Their office', 'их офис'], ['is', '(есть)'], ['no bigger', 'ничуть не больше'], ['than ours', 'нашего']],
        ex: [['Their office is no bigger than ours.', 'Их офис ничуть не больше нашего.'], ['The Pro version is faster, and it’s no more expensive.', 'Pro-версия быстрее и при этом ничуть не дороже.'], ['The update is no bigger than 2 GB.', 'Обновление не больше 2 ГБ.']] },
      { t: 'check', q: 'The new version is faster, and it’s ___ expensive.', ru: 'Новая версия быстрее и при этом ничуть не дороже.', o: ['no more', 'any more', 'nothing more'], a: 0,
        why: '«Ничуть не» → no + сравнение: no more expensive.' },
      { t: 'idea', text: `То же можно сказать через обычное «не» + <b>any</b>: isn’t any bigger = is no bigger. А в вопросе any значит «хоть немного»: Do you feel any better?`,
        ex: [['It isn’t any bigger than ours.', 'Он ничуть не больше нашего.'], ['Do you feel any better?', 'Тебе хоть немного лучше?'], ['I’m not waiting any longer.', 'Я больше ни минуты не жду.']],
        bad: 'It isn’t no bigger.', good: 'It <b>isn’t any</b> bigger. / It’s <b>no</b> bigger.',
        tip: `not … any longer — родственник not … any more из урока a2-22: «больше не», про время.` },
      { t: 'check', q: 'I’ve waited for an hour. I’m not waiting ___!', ru: 'Я жду уже час. Больше ни минуты не жду!', o: ['no longer', 'any longer', 'more long'], a: 1,
        why: 'not уже есть → any longer. not + no — двойное «не».' },
      { t: 'idea', text: `Итог: any и no перед сравнением — «хоть немного» и «ничуть не».`,
        rows: [['ничуть не', 'no bigger = isn’t any bigger'], ['хоть немного?', 'Do you feel any better?'], ['больше не (время)', 'not … any longer']] }
    ]},

    // ───────────── 4. better and better; the more…, the more… ─────────────
    { title: '«Всё лучше и лучше» и «чем больше, тем…»', steps: [
      { t: 'idea', text: `Хотите сказать «Твой английский всё лучше и лучше». Повторяем сравнение два раза через <b>and</b>: better and better. С длинным словом — <b>more and more</b> + слово один раз.`,
        lit: [['Your English', 'твой английский'], ['is getting', 'становится'], ['better and better', 'всё лучше и лучше']],
        ex: [['Your English is getting better and better.', 'Твой английский всё лучше и лучше.'], ['Graphics cards are getting more and more expensive.', 'Видеокарты всё дороже и дороже.'], ['More and more people play indie games.', 'Всё больше людей играют в инди-игры.']],
        bad: 'It’s getting more and more better.', good: 'It’s getting <b>better and better</b>.' },
      { t: 'check', q: 'Скажите: «Игра становится всё сложнее и сложнее»', o: ['The game is getting harder and harder.', 'The game is getting more and more harder.', 'The game is getting hard and hard.'], a: 0,
        why: 'hard — короткое слово → harder and harder, без more.' },
      { t: 'idea', text: `Хотите сказать «Чем больше играю, тем больше нравится». Русское «чем… тем…» по-английски — <b>the… the…</b>: the + сравнение, потом кто + слово-действие.`,
        lit: [['The more', 'чем больше'], ['I play,', 'я играю'], ['the more', 'тем больше'], ['I like it', 'мне это нравится']],
        ex: [['The more I play, the more I like it.', 'Чем больше играю, тем больше нравится.'], ['The longer you wait, the harder it gets.', 'Чем дольше ждёшь, тем тяжелее.'], ['The longer we waited, the more impatient we got.', 'Чем дольше мы ждали, тем больше теряли терпение.']],
        bad: 'More I practise, more I improve.', good: '<b>The</b> more I practise, <b>the</b> more I improve.',
        tip: `Короткие готовые фразы — вообще без слова-действия: <b>The sooner the better.</b> (Чем раньше, тем лучше.) · The bigger the better. · The more expensive the hotel, the better the service.` },
      { t: 'check', q: 'Скажите: «Чем больше тренируешься, тем лучше получается»', o: ['More you practise, better you get.', 'The more you practise, the better you get.', 'The more you practise, the best you get.'], a: 1,
        why: '«Чем…, тем…» → the + сравнение в обеих половинах: the more…, the better.' },
      { t: 'idea', text: `Итог: повтор сравнения — изменение идёт и идёт; the… the… — одно зависит от другого.`,
        rows: [['всё лучше и лучше', 'better and better / more and more expensive'], ['чем…, тем…', 'The more I play, the better I get.'], ['коротко', 'The sooner the better.']] }
    ]},

    // ───────────── 5. as … as, less … than, twice as, the same as ─────────────
    { title: '«Не такой, как», «так же, как», «вдвое»', steps: [
      { t: 'idea', text: `Вы уже знаете: <b>not as … as</b> — «не такой… как», <b>the same as</b> — «такой же, как». Ещё один способ сказать «меньше» — <b>less</b> + слово + than.`,
        ex: [['The sequel isn’t as good as the first game.', 'Продолжение не такое хорошее, как первая игра.'], ['The metro was less crowded than usual.', 'В метро было меньше народу, чем обычно (crowded — забитый людьми).'], ['I don’t play as much as I used to.', 'Я играю не так много, как раньше.']],
        bad: 'My phone is the same like yours. · I’m not so tall than you.', good: 'My phone is the same <b>as</b> yours. · I’m not <b>as</b> tall <b>as</b> you.',
        tip: `После than и as — me / him / us или полностью: taller than me = taller than I am. <b>not so … as</b> тоже бывает, но только с not.` },
      { t: 'check', q: 'Kate is the same age ___ me.', ru: 'Кейт того же возраста, что и я.', o: ['like', 'as', 'than'], a: 1,
        why: '«Такой же, как» → the same as. Не like.' },
      { t: 'idea', text: `А без not <b>as … as</b> значит «так же, как» или «настолько…, насколько». Чаще всего — в готовых фразах: as soon as possible, as fast as I could.`,
        lit: [['I', 'я'], ['came', 'пришёл'], ['as fast', 'так быстро'], ['as I could', 'как мог']],
        ex: [['I came as fast as I could.', 'Я пришёл так быстро, как мог.'], ['Send it as soon as possible.', 'Пришли как можно скорее (ASAP).'], ['Walking is just as quick as taking the bus.', 'Пешком так же быстро, как на автобусе.']] },
      { t: 'idea', text: `Хотите сказать «вдвое дороже». Перед as … as ставим <b>twice</b> (вдвое) или <b>three times</b> (втрое): twice as much as — «в два раза больше, чем».`,
        lit: [['It', 'это'], ['costs', 'стоит'], ['twice', 'вдвое'], ['as much', 'столько же'], ['as my phone', 'сколько мой телефон']],
        ex: [['It costs twice as much as my phone.', 'Это стоит вдвое дороже моего телефона.'], ['Their flat is three times as big as ours.', 'Их квартира втрое больше нашей.'], ['Some months I earn twice as much as before.', 'В какие-то месяцы я зарабатываю вдвое больше, чем раньше.']],
        bad: 'twice more as · two times as much than', good: '<b>twice as</b> much <b>as</b>' },
      { t: 'check', q: 'This keyboard costs ___ my old one.', ru: 'Эта клавиатура стоит вдвое дороже моей старой.', o: ['twice as much as', 'twice more as', 'two times as much than'], a: 0,
        why: 'Вдвое → twice as much as: as с обеих сторон.' },
      { t: 'idea', text: `Итог: as дружит с as, а -er / more / less — с than.`,
        rows: [['не такой, как', 'not as good as'], ['так же / вдвое', 'as fast as / twice as much as'], ['такой же, как', 'the same as']] }
    ]},

    // ───────────── 6. «Самый»: in / of, I’ve ever ─────────────
    { title: '«Лучший из всех, что я видел»', steps: [
      { t: 'idea', text: `Вы уже знаете «самый»: the -est или the most, а после — <b>in</b> + место или группа. Новое: если дальше идёт отрезок времени (год, день, жизнь) — ставим <b>of</b>.`,
        rows: [['in — место, группа', 'the best player in the team'], ['of — время', 'the hottest day of the year']],
        ex: [['It’s the tallest building in the city.', 'Это самое высокое здание в городе.'], ['It was the best day of my life.', 'Это был лучший день в моей жизни.']],
        bad: 'the best player of the team · the best game of the world', good: 'the best player <b>in</b> the team · the best game <b>in</b> the world' },
      { t: 'check', q: 'It was the happiest day ___ my life.', ru: 'Это был самый счастливый день в моей жизни.', o: ['from', 'of', 'at'], a: 1,
        why: 'Жизнь — отрезок времени → of, хотя по-русски «в».' },
      { t: 'idea', text: `Хотите сказать «Самый мощный ПК из всех, что у меня были». «Из всех» по-английски не переводят: the most powerful PC + <b>I’ve ever had</b> — have + третья форма, как в Present Perfect.`,
        lit: [['It’s', 'это'], ['the most powerful PC', 'самый мощный ПК'], ['I’ve ever had', 'который у меня когда-либо был']],
        ex: [['That’s the funniest meme I’ve ever seen.', 'Смешнее мема я не видел.'], ['What’s the hardest boss you’ve ever beaten?', 'Какой самый сложный босс, которого ты побеждал?'], ['It’s the best series I’ve watched for ages.', 'Лучший сериал, что я видел за долгое время.']],
        bad: 'the best film from all I saw', good: 'the best film <b>I’ve ever seen</b>',
        tip: `И помните: <b>one of the</b> + самый + много штук: one of the best <b>games</b>, one of the most talented <b>designers</b> I know.` },
      { t: 'check', q: 'Скажите: «Это самый мощный ПК, который у меня был»', o: ['It’s the most powerful PC I’ve ever had.', 'It’s the most powerful PC from all I had.', 'It’s the powerfullest PC I’ve ever had.'], a: 0,
        why: '«Из всех» не переводим: the most + I’ve ever had. powerful — длинное → the most.' },
      { t: 'idea', text: `Итог: «самый» + in для места, of для времени, I’ve ever — для всего опыта.`,
        rows: [['самый в месте', 'the best player in the team'], ['самый за время', 'the best day of the year'], ['самый за жизнь', 'the best game I’ve ever played']] }
    ]},

    // ───────────── 7. Порядок слов ─────────────
    { title: 'Порядок слов: что — сразу за действием, always — в середину', steps: [
      { t: 'idea', text: `Хотите сказать «Мне очень нравится эта игра». По-русски «очень» можно поставить куда угодно, а в английском <b>слово-действие и «что»</b> не разлучают: сначала like this game, потом very much.`,
        lit: [['I', 'я'], ['like', 'люблю'], ['this game', 'эту игру'], ['very much', 'очень']],
        ex: [['I like this game very much.', 'Мне очень нравится эта игра.'], ['She speaks English fluently.', 'Она свободно говорит по-английски.'], ['Anna goes to the gym three times a week.', 'Анна ходит в спортзал три раза в неделю.']],
        bad: 'I like very much this game.', good: 'I like <b>this game very much</b>.',
        tip: `Дальше порядок такой: что → как → где → когда (to the gym → three times a week). Время можно вынести и в самое начало: After work, we went home.` },
      { t: 'check', q: 'Скажите: «Она очень хорошо играет в шахматы»', o: ['She plays very well chess.', 'She plays chess very well.', 'She very well plays chess.'], a: 1,
        why: 'plays chess не разлучаем, very well — после.' },
      { t: 'idea', text: `А маленькие слова — <b>always, usually, never, hardly ever, also, already, probably, still, just, even, all, both</b> — садятся в середину, рядом со словом-действием. Куда именно:`,
        rows: [['одно слово-действие → перед ним', 'He always forgets to save. · We all felt tired.'], ['am / is / are, was / were → после', 'You’re always late. · They’re both designers.'], ['два слова (can remember, have seen) → после первого', 'I have never seen it. · I can never remember her name.']],
        bad: 'I have always to wait for him. · I lost also my keys.', good: 'I <b>always have to</b> wait for him. · I <b>also lost</b> my keys.',
        tip: `have to ведёт себя как обычное слово-действие: always have to. В вопросе — после «кто»: Do you <b>still</b> work there?` },
      { t: 'check', q: 'We ___ tired after the long flight.', ru: 'Мы все устали после долгого перелёта.', o: ['felt all', 'all felt', 'all we felt'], a: 1,
        why: 'all — в середину, перед одним словом-действием: we all felt.' },
      { t: 'idea', text: `<b>probably</b> (наверное) встаёт перед «не»: I probably won’t come. Русское «я не приду, наверное» тянет сказать won’t probably — так нельзя.`,
        lit: [['I', 'я'], ['probably', 'наверное'], ['won’t', 'не'], ['come', 'приду']],
        ex: [['I probably won’t finish it today.', 'Я, наверное, не закончу это сегодня.'], ['The match will probably be cancelled.', 'Матч, вероятно, отменят.']],
        bad: 'I won’t probably call.', good: 'I <b>probably won’t</b> call.',
        tip: `В коротком ответе маленькое слово — перед is / do / will: He says he won’t be late, but he <b>always is</b>. (…а сам всегда опаздывает.)` },
      { t: 'check', q: 'Скажите: «Я, наверное, не приду»', o: ['I won’t probably come.', 'I probably won’t come.', 'I probably not come.'], a: 1,
        why: 'probably стоит перед won’t.' },
      { t: 'idea', text: `Итог: «что» — сразу за словом-действием, маленькие слова — в середину.`,
        rows: [['действие + что', 'I like this game very much.'], ['одно слово-действие', 'He always forgets. · We all felt tired.'], ['is / два слова / not', 'You’re always late. · I can never… · I probably won’t…']] }
    ]},

    // ───────────── 8. still, yet, any more, no longer ─────────────
    { title: 'still, yet, any more — и новое no longer', steps: [
      { t: 'idea', text: `Вспоминаем (урок a2-22): <b>still</b> — всё ещё, <b>yet</b> — ещё не (но ждём), <b>still + not</b> — «до сих пор не» с раздражением, <b>not … any more</b> — больше не.`,
        ex: [['It’s noon and Max is still in bed.', 'Уже полдень, а Макс всё ещё в кровати.'], ['I sent him the invite yesterday. He hasn’t replied yet.', 'Я вчера отправил ему приглашение. Он пока не ответил.'], ['I sent it two weeks ago, and he still hasn’t replied!', 'Я отправил две недели назад, а он до сих пор не ответил!'], ['Lena doesn’t work here any more.', 'Лена здесь больше не работает.']] },
      { t: 'check', q: 'I invited her a month ago, and she ___ answered!', ru: 'Я пригласил её месяц назад, а она до сих пор не ответила!', o: ['didn’t yet', 'still hasn’t', 'hasn’t still'], a: 1,
        why: 'Давно пора, раздражение → still стоит перед hasn’t.' },
      { t: 'idea', text: `Новое: <b>still</b> бывает ещё и «всё равно, всё же» — когда одно не мешает другому. Место то же — в середине.`,
        ex: [['He has everything he wants, but he’s still unhappy.', 'У него есть всё, что он хочет, но он всё равно несчастлив.'], ['The game isn’t perfect, but I still love it.', 'Игра не идеальная, но я всё равно её люблю.']],
        tip: `А <b>already</b> (уже) может стоять и в середине, и в конце: I’ve already finished = I’ve finished already.` },
      { t: 'idea', text: `«Больше не» можно сказать и короче — <b>no longer</b>. Оно стоит в середине, как still, и звучит чуть официальнее, чем not … any more.`,
        lit: [['Lena', 'Лена'], ['no longer', 'больше не'], ['works', 'работает'], ['here', 'здесь']],
        ex: [['Lena no longer works here.', 'Лена здесь больше не работает.'], ['He no longer streams at night.', 'Он больше не стримит по ночам.'], ['We used to be best friends, but we aren’t any more.', 'Мы были лучшими друзьями, а теперь уже нет.']],
        bad: 'We are no more friends. · I don’t work there more.', good: 'We are <b>no longer</b> friends. · I don’t work there <b>any more</b>.' },
      { t: 'check', q: 'Lena left the company in May. She ___ works here.', ru: 'Лена ушла из компании в мае. Она здесь больше не работает.', o: ['doesn’t any more', 'no longer', 'not still'], a: 1,
        why: 'Перед works, в середине → no longer. any more стоит в конце.' },
      { t: 'idea', text: `Итог: still — продолжается, yet — ждём, any more / no longer — перестало.`,
        rows: [['всё ещё / всё равно', 'still — в середине'], ['ещё не / до сих пор не', 'hasn’t … yet / still hasn’t'], ['больше не', 'not … any more (в конце) / no longer (в середине)']] }
    ]},

    // ───────────── 9. even ─────────────
    { title: 'even — «даже»', steps: [
      { t: 'idea', text: `Хотите сказать «У неё экран в каждой комнате, даже в ванной». «Даже» — <b>even</b>. Ставим прямо перед тем, что удивляет, или в середину, как always.`,
        ex: [['She has a screen in every room, even the bathroom.', 'У неё экран в каждой комнате, даже в ванной (bathroom — ванная).'], ['Oleg has played every Zelda. He’s even finished the very first one.', 'Олег играл во все Zelda. Он даже прошёл самую первую.'], ['Even the settings screen looks good.', 'Даже экран настроек выглядит хорошо.']] },
      { t: 'idea', text: `«Даже не» по-английски наоборот: сначала «не», потом «даже» — <b>didn’t even</b>, <b>can’t even</b>, <b>not even</b>.`,
        lit: [['He', 'он'], ['didn’t', 'не'], ['even', 'даже'], ['say hello', 'поздоровался']],
        ex: [['He didn’t even say hello.', 'Он даже не поздоровался.'], ['I can’t cook. I can’t even make toast.', 'Я не умею готовить. Даже тост не могу сделать.']] },
      { t: 'check', q: 'He didn’t ___ say thank you.', ru: 'Он даже спасибо не сказал.', o: ['even', 'still', 'yet'], a: 0,
        why: '«Даже не» → didn’t even.' },
      { t: 'idea', text: `А «хотя» и «даже если» — это <b>even though</b> и <b>even if</b>, дальше кто + слово-действие. even though — это факт; even if — неважно, будет или нет.`,
        ex: [['Even though he can’t drive, he bought a car.', 'Хотя он не умеет водить, он купил машину.'], ['I’m going to the concert even if it rains.', 'Я пойду на концерт, даже если будет дождь.'], ['She never shouts, even when she loses.', 'Она никогда не кричит, даже когда проигрывает.']],
        bad: 'Even he can’t drive, he bought a car.', good: '<b>Even though</b> he can’t drive, he bought a car.' },
      { t: 'check', q: 'We’re going to the beach tomorrow ___ it rains. We don’t care about the weather.', ru: 'Завтра мы идём на пляж, даже если будет дождь. Погода нам неважна.', o: ['even though', 'even if', 'even'], a: 1,
        why: 'Дождя ещё нет, и неважно, будет ли он → even if.' },
      { t: 'idea', text: `Итог урока: сравниваем точнее, ставим маленькие слова в середину и различаем три русских «больше».`,
        rows: [['гораздо / ещё лучше', 'far better / even better'], ['чем…, тем…', 'the more…, the better…'], ['больше не / даже не', 'not … any more / didn’t even']] }
    ]}
  ];
})();
