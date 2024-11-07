/**
 * Template Name: Mentor
 * Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/
 * Updated: Aug 07 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }
  mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);
})();

if (
  !window.localStorage.getItem("email") &&
  !window.localStorage.getItem("pass")
) {
  window.location.href = "signin.html";
}

/**
 * LogIn
 */
function signin() {
  var email = document.getElementById("email");
  var pass = document.getElementById("pass");

  if (
    window.localStorage.getItem("email") == email.value.trim() &&
    window.localStorage.getItem("pass") == pass.value.trim()
  ) {
    alert("Bienvenido.");
    return true;
  } else {
    alert("Correo o contraseña invalido. Intenta de nuevo.");
    return false;
  }
}

function signup() {
  var email = document.getElementById("email");
  var pass = document.getElementById("pass");

  window.localStorage.setItem("email", email.value.trim());
  window.localStorage.setItem("pass", pass.value.trim());
}

// const cart = [];
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const dataBase = [
  {
    id: 1,
    nombre: "Curso de microservicios Spring Boot",
    isPopular: true,
    desc: "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
    category: "Microservicios",
    precio: 169,
    imagen: "assets/img/microservicios.png",
    teacherName: "Santiago Perez",
    teacherImage: "assets/img/trainers/trainer-1-2.jpg",
    people: 20,
    likes: 85,
  },
  {
    id: 2,
    nombre: "Seguridad Web Spring Security",
    isPopular: false,
    desc: "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
    category: "Seguridad web",
    precio: 250,
    imagen: "assets/img/security.png",
    teacherName: "Veronica Ortiz",
    teacherImage: "assets/img/trainers/trainer-2-2.jpg",
    people: 20,
    likes: 85,
  },
  {
    id: 3,
    nombre: "Certificacion Cloud Developer AWS",
    isPopular: false,
    desc: "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
    category: "Amazon Web Services",
    precio: 180,
    imagen: "assets/img/amazon.png",
    teacherName: "Daniel Posada",
    teacherImage: "assets/img/trainers/trainer-3-2.jpg",
    people: 20,
    likes: 85,
  },
  {
    id: 4,
    nombre: "Bases de datos con Spring Data JPA",
    isPopular: true,
    desc: "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
    category: "Spring Data JPA Bases de datos",
    precio: 180,
    imagen: "assets/img/springdata.png",
    teacherName: "Veronica Ortiz",
    teacherImage: "assets/img/trainers/trainer-2-2.jpg",
    people: 20,
    likes: 85,
  },
  {
    id: 5,
    nombre: "Gestion de contenedores con DOCKER",
    isPopular: false,
    desc: "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
    category: "Docker",
    precio: 140,
    imagen: "assets/img/docker.png",
    teacherName: "Daniel Posada",
    teacherImage: "assets/img/trainers/trainer-3-2.jpg",
    people: 20,
    likes: 85,
  },
  {
    id: 6,
    nombre: "Patrones de diseño de software",
    isPopular: true,
    desc: "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
    category: "Patrones de diseño de software",
    precio: 180,
    imagen: "assets/img/patrones.png",
    teacherName: "Santiago Perez",
    teacherImage: "assets/img/trainers/trainer-1-2.jpg",
    people: 20,
    likes: 85,
  },
];

localStorage.setItem("dataBase", JSON.stringify(dataBase));

const coursesContainer = document.querySelector(
  "#courses .container:last-child .courses-content"
);
const cartBadge = document.getElementById("cart-badge");
const logout = document.getElementById("logout");
logout.addEventListener("click", logoutFcn);

function logoutFcn() {
  localStorage.clear();
  window.location.href = "signin.html";
}

cartBadge.textContent = localStorage.getItem("badge") || 0;

function renderProductos() {
  const arrDB = window.location.pathname.includes("/courses")
    ? dataBase
    : dataBase.filter((course) => course.isPopular);
  arrDB.forEach((course) => {
    const courseItem = `
    <div
    class="col-lg-3 col-md-10 d-flex align-items-stretch"
    data-aos="zoom-in"
    data-aos-delay="200"
  >
    <div class="course-item">
      <div class="wrapper-img-course">
        <img src="${course.imagen}" class="img-fluid" alt="${course.nombre}" />
        <button class="add-course" id="add-btn-${course.id}" tag="${course.id}" >Agregar al carrito</button>
      </div>
      <div class="course-content">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <p class="category">${course.category}</p>
          <p class="price">$${course.precio}</p>
        </div>
        <h3>
          <a href="course-details.html">${course.nombre}</a>
        </h3>
        <p class="description">${course.desc}</p>
        <div class="trainer d-flex justify-content-between align-items-center">
          <div class="trainer-profile d-flex align-items-center">
            <img src="${course.teacherImage}" class="img-fluid" alt="Trainer" />
            <a href="#" class="trainer-link">${course.teacherName}</a>
          </div>
          <div class="trainer-rank d-flex gap-1 align-items-center">
            <i class="bi bi-person user-icon"></i>${course.people}
            <i class="bi bi-heart heart-icon"></i>${course.likes}
          </div>
        </div>
      </div>
    </div>
  </div>`;

    coursesContainer.insertAdjacentHTML("beforeend", courseItem);

    const btn = document.getElementById(`add-btn-${course.id}`);

    btn.addEventListener("click", addProduct);
  });
}

function addProduct(event) {
  cart.push(event.target.getAttribute("tag"));

  const uniqueCart = [...new Set(cart)];

  localStorage.setItem("cart", JSON.stringify(uniqueCart));
  localStorage.setItem("badge", uniqueCart.length);
  cartBadge.textContent = uniqueCart.length;
}

function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const cartContainer = document.getElementById("cart-container");
  let totalPrice = 0;

  cart.forEach((itemId) => {
    const item = dataBase.find((product) => product.id === parseInt(itemId));

    if (item) {
      const itemElement = document.createElement("div");
      itemElement.classList.add("cart-item");
      itemElement.innerHTML = `
        <img src="${item.imagen}" alt="${item.nombre}" class="item-image">
        <h2>${item.nombre}</h2>
        <p>${item.desc}</p>
        <p class="price">$${item.precio}</p>
      `;
      cartContainer.appendChild(itemElement);

      totalPrice += item.precio;
    }
  });

  document.getElementById(
    "total-price"
  ).textContent = `Total: $${totalPrice.toFixed(2)}`;
  const carritoSinDuplicados = [...new Set(cart)];
}

function total() {
  return cart.reduce((total, item) => {
    const amount = dataBase.filter((course) => {
      return course.id === parseInt(item);
    })[0].precio;

    return { total: total + amount, lenght: cart.lenght };
  }, 0);
}

renderProductos();
