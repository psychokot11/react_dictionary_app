import React from "react";

export default function Examples(props) {
  if (props.data) {
    return (
      <ul className="example">
        <li>{props.data}</li>
      </ul>
    );
  } else {
    return null;
  }
}
