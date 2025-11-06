const dialogRef = document.getElementById("dialog");
const dialogPokemonContentRef = document.getElementById("dialogPokemonContent");

function eventBubbling(event) {
  if (event.target === dialogRef) {
    dialogRef.close(closeDialog());
  }
}

function stopPropagation(event) {
  event.stopPropagation();
}

function openDialog(i) {
  dialogRef.showModal();
  hiddenBody();
  dialogRef.classList.add("opened");
  renderPokemonDialog(i);
}

function renderPokemonDialog(i) {
  dialogPokemonContentRef.innerHTML = getTemplatesDialogPokedexContent(i);
  renderPokemonTypDialog(i);
  setBasicInformationToDetailContainer(i);
}

function renderPokemonTypDialog(i) {
  for (let j = 0; j < pokemonDetail[i].types.length; j++) {
    document.getElementById(`idDialog${i}`).innerHTML += getTemplatesPokedexTyp(
      i,
      j
    );
  }
}

function renderPokemonAbilitiesDialog(i) {
  for (let j = 0; j < pokemonDetail[i].abilities.length; j++) {
    document.getElementById("abilitiesContainer").innerHTML +=
      getTemplatesDialogPokemonAbilities(i, j);
  }
}

function setBasicInformationToDetailContainer(i) {
  document.getElementById("pokemonDetailContainer").innerHTML =
    getTemplatesDialogPokemonInfomation(i);
  renderPokemonAbilitiesDialog(i);
}

function setStatsToDetailContainer(i) {
  document.getElementById("pokemonDetailContainer").innerHTML = "";

  for (let j = 0; j < pokemonDetail[i].stats.length; j++) {
    document.getElementById("pokemonDetailContainer").innerHTML +=
      getTemplatesDialogPokemonStats(i, j);
  }
}

function closeDialog() {
  dialogRef.close();
  showBody();
  dialogRef.classList.remove("opened");
}

function hiddenBody() {
  document.body.style.overflow = "hidden";
}

function showBody() {
  document.body.style.overflow = "";
}

function changeToPreviousPokemon(i) {
  if (i > 0) {
    dialogPokemonContentRef.innerHTML = getTemplatesDialogPokedexContent(i - 1);
    renderPokemonTypDialog(i - 1);
    renderPokemonDialog(i - 1);
  } else {
    closeDialog();
  }
}

async function changeToNextPokemon(i) {
  document.getElementById(`nextBtn${i}`).disabled = true;

  if (i < pokemon.results.length - 1) {
    await renderNextPokemonDialog(i);
  } else {
    await init(i + 21);
    await renderNextPokemonDialog(i);
  }
}

async function renderNextPokemonDialog(i) {
  dialogPokemonContentRef.innerHTML = getTemplatesDialogPokedexContent(i + 1);
  renderPokemonTypDialog(i + 1);
  renderPokemonDialog(i + 1);
}
