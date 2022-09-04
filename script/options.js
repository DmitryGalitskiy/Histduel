'use strict';
// упрощение document.getElementById
let darkTheme = localStorage.getItem ('darkThemeSaved') || "disable",
    addRightAnswer = localStorage.getItem ('addRightAnswerSaved') || "enable";

function get(item){
  return document.getElementById(item);
}

function getClass(item){
  return document.getElementsByClassName(item);
}

get("switchDarkTheme").onclick = function () {
  if (darkTheme == "enable") {
    darkTheme = "disable";
    localStorage.setItem ('darkThemeSaved', darkTheme);
    location.reload();
  } else {
    darkTheme = "enable";
    localStorage.setItem ('darkThemeSaved', darkTheme);
    location.reload();
  }
  drawCheckDarkTheme ();
};

get("switchRightAnswer").onclick = function () {
  if (addRightAnswer == "enable") {
    addRightAnswer = "disable";
    localStorage.setItem ('addRightAnswerSaved', addRightAnswer);
  } else {
    addRightAnswer = "enable";
    localStorage.setItem ('addRightAnswerSaved', addRightAnswer);
  }
  drawCheckRightAnswer ();
};

function drawCheckDarkTheme () {
  if (darkTheme == "enable") {
    get("switchDarkTheme").style.backgroundImage = 'url(../images/check.svg)';
    get("switchDarkTheme").style.backgroundColor = '#6DB0FF';
  } else {
    get("switchDarkTheme").style.backgroundImage = 'none';
    get("switchDarkTheme").style.backgroundColor = 'transparent';
  }
}

function drawCheckRightAnswer () {
  if (addRightAnswer == "enable") {
    get("switchRightAnswer").style.backgroundImage = 'url(../images/check.svg)';
    get("switchRightAnswer").style.backgroundColor = '#6DB0FF';
  } else {
    get("switchRightAnswer").style.backgroundImage = 'none';
    get("switchRightAnswer").style.backgroundColor = 'transparent';
  }
}

// отрисовка галочек
drawCheckDarkTheme ();
drawCheckRightAnswer ();
// кнопки обратной связи

get("VK").onclick = function () {
  window.open ('https://vk.com/histduel');
};

get("Feedback").onclick = function () {
  window.open ('https://forms.yandex.ru/u/62ffd1acc64c2845e41e0e4a/');
};

// кнопки меню
get("buttonDuel").onclick = function () {
  location.href = '../index.html';
};

get("buttonPersons").onclick = function () {
  location.href = 'characters.html';
};

get("buttonStatistic").onclick = function () {
  location.href = 'statistics.html';
};

// кнопка очистки данных и модальное окно
get("resetDataButton").onclick = function() {
  get("windowUp").showModal();
};

get("buttonYes").onclick = function() {
  localStorage.clear();
  location.reload();
};

get("buttonNo").onclick = function() {
  get("windowUp").close();
};

// темная тема
if (darkTheme == "enable") {
  document.body.style.backgroundColor = '#040631';
  get("menu").style.backgroundColor = '#282C50';
  get("menu").style.boxShadow= '0px -3px 15px rgb(26 28 59)';

  document.getElementsByClassName ("wrapper")[0].style.backgroundColor = '#282C50';
  document.getElementsByClassName ("wrapper")[0].style.color = 'white';

  document.getElementsByClassName ("textChoosePerson")[0].style.borderBottom = "1px solid #8386AB";
  document.getElementsByClassName ("textChoosePerson")[1].style.borderBottom = "1px solid #8386AB";

  get("windowUp").style.backgroundColor = '#2E3856';
  get("windowUp").style.color = 'white';
}