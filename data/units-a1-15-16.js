// Юниты A1 15–16: прилагательные, наречия, порядок слов; просьбы и предложения (would like, повелительное, let's)

COURSE.units.push(
  // ───────────────────────────── UNIT 15 ─────────────────────────────
  {
    id: 'a1-15', level: 'A1', num: 15, track: 'main',
    books: { red: [85, 86, 93, 94] },
    title: 'Quick, quickly — прилагательные, наречия, порядок слов',
    summary: 'Как сказать «быстрый игрок» и «играет быстро», «выглядит устало», «всегда опаздывает» — и в каком порядке ставить слова в предложении.',
    grammar: [
      {
        title: '1. Главная идея: «какой?» и «как?» — это разные слова',
        html: `
<div class="g-idea">По-русски «быстр<b>ый</b>» и «быстр<b>о</b>» — два разных слова. В английском так же: <b>quick</b> отвечает на вопрос «какой?» (описывает человека или вещь), а <b>quickly</b> — на вопрос «как?» (описывает действие).</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Он быстр<b>ый</b> игрок.</p><p>Он играет быстр<b>о</b>.</p><p>Она тих<b>ая</b>.</p><p>Она говорит тих<b>о</b>.</p></div>
  <div><div class="g-h">English</div><p><span class="say">He is a <b>quick</b> player.</span></p><p><span class="say">He plays <b>quickly</b>.</span></p><p><span class="say">She is <b>quiet</b>.</span></p><p><span class="say">She speaks <b>quietly</b>.</span></p></div>
</div>
<table>
<tr><th>Вопрос</th><th>Что ставим</th><th>Пример</th></tr>
<tr><td>какой? какая?</td><td>прилагательное: <b>quick, bad, careful</b></td><td><span class="say">a bad game</span></td></tr>
<tr><td>как? каким образом?</td><td>наречие: <b>quickly, badly, carefully</b></td><td><span class="say">We played badly.</span></td></tr>
</table>
<div class="g-tip">Русское наречие обычно кончается на <b>-о</b>: быстр<b>о</b>, тих<b>о</b>, плох<b>о</b>. В английском его «хвостик» — <b>-ly</b>: quick<b>ly</b>, quiet<b>ly</b>, bad<b>ly</b>. Слышите «-о» в русском — ставьте «-ly» в английском.</div>
<div class="mini" data-q="Она говорит медленно." data-o="She speaks slow.|She speaks slowly.|She is speak slowly." data-a="1" data-why="«Как говорит?» — это действие, нужно наречие slowly."></div>`
      },
      {
        title: '2. Прилагательное: перед существительным и без окончаний',
        html: `
<p><b>Прилагательное</b> — слово «какой?»: new, old, nice, famous. В английском оно стоит <b>перед</b> существительным, как и в русском.</p>
<div class="g-formula"><span class="g-part">a / the / my</span><span class="g-plus">+</span><span class="g-part g-v">прилагательное</span><span class="g-plus">+</span><span class="g-part">существительное</span></div>
<ul class="g-list">
<li><span class="say">It's a nice day.</span> — Хороший день.</li>
<li><span class="say">I have an old laptop.</span> — У меня старый ноутбук.</li>
<li><span class="say">Do you like Italian food?</span> — Ты любишь итальянскую еду?</li>
<li><span class="say">She works in a modern studio.</span> — Она работает в современной студии.</li>
</ul>
<div class="g-bad">They met people famous.</div>
<div class="g-good">They met famous people.</div>
<p>Главная радость: прилагательное <b>никогда не меняется</b>. Нет рода, нет числа, нет падежей. Русские «новый, новая, новые, новых» — всё это просто <b>new</b>.</p>
<ul class="g-list">
<li><span class="say">a new game — new games</span> — новая игра — новые игры</li>
<li><span class="say">my new friend — my new friends</span> — мой новый друг — мои новые друзья</li>
</ul>
<div class="g-bad">We play differents games.</div>
<div class="g-good">We play different games. <span class="muted">— -s бывает только у существительного</span></div>
<p>Прилагательное может стоять и <b>после be</b> (am/is/are/was/were) — тогда существительного после него нет:</p>
<ul class="g-list">
<li><span class="say">The weather is nice today.</span> — Сегодня хорошая погода.</li>
<li><span class="say">The film wasn't very good.</span> — Фильм был не очень.</li>
<li><span class="say">Are you cold?</span> — Тебе холодно?</li>
</ul>
<div class="g-tip">Если прилагательных два, сначала <b>мнение</b> (nice, beautiful, boring), потом <b>факт</b> (размер, возраст, цвет): <span class="say">a beautiful old house</span>, <span class="say">a nice red jacket</span>.</div>
<div class="mini" data-q="Это дорогие наушники." data-o="These are expensives headphones.|These are expensive headphones.|These are headphones expensive." data-a="1" data-why="Прилагательное стоит перед существительным и не получает -s."></div>
<div class="mini" data-q="The level ___." data-o="is hard|hard|is a hard" data-a="0" data-why="После существительного нужно be: is + прилагательное, без артикля."></div>`
      },
      {
        title: '3. look, feel, sound, smell, taste + прилагательное',
        html: `
<p>Эти пять глаголов описывают, <b>каким кажется</b> человек или вещь. После них ставим <b>прилагательное</b>, а не -ly.</p>
<table>
<tr><th>Глагол</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>look</b></td><td>выглядеть</td><td><span class="say">You look tired.</span></td></tr>
<tr><td><b>feel</b></td><td>чувствовать себя</td><td><span class="say">I feel great today.</span></td></tr>
<tr><td><b>sound</b></td><td>звучать</td><td><span class="say">That sounds interesting.</span></td></tr>
<tr><td><b>smell</b></td><td>пахнуть</td><td><span class="say">The pizza smells good.</span></td></tr>
<tr><td><b>taste</b></td><td>быть на вкус</td><td><span class="say">This coffee tastes bad.</span></td></tr>
</table>
<p>Ловушка для русских: мы говорим «выглядит <b>устало</b>», «пахнет <b>вкусно</b>», «звучит <b>классно</b>» — с «-о». А в английском здесь прилагательное:</p>
<div class="g-bad">You look tiredly. · It smells well.</div>
<div class="g-good">You look tired. · It smells good.</div>
<ul class="g-list">
<li><span class="say">The new map looks beautiful.</span> — Новая карта выглядит красиво.</li>
<li><span class="say">Your plan sounds good!</span> — Твой план звучит хорошо!</li>
<li><span class="say">He doesn't feel well.</span> — Он плохо себя чувствует. <span class="muted">(well = здоров, см. блок 5)</span></li>
</ul>
<div class="g-tip">Мысленно замените глагол на <b>is</b>: «It smells good» ≈ «It is good». Если с is получается нормальная фраза — значит, нужно прилагательное.</div>
<div class="mini" data-q="The new level looks ___." data-o="amazing|amazingly|amaze" data-a="0" data-why="После look (выглядеть) ставим прилагательное."></div>`
      },
      {
        title: '4. Наречие: прилагательное + -ly',
        html: `
<p><b>Наречие</b> отвечает на вопрос «как?» и описывает <b>действие</b>. Почти всегда его делают из прилагательного:</p>
<div class="g-formula"><span class="g-part">прилагательное</span><span class="g-plus">+</span><span class="g-part g-v">-ly</span><span class="g-sep">·</span><span class="g-part">quick → quickly</span></div>
<table>
<tr><th>Правило</th><th>Примеры</th></tr>
<tr><td>обычно просто <b>+ly</b></td><td>slow → <span class="say">slowly</span>, bad → <span class="say">badly</span>, sudden → <span class="say">suddenly</span></td></tr>
<tr><td>на <b>-l</b> → получается <b>-lly</b></td><td>careful → <span class="say">carefully</span>, beautiful → <span class="say">beautifully</span></td></tr>
<tr><td>согласная + <b>y</b> → <b>-ily</b></td><td>easy → <span class="say">easily</span>, heavy → <span class="say">heavily</span>, angry → <span class="say">angrily</span></td></tr>
<tr><td>на <b>-le</b> → <b>-ly</b></td><td>terrible → <span class="say">terribly</span>, simple → <span class="say">simply</span></td></tr>
</table>
<p>Наречие обычно стоит <b>после глагола</b> (или после «глагол + что»):</p>
<ul class="g-list">
<li><span class="say">The train stopped suddenly.</span> — Поезд резко остановился.</li>
<li><span class="say">I opened the door slowly.</span> — Я медленно открыл дверь.</li>
<li><span class="say">It's raining heavily.</span> — Идёт сильный дождь.</li>
<li><span class="say">She won the match easily.</span> — Она легко выиграла матч.</li>
</ul>
<p>Сравните пары — одна мысль, разные вопросы:</p>
<table>
<tr><th>Какой? (прилагательное)</th><th>Как? (наречие)</th></tr>
<tr><td><span class="say">It was a bad game.</span></td><td><span class="say">Our team played badly.</span></td></tr>
<tr><td><span class="say">He is a careful driver.</span></td><td><span class="say">He drives carefully.</span></td></tr>
<tr><td><span class="say">I was nervous.</span></td><td><span class="say">I waited nervously.</span></td></tr>
</table>
<div class="g-bad">She speaks very quiet.</div>
<div class="g-good">She speaks very quietly.</div>
<div class="mini" data-q="easy → наречие:" data-o="easyly|easily|easly" data-a="1" data-why="Согласная + y → -ily: easily."></div>
<div class="mini" data-q="He checked the design ___." data-o="careful|carefully|carefuly" data-a="1" data-why="Как проверил? — наречие; careful + ly = carefully (два l)."></div>`
      },
      {
        title: '5. Исключения: hard, fast, late, early и good → well',
        html: `
<p>Четыре частых слова <b>не меняются</b>: одно и то же слово работает и как «какой?», и как «как?».</p>
<table>
<tr><th>Слово</th><th>Какой?</th><th>Как?</th></tr>
<tr><td><b>hard</b></td><td><span class="say">a hard level</span></td><td><span class="say">I work hard.</span></td></tr>
<tr><td><b>fast</b></td><td><span class="say">a fast car</span></td><td><span class="say">He runs fast.</span></td></tr>
<tr><td><b>late</b></td><td><span class="say">The bus was late.</span></td><td><span class="say">I got up late.</span></td></tr>
<tr><td><b>early</b></td><td><span class="say">an early train</span></td><td><span class="say">We left early.</span></td></tr>
</table>
<div class="g-bad">He works hardly. · She drives fastly.</div>
<div class="g-good">He works hard. · She drives fast.</div>
<div class="g-tip">Слово <b>hardly</b> существует, но значит совсем другое — «почти не»: <span class="say">I hardly slept.</span> — Я почти не спал. «Fastly» не существует вообще.</div>
<p>Самое важное исключение: <b>good</b> (хороший) → <b>well</b> (хорошо).</p>
<ul class="g-list">
<li><span class="say">Your English is very good.</span> — Твой английский очень хороший.</li>
<li><span class="say">You speak English very well.</span> — Ты очень хорошо говоришь по-английски.</li>
<li><span class="say">It was a good match. We played well.</span> — Был хороший матч. Мы хорошо сыграли.</li>
</ul>
<div class="g-bad">You play very good.</div>
<div class="g-good">You play very well.</div>
<p>И ещё: <b>well</b> бывает прилагательным со значением «здоров»: <span class="say">How are you? — I'm very well, thanks.</span> — Как дела? — Отлично, спасибо.</p>
<p class="muted">Обратная ловушка: friendly (дружелюбный) и lovely (милый) кончаются на -ly, но это прилагательные: a friendly player.</p>
<div class="mini" data-q="She plays the guitar very ___." data-o="good|well|goodly" data-a="1" data-why="Как играет? — наречие от good — well."></div>
<div class="mini" data-q="I work ___ every day." data-o="hard|hardly|hardy" data-a="0" data-why="hard = усердно; hardly = почти не."></div>`
      },
      {
        title: '6. Порядок слов: глагол + что — рядом, «где» перед «когда»',
        html: `
<div class="g-idea">По-русски слова можно переставлять: «Люблю очень пиццу», «Вчера мы в кино ходили». В английском порядок почти жёсткий, и от него зависит, поймут ли вас.</div>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">глагол</span><span class="g-plus">+</span><span class="g-part">что</span><span class="g-plus">+</span><span class="g-part">как</span><span class="g-plus">+</span><span class="g-part">где</span><span class="g-plus">+</span><span class="g-part">когда</span></div>
<div class="g-steps"><div class="g-h">Два правила</div><ol>
<li><b>Глагол и то, что он делает (объект), стоят вместе.</b> Между ними ничего не вставляем — ни «очень», ни «хорошо», ни «вчера».</li>
<li><b>Место</b> (где? куда?) идёт <b>перед временем</b> (когда? как часто? как долго?).</li>
</ol></div>
<ul class="g-list">
<li><span class="say">He speaks English very well.</span> — Он очень хорошо говорит по-английски.</li>
<li><span class="say">I like this series very much.</span> — Мне очень нравится этот сериал.</li>
<li><span class="say">Tom bought a gift for his sister.</span> — Том купил подарок сестре.</li>
<li><span class="say">We met our friends in the park yesterday.</span> — Мы встретили друзей в парке вчера.</li>
<li><span class="say">Lisa walks to work every day.</span> — Лиза каждый день ходит на работу пешком.</li>
<li><span class="say">I was at home all evening.</span> — Я весь вечер был дома.</li>
</ul>
<div class="g-bad">He speaks very well English.</div>
<div class="g-good">He speaks English very well.</div>
<div class="g-bad">I drink every day two cups of coffee.</div>
<div class="g-good">I drink two cups of coffee every day.</div>
<div class="g-bad">We went yesterday to the cinema.</div>
<div class="g-good">We went to the cinema yesterday.</div>
<div class="g-tip">Глагол и его «что» — как магниты: <b>speak English</b>, <b>like pizza</b>, <b>play games</b>. Всё остальное — <b>после</b> них. Время можно поставить и в самое начало: <span class="say">Yesterday we went to the cinema.</span></div>
<div class="mini" data-q="Как правильно?" data-o="I play every day games.|I play games every day.|I every day play games." data-a="1" data-why="play games — вместе; время (every day) — в конце."></div>
<div class="mini" data-q="Как правильно?" data-o="They went to Spain last summer.|They went last summer to Spain.|They last summer went to Spain." data-a="0" data-why="Место (to Spain) идёт перед временем (last summer)."></div>`
      },
      {
        title: '7. always, usually, often, never — где их ставить',
        html: `
<p>Слова «как часто» (<b>always, usually, often, sometimes, rarely, never</b>) и ещё несколько коротких слов (<b>also, still, all, both</b>) стоят <b>в середине</b> предложения, рядом с глаголом.</p>
<table>
<tr><th>Слово</th><th>Значение</th><th>Как часто</th></tr>
<tr><td><b>always</b></td><td>всегда</td><td>100%</td></tr>
<tr><td><b>usually</b></td><td>обычно</td><td>90%</td></tr>
<tr><td><b>often</b></td><td>часто</td><td>70%</td></tr>
<tr><td><b>sometimes</b></td><td>иногда</td><td>40%</td></tr>
<tr><td><b>rarely / seldom</b></td><td>редко</td><td>10%</td></tr>
<tr><td><b>never</b></td><td>никогда</td><td>0%</td></tr>
</table>
<div class="g-steps"><div class="g-h">Три места — три правила</div><ol>
<li><b>Перед обычным глаголом:</b> <span class="say">I always drink coffee in the morning.</span> <span class="say">She often plays online.</span> <span class="say">We rarely watch TV.</span></li>
<li><b>После am / is / are / was / were:</b> <span class="say">I'm always tired on Monday.</span> <span class="say">He is never late.</span> <span class="say">It was often cold there.</span></li>
<li><b>Между двумя глаголами</b> (can, do/does, did + глагол): <span class="say">I can never find my keys.</span> <span class="say">It doesn't often rain here.</span> <span class="say">Do you usually work from home?</span></li>
</ol></div>
<div class="g-bad">I drink always coffee. · I always am late.</div>
<div class="g-good">I always drink coffee. · I am always late.</div>
<div class="g-tip">Запомните: с <b>be</b> — <b>после</b>, с любым другим глаголом — <b>перед</b>. <span class="say">She is always busy.</span> но <span class="say">She always works.</span></div>
<p>Так же ведут себя:</p>
<ul class="g-list">
<li><b>also</b> (тоже, также): <span class="say">He also plays chess.</span> — Он также играет в шахматы.</li>
<li><b>still</b> (всё ещё): <span class="say">She's still at work.</span> — Она всё ещё на работе.</li>
<li><b>all / both</b> (все / оба): <span class="say">My friends all play games.</span> <span class="say">We are both designers.</span></li>
</ul>
<p><b>never</b> уже содержит «не». Русское двойное «никогда не» превращается в одно слово:</p>
<div class="g-bad">I never don't eat meat.</div>
<div class="g-good">I never eat meat. — Я никогда не ем мясо.</div>
<p class="muted">В вопросах «когда-нибудь» — это <b>ever</b>: <span class="say">Do you ever play chess?</span> — Ты когда-нибудь играешь в шахматы? <b>sometimes</b> можно поставить и в начало: <span class="say">Sometimes I play all night.</span></p>
<div class="mini" data-q="She ___ late." data-o="always is|is always|always" data-a="1" data-why="С be (is) слово always стоит после него."></div>
<div class="mini" data-q="Я никогда не завтракаю." data-o="I never eat breakfast.|I eat never breakfast.|I never don't eat breakfast." data-a="0" data-why="never — перед обычным глаголом, и второе «не» не нужно."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">He plays very good.</div><div class="g-good">He plays very <b>well</b>.</div>
<div class="g-bad">You look tiredly.</div><div class="g-good">You look <b>tired</b>.</div>
<div class="g-bad">She drives careful.</div><div class="g-good">She drives <b>carefully</b>.</div>
<div class="g-bad">I work hardly.</div><div class="g-good">I work <b>hard</b>.</div>
<div class="g-bad">They are differents players.</div><div class="g-good">They are <b>different</b> players.</div>
<div class="g-bad">I like very much this series.</div><div class="g-good">I like <b>this series very much</b>.</div>
<div class="g-bad">We went yesterday to the park.</div><div class="g-good">We went <b>to the park yesterday</b>.</div>
<div class="g-bad">I drink always tea.</div><div class="g-good">I <b>always drink</b> tea.</div>
<div class="g-bad">He always is busy.</div><div class="g-good">He <b>is always</b> busy.</div>
<div class="g-bad">I never don't play at night.</div><div class="g-good">I <b>never play</b> at night.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>Какой?</b> — quick, good (перед существительным и после be/look/feel) · <b>как?</b> — quickly, well · глагол + что — рядом, <b>где → когда</b> · always/never — <b>перед</b> глаголом, но <b>после</b> be.</div>`
      }
    ],
    words: [
      ['quick — quickly', 'быстрый — быстро', 'He finished the level quickly.', 'Он быстро прошёл уровень.'],
      ['slow — slowly', 'медленный — медленно', 'Please speak slowly.', 'Пожалуйста, говорите медленно.'],
      ['careful — carefully', 'осторожный, внимательный — осторожно, внимательно', 'I read the task carefully.', 'Я внимательно прочитал задание.'],
      ['quiet — quietly', 'тихий — тихо', 'The cat walked quietly.', 'Кошка шла тихо.'],
      ['easy — easily', 'лёгкий — легко', 'She won the game easily.', 'Она легко выиграла игру.'],
      ['bad — badly', 'плохой — плохо', 'We played badly yesterday.', 'Вчера мы сыграли плохо.'],
      ['good — well', 'хороший — хорошо', 'You speak English well.', 'Ты хорошо говоришь по-английски.'],
      ['suddenly', 'вдруг, внезапно', 'Suddenly the screen went black.', 'Вдруг экран погас.'],
      ['loud — loudly', 'громкий — громко', 'They talked loudly on the train.', 'Они громко разговаривали в поезде.'],
      ['perfect — perfectly', 'идеальный — идеально', 'I understand you perfectly.', 'Я прекрасно тебя понимаю.'],
      ['hard', 'трудный; усердно', 'I work hard every day.', 'Я усердно работаю каждый день.'],
      ['fast', 'быстрый; быстро', 'He can run very fast.', 'Он умеет очень быстро бегать.'],
      ['late', 'поздний; поздно', 'I went to bed late.', 'Я поздно лёг спать.'],
      ['early', 'ранний; рано', 'We left work early.', 'Мы рано ушли с работы.'],
      ['beautiful', 'красивый', 'She has a beautiful voice.', 'У неё красивый голос.'],
      ['expensive', 'дорогой', 'This is an expensive laptop.', 'Это дорогой ноутбук.'],
      ['famous', 'знаменитый', 'He met a famous streamer.', 'Он познакомился со знаменитым стримером.'],
      ['delicious', 'очень вкусный', 'The pizza smells delicious.', 'Пицца вкусно пахнет.'],
      ['look', 'выглядеть', 'You look tired.', 'Ты выглядишь уставшим.'],
      ['feel', 'чувствовать (себя)', 'I feel great today.', 'Я сегодня отлично себя чувствую.'],
      ['sound', 'звучать', 'That sounds interesting.', 'Звучит интересно.'],
      ['smell', 'пахнуть', 'The kitchen smells good.', 'На кухне вкусно пахнет.'],
      ['taste', 'быть на вкус', 'This coffee tastes bad.', 'У этого кофе плохой вкус.'],
      ['always', 'всегда', 'I always drink coffee in the morning.', 'Я всегда пью кофе утром.'],
      ['usually', 'обычно', 'We usually play on Friday.', 'Мы обычно играем в пятницу.'],
      ['often', 'часто', 'She often works from home.', 'Она часто работает из дома.'],
      ['sometimes', 'иногда', 'I sometimes watch anime.', 'Я иногда смотрю аниме.'],
      ['rarely', 'редко', 'He rarely eats breakfast.', 'Он редко завтракает.'],
      ['never', 'никогда', 'She is never late.', 'Она никогда не опаздывает.'],
      ['ever', 'когда-нибудь (в вопросах)', 'Do you ever play chess?', 'Ты когда-нибудь играешь в шахматы?'],
      ['also', 'также, тоже', 'He also plays the guitar.', 'Он также играет на гитаре.'],
      ['still', 'всё ещё', 'She is still at work.', 'Она всё ещё на работе.']
    ],
    texts: [
      {
        id: 't-a1-15-1', title: 'A fast player and a slow player', level: 'A1',
        text: `My friend Leo is a very good gamer. He plays fast and thinks quickly. He usually wins easily, but he is never proud.
Leo works hard in the day. He is a designer in a big studio. He often finishes his work early, and then he goes home and turns on his computer.
I sometimes play with Leo online. I am a slow player. I always move carefully and I read every message twice. Leo laughs, but he helps me.
Last Friday we played a new horror game. The world looked beautiful, but the music sounded scary. Suddenly a monster ran out of a dark room. I screamed loudly! Leo was calm. He killed the monster quietly and said, "You play well. You are just very careful."
It was two in the morning. We were both tired, but we were still happy.`,
        questions: [
          { q: 'How does Leo play?', o: ['Slowly and carefully', 'Fast', 'Badly'], a: 1 },
          { q: 'Where does Leo work?', o: ['In a big studio', 'At home', 'In a shop'], a: 0 },
          { q: 'What did the narrator do when the monster came?', o: ['He killed it quietly', 'He screamed loudly', 'He turned off the game'], a: 1 }
        ]
      },
      {
        id: 't-a1-15-2', title: 'It looks great!', level: 'A1',
        text: `Anna: Hi, Mark! Did you see my new design for the app?
Mark: Yes, I did. It looks great. The colours are really nice.
Anna: Thanks! But I feel nervous. Is the text OK?
Mark: The text is fine, but the buttons are very small. People can't click them easily.
Anna: Hmm, you're right. I usually make big buttons. I worked very quickly yesterday.
Mark: That's OK. You always work carefully. You can change it tomorrow morning.
Anna: What about the new icons?
Mark: They look modern. I like them very much.
Anna: Great! And the boss? Does he like it?
Mark: He rarely says "good". He often says "not bad". Yesterday he said "not bad" twice!
Anna: Twice? That sounds perfect!
Mark: Yes, it does. Now I need a coffee. The coffee in the kitchen smells delicious.
Anna: I'm still at my desk. Bring me one too, please!`,
        questions: [
          { q: 'What is the problem with the design?', o: ['The colours', 'The small buttons', 'The icons'], a: 1 },
          { q: 'What does Mark think about the icons?', o: ['They look modern', 'They look old', 'They are too big'], a: 0 },
          { q: 'What does the boss often say?', o: ['Good', 'Perfect', 'Not bad'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'He is a ___ driver.', o: ['careful', 'carefully', 'carefuly'], a: 0, why: 'Какой водитель? — прилагательное перед существительным.' },
      { t: 'choice', q: 'He drives ___.', o: ['careful', 'carefully', 'carefulled'], a: 1, why: 'Как водит? — наречие careful + ly.' },
      { t: 'choice', q: 'This soup tastes ___.', o: ['good', 'well', 'goodly'], a: 0, why: 'После taste (быть на вкус) — прилагательное.' },
      { t: 'choice', q: 'You speak English very ___.', o: ['good', 'well', 'goodly'], a: 1, why: 'Как говоришь? — наречие от good это well.' },
      { t: 'choice', q: 'Как правильно?', o: ['I like very much this game.', 'I like this game very much.', 'I like this very much game.'], a: 1, why: 'like this game — вместе, very much — после объекта.' },
      { t: 'choice', q: 'She ___ late.', o: ['is never', 'never is', 'never'], a: 0, why: 'never стоит после be (is).' },
      { t: 'choice', q: 'Как правильно?', o: ['We went to the park yesterday.', 'We went yesterday to the park.', 'We yesterday went to the park.'], a: 0, why: 'Место (to the park) — перед временем (yesterday).' },
      { t: 'choice', q: 'easy → наречие:', o: ['easyly', 'easily', 'easly'], a: 1, why: 'Согласная + y → -ily.' },
      { t: 'gap', q: 'I got up ___ today, at eleven. (late)', a: ['late'], why: 'late — и «поздний», и «поздно»; -ly не нужно.' },
      { t: 'gap', q: 'She sings ___. (beautiful)', a: ['beautifully'], why: 'Как поёт? — наречие: beautiful + ly.' },
      { t: 'gap', q: 'You look ___ today. (happy)', a: ['happy'], why: 'После look (выглядеть) — прилагательное без -ly.' },
      { t: 'gap', q: 'It\'s raining ___. (heavy)', a: ['heavily'], why: 'Согласная + y → -ily: heavily.' },
      { t: 'gap', q: 'I ___ play games at night. (обычно)', a: ['usually'], why: 'Слова частоты стоят перед обычным глаголом.' },
      { t: 'gap', q: 'They work very ___. (усердно)', a: ['hard'], why: 'hard — и «трудный», и «усердно»; hardly значит «почти не».' },
      { t: 'order', a: 'He speaks English very well', ru: 'Он очень хорошо говорит по-английски.' },
      { t: 'order', a: 'I always drink coffee in the morning', ru: 'Я всегда пью кофе утром.' },
      { t: 'order', a: 'We met our friends in the park yesterday', ru: 'Вчера мы встретили друзей в парке.' },
      { t: 'tr', q: 'Он всегда опаздывает.', a: ['he is always late', 'he\'s always late'] },
      { t: 'tr', q: 'Мне очень нравится этот сериал.', a: ['i like this series very much', 'i like this show very much', 'i really like this series', 'i really like this show', 'i like this tv series very much'] },
      { t: 'listen', say: 'She finished the level quickly', a: ['she finished the level quickly'] }
    ],
    test: [
      { t: 'choice', q: 'Those are ___ ideas.', o: ['differents', 'different', 'differently'], a: 1, why: 'Прилагательное не получает -s и стоит перед существительным.' },
      { t: 'choice', q: 'Your plan ___ interesting!', o: ['sounds', 'sounds like', 'sound'], a: 0, why: 'sound + прилагательное; your plan = it → sounds.' },
      { t: 'choice', q: 'The pizza smells ___.', o: ['nicely', 'nice', 'well'], a: 1, why: 'После smell — прилагательное: smells nice.' },
      { t: 'choice', q: 'Куда ставить never? «Я никогда не могу найти ключи».', o: ['I never can find my keys.', 'I can never find my keys.', 'I can find never my keys.'], a: 1, why: 'Между двумя глаголами: can + never + find.' },
      { t: 'choice', q: 'Richard ___ tennis.', o: ['plays also', 'also plays', 'also play'], a: 1, why: 'also — перед обычным глаголом, а у he — plays.' },
      { t: 'choice', q: 'Your English is ___.', o: ['good', 'well', 'goodly'], a: 0, why: 'После is (какой?) — прилагательное good.' },
      { t: 'choice', q: 'I have a big project, so I work ___.', o: ['hardly', 'hard', 'hardy'], a: 1, why: 'Усердно — hard; hardly = почти не.' },
      { t: 'choice', q: 'Как правильно?', o: ['She walks every day to work.', 'She walks to work every day.', 'She every day walks to work.'], a: 1, why: 'Сначала «куда» (to work), потом «когда» (every day).' },
      { t: 'gap', q: 'It doesn\'t ___ rain here. (часто)', a: ['often'], why: 'Между doesn\'t и rain — два глагола, слово частоты между ними.' },
      { t: 'gap', q: 'How are you? — I\'m very ___, thanks. (здоров, хорошо)', a: ['well'], why: 'well — это ещё и «здоров, в порядке».' },
      { t: 'gap', q: 'I\'m ___ in bed. It\'s only seven. (всё ещё)', a: ['still'], why: 'still стоит после be (am).' },
      { t: 'gap', q: 'Our team played ___. (terrible)', a: ['terribly'], why: 'Как сыграли? — наречие; -le → -ly: terribly.' }
    ]
  },

  // ───────────────────────────── UNIT 16 ─────────────────────────────
  {
    id: 'a1-16', level: 'A1', num: 16, track: 'main',
    books: { red: [34, 35] },
    title: 'Do it! Let\'s go! I\'d like… — просьбы и предложения',
    summary: 'Как вежливо предложить чай, пригласить друга в игру, заказать в кафе, попросить и сказать «давай!» и «не надо!».',
    grammar: [
      {
        title: '1. Главная идея: «хочу» в английском звучит резко',
        html: `
<div class="g-idea">По-русски нормально сказать «Хочешь чаю?» или «Я хочу кофе». По-английски <b>I want…</b> в кафе или с малознакомыми звучит как требование. Вежливая форма — <b>would like</b> («хотел бы»). А для команд и предложений «давай» есть свои короткие формы.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Хочешь чаю?</p><p>Мне кофе, пожалуйста.</p><p>Пойдём в кино?</p><p>Не опаздывай!</p></div>
  <div><div class="g-h">English</div><p><span class="say">Would you like some tea?</span></p><p><span class="say">I'd like a coffee, please.</span></p><p><span class="say">Let's go to the cinema.</span></p><p><span class="say">Don't be late!</span></p></div>
</div>
<div class="g-tip"><b>would</b> — это английское «бы». <b>I'd like</b> ≈ «я бы хотел», <b>Would you like…?</b> ≈ «не хотите ли…?». I'd = I would.</div>
<div class="mini" data-q="Вежливо в кафе:" data-o="I want a coffee.|I'd like a coffee, please.|I like a coffee, please." data-a="1" data-why="I'd like = вежливое «я бы хотел»; I like — «люблю вообще»."></div>`
      },
      {
        title: '2. Would you like + что-то? — предлагаем',
        html: `
<p>Когда предлагаем еду, напиток или вещь:</p>
<div class="g-formula"><span class="g-part g-v">Would you like</span><span class="g-plus">+</span><span class="g-part">a / some + предмет</span><span class="g-part">?</span></div>
<ul class="g-list">
<li><span class="say">Would you like some tea?</span> — Хотите чаю?</li>
<li><span class="say">Would you like a sandwich?</span> — Хочешь бутерброд?</li>
<li><span class="say">What would you like?</span> — Что будете (заказывать)?</li>
<li><span class="say">What would you like, tea or coffee?</span> — Что хочешь — чай или кофе?</li>
</ul>
<table>
<tr><th>Ответ</th><th>English</th></tr>
<tr><td>Да</td><td><span class="say">Yes, please.</span></td></tr>
<tr><td>Нет</td><td><span class="say">No, thank you.</span> / <span class="say">No, thanks.</span></td></tr>
<tr><td>Не сейчас</td><td><span class="say">Not now, thanks. Maybe later.</span></td></tr>
</table>
<div class="g-bad">Would you like some coffee? — Yes, I would like.</div>
<div class="g-good">Would you like some coffee? — Yes, please.</div>
<p>Сами просим — <b>I'd like…</b> (вежливое «хочу»):</p>
<ul class="g-list">
<li><span class="say">I'm thirsty. I'd like some water.</span> — Я хочу пить. Мне бы воды.</li>
<li><span class="say">I'd like a pizza with cheese, please.</span> — Мне пиццу с сыром, пожалуйста.</li>
</ul>
<div class="g-tip">В предложениях почти всегда <b>some</b>, а не any: <span class="say">Would you like some cake?</span> Мы ждём ответа «да».</div>
<div class="mini" data-q="Would you like a drink? — ___" data-o="Yes, I like.|Yes, please.|Yes, I would like." data-a="1" data-why="На предложение отвечают Yes, please / No, thank you."></div>`
      },
      {
        title: '3. Would you like to + глагол? — приглашаем',
        html: `
<p>Когда зовём <b>что-то сделать</b>, после like ставим <b>to + глагол</b>:</p>
<div class="g-formula"><span class="g-part g-v">Would you like</span><span class="g-plus">+</span><span class="g-part">to</span><span class="g-plus">+</span><span class="g-part">глагол</span><span class="g-part">?</span></div>
<ul class="g-list">
<li><span class="say">Would you like to play with us tonight?</span> — Хочешь поиграть с нами сегодня вечером?</li>
<li><span class="say">Would you like to come to my party?</span> — Придёшь ко мне на вечеринку?</li>
<li><span class="say">What would you like to do on Saturday?</span> — Чем хочешь заняться в субботу?</li>
</ul>
<table>
<tr><th>Ответ</th><th>English</th></tr>
<tr><td>С удовольствием!</td><td><span class="say">Yes, I'd love to!</span> / <span class="say">Sure!</span></td></tr>
<tr><td>Не могу</td><td><span class="say">Sorry, I can't. I'm busy.</span></td></tr>
</table>
<p>То же с <b>I'd like to…</b> — «я бы хотел (сделать)»:</p>
<ul class="g-list">
<li><span class="say">I'd like to stay at home tonight.</span> — Сегодня вечером я бы хотел остаться дома.</li>
<li><span class="say">I'd like to learn Japanese.</span> — Я бы хотел выучить японский.</li>
</ul>
<div class="g-bad">Would you like go out? · I'd like play.</div>
<div class="g-good">Would you like to go out? · I'd like to play.</div>
<div class="g-tip"><b>Предмет</b> — без to: like <b>some tea</b>. <b>Действие</b> — с to: like <b>to play</b>. В ответе «I'd love to!» глагол не повторяют, но <b>to</b> оставляют.</div>
<div class="mini" data-q="Would you like ___ with us?" data-o="play|to play|playing" data-a="1" data-why="Действие после would like — to + глагол."></div>
<div class="mini" data-q="Would you like to watch a film? — Yes, I'd love ___!" data-o="to|it|so" data-a="0" data-why="Короткий ответ-согласие: I'd love to."></div>`
      },
      {
        title: '4. Would you like…? или Do you like…?',
        html: `
<p>Слова похожи, а смысл разный:</p>
<table>
<tr><th></th><th>Would you like…?</th><th>Do you like…?</th></tr>
<tr><td>Смысл</td><td>Хочешь (сейчас)?</td><td>Тебе нравится (вообще)?</td></tr>
<tr><td>Пример</td><td><span class="say">Would you like some pizza?</span></td><td><span class="say">Do you like pizza?</span></td></tr>
<tr><td>Ответ</td><td><span class="say">Yes, please.</span></td><td><span class="say">Yes, I do. I love it.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I'd like a coffee.</span> — Я хочу кофе (сейчас).</li>
<li><span class="say">I like coffee.</span> — Я люблю кофе (вообще).</li>
<li><span class="say">What would you like to do tonight?</span> — Что хочешь делать сегодня вечером?</li>
<li><span class="say">What do you like to do at weekends?</span> — Что ты любишь делать по выходным?</li>
</ul>
<div class="g-bad">Do you like a coffee? <span class="muted">— когда предлагаете</span></div>
<div class="g-good">Would you like a coffee?</div>
<div class="g-bad">I'd like horror films. <span class="muted">— когда говорите о вкусах</span></div>
<div class="g-good">I like horror films.</div>
<div class="mini" data-q="___ your new job? — Yes, it's great." data-o="Would you like|Do you like|Are you like" data-a="1" data-why="Спрашиваем, нравится ли вообще — Do you like."></div>
<div class="mini" data-q="I'm hungry. I ___ a sandwich." data-o="like|'d like|am like" data-a="1" data-why="Хочу сейчас — I'd like."></div>`
      },
      {
        title: '5. Do it! Don\'t do it! — просьбы и команды',
        html: `
<p>Чтобы попросить или сказать «сделай», берём глагол в <b>начальной форме</b>. Никаких you и окончаний.</p>
<div class="g-formula"><span class="g-part g-v">глагол</span><span class="g-plus">+</span><span class="g-part">…</span><span class="g-sep">·</span><span class="g-part g-v">Don't</span><span class="g-plus">+</span><span class="g-part">глагол</span></div>
<ul class="g-list">
<li><span class="say">Come here and look at this!</span> — Иди сюда и посмотри!</li>
<li><span class="say">Wait for me, please.</span> — Подожди меня, пожалуйста.</li>
<li><span class="say">Sit down, please.</span> — Садитесь, пожалуйста.</li>
<li><span class="say">Be quiet! I'm working.</span> — Тише! Я работаю.</li>
<li><span class="say">Be careful!</span> — Осторожно!</li>
</ul>
<p>«Не делай» — <b>Don't</b> + глагол:</p>
<ul class="g-list">
<li><span class="say">Don't worry.</span> — Не волнуйся.</li>
<li><span class="say">Don't touch my keyboard!</span> — Не трогай мою клавиатуру!</li>
<li><span class="say">Don't forget your keys.</span> — Не забудь ключи.</li>
<li><span class="say">Don't be late!</span> — Не опаздывай!</li>
</ul>
<div class="g-bad">Not go there! · Don't late!</div>
<div class="g-good">Don't go there! · Don't be late!</div>
<div class="g-tip">«Не опаздывай», «не грусти», «будь осторожен» — в английском тут нет глагола, есть только слова «какой?» (late, sad, careful). Поэтому добавляем <b>be</b>: Be careful, Don't be late, Don't be sad.</div>
<p>Этой же формой желают и угощают: <span class="say">Have a nice day!</span> — Хорошего дня! <span class="say">Have fun!</span> — Повеселитесь! <span class="say">Have a good trip!</span> — Хорошей поездки! <span class="say">Have a cookie.</span> — Угощайся печеньем.</p>
<p class="muted">Команда без please звучит резко. Добавьте please в начало или в конец, а ещё мягче — Can you…, please? (вы это уже знаете).</p>
<div class="mini" data-q="___ late!" data-o="Don't|Don't be|Not be" data-a="1" data-why="late — не глагол, поэтому Don't be late."></div>
<div class="mini" data-q="Хорошей поездки!" data-o="Good trip to you!|Have a good trip!|You have a good trip!" data-a="1" data-why="Пожелание — Have a good…"></div>`
      },
      {
        title: '6. Let\'s — «давай(те)» сделаем вместе',
        html: `
<p>Когда предлагаем сделать что-то <b>вместе</b> (я + ты):</p>
<div class="g-formula"><span class="g-part g-v">Let's</span><span class="g-plus">+</span><span class="g-part">глагол</span><span class="g-sep">·</span><span class="g-part g-v">Let's not</span><span class="g-plus">+</span><span class="g-part">глагол</span></div>
<ul class="g-list">
<li><span class="say">Let's go!</span> — Пошли!</li>
<li><span class="say">Let's play one more game.</span> — Давай ещё одну катку.</li>
<li><span class="say">Let's order a pizza.</span> — Давай закажем пиццу.</li>
<li><span class="say">Come on, let's watch the next episode!</span> — Ну давай, посмотрим следующую серию!</li>
<li><span class="say">It's cold. Let's not go out. Let's stay at home.</span> — Холодно. Давай не пойдём гулять. Давай останемся дома.</li>
</ul>
<table>
<tr><th>Ответ</th><th>English</th></tr>
<tr><td>Да</td><td><span class="say">Good idea!</span> / <span class="say">OK, let's.</span> / <span class="say">Sure!</span></td></tr>
<tr><td>Нет</td><td><span class="say">No, let's not.</span> / <span class="say">No, let's watch a comedy.</span></td></tr>
</table>
<div class="g-bad">Let's to go. · Let's going. · Let's don't go.</div>
<div class="g-good">Let's go. · Let's not go.</div>
<div class="g-tip">Let's = let us — «позволь нам». <b>Let's go</b> — давай пойдём (мы). <b>Go</b> — иди (ты). <b>Would you like to go?</b> — вежливо спрашиваем, хочет ли он.</div>
<div class="mini" data-q="Let's ___ a taxi." data-o="to take|take|taking" data-a="1" data-why="После Let's — глагол без to."></div>
<div class="mini" data-q="Давай не будем смотреть этот фильм." data-o="Let's not watch this film.|Let's don't watch this film.|Don't let's watching this film." data-a="0" data-why="Отрицание — Let's not + глагол."></div>`
      },
      {
        title: '7. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">Would you like go out?</div><div class="g-good">Would you like <b>to go</b> out?</div>
<div class="g-bad">Would you like tea? — Yes, I would like.</div><div class="g-good">Would you like tea? — <b>Yes, please.</b></div>
<div class="g-bad">Do you like a coffee? <span class="muted">(предлагаете)</span></div><div class="g-good"><b>Would you like</b> a coffee?</div>
<div class="g-bad">I want a burger. <span class="muted">(в кафе)</span></div><div class="g-good"><b>I'd like</b> a burger, please.</div>
<div class="g-bad">Don't late!</div><div class="g-good">Don't <b>be</b> late!</div>
<div class="g-bad">Not touch it!</div><div class="g-good"><b>Don't</b> touch it!</div>
<div class="g-bad">Let's to play!</div><div class="g-good">Let's <b>play</b>!</div>
<div class="g-bad">Let's don't go.</div><div class="g-good">Let's <b>not</b> go.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>Would you like</b> + предмет / <b>to</b> + глагол? · <b>I'd like</b> = вежливое «хочу» · <b>Do it! Don't do it! Be careful!</b> · <b>Let's</b> / <b>Let's not</b> + глагол.</div>`
      }
    ],
    words: [
      ['would like', 'хотел бы (вежливо)', 'Would you like some tea?', 'Хотите чаю?'],
      ['I\'d like', 'я бы хотел', 'I\'d like a coffee, please.', 'Мне кофе, пожалуйста.'],
      ['I\'d love to', 'с удовольствием', 'Would you like to come? — I\'d love to!', 'Придёшь? — С удовольствием!'],
      ['let\'s', 'давай(те)', 'Let\'s play together.', 'Давай поиграем вместе.'],
      ['let\'s not', 'давай не будем', 'Let\'s not go out tonight.', 'Давай не пойдём никуда сегодня вечером.'],
      ['don\'t', 'не (делай)', 'Don\'t touch my phone!', 'Не трогай мой телефон!'],
      ['please', 'пожалуйста', 'Sit down, please.', 'Садитесь, пожалуйста.'],
      ['Yes, please.', 'да, пожалуйста', 'Would you like some cake? — Yes, please.', 'Хочешь торта? — Да, пожалуйста.'],
      ['No, thanks.', 'нет, спасибо', 'Would you like a drink? — No, thanks.', 'Хочешь выпить? — Нет, спасибо.'],
      ['offer', 'предлагать; предложение', 'He offered me a drink.', 'Он предложил мне напиток.'],
      ['invite', 'приглашать', 'Anna invited me to her party.', 'Анна пригласила меня на вечеринку.'],
      ['idea', 'идея', 'Let\'s order pizza. — Good idea!', 'Давай закажем пиццу. — Хорошая идея!'],
      ['wait', 'ждать', 'Wait for me, please.', 'Подожди меня, пожалуйста.'],
      ['hurry up', 'поторопись', 'Hurry up! The bus is here.', 'Поторопись! Автобус пришёл.'],
      ['come on', 'давай! ну же!', 'Come on, let\'s go!', 'Ну давай, пошли!'],
      ['careful', 'осторожный', 'Be careful! The floor is wet.', 'Осторожно! Пол мокрый.'],
      ['worry', 'волноваться', 'Don\'t worry, it\'s OK.', 'Не волнуйся, всё нормально.'],
      ['forget — forgot', 'забывать — забыл', 'Don\'t forget your keys.', 'Не забудь ключи.'],
      ['sit down', 'садиться', 'Please sit down.', 'Садитесь, пожалуйста.'],
      ['stand up', 'вставать', 'Stand up and stretch.', 'Встань и потянись.'],
      ['turn on / turn off', 'включать / выключать', 'Turn off the TV, please.', 'Выключи телевизор, пожалуйста.'],
      ['touch', 'трогать', 'Don\'t touch the screen.', 'Не трогай экран.'],
      ['borrow', 'брать взаймы', 'Would you like to borrow my umbrella?', 'Хочешь взять мой зонт?'],
      ['Have a nice day!', 'Хорошего дня!', 'Bye, Tom! Have a nice day!', 'Пока, Том! Хорошего дня!'],
      ['snack', 'перекус, закуска', 'Would you like a snack?', 'Хочешь перекусить?'],
      ['thirsty', 'испытывающий жажду', 'I\'m thirsty. I\'d like some water.', 'Я хочу пить. Мне бы воды.'],
      ['together', 'вместе', 'Let\'s play together tonight.', 'Давай поиграем вместе сегодня вечером.'],
      ['tonight', 'сегодня вечером', 'Would you like to go out tonight?', 'Хочешь сходить куда-нибудь сегодня вечером?'],
      ['maybe', 'может быть', 'Not now. Maybe later.', 'Не сейчас. Может, позже.'],
      ['sure', 'конечно', 'Would you like to play? — Sure!', 'Хочешь поиграть? — Конечно!'],
      ['order', 'заказывать; заказ', 'Let\'s order a pizza.', 'Давай закажем пиццу.'],
      ['menu', 'меню', 'Can I see the menu, please?', 'Можно меню, пожалуйста?']
    ],
    texts: [
      {
        id: 't-a1-16-1', title: 'Friday night plans', level: 'A1',
        text: `Kate: Hi, Max! Would you like to come to my place tonight?
Max: Sure! What would you like to do?
Kate: Let's play a board game. Anna and Tom can come too.
Max: Great idea! Can I bring something?
Kate: Yes, please. Bring some snacks. But don't bring cola. I have a lot.
Max: OK. What time?
Kate: Come at seven. And don't be late! We start at half past seven.
Max: Me? I'm never late!
Kate: Ha! You're always late, Max.
Max: OK, OK. I'd like to win this time. Last time Anna won three games.
Kate: Let's not talk about that. She's very good.
Max: Would you like some pizza too? I can order it.
Kate: No, thanks. I have dinner for everyone.
Max: Perfect. See you at seven!
Kate: See you! Have a nice day!`,
        questions: [
          { q: 'What would Kate like to do tonight?', o: ['Watch a film', 'Play a board game', 'Go to a café'], a: 1 },
          { q: 'What does Kate ask Max to bring?', o: ['Cola', 'Pizza', 'Snacks'], a: 2 },
          { q: 'Why doesn\'t Kate want pizza?', o: ['She has dinner for everyone', 'She doesn\'t like pizza', 'It is expensive'], a: 0 }
        ]
      },
      {
        id: 't-a1-16-2', title: 'Game night rules', level: 'A1',
        text: `Hi everyone! Welcome to game night at my place. Please read these rules carefully.
Come at seven and don't be late. We start the first game at half past seven.
Take off your shoes at the door. Put your phone on the table and don't check messages during the game!
Drinks and snacks are in the kitchen. Would you like something special? Tell me before Friday.
Be a good player. Don't shout when you lose, and don't laugh at other players. Listen to the rules and ask questions. Nobody knows every game!
At eleven we stop. Let's not play all night — my neighbours need to sleep.
After the last game, let's clean the room together. It only takes five minutes.
And the last rule is easy: have fun!
See you on Friday,
Kate`,
        questions: [
          { q: 'When does the first game start?', o: ['At seven', 'At half past seven', 'At eleven'], a: 1 },
          { q: 'Where do players put their phones?', o: ['On the table', 'In the kitchen', 'At the door'], a: 0 },
          { q: 'Why do they stop at eleven?', o: ['Kate is tired', 'The neighbours need to sleep', 'The snacks finish'], a: 1 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'Would you like ___ coffee?', o: ['some', 'any', 'to'], a: 0, why: 'В предложениях-угощениях говорим some.' },
      { t: 'choice', q: 'Would you like ___ a film tonight?', o: ['watch', 'to watch', 'watching'], a: 1, why: 'Действие после would like — to + глагол.' },
      { t: 'choice', q: 'Would you like some cake? — ___', o: ['Yes, I would like.', 'Yes, please.', 'Yes, I like.'], a: 1, why: 'На предложение отвечают Yes, please.' },
      { t: 'choice', q: '___ pizza? — Yes, I love it!', o: ['Would you like', 'Do you like', 'Are you like'], a: 1, why: 'Спрашивают о вкусах вообще — Do you like.' },
      { t: 'choice', q: '___ late!', o: ['Don\'t', 'Don\'t be', 'Not'], a: 1, why: 'late — не глагол, нужен be: Don\'t be late.' },
      { t: 'choice', q: 'Let\'s ___ a taxi.', o: ['to take', 'take', 'taking'], a: 1, why: 'После Let\'s — глагол без to.' },
      { t: 'choice', q: 'It\'s cold. Let\'s ___ out.', o: ['don\'t go', 'not go', 'not to go'], a: 1, why: 'Отрицание — Let\'s not + глагол.' },
      { t: 'choice', q: 'Вежливо в кафе:', o: ['I want a burger.', 'I\'d like a burger, please.', 'Give burger.'], a: 1, why: 'I\'d like — вежливое «я бы хотел».' },
      { t: 'gap', q: '___ quiet, please! I\'m working. (быть)', a: ['be'], why: 'quiet — «какой?», поэтому в просьбе нужен be.' },
      { t: 'gap', q: '___ worry. It\'s OK. (не)', a: ['don\'t', 'do not'], why: '«Не делай» — Don\'t + глагол.' },
      { t: 'gap', q: 'I\'d like ___ go home now.', a: ['to'], why: 'I\'d like + to + глагол.' },
      { t: 'gap', q: 'What would you ___? — A cup of tea, please.', a: ['like'], why: 'Вопрос-предложение: What would you like?' },
      { t: 'gap', q: 'Would you like to come? — Yes, I\'d love ___!', a: ['to'], why: 'Короткое согласие — I\'d love to.' },
      { t: 'gap', q: '___ play one more game! (давай)', a: ['let\'s', 'let us'], why: 'Предлагаем сделать вместе — Let\'s + глагол.' },
      { t: 'order', a: 'Would you like to play with us', ru: 'Хочешь поиграть с нами?' },
      { t: 'order', a: 'Let\'s order a pizza tonight', ru: 'Давай закажем пиццу сегодня вечером.' },
      { t: 'order', a: 'Don\'t forget your keys', ru: 'Не забудь ключи.' },
      { t: 'tr', q: 'Хотите чаю?', a: ['would you like some tea', 'would you like tea', 'would you like a tea', 'would you like a cup of tea'] },
      { t: 'tr', q: 'Давай не будем смотреть этот фильм.', a: ['let\'s not watch this film', 'let\'s not watch this movie', 'let\'s not watch that film', 'let\'s not watch that movie', 'let us not watch this film'] },
      { t: 'listen', say: 'Have a nice day', a: ['have a nice day'] }
    ],
    test: [
      { t: 'choice', q: 'What ___ like to drink? — Orange juice, please.', o: ['do you', 'would you', 'you would'], a: 1, why: 'Предлагаем сейчас — What would you like…?' },
      { t: 'choice', q: 'What ___ like to do at weekends? — I usually play games.', o: ['would you', 'do you', 'are you'], a: 1, why: 'Спрашиваем о привычках вообще — do you like.' },
      { t: 'choice', q: '«Я бы хотел остаться дома».', o: ['I like to stay at home.', 'I\'d like to stay at home.', 'I\'d like stay at home.'], a: 1, why: 'Хочу сейчас — I\'d like + to + глагол.' },
      { t: 'choice', q: 'Would you like to go to the concert? — ___ I\'m busy.', o: ['Yes, please.', 'Sorry, I can\'t.', 'No, I don\'t.'], a: 1, why: 'Вежливый отказ от приглашения — Sorry, I can\'t.' },
      { t: 'choice', q: '«Не трогай это!»', o: ['Not touch it!', 'Don\'t touch it!', 'Don\'t touching it!'], a: 1, why: 'Запрет — Don\'t + глагол в начальной форме.' },
      { t: 'choice', q: '«Хорошо вам повеселиться!»', o: ['Have fun!', 'You have fun!', 'Having fun!'], a: 0, why: 'Пожелание — глагол have в начале, без you.' },
      { t: 'choice', q: 'Let\'s go to the park. — ___', o: ['Good idea!', 'Yes, I do.', 'Yes, I would like.'], a: 0, why: 'На Let\'s… соглашаются: Good idea! / OK, let\'s.' },
      { t: 'choice', q: 'Только Том должен идти спать: «___ to bed, Tom. You look tired.»', o: ['Let\'s go', 'Go', 'Going'], a: 1, why: 'Просьба к одному человеку — просто глагол; Let\'s — это «мы вместе».' },
      { t: 'gap', q: '___ careful! The road is wet. (быть)', a: ['be'], why: 'careful — «какой?», поэтому Be careful.' },
      { t: 'gap', q: 'I\'m thirsty. I\'d ___ some water. (хотел бы)', a: ['like'], why: 'I\'d like = вежливое «хочу».' },
      { t: 'gap', q: 'Let\'s ___ play this level again. It\'s boring. (не)', a: ['not'], why: 'Let\'s not + глагол — «давай не будем».' },
      { t: 'gap', q: 'It\'s raining. Would you like ___ my umbrella? (borrow)', a: ['to borrow'], why: 'Would you like + to + глагол.' }
    ]
  }
);
