document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (!form || !formMessage) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    formMessage.textContent = "Thanks. Your message has been captured in this demo form.";
    formMessage.classList.remove("d-none");

    form.reset();
  });
});