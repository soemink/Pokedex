function DexEntry() {
  const Pokedex = require("pokeapi-js-wrapper")
  const P = new Pokedex.Pokedex()
  P.getPokemonByName("eevee").then(function(response) {
    console.log(response)
  })

  return (
    <div>P</div>
  )
}

export default DexEntry;