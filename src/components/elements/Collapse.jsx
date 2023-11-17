import React, { useState } from "react";
import "../scss/collapse.scss";
import Vector from "../../img/Vector.svg";

const Collapse = ({ title, desc }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <>
      <div className="collapse-contain" onClick={toggleExpand}>
        <h3>{title}</h3>
        <button className={isExpanded ? "rotate" : ""}>
          <img src={Vector} alt="vecteur" />
        </button>
      </div>
      <div className={`desc-contain ${isExpanded ? "desc-expanded" : ""}`}>
        <p>{desc}</p>
      </div>
    </>
  );
};

export default Collapse;
