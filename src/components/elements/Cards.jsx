import React from "react";
import "../scss/cards.scss";

const Cards = ({ title, images }) => {
  return (
    <div className="card">
      <div className="image-container">
        {images &&
          images.map((image, index) => (
            <img key={index} src={image} alt={`img${index + 1}`} />
          ))}
      </div>
      <h3 className="title">{title}</h3>
    </div>
  );
};

export default Cards;
