let itemEl = document.querySelector('.subtitle');

while (itemEl.parentElement) {
    itemEl = itemEl.parentElement
    console.log(itemEl)
}
