import React, { useState } from "react";
import "./App.css";
import Navbar from "./nav";
import Pokedexheader from "./poke-dex-header";
import Pokemonsection from "./pokemonSection";

function App() {
  const [pokemonData, setPokemonData] = useState(null);

  const updatePokemonData = (data) => {
    setPokemonData(data);
  };

  const [pokemonSpeciesData, setPokemonSpeciesData] = useState(null);

  const updatePokemonSpeciesData = (data) => {
    setPokemonSpeciesData(data);
  };

  return (
    <div className="App">
      <Pokedexheader />
      <Navbar
        onUpdate={updatePokemonData}
        onUpdateSpecies={updatePokemonSpeciesData}
      />
      <Pokemonsection
        pokemonData={pokemonData}
        getPokemonSpeciesData={pokemonSpeciesData}
      />
    </div>
  );
}

export default App;
