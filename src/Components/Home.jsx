import React from "react";
import Plombier from "../Assets/plombier.jpg";
import Electricien from "../Assets/electricien.jpg";
import Serrurier from "../Assets/serrurier.jpg";
import Navbar from "./Navbar"; // Assurez-vous que Navbar est exporté par défaut dans son fichier
import { FiArrowRight } from "react-icons/fi"; // Import nommé de react-icons
import { Carousel } from 'react-responsive-carousel'; // Assurez-vous que Carousel est bien exporté ainsi
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Services d'urgence dépannage - Le Coup de Pouce efficace et rapide.
          </h1>
          <p className="primary-text">
            Pour vos Pépins d'Électricité générale, Plomberie, chauffage et Serrurerie à Paris et en Petite Couronne
          </p>
          <div className="about-buttons-container">
            <a href="#footer-contact" className="secondary-button">
              07.81.03.48.36 <FiArrowRight />
            </a>
          </div>
        </div>
        <div className="home-bannerImage-container" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px' }}>
          <div className="overlay-images">
            <Carousel 
              showArrows={true} 
              showThumbs={false} 
              infiniteLoop={true} 
              autoPlay={true} 
              interval={3000} 
              transitionTime={500} 
              showStatus={false}
            >
              <div>
                <img src={Plombier} alt="Plombier" className="round-image" />
              </div>
              <div>
                <img src={Electricien} alt="Électricien" className="round-image" />
              </div>
              <div>
                <img src={Serrurier} alt="Serrurier" className="round-image" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
