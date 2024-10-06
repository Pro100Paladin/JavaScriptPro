/**
 * 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span.
 * // То есть при печати в input'е тег span также должен меняться.
 * */


const span = document.querySelector("span");
const inPut = document.querySelector("#from");

inPut.addEventListener("input", () => {
    span.textContent = inPut.value;
});

/**
 * // 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
 * // - добавить два класса: animate_animated и animate_fadeInLeftBig
 * // - поставить данному элементу стиль visibility в значение 'visible'.
 * @type {Element}
 */

const btn = document.querySelector(".messageBtn");
const text = document.querySelector(".message");
btn.addEventListener("click", () => {
    text.style.visibility = "visible";
    text.style.color = "red";
    text.classList.add("animate__animated", "animate__fadeInLeftBig");
});


/**
 * 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
 * - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
 * - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
 * @type {HTMLFormElement}
 */

const formEl = document.querySelector("form");
const formControlEls = formEl.querySelectorAll("input, select");
const butt = document.querySelector("#fly");
const p = document.createElement("p");
butt.insertAdjacentElement("afterend", p);

formEl.addEventListener("submit", (e) => {
    formControlEls.forEach((formControlEl) => {
        if (formControlEl.value === "") {
            formControlEl.classList.add("error");
            e.preventDefault();
            p.textContent = "Необходимо заполнить поля, выделенные красным";
            p.textContent = "Необходимо заполнить поля, выделенные красным";
            formControlEl.style.border = "3px solid red";
        } else {
            formControlEl.style.border = "1px solid black";
        }
    });
});
formEl.addEventListener("input", (e) => {
    if (!e.target.classList.contains("form-control")) {
        return;
    }
    if (e.target.value === "") {
        e.target.classList.add("error");
    } else {
        e.target.classList.remove("error");
        p.textContent = "";
    }
});