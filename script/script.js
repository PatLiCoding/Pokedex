let pokemon = [];
let pokemonDetail = [];

console.log(pokemonDetail);

async function init() {
  pokemon = await fetchPokemon();
  await fetchPokemonDetail();
  renderPokedex();
}

async function fetchPokemon() {
  let responseJson = [];
  try {
    let response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    );
    responseJson = await response.json();
  } catch (error) {
    console.log(error);
  }
  return responseJson;
}

async function fetchPokemonDetail() {
  try {
    for (let i = 0; i < pokemon.results.length; i++) {
      let response = await fetch(pokemon.results[i].url);
      pokemonDetail.push(await response.json());
    }
  } catch (error) {
    console.log(error);
  }
}

function renderPokedex() {
  for (let i = 0; i < pokemon.results.length; i++) {
    document.getElementById("pokedexContant").innerHTML +=
      getTemplatesPokedexContent(i);
    renderPokemonTyp(i);
  }
}

function renderPokemonTyp(i) {
  for (let j = 0; j < pokemonDetail[i].types.length; j++) {
    document.getElementById(`id${i}`).innerHTML += getTemplatesPokedexTyp(i, j);
  }
}
