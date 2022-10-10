import React, { useState, useEffect } from "react";

function DexEntry() {
  const Pokedex = require("pokeapi-js-wrapper")
  const P = new Pokedex.Pokedex()
  const [data, setData] = useState([])
  const eevee = P.getPokemonByName("eevee").then(function(response) {
    console.log(response);
    setData(response["abilities"][0]["ability"]["name"])
  })
  
   return (
    <div>
      <p>hello {data}</p>
    </div>
  )
}

export default DexEntry;