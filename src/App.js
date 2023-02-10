import React from 'react';
import './App.css';
import Navbar from './nav';
import Pokedexheader from './poke-dex-header';
import Searchbar from './searchBar';



function App() {
  return (
    <div className="App">
      <Pokedexheader />
      <Navbar/>
      <Searchbar/>
    </div>
  );
}

export default App;
