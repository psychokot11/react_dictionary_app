import React from "react";

export default function Synonyms(props) {
  return (
    <div className="Synonyms">
      {props.data.map(function (synonym, index) {
        if (index < 5) {
          return (
            <span key={index} className="synonyms">
              {synonym}
            </span>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
