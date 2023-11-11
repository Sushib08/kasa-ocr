import React from "react";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import { NavLink } from "react-router-dom";
import "./scss/error404.scss";

const Error404 = () => {
  return (
    <>
      <Header />
      <div className="error-contain">
        <h1 className="error">404</h1>
        <p className="error-description">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <NavLink className="redirect" to="/">
          Retourner sur la page d’accueil
        </NavLink>
      </div>

      <Footer />
    </>
  );
};

export default Error404;
