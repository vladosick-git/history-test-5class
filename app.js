const themes = {
  people: {
    title: "Древнейшие люди",
    image: "images/ancient-people.jpg",
    icon: "camp"
  },
  hunting: {
    title: "Охота и собирательство",
    image: "images/hunting.jpg",
    icon: "spear"
  },
  gathering: {
    title: "Собирательство",
    image: "images/gathering.jpg",
    icon: "leaf"
  },
  tools: {
    title: "Орудия труда",
    image: "images/tools.jpg",
    icon: "tool"
  },
  fire: {
    title: "Костёр и огонь",
    image: "images/campfire.jpg",
    icon: "camp"
  },
  caveHome: {
    title: "Пещера",
    image: "images/cave.jpg",
    icon: "cave"
  },
  cave: {
    title: "Наскальные рисунки",
    image: "images/cave-painting.jpg",
    icon: "cave"
  },
  settlement: {
    title: "Стоянка древних людей",
    image: "images/settlement.jpg",
    icon: "home"
  },
  dwelling: {
    title: "Жилища и стоянки",
    image: "images/ancient-dwelling.jpg",
    icon: "home"
  },
  archaeology: {
    title: "Археология",
    image: "images/archaeology.jpg",
    icon: "brush"
  },
  farming: {
    title: "Земледелие",
    image: "images/early-farming.jpg",
    icon: "leaf"
  },
  herding: {
    title: "Скотоводство",
    image: "images/herding.jpg",
    icon: "leaf"
  },
  bronze: {
    title: "Бронзовые орудия",
    image: "images/bronze-tools.jpg",
    icon: "tool"
  },
  map: {
    title: "Карта и время",
    image: "images/timeline-map.jpg",
    icon: "map"
  }
};

const themeOrder = [
  "people", "hunting", "gathering", "tools", "fire", "caveHome", "cave",
  "archaeology", "settlement", "farming", "herding", "dwelling", "map", "bronze"
];

const questionThemes = [
  "people", "archaeology", "people", "tools", "tools",
  "gathering", "gathering", "hunting", "fire", "fire",
  "map", "map", "cave", "people", "cave",
  "cave", "cave", "people", "map", "farming",
  "farming", "herding", "settlement", "bronze", "farming"
];

const icons = {
  book: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"/><path d="M8 7h8"/><path d="M8 11h6"/></svg>',
  brush: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 11 6-6a2 2 0 0 1 3 3l-6 6"/><path d="M7 14c-2 0-3 1.5-3 3.5C4 19 3 20 2 21c3.5 0 6-1 6-4 0-1.2-.4-2.2-1-3z"/><path d="m14 7 3 3"/></svg>',
  camp: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c2.5 2.8 4 5.2 4 8a4 4 0 0 1-8 0c0-1.7.7-3.1 2-4.5"/><path d="M12 14c1-1.1 1.5-2.2 1.5-3.4"/><path d="M5 21h14"/><path d="m7 21 10-5"/><path d="m17 21-10-5"/></svg>',
  cave: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c1-7 4.5-16 9-16s8 9 9 16"/><path d="M8 21v-5a4 4 0 0 1 8 0v5"/><path d="M9 8h.01"/><path d="M15 8h.01"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m20 6-11 11-5-5"/></svg>',
  flag: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 22V4"/><path d="M5 4c3-2 6 2 9 0s5 0 5 0v10s-2-2-5 0-6-2-9 0"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V10l7-6 7 6v11"/><path d="M9 21v-6h6v6"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21c8-2 14-9 15-18-9 1-16 7-18 15"/><path d="M4 20c4-5 8-8 14-10"/></svg>',
  map: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3z"/><path d="M9 3v15"/><path d="M15 6v15"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 0 0-14.9-4"/><path d="M4 5v5h5"/><path d="M4 13a8 8 0 0 0 14.9 4"/><path d="M20 19v-5h-5"/></svg>',
  shuffle: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5"/><path d="M4 20 21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l5 5"/></svg>',
  spear: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4 4 20"/><path d="m15 3 6 6"/><path d="m18 6 3-3"/><path d="M6 18l-2 2"/></svg>',
  tool: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 7 7 14"/><path d="M5 16 3 21l5-2 11-11-3-3L5 16z"/><path d="m14 5 5 5"/></svg>'
};

function icon(name) {
  return icons[name] || icons.map;
}

function decorateStaticIcons() {
  document.querySelectorAll("[data-icon]").forEach((element) => {
    element.innerHTML = icon(element.dataset.icon);
  });
}

function renderThemeBoard() {
  const board = document.querySelector("#themeBoard");
  if (!board) {
    return;
  }

  board.innerHTML = themeOrder.map((key, index) => {
    const theme = themes[key];
    return `
      <article class="theme-card" style="animation-delay: ${index * 35}ms">
        <img src="${theme.image}" alt="${theme.title}">
        <span><span class="theme-icon" aria-hidden="true">${icon(theme.icon)}</span>${theme.title}</span>
      </article>
    `;
  }).join("");
}

const questions = [
  {
    text: "Где, по конспекту, жили древнейшие люди?",
    type: "single",
    explanation: "Древнейшие люди жили в жарких странах. Там не было морозов и холодных зим.",
    choices: [
      { text: "В холодных областях у ледников", correct: false },
      { text: "В жарких странах без морозов", correct: true },
      { text: "В городах с каменными стенами", correct: false },
      { text: "В земледельческих поселках у полей", correct: false }
    ]
  },
  {
    text: "Что нашли археологи в Восточной Африке?",
    type: "single",
    explanation: "В Восточной Африке нашли кости людей, которые жили более 2,5 миллиона лет назад.",
    choices: [
      { text: "Древние железные мечи", correct: false },
      { text: "Глиняные сосуды земледельцев", correct: false },
      { text: "Кости людей возрастом более 2,5 миллиона лет", correct: true },
      { text: "Первые письменные законы", correct: false }
    ]
  },
  {
    text: "Какие черты внешности были у древнейших людей? Выбери 2 ответа.",
    type: "multi",
    explanation: "В конспекте сказано, что древнейшие люди напоминали обезьян: у них были грубые черты лица и длинные руки.",
    choices: [
      { text: "Нависающие брови", correct: true },
      { text: "Длинные руки, свисавшие ниже колен", correct: true },
      { text: "Высокий прямой лоб", correct: false },
      { text: "Короткие руки, как у современного человека", correct: false }
    ]
  },
  {
    text: "Как древние люди делали первые каменные орудия?",
    type: "single",
    explanation: "Они ударяли один камень другим и получали острый край.",
    choices: [
      { text: "Отливали их из бронзы", correct: false },
      { text: "Лепили из мягкой глины", correct: false },
      { text: "Вырезали из дерева тонкими ножами", correct: false },
      { text: "Раскалывали гальку ударами другого камня", correct: true }
    ]
  },
  {
    text: "Для чего использовали первые орудия труда? Выбери 2 ответа.",
    type: "multi",
    explanation: "Простые орудия помогали добывать пищу: выкапывать корни и делать палки острее.",
    choices: [
      { text: "Выкапывать корни", correct: true },
      { text: "Заострять палки-копалки", correct: true },
      { text: "Пахать землю деревянным плугом", correct: false },
      { text: "Обменивать зерно на металл", correct: false }
    ]
  },
  {
    text: "Сопоставь занятие и объяснение.",
    type: "match",
    explanation: "Охота, собирательство и рыболовство относятся к присваивающему хозяйству: люди брали у природы готовую пищу.",
    pairs: [
      { left: "Собирательство", right: "Поиск съедобных растений, корней, ягод и плодов" },
      { left: "Охота", right: "Совместная добыча животных" },
      { left: "Рыболовство", right: "Ловля рыбы с помощью гарпунов и других орудий" },
      { left: "Присваивающее хозяйство", right: "Жизнь за счёт того, что даёт природа" }
    ]
  },
  {
    text: "Что могли собирать древние люди для еды?",
    type: "single",
    explanation: "Собирательство давало людям корни, ягоды, плоды, яйца птиц и улиток.",
    choices: [
      { text: "Корни, ягоды, плоды, яйца птиц и улиток", correct: true },
      { text: "Зерно с больших вспаханных полей", correct: false },
      { text: "Медную руду для мастерских", correct: false },
      { text: "Готовые товары с рынка", correct: false }
    ]
  },
  {
    text: "Как обычно проходила охота у первобытных людей?",
    type: "single",
    explanation: "Охота часто была общей: люди вместе загоняли зверей и выбирали ослабленных животных.",
    choices: [
      { text: "Каждый охотился отдельно и не помогал другим", correct: false },
      { text: "Люди вместе загоняли зверей и нападали на слабых животных", correct: true },
      { text: "Охотники использовали бронзовые колесницы", correct: false },
      { text: "Животных держали только в домашних загонах", correct: false }
    ]
  },
  {
    text: "Откуда первобытные люди сначала могли получать огонь?",
    type: "single",
    explanation: "Сначала огонь брали от природных источников, например после грозы или извержения вулкана.",
    choices: [
      { text: "Из природных источников: молнии или вулкана", correct: true },
      { text: "Из печей для выплавки железа", correct: false },
      { text: "Из гончарных мастерских", correct: false },
      { text: "От костров земледельческих поселений", correct: false }
    ]
  },
  {
    text: "Почему овладение огнем было важным? Выбери 2 ответа.",
    type: "multi",
    explanation: "Огонь согревал людей, помогал готовить пищу и отпугивал диких зверей.",
    choices: [
      { text: "На огне можно было готовить пищу", correct: true },
      { text: "Огонь давал тепло и защиту от зверей", correct: true },
      { text: "Огонь сразу сделал людей земледельцами", correct: false },
      { text: "Огонь заменил все каменные орудия", correct: false }
    ]
  },
  {
    text: "Как первобытные люди учились определять времена года?",
    type: "single",
    explanation: "Они наблюдали за солнцем и звездами, а потом появились первые календари.",
    choices: [
      { text: "По движению солнца и звезд", correct: true },
      { text: "По форме наконечника копья", correct: false },
      { text: "По количеству костей в жилище", correct: false },
      { text: "По цвету глиняного сосуда", correct: false }
    ]
  },
  {
    text: "Что помогало людям считать и измерять расстояния? Выбери 2 ответа.",
    type: "multi",
    explanation: "Для счета использовали пальцы, а расстояния могли измерять частями тела или путем за день.",
    choices: [
      { text: "Пальцы рук и ног", correct: true },
      { text: "Части тела", correct: true },
      { text: "Бронзовые монеты", correct: false },
      { text: "Письменные таблицы", correct: false }
    ]
  },
  {
    text: "Сопоставь понятие и объяснение.",
    type: "match",
    explanation: "Верования и искусство помогали древним людям объяснять мир и передавать важный опыт.",
    pairs: [
      { left: "Анимизм", right: "Вера в духов природы и предметов" },
      { left: "Тотемизм", right: "Вера в связь рода с животным или растением" },
      { left: "Петроглифы", right: "Древние рисунки, вырезанные на камне" },
      { left: "Альтамира", right: "Пещера с цветными наскальными рисунками" }
    ]
  },
  {
    text: "Почему с умершими клали орудия труда и оружие?",
    type: "single",
    explanation: "Люди думали, что душа после смерти продолжит жизнь в другом мире.",
    choices: [
      { text: "Потому что верили в загробный мир", correct: true },
      { text: "Чтобы быстрее построить новое жилище", correct: false },
      { text: "Чтобы отметить начало земледелия", correct: false },
      { text: "Потому что так считали времена года", correct: false }
    ]
  },
  {
    text: "Что такое тотемизм?",
    type: "single",
    explanation: "Тотемизм - это вера в особую связь рода с животным или растением.",
    choices: [
      { text: "Обряд добывания огня трением", correct: false },
      { text: "Вера в связь рода с животным или растением", correct: true },
      { text: "Способ обработки камня", correct: false },
      { text: "Переход к соседской общине", correct: false }
    ]
  },
  {
    text: "Чем известна пещера Альтамира?",
    type: "single",
    explanation: "В Альтамире сохранились цветные рисунки, сделанные первобытными людьми.",
    choices: [
      { text: "Цветными наскальными рисунками", correct: true },
      { text: "Самыми древними полями пшеницы", correct: false },
      { text: "Первой кузницей железного века", correct: false },
      { text: "Деревянным мостом без гвоздей", correct: false }
    ]
  },
  {
    text: "Что такое петроглифы?",
    type: "single",
    explanation: "Петроглифы - это древние изображения, вырезанные или выбитые на камне.",
    choices: [
      { text: "Первые домашние животные", correct: false },
      { text: "Древние рисунки на камнях", correct: true },
      { text: "Орудия для вспахивания земли", correct: false },
      { text: "Сосуды для хранения зерна", correct: false }
    ]
  },
  {
    text: "Как связаны род и племя?",
    type: "single",
    explanation: "Несколько родов могли объединяться в племя. У племени были общая территория, язык и обычаи.",
    choices: [
      { text: "Племя состояло из нескольких родов", correct: true },
      { text: "Род всегда состоял из нескольких племен", correct: false },
      { text: "Род и племя означали одно и то же", correct: false },
      { text: "Племя появилось только после железного века", correct: false }
    ]
  },
  {
    text: "Сопоставь общественное понятие и объяснение.",
    type: "match",
    explanation: "Род, племя и вождь показывают, как люди объединялись и управляли общими делами.",
    pairs: [
      { left: "Родовая община", right: "Коллектив кровных родственников с общим хозяйством" },
      { left: "Племя", right: "Объединение нескольких родов с общей территорией и обычаями" },
      { left: "Вождь", right: "Старейшина одного из родов, который руководил племенем" },
      { left: "Расы", right: "Большие группы людей с общими внешними признаками" }
    ]
  },
  {
    text: "Что означает переход к производящему хозяйству?",
    type: "single",
    explanation: "Люди стали не только брать готовое у природы, но и сами выращивать растения и разводить животных.",
    choices: [
      { text: "Переход от охоты и собирательства к земледелию и скотоводству", correct: true },
      { text: "Отказ от всех поселений и жилищ", correct: false },
      { text: "Переход от земледелия обратно к собирательству", correct: false },
      { text: "Появление только наскальных рисунков", correct: false }
    ]
  },
  {
    text: "Как, по конспекту, могло возникнуть земледелие?",
    type: "single",
    explanation: "Люди заметили, что упавшие в землю зерна прорастают, и стали выращивать растения.",
    choices: [
      { text: "Люди заметили, что зерна в земле прорастают", correct: true },
      { text: "Люди стали чаще наблюдать за стадами животных", correct: false },
      { text: "Люди начали обмениваться готовыми сосудами", correct: false },
      { text: "Люди научились делать более острые копья", correct: false }
    ]
  },
  {
    text: "Каких животных люди приручили? Выбери 2 ответа.",
    type: "multi",
    explanation: "В конспекте названы прирученные животные: свиньи, овцы, коровы и ослы.",
    choices: [
      { text: "Овец", correct: true },
      { text: "Коров", correct: true },
      { text: "Диких оленей", correct: false },
      { text: "Зубров", correct: false }
    ]
  },
  {
    text: "Сопоставь новое умение и его смысл.",
    type: "match",
    explanation: "В неолите появились ремесла и обмен: люди делали вещи, хранили продукты и менялись ими.",
    pairs: [
      { left: "Керамика", right: "Изготовление глиняной посуды" },
      { left: "Ткачество", right: "Изготовление ткани для одежды" },
      { left: "Ремесло", right: "Изготовление нужных вещей особым умением" },
      { left: "Обмен", right: "Передача изделий или продуктов между общинами" }
    ]
  },
  {
    text: "Что такое бронза?",
    type: "single",
    explanation: "Бронза - это сплав меди и олова. Из нее делали более прочные орудия.",
    choices: [
      { text: "Сплав меди и олова", correct: true },
      { text: "Острый камень для рубила", correct: false },
      { text: "Глина для сосудов", correct: false },
      { text: "Название соседской общины", correct: false }
    ]
  },
  {
    text: "Что изменилось при переходе от родовой общины к соседской? Выбери 2 ответа.",
    type: "multi",
    explanation: "В соседской общине отдельные семьи вели свое хозяйство. Из-за обмена и богатства появлялось имущественное неравенство.",
    choices: [
      { text: "У отдельных семей появлялись свои хозяйства", correct: true },
      { text: "Возникало имущественное неравенство", correct: true },
      { text: "Люди перестали жить рядом друг с другом", correct: false },
      { text: "Все орудия снова стали только каменными", correct: false }
    ]
  }
];

const quiz = document.querySelector("#quiz");
const answeredCount = document.querySelector("#answeredCount");
const totalCount = document.querySelector("#totalCount");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const result = document.querySelector("#result");
const resultPanel = document.querySelector("#resultPanel");
const materials = document.querySelector("#materials");
const letters = ["А", "Б", "В", "Г", "Д"];
let lastAutoScrollId = 0;
let activeItems = [];
let selectedMatchLeft = null;

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function shuffleChoices(choices) {
  return shuffle(choices);
}

function questionTheme(index) {
  return themes[questionThemes[index]] || themes.archaeology;
}

function buildItems(shouldShuffleTasks = false) {
  const items = questions.map((question, index) => ({
    question,
    theme: questionTheme(index),
    originalIndex: index
  }));
  activeItems = shouldShuffleTasks ? shuffle(items) : items;
}

function renderChoiceTask(container, question, questionId) {
  const inputType = question.type === "multi" ? "checkbox" : "radio";
  const choices = shuffleChoices(question.choices);
  const answers = document.createElement("div");
  answers.className = "answers";

  choices.forEach((choice, choiceIndex) => {
    const id = `${questionId}-${choiceIndex}`;
    const row = document.createElement("div");
    row.className = `choice ${inputType === "checkbox" ? "checkbox" : "radio"}`;
    row.dataset.correct = String(choice.correct);
    row.innerHTML = `
      <input id="${id}" type="${inputType}" name="${questionId}" value="${choiceIndex}">
      <label for="${id}">
        <span class="mark">${letters[choiceIndex]}</span>
        <span class="choice-text">${choice.text}</span>
      </label>
    `;
    answers.append(row);
  });

  container.append(answers);
}

function renderMatchingTask(container, question, questionId) {
  const matching = document.createElement("div");
  matching.className = "matching";
  const leftItems = question.pairs.map((pair, index) => ({ ...pair, id: `${questionId}-pair-${index}` }));
  const rightItems = shuffle(leftItems.map((pair) => ({ id: pair.id, text: pair.right })));

  matching.innerHTML = `
    <svg class="match-lines" aria-hidden="true"></svg>
    <div class="match-column match-left" aria-label="Понятия"></div>
    <div class="match-column match-right" aria-label="Объяснения"></div>
    <div class="match-pairs" aria-live="polite"></div>
  `;

  const leftColumn = matching.querySelector(".match-left");
  const rightColumn = matching.querySelector(".match-right");

  leftItems.forEach((item, index) => {
    const button = document.createElement("button");
    button.className = "match-item match-left-item";
    button.type = "button";
    button.dataset.matchId = item.id;
    button.innerHTML = `<span class="match-mark">${letters[index]}</span><span>${item.left}</span>`;
    leftColumn.append(button);
  });

  rightItems.forEach((item, index) => {
    const button = document.createElement("button");
    button.className = "match-item match-right-item";
    button.type = "button";
    button.dataset.matchId = item.id;
    button.innerHTML = `<span class="match-mark">${index + 1}</span><span>${item.text}</span>`;
    rightColumn.append(button);
  });

  container.append(matching);
  renderMatchPairs(matching);
}

function renderQuiz(options = {}) {
  buildItems(Boolean(options.shuffleTasks));
  selectedMatchLeft = null;
  quiz.innerHTML = "";
  totalCount.textContent = activeItems.length;
  result.hidden = true;
  result.textContent = "";
  resultPanel.classList.remove("is-revealed");

  activeItems.forEach((item, questionIndex) => {
    const { question, theme } = item;
    const questionId = `q${questionIndex}`;
    const article = document.createElement("article");
    article.className = "question";
    article.dataset.questionId = questionId;
    article.dataset.questionIndex = String(questionIndex);
    article.dataset.type = question.type;
    article.style.animationDelay = `${Math.min(questionIndex, 10) * 35}ms`;

    const correctCount = question.type === "match"
      ? question.pairs.length
      : question.choices.filter((choice) => choice.correct).length;
    const helpText = question.type === "match"
      ? "Соедини пары"
      : question.type === "multi"
        ? `Выбери ${correctCount} ответа`
        : "Выбери 1 ответ";

    article.innerHTML = `
      <div class="question-media" aria-hidden="true">
        <img src="${theme.image}" alt="">
        <span class="question-theme"><span class="theme-icon">${icon(theme.icon)}</span>${theme.title}</span>
      </div>
      <div class="question-body">
        <div class="question-top">
          <span class="tag"><span class="tag-icon" aria-hidden="true">${icon("map")}</span>Вопрос ${questionIndex + 1} из ${activeItems.length}</span>
          <span class="tag choice-mode"><span class="tag-icon" aria-hidden="true">${icon(question.type === "match" ? "shuffle" : question.type === "multi" ? "check" : "flag")}</span>${helpText}</span>
        </div>
        <h2>${question.text}</h2>
        <div class="task-area"></div>
        <p class="feedback" aria-live="polite"></p>
      </div>
    `;

    const taskArea = article.querySelector(".task-area");
    if (question.type === "match") {
      renderMatchingTask(taskArea, question, questionId);
    } else {
      renderChoiceTask(taskArea, question, questionId);
    }

    quiz.append(article);
  });

  updateProgress();
  requestAnimationFrame(updateAllMatchLines);
}

function matchingElement(questionElement) {
  return questionElement.querySelector(".matching");
}

function getMatchPairs(matching) {
  return [...matching.querySelectorAll(".match-left-item")]
    .filter((left) => left.dataset.matchRight)
    .map((left) => ({
      leftId: left.dataset.matchId,
      rightId: left.dataset.matchRight,
      leftText: left.querySelector("span:last-child").textContent,
      rightText: matching.querySelector(`.match-right-item[data-match-id="${left.dataset.matchRight}"] span:last-child`)?.textContent || ""
    }));
}

function renderMatchPairs(matching) {
  const list = matching.querySelector(".match-pairs");
  const pairs = getMatchPairs(matching);

  if (!pairs.length) {
    list.innerHTML = "<p class=\"match-empty\">Выбери карточку слева, потом подходящую карточку справа.</p>";
  } else {
    list.innerHTML = pairs.map((pair) => `
      <div class="match-pair-card" data-left-id="${pair.leftId}" data-right-id="${pair.rightId}">
        <span>${pair.leftText}</span>
        <span class="match-arrow">→</span>
        <span>${pair.rightText}</span>
      </div>
    `).join("");
  }

  updateMatchLines(matching);
}

function updateMatchLines(matching) {
  const svg = matching.querySelector(".match-lines");
  if (!svg) {
    return;
  }

  const rect = matching.getBoundingClientRect();
  svg.setAttribute("viewBox", `0 0 ${rect.width} ${rect.height}`);
  svg.innerHTML = "";

  getMatchPairs(matching).forEach((pair) => {
    const left = matching.querySelector(`.match-left-item[data-match-id="${pair.leftId}"]`);
    const right = matching.querySelector(`.match-right-item[data-match-id="${pair.rightId}"]`);
    if (!left || !right) {
      return;
    }

    const leftRect = left.getBoundingClientRect();
    const rightRect = right.getBoundingClientRect();
    const x1 = leftRect.right - rect.left;
    const y1 = leftRect.top + leftRect.height / 2 - rect.top;
    const x2 = rightRect.left - rect.left;
    const y2 = rightRect.top + rightRect.height / 2 - rect.top;
    const mid = Math.max(36, Math.abs(x2 - x1) / 2);
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    path.setAttribute("d", `M ${x1} ${y1} C ${x1 + mid} ${y1}, ${x2 - mid} ${y2}, ${x2} ${y2}`);
    path.classList.add("match-line");
    if (matching.closest(".question").classList.contains("checked")) {
      path.classList.add(pair.leftId === pair.rightId ? "correct" : "wrong");
    }
    svg.append(path);
  });
}

function updateAllMatchLines() {
  document.querySelectorAll(".matching").forEach(updateMatchLines);
}

function getQuestionState(questionElement) {
  if (questionElement.dataset.type === "match") {
    const matching = matchingElement(questionElement);
    const leftItems = [...matching.querySelectorAll(".match-left-item")];
    const pairs = getMatchPairs(matching);
    const isAnswered = pairs.length === leftItems.length;
    const isCorrect = isAnswered && pairs.every((pair) => pair.leftId === pair.rightId);
    return { inputs: [], selected: pairs, correctInputs: leftItems, isAnswered, isCorrect, pairs };
  }

  const inputs = [...questionElement.querySelectorAll("input")];
  const selected = inputs.filter((input) => input.checked);
  const correctInputs = inputs.filter((input) => input.closest(".choice").dataset.correct === "true");
  const selectedSet = new Set(selected);
  const isMulti = inputs[0]?.type === "checkbox";
  const isAnswered = isMulti ? selected.length === correctInputs.length : selected.length > 0;
  const isCorrect = isAnswered
    && selected.length === correctInputs.length
    && correctInputs.every((input) => selectedSet.has(input));
  return { inputs, selected, correctInputs, isAnswered, isCorrect };
}

function updateProgress() {
  const questionElements = [...document.querySelectorAll(".question")];
  const answered = questionElements.filter((questionElement) => getQuestionState(questionElement).isAnswered).length;
  const percent = questionElements.length ? Math.round((answered / questionElements.length) * 100) : 0;
  answeredCount.textContent = answered;
  progressText.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
}

function correctAnswerText(questionElement) {
  return [...questionElement.querySelectorAll(".choice")]
    .filter((choice) => choice.dataset.correct === "true")
    .map((choice) => choice.querySelector(".choice-text").textContent)
    .join("; ");
}

function clearQuestionFeedback(questionElement) {
  const feedback = questionElement.querySelector(".feedback");

  questionElement.classList.remove("checked");
  questionElement.classList.remove("locked");
  questionElement.removeAttribute("data-state");

  if (questionElement.dataset.type === "match") {
    questionElement.querySelectorAll(".match-item").forEach((item) => {
      item.disabled = false;
      item.classList.remove("active", "paired", "correct", "wrong");
      if (item.classList.contains("match-left-item")) {
        delete item.dataset.matchRight;
      }
      if (item.classList.contains("match-right-item")) {
        delete item.dataset.matchLeft;
      }
    });
    questionElement.querySelectorAll(".match-pair-card").forEach((card) => {
      card.classList.remove("correct", "wrong");
    });
    renderMatchPairs(matchingElement(questionElement));
  }

  questionElement.querySelectorAll(".choice").forEach((choice) => {
    choice.classList.remove("correct", "wrong-selected");
    choice.querySelector("input").disabled = false;
  });

  if (feedback) {
    feedback.className = "feedback";
    feedback.textContent = "";
  }
}

function showQuestionFeedback(questionElement, index) {
  const state = getQuestionState(questionElement);
  const feedback = questionElement.querySelector(".feedback");
  const question = activeItems[index].question;

  questionElement.classList.add("checked");
  questionElement.classList.add("locked");

  if (question.type === "match") {
    const matching = matchingElement(questionElement);
    matching.querySelectorAll(".match-item").forEach((item) => {
      item.disabled = true;
      item.classList.remove("active");
    });
    getMatchPairs(matching).forEach((pair) => {
      const isCorrectPair = pair.leftId === pair.rightId;
      matching.querySelector(`.match-left-item[data-match-id="${pair.leftId}"]`)?.classList.add(isCorrectPair ? "correct" : "wrong");
      matching.querySelector(`.match-right-item[data-match-id="${pair.rightId}"]`)?.classList.add(isCorrectPair ? "correct" : "wrong");
      matching.querySelector(`.match-pair-card[data-left-id="${pair.leftId}"]`)?.classList.add(isCorrectPair ? "correct" : "wrong");
    });
    updateMatchLines(matching);

    if (state.isCorrect) {
      questionElement.dataset.state = "correct";
      feedback.className = "feedback good";
      feedback.textContent = `Верно. ${question.explanation}`;
    } else {
      questionElement.dataset.state = "wrong";
      feedback.className = "feedback try";
      const prefix = state.isAnswered ? "Есть ошибка в сопоставлении." : "Ты пока не соединил все пары.";
      feedback.textContent = `${prefix} ${question.explanation}`;
    }

    return state;
  }

  questionElement.querySelectorAll(".choice").forEach((choice) => {
    const input = choice.querySelector("input");
    const isCorrectChoice = choice.dataset.correct === "true";
    choice.classList.toggle("correct", isCorrectChoice);
    choice.classList.toggle("wrong-selected", input.checked && !isCorrectChoice);
    input.disabled = true;
  });

  if (state.isCorrect) {
    questionElement.dataset.state = "correct";
    feedback.className = "feedback good";
    feedback.textContent = `Верно. ${question.explanation}`;
  } else {
    questionElement.dataset.state = "wrong";
    feedback.className = "feedback try";
    const prefix = state.isAnswered ? "Пока неверно." : "Ты пока не выбрал ответ.";
    feedback.textContent = `${prefix} Правильно: ${correctAnswerText(questionElement)}. ${question.explanation}`;
  }

  return state;
}

function gradeForScore(score) {
  if (score >= 22) {
    return { mark: 5, text: "Отлично!" };
  }
  if (score >= 18) {
    return { mark: 4, text: "Хорошо, но можно повторить ошибки" };
  }
  if (score >= 13) {
    return { mark: 3, text: "Зачёт, но тему лучше повторить" };
  }
  return { mark: 2, text: "Нужно ещё раз пройти тему" };
}

function checkQuiz() {
  const questionElements = [...document.querySelectorAll(".question")];
  let score = 0;
  let answered = 0;

  questionElements.forEach((questionElement, index) => {
    const state = showQuestionFeedback(questionElement, index);
    if (state.isAnswered) {
      answered += 1;
    }
    if (state.isCorrect) {
      score += 1;
    }
  });

  const total = questionElements.length;
  const wrong = total - score;
  const percent = total ? Math.round((score / total) * 100) : 0;
  const grade = gradeForScore(score);
  resultPanel.classList.add("is-revealed");
  result.hidden = false;
  result.innerHTML = `
    <div class="result-grid">
      <span><strong>Правильно:</strong> ${score} из ${total}</span>
      <span><strong>Ошибок:</strong> ${wrong}</span>
      <span><strong>Результат:</strong> ${percent}%</span>
      <span><strong>Оценка:</strong> ${grade.mark} — ${grade.text}</span>
      <span><strong>Отвечено:</strong> ${answered} из ${total}</span>
    </div>
  `;
  result.scrollIntoView({ behavior: "smooth", block: "center" });
}

function animatePickedChoice(input) {
  const choice = input.closest(".choice");
  if (!choice) {
    return;
  }

  choice.classList.remove("just-picked");
  requestAnimationFrame(() => {
    choice.classList.add("just-picked");
    window.setTimeout(() => choice.classList.remove("just-picked"), 260);
  });
}

function scrollToNextQuestion(questionElement) {
  const nextQuestion = questionElement.nextElementSibling;
  if (!nextQuestion) {
    return;
  }

  const scrollId = Date.now();
  lastAutoScrollId = scrollId;
  window.setTimeout(() => {
    if (lastAutoScrollId === scrollId) {
      nextQuestion.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, 520);
}

function connectMatchPair(questionElement, left, right) {
  const matching = matchingElement(questionElement);
  const oldRightId = left.dataset.matchRight;
  const oldLeftId = right.dataset.matchLeft;

  if (oldRightId) {
    const oldRight = matching.querySelector(`.match-right-item[data-match-id="${oldRightId}"]`);
    oldRight?.classList.remove("paired");
    if (oldRight) {
      delete oldRight.dataset.matchLeft;
    }
  }

  if (oldLeftId) {
    const oldLeft = matching.querySelector(`.match-left-item[data-match-id="${oldLeftId}"]`);
    oldLeft?.classList.remove("paired");
    if (oldLeft) {
      delete oldLeft.dataset.matchRight;
    }
  }

  left.dataset.matchRight = right.dataset.matchId;
  right.dataset.matchLeft = left.dataset.matchId;
  left.classList.add("paired");
  right.classList.add("paired");
  matching.querySelectorAll(".match-item").forEach((item) => item.classList.remove("active"));
  selectedMatchLeft = null;
  renderMatchPairs(matching);
}

function handleMatchClick(event) {
  const button = event.target.closest(".match-item");
  if (!button) {
    return;
  }

  const questionElement = button.closest(".question");
  if (!questionElement || questionElement.classList.contains("locked")) {
    return;
  }

  const matching = matchingElement(questionElement);
  if (button.classList.contains("match-left-item")) {
    matching.querySelectorAll(".match-left-item").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    selectedMatchLeft = button;
    return;
  }

  if (!selectedMatchLeft || selectedMatchLeft.closest(".question") !== questionElement) {
    matching.querySelectorAll(".match-right-item").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    return;
  }

  connectMatchPair(questionElement, selectedMatchLeft, button);
  const state = getQuestionState(questionElement);
  updateProgress();
  if (state.isAnswered) {
    showQuestionFeedback(questionElement, Number(questionElement.dataset.questionIndex));
    scrollToNextQuestion(questionElement);
  }
}

document.querySelector("#checkButton").addEventListener("click", checkQuiz);
document.querySelector("#shuffleButton").addEventListener("click", () => renderQuiz({ shuffleTasks: true }));
document.querySelector("#resetButton").addEventListener("click", () => {
  renderQuiz();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.querySelector("#showMaterialsButton").addEventListener("click", () => {
  materials.open = true;
  materials.scrollIntoView({ behavior: "smooth", block: "start" });
});
quiz.addEventListener("click", handleMatchClick);
quiz.addEventListener("change", (event) => {
  if (!(event.target instanceof HTMLInputElement)) {
    return;
  }

  animatePickedChoice(event.target);

  const questionElement = event.target.closest(".question");
  if (questionElement) {
    if (questionElement.classList.contains("locked")) {
      return;
    }

    const index = Number(questionElement.dataset.questionIndex);

    if (event.target.type === "checkbox" && event.target.checked) {
      const state = getQuestionState(questionElement);
      if (state.selected.length > state.correctInputs.length) {
        event.target.checked = false;
      }
    }

    const nextState = getQuestionState(questionElement);
    if (nextState.selected.length === nextState.correctInputs.length) {
      showQuestionFeedback(questionElement, index);
      scrollToNextQuestion(questionElement);
    } else {
      clearQuestionFeedback(questionElement);
    }
  }

  updateProgress();
});

window.addEventListener("resize", updateAllMatchLines);

decorateStaticIcons();
renderThemeBoard();
renderQuiz();
