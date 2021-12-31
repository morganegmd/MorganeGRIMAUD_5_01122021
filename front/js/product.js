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

/*Enregistrer le/les choix de l'utilisateur*/

const addCart = (canapeProductView) => {
  let bouton = document.getElementById("addToCart");
  bouton.addEventListener("click", () => {
    let color = document.getElementById("colors").value;
    let quantity = document.getElementById("quantity").value;
    /*L'alerter en cas d'erreur de saisie*/
    if (!color) {
      alert("Veuillez choisir une couleur");
      return;
    }
    if (!(quantity > 0 && quantity < 101)) {
      alert("Veuillez choisir une quantité entre 1 et 100");
      return;
    }
    /*Sauvegarder dans le local storage*/
    let informations = {
      id,
      color,
      quantity,
    };
    /*Convertir du Json en JS/ou l'inverse
      Cela sert à ce que ce que le local storage puisse lire le JS et l'inverse (à vérifier*/
    let saveProduct = JSON.parse(localStorage.getItem("product"));
    if (saveProduct === null) {
      saveProduct = [];
      saveProduct.push(informations);
      localStorage.setItem("product", JSON.stringify(saveProduct));
    } else {
      saveProduct.push(informations);
      localStorage.setItem("product", JSON.stringify(saveProduct));
    }
  });
};
