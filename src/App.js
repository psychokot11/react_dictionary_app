import "./App.css";
import React from "react";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header className="App-header container">
        What word do you want to look up?
      </header>
      <SearchEngine />
    </div>
  );
}

export default App;
