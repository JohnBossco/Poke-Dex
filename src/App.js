import React from 'react';
import './App.css';
import Navbar from './nav';
import Pokedexheader from './poke-dex-header';

function App() {
  return (
    <div className="App">
      <Pokedexheader />
      <Navbar/>
    </div>
  );
}

export default App;
