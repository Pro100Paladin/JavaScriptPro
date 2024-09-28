document.querySelector('selector');

// task 1
const blockEl = document.getElementById("block");
console.log(blockEl);

// task 2
const blockEl1 = document.querySelector("#block p:first-child");
console.log(blockEl1);

// task 3
const wwwEl = document.querySelector('.www:first-of-type');
console.log(wwwEl);

// task 4
const linkEl = document.querySelector(".link");

linkEl.textContent = 'link text js';
linkEl.href = 'https://dzen.ru';

const imgEl = document.querySelector('.photo');
imgEl.src = 'https://avatars.steamstatic.com/b3ad1b45d1164ff6d9783959863269bda1d3a177_full.jpg';

// task 5
const contentEl = document.querySelector('.content');

const textEl = document.querySelector('p');
textEl.textContent = 'новый текстовый блок';

contentEl.appendChild(textEl);

contentEl.removeChild(textEl);

const buttonEl = document.createElement('button');
buttonEl.textContent = 'click';

contentEl.appendChild(buttonEl);
let countClick = 0;
buttonEl.onclick = function () {
 console.log(++countClick);
}

const buttonEl2 = document.createElement('button');
buttonEl2.textContent = 'Отправить';

contentEl.appendChild(buttonEl2);
let countClick2 = 0;
buttonEl2.onclick = function () {
    ++countClick2;
    if (countClick2 > 0){
        buttonEl2.textContent = 'тукст отправлен'
    }
};

