function viewProduct() {
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
}

viewProduct();

/*Supprimer un article*/

function productDelete() {
  let saveProduct = JSON.parse(localStorage.getItem("product"));
  console.log(saveProduct);
  const BUTONDELETE = document.querySelectorAll(".deleteItem");
  for (let i = 0; i < BUTONDELETE.length; i++) {
    BUTONDELETE[i].addEventListener("click", () => {
      let article = document.querySelector(".cart__item");
      let id = article.dataset.id;
      let color = article.dataset.color;
      saveProduct = saveProduct.filter((s) => s.id == id && s.color == color);
      localStorage.setItem("product", JSON.stringify(saveProduct));
      article.remove();
      calculate();
    });
  }
}
productDelete();

/*Quantité à modifier page panier*/
function quantityChange() {
  let saveProduct = JSON.parse(localStorage.getItem("product"));
  const input = document.querySelectorAll("input.itemQuantity");
  /*console.log(saveProduct);
  fewDataQantity = [];
  let butonAdd = document.querySelectorAll(".itemQuantity");
  console.log(typeof butonAdd);
  for (let w = 0; w < 2; w++) {
    butonAdd[w].addEventListener("input", () => {
      fewDataQantity.push(quantityChange[w]);
      let change = JSON.parse(localStorage.getItem("product"));
      localStorage.setItem("product", JSON.stringify(saveProduct));

      console.log(butonAdd[w].value);
      calculate();*/
  /*input.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.target.setAttribute("value", e.target.valueAsNumber);
      console.log(e.target.getAttribute("value"));
      calculate();
    });
  });*/
}
quantityChange();

/*function quantityChange() {
  let saveProduct = JSON.parse(localStorage.getItem("product"));
  let articleCart = document.getElementsByClassName("cart__item");
  // Boucle qui ajoute un eventListener sur toute les vignettes d'article affichés dans le panier
  for (let a = 0; a < articleCart.length; a++) {
    articleCart[a].addEventListener("input", (event) => {
      /*On envoie la quantité selectionnée dans le panier
      parseInt = analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée (doc mdn à voir)
      target

      saveProduct[a].quantity = parseInt(event);
      // On met à jour le localstorage
      localStorage.setItem("product", JSON.stringify(saveProduct));
      // on lance la fonction qui va mettre à jour le prix et le total de la page panier
      calculate();
    });
  }
}

quantityChange();*/

/*Prix total / Quantité totale du panier*/

function calculate() {
  let saveProduct = JSON.parse(localStorage.getItem("product"));
  let fullQuantity = 0;
  let fullPrice = 0;
  /*La valeur initiale Si aucune valeur initiale n'est fournie, le premier élément du tableau est utilisé (et la boucle de traitement ne le parcourera pas). Si on appelle reduce() sur un tableau vide sans fournir de valeur initiale, on aura une erreur.*/

  for (let pushPrice of saveProduct) {
    fullPrice += pushPrice.price * pushPrice.quantity;
    fullQuantity += pushPrice.quantity;
  }
  document.getElementById("totalQuantity").innerHTML = fullQuantity;
  document.getElementById("totalPrice").innerHTML = fullPrice;
}

calculate();

/*Formulaire*/

function form() {
  localStorage.setItem;
  /*let butonOrder = document.getElementById("order");
  butonOrder.addEventListener("click", (event) => {
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
    let saveAnswer = [];
    event.preventDefault();
    if (saveAnswer === null) {
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
  });*/
}

form();

/*Numéro de commande*/

/*function sendtoConfirmation() {
  let post = {
    method: "POST",
    body: JSON.stringify(order),
    headers: { "Content-Type": "application/json" },
  };
  if (yy) {
  } else {
    fetch("http://localhost:3000/api/products/order", post)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("orderCustomer", saveAnswer);
        localStorage.setItem("total", fullPrice);
        document.location.href = "confirmation.html";
      });
  }
}*/

/*  supprimez, localsto changement inputquantity, formulaire ,fetch */
