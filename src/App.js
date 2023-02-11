import React from 'react';
import './App.css';
import Navbar from './nav';
import Pokedexheader from './poke-dex-header';
import Pokemonsection from './pokemonSection';



function App() {
  return (
    <div className="App">
      <Pokedexheader />
      <Navbar/>
      <Pokemonsection />
    </div>
  );
}

export default App;
