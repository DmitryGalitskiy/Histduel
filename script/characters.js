'use strict';
const darkTheme = localStorage.getItem ('darkThemeSaved') || "disable"; // темная тема

// упрощение document.getElementById
function get(item){
  return document.getElementById(item);
}

// конструктор героев
class Heroes {
  constructor (name, health, img, damageMin, damageMax, level, page) {
    this.name = name;
    this.health = health;
    this.img = img;
    this.damageMin = damageMin;
    this.damageMax = damageMax;
    this.level = level;
    this.page = page;
  }
}

// герои
const Donskoy = new Heroes("Дмитрий Донской", 50, 'images/Donskoy.png', 6, 8, 0),
      Petr1 = new Heroes ("Пётр I", 65, 'images/Petr1.png', 7, 9, 50),
      Alexander1 = new Heroes ("Александр I", 80, 'images/Alexander1.png', 8, 10, 120),
      Stalin = new Heroes ("Иосиф Сталин", 100, 'images/Stalin.png', 9, 11, 200);

// конструктор врагов
 class Enemies {
  constructor (name, health, img, damageMin, damageMax, level, page) {
    this.name = name;
    this.health = health;
    this.img = img;
    this.damageMin = damageMin;
    this.damageMax = damageMax;
    this.level = level;
    this.page = page;
    }
}

// враги
const Mamai = new Enemies("Мамай", 50, 'images/Mamai.png', 5, 7, 0),
      Karl12 = new Enemies("Карл XII", 65, 'images/Karl12.png', 6, 8, 20),
      Napoleon = new Enemies ("Наполеон I", 80, 'images/Napoleon.png', 7, 9, 80),
      Hitler = new Enemies ("Адольф Гитлер", 100, 'images/Hitler.png', 8, 10, 160);

// выбранный герой и противник
let currentHero = JSON.parse (localStorage.getItem ('currentHeroSaved')) || Donskoy,
    currentEnemy = JSON.parse (localStorage.getItem ('currentEnemySaved')) || Mamai;

// добавление выбранного героя в память
function addStorageHero (item) {
  currentHero = item;
  localStorage.setItem('currentHeroSaved', JSON.stringify(currentHero));
}
// добавление выбранного противника в память
function addStorageEnemy (item) {
  currentEnemy = item;
  localStorage.setItem('currentEnemySaved', JSON.stringify(currentEnemy));
}

// проверка нажатий
get("Donskoy").onclick = function () {
  drawHero (Donskoy);
  if (stars >= Donskoy.level){
  addStorageHero (Donskoy);
  drawCheckHero ();
  }
};

get("Petr1").onclick = function () {
  drawHero (Petr1);
  if (stars >= Petr1.level){
  addStorageHero (Petr1);
  drawCheckHero ();
  }
};

get("Alexander1").onclick = function () {
  drawHero (Alexander1);
  if (stars >= Alexander1.level){
  addStorageHero (Alexander1);
  drawCheckHero ();
  }
};

get("Stalin").onclick = function () {
  drawHero (Stalin);
  if (stars >= Stalin.level){
  addStorageHero (Stalin);
  drawCheckHero ();
  }
};

get("Mamai").onclick = function () {
  drawEnemy (Mamai);
  if (stars >= Mamai.level){
    addStorageEnemy (Mamai);
    drawCheckEnemy ();
  }
};

get("Karl12").onclick = function () {
  drawEnemy (Karl12);
  if (stars >= Karl12.level){
    addStorageEnemy (Karl12);
    drawCheckEnemy ();
  }
};

get("Napoleon").onclick = function () {
  drawEnemy (Napoleon);
  if (stars >= Napoleon.level){
    addStorageEnemy (Napoleon);
    drawCheckEnemy ();
  }
};

get("Hitler").onclick = function () {
  drawEnemy (Hitler);
  if (stars >= Hitler.level){
    addStorageEnemy (Hitler);
    drawCheckEnemy ();
  }
};

// отрисовка героя
function drawHero (item) {
  get("hero").style.backgroundImage = 'url(../' + item.img + ')';
  get("heroName").innerHTML = item.name;
  get("heroHealth").innerHTML = 'Здоровье: <b>' + item.health;
  get("heroDamage").innerHTML = 'Сила: <b>' + item.damageMin + '-' + item.damageMax;
  if (stars >= item.level) {
    get("heroLvl").style.backgroundColor = '#27B24A'; // зеленый цвет
    get("heroLvl").innerHTML = 'Персонаж выбран';
  } else {
    get("heroLvl").style.backgroundColor = '#e22620'; // красный цвет
    get("heroLvl").innerHTML = `Нужно ★${item.level}`;
  }
}
// отрисовка противника
function drawEnemy (item) {
  get("enemy").style.backgroundImage = 'url(../' + item.img + ')';
  get("enemyName").innerHTML = item.name;
  get("enemyHealth").innerHTML = 'Здоровье: <b>' + item.health;
  get("enemyDamage").innerHTML = 'Сила: <b>' + item.damageMin + '-' + item.damageMax;
  if (stars >= item.level) {
    get("enemyLvl").style.backgroundColor = '#27B24A'; // зеленый цвет
    get("enemyLvl").innerHTML = 'Персонаж выбран';
  } else {
    get("enemyLvl").style.backgroundColor = '#e22620'; // красный цвет
    get("enemyLvl").innerHTML = `Нужно ★${item.level}`;
  }
  
}
//отрисовка галочек на выбранных героях
function drawCheckHero () {
  if (currentHero.name == "Дмитрий Донской") {
    get("checkDonskoy").style.backgroundImage = "url(../images/checkGreen.svg)";
    get("checkPetr1").style.backgroundImage = "none";
    get("checkAlexander1").style.backgroundImage = "none";
    get("checkStalin").style.backgroundImage = "none";
  }
  if (currentHero.name == "Пётр I") {
    get("checkDonskoy").style.backgroundImage = "none";
    get("checkPetr1").style.backgroundImage = "url(../images/checkGreen.svg)";
    get("checkAlexander1").style.backgroundImage = "none";
    get("checkStalin").style.backgroundImage = "none";
  }
  if (currentHero.name == "Александр I") {
    get("checkDonskoy").style.backgroundImage = "none";
    get("checkPetr1").style.backgroundImage = "none";
    get("checkAlexander1").style.backgroundImage = "url(../images/checkGreen.svg)";
    get("checkStalin").style.backgroundImage = "none";
  }
  if (currentHero.name == "Иосиф Сталин") {
    get("checkDonskoy").style.backgroundImage = "none";
    get("checkPetr1").style.backgroundImage = "none";
    get("checkAlexander1").style.backgroundImage = "none";
    get("checkStalin").style.backgroundImage = "url(../images/checkGreen.svg)";
  }
}
//отрисовка галочек на выбранных противников
function drawCheckEnemy () {
  if (currentEnemy.name == "Мамай") {
    get("checkMamai").style.backgroundImage = "url(../images/checkGreen.svg)";
    get("checkKarl12").style.backgroundImage = "none";
    get("checkNapoleon").style.backgroundImage = "none";
    get("checkHitler").style.backgroundImage = "none";
  }
  if (currentEnemy.name == "Карл XII") {
    get("checkMamai").style.backgroundImage = "none";
    get("checkKarl12").style.backgroundImage = "url(../images/checkGreen.svg)";
    get("checkNapoleon").style.backgroundImage = "none";
    get("checkHitler").style.backgroundImage = "none";
  }
  if (currentEnemy.name == "Наполеон I") {
    get("checkMamai").style.backgroundImage = "none";
    get("checkKarl12").style.backgroundImage = "none";
    get("checkNapoleon").style.backgroundImage = "url(../images/checkGreen.svg)";
    get("checkHitler").style.backgroundImage = "none";
  }
  if (currentEnemy.name == "Адольф Гитлер") {
    get("checkMamai").style.backgroundImage = "none";
    get("checkKarl12").style.backgroundImage = "none";
    get("checkNapoleon").style.backgroundImage = "none";
    get("checkHitler").style.backgroundImage = "url(../images/checkGreen.svg)";
  }
}

const stars = localStorage.getItem ('starsSaved') || 0; // количество звезд игрока

get("containerStars").innerHTML = `★${stars}`;

drawHero (currentHero); // отрисовка выбранного героя на странице
drawEnemy (currentEnemy); // отрисовка выбранного противника на странице
drawCheckHero (); // отрисовка галочек героя
drawCheckEnemy (); // отрисовка галочек противника

// кнопки меню
get("buttonStatistic").onclick = function () {
  location.href = 'statistics.html';
};

get("buttonDuel").onclick = function () {
  location.href = '../index.html';
};

get("buttonOptions").onclick = function () {
  location.href = 'options.html';
};

//темная тема
if (darkTheme == "enable") {
  document.body.style.backgroundColor = '#040631';
  get("menu").style.backgroundColor = '#282C50';
  get("menu").style.boxShadow= '0px -3px 15px rgb(26 28 59)';

  document.getElementsByClassName ("wrapper")[0].style.backgroundColor = '#282C50';
  document.getElementsByClassName ("wrapper")[0].style.color = 'white';

  document.getElementsByClassName ("text")[0].style.borderBottom = "1px solid #8386AB";
  document.getElementsByClassName ("text")[1].style.borderBottom = "1px solid #8386AB";

  document.getElementsByClassName ("name")[0].style.borderBottom = "1px solid #8386AB";
  document.getElementsByClassName ("name")[1].style.borderBottom = "1px solid #8386AB";
}