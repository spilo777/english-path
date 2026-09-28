// Юниты A2 7–8: might, may, can и could (прошлое и вежливые просьбы); must, mustn't, have to, don't need to, should
COURSE.units.push(
  // ───────────────────────────── UNIT A2-7 ─────────────────────────────
  {
    id: 'a2-7', level: 'A2', num: 7, track: 'main',
    books: { red: [29] },
    title: 'Might, can и could',
    summary: 'Научимся говорить «возможно, я приду» (might, may), «я не смог» (couldn’t) и вежливо просить: «Could you help me?», «May I ask a question?»',
    grammar: [
      {
        title: '1. Главная идея: одно русское «может» — несколько английских слов',
        html: `
<div class="g-idea">В русском слово «могу / может» делает сразу несколько работ: «я <b>могу</b> прийти», «я, <b>может быть</b>, приду», «я не <b>смог</b>», «не <b>могли бы</b> вы…». В английском для каждой работы — своё слово: <b>can</b>, <b>might / may</b>, <b>could</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я <b>могу</b> прийти в субботу.</p><p><b>Может быть</b>, я приду.</p><p>Я не <b>смог</b> прийти вчера.</p><p>Не <b>могли бы</b> вы мне помочь?</p></div>
  <div><div class="g-h">English</div><p><span class="say">I <b>can</b> come on Saturday.</span></p><p><span class="say">I <b>might</b> come.</span></p><p><span class="say">I <b>couldn't</b> come yesterday.</span></p><p><span class="say"><b>Could</b> you help me?</span></p></div>
</div>
<table>
<tr><th>Слово</th><th>Смысл</th><th>Пример</th></tr>
<tr><td><b class="g-v">can</b></td><td>умею / есть возможность</td><td><span class="say">I can draw.</span></td></tr>
<tr><td><b class="g-v">might / may</b></td><td>возможно, будет (не уверен)</td><td><span class="say">It might rain.</span></td></tr>
<tr><td><b class="g-v">could</b></td><td>мог, умел (в прошлом) или вежливая просьба</td><td><span class="say">Could you wait?</span></td></tr>
</table>
<div class="g-formula"><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part g-v">can / could / might / may</span><span class="g-plus">+</span><span class="g-part">глагол без to и без -s</span></div>
<div class="g-tip">Все эти слова ведут себя как знакомый вам <b>can</b>: одна форма для всех (he might, she could), никакого to после них и никакого do/does в вопросе.</div>
<div class="mini" data-q="«Может быть, я куплю эту игру» — это…" data-o="I can buy this game.|I might buy this game.|I could buy this game yesterday." data-a="1" data-why="«Может быть, возможно» про будущее → might."></div>`
      },
      {
        title: '2. might — «возможно, будет»',
        html: `
<div class="g-idea"><b>might</b> — когда вы <b>не уверены</b>: это возможно, но не точно. По-русски — «возможно», «может быть», «вдруг».</div>
<div class="g-formula"><span class="g-part">I / you / he / she / we / they</span><span class="g-plus">+</span><span class="g-part g-v">might</span><span class="g-plus">+</span><span class="g-part">play / be / come / rain…</span></div>
<ul class="g-list">
<li><span class="say">I might stream tonight, but I'm not sure.</span> — Может быть, я буду стримить вечером, но я не уверен.</li>
<li><span class="say">Take an umbrella. It might rain.</span> — Возьми зонт. Может пойти дождь.</li>
<li><span class="say">The new patch might come out on Friday.</span> — Патч, возможно, выйдет в пятницу.</li>
<li><span class="say">Buy a ticket! You might win.</span> — Купи билет! Вдруг выиграешь.</li>
<li><span class="say">Max might be late. He's still at work.</span> — Макс, возможно, опоздает. Он ещё на работе.</li>
</ul>
<p><b>might be</b> — ещё и догадка о том, что <b>сейчас</b>: <span class="say">Kate isn't answering. She might be asleep.</span> — Кейт не отвечает. Может, она спит.</p>
<p>Короткий ответ — просто <b>I might.</b> Глагол повторять не нужно:</p>
<ul class="g-list">
<li><span class="say">Are you going to the party? — I might.</span> — Ты пойдёшь на вечеринку? — Может быть.</li>
</ul>
<div class="g-bad">She mights come. · I might to go. · I might will go.</div>
<div class="g-good">She <b>might come</b>. · I <b>might go</b>.</div>
<div class="mini" data-q="Anna ___ join us later." data-o="mights|might|might to" data-a="1" data-why="might — одна форма для всех, дальше глагол без to."></div>
<div class="mini" data-q="Are you playing tonight? — I ___. I have a lot of work." data-o="might|might play to|mighting" data-a="0" data-why="Короткий ответ: I might — глагол можно не повторять."></div>`
      },
      {
        title: '3. might not и «точно» против «возможно»',
        html: `
<div class="g-idea"><b>might not</b> — «возможно, <b>не</b>…». Никаких don't: просто добавьте not после might.</div>
<ul class="g-list">
<li><span class="say">I might not play today. I'm really tired.</span> — Возможно, я сегодня не буду играть. Я очень устал.</li>
<li><span class="say">Anna might not come to the meeting.</span> — Анна, может быть, не придёт на встречу.</li>
<li><span class="say">The server might not work tomorrow morning.</span> — Сервер завтра утром может не работать.</li>
</ul>
<div class="g-bad">I don't might come.</div>
<div class="g-good">I <b>might not</b> come.</div>
<p>Сравните — вы уже знаете способы говорить о будущем <b>уверенно</b>:</p>
<table>
<tr><th>Точно (решено)</th><th>Возможно (не уверен)</th></tr>
<tr><td><span class="say">I'm playing with Max tomorrow.</span></td><td><span class="say">I might play with Max tomorrow.</span></td></tr>
<tr><td><span class="say">Kate is going to call later.</span></td><td><span class="say">Kate might call later.</span></td></tr>
<tr><td><span class="say">It will be cold.</span></td><td><span class="say">It might be cold.</span></td></tr>
</table>
<div class="g-tip">Два способа сказать одно и то же: <span class="say">Maybe I'll come.</span> = <span class="say">I might come.</span> <b>maybe</b> — одно слово в начале, «может быть». А <b>may be</b> в два слова — это глагол: <span class="say">He may be at home.</span></div>
<div class="g-tip">Форму <b>mightn't</b> почти не используют, а вопрос <b>Might you…?</b> звучит странно. Спрашивайте как обычно: <span class="say">Are you going to come?</span> — а отвечайте с might.</div>
<div class="mini" data-q="Возможно, я не пойду на работу завтра." data-o="I don't might go to work tomorrow.|I might not go to work tomorrow.|I might go not to work tomorrow." data-a="1" data-why="Отрицание: might + not + глагол, без do."></div>`
      },
      {
        title: '4. may = might, и вежливое May I…?',
        html: `
<div class="g-idea"><b>may</b> в значении «возможно» — то же самое, что <b>might</b>. Звучит чуть официальнее: в новостях, письмах, прогнозах погоды.</div>
<ul class="g-list">
<li><span class="say">I may be late tonight.</span> — Я, возможно, сегодня опоздаю.</li>
<li><span class="say">The forecast says it may snow.</span> — В прогнозе говорят, может пойти снег.</li>
<li><span class="say">The game may not be ready this year.</span> — Игра может не выйти в этом году.</li>
</ul>
<p>Второе значение: <b>May I…?</b> — «Можно мне…?». Это <b>самая вежливая</b> просьба о разрешении: с незнакомыми, начальником, в магазине.</p>
<ul class="g-list">
<li><span class="say">May I ask a question?</span> — Можно задать вопрос?</li>
<li><span class="say">May I sit here? — Yes, of course.</span> — Можно здесь сесть? — Да, конечно.</li>
<li><span class="say">May I come in?</span> — Можно войти?</li>
</ul>
<div class="g-bad">May you help me?</div>
<div class="g-good"><b>Could</b> you help me? <span class="muted">— May только с I и we: May I…? May we…?</span></div>
<div class="g-tip">В чате с друзьями хватает <b>Can I…?</b> На собеседовании или в письме клиенту — <b>May I…?</b> или <b>Could I…?</b></div>
<div class="mini" data-q="Вы на собеседовании: «Можно задать вопрос?»" data-o="May I ask a question?|May you ask a question?|I may ask a question?" data-a="0" data-why="Вежливое разрешение: May I + глагол?"></div>`
      },
      {
        title: '5. could — «мог, умел» в прошлом',
        html: `
<div class="g-idea"><b>could</b> — это <b>can</b> в прошлом: «мог», «умел», «получилось». <b>couldn't</b> — «не мог», «не смог», «не получилось».</div>
<table>
<tr><th>Сейчас</th><th>В прошлом</th></tr>
<tr><td><span class="say">I can swim.</span></td><td><span class="say">When I was six, I could swim.</span></td></tr>
<tr><td><span class="say">I can't sleep.</span></td><td><span class="say">I couldn't sleep last night.</span></td></tr>
<tr><td><span class="say">Can you see it?</span></td><td><span class="say">Could you see it?</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Two years ago I couldn't speak English. Now I can!</span> — Два года назад я не мог говорить по-английски. Теперь могу!</li>
<li><span class="say">I couldn't find my keys this morning.</span> — Я не смог найти ключи сегодня утром.</li>
<li><span class="say">Max couldn't come to the stream yesterday.</span> — Макс не смог прийти на стрим вчера.</li>
<li><span class="say">My grandad could fix any radio.</span> — Мой дедушка мог починить любое радио.</li>
<li><span class="say">Could you read when you were five? — No, I couldn't.</span> — Ты умел читать в пять лет? — Нет.</li>
</ul>
<div class="g-bad">I didn't can open the file. · I can't sleep yesterday.</div>
<div class="g-good">I <b>couldn't</b> open the file. · I <b>couldn't</b> sleep yesterday.</div>
<div class="g-tip">Русское «не смог» — почти всегда <b>couldn't</b>: не смог уснуть, не смог найти, не смог прийти.</div>
<div class="mini" data-q="I was so tired, but I ___ sleep." data-o="can't|couldn't|didn't can" data-a="1" data-why="Прошлое от can't → couldn't."></div>
<div class="mini" data-q="___ your brother draw when he was a kid?" data-o="Did|Could|Can" data-a="1" data-why="Вопрос об умении в прошлом: Could + кто + глагол."></div>`
      },
      {
        title: '6. Вежливые просьбы: Can you…? Could you…? Can I…?',
        html: `
<div class="g-idea">В просьбах <b>could</b> — не прошлое, а <b>вежливость</b>, как русское «не могли бы вы». <b>Can</b> — проще, <b>could</b> — мягче и вежливее.</div>
<table>
<tr><th>Что хотим</th><th>Как сказать</th><th>Пример</th></tr>
<tr><td>чтобы другой сделал</td><td><b class="g-v">Can you…? Could you…?</b></td><td><span class="say">Could you send me the file, please?</span></td></tr>
<tr><td>получить вещь</td><td><b class="g-v">Can I have / get…? Could I have…?</b></td><td><span class="say">Can I have a glass of water?</span></td></tr>
<tr><td>разрешение</td><td><b class="g-v">Can I…? Could I…? May I…?</b></td><td><span class="say">Could I borrow your charger?</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Can you wait a moment, please?</span> — Подожди минутку, пожалуйста.</li>
<li><span class="say">Could you turn the music down, please?</span> — Не могли бы вы сделать музыку потише?</li>
<li><span class="say">Can I get a coffee, please?</span> — Можно мне кофе? <span class="muted">(в кафе)</span></li>
<li><span class="say">Could I use your phone?</span> — Можно мне воспользоваться вашим телефоном?</li>
</ul>
<p>Ответы: <span class="say">Sure.</span> <span class="say">Of course.</span> <span class="say">No problem.</span> <span class="say">Yes, of course you can.</span> <span class="say">Sorry, I can't.</span></p>
<div class="g-bad">Couldn't you help me? <span class="muted">— звучит как упрёк: «Ты что, не мог помочь?»</span></div>
<div class="g-good">Could you help me, please?</div>
<div class="g-bad">Could I borrow your pen? — Yes, you could.</div>
<div class="g-good">Could I borrow your pen? — <b>Sure</b> / Yes, you <b>can</b>.</div>
<div class="g-tip">Русское «Вы не могли бы…?» с частицей «не» по-английски — <b>без not</b>: Could you…? Добавьте <b>please</b> — и просьба идеальна.</div>
<div class="mini" data-q="Не могли бы вы повторить?" data-o="Couldn't you repeat that?|Could you repeat that, please?|May you repeat that?" data-a="1" data-why="Вежливая просьба: Could you…, please? — без not."></div>`
      },
      {
        title: '7. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">It might to rain.</div><div class="g-good">It <b>might rain</b>.</div>
<div class="g-bad">He mights be late.</div><div class="g-good">He <b>might</b> be late.</div>
<div class="g-bad">I don't might come.</div><div class="g-good">I <b>might not</b> come.</div>
<div class="g-bad">I didn't can find it.</div><div class="g-good">I <b>couldn't</b> find it.</div>
<div class="g-bad">May you open the window?</div><div class="g-good"><b>Could you</b> open the window, please?</div>
<div class="g-bad">Couldn't you help me?</div><div class="g-good"><b>Could you</b> help me?</div>
<div class="g-bad">Can I sit here? — Yes, I can.</div><div class="g-good">Can I sit here? — Yes, <b>of course</b>.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>might / may</b> — возможно · <b>could / couldn't</b> — мог / не смог в прошлом · <b>Could you…? Can I…? May I…?</b> — вежливые просьбы. После всех — глагол без to.</div>`
      }
    ],
    words: [
      ['might', 'возможно (сделаю), может', 'It might rain tonight.', 'Вечером может пойти дождь.'],
      ['might not', 'возможно, не…', 'I might not come to the party.', 'Возможно, я не приду на вечеринку.'],
      ['may', 'возможно; можно (вежливо)', 'I may be late.', 'Я, возможно, опоздаю.'],
      ['May I…?', 'Можно мне…? (вежливо)', 'May I ask a question?', 'Можно задать вопрос?'],
      ['maybe', 'может быть', 'Maybe I\'ll call you later.', 'Может быть, я позвоню тебе позже.'],
      ['perhaps', 'возможно, пожалуй', 'Perhaps they\'re busy.', 'Возможно, они заняты.'],
      ['probably', 'вероятно, наверное', 'I\'ll probably stay at home.', 'Я, наверное, останусь дома.'],
      ['possible', 'возможный', 'Is it possible?', 'Это возможно?'],
      ['sure', 'уверенный; конечно', 'I\'m not sure. — Sure, no problem.', 'Я не уверен. — Конечно, без проблем.'],
      ['could', 'мог, умел; не мог бы (вежливо)', 'Could you help me, please?', 'Не могли бы вы мне помочь?'],
      ['couldn\'t', 'не мог, не смог', 'I couldn\'t sleep last night.', 'Я не мог уснуть прошлой ночью.'],
      ['borrow', 'брать взаймы, одалживать у кого-то', 'Could I borrow your charger?', 'Можно одолжить твою зарядку?'],
      ['lend — lent', 'давать взаймы, одалживать кому-то', 'Can you lend me ten dollars?', 'Можешь одолжить мне десять долларов?'],
      ['charger', 'зарядка, зарядное устройство', 'I couldn\'t find my charger.', 'Я не смог найти свою зарядку.'],
      ['umbrella', 'зонт', 'Take an umbrella. It might rain.', 'Возьми зонт. Может пойти дождь.'],
      ['forecast', 'прогноз', 'The forecast says it may snow.', 'Прогноз говорит, что может пойти снег.'],
      ['storm', 'буря, гроза', 'There might be a storm tonight.', 'Ночью может быть гроза.'],
      ['lucky', 'везучий, удачливый', 'Try again. You might be lucky.', 'Попробуй ещё раз. Может, повезёт.'],
      ['luck', 'удача', 'Good luck with the exam!', 'Удачи на экзамене!'],
      ['chance', 'шанс, возможность', 'We might have a chance to win.', 'У нас, возможно, есть шанс выиграть.'],
      ['later', 'позже', 'Kate might call later.', 'Кейт, возможно, позвонит позже.'],
      ['of course', 'конечно', 'May I come in? — Of course.', 'Можно войти? — Конечно.'],
      ['no problem', 'без проблем, не за что', 'Could you wait? — No problem.', 'Не могли бы вы подождать? — Без проблем.'],
      ['a favour', 'одолжение, услуга', 'Could you do me a favour?', 'Не мог бы ты сделать мне одолжение?'],
      ['turn down', 'сделать тише, убавить', 'Could you turn the music down?', 'Не могли бы вы сделать музыку потише?'],
      ['wait a moment', 'подождать минутку', 'Can you wait a moment, please?', 'Подожди минутку, пожалуйста.'],
      ['pass', 'передавать', 'Could you pass me the salt?', 'Не могли бы вы передать мне соль?'],
      ['repeat', 'повторять', 'Could you repeat that, please?', 'Не могли бы вы повторить?'],
      ['password', 'пароль', 'I couldn\'t remember my password.', 'Я не мог вспомнить свой пароль.'],
      ['fix', 'чинить, исправлять', 'Could you fix this bug today?', 'Не мог бы ты исправить этот баг сегодня?']
    ],
    texts: [
      {
        id: 't-a2-7-1', title: 'Maybe on Saturday', level: 'A2',
        text: `Kate: Hi, Max! Are you coming to Tom's birthday party on Saturday?
Max: I might. I'm not sure yet. I have a big project at work, and the deadline is on Monday.
Kate: Oh no. Could you finish it on Friday?
Max: Maybe. I couldn't work on it last week because my laptop broke. The screen was black, and I couldn't do anything.
Kate: That's terrible! Did you fix it?
Max: Yes, my brother fixed it. He's great with computers. When he was twelve, he could build a PC on his own.
Kate: Cool. So, what about Saturday?
Max: I might come in the evening, but I might not stay long. I'll probably be very tired.
Kate: OK. By the way, could you bring your speaker? Tom's speaker is broken.
Max: Sure, no problem. Can I bring my sister too? She's in town this week.
Kate: Of course you can! Tom wants a big party.
Max: What's the weather going to be like? We might play games in the garden.
Kate: The forecast says it may rain. So we might stay inside.
Max: Fine. Could you send me the address, please? I can't remember it.
Kate: Sure, I'll text it to you now.
Max: Thanks! See you on Saturday… maybe!`,
        questions: [
          { q: 'Why couldn\'t Max work on his project last week?', o: ['His laptop broke.', 'He was ill.', 'He was at a party.'], a: 0 },
          { q: 'What does Kate ask Max to bring?', o: ['A cake', 'His speaker', 'His laptop'], a: 1 },
          { q: 'What might happen on Saturday?', o: ['It might snow.', 'It might rain.', 'Tom might not come.'], a: 1 }
        ]
      },
      {
        id: 't-a2-7-2', title: 'The day the server went down', level: 'A2',
        text: `Last Friday was a strange day in our studio. At ten in the morning, the game server went down. Players couldn't log in, and our team couldn't test the new update. I was working on new icons, but I couldn't upload them.
Our boss, Irina, came into the room. "What happened?" she asked. We didn't know.
Our programmer, Oleg, looked at the logs for a long time. "It might be the new patch," he said. "Or it might be a problem with the hosting company. I'm not sure."
"Could you fix it before the evening?" Irina asked. "The players are really angry."
"I'll try," Oleg said. "But it may take a few hours."
The game chat was full of angry messages. One player wrote, "May I have my money back, please?" Another wrote, "I couldn't finish my quest! I was so close!"
Oleg worked without a break. He didn't even eat lunch. At five o'clock the server was back online, and everybody in the room clapped.
"Thank you, Oleg!" Irina said. "You can go home early today."
But Oleg couldn't go home. His phone rang again. It was the hosting company: "The server might go down again tonight."
So tomorrow we might have a long meeting about it. Or we might just order pizza and hope for the best.`,
        questions: [
          { q: 'What couldn\'t the players do?', o: ['They couldn\'t log in.', 'They couldn\'t buy the game.', 'They couldn\'t write in the chat.'], a: 0 },
          { q: 'What did Irina ask Oleg?', o: ['To go home early', 'To fix the server before the evening', 'To make new icons'], a: 1 },
          { q: 'When was the server online again?', o: ['At ten', 'At five', 'At night'], a: 1 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'Take an umbrella. It ___ rain later.', o: ['might', 'mights', 'might to'], a: 0, why: 'После might — глагол без to, и у might нет -s.' },
      { t: 'choice', q: 'I ___ play tonight — I\'m not sure yet.', o: ['\'m playing', 'might', 'can'], a: 1, why: 'Не уверен → might; I\'m playing — уже решено точно.' },
      { t: 'choice', q: 'A year ago I ___ speak English at all.', o: ['can\'t', 'couldn\'t', 'didn\'t can'], a: 1, why: 'Прошлое от can\'t — couldn\'t.' },
      { t: 'choice', q: '___ you pass me the charger, please?', o: ['Could', 'Might', 'May'], a: 0, why: 'Просим другого что-то сделать → Can you / Could you; may и might так не используют.' },
      { t: 'choice', q: '___ I ask you a question? — Yes, of course.', o: ['May', 'Might', 'Must'], a: 0, why: 'Вежливое «Можно мне…?» → May I…?' },
      { t: 'choice', q: 'Are you coming to the stream tonight? — ___ Not sure yet.', o: ['I might.', 'I might to.', 'I\'m might.'], a: 0, why: 'Короткий ответ: I might — без to и без am.' },
      { t: 'choice', q: 'She ___ come tomorrow. She has a lot of work.', o: ['might not', 'doesn\'t might', 'mightn\'t to'], a: 0, why: 'Отрицание: might not + глагол, без do/does.' },
      { t: 'choice', q: 'When he was five, he ___ read.', o: ['can', 'could', 'cans'], a: 1, why: 'Умение в прошлом (was five) → could.' },
      { t: 'gap', q: 'I was tired, but I ___ sleep. (не смог)', a: ['couldn\'t', 'could not'], why: '«Не смог» в прошлом → couldn\'t + глагол.' },
      { t: 'gap', q: '___ you help me with this level, please? (вежливо)', a: ['Could', 'Can'], why: 'Просьба к другому: Could you…? (вежливее) или Can you…?' },
      { t: 'gap', q: 'The patch ___ come out on Friday, but the studio isn\'t sure. (возможно)', a: ['might', 'may'], why: 'Не уверены → might или may + глагол.' },
      { t: 'gap', q: '___ you swim when you were a child? (умел?)', a: ['Could'], why: 'Вопрос об умении в прошлом: Could + кто + глагол.' },
      { t: 'gap', q: 'Could I borrow your headphones? — Sure, you ___.', a: ['can'], why: 'На Could I…? отвечают Yes, you can / Sure, а не you could.' },
      { t: 'gap', q: 'I ___ be late tonight — the traffic is terrible. (возможно)', a: ['might', 'may'], why: 'Возможно, но не точно → might / may be late.' },
      { t: 'order', a: 'I might not play tonight', ru: 'Возможно, я не буду играть сегодня вечером.' },
      { t: 'order', a: 'Could you send me the file', ru: 'Не могли бы вы прислать мне файл?' },
      { t: 'tr', q: 'Я не смог найти ключи.', a: ['i couldn\'t find the keys', 'i could not find the keys', 'i couldn\'t find my keys', 'i could not find my keys'] },
      { t: 'tr', q: 'Можно мне стакан воды?', a: ['can i have a glass of water', 'could i have a glass of water', 'can i get a glass of water', 'could i get a glass of water', 'may i have a glass of water', 'can i have a glass of water please', 'could i have a glass of water please', 'can i get a glass of water please', 'could i get a glass of water please', 'may i have a glass of water please', 'can i have a glass of water, please', 'could i have a glass of water, please', 'may i have a glass of water, please'] },
      { t: 'listen', say: 'It might rain tomorrow.', a: ['it might rain tomorrow'] }
    ],
    test: [
      { t: 'choice', q: 'Какое предложение значит «Возможно, завтра я поеду к родителям»?', o: ['I\'m going to visit my parents tomorrow.', 'I might visit my parents tomorrow.', 'I visit my parents tomorrow.'], a: 1, why: 'Не уверен → might; going to — уже решил.' },
      { t: 'choice', q: 'My brother ___ swim when he was four.', o: ['could', 'can', 'might'], a: 0, why: 'Умение в прошлом → could.' },
      { t: 'choice', q: 'Как вежливо: «Вы не могли бы повторить?»', o: ['Couldn\'t you repeat that?', 'Could you repeat that, please?', 'May you repeat that, please?'], a: 1, why: 'Could you…, please? Couldn\'t you…? звучит как упрёк, а May you… не говорят.' },
      { t: 'choice', q: 'Kate isn\'t answering. She ___ be asleep.', o: ['might', 'can', 'could to'], a: 0, why: 'Догадка о том, что сейчас: might be.' },
      { t: 'choice', q: 'Где ошибка?', o: ['I might go out.', 'She mights call you.', 'We might not win.'], a: 1, why: 'У might нет -s: she might call.' },
      { t: 'choice', q: 'I ___ open the file yesterday. It was broken.', o: ['can\'t', 'couldn\'t', 'mightn\'t'], a: 1, why: 'Не смог в прошлом (yesterday) → couldn\'t.' },
      { t: 'choice', q: 'Can I sit here? — ___', o: ['Yes, of course.', 'Yes, I can.', 'Yes, you could.'], a: 0, why: 'Разрешаем: Of course / Sure / Yes, you can. «I can» — про себя, а не разрешение.' },
      { t: 'gap', q: 'The forecast says it ___ snow tonight. (возможно)', a: ['might', 'may'], why: 'Прогноз, не точно → might / may + глагол.' },
      { t: 'gap', q: 'Excuse me, ___ I use your phone? (очень вежливо)', a: ['May', 'Could'], why: 'Очень вежливая просьба о разрешении → May I…? / Could I…?' },
      { t: 'gap', q: 'We ___ not have time to finish the map today. (возможно)', a: ['might', 'may'], why: 'Возможно, не… → might not / may not + глагол.' },
      { t: 'gap', q: 'Could you open the window? — Sure, ___ problem.', a: ['no'], why: 'Готовый ответ на просьбу: No problem.' },
      { t: 'gap', q: 'I ___ remember his name at the meeting. (не мог)', a: ['couldn\'t', 'could not'], why: 'Не мог в прошлом → couldn\'t + глагол.' }
    ]
  },

  // ───────────────────────────── UNIT A2-8 ─────────────────────────────
  {
    id: 'a2-8', level: 'A2', num: 8, track: 'main',
    books: { red: [31, 32, 33] },
    title: 'Must, mustn\'t, should, have to',
    summary: 'Научимся говорить «мне надо», «тебе нельзя», «тебе не обязательно» и «тебе стоит»: must, have to, mustn’t, don’t have to, should.',
    grammar: [
      {
        title: '1. Главная идея: «надо», «нельзя», «не обязательно», «стоит»',
        html: `
<div class="g-idea">В русском мы говорим «должен», «надо», «нельзя», «не нужно», «стоит». В английском у каждого из этих смыслов своё слово — и путать их опасно: «нельзя» и «не обязательно» звучат похоже только по-русски.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Мне <b>надо</b> идти.</p><p>Тебе <b>нельзя</b> опаздывать.</p><p>Тебе <b>не нужно</b> приходить.</p><p>Тебе <b>стоит</b> посмотреть этот сериал.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I <b>must</b> go. / I <b>have to</b> go.</span></p><p><span class="say">You <b>mustn't</b> be late.</span></p><p><span class="say">You <b>don't have to</b> come.</span></p><p><span class="say">You <b>should</b> watch this series.</span></p></div>
</div>
<table>
<tr><th>Слово</th><th>Смысл</th><th>Пример</th></tr>
<tr><td><b class="g-v">must / have to</b></td><td>надо, обязательно</td><td><span class="say">I have to work.</span></td></tr>
<tr><td><b class="g-v">mustn't</b></td><td>нельзя</td><td><span class="say">You mustn't touch it.</span></td></tr>
<tr><td><b class="g-v">don't have to</b></td><td>не обязательно</td><td><span class="say">You don't have to pay.</span></td></tr>
<tr><td><b class="g-v">should</b></td><td>стоит, лучше (совет)</td><td><span class="say">You should rest.</span></td></tr>
</table>
<div class="mini" data-q="«Тебе стоит попробовать эту игру» — какое слово?" data-o="must|should|mustn't" data-a="1" data-why="«Стоит» — это совет, а совет → should."></div>`
      },
      {
        title: '2. must — «надо, я так считаю»',
        html: `
<div class="g-idea"><b>must</b> — «надо, обязательно». Чаще всего так вы говорите о том, что <b>сами</b> считаете важным. Форма одна для всех, после неё — глагол без to.</div>
<div class="g-formula"><span class="g-part">I / you / he / she / we / they</span><span class="g-plus">+</span><span class="g-part g-v">must</span><span class="g-plus">+</span><span class="g-part">глагол</span></div>
<ul class="g-list">
<li><span class="say">I'm so hungry. I must eat something.</span> — Я так голоден. Мне надо что-нибудь съесть.</li>
<li><span class="say">This game is amazing. You must play it!</span> — Эта игра потрясающая. Ты обязательно должен в неё сыграть!</li>
<li><span class="say">My desk is a mess. I must clean it.</span> — У меня на столе бардак. Надо его разобрать.</li>
<li><span class="say">We must win the next match.</span> — Мы должны выиграть следующий матч.</li>
</ul>
<div class="g-bad">I must to go. · She musts work.</div>
<div class="g-good">I <b>must go</b>. · She <b>must work</b>.</div>
<p>У must <b>нет прошедшего времени</b>. Для прошлого берите <b>had to</b> — «пришлось, надо было»:</p>
<ul class="g-list">
<li><span class="say">I was very hungry, so I had to eat something.</span> — Я был очень голоден, пришлось что-то съесть.</li>
<li><span class="say">There were no buses. We had to walk home.</span> — Автобусов не было. Нам пришлось идти домой пешком.</li>
</ul>
<div class="g-bad">Yesterday I must work late.</div>
<div class="g-good">Yesterday I <b>had to</b> work late.</div>
<div class="mini" data-q="Last night I ___ finish the design for the client." data-o="must|had to|musted" data-a="1" data-why="Прошлое (last night) → had to; у must прошедшего нет."></div>`
      },
      {
        title: '3. have to — «приходится, так надо по правилам»',
        html: `
<div class="g-idea"><b>have to</b> — тоже «надо», но чаще из-за <b>внешних причин</b>: правила, работа, расписание, обстоятельства. Это обычный глагол have, поэтому у него есть has, had и помощники do/does/did.</div>
<table>
<tr><th>Когда</th><th>Утверждение</th><th>Отрицание</th></tr>
<tr><td>сейчас: I / you / we / they</td><td><b class="g-v">have to</b> go</td><td><b>don't</b> have to go</td></tr>
<tr><td>сейчас: he / she / it</td><td><b class="g-v">has to</b> go</td><td><b>doesn't</b> have to go</td></tr>
<tr><td>в прошлом: все</td><td><b class="g-v">had to</b> go</td><td><b>didn't</b> have to go</td></tr>
</table>
<ul class="g-list">
<li><span class="say">I have to go to the dentist tomorrow.</span> — Мне завтра надо к стоматологу.</li>
<li><span class="say">Anna starts at seven, so she has to get up at six.</span> — Анна начинает в семь, поэтому ей приходится вставать в шесть.</li>
<li><span class="say">You have to be eighteen to play this game.</span> — В эту игру можно играть только с восемнадцати.</li>
</ul>
<p>Вопросы — через <b>do / does / did</b>:</p>
<ul class="g-list">
<li><span class="say">What time do you have to leave?</span> — Во сколько тебе надо уходить?</li>
<li><span class="say">Does Max have to work on Sundays?</span> — Максу приходится работать по воскресеньям?</li>
<li><span class="say">Why did you have to stay late?</span> — Почему тебе пришлось задержаться?</li>
</ul>
<div class="g-bad">She have to go. · Do you must go? · Did you had to wait?</div>
<div class="g-good">She <b>has to</b> go. · <b>Do you have to</b> go? · Did you <b>have to</b> wait?</div>
<div class="g-tip">В речи have to звучит как «<b>хэфта</b>», has to — «<b>хэста</b>». Если слышите «I hafta go» — это I have to go.</div>
<div class="mini" data-q="___ Kate have to wear a uniform at work?" data-o="Does|Do|Must" data-a="0" data-why="Вопрос с have to — через помощника; Kate — она → Does."></div>`
      },
      {
        title: '4. must или have to?',
        html: `
<div class="g-idea">Когда вы даёте <b>своё мнение</b> — можно и must, и have to. Когда это <b>факт</b> (расписание, правило, так сложилось) — только <b>have to</b>.</div>
<table>
<tr><th>Ситуация</th><th>Как сказать</th></tr>
<tr><td>моё мнение, мой совет</td><td><span class="say">It's a great show. You must see it.</span> = <span class="say">You have to see it.</span></td></tr>
<tr><td>факт: запись к врачу</td><td><span class="say">Jane has to go to the doctor at four.</span></td></tr>
<tr><td>правило: без оплаты нельзя</td><td><span class="say">You have to pay for parking here.</span></td></tr>
<tr><td>прошлое</td><td>только <span class="say">had to</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I really must clean my room this weekend.</span> — Мне правда надо убраться в комнате на выходных. <span class="muted">(я сам так решил)</span></li>
<li><span class="say">I have to send the report by Friday.</span> — Мне нужно сдать отчёт до пятницы. <span class="muted">(так требует начальник)</span></li>
</ul>
<p>Про будущее можно сказать <b>will have to</b> — «придётся»: <span class="say">The shop is closed. We'll have to come back tomorrow.</span> — Магазин закрыт. Придётся вернуться завтра.</p>
<div class="g-tip">Не уверены — берите <b>have to</b>. Он подходит почти всегда, а must — не всегда.</div>
<div class="mini" data-q="Tom can't come to the meeting — he ___ fly to Berlin. (так по работе)" data-o="must|has to|should" data-a="1" data-why="Это факт, а не ваше мнение → have to (he has to)."></div>`
      },
      {
        title: '5. mustn\'t или don\'t have to — главная ловушка',
        html: `
<div class="g-idea"><b>mustn't</b> = «<b>нельзя</b>», не делай этого. <b>don't have to</b> = «<b>не обязательно</b>», можешь делать, можешь не делать. Смыслы противоположные!</div>
<table>
<tr><th>Фраза</th><th>Смысл</th></tr>
<tr><td><span class="say">You mustn't go.</span></td><td>Тебе нельзя уходить. Оставайся!</td></tr>
<tr><td><span class="say">You don't have to go.</span></td><td>Тебе не обязательно уходить. Можешь остаться, если хочешь.</td></tr>
</table>
<ul class="g-list">
<li><span class="say">You mustn't share your password.</span> — Нельзя никому говорить свой пароль.</li>
<li><span class="say">I mustn't forget to call Mum.</span> — Мне нельзя забыть позвонить маме. <span class="muted">(= must remember)</span></li>
<li><span class="say">You don't have to buy the DLC. The main game is enough.</span> — DLC покупать не обязательно. Основной игры хватит.</li>
<li><span class="say">She doesn't have to work tomorrow. It's her day off.</span> — Ей не нужно завтра работать. У неё выходной.</li>
<li><span class="say">We didn't have to wait long.</span> — Нам не пришлось долго ждать.</li>
</ul>
<p>Вместо don't have to можно сказать <b>don't need to</b> — «не нужно»:</p>
<ul class="g-list">
<li><span class="say">You don't need to shout. I can hear you.</span> — Не нужно кричать. Я тебя слышу.</li>
<li><span class="say">I don't need to go yet. I can stay a bit.</span> — Мне пока не надо уходить. Я могу немного побыть.</li>
</ul>
<div class="g-bad">You mustn't come tomorrow. <span class="muted">— если вы хотели сказать «можешь не приходить»</span></div>
<div class="g-good">You <b>don't have to</b> come tomorrow.</div>
<div class="g-tip">mustn't — как красный знак «стоп». don't have to — как зелёный свет с подписью «по желанию».</div>
<div class="mini" data-q="The meeting is online. You ___ come to the office." data-o="mustn't|don't have to|must" data-a="1" data-why="Приходить не обязательно (но можно) → don't have to."></div>
<div class="mini" data-q="This is a secret. You ___ tell Max!" data-o="mustn't|don't need to|don't have to" data-a="0" data-why="Запрет, «нельзя» → mustn't."></div>`
      },
      {
        title: '6. should — «стоит, лучше бы» (совет)',
        html: `
<div class="g-idea"><b>should</b> — совет, «так будет правильно». Мягче, чем must. <b>shouldn't</b> — «не стоит, лучше не надо».</div>
<div class="g-formula"><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part g-v">should / shouldn't</span><span class="g-plus">+</span><span class="g-part">глагол</span></div>
<ul class="g-list">
<li><span class="say">You look tired. You should go to bed.</span> — Ты выглядишь уставшим. Тебе стоит лечь спать.</li>
<li><span class="say">You shouldn't play games all night.</span> — Не стоит играть всю ночь.</li>
<li><span class="say">When you design a button, you should think about the user.</span> — Когда рисуешь кнопку, надо думать о пользователе.</li>
</ul>
<p>Очень часто — вместе с <b>think</b>:</p>
<ul class="g-list">
<li><span class="say">I think you should talk to your boss.</span> — Я думаю, тебе стоит поговорить с начальником.</li>
<li><span class="say">I don't think you should buy that laptop.</span> — Не думаю, что тебе стоит покупать этот ноутбук.</li>
<li><span class="say">Do you think I should learn Blender?</span> — Как думаешь, мне стоит выучить Blender?</li>
<li><span class="say">What time do you think we should start?</span> — Как думаешь, во сколько нам начать?</li>
<li><span class="say">Shall I call her? — Yes, I think you should.</span> — Позвонить ей? — Да, думаю, стоит.</li>
</ul>
<div class="g-bad">I think you shouldn't go. <span class="muted">— так говорят реже</span></div>
<div class="g-good">I <b>don't think</b> you should go. <span class="muted">— «не» переезжает к think</span></div>
<p>Сила советов: <span class="say">You should see it.</span> (стоит посмотреть) → <span class="say">You must see it!</span> (обязательно посмотри!)</p>
<p><b>ought to</b> = should, просто реже: <span class="say">You ought to rest.</span> — Тебе стоит отдохнуть.</p>
<div class="mini" data-q="Как сказать «Как думаешь, мне стоит это купить?»" data-o="Do you think I should buy it?|Do you think I should to buy it?|You think I should buy it?" data-a="0" data-why="Do you think + I should + глагол без to."></div>`
      },
      {
        title: '7. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I must to finish it.</div><div class="g-good">I <b>must finish</b> it.</div>
<div class="g-bad">Yesterday I must stay at home.</div><div class="g-good">Yesterday I <b>had to</b> stay at home.</div>
<div class="g-bad">He have to work today.</div><div class="g-good">He <b>has to</b> work today.</div>
<div class="g-bad">Do you must wear a uniform?</div><div class="g-good"><b>Do you have to</b> wear a uniform?</div>
<div class="g-bad">It's Sunday, you mustn't get up early.</div><div class="g-good">It's Sunday, you <b>don't have to</b> get up early.</div>
<div class="g-bad">You should to rest.</div><div class="g-good">You <b>should rest</b>.</div>
<div class="g-bad">I think you shouldn't buy it.</div><div class="g-good">I <b>don't think</b> you should buy it.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>must / have to</b> — надо (в прошлом <b>had to</b>) · <b>mustn't</b> — нельзя · <b>don't have to / don't need to</b> — не обязательно · <b>should</b> — стоит.</div>`
      }
    ],
    words: [
      ['must', 'должен, надо, обязательно', 'I must call my mum.', 'Мне надо позвонить маме.'],
      ['mustn\'t', 'нельзя', 'You mustn\'t be late.', 'Тебе нельзя опаздывать.'],
      ['have to — had to', 'надо, приходится — пришлось', 'I had to walk home.', 'Мне пришлось идти домой пешком.'],
      ['has to', 'ему / ей надо, приходится', 'She has to get up at six.', 'Ей приходится вставать в шесть.'],
      ['don\'t have to', 'не обязательно, не нужно', 'You don\'t have to pay.', 'Платить не обязательно.'],
      ['need to', 'нужно, надо', 'I need to buy some food.', 'Мне нужно купить еды.'],
      ['don\'t need to', 'не нужно', 'You don\'t need to shout.', 'Не нужно кричать.'],
      ['should', 'стоит, следует', 'You should try this game.', 'Тебе стоит попробовать эту игру.'],
      ['shouldn\'t', 'не стоит, не следует', 'You shouldn\'t work so late.', 'Не стоит работать так допоздна.'],
      ['ought to', 'следует, стоит (= should)', 'You ought to see a doctor.', 'Тебе стоит сходить к врачу.'],
      ['advice', 'совет, советы', 'Can you give me some advice?', 'Можешь дать мне совет?'],
      ['rule', 'правило', 'You have to follow the rules.', 'Нужно соблюдать правила.'],
      ['necessary', 'необходимый', 'Is it necessary?', 'Это необходимо?'],
      ['important', 'важный', 'This meeting is important. We must be there.', 'Эта встреча важная. Мы должны там быть.'],
      ['careful', 'осторожный, внимательный', 'You must be careful.', 'Ты должен быть осторожен.'],
      ['forget — forgot', 'забывать — забыл', 'I mustn\'t forget her birthday.', 'Мне нельзя забыть про её день рождения.'],
      ['remember', 'помнить, не забыть', 'You have to remember your password.', 'Нужно помнить свой пароль.'],
      ['deadline', 'крайний срок, дедлайн', 'The deadline is Friday. We have to hurry.', 'Дедлайн в пятницу. Нам надо спешить.'],
      ['hurry', 'спешить', 'You don\'t have to hurry.', 'Не нужно спешить.'],
      ['dentist', 'стоматолог', 'I have to go to the dentist.', 'Мне надо сходить к стоматологу.'],
      ['exam', 'экзамен', 'He has to pass the exam.', 'Ему надо сдать экзамен.'],
      ['pay — paid', 'платить — заплатил', 'We had to pay for the tickets.', 'Нам пришлось заплатить за билеты.'],
      ['wear — wore', 'носить (одежду) — носил', 'Do you have to wear a suit?', 'Тебе надо носить костюм?'],
      ['uniform', 'форма, униформа', 'Nurses have to wear a uniform.', 'Медсёстрам надо носить форму.'],
      ['seat belt', 'ремень безопасности', 'You must wear a seat belt.', 'Нужно пристёгиваться ремнём.'],
      ['share', 'делиться, показывать другим', 'You mustn\'t share your password.', 'Нельзя сообщать другим свой пароль.'],
      ['rest', 'отдыхать; отдых', 'You should rest this weekend.', 'Тебе стоит отдохнуть на выходных.'],
      ['healthy', 'здоровый, полезный', 'You should eat healthy food.', 'Тебе стоит есть полезную еду.'],
      ['shout', 'кричать', 'You don\'t need to shout.', 'Не нужно кричать.'],
      ['touch', 'трогать', 'You mustn\'t touch the cables.', 'Нельзя трогать провода.'],
      ['spoiler', 'спойлер', 'You mustn\'t post spoilers in the chat!', 'Нельзя писать спойлеры в чат!']
    ],
    texts: [
      {
        id: 't-a2-8-1', title: 'First day at the studio', level: 'A2',
        text: `Max: Welcome to the team, Lena! Let me tell you about our rules.
Lena: Great. Do I have to be here at nine?
Max: No, you don't have to come so early. We start at ten. But you have to be at the team meeting every Monday at eleven.
Lena: OK. Do I have to wear anything special?
Max: No, you don't. Jeans and a T-shirt are fine. But there's one important thing. You mustn't show the new game to your friends. It's a secret. And you mustn't post screenshots online.
Lena: Of course. What about passwords?
Max: You have to change your password every month. And you mustn't share it with other people.
Lena: Got it. Should I read the design guide first?
Max: Yes, I think you should. It's long, but it's very useful. You don't need to read it all today. Take your time.
Lena: And what time do I have to finish?
Max: At seven. But before a deadline we sometimes have to stay late. Last month we had to work every weekend.
Lena: Oh no! Did you have to work at night too?
Max: Only once. I don't think we should do that again. Now we plan better.
Lena: Good. One more question: where should I sit?
Max: Here, next to Anna. She's great. You should ask her for help. She knows everything about our UI kit.
Lena: Thanks, Max!`,
        questions: [
          { q: 'What time does the team start work?', o: ['At nine', 'At ten', 'At eleven'], a: 1 },
          { q: 'What mustn\'t Lena do?', o: ['Wear jeans', 'Post screenshots online', 'Read the design guide'], a: 1 },
          { q: 'What did the team have to do last month?', o: ['Work every weekend', 'Change the office', 'Go on holiday'], a: 0 }
        ]
      },
      {
        id: 't-a2-8-2', title: 'Advice for new streamers', level: 'A2',
        text: `Last year I started streaming. At first I made a lot of mistakes, so here is my advice for new streamers.
First, you don't need to buy an expensive camera. I had to use my old laptop camera for six months, and it was OK. But you should buy a good microphone. People can watch a bad picture, but they won't listen to bad sound.
Second, you have to choose a time and stream at that time every week. Your viewers have to know when you're online. I think you should start with two or three streams a week.
Third, you mustn't show your address, your real name or your passwords on the screen. One day I nearly showed my email password to two hundred people! Now I always check my screen before I start.
Fourth, you should talk to your chat. Say hello to new viewers and answer their questions. You don't have to be funny all the time. Just be yourself.
And one more thing: you shouldn't stream for ten hours without a break. You must rest, drink water and sleep. Last month I streamed all night, and the next day I couldn't work at all.
Do you think I should write more tips? Tell me in the comments!`,
        questions: [
          { q: 'What should new streamers buy?', o: ['An expensive camera', 'A good microphone', 'A new laptop'], a: 1 },
          { q: 'What mustn\'t you show on the screen?', o: ['Your passwords', 'Your chat', 'Your game'], a: 0 },
          { q: 'What happened after the author streamed all night?', o: ['The author got a lot of new viewers.', 'The author couldn\'t work the next day.', 'The author bought a microphone.'], a: 1 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'I\'m really hungry. I ___ eat something.', o: ['must', 'mustn\'t', 'must to'], a: 0, why: 'Надо, по моему мнению → must + глагол без to.' },
      { t: 'choice', q: 'We ___ walk home last night. There were no taxis.', o: ['must', 'had to', 'have to'], a: 1, why: 'Прошлое → had to; у must прошедшего нет.' },
      { t: 'choice', q: 'You ___ touch that cable — it\'s dangerous!', o: ['don\'t have to', 'mustn\'t', 'shouldn\'t to'], a: 1, why: 'Запрет, «нельзя» → mustn\'t.' },
      { t: 'choice', q: 'Tomorrow is Saturday, so I ___ get up early.', o: ['mustn\'t', 'don\'t have to', 'haven\'t to'], a: 1, why: 'Не обязательно (но можно) → don\'t have to.' },
      { t: 'choice', q: 'Anna ___ work on Sundays. It\'s in her contract.', o: ['have to', 'has to', 'must to'], a: 1, why: 'Правило, факт; Anna — она → has to.' },
      { t: 'choice', q: '___ you have to wear a uniform at work?', o: ['Must', 'Do', 'Are'], a: 1, why: 'Вопрос с have to — через do/does/did.' },
      { t: 'choice', q: 'The film is great. I think you ___ watch it.', o: ['should', 'shoulds', 'should to'], a: 0, why: 'Совет → should + глагол, одна форма для всех, без to.' },
      { t: 'choice', q: 'Как сказать «Не думаю, что тебе стоит покупать эту игру»?', o: ['I don\'t think you should buy this game.', 'I not think you should buy this game.', 'I don\'t think you should to buy this game.'], a: 0, why: 'Отрицание уходит в think: I don\'t think you should + глагол.' },
      { t: 'gap', q: 'She ___ go to the dentist tomorrow at nine. (have to)', a: ['has to'], why: 'she → has to; это факт (запись), поэтому have to, а не must.' },
      { t: 'gap', q: 'Why ___ you have to leave early yesterday?', a: ['did'], why: 'Вопрос в прошлом с have to → did + have to.' },
      { t: 'gap', q: 'You ___ shout. I can hear you. (не нужно)', a: ['don\'t need to', 'don\'t have to', 'do not need to', 'do not have to'], why: '«Не нужно» → don\'t need to / don\'t have to.' },
      { t: 'gap', q: 'You ___ forget your password. (нельзя)', a: ['mustn\'t', 'must not'], why: 'Запрет → mustn\'t + глагол.' },
      { t: 'gap', q: 'He ___ work so much. He looks very tired. (не стоит)', a: ['shouldn\'t', 'should not'], why: 'Совет «не стоит» → shouldn\'t.' },
      { t: 'gap', q: 'We didn\'t ___ wait long — the bus came in two minutes.', a: ['have to', 'need to'], why: 'После didn\'t — начальная форма: didn\'t have to / didn\'t need to.' },
      { t: 'order', a: 'What time do you have to get up', ru: 'Во сколько тебе нужно вставать?' },
      { t: 'order', a: 'Do you think I should buy it', ru: 'Как думаешь, мне стоит это купить?' },
      { t: 'tr', q: 'Мне пришлось работать в субботу.', a: ['i had to work on saturday', 'i had to work last saturday', 'i had to work saturday'] },
      { t: 'tr', q: 'Тебе не нужно приходить завтра.', a: ['you don\'t have to come tomorrow', 'you don\'t need to come tomorrow', 'you do not have to come tomorrow', 'you do not need to come tomorrow'] },
      { t: 'tr', q: 'Тебе стоит отдохнуть.', a: ['you should rest', 'you should have a rest', 'you should take a rest', 'you should take a break', 'you should have a break', 'you ought to rest', 'you ought to have a rest', 'you should relax'] },
      { t: 'listen', say: 'You mustn\'t be late.', a: ['you mustn\'t be late', 'you must not be late'] }
    ],
    test: [
      { t: 'choice', q: 'Какое предложение значит «DLC покупать не обязательно»?', o: ['You mustn\'t buy the DLC.', 'You don\'t have to buy the DLC.', 'You shouldn\'t to buy the DLC.'], a: 1, why: 'Не обязательно → don\'t have to; mustn\'t — это запрет.' },
      { t: 'choice', q: 'Jane won\'t come — she ___ go to the doctor at four. (у неё запись)', o: ['must', 'has to', 'should'], a: 1, why: 'Факт, а не ваше мнение → have to (she has to).' },
      { t: 'choice', q: '___ Max have to work tomorrow?', o: ['Does', 'Do', 'Must'], a: 0, why: 'Вопрос с have to; Max — он → Does.' },
      { t: 'choice', q: 'It\'s a good series. You ___ watch it. (просто совет)', o: ['must', 'should', 'mustn\'t'], a: 1, why: 'Мягкий совет → should; must звучит сильнее.' },
      { t: 'choice', q: 'Last week I ___ finish three projects.', o: ['must', 'had to', 'have to'], a: 1, why: 'Прошлое (last week) → had to.' },
      { t: 'choice', q: 'You ___ smoke here. It\'s against the rules.', o: ['mustn\'t', 'don\'t need to', 'don\'t have to'], a: 0, why: 'Правило запрещает → mustn\'t.' },
      { t: 'choice', q: 'Shall I call Anna? — Yes, I think you ___.', o: ['should', 'must to', 'shall'], a: 0, why: 'Короткий ответ-совет: I think you should.' },
      { t: 'gap', q: 'What time do you think we ___ leave? (стоит)', a: ['should'], why: 'Спрашиваем совета: do you think + we should + глагол.' },
      { t: 'gap', q: 'Kate ___ have to work yesterday. It was her day off. (не)', a: ['didn\'t', 'did not'], why: 'Не пришлось в прошлом → didn\'t have to.' },
      { t: 'gap', q: 'I think Tom ___ to see a doctor. (= should)', a: ['ought'], why: 'ought to = should: Tom ought to see a doctor.' },
      { t: 'gap', q: 'He ___ get up at six every day — his work starts at seven. (have to)', a: ['has to'], why: 'he → has to; причина внешняя (работа).' },
      { t: 'gap', q: 'The shop is closed. We ___ have to come back tomorrow. (придётся)', a: ['will', '\'ll'], why: 'Будущее от have to → will have to.' }
    ]
  }
);
