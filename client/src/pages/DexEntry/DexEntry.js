import React, { useState, useEffect } from "react";

function DexEntry() {
  const Pokedex = require("pokeapi-js-wrapper")
  const P = new Pokedex.Pokedex()
  const [data, setData] = useState("")

  useEffect(() => {
      P.getPokemonByName("eevee")
        .then(response => {setData(response); console.log(response)})
      }, [setData])
  
   return (
    <div>
    {data !== "" &&
      <div>
      <p>hello <img src= {data.sprites.front_default}></img></p>
    </div>
    }
    </div>
  )
}

export default DexEntry;