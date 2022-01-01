import React, { useState } from "react";
import axios from "axios";
import Word from "./Word";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [searchedWord, setSearchedWord] = useState("moon");
  const [wordData, setWordData] = useState(null);
  const [ready, setReady] = useState(false);

  function load() {
    setReady(true);
    search();
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;
    axios.get(url).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
    setWordData(response.data[0]);
  }

  function handleSearch(event) {
    setSearchedWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (ready) {
    return (
      <div className="SearchEngine">
        <div className="background-container">
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="search"
              className="search-field"
              onChange={handleSearch}
            />
          </form>
          <div className="suggested-words">
            suggested words: book, kitten, wine...
          </div>
        </div>
        <Word data={wordData} />
      </div>
    );
  } else {
    load();
  }
}
