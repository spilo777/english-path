// Юниты A1-7 и A1-8. Подключать после course.js.

COURSE.units.push(
    // ───────────────────────────── UNIT 7 ─────────────────────────────
    {
      id: 'a1-7', level: 'A1', num: 7, track: 'main',
      title: 'I can, you can\'t — умения и возможность',
      summary: 'Как сказать «я умею плавать», «я не могу прийти» и попросить о помощи. Местоимения me/him/her и my/his/her.',
      grammar: [
        {
          title: 'can — «могу, умею»',
          html: `
<p><b>can</b> означает и «умею» (навык), и «могу» (есть возможность). После can идёт глагол <b>как в словаре</b>, без to и без -s.</p>
<table>
<tr><th>Кто</th><th>Утверждение</th><th>Отрицание</th></tr>
<tr><td>I / you / we / they</td><td><span class="say">I can swim.</span></td><td><span class="say">I can't swim.</span></td></tr>
<tr><td>he / she / it</td><td><span class="say">She can swim.</span></td><td><span class="say">She can't swim.</span></td></tr>
</table>
<p>Форма одна для всех: <b>can</b>. Никаких <s>cans</s>, никаких do/does.</p>
<p class="tip">Ловушки: <s>He cans play</s>, <s>I can to play</s>, <s>She can plays</s>. Правильно: <b>He can play.</b></p>
<p>can't = cannot (пишется слитно).</p>`
        },
        {
          title: 'Вопрос: Can в начале',
          html: `
<table>
<tr><th>Утверждение</th><th>Вопрос</th></tr>
<tr><td>You can drive.</td><td><span class="say">Can you drive?</span></td></tr>
<tr><td>He can cook.</td><td><span class="say">Can he cook?</span></td></tr>
</table>
<p>Короткие ответы: <span class="say">Yes, I can.</span> / <span class="say">No, I can't.</span></p>
<p>С вопросительным словом: <span class="say">What can you do?</span> — Что ты умеешь? <span class="say">Where can I buy it?</span> — Где я могу это купить?</p>`
        },
        {
          title: 'Просьбы и разрешение',
          html: `
<p><b>Can you…?</b> — вежливая просьба («Можешь…?»): <span class="say">Can you help me?</span> <span class="say">Can you repeat, please?</span></p>
<p><b>Can I…?</b> — просим разрешения («Можно мне…?»): <span class="say">Can I play?</span> <span class="say">Can I have a coffee, please?</span></p>
<p>Ответы: <span class="say">Sure!</span> / <span class="say">Of course.</span> / <span class="say">Sorry, I can't.</span></p>
<p>Насколько хорошо: <span class="say">I can swim very well.</span> <span class="say">I can cook a bit.</span> <span class="say">I can't dance at all.</span> (совсем не умею).</p>`
        },
        {
          title: 'Объектные местоимения: me, him, her…',
          html: `
<p>Когда человек не делает действие, а <b>получает</b> его (кого? кому? с кем?), местоимение меняется:</p>
<table>
<tr><th>Кто делает</th><th>Кого / кому</th><th>Пример</th></tr>
<tr><td>I</td><td><b>me</b></td><td><span class="say">Help me!</span></td></tr>
<tr><td>you</td><td><b>you</b></td><td><span class="say">I can see you.</span></td></tr>
<tr><td>he</td><td><b>him</b></td><td><span class="say">I know him.</span></td></tr>
<tr><td>she</td><td><b>her</b></td><td><span class="say">Call her.</span></td></tr>
<tr><td>it</td><td><b>it</b></td><td><span class="say">I like it.</span></td></tr>
<tr><td>we</td><td><b>us</b></td><td><span class="say">Play with us!</span></td></tr>
<tr><td>they</td><td><b>them</b></td><td><span class="say">I can't find them.</span></td></tr>
</table>
<p class="tip">По-русски «мне, меня, со мной» — разные слова, а в английском всё это одно <b>me</b>. И нельзя <s>Help I</s> или <s>with he</s>.</p>`
        },
        {
          title: 'Притяжательные: my, his, their…',
          html: `
<p>Чей? Ставим перед существительным:</p>
<table>
<tr><th>Кто</th><th>Чей</th><th>Пример</th></tr>
<tr><td>I</td><td><b>my</b></td><td><span class="say">my hobby</span></td></tr>
<tr><td>you</td><td><b>your</b></td><td><span class="say">your team</span></td></tr>
<tr><td>he</td><td><b>his</b></td><td><span class="say">his guitar</span></td></tr>
<tr><td>she</td><td><b>her</b></td><td><span class="say">her bike</span></td></tr>
<tr><td>it</td><td><b>its</b></td><td><span class="say">its name</span></td></tr>
<tr><td>we</td><td><b>our</b></td><td><span class="say">our game</span></td></tr>
<tr><td>they</td><td><b>their</b></td><td><span class="say">their house</span></td></tr>
</table>
<p class="tip">Русское «свой» переводится по хозяину: Он любит свою собаку — <b>He</b> loves <b>his</b> dog. Она любит свою собаку — <b>She</b> loves <b>her</b> dog. Слова «свой» в английском нет.</p>
<p><b>her</b> бывает и «её» (чья), и «её/ей» (кого): <span class="say">I like her.</span> <span class="say">I like her game.</span></p>`
        }
      ],
      words: [
        ['can', 'мочь, уметь', 'I can swim.', 'Я умею плавать.'],
        ['can\'t', 'не мочь, не уметь (cannot)', 'I can\'t come today.', 'Я не могу прийти сегодня.'],
        ['swim', 'плавать', 'Can you swim?', 'Ты умеешь плавать?'],
        ['dance', 'танцевать', 'She can dance very well.', 'Она очень хорошо танцует.'],
        ['sing', 'петь', 'I can\'t sing at all.', 'Я совсем не умею петь.'],
        ['draw', 'рисовать', 'He can draw cats.', 'Он умеет рисовать котов.'],
        ['cook', 'готовить (еду)', 'My dad can cook pizza.', 'Мой папа умеет готовить пиццу.'],
        ['drive', 'водить (машину)', 'Can your sister drive?', 'Твоя сестра умеет водить?'],
        ['ride a bike', 'кататься на велосипеде', 'Our son can ride a bike.', 'Наш сын умеет кататься на велосипеде.'],
        ['play the guitar', 'играть на гитаре', 'He can play the guitar.', 'Он умеет играть на гитаре.'],
        ['chess', 'шахматы', 'Can you play chess?', 'Ты умеешь играть в шахматы?'],
        ['football', 'футбол', 'They play football on Sunday.', 'Они играют в футбол в воскресенье.'],
        ['tennis', 'теннис', 'I can play tennis a bit.', 'Я немного умею играть в теннис.'],
        ['board game', 'настольная игра', 'We have a lot of board games.', 'У нас много настольных игр.'],
        ['hobby', 'хобби', 'My hobby is drawing.', 'Моё хобби — рисование.'],
        ['well', 'хорошо (как?)', 'You speak English well.', 'Ты хорошо говоришь по-английски.'],
        ['a bit', 'немного', 'I can speak English a bit.', 'Я немного говорю по-английски.'],
        ['at all', 'совсем (в отрицании)', 'He can\'t cook at all.', 'Он совсем не умеет готовить.'],
        ['fast', 'быстро; быстрый', 'She can run fast.', 'Она умеет быстро бегать.'],
        ['learn', 'учить, учиться', 'I want to learn to swim.', 'Я хочу научиться плавать.'],
        ['teach', 'учить (кого-то)', 'Can you teach me?', 'Можешь меня научить?'],
        ['repeat', 'повторять', 'Can you repeat, please?', 'Можете повторить, пожалуйста?'],
        ['sure', 'конечно', 'Can you help me? — Sure!', 'Поможешь мне? — Конечно!'],
        ['of course', 'конечно', 'Of course I can.', 'Конечно, могу.'],
        ['me', 'меня, мне, мной', 'Play with me!', 'Поиграй со мной!'],
        ['him', 'его, ему, им', 'I know him.', 'Я его знаю.'],
        ['her', 'её, ей; её (чья)', 'Call her. It\'s her phone.', 'Позвони ей. Это её телефон.'],
        ['us', 'нас, нам', 'Can you help us?', 'Можешь нам помочь?'],
        ['them', 'их, им', 'I like them.', 'Они мне нравятся.'],
        ['his', 'его (чей)', 'This is his bike.', 'Это его велосипед.'],
        ['our', 'наш', 'Our team is strong.', 'Наша команда сильная.'],
        ['their', 'их (чей)', 'Their house is big.', 'Их дом большой.']
      ],
      texts: [
        {
          id: 't-a1-7-1', title: 'Can you help me?', level: 'A1',
          text: `Max: Hi, Kate! Can you help me?
Kate: Sure! What is it?
Max: My brother and I are playing a new game. It's very hard. We can't find the key.
Kate: Oh, I know this game! Can I see your screen?
Max: Of course. Look.
Kate: OK. Can you see the old man near the house? Talk to him. He has the key.
Max: Him? I can't talk to him. He is always angry!
Kate: Give him an apple. Then he can help you.
Max: Wow, it works! Thank you! You can play really well.
Kate: I play a lot. Can you and your brother play with us on Saturday?
Max: Yes, we can! What time?
Kate: At eight. My friends Tom and Lisa play too. You know them.`
        },
        {
          id: 't-a1-7-2', title: 'Our hobbies', level: 'A1',
          text: `This is my family. We all have hobbies.
My dad can cook very well. His pizza is the best! He can't sing at all, but he sings every morning.
My mum is a teacher. She can play the guitar and she can dance. Her students love her.
My sister Lisa is ten. She can't swim, but she can ride a bike very fast. Her bike is red.
I can draw a bit, and I can play chess. My friends play chess with me every Friday.
Our grandparents live in a small town. Their house is near a river. They can swim in it every day in summer.
What can you do? What is your hobby?`
        }
      ],
      practice: [
        { t: 'choice', q: 'She ___ swim.', o: ['can', 'cans', 'can to'], a: 0 },
        { t: 'choice', q: 'He can ___ the guitar.', o: ['plays', 'play', 'to play'], a: 1 },
        { t: 'choice', q: '___ you drive?', o: ['Do', 'Are', 'Can'], a: 2 },
        { t: 'choice', q: 'Can you help ___?', o: ['I', 'me', 'my'], a: 1 },
        { t: 'choice', q: 'Tom is my friend. I play with ___ every day.', o: ['he', 'his', 'him'], a: 2 },
        { t: 'choice', q: 'Anna loves ___ cat.', o: ['her', 'his', 'she'], a: 0 },
        { t: 'choice', q: 'Они любят свой дом. They love ___ house.', o: ['our', 'their', 'them'], a: 1 },
        { t: 'gap', q: 'Can you swim? — Yes, I ___.', a: ['can'] },
        { t: 'gap', q: 'I ___ sing at all. (не умею)', a: ['can\'t', 'cannot'] },
        { t: 'gap', q: 'We are here! Can you see ___? (нас)', a: ['us'] },
        { t: 'gap', q: 'Max has a bike. ___ bike is blue. (его)', a: ['his'] },
        { t: 'order', a: 'Can you teach me', ru: 'Можешь меня научить?' },
        { t: 'order', a: 'My sister can ride a bike', ru: 'Моя сестра умеет кататься на велосипеде' },
        { t: 'tr', q: 'Я не умею плавать.', a: ['i can\'t swim', 'i cannot swim', 'i can not swim'] },
        { t: 'tr', q: 'Можете повторить, пожалуйста?', a: ['can you repeat please', 'can you repeat it please', 'please can you repeat'] },
        { t: 'listen', say: 'Can you play chess?', a: ['can you play chess'] }
      ],
      test: [
        { t: 'choice', q: 'Can he cook? — No, he ___.', o: ['doesn\'t', 'can\'t', 'isn\'t'], a: 1 },
        { t: 'choice', q: 'I know Lisa. I like ___.', o: ['she', 'her', 'their'], a: 1 },
        { t: 'choice', q: 'Мы любим нашу команду. We love ___ team.', o: ['us', 'our', 'we'], a: 1 },
        { t: 'gap', q: 'My brother can ___ very fast. (бегать)', a: ['run'] },
        { t: 'gap', q: 'Where are my keys? I can\'t find ___. (их)', a: ['them'] },
        { t: 'gap', q: '___ I have a coffee, please?', a: ['can'] },
        { t: 'order', a: 'What can you do', ru: 'Что ты умеешь?' },
        { t: 'tr', q: 'Ты можешь мне помочь?', a: ['can you help me'] },
        { t: 'tr', q: 'Она очень хорошо танцует.', a: ['she can dance very well', 'she dances very well'] },
        { t: 'tr', q: 'Это его велосипед.', a: ['this is his bike', 'it is his bike', 'it\'s his bike', 'that is his bike', 'that\'s his bike', 'this is his bicycle', 'it is his bicycle', 'it\'s his bicycle'] },
        { t: 'listen', say: 'I can\'t sing at all', a: ['i can\'t sing at all', 'i cannot sing at all'] }
      ]
    },

    // ───────────────────────────── UNIT 8 ─────────────────────────────
    {
      id: 'a1-8', level: 'A1', num: 8, track: 'main',
      title: 'I was, you were — to be в прошлом',
      summary: 'Как сказать «я был дома», «было весело», «где ты был вчера?». yesterday, last week, ago.',
      grammar: [
        {
          title: 'was / were — прошедшее от am / is / are',
          html: `
<p>Помните, что в английском нельзя без глагола: «Я дома» — <i>I <b>am</b> at home</i>. В прошлом то же самое, только форма другая:</p>
<table>
<tr><th>Сейчас</th><th>В прошлом</th></tr>
<tr><td>I <b>am</b></td><td>I <b>was</b></td></tr>
<tr><td>he / she / it <b>is</b></td><td>he / she / it <b>was</b></td></tr>
<tr><td>you / we / they <b>are</b></td><td>you / we / they <b>were</b></td></tr>
</table>
<p>Простое правило: <b>am и is → was</b>, <b>are → were</b>.</p>
<p><span class="say">I was at home.</span> — Я был дома. <span class="say">It was fun.</span> — Было весело. <span class="say">We were tired.</span> — Мы устали.</p>`
        },
        {
          title: 'Отрицание и вопрос',
          html: `
<p>Как с am/is/are: для отрицания добавляем <b>not</b>, для вопроса ставим was/were <b>в начало</b>. Помощник do не нужен.</p>
<table>
<tr><th>Отрицание</th><th>Вопрос</th><th>Короткий ответ</th></tr>
<tr><td><span class="say">I wasn't at work.</span></td><td><span class="say">Were you at work?</span></td><td>Yes, I was. / No, I wasn't.</td></tr>
<tr><td><span class="say">She wasn't happy.</span></td><td><span class="say">Was she happy?</span></td><td>Yes, she was. / No, she wasn't.</td></tr>
<tr><td><span class="say">They weren't there.</span></td><td><span class="say">Were they there?</span></td><td>Yes, they were. / No, they weren't.</td></tr>
</table>
<p>wasn't = was not, weren't = were not.</p>
<p class="tip">Не путайте: <s>Did you be…?</s>, <s>I didn't was</s> — так нельзя. С be всё без do: <b>Were you…? I wasn't.</b></p>`
        },
        {
          title: 'Вопросительные слова',
          html: `
<p><span class="say">Where were you yesterday?</span> — Где ты был вчера?<br>
<span class="say">How was the party?</span> — Как прошла вечеринка?<br>
<span class="say">Who was there?</span> — Кто там был?<br>
<span class="say">What was the problem?</span> — В чём была проблема?</p>
<p>«Родился» по-английски тоже через was: <span class="say">I was born in 1990.</span> <span class="say">Where were you born?</span></p>`
        },
        {
          title: 'Слова-маркеры прошлого',
          html: `
<table>
<tr><th>Маркер</th><th>Пример</th></tr>
<tr><td><b>yesterday</b> — вчера</td><td><span class="say">yesterday morning</span>, <span class="say">yesterday evening</span></td></tr>
<tr><td><b>last</b> — прошлый</td><td><span class="say">last night</span>, <span class="say">last week</span>, <span class="say">last year</span></td></tr>
<tr><td><b>… ago</b> — … назад</td><td><span class="say">two days ago</span>, <span class="say">an hour ago</span>, <span class="say">a year ago</span></td></tr>
</table>
<p class="tip"><b>ago</b> ставится <b>после</b> срока: two days ago, а не <s>ago two days</s>. И перед last не нужен предлог: <b>last week</b>, а не <s>in last week</s>.</p>
<p>Кстати: <b>last night</b> — это «вчера вечером / ночью», а не «последняя ночь».</p>`
        }
      ],
      words: [
        ['was', 'был, была, было (I, he, she, it)', 'I was at home.', 'Я был дома.'],
        ['were', 'были; был (you, we, they)', 'Where were you?', 'Где ты был?'],
        ['yesterday', 'вчера', 'It was cold yesterday.', 'Вчера было холодно.'],
        ['last', 'прошлый; последний', 'We were in Rome last year.', 'Мы были в Риме в прошлом году.'],
        ['last night', 'вчера вечером, прошлой ночью', 'Were you online last night?', 'Ты был в сети вчера вечером?'],
        ['ago', 'назад', 'I was there two days ago.', 'Я был там два дня назад.'],
        ['hour', 'час', 'She was here an hour ago.', 'Она была здесь час назад.'],
        ['month', 'месяц', 'Last month was very busy.', 'Прошлый месяц был очень загруженным.'],
        ['year', 'год', 'A year ago I was a student.', 'Год назад я был студентом.'],
        ['born', 'рождённый (was born — родился)', 'I was born in Kazan.', 'Я родился в Казани.'],
        ['then', 'тогда, потом', 'I was ten then.', 'Мне тогда было десять.'],
        ['party', 'вечеринка', 'How was the party?', 'Как прошла вечеринка?'],
        ['cinema', 'кинотеатр', 'We were at the cinema.', 'Мы были в кино.'],
        ['park', 'парк', 'The kids were in the park.', 'Дети были в парке.'],
        ['beach', 'пляж', 'The beach was beautiful.', 'Пляж был прекрасный.'],
        ['museum', 'музей', 'The museum was closed.', 'Музей был закрыт.'],
        ['shop', 'магазин', 'Was the shop open?', 'Магазин был открыт?'],
        ['school', 'школа', 'We were at school together.', 'Мы вместе учились в школе.'],
        ['trip', 'поездка', 'The trip was great.', 'Поездка была отличной.'],
        ['there', 'там', 'Were you there?', 'Ты был там?'],
        ['open', 'открытый', 'The door was open.', 'Дверь была открыта.'],
        ['closed', 'закрытый', 'The shop was closed.', 'Магазин был закрыт.'],
        ['bored', 'скучающий (мне скучно)', 'I was bored at the meeting.', 'Мне было скучно на встрече.'],
        ['boring', 'скучный', 'The film was boring.', 'Фильм был скучный.'],
        ['excited', 'взволнованный (в радостном ожидании)', 'We were so excited!', 'Мы были в таком восторге!'],
        ['angry', 'злой, сердитый', 'Was she angry?', 'Она злилась?'],
        ['sad', 'грустный', 'He was sad yesterday.', 'Вчера ему было грустно.'],
        ['scared', 'испуганный', 'I was scared of the boss.', 'Я боялся босса (в игре).'],
        ['busy', 'занятой', 'Sorry, I was busy.', 'Извини, я был занят.'],
        ['fun', 'весело; веселье', 'It was so much fun!', 'Было очень весело!'],
        ['weather', 'погода', 'The weather was terrible.', 'Погода была ужасная.'],
        ['terrible', 'ужасный', 'The food was terrible.', 'Еда была ужасная.']
      ],
      texts: [
        {
          id: 't-a1-8-1', title: 'Where were you?', level: 'A1',
          text: `Kate: Hi, Max! Where were you last night? You weren't online.
Max: Sorry! I was at a party. It was my friend's birthday.
Kate: Oh, cool! How was it?
Max: It was great! There were a lot of people. The music was good and the food was very nice.
Kate: Were your brother and sister there?
Max: My brother was there, but my sister wasn't. She was ill.
Kate: Oh no! Is she OK now?
Max: Yes, she's fine now. And you? Were you at home?
Kate: Yes, I was. I was bored. Tom and Lisa were busy. The game wasn't fun without you!
Max: Sorry! Can we play tonight?
Kate: Sure! At eight.`
        },
        {
          id: 't-a1-8-2', title: 'A year ago', level: 'A1',
          text: `A year ago I was in Spain. It was my first trip to the sea.
The weather was hot and sunny. The beach was beautiful, and the water was warm.
My hotel was small, but the room was clean and there was a big window.
There were a lot of cafés near the hotel. The food was great!
One day was terrible. It was cold and windy, and the museum was closed. I was very sad.
But the last day was the best. There was a big party on the beach. I was so excited!
Last week I was at work every day. I was tired and busy. But I have got my photos from Spain, and I am happy.`
        }
      ],
      practice: [
        { t: 'choice', q: 'I ___ at home yesterday.', o: ['was', 'were', 'am'], a: 0 },
        { t: 'choice', q: 'They ___ at the cinema last night.', o: ['was', 'were', 'are'], a: 1 },
        { t: 'choice', q: '___ you tired yesterday?', o: ['Did', 'Was', 'Were'], a: 2 },
        { t: 'choice', q: 'She ___ at work last week. (не)', o: ['wasn\'t', 'weren\'t', 'didn\'t'], a: 0 },
        { t: 'choice', q: 'two days ___', o: ['last', 'ago', 'yesterday'], a: 1 },
        { t: 'choice', q: 'The film was ___. I was ___.', o: ['bored / boring', 'boring / bored', 'boring / boring'], a: 1 },
        { t: 'gap', q: 'Was it fun? — Yes, it ___.', a: ['was'] },
        { t: 'gap', q: 'Were they at school? — No, they ___.', a: ['weren\'t', 'were not'] },
        { t: 'gap', q: 'We were in Paris ___ year. (в прошлом)', a: ['last'] },
        { t: 'gap', q: 'Where ___ you born?', a: ['were'] },
        { t: 'order', a: 'Where were you yesterday', ru: 'Где ты был вчера?' },
        { t: 'order', a: 'The museum was closed', ru: 'Музей был закрыт' },
        { t: 'tr', q: 'Я был занят.', a: ['i was busy'] },
        { t: 'tr', q: 'Как прошла вечеринка?', a: ['how was the party'] },
        { t: 'tr', q: 'Час назад она была здесь.', a: ['she was here an hour ago', 'an hour ago she was here', 'one hour ago she was here', 'she was here one hour ago'] },
        { t: 'listen', say: 'It was so much fun', a: ['it was so much fun'] }
      ],
      test: [
        { t: 'choice', q: 'My friends ___ at the party.', o: ['was', 'were', 'is'], a: 1 },
        { t: 'choice', q: 'Was the shop open? — No, it ___.', o: ['wasn\'t', 'didn\'t', 'weren\'t'], a: 0 },
        { t: 'choice', q: 'вчера вечером:', o: ['last night', 'yesterday ago', 'in last evening'], a: 0 },
        { t: 'gap', q: 'He ___ angry yesterday. (не был)', a: ['wasn\'t', 'was not'] },
        { t: 'gap', q: 'I was in London three years ___.', a: ['ago'] },
        { t: 'gap', q: '___ the weather good? (была)', a: ['was'] },
        { t: 'order', a: 'We were at the beach last week', ru: 'На прошлой неделе мы были на пляже' },
        { t: 'tr', q: 'Где ты был вчера?', a: ['where were you yesterday'] },
        { t: 'tr', q: 'Погода была ужасная.', a: ['the weather was terrible', 'the weather was awful', 'the weather was very bad'] },
        { t: 'tr', q: 'Мы не были дома.', a: ['we weren\'t at home', 'we were not at home', 'we weren\'t home', 'we were not home'] },
        { t: 'listen', say: 'I was born in Moscow', a: ['i was born in moscow'] }
      ]
    }
);
