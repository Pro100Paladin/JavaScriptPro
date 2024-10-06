// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

const div1 = document.createElement("div");
const body1 = document.querySelector("body");
body1.appendChild(div1);

const parseData = JSON.parse(data);
console.log(parseData);

parseData.forEach((element) => {
    div1.insertAdjacentHTML(
        "beforeend",
        `
      <h2>${element.title}</h2>
      <img src="${element.thumbnailUrl}"></img>
      <p>Какой-то текст</p>`
    );
});