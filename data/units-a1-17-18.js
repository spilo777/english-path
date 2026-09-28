// Юниты A1 17–18: все виды вопросов; союзы and/but/or/so/because/when + итог A1
COURSE.units.push(
  // ───────────────────────────── UNIT 17 ─────────────────────────────
  {
    id: 'a1-17', level: 'A1', num: 17, track: 'main',
    books: { red: [44, 45, 47, 48] },
    title: 'Who? What? How long? — все виды вопросов',
    summary: 'Научимся задавать любые вопросы: «Где ты живёшь?», «Кто выиграл?», «Какого цвета?», «Сколько времени это занимает?»',
    grammar: [
      {
        title: '1. Главная идея: в вопросе помощник выходит вперёд',
        html: `
<div class="g-idea">По-русски вопрос делает <b>интонация</b>: «Ты дома.» → «Ты дома?» Слова стоят на тех же местах. По-английски меняется <b>порядок слов</b>: глагол-помощник (am/is/are, was/were, can, do/does/did) встаёт <b>перед</b> тем, кто действует.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Ты дома?</p><p>Она умеет рисовать?</p><p>Где ты живёшь?</p><p>Что ты делал вчера?</p></div>
  <div><div class="g-h">English</div><p><span class="say"><b>Are</b> you at home?</span></p><p><span class="say"><b>Can</b> she draw?</span></p><p><span class="say">Where <b>do</b> you live?</span></p><p><span class="say">What <b>did</b> you do yesterday?</span></p></div>
</div>
<div class="g-formula"><span class="g-part">(вопросительное слово)</span><span class="g-plus">+</span><span class="g-part g-v">помощник</span><span class="g-plus">+</span><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part">глагол…?</span></div>
<p>Вопросительные слова: <span class="say">who</span> — кто, <span class="say">what</span> — что, какой, <span class="say">which</span> — который, <span class="say">where</span> — где, куда, <span class="say">when</span> — когда, <span class="say">why</span> — почему, <span class="say">how</span> — как.</p>
<div class="g-tip">Представьте, что помощник — это игрок, который первым выбегает на карту. Сначала вопросительное слово, за ним сразу помощник, и только потом «кто».</div>
<div class="mini" data-q="Как спросить «Где Макс работает?»" data-o="Where Max works?|Where does Max work?|Where Max does work?" data-a="1" data-why="Вопросительное слово + помощник does + Max + глагол без -s."></div>`
      },
      {
        title: '2. be, can, have got, -ing: просто переставьте',
        html: `
<div class="g-idea">Если в предложении уже есть <b>am/is/are, was/were, can</b> или <b>have got</b>, ничего добавлять не надо. Этот глагол просто меняется местами с «кто».</div>
<table>
<tr><th>Утверждение</th><th>Вопрос</th></tr>
<tr><td>You are tired.</td><td><span class="say">Are you tired?</span></td></tr>
<tr><td>The game was fun.</td><td><span class="say">Was the game fun?</span></td></tr>
<tr><td>She is streaming.</td><td><span class="say">What is she streaming?</span></td></tr>
<tr><td>Tom can draw.</td><td><span class="say">Can Tom draw?</span></td></tr>
<tr><td>You have got a PC.</td><td><span class="say">Have you got a PC?</span></td></tr>
</table>
<div class="g-steps"><div class="g-h">Как построить вопрос</div><ol>
<li>Найдите первый глагол: am, is, are, was, were, can, have.</li>
<li>Поставьте его <b>перед</b> «кто»: you are → <b>are you</b>.</li>
<li>Вопросительное слово — в самое начало: <span class="say">Why are you tired?</span></li>
</ol></div>
<p>«Кто» может быть длинным — это ничего не меняет, помощник всё равно перед ним:</p>
<ul class="g-list">
<li><span class="say">Is your new laptop fast?</span> — Твой новый ноутбук быстрый?</li>
<li><span class="say">Where are your headphones?</span> — Где твои наушники?</li>
<li><span class="say">Why was the stream so short?</span> — Почему стрим был таким коротким?</li>
</ul>
<div class="g-bad">Where your headphones are?</div>
<div class="g-good">Where <b>are</b> your headphones?</div>
<div class="g-tip">Предлог в вопросе обычно уходит в конец: <span class="say">Where are you from?</span> — Откуда ты? <span class="say">Who are you talking to?</span> — С кем ты говоришь?</div>
<div class="mini" data-q="___ your friends online now?" data-o="Am|Is|Are" data-a="2" data-why="Your friends — они (they) → are, и are стоит перед ними."></div>
<div class="mini" data-q="Как спросить «Где ключи?»" data-o="Where the keys are?|Where are the keys?|Where is the keys?" data-a="1" data-why="Помощник are встаёт перед the keys; ключей много → are."></div>`
      },
      {
        title: '3. do / does / did — когда глагол обычный',
        html: `
<div class="g-idea">Если в предложении обычный глагол (work, play, live, go), переставлять нечего. Тогда в начало вопроса приходит помощник <b>do / does / did</b>, а глагол остаётся в начальной форме.</div>
<table>
<tr><th>Когда и кто</th><th>Помощник</th><th>Пример</th></tr>
<tr><td>обычно: I, you, we, they</td><td><b class="g-v">do</b></td><td><span class="say">What do you play?</span></td></tr>
<tr><td>обычно: he, she, it</td><td><b class="g-v">does</b></td><td><span class="say">Where does she work?</span></td></tr>
<tr><td>в прошлом: все</td><td><b class="g-v">did</b></td><td><span class="say">When did you start?</span></td></tr>
</table>
<div class="g-formula"><span class="g-part">what / where…</span><span class="g-plus">+</span><span class="g-part g-v">do / does / did</span><span class="g-plus">+</span><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part">глагол без -s и -ed</span></div>
<div class="g-bad">Where does she works? · What did you bought?</div>
<div class="g-good">Where does she <b>work</b>? · What did you <b>buy</b>?</div>
<p><b>do</b> может быть и помощником, и обычным глаголом «делать» — тогда в вопросе их два:</p>
<ul class="g-list">
<li><span class="say">What do you do?</span> — Чем ты занимаешься? Кем работаешь?</li>
<li><span class="say">What did you do at the weekend?</span> — Что ты делал на выходных?</li>
<li><span class="say">How did you do that?</span> — Как ты это сделал?</li>
</ul>
<div class="g-bad">How did you that?</div>
<div class="g-good">How did you <b>do</b> that?</div>
<p><b>Почему не…?</b> — why + помощник с not + кто:</p>
<ul class="g-list">
<li><span class="say">Why isn't Max here?</span> — Почему Макса нет?</li>
<li><span class="say">Why don't you play with us?</span> — Почему ты не играешь с нами?</li>
<li><span class="say">Why didn't you call me?</span> — Почему ты мне не позвонил?</li>
<li><span class="say">Why can't Anna come?</span> — Почему Анна не может прийти?</li>
</ul>
<div class="g-bad">Why you didn't call me?</div>
<div class="g-good">Why <b>didn't you</b> call me?</div>
<div class="mini" data-q="What ___ you do last weekend?" data-o="do|does|did" data-a="2" data-why="last weekend — прошлое → did."></div>
<div class="mini" data-q="___ Anna live near you?" data-o="Do|Does|Is" data-a="1" data-why="Обычный глагол live, Anna — она → does."></div>`
      },
      {
        title: '4. Who? What? — кто сделал или кого увидел',
        html: `
<div class="g-idea">Если <b>who / what</b> спрашивает о том, <b>кто действует</b>, помощник do/does/did <b>не нужен</b>: слова стоят как в обычном предложении. Если спрашиваем, <b>кого / что</b> — помощник нужен.</div>
<p>Ситуация: <span class="say">Max called Anna.</span> — Макс позвонил Анне.</p>
<table>
<tr><th>Спрашиваем</th><th>Вопрос</th><th>Ответ</th></tr>
<tr><td>кто позвонил?</td><td><span class="say">Who called Anna?</span></td><td>Max.</td></tr>
<tr><td>кому позвонил?</td><td><span class="say">Who did Max call?</span></td><td>Anna.</td></tr>
</table>
<table>
<tr><th>Кто / что действует — без do</th><th>Кого / что — с do/did</th></tr>
<tr><td><span class="say">Who lives here?</span></td><td><span class="say">Who do you know here?</span></td></tr>
<tr><td><span class="say">What happened?</span></td><td><span class="say">What did you say?</span></td></tr>
<tr><td><span class="say">Who won?</span></td><td><span class="say">What did you win?</span></td></tr>
<tr><td><span class="say">Who wants pizza?</span></td><td><span class="say">What do you want?</span></td></tr>
</table>
<div class="g-steps"><div class="g-h">Как понять, нужен ли did</div><ol>
<li>Задайте вопрос по-русски. «<b>Кто</b> выиграл?» — ответ «Макс» и есть тот, кто действует → <b>без</b> did: <span class="say">Who won?</span></li>
<li>«<b>Кого</b> ты встретил? <b>Что</b> ты купил?» — действуете вы, а спрашиваете о другом → <b>с</b> did: <span class="say">Who did you meet?</span></li>
</ol></div>
<div class="g-bad">Who did win the game? · What did happen?</div>
<div class="g-good">Who <b>won</b> the game? · What <b>happened</b>?</div>
<p><b>who</b> — о людях, <b>what</b> — о вещах и идеях: <span class="say">Who is your favourite streamer?</span> <span class="say">What is your favourite game?</span></p>
<div class="mini" data-q="Кто выиграл матч вчера?" data-o="Who won the match yesterday?|Who did win the match yesterday?|Who did won the match yesterday?" data-a="0" data-why="Who — тот, кто выиграл, значит did не нужен: Who won."></div>
<div class="mini" data-q="What ___ Kate say?" data-o="did|was|—" data-a="0" data-why="Kate говорила, а мы спрашиваем «что?» → нужен did."></div>`
      },
      {
        title: '5. What, which и «what + слово»',
        html: `
<div class="g-idea">Русское «какой» — это то <b>what</b>, то <b>which</b>. <b>What</b> — вообще, из множества вариантов. <b>Which</b> — из нескольких, которые мы видим или знаем (2–4 штуки).</div>
<p><b>What + существительное</b> — очень частые вопросы:</p>
<ul class="g-list">
<li><span class="say">What colour is your car?</span> — Какого цвета твоя машина?</li>
<li><span class="say">What size are you?</span> — Какой у тебя размер?</li>
<li><span class="say">What time is it?</span> — Который час?</li>
<li><span class="say">What day is it today?</span> — Какой сегодня день?</li>
<li><span class="say">What kind of music do you like?</span> — Какую музыку ты любишь? <span class="muted">(kind of = type of = вид, тип)</span></li>
</ul>
<p><b>Which</b> — выбор из известных вариантов:</p>
<ul class="g-list">
<li><span class="say">Which map do you want — the forest or the city?</span> — Какую карту хочешь — лес или город?</li>
<li><span class="say">There are two cups. Which is yours?</span> — Тут две чашки. Которая твоя?</li>
</ul>
<table>
<tr><th>what</th><th>which</th></tr>
<tr><td><span class="say">What colour are her eyes?</span> <span class="muted">(все цвета мира)</span></td><td><span class="say">Which colour do you want — blue or green?</span></td></tr>
<tr><td><span class="say">What games do you play?</span></td><td><span class="say">Which game do we play tonight — this or that?</span></td></tr>
</table>
<p>Без существительного <b>which</b> — только о вещах. О людях — <b>who</b>: <span class="say">Who plays the guitar — Tom or Max?</span></p>
<div class="g-bad">What colour has your car? · Which plays the guitar — Tom or Max?</div>
<div class="g-good">What colour <b>is</b> your car? · <b>Who</b> plays the guitar — Tom or Max?</div>
<div class="g-tip">which ≈ «который из…». Если можно сказать «который из этих?» — берите which.</div>
<div class="mini" data-q="There are two keys. ___ is yours?" data-o="What|Which|Who" data-a="1" data-why="Выбор из двух видимых вариантов, это вещи → which."></div>
<div class="mini" data-q="___ kind of films do you like?" data-o="What|Which|How" data-a="0" data-why="Вообще, из всех видов фильмов → what kind of."></div>`
      },
      {
        title: '6. How и how + прилагательное',
        html: `
<div class="g-idea"><b>How</b> — «как». А <b>how + прилагательное</b> — это «насколько…?»: сколько лет, как далеко, как часто. По-русски тут разные слова, по-английски — одна схема.</div>
<ul class="g-list">
<li><span class="say">How was the party?</span> — Как прошла вечеринка?</li>
<li><span class="say">How do you get to work? — By bus.</span> — Как ты добираешься до работы? — На автобусе.</li>
</ul>
<table>
<tr><th>Вопрос</th><th>Значит</th><th>Пример</th></tr>
<tr><td><b>how old</b></td><td>сколько лет</td><td><span class="say">How old is your brother?</span></td></tr>
<tr><td><b>how tall</b></td><td>какого роста</td><td><span class="say">How tall are you?</span></td></tr>
<tr><td><b>how big</b></td><td>насколько большой</td><td><span class="say">How big is the map?</span></td></tr>
<tr><td><b>how far</b></td><td>как далеко</td><td><span class="say">How far is the station?</span></td></tr>
<tr><td><b>how often</b></td><td>как часто</td><td><span class="say">How often do you stream?</span></td></tr>
<tr><td><b>how much</b></td><td>сколько (стоит; не штуки)</td><td><span class="say">How much is this game?</span></td></tr>
<tr><td><b>how many</b></td><td>сколько штук</td><td><span class="say">How many players are there?</span></td></tr>
<tr><td><b>how long</b></td><td>как долго</td><td><span class="say">How long was the film?</span></td></tr>
</table>
<div class="g-bad">How many years do you have?</div>
<div class="g-good">How <b>old are</b> you?</div>
<div class="g-bad">How many time do you play?</div>
<div class="g-good">How <b>long</b> do you play? · How <b>much</b> time do you play?</div>
<div class="mini" data-q="___ is it from here to the office? — Two kilometres." data-o="How long|How far|How often" data-a="1" data-why="Спрашиваем о расстоянии → how far."></div>
<div class="mini" data-q="Как часто ты играешь?" data-o="How much do you play?|How often do you play?|How many do you play?" data-a="1" data-why="«Как часто» = how often."></div>`
      },
      {
        title: '7. How long does it take? — сколько времени занимает',
        html: `
<div class="g-idea">«Дорога занимает час», «У меня ушло три часа» — по-английски всё это через <b>it takes</b>. Подлежащее — всегда <b>it</b>, а время идёт после take.</div>
<div class="g-formula"><span class="g-part">It</span><span class="g-plus">+</span><span class="g-part g-v">takes / took</span><span class="g-plus">+</span><span class="g-part">(me, him, us)</span><span class="g-plus">+</span><span class="g-part">время</span><span class="g-plus">+</span><span class="g-part">to + глагол</span></div>
<ul class="g-list">
<li><span class="say">It takes an hour by train from here to the city.</span> — На поезде отсюда до города час.</li>
<li><span class="say">It takes me twenty minutes to get to work.</span> — У меня дорога до работы занимает двадцать минут.</li>
<li><span class="say">It took us three hours to finish the level.</span> — У нас ушло три часа, чтобы пройти уровень.</li>
<li><span class="say">It doesn't take long to install.</span> — Установка не занимает много времени.</li>
</ul>
<p>Вопрос — как с любым обычным глаголом, через does / did:</p>
<ul class="g-list">
<li><span class="say">How long does it take by bus?</span> — Сколько ехать на автобусе?</li>
<li><span class="say">How long does it take to download the game?</span> — Сколько качается игра?</li>
<li><span class="say">How long did it take you to learn Figma?</span> — Сколько времени ты учил Figma?</li>
</ul>
<div class="g-bad">How long it takes? · It takes to me an hour.</div>
<div class="g-good">How long <b>does it take</b>? · It takes <b>me</b> an hour.</div>
<div class="g-tip">Можно спросить и <span class="say">How much time does it take?</span>, но <b>how long</b> звучит естественнее.</div>
<div class="mini" data-q="It ___ me two hours to install the game yesterday." data-o="takes|took|did take" data-a="1" data-why="yesterday — прошлое, take → took."></div>
<div class="mini" data-q="How long ___ it take to get to the airport?" data-o="is|does|do" data-a="1" data-why="take — обычный глагол, it → does."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">Where you live?</div><div class="g-good">Where <b>do</b> you live?</div>
<div class="g-bad">What she is doing?</div><div class="g-good">What <b>is she</b> doing?</div>
<div class="g-bad">Where did you went?</div><div class="g-good">Where did you <b>go</b>?</div>
<div class="g-bad">Who did call you?</div><div class="g-good">Who <b>called</b> you?</div>
<div class="g-bad">Why you are late?</div><div class="g-good">Why <b>are you</b> late?</div>
<div class="g-bad">Which colour is your phone?</div><div class="g-good"><b>What</b> colour is your phone?</div>
<div class="g-bad">How many years is he?</div><div class="g-good">How <b>old</b> is he?</div>
<div class="g-bad">How long it takes to get there?</div><div class="g-good">How long <b>does it take</b> to get there?</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Вопросительное слово → <b>помощник</b> (is, can, do, does, did) → кто → глагол. Без помощника — только когда <b>who/what</b> сам делает: <b>Who won?</b></div>`
      }
    ],
    words: [
      ["who", "кто", "Who is your favourite streamer?", "Кто твой любимый стример?"],
      ["what", "что, какой", "What did you say?", "Что ты сказал?"],
      ["which", "который, какой (из нескольких)", "Which map do you want?", "Какую карту ты хочешь?"],
      ["where", "где, куда", "Where did you buy it?", "Где ты это купил?"],
      ["when", "когда", "When does the stream start?", "Когда начинается стрим?"],
      ["why", "почему, зачем", "Why didn't you call me?", "Почему ты мне не позвонил?"],
      ["how", "как", "How was the party?", "Как прошла вечеринка?"],
      ["how old", "сколько лет", "How old is your sister?", "Сколько лет твоей сестре?"],
      ["how far", "как далеко", "How far is the station?", "Далеко ли до станции?"],
      ["how often", "как часто", "How often do you go to the gym?", "Как часто ты ходишь в спортзал?"],
      ["how long", "как долго, сколько времени", "How long was the film?", "Сколько длился фильм?"],
      ["how much", "сколько (стоит; неисчисляемое)", "How much is this keyboard?", "Сколько стоит эта клавиатура?"],
      ["how many", "сколько (штук)", "How many players are there?", "Сколько там игроков?"],
      ["take — took", "занимать (время) — занял", "It takes me an hour to get there.", "У меня дорога туда занимает час."],
      ["happen", "происходить, случаться", "What happened?", "Что случилось?"],
      ["kind (of)", "вид, тип", "What kind of games do you like?", "Какие игры ты любишь?"],
      ["colour", "цвет", "What colour is your new chair?", "Какого цвета твой новый стул?"],
      ["size", "размер", "What size is this T-shirt?", "Какого размера эта футболка?"],
      ["favourite", "любимый", "What is your favourite game?", "Какая твоя любимая игра?"],
      ["question", "вопрос", "Can I ask you a question?", "Можно задать тебе вопрос?"],
      ["answer", "ответ; отвечать", "Why didn't you answer?", "Почему ты не ответил?"],
      ["ask", "спрашивать, просить", "Ask Kate — she knows.", "Спроси Кейт — она знает."],
      ["mean — meant", "значить — значил", "What does this word mean?", "Что значит это слово?"],
      ["wrong", "неправильный; не так", "What's wrong?", "Что не так?"],
      ["far", "далеко", "Is it far from here?", "Это далеко отсюда?"],
      ["often", "часто", "Do you often play online?", "Ты часто играешь онлайн?"],
      ["prefer", "предпочитать", "Which do you prefer — tea or coffee?", "Что ты предпочитаешь — чай или кофе?"],
      ["way", "путь, дорога; способ", "Which way do we go?", "Куда нам идти?"],
      ["by (bus, train)", "на (автобусе, поезде)", "How long does it take by train?", "Сколько ехать на поезде?"],
      ["minute", "минута", "It takes ten minutes.", "Это занимает десять минут."]
    ],
    texts: [
      {
        id: 't-a1-17-1', title: 'The new designer', level: 'A1',
        text: `Kate: So, Max, you are our new designer! Can I ask you some questions?
Max: Sure. Go ahead.
Kate: Where are you from?
Max: I'm from Kazan, but I live in Moscow now.
Kate: How long does it take you to get to the office?
Max: About forty minutes by metro.
Kate: What do you do after work?
Max: I play games, and I draw a little.
Kate: What kind of games do you like?
Max: RPGs, mostly. And strategy games.
Kate: Which is your favourite — Skyrim or The Witcher?
Max: The Witcher, of course!
Kate: Who told you about our studio?
Max: Tom did. We played football together at school.
Kate: Why did you leave your old job?
Max: It was very far from my home. It took me two hours to get there!
Kate: Oh no. How often do you want to work from home?
Max: Maybe twice a week. What about you?
Kate: Me too. OK, last question: who wants coffee?
Max: Me!`,
        questions: [
          { q: 'Where does Max live now?', o: ['In Kazan', 'In Moscow', 'In London'], a: 1 },
          { q: 'How does Max get to the office?', o: ['By bus', 'By car', 'By metro'], a: 2 },
          { q: 'Why did Max leave his old job?', o: ['It was boring', 'It was far from his home', 'He didn\'t like Tom'], a: 1 }
        ]
      },
      {
        id: 't-a1-17-2', title: 'Quiz night', level: 'A1',
        text: `Every Friday our team plays an online quiz. The host asks twenty questions, and we have one minute for each answer.
Last Friday the questions were hard. "What is the capital of Australia?" Nobody knew. "Which game came out first — Tetris or Mario?" Kate knew that one. "How many players are there in a football team?" Easy — eleven!
Then the host asked, "Who painted the Mona Lisa?" Tom said Picasso. Wrong! It was Leonardo da Vinci.
The last question was about our job: "How long does it take to make a big game?" Max said, "Two years." The host said, "It usually takes three or four years."
Who won? Not our team. We got fourteen points, and the winners got sixteen. But it was fun. And what did we do after the quiz? We ordered pizza, of course.`,
        questions: [
          { q: 'When does the team play the quiz?', o: ['Every Friday', 'Every Monday', 'Every day'], a: 0 },
          { q: 'Who knew the answer about Tetris and Mario?', o: ['Tom', 'Kate', 'Max'], a: 1 },
          { q: 'How many points did the team get?', o: ['Sixteen', 'Eleven', 'Fourteen'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: '___ your brother a gamer?', o: ['Does', 'Is', 'Do'], a: 1, why: 'Обычного глагола нет, gamer — «кто он» → нужен be: Is.' },
      { t: 'choice', q: 'What ___ you do yesterday?', o: ['do', 'did', 'were'], a: 1, why: 'yesterday — прошлое, глагол обычный (do) → помощник did.' },
      { t: 'choice', q: 'Who ___ in that flat?', o: ['lives', 'does live', 'do live'], a: 0, why: 'Who — тот, кто живёт (действует сам) → без does: Who lives.' },
      { t: 'choice', q: 'Who ___ you meet at the party?', o: ['did', 'were', 'does'], a: 0, why: 'Встречали вы, спрашиваем «кого?» → нужен помощник did.' },
      { t: 'choice', q: 'There are two maps. ___ map do you want to play?', o: ['What', 'Which', 'Who'], a: 1, why: 'Выбор из двух известных вариантов → which.' },
      { t: 'choice', q: '___ colour is your new chair?', o: ['What', 'How', 'Which'], a: 0, why: 'Вопрос о цвете вообще → What colour.' },
      { t: 'choice', q: 'How ___ do you go to the gym? — Twice a week.', o: ['long', 'often', 'much'], a: 1, why: 'Ответ «два раза в неделю» — это как часто → how often.' },
      { t: 'choice', q: 'How long ___ it take to get to your office?', o: ['is', 'does', 'do'], a: 1, why: 'take — обычный глагол, подлежащее it → does.' },
      { t: 'gap', q: '___ does your sister do? — She\'s a doctor. (что)', a: ['What'], why: 'What do you do? — «чем занимаешься, кем работаешь».' },
      { t: 'gap', q: 'Why ___ you come to the party yesterday? (не пришёл)', a: ['didn\'t', 'did not'], why: 'Почему не… в прошлом → Why didn\'t you + глагол.' },
      { t: 'gap', q: 'How ___ are you? — I\'m 28.', a: ['old'], why: 'Возраст спрашивают через how old, а не how many years.' },
      { t: 'gap', q: 'How ___ is this T-shirt? — Ten dollars.', a: ['much'], why: 'Цена → how much.' },
      { t: 'gap', q: 'It ___ me an hour to finish this level yesterday. (take)', a: ['took'], why: 'Прошлое: take → took, it took me…' },
      { t: 'gap', q: '___ is your favourite character? — Geralt. (кто)', a: ['Who'], why: 'Спрашиваем о человеке (персонаже) → who.' },
      { t: 'order', a: 'What time does the stream start', ru: 'Во сколько начинается стрим?' },
      { t: 'order', a: 'Who told you about this game', ru: 'Кто рассказал тебе об этой игре?' },
      { t: 'tr', q: 'Где ты купил этот ноутбук?', a: ['where did you buy this laptop'] },
      { t: 'tr', q: 'Как часто ты играешь в игры?', a: ['how often do you play games', 'how often do you play video games'] },
      { t: 'listen', say: 'How long does it take by bus?', a: ['how long does it take by bus'] }
    ],
    test: [
      { t: 'choice', q: 'Выберите правильный вопрос:', o: ['Where your friends are now?', 'Where are your friends now?', 'Where are now your friends?'], a: 1, why: 'Помощник are сразу после where, потом «кто» (your friends).' },
      { t: 'choice', q: 'Как спросить «Анна умеет рисовать?»', o: ['Can Anna draw?', 'Anna can draw?', 'Does Anna can draw?'], a: 0, why: 'can сам выходит вперёд, do/does с can не нужен.' },
      { t: 'choice', q: '___ this message? — Max did.', o: ['Who wrote', 'Who did write', 'Who did wrote'], a: 0, why: 'Who — тот, кто написал → без did, глагол в прошедшем: wrote.' },
      { t: 'gap', q: 'What ___ Max write in the chat? — «GG».', a: ['did'], why: 'Писал Макс, спрашиваем «что?» → нужен did.' },
      { t: 'choice', q: 'Why ___ you answer my message yesterday?', o: ['don\'t', 'didn\'t', 'wasn\'t'], a: 1, why: 'Почему не… в прошлом с обычным глаголом → didn\'t.' },
      { t: 'choice', q: '___ size are your shoes?', o: ['Which', 'What', 'How'], a: 1, why: 'Размер вообще, без готовых вариантов → What size.' },
      { t: 'choice', q: 'You can have tea or coffee. ___ do you want?', o: ['What', 'Which', 'Who'], a: 1, why: 'Выбор из двух названных вариантов → which.' },
      { t: 'choice', q: '___ plays the guitar in your band — Tom or Max?', o: ['Which', 'Who', 'What'], a: 1, why: 'О людях без существительного говорят who, не which.' },
      { t: 'gap', q: 'How ___ is it from your home to the station? — Two kilometres.', a: ['far'], why: 'Расстояние → how far.' },
      { t: 'gap', q: 'What does your brother ___? — He\'s a programmer.', a: ['do'], why: 'В вопросе о работе do два раза: помощник does и глагол do.' },
      { t: 'gap', q: 'How long ___ it take you to get here yesterday?', a: ['did'], why: 'yesterday — прошлое → How long did it take…' },
      { t: 'choice', q: 'It ___ long to cook pasta.', o: ['doesn\'t take', 'isn\'t take', 'doesn\'t takes'], a: 0, why: 'Отрицание с обычным глаголом: doesn\'t + take без -s.' }
    ]
  },

  // ───────────────────────────── UNIT 18 ─────────────────────────────
  {
    id: 'a1-18', level: 'A1', num: 18, track: 'main',
    books: { red: [97, 98] },
    title: 'And, but, so, because, when — связываем мысли + итог A1',
    summary: 'Научимся склеивать короткие фразы в длинные: «Я устал, поэтому пошёл спать», «Позвони, когда придёшь», — и соберём весь A1 в одну шпаргалку.',
    grammar: [
      {
        title: '1. Главная идея: маленькие слова склеивают мысли',
        html: `
<div class="g-idea">Пока мы говорили короткими фразами: «I was tired. I went to bed.» Звучит как робот. Союзы (маленькие слова-клей) делают из двух коротких фраз одну нормальную — как и в русском.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я устал, <b>поэтому</b> пошёл спать.</p><p>Я остался дома, <b>потому что</b> было холодно.</p><p><b>Когда</b> я пришёл домой, я включил игру.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I was tired, <b>so</b> I went to bed.</span></p><p><span class="say">I stayed at home <b>because</b> it was cold.</span></p><p><span class="say"><b>When</b> I got home, I started a game.</span></p></div>
</div>
<table>
<tr><th>Слово</th><th>Значит</th><th>Зачем</th></tr>
<tr><td><b>and</b></td><td>и, а</td><td>добавить</td></tr>
<tr><td><b>but</b></td><td>но</td><td>противопоставить</td></tr>
<tr><td><b>or</b></td><td>или</td><td>выбор</td></tr>
<tr><td><b>so</b></td><td>поэтому, так что</td><td>результат</td></tr>
<tr><td><b>because</b></td><td>потому что</td><td>причина</td></tr>
<tr><td><b>when</b></td><td>когда</td><td>время</td></tr>
</table>
<div class="mini" data-q="Я голоден, поэтому я ем." data-o="I'm hungry, so I'm eating.|I'm hungry, because I'm eating.|I'm hungry, or I'm eating." data-a="0" data-why="«Поэтому» — результат → so."></div>`
      },
      {
        title: '2. and, but, or — два предложения в одно',
        html: `
<div class="g-idea"><b>and</b> — добавляет, <b>but</b> — противопоставляет, <b>or</b> — даёт выбор. Если «кто» в обеих частях одинаковый, после and/but/or его можно не повторять.</div>
<ul class="g-list">
<li><span class="say">We stayed at home and watched a series.</span> — Мы остались дома и посмотрели сериал. <span class="muted">(второе we не нужно)</span></li>
<li><span class="say">He doesn't like horror, and she doesn't like comedy.</span> — Он не любит ужастики, а она не любит комедии.</li>
<li><span class="say">I bought the game, but I didn't play it.</span> — Я купил игру, но не играл в неё.</li>
<li><span class="say">It's a nice flat, but it's very small.</span> — Хорошая квартира, но очень маленькая.</li>
<li><span class="say">Do you want to play, or are you tired?</span> — Хочешь поиграть или ты устал?</li>
</ul>
<p><b>Списки:</b> между пунктами — запятые, перед последним — <b>and</b>:</p>
<ul class="g-list">
<li><span class="say">I got up, made coffee and opened Figma.</span> — Я встал, сварил кофе и открыл Figma.</li>
<li><span class="say">Kate is at work, Tom is at the gym and Max is playing.</span></li>
</ul>
<div class="g-tip">Русское «а» бывает и <b>and</b>, и <b>but</b>. Просто сравниваем — <b>and</b>: <span class="say">I'm a designer, and he's a programmer.</span> Есть «но», неожиданность — <b>but</b>: <span class="say">I was tired, but I played.</span></div>
<p>«Ни… ни» в отрицании — это <b>or</b>, а не and:</p>
<div class="g-bad">I haven't got a PlayStation and an Xbox.</div>
<div class="g-good">I haven't got a PlayStation <b>or</b> an Xbox. — У меня нет ни PlayStation, ни Xbox.</div>
<div class="mini" data-q="I wanted to call you, ___ I didn't have your number." data-o="and|but|or" data-a="1" data-why="Хотел, но не смог — противопоставление → but."></div>
<div class="mini" data-q="Do you want pizza ___ sushi?" data-o="and|or|so" data-a="1" data-why="Выбор одного из двух → or."></div>`
      },
      {
        title: '3. so и because — результат и причина',
        html: `
<div class="g-idea"><b>so</b> и <b>because</b> — одна и та же связь, только с разных концов. <b>because</b> стоит перед <b>причиной</b>, <b>so</b> — перед <b>результатом</b>.</div>
<div class="g-formula"><span class="g-part">причина</span><span class="g-plus">,</span><span class="g-part g-v">so</span><span class="g-plus">→</span><span class="g-part">результат</span></div>
<div class="g-formula"><span class="g-part">результат</span><span class="g-plus">+</span><span class="g-part g-v">because</span><span class="g-plus">←</span><span class="g-part">причина</span></div>
<table>
<tr><th>so (поэтому)</th><th>because (потому что)</th></tr>
<tr><td><span class="say">It was hot, so I opened the window.</span></td><td><span class="say">I opened the window because it was hot.</span></td></tr>
<tr><td><span class="say">Kate plays a lot, so she's very good.</span></td><td><span class="say">Kate is very good because she plays a lot.</span></td></tr>
<tr><td><span class="say">I didn't have breakfast, so I'm hungry.</span></td><td><span class="say">I'm hungry because I didn't have breakfast.</span></td></tr>
</table>
<p><b>Because</b> можно поставить и в начало — тогда нужна запятая: <span class="say">Because it was late, we stopped the game.</span></p>
<p>Союзов в одном предложении может быть несколько: <span class="say">It was late and I was tired, so I went to bed.</span></p>
<div class="g-bad">It was cold, because I closed the window.</div>
<div class="g-good">It was cold, <b>so</b> I closed the window.</div>
<div class="g-tip">Проверка: <b>because</b> отвечает на «почему?», <b>so</b> — на «и что в итоге?». На вопрос Why? можно ответить одним куском: <span class="say">Why are you late? — Because my bus didn't come.</span></div>
<div class="mini" data-q="My laptop is old, ___ I can't play new games." data-o="because|so|but" data-a="1" data-why="Старый ноутбук — причина, не могу играть — результат → so."></div>
<div class="mini" data-q="Max didn't come ___ he was sick." data-o="so|because|or" data-a="1" data-why="Болезнь — причина → because."></div>`
      },
      {
        title: '4. when, before, after — две части и запятая',
        html: `
<div class="g-idea">Предложение с <b>when</b> (когда), <b>before</b> (перед тем как), <b>after</b> (после того как) состоит из двух частей. Их можно менять местами. Если when-часть <b>первая</b> — ставим запятую.</div>
<ul class="g-list">
<li><span class="say">When I got home, I called Kate.</span> = <span class="say">I called Kate when I got home.</span> — Когда я пришёл домой, я позвонил Кейт.</li>
<li><span class="say">Anna was 22 when she got her first job.</span> — Анне было 22, когда она получила первую работу.</li>
<li><span class="say">Before you close the game, save it.</span> = <span class="say">Save the game before you close it.</span></li>
<li><span class="say">After I finished work, I went to the gym.</span> — После того как я закончил работу, я пошёл в спортзал.</li>
</ul>
<div class="g-formula"><span class="g-part g-v">When…</span><span class="g-plus">,</span><span class="g-part">главная часть</span><span class="g-sep">·</span><span class="g-part">главная часть</span><span class="g-plus">+</span><span class="g-part g-v">when…</span> <span class="muted">(без запятой)</span></div>
<p><b>Ловушка после прошлого юнита:</b> when в вопросе и when-союз — разные вещи. В вопросе помощник выходит вперёд, а в союзе порядок обычный:</p>
<div class="g-bad">When did I get home, I called Kate.</div>
<div class="g-good">When <b>I got</b> home, I called Kate.</div>
<div class="mini" data-q="Выберите правильно:" data-o="When I finished the level, I went to bed.|When did I finish the level, I went to bed.|When I finished the level I went, to bed." data-a="0" data-why="Союз when — обычный порядок слов, запятая после первой части."></div>`
      },
      {
        title: '5. while и «когда» про будущее',
        html: `
<div class="g-idea"><b>while</b> — «пока, в то время как»: два действия идут одновременно. А после <b>when, before, after, while, until</b> про будущее английский ставит <b>настоящее время</b>, хотя по-русски мы говорим в будущем.</div>
<ul class="g-list">
<li><span class="say">I listen to podcasts while I'm drawing.</span> — Я слушаю подкасты, пока рисую.</li>
<li><span class="say">Don't use your phone while you're driving.</span> — Не пользуйся телефоном, пока ведёшь машину.</li>
</ul>
<div class="g-compare">
  <div><div class="g-h">Русский — будущее</div><p>Позвони, когда <b>придёшь</b> домой.</p><p>Когда <b>закончишь</b> уровень, сохрани игру.</p><p>Напиши мне, перед тем как <b>выйдешь</b>.</p></div>
  <div><div class="g-h">English — настоящее</div><p><span class="say">Call me when you <b>get</b> home.</span></p><p><span class="say">When you <b>finish</b> the level, save the game.</span></p><p><span class="say">Text me before you <b>leave</b>.</span></p></div>
</div>
<p>Так же с <b>until</b> (пока не, до тех пор пока): <span class="say">Wait here until I come back.</span> — Жди здесь, пока я не вернусь.</p>
<div class="g-bad">Call me when you will get home.</div>
<div class="g-good">Call me when you <b>get</b> home.</div>
<div class="g-tip">Слово will («буду») вы узнаете на A2. Но правило уже сейчас: после <b>when</b> и его друзей — никакого будущего, только настоящее.</div>
<div class="mini" data-q="Let's play when you ___ work." data-o="will finish|finish|finished" data-a="1" data-why="После when про будущее — настоящее время: when you finish."></div>`
      },
      {
        title: '6. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I was tired, because I went to bed.</div><div class="g-good">I was tired, <b>so</b> I went to bed.</div>
<div class="g-bad">I don't like tea and coffee.</div><div class="g-good">I don't like tea <b>or</b> coffee.</div>
<div class="g-bad">When did you come, we started the game.</div><div class="g-good">When <b>you came</b>, we started the game.</div>
<div class="g-bad">Call me when you will be free.</div><div class="g-good">Call me when you <b>are</b> free.</div>
<div class="g-bad">We stayed at home and we watched and we ate pizza.</div><div class="g-good">We stayed at home, watched a film <b>and</b> ate pizza.</div>
</div>
<div class="mini" data-q="Text me ___ you leave the office." data-o="before|because|so" data-a="0" data-why="Время: перед тем как уйдёшь → before (и настоящее время после него)."></div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>and</b> — и · <b>but</b> — но · <b>or</b> — или · <b>so</b> → результат · <b>because</b> ← причина · <b>when…,</b> — запятая, а про будущее после when — настоящее.</div>`
      },
      {
        title: '7. Итог A1 — весь уровень на одной странице',
        html: `
<div class="g-idea">Это шпаргалка по всему A1. Если каждая строчка понятна — уровень пройден. Если что-то забылось — вернитесь в урок, указанный в скобках.</div>
<p><b>Времена и главные глаголы</b></p>
<table>
<tr><th>Тема</th><th>Формула</th><th>Пример</th></tr>
<tr><td>be (1, 2)</td><td>I am · he is · you are</td><td><span class="say">I'm a designer.</span></td></tr>
<tr><td>Present Simple (3, 4)</td><td>I work · she work<b>s</b></td><td><span class="say">She works from home.</span></td></tr>
<tr><td>Present Continuous (5)</td><td>am/is/are + -ing</td><td><span class="say">I'm playing now.</span></td></tr>
<tr><td>was / were (8)</td><td>I was · you were</td><td><span class="say">It was fun.</span></td></tr>
<tr><td>Past Simple (9, 10)</td><td>-ed · went, saw</td><td><span class="say">We played. I went home.</span></td></tr>
<tr><td>can (7)</td><td>can + глагол</td><td><span class="say">I can draw.</span></td></tr>
<tr><td>there is / are (6)</td><td>есть, имеется где-то</td><td><span class="say">There are two cats.</span></td></tr>
<tr><td>have got (6)</td><td>у меня есть</td><td><span class="say">I've got a new PC.</span></td></tr>
</table>
<p><b>«Не» и вопрос</b></p>
<table>
<tr><th>Где</th><th>Не…</th><th>Вопрос</th></tr>
<tr><td>be, can</td><td><span class="say">I'm not</span> · <span class="say">can't</span></td><td><span class="say">Are you…? Can you…?</span></td></tr>
<tr><td>сейчас, обычно</td><td><span class="say">don't / doesn't</span> + глагол</td><td><span class="say">Do you…? Does she…?</span></td></tr>
<tr><td>прошлое</td><td><span class="say">didn't</span> + глагол</td><td><span class="say">Did you…?</span></td></tr>
<tr><td>кто сделал? (17)</td><td>—</td><td><span class="say">Who won?</span></td></tr>
</table>
<p><b>Маленькие слова</b></p>
<table>
<tr><th>Тема</th><th>Правило</th><th>Пример</th></tr>
<tr><td>a / the (13)</td><td>a — один из, the — тот самый</td><td><span class="say">I bought a game. The game is great.</span></td></tr>
<tr><td>some / any (6)</td><td>some — «+», any — «?» и «не»</td><td><span class="say">Have you got any water?</span></td></tr>
<tr><td>much / many (12)</td><td>much — не штуки, many — штуки</td><td><span class="say">How much time? How many games?</span></td></tr>
<tr><td>mine, Kate's (11)</td><td>чей</td><td><span class="say">It's mine. It's Kate's.</span></td></tr>
<tr><td>at / on / in (14)</td><td>at 8 · on Monday · in April</td><td><span class="say">See you on Friday at 8.</span></td></tr>
<tr><td>-ly (15)</td><td>какой → как</td><td><span class="say">quick → quickly</span></td></tr>
<tr><td>просьбы (16)</td><td>Do! · Let's… · I'd like…</td><td><span class="say">Let's play! I'd like a coffee.</span></td></tr>
<tr><td>союзы (18)</td><td>and, but, or, so, because, when</td><td><span class="say">I was tired, so I went to bed.</span></td></tr>
</table>
<div class="g-tip">Три золотых правила A1: <b>1)</b> в предложении всегда есть глагол (I <b>am</b> tired); <b>2)</b> he/she/it в настоящем → <b>-s</b>; <b>3)</b> после do/does/did/can глагол голый — без -s и -ed.</div>
<div class="g-sum"><div class="g-h">Итог A1 в одной строке</div>Вы умеете рассказать о себе, о том, что делаете сейчас, обычно и делали вчера, спросить о чём угодно и связать мысли словами <b>and, but, so, because, when</b>. Дальше — A2!</div>`
      }
    ],
    words: [
      ["and", "и, а", "I got up and made coffee.", "Я встал и сварил кофе."],
      ["but", "но", "I bought the game, but I didn't play it.", "Я купил игру, но не играл в неё."],
      ["or", "или; (в отрицании) ни", "Tea or coffee?", "Чай или кофе?"],
      ["so", "поэтому, так что", "It was late, so we stopped.", "Было поздно, поэтому мы остановились."],
      ["because", "потому что", "I'm hungry because I didn't have lunch.", "Я голоден, потому что не обедал."],
      ["when", "когда", "Call me when you get home.", "Позвони, когда придёшь домой."],
      ["before", "перед тем как, до", "Save the game before you close it.", "Сохрани игру, перед тем как закрыть её."],
      ["after", "после (того как)", "After work I went to the gym.", "После работы я пошёл в спортзал."],
      ["while", "пока, в то время как", "I listen to music while I'm drawing.", "Я слушаю музыку, пока рисую."],
      ["until", "пока не, до", "Wait until I come back.", "Жди, пока я не вернусь."],
      ["then", "потом, затем", "I had dinner, then I played.", "Я поужинал, потом поиграл."],
      ["first", "сначала; первый", "First save, then quit.", "Сначала сохранись, потом выходи."],
      ["later", "позже", "Let's talk later.", "Давай поговорим позже."],
      ["also", "также, тоже", "She draws and also writes music.", "Она рисует и ещё пишет музыку."],
      ["too", "тоже (в конце); слишком", "I like this game too.", "Мне тоже нравится эта игра."],
      ["remember", "помнить, вспоминать", "Do you remember his name?", "Ты помнишь, как его зовут?"],
      ["forget — forgot", "забывать — забыл", "I forgot my password, so I couldn't log in.", "Я забыл пароль, поэтому не смог войти."],
      ["understand — understood", "понимать — понял", "When I read it again, I understood.", "Когда я перечитал, я понял."],
      ["mistake", "ошибка", "I made a mistake, but I fixed it.", "Я ошибся, но исправил."],
      ["practise", "практиковаться, тренировать", "I practise English every day.", "Я каждый день практикую английский."],
      ["finish", "заканчивать", "When you finish, call me.", "Когда закончишь, позвони."],
      ["level", "уровень", "This level is hard, but I love it.", "Этот уровень сложный, но я его обожаю."],
      ["easy", "лёгкий", "It was easy, so I finished fast.", "Было легко, поэтому я быстро закончил."],
      ["difficult", "трудный", "Grammar is difficult but useful.", "Грамматика трудная, но полезная."],
      ["ready", "готовый", "Tell me when you're ready.", "Скажи, когда будешь готов."],
      ["late", "поздно; поздний", "I was late because of the rain.", "Я опоздал из-за дождя."],
      ["early", "рано; ранний", "I got up early, so I'm tired.", "Я рано встал, поэтому устал."],
      ["tired", "уставший", "I was tired, so I went to bed.", "Я устал, поэтому пошёл спать."],
      ["hungry", "голодный", "Are you hungry, or can we play first?", "Ты голоден, или можем сначала поиграть?"],
      ["maybe", "может быть", "Maybe it's hard, but I want to try.", "Может, это трудно, но я хочу попробовать."]
    ],
    texts: [
      {
        id: 't-a1-18-1', title: 'My A1 year', level: 'A1',
        text: `A year ago I didn't know any English, so I started from zero. I was scared because grammar was always hard for me.
First I learned "am, is, are", and then Present Simple. When I understood "she works", I was very happy!
I studied every evening after work. I usually opened my notebook after dinner, when the house was quiet.
Sometimes I made mistakes, but I didn't stop. When I didn't understand a rule, I read it again or asked my friend Kate. She lives in London, so her English is great.
Now I can read short texts, and I can talk about my day. Last week I played an RPG in English. There were a lot of new words, but I understood the story!
My next goal is A2. Before I start, I want to repeat all the A1 topics. When I finish them, I want to watch a series without subtitles. Maybe it's hard, but I want to try.`,
        questions: [
          { q: 'Why was the writer scared?', o: ['Grammar was always hard for him', 'He had no time', 'English was boring'], a: 0 },
          { q: 'Who helped the writer with English?', o: ['Kate', 'Max', 'A teacher'], a: 0 },
          { q: 'What does the writer want to do before A2?', o: ['Buy a new game', 'Repeat all the A1 topics', 'Go to London'], a: 1 }
        ]
      },
      {
        id: 't-a1-18-2', title: 'Game night', level: 'A1',
        text: `Max: Hi, Anna! Are you free tonight?
Anna: Maybe. Why?
Max: We want to play a new co-op game. Do you want to join us, or are you busy?
Anna: I'd like to, but I have a lot of work.
Max: When do you finish?
Anna: At about nine.
Max: Great! Call me when you finish, and we can start.
Anna: OK. What's the game?
Max: It's a survival game. You build a house, find food and fight monsters.
Anna: Sounds cool. But my laptop is old, so I can't play big games.
Max: No problem. The game is small, so it works on old laptops.
Anna: How long does it take to download?
Max: About ten minutes. Download it before you finish work, and you can play at nine.
Anna: Good idea! I'm downloading it now.
Max: Perfect. See you tonight!`,
        questions: [
          { q: 'Why can\'t Anna play now?', o: ['She is tired', 'She has a lot of work', 'Her laptop is broken'], a: 1 },
          { q: 'When does Anna finish work?', o: ['At about nine', 'At about seven', 'At midnight'], a: 0 },
          { q: 'What kind of game is it?', o: ['A racing game', 'A survival game', 'A football game'], a: 1 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'I was hungry, ___ I made a sandwich.', o: ['because', 'so', 'but'], a: 1, why: 'Сэндвич — результат голода → so.' },
      { t: 'choice', q: 'I made a sandwich ___ I was hungry.', o: ['so', 'because', 'or'], a: 1, why: 'После пропуска — причина → because.' },
      { t: 'choice', q: 'I bought the game, ___ I didn\'t play it.', o: ['and', 'but', 'so'], a: 1, why: 'Купил, но не играл — противопоставление → but.' },
      { t: 'choice', q: 'Do you want to watch a film ___ play a game?', o: ['or', 'and', 'so'], a: 0, why: 'Выбор одного из двух → or.' },
      { t: 'choice', q: '___ I got home, I called Kate.', o: ['When', 'Because', 'So'], a: 0, why: 'Время действия → when; запятая после первой части.' },
      { t: 'choice', q: 'Call me when you ___ home.', o: ['will get', 'get', 'got'], a: 1, why: 'После when про будущее — настоящее время.' },
      { t: 'choice', q: 'Always save the game ___ you close it.', o: ['after', 'before', 'because'], a: 1, why: 'Сохранить нужно до закрытия → before.' },
      { t: 'choice', q: 'I listen to music ___ I\'m working.', o: ['while', 'so', 'or'], a: 0, why: 'Два действия одновременно → while.' },
      { t: 'gap', q: 'We stayed at home ___ watched a series. (и)', a: ['and'], why: 'Добавляем второе действие → and; второе we можно не повторять.' },
      { t: 'gap', q: 'I didn\'t go to the party ___ I was tired. (потому что)', a: ['because'], why: 'Причина → because.' },
      { t: 'gap', q: 'I don\'t like horror films ___ thrillers. (ни… ни)', a: ['or'], why: 'В отрицании «ни… ни» → or.' },
      { t: 'gap', q: 'It was cold, ___ we played at home. (поэтому)', a: ['so'], why: 'Результат → so.' },
      { t: 'gap', q: '___ I finish work, let\'s play online. (когда)', a: ['When', 'After'], why: 'Время → when; про будущее, но после when — настоящее finish.' },
      { t: 'gap', q: 'Brush your teeth ___ you go to bed. (перед тем как)', a: ['before'], why: '«Перед тем как» → before.' },
      { t: 'order', a: 'I was tired so I went to bed', ru: 'Я устал, поэтому пошёл спать.' },
      { t: 'order', a: 'Call me when you get home', ru: 'Позвони мне, когда придёшь домой.' },
      { t: 'tr', q: 'Я остался дома, потому что было холодно.', a: ['i stayed at home because it was cold', 'i stayed home because it was cold'] },
      { t: 'tr', q: 'Я купил игру, но не играл в неё.', a: ['i bought the game but i didn\'t play it', 'i bought the game, but i didn\'t play it', 'i bought the game but i did not play it', 'i bought the game, but i did not play it', 'i bought a game but i didn\'t play it', 'i bought a game, but i didn\'t play it'] },
      { t: 'listen', say: 'When I got home, I opened my laptop.', a: ['when i got home i opened my laptop', 'when i got home, i opened my laptop'] }
    ],
    test: [
      { t: 'choice', q: 'Anna and I ___ designers.', o: ['am', 'is', 'are'], a: 2, why: 'Anna and I = мы (we) → are.' },
      { t: 'gap', q: 'Max ___ in a big game studio. (work)', a: ['works'], why: 'Present Simple: he/she → глагол + -s.' },
      { t: 'choice', q: 'Be quiet! The baby ___.', o: ['sleeps', 'is sleeping', 'sleep'], a: 1, why: 'Прямо сейчас → Present Continuous: is + -ing.' },
      { t: 'gap', q: 'Last summer we ___ to Italy. (go)', a: ['went'], why: 'Past Simple неправильного глагола: go → went.' },
      { t: 'choice', q: '___ you help me with this level?', o: ['Do', 'Can', 'Are'], a: 1, why: 'Просьба о помощи, «можешь ли» → Can you…?' },
      { t: 'choice', q: '___ a lot of people in the chat now.', o: ['There is', 'There are', 'It is'], a: 1, why: 'Много людей (people — мн. число) → there are.' },
      { t: 'choice', q: 'I bought ___ new mouse. ___ mouse is really fast.', o: ['a / The', 'the / A', 'a / A'], a: 0, why: 'Впервые упоминаем — a; дальше это та самая мышка — the.' },
      { t: 'choice', q: 'The stream starts ___ 8 p.m. ___ Friday.', o: ['at / on', 'in / at', 'on / in'], a: 0, why: 'Время на часах — at, день недели — on.' },
      { t: 'choice', q: 'How ___ time do you need?', o: ['many', 'much', 'a lot'], a: 1, why: 'time неисчисляемое → how much.' },
      { t: 'choice', q: 'This isn\'t your cup. It\'s ___.', o: ['my', 'mine', 'me'], a: 1, why: 'Без существительного после — mine («моя»).' },
      { t: 'gap', q: 'Who ___ the last game? — Our team! (win, прошлое)', a: ['won'], why: 'Who — тот, кто выиграл → без did, сразу won.' },
      { t: 'choice', q: 'I was late ___ my bus didn\'t come.', o: ['so', 'because', 'but'], a: 1, why: 'Автобус не пришёл — причина опоздания → because.' }
    ]
  }
);
