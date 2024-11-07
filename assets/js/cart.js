document.addEventListener("DOMContentLoaded", function () {
  if (
    !window.localStorage.getItem("email") &&
    !window.localStorage.getItem("pass")
  ) {
    window.location.href = "signin.html";
  }

  const cartContents = document.getElementById("cart-contents");
  const emptyCartMessage = document.getElementById("empty-cart-message");
  const totalPriceElement = document.getElementById("total-price");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  let total = 0;
  const data = JSON.parse(localStorage.getItem("dataBase")) || [];

  if (cart.length > 0) {
    emptyCartMessage.style.display = "none";

    cart.forEach((item, index) => {
      const miItem = data.filter((itemDb) => {
        return itemDb.id === parseInt(item);
      })[0];

      const itemElement = document.createElement("div");
      itemElement.classList.add(
        "cart-item",
        "mb-3",
        "p-3",
        "border",
        "rounded"
      );

      itemElement.innerHTML = `
        <h4>${miItem.nombre}</h4>
        <p><strong>Precio:</strong> $${miItem.precio}</p>
        <button class="btn btn-danger btn-sm remove-item" data-index="${item}">
          Eliminar
        </button>
      `;

      cartContents.appendChild(itemElement);

      total += miItem.precio;
    });
    totalPriceElement.textContent = total.toFixed(2);
  } else {
    emptyCartMessage.style.display = "block";
  }

  cartContents.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-item")) {
      let index = event.target.getAttribute("data-index");
      let itemIndex = cart.indexOf(index);

      if (!isNaN(itemIndex)) {
        const miItem = data.filter((itemDb) => {
          return itemDb.id === Number(index);
        })[0];

        total -= miItem.precio;

        cart.splice(itemIndex, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("badge", cart.length);

        totalPriceElement.textContent = total.toFixed(2);

        event.target.closest(".cart-item").remove();

        if (cart.length === 0) {
          emptyCartMessage.style.display = "block";
        }
      } else {
        console.error("Error: itemIndex no es un número válido");
      }
    }
  });
});

const pay = document.querySelector(".button-pay");
pay.addEventListener('click', () => alert("Felicidades has comprado los cursos"));
