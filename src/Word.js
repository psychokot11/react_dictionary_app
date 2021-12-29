import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

export default function Word(props) {
  return (
    <div className="word">
      <div className="main-word">{props.data.name}</div>
      <span className="icon">
        <FontAwesomeIcon icon={faVolumeUp} />
      </span>
      <span className="phonetic">{props.data.phonetic}</span>
    </div>
  );
}
