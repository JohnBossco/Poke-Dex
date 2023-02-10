import React from "react";
import "./nav.css";
import Searchbar from './searchBar';


export default function Navbar() {
  return (
    <div>
      <div className="infoContainer">
        <div className="info">
          <h1>Info</h1>
          <div className="infoText">
            A pokèdex is basically a dictionary for the Pokemon it has all the
            info for all 1008 poke from type, abilities, moves and much more.
          </div>
        </div>
        <Searchbar className="mainSearchBar" />
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
