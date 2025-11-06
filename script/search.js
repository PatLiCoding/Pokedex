let searchResult = [];

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
  document.getElementById("btnSection").innerHTML =
    getTemplatesRemoveSearchBtn();
}

function removeSearch() {
  searchResult = [];
  document.getElementById("searchInput").value = "";
  renderPokedex();
  document.getElementById("btnSection").innerHTML = getTemplatesLoadingBtn(
    pokemonDetail.length + 20
  );
}
