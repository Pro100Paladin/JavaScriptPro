const formEl = document.querySelector('.form');
const inputEl = formEl.querySelector('.form__input');
const btnEl = formEl.querySelector('.btn');

const h2El = document.createElement('h2');
h2El.textContent = 'поле ввода не дожно быть пустым';

btnEl.onclick = function () {
    if (inputEl.value) {
        console.log('Что-то есть')
    } else {
        formEl.appendChild(h2El);
        inputEl.style.border = '1px solid red';
        // formEl.parentElement.appendChild(h2El); // добавляет в body
    }
}