/*Récupérer les données stockées dans le localstorage*/

let saveProduct = JSON.parse(localStorage.getItem("product"));
console.log(saveProduct);

let panierDataView = document.getElementById("cart__items");
let quantityDataView = document.getElementById("cart_price");

/*Afficher les données dans le panier */

if (saveProduct === null) {
} else {
  for (let i = 0; i > saveProduct.length; i++) {
    console.log(saveProduct[i].length);
    panierDataView.innerHTML += ` <article class="cart__item" data-id="${saveProduct[i].id}" data-color="${saveProduct[i].color}">
            <div class="cart__item__img">
                <img src="${canapeProductView.imageUrl}" alt="${canapeProductView.altTxt}" />
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>"${canapeProductView.name}"</h2>
                    <p>"${saveProduct[i].color}"</p>
                    <p>"${canapeProductView.price}"</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${saveProduct[i].quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article> `;
    quantityDataView.innerHTML += `<p>Total (<span id="totalQuantity">${saveProduct.quantity}</span> articles) : <span id="totalPrice">${canapeProductView.price}</span> €</p>`;
  }
}
