import React from "react";
import logo from "./logoGit.png";
import Navbar from "./Nav/Navbar.js";

export default function Header() {
  return (
    <div className="container">
      <header>
        <div className="bird">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </div>
        <div className="hamburger">
          <Navbar />
        </div>
      </header>
    </div>
  );
}
