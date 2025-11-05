let pokemon = [];
let pokemonDetail = [];
let searchResult = [];

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
  document.getElementById("pokedexContant").innerHTML = "";

  for (let i = 0; i < pokemonDetail.length; i++) {
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

function renderLoadingBtn(i) {
  i = i + 20;

  document.getElementById("BtnSection").innerHTML = getTemplatesLoadingBtn(i);
}

function searchPokemon() {
  let searchInputRef = document.getElementById("searchInput");
  let searchValue = searchInputRef.value.toLowerCase();

  if (searchValue.length >= 3) {
    searchResult = pokemonDetail.filter((pokemon) =>
      pokemon.name.includes(searchValue)
    );
    renderPokedexSearch(searchResult);
    removeSearchBtn();
  } else {
    renderPokedex();
  }
}

//Search Section

function renderPokedexSearch(searchResult) {
  document.getElementById("pokedexContant").innerHTML = "";

  for (let i = 0; i < searchResult.length; i++) {
    document.getElementById("pokedexContant").innerHTML +=
      getTemplatesPokedexContentSearch(i);
    renderPokemonTypSearch(i);
  }
}

function renderPokemonTypSearch(i) {
  for (let j = 0; j < searchResult[i].types.length; j++) {
    document.getElementById(`id${i}`).innerHTML += getTemplatesPokedexTypSearch(
      i,
      j
    );
  }
}

function removeSearchBtn() {
  document.getElementById("BtnSection").innerHTML =
    getTemplatesRemoveSearchBtn();
}

function removeSearch() {
  searchResult = [];
  document.getElementById("searchInput").value = "";
  renderPokedex();
  document.getElementById("BtnSection").innerHTML = renderLoadingBtn(
    pokemonDetail.length
  );
}
