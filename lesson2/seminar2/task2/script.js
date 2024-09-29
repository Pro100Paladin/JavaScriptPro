const pTextEl = document.querySelector('.text');
console.log(pTextEl.previousElementSibling);

console.log(pTextEl.parentElement);

const  parentEl = pTextEl.parentElement;
console.log(parentEl.previousElementSibling);
// console.log(pTextEl.parentElement.previousElementSibling); //второй вариант

const imgEl = parentEl.previousElementSibling;
console.log(imgEl);
console.log(imgEl.parentElement);