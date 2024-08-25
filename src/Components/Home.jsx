import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import Plombier from "../Assets/plombier.jpg";
import Electricien from "../Assets/electricien.jpg";
import Serrurier from "../Assets/serrurier.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Dépanne Moi - Le Coup de Pouce efficace et rapide.
          </h1>
          <p className="primary-text">
            Pour vos Pépins d'Électricité générale, Plomberie, chauffage et Serrurerie à Paris et en Petite Couronne
          </p>
          <div className="about-buttons-container">
            <a href="#footer-contact" className="secondary-button">
              Contact <FiArrowRight />
            </a>
          </div>
        </div>
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="Background" className="banner-image"/>
          <div className="overlay-images">
            <div className="image-row">
              <img src={Plombier} alt="Plombier" className="round-image" />
              <img src={Electricien} alt="Électricien" className="round-image" />
            </div>
            <div className="image-row single-image">
              <img src={Serrurier} alt="Serrurier" className="round-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
