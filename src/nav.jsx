import React from "react";
import "./nav.css";

export default function Navbar() {
  return (
    <div>
      <div className="infoContainer">
        <div className="info">
          <h1>Info</h1>
          <div className="infoText">
             A pokedex is basically a dictionary for the Pokemon it has all the
            info for all 1008 poke from type, abilities, moves and much more.
          </div>
        </div>
        <div className="howToUse">
          <h1>How To Use</h1>
          <div className="infoText">
            Search anything in the search bar like name type or abilities and a
            list of pokemon matching that criteria will pop up
          </div>
        </div>
      </div>
    </div>
  );
}
