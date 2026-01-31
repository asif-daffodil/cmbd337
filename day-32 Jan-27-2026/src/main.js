import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
  <div class="flex">
    <img src="${viteLogo}" class="w-8" alt="Vite logo" />
    <img src="${javascriptLogo}" class="w-8" alt="JavaScript logo" />
  </div>
`

const myForm = document.getElementById('myForm');
const errName = document.getElementById('errName');
const errEmail = document.getElementById('errEmail');
const showResult = document.getElementById('showResult');

myForm.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(myForm);
  const name = formData.get('name');
  const email = formData.get('email');

  if (!name || !email) {
    if (!name) {
      errName.textContent = 'Name is required!';
    } else {
      errName.textContent = '';
    }
    if (!email) {
      errEmail.textContent = 'Email is required!';
    } else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      errEmail.textContent = 'Invalid email address!';
    } else {
      errEmail.textContent = '';
    }
  } else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    errEmail.textContent = 'Invalid email address!';
  } else {
    errName.textContent = '';
    errEmail.textContent = '';
    showResult.textContent = `Registration successful! Name: ${name}, Email: ${email}`;
    myForm.reset();
  }
});
