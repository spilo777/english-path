// Игровой трек: юниты g-2 (квесты и NPC) и g-3 (онлайн, чат и войс).
COURSE.units.push(
  // ───────────────────────────── GAMING 2 ─────────────────────────────
  {
    id: 'g-2', level: 'A1', num: 2, track: 'games', unlockAfter: 'a1-4',
    title: 'Игры: квесты и диалоги с NPC',
    summary: 'Квестовый журнал, реплики NPC, варианты ответа в диалогах и торговля. Грамматика: need to / want to.',
    grammar: [
      {
        title: 'Квестовый журнал: глаголы заданий',
        html: `
<p>В журнале (<span class="say">Quest Log</span>, <span class="say">Journal</span>) цель квеста называется <span class="say">objective</span>. Почти всегда это команда — уже знакомое повелительное наклонение: глагол + что сделать.</p>
<table>
<tr><th>Глагол</th><th>Что делать</th><th>Пример</th></tr>
<tr><td><span class="say">collect</span></td><td>собрать</td><td><span class="say">Collect 5 herbs</span></td></tr>
<tr><td><span class="say">defeat</span></td><td>победить, одолеть</td><td><span class="say">Defeat the wolves</span></td></tr>
<tr><td><span class="say">deliver</span></td><td>доставить</td><td><span class="say">Deliver the letter to the blacksmith</span></td></tr>
<tr><td><span class="say">reach</span></td><td>добраться до</td><td><span class="say">Reach the old tower</span></td></tr>
<tr><td><span class="say">escort</span></td><td>сопроводить, охранять в пути</td><td><span class="say">Escort the merchant to the village</span></td></tr>
<tr><td><span class="say">return</span></td><td>вернуться</td><td><span class="say">Return to Mira</span></td></tr>
</table>
<p>Под целью часто стоит счётчик: <b>Wolves defeated: 2/6</b> — побеждено волков 2 из 6. Когда всё готово: <span class="say">Quest complete!</span></p>
<p class="tip">Если в задании стоит <b>(Optional)</b> — это необязательная цель. Её можно пропустить, но за неё обычно дают дополнительную награду.</p>`
      },
      {
        title: 'to + глагол = «чтобы»',
        html: `
<p>Задания часто объясняют, <b>зачем</b> что-то делать. Для этого после команды ставят <b>to + глагол</b>:</p>
<table>
<tr><td><span class="say">Go to the cave to find the sword.</span></td><td>Идите в пещеру, <b>чтобы найти</b> меч.</td></tr>
<tr><td><span class="say">Talk to the guard to open the gate.</span></td><td>Поговорите со стражником, <b>чтобы открыть</b> ворота.</td></tr>
<tr><td><span class="say">Sell items to get gold.</span></td><td>Продавайте предметы, <b>чтобы получить</b> золото.</td></tr>
</table>
<p>Не путайте два «to»: <b>go to the cave</b> — «в пещеру» (направление), <b>to find</b> — «чтобы найти» (цель). Если после to стоит глагол — это цель.</p>`
      },
      {
        title: 'need to и want to',
        html: `
<p><b>need to</b> + глагол — «нужно, надо». <b>want to</b> + глагол — «хочу». После них глагол как в словаре.</p>
<table>
<tr><th>Фраза</th><th>Перевод</th></tr>
<tr><td><span class="say">You need to find the key.</span></td><td>Вам нужно найти ключ.</td></tr>
<tr><td><span class="say">I want to buy a sword.</span></td><td>Я хочу купить меч.</td></tr>
<tr><td><span class="say">She needs to rest.</span></td><td>Ей нужно отдохнуть. (he/she/it + <b>s</b>)</td></tr>
<tr><td><span class="say">You don't need to fight.</span></td><td>Вам не нужно сражаться.</td></tr>
<tr><td><span class="say">Do you want to help me?</span></td><td>Хотите мне помочь?</td></tr>
</table>
<p>Без глагола — просто <b>need / want</b> + предмет: <span class="say">I need a key.</span> <span class="say">Do you want some gold?</span></p>
<p class="tip">Фраза «You need to…» в подсказках — ваш главный друг. Всё, что идёт после неё, и есть то, что игра от вас хочет.</p>`
      },
      {
        title: 'Диалоги с NPC и ваши ответы',
        html: `
<p><b>NPC</b> (non-player character) — персонажи, которыми управляет игра. Их реплики очень похожи из игры в игру:</p>
<table>
<tr><td><span class="say">Can you help me?</span></td><td>Вы можете мне помочь?</td></tr>
<tr><td><span class="say">Bring me five wolf skins.</span></td><td>Принесите мне пять волчьих шкур.</td></tr>
<tr><td><span class="say">Please, find my son!</span></td><td>Пожалуйста, найдите моего сына!</td></tr>
<tr><td><span class="say">Thank you, traveler.</span></td><td>Спасибо, путник.</td></tr>
<tr><td><span class="say">Here is your reward.</span></td><td>Вот ваша награда.</td></tr>
</table>
<p>Варианты ответа, которые вы выбираете:</p>
<table>
<tr><td><span class="say">Yes, I can help.</span></td><td>Да, я могу помочь.</td></tr>
<tr><td><span class="say">What do I need to do?</span></td><td>Что мне нужно сделать?</td></tr>
<tr><td><span class="say">Tell me more.</span></td><td>Расскажите подробнее.</td></tr>
<tr><td><span class="say">Not now.</span></td><td>Не сейчас.</td></tr>
<tr><td><span class="say">Goodbye.</span></td><td>До свидания. (выйти из диалога)</td></tr>
</table>
<p>Кнопки под диалогом: <b>Accept</b> — принять квест, <b>Decline</b> — отказаться, <b>Leave</b> — уйти.</p>`
      },
      {
        title: 'У торговца',
        html: `
<table>
<tr><td><span class="say">Buy</span> / <span class="say">Sell</span></td><td>Купить / Продать</td></tr>
<tr><td><span class="say">How much is it?</span></td><td>Сколько это стоит?</td></tr>
<tr><td><span class="say">It costs fifty gold.</span></td><td>Это стоит пятьдесят золотых.</td></tr>
<tr><td><span class="say">Price: 120 gold</span></td><td>Цена: 120 золотых</td></tr>
<tr><td><span class="say">You don't have enough gold.</span></td><td>У вас недостаточно золота.</td></tr>
<tr><td><span class="say">Come back soon!</span></td><td>Заходите ещё!</td></tr>
</table>
<p class="tip">Слово <b>enough</b> («достаточно») встречается постоянно: <i>not enough gold</i>, <i>not enough mana</i>, <i>not enough space</i>. Если видите его с not — вам чего-то не хватает.</p>`
      }
    ],
    words: [
      ['objective', 'цель (задания)', 'New objective: find the cave.', 'Новая цель: найдите пещеру.'],
      ['collect', 'собирать', 'Collect five herbs.', 'Соберите пять трав.'],
      ['defeat', 'победить, одолеть', 'Defeat the bandits.', 'Одолейте бандитов.'],
      ['deliver', 'доставить', 'Deliver the letter to the king.', 'Доставьте письмо королю.'],
      ['reach', 'добраться до', 'Reach the top of the tower.', 'Доберитесь до вершины башни.'],
      ['escort', 'сопроводить', 'Escort the merchant to the city.', 'Сопроводите торговца до города.'],
      ['return', 'вернуться; вернуть', 'Return to the old man.', 'Вернитесь к старику.'],
      ['complete', 'выполнить; выполненный', 'Quest complete!', 'Квест выполнен!'],
      ['journal', 'журнал', 'Check your journal.', 'Загляните в журнал.'],
      ['help', 'помогать; помощь', 'Can you help me?', 'Вы можете мне помочь?'],
      ['bring', 'приносить', 'Bring me three wolf skins.', 'Принесите мне три волчьи шкуры.'],
      ['give', 'давать', 'Give the ring to Mira.', 'Отдайте кольцо Мире.'],
      ['traveler', 'путник, путешественник', 'Thank you, traveler.', 'Спасибо, путник.'],
      ['accept', 'принять', 'Accept the quest?', 'Принять квест?'],
      ['decline', 'отказаться', 'You can decline the quest.', 'Вы можете отказаться от квеста.'],
      ['need to', 'нужно (сделать)', 'You need to find the key.', 'Вам нужно найти ключ.'],
      ['want to', 'хотеть (сделать)', 'I want to buy a sword.', 'Я хочу купить меч.'],
      ['merchant', 'торговец', 'Talk to the merchant.', 'Поговорите с торговцем.'],
      ['buy', 'покупать', 'Buy a health potion.', 'Купите зелье здоровья.'],
      ['sell', 'продавать', 'Sell your old armor.', 'Продайте свою старую броню.'],
      ['gold', 'золото, золотые (деньги)', 'You have 200 gold.', 'У вас 200 золотых.'],
      ['price', 'цена', 'The price is too high.', 'Цена слишком высокая.'],
      ['cost', 'стоить', 'It costs ten gold.', 'Это стоит десять золотых.'],
      ['enough', 'достаточно', 'You don\'t have enough gold.', 'У вас недостаточно золота.'],
      ['potion', 'зелье', 'Drink a potion.', 'Выпейте зелье.'],
      ['village', 'деревня', 'The village is in danger.', 'Деревня в опасности.'],
      ['cave', 'пещера', 'The wolves live in the cave.', 'Волки живут в пещере.'],
      ['tower', 'башня', 'The wizard lives in the tower.', 'В башне живёт волшебник.'],
      ['letter', 'письмо', 'Deliver this letter, please.', 'Доставьте это письмо, пожалуйста.'],
      ['dangerous', 'опасный', 'The forest is dangerous at night.', 'Ночью лес опасен.'],
      ['safe', 'безопасный; в безопасности', 'You are safe here.', 'Здесь вы в безопасности.'],
      ['wolf', 'волк (мн. ч. wolves)', 'Defeat six wolves.', 'Победите шесть волков.'],
      ['herb', 'трава (лечебная)', 'Collect red herbs near the river.', 'Соберите красные травы у реки.']
    ],
    texts: [
      {
        id: 't-g-2-1', title: 'The Lost Ring', level: 'A1',
        text: `Mira: Traveler! Please, wait. Can you help me?
> Yes, I can help.
> Not now.
Mira: Thank you! Wolves live in the cave near the village. They are dangerous. One wolf has my ring. I need to get it back.
> What do I need to do?
Mira: Go to the cave. Defeat the wolves and find my ring. Then bring it to me.
> Tell me more about the cave.
Mira: It is dark and cold. You need to buy a torch. The merchant in the village sells torches.
[Accept]  [Decline]

QUEST LOG — The Lost Ring
Objective: Reach the cave (0/1)
Objective: Defeat the wolves (0/6)
Objective: Find Mira's ring (0/1)
Optional: Collect 3 wolf skins (0/3)
Reward: 150 gold, a health potion`
      },
      {
        id: 't-g-2-2', title: 'At the Merchant', level: 'A1',
        text: `Merchant: Welcome, traveler! Do you want to buy or sell?
> I want to buy a torch.
Merchant: A torch costs ten gold. Here you are.
> How much is this sword?
Merchant: This sword? It is a good sword. The price is three hundred gold.
> I don't have enough gold.
Merchant: Then sell me something! I buy wolf skins, herbs and old weapons.
> I want to sell three wolf skins.
Merchant: Three wolf skins… Sixty gold. OK?
> OK.
Merchant: Thank you! Be careful in the cave. Come back soon!

You got 60 gold.
Quest updated: Collect 3 wolf skins (3/3) — complete!`
      }
    ],
    practice: [
      { t: 'choice', q: 'Collect five herbs. Что нужно сделать?', o: ['Продать пять трав', 'Собрать пять трав', 'Купить пять трав'], a: 1 },
      { t: 'choice', q: 'Escort the merchant.', o: ['Одолейте торговца', 'Сопроводите торговца', 'Найдите торговца'], a: 1 },
      { t: 'choice', q: 'Кнопка, чтобы взять квест:', o: ['Decline', 'Accept', 'Leave'], a: 1 },
      { t: 'choice', q: 'You don\'t have enough gold.', o: ['У вас нет места', 'У вас недостаточно золота', 'У вас много золота'], a: 1 },
      { t: 'choice', q: 'Go to the cave to find the sword. Что значит «to find»?', o: ['в пещеру', 'чтобы найти', 'нашёл'], a: 1 },
      { t: 'gap', q: 'You ___ to find the key. (нужно)', a: ['need'] },
      { t: 'gap', q: 'I ___ to buy a potion. (хочу)', a: ['want'] },
      { t: 'gap', q: 'She ___ to rest. (ей нужно)', a: ['needs'] },
      { t: 'gap', q: '___ the letter to the king. (доставьте)', a: ['deliver'] },
      { t: 'gap', q: 'How much ___ it?', a: ['is'] },
      { t: 'order', a: 'Can you help me', ru: 'Вы можете мне помочь?' },
      { t: 'order', a: 'What do I need to do', ru: 'Что мне нужно сделать?' },
      { t: 'tr', q: 'Принесите мне три травы.', a: ['bring me three herbs', 'bring me 3 herbs'] },
      { t: 'tr', q: 'Я хочу продать меч.', a: ['i want to sell a sword', 'i want to sell the sword', 'i want to sell my sword'] },
      { t: 'listen', say: 'Thank you, traveler', a: ['thank you traveler', 'thank you traveller'] }
    ],
    test: [
      { t: 'choice', q: 'Defeat the bandits =', o: ['Найдите бандитов', 'Одолейте бандитов', 'Сопроводите бандитов'], a: 1 },
      { t: 'choice', q: 'Reach the tower =', o: ['Доберитесь до башни', 'Покиньте башню', 'Постройте башню'], a: 0 },
      { t: 'choice', q: 'merchant =', o: ['путник', 'торговец', 'стражник'], a: 1 },
      { t: 'choice', q: 'Правильно:', o: ['I want buy a sword.', 'I want to buy a sword.', 'I want to buying a sword.'], a: 1 },
      { t: 'gap', q: 'It ___ fifty gold. (стоит)', a: ['costs'] },
      { t: 'gap', q: 'Return ___ the old man.', a: ['to'] },
      { t: 'gap', q: 'Quest ___! (выполнен)', a: ['complete', 'completed'] },
      { t: 'order', a: 'You need to talk to the guard', ru: 'Вам нужно поговорить со стражником' },
      { t: 'tr', q: 'Вам не нужно сражаться.', a: ['you don\'t need to fight', 'you do not need to fight'] },
      { t: 'tr', q: 'Сколько это стоит?', a: ['how much is it', 'how much is this', 'how much does it cost', 'how much does this cost'] },
      { t: 'listen', say: 'Bring me five wolf skins', a: ['bring me five wolf skins', 'bring me 5 wolf skins'] }
    ]
  },

  // ───────────────────────────── GAMING 3 ─────────────────────────────
  {
    id: 'g-3', level: 'A1', num: 3, track: 'games', unlockAfter: 'a1-7',
    title: 'Игры: онлайн, чат и войс',
    summary: 'Командные фразы для войса, сленг и сокращения чата, вежливые фразы, если английский пока слабый. Грамматика: короткие фразы и can для просьб.',
    grammar: [
      {
        title: 'Короткие фразы: без лишних слов',
        html: `
<p>В бою никто не говорит полными предложениями. Подлежащее и <b>am / is / are</b> просто выбрасывают — смысл понятен и так:</p>
<table>
<tr><th>Как говорят</th><th>Полная фраза</th><th>Перевод</th></tr>
<tr><td><span class="say">Need help!</span></td><td>I need help.</td><td>Нужна помощь!</td></tr>
<tr><td><span class="say">On my way!</span></td><td>I am on my way.</td><td>Иду! / Уже бегу!</td></tr>
<tr><td><span class="say">Behind you!</span></td><td>The enemy is behind you.</td><td>Сзади!</td></tr>
<tr><td><span class="say">Nice shot!</span></td><td>That is a nice shot.</td><td>Классный выстрел!</td></tr>
<tr><td><span class="say">Ready?</span></td><td>Are you ready?</td><td>Готовы?</td></tr>
</table>
<p>Команды — снова повелительное наклонение: <span class="say">Follow me!</span> (за мной), <span class="say">Cover me!</span> (прикрой), <span class="say">Wait!</span> (жди), <span class="say">Push!</span> (давим, вперёд), <span class="say">Fall back!</span> (отходим).</p>
<p class="tip">В учебных упражнениях пишите полные предложения, а в игре смело сокращайте — так звучит естественно.</p>`
      },
      {
        title: 'can для просьб',
        html: `
<p><b>Can you</b> + глагол? — самая простая вежливая просьба: «Можешь…?». После can глагол <b>без to</b> (не как после need to / want to).</p>
<table>
<tr><td><span class="say">Can you heal me?</span></td><td>Можешь меня полечить?</td></tr>
<tr><td><span class="say">Can you repeat, please?</span></td><td>Можешь повторить, пожалуйста?</td></tr>
<tr><td><span class="say">Can you wait?</span></td><td>Можешь подождать?</td></tr>
<tr><td><span class="say">Can I join?</span></td><td>Можно к вам? (присоединиться)</td></tr>
</table>
<p>Ответы: <span class="say">Yes, I can.</span> / <span class="say">Sure!</span> / <span class="say">Sorry, I can't.</span></p>
<p>Нельзя: <s>Can you to heal me?</s> Можно: <b>Can you heal me?</b></p>
<p class="tip"><b>Could you…?</b> — то же самое, но чуть вежливее. Подойдёт для незнакомых людей: <i>Could you repeat, please?</i></p>`
      },
      {
        title: 'Сокращения и сленг чата',
        html: `
<table>
<tr><th>Пишут</th><th>Полностью</th><th>Значение</th></tr>
<tr><td><b>gg</b></td><td>good game</td><td>хорошая игра (в конце матча)</td></tr>
<tr><td><b>wp</b></td><td>well played</td><td>хорошо сыграно</td></tr>
<tr><td><b>glhf</b></td><td>good luck, have fun</td><td>удачи и хорошей игры (в начале)</td></tr>
<tr><td><b>afk</b></td><td>away from keyboard</td><td>отошёл, не у компьютера</td></tr>
<tr><td><b>brb</b></td><td>be right back</td><td>сейчас вернусь</td></tr>
<tr><td><b>np</b></td><td>no problem</td><td>без проблем</td></tr>
<tr><td><b>op</b></td><td>overpowered</td><td>слишком сильный, имба</td></tr>
<tr><td><b>nerf</b> / <b>buff</b></td><td>—</td><td>ослабить / усилить (персонажа, оружие)</td></tr>
<tr><td><b>lag</b></td><td>—</td><td>задержка, лаги</td></tr>
<tr><td><b>noob</b></td><td>newbie</td><td>нуб, новичок</td></tr>
<tr><td><b>carry</b></td><td>—</td><td>«тащить» команду</td></tr>
</table>
<p>Игровой процесс: <span class="say">lobby</span> (лобби), <span class="say">queue</span> (очередь на матч), <span class="say">match</span> (матч), <span class="say">rank</span> (ранг), <span class="say">respawn</span> (возрождение).</p>
<p class="tip">Осторожно со словами: <b>noob</b> о себе — нормально (<i>sorry, I'm a noob</i>), а о другом человеке — грубовато, это обзывательство. <b>ez</b> (easy) после победы — откровенная насмешка над соперником. <b>gg</b> в середине проигранного матча часто значит «всё, сдаёмся» и может раздражать команду.</p>`
      },
      {
        title: 'Если английский пока слабый',
        html: `
<table>
<tr><td><span class="say">Sorry, my English is bad.</span></td><td>Извините, у меня плохой английский.</td></tr>
<tr><td><span class="say">Can you repeat, please?</span></td><td>Можете повторить, пожалуйста?</td></tr>
<tr><td><span class="say">Slowly, please.</span></td><td>Помедленнее, пожалуйста.</td></tr>
<tr><td><span class="say">Can you write it in chat?</span></td><td>Можете написать это в чат?</td></tr>
<tr><td><span class="say">I don't understand.</span></td><td>Я не понимаю.</td></tr>
<tr><td><span class="say">No mic, sorry.</span></td><td>Нет микрофона, извините.</td></tr>
</table>
<p class="tip">Не бойтесь ошибок: в онлайн-играх полно людей, для которых английский тоже не родной. Одна фраза «sorry, my English is bad» обычно сразу делает всех терпеливее.</p>`
      }
    ],
    words: [
      ['follow me', 'за мной', 'Follow me! I know the way.', 'За мной! Я знаю дорогу.'],
      ['cover me', 'прикрой меня', 'Cover me, I need to heal.', 'Прикрой меня, мне нужно подлечиться.'],
      ['need help', 'нужна помощь', 'Need help on the left!', 'Нужна помощь слева!'],
      ['on my way', 'иду, уже в пути', 'Hold on, on my way!', 'Держись, уже бегу!'],
      ['behind you', 'сзади тебя', 'Look out, behind you!', 'Осторожно, сзади!'],
      ['nice shot', 'отличный выстрел', 'Nice shot! One left.', 'Отличный выстрел! Остался один.'],
      ['gg', 'хорошая игра (good game)', 'gg, see you next match', 'хорошая игра, увидимся в следующем матче'],
      ['wp', 'хорошо сыграно (well played)', 'wp, you were great', 'хорошо сыграно, ты был крут'],
      ['glhf', 'удачи и хорошей игры', 'Hi all, glhf!', 'Всем привет, удачи!'],
      ['afk', 'отошёл (away from keyboard)', 'Sorry, I was afk.', 'Извините, я отходил.'],
      ['brb', 'сейчас вернусь (be right back)', 'brb, doorbell', 'сейчас вернусь, звонят в дверь'],
      ['np', 'без проблем (no problem)', 'ty! — np', 'спасибо! — без проблем'],
      ['lag', 'лаг, задержка; лагать', 'Sorry, I have lag.', 'Извините, у меня лагает.'],
      ['noob', 'нуб, новичок', 'I\'m a noob, can you help me?', 'Я новичок, можешь помочь?'],
      ['nerf', 'ослабить (в патче)', 'They need to nerf this gun.', 'Это оружие нужно ослабить.'],
      ['buff', 'усилить; усиление', 'The mage got a buff.', 'Мага усилили.'],
      ['op', 'имба, слишком сильный', 'This skill is so op!', 'Этот навык просто имба!'],
      ['respawn', 'возрождение; возродиться', 'Wait for respawn.', 'Жди возрождения.'],
      ['carry', 'тащить (команду)', 'Can you carry me?', 'Можешь меня протащить?'],
      ['lobby', 'лобби', 'Wait in the lobby.', 'Подождите в лобби.'],
      ['match', 'матч', 'The match starts in 10 seconds.', 'Матч начнётся через 10 секунд.'],
      ['queue', 'очередь; встать в очередь', 'Let\'s queue together.', 'Давай пойдём в поиск вместе.'],
      ['rank', 'ранг', 'What is your rank?', 'Какой у тебя ранг?'],
      ['teammate', 'союзник, товарищ по команде', 'Revive your teammate.', 'Поднимите союзника.'],
      ['ready', 'готов', 'Are you ready?', 'Ты готов?'],
      ['wait', 'ждать', 'Wait for me!', 'Подожди меня!'],
      ['heal', 'лечить', 'Can you heal me?', 'Можешь меня полечить?'],
      ['push', 'давить, наступать', 'Push now! They are weak.', 'Давим! Они слабые.'],
      ['fall back', 'отступить', 'Too many enemies, fall back!', 'Слишком много врагов, отходим!'],
      ['repeat', 'повторять', 'Can you repeat, please?', 'Можешь повторить, пожалуйста?'],
      ['mic', 'микрофон', 'Sorry, no mic.', 'Извините, нет микрофона.']
    ],
    texts: [
      {
        id: 't-g-3-1', title: 'Team Chat', level: 'A1',
        text: `[Lobby] Waiting for players… 5/5
[Team] SkyFox: hi all, glhf
[Team] IronBear: glhf!
[Team] You: hi! sorry, my english is bad
[Team] SkyFox: np
[Team] Lina_07: brb 1 min
[Team] SkyFox: ok, we wait
[Team] Lina_07: back. ready
MATCH STARTS IN 5… 4… 3…
[Team] IronBear: lag again :(
[Team] SkyFox: follow me, mid
[Team] You: on my way
[Team] Lina_07: need help top!!
[Team] SkyFox: Lina, 10 sec, wait for respawn
[Team] IronBear: this gun is so op, they need to nerf it
VICTORY
[All] RedKnight: gg wp
[Team] SkyFox: gg! you carry, Lina
[Team] Lina_07: ty :) queue again?`
      },
      {
        id: 't-g-3-2', title: 'Voice Chat: Last Round', level: 'A1',
        text: `— Last round. Everybody ready?
— Ready.
— Sorry, can you repeat? I don't understand.
— Last round. Are you ready?
— Yes, ready!
— OK. Follow me. We go left.
— Wait, I need to heal. Cover me!
— I cover you. Go, go!
— Behind you! Two enemies!
— I see them… Nice shot!
— Need help, I'm low!
— On my way! Fall back to the tower!
— They are weak. Push now!
— We win! gg!
— gg, wp everyone. Thank you, you are a great team.`
      }
    ],
    practice: [
      { t: 'choice', q: 'brb =', o: ['сейчас вернусь', 'удачи', 'хорошая игра'], a: 0 },
      { t: 'choice', q: 'afk значит, что игрок…', o: ['лагает', 'отошёл от компьютера', 'сдаётся'], a: 1 },
      { t: 'choice', q: 'Что пишут в начале матча?', o: ['gg', 'glhf', 'brb'], a: 1 },
      { t: 'choice', q: 'Cover me! =', o: ['За мной!', 'Прикрой меня!', 'Подожди меня!'], a: 1 },
      { t: 'choice', q: 'Какое слово грубо сказать о другом игроке?', o: ['teammate', 'noob', 'wp'], a: 1 },
      { t: 'choice', q: 'Правильно:', o: ['Can you to heal me?', 'Can you heal me?', 'Can you healing me?'], a: 1 },
      { t: 'gap', q: '___ me! I know the way. (за мной)', a: ['follow'] },
      { t: 'gap', q: 'On my ___! (уже бегу)', a: ['way'] },
      { t: 'gap', q: 'Look out, ___ you! (сзади)', a: ['behind'] },
      { t: 'gap', q: '___ you repeat, please?', a: ['can', 'could'] },
      { t: 'gap', q: 'They need to ___ this gun. (ослабить)', a: ['nerf'] },
      { t: 'order', a: 'Sorry my English is bad', ru: 'Извините, у меня плохой английский' },
      { t: 'order', a: 'Can you write it in chat', ru: 'Можешь написать это в чат?' },
      { t: 'tr', q: 'Нужна помощь!', a: ['need help', 'i need help'] },
      { t: 'tr', q: 'Можешь подождать?', a: ['can you wait', 'could you wait'] },
      { t: 'listen', say: 'Nice shot', a: ['nice shot'] }
    ],
    test: [
      { t: 'choice', q: 'gg wp — это…', o: ['«хорошая игра, хорошо сыграно»', '«удачи, веселись»', '«сейчас вернусь»'], a: 0 },
      { t: 'choice', q: 'This skill is so op! Значит, навык…', o: ['слабый', 'слишком сильный', 'новый'], a: 1 },
      { t: 'choice', q: 'queue =', o: ['очередь на матч', 'ранг', 'лобби'], a: 0 },
      { t: 'choice', q: 'Fall back! =', o: ['Давим!', 'Отходим!', 'Прыгай!'], a: 1 },
      { t: 'gap', q: 'Wait for ___. (возрождения)', a: ['respawn'] },
      { t: 'gap', q: 'Sorry, I have ___. (лагает)', a: ['lag'] },
      { t: 'gap', q: 'Can you ___ me? (полечить)', a: ['heal'] },
      { t: 'order', a: 'Can you repeat please', ru: 'Можешь повторить, пожалуйста?' },
      { t: 'tr', q: 'Я не понимаю.', a: ['i don\'t understand', 'i do not understand', 'sorry i don\'t understand'] },
      { t: 'tr', q: 'Можно к вам?', a: ['can i join', 'could i join', 'can i join you', 'can i join your team'] },
      { t: 'listen', say: 'Follow me, I am on my way', a: ['follow me i am on my way', 'follow me i\'m on my way'] }
    ]
  }
);
