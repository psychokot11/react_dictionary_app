import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [searchedWord, setSearchedWord] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function handleSearch(event) {
    setSearchedWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;
    axios.get(url).then(handleResponse);
  }
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
          suggested words: book, kitten, wine... {searchedWord}
        </div>
      </div>
      <div className="background-container">WORD</div>
      <div className="background-container">synonyms</div>
      <div className="background-container">adjective</div>
      <div className="background-container">noun</div>
      <div className="background-container">gallery</div>
    </div>
  );
}
