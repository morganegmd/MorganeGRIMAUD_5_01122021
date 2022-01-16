function viewProduct() {
  /*Récupérer les données stockées dans le localstorage*/

  let saveProduct = JSON.parse(localStorage.getItem("product"));
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
  const BUTONDELETE = document.querySelectorAll(".deleteItem");
  for (let o = 0; o < BUTONDELETE.length; o++) {
    BUTONDELETE[o].addEventListener("click", (event) => {
      let article = document.querySelector(".cart__item");
      let id = article.dataset.id;
      let color = article.dataset.color;
      console.log(ecloset);
      event.preventDefault();
      /*saveProduct[o] = saveProduct.filter(
        (s) => s.id !== id && s.color !== color
      );
      localStorage.setItem("product", JSON.stringify(saveProduct));
      article.remove(article[o]);
      calculate();*/
    });
  }
}

productDelete();

/*Quantité à modifier page panier*/
function quantityChange() {
  let saveProduct = JSON.parse(localStorage.getItem("product"));
  const INPUT = document.querySelectorAll("input.itemQuantity");
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

  for (let pushPrice in saveProduct) {
    fullPrice += pushPrice.price * pushPrice.quantity;
    fullQuantity += pushPrice.quantity;
  }
  document.getElementById("totalQuantity").innerHTML = fullQuantity;
  document.getElementById("totalPrice").innerHTML = fullPrice;
}

calculate();

/*Formulaire*/

function informationsSend() {
  const BTNSEND = document.querySelector("#order");
  BTNSEND.addEventListener("click", (event) => {
    event.preventDefault();

    //Formulaire
    let contact = {
      firstName: document.querySelector("#firstName").value,
      lastName: document.querySelector("#lastName").value,
      address: document.querySelector("#address").value,
      city: document.querySelector("#city").value,
      email: document.querySelector("#email").value,
    };

    //Contrôler le formulaire

    //Firstname, Lastname, City

    const alertValue = (variable) => {
      return `${variable} :  Les caractères spéciaux ne sont pas valides ( sauf - et . ) \n La saisie doit faire au minimum deux lettres et au maximum quinze lettres`;
    };

    const REGEXFLC = (value) => {
      return /^[\w^.-]{2,15}[\w]{2,6}$/.test(value);
    };
    /*"/": prend en compte ; "^": début de la saisie; "$": fin de la saisie*/

    function firstnameControl() {
      if (REGEXFLC(contact.firstName)) {
        console.log("ok");
        return true;
      } else {
        console.log("ko");
        alert(alertValue("Prénom"));
        return false;
      }
    }

    function lastnameControl() {
      if (REGEXFLC(contact.lastName)) {
        console.log("ok");
        return true;
      } else {
        console.log("ko");
        alert(alertValue("Nom"));
        return false;
      }
    }

    function cityControl() {
      if (REGEXFLC(contact.city)) {
        console.log("ok");
        return true;
      } else {
        console.log("ko");
        alert(alertValue("Ville"));
        return false;
      }
    }

    if (firstnameControl() && lastnameControl() && cityControl()) {
      localStorage.setItem("contact", JSON.stringify(contact));
    } else {
    }

    //Adresse

    //Email

    /*const REGEXEM = (value) => {
      return /^         $/.test(value);*/

    // "(" : permet la répitétions

    //^([A-Za-z0-9_-.])+@([A-Za-z0-9_-.])+.([A-Za-z]{2,4})$/.test
    ///^[A-Za-z,-]{2,15}$/.test

    //Objet contenant les produits et le contact
    let saveProduct = JSON.parse(localStorage.getItem("product"));

    const SENDINFOALL = {
      saveProduct,
      contact,
    };
    console.log(SENDINFOALL);
  });
}

informationsSend();

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
