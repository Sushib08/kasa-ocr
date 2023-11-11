import React from "react";
import { useParams, Navigate } from "react-router-dom";
import ListingData from "../data/listing.json";
import Error404 from "./Error404"; // Make sure to import your Error404 component

const Lodgment = () => {
  const { id } = useParams();
  const lodgingDetails = ListingData.find((lodging) => lodging.id === id);

  if (!lodgingDetails) {
    return <Navigate to="/404" />;
  }

  return (
    <div>
      <h2>{lodgingDetails.title}</h2>
    </div>
  );
};

export default Lodgment;
