// Уроки A1 (новая версия): a1-10 — Did you…? I didn't (Past Simple: вопросы и отрицания); g-1 — Игры: меню и интерфейс (команды Press / Don't)
(function () {
  const put = (u) => { const i = COURSE.units.findIndex((x) => x.id === u.id); if (i >= 0) COURSE.units[i] = u; else COURSE.units.push(u); };
  [
    // ───────────────────────────── UNIT 10 ─────────────────────────────
    {
      id: 'a1-10', level: 'A1', num: 10, track: 'main',
      books: { red: [12] },
      title: 'Did you…? I didn\'t — вопросы и отрицания в прошлом',
      summary: 'Научимся спрашивать «Что ты делал на выходных?», «Тебе понравилось?» и говорить «Я не ходил», «У меня не было времени».',
      grammar: [
        {
          title: '1. Главная идея: помощник did',
          html: `
<div class="g-idea">В настоящем для вопросов и «не» был помощник <b>do / does</b>. В прошлом его заменяет <b>did</b> — одно слово для всех. Did сам показывает прошлое, поэтому основной глагол возвращается в <b>начальную форму</b> (как в словаре).</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Ты ходил в кино?</p><p>Я не ходил.</p><p>Тебе понравился фильм?</p></div>
  <div><div class="g-h">English</div><p><span class="say"><b>Did</b> you <b>go</b> to the cinema?</span></p><p><span class="say">I <b>didn't go</b>.</span></p><p><span class="say"><b>Did</b> you <b>like</b> the film?</span></p></div>
</div>
<p>По-русски вопрос от утверждения отличается только интонацией. По-английски нужно слово-сигнал в начале — <b>Did</b>.</p>
<table>
<tr><th>Было (утверждение)</th><th>Вопрос</th><th>Отрицание</th></tr>
<tr><td><span class="say">I played.</span></td><td><span class="say">Did I play?</span></td><td><span class="say">I didn't play.</span></td></tr>
<tr><td><span class="say">She went.</span></td><td><span class="say">Did she go?</span></td><td><span class="say">She didn't go.</span></td></tr>
<tr><td><span class="say">They saw it.</span></td><td><span class="say">Did they see it?</span></td><td><span class="say">They didn't see it.</span></td></tr>
</table>
<div class="g-tip">Представьте, что <b>did</b> «забирает» прошедшее время себе. Глаголу больше нечего нести — он становится простым: went → <b>go</b>, bought → <b>buy</b>, played → <b>play</b>.</div>
<div class="mini" data-q="Как спросить «Тебе понравилось?»" data-o="Did you liked it?|Did you like it?|Do you liked it?" data-a="1" data-why="Прошлое показывает did, глагол остаётся в начальной форме: like."></div>`
        },
        {
          title: '2. do / does → did: одна форма для всех',
          html: `
<div class="g-idea">В настоящем приходилось выбирать: <b>do</b> или <b>does</b>. В прошлом выбирать не нужно — <b>did</b> для всех: I, you, he, she, it, we, they.</div>
<table>
<tr><th>Кто</th><th>Сейчас</th><th>В прошлом</th></tr>
<tr><td>I / you / we / they</td><td>don't · Do…?</td><td><b class="g-v">didn't · Did…?</b></td></tr>
<tr><td>he / she / it</td><td>doesn't · Does…?</td><td><b class="g-v">didn't · Did…?</b></td></tr>
</table>
<p>Сравните «обычно» и «вчера»:</p>
<ul class="g-list">
<li><span class="say">I don't often play games.</span> — Я нечасто играю. → <span class="say">I didn't play yesterday.</span> — Вчера я не играл.</li>
<li><span class="say">Does she often call you?</span> — Она часто тебе звонит? → <span class="say">Did she call you last night?</span> — Она звонила тебе вчера вечером?</li>
<li><span class="say">He doesn't work on Saturday.</span> — Он не работает в субботу. → <span class="say">He didn't work last Saturday.</span> — Он не работал в прошлую субботу.</li>
</ul>
<div class="g-bad">She didn't works. / Does she called?</div>
<div class="g-good">She didn't work. / Did she call?</div>
<div class="g-tip">Слова-подсказки <b>yesterday, last night, last week, last summer, ago</b> — сигнал: нужен <b>did</b>, а не do / does.</div>
<div class="mini" data-q="___ Tom play football last week?" data-o="Does|Did|Do" data-a="1" data-why="last week — прошлое, а в прошлом для всех одно слово: Did."></div>`
        },
        {
          title: '3. Отрицание: didn’t + начальная форма',
          html: `
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">didn't</span><span class="g-plus">+</span><span class="g-part">глагол (начальная форма)</span></div>
<p><b>didn't</b> = did not. В разговоре и в чатах почти всегда говорят коротко.</p>
<table>
<tr><th>Было</th><th>Не было</th></tr>
<tr><td>I went.</td><td><span class="say">I didn't go.</span></td></tr>
<tr><td>She bought it.</td><td><span class="say">She didn't buy it.</span></td></tr>
<tr><td>We watched it.</td><td><span class="say">We didn't watch it.</span></td></tr>
<tr><td>He had time.</td><td><span class="say">He didn't have time.</span></td></tr>
<tr><td>They did it.</td><td><span class="say">They didn't do it.</span></td></tr>
</table>
<p>Очень частая схема — «сделал, но не…»:</p>
<ul class="g-list">
<li><span class="say">I played, but I didn't win.</span> — Я играл, но не выиграл.</li>
<li><span class="say">We went to the cinema, but we didn't like the film.</span> — Мы сходили в кино, но фильм нам не понравился.</li>
<li><span class="say">She called, but I didn't answer.</span> — Она звонила, но я не ответил.</li>
<li><span class="say">I didn't have breakfast.</span> — Я не завтракал.</li>
</ul>
<div class="g-bad">I didn't went. / I not went.</div>
<div class="g-good">I didn't go.</div>
<div class="g-tip">Правило одной «прошлости»: прошедшее время в предложении показывается <b>один раз</b>. Есть didn't — значит, дальше глагол простой, без -ed и без второй формы.</div>
<div class="mini" data-q="She didn't ___ the message." data-o="read|reads|readed" data-a="0" data-why="После didn't — начальная форма: read."></div>
<div class="mini" data-q="«У меня не было времени»" data-o="I hadn't time.|I didn't have time.|I didn't had time." data-a="1" data-why="have в прошлом отрицается как все глаголы: didn't + have."></div>`
        },
        {
          title: '4. Вопрос: Did + кто + глагол',
          html: `
<div class="g-formula"><span class="g-part g-v">Did</span><span class="g-plus">+</span><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part">глагол (начальная форма)</span><span class="g-plus">?</span></div>
<table>
<tr><th>Было</th><th>Вопрос</th></tr>
<tr><td>You saw the film.</td><td><span class="say">Did you see the film?</span></td></tr>
<tr><td>Tom won.</td><td><span class="say">Did Tom win?</span></td></tr>
<tr><td>Your friends came.</td><td><span class="say">Did your friends come?</span></td></tr>
<tr><td>It rained on Sunday.</td><td><span class="say">Did it rain on Sunday?</span></td></tr>
</table>
<p>«Кто» может быть длинным — порядок тот же: <b>Did</b> → кто → глагол.</p>
<ul class="g-list">
<li><span class="say">Did your friend call you?</span> — Твой друг тебе звонил?</li>
<li><span class="say">Did Anna and Kate like the party?</span> — Анне и Кейт понравилась вечеринка?</li>
</ul>
<p>Короткий ответ — повторяем <b>did</b>, а не сам глагол. Форма одна для всех:</p>
<table>
<tr><th>Да</th><th>Нет</th></tr>
<tr><td><span class="say">Yes, I did.</span></td><td><span class="say">No, I didn't.</span></td></tr>
<tr><td><span class="say">Yes, she did.</span></td><td><span class="say">No, she didn't.</span></td></tr>
<tr><td><span class="say">Yes, they did.</span></td><td><span class="say">No, they didn't.</span></td></tr>
</table>
<div class="g-bad">You saw the film? / Did you saw the film?</div>
<div class="g-good">Did you see the film?</div>
<div class="g-bad">Did you like it? — Yes, I liked.</div>
<div class="g-good">Did you like it? — Yes, I did.</div>
<div class="mini" data-q="Did they win? — No, they ___." data-o="didn't|don't|weren't" data-a="0" data-why="Вопрос с did → и короткий ответ с did: No, they didn't."></div>
<div class="mini" data-q="Как правильно?" data-o="Did your friends came?|Did come your friends?|Did your friends come?" data-a="2" data-why="Did + кто (your friends) + глагол в начальной форме (come)."></div>`
        },
        {
          title: '5. Что? Где? Когда? — вопросительные слова',
          html: `
<div class="g-idea">Схема та же, что в настоящем, только вместо do / does — <b>did</b>. Вопросительное слово — самое первое.</div>
<div class="g-formula"><span class="g-part">Слово-вопрос</span><span class="g-plus">+</span><span class="g-part g-v">did</span><span class="g-plus">+</span><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part">глагол</span><span class="g-plus">?</span></div>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td><span class="say">What did you do?</span></td><td>Что ты делал?</td></tr>
<tr><td><span class="say">Where did you go?</span></td><td>Куда ты ходил?</td></tr>
<tr><td><span class="say">When did you come back?</span></td><td>Когда ты вернулся?</td></tr>
<tr><td><span class="say">Who did you meet?</span></td><td>Кого ты встретил?</td></tr>
<tr><td><span class="say">Why did you leave?</span></td><td>Почему ты ушёл?</td></tr>
<tr><td><span class="say">How did you get there?</span></td><td>Как ты туда добрался?</td></tr>
<tr><td><span class="say">How long did you play?</span></td><td>Сколько ты играл?</td></tr>
</table>
<div class="g-tip">В <b>What did you do?</b> два разных «do»: did — помощник, do — глагол «делать». Это нормально, так и говорят.</div>
<div class="g-bad">Where you went? / Where did you went?</div>
<div class="g-good">Where did you go?</div>
<p>Одно исключение: если <b>who</b> или <b>what</b> — это сам «кто сделал», did не нужен, глагол стоит в прошедшей форме.</p>
<ul class="g-list">
<li><span class="say">Who won?</span> — Кто победил? <span class="muted">(ответ: Tom won)</span></li>
<li><span class="say">Who did you meet?</span> — Кого ты встретил? <span class="muted">(ответ: I met Tom)</span></li>
<li><span class="say">Who called?</span> — Кто звонил? · <span class="say">Who did you call?</span> — Кому ты звонил?</li>
</ul>
<div class="mini" data-q="___ did you go last summer? — To the sea." data-o="What|Where|Who" data-a="1" data-why="Ответ — место (to the sea), значит «куда»: Where."></div>
<div class="mini" data-q="Что ты делал вчера?" data-o="What you did yesterday?|What did you do yesterday?|What did you did yesterday?" data-a="1" data-why="What + did + you + do. Второй глагол — в начальной форме."></div>`
        },
        {
          title: '6. was / were или did?',
          html: `
<div class="g-idea">Как в настоящем: если в предложении есть <b>be</b> (was / were), помощник не нужен. Did — только для остальных глаголов. Вместе они не встречаются.</div>
<table>
<tr><th>С be (какой? где?)</th><th>С действием</th></tr>
<tr><td><span class="say">Was it fun?</span></td><td><span class="say">Did you have fun?</span></td></tr>
<tr><td><span class="say">I wasn't at home.</span></td><td><span class="say">I didn't stay at home.</span></td></tr>
<tr><td><span class="say">Where were you?</span></td><td><span class="say">Where did you go?</span></td></tr>
<tr><td><span class="say">Was the game hard?</span></td><td><span class="say">Did you like the game?</span></td></tr>
</table>
<div class="g-steps"><div class="g-h">Как выбрать</div><ol>
<li>Найдите в русской фразе глагол.</li>
<li>Это «был / была / было / были» (или глагола нет вообще)? → <b>was / were</b>.</li>
<li>Это действие (ходил, смотрел, купил)? → <b>did</b> + начальная форма.</li>
</ol></div>
<div class="g-bad">Did you were at home? / Did it fun?</div>
<div class="g-good">Were you at home? / Was it fun?</div>
<div class="g-bad">I wasn't go to work.</div>
<div class="g-good">I didn't go to work.</div>
<div class="mini" data-q="___ the weather good?" data-o="Did|Was|Were" data-a="1" data-why="«Погода была хорошая?» — это be; the weather = it → Was."></div>
<div class="mini" data-q="___ you watch the new film?" data-o="Did|Were|Was" data-a="0" data-why="watch — действие → Did."></div>`
        },
        {
          title: '7. Типичные ошибки — проверьте себя',
          html: `
<div class="g-mistakes">
<div class="g-bad">I didn't saw him.</div><div class="g-good">I didn't <b>see</b> him.</div>
<div class="g-bad">I not went to the party.</div><div class="g-good">I <b>didn't go</b> to the party.</div>
<div class="g-bad">You liked the film?</div><div class="g-good"><b>Did</b> you <b>like</b> the film?</div>
<div class="g-bad">Does she called you yesterday?</div><div class="g-good"><b>Did</b> she <b>call</b> you yesterday?</div>
<div class="g-bad">Where you went last summer?</div><div class="g-good">Where <b>did</b> you <b>go</b> last summer?</div>
<div class="g-bad">Did you were busy?</div><div class="g-good"><b>Were</b> you busy?</div>
<div class="g-bad">Did she call? — Yes, she called.</div><div class="g-good">Did she call? — Yes, she <b>did</b>.</div>
<div class="g-bad">Who did win? <span class="muted">— кто победил</span></div><div class="g-good">Who <b>won</b>?</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Вопрос — <b>Did + кто + глагол?</b>, отрицание — <b>didn't + глагол</b>; did один для всех, глагол после него всегда в начальной форме, а с was / were did не нужен.</div>`
        }
      ],
      words: [
        ['did', 'вспомогательный глагол прошедшего времени', 'Did you like it?', 'Тебе понравилось?'],
        ['didn\'t', 'не (did not)', 'I didn\'t see him.', 'Я его не видел.'],
        ['trip', 'поездка', 'How was your trip?', 'Как прошла поездка?'],
        ['travel', 'путешествовать', 'Did you travel last summer?', 'Ты путешествовал прошлым летом?'],
        ['holiday', 'отпуск, каникулы; праздник', 'Where did you go on holiday?', 'Куда ты ездил в отпуск?'],
        ['beach', 'пляж', 'We were on the beach all day.', 'Мы были на пляже весь день.'],
        ['sea', 'море', 'Did you swim in the sea?', 'Ты плавал в море?'],
        ['mountains', 'горы', 'We didn\'t go to the mountains.', 'Мы не ездили в горы.'],
        ['hotel', 'отель', 'The hotel was small but nice.', 'Отель был маленький, но хороший.'],
        ['ticket', 'билет', 'Did you buy the tickets?', 'Ты купил билеты?'],
        ['plane', 'самолёт', 'We went by plane.', 'Мы летели самолётом.'],
        ['train', 'поезд', 'Did you take the train?', 'Ты поехал на поезде?'],
        ['fly — flew', 'летать — летел', 'We flew to Rome.', 'Мы полетели в Рим.'],
        ['swim — swam', 'плавать — плавал', 'I swam every morning.', 'Я плавал каждое утро.'],
        ['visit', 'посещать, навещать', 'Did you visit the museum?', 'Вы сходили в музей?'],
        ['come back', 'возвращаться', 'When did you come back?', 'Когда ты вернулся?'],
        ['take photos', 'фотографировать', 'Did you take any photos?', 'Ты сделал какие-нибудь фото?'],
        ['party', 'вечеринка', 'Did you go to the party?', 'Ты ходил на вечеринку?'],
        ['birthday', 'день рождения', 'It was my birthday yesterday.', 'Вчера был мой день рождения.'],
        ['concert', 'концерт', 'The concert began at eight.', 'Концерт начался в восемь.'],
        ['have fun', 'веселиться, хорошо провести время', 'Did you have fun?', 'Вам было весело?'],
        ['fun', 'весело; веселье', 'The party was fun.', 'Вечеринка была весёлой.'],
        ['boring', 'скучный', 'The film was boring, so we didn\'t stay.', 'Фильм был скучный, поэтому мы не остались.'],
        ['weather', 'погода', 'The weather was terrible.', 'Погода была ужасной.'],
        ['rain', 'дождь; идёт дождь', 'Did it rain at the weekend?', 'На выходных шёл дождь?'],
        ['what', 'что, какой', 'What did you do?', 'Что ты делал?'],
        ['where', 'где, куда', 'Where did you go?', 'Куда ты ездил?'],
        ['who', 'кто, кого', 'Who did you meet?', 'Кого ты встретил?'],
        ['why', 'почему', 'Why did you leave early?', 'Почему ты ушёл рано?'],
        ['how long', 'как долго, сколько времени', 'How long did you stay?', 'Сколько ты там пробыл?'],
        ['last summer', 'прошлым летом', 'Where did you go last summer?', 'Куда ты ездил прошлым летом?'],
        ['enjoy', 'получать удовольствие, наслаждаться', 'Did you enjoy the concert?', 'Тебе понравился концерт?']
      ],
      texts: [
        {
          id: 't-a1-10-1', title: 'Monday morning', level: 'A1',
          text: `Kate: Hi, Max! How was your weekend?
Max: Hi, Kate! It was OK. I was at home.
Kate: What did you do?
Max: It rained all weekend, so I stayed at home. I played games and slept a lot.
Kate: Did you go to Tom's party on Saturday?
Max: No, I didn't. I was tired, and I didn't have time. Was it fun?
Kate: Yes, it was! A lot of people came. We ate, danced and played games.
Max: Did Anna come?
Kate: Yes, she did. She came with her friend Sam. He played the guitar all night.
Max: Did you take any photos?
Kate: Yes, I did. Look! This is Tom, and this is Anna.
Max: Nice! Did Tom like the party?
Kate: Yes, he did. It was his birthday!
Max: His birthday? Oh no! I didn't know. I didn't call him!
Kate: Call him now. He isn't angry.
Max: OK, I'm calling him right now!`,
          questions: [
            { q: 'Why didn\'t Max go to the party?', o: ['He was tired.', 'He was at work.', 'He was in the mountains.'], a: 0 },
            { q: 'Who played the guitar?', o: ['Tom', 'Sam', 'Max'], a: 1 },
            { q: 'Did Max know about Tom\'s birthday?', o: ['Yes, he did.', 'No, he didn\'t.', 'Yes, he was.'], a: 1 }
          ]
        },
        {
          id: 't-a1-10-2', title: 'A trip to the sea', level: 'A1',
          text: `Anna: Hi, Tom! Where did you go last summer?
Tom: I went to Spain with two friends.
Anna: Nice! How did you get there? Did you take the train?
Tom: No, we didn't. We flew. The tickets were cheap.
Anna: Where did you stay?
Tom: In a small hotel near the beach. It wasn't expensive, and the people there were very nice.
Anna: How long did you stay?
Tom: Ten days.
Anna: What did you do there?
Tom: We swam in the sea every morning. In the evening we ate in small cafés and listened to music.
Anna: Did you visit any museums?
Tom: Yes, we did. We visited one museum, but it was boring. We didn't stay there long.
Anna: Did you go to the mountains?
Tom: No, we didn't have time. But we took a lot of photos. Look!
Anna: Wow! Did you enjoy the trip?
Tom: Yes, I did! The weather was very good, and I didn't think about work at all.`,
          questions: [
            { q: 'How did Tom get to Spain?', o: ['By train', 'By plane', 'By car'], a: 1 },
            { q: 'How long did Tom stay there?', o: ['Two days', 'Seven days', 'Ten days'], a: 2 },
            { q: 'Did they go to the mountains?', o: ['Yes, they did.', 'No, they didn\'t.', 'No, they weren\'t.'], a: 1 }
          ]
        }
      ],
      practice: [
        { t: 'choice', q: 'I didn\'t ___ the film.', o: ['liked', 'like', 'likes'], a: 1, why: 'После didn\'t — начальная форма: like.' },
        { t: 'choice', q: '___ you see Anna yesterday?', o: ['Do', 'Did', 'Were'], a: 1, why: 'yesterday — прошлое, see — действие → Did.' },
        { t: 'choice', q: '___ you at the party last night?', o: ['Did', 'Was', 'Were'], a: 2, why: 'Другого глагола нет, «ты был» — это be; you → were.' },
        { t: 'choice', q: 'Did Tom call you? — Yes, he ___.', o: ['did', 'called', 'was'], a: 0, why: 'Короткий ответ повторяет помощника: Yes, he did.' },
        { t: 'choice', q: 'Where ___ they go on holiday last summer?', o: ['did', 'were', 'was'], a: 0, why: 'go — действие, last summer — прошлое → did.' },
        { t: 'choice', q: 'Как правильно?', o: ['She didn\'t bought a ticket.', 'She didn\'t buy a ticket.', 'She not bought a ticket.'], a: 1, why: 'didn\'t + начальная форма: buy, а не bought.' },
        { t: 'choice', q: 'I don\'t often play games. But I ___ games yesterday.', o: ['don\'t play', 'played', 'didn\'t played'], a: 1, why: 'yesterday → прошлое; утверждение без did: played. didn\'t played — две «прошлости» сразу.' },
        { t: 'choice', q: 'Who ___ the game? — Tom won.', o: ['won', 'did won', 'win'], a: 0, why: 'Who — это сам «кто победил», поэтому did не нужен: Who won?' },
        { t: 'gap', q: 'Did you have fun? — No, I ___.', a: ['didn\'t', 'did not'], why: 'Короткий ответ «нет» на вопрос с did: No, I didn\'t.' },
        { t: 'gap', q: 'What did you ___ at the weekend? (делать)', a: ['do'], why: 'did — помощник, а «делать» — это глагол do в начальной форме.' },
        { t: 'gap', q: 'We didn\'t ___ any photos. (take)', a: ['take'], why: 'После didn\'t глагол не меняется: take, а не took.' },
        { t: 'gap', q: '___ did you meet at the party? (кого)', a: ['who', 'whom'], why: '«Кого» — who; дальше did + кто + глагол.' },
        { t: 'gap', q: 'How ___ did you stay in Spain? (как долго)', a: ['long'], why: '«Как долго, сколько времени» = how long.' },
        { t: 'gap', q: 'He ___ swim in the sea. It was cold. (не)', a: ['didn\'t', 'did not'], why: 'Отрицание в прошлом для всех одно: didn\'t + глагол.' },
        { t: 'order', a: 'Where did you go last summer', ru: 'Куда ты ездил прошлым летом?' },
        { t: 'order', a: 'We did not visit the museum', ru: 'Мы не ходили в музей.' },
        { t: 'order', a: 'Did your friends like the film', ru: 'Твоим друзьям понравился фильм?' },
        { t: 'tr', q: 'Что ты делал вчера?', a: ['what did you do yesterday'] },
        { t: 'tr', q: 'Я его не видел.', a: ['i didn\'t see him', 'i did not see him'] },
        { t: 'listen', say: 'Did you have fun?', a: ['did you have fun'] }
      ],
      test: [
        { t: 'choice', q: 'She didn\'t ___ me yesterday.', o: ['called', 'call', 'calls'], a: 1, why: 'После didn\'t — начальная форма: call.' },
        { t: 'choice', q: '___ the weather good?', o: ['Did', 'Was', 'Were'], a: 1, why: '«Погода была хорошая?» — это be; the weather = it → Was.' },
        { t: 'choice', q: 'Did they win? — No, they ___.', o: ['didn\'t', 'don\'t', 'weren\'t'], a: 0, why: 'Вопрос с did → ответ с did: No, they didn\'t.' },
        { t: 'choice', q: 'Как правильно спросить?', o: ['Did your friend called you?', 'Did your friend call you?', 'Does your friend called you?'], a: 1, why: 'Did + кто (your friend) + глагол в начальной форме (call).' },
        { t: 'choice', q: 'I ___ tired, so I ___ to the concert.', o: ['was / didn\'t go', 'did / wasn\'t go', 'was / didn\'t went'], a: 0, why: '«Был уставший» — be → was; «не пошёл» — действие → didn\'t go.' },
        { t: 'choice', q: 'What ___ you do last night?', o: ['did', 'were', 'do'], a: 0, why: 'last night — прошлое, do — действие → did.' },
        { t: 'choice', q: 'I ___ time for breakfast yesterday.', o: ['didn\'t have', 'hadn\'t', 'didn\'t had'], a: 0, why: 'have отрицается как обычный глагол: didn\'t + have.' },
        { t: 'choice', q: 'Who ___ at the party? — I met Kate.', o: ['did you meet', 'you met', 'did you met'], a: 0, why: 'Who здесь «кого» (я встретил Kate) → Who + did + you + meet.' },
        { t: 'gap', q: '___ you take the train? (вопрос в прошлом)', a: ['did'], why: 'Вопрос в прошлом начинается с Did.' },
        { t: 'gap', q: 'Why did you ___ early? (leave)', a: ['leave'], why: 'После did — начальная форма: leave, а не left.' },
        { t: 'gap', q: 'I ___ go on holiday last year. (не)', a: ['didn\'t', 'did not'], why: 'last year — прошлое; «не» с действием = didn\'t.' },
        { t: 'gap', q: 'Did it rain on Sunday? — Yes, it ___.', a: ['did'], why: 'Короткий ответ повторяет did: Yes, it did.' }
      ]
    },

    // ───────────────────────────── GAMING 1 ─────────────────────────────
    {
      id: 'g-1', level: 'A1', num: 1, track: 'games',
      title: 'Игры: меню и интерфейс',
      summary: 'Поймём любое меню и подсказку в игре: команды Press / Select / Don\'t, «Press A to jump» и главные слова интерфейса.',
      grammar: [
        {
          title: '1. Главная идея: игра говорит с вами командами',
          html: `
<div class="g-idea">Почти всё, что пишет игра, — это <b>команды</b>: нажми, выбери, найди. В английском команда строится проще некуда: берём <b>глагол как в словаре</b> и ставим его первым. Без «you», без окончаний.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Нажм<b>и</b> / нажм<b>ите</b> A.</p><p>Выбер<b>и</b> / выбер<b>ите</b> персонажа.</p><p>Найд<b>и</b> / найд<b>ите</b> ключ.</p></div>
  <div><div class="g-h">English</div><p><span class="say"><b>Press</b> A.</span></p><p><span class="say"><b>Select</b> a character.</span></p><p><span class="say"><b>Find</b> the key.</span></p></div>
</div>
<p>В русском у команды два окончания: «на ты» (<i>нажми</i>) и «на вы» (<i>нажмите</i>). В английском форма <b>одна</b> — и для друга, и для незнакомца, и для целой команды игроков.</p>
<ul class="g-list">
<li><span class="say">Open the map.</span> — Открой(те) карту.</li>
<li><span class="say">Save the game.</span> — Сохрани(те) игру.</li>
<li><span class="say">Attack!</span> — Атакуй(те)!</li>
<li><span class="say">Run!</span> — Беги(те)!</li>
</ul>
<div class="g-tip">Команда = «чистый» глагол из словаря. Если вы знаете слово <b>jump</b> (прыгать) — вы уже знаете команду <b>Jump!</b> (Прыгай!)</div>
<div class="mini" data-q="Как игра скажет «Выберите сложность»?" data-o="You select the difficulty.|Select the difficulty.|Selecting the difficulty." data-a="1" data-why="Команда начинается прямо с глагола, без you и без -ing."></div>`
        },
        {
          title: '2. Что выбрать: the, a, your, any',
          html: `
<div class="g-idea">После глагола-команды идёт <b>что</b> нажать, открыть или найти. Перед этим словом почти всегда стоит маленькое слово-помощник. На русский его обычно не переводят, но смысл у каждого свой.</div>
<div class="g-formula"><span class="g-part g-v">Глагол</span><span class="g-plus">+</span><span class="g-part">the / a / your / any</span><span class="g-plus">+</span><span class="g-part">что</span></div>
<table>
<tr><th>Слово</th><th>Смысл</th><th>Пример</th></tr>
<tr><td><b>the</b></td><td>тот самый, один-единственный</td><td><span class="say">Open the map.</span></td></tr>
<tr><td><b>a / an</b></td><td>какой-то один, любой из многих</td><td><span class="say">Select a weapon.</span></td></tr>
<tr><td><b>your</b></td><td>твой / ваш</td><td><span class="say">Select your character.</span></td></tr>
<tr><td><b>any</b></td><td>любой</td><td><span class="say">Press any key.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Find the key.</span> — Найдите ключ. <span class="muted">(конкретный ключ от этой двери)</span></li>
<li><span class="say">Select an item.</span> — Выберите предмет. <span class="muted">(любой из инвентаря; an — перед гласным звуком)</span></li>
<li><span class="say">Don't lose your items.</span> — Не теряйте свои предметы.</li>
</ul>
<div class="g-bad">Select you character.</div>
<div class="g-good">Select your character. <span class="muted">— you = ты, your = твой</span></div>
<div class="g-tip">Не бойтесь этих маленьких слов: для понимания команды главное — <b>первое слово</b> (что сделать) и <b>последнее</b> (с чем).</div>
<div class="mini" data-q="Press any key. Что нужно нажать?" data-o="Клавишу Any|Любую клавишу|Ключ" data-a="1" data-why="any = любой; key здесь — клавиша."></div>`
        },
        {
          title: '3. Команда + «чтобы»: Press A to jump',
          html: `
<div class="g-idea">Игра часто объясняет, <b>зачем</b> нажимать кнопку. Для этого после команды ставят <b>to + глагол</b> — это русское «чтобы».</div>
<div class="g-formula"><span class="g-part g-v">Глагол</span><span class="g-plus">+</span><span class="g-part">что</span><span class="g-plus">+</span><span class="g-part g-v">to + глагол</span></div>
<table>
<tr><th>Английский</th><th>Перевод</th></tr>
<tr><td><span class="say">Press A to jump.</span></td><td>Нажмите A, <b>чтобы</b> прыгнуть.</td></tr>
<tr><td><span class="say">Press X to attack.</span></td><td>Нажмите X, <b>чтобы</b> атаковать.</td></tr>
<tr><td><span class="say">Press any key to start.</span></td><td>Нажмите любую клавишу, <b>чтобы</b> начать.</td></tr>
<tr><td><span class="say">Press M to open the map.</span></td><td>Нажмите M, <b>чтобы</b> открыть карту.</td></tr>
<tr><td><span class="say">Select Continue to load the game.</span></td><td>Выберите «Продолжить», <b>чтобы</b> загрузить игру.</td></tr>
</table>
<div class="g-steps"><div class="g-h">Как читать подсказку</div><ol>
<li>Первое слово — <b>что сделать</b> (Press).</li>
<li>Дальше — <b>какую кнопку / что</b> (X).</li>
<li>После <b>to</b> — <b>зачем</b> (attack).</li>
</ol></div>
<p>Обратите внимание: «нажми <b>на</b> кнопку» по-английски без «на» — просто <b>press</b> A.</p>
<div class="g-bad">Press on A to jump.</div>
<div class="g-good">Press A to jump.</div>
<div class="mini" data-q="Press B to run. Что будет, если нажать B?" data-o="Персонаж прыгнет|Персонаж побежит|Игра сохранится" data-a="1" data-why="to run — чтобы бежать. Значит, B — бег."></div>`
        },
        {
          title: '4. Запрет: Don\'t + глагол',
          html: `
<div class="g-idea">Чтобы сказать «<b>не</b> делай», перед глаголом ставим <b>Don't</b> (коротко от do not). И всё — глагол не меняется.</div>
<div class="g-formula"><span class="g-part">Don't</span><span class="g-plus">+</span><span class="g-part g-v">глагол</span><span class="g-plus">+</span><span class="g-part">что</span></div>
<ul class="g-list">
<li><span class="say">Don't die!</span> — Не умирай!</li>
<li><span class="say">Don't attack!</span> — Не атакуй!</li>
<li><span class="say">Don't run!</span> — Не беги!</li>
<li><span class="say">Don't lose your items.</span> — Не потеряй свои предметы.</li>
<li><span class="say">Don't quit the game.</span> — Не выходи из игры.</li>
</ul>
<p>Русские любят сказать просто «не» (<i>not</i>) или «нет» (<i>no</i>) — в английской команде так нельзя, нужен именно <b>Don't</b>.</p>
<div class="g-bad">Not attack!</div>
<div class="g-good">Don't attack!</div>
<div class="g-bad">No run!</div>
<div class="g-good">Don't run!</div>
<div class="g-tip">Чтобы попросить вежливо, добавьте <b>please</b> в начало или в конец: <span class="say">Please select a character.</span> <span class="say">Don't quit, please.</span></div>
<div class="mini" data-q="«Не выходи из игры!»" data-o="Not quit the game!|Don't quit the game!|No quit the game!" data-a="1" data-why="Запрет = Don't + глагол."></div>
<div class="mini" data-q="Don't lose your items. Что игра советует?" data-o="Потерять предметы|Не терять предметы|Выбрать предметы" data-a="1" data-why="Don't lose — не теряй."></div>`
        },
        {
          title: '5. Меню, настройки и экраны игры',
          html: `
<div class="g-idea">Пункты меню — это тоже команды или короткие названия. Выучите их один раз — и они работают в любой игре.</div>
<table>
<tr><th>Пункт меню</th><th>Перевод</th><th>Что это</th></tr>
<tr><td><span class="say">New Game</span></td><td>Новая игра</td><td>начать заново</td></tr>
<tr><td><span class="say">Continue</span></td><td>Продолжить</td><td>с места, где остановились</td></tr>
<tr><td><span class="say">Load Game</span></td><td>Загрузить игру</td><td>выбрать сохранение</td></tr>
<tr><td><span class="say">Save</span></td><td>Сохранить</td><td>запомнить прогресс</td></tr>
<tr><td><span class="say">Settings</span> / <span class="say">Options</span></td><td>Настройки</td><td>звук, графика…</td></tr>
<tr><td><span class="say">Quit</span> / <span class="say">Exit</span></td><td>Выйти</td><td>закрыть игру</td></tr>
<tr><td><span class="say">Back</span></td><td>Назад</td><td>прошлый экран</td></tr>
</table>
<p>Внутри настроек:</p>
<ul class="g-list">
<li><span class="say">Audio</span> — звук · <span class="say">Graphics</span> — графика</li>
<li><span class="say">Controls</span> — управление · <span class="say">Subtitles</span> — субтитры</li>
<li><span class="say">On</span> / <span class="say">Off</span> — вкл. / выкл.</li>
<li><span class="say">Difficulty</span> — сложность: <span class="say">Easy</span> / <span class="say">Normal</span> / <span class="say">Hard</span></li>
</ul>
<p>Экраны, которые видит каждый игрок:</p>
<ul class="g-list">
<li><span class="say">Loading…</span> — Загрузка…</li>
<li><span class="say">Game Over</span> — Конец игры · <span class="say">You died.</span> — Вы погибли.</li>
<li><span class="say">Try again? Yes / No</span> — Попробовать снова? Да / Нет</li>
<li><span class="say">You win!</span> — Вы победили! · <span class="say">Level up!</span> — Новый уровень!</li>
<li><span class="say">Tip:</span> — Совет: (подсказка на экране загрузки)</li>
</ul>
<div class="g-tip"><b>Save</b> и <b>Load</b> — пара: «положить в копилку» и «достать из копилки». <b>Continue</b> — это Load последнего сохранения одной кнопкой.</div>
<div class="mini" data-q="Хотите включить субтитры. Куда идти?" data-o="Load Game|Settings|Quit" data-a="1" data-why="Субтитры (Subtitles) — в настройках, Settings / Options."></div>
<div class="mini" data-q="Game Over. Try again? — что спрашивает игра?" data-o="Сохранить игру?|Попробовать снова?|Выйти из игры?" data-a="1" data-why="Try again — попробовать снова."></div>`
        },
        {
          title: '6. Типичные ошибки — проверьте себя',
          html: `
<div class="g-mistakes">
<div class="g-bad">You open the map. <span class="muted">— как команда</span></div><div class="g-good"><b>Open</b> the map.</div>
<div class="g-bad">Pressing A to jump.</div><div class="g-good"><b>Press</b> A to jump.</div>
<div class="g-bad">Press on any key.</div><div class="g-good">Press any key.</div>
<div class="g-bad">Press A for jump.</div><div class="g-good">Press A <b>to</b> jump.</div>
<div class="g-bad">Not attack!</div><div class="g-good"><b>Don't</b> attack!</div>
<div class="g-bad">Don't to run!</div><div class="g-good">Don't <b>run</b>!</div>
<div class="g-bad">Select you character.</div><div class="g-good">Select <b>your</b> character.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Команда = <b>глагол</b> первым словом (<b>Press A</b>), запрет = <b>Don't + глагол</b>, «чтобы» = <b>to + глагол</b>.</div>`
        }
      ],
      words: [
        ['new game', 'новая игра', 'Select New Game to start.', 'Выберите «Новая игра», чтобы начать.'],
        ['continue', 'продолжить', 'Continue? Yes / No', 'Продолжить? Да / Нет'],
        ['load', 'загружать', 'Load the game.', 'Загрузите игру.'],
        ['save', 'сохранять; сохранение', 'Save the game.', 'Сохраните игру.'],
        ['settings', 'настройки', 'Open the settings.', 'Откройте настройки.'],
        ['quit', 'выйти, бросить', 'Quit the game? Yes / No', 'Выйти из игры? Да / Нет'],
        ['press', 'нажимать', 'Press any key.', 'Нажмите любую клавишу.'],
        ['select', 'выбирать', 'Select the difficulty.', 'Выберите сложность.'],
        ['character', 'персонаж', 'Select your character.', 'Выберите своего персонажа.'],
        ['level', 'уровень', 'Level 3: find the key.', 'Уровень 3: найдите ключ.'],
        ['quest', 'квест, задание', 'Quest: find the key.', 'Квест: найдите ключ.'],
        ['health', 'здоровье', 'Health: 2 / 10.', 'Здоровье: 2 из 10.'],
        ['enemy', 'враг', 'Attack the enemy!', 'Атакуйте врага!'],
        ['weapon', 'оружие', 'Select a weapon.', 'Выберите оружие.'],
        ['skill', 'навык, умение', 'Select a skill.', 'Выберите навык.'],
        ['inventory', 'инвентарь', 'Press I to open the inventory.', 'Нажмите I, чтобы открыть инвентарь.'],
        ['map', 'карта', 'Open the map.', 'Откройте карту.'],
        ['attack', 'атаковать; атака', 'Press X to attack.', 'Нажмите X, чтобы атаковать.'],
        ['jump', 'прыгать', 'Press A to jump.', 'Нажмите A, чтобы прыгнуть.'],
        ['run', 'бежать', 'Run!', 'Беги!'],
        ['find', 'находить', 'Find the key.', 'Найдите ключ.'],
        ['key', 'ключ; клавиша', 'Press any key.', 'Нажмите любую клавишу.'],
        ['win', 'побеждать', 'You win!', 'Вы победили!'],
        ['lose', 'проигрывать, терять', 'Don\'t lose your items.', 'Не потеряйте свои предметы.'],
        ['try again', 'попробовать снова', 'You died. Try again?', 'Вы погибли. Попробовать снова?'],
        ['item', 'предмет', 'Select an item.', 'Выберите предмет.'],
        ['reward', 'награда', 'Reward: a weapon.', 'Награда: оружие.'],
        ['difficulty', 'сложность', 'Difficulty: Easy / Normal / Hard', 'Сложность: лёгкая / обычная / высокая'],
        ['easy', 'лёгкий', 'Select Easy.', 'Выберите «Лёгкий».'],
        ['hard', 'трудный, сложный', 'Difficulty: Hard.', 'Сложность: высокая.'],
        ['player', 'игрок', 'Player 1: press A.', 'Игрок 1: нажмите A.'],
        ['team', 'команда', 'Select a team.', 'Выберите команду.'],
        ['open', 'открывать', 'Press M to open the map.', 'Нажмите M, чтобы открыть карту.'],
        ['start', 'начинать', 'Press any key to start.', 'Нажмите любую клавишу, чтобы начать.'],
        ['die', 'умирать, погибать', 'Don\'t die!', 'Не умирай!']
      ],
      texts: [
        {
          id: 't-g-1-1', title: 'Tutorial', level: 'A1',
          text: `Hello, player!
Press any key to start.
MENU: New Game / Continue / Load Game / Settings / Quit
Select New Game.
Select your character: 1, 2 or 3.
Select the difficulty: Easy, Normal or Hard.
Press A to jump. Press B to run. Press X to attack.
Press M to open the map.
Quest: find the key.
Open the map and find the key. Don't run to the enemy!
Enemy! Press X to attack the enemy. Don't die!
You win! Reward: a weapon and 5 items.
Press I to open the inventory. Select the weapon.
Level up! Level 2.
New skill: Jump + Attack. Press A and X.
Save the game. Don't lose your items!
Thank you, player. Continue? Yes / No`,
          questions: [
            { q: 'Press A to…', o: ['jump', 'run', 'attack'], a: 0 },
            { q: 'Quest: find the…', o: ['map', 'key', 'weapon'], a: 1 },
            { q: 'Reward: …', o: ['a key and a map', 'a weapon and 5 items', 'a new character'], a: 1 }
          ]
        },
        {
          id: 't-g-1-2', title: 'Game over', level: 'A1',
          text: `GAME OVER
You died.
Enemy: level 10. Your level: 3.
Try again? Yes / No
Select Yes.
Loading…
Tip: Don't attack the enemy on level 3. Find a weapon.
Tip: Save the game. Save, save, save!
Tip: Press M to open the map. Don't run to the enemy. Find the key.
Tip: Hard? Open the settings and select Easy. Easy is OK!
SETTINGS: Audio / Graphics / Controls / Subtitles / Difficulty
Subtitles: On / Off. Select On.
Difficulty: Easy / Normal / Hard. Select Easy.
Press B: Back.
Continue? Yes / No
Select Yes.
Level 3. Quest: find the key.
Don't run! Find a weapon. Attack the enemy!
You win! Level up!`,
          questions: [
            { q: 'Enemy: level…', o: ['3', '5', '10'], a: 2 },
            { q: 'Tip: open the settings and select…', o: ['Hard', 'Easy', 'Quit'], a: 1 },
            { q: 'Subtitles: …', o: ['On', 'Off', 'Hard'], a: 0 }
          ]
        }
      ],
      practice: [
        { t: 'choice', q: '«Продолжить» в меню:', o: ['Quit', 'Continue', 'Load'], a: 1, why: 'Continue — продолжить с места, где остановились; Quit — выйти.' },
        { t: 'choice', q: '«Настройки»:', o: ['Settings', 'Save', 'Select'], a: 0, why: 'Settings (или Options) — настройки; Save — сохранить, Select — выбрать.' },
        { t: 'choice', q: 'Health: 2 / 10. Что это значит?', o: ['Мало здоровья', 'Много врагов', 'Второй уровень'], a: 0, why: 'Health — здоровье: осталось 2 из 10.' },
        { t: 'choice', q: 'Press I to open the inventory.', o: ['Нажмите I, чтобы открыть инвентарь', 'Нажмите I, чтобы открыть карту', 'Нажмите I, чтобы выйти'], a: 0, why: 'inventory — инвентарь; to open — чтобы открыть.' },
        { t: 'choice', q: 'Press X to attack.', o: ['Нажмите X, чтобы прыгнуть', 'Нажмите X, чтобы атаковать', 'Нажмите X, чтобы сохранить'], a: 1, why: 'to attack — чтобы атаковать.' },
        { t: 'choice', q: 'Как игра скажет «Не умирай!»?', o: ['Not die!', 'Don\'t die!', 'No die!'], a: 1, why: 'Запрет = Don\'t + глагол.' },
        { t: 'choice', q: 'Как игра скажет «Выберите персонажа»?', o: ['Select a character.', 'You select a character.', 'Selecting a character.'], a: 0, why: 'Команда начинается прямо с глагола, без you и без -ing.' },
        { t: 'choice', q: '«Нажмите A, чтобы прыгнуть»:', o: ['Press on A to jump.', 'Press A to jump.', 'Press A jump.'], a: 1, why: 'press — без «on»; «чтобы» = to + глагол.' },
        { t: 'gap', q: 'Press A to ___. (прыгнуть)', a: ['jump'], why: 'После to — глагол в словарной форме: jump.' },
        { t: 'gap', q: '___ the game. (сохраните)', a: ['save'], why: 'Команда = глагол первым словом: Save.' },
        { t: 'gap', q: 'You died. Try ___?', a: ['again'], why: 'Try again — попробовать снова.' },
        { t: 'gap', q: '___ the key. (найдите)', a: ['find'], why: 'Команда = глагол как в словаре: Find.' },
        { t: 'gap', q: '___ lose your items! (не)', a: ['don\'t', 'do not'], why: 'Запрет = Don\'t + глагол, а не Not / No.' },
        { t: 'gap', q: 'Difficulty: Easy / Normal / ___ (высокая)', a: ['hard'], why: 'Hard — трудный, сложный.' },
        { t: 'order', a: 'Press any key to start', ru: 'Нажмите любую клавишу, чтобы начать.' },
        { t: 'order', a: 'Select your character', ru: 'Выберите своего персонажа.' },
        { t: 'order', a: 'Don\'t attack the enemy', ru: 'Не атакуйте врага.' },
        { t: 'tr', q: 'Откройте карту.', a: ['open the map'] },
        { t: 'tr', q: 'Не выходи из игры!', a: ['don\'t quit the game', 'do not quit the game', 'don\'t exit the game', 'do not exit the game', 'don\'t quit', 'do not quit'] },
        { t: 'listen', say: 'Save the game', a: ['save the game'] }
      ],
      test: [
        { t: 'choice', q: 'enemy =', o: ['друг', 'враг', 'игрок'], a: 1, why: 'enemy — враг; игрок — player.' },
        { t: 'choice', q: 'reward =', o: ['награда', 'оружие', 'навык'], a: 0, why: 'reward — награда; оружие — weapon, навык — skill.' },
        { t: 'choice', q: 'Difficulty: Easy / Normal / Hard. Это про…', o: ['графику', 'сложность', 'звук'], a: 1, why: 'Difficulty — сложность игры.' },
        { t: 'choice', q: 'Load Game — это…', o: ['загрузить сохранение', 'начать новую игру', 'выйти из игры'], a: 0, why: 'Load — загружать; новая игра — New Game, выйти — Quit.' },
        { t: 'choice', q: '«Не нажимайте B!»', o: ['Don\'t press B!', 'Not press B!', 'Don\'t to press B!'], a: 0, why: 'Don\'t + глагол, без to.' },
        { t: 'choice', q: 'Press B to run. Что делает кнопка B?', o: ['бег', 'прыжок', 'атака'], a: 0, why: 'to run — чтобы бежать.' },
        { t: 'choice', q: 'Как сказать «Выберите команду»?', o: ['Select a team.', 'Selects a team.', 'You selecting a team.'], a: 0, why: 'Команда — глагол в словарной форме первым словом: Select.' },
        { t: 'choice', q: 'Quit — это…', o: ['выйти', 'продолжить', 'сохранить'], a: 0, why: 'Quit (или Exit) — выйти; продолжить — Continue, сохранить — Save.' },
        { t: 'gap', q: '___ the enemy! (атакуйте)', a: ['attack'], why: 'Команда = глагол первым словом: Attack.' },
        { t: 'gap', q: 'You ___! (победили)', a: ['win', 'won'], why: 'Экран победы в играх: You win!' },
        { t: 'gap', q: 'Select a ___. (оружие)', a: ['weapon'], why: 'weapon — оружие.' },
        { t: 'gap', q: 'Press any ___ to start. (клавишу)', a: ['key', 'button'], why: 'key — и ключ, и клавиша: Press any key.' }
      ]
    }
  ].forEach(put);
})();
