// []()
//     []()
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown",
// необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const elements = document.querySelectorAll('.dropdown-item');
console.log(elements);
elements.forEach((elements) => {
    elements.classList.add('.super-dropdown')
});
console.log(elements);

//     []()
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary",
// если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

// .classList.toggle - убрать/добавить

const btnEl = document.querySelector('.btn');
console.log(btnEl);
btnEl.classList.toggle('btn-secondary');

//     []()
// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const elementMenu = document.querySelector('.menu');
console.log(elementMenu);
elementMenu.classList.remove('dropdown-menu');

//     []()
// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
//     `<a href="#">link</a>`

const divDropDown = document.querySelector('.dropdown');
console.log(divDropDown);
divDropDown.insertAdjacentHTML('afterend', '<a href="#">link</a>');

//     []()
// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
const idElement = document.getElementById('dropdownMenuButton');
console.log(idElement);
idElement.id = 'superDropdown';

// испоьзуем querySelector
// const elementWithID = document.querySelector("[id = dropdownMenuButton]");
// console.log(elementWithID);
// elementWithID.id = "superDropdown";

//     []()
// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут
// "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const elementAttribute = document.querySelector('[aria-labelledby = dropdownMenuButton]');
console.log(elementAttribute);
elementAttribute.setAttribute("data-dd", '3');

//     []()
// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const delElementType = document.querySelector('.dropdown-toggle');
console.log(delElementType);
delElementType.removeAttribute('type');


