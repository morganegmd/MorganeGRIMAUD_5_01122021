/*localhost:3000/api/products/*/

/*Modifier l'url de l'API*/

const param = new URLSearchParams(document.location.search);
let id = param.get("id");
console.log(id);

/*Appeler l'API*/

const fetchProduct = async () => {
  let fetchDataProduct = await fetch(
    `http://localhost:3000/api/products/${id}`
  );
  let productData = await fetchDataProduct.json();
  return productData;
};
fetchProduct();
console.log(fetchProduct());

/*Insérer l'API*/

const canapeViews = async () => {
  let canapeProductView = await fetchProduct();
  console.log(canapeProductView);
  let itemImg = document.querySelector(".item__img");
  let title = document.getElementById("title");
  let price = document.getElementById("price");
  let description = document.getElementById("description");

  itemImg.innerHTML += `<img src="${canapeProductView.imageUrl}" alt=${canapeProductView.altTxt} />`;
  title.innerHTML += `<h1 id="title">${canapeProductView.name}</h1>`;
  price.innerHTML += `${canapeProductView.price}`;
  description.innerHTML += `${canapeProductView.description}`;
  color(canapeProductView.colors);
  addCart(canapeProductView);
};

canapeViews();

/*Insérer les couleurs*/

const color = (colors) => {
  let option = document.getElementById("colors");
  for (let color of colors) {
    option.innerHTML += `<option value="${color}">${color}</option>`;
  }
};

/*Enregistrer les données saisies par l'utilisateur 
  L'alerter en cas d'erreur de saisie
  Sauvegarder dans le local storage
  Envoyer ses informations dans le panier*/

const addCart = (canapeProductView) => {
  let bouton = document.getElementById("addToCart");
  bouton.addEventListener("click", () => {
    console.log("bouton");
    let color = document.getElementById("colors").value;
    let quantity = document.getElementById("quantity").value;
    console.log(color, quantity);
    let information = `${color}``${quantity}`;
    if (!color) {
      alert("Veuillez choisir une couleur");
      return;
    }
    if (!(quantity > 0 && quantity < 101)) {
      alert("Veuillez choisir une quantité entre 1 et 100");
      return;
    }
    if ((color == null, quantity == null)) {
      localStorage.setItem("color", `${color}`);
      localStorage.setItem("number", `${quantity}`);
    } else {
      information.push();
      localStorage.getItem("color");
      localStorage.getItem("number");
    }

    /*régler le pb de l'ajout*/
  });
};

/*if ((color == null, quantity == null)) {
      localStorage.setItem("color", `${color}`);
      localStorage.setItem("nombre", `${quantity}`);
    } else {
      localStorage.setItem("color", `${color}`);
      localStorage.setItem("nombre", `${quantity}`);
    }
    
    
     let information = `${color}``${quantity}`;
    if ((color == null, quantity == null)) {
      localStorage.setItem("color", `${color}`);
      localStorage.setItem("nombre", `${quantity}`);
    } else {
      color.push();
      quantity.push();
      localStorage.setItem("color", `${color}`);
      localStorage.setItem("nombre", `${quantity}`);
    }*/
