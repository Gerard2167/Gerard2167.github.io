
// Reemplaza este número con el WhatsApp real, incluyendo el código de país (Panamá: 507).
const WHATSAPP_NUMBER = "50760000000";
const MESSAGE = "Hola, conocí La Casita de la Gallina al escanear el QR de mi bandeja. Quisiera más información sobre el Club La Casita.";

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

