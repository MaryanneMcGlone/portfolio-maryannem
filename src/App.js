import "./App.css";
import Navbar from "./Navbar.js";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <footer>
        This portfolio was coded by{" "}
        <a
          href="https://github.com/inksp0ts09/"
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
