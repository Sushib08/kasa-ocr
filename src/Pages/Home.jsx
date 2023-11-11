import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import Cards from "../components/elements/Cards";
import "./scss/home.scss";
import ListingData from "../data/listing.json";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="contain">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>

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
