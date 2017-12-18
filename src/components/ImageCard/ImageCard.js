import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
    <div className="img-container">
      <img src={props.image} />
    </div>
);

export default ImageCard;
