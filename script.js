
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu when a navigation link is clicked
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Select a service from the service cards
document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    const serviceSelect = document.getElementById("service");
    const requestedService = link.dataset.service;

    const matchingOption = [...serviceSelect.options].find(
      (option) =>
        option.text.toLowerCase() === requestedService.toLowerCase()
    );

    if (matchingOption) {
      serviceSelect.value = matchingOption.value;
    }
  });
});

// Contact form -> WhatsApp
document.getElementById("contactForm").addEventListener(
  "submit",
  (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    const lines = [
      "Hello Maa Communication, I have an enquiry.",
      `Name: ${name}`,
      phone ? `My phone: ${phone}` : "",
      `Service: ${service}`,
      message ? `Message: ${message}` : ""
    ].filter(Boolean);

    const whatsappURL =
      "https://wa.me/919807231559?text=" +
      encodeURIComponent(lines.join("\n"));

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );
  }
);
