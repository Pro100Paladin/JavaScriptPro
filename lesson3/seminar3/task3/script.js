const buttonElAddTekst = document.querySelector('.button');
const buttonAdd = document.querySelector('.buttonAdd');
const buttonDel = document.querySelector('.buttonDel');
const buttonHover = document.querySelector('.button3');

const h1El = document.createElement("h1");
h1El.textContent = 'Новый заголовок';

buttonElAddTekst.addEventListener('click', function (e) {
    buttonElAddTekst.parentElement.appendChild(h1El);
});


buttonAdd.addEventListener('click', function (e) {
    buttonAdd.parentElement.appendChild(h1El);
});

buttonDel.addEventListener('click', function (e) {
    buttonDel.parentElement.removeChild(h1El);
});


buttonHover.addEventListener('mouseover', function (e) {
    console.log('навели');
    console.log(e.target);
});

buttonHover.addEventListener('mouseout', function (e) {
    console.log('убрали');
});
