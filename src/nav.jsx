import React from "react";
import './nav.css';


export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        Navbar
        <div className="nav">
        <ul className="nav-container">
          <li>
         <a className="nav-links" href="conceptIdea">Concept Idea</a> 
          </li>
          <li>
         <a className="nav-links" href="info">Info</a> 
          </li>
          <li>
         <a className="nav-links" href="howToUse">How to Use</a> 
          </li>
        </ul>
        </div>
      </nav>
    </div>
  );
}




