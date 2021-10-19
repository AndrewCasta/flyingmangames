// ============
// Nav
// ============

const mobileNavLinks = document.querySelector('.nav-links');
const navToggle = document.querySelector('#nav-toggle');

navToggle.addEventListener('click', e => {
  e.preventDefault;
  mobileNavLinks.classList.toggle('hidden');
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

// ============
// Form Submit
// ============

// var form = document.getElementByIds('mailing-form');
var forms = document.querySelectorAll('#mailing-form');
const formButtons = document.querySelectorAll('#mailing-form-button');

forms.forEach(form => {
  async function handleSubmit(event) {
    event.preventDefault();
    // var status = document.getElementById('mailing-form-status');
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => {
        // status.innerHTML = 'Thanks for your submission!';
        form.reset();
        for (const button of formButtons) {
          button.innerHTML = 'Thanks!';
        }
      })
      .catch(error => {
        // status.innerHTML = 'Oops! There was a problem submitting your form';
      });
  }
  form.addEventListener('submit', handleSubmit);
});
