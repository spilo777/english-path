// Юниты A1-5 и A1-6. Подключать после course.js.

COURSE.units.push(
    // ───────────────────────────── UNIT 5 ─────────────────────────────
    {
      id: 'a1-5', level: 'A1', num: 5, track: 'main',
      title: 'I am working — Present Continuous',
      summary: 'Как сказать, что происходит прямо сейчас. Разница между «сейчас» и «обычно». Одежда и погода.',
      grammar: [
        {
          title: 'Что происходит прямо сейчас',
          html: `
<p>В русском «Я работаю» может значить и «вообще работаю», и «работаю прямо сейчас». В английском это <b>два разных времени</b>. Для «прямо сейчас, в этот момент» нужен <b>Present Continuous</b>.</p>
<p>Формула: <b>am / is / are + глагол с -ing</b>.</p>
<table>
<tr><th>Кто</th><th>Пример</th></tr>
<tr><td>I</td><td><span class="say">I am working.</span> → <span class="say">I'm working.</span></td></tr>
<tr><td>he / she / it</td><td><span class="say">She is reading.</span> → <span class="say">She's reading.</span></td></tr>
<tr><td>you / we / they</td><td><span class="say">They are playing.</span> → <span class="say">They're playing.</span></td></tr>
</table>
<p class="tip">Частая ошибка — забыть am/is/are: <s>I working</s>. Нужны <b>обе части</b>: I<b>'m</b> work<b>ing</b>.</p>`
        },
        {
          title: 'Как пишется -ing',
          html: `
<table>
<tr><th>Правило</th><th>Пример</th></tr>
<tr><td>Обычно + ing</td><td>work → <span class="say">working</span>, play → <span class="say">playing</span></td></tr>
<tr><td>Немая -e на конце исчезает</td><td>write → <span class="say">writing</span>, make → <span class="say">making</span></td></tr>
<tr><td>Короткое слово: гласная + согласная → согласная удваивается</td><td>sit → <span class="say">sitting</span>, run → <span class="say">running</span>, stop → <span class="say">stopping</span></td></tr>
<tr><td>-ie → -ying</td><td>lie → <span class="say">lying</span></td></tr>
</table>`
        },
        {
          title: 'Отрицание и вопрос',
          html: `
<p>Всё как с be из юнитов 1–2: <b>not</b> после am/is/are, в вопросе am/is/are идёт вперёд. Помощник do <b>не нужен</b>.</p>
<table>
<tr><th>Отрицание</th><th>Вопрос</th></tr>
<tr><td><span class="say">I'm not sleeping.</span></td><td><span class="say">Are you sleeping?</span> — <span class="say">No, I'm not.</span></td></tr>
<tr><td><span class="say">He isn't working.</span></td><td><span class="say">Is he working?</span> — <span class="say">Yes, he is.</span></td></tr>
<tr><td><span class="say">They aren't playing.</span></td><td><span class="say">What are they doing?</span></td></tr>
</table>
<p><span class="say">What are you doing?</span> — «Что ты делаешь (сейчас)?» — одна из самых частых фраз в чатах и играх.</p>`
        },
        {
          title: 'Сейчас или обычно?',
          html: `
<table>
<tr><th>Present Simple — обычно</th><th>Present Continuous — сейчас</th></tr>
<tr><td><span class="say">I work from home.</span><br>Я (вообще) работаю из дома.</td><td><span class="say">I'm working now.</span><br>Я сейчас работаю.</td></tr>
<tr><td><span class="say">She usually wears jeans.</span></td><td><span class="say">Today she's wearing a dress.</span></td></tr>
<tr><td>every day, usually, often, never, on Monday</td><td>now, right now, at the moment, today, Look! Listen!</td></tr>
</table>
<p class="tip">Некоторые глаголы почти никогда не бывают с -ing: <b>like, love, want, need, know, understand</b>. Это состояния, а не действия. Говорим <span class="say">I want a coffee now.</span>, а не <s>I'm wanting</s>.</p>`
        },
        {
          title: 'Погода',
          html: `
<p>О погоде говорим через <b>it</b>: <span class="say">It's cold.</span> <span class="say">It's sunny.</span></p>
<p>Дождь и снег, которые идут <i>сейчас</i> — Present Continuous: <span class="say">It's raining.</span> <span class="say">It's snowing.</span></p>
<p>Вопрос: <span class="say">What's the weather like?</span> — Какая погода?</p>`
        }
      ],
      words: [
        ['now', 'сейчас', 'I am busy now.', 'Я сейчас занят.'],
        ['right now', 'прямо сейчас', 'She is sleeping right now.', 'Она прямо сейчас спит.'],
        ['at the moment', 'в данный момент', 'He is not working at the moment.', 'Он сейчас не работает.'],
        ['today', 'сегодня', 'Today I am working from home.', 'Сегодня я работаю из дома.'],
        ['look', 'смотреть; смотри!', 'Look! It\'s snowing!', 'Смотри! Идёт снег!'],
        ['wait', 'ждать', 'I am waiting for you.', 'Я жду тебя.'],
        ['sit', 'сидеть', 'We are sitting in a café.', 'Мы сидим в кафе.'],
        ['stand', 'стоять', 'Why are you standing there?', 'Почему ты там стоишь?'],
        ['write', 'писать', 'She is writing a message.', 'Она пишет сообщение.'],
        ['talk', 'разговаривать', 'Who are you talking to?', 'С кем ты разговариваешь?'],
        ['call', 'звонить; звонок', 'Anna is calling you.', 'Анна тебе звонит.'],
        ['cook', 'готовить (еду)', 'Tom is cooking dinner.', 'Том готовит ужин.'],
        ['make', 'делать, создавать', 'Max is making a new design.', 'Макс делает новый дизайн.'],
        ['message', 'сообщение', 'I am writing a message.', 'Я пишу сообщение.'],
        ['busy', 'занятой', 'Sorry, I\'m busy now.', 'Извини, я сейчас занят.'],
        ['wear', 'носить, быть одетым в', 'She is wearing a red dress.', 'На ней красное платье.'],
        ['clothes', 'одежда', 'These clothes are new.', 'Эта одежда новая.'],
        ['T-shirt', 'футболка', 'He usually wears a T-shirt.', 'Он обычно носит футболку.'],
        ['jeans', 'джинсы', 'I am wearing jeans.', 'Я в джинсах.'],
        ['jacket', 'куртка, пиджак', 'Take your jacket. It\'s cold.', 'Возьми куртку. Холодно.'],
        ['coat', 'пальто', 'Where is my coat?', 'Где моё пальто?'],
        ['shoes', 'обувь, туфли', 'These shoes are expensive.', 'Эти туфли дорогие.'],
        ['hat', 'шапка, шляпа', 'He is wearing a black hat.', 'На нём чёрная шапка.'],
        ['dress', 'платье', 'I like your dress!', 'Мне нравится твоё платье!'],
        ['weather', 'погода', 'What\'s the weather like?', 'Какая погода?'],
        ['rain', 'дождь; идёт дождь', 'It is raining again.', 'Опять идёт дождь.'],
        ['snow', 'снег; идёт снег', 'Look, it\'s snowing!', 'Смотри, идёт снег!'],
        ['sunny', 'солнечный', 'It is sunny today.', 'Сегодня солнечно.'],
        ['warm', 'тёплый', 'It is warm in the room.', 'В комнате тепло.'],
        ['window', 'окно', 'I am looking out of the window.', 'Я смотрю в окно.']
      ],
      texts: [
        {
          id: 't-a1-5-1', title: 'What are you doing?', level: 'A1',
          text: `Kate: Hi, Max! What are you doing?
Max: Hi! I'm working. I'm making a new design for a game.
Kate: At nine o'clock in the evening?
Max: Yes. I usually finish at six, but today I'm very busy.
Kate: Are you working at home?
Max: No, I'm not. I'm sitting in a café. My laptop is on the table, and I'm drinking tea.
Kate: Cool. I'm not working. I'm playing our game. The team is waiting for you!
Max: Sorry! Ten minutes, OK?
Kate: OK. We are waiting!`
        },
        {
          id: 't-a1-5-2', title: 'A rainy Saturday', level: 'A1',
          text: `It is Saturday. On Saturday Anna usually goes to the park. But today it is raining.
Anna is at home. She is sitting on a chair and looking out of the window. It is cold.
Her cat Luna is sleeping on the table. Tom is cooking in the kitchen. He is making breakfast.
Anna is wearing her old jeans and a big T-shirt. She isn't wearing shoes.
Anna's phone is ringing. Kate is calling!
"Hi, Anna! What are you doing?"
"I'm at home. I'm reading a book and waiting for breakfast. And you?"
"I'm in London. And it's sunny here!"`
        }
      ],
      practice: [
        { t: 'choice', q: 'I ___ working now.', o: ['am', 'is', 'are'], a: 0 },
        { t: 'choice', q: 'Look! The cat ___ on my laptop.', o: ['sleeps', 'is sleeping', 'sleeping'], a: 1 },
        { t: 'choice', q: 'Max ___ from home every day.', o: ['works', 'is working', 'working'], a: 0 },
        { t: 'choice', q: 'They ___ a film at the moment.', o: ['watch', 'watches', 'are watching'], a: 2 },
        { t: 'choice', q: 'I ___ a coffee now.', o: ['want', 'am wanting', 'wanting'], a: 0 },
        { t: 'gap', q: 'She is ___ a message. (write)', a: ['writing'] },
        { t: 'gap', q: 'We are ___ in a café. (sit)', a: ['sitting'] },
        { t: 'gap', q: 'Tom ___ cooking dinner.', a: ['is', '\'s'], hint: 'be' },
        { t: 'gap', q: 'Are you sleeping? — No, I\'m ___.', a: ['not'] },
        { t: 'gap', q: 'Look! It\'s ___! (идёт снег)', a: ['snowing'] },
        { t: 'order', a: 'What are you doing', ru: 'Что ты делаешь (сейчас)?' },
        { t: 'order', a: 'He is wearing a black jacket', ru: 'На нём чёрная куртка' },
        { t: 'tr', q: 'Я сейчас работаю.', a: ['i am working now', 'i\'m working now', 'i am working', 'i\'m working', 'now i am working', 'now i\'m working'] },
        { t: 'tr', q: 'Идёт дождь.', a: ['it is raining', 'it\'s raining'] },
        { t: 'tr', q: 'Она не спит.', a: ['she is not sleeping', 'she isn\'t sleeping', 'she\'s not sleeping'] },
        { t: 'listen', say: 'I am waiting for you', a: ['i am waiting for you', 'i\'m waiting for you'] }
      ],
      test: [
        { t: 'gap', q: 'They ___ playing games right now.', a: ['are', '\'re'], hint: 'be' },
        { t: 'gap', q: 'Max is ___ a new design. (make)', a: ['making'] },
        { t: 'gap', q: 'Why are you ___? (run)', a: ['running'] },
        { t: 'choice', q: 'She usually ___ jeans, but today she ___ a dress.', o: ['wears / is wearing', 'is wearing / wears', 'wear / wearing'], a: 0 },
        { t: 'choice', q: '___ he working at the moment?', o: ['Do', 'Does', 'Is'], a: 2 },
        { t: 'choice', q: 'I ___ this game.', o: ['like', 'am liking', 'liking'], a: 0 },
        { t: 'order', a: 'Anna is talking to Kate', ru: 'Анна разговаривает с Кейт' },
        { t: 'tr', q: 'Что ты делаешь?', a: ['what are you doing'] },
        { t: 'tr', q: 'Мы ждём тебя.', a: ['we are waiting for you', 'we\'re waiting for you'] },
        { t: 'tr', q: 'Сегодня солнечно.', a: ['it is sunny today', 'it\'s sunny today', 'today it is sunny', 'today it\'s sunny'] },
        { t: 'listen', say: 'What is the weather like?', a: ['what is the weather like', 'what\'s the weather like'] }
      ]
    },

    // ───────────────────────────── UNIT 6 ─────────────────────────────
    {
      id: 'a1-6', level: 'A1', num: 6, track: 'main',
      title: 'There is, there are — have got — some / any',
      summary: 'Как сказать «в комнате есть стол», «у меня есть кот», «есть немного молока». Дом, город, еда.',
      grammar: [
        {
          title: 'There is / there are — «есть, находится»',
          html: `
<p>Когда сообщаем, что <b>где-то что-то есть</b>, по-английски начинаем с <b>there is / there are</b>. Русское «В комнате стол» звучит как «Там есть стол в комнате».</p>
<table>
<tr><th>Русский</th><th>Английский</th></tr>
<tr><td>В комнате есть стол.</td><td><span class="say">There is a table in the room.</span></td></tr>
<tr><td>Рядом с моим домом парк.</td><td><span class="say">There's a park near my house.</span></td></tr>
<tr><td>В холодильнике два яйца.</td><td><span class="say">There are two eggs in the fridge.</span></td></tr>
</table>
<p><b>there is</b> (коротко <b>there's</b>) — один предмет, <b>there are</b> — много.</p>
<p class="tip">Не путайте: <span class="say">There is a café.</span> — «есть кафе» (новая информация), <span class="say">The café is there.</span> — «кафе вон там». Порядок слов в английском важен.</p>`
        },
        {
          title: 'Отрицание и вопрос с there',
          html: `
<table>
<tr><th></th><th>Один</th><th>Много</th></tr>
<tr><td>Отрицание</td><td><span class="say">There isn't a bank here.</span></td><td><span class="say">There aren't any shops here.</span></td></tr>
<tr><td>Вопрос</td><td><span class="say">Is there a café near here?</span></td><td><span class="say">Are there any eggs?</span></td></tr>
<tr><td>Ответ</td><td><span class="say">Yes, there is.</span> / <span class="say">No, there isn't.</span></td><td><span class="say">Yes, there are.</span> / <span class="say">No, there aren't.</span></td></tr>
</table>
<p>Сколько? — <span class="say">How many rooms are there?</span></p>`
        },
        {
          title: 'have got / has got — «у меня есть»',
          html: `
<p>В юните 3 было <b>I have a dog</b>. В британском английском очень часто говорят <b>have got</b> — смысл тот же: «у меня есть».</p>
<table>
<tr><th>Кто</th><th>Утверждение</th><th>Отрицание</th><th>Вопрос</th></tr>
<tr><td>I / you / we / they</td><td><span class="say">I've got a cat.</span></td><td><span class="say">I haven't got a car.</span></td><td><span class="say">Have you got a pen?</span></td></tr>
<tr><td>he / she / it</td><td><span class="say">She's got a new flat.</span></td><td><span class="say">He hasn't got a garden.</span></td><td><span class="say">Has she got a dog?</span></td></tr>
</table>
<p>Короткие ответы: <span class="say">Yes, I have.</span> / <span class="say">No, I haven't.</span> <span class="say">Yes, she has.</span> / <span class="say">No, she hasn't.</span></p>
<p class="tip">С have got помощник do <b>не нужен</b>: <s>Do you have got…</s> — ошибка. Либо <b>Have you got…?</b>, либо <b>Do you have…?</b> Не смешивайте. И <b>she's got</b> = she <b>has</b> got, а не she is.</p>`
        },
        {
          title: 'some / any — базово',
          html: `
<p><b>some</b> и <b>any</b> значат «немного, несколько, какие-то». Ставятся перед множественным числом и перед тем, что нельзя посчитать (milk, water, bread).</p>
<table>
<tr><th>Где</th><th>Слово</th><th>Пример</th></tr>
<tr><td>Утверждение</td><td><b>some</b></td><td><span class="say">There is some milk.</span> <span class="say">I've got some apples.</span></td></tr>
<tr><td>Отрицание</td><td><b>any</b></td><td><span class="say">There isn't any bread.</span> <span class="say">We haven't got any eggs.</span></td></tr>
<tr><td>Вопрос</td><td><b>any</b></td><td><span class="say">Are there any shops?</span> <span class="say">Have you got any water?</span></td></tr>
</table>
<p class="tip">Молоко, вода, хлеб, сыр — неисчисляемые: без a и без -s. <s>a milk</s>, <s>breads</s> — ошибки. Говорим <b>some milk</b>, <b>some bread</b>, и с ними <b>there is</b>, а не there are.</p>`
        },
        {
          title: 'Где? near, next to, opposite',
          html: `
<p><span class="say">near</span> — рядом, недалеко. <span class="say">next to</span> — прямо рядом, вплотную. <span class="say">opposite</span> — напротив.</p>
<p><span class="say">There's a café next to the bank.</span> <span class="say">The park is opposite my house.</span></p>`
        }
      ],
      words: [
        ['there is', 'есть, имеется (одно)', 'There is a park near here.', 'Здесь рядом есть парк.'],
        ['there are', 'есть, имеются (много)', 'There are three rooms in my flat.', 'В моей квартире три комнаты.'],
        ['have got', 'иметь, у меня есть', 'I\'ve got a new laptop.', 'У меня новый ноутбук.'],
        ['some', 'немного, несколько', 'There is some milk in the fridge.', 'В холодильнике есть немного молока.'],
        ['any', 'какой-нибудь (вопрос, отрицание)', 'Have you got any bread?', 'У тебя есть хлеб?'],
        ['flat', 'квартира', 'My flat is small but nice.', 'Моя квартира маленькая, но милая.'],
        ['kitchen', 'кухня', 'Tom is in the kitchen.', 'Том на кухне.'],
        ['bedroom', 'спальня', 'There are two bedrooms.', 'Здесь две спальни.'],
        ['bathroom', 'ванная', 'Where is the bathroom?', 'Где ванная?'],
        ['bed', 'кровать', 'The cat is on the bed.', 'Кот на кровати.'],
        ['sofa', 'диван', 'There is a big sofa in the room.', 'В комнате большой диван.'],
        ['fridge', 'холодильник', 'Is there any cheese in the fridge?', 'В холодильнике есть сыр?'],
        ['door', 'дверь', 'Close the door, please.', 'Закрой дверь, пожалуйста.'],
        ['garden', 'сад', 'Has your house got a garden?', 'У вашего дома есть сад?'],
        ['street', 'улица', 'There are a lot of cafés in this street.', 'На этой улице много кафе.'],
        ['shop', 'магазин', 'Is there a shop near here?', 'Здесь рядом есть магазин?'],
        ['supermarket', 'супермаркет', 'The supermarket is next to the station.', 'Супермаркет рядом с вокзалом.'],
        ['park', 'парк', 'We often walk in the park.', 'Мы часто гуляем в парке.'],
        ['café', 'кафе', 'There\'s a nice café opposite my office.', 'Напротив моего офиса хорошее кафе.'],
        ['restaurant', 'ресторан', 'This restaurant is expensive.', 'Этот ресторан дорогой.'],
        ['cinema', 'кинотеатр', 'Is there a cinema in your town?', 'В твоём городе есть кинотеатр?'],
        ['station', 'вокзал, станция', 'The station is near my house.', 'Станция недалеко от моего дома.'],
        ['near', 'рядом, недалеко', 'I live near the park.', 'Я живу рядом с парком.'],
        ['next to', 'рядом с, возле', 'The bank is next to the café.', 'Банк рядом с кафе.'],
        ['opposite', 'напротив', 'The shop is opposite the station.', 'Магазин напротив вокзала.'],
        ['bread', 'хлеб', 'There isn\'t any bread.', 'Хлеба нет.'],
        ['milk', 'молоко', 'I\'ve got some milk.', 'У меня есть немного молока.'],
        ['egg', 'яйцо', 'There are two eggs in the fridge.', 'В холодильнике два яйца.'],
        ['cheese', 'сыр', 'I love French cheese.', 'Обожаю французский сыр.'],
        ['water', 'вода', 'Have you got any water?', 'У тебя есть вода?'],
        ['vegetables', 'овощи', 'There are some vegetables on the table.', 'На столе есть овощи.'],
        ['a lot of', 'много', 'There are a lot of people here.', 'Здесь много людей.']
      ],
      texts: [
        {
          id: 't-a1-6-1', title: 'Max\'s new flat', level: 'A1',
          text: `Max has got a new flat. It is not big, but it is nice.
There are two rooms: a bedroom and a big room. There is a small kitchen and a bathroom.
In the big room there is a sofa and a big table. Max's laptop is on the table. There aren't any chairs!
The flat hasn't got a garden, but there is a park opposite the house.
There are a lot of cafés in the street. There is a supermarket next to the station, and the station is near.
Max is happy. He's got a new home, and he loves it.`
        },
        {
          id: 't-a1-6-2', title: 'Is there any milk?', level: 'A1',
          text: `Anna: Tom, I'm making breakfast. Is there any milk?
Tom: Yes, there is. There's some milk in the fridge.
Anna: Good. Are there any eggs?
Tom: There are two eggs. That's all.
Anna: Two eggs? And have we got any bread?
Tom: No, we haven't. There isn't any bread. And there isn't any cheese.
Anna: Oh no. Is there a shop near here?
Tom: Yes, there's a small shop opposite the park. It opens at eight.
Anna: It's seven o'clock now…
Tom: OK. I've got an idea. There's a café next to the station. Breakfast in the café?
Anna: Great idea!`
        }
      ],
      practice: [
        { t: 'choice', q: 'There ___ a sofa in the room.', o: ['is', 'are', 'am'], a: 0 },
        { t: 'choice', q: 'There ___ three bedrooms.', o: ['is', 'are', 'be'], a: 1 },
        { t: 'choice', q: '___ there a café near here?', o: ['Are', 'Is', 'Do'], a: 1 },
        { t: 'choice', q: 'She ___ got a dog.', o: ['have', 'has', 'is'], a: 1 },
        { t: 'choice', q: '___ you got a car?', o: ['Do', 'Have', 'Has'], a: 1 },
        { t: 'choice', q: 'There isn\'t ___ bread.', o: ['some', 'any', 'a'], a: 1 },
        { t: 'choice', q: 'There is ___ milk in the fridge.', o: ['some', 'any', 'a'], a: 0 },
        { t: 'gap', q: 'Are there any eggs? — Yes, there ___.', a: ['are'] },
        { t: 'gap', q: 'Has Max got a garden? — No, he ___.', a: ['hasn\'t', 'has not'] },
        { t: 'gap', q: 'I ___ got a new phone. (have)', a: ['have', '\'ve'] },
        { t: 'gap', q: 'The bank is ___ to the café. (рядом с)', a: ['next'] },
        { t: 'order', a: 'There is a park near my house', ru: 'Рядом с моим домом есть парк' },
        { t: 'order', a: 'Have you got any water', ru: 'У тебя есть вода?' },
        { t: 'tr', q: 'В комнате есть стол.', a: ['there is a table in the room', 'there\'s a table in the room', 'in the room there is a table', 'in the room there\'s a table'] },
        { t: 'tr', q: 'У меня есть кот.', a: ['i have got a cat', 'i\'ve got a cat', 'i have a cat'] },
        { t: 'listen', say: 'Is there a shop near here?', a: ['is there a shop near here'] }
      ],
      test: [
        { t: 'gap', q: 'There ___ a lot of people in the park.', a: ['are'] },
        { t: 'gap', q: 'Kate ___ got a new flat. (have)', a: ['has', '\'s'] },
        { t: 'gap', q: 'We haven\'t got ___ cheese.', a: ['any'] },
        { t: 'choice', q: 'Правильно:', o: ['Do you have got a pen?', 'Have you got a pen?', 'Are you got a pen?'], a: 1 },
        { t: 'choice', q: 'There ___ some bread on the table.', o: ['is', 'are', 'have'], a: 0 },
        { t: 'choice', q: 'opposite =', o: ['рядом', 'напротив', 'внутри'], a: 1 },
        { t: 'order', a: 'There are two eggs in the fridge', ru: 'В холодильнике два яйца' },
        { t: 'tr', q: 'Здесь нет магазинов.', a: ['there aren\'t any shops here', 'there are not any shops here', 'there are no shops here'] },
        { t: 'tr', q: 'У него нет машины.', a: ['he hasn\'t got a car', 'he has not got a car', 'he doesn\'t have a car', 'he does not have a car'] },
        { t: 'tr', q: 'Есть немного молока.', a: ['there is some milk', 'there\'s some milk'] },
        { t: 'listen', say: 'There is a café next to the station', a: ['there is a café next to the station', 'there is a cafe next to the station', 'there\'s a café next to the station', 'there\'s a cafe next to the station'] }
      ]
    }
);
