let searchResult = [];
const searchInputRef = document.getElementById("searchInput");

function searchPokemon() {
  let searchValue = searchInputRef.value.toLowerCase();

  if (searchValue.length >= 3) {
    searchResult = pokemonDetail.filter((pokemon) =>
      pokemon.name.includes(searchValue)
    );
    searchResult.length == 0
      ? (pokedexContantRef.innerHTML = getTemplatesUnsuccessfulSearch())
      : renderPokedexSearch(searchResult);
    removeSearchBtn();
  } else {
    renderPokedex();
  }
}

function renderPokedexSearch(searchResult) {
  pokedexContantRef.innerHTML = "";

  for (let i = 0; i < searchResult.length; i++) {
    pokedexContantRef.innerHTML += getTemplatesPokedexContentSearch(i);
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
  btnSectionRef.innerHTML = getTemplatesRemoveSearchBtn();
}

function removeSearch() {
  searchResult = [];
  searchInputRef.value = "";
  renderPokedex();
  btnSectionRef.innerHTML = getTemplatesLoadingBtn(pokemonDetail.length + 20);
}
