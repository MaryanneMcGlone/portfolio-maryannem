import "./App.css";
import Navbar from "./Nav/Navbar.js";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <Navbar />
      <Home />
      <footer>
        This portfolio was coded by{" "}
        <a
          href="https://github.com/inksp0ts09/ReactWeatherProject"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maryanne M
        </a>
      </footer>
    </div>
  );
}

export default App;
