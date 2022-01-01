import React from "react";

export default function Images(props) {
  console.log(props.data[0].src.landscape);
  if (props.data) {
    return <div className="Images background-container">hello from props</div>;
  } else {
    return null;
  }
}
