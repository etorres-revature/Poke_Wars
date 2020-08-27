//pokemon api
//https://pokeapi.co/api/v2/pokemon/

//star wars api
//https://swapi.dev/api/people/

let pokemon = "";
let starWars = "";
let basePokeURL = "https://pokeapi.co/api/v2/pokemon/";
let baseStarWarsURL = "https://swapi.dev/api/people/?search=";

function getPokeMon(banana) {
  let searchPokeURL = basePokeURL + banana;

  $.ajax({
    url: searchPokeURL,
    method: "GET",
  }).then(function (pokeData) {
    console.log(pokeData);
  });
}

function getStarWars(apple) {
  let searchStarWarsURL = baseStarWarsURL + apple;

  $.ajax({
    url: searchStarWarsURL,
    method: "GET",
  }).then(function (starWarsData) {
    console.log(starWarsData);
  });
}

$("#pick-poke").on("click", function () {
  event.preventDefault();
  pokemon = $("#poke-input").val().trim();
  getPokeMon(pokemon);
});

$("#pick-star-wars").on("click", function () {
  event.preventDefault();
  starWars = $("#star-wars-input").val().trim();
  getStarWars(starWars);
});
