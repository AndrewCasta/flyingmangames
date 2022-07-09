// ============
// Nav
// ============

const mobileNavLinks = document.querySelector('.nav-links');
const navToggle = document.querySelector('#nav-toggle');
const navIcon = document.querySelector('#nav-toggle i');

navToggle.addEventListener('click', e => {
  e.preventDefault;
  mobileNavLinks.classList.toggle('hidden');
  navIcon.classList.toggle('icon-flip');
});

const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    mobileNavLinks.classList.add('hidden');

    const id = e.target.getAttribute('href');
    const element = document.getElementById(id);
    let position = element.offsetTop - 150;

    if (id === 'mailing') {
      position = document.body.scrollHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth',
    });
  });
});
