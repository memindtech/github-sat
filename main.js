const app = document.getElementById('app');

async function loadLogin() {
  const res = await fetch('./components/login.html');
  const html = await res.text();
  app.innerHTML = html;

  // Optional: bind logic after loading
  const form = app.querySelector('#loginForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = form.username.value;
      const password = form.password.value;

      if (username === 'admin' && password === '1234') {
        alert('Login successful!');
      } else {
        alert('Invalid credentials');
      }
    });
  }
}

function helloWorld () {
  return "Hello Holiday"
}

function secondFunction (text) {
  return text;
}

export { helloWorld, loadLogin, secondFunction }
