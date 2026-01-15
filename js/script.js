// Ripple effect for buttons
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => btn.classList.remove("clicked"), 150);
  });
});

// Card tap animation (mobile feel)
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("touchstart", () => {
    card.style.transform = "scale(0.97)";
  });
  card.addEventListener("touchend", () => {
    card.style.transform = "scale(1)";
  });
});








// Action cards touch feedback
document.querySelectorAll(".action-card").forEach(card => {
  card.addEventListener("touchstart", () => {
    card.style.transform = "scale(0.96)";
  });
  card.addEventListener("touchend", () => {
    card.style.transform = "scale(1)";
  });
});

// Fake submit feedback (UI feel)
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent! We will contact you soon.");
    form.reset();
  });
}



function sendToWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const whatsappNumber = "919025200380"; // YOUR NUMBER

  const text =
    `Hello MPS,%0A` +
    `Name: ${name}%0A` +
    `Phone: ${phone}%0A` +
    `Message: ${message}`;

  const url = `https://wa.me/${whatsappNumber}?text=${text}`;

  window.open(url, "_blank");
}







function sendToWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // 🔴 FOUNDER'S WHATSAPP NUMBER (CHANGE THIS)
  const founderNumber = "919025200380";

  const whatsappMessage =
    `Hello Sir,%0A` +
    `Name: ${name}%0A` +
    `Phone: ${phone}%0A` +
    `Message: ${message}`;

  const whatsappURL =
    `https://wa.me/${founderNumber}?text=${whatsappMessage}`;

  window.open(whatsappURL, "_blank");
}
