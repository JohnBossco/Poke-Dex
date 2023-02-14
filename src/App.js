import React, { useState } from "react";
import './App.css';
import Navbar from './nav';
import Pokedexheader from './poke-dex-header';
import Pokemonsection from './pokemonSection';




function App() {

  const [pokemonData, setPokemonData] = useState(null);

  const updatePokemonData = (data) => {
    setPokemonData(data);
  };


  return (
    <div className="App">
      <Pokedexheader />
      <Navbar onUpdate = {updatePokemonData}/>
      <Pokemonsection pokemonData={pokemonData} />
    </div>
  );
}

export default App;
