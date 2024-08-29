import React from "react";
import Receptionniste from "../Assets/receptionniste.jpg";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-image-container">
        <img src={Receptionniste} alt="Réceptionniste" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Pourquoi Faire Appel à Nous?
        </h1>
        <p className="primary-text">
          Toujours là pour Vous: 24h/24, 7j/7, même quand tout le monde dort,
          nous on veille pour vous dépanner.
        </p>
        <p className="primary-text">
          Vite et Bien: Basés à Paris et en Petite Couronne, 
          on arrive chez vous en un clin d’œil.
        </p>
        <p className="primary-text">
          Devis Clair et Net: Pas de mauvaise surprise,
          on vous annonce la couleur avant de commencer.
        </p>
        <p className="primary-text">
          Service avec le Sourire: On aime ce qu’on fait, et ça se voit.
          Avec nous, c’est dépannage, efficacité et bonne humeur au programme!
        </p>
        <div className="about-buttons-container">
          <a href="#footer-contact" className="secondary-button">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
