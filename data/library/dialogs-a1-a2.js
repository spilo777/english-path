window.LIBRARY = (window.LIBRARY || []).concat([
  // ===================== A1 =====================
  {
    id: 'dlg-a1-tavern', title: 'At the Tavern', level: 'A1', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'RPG · таверна',
    emoji: '🍺',
    ru: 'Уставший герой заходит в таверну и просит комнату, еду и немного слухов.',
    text: `Barkeep: Welcome, traveler! What do you want?
Hero: A room for the night, please.
Barkeep: A room is five gold coins.
Hero: Five? I have only three.
Barkeep: Then you can sleep in the barn.
Hero: With the cows? No, thank you.
Barkeep: Okay, okay. Three coins. And soup is free.
Hero: Great! What is in the soup?
Barkeep: Do not ask. Just eat it.
Hero: Hmm. Do you have any news?
Barkeep: Yes. A dragon lives in the old mountain.
Hero: Perfect. I love dragons. Good night!`,
    questions: [
      { q: 'How much is a room at first?', o: ['Three gold coins', 'Five gold coins', 'Ten gold coins'], a: 1 },
      { q: 'What is free?', o: ['The room', 'The soup', 'The barn'], a: 1 },
      { q: 'Where does the dragon live?', o: ['In the barn', 'In the tavern', 'In the old mountain'], a: 2 }
    ]
  },
  {
    id: 'dlg-a1-weapon-shop', title: 'The Weapon Merchant', level: 'A1', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'RPG · оружейная лавка',
    emoji: '⚔️',
    ru: 'Новичок выбирает первое оружие, а торговец пытается продать ему всё подряд.',
    text: `Merchant: Hello, hero! Look at my weapons!
Mira: Hi. I need a sword.
Merchant: This big sword is very strong.
Mira: It is too heavy. I can't lift it.
Merchant: Then take this small sword.
Mira: How much is it?
Merchant: Twenty gold. Do you want a shield too?
Mira: No, I have a shield.
Merchant: A helmet? Boots? A nice hat?
Mira: Only the sword, please.
Merchant: Okay. Here you are. Come back soon!
Mira: Thank you. Bye!`,
    questions: [
      { q: 'Why does Mira not take the big sword?', o: ['It is too expensive', 'It is too heavy', 'It is old'], a: 1 },
      { q: 'How much is the small sword?', o: ['Ten gold', 'Twenty gold', 'Fifty gold'], a: 1 },
      { q: 'What does Mira buy?', o: ['Only a sword', 'A sword and a shield', 'A sword and a hat'], a: 0 }
    ]
  },
  {
    id: 'dlg-a1-quest-giver', title: 'A Simple Quest', level: 'A1', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'RPG · деревня',
    emoji: '❗',
    ru: 'Старик в деревне даёт герою первое задание — очень «опасное».',
    text: `Old Man: Hero! Please help me!
Tom: Of course. What is the problem?
Old Man: Rats live in my cellar.
Tom: Rats? How many rats?
Old Man: Ten. They eat my cheese every day.
Tom: Okay. I can kill ten rats.
Old Man: Be careful. One rat is very big.
Tom: How big?
Old Man: Big like a horse.
Tom: Hmm. What is my reward?
Old Man: One hundred gold and my old boots.
Tom: Keep the boots. I go now!`,
    questions: [
      { q: 'Where do the rats live?', o: ['In the kitchen', 'In the cellar', 'In the barn'], a: 1 },
      { q: 'What do the rats eat?', o: ['Bread', 'Cheese', 'Apples'], a: 1 },
      { q: 'What does Tom not want?', o: ['The gold', 'The old boots', 'The quest'], a: 1 }
    ]
  },
  {
    id: 'dlg-a1-character-select', title: 'Choose Your Hero', level: 'A1', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Кооп · выбор персонажа',
    emoji: '🎮',
    ru: 'Два друга сидят на диване и выбирают персонажей перед кооперативной игрой.',
    text: `Sam: Okay, choose your character.
Lena: Who can I play?
Sam: A knight, a mage or an archer.
Lena: What does the mage do?
Sam: She casts fire and ice.
Lena: Cool! I take the mage.
Sam: Then I am the knight.
Lena: Can the knight heal?
Sam: No. He hits things. Very hard.
Lena: And who heals us?
Sam: Nobody. Buy potions!
Lena: Great plan. Press start!`,
    questions: [
      { q: 'Which character does Lena choose?', o: ['The knight', 'The mage', 'The archer'], a: 1 },
      { q: 'What does the knight do?', o: ['He heals', 'He casts ice', 'He hits things'], a: 2 },
      { q: 'Who can heal the team?', o: ['The mage', 'The knight', 'Nobody'], a: 2 }
    ]
  },
  {
    id: 'dlg-a1-farm', title: 'My First Farm', level: 'A1', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Симулятор фермы · поле',
    emoji: '🌱',
    ru: 'Соседка-фермер объясняет новичку, как сажать, поливать и продавать урожай.',
    text: `Rosa: Hi, neighbor! Is this your new farm?
Kai: Yes! But I don't know anything.
Rosa: It is easy. First, plant seeds.
Kai: Okay. What seeds do I have?
Rosa: Carrots and tomatoes.
Kai: Then what?
Rosa: Water them every day.
Kai: Every day? Even on Sunday?
Rosa: Yes. Plants don't have weekends.
Kai: And then I sell the carrots?
Rosa: Yes. The shop opens at nine.
Kai: Thanks, Rosa! You are very kind.`,
    questions: [
      { q: 'What seeds does Kai have?', o: ['Potatoes and corn', 'Carrots and tomatoes', 'Apples and pears'], a: 1 },
      { q: 'How often does Kai water the plants?', o: ['Every day', 'On Sunday', 'Every week'], a: 0 },
      { q: 'When does the shop open?', o: ['At seven', 'At eight', 'At nine'], a: 2 }
    ]
  },
  {
    id: 'dlg-a1-skin-shop', title: 'The Skin Shop', level: 'A1', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Онлайн-шутер · магазин скинов',
    emoji: '💎',
    ru: 'Игрок хочет купить редкий скин, а виртуальный продавец рассказывает о цене.',
    text: `Shop Bot: Welcome to the shop! New skins today!
Leo: Show me the gold dragon skin.
Shop Bot: Here it is. It is very rare.
Leo: It looks amazing! How much is it?
Shop Bot: Two thousand gems.
Leo: I have only five hundred gems.
Shop Bot: You can buy more gems.
Leo: For real money? No, thanks.
Shop Bot: This pink bunny skin is free.
Leo: A pink bunny? With a big gun?
Shop Bot: Yes. Everyone likes it.
Leo: Okay... give me the bunny.`,
    questions: [
      { q: 'How much is the gold dragon skin?', o: ['Five hundred gems', 'One thousand gems', 'Two thousand gems'], a: 2 },
      { q: 'How many gems does Leo have?', o: ['Five hundred', 'Two thousand', 'None'], a: 0 },
      { q: 'Which skin does Leo take?', o: ['The gold dragon', 'The pink bunny', 'No skin'], a: 1 }
    ]
  },
  {
    id: 'dlg-a1-training', title: 'Training Day', level: 'A1', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Экшен · обучение',
    emoji: '🎯',
    ru: 'Инструктор на тренировочной площадке учит новичка прыгать, бегать и стрелять.',
    text: `Coach: Welcome, rookie! Let's start the training.
Ben: I'm ready, sir!
Coach: Press space. You can jump.
Ben: Like this?
Coach: Good. Now hold shift and run.
Ben: I run fast!
Coach: Now look at the target. Shoot!
Ben: Oops. I hit the wall.
Coach: Try again. Aim at the red circle.
Ben: Yes! I hit it!
Coach: Well done. You can go to level one.`,
    questions: [
      { q: 'What button makes you jump?', o: ['Shift', 'Space', 'Enter'], a: 1 },
      { q: 'What does Ben hit first?', o: ['The target', 'The coach', 'The wall'], a: 2 },
      { q: 'Where can Ben go at the end?', o: ['To level one', 'To the shop', 'Home'], a: 0 }
    ]
  },
  {
    id: 'dlg-a1-gate-guard', title: 'The Gate Guard', level: 'A1', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'RPG · городские ворота',
    emoji: '🛡️',
    ru: 'Стражник не пускает героя в город без пропуска — но у героя есть пирожок.',
    text: `Guard: Stop! Who are you?
Nora: My name is Nora. I am a traveler.
Guard: The city is closed at night.
Nora: But I am cold and hungry.
Guard: Do you have a pass?
Nora: No. I don't have a pass.
Guard: Then you can't come in.
Nora: I have an apple pie. Do you like pie?
Guard: Hmm. I like pie very much.
Nora: Here. Take it.
Guard: Okay. Go in. Quickly!
Nora: Thank you. Enjoy your pie!`,
    questions: [
      { q: 'When is the city closed?', o: ['In the morning', 'At night', 'On Sunday'], a: 1 },
      { q: 'What does Nora not have?', o: ['A pie', 'A name', 'A pass'], a: 2 },
      { q: 'How does Nora get into the city?', o: ['She shows a pass', 'She gives the guard a pie', 'She fights the guard'], a: 1 }
    ]
  },

  // ===================== A2 =====================
  {
    id: 'dlg-a2-lobby', title: 'In the Match Lobby', level: 'A2', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Командный шутер · лобби онлайн-матча',
    emoji: '🎧',
    ru: 'Команда в голосовом чате обсуждает прошлый провал и план на новый матч.',
    text: `Max: Hi, team! Can everyone hear me?
Jin: Yes, loud and clear.
Ella: Hi. Sorry about the last match. My internet stopped.
Max: No problem. We lost, but it was fun.
Jin: Fun? The enemy team destroyed us in five minutes.
Max: Okay, it was a little bit fun.
Ella: So what are we going to do this time?
Max: I'm going to play the sniper. Jin, you're going to defend the base.
Jin: Again? Last time I stood there for ten minutes and nobody came.
Ella: And then everybody came at the same time.
Jin: Exactly. I didn't like that.
Max: Ella, you're going to heal us. Please stay behind me.
Ella: Got it. And this time I'm going to use a cable, not Wi-Fi.
Max: Great. The match starts in ten seconds. Good luck, everyone!`,
    questions: [
      { q: 'Why did Ella leave the last match?', o: ['She went to sleep', 'Her internet stopped', 'She was angry'], a: 1 },
      { q: 'What is Jin going to do?', o: ['Play the sniper', 'Heal the team', 'Defend the base'], a: 2 },
      { q: 'What is Ella going to use this time?', o: ['A cable', 'Wi-Fi', 'A new computer'], a: 0 }
    ]
  },
  {
    id: 'dlg-a2-racing', title: 'After the Race', level: 'A2', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Гонки · пит-лейн',
    emoji: '🏎️',
    ru: 'Механик и гонщица разбирают неудачный заезд и готовятся к следующему.',
    text: `Mechanic: Welcome back! How was the race?
Zoe: Terrible. I finished seventh.
Mechanic: Seventh? You started first! What happened?
Zoe: In the second lap it started to rain. I didn't change the tires.
Mechanic: I told you on the radio. Twice.
Zoe: I didn't hear you. The music was too loud.
Mechanic: You listen to music in the car?
Zoe: Only fast music. It helps me.
Mechanic: It didn't help today. Then what happened?
Zoe: I hit a wall in the last corner. The car lost a wheel.
Mechanic: I can see that. The car looks sad.
Zoe: Next time I'm going to listen to you. I promise.
Mechanic: Good. And I'm going to fix this car tonight.
Zoe: Thank you. Tomorrow I'm going to win.`,
    questions: [
      { q: 'What place did Zoe finish in?', o: ['First', 'Second', 'Seventh'], a: 2 },
      { q: 'Why didn\'t Zoe hear the mechanic?', o: ['The radio was broken', 'The music was too loud', 'It was raining'], a: 1 },
      { q: 'What is the mechanic going to do tonight?', o: ['Fix the car', 'Buy new music', 'Watch the race'], a: 0 }
    ]
  },
  {
    id: 'dlg-a2-coop-puzzle', title: 'Two Buttons, One Door', level: 'A2', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Кооп-головоломка · древний храм',
    emoji: '🧩',
    ru: 'Два игрока застряли у двери, которую открывают только две кнопки одновременно.',
    text: `Ivy: The door is still closed. What did you do?
Otto: I pressed the blue button. Nothing happened.
Ivy: I pressed the red button. Nothing happened too.
Otto: Maybe we need to press them at the same time.
Ivy: Good idea. Go to the blue button.
Otto: I'm there. Ready?
Ivy: Three, two, one... now!
Otto: The door opened! And then it closed again.
Ivy: Because you ran to the door. You left the button.
Otto: Oh. So one of us is going to stay here.
Ivy: Yes. Push that big box on the blue button.
Otto: The box is heavy... Done! It's on the button.
Ivy: Great. The door is open. Let's go!
Otto: I'm going to call you "the brain" from now on.`,
    questions: [
      { q: 'What happened when they pressed the buttons at different times?', o: ['The door opened', 'Nothing happened', 'The box moved'], a: 1 },
      { q: 'Why did the door close again?', o: ['Otto left the button', 'Ivy pressed red', 'The time ended'], a: 0 },
      { q: 'What did they put on the blue button?', o: ['A stone', 'A big box', 'Otto\'s bag'], a: 1 }
    ]
  },
  {
    id: 'dlg-a2-mmo-first-day', title: 'My First Day in the MMO', level: 'A2', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'MMO · стартовый город',
    emoji: '🌍',
    ru: 'Опытная игрок помогает новичку, который только что создал персонажа и уже потерялся.',
    text: `Kira: Hi! You look new. Do you need help?
Dan: Yes, please! I created my character an hour ago. Now I'm lost.
Kira: No problem. Where did you start?
Dan: Near a big tree. Then I followed a chicken.
Kira: You followed a chicken? Why?
Dan: It had a yellow mark above its head. I thought it was a quest.
Kira: That's just a funny chicken. Everybody follows it on the first day.
Dan: Great. So what am I going to do now?
Kira: First, you're going to talk to the captain in the town square.
Dan: And then?
Kira: Then you're going to get a free horse. Walking here is very slow.
Dan: A horse! Yesterday I walked for two hours in this game.
Kira: I know. I did the same thing last year.
Dan: Thanks, Kira. Can I add you as a friend?
Kira: Sure. And stay away from chickens!`,
    questions: [
      { q: 'When did Dan create his character?', o: ['Last year', 'Yesterday', 'An hour ago'], a: 2 },
      { q: 'Why did Dan follow the chicken?', o: ['He was hungry', 'He thought it was a quest', 'Kira told him to'], a: 1 },
      { q: 'What is Dan going to get after the captain?', o: ['A free horse', 'A sword', 'A chicken'], a: 0 }
    ]
  },
  {
    id: 'dlg-a2-boss', title: 'The Boss Talks Too Much', level: 'A2', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Экшен-RPG · тронный зал',
    emoji: '👹',
    ru: 'Тёмный лорд произносит длинную речь перед боем, а героиня теряет терпение.',
    text: `Dark Lord: So, you finally came to my castle, little hero.
Aria: Yes. It was a long walk. Your stairs are terrible.
Dark Lord: A hundred years ago, I was a simple farmer.
Aria: Oh no. Is this a long story?
Dark Lord: One day, I found a black crystal in my field.
Aria: And then you became evil. I understand.
Dark Lord: Don't interrupt me! The crystal gave me great power.
Aria: Okay. Sorry. Continue.
Dark Lord: I built this castle. I made an army of shadows.
Aria: The shadows didn't stop me. I passed them this morning.
Dark Lord: Enough! Now I'm going to destroy you!
Aria: Finally. I'm going to break your crystal.
Dark Lord: You can try, hero. Many heroes tried before you.
Aria: But they didn't have my new sword. Let's fight!`,
    questions: [
      { q: 'What was the Dark Lord a hundred years ago?', o: ['A king', 'A farmer', 'A hero'], a: 1 },
      { q: 'Where did he find the crystal?', o: ['In his field', 'In a castle', 'In a cave'], a: 0 },
      { q: 'What is Aria going to break?', o: ['The stairs', 'The castle door', 'The crystal'], a: 2 }
    ]
  },
  {
    id: 'dlg-a2-lost-pet', title: 'Where Is Biscuit?', level: 'A2', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Уютная RPG · лес у деревни',
    emoji: '🐱',
    ru: 'Девочка-NPC потеряла кота, и герой идёт по следам в лес.',
    text: `Lily: Excuse me! Did you see a small orange cat?
Hero: No, sorry. Is it your cat?
Lily: Yes. His name is Biscuit. He ran away this morning.
Hero: Where did you see him last time?
Lily: Near the bakery. He stole a fish and ran to the forest.
Hero: A cat thief. Okay, I'm going to look for him.
Lily: Thank you! He likes milk. Take this bottle.
Hero: Biscuit! Come here! I have milk!
Biscuit: Meow.
Hero: There you are! You're on a tree. Of course.
Lily: Did you find him?
Hero: Yes. But he isn't going to come down.
Lily: Show him the milk!
Hero: It worked! He jumped on my head.
Lily: He likes you! Here's your reward: a fresh bun from the bakery.`,
    questions: [
      { q: 'When did Biscuit run away?', o: ['Last night', 'This morning', 'Yesterday'], a: 1 },
      { q: 'What did Biscuit steal?', o: ['Milk', 'A bun', 'A fish'], a: 2 },
      { q: 'Where did the hero find the cat?', o: ['In the bakery', 'On a tree', 'Under a bridge'], a: 1 }
    ]
  },
  {
    id: 'dlg-a2-spaceport', title: 'Landing at the Spaceport', level: 'A2', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Космосим · космопорт',
    emoji: '🚀',
    ru: 'Пилот запрашивает посадку, а диспетчер вспоминает его прошлый визит.',
    text: `Control: Ship RX-7, this is Nova Station. What do you need?
Pilot: Nova Station, I need to land. My fuel is low.
Control: Wait a moment... RX-7. You visited us last month, right?
Pilot: Yes, that's me.
Control: Last month you landed on our cafe roof.
Pilot: That was an accident. My radar didn't work.
Control: Did you fix the radar?
Pilot: Yes, I bought a new one yesterday. It works perfectly.
Control: Okay. You're going to land on pad number four.
Pilot: Pad four. Not the cafe. Got it.
Control: Slow down, please. You're going too fast.
Pilot: Sorry. Landing now... Done!
Control: Nice landing, RX-7. Welcome to Nova Station.
Pilot: Thanks. And I'm going to buy a coffee at the cafe. Through the door this time.`,
    questions: [
      { q: 'Why does the pilot need to land?', o: ['His fuel is low', 'He is hungry', 'His ship is on fire'], a: 0 },
      { q: 'Where did the pilot land last month?', o: ['On pad four', 'On the cafe roof', 'In the sea'], a: 1 },
      { q: 'When did the pilot buy a new radar?', o: ['Last month', 'Today', 'Yesterday'], a: 2 }
    ]
  },
  {
    id: 'dlg-a2-find-key', title: 'Help Me Find the Key', level: 'A2', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Хоррор-квест · старый дом',
    emoji: '🗝️',
    ru: 'Двое игроков ищут ключ в жутком доме и вспоминают, где уже искали.',
    text: `Mia: We need the key for the basement. Where did you look?
Rob: I checked the kitchen and the bathroom. Nothing.
Mia: I looked in the bedroom. I found only an old doll.
Rob: A doll? Did it move?
Mia: No. Well... maybe a little.
Rob: Great. I hate this game.
Mia: Wait. There was a note in the kitchen. Did you read it?
Rob: Yes. It said, "The key sleeps with the fish."
Mia: Fish... The living room has an aquarium!
Rob: You're right. I saw it but I didn't look inside.
Mia: Okay, I'm going to check it. Watch the door.
Rob: Hurry. I heard steps upstairs.
Mia: Got it! The key was under a plastic castle.
Rob: Perfect. Now let's open the basement.
Mia: Are you going to go first?
Rob: No way. You found the key. You go first.`,
    questions: [
      { q: 'What did Mia find in the bedroom?', o: ['A key', 'An old doll', 'A note'], a: 1 },
      { q: 'Where was the note?', o: ['In the kitchen', 'In the bathroom', 'In the basement'], a: 0 },
      { q: 'Where was the key?', o: ['Under the bed', 'Under a plastic castle in the aquarium', 'In the doll'], a: 1 }
    ]
  }
]);
