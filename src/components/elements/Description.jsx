import React from "react";
import "../scss/description.scss";
import RatingFilled from "../../img/filled-star.svg";
import RatingEmpty from "../../img/grey-star.svg";
import Collapse from "./Collapse";

const Description = ({
  title,
  location,
  name,
  hostPicture,
  tags,
  rating,
  description,
  equipments,
}) => {
  const [firstName, lastName] = name.split(" ");

  const renderStars = (rating) => {
    const filledStars = parseInt(rating);
    const emptyStars = 5 - filledStars;

    const filledArray = Array.from({ length: filledStars }, (_, index) => (
      <img key={index} src={RatingFilled} alt="filled star" />
    ));

    const emptyArray = Array.from({ length: emptyStars }, (_, index) => (
      <img key={index} src={RatingEmpty} alt="empty star" />
    ));

    return [...filledArray, ...emptyArray];
  };

  return (
    <>
      <div className="description-contain">
        <div className="part-left">
          <h2 className="title-lodgment">{title}</h2>
          <h3 className="location">{location}</h3>
          <div className="tags">
            {tags.map((tag, index) => (
              <p key={index} className="tag">
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="part-right">
          <div className="host">
            <h3 className="host-name">
              {firstName}
              <br />
              {lastName}
            </h3>
            <img className="host-picture" src={hostPicture} alt={name} />
          </div>
          <div className="rating">{renderStars(rating)}</div>
        </div>
      </div>
      <div className="desc_equip">
        <div className="desc">
          <Collapse title={"Description"} desc={description} />
        </div>
        <div className="equip">
          <Collapse title={"Équipements"} desc={equipments} />
        </div>
      </div>
    </>
  );
};

export default Description;
