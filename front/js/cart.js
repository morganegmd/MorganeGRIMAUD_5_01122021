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

/*Quantité à modifier page panier*/

function quantityChange() {
  bouton.addEventListener("change", () => {
    let inputChange = document.querySelectorAll(".itemQuantity").value;
    localStorage.getItem("product");
    saveProduct.push("inputChange");
  });
}

/*Supprimer un article*/

const butonDelete = document.querySelectorAll(".deleteItem");
function productDelete() {
  butonDelete.addEventListener("click", () => {
    console.log(butonDelete);
    for (let k = 0; k < butonDelete.length; k++) {
      localStorage.clear(butonDelete[k]);
      return;
    }
  });
}

/*Prix total / Quantité totale du panier*/

function equalPrice() {
  let saveProduct = JSON.parse(localStorage.getItem("product"));
  let fullQuantity = 0;
  let fullPrice = 0;
  for (let pushPrice of saveProduct) {
    fullPrice += pushPrice.price * pushPrice.quantity;
    fullQuantity += pushPrice.quantity;
  }

  document.getElementById("totalQuantity").innerHTML = fullQuantity;
  document.getElementById("totalPrice").innerHTML = fullPrice;
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
  if (!firstName) {
    alert("Veuillez saisir votre nom");
  }
  if (!saveAnswer) {
    alert("Veuillez remplir tout les champs s'il vous plaît");
    return;
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
    localStorage.setItem("orderCustomer", saveAnswer);
    localStorage.setItem("total", fullPrice);
    document.location.href = "confirmation.html";
  });

/* Répétitions, supprimez, et calculer le panier à résoudre, fetch */
