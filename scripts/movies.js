const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;
const allMovieRows = document.querySelector('.movie-rows-wrapper');
const movieRow = document.querySelector('.movie-row');
const movieCard = document.querySelector('.movie-card');
const movieImg = document.querySelector('.movie-img');
const movieDescription = document.querySelector('.movie-description');


window.onload = root.setAttribute('data-theme', 'light');

themeToggle.addEventListener('click', function () {
  if (root.getAttribute('data-theme') === 'light') {
    root.setAttribute('data-theme', 'dark');
  } else {
    root.setAttribute('data-theme', 'light');
  }
});

