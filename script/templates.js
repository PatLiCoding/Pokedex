function getTemplatesPokedexContent(i, array) {
  return /*HTML*/ `
        <div class="pokemonContainer" onclick="currentSearchCheckDialog(${i})">
          <div class="pokemonCardHeadline">
            <p>#${array[i].id}</p>
            <h2>${
              array[i].name.charAt(0).toUpperCase() +
              array[i].name.slice(1).toLowerCase()
            }</h2>
          </div>
          <div class="pokemonImgBox bg${
            array[i].types[0].type.name.charAt(0).toUpperCase() +
            array[i].types[0].type.name.slice(1).toLowerCase()
          }">
            <img class="pokemonImage" src="${
              array[i].sprites.other["official-artwork"].front_default
            }">
          </div>
          <div id="id${i}" class="typBox">
          </div>
        </div>`;
}

function getTemplatesPokedexTyp(i, j, array) {
  return /*HTML*/ `
    <p class="bgBorder bg${
      array[i].types[j].type.name.charAt(0).toUpperCase() +
      array[i].types[j].type.name.slice(1).toLowerCase()
    }"> ${
    array[i].types[j].type.name.charAt(0).toUpperCase() +
    array[i].types[j].type.name.slice(1).toLowerCase()
  }</p>`;
}

function getTemplatesLoadingBtn(i, j) {
  return /*HTML*/ `
  <button class="btn" onclick="loadMorePokemon(${i}, ${j})">Load More</button>`;
}

function getTemplatesloadingtextContainer() {
  return /*HTML*/ `
  <p class="placeholderContent">
    This may take a moment.<br>
    Please wait while we load your Pokémon.
  </p>`;
}

function getTemplatesRemoveSearchBtn() {
  return /*HTML*/ `
  <button class="btn" onclick="removeSearch()">Clear Search</button>`;
}

//Dialog Section

function getTemplatesDialogContent(i, array) {
  return /*HTML*/ `
        <div class="dialogPokemonContent">
        <div class="pokemonDialogStyle">
          <div class="pokemonDialogHeadline">
            <p>#${array[i].id}</p>
            <h2>${
              array[i].name.charAt(0).toUpperCase() +
              array[i].name.slice(1).toLowerCase()
            }</h2>
          </div>
          <div class="pokemonImgBoxDialog bg${
            array[i].types[0].type.name.charAt(0).toUpperCase() +
            array[i].types[0].type.name.slice(1).toLowerCase()
          }">
            <button class="pokemonChangeBtn" onclick="currentSearchCheckPrevious(${i})">
            <
            </button>
            <img class="pokemonImageDialog" src="${
              array[i].sprites.other["official-artwork"].front_default
            }">
            <button id="nextBtn${i}" class="pokemonChangeBtn" onclick="currentSearchCheckNext(${i})">></button>
          </div>
          <div id="idDialog${i}" class="typBox"></div>
          </div>
          <div class="pokemonDialogStyle">
          <nav class="dialogPokemonDetailNav">
            |
            <a onclick="currentSearchCheckInfo(${i})">
              Details
            </a>
            |
            <a onclick="currentSearchCheckStats(${i})">Stats</a>
            |
          </nav>
          <div id="pokemonDetailContainer"></div>
          </div>
        </div>`;
}

function getTemplatesInfomation(i, array) {
  return /*HTML*/ `
    <div class="basicInfomationContainer">
      <div class="basicInfomationBox">
        <span class="headlineDetail">Height:</span>
        <span>${array[i].height}</span>
      </div>
      <div class="basicInfomationBox">
        <span class="headlineDetail">Weight:</span>
        <span>${array[i].weight}</span>
      </div>
      <div class="basicInfomationBox">
        <span class="headlineDetail">Abilities:</span>
        <div id="abilitiesContainer" class="abilitiesContainer"></div>
      </div>
    </div>`;
}

function getTemplatesAbilities(i, j, array) {
  return /*HTML*/ `
  <span>${array[i].abilities[j].ability.name}</span>`;
}

function getTemplatesStats(i, j, array) {
  return /*HTML*/ `
    <div class="statsBox">
      <span>${
        array[i].stats[j].stat.name.charAt(0).toUpperCase() +
        array[i].stats[j].stat.name.slice(1, 8).toLowerCase() +
        array[i].stats[j].stat.name.charAt(8).toUpperCase() +
        array[i].stats[j].stat.name.slice(9).toLowerCase()
      }:</span>
      <span> ${array[i].stats[j].base_stat}</span>
    </div>`;
}
