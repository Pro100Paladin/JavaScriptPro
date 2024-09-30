const ulEl = document.querySelector('.ul');
const buttonAddEl = document.querySelector('.buttonAdd');
const buttonDelEl = document.querySelector('.buttonDel');
const addClass = document.querySelector('.addClass')

let count = 4
buttonAddEl.addEventListener('click', function (e){
    const listEl = document.createElement('li');
    listEl.textContent = `list-${count++}`;
    listEl.classList.add('list')
    ulEl.appendChild(listEl);
})

buttonDelEl.addEventListener('click', function (e){
    const firstListEl = document.querySelector('.list:first-child')
    ulEl.removeChild(firstListEl)
    count--
})

addClass.addEventListener('click', function (e){
    const target = e.target
    target.classList.add('Click')
})