import React from "react";

export default function Images(props) {
  console.log(props.data);
  //let source = props.data[0].src.landscape;
  if (props.data) {
    return (
      <div className="Images background-container row">
        {props.data.map(function (photo, index) {
          return (
            <div className="col-4" key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img src={photo.src.landscape} className="img-fluid image" />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
