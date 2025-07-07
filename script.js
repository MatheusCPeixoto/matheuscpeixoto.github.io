document.addEventListener("DOMContentLoaded", () => {
  // NAVEGA SUAVE PARA SEÇÕES INTERNAS
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

  // RESPOSTA PARA QUANDO FORMULÁRIO DE CONTATO É ENVIADO (SÓ PARA FINS DE DEMONSTRAÇÃO)
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
});
