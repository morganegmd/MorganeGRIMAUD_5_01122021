let canapeData = [];

const fetchCanape = async () => {
  await fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((Promise) => {
      canapeData = Promise;
      console.log(canapeData);
    });
};

const canapeView = async () => {
  await fetchCanape();
  console.log(canapeView);
  for (let i = 0; i < 8; i += 1) {
    let items = document.getElementById("items");
    console.log(items.innerHTML);
    items.innerHTML = (
      <a href="$(i._id)">
        <article>
          <img src="$(i.imageUrl)" alt="$(i.altTxt)" />
          <h3 class="productName">"$(i.name)"</h3>
          <p class="productDescription">"$(i.description)"</p>
        </article>
      </a>
    );
  }
};

canapeView();
