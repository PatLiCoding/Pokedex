function getTemplatesPokedexContent(i) {
  return /*HTML*/ `
        <div class="pokemonContainer" onclick="openDialog(${
          pokemonDetail[i].id - 1
        })">
          <div class="pokemonCardHeadline">
            <p>#${pokemonDetail[i].id}</p>
            <h2>${
              pokemonDetail[i].name.charAt(0).toUpperCase() +
              pokemonDetail[i].name.slice(1).toLowerCase()
            }</h2>
          </div>
          <div class="pokemonImgBox bg${
            pokemonDetail[i].types[0].type.name.charAt(0).toUpperCase() +
            pokemonDetail[i].types[0].type.name.slice(1).toLowerCase()
          }"">
            <img class="pokemonImage" src="${
              pokemonDetail[i].sprites.other["official-artwork"].front_default
            }">
          </div>
          <div id="id${i}" class="typBox">
          </div>
        </div>`;
}

function getTemplatesPokedexTyp(i, j) {
  return /*HTML*/ `
    <p class="bgBorder bg${
      pokemonDetail[i].types[j].type.name.charAt(0).toUpperCase() +
      pokemonDetail[i].types[j].type.name.slice(1).toLowerCase()
    }"> ${
    pokemonDetail[i].types[j].type.name.charAt(0).toUpperCase() +
    pokemonDetail[i].types[j].type.name.slice(1).toLowerCase()
  }</p>`;
}

function getTemplatesLoadingBtn(i, j) {
  return /*HTML*/ `
  <button class="btn" onclick="init(${i}, ${j})">Load More</button>`;
}

function getTemplatesloadingtextContainer() {
  return /*HTML*/ `
  <p class="placeholderContent">
    This may take a moment.<br>
    Please wait while we load your Pokémon.
  </p>`;
}

//Dialog Section

function getTemplatesDialogPokedexContent(i) {
  return /*HTML*/ `
        <div class="dialogPokemonContent">
          <div class="pokemonDialogHeadline">
            <p>#${i + 1}</p>
            <h2>${
              pokemonDetail[i].name.charAt(0).toUpperCase() +
              pokemonDetail[i].name.slice(1).toLowerCase()
            }</h2>
          </div>
          <div class="pokemonImgBoxDialog bg${
            pokemonDetail[i].types[0].type.name.charAt(0).toUpperCase() +
            pokemonDetail[i].types[0].type.name.slice(1).toLowerCase()
          }"">
            <button class="pokemonChangeBtn" onclick="changeToPreviousPokemon(${i})">
            <
            </button>
            <img class="pokemonImageDialog" src="${
              pokemonDetail[i].sprites.other["official-artwork"].front_default
            }">
            <button id="nextBtn${i}" class="pokemonChangeBtn" onclick="changeToNextPokemon(${i})">></button>
          </div>
          <div id="idDialog${i}" class="typBox"></div>
          <nav class="dialogPokemonDetailNav">
            |
            <a onclick="setBasicInformationToDetailContainer(${i})">
              Details
            </a>
            |
            <a onclick="setStatsToDetailContainer(${i})">Stats</a>
            |
          </nav>
          <div id="pokemonDetailContainer"></div>
        </div>`;
}

function getTemplatesDialogPokemonInfomation(i) {
  return /*HTML*/ `
    <div class="basicInfomationContainer">
      <div class="basicInfomationBox">
        <span class="headlineDetail">Height:</span>
        <span>${pokemonDetail[i].height}</span>
      </div>
      <div class="basicInfomationBox">
        <span class="headlineDetail">Weight:</span>
        <span>${pokemonDetail[i].weight}</span>
      </div>
      <div class="basicInfomationBox">
        <span class="headlineDetail">Abilities:</span>
        <div id="abilitiesContainer" class="abilitiesContainer"></div>
      </div>
    </div>`;
}

function getTemplatesDialogPokemonAbilities(i, j) {
  return /*HTML*/ `
  <span>${pokemonDetail[i].abilities[j].ability.name}</span>`;
}

function getTemplatesDialogPokemonStats(i, j) {
  return /*HTML*/ `
    <div class="statsBox">
      <span>${
        pokemonDetail[i].stats[j].stat.name.charAt(0).toUpperCase() +
        pokemonDetail[i].stats[j].stat.name.slice(1, 8).toLowerCase() +
        pokemonDetail[i].stats[j].stat.name.charAt(8).toUpperCase() +
        pokemonDetail[i].stats[j].stat.name.slice(9).toLowerCase()
      }:</span>
      <span> ${pokemonDetail[i].stats[j].base_stat}</span>
    </div>`;
}

//Search Section

function getTemplatesPokedexContentSearch(i) {
  return /*HTML*/ `
        <div class="pokemonContainer" onclick="openDialog(${
          searchResult[i].id - 1
        })">
          <div class="pokemonCardHeadline">
            <p>#${searchResult[i].id}</p>
            <h2>${
              searchResult[i].name.charAt(0).toUpperCase() +
              searchResult[i].name.slice(1).toLowerCase()
            }</h2>
          </div>
          <div class="pokemonImgBox bg${
            searchResult[i].types[0].type.name.charAt(0).toUpperCase() +
            searchResult[i].types[0].type.name.slice(1).toLowerCase()
          }"">
            <img class="pokemonImage" src="${
              searchResult[i].sprites.front_default
            }">
          </div>
          <div id="id${i}" class="typBox">
          </div>
        </div>`;
}

function getTemplatesPokedexTypSearch(i, j) {
  return /*HTML*/ `
    <p class="bgBorder bg${
      searchResult[i].types[j].type.name.charAt(0).toUpperCase() +
      searchResult[i].types[j].type.name.slice(1).toLowerCase()
    }"> ${
    searchResult[i].types[j].type.name.charAt(0).toUpperCase() +
    searchResult[i].types[j].type.name.slice(1).toLowerCase()
  }</p>`;
}

function getTemplatesRemoveSearchBtn() {
  return /*HTML*/ `
  <button class="btn" onclick="removeSearch()">Clear Search</button>`;
}

function getTemplatesUnsuccessfulSearch() {
  return /*HTML*/ `
  <p class="placeholderContent">
    No Pokémon found in the loading database.<br>
    The name is incorrect or not in the loading database.
  </p>`;
}
