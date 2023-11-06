const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;

window.onload = root.setAttribute('data-theme', 'light');

themeToggle.addEventListener('click', function () {
  if (root.getAttribute('data-theme') === 'light') {
    root.setAttribute('data-theme', 'dark');
  } else {
    root.setAttribute('data-theme', 'light');
  }
});