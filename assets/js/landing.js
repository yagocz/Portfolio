/* =========================================================
   GoyCaz Labs — Landing
   Sin dependencias.

   ---------------------------------------------------------
   CONFIGURACIÓN — lo único que necesitas tocar:
   ========================================================= */
const CONFIG = {
  // Número de WhatsApp con código de país, solo dígitos.
  whatsapp: '51994146110',

  // Mensaje que aparece ya escrito cuando el cliente abre el chat.
  mensaje: 'Hola Yago, vi tu página y quiero saber más',

  // Link de tu calendario para agendar (Calendly, Google Calendar, Cal.com...).
  // Mientras esté vacío, el botón "Agenda tu diagnóstico" abre WhatsApp.
  // Cuando tengas el link, pégalo aquí entre las comillas.
  agenda: ''
};
/* ======================================================= */

(() => {
  'use strict';

  const waUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensaje)}`;

  // Todos los botones de WhatsApp
  document.querySelectorAll('[data-wa]').forEach((el) => {
    el.href = waUrl;
    el.target = '_blank';
  });

  // Botones de agenda: al calendario si hay link, si no a WhatsApp
  const agendaUrl = (CONFIG.agenda || '').trim();
  document.querySelectorAll('[data-agenda]').forEach((el) => {
    if (agendaUrl) {
      el.href = agendaUrl;
      el.target = '_blank';
      el.rel = 'noopener';
    } else {
      el.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent('Hola Yago, quiero agendar mi diagnóstico gratis')}`;
      el.target = '_blank';
      el.rel = 'noopener';
    }
  });

  // Sombra del header al bajar
  const header = document.querySelector('.header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 6);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Aparición suave al hacer scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.rv').forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`;
    io.observe(el);
  });

  // Año del pie de página
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
