import React from "react";
import Receptionniste from "../Assets/receptionniste.jpg";

const About = () => {
  return (
    <div id="About" className="about-section-container">
      <div className="about-section-image-container">
        <img src={Receptionniste} alt="Réceptionniste" className="about-image"/>
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">Pourquoi Nous Choisir ?</h1>
        <p className="primary-text">
          <strong>Disponible 24/7</strong> : Toujours prêt à intervenir, même quand tout le monde dort.
        </p>
        <p className="primary-text">
          <strong>Rapidité d'Intervention</strong> : Basés à Paris et en Petite Couronne, nous arrivons vite chez vous.
        </p>
        <p className="primary-text">
          <strong>Devis Transparent</strong> : Pas de surprises, nous vous informons avant toute intervention.
        </p>
        <p className="primary-text">
          <strong>Service avec le Sourire</strong> : Efficacité et bonne humeur garanties !
        </p>
        <div className="about-buttons-container">
          <a href="#contact" className="primary-button">Contactez-nous</a>
        </div>
      </div>
    </div>
  );
};

export default About;
