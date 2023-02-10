import React from "react";
import "./searchBar.css"

export default function searchBar(){
    return(
        <div className="searchBarContainer">
            <div className="searchBar">
                <form action="">
                    <input className="searchbutton" type="text" placeholder="Search Any Pokèmon" />
                    <input type="submit" value = ""></input>
                </form>
            </div>
        </div>
    )
}