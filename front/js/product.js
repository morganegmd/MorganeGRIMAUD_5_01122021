/*localhost:3000/api/products/
https://www.youtube.com/watch?v=li7Fmtk4RCo*/

const product = window.location.search;

console.log(product);

const fetchProduct = async () => {
  let fetchDataProduct = await fetch(
    `http://localhost:3000/api/products/${product}`
  );
  let productData = await fetchDataProduct.json();
  return productData;
};

fetchProduct();
console.log(fetchProduct());

const canapeView = async () => {
  let canapeProductView = await fetchProduct();
  console.log(canapeProductView());
  let itemImg = document.getElementById("item__img");
  let title = document.getElementById("title");
  let price = document.getElementById("price");
  let description = document.getElementById("description");
  let colors = document.getElementById("colors");
  for (let i = 0; i < canapeProductView.length; i += 1) {
    console.log(canapeProduct[i]);
    itemImg.innerHTML += `<img src="${canapeProductView[i].imageUrl}" alt="${canapeProductView[i].altTxt}" />`;
    title.innerHTML += `<h1 id="title">"${canapeProductView[i].name}"</h1>`;
    price.innerHTML += `"${canapeProductView[i].price}"`;
    description.innerHTML += `"${canapeProductView[i].description}" `;
    colors.innerHTML += `"${canapeProductView[i].colors}"`;
  }
};
