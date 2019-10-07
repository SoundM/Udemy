let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu-item');
let menuItem3 = menuItem[1];
menu.removeChild(menuItem[1]);
menu.insertBefore(menuItem3, menuItem[3]);


let li = document.createElement('li');
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
menu.appendChild(li);

// console.log(div);
let body = document.querySelector('body');
body.style.backgroundImage = 'url(../img/apple_true.jpg)';

let title = document.querySelector('.title');
title.textContent = 'Мы продаем только подлинную технику Apple';

let columns = document.querySelectorAll('.column');
let adv = document.querySelector('.adv');
columns[1].removeChild(adv);

let promt = document.querySelector('#prompt');
let yourOpinion = prompt("Ваше отношение к технике Apple?");   // Отношение к технике Apple
promt.textContent = yourOpinion;
