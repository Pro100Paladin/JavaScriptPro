
const url = "./data.json"; // указание пути к файлу со всеми продуктами, которые существуют в магазине
const cart = []; // Массив для хранения добавленных в корзину товаров

async function getData(url) { 
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

function renderCart() {
    const cartContainer = document.getElementById("cart-items");
    const cartSection = document.getElementById("cart");
    cartContainer.innerHTML = ''; // Очисткка контейнера перед рендерингом
    if (cart.length === 0) {
        cartSection.style.display = 'none'; // Скрываем раздел, если корзина пуста
        return;
    }
    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <img src="${item.img}" alt="${item.title}" class="cart-item__img" />
				<div class = "cart-item__description-box">
            <h1 class="cart-item__name"><b>${item.title}</b></h1>
            <p class="cart-item__price">Price: <span>$${item.price}</span></p>
				<p class="cart-item__color">Color: Red</p>
				<p class="cart-item__size">Size: XL</p>
				<p class="cart-item__quantity">Quantity: <input class = "" type="text" value="1"></p>
				</div>
            <button class="remove-button" data-index="${index}">
				<svg
						width="24.000000"
						height="24.000000"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
					>
						<desc>Created with Pixso.</desc>
						<defs />
						<path
							id="Vector-right"
							d="M11.24 9L17.53 2.71C17.82 2.41 17.99 2.01 17.99 1.59C17.99 1.17 17.82 0.76 17.53 0.46C17.23 0.16 16.83 0 16.4 0C15.98 0 15.58 0.16 15.28 0.46L9 6.75L2.71 0.46C2.41 0.16 2.01 0 1.59 0C1.16 0 0.76 0.16 0.46 0.46C0.16 0.76 0 1.16 0 1.59C0 2.01 0.16 2.41 0.46 2.71L6.75 9L0.46 15.28C0.16 15.58 0 15.98 0 16.4C0 16.83 0.16 17.23 0.46 17.53C0.76 17.83 1.16 18 1.59 18C2.01 18 2.41 17.83 2.71 17.53L9 11.24L15.28 17.53C15.58 17.83 15.98 18 16.4 18C16.83 18 17.23 17.83 17.53 17.53C17.83 17.23 18 16.83 18 16.4C18 15.98 17.83 15.58 17.53 15.28L11.24 9Z"
							fill="#575757"
							fill-opacity="1.000000"
							fill-rule="nonzero"
						/>
					</svg>
					</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    cartSection.style.display = 'block'; // Показываю раздел козины
}

document.addEventListener("DOMContentLoaded", async (e) => {
    const data = await getData(url);
    const list = document.querySelector(".productBox");

    data.forEach((element) => {
        list.insertAdjacentHTML("beforeend", `
            <div class="product">
                <div class="items">
                    <div class="item">
                        <img class="product__img" src="${element.img}" alt="product" />
                    </div>
                    <div class="item dark">
                        <button class="hidden_button" data-title="${element.title}" data-img="${element.img}" data-price="${element.price}">
                            <img src="../img/Сart.svg" alt="" />
                            <span class="button_text">Add to Cart</span>
                        </button>
                    </div>
                </div>
                <div class="product__content">
                    <a href="#" class="product__name">${element.title}</a>
                    <p class="product__text">${element.description}</p>
                    <p class="product__price">$${element.price}</p>
                </div>
            </div>
        `);
    });


    // Делегирование событий для добавления товара в корзину
    list.addEventListener('click', (event) => {
        if (event.target.closest('.hidden_button')) {
            const button = event.target.closest('.hidden_button');
            const product = {
                img: button.dataset.img,
                title: button.dataset.title,
                price: button.dataset.price
            };
            cart.push(product); // Добавление продукта в корзину
            renderCart(); // Обновление отображения корзины
        }
    });

   
	// Обработка удаления товара из корзины
	document.getElementById("cart-items").addEventListener("click", (e) => {
		if (e.target.closest('.remove-button')) {
			 const index = e.target.closest('.remove-button').getAttribute("data-index");
			 cart.splice(index, 1); // Удаление товара из корзины
			 renderCart(); // Обновление отображения корзины
		}
  });
});
