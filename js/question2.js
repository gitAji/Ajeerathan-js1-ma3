// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=11738101857c41d6b8789ba69bb6f2b9";
const out = document.querySelector(".result");

fetch(url)
  .then(response => response.json())
  .then(data => listOfMovies(data.results))
  .catch(error => out.innerHTML = "Something's wrong!");

function listOfMovies(list) {
  console.log(list);
  out.innerHTML = "";
  for (var i = 0; i < list.length; i++) {
    if (i === 8) {
      break;
    }
    let movieList = `<div>
      <h3>Movie:${list[i].name}</h3>
      <p>Rating: ${list[i].rating}</p>
      <p>Tags: ${list[i].tags.length}</p>
</div>`;
    out.innerHTML += movieList;
  }
}