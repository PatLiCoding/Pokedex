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
  renderDialog(i);
}

function renderDialog(i) {
  dialogPokemonContentRef.innerHTML = getTemplatesDialogContent(
    i,
    pokemonDetail
  );
  renderTypDialog(i);
  setInformationContainer(i);
}

function renderTypDialog(i) {
  let array = pokemonDetail;
  for (let j = 0; j < pokemonDetail[i].types.length; j++) {
    document.getElementById(`idDialog${i}`).innerHTML += getTemplatesPokedexTyp(
      i,
      j,
      array
    );
  }
}

function renderAbilities(i, pokemonDetail) {
  for (let j = 0; j < pokemonDetail[i].abilities.length; j++) {
    document.getElementById("abilitiesContainer").innerHTML +=
      getTemplatesAbilities(i, j, pokemonDetail);
  }
}

function setInformationContainer(i) {
  let array = pokemonDetail;
  document.getElementById("pokemonDetailContainer").innerHTML =
    getTemplatesInfomation(i, array);
  renderAbilities(i, array);
}

function setStatsContainer(i) {
  document.getElementById("pokemonDetailContainer").innerHTML = "";
  let array = pokemonDetail;

  for (let j = 0; j < pokemonDetail[i].stats.length; j++) {
    document.getElementById("pokemonDetailContainer").innerHTML +=
      getTemplatesStats(i, j, array);
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
  let array = pokemonDetail;
  if (i > 0) {
    dialogPokemonContentRef.innerHTML = getTemplatesDialogContent(i - 1, array);
    renderTypDialog(i - 1, array);
    renderDialog(i - 1, array);
  } else {
    closeDialog();
  }
}

async function changeToNextPokemon(i) {
  document.getElementById(`nextBtn${i}`).disabled = true;
  let array = pokemonDetail;

  if (i < pokemon.results.length - 1) {
    await renderNextPokemonDialog(i, array);
  } else {
    closeDialog();
    window.scrollTo(0, document.body.scrollHeight);
  }
}

async function renderNextPokemonDialog(i, pokemonDetail) {
  dialogPokemonContentRef.innerHTML = getTemplatesDialogContent(
    i + 1,
    pokemonDetail
  );
  renderTypDialog(i + 1, pokemonDetail);
  renderDialog(i + 1, pokemonDetail);
}
