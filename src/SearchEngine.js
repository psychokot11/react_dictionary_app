import React, { useState } from "react";
import axios from "axios";
import Word from "./Word";
import "./SearchEngine.css";
import Images from "./Images";

export default function SearchEngine() {
  const [searchedWord, setSearchedWord] = useState("moon");
  const [wordData, setWordData] = useState(null);
  const [ready, setReady] = useState(false);
  const [photos, setPhotos] = useState(null);

  function load() {
    setReady(true);
    search();
  }

  function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search() {
    let dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;
    axios.get(dictionaryUrl).then(handleResponse);

    let pexelsKey = "563492ad6f91700001000001daedf3e1b4b646f88958b096669822ab";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${searchedWord}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleResponse(response) {
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
        <Images data={photos} />
      </div>
    );
  } else {
    load();
  }
}
