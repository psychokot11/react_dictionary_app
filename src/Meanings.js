import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings background-container">
      <div className="partOfSpeech">{props.data.partOfSpeech}</div>
      <div>
        {props.data.definitions.map(function (definition, index) {
          return (
            <div key={index} className="definitions">
              <div> {definition.definition} </div>
              <ul className="example">
                <li>{definition.example}</li>
              </ul>
            </div>
          );
        })}
      </div>
      <Synonyms data={props.data.definitions[0].synonyms} />
      <div className="synonyms">{props.data.definitions[0].synonyms[0]}</div>
    </div>
  );
}
