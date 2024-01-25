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
let movies = null;
let moviesInRow = 0;
let maxMovies = 10;
function populatePosters() {
  let numPages = 5;
  for (let i = 1; i < numPages + 1; i++) {
    fetch(`/old-site/files/movies${i}.json`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Response was not ok');
      }
      return response.json();
    })
    .then(data => {
      movies = data.results;
      movies.forEach(movie => {

        if (moviesInRow === 0 || moviesInRow > maxMovies) {
          movieRow = document.createElement('div');
          movieRow.classList.add('movie-row');
          allMovieRows.appendChild(movieRow);
          moviesInRow = 0;
        }
        const title = movie.original_title;
        const posterPath = movie.poster_path;
        const description = movie.overview;
        const posterUrl = `https://www.themoviedb.org/t/p/w440_and_h660_face${posterPath}`;
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        const movieDescription = document.createElement('div');
        const movieDescriptionTitle = document.createElement('h3');
        movieDescriptionTitle.classList.add('description-title');
        const movieDescriptionP = document.createElement('p');
        const watchBtn = document.createElement('button');
        watchBtn.classList.add('watch-button');
        movieDescriptionP.classList.add('description-text');
        movieDescription.classList.add('movie-description');
        const movieImg = document.createElement('div');
        movieImg.classList.add('movie-img');
        const imgElement = document.createElement('img');
        imgElement.src = posterUrl;
        movieImg.appendChild(imgElement);
        const movieTitle = document.createElement('div');
        movieTitle.classList.add('movie-title')
        const titleElement = document.createElement('p');
        titleElement.textContent = title;
        //movieDescriptionTitle.textContent = title;
        movieDescriptionP.textContent = description;
        movieTitle.appendChild(titleElement);
        movieCard.appendChild(movieImg);
        movieImg.appendChild(movieDescription);
        //movieDescription.appendChild(movieDescriptionTitle);
        movieDescription.appendChild(movieDescriptionP);
        movieDescription.appendChild(watchBtn);
        movieCard.appendChild(movieTitle);
        movieRow.appendChild(movieCard);
        moviesInRow++;
      });
      /*scrollBtn = document.createElement('button');
      scrollBtn.classList.add('scroll-btn');
      scrollBtn.classList.add('scroll-left');
      movieRow.appendChild(scrollBtn);*/
    })
    .catch(error => {
      console.error('Error fetching or parsing JSON:', error);
    });
  }
}
