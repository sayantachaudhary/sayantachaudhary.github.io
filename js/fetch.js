// async function fetchData() {
//   const response = await fetch("https://dummyjson.com/posts");
//   const data = await response.json();
//   renderData(data.posts); // ← note .posts
// }
//
// function renderData(items) {
//   const container = document.querySelector(".cards");
//   container.innerHTML = items
//     .map(
//       (item) => `
//     <article class="card">
//       <header class="card-header">
//         <h3 class="card-title">${item.title}</h3>
//         <p class="card-subtitle">${item.body}</p>
//       </header>
//     </article>
//   `,
//     )
//     .join("");
// }
//
// fetchData();

// async function getQuote() {
//   const response = await fetch(`https://dummyjson.com/quotes/1`);
//   const data = await response.json();
//
//   document.querySelector("#quotes h3").textContent = data.quote;
//   document.querySelector("#quotes p").textContent = `— ${data.author}`;
// }
//
// const quoteBtn = document.querySelector(".btn-quote");
// quoteBtn.addEventListener("click", getQuote);
//
// // load one on page start
// getQuote();

// async function getProduct() {
//   const randomId = Math.floor(Math.random() * 100) + 1;
//   const response = await fetch(`https://dummyjson.com/carts/1`);
//   const data = await response.json();
//
//   console.log(data);
//   const cart_list = document.querySelector("#cart-list");
//   document.querySelector("#cart-list cart h3").textContent = data.title;
//   document.querySelector("#cart-list cart p").textContent = data.price;
// }
//
// getProduct();

async function getProduct() {
  const response = await fetch("https://dummyjson.com/carts/1");
  const data = await response.json();

  const cart_list = document.querySelector("#cart-list");

  cart_list.innerHTML = data.products
    .map(
      (product) => `
    <div class="cart">
      <h3>${product.title}</h3>
      <p>Price: ${product.price}</p>
      <img src="${product.thumbnail}" alt="${product.title}" />
      <div class="cart-btn">
        <button type="button" class="btn btn-primary">Buy</button>
        <button type="button" class="btn btn-outline">Add to Cart</button>
      </div>
    </div>
  `,
    )
    .join("");
}

getProduct();
