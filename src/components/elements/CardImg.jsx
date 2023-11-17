import React from "react";
import "../scss/cardImg.scss";

const CardImg = ({ title, backgroundClass }) => {
  return (
    <div className={`contain ${backgroundClass}`}>
      {title && <h1 className="title-home">{title}</h1>}
    </div>
  );
};

export default CardImg;
