/*localhost:3000/api/products/
https://www.youtube.com/watch?v=li7Fmtk4RCo*/

/*const fetchProduct = async () => {
  let fetchDataProduct = await fetch("http://localhost:3000/api/products");
  let productData = await fetchDataProduct.json();
  return productData;
};
console.log(fetchProduct());

const productView = async () => {
  let productCanap = await fetchProduct();
  console.log(productCanap());
  let itemsImg = document.getElementById("items_img");
  let description = document.getElementById("description");
  let colors = document.getElementById("colors");
  for (let i = 0; i < canapeProduct.length; i += 1) {
    console.log(productCanap[i]);
    itemsImg.innerHTML = `<img src="product.html?id=${productCanap[i]._id}" alt="${productCanap[i].altTxt}"></img>`;
    description.innerHTML = `"${productCanap[i].description}"`;
    colors.innerHTML = `"${productCanap[i].colors}"`;
  }
};*/

const product = window.location.search;

console.log(product);

/*let urlData = new URL(
  "http://localhost:3000/api/products/a557292fe5814ea2b15c6ef4bd73ed83"
);
console.log(urlData);*/

let productData = [];

const fetchProduct = async () => {
  let fetchDataProduct = await fetch(
    `http://localhost:3000/api/products/${product}`
  );
  let productData = await fetchDataProduct.json();
  return productData;
};
fetchProduct();
console.log(fetchProduct());
