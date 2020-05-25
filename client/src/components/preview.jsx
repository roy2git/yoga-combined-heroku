import React from "react";
import defaultImage from "../assets/defaultImage.png";

export default function Preview(props) {
  let imagePreview = props.yoga.image ? (
    <img src={props.yoga.image} alt="Image Not Found " />
  ) : (
    <img src={defaultImage} alt="default preview" />
  );

  return (
    <div className="preview">
      {imagePreview}
      <p>
        Pose Name: <strong> {props.yoga.name}</strong>
      </p>
      <p>
        Description: <strong> {props.yoga.description}</strong>
      </p>
      <p>
        Time: <strong> {props.yoga.time} </strong>
      </p>
    </div>
  );
}
