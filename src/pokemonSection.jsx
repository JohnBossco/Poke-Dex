import React from "react";
import "./pokemonSection.css"


export default function Pokemonsection({pokemonData}) {  

    console.log(pokemonData);
    
    
    return (
        <div className="pokemonMainSection">
            <div className="pokemonInfoContainer">
                <div className="pokemonInfoBoxes">
                    <div id="infoBox" className="typeBox">
                        {pokemonData  ? pokemonData.name : "bulbasaur"}

                    </div>
                    <div id="infoBox" className="pokemonBox">
                        <img className="pokemonImage" alt="pokemonImage" src={pokemonData ? pokemonData.sprites.other["official-artwork"].front_default : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}/>
                    Pokemon
                    </div>
                    <div id="infoBox" className="statBox">
                    Scroll bar
                    </div>
    
                </div>
            </div>
        </div>

)}
