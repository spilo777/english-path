// Юниты A2 13–14: one/ones, all/most/some of, both/either/neither, (a) few / (a) little; myself/each other, go, get, do/make, have
COURSE.units.push(
  // ───────────────────────────── UNIT A2-13 ─────────────────────────────
  {
    id: 'a2-13', level: 'A2', num: 13, track: 'main',
    books: { red: [75, 81, 82, 84] },
    title: 'One/ones, most, both, either, a few, a little',
    summary: 'Научимся говорить «синий, а не чёрный», «большинство из нас», «оба / ни один из двух / любой» и «немного / мало» — без повторов одного и того же слова.',
    grammar: [
      {
        title: '1. Главная идея: английский не оставляет «дырок»',
        html: `
<div class="g-idea">По-русски мы спокойно выбрасываем слово, если и так понятно, о чём речь: «Какая куртка твоя? — Синяя». По-английски на пустом месте должно что-то стоять. Вместо повтора ставим заменитель: <b>one</b> (одна вещь), <b>ones</b> (много вещей) или <b>of them / of us</b> (из группы).</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Мне нужна ручка. У тебя есть <span class="g-gap">_</span>?</p><p>Какая куртка твоя? — Синяя <span class="g-gap">_</span>.</p><p>Мои старые наушники сломались. Куплю новые <span class="g-gap">_</span>.</p><p>У меня два брата. Оба <span class="g-gap">_</span> дизайнеры.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I need a pen. Do you have <b>one</b>?</span></p><p><span class="say">Which jacket is yours? — The blue <b>one</b>.</span></p><p><span class="say">My old headphones are broken. I'll buy new <b>ones</b>.</span></p><p><span class="say">I've got two brothers. <b>Both of them</b> are designers.</span></p></div>
</div>
<p>А ещё в этом юните — слова, которые отвечают на вопрос «сколько из группы?»:</p>
<div class="g-formula"><span class="g-part g-v">all</span><span class="g-sep">·</span><span class="g-part g-v">most</span><span class="g-sep">·</span><span class="g-part g-v">some</span><span class="g-sep">·</span><span class="g-part g-v">none</span><span class="g-sep">·</span><span class="g-part g-v">both · either · neither</span><span class="g-sep">·</span><span class="g-part g-v">a few · a little</span></div>
<div class="g-tip">Правило для всего юнита: если в русском после прилагательного или «оба / большинство» висит пустота — в английском туда почти всегда просится <b>one / ones</b> или <b>of + them / us / the…</b>.</div>
<div class="mini" data-q="Мне нужна зарядка. У тебя есть?" data-o="I need a charger. Do you have?|I need a charger. Do you have one?|I need a charger. Do you have ones?" data-a="1" data-why="Одна любая зарядка (a charger) → one. Пустое место после have нельзя."></div>`
      },
      {
        title: '2. one и ones — «такой же предмет»',
        html: `
<div class="g-idea"><b>one</b> заменяет <b>a / an + существительное</b> или одну вещь после прилагательного. <b>ones</b> — то же самое, но для <b>многих</b> вещей.</div>
<table>
<tr><th>Одна вещь</th><th>Много вещей</th></tr>
<tr><td><span class="say">Do you have one?</span> <span class="muted">(= a pen)</span></td><td><span class="say">Do you have any?</span> <span class="muted">(ones сам по себе не стоит)</span></td></tr>
<tr><td><span class="say">this one / that one</span></td><td><span class="say">these / those</span> или <span class="say">these ones</span></td></tr>
<tr><td><span class="say">the red one</span></td><td><span class="say">the red ones</span></td></tr>
<tr><td><span class="say">a new one · another one</span></td><td><span class="say">some new ones · other ones</span></td></tr>
<tr><td><span class="say">Which one?</span></td><td><span class="say">Which ones?</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Is there a supermarket near here? — Yes, there's one on the corner.</span> — Тут рядом есть супермаркет? — Да, на углу.</li>
<li><span class="say">Which skin do you like? — This one. No, that one!</span> — Какой скин тебе нравится? — Вот этот. Нет, вон тот!</li>
<li><span class="say">I don't like the black logo, but I like the white one.</span> — Чёрный логотип мне не нравится, а белый — да.</li>
<li><span class="say">This cup is dirty. Can I have a clean one?</span> — Эта чашка грязная. Можно чистую?</li>
<li><span class="say">That cookie was great. I'll have another one.</span> — Классное печенье. Возьму ещё одно.</li>
<li><span class="say">Which hotel did you stay at? — The one near the beach.</span> — В каком отеле вы жили? — В том, что у пляжа.</li>
<li><span class="say">Which books are yours? — The ones on the table.</span> — Какие книги твои? — Те, что на столе.</li>
<li><span class="say">My sneakers are very old. I need some new ones.</span> — Кроссовки совсем старые. Мне нужны новые.</li>
</ul>
<p><b>one</b> или <b>it</b>? <b>it</b> — это <b>тот самый</b> предмет. <b>one</b> — <b>какой-нибудь такой же</b>.</p>
<ul class="g-list">
<li><span class="say">I've lost my phone. I can't find it.</span> — не могу найти <i>свой</i> телефон (тот самый).</li>
<li><span class="say">I've lost my phone. I need to buy a new one.</span> — нужно купить <i>другой</i> телефон.</li>
</ul>
<div class="g-bad">Which jacket is yours? — The blue. · My headphones are broken. I need new one.</div>
<div class="g-good">The blue <b>one</b>. · I need new <b>ones</b>.</div>
<div class="g-bad">Is there a bank here? — Yes, there's a one on the left.</div>
<div class="g-good">Yes, there's <b>one</b> on the left. <span class="muted">— a уже «спрятано» внутри one</span></div>
<div class="g-tip">one / ones — только для того, что можно посчитать. Для воды, денег, времени берём some / any: <span class="say">I need some water. Do you have any?</span></div>
<div class="mini" data-q="These glasses are dirty. Can we have some clean ___?" data-o="one|ones|it" data-a="1" data-why="Стаканов много → ones."></div>
<div class="mini" data-q="I broke my mouse, so I bought a new ___." data-o="it|one|ones" data-a="1" data-why="Новая, другая мышь (одна) → one; it было бы про ту же сломанную."></div>`
      },
      {
        title: '3. Most people или most of the people?',
        html: `
<div class="g-idea"><b>all, most, some, any, no</b> могут говорить о вещах <b>вообще</b> или о <b>конкретной группе</b>. Вообще — <b>без of</b>. Конкретная группа (the, my, these, this…) — <b>с of</b>.</div>
<table>
<tr><th>Вообще (без of)</th><th>Из конкретной группы (+ of)</th></tr>
<tr><td><span class="say">Most people like music.</span></td><td><span class="say">Most of my friends play on PC.</span></td></tr>
<tr><td><span class="say">Some games are too long.</span></td><td><span class="say">Some of these games are free.</span></td></tr>
<tr><td><span class="say">All cities have traffic.</span></td><td><span class="say">All (of) the players on our team are from Russia.</span></td></tr>
<tr><td><span class="say">I don't want any money.</span></td><td><span class="say">I didn't like any of the new episodes.</span></td></tr>
<tr><td><span class="say">He has no friends here.</span></td><td><span class="say">None of my friends live near me.</span></td></tr>
</table>
<div class="g-formula"><span class="g-part g-v">most / some / none…</span><span class="g-plus">+</span><span class="g-part g-v">of</span><span class="g-plus">+</span><span class="g-part">the / my / these / Kate's</span><span class="g-plus">+</span><span class="g-part">существительное</span></div>
<p>Сравните — вообще или конкретно:</p>
<ul class="g-list">
<li><span class="say">Children like cartoons.</span> — Дети (вообще все) любят мультики.</li>
<li><span class="say">Where are the children?</span> — Где дети? <span class="muted">(наши, конкретные)</span></li>
<li><span class="say">Money isn't everything.</span> — Деньги — не главное. <span class="muted">(вообще)</span></li>
<li><span class="say">I want a new laptop, but I don't have the money.</span> — …но у меня нет денег <i>на него</i>.</li>
</ul>
<p>С <b>all</b> слово of можно пропустить: <span class="say">all the students</span> = <span class="say">all of the students</span>, <span class="say">all my life</span> = <span class="say">all of my life</span>.</p>
<div class="g-bad">Most of people drive too fast. · The most of my friends are gamers.</div>
<div class="g-good"><b>Most people</b> drive too fast. · <b>Most of my friends</b> are gamers.</div>
<div class="g-tip">«Большинство» — это просто <b>most</b>, без the. <b>the most</b> — это «самый» из прошлого урока (the most interesting).</div>
<div class="mini" data-q="___ designers use Figma today." data-o="Most of|Most|The most" data-a="1" data-why="Дизайнеры вообще, без the/my → Most."></div>
<div class="mini" data-q="___ the levels in this game are easy." data-o="Most|Most of|The most of" data-a="1" data-why="Перед the (конкретная группа) → most of."></div>`
      },
      {
        title: '4. all of it, most of them, none of us',
        html: `
<div class="g-idea">Если после all / most / some / any / none стоит местоимение (<b>it, them, us, you</b>), то <b>of</b> нужен <b>всегда</b>.</div>
<table>
<tr><th>Слово</th><th>+ of +</th><th>Пример</th></tr>
<tr><td>all</td><td>it / them / us</td><td><span class="say">I bought a pizza and ate all of it.</span></td></tr>
<tr><td>most</td><td>them / us</td><td><span class="say">Do you know these people? — Most of them.</span></td></tr>
<tr><td>some</td><td>them / us / it</td><td><span class="say">Some of us are going out tonight.</span></td></tr>
<tr><td>any</td><td>them / it</td><td><span class="say">I have a lot of games, but I haven't played any of them.</span></td></tr>
<tr><td>none</td><td>them / us / it</td><td><span class="say">How many of these films have you seen? — None of them.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">You can have some of this cake, but not all of it.</span> — Можешь взять немного торта, но не весь.</li>
<li><span class="say">None of us knew the answer.</span> — Никто из нас не знал ответа.</li>
<li><span class="say">Most of you have already played this level.</span> — Большинство из вас уже проходили этот уровень.</li>
</ul>
<div class="g-bad">I know all them. · Most them are from Brazil.</div>
<div class="g-good">I know <b>all of them</b>. · <b>Most of them</b> are from Brazil.</div>
<div class="g-tip">it — для одной вещи или массы (торт, деньги, серия): <b>all of it</b>. them — для многих: <b>all of them</b>.</div>
<div class="mini" data-q="I got a lot of emails, but I didn't read ___." data-o="any them|any of them|any of it" data-a="1" data-why="Перед them всегда of; писем много → them."></div>`
      },
      {
        title: '5. both, either, neither — когда их ровно два',
        html: `
<div class="g-idea">Эти три слова — только про <b>две</b> вещи или двух людей. <b>both</b> = оба. <b>either</b> = любой из двух (всё равно какой). <b>neither</b> = ни один из двух.</div>
<table>
<tr><th>Слово</th><th>Значение</th><th>После него</th></tr>
<tr><td><b class="g-v">both</b></td><td>оба, и тот и другой</td><td>множественное: both games</td></tr>
<tr><td><b class="g-v">either</b></td><td>любой из двух</td><td>единственное: either game</td></tr>
<tr><td><b class="g-v">neither</b></td><td>ни тот, ни другой</td><td>единственное: neither game</td></tr>
</table>
<ul class="g-list">
<li><span class="say">I've played Portal and Portal 2. Both games are great.</span> — Обе игры отличные.</li>
<li><span class="say">There are two servers. You can play on either server.</span> — Можно играть на любом из двух.</li>
<li><span class="say">I tried two fonts. Neither font looked good.</span> — Ни один шрифт не смотрелся.</li>
<li><span class="say">I worked in two studios. Neither job was interesting.</span> — Ни та, ни другая работа не была интересной.</li>
</ul>
<p>Короткие ответы — очень частая вещь в разговоре:</p>
<ul class="g-list">
<li><span class="say">Tea or coffee? — Either. I don't mind.</span> — Любое, мне всё равно.</li>
<li><span class="say">Tea or coffee? — Neither, thanks.</span> — Ничего, спасибо.</li>
<li><span class="say">Pizza or burgers? — Both!</span> — И то, и другое!</li>
</ul>
<p><b>neither</b> = <b>not + either</b>. Отрицание в предложении одно (как в прошлом уроке): или <b>not … either</b>, или <b>neither</b> без not.</p>
<div class="g-bad">I don't want neither.</div>
<div class="g-good">I don't want <b>either</b>. / <b>Neither</b>.</div>
<div class="g-bad">Both game are good. · Neither games was good.</div>
<div class="g-good">Both <b>games</b> are good. · Neither <b>game</b> was good.</div>
<div class="g-tip">Если вариантов три и больше — не both / neither, а <b>all / none</b>: <span class="say">All three games are good.</span> <span class="say">None of the five fonts looked good.</span></div>
<div class="mini" data-q="Would you like the red or the blue one? — ___. I don't mind." data-o="Neither|Either|Both" data-a="1" data-why="«Любой, мне всё равно» → Either."></div>
<div class="mini" data-q="I don't like ___ of these two songs." data-o="neither|either|both" data-a="1" data-why="Уже есть not (don't) → either; neither дал бы двойное отрицание."></div>`
      },
      {
        title: '6. both of them, neither of us',
        html: `
<div class="g-idea">Как и most, эти слова цепляются к группе через <b>of</b>: <b>both / either / neither of + the / my / these / them / us</b>.</div>
<table>
<tr><th>С the / my / Kate's</th><th>С them / us / you</th></tr>
<tr><td><span class="say">both (of) the films</span></td><td><span class="say">both of them</span></td></tr>
<tr><td><span class="say">either of these laptops</span></td><td><span class="say">either of you</span></td></tr>
<tr><td><span class="say">neither of my parents</span></td><td><span class="say">neither of us</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I like both of those pictures.</span> = <span class="say">I like both those pictures.</span> — с both of можно опустить.</li>
<li><span class="say">Neither of my parents plays games.</span> — Никто из моих родителей не играет.</li>
<li><span class="say">I haven't seen either of these series.</span> — Я не смотрел ни один из этих двух сериалов.</li>
<li><span class="say">Paul has two sisters. Both of them are married.</span> — Обе замужем.</li>
<li><span class="say">We didn't eat. Neither of us was hungry.</span> — Никто из нас двоих не был голоден.</li>
<li><span class="say">Who are those two guys? — I don't know either of them.</span> — Не знаю ни одного из них.</li>
</ul>
<div class="g-steps"><div class="g-h">Когда of обязателен</div><ol>
<li><b>both</b> + the / my / these → of можно пропустить: both (of) my brothers.</li>
<li><b>either / neither</b> + the / my / these → of <b>нужен</b>: neither of my brothers.</li>
<li>Любое из трёх + <b>them / us / you</b> → of <b>всегда</b>: both of them.</li>
</ol></div>
<p>После <b>neither of</b> в учебниках ставят глагол в единственном числе (<i>was, plays</i>). В разговоре часто слышно и множественное (<i>were, play</i>) — это тоже нормально.</p>
<div class="g-bad">Neither my friends is here. · Both them are online.</div>
<div class="g-good">Neither <b>of</b> my friends is here. · Both <b>of</b> them are online.</div>
<div class="mini" data-q="Max and I tried, but ___ us could beat the boss." data-o="neither|neither of|either of" data-a="1" data-why="Перед us нужен of; глагол could без not → neither of."></div>`
      },
      {
        title: '7. a few, a little — и почему буква a так важна',
        html: `
<div class="g-idea"><b>a little</b> — немного (для того, что не считаем: время, деньги, вода, английский). <b>a few</b> — несколько (для того, что считаем: дни, друзья, вопросы). Без буквы a смысл меняется: <b>little / few</b> = мало, почти нет.</div>
<table>
<tr><th></th><th>не считаем</th><th>считаем</th></tr>
<tr><td>немного, есть чуть-чуть (плюс)</td><td><b class="g-v">a little</b> time</td><td><b class="g-v">a few</b> days</td></tr>
<tr><td>мало, почти нет (минус)</td><td><b class="g-v">little</b> time</td><td><b class="g-v">few</b> days</td></tr>
</table>
<ul class="g-list">
<li><span class="say">I speak a little Spanish.</span> — Я немного говорю по-испански.</li>
<li><span class="say">Can you wait a little? I'm almost ready.</span> — Подождёшь немного?</li>
<li><span class="say">We're going to the sea for a few days.</span> — Едем на море на несколько дней.</li>
<li><span class="say">I have a few questions about the brief.</span> — У меня есть пара вопросов по брифу.</li>
<li><span class="say">Are there any cafés near the office? — Yes, a few.</span> — Да, несколько.</li>
<li><span class="say">Do you play chess? — A little.</span> — Немного.</li>
</ul>
<p>Без a — упор на то, что <b>мало</b>, не хватает:</p>
<ul class="g-list">
<li><span class="say">There was little food in the fridge.</span> — Еды в холодильнике почти не было.</li>
<li><span class="say">Few people came to the meetup.</span> — На митап пришло мало людей.</li>
<li><span class="say">He's very thin because he eats very little.</span> — Он ест очень мало.</li>
<li><span class="say">Your English is good. You make very few mistakes.</span> — Ты делаешь очень мало ошибок.</li>
</ul>
<p>Сравните:</p>
<ul class="g-list">
<li><span class="say">I have a little money, so let's get a coffee.</span> — Деньги есть, хватит на кофе.</li>
<li><span class="say">I have little money, so I can't buy the new game.</span> — Денег почти нет.</li>
<li><span class="say">I have a few friends in this city, so I'm not lonely.</span> — Друзья есть.</li>
<li><span class="say">I have few friends here, and I feel lonely.</span> — Друзей почти нет.</li>
</ul>
<div class="g-tip">Связь с прошлым: a little / little — пара к <b>much</b> (не считаем), a few / few — пара к <b>many</b> (считаем). В живой речи вместо простого little / few часто говорят <b>not much / not many</b>: <span class="say">I don't have much time.</span></div>
<div class="g-bad">I have a few time. · She has a little friends.</div>
<div class="g-good">I have <b>a little</b> time. · She has <b>a few</b> friends.</div>
<div class="mini" data-q="Can I ask you ___ questions?" data-o="a little|a few|little" data-a="1" data-why="Вопросы можно посчитать → a few."></div>
<div class="mini" data-q="The café was almost empty. There were ___ people." data-o="a few|few|a little" data-a="1" data-why="Почти пусто = мало, почти нет → few (без a)."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I need a pen. Do you have?</div><div class="g-good">Do you have <b>one</b>?</div>
<div class="g-bad">I don't like the black, I like the white.</div><div class="g-good">I don't like the black <b>one</b>, I like the white <b>one</b>.</div>
<div class="g-bad">Most of people play on phones.</div><div class="g-good"><b>Most people</b> play on phones.</div>
<div class="g-bad">The most of my friends are designers.</div><div class="g-good"><b>Most of</b> my friends are designers.</div>
<div class="g-bad">I've read all them.</div><div class="g-good">I've read <b>all of them</b>.</div>
<div class="g-bad">I don't like neither of them.</div><div class="g-good">I don't like <b>either</b> of them. / I like <b>neither</b> of them.</div>
<div class="g-bad">Both film are boring.</div><div class="g-good">Both <b>films</b> are boring.</div>
<div class="g-bad">I have a few money.</div><div class="g-good">I have <b>a little</b> money.</div>
<div class="g-bad">I have few friends, so I'm never lonely.</div><div class="g-good">I have <b>a few</b> friends, so I'm never lonely.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Не оставляйте пустоту: <b>the blue one / new ones</b> · <b>most people</b>, но <b>most of my friends / most of them</b> · про двоих — <b>both / either / neither</b> · <b>a little</b> (не считаем) и <b>a few</b> (считаем) = немного, а без a — почти нет.</div>`
      }
    ],
    words: [
      ["one", "один (заменяет существительное)", "I need a charger. Do you have one?", "Мне нужна зарядка. У тебя есть?"],
      ["ones", "такие (заменяет существительное во мн. ч.)", "I don't like the black ones.", "Мне не нравятся чёрные."],
      ["which one", "который, какой (из них)", "Which one is yours?", "Который твой?"],
      ["another", "ещё один; другой", "Can I have another one?", "Можно ещё один?"],
      ["the other", "другой (из двух)", "Don't buy this one. Buy the other one.", "Не покупай этот. Купи другой."],
      ["most", "большинство, большая часть", "Most people have a phone.", "У большинства людей есть телефон."],
      ["most of", "большинство из", "Most of my friends play on PC.", "Большинство моих друзей играют на ПК."],
      ["both", "оба, и тот и другой", "Both games are great.", "Обе игры отличные."],
      ["either", "любой (из двух); ни тот ни другой (после not)", "You can take either seat.", "Можешь сесть на любое из двух мест."],
      ["neither", "ни тот ни другой, ни один (из двух)", "Neither of us was hungry.", "Никто из нас двоих не был голоден."],
      ["none of", "ни один из, никто из", "None of my friends live here.", "Никто из моих друзей здесь не живёт."],
      ["a few", "несколько", "I'll be back in a few days.", "Я вернусь через несколько дней."],
      ["a little", "немного", "I speak a little French.", "Я немного говорю по-французски."],
      ["few", "мало, немногие", "Few people know this trick.", "Мало кто знает этот трюк."],
      ["little", "мало (неисчисляемого)", "We have very little time.", "У нас очень мало времени."],
      ["half", "половина", "Half of the team is on holiday.", "Половина команды в отпуске."],
      ["the rest", "остальное, остальные", "I've read half of the book. I'll read the rest tomorrow.", "Я прочитал полкниги. Остальное прочитаю завтра."],
      ["pair", "пара", "I need a new pair of headphones.", "Мне нужна новая пара наушников."],
      ["choose — chose", "выбирать — выбрал", "Which one did you choose?", "Какой ты выбрал?"],
      ["prefer", "предпочитать", "I prefer the dark one.", "Я предпочитаю тёмный."],
      ["I don't mind", "мне всё равно, я не против", "Tea or coffee? — I don't mind.", "Чай или кофе? — Мне всё равно."],
      ["difference", "разница, различие", "What's the difference between these two?", "Какая разница между этими двумя?"],
      ["similar", "похожий", "Both logos are very similar.", "Оба логотипа очень похожи."],
      ["cheap", "дешёвый", "Do you have any cheaper ones?", "У вас есть подешевле?"],
      ["comfortable", "удобный", "These chairs are more comfortable.", "Эти стулья удобнее."],
      ["option", "вариант, опция", "There are two options. Both are good.", "Есть два варианта. Оба хорошие."],
      ["member", "участник, член (группы)", "Most of the members play at night.", "Большинство участников играют по ночам."],
      ["advice", "совет, советы (не считается)", "Can I give you a little advice?", "Можно дам тебе небольшой совет?"],
      ["free", "бесплатный; свободный", "Some of these games are free.", "Некоторые из этих игр бесплатные."],
      ["way", "путь, дорога; способ", "There are two ways. You can go either way.", "Есть две дороги. Можно пойти любой."]
    ],
    texts: [
      {
        id: 't-a2-13-1', title: 'Our small clan', level: 'A2',
        text: `I play an online strategy game with a clan of twelve people. Most of us are from Russia, but a few players are from Poland and Germany. None of us are professional players — we just like the game.
Most of the members play in the evening after work. Some of them play every day, and some of them only play at the weekend. We have two leaders, Oleg and Marta. Both of them are very good at strategy, but neither of them likes long meetings, so our meetings are always short.
Last month we had a big problem. We had very little gold and very few soldiers. Most clans on our server were stronger than us. Marta said, "We have a little time before the next war. Let's use it." Every player gave a little gold, and a few of us built new towers.
I'm a designer, so I made a new flag for the clan — actually two flags, a green one and a red one. I showed both of them to the team. Nobody liked the green one, but everybody loved the red one.
The war began on Saturday. It was hard, and we lost a few towers. But in the end we won! Now we have a lot of gold and a few new members. All of them are from different countries, so we speak English in the chat.`,
        questions: [
          { q: 'Where are most of the players from?', o: ['From Poland', 'From Russia', 'From Germany'], a: 1 },
          { q: 'What problem did the clan have last month?', o: ['They had very little gold', 'They had too many members', 'Their leaders left'], a: 0 },
          { q: 'Which flag did the team like?', o: ['The green one', 'Both of them', 'The red one'], a: 2 }
        ]
      },
      {
        id: 't-a2-13-2', title: 'New headphones', level: 'A2',
        text: `Anna: Hi. I'm looking for headphones. My old ones are broken.
Seller: Sure. We have a few models. Do you want big ones or small ones?
Anna: Big ones, I think. I use them for work and for games.
Seller: Then look at these two pairs. Both of them are very popular.
Anna: What's the difference?
Seller: The black ones are wireless. The white ones have a cable, but the sound is a little better.
Anna: Hmm. Which pair is cheaper?
Seller: Neither of them is really cheap, I'm afraid. The black pair is ninety euros, the white pair is eighty-five.
Anna: Do you have any cheaper ones?
Seller: We have some, but most of them are for phones, not for games. And few of them have a good microphone.
Anna: I need a good microphone. I stream a little in the evenings.
Seller: Then either of these pairs is fine. Both have great microphones.
Anna: Can I try the black ones?
Seller: Of course. How are they?
Anna: They're very comfortable! I can hear a little noise from the street, but not much.
Seller: That's normal. Do you want them?
Anna: Yes, I'll take them. Oh, and do you have a bag for them?
Seller: Yes, here's one. It's free.
Anna: Great, thanks! Now I need a new chair too. My old one is terrible.
Seller: Sorry, we don't sell chairs. But there's a good shop on the second floor. You can find some comfortable ones there.`,
        questions: [
          { q: 'Why does Anna need new headphones?', o: ['Her old ones are broken', 'She lost her old ones', 'Her old ones are too small'], a: 0 },
          { q: 'What is important for Anna?', o: ['A long cable', 'A good microphone', 'A white colour'], a: 1 },
          { q: 'Which headphones does Anna take?', o: ['The white ones', 'Both pairs', 'The black ones'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'I need an umbrella. Do you have ___?', o: ['it', 'one', 'ones'], a: 1, why: 'Любой зонт (an umbrella) → one; it — только про уже известный, тот самый.' },
      { t: 'choice', q: 'These cups are dirty. Can I have some clean ___?', o: ['one', 'ones', 'it'], a: 1, why: 'Чашек много → ones.' },
      { t: 'choice', q: '___ people in my office use Figma.', o: ['Most of', 'Most', 'The most'], a: 1, why: 'Перед people нет the / my → Most people (in my office — просто уточнение). С the было бы Most of the people.' },
      { t: 'choice', q: '___ my friends play on PC.', o: ['Most', 'Most of', 'The most of'], a: 1, why: 'Перед my (конкретная группа) → most of.' },
      { t: 'choice', q: 'Tea or coffee? — ___. I don\'t mind.', o: ['Neither', 'Either', 'Both'], a: 1, why: '«Любое из двух, мне всё равно» → Either.' },
      { t: 'choice', q: 'I\'ve got two brothers. ___ are older than me.', o: ['Both', 'Either', 'All'], a: 0, why: 'Два человека, оба → both; all — для трёх и больше.' },
      { t: 'choice', q: 'Hurry up! We have very ___ time.', o: ['few', 'little', 'a few'], a: 1, why: 'Time не считаем, смысл «почти нет» → very little.' },
      { t: 'choice', q: 'I\'ve got ___ questions about the design.', o: ['a little', 'a few', 'little'], a: 1, why: 'Вопросы считаем, «несколько» → a few.' },
      { t: 'gap', q: 'I bought a pizza and ate all of ___. (её)', a: ['it'], why: 'Одна вещь (пицца) → all of it.' },
      { t: 'gap', q: 'How many of these films have you seen? — ___ of them. (ни одного)', a: ['None'], why: 'Ноль из группы, больше двух → None of them.' },
      { t: 'gap', q: 'I don\'t like the black jacket, but I like the brown ___.', a: ['one'], why: 'Не повторяем jacket: the + прилагательное + one.' },
      { t: 'gap', q: 'There are two roads to the lake. You can go ___ way. (любой)', a: ['either'], why: 'Любой из двух → either + единственное число.' },
      { t: 'gap', q: 'I don\'t want ___ of these two games. (ни одну)', a: ['either'], why: 'В предложении уже есть don\'t → either, а не neither.' },
      { t: 'gap', q: 'Can you speak German? — Yes, a ___. (немного)', a: ['little'], why: 'Язык не считаем → a little.' },
      { t: 'order', a: 'Most of my friends play online games', ru: 'Большинство моих друзей играют в онлайн-игры' },
      { t: 'order', a: 'Neither of us was hungry', ru: 'Никто из нас двоих не был голоден' },
      { t: 'tr', q: 'У меня есть несколько друзей в Лондоне.', a: ['i have a few friends in london', 'i\'ve got a few friends in london', 'i have got a few friends in london'] },
      { t: 'tr', q: 'Оба фильма скучные.', a: ['both films are boring', 'both the films are boring', 'both of the films are boring', 'both movies are boring', 'both the movies are boring', 'both of the movies are boring'] },
      { t: 'listen', say: 'Which one do you want?', a: ['which one do you want'] }
    ],
    test: [
      { t: 'choice', q: 'I\'ve lost my headphones. I need to buy new ___.', o: ['one', 'ones', 'them'], a: 1, why: 'Новые, другие наушники (множественное) → ones; them — это были бы те же самые.' },
      { t: 'choice', q: 'Which hotel did you stay at? — The ___ near the beach.', o: ['one', 'it', 'ones'], a: 0, why: 'the one + где = «тот, который…» про одну вещь.' },
      { t: 'choice', q: 'My parents only speak Russian. ___ of them speaks English.', o: ['Neither', 'Either', 'None'], a: 0, why: 'Родителей двое, глагол без not → Neither of.' },
      { t: 'choice', q: 'Выберите правильное: «Мне не нравится ни один из этих двух жанров».', o: ['I don\'t like neither of these genres.', 'I don\'t like either of these genres.', 'I like either of these genres.'], a: 1, why: 'С not → either; neither + not = двойное отрицание.' },
      { t: 'gap', q: 'Some ___ us are going to the cinema tonight.', a: ['of'], why: 'Перед us / them / it всегда нужен of.' },
      { t: 'choice', q: '___ children like cartoons. (дети вообще)', o: ['Most of', 'Most', 'Most of the'], a: 1, why: 'Дети вообще, без группы → Most children.' },
      { t: 'choice', q: 'I have little money, so I ___ buy the new game.', o: ['can\'t', 'can', 'will'], a: 0, why: 'little без a = почти нет → не могу купить.' },
      { t: 'choice', q: 'She has ___ friends, so she\'s never lonely.', o: ['few', 'a few', 'a little'], a: 1, why: 'Друзья есть (плюс), их считаем → a few.' },
      { t: 'gap', q: 'There were very ___ people at the meetup — only five. (мало)', a: ['few'], why: 'Людей считаем, «почти нет» → very few.' },
      { t: 'gap', q: 'This cup is dirty. Can I have another ___?', a: ['one'], why: 'another + one — ещё одна такая же вещь.' },
      { t: 'choice', q: 'Paul has two sisters. Both ___ are married.', o: ['of them', 'them', 'of it'], a: 0, why: 'Перед them нужен of; сестёр много → them.' },
      { t: 'choice', q: 'Would you like some cake? — Just ___, please. I\'m not very hungry.', o: ['a few', 'a little', 'little'], a: 1, why: 'Торт как еда (some cake) не считаем, «немного» → a little.' }
    ]
  },

  // ───────────────────────────── UNIT A2-14 ─────────────────────────────
  {
    id: 'a2-14', level: 'A2', num: 14, track: 'main',
    books: { red: [55, 56, 57, 58, 63] },
    title: 'Myself; go, get, do, make, have',
    summary: 'Научимся говорить «сам», «себя», «друг друга» и уверенно пользоваться пятью главными рабочими глаголами: go, get, do, make, have.',
    grammar: [
      {
        title: '1. Главная идея: учим не глагол, а сочетание',
        html: `
<div class="g-idea">Один русский глагол в английском часто распадается на несколько. «Сделать» — это то <b>do</b>, то <b>make</b>. «Получить», «купить», «доехать», «стать» — всё это может быть <b>get</b>. А «принять душ», «позавтракать», «повеселиться» — это <b>have</b>. Поэтому учим готовые пары «глагол + слово».</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я <b>сделал</b> домашку.</p><p>Я <b>сделал</b> кофе.</p><p>Я <b>принял</b> душ.</p><p>Я <b>получил</b> письмо.</p><p>Я <b>добрался</b> домой в десять.</p><p>Я <b>порезался</b>.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I <b>did</b> my homework.</span></p><p><span class="say">I <b>made</b> coffee.</span></p><p><span class="say">I <b>had</b> a shower.</span></p><p><span class="say">I <b>got</b> an email.</span></p><p><span class="say">I <b>got</b> home at ten.</span></p><p><span class="say">I <b>cut myself</b>.</span></p></div>
</div>
<div class="g-formula"><span class="g-part g-v">go</span><span class="g-sep">·</span><span class="g-part g-v">get</span><span class="g-sep">·</span><span class="g-part g-v">do</span><span class="g-sep">·</span><span class="g-part g-v">make</span><span class="g-sep">·</span><span class="g-part g-v">have</span><span class="g-plus">+</span><span class="g-part">готовое сочетание</span></div>
<div class="g-tip">Заведите в заметках пять колонок — go, get, do, make, have — и записывайте каждое новое сочетание из игр и сериалов в нужную. Так их запоминают даже носители.</div>
<div class="mini" data-q="Я принимаю душ каждое утро." data-o="I take shower every morning.|I have a shower every morning.|I make a shower every morning." data-a="1" data-why="«Принять душ» → have a shower (в Америке ещё take a shower, но с a)."></div>`
      },
      {
        title: '2. myself, yourself — «себя, себе»',
        html: `
<div class="g-idea">Когда человек делает что-то <b>с самим собой</b>, ставим слово на <b>-self</b> (одно лицо) или <b>-selves</b> (много). По-русски это «себя, себе, собой» или частица «-ся».</div>
<table>
<tr><th>Кто</th><th>Кого</th><th>Себя</th></tr>
<tr><td>I</td><td>me</td><td><b class="g-v">myself</b></td></tr>
<tr><td>you (один)</td><td>you</td><td><b class="g-v">yourself</b></td></tr>
<tr><td>you (много)</td><td>you</td><td><b class="g-v">yourselves</b></td></tr>
<tr><td>he / she / it</td><td>him / her / it</td><td><b class="g-v">himself / herself / itself</b></td></tr>
<tr><td>we</td><td>us</td><td><b class="g-v">ourselves</b></td></tr>
<tr><td>they</td><td>them</td><td><b class="g-v">themselves</b></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I looked at myself in the mirror.</span> — Я посмотрел на себя в зеркало.</li>
<li><span class="say">He cut himself with a knife.</span> — Он порезался ножом.</li>
<li><span class="say">She fell off her bike, but she didn't hurt herself.</span> — …но не ушиблась.</li>
<li><span class="say">Be careful! Don't hurt yourself.</span> — Осторожно! Не ударься.</li>
<li><span class="say">Help yourself! / Help yourselves!</span> — Угощайся! / Угощайтесь!</li>
<li><span class="say">We enjoyed ourselves at the festival.</span> — Мы отлично провели время на фестивале.</li>
<li><span class="say">They paid for themselves.</span> — Они заплатили сами за себя.</li>
<li><span class="say">Sometimes I talk to myself when I'm working.</span> — Иногда я разговариваю сам с собой за работой.</li>
</ul>
<p>Сравните: другой человек или тот же?</p>
<ul class="g-list">
<li><span class="say">She's looking at him.</span> — Она смотрит на него. <span class="muted">(два разных человека)</span></li>
<li><span class="say">She's looking at herself.</span> — Она смотрит на себя. <span class="muted">(тот же человек)</span></li>
</ul>
<div class="g-bad">He looked at him in the mirror. <span class="muted">— про себя самого</span></div>
<div class="g-good">He looked at <b>himself</b> in the mirror.</div>
<div class="g-tip"><b>enjoy</b> не любит стоять один: <span class="say">I enjoyed the party.</span> или <span class="say">I enjoyed myself.</span> А пожелание «Хорошо повеселиться!» — <span class="say">Enjoy yourself!</span></div>
<div class="mini" data-q="The kids had a great time. They really enjoyed ___." data-o="them|themselves|theirselves" data-a="1" data-why="Дети — они (they) и радовались сами → themselves. theirselves не существует."></div>
<div class="mini" data-q="Pizza is on the table. Help ___! (гостям, много людей)" data-o="yourself|yourselves|you" data-a="1" data-why="Гостей много → yourselves (-selves)."></div>`
      },
      {
        title: '3. by myself, each other и ловушка «-ся»',
        html: `
<div class="g-idea"><b>by myself / by yourself…</b> = один, в одиночку, сам (без помощи). <b>each other</b> = друг друга. И главное: русское «-ся» далеко не всегда = myself.</div>
<ul class="g-list">
<li><span class="say">I live by myself.</span> — Я живу один.</li>
<li><span class="say">Did you make this game by yourself?</span> — Ты сделал эту игру сам?</li>
<li><span class="say">Was she with friends? — No, she was by herself.</span> — Нет, она была одна.</li>
</ul>
<p><b>each other</b> — когда двое (или больше) делают что-то <b>один другому</b>:</p>
<ul class="g-list">
<li><span class="say">Anna and Max know each other well.</span> — Анна и Макс хорошо знают друг друга.</li>
<li><span class="say">We live near each other.</span> — Мы живём рядом друг с другом.</li>
<li><span class="say">They send each other memes all day.</span> — Они весь день шлют друг другу мемы.</li>
</ul>
<table>
<tr><th>each other</th><th>themselves</th></tr>
<tr><td><span class="say">Tom and Kate looked at each other.</span><br>Он — на неё, она — на него.</td><td><span class="say">Tom and Kate looked at themselves.</span><br>Каждый — на себя (например, в зеркало).</td></tr>
</table>
<p>А теперь ловушка. Многие русские глаголы на «-ся» по-английски идут <b>без</b> myself:</p>
<table>
<tr><th>Русский</th><th>English</th></tr>
<tr><td>чувствовать себя</td><td><span class="say">I feel great.</span></td></tr>
<tr><td>расслабиться</td><td><span class="say">Relax!</span></td></tr>
<tr><td>встретиться</td><td><span class="say">Let's meet at six.</span></td></tr>
<tr><td>одеться</td><td><span class="say">I got dressed.</span></td></tr>
<tr><td>поторопиться</td><td><span class="say">Hurry up!</span></td></tr>
<tr><td>проснуться</td><td><span class="say">I woke up at seven.</span></td></tr>
</table>
<div class="g-bad">I feel myself tired. · We met ourselves in the café. · Relax yourself.</div>
<div class="g-good">I <b>feel</b> tired. · We <b>met</b> in the café. · <b>Relax</b>.</div>
<div class="mini" data-q="Как ты себя чувствуешь?" data-o="How do you feel yourself?|How do you feel?|How are you feel?" data-a="1" data-why="feel идёт без yourself: How do you feel?"></div>
<div class="mini" data-q="Anna and I help ___ with homework." data-o="ourselves|each other|us" data-a="1" data-why="Я помогаю ей, она — мне → each other."></div>`
      },
      {
        title: '4. go: go to, go on, go for, go shopping',
        html: `
<div class="g-idea">После <b>go</b> бывает четыре разных «прицепа». Какой нужен — зависит от слова после него.</div>
<table>
<tr><th>Схема</th><th>С чем</th><th>Пример</th></tr>
<tr><td><b class="g-v">go to</b> + место</td><td>work, London, the dentist, a concert, bed</td><td><span class="say">I go to work at nine.</span></td></tr>
<tr><td><b class="g-v">go on</b> + поездка</td><td>holiday, a trip, a tour, strike</td><td><span class="say">We're going on holiday in July.</span></td></tr>
<tr><td><b class="g-v">go for</b> + a…</td><td>a walk, a run, a swim, a coffee, a meal</td><td><span class="say">Let's go for a walk.</span></td></tr>
<tr><td><b class="g-v">go</b> + -ing</td><td>shopping, swimming, skiing, fishing, jogging</td><td><span class="say">Are you going shopping?</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I went to the dentist yesterday.</span> — Вчера я ходил к стоматологу.</li>
<li><span class="say">Where's Max? — He's gone to bed.</span> — Он пошёл спать.</li>
<li><span class="say">I was so tired that I went to sleep at nine.</span> — Я так устал, что заснул в девять.</li>
<li><span class="say">The school kids went on a trip to the museum.</span> — Школьники поехали на экскурсию в музей.</li>
<li><span class="say">The taxi drivers have gone on strike.</span> — Таксисты объявили забастовку.</li>
<li><span class="say">I met Kate in town, so we went for a coffee.</span> — …и мы пошли выпить кофе.</li>
<li><span class="say">Do you go for a run every morning?</span> — Ты бегаешь по утрам?</li>
<li><span class="say">It's hot. Let's go swimming.</span> = <span class="say">Let's go for a swim.</span> — Пошли поплаваем.</li>
<li><span class="say">We go skiing every winter.</span> — Каждую зиму мы катаемся на лыжах.</li>
</ul>
<p><b>go to bed</b> — лечь спать. <b>go to sleep</b> — заснуть. <b>go home</b> — <b>без to</b> (как go there, go here).</p>
<div class="g-bad">I'm going to home. · Let's go to shopping. · We go to holiday.</div>
<div class="g-good">I'm going <b>home</b>. · Let's go <b>shopping</b>. · We go <b>on</b> holiday.</div>
<div class="mini" data-q="The weather is great. Let's go ___ a walk." data-o="to|on|for" data-a="2" data-why="a walk, a run, a swim → go for."></div>
<div class="mini" data-q="Richard has a boat. He often goes ___." data-o="sailing|to sailing|for sailing" data-a="0" data-why="Спорт на -ing идёт сразу после go, без предлога."></div>`
      },
      {
        title: '5. get — получить, купить, стать, добраться',
        html: `
<div class="g-idea"><b>get</b> — самый «резиновый» глагол английского. Главная мысль у него одна: было <b>не так</b> — стало <b>так</b>. Не было письма — получил. Не был голоден — проголодался. Не был дома — добрался.</div>
<table>
<tr><th>Схема</th><th>Значение</th><th>Пример</th></tr>
<tr><td>get + вещь</td><td>получить, купить, найти, взять</td><td><span class="say">I got a message from Max.</span></td></tr>
<tr><td>get + транспорт</td><td>поехать на, сесть на</td><td><span class="say">I got the bus.</span></td></tr>
<tr><td>get + прилагательное</td><td>стать, становиться</td><td><span class="say">It's getting cold.</span></td></tr>
<tr><td>get to + место</td><td>добраться, прибыть</td><td><span class="say">I got to work at 9.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I like your hoodie. Where did you get it?</span> — Где ты её купил?</li>
<li><span class="say">It's hard to get a job in game dev.</span> — Трудно найти работу в геймдеве.</li>
<li><span class="say">If you don't eat, you get hungry.</span> — Если не есть, проголодаешься.</li>
<li><span class="say">Drink your tea. It's getting cold.</span> — Чай остывает.</li>
<li><span class="say">It rained, and we got very wet.</span> — Мы сильно промокли.</li>
<li><span class="say">I hope your cat gets better soon.</span> — Надеюсь, котик скоро поправится.</li>
<li><span class="say">We didn't have a map, so we got lost.</span> — …и заблудились.</li>
<li><span class="say">Kate and Tom are getting married in May.</span> — Они женятся в мае.</li>
<li><span class="say">I got up and got dressed.</span> — Я встал и оделся.</li>
<li><span class="say">We left at ten and got to the airport at twelve.</span> — Мы выехали в десять и добрались до аэропорта в двенадцать.</li>
</ul>
<p><b>get home / get here / get there</b> — <b>без to</b>: <span class="say">What time did you get home?</span> <span class="say">How did you get here?</span></p>
<p>Сесть и выйти из транспорта:</p>
<table>
<tr><th>Машина, такси</th><th>Автобус, поезд, самолёт</th></tr>
<tr><td><span class="say">get in</span> (into) the car — сесть</td><td><span class="say">get on</span> the bus — сесть</td></tr>
<tr><td><span class="say">get out of</span> the car — выйти</td><td><span class="say">get off</span> the bus — выйти</td></tr>
</table>
<div class="g-tip">В машину «залезаем внутрь» — <b>in / out</b>. На автобус и поезд «заходим как на платформу» — <b>on / off</b>.</div>
<div class="g-bad">I got to home at 11. · I got in the bus. · It becomes dark.</div>
<div class="g-good">I got <b>home</b> at 11. · I got <b>on</b> the bus. · It's <b>getting</b> dark.</div>
<div class="mini" data-q="We got ___ the train in Tver." data-o="out|off|out of" data-a="1" data-why="Поезд, автобус, самолёт → get off (выйти)."></div>
<div class="mini" data-q="Put on a jacket or you'll ___ cold." data-o="become|get|go" data-a="1" data-why="Стать + прилагательное в живой речи → get cold."></div>`
      },
      {
        title: '6. do или make',
        html: `
<div class="g-idea"><b>make</b> — создать что-то, чего раньше не было (кофе, торт, сайт, игру). <b>do</b> — выполнить действие или работу вообще, без нового предмета на выходе.</div>
<ul class="g-list">
<li><span class="say">What are you doing tonight?</span> — Что делаешь вечером? <span class="muted">(не making)</span></li>
<li><span class="say">I'll do it.</span> — Я сделаю. <span class="muted">(любое дело)</span></li>
<li><span class="say">She does the same thing every day.</span> — Она каждый день делает одно и то же.</li>
<li><span class="say">What do you do? — I'm a designer.</span> — Чем занимаешься? — Я дизайнер.</li>
<li><span class="say">I'm making coffee. Do you want some?</span> — Я делаю кофе. Хочешь?</li>
<li><span class="say">My friends make indie games.</span> — Мои друзья делают инди-игры.</li>
</ul>
<table>
<tr><th>do</th><th>make</th></tr>
<tr><td><span class="say">do homework</span> — домашку</td><td><span class="say">make a mistake</span> — ошибиться</td></tr>
<tr><td><span class="say">do housework</span> — домашние дела</td><td><span class="say">make an appointment</span> — записаться</td></tr>
<tr><td><span class="say">do an exam / a test</span> — сдавать</td><td><span class="say">make a phone call</span> — позвонить</td></tr>
<tr><td><span class="say">do a course</span> — проходить курс</td><td><span class="say">make a list</span> — составить список</td></tr>
<tr><td><span class="say">do exercises</span> — делать упражнения</td><td><span class="say">make a noise</span> — шуметь</td></tr>
<tr><td><span class="say">do somebody a favour</span> — оказать услугу</td><td><span class="say">make the bed</span> — заправить кровать</td></tr>
<tr><td><span class="say">do the shopping / the washing-up</span> — покупки / посуду</td><td><span class="say">make a film / a game</span> — снять фильм / сделать игру</td></tr>
</table>
<ul class="g-list">
<li><span class="say">Could you do me a favour?</span> — Можешь сделать мне одолжение?</li>
<li><span class="say">I'm doing a course in 3D modelling.</span> — Я прохожу курс 3D-моделирования.</li>
<li><span class="say">I need to make an appointment with the dentist.</span> — Мне нужно записаться к стоматологу.</li>
<li><span class="say">I did the washing, but I didn't do the cooking.</span> — Я постирал, но не приготовил.</li>
</ul>
<p>Отдельно: фото не «делают», а «берут» — <b>take a photo</b>. А фильм — <b>make a film</b>.</p>
<div class="g-bad">I made my homework. · I did a mistake. · Can I make a photo?</div>
<div class="g-good">I <b>did</b> my homework. · I <b>made</b> a mistake. · Can I <b>take</b> a photo?</div>
<div class="mini" data-q="Sorry, I ___ a mistake in your name." data-o="did|made|had" data-a="1" data-why="Ошибка — устойчивое make a mistake."></div>
<div class="mini" data-q="Have you ___ your homework yet?" data-o="made|done|did" data-a="1" data-why="homework → do; после have нужна третья форма → done."></div>`
      },
      {
        title: '7. have: «есть у меня» и «делаю»',
        html: `
<div class="g-idea">У <b>have</b> два разных лица. 1) «У меня есть» — владение, внешность, болезни: тут можно <b>have</b> или <b>have got</b>. 2) Действие — поесть, принять душ, отдохнуть: тут <b>только have</b>, без got, и можно с -ing.</div>
<p><b>1. Есть, имеется</b> — have = have got:</p>
<ul class="g-list">
<li><span class="say">I have a new monitor.</span> = <span class="say">I've got a new monitor.</span></li>
<li><span class="say">Kate has long hair.</span> = <span class="say">Kate has got long hair.</span></li>
<li><span class="say">Do you have a cold?</span> = <span class="say">Have you got a cold?</span> — Ты простыл?</li>
<li><span class="say">I've got a headache.</span> — У меня болит голова.</li>
</ul>
<p>В прошлом — просто <b>had</b>, без got: <span class="say">I had a cold last week.</span> <span class="say">Did you have enough time?</span> <span class="say">He didn't have any money.</span></p>
<p><b>2. Действие</b> — только have:</p>
<table>
<tr><th>Еда и напитки</th><th>Отдых и события</th></tr>
<tr><td><span class="say">have breakfast / lunch / dinner</span></td><td><span class="say">have a shower / a bath</span></td></tr>
<tr><td><span class="say">have a coffee / a pizza</span></td><td><span class="say">have a rest / a party / a holiday</span></td></tr>
<tr><td><span class="say">have something to eat</span></td><td><span class="say">have a good time / fun</span></td></tr>
<tr><td></td><td><span class="say">have a look / a dream / an accident / a baby</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Where's Lisa? — She's having lunch.</span> — Она обедает.</li>
<li><span class="say">I don't usually have breakfast.</span> — Я обычно не завтракаю.</li>
<li><span class="say">We're having a party on Friday. Come!</span> — У нас вечеринка в пятницу.</li>
<li><span class="say">Have a nice time!</span> — Хорошо вам провести время!</li>
<li><span class="say">Can I have a look at your sketches?</span> — Можно взглянуть на твои скетчи?</li>
<li><span class="say">I had a strange dream last night.</span> — Мне приснился странный сон.</li>
</ul>
<p>Сравните:</p>
<ul class="g-list">
<li><span class="say">I've got a shower in my flat.</span> — В квартире <i>есть</i> душ.</li>
<li><span class="say">I have a shower every morning.</span> — Я <i>принимаю</i> душ каждое утро.</li>
</ul>
<div class="g-bad">I've got breakfast at eight. · She's got a shower now. · I had got a cold.</div>
<div class="g-good">I <b>have</b> breakfast at eight. · She's <b>having</b> a shower now. · I <b>had</b> a cold.</div>
<div class="mini" data-q="Where's Tom? — He's ___ dinner." data-o="got|having|making" data-a="1" data-why="have dinner — действие, поэтому может быть -ing: having."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I feel myself bad.</div><div class="g-good">I <b>feel</b> bad.</div>
<div class="g-bad">They love themselves. <span class="muted">— про пару, друг друга</span></div><div class="g-good">They love <b>each other</b>.</div>
<div class="g-bad">We enjoyed very much.</div><div class="g-good">We enjoyed <b>ourselves</b> very much.</div>
<div class="g-bad">Let's go to swimming.</div><div class="g-good">Let's go <b>swimming</b>. / Let's go <b>for a swim</b>.</div>
<div class="g-bad">I went to home early.</div><div class="g-good">I went <b>home</b> early.</div>
<div class="g-bad">I got off the car.</div><div class="g-good">I got <b>out of</b> the car.</div>
<div class="g-bad">I must make my homework.</div><div class="g-good">I must <b>do</b> my homework.</div>
<div class="g-bad">Don't do a noise!</div><div class="g-good">Don't <b>make</b> a noise!</div>
<div class="g-bad">I've got a shower every day.</div><div class="g-good">I <b>have</b> a shower every day.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>myself / ourselves</b> — себя, <b>by myself</b> — сам, <b>each other</b> — друг друга · <b>go to / on / for / -ing</b> · <b>get</b> = получить, стать, добраться · <b>make</b> создаёт, <b>do</b> выполняет · <b>have</b> = есть у меня или действие (have lunch, have a shower).</div>`
      }
    ],
    words: [
      ["myself", "себя, себе, сам (я)", "I made this game by myself.", "Я сделал эту игру сам."],
      ["yourself / yourselves", "себя, сам (ты / вы)", "Help yourself!", "Угощайся!"],
      ["himself / herself", "себя, сам (он / она)", "She looked at herself in the mirror.", "Она посмотрела на себя в зеркало."],
      ["ourselves", "себя, сами (мы)", "We enjoyed ourselves.", "Мы отлично провели время."],
      ["themselves", "себя, сами (они)", "They paid for themselves.", "Они заплатили сами за себя."],
      ["by myself", "один, сам, без помощи", "I live by myself.", "Я живу один."],
      ["each other", "друг друга", "We've known each other for years.", "Мы знаем друг друга много лет."],
      ["enjoy yourself", "хорошо провести время", "Enjoy yourself at the party!", "Повеселись на вечеринке!"],
      ["hurt — hurt", "ушибить, поранить — ушиб", "Did you hurt yourself?", "Ты не ушибся?"],
      ["cut — cut", "резать — порезал", "I cut myself with a knife.", "Я порезался ножом."],
      ["go for a walk", "пойти погулять", "Let's go for a walk after dinner.", "Давай погуляем после ужина."],
      ["go shopping", "ходить по магазинам", "Are you going shopping today?", "Ты сегодня идёшь по магазинам?"],
      ["go on holiday", "поехать в отпуск", "We're going on holiday next week.", "На следующей неделе мы едем в отпуск."],
      ["go to sleep", "заснуть", "I went to sleep at midnight.", "Я заснул в полночь."],
      ["get — got", "получать, покупать, становиться — получил", "I got a message from Kate.", "Я получил сообщение от Кейт."],
      ["get to", "добираться до", "How do you get to work?", "Как ты добираешься до работы?"],
      ["get lost", "заблудиться", "We got lost in the old town.", "Мы заблудились в старом городе."],
      ["get dressed", "одеться", "I got up and got dressed.", "Я встал и оделся."],
      ["get married", "жениться, выйти замуж", "They got married last year.", "Они поженились в прошлом году."],
      ["get on / get off", "сесть / выйти (автобус, поезд)", "Get off the bus at the park.", "Выйди из автобуса у парка."],
      ["get in / get out of", "сесть в / выйти из (машины)", "She got in the taxi.", "Она села в такси."],
      ["do homework", "делать домашнее задание", "Have you done your homework?", "Ты сделал домашку?"],
      ["do the washing-up", "мыть посуду", "I'll do the washing-up.", "Я помою посуду."],
      ["do somebody a favour", "оказать услугу, сделать одолжение", "Can you do me a favour?", "Можешь сделать мне одолжение?"],
      ["make a mistake", "ошибиться", "Everybody makes mistakes.", "Все ошибаются."],
      ["make an appointment", "записаться (к врачу и т. п.)", "I've made an appointment with the dentist.", "Я записался к стоматологу."],
      ["make a noise", "шуметь", "Please don't make a noise.", "Пожалуйста, не шумите."],
      ["have a shower", "принять душ", "I have a shower every morning.", "Я принимаю душ каждое утро."],
      ["have a look", "взглянуть", "Can I have a look?", "Можно взглянуть?"],
      ["have a good time", "хорошо провести время", "Have a good time in Rome!", "Хорошо вам провести время в Риме!"],
      ["take a photo", "сфотографировать", "Can I take a photo of your cat?", "Можно сфотографировать твоего кота?"]
    ],
    texts: [
      {
        id: 't-a2-14-1', title: 'A day for myself', level: 'A2',
        text: `Last Saturday I decided to have a day for myself. I'm a designer, and I usually work at home by myself, so I don't go out much. But that day I wanted to go somewhere new.
I got up at eight, had a quick shower and got dressed. I didn't have breakfast at home — I went for a coffee in a small café near my flat. Then I got the bus to the old part of the city.
I wanted to take photos for a new project, so I walked a lot. After two hours I got tired and hungry. I had lunch in a little Italian restaurant. The food was great, but then I made a big mistake: I didn't look at the map. When I went out, I didn't know where I was. I got lost!
My phone was dead, so I asked a woman for help. She was very kind. She did me a favour and walked with me to the bus stop. We talked all the way, and then we got on the same bus. And guess what? We live on the same street!
I got home at seven. I was tired, but I really enjoyed myself. And now I have a new friend — next Saturday we're going shopping together.`,
        questions: [
          { q: 'How did he get to the old part of the city?', o: ['By taxi', 'By bus', 'On foot'], a: 1 },
          { q: 'Why did he get lost?', o: ['He didn\'t look at the map', 'The bus went the wrong way', 'The woman gave him bad advice'], a: 0 },
          { q: 'What did the woman do?', o: ['She took photos of him', 'She walked with him to the bus stop', 'She gave him her phone'], a: 1 }
        ]
      },
      {
        id: 't-a2-14-2', title: 'The game jam', level: 'A2',
        text: `Kate: Hi Max! What are you doing this weekend?
Max: Nothing special. I have to do some housework — do the washing, do the shopping… Boring. Why?
Kate: There's a game jam this weekend. Teams make a small game in two days. Do you want to come?
Max: Me? I can't make games. I've never done it.
Kate: That's fine. Most people there are beginners. You can do the sound. You play the guitar, right?
Max: Yes, a little. OK, why not? How do I get there?
Kate: Get the metro to Park Street, get off and walk for five minutes. Don't get lost — the building is behind the big shopping centre.
Max: Got it. Should I bring anything?
Kate: Bring your laptop and something to eat. We'll have lunch together, but it's a long day, and you'll get hungry.
Max: What if I make a lot of mistakes?
Kate: Everybody makes mistakes at a game jam. That's normal. Nobody makes a perfect game in two days.
Max: And where do we sleep? There?
Kate: No, at home! But on Sunday evening we'll have a small party.
Max: Great. Can you do me a favour? Send me the address.
Kate: Sure. And Max — relax. You'll have a good time. And help yourself to the free pizza!
Max: Free pizza? OK, now I really want to go.`,
        questions: [
          { q: 'What does Max have to do at the weekend?', o: ['Some housework', 'His homework', 'A guitar lesson'], a: 0 },
          { q: 'Where should Max get off the metro?', o: ['At the shopping centre', 'At Park Street', 'Near his home'], a: 1 },
          { q: 'What will they have on Sunday evening?', o: ['An exam', 'A small party', 'A meeting with the boss'], a: 1 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'Be careful with that knife! Don\'t cut ___.', o: ['you', 'yourself', 'yourselves'], a: 1, why: 'Тот же человек, один → yourself.' },
      { t: 'choice', q: 'Anna and Max love ___. They\'re getting married.', o: ['themselves', 'each other', 'theirselves'], a: 1, why: 'Каждый любит другого → each other.' },
      { t: 'choice', q: 'I feel ___ today.', o: ['myself great', 'great', 'me great'], a: 1, why: 'Глагол feel идёт без myself.' },
      { t: 'choice', q: 'Let\'s go ___ this afternoon.', o: ['to shopping', 'shopping', 'for shopping'], a: 1, why: 'go + -ing (shopping, swimming) — без предлога.' },
      { t: 'choice', q: 'What time did you get ___ last night?', o: ['home', 'to home', 'at home'], a: 0, why: 'get home — без to.' },
      { t: 'choice', q: 'I\'m sorry, I ___ a mistake.', o: ['did', 'made', 'had'], a: 1, why: 'Устойчивое сочетание: make a mistake.' },
      { t: 'choice', q: 'Have you ___ your homework?', o: ['made', 'done', 'did'], a: 1, why: 'homework → do; после have — третья форма done.' },
      { t: 'choice', q: 'Where\'s Kate? — She\'s ___ a shower.', o: ['having', 'got', 'making'], a: 0, why: 'have a shower — действие, может быть в -ing: having.' },
      { t: 'gap', q: 'We had a great time at the festival. We really enjoyed ___.', a: ['ourselves'], why: 'we → ourselves; enjoy не стоит без дополнения.' },
      { t: 'gap', q: 'It\'s winter. It gets ___ at four o\'clock. (темно)', a: ['dark'], why: 'get + прилагательное = становиться: get dark.' },
      { t: 'gap', q: 'We got ___ the bus near the museum. (сели в)', a: ['on'], why: 'Автобус, поезд → get on (сесть), get off (выйти).' },
      { t: 'gap', q: 'Could you ___ me a favour?', a: ['do'], why: 'Устойчивое сочетание: do somebody a favour.' },
      { t: 'gap', q: 'Can I ___ a photo of your cat?', a: ['take'], why: 'Фото не «делают»: take a photo.' },
      { t: 'gap', q: 'Nobody helped him. He did it ___ himself. (сам)', a: ['by'], why: 'by himself = сам, без помощи.' },
      { t: 'order', a: 'I usually get to work at nine', ru: 'Я обычно добираюсь до работы в девять' },
      { t: 'order', a: 'Let\'s go for a walk after dinner', ru: 'Давай погуляем после ужина' },
      { t: 'tr', q: 'Я заблудился.', a: ['i got lost', 'i\'ve got lost', 'i have got lost', 'i was lost'] },
      { t: 'tr', q: 'Мы едем в отпуск в июле.', a: ['we\'re going on holiday in july', 'we are going on holiday in july', 'we\'re going on vacation in july', 'we are going on vacation in july', 'we\'re going to go on holiday in july', 'we are going to go on holiday in july'] },
      { t: 'listen', say: 'Help yourself to some pizza', a: ['help yourself to some pizza'] }
    ],
    test: [
      { t: 'choice', q: 'Tom and Kate looked at ___ and smiled. (друг на друга)', o: ['themselves', 'each other', 'them'], a: 1, why: 'Он на неё, она на него → each other.' },
      { t: 'choice', q: 'She fell off her bike, but she didn\'t hurt ___.', o: ['her', 'herself', 'himself'], a: 1, why: 'Ушиблась сама она → herself.' },
      { t: 'choice', q: 'I usually ___ my bed in the morning.', o: ['do', 'make', 'have'], a: 1, why: 'Заправить кровать → make the bed.' },
      { t: 'choice', q: 'What do you ___? — I\'m a UX designer.', o: ['make', 'do', 'work'], a: 1, why: 'What do you do? = «Кем ты работаешь?»' },
      { t: 'gap', q: 'I\'m really tired. I\'m going ___ bed.', a: ['to'], why: 'Лечь спать → go to bed.' },
      { t: 'choice', q: 'The water is warm. Let\'s go for ___.', o: ['swimming', 'a swim', 'swim'], a: 1, why: 'go for + a … (a swim); go swimming — без for.' },
      { t: 'gap', q: 'If you don\'t eat, you ___ hungry. (становишься)', a: ['get'], why: 'get + прилагательное = становиться; you → get.' },
      { t: 'choice', q: 'How did you ___ here? By taxi?', o: ['get to', 'get', 'go to'], a: 1, why: 'here / there / home идут без to: get here.' },
      { t: 'choice', q: 'I ___ a terrible cold last week.', o: ['had got', 'had', 'have got'], a: 1, why: 'Прошлое у have → had, без got.' },
      { t: 'choice', q: 'A car stopped and a man got ___ it.', o: ['off', 'out of', 'out'], a: 1, why: 'Из машины → get out of + машина.' },
      { t: 'gap', q: 'The airport workers went ___ strike. (объявили забастовку)', a: ['on'], why: 'go on strike, go on holiday, go on a trip — с on.' },
      { t: 'choice', q: 'Please don\'t ___ a noise — the baby is sleeping.', o: ['do', 'make', 'have'], a: 1, why: 'Шуметь → make a noise.' }
    ]
  }
);
