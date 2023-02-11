import React from "react";
import "./searchBar.css";
import Axios from "axios";
import { useState } from "react";


export default function SearchBar() {

  const [pokemoneName, setPokemonName] = useState('');

  const searchPokemon = (e) => {
    e.preventDefault();
    
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemoneName}`).then(
      (res) => {
        console.log(res);
        setPokemonName({ 
            name: pokemoneName,
            species: res.data.species.name,
            img: res.data.sprites.other.home,
            id: res.data.id,
                        
        });
      }
    );
  };

  return (
    <div className="searchBarContainer">
      <div className="searchBar">
        <form onSubmit={searchPokemon}>
          <input
            value={pokemoneName}
            onChange={(event) => {
              setPokemonName(event.target.value);
            }}
            className="searchbutton"
            type="text"
            placeholder="Search Any Pokèmon"
          />
          <input type="submit" value=""></input>
        </form>
      </div>
    </div>
  );
}
