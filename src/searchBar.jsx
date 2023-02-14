import React, { useState } from "react";
import "./searchBar.css";


export default function SearchBar(props) {

   const [pokemonName, setpokemonName] = useState('');    
  

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(pokemonName)

  }

  function handleChange(e) {
  setpokemonName(e.target.value);
  }

  
    return (
    <div className="searchBarContainer">
      <div className="searchBar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={pokemonName} onChange={handleChange}
            className="searchbutton"
            placeholder="Search Any Pokèmon"
          />
          <input type="submit" value=""></input>
        </form>
      </div>
    </div>
  );

};
