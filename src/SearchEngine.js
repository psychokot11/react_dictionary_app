import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  function handleSearch(event) {
    console.log(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="SearchEngine">
      <form className="form" onSubmit={handleSubmit}>
        <input type="search" className="search-field" onChange={handleSearch} />
      </form>
      <div className="suggested-words">
        suggested words: book, kitten, wine...
      </div>
    </div>
  );
}
