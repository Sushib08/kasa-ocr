import React from "react";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import CardImg from "../components/elements/CardImg";
import "../Pages/scss/about.scss";
import Collapse from "../components/elements/Collapse";

const About = () => {
  return (
    <>
      <Header />

      <main>
        <CardImg title={""} backgroundClass="img2-bg" />

        <div className="collapses">
          <Collapse
            title={"Fiabilité"}
            desc={
              "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
            }
          />
          <Collapse
            title={"Respect"}
            desc={
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            }
          />
          <Collapse
            title={"Service"}
            desc={
              "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
            }
          />
          <Collapse
            title={"Sécurité"}
            desc={
              "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            }
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
