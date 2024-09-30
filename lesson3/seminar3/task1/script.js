const buttEl = document.querySelector('.button');
const bodyEl = document.querySelector('body');

bodyEl.onload = function () {
    console.log("Загрузилось");
}

// продвинутый метод
window.addEventListener('load' , function (e){
    console.log('Все загрузилось');
    }
);

// лучше не использовать!!!
buttEl.onclick = function (){
    console.log('click onclick');
}

buttEl.addEventListener('click' , function (e){
    console.log('click onclick 2');
});