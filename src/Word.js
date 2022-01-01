import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import Meanings from "./Meanings";

export default function Word(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="word">
        <div className="background-container">
          <div className="main-word">{props.data.word}</div>
          <span className="icon">
            <a
              href={props.data.phonetics[0].audio}
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FontAwesomeIcon icon={faVolumeUp} />{" "}
            </a>
          </span>
          <span className="phonetic">{props.data.phonetics[0].text}</span>
        </div>
        <div className="background-container">
          {props.data.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meanings data={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
