'use strict';
// извлечение переменных из хранилища
const allMiddleAgeOge = localStorage.getItem ('allMiddleAgeOgeSaved'), // отвеченные вопросы
      rightMiddleAgeOge = localStorage.getItem ('rightMiddleAgeOgeSaved'),
      allModernTimesOge = localStorage.getItem ('allModernTimesOgeSaves'),
      rightModernTimesOge = localStorage.getItem ('rightModernTimesOgeSaves'),
      allMiddleAgeEge = localStorage.getItem ('allMiddleAgeEgeSaves'),
      rightMiddleAgeEge = localStorage.getItem ('rightMiddleAgeEgeSaves'),
      allModernTimesEge = localStorage.getItem ('allModernTimesEgeSaves'),
      rightModernTimesEge = localStorage.getItem ('rightModernTimesEgeSaves'),
      allRecentHistory = localStorage.getItem ('allRecentHistoryEgeSaves'),
      rightRecentHistory = localStorage.getItem ('rightRecentHistorySaves'),
      allGame = localStorage.getItem ('allGameSaved') || 0,
      winGame = localStorage.getItem ('winGameSaved') || 0,
      percentMiddleAgeOge = Math.round((rightMiddleAgeOge/allMiddleAgeOge) * 100) || 0,
      percentModernTimesOge = Math.round((rightModernTimesOge/allModernTimesOge) * 100) || 0,
      percentMiddleAgeEge = Math.round((rightMiddleAgeEge/allMiddleAgeEge) * 100) || 0,
      percentModernTimesEge = Math.round((rightModernTimesEge/allModernTimesEge) * 100) || 0,
      percentRecentHistory = Math.round((rightRecentHistory/allRecentHistory) * 100) || 0,
      percentWinGame = Math.round((winGame/allGame) * 100) || 0,
      stars = localStorage.getItem ('starsSaved') || 0, // количество звезд игрока
      сomplete = localStorage.getItem ('achievementCompleteSaved'), // проверка достижения 100%
      darkTheme = localStorage.getItem ('darkThemeSaved') || "disable"; // темная тема

// упрощение document.getElementById
function get(item){
  return document.getElementById(item);
}

// конструктор достижений
class Achievements {
  constructor (name, description, img, status) {
    this.name = name;
    this.description = description;
    this.img = img;
    this.status = status;
  }
}

// достижения
const achievementFirst = new Achievements("Первые шаги", 'Победить 5 раз',
      'images/achievements/boots.png', 'Ещё не открыто'),
      achievementComplete = new Achievements ("Без промаха!", '100% правильных ответов',
      'images/achievements/dart.png', 'Ещё не открыто'),
      achievementAllPersons = new Achievements ("Коллекционер", 'Открыть всех персонажей',
      'images/achievements/group.png', 'Ещё не открыто'),
      achievementGame = new Achievements ("Дуэлянт", 'Сыграть 100 дуэлей',
      'images/achievements/oneHundred.png', 'Ещё не открыто'),
      achievementMaster = new Achievements ("Мастер", 'Собрать ★500',
      'images/achievements/stars.png', 'Ещё не открыто');

// отрисовка карточки достижения
get("achievementFirst").onclick = function() {
  writeCard (achievementFirst);
  get("windowUpAchievement").showModal();
};

get("achievementComplete").onclick = function() {
  writeCard (achievementComplete);
  get("windowUpAchievement").showModal();
};

get("achievementAllPersons").onclick = function() {
  writeCard (achievementAllPersons);
  get("windowUpAchievement").showModal();
};

get("achievementGame").onclick = function() {
  writeCard (achievementGame);
  get("windowUpAchievement").showModal();
};

get("achievementMaster").onclick = function() {
  writeCard (achievementMaster);
  get("windowUpAchievement").showModal();
};

function writeCard (card){
  get("titleAchievement").innerHTML = card.name;
  get("achievementText").innerHTML = card.description;
  get("achievementImg").style.backgroundImage = 'url(../' + card.img + ')';
  get ("achievementTextStatus").innerHTML = card.status;
  if (card.status == "Открыто") {
    get("achievementTextStatus").style.backgroundColor = '#27B24A';
  } else {
    get("achievementTextStatus").style.backgroundColor = '#e22620';
  }
}

get("buttonClose").onclick = function() {
  get("windowUpAchievement").close();
};

// отрисовка статистики
get("MiddleAgeOge").innerHTML = percentMiddleAgeOge + '%';
get("ModernTimesOge").innerHTML = percentModernTimesOge + '%';
get("MiddleAgeEge").innerHTML = percentMiddleAgeEge + '%';
get("ModernTimesEge").innerHTML = percentModernTimesEge + '%';
get("RecentHistory").innerHTML = percentRecentHistory + '%';

get("MiddleAgeOgeFront").style.width = percentMiddleAgeOge + '%';
get("ModernTimesOgeFront").style.width = percentModernTimesOge + '%';
get("MiddleAgeEgeFront").style.width = percentMiddleAgeEge + '%';
get("ModernTimesEgeFront").style.width = percentModernTimesEge + '%';
get("RecentHistoryFront").style.width = percentRecentHistory + '%';

get("numberAllGame").innerHTML = allGame;
get("numberrWinGame").innerHTML = winGame;
get("numberPercentWinGame").innerHTML = percentWinGame + "%";

// кнопки меню
get("buttonDuel").onclick = function () {
  location.href = '../index.html';
};

get("buttonPersons").onclick = function () {
  location.href = 'characters.html';
};

get("buttonOptions").onclick = function () {
  location.href = 'options.html';
};
// проверка достижений
if (winGame >= 5) {
  achievementFirst.status = "Открыто";
  get("blockFirst").remove();
}
if (сomplete == "enable") {
  achievementComplete.status = "Открыто";
  get("blockComplete").remove();
}
if (allGame >= 100) {
  achievementGame.status = "Открыто";
  get("blockGame").remove();
}
if (stars >= 200){
  achievementAllPersons.status = "Открыто";
  get("blockAllPersons").remove();
}
if (stars >= 500){
  achievementMaster.status = "Открыто";
  get("blockMaster").remove();
}

// темная тема
if (darkTheme == "enable") {
  document.body.style.backgroundColor = '#040631';
  get("menu").style.backgroundColor = '#282C50';
  get("menu").style.boxShadow = '0px -3px 15px rgb(26 28 59)';

  document.getElementsByClassName ("wrapper")[0].style.backgroundColor = '#282C50';
  document.getElementsByClassName ("wrapper")[0].style.color = 'white';

  get("containerWinGame").style.borderLeft = "1px solid #8386AB";
  get("containerWinGame").style.borderRight = "1px solid #8386AB";

  get("containerButton").style.boxShadow = '0px 3px 15px rgb(26 28 59)';

  for (let i = 0; i < 5; i++){
    document.getElementsByClassName ("statBack")[i].style.backgroundColor = "#346195";
  }

  document.getElementsByClassName ("text")[0].style.borderBottom = "1px solid #8386AB";
  document.getElementsByClassName ("text")[1].style.borderBottom = "1px solid #8386AB";

  get("windowUpAchievement").style.backgroundColor = '#2E3856';
  get("windowUpAchievement").style.color = 'white';
  get("titleAchievement").style.borderBottom = "1px solid #8386AB";
}