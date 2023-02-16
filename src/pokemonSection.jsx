import React, { useEffect, useState } from "react";
import "./pokemonSection.css";

export default function Pokemonsection({ pokemonData, getPokemonSpeciesData }) {
  const [flavorText, setFlavorText] = useState(
    "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger."
  );

  useEffect(() => {
    if (!getPokemonSpeciesData) {
      setFlavorText(
        "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger."
      );
    } else if (
      getPokemonSpeciesData.flavor_text_entries &&
      getPokemonSpeciesData.flavor_text_entries.length >= 1
    ) {
      const filteredTextEntries =
        getPokemonSpeciesData.flavor_text_entries.filter(
          (entry) => entry.language.name === "en"
        );
      if (filteredTextEntries.length > 0) {
        const text =
          filteredTextEntries[0].flavor_text
            .toLowerCase()
            .charAt(0)
            .toUpperCase() +
          filteredTextEntries[0].flavor_text
            .slice(1)
            .toLowerCase()
            .replace("\f", "\n");

        setFlavorText(text);
      } else {
        setFlavorText("Info not available in English");
      }
    } else {
      setFlavorText("Info not available");
    }
  }, [getPokemonSpeciesData]);

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
