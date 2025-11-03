function getTemplatesPokedexContent(i) {
  return /*HTML*/ `
        <div class="pokemonContainer">
          <div class="headline">
            <p>#${i}</p>
            <h2>${responseJson.results[i].name}</h2>
          </div>
          <div class="pokemonImgBox">
            <img src="${responseJson.results[i].url}">
          </div>
          <div class="typBox">
            <p>Typ</p>
          </div>
        </div>`;
}
