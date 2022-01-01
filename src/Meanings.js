import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <div className="partOfSpeech">{props.data.partOfSpeech}</div>
      <div>
        {props.data.definitions.map(function (definition, index) {
          return (
            <div key={index} className="definitions">
              {definition.definition}
            </div>
          );
        })}
      </div>
      <div className="example">
        {props.data.definitions.map(function (example, index) {
          if (example.example) {
            return (
              <ul key={index}>
                <li>{example.example}</li>
              </ul>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="synonyms">{props.data.definitions[0].synonyms[0]}</div>
    </div>
  );
}
