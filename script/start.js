'use strict';
// извлечение переменных из хранилища
const currentHero = JSON.parse (localStorage.getItem ('currentHeroSaved')) || {img: 'images/Donskoy.png'},
      currentEnemy = JSON.parse (localStorage.getItem ('currentEnemySaved')) || {img: 'images/Mamai.png'},
      darkTheme = localStorage.getItem ('darkThemeSaved') || "disable"; // темная тема

let switchResultTag = JSON.parse (localStorage.getItem ('switchResultTagSaved')) ||
    ['Древность и Средневековье (ОГЭ)', 'Новое время (ОГЭ)', 'Древность и Средневековье (ЕГЭ)',
    'Новое время (ЕГЭ)', 'Новейшая история (ЕГЭ)'],
    imgHero =  currentHero.img,
    imgEnemy = currentEnemy.img;

drawCheck (); // отрисовка галочек
drawPersons (); // отрисовка персонажей

// упрощение document.getElementById
function get(item){
  return document.getElementById(item);
}

// удаление данных из массива
function deleteOption (arr, item){
  let indexDelete = arr.indexOf(item, 0);
  arr.splice(indexDelete, 1);
}

// проверка нажатий
get("switchMiddleAgeOge").onclick = function () {
  if (switchResultTag.includes ('Древность и Средневековье (ОГЭ)', 0) == true) {
    deleteOption (switchResultTag, 'Древность и Средневековье (ОГЭ)');
    localStorage.setItem('switchResultTagSaved', JSON.stringify(switchResultTag));
  } else {
    switchResultTag.push('Древность и Средневековье (ОГЭ)');
    localStorage.setItem('switchResultTagSaved', JSON.stringify(switchResultTag));
  }
    drawCheck ();
};

get("switchModernTimesOge").onclick = function () {
  if (switchResultTag.includes ('Новое время (ОГЭ)', 0) == true) {
    deleteOption (switchResultTag, 'Новое время (ОГЭ)');
    localStorage.setItem('switchResultTagSaved', JSON.stringify(switchResultTag));
  } else {
    switchResultTag.push('Новое время (ОГЭ)');
    localStorage.setItem('switchResultTagSaved', JSON.stringify(switchResultTag));
  }
    drawCheck ();
};

get("switchMiddleAgeEge").onclick = function () {
  if (switchResultTag.includes ('Древность и Средневековье (ЕГЭ)', 0) == true) {
    deleteOption (switchResultTag, 'Древность и Средневековье (ЕГЭ)');
    localStorage.setItem('switchResultTagSaved', JSON.stringify(switchResultTag));
  } else {
    switchResultTag.push('Древность и Средневековье (ЕГЭ)');
    localStorage.setItem('switchResultTagSaved', JSON.stringify(switchResultTag));
  }
    drawCheck ();
};

get("switchModernTimesEge").onclick = function () {
  if (switchResultTag.includes ('Новое время (ЕГЭ)', 0) == true) {
    deleteOption (switchResultTag, 'Новое время (ЕГЭ)');
    localStorage.setItem('switchResultTagSaved', JSON.stringify(switchResultTag));
  } else {
    switchResultTag.push('Новое время (ЕГЭ)');
    localStorage.setItem('switchResultTagSaved', JSON.stringify(switchResultTag));
  }
    drawCheck ();
};

get("switchRecentHistoryEge").onclick = function () {
  if (switchResultTag.includes ('Новейшая история (ЕГЭ)', 0) == true) {
    deleteOption (switchResultTag, 'Новейшая история (ЕГЭ)');
    localStorage.setItem('switchResultTagSaved', JSON.stringify(switchResultTag));
  } else {
    switchResultTag.push('Новейшая история (ЕГЭ)');
    localStorage.setItem('switchResultTagSaved', JSON.stringify(switchResultTag));
  }
    drawCheck ();
};

// проверка перед переходом к дуэли
get("containerPlayButton").onclick = function () {
  if (switchResultTag.length == 0) {
    get("windowUp").showModal();
  } else {
    location.href = 'pages/battle.html';
  }
};

// отрисовка галочек
function drawCheck () {
  if (switchResultTag.includes ('Древность и Средневековье (ОГЭ)', 0) == true) {
    changeSwitch("switchMiddleAgeOge", "enable");
  } else {
    changeSwitch("switchMiddleAgeOge", "disable");
  }
  if (switchResultTag.includes ('Новое время (ОГЭ)', 0) == true) {
    changeSwitch("switchModernTimesOge", "enable");
  } else {
    changeSwitch("switchModernTimesOge", "disable");
  }
  if (switchResultTag.includes ('Древность и Средневековье (ЕГЭ)', 0) == true) {
    changeSwitch("switchMiddleAgeEge", "enable");
  } else {
    changeSwitch("switchMiddleAgeEge", "disable");
  }
  if (switchResultTag.includes ('Новое время (ЕГЭ)', 0) == true) {
    changeSwitch("switchModernTimesEge", "enable");
  } else {
    changeSwitch("switchModernTimesEge", "disable");
  }
  if (switchResultTag.includes ('Новейшая история (ЕГЭ)', 0) == true) {
    changeSwitch("switchRecentHistoryEge", "enable");
  } else {
    changeSwitch("switchRecentHistoryEge", "disable");
  }
}
// изменение галочек
function changeSwitch(tag, status) {
  if (status == 'enable') {
    get(tag).style.backgroundImage = 'url(images/check.svg)';
    get(tag).style.backgroundColor = '#6DB0FF';
  }
  if (status == 'disable') {
    get(tag).style.backgroundImage = 'none';
    get(tag).style.backgroundColor = 'transparent';
  }
}
// отрисовка выбранных персонажей
function drawPersons () {
  get("hero").style.backgroundImage = 'url(' + imgHero + ')';
  get("enemy").style.backgroundImage = 'url(' + imgEnemy + ')';
}

// модальное окно ошибки при выборе темы
get("closeButton").onclick = function() {
  get("windowUp").close();
};

// кнопки меню
get("buttonStatistic").onclick = function () {
  location.href = 'pages/statistics.html';
};

get("buttonPersons").onclick = function () {
  location.href = 'pages/characters.html';
};

get("buttonOptions").onclick = function () {
  location.href = 'pages/options.html';
};

if (darkTheme == "enable") {
  document.body.style.backgroundColor = '#040631';
  get("menu").style.backgroundColor = '#282C50';
  get("menu").style.boxShadow= '0px -3px 15px rgb(26 28 59)';

  document.getElementsByClassName ("wrapper")[0].style.backgroundColor = '#282C50';
  document.getElementsByClassName ("wrapper")[0].style.color = 'white';

  document.getElementsByClassName ("textChoosePerson")[0].style.borderBottom = "1px solid #8386AB";
  document.getElementsByClassName ("textChoosePerson")[1].style.borderBottom = "1px solid #8386AB";

  get("windowUp").style.backgroundColor = '#282C50';
  get("windowUp").style.color = 'white';
}