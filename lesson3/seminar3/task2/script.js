const allButtonEl = document.querySelectorAll('.button');

allButtonEl.forEach(elements => {
    elements.addEventListener('click', function (e){
        const target = e.target;
        console.log(target);
    });
});

const buttonEl2 = document.querySelector('.button2');

let count = 0;
buttonEl2.addEventListener('click', function (e){
    console.log(++count);
})

const buttonEl5 = document.querySelector('.button5');

buttonEl5.addEventListener('click', function (e){
    buttonEl5.textContent = 'вы нажали кнопку';
});
