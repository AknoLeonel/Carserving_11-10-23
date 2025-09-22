const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOptions,
});

ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOptions,
  delay: 500,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOptions,
  interval: 500,
});

// price container
ScrollReveal().reveal(".price__card", {
  ...scrollRevealOptions,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

// --- CÓDIGO PARA MOSTRAR MENU APENAS NO TOPO ---
// Substitua o código de rolagem anterior por este bloco

window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    const headerSection = document.querySelector(".header__container");

    // Calcula a altura da seção do header
    const headerHeight = headerSection.offsetHeight;

    // Se a rolagem passar da altura do header, esconde a navegação
    if (window.pageYOffset > headerHeight) {
        topBar.classList.add("hidden");
        nav.classList.add("hidden");
    } else {
        // Caso contrário, mostra a navegação
        topBar.classList.remove("hidden");
        nav.classList.remove("hidden");
    }
});