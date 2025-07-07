/*
  script-creative.js
  JavaScript para o tema "Creative Gradient" com animações de scroll.
*/

document.addEventListener("DOMContentLoaded", () => {
  // 1. Rolagem suave para links de navegação (mesma função do original)
  const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // 2. Feedback visual para o formulário de contato (mesma função do original)
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const submitButton = this.querySelector(".btn-submit");
      submitButton.textContent = "Obrigado pelo contato!";
      setTimeout(() => {
        submitButton.textContent = "Enviar Mensagem";
        contactForm.reset();
      }, 4000);
    });
  }

  // 3. NOVO: Animação de "fade/slide in" ao rolar a página
  // Seleciona todos os elementos que devem ser animados
  const animatedElements = document.querySelectorAll(
    ".section-title, .section-subtitle, .section-content > *, .portfolio-card"
  );

  // Adiciona a classe 'hidden' a todos eles para começar
  animatedElements.forEach((el) => el.classList.add("hidden"));

  // Cria um observador de interseção
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Se o elemento estiver visível na tela
        if (entry.isIntersecting) {
          // Remove a classe 'hidden' e adiciona 'visible' para ativar a animação
          entry.target.classList.remove("hidden");
          entry.target.classList.add("visible");
          // Para de observar o elemento para não animar novamente
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // A animação começa quando 10% do elemento está visível
    }
  );

  // Inicia a observação para cada elemento
  animatedElements.forEach((el) => observer.observe(el));
});
