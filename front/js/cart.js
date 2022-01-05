/*Récupérer les données stockées dans le localstorage*/

let saveProduct = JSON.parse(localStorage.getItem("product"));
console.log(saveProduct);

let panierDataView = document.getElementById("cart__items");

/*Afficher les données des produits dans le panier */

if (saveProduct == null) {
  /*Pas de changement si le panier est vide*/
} else {
  for (let i = 0; i < saveProduct.length; i++) {
    panierDataView.innerHTML += ` <article class="cart__item" data-id="${saveProduct[i].id}" data-color="${saveProduct[i].color}">
            <div class="cart__item__img">
                <img src="${saveProduct[i].itemImg}" alt="${saveProduct[i].altTxt}" />
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${saveProduct[i].title}</h2>
                    <p>${saveProduct[i].color}</p>
                    <p>${saveProduct[i].price} €</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value=${saveProduct[i].quantity}>
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article> `;
  }
}

/*Eviter les répitions dans le panier*/
/*let foundProduct = saveProduct.find((p) => p.id == saveProduct.id);
if (foundProduct === null) {
  saveProduct.push;
} else {
  foundProduct = `${saveProduct.quantity}` + `${saveProduct.quantity}`;
  saveProduct.push();
}

/*console.log(foundProduct);*/

/*Supprimer un article*/

let butonDelete = document.querySelectorAll(
  ".cart__item__content__settings__delete"
);

for (let k = 0; k < butonDelete.length; k++) {
  butonDelete[k].addEventListener("click", () => {
    let idDelete = saveProduct[k].id;
    console.log(idDelete);
    saveProduct = saveProduct.filter(
      (element) => element.id !== saveProduct.id
    );
    console.log(saveProduct);
    localStorage.setItem("product", JSON.stringify(saveProduct));
    window.location.href = "cart.html";
  });
}

console.log(butonDelete);

/*Prix total / Quantité totale du panier*/

function equalPrice() {
  /*Prix*/
  let fullPrice = [];
  let price = document.querySelectorAll(".price");
  for (let pushPrice in price) {
    fullPrice.push(price[pushPrice].innerHTML);
  }
  const reducer = (acc, currentVal) => acc + currentVal;
  fullPrice = fullPrice.reduce(reducer);

  /*Quantité*/
  let fullQuantity = [];
  let quantity = document.querySelectorAll("#quantity");
  for (let pushQuantity in quantity) {
    fullPrice.push(price[pushPrice].innerHTML);
  }
  const reducer = (acc, currentVal) => acc + currentVal;
  fullPrice = fullPrice.reduce(reducer);

  let cartPrice = document.querySelector(".cart__price");
  cartPrice.innerHTML += `<div class="cart__price">
                <p>Total (<span id="totalQuantity">"${quantity}</span> articles) : <span id="totalPrice">${equalPrice}</span> €</p>
                </div>`;
}

equalPrice();

/*Formulaire*/

let butonOrder = document.getElementById("order");
butonOrder.addEventListener("click", () => {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let email = document.getElementById("email").value;

  let informations = {
    firstName,
    lastName,
    address,
    city,
    email,
  };
  let saveAnswer = JSON.parse(localStorage.getItem("contact"));
  if (saveAnswer === null) {
    saveAnswer = [];
    saveAnswer.push(informations);
    localStorage.setItem("contact", JSON.stringify(saveAnswer));
  } else {
    saveAnswer.push(informations);
    localStorage.setItem("contact", JSON.stringify(saveAnswer));
  }
});

/*Numéro de commande*/

let post = {
  method: "POST",
  body: JSON.stringify(order),
  headers: { "Content-Type": "application/json" },
};
fetch("http://localhost:3000/api/products/order", post)
  .then((response) => response.json())
  .then((data) => {
    localStorage.clear();
    console.log(data);
    localStorage.setItem("orderId", `${saveAnswer}`);
    localStorage.setItem("total", `${price}`);

    /* Le fait de préciser la destination du lien ici et non dans la balise <a> du HTML permet d'avoir le temps de placer les éléments comme l'orderId dans le localStorage avant le changement de page.*/
    document.location.href = "confirmation.html";
  });

/* Répétitions, supprimez, et calculer le panier à résoudre, fetch */
