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
  let colors = document.getElementById("colors");
  itemImg.innerHTML += `<img src="${canapeProductView.imageUrl}" alt=${canapeProductView.altTxt} />`;
  title.innerHTML += `<h1 id="title">${canapeProductView.name}</h1>`;
  price.innerHTML += `${canapeProductView.price}`;
  description.innerHTML += `${canapeProductView.description}`;
  colors.innerHTML += `${canapeProductView.colors}`;
};

canapeViews();

/*Insérer les couleurs*/

colors.forEach((colorViewer) => {
  colors.appendChild;
});

/*const colors = async () => {
  let canapeProductView = await fetchProduct();
  console.log(canapeProductView);
  colorsall = document.getElementById("colors");
  for (let i = 0; i < colors.length; i += 1) {
    colors.innerHTML += `${canapeProductView.colors}`;
  }
};
colors();*/
