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

// --- LÓGICA DE DISTRIBUIÇÃO POR DOMÍNIO ---
document.addEventListener("DOMContentLoaded", function() {
    // Pega o domínio atual e converte para minúsculas
    const dominioAtual = window.location.hostname.toLowerCase();
    
    // Configurações para TODOS os domínios que você adicionou
    const configuracoes = {
        "guinchobandeirante": { 
            cidade: "no Núcleo Bandeirante",
            tituloPagina: "Guincho no Bandeirante - Chegamos Rápido",
            nomeEmpresa: "Guincho Bandeirante"
        },
        "guinchoasasul": { 
            cidade: "na Asa Sul",
            tituloPagina: "Guincho na Asa Sul - 24 Horas",
            nomeEmpresa: "Guincho Asa Sul"
        },
        "guinchoasanorte": { 
            cidade: "na Asa Norte",
            tituloPagina: "Guincho na Asa Norte - Rápido e Barato",
            nomeEmpresa: "Guincho Asa Norte"
        },
        "guincholagosul": { 
            cidade: "no Lago Sul",
            tituloPagina: "Guincho no Lago Sul - Atendimento VIP",
            nomeEmpresa: "Guincho Lago Sul"
        },
        "guinchovicentepires": { 
            cidade: "em Vicente Pires",
            tituloPagina: "Guincho em Vicente Pires - Chegamos Já",
            nomeEmpresa: "Guincho Vicente Pires"
        },
        "guinchotaguatinga": { 
            cidade: "em Taguatinga",
            tituloPagina: "Guincho em Taguatinga - 24h",
            nomeEmpresa: "Guincho Taguatinga"
        },
        "guinchosudoeste": { 
            cidade: "no Sudoeste",
            tituloPagina: "Guincho no Sudoeste - Auto Socorro",
            nomeEmpresa: "Guincho Sudoeste"
        },
        "guinchoceilandia": { 
            cidade: "na Ceilândia",
            tituloPagina: "Guincho na Ceilândia - Preço Justo",
            nomeEmpresa: "Guincho Ceilândia"
        },
        "guinchoaguasclaras": { 
            cidade: "em Águas Claras",
            tituloPagina: "Guincho em Águas Claras - 24 Horas",
            nomeEmpresa: "Guincho Águas Claras"
        },
        "guincho24horasdf": { 
            cidade: "no DF e Entorno",
            tituloPagina: "Guincho 24 Horas DF - Socorro Rápido",
            nomeEmpresa: "Guincho 24h DF"
        },
        
        // Padrão (Fallback)
        "default": {
            cidade: "no Guará e entorno",
            tituloPagina: "Guincho 24h no Guará: Chegamos em Minutos!",
            nomeEmpresa: "Guincho Guará"
        }
    };

    let config = configuracoes["default"];

    // Procura se alguma chave da configuração existe na URL atual
    for (let chave in configuracoes) {
        if (dominioAtual.includes(chave) && chave !== "default") {
            config = configuracoes[chave];
            break;
        }
    }

    // Aplica as mudanças no HTML
    const locationSpan = document.getElementById("dynamic-location");
    const pageTitle = document.getElementById("page-title");
    const logoText = document.getElementById("logo-text");
    const footerLogoText = document.getElementById("footer-logo-text");

    if (locationSpan) locationSpan.innerText = config.cidade;
    if (pageTitle) document.title = config.tituloPagina;
    if (logoText) logoText.innerText = config.nomeEmpresa;
    if (footerLogoText) footerLogoText.innerText = config.nomeEmpresa;
});