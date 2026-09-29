// Юниты A1 9–10: Past Simple (утверждение; вопросы и отрицания)

COURSE.units.push(
    // ───────────────────────────── UNIT 9 ─────────────────────────────
    {
      id: 'a1-9', level: 'A1', num: 9, track: 'main',
      title: 'I played, I went — Past Simple',
      summary: 'Как рассказать, что было вчера: правильные глаголы на -ed и 25 самых частых неправильных.',
      grammar: [
        {
          title: 'Когда нужен Past Simple',
          html: `
<p>Past Simple — это обычное прошедшее время: действие случилось и закончилось. Русское «играл», «пошёл», «купил».</p>
<p>Часто рядом есть слово-маркер: <span class="say">yesterday</span> (вчера), <span class="say">last week</span> (на прошлой неделе), <span class="say">two days ago</span> (два дня назад), <span class="say">in 2020</span>.</p>
<p>Хорошая новость: форма <b>одна для всех</b>. Никаких -s для he/she:</p>
<table>
<tr><td>I / you / we / they</td><td><span class="say">I played yesterday.</span></td></tr>
<tr><td>he / she / it</td><td><span class="say">She played yesterday.</span></td></tr>
</table>`
        },
        {
          title: 'Правильные глаголы: + -ed',
          html: `
<p>Большинство глаголов просто получают <b>-ed</b>: work → <span class="say">worked</span>, play → <span class="say">played</span>, watch → <span class="say">watched</span>.</p>
<table>
<tr><th>Правило написания</th><th>Пример</th></tr>
<tr><td>кончается на <b>-e</b> → только <b>-d</b></td><td>live → <span class="say">lived</span>, like → <span class="say">liked</span></td></tr>
<tr><td>согласная + <b>y</b> → <b>-ied</b></td><td>study → <span class="say">studied</span>, try → <span class="say">tried</span></td></tr>
<tr><td>гласная + <b>y</b> → просто -ed</td><td>play → <span class="say">played</span>, stay → <span class="say">stayed</span></td></tr>
<tr><td>короткий глагол «согласная-гласная-согласная» → согласная удваивается</td><td>stop → <span class="say">stopped</span>, plan → <span class="say">planned</span></td></tr>
</table>`
        },
        {
          title: 'Как читать -ed: три варианта',
          html: `
<table>
<tr><th>Звук</th><th>Когда</th><th>Примеры</th></tr>
<tr><td><b>[t]</b></td><td>после глухих звуков (k, p, s, sh, ch, f)</td><td><span class="say">worked</span>, <span class="say">stopped</span>, <span class="say">watched</span></td></tr>
<tr><td><b>[d]</b></td><td>после звонких и гласных</td><td><span class="say">played</span>, <span class="say">lived</span>, <span class="say">opened</span></td></tr>
<tr><td><b>[ɪd]</b></td><td>только после <b>t</b> и <b>d</b></td><td><span class="say">wanted</span>, <span class="say">started</span>, <span class="say">needed</span></td></tr>
</table>
<p class="tip">Лишний слог «-ид» появляется только после t/d. Не говорите «воркид», «плэйид» — правильно <i>workt</i>, <i>playd</i>.</p>`
        },
        {
          title: 'Неправильные глаголы',
          html: `
<p>Самые частые глаголы образуют прошедшее время по-своему. Их надо просто выучить — к счастью, их немного, и они всё время на слуху.</p>
<table>
<tr><td>go → <span class="say">went</span></td><td>идти, ехать</td><td>have → <span class="say">had</span></td><td>иметь</td></tr>
<tr><td>see → <span class="say">saw</span></td><td>видеть</td><td>get → <span class="say">got</span></td><td>получать</td></tr>
<tr><td>make → <span class="say">made</span></td><td>делать, создавать</td><td>do → <span class="say">did</span></td><td>делать</td></tr>
<tr><td>come → <span class="say">came</span></td><td>приходить</td><td>take → <span class="say">took</span></td><td>брать</td></tr>
<tr><td>say → <span class="say">said</span></td><td>сказать</td><td>tell → <span class="say">told</span></td><td>рассказать</td></tr>
<tr><td>eat → <span class="say">ate</span></td><td>есть</td><td>drink → <span class="say">drank</span></td><td>пить</td></tr>
<tr><td>buy → <span class="say">bought</span></td><td>покупать</td><td>think → <span class="say">thought</span></td><td>думать</td></tr>
<tr><td>give → <span class="say">gave</span></td><td>давать</td><td>find → <span class="say">found</span></td><td>находить</td></tr>
<tr><td>know → <span class="say">knew</span></td><td>знать</td><td>meet → <span class="say">met</span></td><td>встречать</td></tr>
<tr><td>write → <span class="say">wrote</span></td><td>писать</td><td>read → <span class="say">read</span></td><td>читать (читается «ред»)</td></tr>
<tr><td>sleep → <span class="say">slept</span></td><td>спать</td><td>leave → <span class="say">left</span></td><td>уходить, уезжать</td></tr>
<tr><td>begin → <span class="say">began</span></td><td>начинать</td><td>win → <span class="say">won</span></td><td>побеждать</td></tr>
<tr><td>lose → <span class="say">lost</span></td><td>проигрывать, терять</td><td></td><td></td></tr>
</table>
<p class="tip">Не добавляйте -ed к неправильным: <s>goed</s>, <s>buyed</s>, <s>eated</s>. Правильно: went, bought, ate.</p>`
        },
        {
          title: 'was / were — тоже Past Simple',
          html: `
<p>Вы уже знаете <b>was/were</b>. Это прошедшее время от <b>be</b>, его используют с прилагательными и местами: <span class="say">It was fun.</span> <span class="say">We were at home.</span></p>
<p>С обычными глаголами — форма на -ed или неправильная: <span class="say">We stayed at home.</span> <span class="say">It started at eight.</span></p>
<p class="tip">Не смешивайте: <s>I was go</s>, <s>I was played</s>. Правильно: <b>I went</b>, <b>I played</b>.</p>`
        }
      ],
      words: [
        ['go — went', 'идти, ехать — пошёл, поехал', 'We went to the cinema.', 'Мы ходили в кино.'],
        ['have — had', 'иметь — имел', 'I had a good day.', 'У меня был хороший день.'],
        ['see — saw', 'видеть — видел', 'I saw a great film.', 'Я посмотрел отличный фильм.'],
        ['get — got', 'получать — получил', 'I got a message from Tom.', 'Я получил сообщение от Тома.'],
        ['make — made', 'делать — сделал', 'She made a cake.', 'Она испекла торт.'],
        ['do — did', 'делать — сделал', 'I did my homework.', 'Я сделал домашнее задание.'],
        ['come — came', 'приходить — пришёл', 'He came home late.', 'Он пришёл домой поздно.'],
        ['take — took', 'брать — взял', 'I took a taxi.', 'Я взял такси.'],
        ['say — said', 'сказать — сказал', 'She said hello.', 'Она поздоровалась.'],
        ['tell — told', 'рассказать — рассказал', 'He told me a story.', 'Он рассказал мне историю.'],
        ['eat — ate', 'есть — ел', 'We ate pizza.', 'Мы ели пиццу.'],
        ['drink — drank', 'пить — пил', 'I drank a cup of tea.', 'Я выпил чашку чая.'],
        ['buy — bought', 'покупать — купил', 'I bought a new game.', 'Я купил новую игру.'],
        ['think — thought', 'думать — думал', 'I thought it was easy.', 'Я думал, это легко.'],
        ['give — gave', 'давать — дал', 'She gave me a book.', 'Она дала мне книгу.'],
        ['find — found', 'находить — нашёл', 'I found the key!', 'Я нашёл ключ!'],
        ['meet — met', 'встречать — встретил', 'I met Anna in the park.', 'Я встретил Анну в парке.'],
        ['write — wrote', 'писать — написал', 'He wrote a long letter.', 'Он написал длинное письмо.'],
        ['sleep — slept', 'спать — спал', 'I slept ten hours.', 'Я спал десять часов.'],
        ['leave — left', 'уходить — ушёл', 'She left at six.', 'Она ушла в шесть.'],
        ['begin — began', 'начинать — начал', 'The game began at nine.', 'Игра началась в девять.'],
        ['win — won', 'побеждать — победил', 'Our team won!', 'Наша команда победила!'],
        ['lose — lost', 'проигрывать, терять — проиграл', 'I lost my phone.', 'Я потерял телефон.'],
        ['yesterday', 'вчера', 'I worked yesterday.', 'Я работал вчера.'],
        ['last night', 'вчера вечером, прошлой ночью', 'I played last night.', 'Я играл вчера вечером.'],
        ['last week', 'на прошлой неделе', 'We moved last week.', 'Мы переехали на прошлой неделе.'],
        ['ago', 'назад', 'I started two years ago.', 'Я начал два года назад.'],
        ['then', 'потом, затем', 'I had dinner, then I watched a film.', 'Я поужинал, потом посмотрел фильм.'],
        ['stay', 'оставаться', 'We stayed at home.', 'Мы остались дома.'],
        ['decide', 'решать', 'I decided to learn English.', 'Я решил учить английский.']
      ],
      texts: [
        {
          id: 't-a1-9-1', title: 'A long Saturday', level: 'A1',
          text: `Last Saturday I got up at ten. I was very tired.
I made coffee and ate a sandwich. Then I played a new game. It was great!
I played for four hours. My hero found a magic sword and won a hard battle.
In the afternoon my friend Max came to my place. We watched a film and ordered pizza.
In the evening we went to the park. We met Anna there. She told us a funny story.
I came home at eleven, read a little and slept like a baby.`
        },
        {
          id: 't-a1-9-2', title: 'How I started English', level: 'A1',
          text: `Two years ago I decided to learn English.
I bought a book and downloaded an app. I studied every evening.
The first month was hard. I understood very little, but I tried.
Then I started to play games in English. I saw a lot of new words.
I wrote them in a notebook and learned ten words a day.
Last week I talked to a player from Canada. I understood him! He said, "Your English is good!"
I was so happy.`
        }
      ],
      practice: [
        { t: 'choice', q: 'Yesterday I ___ football.', o: ['play', 'played', 'plays'], a: 1 },
        { t: 'choice', q: 'go → прошедшее:', o: ['goed', 'gone', 'went'], a: 2 },
        { t: 'choice', q: 'study → прошедшее:', o: ['studyed', 'studied', 'studed'], a: 1 },
        { t: 'choice', q: 'stop → прошедшее:', o: ['stoped', 'stopped', 'stopt'], a: 1 },
        { t: 'choice', q: 'В каком слове -ed читается как [ɪd]?', o: ['worked', 'played', 'wanted'], a: 2 },
        { t: 'choice', q: 'She ___ a new phone last week.', o: ['buyed', 'bought', 'buys'], a: 1 },
        { t: 'gap', q: 'I ___ a great film last night. (see)', a: ['saw'] },
        { t: 'gap', q: 'We ___ pizza for dinner. (eat)', a: ['ate'] },
        { t: 'gap', q: 'He ___ in London in 2020. (live)', a: ['lived'] },
        { t: 'gap', q: 'The game ___ at nine. (start)', a: ['started', 'began'] },
        { t: 'gap', q: 'I met Anna two days ___. (назад)', a: ['ago'] },
        { t: 'order', a: 'I went to the cinema yesterday', ru: 'Я ходил в кино вчера' },
        { t: 'order', a: 'She made a cake last week', ru: 'Она испекла торт на прошлой неделе' },
        { t: 'tr', q: 'Я купил новую игру.', a: ['i bought a new game'] },
        { t: 'tr', q: 'Мы остались дома.', a: ['we stayed at home', 'we stayed home'] },
        { t: 'listen', say: 'I got up at ten', a: ['i got up at ten', 'i got up at 10'] }
      ],
      test: [
        { t: 'choice', q: 'take → прошедшее:', o: ['taked', 'took', 'take'], a: 1 },
        { t: 'choice', q: 'He ___ me a story.', o: ['telled', 'told', 'tells'], a: 1 },
        { t: 'choice', q: 'Вчера она ___ дома.', o: ['was stay', 'stayed', 'staied'], a: 1 },
        { t: 'gap', q: 'I ___ my phone yesterday. (lose)', a: ['lost'] },
        { t: 'gap', q: 'They ___ a message from the boss. (get)', a: ['got'] },
        { t: 'gap', q: 'We ___ the game! (win)', a: ['won'] },
        { t: 'gap', q: 'I ___ to learn English. (try)', a: ['tried'] },
        { t: 'order', a: 'I slept ten hours last night', ru: 'Я спал десять часов прошлой ночью' },
        { t: 'tr', q: 'Он пришёл домой поздно.', a: ['he came home late'] },
        { t: 'tr', q: 'Я начал два года назад.', a: ['i started two years ago', 'i began two years ago', 'i started 2 years ago', 'i began 2 years ago'] },
        { t: 'listen', say: 'We went to the park and met Anna', a: ['we went to the park and met anna'] }
      ]
    },

    // ───────────────────────────── UNIT 10 ─────────────────────────────
    {
      id: 'a1-10', level: 'A1', num: 10, track: 'main',
      title: 'Did you…? I didn\'t — вопросы и отрицания в прошлом',
      summary: 'Как спросить «Что ты делал на выходных?» и сказать «Я не ходил». Выходные, поездки, события.',
      grammar: [
        {
          title: 'Отрицание: didn\'t + начальная форма',
          html: `
<p>Как в настоящем времени был помощник <b>do/does</b>, в прошедшем есть помощник <b>did</b>. Он один для всех лиц.</p>
<table>
<tr><th>Утверждение</th><th>Отрицание</th></tr>
<tr><td>I went.</td><td><span class="say">I didn't go.</span></td></tr>
<tr><td>She bought it.</td><td><span class="say">She didn't buy it.</span></td></tr>
<tr><td>We played.</td><td><span class="say">We didn't play.</span></td></tr>
</table>
<p class="tip">Главное правило: после <b>didn't</b> глагол в <b>начальной форме</b>. Прошедшее время уже «забрал» did. Не <s>I didn't went</s>, а <b>I didn't go</b>.</p>
<p>didn't = did not.</p>`
        },
        {
          title: 'Вопрос: Did в начале',
          html: `
<table>
<tr><th>Утверждение</th><th>Вопрос</th></tr>
<tr><td>You saw the film.</td><td><span class="say">Did you see the film?</span></td></tr>
<tr><td>He won.</td><td><span class="say">Did he win?</span></td></tr>
<tr><td>They liked it.</td><td><span class="say">Did they like it?</span></td></tr>
</table>
<p>Короткие ответы: <span class="say">Yes, I did.</span> / <span class="say">No, I didn't.</span> Для всех лиц одинаково: <span class="say">Yes, she did.</span></p>`
        },
        {
          title: 'С вопросительными словами',
          html: `
<p>Схема та же, что в настоящем: <b>вопросительное слово + did + кто + глагол</b>.</p>
<table>
<tr><td><span class="say">What did you do?</span></td><td>Что ты делал?</td></tr>
<tr><td><span class="say">Where did you go?</span></td><td>Куда ты ездил?</td></tr>
<tr><td><span class="say">When did you come back?</span></td><td>Когда ты вернулся?</td></tr>
<tr><td><span class="say">Who did you meet?</span></td><td>Кого ты встретил?</td></tr>
<tr><td><span class="say">How did you get there?</span></td><td>Как ты туда добрался?</td></tr>
<tr><td><span class="say">Why did you leave?</span></td><td>Почему ты ушёл?</td></tr>
<tr><td><span class="say">How long did you stay?</span></td><td>Сколько ты там пробыл?</td></tr>
</table>
<p class="tip">В вопросе <b>What did you do?</b> два разных «do»: did — помощник, do — глагол «делать». Это нормально.</p>`
        },
        {
          title: 'was/were или did?',
          html: `
<p>Как и в настоящем: если есть <b>be</b> (was/were), помощник не нужен.</p>
<table>
<tr><th>С be</th><th>С обычным глаголом</th></tr>
<tr><td><span class="say">Was it fun?</span></td><td><span class="say">Did you have fun?</span></td></tr>
<tr><td><span class="say">I wasn't at home.</span></td><td><span class="say">I didn't stay at home.</span></td></tr>
<tr><td><span class="say">Where were you?</span></td><td><span class="say">Where did you go?</span></td></tr>
</table>
<p class="tip">Не бывает <s>Did you were…</s> и <s>I wasn't go</s>.</p>`
        }
      ],
      words: [
        ['did', 'вспомогательный глагол прошедшего времени', 'Did you like it?', 'Тебе понравилось?'],
        ['didn\'t', 'не (did not)', 'I didn\'t see him.', 'Я его не видел.'],
        ['trip', 'поездка', 'How was your trip?', 'Как прошла поездка?'],
        ['travel', 'путешествовать', 'Did you travel last summer?', 'Ты путешествовал прошлым летом?'],
        ['holiday', 'отпуск, каникулы; праздник', 'We went on holiday to Spain.', 'Мы поехали в отпуск в Испанию.'],
        ['beach', 'пляж', 'We were on the beach all day.', 'Мы были на пляже весь день.'],
        ['sea', 'море', 'Did you swim in the sea?', 'Ты плавал в море?'],
        ['mountains', 'горы', 'They went to the mountains.', 'Они поехали в горы.'],
        ['hotel', 'отель', 'The hotel was small but nice.', 'Отель был маленький, но хороший.'],
        ['ticket', 'билет', 'I bought the tickets online.', 'Я купил билеты онлайн.'],
        ['plane', 'самолёт', 'We went by plane.', 'Мы летели самолётом.'],
        ['train', 'поезд', 'Did you take the train?', 'Ты поехал на поезде?'],
        ['fly — flew', 'летать — летел', 'We flew to Rome.', 'Мы полетели в Рим.'],
        ['swim — swam', 'плавать — плавал', 'I swam every morning.', 'Я плавал каждое утро.'],
        ['visit', 'посещать, навещать', 'We visited a museum.', 'Мы сходили в музей.'],
        ['come back', 'возвращаться', 'When did you come back?', 'Когда ты вернулся?'],
        ['take photos', 'фотографировать', 'Did you take any photos?', 'Ты сделал какие-нибудь фото?'],
        ['party', 'вечеринка', 'Did you go to the party?', 'Ты ходил на вечеринку?'],
        ['birthday', 'день рождения', 'It was my birthday yesterday.', 'Вчера был мой день рождения.'],
        ['concert', 'концерт', 'The concert began at eight.', 'Концерт начался в восемь.'],
        ['have fun', 'веселиться, хорошо провести время', 'Did you have fun?', 'Вам было весело?'],
        ['fun', 'весело; веселье', 'The party was fun.', 'Вечеринка была весёлой.'],
        ['boring', 'скучный', 'The film was boring.', 'Фильм был скучным.'],
        ['weather', 'погода', 'The weather was terrible.', 'Погода была ужасной.'],
        ['rain', 'дождь; идёт дождь', 'It rained all weekend.', 'Все выходные шёл дождь.'],
        ['what', 'что, какой', 'What did you do?', 'Что ты делал?'],
        ['where', 'где, куда', 'Where did you go?', 'Куда ты ездил?'],
        ['who', 'кто, кого', 'Who did you meet?', 'Кого ты встретил?'],
        ['why', 'почему', 'Why did you leave early?', 'Почему ты ушёл рано?'],
        ['how long', 'как долго, сколько времени', 'How long did you stay?', 'Сколько ты там пробыл?'],
        ['last summer', 'прошлым летом', 'Where did you go last summer?', 'Куда ты ездил прошлым летом?']
      ],
      texts: [
        {
          id: 't-a1-10-1', title: 'Monday morning', level: 'A1',
          text: `Kate: Hi, Max! How was your weekend?
Max: Hi! It was OK. Nothing special.
Kate: What did you do?
Max: I stayed at home. It rained all weekend. I played games and slept a lot.
Kate: Did you go to Tom's party on Saturday?
Max: No, I didn't. I was tired. Was it fun?
Kate: Yes, it was! Anna came, and Tom made a big cake.
Max: Oh no! Did you take any photos?
Kate: Yes, I did. Look!
Max: Wait, who is that man with the guitar?
Kate: That's Tom's brother. He played music all night.
Max: OK, next time I'm going!`
        },
        {
          id: 't-a1-10-2', title: 'A trip to the sea', level: 'A1',
          text: `Anna: Where did you go last summer?
Tom: I went to Spain with my friends.
Anna: Nice! How did you get there? Did you fly?
Tom: Yes, we did. We flew to Barcelona and then took a train to a small town by the sea.
Anna: How long did you stay?
Tom: Ten days. We stayed in a small hotel near the beach.
Anna: Did you have fun?
Tom: Yes! We swam every morning and ate a lot of fish. The weather was great.
Anna: Did you visit any museums?
Tom: No, we didn't. We were too lazy! But we saw a football match.
Anna: Who won?
Tom: I don't remember. I didn't watch the game. I watched the people!`
        }
      ],
      practice: [
        { t: 'choice', q: 'I didn\'t ___ to the party.', o: ['went', 'go', 'goes'], a: 1 },
        { t: 'choice', q: '___ you see the film?', o: ['Do', 'Did', 'Were'], a: 1 },
        { t: 'choice', q: '___ you at home yesterday?', o: ['Did', 'Was', 'Were'], a: 2 },
        { t: 'choice', q: 'Did she like it? — Yes, she ___.', o: ['did', 'does', 'liked'], a: 0 },
        { t: 'choice', q: 'Where ___ you go last summer?', o: ['did', 'were', 'do'], a: 0 },
        { t: 'choice', q: 'Как правильно?', o: ['He didn\'t bought it.', 'He didn\'t buy it.', 'He not bought it.'], a: 1 },
        { t: 'gap', q: 'Did you have fun? — No, I ___.', a: ['didn\'t', 'did not'] },
        { t: 'gap', q: 'What did you ___ at the weekend? (делать)', a: ['do'] },
        { t: 'gap', q: 'We didn\'t ___ any photos. (take)', a: ['take'] },
        { t: 'gap', q: '___ did you meet at the party? (кого)', a: ['who'] },
        { t: 'gap', q: 'How ___ did you stay? (как долго)', a: ['long'] },
        { t: 'order', a: 'Where did you go last summer', ru: 'Куда ты ездил прошлым летом?' },
        { t: 'order', a: 'We did not visit the museum', ru: 'Мы не ходили в музей' },
        { t: 'tr', q: 'Что ты делал вчера?', a: ['what did you do yesterday'] },
        { t: 'tr', q: 'Я его не видел.', a: ['i didn\'t see him', 'i did not see him'] },
        { t: 'listen', say: 'Did you have fun?', a: ['did you have fun'] }
      ],
      test: [
        { t: 'choice', q: 'She didn\'t ___ me.', o: ['called', 'call', 'calls'], a: 1 },
        { t: 'choice', q: '___ the weather good?', o: ['Did', 'Was', 'Were'], a: 1 },
        { t: 'choice', q: 'Did they win? — No, they ___.', o: ['didn\'t', 'don\'t', 'weren\'t'], a: 0 },
        { t: 'gap', q: '___ you take the train? (вопрос в прошлом)', a: ['did'] },
        { t: 'gap', q: 'Why did you ___ early? (leave)', a: ['leave'] },
        { t: 'gap', q: 'I ___ go on holiday last year. (не)', a: ['didn\'t', 'did not'] },
        { t: 'order', a: 'When did you come back', ru: 'Когда ты вернулся?' },
        { t: 'tr', q: 'Куда ты ездил?', a: ['where did you go'] },
        { t: 'tr', q: 'Ты ходил на вечеринку?', a: ['did you go to the party'] },
        { t: 'tr', q: 'Мы не купили билеты.', a: ['we didn\'t buy the tickets', 'we did not buy the tickets', 'we didn\'t buy tickets', 'we did not buy tickets'] },
        { t: 'listen', say: 'How was your trip?', a: ['how was your trip'] }
      ]
    }
);
