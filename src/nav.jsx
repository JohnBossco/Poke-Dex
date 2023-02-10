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
         <a className="nav-links" href="#">Concept Idea</a> 
          </li>
          <li>
         <a className="nav-links" href="#">Info</a> 
          </li>
          <li>
         <a className="nav-links" href="#">How to Use</a> 
          </li>
        </ul>
        </div>
      </nav>
    </div>
  );
}




