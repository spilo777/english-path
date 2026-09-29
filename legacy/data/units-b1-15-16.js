// Юниты B1 15–16: глагол + -ing / to глубже (avoid doing, manage to, seem to have done, what to do, persuade you to); remember/try/need/like/prefer/would rather — -ing или to
COURSE.units.push(
  // ───────────────────────────── UNIT B1-15 ─────────────────────────────
  {
    id: 'b1-15', level: 'B1', num: 15, track: 'main',
    books: { blue: [53, 54, 55] },
    title: 'Enjoy doing, decide to, want you to',
    summary: 'Расширим кучки «глагол + -ing» и «глагол + to» (avoid, deny, keep, manage, afford, tend), научимся говорить I seem to have lost it, I don’t know what to do, I can’t imagine him saying that и уговаривать, предупреждать и разрешать: persuade you to, warn me not to, be allowed to.',
    grammar: [
      {
        title: '1. Главная идея: первый глагол решает, в какой форме второй',
        html: `
<div class="g-idea">Что вы уже знаете (урок A2-16): <b>enjoy / finish / mind + -ing</b>, <b>want / decide / hope + to</b>, <b>I want you to…</b>. На B1 кучки становятся больше, а конструкции — хитрее: «кажется, я потерял», «не знаю, что сказать», «не помню, чтобы он такое говорил», «меня предупредили не трогать».</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я стараюсь <b>не</b> созваниваться по утрам.</p><p>Он отрицал, что взял мои наушники.</p><p>Кажется, я потерял ключи.</p><p>Не знаю, что сказать.</p><p>Она уговорила меня откликнуться на вакансию.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I <b>avoid having</b> calls in the morning.</span></p><p><span class="say">He <b>denied taking</b> my headphones.</span></p><p><span class="say">I <b>seem to have lost</b> my keys.</span></p><p><span class="say">I don't know <b>what to say</b>.</span></p><p><span class="say">She <b>persuaded me to apply</b> for the job.</span></p></div>
</div>
<p>Русский часто говорит через «что…», «чтобы…» или существительное. Английский — одним коротким глаголом в форме <b>-ing</b> или <b>to</b>. Строгой логики нет, но есть подсказка:</p>
<table>
<tr><th>Форма</th><th>Часто про…</th><th>Примеры глаголов</th></tr>
<tr><td><b>-ing</b></td><td>само действие, процесс, факт</td><td>avoid, keep, admit, deny, consider</td></tr>
<tr><td><b>to</b></td><td>цель, результат, то, что впереди</td><td>decide, manage, promise, refuse, afford</td></tr>
</table>
<div class="g-tip">-ing — «держу действие в руках и смотрю на него». to — «стрелка вперёд, к действию». Это не закон, а зацепка для памяти: глаголы всё равно учим кучками.</div>
<div class="mini" data-q="Он отрицал, что взял деньги." data-o="He denied to take the money.|He denied taking the money.|He denied take the money." data-a="1" data-why="После deny второй глагол всегда с -ing."></div>`
      },
      {
        title: '2. Кучка -ing: avoid, admit, consider, keep, give up…',
        html: `
<div class="g-idea">После этих глаголов — только <b>-ing</b>. Поставить to — одна из самых заметных ошибок на B1.</div>
<table>
<tr><th>Глагол</th><th>Смысл</th><th>Пример</th></tr>
<tr><td><b>avoid</b></td><td>избегать</td><td><span class="say">I avoid shopping on Saturdays.</span></td></tr>
<tr><td><b>admit</b></td><td>признать</td><td><span class="say">He admitted using cheats.</span></td></tr>
<tr><td><b>deny</b></td><td>отрицать</td><td><span class="say">She denied reading my messages.</span></td></tr>
<tr><td><b>consider</b></td><td>обдумывать, рассматривать</td><td><span class="say">We're considering moving to Kazan.</span></td></tr>
<tr><td><b>fancy</b></td><td>хотеть (разг., брит.)</td><td><span class="say">I don't fancy going out tonight.</span></td></tr>
<tr><td><b>imagine</b></td><td>представить</td><td><span class="say">Imagine living without the internet!</span></td></tr>
<tr><td><b>risk</b></td><td>рисковать</td><td><span class="say">If you skip the tutorial, you risk losing.</span></td></tr>
<tr><td><b>recommend</b></td><td>советовать</td><td><span class="say">I recommend watching it in English.</span></td></tr>
<tr><td><b>postpone</b></td><td>откладывать</td><td><span class="say">They postponed launching the beta.</span></td></tr>
</table>
<p>Фразовые глаголы из этой же кучки — очень разговорные:</p>
<ul class="g-list">
<li><span class="say">I've given up playing ranked. It's too stressful.</span> — Я бросил играть в рейтинговые матчи. <span class="muted">(give up = бросить, перестать)</span></li>
<li><span class="say">Stop putting off calling the client.</span> — Хватит откладывать звонок клиенту. <span class="muted">(put off = откладывать на потом)</span></li>
<li><span class="say">Carry on working, I'll be quiet.</span> — Продолжай работать, я тихо. <span class="muted">(go on = carry on = продолжать)</span></li>
<li><span class="say">My laptop keeps crashing.</span> — Мой ноутбук постоянно вылетает. <span class="muted">(keep / keep on = то и дело, снова и снова)</span></li>
<li><span class="say">You keep interrupting me!</span> — Ты всё время меня перебиваешь!</li>
</ul>
<p><b>Отрицание</b> — <b>not</b> прямо перед -ing:</p>
<ul class="g-list">
<li><span class="say">On holiday I enjoy not having to check my email.</span> — В отпуске мне нравится, что не нужно проверять почту.</li>
<li><span class="say">He admitted not reading the brief.</span> — Он признал, что не прочитал бриф.</li>
</ul>
<div class="g-tip"><b>keep doing</b> — лучший перевод для русских «всё время», «постоянно», «то и дело» с оттенком раздражения: <span class="say">The game keeps freezing.</span> — Игра всё время зависает.</div>
<div class="g-bad">I'm considering to buy a new monitor. · He admitted to cheat.</div>
<div class="g-good">I'm considering <b>buying</b> a new monitor. · He admitted <b>cheating</b>.</div>
<div class="mini" data-q="The printer ___ jamming. I'll call IT." data-o="keeps|keeps to|keep on to" data-a="0" data-why="keep (on) + -ing = снова и снова."></div>
<div class="mini" data-q="We should avoid ___ during rush hour." data-o="to drive|driving|drive" data-a="1" data-why="avoid + -ing."></div>`
      },
      {
        title: '3. -ing с «чужим» исполнителем, having done и that',
        html: `
<div class="g-idea">Иногда действие делает <b>не тот</b>, кто говорит. Тогда между глаголами вставляем человека: <b>глагол + кто-то + -ing</b>. По-русски тут обычно «как…», «чтобы…».</div>
<div class="g-formula"><span class="g-part">imagine / remember / stop / keep</span><span class="g-plus">+</span><span class="g-part">him / her / people…</span><span class="g-plus">+</span><span class="g-part g-v">-ing</span></div>
<ul class="g-list">
<li><span class="say">I can't imagine Max playing a horror game.</span> — Не могу представить, как Макс играет в хоррор.</li>
<li><span class="say">I don't remember her saying that.</span> — Не помню, чтобы она такое говорила.</li>
<li><span class="say">You can't stop people leaving bad reviews.</span> — Нельзя запретить людям оставлять плохие отзывы.</li>
<li><span class="say">Sorry to keep you waiting.</span> — Извините, что заставил вас ждать.</li>
</ul>
<p><b>having + V3</b> — подчёркивает, что действие уже закончилось. Но простое -ing почти всегда тоже подходит:</p>
<ul class="g-list">
<li><span class="say">He admitted having broken the build.</span> = <span class="say">He admitted breaking the build.</span> — Он признал, что сломал сборку.</li>
<li><span class="say">I regret having said that.</span> = <span class="say">I regret saying that.</span> — Жалею, что это сказал.</li>
</ul>
<p>После <b>admit, deny, suggest, recommend</b> можно и целое предложение с <b>that</b>:</p>
<table>
<tr><th>С -ing</th><th>С that</th></tr>
<tr><td><span class="say">They denied copying our design.</span></td><td><span class="say">They denied that they had copied our design.</span></td></tr>
<tr><td><span class="say">Kate suggested ordering sushi.</span></td><td><span class="say">Kate suggested that we order sushi.</span></td></tr>
<tr><td><span class="say">I recommend taking the train.</span></td><td><span class="say">I recommend that you take the train.</span></td></tr>
</table>
<div class="g-bad">Kate suggested me to order sushi. · I recommend you to watch it.</div>
<div class="g-good">Kate suggested <b>that I order</b> sushi. · I recommend <b>watching</b> it.</div>
<div class="g-tip">suggest никогда не бывает «suggest кого-то to». Сравните с advise, который так умеет: <span class="say">She advised me to order sushi.</span></div>
<div class="mini" data-q="Не помню, чтобы он это обещал." data-o="I don't remember him promising that.|I don't remember him to promise that.|I don't remember that him promised." data-a="0" data-why="remember + кто-то + -ing."></div>`
      },
      {
        title: '4. Кучка to: manage, afford, fail, tend, deserve…',
        html: `
<div class="g-idea">После этих глаголов — <b>to + глагол</b>. К уже знакомым decide, hope, promise, refuse, offer добавляем новые.</div>
<table>
<tr><th>Глагол</th><th>Смысл</th><th>Пример</th></tr>
<tr><td><b>manage</b></td><td>суметь, справиться</td><td><span class="say">We managed to finish on time.</span></td></tr>
<tr><td><b>afford</b></td><td>позволить себе</td><td><span class="say">I can't afford to buy a new GPU.</span></td></tr>
<tr><td><b>fail</b></td><td>не суметь, провалить</td><td><span class="say">The update failed to install.</span></td></tr>
<tr><td><b>tend</b></td><td>обычно, склонен</td><td><span class="say">I tend to work late.</span></td></tr>
<tr><td><b>deserve</b></td><td>заслуживать</td><td><span class="say">You deserve to win.</span></td></tr>
<tr><td><b>agree</b></td><td>согласиться</td><td><span class="say">He agreed to help us.</span></td></tr>
<tr><td><b>arrange</b></td><td>договориться</td><td><span class="say">We've arranged to meet at six.</span></td></tr>
<tr><td><b>threaten</b></td><td>угрожать</td><td><span class="say">She threatened to leave the team.</span></td></tr>
<tr><td><b>learn</b></td><td>научиться</td><td><span class="say">I learnt to draw at 30.</span></td></tr>
</table>
<p><b>Отрицание</b> — <b>not to</b>: <span class="say">We decided not to go.</span> <span class="say">I promised not to tell anyone.</span></p>
<p><b>tend to</b> — очень английская фраза. Так смягчают «всегда»: <span class="say">He tends to talk too much in meetings.</span> — Он обычно слишком много говорит на созвонах.</p>
<p><b>dare</b> (осмелиться) — с to или без: <span class="say">I didn't dare (to) ask her.</span> Но после <b>daren't</b> — только без to: <span class="say">I daren't tell my boss.</span></p>
<p>А вот «думаю купить» — не to, а <b>of + -ing</b>: <span class="say">I'm thinking of buying a Switch.</span></p>
<div class="g-bad">I'm thinking to buy a Switch. · I can't afford buying it. · I managed finishing it.</div>
<div class="g-good">I'm thinking <b>of buying</b> a Switch. · I can't afford <b>to buy</b> it. · I managed <b>to finish</b> it.</div>
<div class="g-tip"><b>managed to</b> — это «смог» про <b>один</b> успех в трудной ситуации (урок B1-8): не <i>I could open the file</i>, а <span class="say">I managed to open the file.</span></div>
<div class="mini" data-q="The phone was dead, but I ___ call a taxi." data-o="managed to|managed|could to" data-a="0" data-why="«Удалось» в трудной ситуации → managed to + глагол."></div>
<div class="mini" data-q="I ___ fall asleep during long films." data-o="tend to|tend|tend of" data-a="0" data-why="tend + to + глагол = «обычно, у меня бывает»."></div>`
      },
      {
        title: '5. seem, appear, pretend, claim — to be doing, to have done',
        html: `
<div class="g-idea">После <b>seem / appear</b> (казаться), <b>pretend</b> (притворяться) и <b>claim</b> (утверждать) — тоже <b>to</b>. Но здесь to бывает трёх видов — по времени.</div>
<table>
<tr><th>Форма</th><th>Когда</th><th>Пример</th></tr>
<tr><td><b>to do</b></td><td>вообще, обычно</td><td><span class="say">He seems to know everyone.</span></td></tr>
<tr><td><b>to be doing</b></td><td>прямо сейчас, в процессе</td><td><span class="say">She pretended to be working.</span></td></tr>
<tr><td><b>to have done</b></td><td>уже случилось, раньше</td><td><span class="say">I seem to have lost my keys.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">The server appears to be down.</span> — Похоже, сервер лежит.</li>
<li><span class="say">You seem to have a lot of friends.</span> — Похоже, у тебя много друзей.</li>
<li><span class="say">They claim to have fixed all the bugs.</span> — Они утверждают, что исправили все баги.</li>
<li><span class="say">He pretended not to see me.</span> — Он сделал вид, что не видит меня.</li>
<li><span class="say">She claimed not to have received my email.</span> — Она утверждала, что не получала моё письмо.</li>
</ul>
<div class="g-steps"><div class="g-h">Из «кажется, что…» — в seem to</div><ol>
<li>Русская мысль: «Кажется, я удалил файл» (уже случилось).</li>
<li>Главный — я: <b>I seem</b>.</li>
<li>Действие раньше → <b>to have + V3</b>: <span class="say">I seem to have deleted the file.</span></li>
</ol></div>
<div class="g-tip">«Кажется, я…» в разговоре — часто <b>I seem to…</b>, но никогда не <i>It seems me…</i>. Ещё вариант: <span class="say">It seems that I've deleted the file.</span></div>
<div class="g-bad">It seems me that he is angry. · He pretended that he is sleeping.</div>
<div class="g-good">He <b>seems to be</b> angry. · He <b>pretended to be sleeping</b>.</div>
<div class="mini" data-q="Where's my charger? I ___ it at the office." data-o="seem to leave|seem to have left|seem leaving" data-a="1" data-why="Оставил раньше, а кажется сейчас → to have + V3."></div>
<div class="mini" data-q="Look at him! He's pretending ___ asleep." data-o="being|to be|be" data-a="1" data-why="pretend + to; про состояние сейчас → to be."></div>`
      },
      {
        title: '6. what to do, how to get — «что делать», «как добраться»',
        html: `
<div class="g-idea">После <b>know, decide, remember, forget, learn, explain, understand, wonder, ask</b> можно поставить вопросительное слово + <b>to</b>. Это русские «что делать», «куда идти», «как быть».</div>
<div class="g-formula"><span class="g-part">know / decide / forget…</span><span class="g-plus">+</span><span class="g-part g-v">what / how / where / which / whether</span><span class="g-plus">+</span><span class="g-part">to + глагол</span></div>
<ul class="g-list">
<li><span class="say">I don't know what to say.</span> — Не знаю, что сказать.</li>
<li><span class="say">Have you decided where to go on holiday?</span> — Решил, куда поехать в отпуск?</li>
<li><span class="say">I can never remember how to take a screenshot on a Mac.</span> — Никак не запомню, как делать скриншот на маке.</li>
<li><span class="say">I'm wondering whether to apply or not.</span> — Думаю, откликаться или нет. <span class="muted">(whether = «ли»)</span></li>
<li><span class="say">We couldn't decide which game to buy.</span> — Не могли решить, какую игру купить.</li>
</ul>
<p>С человеком — <b>show / tell / ask / teach / advise</b> + кого-то + what / how to:</p>
<ul class="g-list">
<li><span class="say">Can you show me how to export this?</span> — Покажешь, как это экспортировать?</li>
<li><span class="say">Ask Lena. She'll tell you what to do.</span> — Спроси Лену. Она скажет, что делать.</li>
</ul>
<div class="g-bad">I don't know what I must say. · I don't know how do it. · I don't know why to go.</div>
<div class="g-good">I don't know <b>what to say</b>. · I don't know <b>how to do</b> it. · I don't know <b>why I should</b> go.</div>
<div class="g-tip">С <b>why</b> такая форма не работает: только <i>why I should…</i>. А <b>whether</b> любит компанию <b>or not</b>.</div>
<div class="mini" data-q="Не знаю, куда поставить этот стол." data-o="I don't know where to put this table.|I don't know where put this table.|I don't know where putting this table." data-a="0" data-why="know + where + to + глагол."></div>`
      },
      {
        title: '7. persuade you to, warn me not to, be allowed to; make и let',
        html: `
<div class="g-idea">Вы знаете <b>want / ask / tell / advise + кто-то + to</b>. Теперь добавим глаголы, которыми мы уговариваем, заставляем, разрешаем и предупреждаем. Схема та же: <b>глагол + кто-то + to + глагол</b>.</div>
<table>
<tr><th>Глагол</th><th>Смысл</th><th>Пример</th></tr>
<tr><td><b>remind</b></td><td>напомнить</td><td><span class="say">Remind me to call Sam.</span></td></tr>
<tr><td><b>warn</b></td><td>предупредить</td><td><span class="say">He warned us not to open the file.</span></td></tr>
<tr><td><b>invite</b></td><td>пригласить</td><td><span class="say">They invited me to join the jam.</span></td></tr>
<tr><td><b>encourage</b></td><td>поощрять, вдохновлять</td><td><span class="say">My mentor encouraged me to share my work.</span></td></tr>
<tr><td><b>persuade</b></td><td>уговорить</td><td><span class="say">I persuaded Anna to try the game.</span></td></tr>
<tr><td><b>get</b></td><td>добиться, чтобы</td><td><span class="say">I got my brother to fix my PC.</span></td></tr>
<tr><td><b>force</b></td><td>заставить (силой)</td><td><span class="say">The bug forced us to delay the release.</span></td></tr>
<tr><td><b>allow</b></td><td>разрешать</td><td><span class="say">The app allows you to share files.</span></td></tr>
<tr><td><b>enable</b></td><td>давать возможность</td><td><span class="say">This plugin enables us to work faster.</span></td></tr>
<tr><td><b>expect</b></td><td>ожидать</td><td><span class="say">I didn't expect him to agree.</span></td></tr>
</table>
<p><b>would prefer</b> тоже так умеет: <span class="say">I'd prefer you to call, not text.</span> А <b>help</b> — с to или без: <span class="say">Can you help me (to) move the sofa?</span></p>
<p><b>В пассиве</b> человек выходит вперёд, <b>to</b> остаётся:</p>
<ul class="g-list">
<li><span class="say">I was warned not to click the link.</span> — Меня предупредили не нажимать на ссылку.</li>
<li><span class="say">Are we allowed to park here?</span> — Здесь можно парковаться?</li>
<li><span class="say">We were asked to wait outside.</span> — Нас попросили подождать снаружи.</li>
</ul>
<p><b>make</b> (заставить) и <b>let</b> (позволить) — <b>без to</b>. Но в пассиве у make появляется to, а let в пассиве заменяем на be allowed to:</p>
<table>
<tr><th>Актив</th><th>Пассив</th></tr>
<tr><td><span class="say">They made us wait for an hour.</span></td><td><span class="say">We were made to wait for an hour.</span></td></tr>
<tr><td><span class="say">My parents didn't let me play at night.</span></td><td><span class="say">I wasn't allowed to play at night.</span></td></tr>
</table>
<div class="g-bad">I want that you help me. · She made me to redo it. · I was let to leave early.</div>
<div class="g-good">I want <b>you to help</b> me. · She made me <b>redo</b> it. · I <b>was allowed to</b> leave early.</div>
<div class="mini" data-q="The teacher ___ us to use phones in class." data-o="doesn't let|doesn't allow|doesn't make" data-a="1" data-why="allow + кто-то + to; после let и make to не ставится."></div>
<div class="mini" data-q="We were made ___ the whole level again." data-o="replay|to replay|replaying" data-a="1" data-why="make без to, но в пассиве be made + to."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I'm considering to change jobs.</div><div class="g-good">I'm considering <b>changing</b> jobs.</div>
<div class="g-bad">He denied to break it.</div><div class="g-good">He denied <b>breaking</b> it.</div>
<div class="g-bad">My laptop keeps to restart.</div><div class="g-good">My laptop keeps <b>restarting</b>.</div>
<div class="g-bad">I can't afford buying it.</div><div class="g-good">I can't afford <b>to buy</b> it.</div>
<div class="g-bad">I'm thinking to move.</div><div class="g-good">I'm thinking <b>of moving</b>.</div>
<div class="g-bad">It seems me I lost my keys.</div><div class="g-good">I <b>seem to have lost</b> my keys.</div>
<div class="g-bad">I don't know what I must do.</div><div class="g-good">I don't know <b>what to do</b>.</div>
<div class="g-bad">She suggested me to try it.</div><div class="g-good">She suggested <b>that I try</b> it. / She <b>advised me to</b> try it.</div>
<div class="g-bad">They let us to leave early.</div><div class="g-good">They let us <b>leave</b> early. / We <b>were allowed to</b> leave early.</div>
<div class="g-bad">We were made wait.</div><div class="g-good">We were made <b>to wait</b>.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>avoid / deny / keep / consider + <b>-ing</b> · manage / afford / tend + <b>to</b> · seem <b>to have done</b> · know <b>what to do</b> · persuade / warn / allow <b>someone to</b> · make / let <b>someone do</b>.</div>`
      }
    ],
    words: [
      ["avoid", "избегать", "I try to avoid working at weekends.", "Я стараюсь не работать по выходным."],
      ["admit", "признавать", "He finally admitted making a mistake.", "Он наконец признал, что ошибся."],
      ["deny", "отрицать", "She denied deleting the file.", "Она отрицала, что удалила файл."],
      ["consider", "обдумывать, рассматривать", "Have you ever considered moving abroad?", "Ты когда-нибудь думал о переезде за границу?"],
      ["fancy", "хотеть (разг.)", "Do you fancy going for a pizza?", "Хочешь сходить за пиццей?"],
      ["imagine", "представлять", "I can't imagine working without two monitors.", "Не представляю, как работать без двух мониторов."],
      ["risk", "рисковать; риск", "Save now, or you risk losing everything.", "Сохранись сейчас, иначе рискуешь всё потерять."],
      ["interrupt", "перебивать, прерывать", "Please stop interrupting me.", "Пожалуйста, перестань меня перебивать."],
      ["postpone", "откладывать, переносить", "They postponed launching the new version.", "Они отложили запуск новой версии."],
      ["give up", "бросить, перестать", "I gave up drinking energy drinks.", "Я бросил пить энергетики."],
      ["put off", "откладывать на потом", "Don't put off answering the client.", "Не откладывай ответ клиенту."],
      ["carry on", "продолжать", "Carry on playing, I'll wait.", "Продолжай играть, я подожду."],
      ["keep (on)", "продолжать; то и дело", "The game keeps crashing.", "Игра всё время вылетает."],
      ["manage", "суметь, справиться", "We managed to beat the boss on the last try.", "Мы смогли победить босса с последней попытки."],
      ["afford", "позволить себе (по деньгам, по времени)", "We can't afford to miss the deadline.", "Мы не можем позволить себе сорвать дедлайн."],
      ["fail", "не суметь; провалить", "The file failed to upload.", "Файл не загрузился."],
      ["tend", "быть склонным, обычно", "I tend to buy games on sale.", "Я обычно покупаю игры на распродаже."],
      ["deserve", "заслуживать", "You really deserve to rest.", "Ты правда заслужил отдых."],
      ["threaten", "угрожать", "He threatened to quit the project.", "Он пригрозил уйти из проекта."],
      ["arrange", "договориться, организовать", "We've arranged to meet after work.", "Мы договорились встретиться после работы."],
      ["pretend", "притворяться, делать вид", "She pretended not to hear me.", "Она сделала вид, что не слышит меня."],
      ["claim", "утверждать; заявка, претензия", "He claims to have finished the game in two hours.", "Он утверждает, что прошёл игру за два часа."],
      ["seem", "казаться", "You seem to be tired today.", "Ты сегодня какой-то уставший."],
      ["appear", "казаться; появляться", "The server appears to be down.", "Похоже, сервер лежит."],
      ["dare", "осмеливаться, сметь", "Nobody dared to say a word.", "Никто не посмел сказать ни слова."],
      ["remind", "напоминать", "Remind me to buy some milk.", "Напомни мне купить молока."],
      ["warn", "предупреждать", "They warned us not to go there at night.", "Нас предупредили не ходить туда ночью."],
      ["encourage", "поощрять, вдохновлять", "My friends encouraged me to start a blog.", "Друзья вдохновили меня завести блог."],
      ["force", "заставлять (силой); сила", "The storm forced us to stay inside.", "Буря заставила нас остаться дома."],
      ["allow", "разрешать, позволять", "We aren't allowed to use our phones here.", "Здесь нельзя пользоваться телефонами."],
      ["enable", "давать возможность", "This tool enables you to test ideas quickly.", "Этот инструмент позволяет быстро проверять идеи."],
      ["whether", "ли (выбор из двух)", "I can't decide whether to go or not.", "Не могу решить, идти или нет."]
    ],
    texts: [
      {
        id: 't-b1-15-1', title: 'How I finally finished my first game', level: 'B1',
        text: `For three years I kept promising myself to make a small game. I'm a UI designer, so I thought I knew enough. But every time I opened the project, I found a reason to close it again. I kept putting off writing the code, and I avoided showing my sketches to anyone. Honestly, I was afraid people would laugh.

Last winter I seriously considered giving up. Then my friend Oleg, who works as a programmer, invited me to join a weekend game jam. I didn't want to go, but he managed to persuade me. "You don't need a perfect game," he said. "You need a finished one." He also warned me not to spend the whole weekend on the menu screen. He knows me too well.

The rules were strict. We weren't allowed to use old projects, and the organisers made everyone start from zero on Friday evening. We had forty-eight hours. On Saturday morning my laptop kept crashing, and at one point I seemed to have lost half of my work. I didn't dare to tell Oleg. I just pretended to be drawing icons while I tried to find the files. Luckily, they were in the backup folder.

By Sunday night we had a tiny puzzle game about a cat who refuses to leave a cardboard box. It wasn't beautiful, but it worked. When the judges asked us how we had built it so fast, I admitted copying some ideas from my old sketches. They didn't seem to mind.

We didn't win, but one judge encouraged us to keep working on it. Now I tend to spend two evenings a week on the game. I still don't always know what to do next, but I've stopped waiting for the perfect moment. I can't afford to lose another three years.`,
        questions: [
          { q: 'Who persuaded the writer to go to the game jam?', o: ['A judge', 'Oleg', 'Her boss'], a: 1 },
          { q: 'What were the teams not allowed to do?', o: ['Use old projects', 'Work at night', 'Draw icons'], a: 0 },
          { q: 'What happened on Saturday morning?', o: ['They won a prize', 'The laptop kept crashing', 'Oleg left the jam'], a: 1 }
        ]
      },
      {
        id: 't-b1-15-2', title: 'Raid night', level: 'B1',
        text: `Nika: Guys, would you mind turning your mics on? I can't hear anyone.
Tom: Sorry, sorry. I forgot to unmute. Are we starting?
Nika: Almost. Where's Artem? We arranged to meet at nine.
Tom: He texted me. His internet keeps disconnecting, so he's thinking of playing from his phone.
Nika: From his phone? I can't imagine anyone doing a raid on a phone.
Tom: Me neither. Maybe we should postpone starting for ten minutes?
Nika: I'd prefer not to wait. Last week the admins made us wait for forty minutes because of the server, remember?
Tom: True. Okay, who's going to lead tonight? I don't really fancy doing it again.
Nika: Let me lead. But you need to remind me to check the timer. I tend to forget about it in the middle of the fight.
Tom: Deal. By the way, did you read the patch notes? They claim to have fixed the bug with the second boss.
Nika: They always claim that. I'll believe it when I see it.
Artem: Hi, hi! I'm here! I managed to fix the router. Sorry to keep you waiting.
Nika: Finally! Okay, listen. The guide warns players not to stand near the walls in phase two. And don't use the fire spell, we're not allowed to use it in this event.
Artem: Wait, I don't know how to change my skills. Can someone show me where to click?
Tom: Open the menu, then "Build". It's the third tab.
Artem: Got it. I seem to have lost my best sword, though.
Nika: Seriously? Did you sell it again?
Artem: I deny selling anything! Okay... maybe I sold it.
Tom: He admits it! Let's go before he loses his armour too.`,
        questions: [
          { q: 'Why is Artem late?', o: ['His internet was disconnecting', 'He was asleep', 'He was at work'], a: 0 },
          { q: 'Who agrees to lead the raid?', o: ['Tom', 'Artem', 'Nika'], a: 2 },
          { q: 'What happened to Artem\'s best sword?', o: ['A boss broke it', 'He sold it', 'Tom took it'], a: 1 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'I\'ve been considering ___ a course in 3D modelling.', o: ['to take', 'taking', 'take'], a: 1, why: 'consider + -ing.' },
      { t: 'choice', q: 'The printer was broken, but we ___ print the tickets at the library.', o: ['managed to', 'managed', 'could to'], a: 0, why: '«Удалось» один раз в трудной ситуации → managed to.' },
      { t: 'choice', q: 'The driver admitted ___ his phone while driving.', o: ['to use', 'using', 'use'], a: 1, why: 'admit + -ing (или having used).' },
      { t: 'choice', q: 'Is Max okay? He ___ worried about something.', o: ['seems being', 'seems to be', 'seems be'], a: 1, why: 'seem + to be для состояния сейчас.' },
      { t: 'choice', q: 'I haven\'t decided ___ to the party.', o: ['what to wear', 'what wear', 'what I wearing'], a: 0, why: 'decide + вопросительное слово + to.' },
      { t: 'choice', q: 'My parents never ___ me stay up after eleven.', o: ['allowed', 'let', 'made'], a: 1, why: 'let + кто-то + глагол без to; allow требовал бы to stay.' },
      { t: 'choice', q: 'Anna suggested ___ the meeting to Friday.', o: ['to move', 'us to move', 'moving'], a: 2, why: 'suggest + -ing; «suggest кого-то to» не бывает.' },
      { t: 'choice', q: 'I can\'t imagine ___ a horror game alone at night.', o: ['my sister playing', 'my sister to play', 'that my sister play'], a: 0, why: 'imagine + кто-то + -ing.' },
      { t: 'gap', q: 'I\'m not sure. I\'m thinking ___ a new laptop. (of / buy)', a: ['of buying'], why: 'think of + -ing = «подумываю».' },
      { t: 'gap', q: 'Please stop ___ me. Let me finish! (interrupt)', a: ['interrupting'], why: 'stop + -ing = перестать делать.' },
      { t: 'gap', q: 'I promised ___ anyone about the surprise. (not / tell)', a: ['not to tell'], why: 'promise + not to + глагол.' },
      { t: 'gap', q: 'I can\'t find my wallet. I seem ___ it in the taxi. (leave)', a: ['to have left'], why: 'Оставил раньше → seem to have + V3.' },
      { t: 'gap', q: 'We ___ to wait two hours at the airport. (make)', a: ['were made'], why: 'Пассив от make: be made + to.' },
      { t: 'gap', q: 'Can you remind me ___ the heating off? (turn)', a: ['to turn'], why: 'remind + кто-то + to + глагол.' },
      { t: 'order', a: 'I don\'t know how to fix this', ru: 'Я не знаю, как это исправить.' },
      { t: 'order', a: 'She persuaded me to try again', ru: 'Она уговорила меня попробовать ещё раз.' },
      { t: 'tr', q: 'Мой телефон постоянно выключается.', a: ['my phone keeps turning off', 'my phone keeps switching off', 'my phone keeps on turning off', 'my phone keeps on switching off', 'my phone keeps shutting down', 'my phone keeps dying'] },
      { t: 'tr', q: 'Нам не разрешают здесь фотографировать.', a: ['we aren\'t allowed to take photos here', 'we are not allowed to take photos here', 'we\'re not allowed to take photos here', 'we aren\'t allowed to take pictures here', 'we are not allowed to take pictures here', 'we\'re not allowed to take pictures here', 'they don\'t allow us to take photos here', 'they do not allow us to take photos here', 'they don\'t let us take photos here', 'they don\'t allow us to take pictures here', 'they don\'t let us take pictures here'] },
      { t: 'listen', say: 'Sorry to keep you waiting', a: ['sorry to keep you waiting'] }
    ],
    test: [
      { t: 'choice', q: 'If you don\'t back up your files, you risk ___ them.', o: ['to lose', 'losing', 'lose'], a: 1, why: 'risk + -ing.' },
      { t: 'choice', q: 'The old version ___ to open the file, so I updated it.', o: ['failed', 'failed on', 'avoided'], a: 0, why: 'fail + to = не смог; avoid потребовал бы -ing.' },
      { t: 'gap', q: 'They claim ___ the problem, but it still doesn\'t work. (solve)', a: ['to have solved'], why: 'Решили раньше → claim to have + V3.' },
      { t: 'choice', q: 'I didn\'t expect ___ so many people at the meetup.', o: ['there to be', 'that there are', 'there being'], a: 0, why: 'expect + кто/что + to be; there тоже может стоять на месте «кто-то».' },
      { t: 'gap', q: 'I\'m wondering ___ to stay or go home. (whether)', a: ['whether'], why: 'whether + to = «ли» при выборе из двух.' },
      { t: 'choice', q: 'Can you show me ___ the colour of this layer?', o: ['how change', 'how to change', 'how changing'], a: 1, why: 'show + кого-то + how to + глагол.' },
      { t: 'gap', q: 'On holiday I love ___ to set an alarm. (not / have)', a: ['not having'], why: 'Отрицание -ing: not + having.' },
      { t: 'choice', q: 'Kate ___ me to watch the series in English.', o: ['suggested', 'encouraged', 'made'], a: 1, why: 'encourage + кто-то + to; suggest так не умеет, make — без to.' },
      { t: 'gap', q: 'Visitors ___ to feed the animals. (not / allow)', a: ['aren\'t allowed', 'are not allowed'], why: 'Пассив: be allowed to; let в пассиве не используется.' },
      { t: 'choice', q: 'She pretended ___ my message, but I know she saw it.', o: ['not to have read', 'to not having read', 'not reading'], a: 0, why: 'pretend + not to; прочитала раньше → to have + V3.' },
      { t: 'gap', q: 'I can\'t afford ___ another deadline. (miss)', a: ['to miss'], why: 'afford + to + глагол.' },
      { t: 'choice', q: 'The boss ___ that we work from home on Fridays.', o: ['suggested', 'wanted', 'told'], a: 0, why: 'suggest + that + предложение; want и tell так не строятся.' }
    ]
  },
  // ───────────────────────────── UNIT B1-16 ─────────────────────────────
  {
    id: 'b1-16', level: 'B1', num: 16, track: 'main',
    books: { blue: [56, 57, 58, 59] },
    title: 'Remember, try, need, like, prefer, would rather — -ing или to',
    summary: 'Разберём глаголы, у которых смысл меняется от -ing или to (remember, forget, regret, stop, go on, try, need), научимся говорить My phone needs charging и I can’t help laughing, тонко выбирать между like doing и like to do и вежливо выражать предпочтения: I’d prefer to…, I’d rather…, I’d rather you didn’t.',
    grammar: [
      {
        title: '1. Главная идея: -ing смотрит назад, to — вперёд',
        html: `
<div class="g-idea">Что вы уже знаете (урок A2-16 и B1-15): после одних глаголов -ing, после других to, а после like, love, start можно и так и так. Теперь самое интересное — глаголы, у которых <b>смысл меняется</b> от формы: remember, forget, regret, stop, go on, try, need.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я помню, как запирал дверь.</p><p>Не забудь запереть дверь.</p><p>Он бросил курить.</p><p>Он остановился, чтобы закурить.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I remember <b>locking</b> the door.</span></p><p><span class="say">Remember <b>to lock</b> the door.</span></p><p><span class="say">He stopped <b>smoking</b>.</span></p><p><span class="say">He stopped <b>to smoke</b>.</span></p></div>
</div>
<p>В русском разница видна по словам («как», «чтобы»). В английском её несёт только форма глагола.</p>
<table>
<tr><th>Форма</th><th>Взгляд</th><th>Логика</th></tr>
<tr><td><b>-ing</b></td><td>назад или на само действие</td><td>действие уже было / уже идёт</td></tr>
<tr><td><b>to</b></td><td>вперёд</td><td>действие ещё предстоит, это цель</td></tr>
</table>
<div class="g-tip">Представьте <b>to</b> как стрелку →: «помнить → (потом) запереть». А <b>-ing</b> — как фотографию: «помню картинку, где я запираю дверь».</div>
<div class="mini" data-q="I clearly remember ___ the oven off. So why is it hot?" data-o="to turn|turning|turn" data-a="1" data-why="Выключил раньше, а сейчас вспоминаю → remember + -ing."></div>`
      },
      {
        title: '2. remember, forget, regret',
        html: `
<div class="g-idea"><b>remember / forget + to</b> — про дело, которое <b>надо сделать</b>. <b>remember / forget + -ing</b> — про воспоминание о том, что <b>уже было</b>.</div>
<table>
<tr><th>Глагол</th><th>+ to (вперёд)</th><th>+ -ing (назад)</th></tr>
<tr><td><b>remember</b></td><td><span class="say">Remember to save your work.</span><br>не забудь сохранить</td><td><span class="say">I remember saving it.</span><br>помню, как сохранял</td></tr>
<tr><td><b>forget</b></td><td><span class="say">I forgot to call Mum.</span><br>забыл позвонить</td><td><span class="say">I'll never forget seeing the ocean.</span><br>не забуду, как увидел</td></tr>
<tr><td><b>regret</b></td><td><span class="say">We regret to inform you…</span><br>с сожалением сообщаем</td><td><span class="say">I regret buying this chair.</span><br>жалею, что купил</td></tr>
</table>
<ul class="g-list">
<li><span class="say">Did you remember to feed the cat?</span> — Ты не забыл покормить кота?</li>
<li><span class="say">I don't remember agreeing to this deadline.</span> — Не помню, чтобы я соглашался на этот дедлайн.</li>
<li><span class="say">Do you regret not going to art school?</span> — Жалеешь, что не пошёл в художку?</li>
<li><span class="say">We regret to say that the event has been cancelled.</span> — К сожалению, мероприятие отменено. <span class="muted">(официально)</span></li>
</ul>
<div class="g-tip"><b>forget + -ing</b> почти всегда живёт во фразе <b>I'll never forget…</b>. В остальных случаях «забыл, как…» лучше сказать <span class="say">I don't remember…</span></div>
<div class="g-bad">Don't forget buying bread. · I regret to buy this chair.</div>
<div class="g-good">Don't forget <b>to buy</b> bread. · I regret <b>buying</b> this chair.</div>
<div class="mini" data-q="Sorry, I forgot ___ you back yesterday." data-o="calling|to call|call" data-a="1" data-why="Надо было позвонить, но не сделал → forget + to."></div>
<div class="mini" data-q="I regret ___ so rude to her. I'll apologise." data-o="to be|being|be" data-a="1" data-why="Грубил в прошлом и жалею → regret + -ing."></div>`
      },
      {
        title: '3. stop и go on; start, continue, bother — без разницы',
        html: `
<div class="g-idea"><b>stop doing</b> — прекратить. <b>stop to do</b> — остановиться, <b>чтобы</b> сделать. Здесь to — это знакомое «чтобы» (урок A2-16).</div>
<ul class="g-list">
<li><span class="say">I stopped playing at two a.m.</span> — Я перестал играть в два ночи.</li>
<li><span class="say">We stopped to buy some snacks.</span> — Мы остановились, чтобы купить перекус.</li>
</ul>
<p><b>go on</b> работает похоже:</p>
<table>
<tr><th>Форма</th><th>Смысл</th><th>Пример</th></tr>
<tr><td><b>go on doing</b></td><td>продолжать то же самое</td><td><span class="say">She paused and went on talking.</span></td></tr>
<tr><td><b>go on to do</b></td><td>перейти к новому</td><td><span class="say">He started as a tester and went on to become a lead designer.</span></td></tr>
</table>
<p>А вот после <b>start, begin, continue, intend, bother</b> — разницы <b>нет</b>, можно и так и так:</p>
<ul class="g-list">
<li><span class="say">It started raining.</span> = <span class="say">It started to rain.</span></li>
<li><span class="say">I intend to finish it tonight.</span> = <span class="say">I intend finishing it tonight.</span> — Собираюсь закончить сегодня.</li>
<li><span class="say">Don't bother calling.</span> = <span class="say">Don't bother to call.</span> — Можешь не звонить.</li>
</ul>
<p>Одно правило вкуса: два -ing подряд звучат коряво. Если первый глагол уже с -ing, второй — с to:</p>
<div class="g-bad">It's starting raining.</div>
<div class="g-good">It's starting <b>to rain</b>.</div>
<div class="mini" data-q="On the way home we stopped ___ petrol." data-o="getting|to get|get" data-a="1" data-why="Остановились, чтобы заправиться → stop + to."></div>
<div class="mini" data-q="The speaker stopped for a sip of water and then went on ___ about the same topic." data-o="to talk|talking|talk" data-a="1" data-why="Продолжил говорить о том же → go on + -ing."></div>`
      },
      {
        title: '4. try to do и try doing',
        html: `
<div class="g-idea"><b>try to do</b> — стараться, прилагать усилия (получится ли — неизвестно). <b>try doing</b> — попробовать как эксперимент: «а давай так — вдруг поможет».</div>
<table>
<tr><th>try to do</th><th>try doing</th></tr>
<tr><td>пытаться, стараться</td><td>пробовать как вариант</td></tr>
<tr><td><span class="say">I tried to open the file, but it was broken.</span></td><td><span class="say">Try opening it in another program.</span></td></tr>
<tr><td><span class="say">Please try to be on time.</span></td><td><span class="say">Try restarting the router.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I tried to stay awake, but I fell asleep in the middle of the episode.</span> — Я старался не уснуть, но уснул посреди серии. <span class="muted">(усилие — не вышло)</span></li>
<li><span class="say">If you can't sleep, try reading a paper book.</span> — Если не спится, попробуй почитать бумажную книгу. <span class="muted">(совет-эксперимент)</span></li>
<li><span class="say">I tried moving the logo to the left, but it looked worse, so I moved it back.</span> — Я попробовал сдвинуть логотип влево, но стало хуже. <span class="muted">(сдвинул — посмотрел)</span></li>
</ul>
<p>С существительным — просто <b>try + что-то</b>: <span class="say">Try this cake!</span> <span class="say">We tried every shop in the mall.</span></p>
<div class="g-tip">Техподдержка всегда говорит <b>try + -ing</b>: <span class="say">Try clearing the cache.</span> <span class="say">Try logging out and back in.</span> Это не «постарайтесь», а «попробуйте вот это».</div>
<div class="mini" data-q="The sound doesn't work? Try ___ your headphones." data-o="to unplug|unplugging|unplug" data-a="1" data-why="Совет-эксперимент «сделай и посмотри» → try + -ing."></div>`
      },
      {
        title: '5. need doing, help и can\'t help',
        html: `
<div class="g-idea"><b>I need to do</b> — мне надо сделать. <b>Something needs doing</b> — что-то нуждается в том, чтобы с ним это сделали. Во втором случае смысл пассивный (урок B1-12): needs charging = needs to be charged.</div>
<table>
<tr><th>Кто-то должен</th><th>Что-то нуждается</th></tr>
<tr><td><span class="say">I need to charge my phone.</span></td><td><span class="say">My phone needs charging.</span></td></tr>
<tr><td><span class="say">We need to update the icons.</span></td><td><span class="say">The icons need updating.</span></td></tr>
<tr><td><span class="say">You don't need to iron this shirt.</span></td><td><span class="say">This shirt doesn't need ironing.</span></td></tr>
</table>
<p><span class="say">This problem needs thinking about.</span> — Над этой проблемой надо подумать.</p>
<p><b>help</b> — с to или без, одинаково: <span class="say">Can you help me (to) choose a font?</span></p>
<p>А <b>can't help doing</b> — совсем другое: «не могу удержаться», «ничего не могу с собой поделать»:</p>
<ul class="g-list">
<li><span class="say">I can't help laughing at this meme.</span> — Не могу не смеяться над этим мемом.</li>
<li><span class="say">She couldn't help checking her phone.</span> — Она не удержалась и проверила телефон.</li>
<li><span class="say">Sorry, I'm nervous. I can't help it.</span> — Прости, я нервничаю. Ничего не могу поделать.</li>
</ul>
<div class="g-bad">My laptop needs to clean. · I can't help to smile.</div>
<div class="g-good">My laptop needs <b>cleaning</b>. / I need <b>to clean</b> my laptop. · I can't help <b>smiling</b>.</div>
<div class="mini" data-q="The grass is too long. It needs ___." data-o="to cut|cutting|cut" data-a="1" data-why="Траву не она сама стрижёт → needs + -ing (= needs to be cut)."></div>
<div class="mini" data-q="He looked so funny that we couldn't help ___." data-o="to laugh|laughing|laugh" data-a="1" data-why="can't help + -ing = не могу удержаться."></div>`
      },
      {
        title: '6. like doing и like to do; would like to have done',
        html: `
<div class="g-idea">После <b>like, love, hate</b> про повторяющиеся действия подходит и -ing, и to. Но есть тонкости.</div>
<div class="g-steps"><div class="g-h">Как выбрать</div><ol>
<li>Ситуация <b>уже есть</b> (вы там живёте, работаете, учитесь) → <b>-ing</b>: <span class="say">Lena lives in Riga now. She likes living there.</span></li>
<li>Вам <b>нравится сам процесс</b> → чаще <b>-ing</b>: <span class="say">I like drawing in the evenings.</span></li>
<li>Вы так <b>делаете по привычке, потому что это правильно</b>, хоть и не в радость → <b>to</b>: <span class="say">I like to back up my files every Friday.</span></li>
</ol></div>
<ul class="g-list">
<li><span class="say">I hated working in that open space.</span> — Я ненавидел работать в том опенспейсе. <span class="muted">(было на самом деле)</span></li>
<li><span class="say">I like to get to the airport early.</span> — Я предпочитаю приезжать в аэропорт заранее. <span class="muted">(привычка, выбор)</span></li>
<li><span class="say">I don't like being interrupted.</span> — Не люблю, когда меня перебивают. <span class="muted">(-ing в пассиве)</span></li>
<li><span class="say">I don't like people calling me after ten.</span> — Не люблю, когда мне звонят после десяти.</li>
</ul>
<p><b>enjoy</b> и <b>mind</b> — только -ing. <b>would like / love / hate / prefer</b> — почти всегда to (конкретный раз, желание):</p>
<ul class="g-list">
<li><span class="say">I like watching anime.</span> — вообще. <span class="say">I'd like to watch this one tonight.</span> — сегодня, этот.</li>
</ul>
<p><b>would like to have + V3</b> — сожаление: хотел бы, но не получилось.</p>
<ul class="g-list">
<li><span class="say">I'd like to have seen the concert, but I was ill.</span> — Я бы хотел сходить на концерт, но заболел.</li>
<li><span class="say">I'd hate to have been in his place.</span> — Не хотел бы я оказаться на его месте.</li>
<li><span class="say">We'd love to have come, but our flight was cancelled.</span> — Мы бы с радостью приехали, но рейс отменили.</li>
</ul>
<div class="g-bad">I enjoy to work here. · I'd like going to the concert tomorrow.</div>
<div class="g-good">I enjoy <b>working</b> here. · I'd like <b>to go</b> to the concert tomorrow.</div>
<div class="mini" data-q="Dan is a teacher now. He likes ___ kids." data-o="to teach|teaching|teach" data-a="1" data-why="Он уже учитель, ситуация существует → like + -ing."></div>
<div class="mini" data-q="It's a shame we missed the party. I would like ___ everyone." data-o="to see|to have seen|seeing" data-a="1" data-why="Сожаление о прошлом → would like to have + V3."></div>`
      },
      {
        title: '7. prefer и would rather',
        html: `
<div class="g-idea"><b>prefer</b> — предпочитать вообще. <b>would prefer</b> и <b>would rather</b> — «я бы лучше…» в конкретной ситуации. Главное отличие: после <b>would rather</b> — глагол <b>без to</b>.</div>
<table>
<tr><th>Конструкция</th><th>Пример</th></tr>
<tr><td>prefer <b>X to Y</b></td><td><span class="say">I prefer tea to coffee.</span></td></tr>
<tr><td>prefer <b>doing to doing</b></td><td><span class="say">I prefer drawing to writing.</span></td></tr>
<tr><td>prefer <b>to do rather than do</b></td><td><span class="say">I prefer to walk rather than take the bus.</span></td></tr>
<tr><td>would prefer <b>to do</b></td><td><span class="say">I'd prefer to stay in tonight.</span></td></tr>
<tr><td>would rather <b>do</b> (than do)</td><td><span class="say">I'd rather stay in than go out.</span></td></tr>
<tr><td>would rather <b>not</b></td><td><span class="say">I'd rather not talk about it.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Shall we order pizza? — I'd rather cook something.</span> — Закажем пиццу? — Я бы лучше что-нибудь приготовил.</li>
<li><span class="say">Would you rather play or watch?</span> — Ты бы лучше поиграл или посмотрел?</li>
<li><span class="say">Do you want to come? — I'd rather not.</span> — Пойдёшь? — Пожалуй, нет.</li>
</ul>
<p><b>I'd rather you did</b> — «я бы предпочёл, чтобы <b>ты</b>…». После rather + другой человек ставим <b>прошедшую</b> форму, но смысл — настоящее (как после wish, урок B1-11):</p>
<ul class="g-list">
<li><span class="say">I'd rather you drove. I'm tired.</span> — Лучше веди ты. Я устал.</li>
<li><span class="say">I'd rather you didn't tell anyone.</span> — Лучше никому не говори.</li>
<li><span class="say">Shall I post the video? — I'd rather you didn't.</span> — Выложить видео? — Лучше не надо.</li>
</ul>
<div class="g-bad">I'd rather to stay home. · I prefer tea than coffee. · I'd rather you tell him.</div>
<div class="g-good">I'd rather <b>stay</b> home. · I prefer tea <b>to</b> coffee. · I'd rather you <b>told</b> him.</div>
<div class="g-tip">Запомните пару: <b>prefer … to …</b> и <b>rather … than …</b>. Никогда наоборот.</div>
<div class="mini" data-q="I'm tired. I'd rather ___ at home tonight." data-o="to stay|stay|staying" data-a="1" data-why="would rather + глагол без to."></div>
<div class="mini" data-q="I'd rather you ___ my laptop without asking." data-o="don't use|didn't use|not use" data-a="1" data-why="would rather + другой человек + прошедшая форма."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">Don't forget sending me the file.</div><div class="g-good">Don't forget <b>to send</b> me the file.</div>
<div class="g-bad">I remember to meet him in 2019.</div><div class="g-good">I remember <b>meeting</b> him in 2019.</div>
<div class="g-bad">I regret to tell her my password.</div><div class="g-good">I regret <b>telling</b> her my password.</div>
<div class="g-bad">We stopped having lunch. <span class="muted">— если хотели сказать «остановились пообедать»</span></div><div class="g-good">We stopped <b>to have</b> lunch.</div>
<div class="g-bad">My hair needs to cut.</div><div class="g-good">My hair needs <b>cutting</b>.</div>
<div class="g-bad">I couldn't help to laugh.</div><div class="g-good">I couldn't help <b>laughing</b>.</div>
<div class="g-bad">I'd rather to walk.</div><div class="g-good">I'd rather <b>walk</b>.</div>
<div class="g-bad">I prefer games than films.</div><div class="g-good">I prefer games <b>to</b> films.</div>
<div class="g-bad">I'd rather you don't smoke here.</div><div class="g-good">I'd rather you <b>didn't</b> smoke here.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>remember / forget / regret / stop / go on: <b>-ing — назад, to — вперёд</b> · try to = стараться, try -ing = попробовать · needs <b>-ing</b> = нужно сделать с ним · can't help <b>-ing</b> · prefer X <b>to</b> Y · I'd rather <b>do</b> · I'd rather you <b>did</b>.</div>`
      }
    ],
    words: [
      ["remember", "помнить; не забыть", "Remember to take your charger.", "Не забудь взять зарядку."],
      ["forget — forgot", "забывать — забыл", "I'll never forget meeting my favourite streamer.", "Никогда не забуду, как встретил любимого стримера."],
      ["regret", "сожалеть; сожаление", "I regret not learning English earlier.", "Жалею, что не начал учить английский раньше."],
      ["inform", "сообщать, извещать", "We regret to inform you that the tour is cancelled.", "С сожалением сообщаем, что тур отменён."],
      ["go on", "продолжать; переходить к", "She went on to become a famous artist.", "Потом она стала известной художницей."],
      ["pause", "сделать паузу; пауза", "He paused and went on reading.", "Он сделал паузу и продолжил читать."],
      ["attempt", "попытка; пытаться", "I made one more attempt to call him.", "Я сделал ещё одну попытку позвонить ему."],
      ["experiment", "эксперимент; экспериментировать", "Try a new font as an experiment.", "Попробуй новый шрифт ради эксперимента."],
      ["restart", "перезапускать", "Try restarting the app.", "Попробуй перезапустить приложение."],
      ["charge", "заряжать; плата", "My phone needs charging.", "Телефон надо зарядить."],
      ["iron", "гладить (утюгом); утюг", "This shirt doesn't need ironing.", "Эту рубашку не нужно гладить."],
      ["repair", "чинить, ремонтировать", "The chair needs repairing.", "Стул нужно починить."],
      ["can't help", "не могу не…, не могу удержаться", "I can't help smiling when I hear this song.", "Не могу не улыбаться, когда слышу эту песню."],
      ["intend", "намереваться, собираться", "I intend to finish the course by May.", "Я собираюсь закончить курс к маю."],
      ["bother", "беспокоить; утруждать себя", "Don't bother cooking, I'll bring food.", "Можешь не готовить, я принесу еду."],
      ["continue", "продолжать", "Prices continue to rise.", "Цены продолжают расти."],
      ["prefer", "предпочитать", "I prefer working at night to working in the morning.", "Мне больше нравится работать ночью, чем утром."],
      ["would rather", "лучше бы, предпочёл бы", "I'd rather watch it with subtitles.", "Я бы лучше посмотрел с субтитрами."],
      ["rather than", "а не, вместо того чтобы", "I prefer to text rather than call.", "Я предпочитаю писать, а не звонить."],
      ["in advance", "заранее", "I like to buy tickets in advance.", "Я предпочитаю покупать билеты заранее."],
      ["in general", "в целом, вообще", "In general, I prefer quiet games.", "В целом я предпочитаю спокойные игры."],
      ["it's a shame", "жаль, обидно", "It's a shame we missed the show.", "Жаль, что мы пропустили шоу."],
      ["hate", "ненавидеть, терпеть не мочь", "I hate being late.", "Терпеть не могу опаздывать."],
      ["mind", "быть против", "Would you mind turning the music down?", "Ты не мог бы сделать музыку потише?"],
      ["turn down", "убавить; отклонить", "I turned down the offer.", "Я отказался от предложения."],
      ["lock", "запирать; замок", "I remember locking the door.", "Я помню, как запирал дверь."],
      ["overhear — overheard", "случайно услышать", "I couldn't help overhearing your conversation.", "Я невольно услышал ваш разговор."],
      ["memory", "память; воспоминание", "Winning my first tournament is my best memory.", "Победа на первом турнире — моё лучшее воспоминание."],
      ["option", "вариант, опция", "Try the other option.", "Попробуй другой вариант."],
      ["nervous", "нервный, взволнованный", "I'm nervous, I can't help it.", "Я нервничаю, ничего не могу поделать."]
    ],
    texts: [
      {
        id: 't-b1-16-1', title: 'Five years of streaming: what I regret', level: 'B1',
        text: `Next week my channel turns five, and people keep asking me what I would do differently. So here it is — an honest list.

I still remember doing my first stream. I was so nervous that I forgot to turn on the microphone. For twenty minutes I was talking to nobody, and three viewers were watching a silent man playing a farming game. When somebody finally wrote "no sound", I couldn't help laughing. I'll never forget reading that message.

Do I regret starting so late? A little. I'd like to have started at university, when I had more free time. But I don't regret leaving my office job. I hated sitting in meetings all day, and I prefer working at night to working in the morning anyway.

The biggest lesson was about equipment. In the first year my stream kept freezing. I tried to fix it myself for months. Then a viewer suggested something simple: "Try lowering the bitrate." It worked. Now, when something goes wrong, I don't try to be a hero. I try changing one setting at a time, and I ask the community.

Another lesson: stop to rest. I used to stream for ten hours without a break. Now I stop to eat, stretch and drink water every two hours. My back is very grateful.

Finally, a small request. Many of you ask me to play horror games. Honestly, I'd rather not. I like watching other people play them, but I don't like being scared myself. So I'd rather you didn't send me any more horror game codes. Send cosy games instead!

My setup needs updating, and my old chair definitely needs replacing. But I intend to go on streaming for at least five more years. Thanks for being here.`,
        questions: [
          { q: 'What did the streamer forget to do during his first stream?', o: ['Turn on the microphone', 'Start the game', 'Read the chat'], a: 0 },
          { q: 'What helped with the freezing stream?', o: ['A new chair', 'Lowering the bitrate', 'Streaming for ten hours'], a: 1 },
          { q: 'What kind of games does he prefer to play?', o: ['Horror games', 'Cosy games', 'Racing games'], a: 1 }
        ]
      },
      {
        id: 't-b1-16-2', title: 'Saturday plans', level: 'B1',
        text: `Mia: So, what shall we do on Saturday? Would you rather go to the cinema or stay in and play something?
Leo: Honestly, I'd rather stay in. The cinema is so expensive now. I'd prefer to spend the money on pizza.
Mia: Fair enough. But please, not the space game again. I'd rather you chose something new this time.
Leo: Okay. Have you tried playing "Harbor Lights"? Everyone keeps talking about it.
Mia: I tried to download it last week, but my laptop is too old. It really needs replacing.
Leo: Did you try clearing some space first? That usually helps.
Mia: I did. It still didn't work. I think it needs cleaning inside too, it's very loud.
Leo: Then come to my place. We can play on my PC. Just remember to bring your controller.
Mia: Sure. By the way, do you remember lending me your headphones in spring?
Leo: Do I? No, I don't remember lending them to you. Are you sure?
Mia: Yes! I found them in my bag yesterday. I regret not giving them back earlier. Sorry!
Leo: Ha, no problem. I thought I had lost them. I stopped looking for them months ago.
Mia: I'll bring them on Saturday. Oh, and can we stop to buy snacks on the way? The shop near your house has those spicy chips.
Leo: Of course. But I'd prefer to leave early. The shop closes at eight.
Mia: Deal. I'd love to have played it last weekend, you know. Everyone in the chat was talking about the ending.
Leo: Don't read anything about the ending! I hate knowing what happens before I play.
Mia: Me too. I can't help checking the chat, though.
Leo: Then turn off notifications. Try doing that for one day. You'll feel better.`,
        questions: [
          { q: 'Why can\'t Mia play the game at home?', o: ['Her laptop is too old', 'She has no controller', 'Her internet is slow'], a: 0 },
          { q: 'What did Mia find in her bag?', o: ['A controller', 'Leo\'s headphones', 'Some snacks'], a: 1 },
          { q: 'Why does Leo want to leave early?', o: ['The shop closes at eight', 'The film starts at seven', 'He is tired'], a: 0 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'Did you remember ___ the bills? — Oh no, I forgot!', o: ['paying', 'to pay', 'pay'], a: 1, why: 'Дело, которое надо было сделать → remember + to.' },
      { t: 'choice', q: 'I don\'t remember ___ you my password. How do you know it?', o: ['to give', 'giving', 'give'], a: 1, why: 'Вспоминаю (не) прошлое действие → remember + -ing.' },
      { t: 'choice', q: 'The car was making a strange noise, so we stopped ___ what it was.', o: ['checking', 'to check', 'check'], a: 1, why: 'Остановились, чтобы проверить → stop + to.' },
      { t: 'choice', q: 'I ___ to lift the box, but it was too heavy.', o: ['tried', 'tried lifting', 'tried on'], a: 0, why: 'Прилагал усилие, но не вышло → try + to.' },
      { t: 'choice', q: 'The website is slow? Try ___ a different browser.', o: ['to use', 'using', 'use'], a: 1, why: 'Совет-эксперимент → try + -ing.' },
      { t: 'choice', q: 'I prefer comedies ___ horror films.', o: ['than', 'to', 'from'], a: 1, why: 'prefer X to Y.' },
      { t: 'choice', q: 'Shall we take a taxi? — I\'d rather ___. It\'s a nice evening.', o: ['walk', 'to walk', 'walking'], a: 0, why: 'would rather + глагол без to.' },
      { t: 'choice', q: 'Jake lives in Tokyo now. He likes ___ there.', o: ['to live', 'living', 'live'], a: 1, why: 'Ситуация уже существует → like + -ing.' },
      { t: 'gap', q: 'This room is dirty. It needs ___. (clean)', a: ['cleaning', 'to be cleaned'], why: 'Что-то нуждается в действии → needs + -ing.' },
      { t: 'gap', q: 'I couldn\'t help ___ when he fell off the chair. (laugh)', a: ['laughing'], why: 'can\'t help + -ing = не могу удержаться.' },
      { t: 'gap', q: 'I regret ___ that expensive keyboard. I never use it. (buy)', a: ['buying', 'having bought'], why: 'Жалею о сделанном → regret + -ing.' },
      { t: 'gap', q: 'I\'d rather you ___ my phone. It\'s private. (not / check)', a: ['didn\'t check', 'did not check'], why: 'would rather + другой человек + прошедшая форма.' },
      { t: 'gap', q: 'After the break, she went on ___ about the new design, as before. (talk)', a: ['talking'], why: 'Продолжила то же самое → go on + -ing.' },
      { t: 'order', a: 'I would rather not go out tonight', ru: 'Я бы лучше не выходил сегодня вечером.' },
      { t: 'order', a: 'My laptop needs charging again', ru: 'Ноутбук снова надо зарядить.' },
      { t: 'order', a: 'Try restarting your computer first', ru: 'Сначала попробуй перезагрузить компьютер.' },
      { t: 'tr', q: 'Не забудь сохранить файл.', a: ['don\'t forget to save the file', 'do not forget to save the file', 'remember to save the file'] },
      { t: 'tr', q: 'Я предпочитаю писать сообщения, а не звонить.', a: ['i prefer to text rather than call', 'i prefer texting to calling', 'i prefer to write messages rather than call', 'i prefer writing messages to calling', 'i prefer texting rather than calling', 'i prefer to send messages rather than call', 'i prefer sending messages to calling'] },
      { t: 'listen', say: 'I\'d rather you didn\'t tell anyone', a: ['i\'d rather you didn\'t tell anyone', 'i would rather you did not tell anyone', 'i would rather you didn\'t tell anyone'] }
    ],
    test: [
      { t: 'choice', q: 'I\'ll never forget ___ the northern lights for the first time.', o: ['to see', 'seeing', 'see'], a: 1, why: 'Яркое воспоминание о прошлом → never forget + -ing.' },
      { t: 'choice', q: 'We regret ___ you that your order has been delayed.', o: ['informing', 'to inform', 'inform'], a: 1, why: 'Официальное «с сожалением сообщаем» → regret + to inform.' },
      { t: 'gap', q: 'He worked as a junior designer and later went on ___ his own studio. (open)', a: ['to open'], why: 'Перешёл к новому этапу → go on + to.' },
      { t: 'choice', q: 'I tried ___ the colours, but the client still didn\'t like it.', o: ['changing', 'to changing', 'change'], a: 0, why: 'Попробовал как вариант — сделал и посмотрел → try + -ing.' },
      { t: 'gap', q: 'Your bike is fine. It doesn\'t need ___. (repair)', a: ['repairing', 'to be repaired'], why: 'needs + -ing = needs to be + V3 (пассивный смысл).' },
      { t: 'choice', q: 'It\'s a shame I missed your wedding. I would love ___ there.', o: ['to be', 'to have been', 'being'], a: 1, why: 'Сожаление о прошлом → would love to have + V3.' },
      { t: 'choice', q: 'I like ___ my desk every evening — not because I enjoy it, it\'s just a good habit.', o: ['to tidy', 'tidying', 'tidy'], a: 0, why: 'Привычка по выбору, не удовольствие → like + to.' },
      { t: 'gap', q: 'Which would you rather ___: play or watch? (do)', a: ['do'], why: 'would rather + глагол без to.' },
      { t: 'choice', q: 'I\'d prefer ___ now rather than wait until tomorrow.', o: ['to leave', 'leave', 'leaving'], a: 0, why: 'would prefer + to + глагол.' },
      { t: 'gap', q: 'Who\'s going to call the client? — I\'d rather you ___ it. (do)', a: ['did'], why: 'would rather + другой человек + прошедшая форма.' },
      { t: 'choice', q: 'Look, it\'s starting ___. Let\'s go inside.', o: ['raining', 'to rain', 'rain'], a: 1, why: 'После starting лучше to: два -ing подряд звучат коряво.' },
      { t: 'choice', q: 'Sorry, I couldn\'t help ___ what you said about the project.', o: ['to overhear', 'overhearing', 'overheard'], a: 1, why: 'can\'t help + -ing.' }
    ]
  }
);
