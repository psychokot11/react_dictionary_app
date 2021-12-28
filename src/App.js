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
    </div>
  );
}

export default App;
