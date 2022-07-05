import logo from "./logoGit.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <footer>
        This portfolio was coded by{" "}
        <a
          href="https://github.com/inksp0ts09/ReactWeatherProject"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maryanne McGlone
        </a>
      </footer>
    </div>
  );
}

export default App;
