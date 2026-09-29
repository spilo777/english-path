// Юниты 6 и 7 — there is / have got / some-any; can + местоимения. Стиль «как у Мерфи, только проще».
(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-6');
  if (!u) return;
  u.grammar = [
    {
      title: '1. Главная идея: «где-то что-то есть»',
      html: `
<div class="g-idea">По-русски мы говорим <b>«В комнате диван»</b> или <b>«Рядом парк»</b>. По-английски такое предложение начинают с особой рамки <b>there is / there are</b> — «там есть, имеется». Так мы сообщаем что-то <b>новое</b>: что где-то что-то находится.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>В комнате <span class="g-gap">_</span> диван.</p><p>Рядом с офисом <span class="g-gap">_</span> кафе.</p><p>В игре <span class="g-gap">_</span> три уровня.</p></div>
  <div><div class="g-h">English</div><p><span class="say"><b>There is</b> a sofa in the room.</span></p><p><span class="say"><b>There's</b> a café near the office.</span></p><p><span class="say"><b>There are</b> three levels in the game.</span></p></div>
</div>
<div class="g-formula"><span class="g-part g-v">There is / There are</span><span class="g-plus">+</span><span class="g-part">что</span><span class="g-plus">+</span><span class="g-part">где</span></div>
<p>Порядок обратный русскому: сначала <b>что</b>, потом <b>где</b>. Русское «В комнате есть стол» → английское «Есть стол в комнате».</p>
<div class="g-bad">In the room is a sofa.</div>
<div class="g-good">There is a sofa in the room.</div>
<div class="g-tip">Слово <b>there</b> здесь не значит «там». Это просто «заглушка» в начале, как невидимое «вот, имеется…». Переводить его не нужно.</div>
<div class="mini" data-q="Рядом с моим домом парк." data-o="Near my house is a park.|There is a park near my house.|A park is there near my house." data-a="1" data-why="Сообщаем, что где-то что-то есть: There is + что + где."></div>`
    },
    {
      title: '2. is или are? Отрицание и вопрос',
      html: `
<p>Выбор такой же, как в юните 1: <b>один</b> предмет → <b>is</b>, <b>много</b> → <b>are</b>.</p>
<table>
<tr><th></th><th>Один</th><th>Много</th></tr>
<tr><td>+</td><td><span class="say">There is a bed.</span></td><td><span class="say">There are two beds.</span></td></tr>
<tr><td>−</td><td><span class="say">There isn't a bank.</span></td><td><span class="say">There aren't any shops.</span></td></tr>
<tr><td>?</td><td><span class="say">Is there a café?</span></td><td><span class="say">Are there any eggs?</span></td></tr>
</table>
<div class="g-steps"><div class="g-h">Как построить вопрос</div><ol>
<li>Берём утверждение: <span class="say">There is a shop near here.</span></li>
<li>Меняем местами первые два слова: <b>There is</b> → <b>Is there</b>.</li>
<li>Готово: <span class="say">Is there a shop near here?</span></li>
</ol></div>
<p>Короткие ответы: <span class="say">Yes, there is.</span> / <span class="say">No, there isn't.</span> · <span class="say">Yes, there are.</span> / <span class="say">No, there aren't.</span></p>
<p>Сколько? — <span class="say">How many rooms are there?</span> — Сколько там комнат?</p>
<div class="g-bad">There is three bedrooms.</div>
<div class="g-good">There are three bedrooms. <span class="muted">— много → are</span></div>
<div class="mini" data-q="___ there a cinema in your town?" data-o="Are|Is|Do" data-a="1" data-why="Один кинотеатр → is; в вопросе is идёт первым."></div>
<div class="mini" data-q="Are there any eggs? — Yes, there ___." data-o="is|are|have" data-a="1" data-why="Вопрос с are (много яиц) → и ответ с are."></div>`
    },
    {
      title: '3. have got — «у меня есть»',
      html: `
<div class="g-idea">Про <b>«у кого-то есть»</b> англичане говорят <b>have got</b>. Смысл тот же, что у <b>I have</b> из юнита 3, просто это очень частый разговорный британский вариант.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>У меня есть кот.</p><p>У неё новая квартира.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I've got a cat.</span></p><p><span class="say">She's got a new flat.</span></p></div>
</div>
<table>
<tr><th>Кто</th><th>+</th><th>−</th><th>?</th></tr>
<tr><td>I / you / we / they</td><td><span class="say">I've got</span></td><td><span class="say">I haven't got</span></td><td><span class="say">Have you got…?</span></td></tr>
<tr><td>he / she / it</td><td><span class="say">She's got</span></td><td><span class="say">He hasn't got</span></td><td><span class="say">Has she got…?</span></td></tr>
</table>
<p>Короткие ответы: <span class="say">Yes, I have.</span> / <span class="say">No, I haven't.</span> · <span class="say">Yes, she has.</span> / <span class="say">No, she hasn't.</span> <span class="muted">(got в коротком ответе не нужен)</span></p>
<ul class="g-list">
<li><span class="say">I've got a new laptop.</span> — У меня новый ноутбук.</li>
<li><span class="say">Have you got a pen?</span> — У тебя есть ручка?</li>
<li><span class="say">Our office hasn't got a kitchen.</span> — В нашем офисе нет кухни.</li>
</ul>
<div class="g-bad">Do you have got a pen?</div>
<div class="g-good">Have you got a pen? <span class="muted">или</span> Do you have a pen?</div>
<div class="g-tip">Не смешивайте два способа. <b>have got</b> — сам себе помощник, do ему не нужен. А <b>she's got</b> — это she <b>has</b> got, а не she is.</div>
<div class="g-tip"><b>Где есть?</b> → there is. <b>У кого есть?</b> → have got. <span class="say">There is a cat in the room.</span> — В комнате кот. <span class="say">I've got a cat.</span> — У меня кот.</div>
<div class="mini" data-q="___ you got a car?" data-o="Do|Have|Are" data-a="1" data-why="С have got вопрос начинается с Have, без do."></div>
<div class="mini" data-q="Kate ___ got a new flat." data-o="have|has|is" data-a="1" data-why="Kate = she → has got."></div>`
    },
    {
      title: '4. some и any — «немного, какие-то»',
      html: `
<div class="g-idea"><b>some</b> и <b>any</b> значат «немного, несколько, какие-то». Часто по-русски их вообще не переводят. Какое слово ставить — зависит от типа предложения.</div>
<table>
<tr><th>Предложение</th><th>Слово</th><th>Пример</th></tr>
<tr><td>+ утверждение</td><td><b class="g-v">some</b></td><td><span class="say">There is some milk.</span></td></tr>
<tr><td>− отрицание</td><td><b class="g-v">any</b></td><td><span class="say">There isn't any bread.</span></td></tr>
<tr><td>? вопрос</td><td><b class="g-v">any</b></td><td><span class="say">Have you got any water?</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I've got some apples.</span> — У меня есть яблоки.</li>
<li><span class="say">We haven't got any eggs.</span> — У нас нет яиц.</li>
<li><span class="say">Are there any shops near here?</span> — Тут рядом есть магазины?</li>
</ul>
<p>some / any ставим перед <b>множественным числом</b> (eggs, shops) и перед тем, что <b>нельзя посчитать</b>: milk, water, bread, cheese.</p>
<div class="g-steps"><div class="g-h">Неисчисляемое (молоко, вода, хлеб, сыр)</div><ol>
<li>Без <b>a</b>: не a milk, а <b>some milk</b>.</li>
<li>Без <b>-s</b>: не breads, а <b>bread</b>.</li>
<li>С <b>there is</b>, не there are: <span class="say">There is some cheese.</span></li>
</ol></div>
<div class="g-bad">There are some breads.</div>
<div class="g-good">There is some bread.</div>
<div class="g-tip"><b>any</b> любит «сомнение и нет»: вопрос и отрицание. <b>some</b> — когда точно «да, есть».</div>
<div class="mini" data-q="There isn't ___ cheese." data-o="some|any|a" data-a="1" data-why="Отрицание → any."></div>
<div class="mini" data-q="There ___ some water on the table." data-o="is|are|have" data-a="0" data-why="Вода неисчисляемая → there is."></div>`
    },
    {
      title: '5. Где? near, next to, opposite',
      html: `
<p>В конце предложения с there is часто стоит <b>где</b>. Три полезных слова:</p>
<table>
<tr><th>Слово</th><th>Значит</th><th>Пример</th></tr>
<tr><td><b>near</b></td><td>рядом, недалеко</td><td><span class="say">I live near the park.</span></td></tr>
<tr><td><b>next to</b></td><td>вплотную, возле</td><td><span class="say">The bank is next to the café.</span></td></tr>
<tr><td><b>opposite</b></td><td>напротив</td><td><span class="say">The shop is opposite the station.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">There's a nice café opposite my office.</span> — Напротив моего офиса хорошее кафе.</li>
<li><span class="say">Is there a supermarket near here?</span> — Тут рядом есть супермаркет?</li>
</ul>
<div class="g-bad">The bank is next the café.</div>
<div class="g-good">The bank is next <b>to</b> the café.</div>
<div class="g-tip"><b>next to</b> — всегда вдвоём, как «рядом <i>с</i>». А <b>near</b> и <b>opposite</b> — без to.</div>
<div class="mini" data-q="Магазин напротив вокзала: The shop is ___ the station." data-o="next|opposite|near to" data-a="1" data-why="Напротив = opposite, без to."></div>`
    },
    {
      title: '6. Типичные ошибки — проверьте себя',
      html: `
<div class="g-mistakes">
<div class="g-bad">In my room is a big bed.</div><div class="g-good"><b>There is</b> a big bed in my room.</div>
<div class="g-bad">There is two eggs.</div><div class="g-good">There <b>are</b> two eggs.</div>
<div class="g-bad">Do you have got a laptop?</div><div class="g-good"><b>Have</b> you got a laptop?</div>
<div class="g-bad">She have got a dog.</div><div class="g-good">She <b>has</b> got a dog.</div>
<div class="g-bad">There isn't some milk.</div><div class="g-good">There isn't <b>any</b> milk.</div>
<div class="g-bad">There are some breads.</div><div class="g-good">There <b>is</b> some <b>bread</b>.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>где</b> есть → <b>there is / are</b> · <b>у кого</b> есть → <b>have / has got</b> · «да» → <b>some</b>, «нет» и «?» → <b>any</b>.</div>`
    }
  ];
})();

(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-7');
  if (!u) return;
  u.grammar = [
    {
      title: '1. Главная идея: can — «умею» и «могу»',
      html: `
<div class="g-idea">По-русски есть два слова: <b>«умею»</b> (навык) и <b>«могу»</b> (есть возможность). В английском оба — одно короткое <b>can</b>. После него идёт глагол <b>как в словаре</b>: без to и без -s.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я умею плавать.</p><p>Она умеет рисовать.</p><p>Я могу прийти в пять.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I <b>can</b> swim.</span></p><p><span class="say">She <b>can</b> draw.</span></p><p><span class="say">I <b>can</b> come at five.</span></p></div>
</div>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">can</span><span class="g-plus">+</span><span class="g-part">глагол</span></div>
<p>Форма одна для всех: I can, he can, they can. Никаких <b>cans</b> и никаких do / does.</p>
<ul class="g-list">
<li><span class="say">He can play the guitar.</span> — Он умеет играть на гитаре.</li>
<li><span class="say">We can play chess on Friday.</span> — Мы можем поиграть в шахматы в пятницу.</li>
<li><span class="say">My designer can draw very fast.</span> — Мой дизайнер умеет очень быстро рисовать.</li>
</ul>
<div class="g-bad">She can plays tennis. · I can to swim.</div>
<div class="g-good">She can play tennis. · I can swim.</div>
<div class="g-tip">can — «сильное» слово: оно всё делает само. Глагол после него отдыхает — голый, без to и без -s.</div>
<div class="mini" data-q="He ___ the guitar." data-o="can plays|can play|cans play" data-a="1" data-why="После can глагол как в словаре: can play."></div>`
    },
    {
      title: '2. can’t и вопрос Can…?',
      html: `
<table>
<tr><th></th><th>Пример</th><th>Перевод</th></tr>
<tr><td>+</td><td><span class="say">I can drive.</span></td><td>Я умею водить.</td></tr>
<tr><td>−</td><td><span class="say">I can't drive.</span></td><td>Я не умею водить.</td></tr>
<tr><td>?</td><td><span class="say">Can you drive?</span></td><td>Ты умеешь водить?</td></tr>
</table>
<p><b>can't</b> = <b>cannot</b> (в полной форме пишется слитно).</p>
<div class="g-steps"><div class="g-h">Как построить вопрос</div><ol>
<li>Утверждение: <span class="say">He can cook.</span></li>
<li>Переносим <b>can</b> в начало: <span class="say">Can he cook?</span></li>
<li>Ответ коротко: <span class="say">Yes, he can.</span> / <span class="say">No, he can't.</span></li>
</ol></div>
<p>С вопросительным словом: <span class="say">What can you do?</span> — Что ты умеешь? <span class="say">Where can I buy it?</span> — Где я могу это купить?</p>
<p>Насколько хорошо — в конце: <span class="say">I can swim very well.</span> · <span class="say">I can cook a bit.</span> (немного) · <span class="say">I can't dance at all.</span> (совсем не)</p>
<div class="g-bad">Do you can swim? — No, I don't.</div>
<div class="g-good">Can you swim? — No, I can't.</div>
<div class="mini" data-q="Can he cook? — No, he ___." data-o="doesn't|can't|isn't" data-a="1" data-why="Вопрос с can → и ответ с can: No, he can't."></div>`
    },
    {
      title: '3. Просьбы и разрешение: Can you…? Can I…?',
      html: `
<div class="g-idea">С <b>can</b> удобно вежливо просить. <b>Can you…?</b> — просим другого что-то сделать. <b>Can I…?</b> — просим разрешения для себя.</div>
<table>
<tr><th>Фраза</th><th>Значит</th><th>Пример</th></tr>
<tr><td><b>Can you…?</b></td><td>Можешь…?</td><td><span class="say">Can you help me?</span></td></tr>
<tr><td><b>Can I…?</b></td><td>Можно мне…?</td><td><span class="say">Can I see your screen?</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Can you repeat, please?</span> — Можете повторить, пожалуйста?</li>
<li><span class="say">Can I have a coffee, please?</span> — Можно мне кофе?</li>
<li><span class="say">Can you send me the file?</span> — Можешь прислать мне файл?</li>
</ul>
<p>Ответы: <span class="say">Sure!</span> / <span class="say">Of course.</span> / <span class="say">Sorry, I can't.</span></p>
<div class="g-tip">Русское «Можно…?» без слова «мне» по-английски всегда <b>Can I…?</b> — «я» нужно назвать.</div>
<div class="mini" data-q="Можно мне поиграть?" data-o="Can you play?|Can I play?|Can play?" data-a="1" data-why="Просим разрешения для себя → Can I…?"></div>`
    },
    {
      title: '4. me, him, her… — «меня, ему, с ней»',
      html: `
<div class="g-idea">Когда человек не делает действие, а <b>получает</b> его (кого? кому? с кем?), местоимение меняет форму. По-русски форм много (меня, мне, мной), а по-английски — <b>одна</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Помоги <b>мне</b>. Я знаю <b>его</b>. Поиграй с <b>нами</b>.</p></div>
  <div><div class="g-h">English</div><p><span class="say">Help <b>me</b>.</span> <span class="say">I know <b>him</b>.</span> <span class="say">Play with <b>us</b>.</span></p></div>
</div>
<table>
<tr><th>Кто делает</th><th>Кого / кому</th><th>Пример</th></tr>
<tr><td>I</td><td><b class="g-v">me</b></td><td><span class="say">Can you teach me?</span></td></tr>
<tr><td>you</td><td><b class="g-v">you</b></td><td><span class="say">I can see you.</span></td></tr>
<tr><td>he</td><td><b class="g-v">him</b></td><td><span class="say">Talk to him.</span></td></tr>
<tr><td>she</td><td><b class="g-v">her</b></td><td><span class="say">Call her.</span></td></tr>
<tr><td>it</td><td><b class="g-v">it</b></td><td><span class="say">I like it.</span></td></tr>
<tr><td>we</td><td><b class="g-v">us</b></td><td><span class="say">Help us!</span></td></tr>
<tr><td>they</td><td><b class="g-v">them</b></td><td><span class="say">I can't find them.</span></td></tr>
</table>
<div class="g-steps"><div class="g-h">Какую форму выбрать</div><ol>
<li>Слово стоит <b>перед</b> глаголом (делает действие)? → I, he, she, we, they.</li>
<li>Стоит <b>после</b> глагола или после with, to, for? → me, him, her, us, them.</li>
</ol></div>
<div class="g-bad">Tom is my friend. I play with he.</div>
<div class="g-good">Tom is my friend. I play with <b>him</b>.</div>
<div class="g-tip">Про вещи (ключи, файлы, игры) во множественном числе — тоже <b>them</b>: <span class="say">Where are my keys? I can't find them.</span></div>
<div class="mini" data-q="Can you help ___?" data-o="I|me|my" data-a="1" data-why="После глагола (кому помочь?) → me."></div>
<div class="mini" data-q="We are here! Can you see ___?" data-o="we|our|us" data-a="2" data-why="Кого видеть? нас → us."></div>`
    },
    {
      title: '5. my, his, their… — «чей?»',
      html: `
<div class="g-idea">Чтобы сказать <b>чей</b> предмет, ставим перед ним притяжательное слово. Оно зависит от <b>хозяина</b>, а не от предмета.</div>
<table>
<tr><th>Кто</th><th>Чей</th><th>Пример</th></tr>
<tr><td>I</td><td><b class="g-v">my</b></td><td><span class="say">my hobby</span></td></tr>
<tr><td>you</td><td><b class="g-v">your</b></td><td><span class="say">your team</span></td></tr>
<tr><td>he</td><td><b class="g-v">his</b></td><td><span class="say">his guitar</span></td></tr>
<tr><td>she</td><td><b class="g-v">her</b></td><td><span class="say">her bike</span></td></tr>
<tr><td>it</td><td><b class="g-v">its</b></td><td><span class="say">its name</span></td></tr>
<tr><td>we</td><td><b class="g-v">our</b></td><td><span class="say">our game</span></td></tr>
<tr><td>they</td><td><b class="g-v">their</b></td><td><span class="say">their house</span></td></tr>
</table>
<p>Слова <b>«свой»</b> в английском нет. Смотрим, кто хозяин:</p>
<ul class="g-list">
<li><span class="say">He loves his dog.</span> — Он любит свою собаку.</li>
<li><span class="say">She loves her dog.</span> — Она любит свою собаку.</li>
<li><span class="say">They love their house.</span> — Они любят свой дом.</li>
</ul>
<div class="g-bad">Anna loves his cat. <span class="muted">— про кошку Анны</span></div>
<div class="g-good">Anna loves <b>her</b> cat.</div>
<div class="g-tip"><b>her</b> работает дважды: «её» (кого?) и «её» (чей?). <span class="say">I like her.</span> — Она мне нравится. <span class="say">I like her game.</span> — Мне нравится её игра.</div>
<div class="g-tip"><b>its</b> (чей) — без апострофа. <b>it's</b> = it is. <span class="say">It's a good game. I like its music.</span></div>
<div class="mini" data-q="Они любят свою команду: They love ___ team." data-o="our|their|them" data-a="1" data-why="Хозяин — they → their."></div>
<div class="mini" data-q="Max has a bike. ___ bike is blue." data-o="His|Her|Him" data-a="0" data-why="Хозяин — Max (he) → his."></div>`
    },
    {
      title: '6. Типичные ошибки — проверьте себя',
      html: `
<div class="g-mistakes">
<div class="g-bad">He cans draw.</div><div class="g-good">He <b>can</b> draw.</div>
<div class="g-bad">I can to swim.</div><div class="g-good">I can <b>swim</b>.</div>
<div class="g-bad">She can plays chess.</div><div class="g-good">She can <b>play</b> chess.</div>
<div class="g-bad">Do you can cook?</div><div class="g-good"><b>Can you</b> cook?</div>
<div class="g-bad">Help I, please!</div><div class="g-good">Help <b>me</b>, please!</div>
<div class="g-bad">She loves his cat. <span class="muted">— свою</span></div><div class="g-good">She loves <b>her</b> cat.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>can</b> + голый глагол для всех · кто делает — <b>I / he / she</b>, кого — <b>me / him / her</b>, чей — <b>my / his / her</b>.</div>`
    }
  ];
})();
