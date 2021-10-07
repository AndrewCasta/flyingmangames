// ============
// Nav
// ============

const mobileNavLinks = document.querySelector('.nav-links-mobile');
const navToggle = document.querySelector('#nav-toggle');

navToggle.addEventListener('click', e => {
  e.preventDefault;
  mobileNavLinks.classList.toggle('hidden');
});
