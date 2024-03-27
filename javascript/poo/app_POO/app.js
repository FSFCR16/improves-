class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {
  addProduct(product) {
    const container = document.querySelector("#product-list");
    const productContainer = document.createElement("li");
    productContainer.classList.add("card-product");

    const html = `
      <article class="product-name"><strong>Product Name: </strong>${product.name}</article>
      <article class="product-price"><strong>Product Price: </strong>${product.price}</article>
      <article class="product-year"><strong>Product Year: </strong>${product.year}</article>
    `;

    productContainer.innerHTML = html;
    container.insertAdjacentElement("beforeend", productContainer);
  }

  deleteProduct() {}

  showMessage() {}
}

// DOM EVENTS

document.querySelector("#product-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const price = document.querySelector("#price").value;
  const year = document.querySelector("#year").value;

  const product = new Product(name, price, year);
  const ui = new UI();

  ui.addProduct(product);
});
