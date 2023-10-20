import Weather from "./Weather";
import "./App.css";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Weather Search Engine</h3>
        <Weather />
      </header>
      <footer>
        <a href="https://github.com/AlyssaM12/weather-react"> Open-sourced </a>
        by Alyssa Mirra
      </footer>
    </div>
  );
}

export default App;
