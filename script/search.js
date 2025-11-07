let searchResult = [];
const searchInputRef = document.getElementById("searchInput");

function searchPokemon() {
  let searchValue = searchInputRef.value.toLowerCase();

  if (searchValue.length >= 3) {
    filterPokemon(searchValue);
    removeSearchBtn();
  } else {
    pokedexContantRef.innerHTML = "";
    renderPokedex();
    btnSectionRef.innerHTML = getTemplatesLoadingBtn(
      pokemonDetail.length + 20,
      pokemonDetail.length
    );
  }
}

function filterPokemon(searchValue) {
  searchResult = pokemonDetail.filter((pokemon) =>
    pokemon.name.includes(searchValue)
  );
  searchResult.length == 0
    ? (pokedexContantRef.innerHTML = getTemplatesUnsuccessfulSearch())
    : renderPokedexSearch(searchResult);
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
    document.getElementById(`idSearch${i}`).innerHTML +=
      getTemplatesPokedexTypSearch(i, j);
  }
}

function removeSearchBtn() {
  btnSectionRef.innerHTML = getTemplatesRemoveSearchBtn();
}

function removeSearch() {
  searchResult = [];
  searchInputRef.value = "";
  renderPokedex();
  btnSectionRef.innerHTML = getTemplatesLoadingBtn(
    pokemonDetail.length + 20,
    pokemonDetail.length
  );
}

//Search Dialog
function openDialogSearch(i) {
  dialogRef.showModal();
  hiddenBody();
  dialogRef.classList.add("opened");
  renderPokemonDialogSearch(i);
}

function renderPokemonDialogSearch(i) {
  dialogPokemonContentRef.innerHTML = getTemplatesDialogPokedexContentSearch(i);
  renderPokemonTypDialogSearch(i);
  setBasicInformationToDetailContainerSearch(i);
}

function renderPokemonTypDialogSearch(i) {
  for (let j = 0; j < searchResult[i].types.length; j++) {
    document.getElementById(`idDialogSearch${i}`).innerHTML +=
      getTemplatesPokedexTypSearch(i, j);
  }
}

function renderPokemonAbilitiesDialogSearch(i) {
  for (let j = 0; j < searchResult[i].abilities.length; j++) {
    document.getElementById("abilitiesContainerSearch").innerHTML +=
      getTemplatesDialogPokemonAbilitiesSearch(i, j);
  }
}

function setBasicInformationToDetailContainerSearch(i) {
  document.getElementById("pokemonDetailContainerSearch").innerHTML =
    getTemplatesDialogPokemonInfomationSearch(i);
  renderPokemonAbilitiesDialogSearch(i);
}

function setStatsToDetailContainerSearch(i) {
  document.getElementById("pokemonDetailContainerSearch").innerHTML = "";

  for (let j = 0; j < searchResult[i].stats.length; j++) {
    document.getElementById("pokemonDetailContainerSearch").innerHTML +=
      getTemplatesDialogPokemonStatsSearch(i, j);
  }
}

function closeDialogSearch() {
  dialogRef.close();
  showBody();
  dialogRef.classList.remove("opened");
}

function changeToPreviousPokemonSearch(i) {
  if (i > 0) {
    dialogPokemonContentRef.innerHTML = getTemplatesDialogPokedexContentSearch(
      i - 1
    );
    renderPokemonTypDialogSearch(i - 1);
    renderPokemonDialogSearch(i - 1);
  } else {
    closeDialog();
  }
}

async function changeToNextPokemonSearch(i) {
  document.getElementById(`nextSearchBtn${i}`).disabled = true;

  if (i < searchResult.length - 1) {
    await renderNextPokemonDialogSearch(i);
  } else {
    closeDialog();
  }
}

async function renderNextPokemonDialogSearch(i) {
  dialogPokemonContentRef.innerHTML = getTemplatesDialogPokedexContentSearch(
    i + 1
  );
  renderPokemonDialogSearch(i + 1);
}
