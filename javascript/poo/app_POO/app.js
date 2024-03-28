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
      <button class="delete-btn">delete</button>
    `;

    productContainer.innerHTML = html;
    container.insertAdjacentElement("beforeend", productContainer);
  }

  deleteProduct(elemento) {
    elemento.parentNode.remove();
  }

  showMessage() {}
}

// Creacion de objetos
const ui = new UI();

// DOM EVENTS
document.querySelector("#product-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const price = document.querySelector("#price").value;
  const year = document.querySelector("#year").value;

  const product = new Product(name, price, year);
  ui.addProduct(product);
});

document.querySelector("#product-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    ui.deleteProduct(e.target);
  }
});

// La propiedad target es una propiedad que nos permite saber que fue lo que desencadeno el evento
// Aca me surgio una pregunta, pero primero entendamos como funciona el codigo
// Cuando se agrega un evento a un contenedor general que contiene elementos secundarios,
// estos elementos también heredan el evento porque forman parte de ese contenedor
// superior. Cuando ocurre un evento, este comienza en el elemento específico
// dentro del contenedor más grande que lo disparó. Luego, a través del mecanismo
// de burbujeo de eventos, se propaga hacia arriba en la jerarquía del DOM hasta llegar
// al elemento superior que tiene el evento.
// despues de esto mediante uno if se verifica que el btn que se oprimio fue el btn de eleminar
// ya que por la misma propagacion si no se verifica eso puede que se ejecute otro elemento que tenga un evento click
// ya que como dijimos el evento se propaga como una burbuja, entonces cualquier btn podira eleminarlo
// con esta verificacion si usamos el btn de elimar se elemina bien
