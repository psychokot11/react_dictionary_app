import React, { useState } from "react";
import axios from "axios";
import Word from "./Word";
import Definitions from "./Definitions";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [searchedWord, setSearchedWord] = useState("moon");
  const [wordData, setWordData] = useState({ loaded: false });

  function handleResponse(response) {
    setWordData({
      loaded: true,
      name: response.data[0].word,
      phonetic: response.data[0].phonetic,
      definition: response.data[0].meanings[0].definitions[0].definition,
    });
    console.log(response.data[0]);
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;
    axios.get(url).then(handleResponse);
  }

  function handleSearch(event) {
    setSearchedWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  if (wordData.loaded) {
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
        <div className="background-container">
          <Word data={wordData} />
        </div>
        <div className="background-container">synonyms</div>
        <div className="background-container">
          <Definitions data={wordData} />
        </div>
        <div className="background-container">gallery</div>
      </div>
    );
  } else {
    search();
    return "Searching...";
  }
}
