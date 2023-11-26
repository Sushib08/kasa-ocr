import React from "react";
import { useParams } from "react-router-dom";
import ListingData from "../data/listing.json";
import Error404 from "./Error404";
import Carousel from "../components/elements/Carousel";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import Description from "../components/elements/Description";

const Lodgment = () => {
  const { id } = useParams();
  const lodgingDetails = ListingData.find((lodging) => lodging.id === id);

  if (!lodgingDetails) {
    return <Error404 />;
  }

  return (
    <>
      <Header />
      <main>
        <Carousel data={lodgingDetails} />
        <Description
          title={lodgingDetails.title}
          location={lodgingDetails.location}
          name={lodgingDetails.host.name}
          hostPicture={lodgingDetails.host.picture}
          tags={lodgingDetails.tags}
          rating={lodgingDetails.rating}
          description={lodgingDetails.description}
          equipments={lodgingDetails.equipments}
        />
      </main>
      <Footer />
    </>
  );
};

export default Lodgment;
