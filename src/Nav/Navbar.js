import React from "react";
import "./Nav.css";
import "./burger.css";
import logo from "./logoGit.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <header className="App-header">
          <a className="navbar-brand" href="/" title="Homepage">
            <img src={logo} className="App-logo img-fluid" alt="logo" />
            Maryanne M - Front-end Developer
          </a>
        </header>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a
                className="nav-link"
                aria-current="page"
                href="src/home.js"
                title="Homepage"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="src/about.js" title="About Ann">
                About Me
              </a>
            </li>
            <li>
              <a className="nav-link" href="src/myWork.js" title="Ann's Work">
                My Work
              </a>
            </li>
            <li>
              <a className="nav-link" href="src/contact.js" title="Contact Ann">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
