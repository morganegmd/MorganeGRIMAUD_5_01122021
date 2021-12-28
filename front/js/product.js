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
};

canapeViews();

/*Insérer les couleurs*/

const color = async () => {
  let colorsCanapeView = await fetchProduct();
  console.log(colorsCanapeView);
  let option = document
    .getElementById("colors")
    .getElementsByTagName("value")[0].innerHTML;
  for (let colorsall of fetchProduct) {
    option.innerHTML += `${colorsProductView.colors}`;
  }
};
color();
