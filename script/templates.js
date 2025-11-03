function getTemplatesPokedexContent(i) {
  return /*HTML*/ `
        <div class="pokemonContainer">
          <div class="headline">
            <p>#${i}</p>
            <h2>${responseJsonPokemonDetail[i].name}</h2>
          </div>
          <div class="pokemonImgBox">
            <img class="pokemonImage" src="${responseJsonPokemonDetail[i].sprites.front_default}">
          </div>
          <div class="typBox">
            <p id="id${i}"></p>
          </div>
        </div>`;
}
