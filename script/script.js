let pokemon = [];
let pokemonDetail = [];
const pokedexContantRef = document.getElementById("pokedexContant");
const btnSectionRef = document.getElementById("btnSection");

async function init(i) {
  pokemon = await fetchPokemon(i);
  await fetchPokemonDetail();
  renderPokedex();
  renderLoadingBtn(i);
}

async function fetchPokemon(i) {
  let responseJson = [];
  try {
    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${i}&offset=0`
    );
    responseJson = await response.json();
  } catch (error) {
    console.log(error);
  }
  return responseJson;
}

async function fetchPokemonDetail() {
  pokemonDetail = [];

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
  pokedexContantRef.innerHTML = "";

  for (let i = 0; i < pokemonDetail.length; i++) {
    pokedexContantRef.innerHTML += getTemplatesPokedexContent(i);
    renderPokemonTyp(i);
  }
}

function renderPokemonTyp(i) {
  for (let j = 0; j < pokemonDetail[i].types.length; j++) {
    document.getElementById(`id${i}`).innerHTML += getTemplatesPokedexTyp(i, j);
  }
}

function renderLoadingBtn(i) {
  i = i + 20;

  btnSectionRef.innerHTML = getTemplatesLoadingBtn(i);
}
