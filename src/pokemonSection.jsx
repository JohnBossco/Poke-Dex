import React, { useState } from "react";
import "./pokemonSection.css"
import Axios from "axios";
import Searchbar from './searchBar';


export default function Pokemonsection() {

    
    return (
        <div className="pokemonMainSection">
            <div className="pokemonInfoContainer">
                <div className="pokemonInfoBoxes">
                    <div id="infoBox" className="typeBox">
                    Type
                    </div>
                    <div id="infoBox" className="pokemonBox">
                    Pokemon
                    </div>
                    <div id="infoBox" className="statBox">
                    Scroll bar
                    </div>
                </div>
            </div>
        </div>

)}
