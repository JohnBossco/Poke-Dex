import React from "react";
import "./pokemonSection.css";

export default function Pokemonsection({ pokemonData, getPokemonSpeciesData }) {
  console.log(getPokemonSpeciesData);
  console.log(pokemonData);

  const flavorText =
    getPokemonSpeciesData &&
    getPokemonSpeciesData.flavor_text_entries &&
    getPokemonSpeciesData.flavor_text_entries.length > 8
      ? getPokemonSpeciesData.flavor_text_entries[8].flavor_text
          .toLowerCase()
          .charAt(0)
          .toUpperCase() +
        getPokemonSpeciesData.flavor_text_entries[8].flavor_text.slice(1).toLowerCase()
      : "Info not available";


  return (
    <div className="pokemonMainSection">
      <div className="pokemonInfoContainer">
        <div className="pokemonInfoBoxes">
          <div id="infoBox" className="typeBox">
            <div className="pokemonInfo">
              {flavorText
                ? flavorText
                : "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger."}
            </div>
          </div>
          <div id="infoBox" className="pokemonBox">
            <img
              className="pokemonImage"
              alt="pokemonPic"
              src={
                pokemonData
                  ? pokemonData.sprites.other["official-artwork"].front_default
                  : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
              }
            />
            <div className="pokemonName">
              {pokemonData ? pokemonData.name : "bulbasaur"}
            </div>
          </div>
          <div id="infoBox" className="statBox">
            Scroll bar
          </div>
        </div>
      </div>
    </div>
  );
}
