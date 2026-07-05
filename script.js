const bookingForm = document.querySelector("#booking-form");
const whatsappLink = document.querySelector("#whatsapp-link");
const routeInput = document.querySelector("#route");
const dateInput = document.querySelector("#date");
const timeInput = document.querySelector("#time");
const nameInput = document.querySelector("#name");
const notesInput = document.querySelector("#notes");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector("img");
const whatsappNumber = "";

function buildMessage() {
  const route = routeInput.value;
  const date = dateInput.value || "data a combinar";
  const time = timeInput.value || "horario a combinar";
  const name = nameInput.value.trim() || "Cliente";
  const notes = notesInput.value.trim();

  const lines = [
    `Ola, sou ${name}. Quero reservar um passeio Venturo Jeri Offroad.`,
    `Roteiro: ${route}`,
    `Data: ${date}`,
    `Horario: ${time}`,
  ];

  if (notes) {
    lines.push(`Observacoes: ${notes}`);
  }

  return lines.join("\n");
}

function updateWhatsappLink() {
  const message = encodeURIComponent(buildMessage());
  const target = whatsappNumber ? `/${whatsappNumber}` : "";
  whatsappLink.href = `https://wa.me${target}?text=${message}`;
}

bookingForm.addEventListener("input", updateWhatsappLink);
bookingForm.addEventListener("change", updateWhatsappLink);
updateWhatsappLink();

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    lightboxImage.src = item.dataset.src;
    lightboxImage.alt = item.querySelector("img").alt;
    lightbox.hidden = false;
  });
});

document.querySelector(".lightbox-close").addEventListener("click", () => {
  lightbox.hidden = true;
  lightboxImage.src = "";
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.hidden = true;
    lightboxImage.src = "";
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) {
    lightbox.hidden = true;
    lightboxImage.src = "";
  }
});
