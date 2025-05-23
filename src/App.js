import "./App.css";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Home />
        <footer>
          This portfolio was coded by{" "}
          <a
            href="https://github.com/MaryanneMcGlone"
            target="_blank"
            rel="noopener noreferrer"
          >
            Maryanne M
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
