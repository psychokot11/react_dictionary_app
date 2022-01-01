import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Meanings(props) {
  return (
    <div className="Meanings background-container">
      <div className="partOfSpeech">{props.data.partOfSpeech}</div>
      <div>
        {props.data.definitions.map(function (definition, index) {
          return (
            <div key={index} className="definitions">
              <div> {definition.definition} </div>
              <Examples data={definition.example} />
              <Synonyms data={definition.synonyms} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
