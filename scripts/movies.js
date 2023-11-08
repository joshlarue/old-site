const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;
const allMovieRows = document.querySelector('.movie-rows-wrapper');


window.onload = root.setAttribute('data-theme', 'light');

themeToggle.addEventListener('click', function () {
  if (root.getAttribute('data-theme') === 'light') {
    root.setAttribute('data-theme', 'dark');
  } else {
    root.setAttribute('data-theme', 'light');
  }
});

window.onload = populatePosters();

function populatePosters() {
  fetch('/files/movies.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const movies = data.results;
    let moviesInRow = 0;
    let currentRow = null;

    movies.forEach(movie => {

      if (moviesInRow === 0 || moviesInRow > 5) {
        movieRow = document.createElement('div');
        movieRow.classList.add('movie-row');
        allMovieRows.appendChild(currentRow);
        moviesInRow = 0;
      }
      const title = movie.original_title;
      const posterPath = movie.poster_path;
      const description = movie.overview;
      const posterUrl = `https://www.themoviedb.org/t/p/w440_and_h660_face${posterPath}`;
      movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
      const movieImg = document.createElement('div');
      movieImg.classList.add('movie-img');
      const imgElement = document.createElement('img');
      imgElement.src = posterUrl;
      movieImg.appendChild(imgElement);
      const movieTitle = document.createElement('div');
      movieTitle.classList.add('movie-title')
      const titleElement = document.createElement('p');
      titleElement.textContent = title;
      movieTitle.appendChild(titleElement);
      movieCard.appendChild(movieImg);
      movieCard.appendChild(movieTitle);
      movieRow.appendChild(movieCard);
      moviesInRow++;
    });
  })
  .catch(error => {
    console.error('Error fetching or parsing JSON:', error);
  });
}