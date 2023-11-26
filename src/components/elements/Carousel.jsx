import React, { useState, useEffect } from "react";
import "../scss/carousel.scss";
import ArrowPrev from "../../img/arrow-prev.svg";
import ArrowNext from "../../img/arrow-next.svg";

const Carousel = ({ data }) => {
  const [currentImage, setCurrentImage] = useState(1);
  const [imagesToDisplay, setImagesToDisplay] = useState([]);

  useEffect(() => {
    const coverIndex = data.pictures.findIndex(
      (picture) => picture === data.cover
    );

    if (coverIndex !== -1) {
      const filteredPictures = [...data.pictures];
      filteredPictures.splice(coverIndex, 1);
      setImagesToDisplay([data.cover, ...filteredPictures]);
    } else {
      setImagesToDisplay(data.pictures);
    }
  }, [data.cover, data.pictures]);

  const handleNext = () => {
    setCurrentImage((prevImage) =>
      prevImage === imagesToDisplay.length ? 1 : prevImage + 1
    );
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) =>
      prevImage === 1 ? imagesToDisplay.length : prevImage - 1
    );
  };

  const shouldDisplayNavigation = imagesToDisplay.length > 1;

  return (
    <div className="carousel-container">
      <div className="picture-container">
        <img
          className="cover"
          src={imagesToDisplay[currentImage - 1]}
          alt={`${data.title} - ${currentImage}/${imagesToDisplay.length}`}
        />
        {shouldDisplayNavigation && (
          <div className="navigation">
            {shouldDisplayNavigation && (
              <img
                className="arrow-nav"
                src={ArrowPrev}
                alt="arrow-prev"
                onClick={handlePrev}
              />
            )}
            {shouldDisplayNavigation && (
              <span>{`${currentImage}/${imagesToDisplay.length}`}</span>
            )}
            {shouldDisplayNavigation && (
              <img
                className="arrow-nav"
                src={ArrowNext}
                alt="arrow-next"
                onClick={handleNext}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
