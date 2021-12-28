import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <form className="form">
        <input type="search" className="search-field" />
      </form>
      <div className="suggested-words">
        suggested words: book, kitten, wine...
      </div>
    </div>
  );
}
