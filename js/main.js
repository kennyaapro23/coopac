// ================= Scroll suave =================
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    }
  });
});

// ================= Navbar al hacer scroll =================
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = '#082645';
  } else {
    navbar.style.background = 'rgba(11, 20, 38, 0.95)';
  }
});

// ================= Menú hamburguesa =================
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ================= Validación formulario =================
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = 'Por favor, completa todos los campos.';
    formMessage.style.color = 'red';
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMessage.textContent = 'Ingresa un correo válido.';
    formMessage.style.color = 'red';
    return;
  }

  formMessage.textContent = '¡Mensaje enviado correctamente!';
  formMessage.style.color = 'green';
  form.reset();
});

// ================= Hero Carrusel =================
let heroSlides = document.querySelectorAll(".hero-slide");
let dots = document.querySelectorAll(".hero-dot");
let idx = 0;

function showSlide(n) {
  heroSlides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  idx = (n + heroSlides.length) % heroSlides.length;

  heroSlides[idx].classList.add("active");
  dots[idx].classList.add("active");
}

// Flechas
document.querySelector(".hero-arrow.left").addEventListener("click", () => showSlide(idx - 1));
document.querySelector(".hero-arrow.right").addEventListener("click", () => showSlide(idx + 1));

// Puntitos clickeables
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showSlide(i));
});

// Automático cada 5 segundos
setInterval(() => showSlide(idx + 1), 5000);
