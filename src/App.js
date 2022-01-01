import "./App.css";
import React from "react";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header container">
          What word do you want to look up?
        </header>
        <SearchEngine />
      </div>
      <footer>
        <a
          href="https://github.com/psychokot11/react_dictionary_app"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <b>Open-source</b>
        </a>{" "}
        code by Zosia S
      </footer>
    </div>
  );
}

export default App;
