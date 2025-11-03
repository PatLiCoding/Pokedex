let responseJson = [];

async function fetchPokemon() {
  let response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  );
  responseJson = await response.json();
  console.log(responseJson);
  renderPokedex();
}

function init() {
  fetchPokemon();
}

function renderPokedex() {
  for (let i = 0; i < responseJson.results.length; i++) {
    document.getElementById("pokedexContant").innerHTML +=
      getTemplatesPokedexContent(i);
  }
}
