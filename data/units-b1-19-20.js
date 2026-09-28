// Юниты B1 19–20: число существительных, noun + noun, 's и of, myself, a friend of mine / my own / on my own, there и it; some/any, no/none, much/many/few, all/most of, both/either/neither, all/every/whole, each/every
COURSE.units.push(
  // ───────────────────────────── UNIT B1-19 ─────────────────────────────
  {
    id: 'b1-19', level: 'B1', num: 19, track: 'main',
    books: { blue: [79, 80, 81, 82, 83, 84] },
    title: 'Число, noun + noun, \'s и of; myself; a friend of mine; there и it',
    summary: 'Разберёмся, почему trousers are, а news is, научимся склеивать существительные (a two-hour meeting, a gaming chair), выбирать между \'s и of, говорить «сам», «свой собственный», «в одиночку» и не путать there и it.',
    grammar: [
      {
        title: '1. Главная идея: английское существительное живёт по своим правилам',
        html: `
<div class="g-idea">Что вы уже знаете: <b>Kate's</b> и <b>a friend of mine</b> (урок A1-11), <b>myself</b> и <b>each other</b> (A2-14), <b>there is</b> и <b>it</b> для погоды и времени (A1-6, A2-19). На B1 разбираем тонкости: где английский <b>считает не так, как русский</b>, как одно существительное становится «прилагательным» для другого, когда <b>'s</b>, а когда <b>of</b>, и почему «там была пробка» — это <b>there</b>, а не it.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Новости хорошие.</p><p>Полиция уже едет.</p><p>игровое кресло, двухчасовая встреча</p><p>Я починил это сам.</p><p>Извини, <span class="g-gap">_</span> была огромная пробка.</p></div>
  <div><div class="g-h">English</div><p><span class="say">The news <b>is</b> good.</span></p><p><span class="say">The police <b>are</b> on their way.</span></p><p><span class="say">a gaming chair, a two-hour meeting</span></p><p><span class="say">I fixed it <b>myself</b>.</span></p><p><span class="say">Sorry, <b>there was</b> a huge traffic jam.</span></p></div>
</div>
<p>Русский часто подсказывает неправильно: «новости» — вроде бы много, «полиция» — вроде бы одна, «пробка была» — вроде бы «it was». В этом уроке учимся <b>не переводить слово в слово</b>.</p>
<div class="g-tip">Главный вопрос урока: «Как это видит англичанин?» Брюки для него — две штанины (are), новости — одна порция информации (is), полиция — много людей (are).</div>
<div class="mini" data-q="The news ___ really bad today." data-o="is|are|were" data-a="0" data-why="news — неисчисляемое, всегда единственное число: is."></div>`
      },
      {
        title: '2. Одно или много: где английский считает по-своему',
        html: `
<div class="g-idea">Есть несколько групп слов, где число в английском <b>не совпадает</b> с русским или с тем, как слово выглядит.</div>
<table>
<tr><th>Группа</th><th>Слова</th><th>Глагол</th></tr>
<tr><td>Вещи «из двух половинок»</td><td>trousers, jeans, shorts, pyjamas, glasses, headphones, scissors</td><td><b>are</b>, them</td></tr>
<tr><td>Науки и занятия на -ics</td><td>physics, maths, economics, politics, gymnastics</td><td><b>is</b>, it</td></tr>
<tr><td>news</td><td>news</td><td><b>is</b></td></tr>
<tr><td>Одинаковы в ед. и мн.</td><td>series, species, means</td><td>a series / two series</td></tr>
<tr><td>police, people</td><td>police, people</td><td>всегда <b>are</b></td></tr>
<tr><td>Сумма, срок, расстояние</td><td>200 dollars, two hours, 5 km</td><td><b>is</b> (одно целое)</td></tr>
</table>
<p><b>«Двойные» вещи</b> — всегда множественное число. Чтобы сказать «одни», «одну пару», используем <b>a pair of</b>:</p>
<ul class="g-list">
<li><span class="say">These headphones are amazing. Where did you get them?</span> — Эти наушники классные. Где ты их взял?</li>
<li><span class="say">My new jeans are too long.</span> — Мои новые джинсы слишком длинные.</li>
<li><span class="say">I need a new pair of glasses.</span> — Мне нужны новые очки.</li>
<li><span class="say">Where are the scissors? I can't find them.</span> — Где ножницы? Не могу их найти.</li>
</ul>
<div class="g-bad">I bought a new jeans.</div>
<div class="g-good">I bought new jeans. / I bought a new <b>pair of</b> jeans.</div>
<p><b>-ics</b> выглядит как множественное, но это одно занятие: <span class="say">Maths was my worst subject at school.</span> — Математика была моим худшим предметом. <span class="say">Politics doesn't interest me at all.</span> — Политика меня вообще не интересует.</p>
<p><b>series, species, means</b> не меняются: <span class="say">It's a great series.</span> — Классный сериал. <span class="say">I've watched three Korean series this month.</span> — Я посмотрел три корейских сериала. <span class="say">There are thousands of species of spiders.</span> — Существуют тысячи видов пауков. <span class="say">A bike is a cheap means of transport.</span> — Велосипед — дешёвый вид транспорта.</p>
<p><b>Группы людей</b> — team, staff, family, company, band, crew, audience, government — можно с <b>is</b> (думаем о группе как об одном целом) или с <b>are</b> (думаем о людях внутри). В британском английском <b>are</b> очень частое:</p>
<ul class="g-list">
<li><span class="say">The staff here are really friendly.</span> — Персонал здесь очень дружелюбный.</li>
<li><span class="say">Our team is playing / are playing in the final tonight.</span> — Наша команда сегодня играет в финале.</li>
<li><span class="say">The audience were laughing all through the show.</span> — Зрители смеялись всё шоу.</li>
</ul>
<p><b>police</b> — только множественное: <span class="say">The police are looking for the driver.</span> Одного человека называем <b>a police officer</b>, а не «a police». <b>person</b> → <b>people</b> (не «persons»): <span class="say">They're really nice people.</span></p>
<p><b>Сумма денег, время, расстояние</b> — это одна «порция», поэтому единственное число:</p>
<ul class="g-list">
<li><span class="say">Two hours is too long for a meeting.</span> — Два часа — слишком долго для встречи.</li>
<li><span class="say">Three hundred dollars is a lot for a keyboard.</span> — Триста долларов — это много за клавиатуру.</li>
<li><span class="say">Ten kilometres isn't far by bike.</span> — Десять километров на велосипеде — это недалеко.</li>
</ul>
<div class="mini" data-q="My glasses ___ on the desk, I think." data-o="is|are|am" data-a="1" data-why="glasses — вещь из двух половинок, всегда множественное: are."></div>
<div class="mini" data-q="Fifty dollars ___ too much for a skin in a game." data-o="is|are|have" data-a="0" data-why="Сумма денег — одно целое: is."></div>`
      },
      {
        title: '3. Noun + noun: gaming chair, a two-hour meeting',
        html: `
<div class="g-idea">В английском можно поставить два существительных подряд. <b>Первое</b> работает как прилагательное — отвечает на вопрос «какой? для чего?». <b>Главное</b> слово — всегда <b>последнее</b>.</div>
<div class="g-formula"><span class="g-part">какой? (сущ.)</span><span class="g-plus">+</span><span class="g-part g-v">главное сущ.</span><span class="g-sep">·</span><span class="g-part">a game engine = движок для игр</span></div>
<p>По-русски мы делаем из слова прилагательное («игровой») или ставим родительный падеж («дверь машины»). По-английски — просто кладём слово рядом:</p>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td><span class="say">a game engine</span></td><td>игровой движок</td></tr>
<tr><td><span class="say">a phone case</span></td><td>чехол для телефона</td></tr>
<tr><td><span class="say">the city centre</span></td><td>центр города</td></tr>
<tr><td><span class="say">my work laptop</span></td><td>мой рабочий ноутбук</td></tr>
<tr><td><span class="say">a birthday present</span></td><td>подарок на день рождения</td></tr>
<tr><td><span class="say">a design course</span></td><td>курс по дизайну</td></tr>
</table>
<p>Первое слово бывает с <b>-ing</b> — «для чего»: <span class="say">a gaming chair</span> (кресло для игр), <span class="say">a washing machine</span> (стиральная машина), <span class="say">a swimming pool</span> (бассейн), <span class="say">a sleeping bag</span> (спальник).</p>
<p>Можно склеить и три слова: <span class="say">a game design course</span> — курс по геймдизайну, <span class="say">the hotel reception desk</span> — стойка регистрации в отеле, <span class="say">a password reset email</span> — письмо для сброса пароля.</p>
<p>Иногда пишется слитно, иногда раздельно: <b>headache, weekend, keyboard, screenshot</b>, но <b>car park, phone case</b>. Правила нет — если сомневаетесь, пишите раздельно.</p>
<p><b>Первое слово обычно в единственном числе</b>, даже если смысл «много»: <span class="say">a shoe shop</span> (продают много туфель), <span class="say">a ticket office</span>, <span class="say">a car park</span>.</p>
<p><b>Числа</b> тоже становятся «прилагательным» — пишем через дефис и <b>без -s</b>:</p>
<table>
<tr><th>Как «какой?»</th><th>Как обычное число</th></tr>
<tr><td><span class="say">a two-hour meeting</span></td><td><span class="say">The meeting lasted two hours.</span></td></tr>
<tr><td><span class="say">a ten-minute break</span></td><td><span class="say">We had a break for ten minutes.</span></td></tr>
<tr><td><span class="say">a twenty-dollar gift card</span></td><td><span class="say">The card cost twenty dollars.</span></td></tr>
<tr><td><span class="say">a six-year-old boy</span></td><td><span class="say">He's six years old.</span></td></tr>
</table>
<p>Сравните ещё: <span class="say">a coffee cup</span> — кофейная чашка (может быть пустой), а <span class="say">a cup of coffee</span> — чашка <b>с кофе</b>. <span class="say">a pizza box</span> — коробка из-под пиццы, <span class="say">a box of pizza</span> — коробка с пиццей.</p>
<div class="g-bad">We have a two-hours meeting. <span class="muted">·</span> I went to a shoes shop.</div>
<div class="g-good">We have a <b>two-hour</b> meeting. <span class="muted">·</span> I went to a <b>shoe</b> shop.</div>
<div class="g-tip">Читайте такие пары с конца: <b>a game engine</b> — «движок… какой? игровой». <b>an engine game</b> — это уже «игра про двигатели».</div>
<div class="mini" data-q="It's a ___ flight from Moscow to Sochi." data-o="two-hour|two-hours|two hours" data-a="0" data-why="Число перед существительным работает как прилагательное: через дефис и без -s."></div>
<div class="mini" data-q="Can I have ___? I'm so sleepy." data-o="a coffee cup|a cup of coffee|a cup coffee" data-a="1" data-why="Хотим кофе, а не пустую чашку: a cup of coffee."></div>`
      },
      {
        title: '4. \'s или of: чей и чего',
        html: `
<div class="g-idea"><b>'s</b> ставим в основном после <b>людей и животных</b>. Для <b>вещей, частей, идей</b> — <b>of</b>. Для организаций и мест подходят оба.</div>
<table>
<tr><th>Кто / что</th><th>Как</th><th>Пример</th></tr>
<tr><td>люди, животные</td><td><b>'s</b></td><td><span class="say">my brother's PC</span>, <span class="say">the cat's bowl</span></td></tr>
<tr><td>вещи, части</td><td><b>of</b></td><td><span class="say">the end of the film</span>, <span class="say">the top of the screen</span></td></tr>
<tr><td>компании, города, страны</td><td><b>'s</b> или <b>of</b></td><td><span class="say">the studio's new game</span>, <span class="say">the world's biggest map</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">What's the name of this song?</span> — Как называется эта песня? <span class="muted">(не the song's name — звучит странно)</span></li>
<li><span class="say">Nobody knows the cause of the bug.</span> — Никто не знает причину бага.</li>
<li><span class="say">Write your name at the bottom of the page.</span> — Напишите имя внизу страницы.</li>
<li><span class="say">The company's decision surprised everyone.</span> — Решение компании всех удивило.</li>
</ul>
<p><b>Где ставить апостроф</b> — зависит от числа:</p>
<table>
<tr><th>Кто</th><th>Форма</th><th>Пример</th></tr>
<tr><td>один</td><td>-<b>'s</b></td><td><span class="say">my sister's room</span> — комната сестры</td></tr>
<tr><td>много, на -s</td><td>-s<b>'</b></td><td><span class="say">my sisters' room</span> — комната сестёр</td></tr>
<tr><td>много, без -s</td><td>-<b>'s</b></td><td><span class="say">children's games</span>, <span class="say">people's opinions</span></td></tr>
<tr><td>двое вместе</td><td>'s в конце</td><td><span class="say">Max and Liza's cat</span> — кот Макса и Лизы</td></tr>
</table>
<p>Если «владелец» — длинная фраза, лучше <b>of</b>: <span class="say">the laptop of the guy we met yesterday</span> — ноутбук того парня, с которым мы вчера познакомились. В разговоре иногда лепят 's на конец длинной фразы, но в письме так не надо.</p>
<p>'s может стоять <b>без существительного</b>: <span class="say">This isn't my charger. It's Anna's.</span> <span class="say">I took someone else's bag by mistake.</span> — Я по ошибке взял чужую сумку.</p>
<p>'s часто значит «<b>для</b>»: <span class="say">a children's book</span> — детская книга, <span class="say">a women's team</span> — женская команда.</p>
<p><b>Время</b> — тоже с 's:</p>
<ul class="g-list">
<li><span class="say">Did you watch yesterday's stream?</span> — Ты смотрел вчерашний стрим?</li>
<li><span class="say">Next week's update has been delayed.</span> — Обновление следующей недели отложили.</li>
<li><span class="say">I've got a week's holiday in May.</span> — В мае у меня неделя отпуска.</li>
<li><span class="say">I've got two weeks' holiday.</span> — У меня две недели отпуска. <span class="muted">(weeks — много → апостроф после s)</span></li>
<li><span class="say">The office is ten minutes' walk from here.</span> = <span class="say">It's a ten-minute walk.</span></li>
</ul>
<div class="g-bad">the computer of Tom <span class="muted">·</span> the film's end</div>
<div class="g-good"><b>Tom's</b> computer <span class="muted">·</span> the end <b>of</b> the film</div>
<div class="mini" data-q="My parents share one car. It's my ___ car." data-o="parent's|parents'|parents's" data-a="1" data-why="Двое родителей: parents + апостроф после s."></div>
<div class="mini" data-q="Как лучше: «начало месяца»?" data-o="the month's beginning|the beginning of the month|the month beginning" data-a="1" data-why="Часть чего-то (beginning, end, top) → of."></div>`
      },
      {
        title: '5. Myself: где «себя» нет, «друг друга» и «сам»',
        html: `
<div class="g-idea">Вы уже знаете: <b>myself</b> ставим, когда человек делает что-то <b>с самим собой</b> (<span class="say">I cut myself.</span>). Теперь три тонкости: где «-ся» по-русски есть, а <b>myself</b> не нужен; разница <b>themselves / each other</b>; и <b>myself</b> в значении «сам».</div>
<table>
<tr><th>Глагол</th><th>myself?</th><th>Пример</th></tr>
<tr><td>enjoy, blame, hurt, introduce, behave</td><td><b>нужен</b></td><td><span class="say">Did you enjoy yourself?</span> <span class="say">Don't blame yourself.</span></td></tr>
<tr><td>feel, relax, concentrate, meet</td><td><b>не нужен</b></td><td><span class="say">Relax!</span> <span class="say">I can't concentrate.</span></td></tr>
<tr><td>wash, shave, dress</td><td>обычно <b>не нужен</b></td><td><span class="say">I got up, washed and got dressed.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Let me introduce myself. I'm Ilya, the new UI designer.</span> — Позвольте представиться.</li>
<li><span class="say">Kids, behave yourselves!</span> — Дети, ведите себя хорошо! <span class="muted">(-selves — о нескольких)</span></li>
<li><span class="say">There's pizza on the table. Help yourselves!</span> — Угощайтесь!</li>
<li><span class="say">I feel much better today.</span> — Мне сегодня гораздо лучше. <span class="muted">(не feel myself)</span></li>
<li><span class="say">What time shall we meet?</span> — Во сколько встретимся?</li>
</ul>
<div class="g-bad">Relax yourself and concentrate yourself.</div>
<div class="g-good"><b>Relax</b> and <b>concentrate</b>.</div>
<div class="g-bad">We enjoyed at the party. <span class="muted">— enjoy не бывает «пустым»</span></div>
<div class="g-good">We enjoyed <b>ourselves</b> at the party. / We enjoyed <b>the party</b>.</div>
<p><b>themselves</b> или <b>each other</b>:</p>
<ul class="g-list">
<li><span class="say">Kate and Den took a photo of themselves.</span> — Кейт и Дэн сфотографировали себя (оба на фото).</li>
<li><span class="say">Kate and Den took photos of each other.</span> — Кейт и Дэн сфотографировали друг друга.</li>
<li><span class="say">How long have you known each other?</span> = <span class="say">How long have you known one another?</span> — Сколько вы знакомы?</li>
</ul>
<p><b>myself</b> = «сам, а не кто-то другой». Ставим в конец фразы или сразу после слова:</p>
<ul class="g-list">
<li><span class="say">Who drew this? — I drew it myself.</span> — Кто это нарисовал? — Я сам.</li>
<li><span class="say">I'm not going to fix your bug. Fix it yourself.</span> — Почини сам.</li>
<li><span class="say">The game itself is short, but the soundtrack is amazing.</span> — Сама игра короткая, но саундтрек потрясающий.</li>
<li><span class="say">Anna doesn't believe it herself.</span> = <span class="say">Anna herself doesn't believe it.</span> — Анна сама в это не верит.</li>
</ul>
<div class="g-tip">«Себя» (с собой) и «сам» (без помощи) по-английски одно слово — <b>myself</b>. А «друг друга» — никогда не themselves, только <b>each other</b>.</div>
<div class="mini" data-q="Max looked at Liza, and Liza looked at Max. They looked at ___." data-o="themselves|each other|theirselves" data-a="1" data-why="Каждый смотрел на другого — each other."></div>
<div class="mini" data-q="I'm so tired, I can't ___." data-o="concentrate myself|concentrate|concentrate me" data-a="1" data-why="concentrate, relax, feel — без myself."></div>`
      },
      {
        title: '6. A friend of mine, my own, on my own',
        html: `
<div class="g-idea">Три похожие конструкции: <b>a friend of mine</b> — «один из моих друзей», <b>my own</b> — «свой собственный», <b>on my own / by myself</b> — «в одиночку, один».</div>
<p><b>a … of mine / yours / ours / Tom's</b> — когда их несколько и речь об одном (или некоторых) из них:</p>
<ul class="g-list">
<li><span class="say">A colleague of mine is moving to Berlin.</span> — Один мой коллега переезжает в Берлин.</li>
<li><span class="say">We played with some friends of ours.</span> — Мы играли с нашими друзьями (с некоторыми).</li>
<li><span class="say">She's a friend of my brother's.</span> — Она подруга моего брата.</li>
<li><span class="say">That was a great idea of yours!</span> — Это была твоя отличная идея!</li>
</ul>
<div class="g-bad">He's a colleague of me.</div>
<div class="g-good">He's a colleague <b>of mine</b>.</div>
<p><b>own</b> — «свой, ни с кем не общий». Всегда после <b>my / your / his / its / their…</b>, никогда после a:</p>
<ul class="g-list">
<li><span class="say">I don't want to share. I want my own room.</span> — Хочу свою комнату.</li>
<li><span class="say">Every character has its own story.</span> — У каждого персонажа своя история.</li>
<li><span class="say">Why do you need my laptop? Use your own!</span> — Пользуйся своим! <span class="muted">(own без существительного)</span></li>
<li><span class="say">It's my own fault.</span> — Я сам виноват.</li>
</ul>
<p>Можно и так: <b>a … of my own</b> — <span class="say">I'd love a studio of my own.</span> — Хотел бы свою студию. <span class="say">He has enough problems of his own.</span> — У него своих проблем хватает.</p>
<p><b>my own</b> = «сам, а не покупаю у других»: <span class="say">She makes her own music for her games.</span> — Она сама пишет музыку для своих игр. <span class="say">We grow our own tomatoes.</span> — Мы сами выращиваем помидоры.</p>
<div class="g-bad">I want an own studio.</div>
<div class="g-good">I want <b>my own</b> studio. / I want a studio <b>of my own</b>.</div>
<p><b>on my own = by myself</b> — «один, без никого» (= alone):</p>
<table>
<tr><th>on … own</th><th>by …self</th></tr>
<tr><td>on my / your / his / her own</td><td>by myself / yourself / himself / herself</td></tr>
<tr><td>on our / their own</td><td>by ourselves / themselves</td></tr>
</table>
<ul class="g-list">
<li><span class="say">I live on my own.</span> = <span class="say">I live by myself.</span> — Я живу один.</li>
<li><span class="say">Did you finish the level by yourself?</span> — Ты сам прошёл уровень? <span class="muted">(без помощи)</span></li>
<li><span class="say">He was sitting on his own in the corner.</span> — Он сидел один в углу.</li>
</ul>
<div class="g-bad">I went there by my own.</div>
<div class="g-good">I went there <b>on my own</b>. / … <b>by myself</b>.</div>
<div class="mini" data-q="We don't rent. We have ___ house." data-o="an own|our own|own" data-a="1" data-why="own всегда после my/our/their…, никогда не после a."></div>
<div class="mini" data-q="Nobody helped me. I did it ___." data-o="on my own|by my own|on myself" data-a="0" data-why="«В одиночку» = on my own или by myself."></div>`
      },
      {
        title: '7. There или it',
        html: `
<div class="g-idea"><b>there is</b> — сообщаем, что что-то <b>существует, есть</b>, говорим о нём впервые. <b>it</b> — про <b>конкретную</b> вещь, место, ситуацию, которую уже знаем.</div>
<ul class="g-list">
<li><span class="say">There's a new café near the office. It's really cosy.</span> — Рядом с офисом открылось новое кафе. Оно очень уютное.</li>
<li><span class="say">Sorry I'm late. There was an accident on the bridge.</span> — Извини, на мосту была авария. <span class="muted">(не It was an accident)</span></li>
<li><span class="say">She called me at midnight. It was a total surprise.</span> — Это было полной неожиданностью. <span class="muted">(it = то, что она позвонила)</span></li>
<li><span class="say">I love this city. There's always something to do. It's never boring.</span></li>
</ul>
<p><b>there</b> работает с любыми временами и модальными глаголами:</p>
<table>
<tr><th>Форма</th><th>Пример</th></tr>
<tr><td>there will be / might be</td><td><span class="say">There might be a patch tonight.</span></td></tr>
<tr><td>there must be / must have been</td><td><span class="say">The lights are on. There must be somebody at home.</span></td></tr>
<tr><td>there should have been</td><td><span class="say">There should have been a warning.</span></td></tr>
<tr><td>there would be</td><td><span class="say">If the game were cheaper, there would be more players.</span></td></tr>
<tr><td>there used to be</td><td><span class="say">There used to be a computer club here.</span></td></tr>
<tr><td>there's bound / sure / likely to be</td><td><span class="say">It's Friday. There's bound to be a queue.</span> — Точно будет очередь.</td></tr>
<tr><td>there's supposed to be</td><td><span class="say">There's supposed to be a lift somewhere.</span> — Тут вроде должен быть лифт.</td></tr>
<tr><td>there's going to be</td><td><span class="say">There's going to be a storm.</span></td></tr>
</table>
<p>Сравните — одна ситуация, разные слова:</p>
<ul class="g-list">
<li><span class="say">They live next to a stadium. There must be a lot of noise.</span> — Там, должно быть, много шума.</li>
<li><span class="say">They live next to a stadium. It must be very noisy.</span> — Там, должно быть, очень шумно. <span class="muted">(it = жить у стадиона)</span></li>
<li><span class="say">There used to be a computer club here. Now it's a pharmacy.</span></li>
<li><span class="say">That pharmacy used to be a computer club.</span> <span class="muted">(it = это здание)</span></li>
</ul>
<p><b>It</b> в начале фразы вместо длинного подлежащего. По-английски не начинают с «Учить язык за месяц — трудно»:</p>
<ul class="g-list">
<li><span class="say">It's hard to learn a language in a month.</span> <span class="muted">(не To learn a language in a month is hard — так почти не говорят)</span></li>
<li><span class="say">It's a shame you can't come.</span> — Жаль, что ты не можешь прийти.</li>
<li><span class="say">It took us two hours to set up the server.</span> — У нас ушло два часа на настройку сервера.</li>
<li><span class="say">It's not worth waiting. Let's go.</span> — Не стоит ждать.</li>
<li><span class="say">How far is it to the station?</span> <span class="say">It's been ages since we last played together.</span></li>
</ul>
<p>Погода: <span class="say">It was windy.</span> — но <span class="say">There was a strong wind.</span> (есть существительное wind → there).</p>
<p>И не забывайте: <b>there</b> ещё и «там» — <span class="say">The house is empty. Nobody lives there.</span></p>
<div class="g-bad">It was a lot of people at the concert.</div>
<div class="g-good"><b>There were</b> a lot of people at the concert.</div>
<div class="mini" data-q="Why did he leave so suddenly? ___ must have been a reason." data-o="It|There|That" data-a="1" data-why="Говорим, что причина существовала → there must have been."></div>
<div class="mini" data-q="We went to the new escape room. ___ was great!" data-o="There|It|They" data-a="1" data-why="Конкретное место, о котором уже сказали → it."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">My headphones is broken.</div><div class="g-good">My headphones <b>are</b> broken.</div>
<div class="g-bad">The police is here. A police asked me.</div><div class="g-good">The police <b>are</b> here. A <b>police officer</b> asked me.</div>
<div class="g-bad">Two hours are too long.</div><div class="g-good">Two hours <b>is</b> too long.</div>
<div class="g-bad">a three-days trip</div><div class="g-good">a <b>three-day</b> trip</div>
<div class="g-bad">the car of my father · the song's name</div><div class="g-good"><b>my father's</b> car · the name <b>of</b> the song</div>
<div class="g-bad">I can't relax myself.</div><div class="g-good">I can't <b>relax</b>.</div>
<div class="g-bad">They hate themselves. <span class="muted">(= друг друга)</span></div><div class="g-good">They hate <b>each other</b>.</div>
<div class="g-bad">I want an own room. · He lives by his own.</div><div class="g-good">I want <b>my own</b> room. · He lives <b>on his own</b>.</div>
<div class="g-bad">It was a long queue outside.</div><div class="g-good"><b>There was</b> a long queue outside.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>trousers are, news is, two hours is</b> · главное слово последнее: <b>a two-hour meeting</b> · люди → <b>'s</b>, вещи → <b>of</b> · <b>myself</b> = себя и сам, <b>each other</b> = друг друга · <b>my own, on my own</b> · <b>there</b> = есть, <b>it</b> = это самое.</div>`
      }
    ],
    words: [
      ["pair", "пара", "I need a new pair of headphones.", "Мне нужны новые наушники."],
      ["trousers", "брюки", "These trousers are too short for me.", "Эти брюки мне коротки."],
      ["headphones", "наушники", "My headphones are broken again.", "У меня опять сломались наушники."],
      ["scissors", "ножницы", "Where are the scissors? I can't find them.", "Где ножницы? Не могу их найти."],
      ["news", "новости, новость", "The news is good: the server is back.", "Новости хорошие: сервер снова работает."],
      ["series", "сериал; серия", "It's my favourite series.", "Это мой любимый сериал."],
      ["species", "вид (животных, растений)", "There are over 200 species of birds here.", "Здесь больше 200 видов птиц."],
      ["politics", "политика", "Politics isn't my thing.", "Политика — не моё."],
      ["staff", "персонал, сотрудники", "The staff here are very helpful.", "Персонал здесь очень отзывчивый."],
      ["audience", "зрители, аудитория", "The audience loved the ending.", "Зрителям понравилась концовка."],
      ["crew", "команда (съёмочная), экипаж", "The film crew are working at night.", "Съёмочная группа работает ночью."],
      ["police", "полиция", "The police are looking for the driver.", "Полиция ищет водителя."],
      ["owner", "владелец, хозяин", "The owner of the flat is very nice.", "Хозяин квартиры очень приятный."],
      ["neighbour", "сосед, соседка", "Our neighbours' dog barks all night.", "Собака наших соседей лает всю ночь."],
      ["relative", "родственник", "A relative of mine lives in Canada.", "Один мой родственник живёт в Канаде."],
      ["colleague", "коллега", "She's a colleague of mine.", "Она моя коллега."],
      ["flatmate", "сосед по квартире", "My flatmates are nice people.", "Мои соседи по квартире — хорошие люди."],
      ["introduce", "представлять, знакомить", "Let me introduce myself.", "Позвольте представиться."],
      ["blame", "винить", "Don't blame yourself — it's not your fault.", "Не вини себя — ты не виноват."],
      ["hurt — hurt", "ушибить, поранить; болеть", "Be careful, don't hurt yourself.", "Осторожно, не ушибись."],
      ["behave", "вести себя", "Behave yourselves, kids!", "Дети, ведите себя хорошо!"],
      ["concentrate", "сосредоточиться", "I can't concentrate with this noise.", "Не могу сосредоточиться при таком шуме."],
      ["each other", "друг друга", "We've known each other for ten years.", "Мы знаем друг друга десять лет."],
      ["own", "свой, собственный", "I'd love a studio of my own.", "Я бы хотел свою студию."],
      ["on my own", "один, самостоятельно", "I finished the game on my own.", "Я прошёл игру сам."],
      ["noise", "шум", "There's too much noise in the office.", "В офисе слишком шумно."],
      ["traffic", "движение, пробки", "There was a lot of traffic this morning.", "Утром были большие пробки."],
      ["queue", "очередь", "There's bound to be a long queue.", "Там точно будет длинная очередь."],
      ["be bound to", "непременно, точно (будет)", "There's bound to be a bug in the first version.", "В первой версии точно будет баг."],
      ["shame", "жаль; позор", "It's a shame you missed the party.", "Жаль, что ты пропустил вечеринку."]
    ],
    texts: [
      {
        id: 't-b1-19-1', title: 'A flat of my own', level: 'B1',
        text: `Last month I finally moved into a flat of my own. For three years I lived with two flatmates. They're really nice people, but I wanted my own room for work, my own kitchen and, most of all, my own bathroom.

The flat is on the fifth floor of a nine-storey building, a ten-minute walk from the metro. There's a small balcony, and there's a park across the road. It's quiet, which is great, because I work from home and I need to concentrate.

Of course, there were a few problems. On the first day there was no hot water. The owner of the flat said it wasn't his fault, and the plumber said it wasn't his fault either. In the end I watched a video tutorial and fixed the heater myself. I'm a UI designer, not an engineer, but I felt very proud.

The furniture was another story. My dad lent me his car for the weekend, and my brother's friend Oleg helped me carry everything. We spent a whole Saturday on a desk from a furniture store — the instructions were three pages of pictures and no words. At one point Oleg looked at me, I looked at him, and we both started laughing. We didn't say anything to each other; we just started again from page one.

Now everything is almost ready. My gaming chair is by the window, my headphones are on the desk, and my sister's old plant is on the balcony. There used to be a sofa there too, but it was too big, so I sold it.

Next Saturday I'm having a housewarming party. There's bound to be a lot of noise, so I've already said sorry to the neighbours. It's a shame my old flatmates can't come. But a friend of mine is bringing her guitar, so it's going to be a good evening.`,
        questions: [
          { q: 'Why did the author move?', o: ['The flatmates were not nice', 'The author wanted a place of their own', 'The old flat was too far from the metro'], a: 1 },
          { q: 'Who fixed the heater?', o: ['The owner of the flat', 'The plumber', 'The author'], a: 2 },
          { q: 'What happened to the sofa?', o: ['The author sold it', 'Oleg took it', 'It is on the balcony'], a: 0 }
        ]
      },
      {
        id: 't-b1-19-2', title: 'Bad news at the studio', level: 'B1',
        text: `Kate: Morning! Have you heard the news? It isn't good.
Den: No. What's happened?
Kate: There was a break-in at the office last night. Somebody took two laptops and the art director's tablet.
Den: Seriously? Are the police here?
Kate: Yes, they're in the meeting room. Two police officers are talking to the security guard. There must have been a problem with the alarm, because it didn't go off.
Den: Unbelievable. Whose laptops were they?
Kate: One was mine and the other one was Anton's. They even took my new pair of headphones!
Den: Oh no. What about your files?
Kate: Luckily, everything is in the cloud. The laptop itself isn't important — the work is. But the tablet is a problem. The presentation for tomorrow's meeting was on it.
Den: The two-hour meeting with the client? The one from the car company?
Kate: That one. Their whole marketing team are coming at ten.
Den: OK, don't panic. There's bound to be a copy somewhere. Did anyone send it by email?
Kate: I think Anton sent it to himself last week. He always does that.
Den: Then it's fine. Anton can finish it on his own, and I'll help with the slides.
Kate: Thanks. It's a shame this happened now. The staff are already nervous about the deadline.
Den: I know. By the way, there used to be a camera above the front door. Is it still there?
Kate: It is, but it hasn't worked for months. The office manager keeps saying there's going to be a new security system.
Den: Well, after today, I think there really will be.
Kate: Let's hope so. OK, I'm going to make myself a cup of coffee. Do you want one?
Den: Yes, please. A big one.`,
        questions: [
          { q: 'What did the thief take from Kate?', o: ['A laptop and headphones', 'A tablet and a camera', 'Only her files'], a: 0 },
          { q: 'Why is the tablet a problem?', o: ['It was very expensive', 'The presentation for tomorrow was on it', 'It belonged to the client'], a: 1 },
          { q: 'Who probably has a copy of the presentation?', o: ['The office manager', 'The police', 'Anton'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'My new headphones ___ really comfortable.', o: ['is', 'are', 'am'], a: 1, why: 'headphones — вещь «из двух половинок», всегда множественное: are.' },
      { t: 'choice', q: 'Physics ___ my favourite subject at school.', o: ['was', 'were', 'have been'], a: 0, why: 'Слова на -ics (physics, maths) — единственное число.' },
      { t: 'choice', q: 'The police ___ still looking for the stolen car.', o: ['is', 'are', 'was'], a: 1, why: 'police — всегда множественное число: are.' },
      { t: 'choice', q: 'We had a ___ meeting this morning. So boring!', o: ['two-hour', 'two-hours', 'two hour\'s'], a: 0, why: 'Число перед существительным = прилагательное: через дефис и без -s.' },
      { t: 'choice', q: 'Have you seen ___? The last ten minutes were crazy.', o: ['the episode of yesterday', 'yesterday\'s episode', 'yesterday episode'], a: 1, why: 'Со словами времени (yesterday, today, next week) используем \'s.' },
      { t: 'choice', q: 'I don\'t need help. I can do it ___.', o: ['me', 'myself', 'by me'], a: 1, why: '«Сам, без помощи» — myself.' },
      { t: 'choice', q: 'Sorry we\'re late. ___ was a lot of traffic.', o: ['It', 'There', 'That'], a: 1, why: 'Сообщаем, что пробки были (существовали) → there was.' },
      { t: 'choice', q: 'I can\'t ___ with all this noise.', o: ['concentrate', 'concentrate myself', 'concentrate me'], a: 0, why: 'concentrate, relax, feel, meet — без myself.' },
      { t: 'gap', q: 'Five hundred dollars ___ too much for a keyboard. (be)', a: ['is'], why: 'Сумма денег — одно целое → единственное число.' },
      { t: 'gap', q: 'My two sisters share a room. My ___ room is always a mess. (sisters)', a: ['sisters\'', 'sisters’'], why: 'Много сестёр, слово на -s → апостроф после s: sisters\'.' },
      { t: 'gap', q: 'Kate and Max had a fight. Now they don\'t talk to ___. (друг друга)', a: ['each other', 'one another'], why: '«Друг друга» — each other (или one another), не themselves.' },
      { t: 'gap', q: 'I don\'t want to share a flat any more. I want a place of my ___.', a: ['own'], why: 'a … of my own = «свой собственный».' },
      { t: 'gap', q: 'The flat is a ten-___ walk from the station. (minute)', a: ['minute'], why: 'В роли прилагательного число пишется через дефис и без -s.' },
      { t: 'gap', q: 'There ___ a cinema on this street, but it closed years ago. (used to / be)', a: ['used to be'], why: 'Раньше было, теперь нет → there used to be.' },
      { t: 'order', a: 'I fixed the heater myself', ru: 'Я сам починил обогреватель.' },
      { t: 'order', a: 'There must have been a mistake', ru: 'Должно быть, произошла ошибка.' },
      { t: 'tr', q: 'Это моя собственная идея.', a: ['it\'s my own idea', 'it is my own idea', 'this is my own idea', 'this\'s my own idea', 'that\'s my own idea', 'that is my own idea'] },
      { t: 'tr', q: 'Он живёт один.', a: ['he lives on his own', 'he lives by himself', 'he lives alone'] },
      { t: 'listen', say: 'She\'s a friend of mine', a: ['she\'s a friend of mine', 'she is a friend of mine'] },
      { t: 'listen', say: 'Help yourselves to pizza', a: ['help yourselves to pizza'] }
    ],
    test: [
      { t: 'choice', q: 'These scissors ___ very sharp. I can\'t cut anything.', o: ['isn\'t', 'aren\'t', 'doesn\'t'], a: 1, why: 'scissors — всегда множественное число, а перед прилагательным нужен be: aren\'t.' },
      { t: 'choice', q: 'The news ___ better than we expected.', o: ['was', 'were', 'have been'], a: 0, why: 'news — единственное число, несмотря на -s.' },
      { t: 'choice', q: 'Max and Liza? They\'re really nice ___.', o: ['persons', 'people', 'peoples'], a: 1, why: 'Множественное от person в обычной речи — people.' },
      { t: 'choice', q: 'Our old ___ broke, so I wash everything by hand.', o: ['washing machine', 'wash machine', 'machine of washing'], a: 0, why: 'Первое слово с -ing показывает назначение: a washing machine.' },
      { t: 'gap', q: 'We\'re going on a three-___ trip to Kazan. (day)', a: ['day'], why: 'Число как прилагательное: three-day, без -s.' },
      { t: 'choice', q: 'Write your name at ___.', o: ['the top of the page', 'the page\'s top', 'the top page'], a: 0, why: 'Часть предмета (top, end, beginning) → of.' },
      { t: 'gap', q: 'I\'ve got two ___ holiday in August. (week)', a: ['weeks\'', 'weeks’'], why: 'Период времени + \'s; weeks — много, поэтому апостроф после s.' },
      { t: 'choice', q: 'Kate took a photo of Den, and Den took a photo of Kate. They photographed ___.', o: ['each other', 'themselves', 'theirselves'], a: 0, why: 'Каждый — другого → each other; themselves значило бы «себя».' },
      { t: 'choice', q: 'The game ___ is short, but the story is amazing.', o: ['itself', 'himself', 'its own'], a: 0, why: '«Сама игра» → itself подчёркивает слово game.' },
      { t: 'gap', q: 'Do you live with anyone? — No, I live by ___. (I)', a: ['myself'], why: 'by myself = on my own = один.' },
      { t: 'choice', q: 'They live right next to a stadium. ___ must be really noisy.', o: ['There', 'It', 'They'], a: 1, why: 'it = ситуация «жить у стадиона»; с прилагательным noisy → it. (There must be a lot of noise.)' },
      { t: 'choice', q: 'I was told ___ would be somebody at the station to meet me.', o: ['it', 'there', 'they'], a: 1, why: 'Говорим, что кто-то будет (существует) → there would be.' }
    ]
  },

  // ───────────────────────────── UNIT B1-20 ─────────────────────────────
  {
    id: 'b1-20', level: 'B1', num: 20, track: 'main',
    books: { blue: [85, 86, 87, 88, 89, 90, 91] },
    title: 'Some, any, no, none, much, few, all, most, both, every, each',
    summary: 'Разберёмся в тонкостях слов количества: some в вопросах и any в значении «любой», no и none, little и a little, most или most of, both/either/neither для двоих, all day или every day, the whole, each или every.',
    grammar: [
      {
        title: '1. Главная идея: «любой», «никакой», «весь» — у каждого по несколько английских слов',
        html: `
<div class="g-idea">Что вы уже знаете: <b>some / any</b> (урок A1-6), <b>much / many / a lot of</b> (A1-12), <b>no, none, nobody, every, all</b> (A2-12), <b>most, both, either, a few, a little</b> (A2-13). Теперь — тонкости: когда <b>some</b> стоит в вопросе, когда <b>any</b> значит «любой», почему <b>little</b> и <b>a little</b> — почти противоположности и чем <b>each</b> отличается от <b>every</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Хочешь чего-нибудь выпить?</p><p>Бери любой — все хорошие.</p><p>Ни один из нас не знал.</p><p>Я весь день играл.</p><p>Каждый игрок получает три карты.</p></div>
  <div><div class="g-h">English</div><p><span class="say">Would you like <b>something</b> to drink?</span></p><p><span class="say">Take <b>any</b> of them — they're all good.</span></p><p><span class="say"><b>None</b> of us knew.</span></p><p><span class="say">I played <b>all day</b>.</span></p><p><span class="say"><b>Each</b> player gets three cards.</span></p></div>
</div>
<p>По-русски «любой», «какой-нибудь», «весь», «каждый» — универсальные слова. По-английски выбор зависит от <b>смысла</b>: предлагаю или спрашиваю? Двое или много? По одному или всех вместе?</p>
<div class="g-tip">Перед каждым словом количества задайте себе два вопроса: <b>сколько их</b> (два или больше, считаются или нет) и <b>что я хочу сказать</b> (есть / нет / неважно какой).</div>
<div class="mini" data-q="Предлагаем гостю: Would you like ___ tea?" data-o="some|any|no" data-a="0" data-why="Предлагаем — значит some, даже в вопросе."></div>`
      },
      {
        title: '2. Some и any: вопросы, «любой», if и without',
        html: `
<div class="g-idea">Базовое правило (some — в утверждениях, any — в отрицаниях и вопросах) — только начало. Решает <b>смысл</b>: some — «что-то точно есть», any — «неизвестно, есть ли» или «неважно какой».</div>
<table>
<tr><th>Ситуация</th><th>Слово</th><th>Пример</th></tr>
<tr><td>вопрос-предложение или просьба</td><td><b>some</b></td><td><span class="say">Can I have some water?</span></td></tr>
<tr><td>вопрос, ждём «да»</td><td><b>some</b></td><td><span class="say">Are you looking for something?</span></td></tr>
<tr><td>обычный вопрос, не знаем</td><td><b>any</b></td><td><span class="say">Do you have any questions?</span></td></tr>
<tr><td>после if</td><td><b>any</b></td><td><span class="say">Let me know if you need anything.</span></td></tr>
<tr><td>без not, но смысл «нет»</td><td><b>any</b></td><td><span class="say">He left without saying anything.</span></td></tr>
<tr><td>«любой, неважно какой»</td><td><b>any</b></td><td><span class="say">Take any seat.</span></td></tr>
</table>
<p><b>Смысл «нет» без not</b> — после <b>without, never, refuse, hardly</b>:</p>
<ul class="g-list">
<li><span class="say">She went to the meeting without any notes.</span> — Она пошла на встречу без всяких заметок.</li>
<li><span class="say">He refused to change anything in the design.</span> — Он отказался что-либо менять в дизайне.</li>
<li><span class="say">The test is easy. Hardly anybody fails.</span> — Тест лёгкий. Почти никто не проваливается.</li>
<li><span class="say">There's hardly any milk left.</span> — Молока почти не осталось.</li>
</ul>
<p><b>if + any</b> и фразы «с идеей if»:</p>
<ul class="g-list">
<li><span class="say">If anyone has any questions, write them in the chat.</span> — Если у кого-то есть вопросы, пишите в чат.</li>
<li><span class="say">Sorry for any problems this update caused.</span> — Приносим извинения за проблемы (если они были).</li>
</ul>
<p><b>any = «любой, какой угодно»</b> — даже в утверждениях:</p>
<ul class="g-list">
<li><span class="say">You can use any font you like.</span> — Можешь взять любой шрифт.</li>
<li><span class="say">Call me any time.</span> — Звони в любое время.</li>
<li><span class="say">This is easy. Anybody can learn it.</span> — Любой может этому научиться.</li>
<li><span class="say">The door was open. Anyone could have come in.</span> — Кто угодно мог войти.</li>
<li><span class="say">What do you want to watch? — Anything. I just want to relax.</span> — Что угодно.</li>
<li><span class="say">Let's go somewhere. — Where? — Anywhere!</span> — Куда-нибудь. — Куда? — Куда угодно!</li>
</ul>
<p><b>someone, anybody</b> — единственное число (<span class="say">Someone is at the door.</span>), но «его/её» заменяем на <b>they / their</b>:</p>
<ul class="g-list">
<li><span class="say">Someone has left their headphones in the meeting room.</span> — Кто-то оставил наушники в переговорке.</li>
<li><span class="say">If anybody wants to leave early, they can.</span> — Если кто-то хочет уйти пораньше — можно.</li>
</ul>
<div class="g-bad">He left without saying something.</div>
<div class="g-good">He left without saying <b>anything</b>.</div>
<div class="mini" data-q="The bus is fine — you can take ___ bus from this stop. They all go to the centre." data-o="some|any|no" data-a="1" data-why="«Любой, неважно какой» → any."></div>
<div class="mini" data-q="Can I have ___ sugar, please?" data-o="some|any|none" data-a="0" data-why="Просьба — ожидаем, что сахар есть → some."></div>`
      },
      {
        title: '3. No, none, nothing: одно «не» на предложение',
        html: `
<div class="g-idea"><b>no</b> — только <b>перед существительным</b> (no bus = not a bus / not any buses). <b>none</b> — <b>без</b> существительного или с <b>of</b>. А <b>nothing, nobody, nowhere</b> уже содержат «не» — второе «не» не нужно.</div>
<table>
<tr><th>Слово</th><th>Как</th><th>Пример</th></tr>
<tr><td><b>no</b></td><td>+ сущ.</td><td><span class="say">There was no bus, so we walked.</span></td></tr>
<tr><td><b>none</b></td><td>одно, без сущ.</td><td><span class="say">How many tickets are left? — None.</span></td></tr>
<tr><td><b>none of</b></td><td>+ the / my / them</td><td><span class="say">None of my friends play chess.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I've got no idea.</span> = <span class="say">I don't have any idea.</span> — Понятия не имею.</li>
<li><span class="say">She'll have no problem finding a job.</span> — У неё не будет проблем с поиском работы.</li>
<li><span class="say">No reason was given for the delay.</span> — Причину задержки не назвали. <span class="muted">(no можно в начале фразы)</span></li>
<li><span class="say">All the pizza is gone. There's none left.</span> — Пиццы не осталось.</li>
</ul>
<p>После <b>none of + множественное</b> глагол может быть и в единственном, и во множественном числе: <span class="say">None of the players was ready.</span> = <span class="say">None of the players were ready.</span> В разговоре чаще <b>were</b>.</p>
<p><b>nothing, nobody, nowhere</b> — в начале фразы, отдельно как ответ, или после глагола (особенно be и have):</p>
<ul class="g-list">
<li><span class="say">What happened? — Nothing.</span></li>
<li><span class="say">Where are you going? — Nowhere. I'm staying in.</span></li>
<li><span class="say">Nobody knows why the build failed.</span> — Никто не знает, почему сборка упала.</li>
<li><span class="say">We had nothing to do, so we started a new game.</span></li>
</ul>
<div class="g-steps"><div class="g-h">Одно «не» — два способа</div><ol>
<li>not + any-: <span class="say">I didn't say anything.</span></li>
<li>no- без not: <span class="say">I said nothing.</span></li>
<li>Оба вместе — ошибка: «I didn't say nothing».</li>
</ol></div>
<p>После <b>nobody</b> тоже <b>they / their</b>: <span class="say">Nobody in the team did their part.</span> <span class="say">Nobody's perfect, are they?</span></p>
<p><b>no-</b> или <b>any-</b>:</p>
<table>
<tr><th>no- = никто / ничего</th><th>any- = кто угодно / что угодно</th></tr>
<tr><td><span class="say">It's a boring job. Nobody wants to do it.</span></td><td><span class="say">It's an easy job. Anybody can do it.</span></td></tr>
<tr><td><span class="say">I'm not hungry. I want nothing.</span></td><td><span class="say">I'm starving. I could eat anything.</span></td></tr>
</table>
<div class="g-bad">I didn't see nobody. · No of us knew.</div>
<div class="g-good">I didn't see <b>anybody</b>. / I saw <b>nobody</b>. · <b>None</b> of us knew.</div>
<div class="mini" data-q="How much money do you have? — ___. I spent it all." data-o="No|None|Not" data-a="1" data-why="Без существительного → none."></div>`
      },
      {
        title: '4. Much, many, little, few, a lot, plenty',
        html: `
<div class="g-idea"><b>much, little</b> — с неисчисляемыми (time, money). <b>many, few</b> — с множественным (friends, bugs). <b>a lot of, lots of, plenty of</b> — со всеми.</div>
<table>
<tr><th></th><th>Неисчисл.</th><th>Мн. число</th></tr>
<tr><td>много</td><td>much time</td><td>many games</td></tr>
<tr><td>мало (не хватает)</td><td>little time</td><td>few friends</td></tr>
<tr><td>немного (хватает)</td><td>a little time</td><td>a few friends</td></tr>
<tr><td>много / больше чем нужно</td><td colspan="2">a lot of, lots of, plenty of</td></tr>
</table>
<p><b>plenty of</b> = «с запасом, более чем достаточно»: <span class="say">Don't rush. We've got plenty of time.</span> <span class="say">There's plenty to do in this city.</span></p>
<p><b>much в утверждениях</b> звучит книжно или странно. В разговоре — <b>a lot</b>:</p>
<table>
<tr><th>Утверждение</th><th>Вопрос / отрицание</th></tr>
<tr><td><span class="say">We spent a lot of money.</span></td><td><span class="say">We didn't spend much money.</span></td></tr>
<tr><td><span class="say">I play a lot.</span></td><td><span class="say">Do you play much?</span></td></tr>
</table>
<p>Но с <b>too / so / as</b> much нормально и в утверждении: <span class="say">I spend too much time on my phone.</span> А <b>many</b> хорош везде; особенно устойчиво <b>many years</b>: <span class="say">We've been friends for many years.</span></p>
<p><b>little / few</b> без a — «мало, почти нет», акцент на <b>нехватке</b>. <b>a little / a few</b> — «немного, но есть», акцент на том, что <b>хватает</b>:</p>
<ul class="g-list">
<li><span class="say">He speaks little English, so we used a translator.</span> — Он почти не говорит по-английски.</li>
<li><span class="say">He speaks a little English, so we managed to talk.</span> — Он немного говорит, и мы смогли пообщаться.</li>
<li><span class="say">Few people finished the game — it's really hard.</span> — Мало кто прошёл игру.</li>
<li><span class="say">A few people finished it in one day.</span> — Несколько человек прошли её за день.</li>
<li><span class="say">She has very little free time these days.</span> — У неё сейчас очень мало свободного времени.</li>
</ul>
<p>После <b>only</b> — всегда с a: <b>only a little</b>, <b>only a few</b> (не «only little»): <span class="say">There were only a few players online.</span></p>
<div class="g-bad">We spent much money on the trip. · We only have little time.</div>
<div class="g-good">We spent <b>a lot of</b> money on the trip. · We only have <b>a little</b> time.</div>
<div class="g-tip">Буква <b>a</b> — как стакан наполовину полон: <b>a few</b> friends — «есть друзья, и мне хорошо». Без a — наполовину пуст: <b>few</b> friends — «друзей почти нет».</div>
<div class="mini" data-q="The game is so hard that ___ people ever finish it." data-o="few|a few|little" data-a="0" data-why="Мало кто, почти никто (акцент на нехватке) + people (мн. число) → few."></div>
<div class="mini" data-q="Let's grab a coffee. We have ___ time before the meeting." data-o="little|a little|a few" data-a="1" data-why="Время есть, хватит на кофе → a little (time — неисчисляемое)."></div>`
      },
      {
        title: '5. Most people или most of the people',
        html: `
<div class="g-idea"><b>Без of</b> — говорим <b>вообще</b>: most people, some games. <b>С of</b> — о <b>конкретной</b> группе: most of the people in my team, some of these games. После of обязательно <b>the / my / these / them</b>.</div>
<div class="g-formula"><span class="g-part">all / most / some / any / none / many / few…</span><span class="g-plus">+</span><span class="g-part g-v">of</span><span class="g-plus">+</span><span class="g-part">the / my / these / it / them…</span></div>
<table>
<tr><th>Вообще</th><th>Конкретная группа</th></tr>
<tr><td><span class="say">Most people like pizza.</span></td><td><span class="say">Most of the people at the party were designers.</span></td></tr>
<tr><td><span class="say">Some games are too long.</span></td><td><span class="say">Some of these games are too long.</span></td></tr>
<tr><td><span class="say">All cats hate baths.</span></td><td><span class="say">All (of) my cats hate baths.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I was sick, so I spent most of the day in bed.</span> — Большую часть дня провалялся в кровати.</li>
<li><span class="say">Have you played any of these games?</span> — Ты играл в какую-нибудь из этих игр?</li>
<li><span class="say">None of this code is mine.</span> — Ни строчки этого кода не моё.</li>
</ul>
<p><b>all и half</b> — of можно не ставить перед the / my / this: <span class="say">all my friends</span> = <span class="say">all of my friends</span>, <span class="say">half this pizza</span> = <span class="say">half of this pizza</span>.</p>
<p>Но перед <b>it / us / you / them</b> of <b>обязателен</b>:</p>
<ul class="g-list">
<li><span class="say">All of us were late.</span> <span class="muted">(не all us)</span></li>
<li><span class="say">I've only read half of it.</span> <span class="muted">(не half it)</span></li>
<li><span class="say">Do any of you want to join the stream?</span> — Кто-нибудь из вас хочет присоединиться к стриму?</li>
<li><span class="say">Do you like their new album? — Some of it. Not all of it.</span></li>
</ul>
<p>Можно и <b>без существительного</b>, когда понятно, о чём речь: <span class="say">A few shops were open, but most were closed.</span> <span class="say">Half is mine, half is yours.</span> <span class="muted">(не the half)</span></p>
<div class="g-bad">Most of people play on phones. · I spend most of time at home.</div>
<div class="g-good"><b>Most people</b> play on phones. · I spend <b>most of the time</b> at home.</div>
<div class="mini" data-q="___ my colleagues work from home on Fridays." data-o="Most of|Most|Most of the" data-a="0" data-why="Конкретная группа (my colleagues) → most of + my."></div>`
      },
      {
        title: '6. Both, either, neither — когда их ровно двое',
        html: `
<div class="g-idea"><b>both</b> — оба, <b>either</b> — любой из двух (один или другой), <b>neither</b> — ни тот ни другой. Только когда выбор из <b>двух</b>.</div>
<table>
<tr><th>Как</th><th>Пример</th></tr>
<tr><td>both + мн. число</td><td><span class="say">Both cafés are good.</span> <span class="muted">(не the both)</span></td></tr>
<tr><td>either / neither + <b>ед. число</b></td><td><span class="say">Neither option is perfect.</span> <span class="say">We can go to either café.</span></td></tr>
<tr><td>… of + the / these / them</td><td><span class="say">Neither of the cafés was open.</span></td></tr>
<tr><td>одни, без существительного</td><td><span class="say">Tea or coffee? — Either. I don't mind.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Which do you prefer, Mac or PC? — Honestly, I like both.</span></li>
<li><span class="say">Is she Spanish or Italian? — Neither. She's Brazilian.</span></li>
<li><span class="say">I haven't played either of these games.</span> — Я не играл ни в одну из этих двух игр.</li>
<li><span class="say">Can either of you help me with this layout?</span> — Кто-нибудь из вас двоих может помочь?</li>
</ul>
<p><b>both of</b> или просто <b>both</b> перед the/my/these — оба варианта верны: <span class="say">Both (of) my brothers are gamers.</span> А вот перед <b>us / you / them</b> — только <b>both of</b>: <span class="say">Both of us were exhausted.</span></p>
<p>После <b>neither of</b> глагол бывает в ед. или мн. числе: <span class="say">Neither of them is at home.</span> = <span class="say">Neither of them are at home.</span> Но второе отрицание не нужно — neither уже «ни»:</p>
<div class="g-bad">Neither of them didn't know the answer.</div>
<div class="g-good">Neither of them <b>knew</b> the answer.</div>
<p><b>Пары-связки:</b></p>
<ul class="g-list">
<li><span class="say">Both Max and Liza were late.</span> — И Макс, и Лиза опоздали.</li>
<li><span class="say">Neither Max nor Liza came.</span> — Ни Макс, ни Лиза не пришли.</li>
<li><span class="say">I was both tired and hungry.</span> — Я был и уставшим, и голодным.</li>
<li><span class="say">She's either in a meeting or at lunch.</span> — Она либо на встрече, либо на обеде.</li>
<li><span class="say">Either you fix the bug, or I roll back the update.</span> — Либо ты чинишь баг, либо я откатываю обновление.</li>
</ul>
<p><b>Двое или больше:</b></p>
<table>
<tr><th>Двое</th><th>Больше двух</th></tr>
<tr><td><span class="say">You can use either of them.</span></td><td><span class="say">You can use any of them.</span></td></tr>
<tr><td><span class="say">Neither of them worked.</span></td><td><span class="say">None of them worked.</span></td></tr>
<tr><td><span class="say">Both of them were broken.</span></td><td><span class="say">All of them were broken.</span></td></tr>
</table>
<div class="mini" data-q="I have two monitors, but ___ of them works properly." data-o="neither|none|either" data-a="0" data-why="Их двое, и ни один → neither (глагол без not)."></div>
<div class="mini" data-q="We tried five restaurants. ___ of them had a free table." data-o="Neither|None|Either" data-a="1" data-why="Больше двух → none."></div>`
      },
      {
        title: '7. All, every, whole, each',
        html: `
<div class="g-idea"><b>all</b> — «все, всё» (с существительным), <b>everybody / everything</b> — «все, всё» (отдельно), <b>whole</b> — «целый», <b>every</b> — «каждый (как часть всех)», <b>each</b> — «каждый (по отдельности)».</div>
<p><b>everybody, everything, а не all</b>. Отдельное all в значении «все люди / всё» почти не используют:</p>
<div class="g-bad">All were happy. · He thinks he knows all.</div>
<div class="g-good"><b>Everybody</b> was happy. · He thinks he knows <b>everything</b>.</div>
<p>Но есть устойчивые конструкции с all: <span class="say">He knows all about fonts.</span> — Он знает всё о шрифтах. <span class="say">All I need is a good night's sleep.</span> — Всё, что мне нужно, — это выспаться. <span class="muted">(all = единственное, что)</span></p>
<p><b>whole</b> — «целый, весь от начала до конца». Ставится после <b>the / my / a</b> и с исчисляемыми в ед. числе. С неисчисляемыми — <b>all</b>:</p>
<table>
<tr><th>whole (исчисл., ед. ч.)</th><th>all (неисчисл.)</th></tr>
<tr><td><span class="say">I watched the whole season.</span></td><td><span class="say">I spent all the money.</span></td></tr>
<tr><td><span class="say">He ate a whole pizza.</span></td><td><span class="say">Read all the information.</span></td></tr>
</table>
<p><b>every day</b> или <b>all day</b>:</p>
<ul class="g-list">
<li><span class="say">I play every day.</span> — Я играю каждый день. <span class="muted">(как часто)</span></li>
<li><span class="say">I played all day.</span> = <span class="say">I played the whole day.</span> — Я играл весь день. <span class="muted">(не all the day)</span></li>
<li><span class="say">There's a train every fifteen minutes.</span> — Поезд каждые 15 минут.</li>
<li><span class="say">They're online all the time.</span> — Они всё время онлайн. / <span class="say">Every time I call, he's busy.</span> — Каждый раз, когда я звоню…</li>
</ul>
<p><b>every, everybody</b> — единственное число глагола, но потом <b>they / their</b>: <span class="say">Every seat was taken.</span> <span class="say">Everybody has arrived.</span> <span class="say">Everybody said they had a great time.</span></p>
<p><b>each</b> или <b>every</b>:</p>
<table>
<tr><th>each</th><th>every</th></tr>
<tr><td>по одному, отдельно</td><td>все вместе, как all</td></tr>
<tr><td>скорее небольшое число</td><td>скорее большое число</td></tr>
<tr><td>можно про <b>двоих</b></td><td>не про двоих</td></tr>
<tr><td>—</td><td>как часто: every day</td></tr>
<tr><td>each of the…, each one, each (одно)</td><td>every one of… (не every of)</td></tr>
</table>
<ul class="g-list">
<li><span class="say">Check each screen carefully before the release.</span> — Проверьте каждый экран по отдельности.</li>
<li><span class="say">In chess, each player has sixteen pieces.</span> — Игроков двое → each.</li>
<li><span class="say">I want to visit every country in Europe.</span> — Все страны.</li>
<li><span class="say">The rooms are all different. Each is unique.</span> / <span class="say">Each of them has its own style.</span></li>
<li><span class="say">Have you seen all her films? — Yes, every one of them.</span> <span class="muted">(не every of them)</span></li>
<li><span class="say">The stickers are three dollars each.</span> — По три доллара за штуку.</li>
<li><span class="say">The players were each given a bonus.</span> — Каждому игроку дали бонус.</li>
</ul>
<p><b>everyone</b> (слитно) — только люди, = everybody. <b>every one</b> (раздельно) — «каждый из них», про людей и вещи: <span class="say">She gets invited to lots of parties and goes to every one.</span></p>
<div class="mini" data-q="I didn't leave the house. I worked on the project ___." data-o="every day|all day|all the day" data-a="1" data-why="Весь день от начала до конца → all day (без the) или the whole day."></div>
<div class="mini" data-q="In a football match, ___ team has eleven players." data-o="each|every|all" data-a="0" data-why="Команд две → только each."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">He left without saying something.</div><div class="g-good">He left without saying <b>anything</b>.</div>
<div class="g-bad">I didn't say nothing.</div><div class="g-good">I said <b>nothing</b>. / I didn't say <b>anything</b>.</div>
<div class="g-bad">There are none tickets. · No of them came.</div><div class="g-good">There are <b>no</b> tickets. · <b>None</b> of them came.</div>
<div class="g-bad">We spent much money. · We only have little time.</div><div class="g-good">We spent <b>a lot of</b> money. · We only have <b>a little</b> time.</div>
<div class="g-bad">Most of people · all us</div><div class="g-good"><b>Most people</b> · <b>all of us</b></div>
<div class="g-bad">The both cafés are good. · Neither of them didn't come.</div><div class="g-good"><b>Both</b> cafés are good. · Neither of them <b>came</b>.</div>
<div class="g-bad">All were happy. · I read the whole information.</div><div class="g-good"><b>Everybody</b> was happy. · I read <b>all the</b> information.</div>
<div class="g-bad">I played all the day. · I've seen every of her films.</div><div class="g-good">I played <b>all day</b>. · I've seen <b>every one</b> of her films.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>some</b> — есть, предлагаю · <b>any</b> — неизвестно или «любой» · <b>no</b> + сущ., <b>none</b> отдельно · <b>a little / a few</b> — хватает, <b>little / few</b> — мало · <b>most of the…</b> · двое: <b>both / either / neither</b> · <b>all day</b> ≠ <b>every day</b> · <b>each</b> — по одному, <b>every</b> — все.</div>`
      }
    ],
    words: [
      ["plenty of", "много, с запасом", "Relax, we've got plenty of time.", "Расслабься, у нас полно времени."],
      ["amount", "количество, сумма", "I spend a huge amount of time in Figma.", "Я провожу огромное количество времени в Figma."],
      ["hardly any", "почти нет, почти никакой", "There's hardly any milk left.", "Молока почти не осталось."],
      ["whole", "целый, весь", "I watched the whole season in one night.", "Я посмотрел весь сезон за одну ночь."],
      ["entire", "весь, целый", "The entire team worked on the weekend.", "Вся команда работала в выходные."],
      ["either", "любой из двух; тоже не", "Tea or coffee? — Either. I don't mind.", "Чай или кофе? — Любое. Мне всё равно."],
      ["neither", "ни один из двух", "Neither option is perfect.", "Ни один из двух вариантов не идеален."],
      ["none", "ни один, нисколько", "None of my friends play chess.", "Никто из моих друзей не играет в шахматы."],
      ["each", "каждый (по отдельности)", "Each player gets three cards.", "Каждый игрок получает три карты."],
      ["every time", "каждый раз", "Every time I start the game, it crashes.", "Каждый раз, когда я запускаю игру, она вылетает."],
      ["nowhere", "нигде, никуда", "Where are you going? — Nowhere.", "Куда идёшь? — Никуда."],
      ["anywhere", "где угодно, куда угодно", "We can go anywhere you like.", "Можем пойти куда хочешь."],
      ["luggage", "багаж", "How much luggage do you have?", "Сколько у тебя багажа?"],
      ["spare", "свободный, запасной", "I have very little spare time.", "У меня очень мало свободного времени."],
      ["available", "доступный, свободный", "None of the rooms are available.", "Ни один номер не свободен."],
      ["sold out", "распроданный", "All the tickets are sold out.", "Все билеты распроданы."],
      ["option", "вариант, опция", "We have two options, and both are good.", "У нас два варианта, и оба хорошие."],
      ["choice", "выбор", "You have no choice.", "У тебя нет выбора."],
      ["reward", "награда", "Each quest has its own reward.", "У каждого квеста своя награда."],
      ["loot", "добыча, лут", "The loot was amazing.", "Лут был потрясающий."],
      ["raid", "рейд", "Most of us had never done this raid.", "Большинство из нас никогда не проходили этот рейд."],
      ["attempt", "попытка", "We beat the boss on the tenth attempt.", "Мы победили босса с десятой попытки."],
      ["fail", "провалиться, не суметь", "Hardly anybody fails this test.", "Почти никто не проваливает этот тест."],
      ["guest", "гость", "Every guest brought some food.", "Каждый гость принёс какую-нибудь еду."],
      ["suitable", "подходящий", "None of these fonts are suitable for a kids' app.", "Ни один из этих шрифтов не подходит для детского приложения."],
      ["I don't mind", "мне всё равно, я не против", "Either restaurant is fine. I don't mind.", "Любой из двух ресторанов подойдёт. Мне всё равно."],
      ["half", "половина", "I've only read half of it.", "Я прочитал только половину."],
      ["share", "делить(ся); доля", "We shared the loot between all of us.", "Мы поделили лут между всеми."],
      ["per", "за, в (на единицу)", "It costs sixty dollars per night.", "Это стоит шестьдесят долларов за ночь."],
      ["cause", "причинять; причина", "Sorry for any trouble we caused.", "Простите за доставленные неудобства."]
    ],
    texts: [
      {
        id: 't-b1-20-1', title: 'Raid night', level: 'B1',
        text: `Every Thursday at nine, six of us meet online for raid night. We've played together for almost two years, and each of us has a different role. Both of our healers are students, most of the damage dealers work in IT, and our tank, Vera, is a nurse who is always tired but never late.

Last Thursday was a disaster from the very beginning. None of us had played the new raid before, and hardly anybody had read the guide. Vera said, "It's OK. We've got plenty of time. Let's just try." So we tried. The first attempt lasted about forty seconds. The second lasted a little longer.

The problem was the last boss. Every time he raised his sword, the whole floor turned red, and we had very little time to run. Neither of our healers could save everyone. After ten attempts we had spent all our potions and most of our gold. Nobody said anything for a minute. Then Max, who hardly ever speaks, asked, "Any ideas?"

Actually, there was one. I had watched a few videos on the way home from work, and I remembered a small detail: the boss is weak for a few seconds after each attack. If all of us hit him at the same time, we had a chance. Either it would work, or we would go to bed.

It worked. Not perfectly — two of us died — but the boss fell, and the loot was amazing. Each player got a rare item, and there was enough gold for all of us to repair our gear.

We finished at one in the morning. Everybody said they were exhausted, but nobody wanted to log off. "Same time next week?" Vera asked. "Of course," we all answered. Some things never change.`,
        questions: [
          { q: 'What happened every time the boss raised his sword?', o: ['He became weak', 'The whole floor turned red', 'The healers died'], a: 1 },
          { q: 'Where did the author get the idea?', o: ['From a few videos', 'From Vera', 'From the guide'], a: 0 },
          { q: 'What did each player get?', o: ['Some potions', 'A new role', 'A rare item'], a: 2 }
        ]
      },
      {
        id: 't-b1-20-2', title: 'The lake or the city?', level: 'B1',
        text: `Liza: OK, the long weekend. We have two options: the cabin by the lake or the flat in St Petersburg.
Max: Honestly? I like both. Either is fine with me.
Liza: That's not helpful! Neither of us can decide, and we need to book today.
Max: Fine. What's the difference?
Liza: The cabin has no Wi-Fi and hardly any phone signal. There's a lake, a forest and a sauna. That's all.
Max: No Wi-Fi at all? So I can't use my laptop.
Liza: Exactly. There'll be nothing to do with it. Which is the idea, actually. You work every day, even at weekends.
Max: Not every day. Most days, maybe. And the flat?
Liza: The flat is small, but it's right in the centre. There are plenty of museums and cafés nearby, and most of them are open late. The only problem is the price. It's a hundred and twenty dollars per night, and the cabin is sixty.
Max: A hundred and twenty for both of us, or each?
Liza: For the whole flat. So sixty each.
Max: That's not bad. But in the city we'd spend a lot of money on food and tickets.
Liza: True. In the cabin we'd spend very little. We could take some food with us and cook.
Max: You mean I could cook.
Liza: You're the one who likes cooking. So?
Max: Is there any chance the cabin is free next month too?
Liza: I checked. None of the weekends in October are available. Only this one.
Max: Then let's go to the lake now and to the city in winter. You can visit a city at any time of year.
Liza: Deal! I'll book it right now. And Max — leave your laptop at home.
Max: All of it?
Liza: The whole thing. Every single cable.`,
        questions: [
          { q: 'What is the problem with the cabin for Max?', o: ['It is too expensive', 'There is no Wi-Fi', 'It is far from the lake'], a: 1 },
          { q: 'How much will each of them pay per night for the flat?', o: ['Sixty dollars', 'A hundred and twenty dollars', 'Thirty dollars'], a: 0 },
          { q: 'When are they going to the city?', o: ['This weekend', 'In October', 'In winter'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'Would you like ___ coffee? I\'ve just made some.', o: ['some', 'any', 'no'], a: 0, why: 'Предлагаем, и кофе точно есть → some даже в вопросе.' },
      { t: 'choice', q: 'You can message me ___ time — I\'m always online.', o: ['some', 'any', 'every'], a: 1, why: 'any time = в любое время, неважно когда.' },
      { t: 'choice', q: 'There were ___ tickets left, so we watched the concert online.', o: ['no', 'none', 'any'], a: 0, why: 'Перед существительным — no; none ставится без существительного.' },
      { t: 'choice', q: 'What did you tell him? — ___', o: ['I didn\'t say nothing.', 'I said nothing.', 'I not said anything.'], a: 1, why: 'Одно отрицание: said nothing = didn\'t say anything.' },
      { t: 'choice', q: 'Hurry up! We only have ___ time before the train.', o: ['little', 'a little', 'a few'], a: 1, why: 'После only — a little; time неисчисляемое, поэтому не few.' },
      { t: 'choice', q: 'I asked two colleagues, but ___ of them knew the password.', o: ['neither', 'none', 'either'], a: 0, why: 'Их двое, и ни один → neither (глагол без not).' },
      { t: 'choice', q: 'He was so hungry that he ate ___ pizza by himself.', o: ['all', 'the whole', 'every'], a: 1, why: 'Целая одна пицца → the whole + исчисляемое в ед. числе.' },
      { t: 'choice', q: 'We have a team call ___ morning at ten.', o: ['all', 'every', 'whole'], a: 1, why: 'Как часто → every.' },
      { t: 'gap', q: '___ of my friends play this game — almost all of them. (most)', a: ['Most', 'most'], why: 'Конкретная группа (my friends) → most of.' },
      { t: 'gap', q: 'It\'s a really easy level. ___ can pass it. (кто угодно)', a: ['Anybody', 'Anyone', 'anybody', 'anyone'], why: 'any- = «кто угодно, любой».' },
      { t: 'gap', q: 'Hardly ___ came to the meetup — maybe five people. (any-)', a: ['anybody', 'anyone'], why: 'hardly уже значит «почти не» → any-, а не no-.' },
      { t: 'gap', q: 'I\'ve read every ___ of her books — all six.', a: ['one'], why: 'every one of…, но не every of.' },
      { t: 'gap', q: 'These stickers are two dollars ___. (за штуку)', a: ['each'], why: 'Цена за одну вещь → each в конце.' },
      { t: 'gap', q: 'Everybody said ___ enjoyed the stream. (они)', a: ['they'], why: 'После everybody/somebody говорим they/their.' },
      { t: 'order', a: 'Neither of them knows the answer', ru: 'Ни один из них (двоих) не знает ответа.' },
      { t: 'order', a: 'Let me know if you need anything', ru: 'Дай знать, если тебе что-нибудь понадобится.' },
      { t: 'tr', q: 'Ни один из нас не был готов.', a: ['none of us was ready', 'none of us were ready'] },
      { t: 'tr', q: 'Оба варианта хорошие.', a: ['both options are good', 'both of the options are good', 'both the options are good', 'both of these options are good', 'both these options are good', 'both variants are good'] },
      { t: 'listen', say: 'Either is fine with me', a: ['either is fine with me'] },
      { t: 'listen', say: 'All I need is a coffee', a: ['all i need is a coffee'] }
    ],
    test: [
      { t: 'choice', q: 'If you have ___ questions, write them in the chat.', o: ['any', 'some', 'no'], a: 0, why: 'После if — any: мы не знаем, будут ли вопросы.' },
      { t: 'choice', q: 'He left the room without saying ___.', o: ['anything', 'something', 'nothing'], a: 0, why: 'without уже отрицание → any-.' },
      { t: 'choice', q: 'Our new colleague speaks ___ Russian, so we talk in English.', o: ['little', 'a little', 'few'], a: 0, why: 'little = почти не говорит (нехватка), поэтому переходим на английский.' },
      { t: 'choice', q: 'We spent ___ money on the trip. It was expensive.', o: ['a lot of', 'much', 'many'], a: 0, why: 'В утверждении much звучит неестественно → a lot of.' },
      { t: 'gap', q: 'I tried both keys, but ___ of them opened the door. (neither / none)', a: ['neither'], why: 'Ключей два → neither; none — когда больше двух.' },
      { t: 'choice', q: 'We called five hotels. ___ of them had a free room.', o: ['Neither', 'None', 'No'], a: 1, why: 'Больше двух → none of.' },
      { t: 'choice', q: '___ Max and Liza were late for the stream.', o: ['Both', 'Either', 'Neither'], a: 0, why: 'both … and — «и…, и…»; neither требовал бы nor.' },
      { t: 'choice', q: 'I spend ___ in Figma these days.', o: ['most of the time', 'most of time', 'the most time'], a: 0, why: 'most of + the/my/…: most of the time.' },
      { t: 'choice', q: 'I spent ___ trying to beat this boss. I didn\'t even eat.', o: ['all day', 'all the day', 'every day'], a: 0, why: 'Весь день целиком → all day (без the).' },
      { t: 'choice', q: '___ time I start the game, it crashes.', o: ['All', 'Every', 'Whole'], a: 1, why: '«Каждый раз» → every time.' },
      { t: 'choice', q: 'Did you read ___ information in the email?', o: ['the whole', 'all the', 'every'], a: 1, why: 'information неисчисляемое → all the, а не the whole.' },
      { t: 'choice', q: 'In chess, ___ player has sixteen pieces.', o: ['each', 'every', 'all'], a: 0, why: 'Игроков двое → только each.' }
    ]
  }
);
