// ============
// Nav
// ============

const mobileNavLinks = document.querySelector('.nav-links');
const navToggle = document.querySelector('#nav-toggle');

navToggle.addEventListener('click', e => {
  e.preventDefault;
  mobileNavLinks.classList.toggle('hidden');
});

// ============
// Form Submit
// ============

var form = document.getElementById('mailing-form');

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById('mailing-form-status');
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then(response => {
      status.innerHTML = 'Thanks for your submission!';
      form.reset();
    })
    .catch(error => {
      status.innerHTML = 'Oops! There was a problem submitting your form';
    });
}
form.addEventListener('submit', handleSubmit);
