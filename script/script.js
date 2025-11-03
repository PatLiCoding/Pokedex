let responseJsonPokemon = [];
let responseJsonPokemonDetail = [];

async function fetchPokemon() {
  try {
    let response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    );
    responseJsonPokemon = await response.json();
  } catch (error) {
    console.log(error);
  }

  console.log(responseJsonPokemon);
  fetchPokemonDetail();
}

async function fetchPokemonDetail() {
  try {
    for (let i = 0; i < responseJsonPokemon.results.length; i++) {
      let response = await fetch(responseJsonPokemon.results[i].url);
      responseJsonPokemonDetail.push(await response.json());
    }
  } catch (error) {
    console.log(error);
  }
  console.log(responseJsonPokemonDetail);
  renderPokedex();
}

function init() {
  fetchPokemon();
}

function renderPokedex() {
  for (let i = 0; i < responseJsonPokemon.results.length; i++) {
    document.getElementById("pokedexContant").innerHTML +=
      getTemplatesPokedexContent(i);
  }
}
