const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-note').textContent = 'Formular noch nicht aktiv. Bitte schreib mir direkt eine E-Mail, bis das hier eingerichtet ist.';
  });
}
