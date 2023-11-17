import React from "react";
import "../Pages/scss/home.scss";
import { NavLink } from "react-router-dom";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import Cards from "../components/elements/Cards";
import CardImg from "../components/elements/CardImg";
import ListingData from "../data/listing.json";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <CardImg
          title={"Chez vous, partout et ailleurs"}
          backgroundClass="img1-bg"
        />

        <div className="cards-contain">
          {ListingData.map((lodging, index) => (
            <NavLink key={index} to={`/lodgment/${lodging.id}`}>
              <Cards title={lodging.title} images={[lodging.cover]} />
            </NavLink>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
