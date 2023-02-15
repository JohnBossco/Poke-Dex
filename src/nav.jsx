import React from "react";
import "./nav.css";
import "./pokemonSection.css"
import Searchbar from './searchBar';

export default function Navbar(props) {


  function getPokemonData(pokemonName) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then((res) => res.json())
  .then((data) => {
    props.onUpdate(data);
    
  })
  }
  
  function getPokemonSpeciesData(pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
    .then((res) => res.json())
    .then((data) => {
      props.onUpdateSpecies(data);
      
    })
    }



  return (
    <div>
      <div className="infoContainer">
        <div className="info">
          <h1>Info</h1>
          <div className="infoText">
            A pokèdex is basically a dictionary for the Pokemon it has all the
            info for all 1008 pokèmon from type, abilities, moves and much more.
          </div>
        </div>
        <Searchbar className="mainSearchBar" onSubmit={getPokemonData} onSpeciesSubmit={getPokemonSpeciesData} />
        <div className="howToUse">
          <h1>How To Use</h1>
          <div className="infoText">
            Search anything in the search bar like name or pokèmon number and a
            list of pokèmon matching that criteria will pop up
          </div>
        </div>
      </div>
    </div>
  );
}

//<Searchbar className="mainSearchBar" onSubmit={getPokemonData} />