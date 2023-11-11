import React from "react";
import { useParams } from "react-router-dom";
import ListingData from "../data/listing.json";
import Error404 from "./Error404";

const Lodgment = () => {
  const { id } = useParams();
  const lodgingDetails = ListingData.find((lodging) => lodging.id === id);

  if (!lodgingDetails) {
    return <Error404 />;
  }

  return (
    <div>
      <h2>{lodgingDetails.title}</h2>
    </div>
  );
};

export default Lodgment;
