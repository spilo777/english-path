// Юниты A1 11–12: притяжательные (mine, yours, whose, Kate's) · исчисляемые/неисчисляемые, much / many / a lot of

COURSE.units.push(
  // ───────────────────────────── UNIT 11 ─────────────────────────────
  {
    id: 'a1-11', level: 'A1', num: 11, track: 'main',
    books: { red: [61, 62, 64] },
    title: 'Whose is this? — mine, yours, Kate\'s',
    summary: 'Как спросить «Чьё это?» и ответить «Моё», «Это рюкзак Кати», «Это мой друг» — mine, yours, whose и -\'s.',
    grammar: [
      {
        title: '1. Главная идея: «мой» бывает двух видов',
        html: `
<div class="g-idea">По-русски «мой» одно и то же слово: <b>«мой телефон»</b> и <b>«Телефон — мой»</b>. В английском это <b>два разных слова</b>. Если после «мой» идёт предмет — <b>my</b>. Если предмета после него нет — <b>mine</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Это <b>мой</b> ноутбук.</p><p>Этот ноутбук — <b>мой</b>.</p><p>Это <b>твоя</b> куртка? — Нет, <b>её</b>.</p></div>
  <div><div class="g-h">English</div><p><span class="say">This is <b>my</b> laptop.</span></p><p><span class="say">This laptop is <b>mine</b>.</span></p><p><span class="say">Is this <b>your</b> jacket? — No, it's <b>hers</b>.</span></p></div>
</div>
<div class="g-formula"><span class="g-part">my / your / her</span><span class="g-plus">+</span><span class="g-part g-v">предмет</span><span class="g-sep">·</span><span class="g-part g-v">mine / yours / hers</span><span class="g-plus">+</span><span class="g-part">ничего</span></div>
<div class="g-tip">Представьте, что <b>mine</b> «съедает» предмет: <b>my laptop</b> = <b>mine</b>. Два слова превратились в одно.</div>
<div class="mini" data-q="This bag is ___." data-o="my|mine|me" data-a="1" data-why="После слова нет предмета → mine."></div>
<div class="mini" data-q="Is this ___ phone?" data-o="your|yours|you" data-a="0" data-why="После слова идёт предмет (phone) → your."></div>`
      },
      {
        title: '2. Вся семья слов: I — me — my — mine',
        html: `
<p>В уроке 7 вы узнали <b>me</b> (меня, мне) и <b>my</b> (мой). Теперь добавляем последний столбик — <b>mine</b> (мой, без предмета). Вот вся таблица:</p>
<table>
<tr><th>Кто делает</th><th>Кого / кому</th><th>Чей + предмет</th><th>Чей, без предмета</th></tr>
<tr><td>I</td><td>me</td><td>my</td><td><span class="say">mine</span></td></tr>
<tr><td>you</td><td>you</td><td>your</td><td><span class="say">yours</span></td></tr>
<tr><td>he</td><td>him</td><td>his</td><td><span class="say">his</span></td></tr>
<tr><td>she</td><td>her</td><td>her</td><td><span class="say">hers</span></td></tr>
<tr><td>we</td><td>us</td><td>our</td><td><span class="say">ours</span></td></tr>
<tr><td>they</td><td>them</td><td>their</td><td><span class="say">theirs</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I know Max. Max knows me. It's my game. It's mine.</span> — Я знаю Макса. Макс знает меня. Это моя игра. Она моя.</li>
<li><span class="say">We know Max. Max knows us. It's our flat. It's ours.</span> — Это наша квартира. Она наша.</li>
<li><span class="say">I've got your number, but you haven't got mine.</span> — У меня есть твой номер, а у тебя нет моего.</li>
</ul>
<div class="g-tip">Почти все слова последнего столбика кончаются на <b>-s</b>: yours, hers, ours, theirs. Исключение одно — <b>mine</b>.</div>
<div class="g-bad">I took the my bag.</div>
<div class="g-good">I took my bag. <span class="muted">— «свою сумку»: русское «свой» = my, your, his, her… по смыслу</span></div>
<div class="mini" data-q="They gave us their number, and we gave them ___." data-o="our|ours|us" data-a="1" data-why="Предмета после слова нет (= our number) → ours."></div>`
      },
      {
        title: '3. mine, yours, his… — как говорить без повтора',
        html: `
<div class="g-idea">Слова <b>mine / yours / hers / ours / theirs</b> нужны, чтобы не повторять предмет второй раз.</div>
<ul class="g-list">
<li><span class="say">Is this charger mine or yours?</span> — Это зарядка моя или твоя?</li>
<li><span class="say">I didn't have an umbrella, so Anna gave me hers.</span> — У меня не было зонта, и Анна дала мне свой. <span class="muted">(hers = her umbrella)</span></li>
<li><span class="say">We went in our car, and they went in theirs.</span> — Мы поехали на нашей машине, а они на своей.</li>
<li><span class="say">It's their problem, not ours.</span> — Это их проблема, а не наша.</li>
</ul>
<p><b>his</b> — особое слово: одинаковое с предметом и без него.</p>
<ul class="g-list">
<li><span class="say">Is this his headset or hers? — It's his.</span> — Это его гарнитура или её? — Его.</li>
</ul>
<table>
<tr><th>С предметом</th><th>Без предмета</th></tr>
<tr><td>her skin</td><td><span class="say">hers</span></td></tr>
<tr><td>his skin</td><td><span class="say">his</span></td></tr>
<tr><td>its name</td><td><span class="muted">— (так не говорят)</span></td></tr>
</table>
<div class="g-bad">This mouse is my.</div>
<div class="g-good">This mouse is mine.</div>
<div class="g-bad">Is it your's? <span class="muted">/ It's her's.</span></div>
<div class="g-good">Is it yours? <span class="muted">/ It's hers. — апострофа в этих словах нет никогда</span></div>
<div class="mini" data-q="My keyboard is old, but ___ is new. (у неё)" data-o="her|hers|she" data-a="1" data-why="Предмет не повторяем (= her keyboard) → hers."></div>`
      },
      {
        title: '4. a friend of mine — «один мой друг»',
        html: `
<p>Когда у вас <b>много</b> друзей и вы говорите про одного из них, по-английски скажут <b>a friend of mine</b> — «один из моих друзей, мой знакомый».</p>
<div class="g-formula"><span class="g-part">a friend</span><span class="g-plus">+</span><span class="g-part">of</span><span class="g-plus">+</span><span class="g-part g-v">mine / yours / his / hers / ours / theirs</span></div>
<ul class="g-list">
<li><span class="say">I played with a friend of mine last night.</span> — Вчера вечером я играл с одним своим другом.</li>
<li><span class="say">Kate came to the party with a friend of hers.</span> — Катя пришла на вечеринку со своей подругой.</li>
<li><span class="say">Are those guys friends of yours?</span> — Те ребята — твои друзья?</li>
<li><span class="say">He is a colleague of ours.</span> — Он наш коллега.</li>
</ul>
<div class="g-bad">a friend of me <span class="muted">/ a friend of him</span></div>
<div class="g-good">a friend of mine <span class="muted">/ a friend of his</span></div>
<div class="g-tip">После <b>of</b> в этой фразе — всегда слово из последнего столбика таблицы: mine, yours, his, hers, ours, theirs.</div>
<div class="mini" data-q="Tom was in the café with a friend of ___." data-o="him|his|he" data-a="1" data-why="a friend of + mine/yours/his… → his."></div>`
      },
      {
        title: '5. Whose? — «Чей? Чья? Чьё?»',
        html: `
<p>Вопрос «чей» — <b>whose</b> [huːz]. Его можно ставить с предметом и без него.</p>
<div class="g-formula"><span class="g-part g-v">Whose</span><span class="g-plus">+</span><span class="g-part">(предмет)</span><span class="g-plus">+</span><span class="g-part">is this / are these?</span></div>
<table>
<tr><th>Вопрос</th><th>Ответ</th></tr>
<tr><td><span class="say">Whose headphones are these?</span></td><td><span class="say">They're mine.</span></td></tr>
<tr><td><span class="say">Whose are these?</span></td><td><span class="say">They're Max's.</span></td></tr>
<tr><td><span class="say">Whose wallet is this?</span></td><td><span class="say">It's hers.</span></td></tr>
<tr><td><span class="say">Whose is this?</span></td><td><span class="say">It's my brother's.</span></td></tr>
</table>
<p>Один предмет → <b>is this / is that</b>. Много предметов → <b>are these / are those</b>.</p>
<div class="g-bad">Who is this bag? <span class="muted">— это «Кто эта сумка?»</span></div>
<div class="g-good">Whose bag is this?</div>
<div class="g-tip"><b>whose</b> и <b>who's</b> (= who is) звучат одинаково. Пишем <b>whose</b>, когда спрашиваем «чей»: <span class="say">Who's that? — That's Tom.</span> <span class="say">Whose car is that? — It's Tom's.</span></div>
<div class="mini" data-q="___ keys are these? — They're mine." data-o="Who|Whose|Who's" data-a="1" data-why="Спрашиваем «чьи» → Whose."></div>`
      },
      {
        title: '6. Kate\'s camera — чья вещь через \'s',
        html: `
<div class="g-idea">Чтобы сказать «камера Кати», «машина брата», к хозяину добавляем <b>'s</b> и ставим его <b>перед</b> предметом. По-русски хозяин идёт после вещи, по-английски — до.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>камера <b>Кати</b></p><p>машина <b>моего брата</b></p><p>кабинет <b>начальника</b></p></div>
  <div><div class="g-h">English</div><p><span class="say"><b>Kate's</b> camera</span></p><p><span class="say"><b>my brother's</b> car</span></p><p><span class="say">the <b>boss's</b> office</span></p></div>
</div>
<div class="g-formula"><span class="g-part g-v">кто + 's</span><span class="g-plus">+</span><span class="g-part">что</span></div>
<ul class="g-list">
<li><span class="say">I stayed at my sister's flat.</span> — Я жил в квартире сестры.</li>
<li><span class="say">Are you going to James's party?</span> — Ты идёшь на вечеринку Джеймса? <span class="muted">(имя на -s: пишем 's)</span></li>
<li><span class="say">Anna is a woman's name.</span> — Анна — женское имя.</li>
</ul>
<p>После <b>'s</b> предмет можно не повторять, если и так понятно:</p>
<ul class="g-list">
<li><span class="say">My laptop is new, but Kate's is old.</span> — Мой ноутбук новый, а у Кати старый. <span class="muted">(= Kate's laptop)</span></li>
<li><span class="say">Whose umbrella is this? — It's my mother's.</span> — Чей это зонт? — Мамин.</li>
<li><span class="say">I was at Paul's last night.</span> — Вчера вечером я был у Пола. <span class="muted">(= у Пола дома)</span></li>
</ul>
<div class="g-bad">the car of my brother</div>
<div class="g-good">my brother's car <span class="muted">— про людей обычно говорят с 's</span></div>
<div class="g-tip">Не путайте: <span class="say">Kate's here.</span> = Kate <b>is</b> here (Катя здесь). <span class="say">Kate's laptop</span> = ноутбук Кати. Если после 's идёт предмет — это «чей».</div>
<div class="mini" data-q="Это телефон моего друга." data-o="It's the phone of my friend.|It's my friend's phone.|It's my friend phone." data-a="1" data-why="Про людей: хозяин + 's + предмет."></div>`
      },
      {
        title: '7. friend\'s или friends\'? А для вещей — of',
        html: `
<p>Где стоит апостроф, показывает, <b>один</b> хозяин или <b>несколько</b>. На слух разницы нет — только на письме.</p>
<table>
<tr><th>Хозяин</th><th>Пишем</th><th>Смысл</th></tr>
<tr><td>один друг</td><td><span class="say">my friend's house</span></td><td>дом друга</td></tr>
<tr><td>несколько друзей</td><td><span class="say">my friends' house</span></td><td>дом друзей</td></tr>
<tr><td>одна мама</td><td><span class="say">my mother's car</span></td><td>машина мамы</td></tr>
<tr><td>двое родителей</td><td><span class="say">my parents' car</span></td><td>машина родителей</td></tr>
</table>
<div class="g-steps"><div class="g-h">Как поставить апостроф</div><ol>
<li>Один хозяин (friend, sister, boss) → <b>'s</b>: my sister's room.</li>
<li>Много хозяев, слово уже кончается на -s (friends, parents, players) → только <b>'</b>: the players' names.</li>
<li>Много хозяев без -s (children, people) → <b>'s</b>: <span class="say">the children's toys</span>.</li>
</ol></div>
<p>Для <b>вещей, мест, фильмов, игр</b> обычно используем <b>the … of …</b>:</p>
<ul class="g-list">
<li><span class="say">What's the name of this game?</span> — Как называется эта игра?</li>
<li><span class="say">We didn't see the end of the film.</span> — Мы не видели конец фильма.</li>
<li><span class="say">Madrid is the capital of Spain.</span> — Мадрид — столица Испании.</li>
<li><span class="say">Sit in the back of the car.</span> — Садись на заднее сиденье машины.</li>
</ul>
<div class="g-bad">the game's name <span class="muted">/ the film's end</span></div>
<div class="g-good">the name of the game <span class="muted">/ the end of the film</span></div>
<div class="mini" data-q="Машина моих родителей:" data-o="my parent's car|my parents' car|my parents car" data-a="1" data-why="Родителей двое, слово кончается на -s → только апостроф."></div>
<div class="mini" data-q="Как называется эта деревня?" data-o="What's the name of this village?|What's this village's name?|What's the village name of?" data-a="0" data-why="Для мест и вещей — the name of…"></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">This phone is my.</div><div class="g-good">This phone is <b>mine</b>.</div>
<div class="g-bad">It's yours bag.</div><div class="g-good">It's <b>your</b> bag.</div>
<div class="g-bad">The money is her's.</div><div class="g-good">The money is <b>hers</b>.</div>
<div class="g-bad">She's a friend of me.</div><div class="g-good">She's a friend <b>of mine</b>.</div>
<div class="g-bad">Who is this jacket?</div><div class="g-good"><b>Whose</b> jacket is this?</div>
<div class="g-bad">the laptop of Kate</div><div class="g-good"><b>Kate's</b> laptop</div>
<div class="g-bad">my parent's house <span class="muted">(о маме и папе)</span></div><div class="g-good">my <b>parents'</b> house</div>
<div class="g-bad">the film's end</div><div class="g-good">the end <b>of</b> the film</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>my</b> + предмет, <b>mine</b> без предмета · <b>Whose</b> …? — «чей?» · у людей <b>Kate's</b>, у вещей <b>the name of</b>.</div>`
      }
    ],
    words: [
      ['whose', 'чей, чья, чьё, чьи', 'Whose bag is this?', 'Чья это сумка?'],
      ['mine', 'мой, моя, моё (без сущ.)', 'This coffee is mine.', 'Этот кофе мой.'],
      ['yours', 'твой, ваш (без сущ.)', 'Is this jacket yours?', 'Эта куртка твоя?'],
      ['hers', 'её (без сущ.)', 'The blue mouse is hers.', 'Синяя мышка — её.'],
      ['ours', 'наш (без сущ.)', 'That table is ours.', 'Тот стол наш.'],
      ['theirs', 'их (без сущ.)', 'Our team won, not theirs.', 'Победила наша команда, а не их.'],
      ['belong to', 'принадлежать', 'This laptop belongs to my boss.', 'Этот ноутбук принадлежит моему начальнику.'],
      ['owner', 'владелец, хозяин', 'Who is the owner of this cat?', 'Кто хозяин этого кота?'],
      ['brother', 'брат', 'My brother\'s room is small.', 'Комната моего брата маленькая.'],
      ['sister', 'сестра', 'I often play my sister\'s games.', 'Я часто играю в игры сестры.'],
      ['parents', 'родители', 'We had dinner at my parents\' house.', 'Мы ужинали в доме моих родителей.'],
      ['wife', 'жена', 'Tom\'s wife is a designer.', 'Жена Тома — дизайнер.'],
      ['husband', 'муж', 'Her husband loves strategy games.', 'Её муж обожает стратегии.'],
      ['uncle', 'дядя', 'My uncle\'s car is very old.', 'Машина моего дяди очень старая.'],
      ['aunt', 'тётя', 'I stayed at my aunt\'s last summer.', 'Прошлым летом я жил у тёти.'],
      ['cousin', 'двоюродный брат, двоюродная сестра', 'My cousin is a friend of mine too.', 'Мой двоюродный брат — ещё и мой друг.'],
      ['neighbour', 'сосед, соседка', 'Our neighbour\'s dog is very loud.', 'Собака нашего соседа очень громкая.'],
      ['boss', 'начальник, босс', 'Is this your boss\'s office?', 'Это кабинет твоего начальника?'],
      ['wallet', 'кошелёк, бумажник', 'I found a wallet. Is it yours?', 'Я нашёл кошелёк. Он твой?'],
      ['bag', 'сумка, рюкзак, пакет', 'My bag is under the table.', 'Моя сумка под столом.'],
      ['key', 'ключ; клавиша', 'Whose keys are these?', 'Чьи это ключи?'],
      ['umbrella', 'зонт', 'I forgot my umbrella, so she gave me hers.', 'Я забыл зонт, и она дала мне свой.'],
      ['headphones', 'наушники', 'These headphones are mine.', 'Эти наушники мои.'],
      ['laptop', 'ноутбук', 'My laptop is old, but yours is new.', 'Мой ноутбук старый, а твой новый.'],
      ['jacket', 'куртка, пиджак', 'Whose jacket is on the chair?', 'Чья куртка на стуле?'],
      ['keyboard', 'клавиатура', 'Can I use your keyboard? Mine doesn\'t work.', 'Можно твою клавиатуру? Моя не работает.'],
      ['character', 'персонаж', 'What\'s the name of your character?', 'Как зовут твоего персонажа?'],
      ['skin', 'кожа; скин (в игре)', 'I like your skin. Mine is boring.', 'Мне нравится твой скин. Мой скучный.'],
      ['borrow', 'брать взаймы, одалживать (у кого-то)', 'I borrowed my brother\'s bike.', 'Я взял велосипед брата.'],
      ['lend — lent', 'одалживать, давать взаймы — одолжил', 'I lent my charger to a friend of mine.', 'Я одолжил зарядку своему другу.'],
      ['share', 'делиться; делить', 'We share a flat with a friend of ours.', 'Мы снимаем квартиру вместе с нашим другом.'],
      ['end', 'конец', 'I didn\'t see the end of the film.', 'Я не видел конец фильма.']
    ],
    texts: [
      {
        id: 't-a1-11-1', title: 'Whose is this?', level: 'A1',
        text: `Lena: Good morning! Whose headphones are these? They were on my desk.
Max: They're mine! Thanks. And is this blue mug yours?
Lena: No, it isn't mine. It's Kate's. Mine is white.
Max: OK. And whose laptop is that? It's really old.
Lena: It's the boss's. He likes old things.
Max: Ha! And the umbrella near the door?
Lena: It belongs to a friend of mine. She came here yesterday and forgot it.
Max: I see. By the way, what's the name of your new game? Your character looks great.
Lena: It's "Star Farm". My character's skin was a present from my brother.
Max: Nice! My skin is boring. Is your brother's account open for friends?
Lena: Yes. Give me your nickname. I can send him yours.
Max: Great, thanks!`,
        questions: [
          { q: 'Whose headphones were on Lena\'s desk?', o: ['Kate\'s', 'Max\'s', 'the boss\'s'], a: 1 },
          { q: 'Whose laptop is old?', o: ['Lena\'s', 'Kate\'s', 'the boss\'s'], a: 2 },
          { q: 'Who gave Lena her character\'s skin?', o: ['her brother', 'Max', 'a friend of hers'], a: 0 }
        ]
      },
      {
        id: 't-a1-11-2', title: 'Sunday at my parents\' house', level: 'A1',
        text: `Every Sunday my family meets at my parents' house. It's big, and it's near the river.
Last Sunday my sister came with her husband, Tom. Tom is a friend of mine too. We were at school together.
My uncle came too. My uncle's car is very old, but he loves it.
After dinner we played a board game. It was my cousin's game, so she explained the rules. My mother's team won, and my father's team lost. My father wasn't happy!
In the evening my sister couldn't find her phone. "Is this yours?" I asked. "No, it isn't mine. Mine is black," she said. It was our neighbour's phone! He was at the house in the afternoon.
At the end of the day I took my bag and my brother's old jacket and went home.`,
        questions: [
          { q: 'Where does the family meet on Sundays?', o: ['at the writer\'s flat', 'at the parents\' house', 'at the uncle\'s house'], a: 1 },
          { q: 'Whose team won?', o: ['the mother\'s', 'the father\'s', 'the cousin\'s'], a: 0 },
          { q: 'Whose phone was it?', o: ['the sister\'s', 'Tom\'s', 'the neighbour\'s'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'This laptop is ___.', o: ['my', 'mine', 'me'], a: 1, why: 'После слова нет предмета → mine.' },
      { t: 'choice', q: 'Can I use ___ keyboard?', o: ['your', 'yours', 'you'], a: 0, why: 'Дальше идёт предмет (keyboard) → your.' },
      { t: 'choice', q: 'We went in our car, and they went in ___.', o: ['their', 'them', 'theirs'], a: 2, why: 'Не повторяем car: their car = theirs.' },
      { t: 'choice', q: '___ jacket is this?', o: ['Who', 'Whose', 'Who\'s'], a: 1, why: '«Чья» → whose; who\'s = who is.' },
      { t: 'choice', q: 'I met a friend of ___ in the park.', o: ['me', 'my', 'mine'], a: 2, why: 'Фраза a friend of mine — после of стоит mine.' },
      { t: 'choice', q: 'Машина моего брата:', o: ['the car of my brother', 'my brother\'s car', 'my brother car'], a: 1, why: 'Про людей: хозяин + \'s + предмет.' },
      { t: 'choice', q: 'Дом моих друзей (их несколько):', o: ['my friend\'s house', 'my friends\' house', 'my friends house'], a: 1, why: 'Хозяев много, слово на -s → только апостроф после s.' },
      { t: 'choice', q: 'Конец игры:', o: ['the game\'s end', 'the end of the game', 'the end the game'], a: 1, why: 'Для вещей и событий — the … of …' },
      { t: 'gap', q: 'Is this bag Anna\'s? — Yes, it\'s ___. (её)', a: ['hers'], why: 'Без предмета «её» = hers, без апострофа.' },
      { t: 'gap', q: 'It isn\'t our problem. It\'s ___. (их)', a: ['theirs'], why: 'Без предмета «их» = theirs.' },
      { t: 'gap', q: 'Is this ___ camera or hers? — It\'s his. (его)', a: ['his'], why: 'his — одинаковое с предметом и без него.' },
      { t: 'gap', q: 'This is ___ office. (начальника)', a: ['the boss\'s', 'the boss’s', 'my boss\'s', 'our boss\'s'], why: 'Один хозяин → \'s; boss кончается на s, но пишем boss\'s.' },
      { t: 'gap', q: 'Whose umbrella is this? — It\'s my ___. (мамин)', a: ['mother\'s', 'mum\'s', 'mom\'s'], why: 'После \'s предмет можно не повторять: my mother\'s = my mother\'s umbrella.' },
      { t: 'gap', q: 'I was at ___ last night. (у Пола дома)', a: ['Paul\'s', 'Paul\'s house', 'Paul\'s place'], why: 'at Paul\'s = у Пола дома, слово «дом» можно не говорить.' },
      { t: 'order', a: 'Whose headphones are these', ru: 'Чьи это наушники?' },
      { t: 'order', a: 'She came with a friend of hers', ru: 'Она пришла со своей подругой.' },
      { t: 'order', a: 'What is the name of your character', ru: 'Как зовут твоего персонажа?' },
      { t: 'tr', q: 'Этот кофе мой, а тот твой.', a: ['this coffee is mine and that is yours', 'this coffee is mine and that one is yours', 'this coffee is mine but that is yours', 'this coffee is mine and that coffee is yours', 'this coffee is mine and that\'s yours', 'this coffee is mine but that one is yours', 'this coffee is mine but that\'s yours'] },
      { t: 'tr', q: 'Я взял ноутбук сестры.', a: ['i took my sister\'s laptop', 'i borrowed my sister\'s laptop', 'i took my sister’s laptop'] },
      { t: 'listen', say: 'Is this charger mine or yours?', a: ['is this charger mine or yours'] }
    ],
    test: [
      { t: 'choice', q: 'I\'ve got your number, but you haven\'t got ___.', o: ['my', 'mine', 'me'], a: 1, why: 'mine = my number, предмет не повторяем.' },
      { t: 'choice', q: 'Our flat is small, but ___ is big. (у них)', o: ['their', 'theirs', 'their\'s'], a: 1, why: 'Без предмета «их» = theirs, апострофа нет.' },
      { t: 'choice', q: 'Tom was at the party with a friend of ___.', o: ['him', 'he', 'his'], a: 2, why: 'a friend of + his (последний столбик таблицы).' },
      { t: 'choice', q: 'Who\'s / Whose: «___ that man? — My uncle.»', o: ['Who\'s', 'Whose', 'Who'], a: 0, why: 'Спрашиваем «кто это» = who is → who\'s.' },
      { t: 'choice', q: 'Игрушки детей:', o: ['the childrens\' toys', 'the children\'s toys', 'the childrens toys'], a: 1, why: 'children — множественное без -s, поэтому \'s.' },
      { t: 'choice', q: 'Как называется этот фильм?', o: ['What\'s the name of this film?', 'What\'s this film\'s of name?', 'What\'s the film name of?'], a: 0, why: 'Для вещей и фильмов — the name of…' },
      { t: 'gap', q: 'My phone is black. ___ is white. (у неё)', a: ['hers', 'her phone'], why: 'Без предмета «её» = hers.' },
      { t: 'gap', q: '___ keys are these? — They\'re Max\'s. (чьи)', a: ['whose'], why: 'Вопрос «чей/чьи» — whose.' },
      { t: 'gap', q: 'We had lunch at my ___ house. (родителей)', a: ['parents\'', 'parents’'], why: 'Родителей двое, слово на -s → апостроф после s.' },
      { t: 'gap', q: 'Is this ___ car? (моей сестры)', a: ['my sister\'s', 'my sister’s'], why: 'Одна сестра → sister\'s перед предметом.' },
      { t: 'gap', q: 'Are these people friends of ___? (твои)', a: ['yours'], why: 'friends of + yours, не of you.' },
      { t: 'gap', q: 'The black car belongs to ___. (нам)', a: ['us'], why: 'После belong to нужен объект «кого/кому» — us (как me, him).' }
    ]
  },

  // ───────────────────────────── UNIT 12 ─────────────────────────────
  {
    id: 'a1-12', level: 'A1', num: 12, track: 'main',
    books: { red: [67, 68, 83] },
    title: 'A bottle, some water — much, many, a lot of',
    summary: 'Какие слова можно посчитать, а какие нет: a bottle of water, some bread, much time, many games, a lot of friends.',
    grammar: [
      {
        title: '1. Главная идея: что можно посчитать, а что нет',
        html: `
<div class="g-idea">Английский делит все предметы на две группы. <b>Исчисляемые</b> — то, что можно посчитать поштучно: одна игра, две игры. <b>Неисчисляемые</b> — масса, вещество, что-то общее: вода, деньги, музыка. От группы зависит, ставить ли <b>a</b>, можно ли <b>-s</b> и что выбрать — <b>much</b> или <b>many</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>одна бутылка, три бутылки</p><p>вода, <i>«две воды»</i> — странно</p><p>Много игр. Много времени.</p></div>
  <div><div class="g-h">English</div><p><span class="say">one bottle, three bottles</span></p><p><span class="say">water, a bottle of water</span></p><p><span class="say">many games</span> · <span class="say">much time</span></p></div>
</div>
<table>
<tr><th>Исчисляемые</th><th>Неисчисляемые</th></tr>
<tr><td>a game → games</td><td>music</td></tr>
<tr><td>a key → keys</td><td>money</td></tr>
<tr><td>an idea → ideas</td><td>water, rice, salt</td></tr>
</table>
<div class="g-tip">Проверка: можно сказать «одна <i>штука</i>, две <i>штуки</i>»? Одна игра, две игры — да, исчисляемое. «Две соли», «три музыки» — нельзя, неисчисляемое.</div>
<div class="mini" data-q="Какое слово неисчисляемое?" data-o="apple|rice|key" data-a="1" data-why="Рис не считают поштучно: rice, без a и без -s."></div>`
      },
      {
        title: '2. Исчисляемые: a / an или -s',
        html: `
<p>Исчисляемое слово бывает в двух видах: <b>одна штука</b> и <b>много</b>.</p>
<table>
<tr><th>Одна</th><th>Много</th></tr>
<tr><td>a car, the car, my car</td><td>cars, two cars, some cars, many cars</td></tr>
<tr><td><span class="say">an idea</span></td><td><span class="say">three ideas</span></td></tr>
</table>
<div class="g-idea">Главное правило: одна штука <b>не может стоять одна</b>. Перед ней нужно <b>a / an</b>, <b>the</b>, <b>my</b> или другое такое слово.</div>
<ul class="g-list">
<li><span class="say">I need a key.</span> — Мне нужен ключ.</li>
<li><span class="say">We can't get in without a key.</span> — Без ключа мы не войдём.</li>
<li><span class="say">She's got a new laptop.</span> — У неё новый ноутбук.</li>
<li><span class="say">New phones are very expensive.</span> — Новые телефоны очень дорогие. <span class="muted">(много → без a)</span></li>
</ul>
<div class="g-bad">I need key. <span class="muted">/ He is designer.</span></div>
<div class="g-good">I need a key. <span class="muted">/ He is a designer.</span></div>
<div class="mini" data-q="We can't play without ___." data-o="controller|a controller|an controller" data-a="1" data-why="controller — исчисляемое, одна штука → нужен a."></div>`
      },
      {
        title: '3. Неисчисляемые: без a, без -s, но с «бутылкой»',
        html: `
<p>У неисчисляемых слов <b>одна</b> форма. Перед ними нельзя <b>a/an</b> и цифры, у них нет <b>-s</b>. Глагол после них — как для одного: <b>is</b>, <b>was</b>, <b>-s</b>.</p>
<ul class="g-list">
<li><span class="say">Money isn't everything.</span> — Деньги — это не всё.</li>
<li><span class="say">The water is cold.</span> — Вода холодная.</li>
<li><span class="say">I've got some money.</span> — У меня есть немного денег.</li>
<li><span class="say">There isn't much rice in the bowl.</span> — В миске мало риса.</li>
</ul>
<p>Чтобы посчитать неисчисляемое, добавляем «ёмкость» или «кусок»:</p>
<div class="g-formula"><span class="g-part g-v">a bottle / a cup / a piece</span><span class="g-plus">+</span><span class="g-part">of</span><span class="g-plus">+</span><span class="g-part">water / coffee / cheese</span></div>
<table>
<tr><th>Сколько</th><th>Что</th><th>Звучит</th></tr>
<tr><td>a bottle of</td><td>water, juice</td><td><span class="say">a bottle of water</span></td></tr>
<tr><td>a cup of</td><td>coffee, tea</td><td><span class="say">two cups of coffee</span></td></tr>
<tr><td>a glass of</td><td>milk, juice</td><td><span class="say">a glass of milk</span></td></tr>
<tr><td>a piece of</td><td>cheese, cake, paper</td><td><span class="say">a piece of cheese</span></td></tr>
<tr><td>a bar of</td><td>chocolate</td><td><span class="say">a bar of chocolate</span></td></tr>
<tr><td>a bowl of</td><td>rice, soup</td><td><span class="say">a bowl of rice</span></td></tr>
</table>
<p>Так же: <span class="say">a piece of music</span> — музыкальная пьеса, трек; <span class="say">a game of chess</span> — партия в шахматы.</p>
<div class="g-bad">two waters <span class="muted">/ a music</span></div>
<div class="g-good">two bottles of water <span class="muted">/ some music, a piece of music</span></div>
<div class="mini" data-q="Can I have ___, please?" data-o="a water|a glass of water|waters" data-a="1" data-why="water — неисчисляемое, считаем через a glass of."></div>`
      },
      {
        title: '4. a или some?',
        html: `
<p><b>some</b> вы знаете из урока 6: «немного, несколько». Выбор между <b>a</b> и <b>some</b> — по таблице:</p>
<table>
<tr><th>Какое слово</th><th>Ставим</th><th>Пример</th></tr>
<tr><td>одна штука</td><td><b>a / an</b></td><td><span class="say">I need a new mouse.</span></td></tr>
<tr><td>много штук</td><td><b>some</b></td><td><span class="say">I need some new cables.</span></td></tr>
<tr><td>неисчисляемое</td><td><b>some</b></td><td><span class="say">I need some coffee.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I bought a keyboard, some games and some chocolate.</span> — Я купил клавиатуру, несколько игр и шоколад.</li>
<li><span class="say">Do you want some cheese? — Yes, a piece, please.</span> — Хочешь сыра? — Да, кусочек, пожалуйста.</li>
</ul>
<p>Некоторые слова бывают <b>в обеих группах</b> — меняется смысл:</p>
<table>
<tr><th>Целиком (штука)</th><th>Часть, масса</th></tr>
<tr><td><span class="say">a cake</span> — торт целиком</td><td><span class="say">some cake</span> — кусок торта</td></tr>
<tr><td><span class="say">a chicken</span> — курица (птица, тушка)</td><td><span class="say">some chicken</span> — курятина</td></tr>
<tr><td><span class="say">a paper</span> — газета</td><td><span class="say">some paper</span> — бумага</td></tr>
</table>
<div class="g-bad">I need a paper for my sketches.</div>
<div class="g-good">I need some paper for my sketches. <span class="muted">— бумага, а не газета</span></div>
<div class="mini" data-q="I'm hungry. I want ___ bread." data-o="a|some|an" data-a="1" data-why="bread — неисчисляемое → some."></div>`
      },
      {
        title: '5. Ловушки: слова, которые по-русски считаются',
        html: `
<div class="g-idea">Некоторые слова в русском можно посчитать или они во множественном числе, а в английском — <b>неисчисляемые</b>. С ними нельзя <b>a</b> и <b>-s</b>, а глагол — <b>is</b>.</div>
<table>
<tr><th>English</th><th>Русский</th><th>Пример</th></tr>
<tr><td>advice</td><td>совет, советы</td><td><span class="say">I need some advice.</span></td></tr>
<tr><td>information</td><td>информация, сведения</td><td><span class="say">Where can I get some information?</span></td></tr>
<tr><td>news</td><td>новость, новости</td><td><span class="say">The news is good!</span></td></tr>
<tr><td>hair</td><td>волосы</td><td><span class="say">Her hair is very long.</span></td></tr>
<tr><td>money</td><td>деньги</td><td><span class="say">The money is on the table.</span></td></tr>
<tr><td>furniture</td><td>мебель</td><td><span class="say">They've got some nice furniture.</span></td></tr>
<tr><td>bread</td><td>хлеб, батон</td><td><span class="say">I want to buy some bread.</span></td></tr>
<tr><td>weather</td><td>погода</td><td><span class="say">It's nice weather today.</span></td></tr>
<tr><td>work, homework</td><td>работа, домашка</td><td><span class="say">It's hard work.</span></td></tr>
<tr><td>luggage</td><td>багаж, чемоданы</td><td><span class="say">We haven't got much luggage.</span></td></tr>
</table>
<div class="g-bad">Can you give me an advice? <span class="muted">/ The news are bad.</span></div>
<div class="g-good">Can you give me some advice? <span class="muted">/ The news is bad.</span></div>
<div class="g-bad">It's a nice weather. <span class="muted">/ Her hairs are long.</span></div>
<div class="g-good">It's nice weather. <span class="muted">/ Her hair is long.</span></div>
<div class="g-steps"><div class="g-h">work или job?</div><ol>
<li><b>work</b> — работа вообще, неисчисляемое: <span class="say">I've got a lot of work today.</span></li>
<li><b>job</b> — должность, место работы, исчисляемое: <span class="say">She's got a new job.</span></li>
</ol></div>
<div class="g-tip">Нужно сказать «одна новость» или «один совет»? Возьмите «кусочек»: <span class="say">a piece of news</span>, <span class="say">a piece of advice</span>.</div>
<div class="mini" data-q="I've got a new ___. I'm a designer at a game studio now." data-o="work|job|works" data-a="1" data-why="Место работы можно посчитать → a job; work без a."></div>
<div class="mini" data-q="The news ___ great!" data-o="is|are|am" data-a="0" data-why="news — неисчисляемое, глагол как для одного → is."></div>`
      },
      {
        title: '6. much, many, a lot of — «много»',
        html: `
<p>Русское «много» по-английски — три слова. Выбор снова зависит от группы:</p>
<table>
<tr><th>Слово</th><th>С чем</th><th>Пример</th></tr>
<tr><td><b>many</b></td><td>исчисляемые (много штук)</td><td><span class="say">many games</span>, <span class="say">many people</span></td></tr>
<tr><td><b>much</b></td><td>неисчисляемые</td><td><span class="say">much time</span>, <span class="say">much money</span></td></tr>
<tr><td><b>a lot of</b></td><td>с обеими группами</td><td><span class="say">a lot of games</span>, <span class="say">a lot of time</span></td></tr>
</table>
<p>Вопрос «сколько?» тоже двух видов:</p>
<div class="g-formula"><span class="g-part g-v">How many</span><span class="g-plus">+</span><span class="g-part">games, people…</span><span class="g-sep">·</span><span class="g-part g-v">How much</span><span class="g-plus">+</span><span class="g-part">time, money…</span></div>
<ul class="g-list">
<li><span class="say">How many photos did you take?</span> — Сколько фото ты сделал?</li>
<li><span class="say">How much money do you need?</span> — Сколько денег тебе нужно?</li>
<li><span class="say">How much is it?</span> — Сколько это стоит?</li>
<li><span class="say">Did you take any photos? — Some, but not many.</span> — Ты фотографировал? — Немного, но не много.</li>
</ul>
<p>После <b>a lot of</b> глагол — по существительному:</p>
<ul class="g-list">
<li><span class="say">There is a lot of food.</span> <span class="muted">(food — неисчисляемое → is)</span></li>
<li><span class="say">There are a lot of people.</span> <span class="muted">(people — много → are)</span></li>
<li><span class="say">A lot of people play this game.</span> — В эту игру играет много людей. <span class="muted">(не plays)</span></li>
</ul>
<div class="mini" data-q="How ___ levels are there in the game?" data-o="much|many|lot" data-a="1" data-why="levels — много штук (исчисляемое) → how many."></div>
<div class="mini" data-q="How ___ sugar do you want?" data-o="much|many|lot of" data-a="0" data-why="sugar — неисчисляемое → how much."></div>`
      },
      {
        title: '7. Где much звучит странно',
        html: `
<div class="g-idea"><b>much</b> живёт в <b>вопросах</b> и <b>отрицаниях</b>. В обычном утвердительном предложении вместо него говорят <b>a lot of</b>. <b>many</b> и <b>a lot of</b> подходят везде.</div>
<table>
<tr><th>Тип</th><th>much</th><th>a lot of</th></tr>
<tr><td>вопрос</td><td><span class="say">Do you drink much coffee?</span></td><td>можно</td></tr>
<tr><td>отрицание</td><td><span class="say">I don't drink much coffee.</span></td><td>можно</td></tr>
<tr><td>утверждение</td><td><span class="muted">звучит странно</span></td><td><span class="say">I drink a lot of coffee.</span></td></tr>
</table>
<div class="g-bad">I play much games. <span class="muted">/ I've got much work.</span></div>
<div class="g-good">I play a lot of games. <span class="muted">/ I've got a lot of work.</span></div>
<p><b>much</b> и <b>a lot</b> можно говорить и <b>без существительного</b>:</p>
<ul class="g-list">
<li><span class="say">Do you watch TV much? — No, not much.</span> — Ты много смотришь телевизор? — Нет, не особо.</li>
<li><span class="say">Do you play online much? — Yes, a lot.</span> — Ты много играешь онлайн? — Да, много. <span class="muted">(не Yes, much)</span></li>
<li><span class="say">We love films, so we go to the cinema a lot.</span> — Мы любим кино, поэтому часто ходим в кинотеатр.</li>
<li><span class="say">She didn't say much.</span> — Она мало что сказала.</li>
<li><span class="say">I don't like this game very much.</span> — Мне не очень нравится эта игра.</li>
</ul>
<div class="g-tip">Без существительного <b>a lot</b> — без <b>of</b>: <span class="say">I read a lot.</span> С существительным — с <b>of</b>: <span class="say">I read a lot of books.</span></div>
<div class="mini" data-q="Do you play games? — Yes, ___." data-o="much|a lot|a lot of" data-a="1" data-why="Утверждение без существительного → a lot."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I need an information.</div><div class="g-good">I need <b>some</b> information.</div>
<div class="g-bad">Can I have two waters?</div><div class="g-good">Can I have two <b>bottles of</b> water?</div>
<div class="g-bad">We haven't got much friends.</div><div class="g-good">We haven't got <b>many</b> friends.</div>
<div class="g-bad">How many money do you need?</div><div class="g-good">How <b>much</b> money do you need?</div>
<div class="g-bad">I've got much homework.</div><div class="g-good">I've got <b>a lot of</b> homework.</div>
<div class="g-bad">A lot of people plays it.</div><div class="g-good">A lot of people <b>play</b> it.</div>
<div class="g-bad">Your advices are good.</div><div class="g-good">Your <b>advice is</b> good.</div>
<div class="g-bad">I'm looking for a work.</div><div class="g-good">I'm looking for a <b>job</b>.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>a</b> game / <b>some</b> games / <b>some</b> water · <b>many</b> — считаем, <b>much</b> — не считаем (в вопросах и с not) · <b>a lot of</b> — всегда можно.</div>`
      }
    ],
    words: [
      ['bottle', 'бутылка', 'I drink a bottle of water every day.', 'Я выпиваю бутылку воды в день.'],
      ['cup', 'чашка', 'Two cups of coffee, please.', 'Две чашки кофе, пожалуйста.'],
      ['glass', 'стакан; стекло', 'Can I have a glass of juice?', 'Можно стакан сока?'],
      ['piece', 'кусок, кусочек, штука', 'Do you want a piece of cake?', 'Хочешь кусочек торта?'],
      ['bar', 'плитка, батончик; бар', 'I ate a bar of chocolate.', 'Я съел плитку шоколада.'],
      ['bowl', 'миска, тарелка', 'He had a bowl of soup.', 'Он съел тарелку супа.'],
      ['water', 'вода', 'There isn\'t much water in the bottle.', 'В бутылке мало воды.'],
      ['milk', 'молоко', 'We haven\'t got any milk.', 'У нас нет молока.'],
      ['bread', 'хлеб', 'I want to buy some bread.', 'Я хочу купить хлеба.'],
      ['rice', 'рис', 'How much rice do we need?', 'Сколько риса нам нужно?'],
      ['cheese', 'сыр', 'Do you want some cheese?', 'Хочешь сыра?'],
      ['sugar', 'сахар', 'I don\'t eat much sugar.', 'Я ем мало сахара.'],
      ['salt', 'соль', 'There\'s a lot of salt in this soup.', 'В этом супе много соли.'],
      ['juice', 'сок', 'The juice is in the fridge.', 'Сок в холодильнике.'],
      ['chocolate', 'шоколад', 'She loves chocolate.', 'Она обожает шоколад.'],
      ['meat', 'мясо', 'I don\'t eat meat.', 'Я не ем мясо.'],
      ['food', 'еда', 'There was a lot of food at the party.', 'На вечеринке было много еды.'],
      ['money', 'деньги', 'Money isn\'t everything.', 'Деньги — это не всё.'],
      ['advice', 'совет, советы', 'Can you give me some advice?', 'Можешь дать мне совет?'],
      ['information', 'информация, сведения', 'I need some information about the game.', 'Мне нужна информация об игре.'],
      ['news', 'новости, новость', 'The news is good!', 'Новости хорошие!'],
      ['furniture', 'мебель', 'We haven\'t got much furniture.', 'У нас мало мебели.'],
      ['hair', 'волосы', 'Her hair is very long.', 'У неё очень длинные волосы.'],
      ['weather', 'погода', 'The weather was nice yesterday.', 'Вчера была хорошая погода.'],
      ['luggage', 'багаж', 'How much luggage have you got?', 'Сколько у вас багажа?'],
      ['homework', 'домашнее задание', 'I\'ve got a lot of homework today.', 'У меня сегодня много домашки.'],
      ['traffic', 'движение, пробки', 'There was a lot of traffic this morning.', 'Утром были большие пробки.'],
      ['much', 'много (с неисчисляемыми)', 'I haven\'t got much time.', 'У меня мало времени.'],
      ['many', 'много (с исчисляемыми)', 'Are there many people online?', 'Много людей онлайн?'],
      ['a lot of', 'много (со всеми)', 'I\'ve got a lot of friends in this game.', 'У меня много друзей в этой игре.'],
      ['How much…?', 'Сколько…? (неисчисляемое); сколько стоит', 'How much is this game?', 'Сколько стоит эта игра?'],
      ['How many…?', 'Сколько…? (штук)', 'How many hours did you play?', 'Сколько часов ты играл?']
    ],
    texts: [
      {
        id: 't-a1-12-1', title: 'Pizza and games', level: 'A1',
        text: `On Friday I invited some friends to my flat for a game night. In the morning I checked the kitchen. There wasn't much food. There was some cheese, a piece of chocolate cake and some rice. There wasn't any milk, and there weren't many snacks.
So I went to the shop. I bought three bottles of juice, some bread, a lot of crisps and two bars of chocolate. It wasn't much money.
In the evening seven people came. We ordered four big pizzas. We played a lot of games and drank a lot of juice. At midnight Anna asked, "How much pizza is there now?" "Not much," I said. "Only one piece!"
It was a great evening. The only bad news was the kitchen. There was a lot of work in the morning!`,
        questions: [
          { q: 'What wasn\'t in the kitchen in the morning?', o: ['cheese', 'milk', 'cake'], a: 1 },
          { q: 'How many people came?', o: ['four', 'seven', 'three'], a: 1 },
          { q: 'How much pizza was there at midnight?', o: ['one piece', 'one pizza', 'a lot'], a: 0 }
        ]
      },
      {
        id: 't-a1-12-2', title: 'Packing for a trip', level: 'A1',
        text: `Kate: Are you ready? The train leaves at nine.
Sam: Almost. But I've got a lot of luggage.
Kate: How many bags have you got?
Sam: Three. And a backpack.
Kate: Three bags for two days? What's in them?
Sam: Clothes, my laptop, some books, some food…
Kate: Food? How much food?
Sam: Not much. Some bread, some cheese and a lot of chocolate.
Kate: Sam, there are a lot of cafés there! Do you need your laptop?
Sam: Yes. I've got some work.
Kate: OK. And how much money have you got?
Sam: Not much, but I've got my card.
Kate: Fine. Can I give you some advice? Take one bag, not three.
Sam: Hmm. Good advice. OK, one bag and the backpack!`,
        questions: [
          { q: 'How many bags has Sam got at first?', o: ['one', 'two', 'three'], a: 2 },
          { q: 'What food has Sam got a lot of?', o: ['bread', 'chocolate', 'cheese'], a: 1 },
          { q: 'What is Kate\'s advice?', o: ['Take one bag.', 'Buy some food.', 'Leave the laptop.'], a: 0 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'I need ___ key.', o: ['a', 'some', '—'], a: 0, why: 'key — одна штука, исчисляемое → a.' },
      { t: 'choice', q: 'Can I have ___ water, please?', o: ['a', 'some', 'many'], a: 1, why: 'water — неисчисляемое, a нельзя → some.' },
      { t: 'choice', q: 'I bought ___ of chocolate.', o: ['a bar', 'a bowl', 'a glass'], a: 0, why: 'Шоколад продаётся плиткой — a bar of.' },
      { t: 'choice', q: 'Her hair ___ very short now.', o: ['is', 'are', 'am'], a: 0, why: 'hair — неисчисляемое, глагол как для одного → is.' },
      { t: 'choice', q: 'Can you give me ___?', o: ['an advice', 'some advice', 'advices'], a: 1, why: 'advice — неисчисляемое: без a и без -s.' },
      { t: 'choice', q: 'There aren\'t ___ players online tonight.', o: ['much', 'many', 'a lot'], a: 1, why: 'players — исчисляемое во мн. числе → many.' },
      { t: 'choice', q: 'We haven\'t got ___ time.', o: ['many', 'much', 'a lot'], a: 1, why: 'time — неисчисляемое, отрицание → much.' },
      { t: 'choice', q: 'Do you go to the gym much? — Yes, ___.', o: ['much', 'a lot', 'a lot of'], a: 1, why: 'Ответ «да, много» без существительного → a lot, не much.' },
      { t: 'gap', q: 'How ___ money did you spend? (сколько)', a: ['much'], why: 'money — неисчисляемое → how much.' },
      { t: 'gap', q: 'How ___ games have you got? (сколько)', a: ['many'], why: 'games — исчисляемое → how many.' },
      { t: 'gap', q: 'I drink ___ coffee every day. (много)', a: ['a lot of', 'lots of'], why: 'Утверждение: вместо much говорим a lot of.' },
      { t: 'gap', q: 'Two ___ of tea, please. (чашки)', a: ['cups'], why: 'Чай считаем чашками: two cups of tea.' },
      { t: 'gap', q: 'She\'s got a new ___ at a game studio. (работа)', a: ['job'], why: 'Место работы — исчисляемое job; work с a не бывает.' },
      { t: 'gap', q: 'The news ___ bad. (be, сейчас)', a: ['is'], why: 'news — неисчисляемое, глагол как для одного.' },
      { t: 'order', a: 'How much sugar do you want', ru: 'Сколько сахара ты хочешь?' },
      { t: 'order', a: 'There are a lot of people here', ru: 'Здесь много людей.' },
      { t: 'tr', q: 'Мне нужна информация.', a: ['i need some information', 'i need information'] },
      { t: 'tr', q: 'У меня мало денег.', a: ['i haven\'t got much money', 'i have not got much money', 'i don\'t have much money', 'i do not have much money', 'i have got little money', 'i have little money'] },
      { t: 'listen', say: 'A bottle of water and a piece of cake, please', a: ['a bottle of water and a piece of cake please'] },
      { t: 'listen', say: 'How many people are coming?', a: ['how many people are coming'] }
    ],
    test: [
      { t: 'choice', q: 'I can\'t work without ___.', o: ['mouse', 'a mouse', 'some mouse'], a: 1, why: 'Одна штука исчисляемого не стоит одна → a mouse.' },
      { t: 'choice', q: 'I want to draw. Have you got ___?', o: ['a paper', 'some paper', 'papers'], a: 1, why: 'Бумага для рисования — неисчисляемое; a paper = газета.' },
      { t: 'choice', q: 'Can I have ___ cake? — Sure, take a big piece.', o: ['a', 'some', 'many'], a: 1, why: 'Кусок торта, а не торт целиком → some cake.' },
      { t: 'choice', q: 'Которое предложение правильное?', o: ['They\'ve got a lot of furnitures.', 'They\'ve got a lot of furniture.', 'They\'ve got many furniture.'], a: 1, why: 'furniture — неисчисляемое: без -s и без many.' },
      { t: 'choice', q: 'A lot of people ___ this game.', o: ['play', 'plays', 'is playing'], a: 0, why: 'people — много людей → глагол без -s.' },
      { t: 'choice', q: 'Которое звучит естественно?', o: ['I\'ve got much work today.', 'I\'ve got a lot of work today.', 'I\'ve got many work today.'], a: 1, why: 'В утверждении вместо much — a lot of; work неисчисляемое.' },
      { t: 'choice', q: 'Did you buy any snacks? — Yes, but not ___.', o: ['much', 'many', 'a lot of'], a: 1, why: 'snacks — исчисляемое мн. ч. → not many.' },
      { t: 'gap', q: 'There ___ a lot of traffic this morning. (be, прошлое)', a: ['was'], why: 'traffic — неисчисляемое → was, как для одного.' },
      { t: 'gap', q: 'How ___ luggage have you got? (сколько)', a: ['much'], why: 'luggage — неисчисляемое, хоть и «чемоданы» → much.' },
      { t: 'gap', q: 'A ___ of rice, please. (миска)', a: ['bowl'], why: 'Рис считаем мисками: a bowl of rice.' },
      { t: 'gap', q: 'She didn\'t say ___. (много, без существительного)', a: ['much', 'a lot'], why: 'В отрицании без существительного — much (или a lot).' },
      { t: 'gap', q: 'I read a lot, but I don\'t buy ___ books. (много)', a: ['many', 'a lot of', 'lots of'], why: 'books — исчисляемое мн. ч. → many или a lot of.' }
    ]
  }
);
