// Грамматика по шагам для юнита b1-14: всё держится на помощнике; длинные вопросы (вперёд только первый помощник, предлог в конце); Who told you? — «кто сделал» без did; вопросы с not и ответ по факту; вопрос внутри фразы глубже, whether to, Where do you think…?; помощник вместо повтора — спорим, переспрашиваем, So would I; I think so / I hope not; хвостики: особые случаи, интонация, вежливые просьбы.
(function () {
  const u = COURSE.units.find((x) => x.id === 'b1-14'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: 'Всё держится на помощнике', steps: [
      { t: 'idea', text: `Вы уже знаете главного героя этого урока — <b>помощника</b>: am, have, do, did, can, will, would. На нём держатся вопрос, короткий ответ, «Правда?», «я тоже» и хвостик «да?».`,
        rows: [['вопрос', 'Have you finished?'], ['ответ, спор', 'Yes, I have!'], ['«Правда?»', 'Oh, have you?']],
        ex: [['I’ve finished. — So have I.', 'Я закончил. — Я тоже.'], ['You’ve finished, haven’t you?', 'Ты ведь закончил, да?']],
        tip: `Помощник — как заместитель: он выходит вместо всей фразы, чтобы её не повторять.` },
      { t: 'check', q: 'Do you like jazz? — Yes, I ___.', ru: 'Тебе нравится джаз? — Да.', o: ['do', 'like', 'am'], a: 0,
        why: 'В вопросе помощник do → и в коротком ответе do.' },
      { t: 'idea', text: `Итог: найдите помощника в первой фразе и повторите его. Нет помощника — do / does / did.`,
        rows: [['Have you…?', 'Yes, I have. / So have I.'], ['Did you…?', 'Yes, I did. / So did I.']] }
    ]},

    // ───────────── 2. Длинные вопросы и предлог в конце ─────────────
    { title: 'Длинные вопросы: вперёд — только первый помощник', steps: [
      { t: 'idea', text: `Хотите спросить «Ты всю ночь работал?» — have been working. Если помощников два или три, вперёд выходит только <b>первый</b>, остальные остаются после «кто».`,
        lit: [['Have', '(помощник 1)'], ['you', 'ты'], ['been working', 'работал (всё это время)'], ['all night?', 'всю ночь?']],
        ex: [['Have you been working all night?', 'Ты всю ночь работал?'], ['Will you be streaming tomorrow?', 'Ты завтра будешь стримить?'], ['How long has she been living in Berlin?', 'Сколько она уже живёт в Берлине?']],
        bad: 'Is working Kate today?', good: 'Is <b>Kate working</b> today?' },
      { t: 'check', q: 'Скажите: «Сколько ты уже ждёшь?»', o: ['How long you have been waiting?', 'How long have you been waiting?', 'How long have been you waiting?'], a: 1,
        why: 'Вперёд выходит только первый помощник have, а been waiting стоит после you.' },
      { t: 'idea', text: `Помните из A2: предлог (to, for, about) уезжает в конец вопроса. С длинными формами — так же: apply <b>for</b>, belong <b>to</b>, worried <b>about</b>.`,
        ex: [['Which job has Tina applied for?', 'На какую вакансию подалась Тина?'], ['Who does this headset belong to?', 'Чья это гарнитура?'], ['What are you worried about?', 'О чём ты переживаешь?']],
        bad: 'About what are you talking?', good: 'What are you talking <b>about</b>?',
        tip: `Предлог впереди, с whom (To whom should I send it?), — очень официально, так пишут только в документах.` },
      { t: 'check', q: 'Скажите: «На какую вакансию ты подался?»', o: ['Which job have you applied?', 'Which job have you applied for?', 'Which job you have applied for?'], a: 1,
        why: 'apply for — for уходит в конец, а помощник have стоит перед you.' },
      { t: 'idea', text: `Итог: в длинном вопросе вперёд выходит один помощник, а предлог — в самый конец.`,
        rows: [['первый помощник вперёд', 'Have you been waiting long?'], ['предлог в конце', 'What are you worried about?']] }
    ]},

    // ───────────── 3. Who told you? ─────────────
    { title: 'Who told you? — «кто сделал» без did', steps: [
      { t: 'idea', text: `Хотите спросить «Кто тебе сказал?». Если слово-вопрос само и есть «кто сделал», did не нужен: <b>Who told you?</b> — порядок как в обычной фразе.`,
        lit: [['Who', 'кто'], ['told', 'сказал'], ['you?', 'тебе?']],
        rows: [['Somebody hacked Max.', 'Who hacked Max?', 'кто взломал (hack — взломать)'], ['Max hacked somebody.', 'Who did Max hack?', 'кого взломал — с did']],
        bad: 'Who did tell you about it?', good: 'Who <b>told</b> you about it?' },
      { t: 'check', q: 'Скажите: «Кого ты пригласил?»', o: ['Who invited you?', 'Who did you invite?', 'Who you invited?'], a: 1,
        why: '«Кого» — пригласил ты, значит нужен did. Who invited you? — «Кто пригласил тебя?».' },
      { t: 'idea', text: `Так же с <b>what, which, whose, how many</b>, когда они — «кто или что действует»: did не нужен.`,
        ex: [['What happened?', 'Что случилось?'], ['Which team won the final?', 'Какая команда выиграла финал?'], ['How many people came to the meetup?', 'Сколько людей пришло на митап?']],
        tip: `Сравните: What happened? (что случилось — само) и What did Diane say? (что сказала Диана — с did).` },
      { t: 'check', q: 'Something fell off the shelf. → What ___ off the shelf?', ru: 'Что-то упало с полки. → Что упало с полки?', o: ['fell', 'did fall', 'did it fall'], a: 0,
        why: 'What — само «что упало» → без did, слово-действие во второй форме.' },
      { t: 'idea', text: `Итог: спрашиваете про того, кто действует, — без did. Про того, над кем действуют, — с did.`,
        rows: [['кто / что сделал', 'Who told you? What happened?'], ['кого / что сделал', 'Who did you invite? What did she say?']] }
    ]},

    // ───────────── 4. Вопросы с not ─────────────
    { title: '«Разве ты не…?» — вопрос с not', steps: [
      { t: 'idea', text: `Вопрос с not — <b>Didn’t you…? Haven’t we…?</b> — не просто вопрос. Им показывают удивление («Ты что, не…?») или ждут согласия («Правда ведь…?»).`,
        ex: [['Didn’t you hear the doorbell?', 'Ты что, не слышал звонок?'], ['Haven’t we met before?', 'Мы ведь раньше встречались?'], ['Wasn’t that ending amazing?', 'Правда, концовка — огонь?']] },
      { t: 'idea', text: `<b>Why don’t we…?</b> — это предложение: «Может, …?». А после why порядок вопросительный, как всегда: помощник с not стоит перед «кто».`,
        ex: [['Why don’t we order pizza?', 'Может, закажем пиццу?'], ['Why didn’t you tell me?', 'Почему ты мне не сказал?'], ['Why wasn’t Emma at the meeting?', 'Почему Эммы не было на встрече?']],
        bad: 'Why you didn’t call me?', good: 'Why <b>didn’t you</b> call me?' },
      { t: 'check', q: 'Скажите: «Почему ты мне не позвонил?»', o: ['Why you didn’t call me?', 'Why didn’t you call me?', 'Why didn’t you called me?'], a: 1,
        why: 'После why — didn’t перед you, а слово-действие после did — в простой форме: call.' },
      { t: 'idea', text: `Ловушка ответа: yes / no отвечает на <b>факт</b>, а не на вопрос. Действие есть — Yes, действия нет — No, как бы ни был задан вопрос.`,
        rows: [['Don’t you want to come? (хочу)', 'Yes, I do.'], ['Don’t you want to come? (не хочу)', 'No, I don’t.']],
        bad: '— Aren’t you coming? — Yes, I’m not.', good: '— Aren’t you coming? — <b>No, I’m not.</b>',
        tip: `Не гадайте — сразу договаривайте короткий ответ: No, I’m not / Yes, I am. Помощник снимет любую путаницу.` },
      { t: 'check', q: 'Didn’t you get my message? — ___ Sorry!', ru: 'Ты что, не получил моё сообщение? — (получил, просто не ответил) Прости!', o: ['No, I did.', 'Yes, I did.', 'Yes, I didn’t.'], a: 1,
        why: 'Факт — получил → Yes, I did. Вопрос с not ничего не меняет.' },
      { t: 'idea', text: `Итог: вопрос с not — удивление, ожидание «да» или предложение. Отвечаем всегда по факту.`,
        rows: [['удивление', 'Didn’t you hear it?'], ['предложение', 'Why don’t we…?'], ['ответ по факту', 'No, I’m not. / Yes, I did.']] }
    ]},

    // ───────────── 5. Вопрос внутри фразы ─────────────
    { title: 'Вопрос внутри фразы и Where do you think…?', steps: [
      { t: 'idea', text: `Вы уже знаете из A2: <b>Do you know where he lives?</b> — внутри фразы порядок обычный, без do / does / did. Таких «входов» много: Could you tell me…, Do you have any idea…, I wonder…, Please explain…`,
        ex: [['Could you tell me when the call starts?', 'Не подскажете, когда начинается созвон?'], ['Do you have any idea how much it will cost?', 'Ты хоть примерно знаешь, сколько это будет стоить?'], ['I wonder why she left so early.', 'Интересно, почему она ушла так рано.']],
        tip: `Знак «?» — только если вся фраза вопрос. I wonder… и Please explain what you mean. кончаются точкой.` },
      { t: 'check', q: 'I wonder why ___ so angry.', ru: 'Интересно, почему она такая злая.', o: ['is she', 'she is', 'does she'], a: 1,
        why: 'Вопрос внутри фразы → обычный порядок: she is.' },
      { t: 'idea', text: `«Ли» — это if или <b>whether</b>. Но перед <b>to</b> + слово-действие («купить или подождать?») ставят только whether; и часто — <b>whether or not</b>.`,
        ex: [['I don’t know whether to buy it now or wait for a sale.', 'Не знаю, купить сейчас или ждать скидку.'], ['I’m not sure whether or not he’s coming.', 'Не уверен, придёт он или нет.']] },
      { t: 'idea', text: `Ловушка: с <b>think, suppose, reckon</b> ответ — не «да / нет», а мнение. Поэтому слово-вопрос выходит в самое начало, а дальше — обычный порядок.`,
        lit: [['Where', 'где'], ['do you think', 'как ты думаешь'], ['he', 'он'], ['lives?', 'живёт?']],
        ex: [['Who do you think will win?', 'Кто, по-твоему, победит?'], ['What do you think happened?', 'Что, по-твоему, случилось?'], ['How old do you reckon she is?', 'Как думаешь, сколько ей лет?']],
        bad: 'Do you think where he lives?', good: '<b>Where do you think</b> he lives?' },
      { t: 'check', q: '___ will win the tournament?', ru: 'Как думаешь, кто выиграет турнир?', o: ['Who do you think', 'Do you think who', 'Who you think'], a: 0,
        why: 'С think слово-вопрос выходит в начало, а do you think — сразу за ним.' },
      { t: 'check', q: 'I don’t know ___ to buy the game now or wait.', ru: 'Не знаю, купить игру сейчас или подождать.', o: ['if', 'whether', 'what'], a: 1,
        why: 'Перед to «ли» — только whether.' },
      { t: 'idea', text: `Итог: внутри фразы — обычный порядок; с think — слово-вопрос в начало.`,
        rows: [['вопрос внутри', 'Could you tell me where the station is?'], ['с think', 'Where do you think he is?'], ['whether to', 'I don’t know whether to go.']] }
    ]},

    // ───────────── 6. Помощник вместо повтора ─────────────
    { title: 'Спорим, переспрашиваем, соглашаемся', steps: [
      { t: 'idea', text: `Вы уже знаете: помощник заменяет повтор (I’ve never been to Japan, but Kate <b>has</b>). Им же возражают — помощник с ударением и <b>обратным</b> знаком.`,
        ex: [['You’re cheating! — No, I’m not!', 'Ты читеришь! — Нет!'], ['You didn’t save the game. — Yes, I did!', 'Ты не сохранил игру. — Сохранил!'], ['You never listen to me. — I do!', 'Ты меня никогда не слушаешь. — Слушаю!']],
        tip: `И обещание так же: Please don’t tell anyone. — I won’t. («Не скажу».)` },
      { t: 'check', q: 'You didn’t lock the door! — Yes, I ___!', ru: 'Ты не запер дверь! — Запер!', o: ['locked', 'did', 'do'], a: 1,
        why: 'Возражаем на прошлое (didn’t) → Yes, I did.' },
      { t: 'idea', text: `Переспрос «Да? Правда?» — помощник + кто, знак тот же, что у собеседника. Сразу за ним можно сказать своё: Do you? I don’t.`,
        ex: [['Lisa isn’t coming tonight. — Isn’t she? What’s wrong?', 'Лиза сегодня не придёт. — Да? Что случилось?'], ['I love horror films. — Do you? I don’t.', 'Я обожаю ужастики. — Правда? А я нет.'], ['I didn’t like the ending. — Didn’t you? I did.', 'Мне не понравилась концовка. — Серьёзно? А мне понравилась.']] },
      { t: 'check', q: 'It rained every day of our trip. — ___ What a shame!', ru: 'Всю поездку каждый день шёл дождь. — Да? Как жаль!', o: ['Was it?', 'Did it?', 'Didn’t it?'], a: 1,
        why: 'rained — прошлое без помощника → did; знак тот же, плюс → Did it?' },
      { t: 'idea', text: `«Я тоже» — <b>So / Neither + помощник + кто</b>. Помощник совпадает с фразой собеседника: I’d (would) → So would I, I’ve → So have I.`,
        rows: [['I’d love a coffee.', 'So would I.'], ['I haven’t finished.', 'Nor have I.'], ['I didn’t sleep.', 'Neither did I. / I didn’t either.']],
        ex: [['I passed the exam and so did Max.', 'Я сдал экзамен, и Макс тоже.'], ['Kate can’t drive and neither can her brother.', 'Катя не водит, и её брат тоже.']],
        bad: 'I passed and so Max did.', good: 'I passed and <b>so did Max</b>.' },
      { t: 'check', q: 'I’d like to live by the sea. — So ___ I.', ru: 'Я бы хотел жить у моря. — Я тоже.', o: ['do', 'would', 'am'], a: 1,
        why: 'I’d = I would → и в ответе would.' },
      { t: 'idea', text: `Итог: помощник спорит, переспрашивает и соглашается — вместо всей фразы.`,
        rows: [['возражаем', 'Yes, I did! / No, I’m not!'], ['«Правда?»', 'Isn’t she? / Do you? I don’t.'], ['я тоже (нет)', 'So would I. / Neither did I.']] }
    ]},

    // ───────────── 7. I think so / I hope not ─────────────
    { title: 'I think so, I hope not', steps: [
      { t: 'idea', text: `Хотите ответить «Думаю, да». Чтобы не повторять весь ответ, после <b>think, hope, expect, suppose, guess, be afraid</b> ставят <b>so</b>.`,
        lit: [['I', 'я'], ['think', 'думаю'], ['so.', 'так.']],
        ex: [['Is the server down? — I think so.', 'Сервер упал? — Думаю, да.'], ['Will they release it this year? — I expect so.', 'Выпустят в этом году? — Скорее всего.'], ['Is the sale over? — I’m afraid so.', 'Распродажа закончилась? — Боюсь, что да.']],
        tip: `I’m afraid so — вежливое «к сожалению, да», а не страх.` },
      { t: 'idea', text: `«Нет» у этих слов строится по-разному — самое частое место ошибок. think и expect берут don’t, а hope и afraid — <b>not</b> в конце.`,
        rows: [['I think so', 'I don’t think so'], ['I hope so', 'I hope not'], ['I’m afraid so', 'I’m afraid not']],
        bad: 'I don’t hope so.', good: 'I <b>hope not</b>.',
        tip: `guess и suppose чаще тоже с not: I guess not, I suppose not.` },
      { t: 'check', q: 'Will it rain on Saturday? — ___', ru: 'В субботу будет дождь? — Надеюсь, нет.', o: ['I hope not.', 'I don’t hope so.', 'I hope no.'], a: 0,
        why: 'Отрицание от I hope so → I hope not.' },
      { t: 'idea', text: `Ловушка русского «думаю, он не…». По-английски not обычно переезжает к think: <b>I don’t think</b> he’ll come. А с hope — остаётся на месте.`,
        lit: [['I', 'я'], ['don’t think', 'не думаю'], ['he’ll come.', 'он придёт']],
        ex: [['I don’t think it’s a good idea.', 'По-моему, это плохая идея.'], ['I don’t expect we’ll finish today.', 'Не думаю, что мы сегодня закончим.'], ['I hope it doesn’t rain.', 'Надеюсь, дождя не будет.']] },
      { t: 'check', q: 'Скажите: «Думаю, он не придёт»', o: ['I think he doesn’t come.', 'I don’t think he’ll come.', 'I not think he’ll come.'], a: 1,
        why: 'not переезжает к think (don’t think), а про будущее — he’ll come.' },
      { t: 'idea', text: `Итог: «думаю, да» — I think so; «нет» — у каждого слова своё.`,
        rows: [['да', 'I think so / I hope so'], ['нет', 'I don’t think so / I hope not / I’m afraid not'], ['«думаю, не…»', 'I don’t think he’ll…']] }
    ]},

    // ───────────── 8. Хвостики: особые случаи ─────────────
    { title: 'Хвостики: особые случаи', steps: [
      { t: 'idea', text: `Вы уже знаете: плюс → хвостик с минусом, помощник — из фразы. Особые случаи: there остаётся, should — сам помощник, а ’d бывает had или would.`,
        rows: [['There’s a lot of lag today,', 'isn’t there?'], ['Joe should pass,', 'shouldn’t he?'], ['He’d never met her before,', 'had he?']],
        ex: [['There’s a lot of lag today, isn’t there?', 'Сегодня сильно лагает (тормозит), да?'], ['You’d help me, wouldn’t you?', 'Ты бы мне помог, правда?']],
        tip: `’d met = had met, ’d help = would help. И never — это минус, поэтому хвостик с плюсом: had he?` },
      { t: 'check', q: 'He’d never met her before, ___?', ru: 'Он ведь никогда раньше её не встречал?', o: ['hadn’t he', 'had he', 'would he'], a: 1,
        why: '’d met = had met; never — минус → хвостик с плюсом: had he.' },
      { t: 'idea', text: `«Я прав, да?» — <b>aren’t I</b> (формы amn’t нет). this / that в хвостике → <b>it</b>. nobody, nothing — это минус, значит хвостик с плюсом.`,
        rows: [['I’m right,', 'aren’t I?'], ['This is your laptop,', 'isn’t it?'], ['Nobody called,', 'did they?']],
        bad: 'Nobody came, didn’t they?', good: 'Nobody came, <b>did they</b>?',
        tip: `Nothing happened, did it? — о вещах it, о людях (nobody) — they.` },
      { t: 'check', q: 'Nobody saw us, ___?', ru: 'Нас ведь никто не видел?', o: ['did they', 'didn’t they', 'did he'], a: 0,
        why: 'nobody уже минус → хвостик с плюсом; о людях — they.' },
      { t: 'idea', text: `После Let’s и просьб хвостик свой: Let’s… → <b>shall we?</b>, Don’t… → <b>will you?</b>, просьба → <b>could / will / would you?</b>`,
        rows: [['Let’s take a break,', 'shall we?'], ['Don’t be late,', 'will you?'], ['Pass me the charger,', 'could you?']] },
      { t: 'check', q: 'Let’s order pizza, ___?', ru: 'Давай закажем пиццу?', o: ['don’t we', 'shall we', 'won’t we'], a: 1,
        why: 'После Let’s хвостик всегда shall we.' },
      { t: 'idea', text: `Итог: хвостик берёт помощника из фразы, но у особых случаев он свой.`,
        rows: [['I’m…', 'aren’t I?'], ['Nobody… / Nothing…', 'did they? / did it?'], ['Let’s… / Don’t…', 'shall we? / will you?']] }
    ]},

    // ───────────── 9. Хвостики: интонация и просьбы ─────────────
    { title: 'Хвостики: голос и вежливые просьбы', steps: [
      { t: 'idea', text: `Хвостик говорят двумя голосами. Голос <b>вниз</b> ↘ — вы не спрашиваете, а ждёте согласия; голос <b>вверх</b> ↗ — настоящий вопрос.`,
        ex: [['It’s a great map, isn’t it? ↘', 'Классная карта, да? (ответ: Yes, amazing.)'], ['You haven’t seen my charger, have you? ↗', 'Ты не видел мою зарядку? (правда не знаю)']] },
      { t: 'idea', text: `Минус + хвостик с плюсом — очень вежливая просьба или вопрос «а вдруг ты знаешь». По-русски — «Ты не мог бы…?», «Ты случайно не знаешь…?».`,
        ex: [['You couldn’t do me a favour, could you?', 'Ты не мог бы сделать мне одолжение?'], ['You don’t know where Kate is, do you?', 'Ты случайно не знаешь, где Катя?'], ['You haven’t got a spare cable, have you?', 'У тебя не найдётся лишнего кабеля?']],
        tip: `Отвечаем снова по факту: You’re not going out, are you? — Yes, I am (иду). / No, I’m not (не иду).` },
      { t: 'check', q: 'You couldn’t give me a lift, ___?', ru: 'Ты не подвезёшь меня?', o: ['couldn’t you', 'could you', 'can’t you'], a: 1,
        why: 'Фраза с минусом (couldn’t) → хвостик с плюсом и тем же помощником: could you.' },
      { t: 'idea', text: `Итог урока: всё решает помощник — в вопросах, ответах, «я тоже» и хвостиках.`,
        rows: [['вопросы', 'Who told you? · Where do you think he is?'], ['ответы', 'No, I’m not. · So would I. · I hope not.'], ['хвостики', 'Let’s go, shall we? · Nobody came, did they?']] }
    ]}
  ];
})();
