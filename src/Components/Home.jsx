import React from "react";
import Plombier from "../Assets/plombier.jpg";
import Electricien from "../Assets/electricien.jpg";
import Serrurier from "../Assets/serrurier.jpg";
import { FiZap, FiDroplet, FiThermometer, FiLock, FiPhone, FiInfo } from "react-icons/fi";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Devis from "../Assets/devis.jpg";


const Home = () => {
  return (
    <div id="Home" className="home-container">
      <div className="home-banner-container">
        <div className="home-text-section">
        <div className="heading-container">
        <img src={Devis} alt="icone du devis gratuit" className="devis-icon" />
        <h1 className="primary-heading">
          Devis Gratuit
        </h1>
        </div>
        <p className="primary-text">
        Le Coup de Pouce efficace et rapide pour vos Pépins d'Électricité générale, Plomberie, chauffage et Serrurerie à Paris et en Petite Couronne.
        </p>

          {/* Sous-titre et Titre au-dessus des sections */}
          <div className="service-overview-header">
            <FiInfo className="overview-icon" style={{ color: "#1763e5" }} />
            <div>
              <div className="overview-small-title">Nos Services</div>
              <div className="overview-title">Dépannage Rapide et Efficace</div>
            </div>
          </div>

          <div className="service-details">
            <div className="service-section-left">
              <FiZap style={{ color: "#FFA500" }} /> Électricité générale <br />
              <FiDroplet style={{ color: "#00BFFF" }} /> Plomberie <br />
              <FiThermometer style={{ color: "#FF4500" }} /> Chauffage <br />
              <FiLock style={{ color: "#228B22" }} /> Serrurerie
              <div className="contact-number">
                <FiPhone style={{ color: "#FFD700" }} /> 07.81.03.48.36
              </div>
            </div>
            <div className="vertical-line"></div>
            <div className="service-section-right">
              <p><FiInfo style={{ color: "#1763e5" }} /> Intervention rapide et professionnelle pour tous vos besoins en dépannage d'urgence.</p>
              <p><FiInfo style={{ color: "#1763e5" }} /> Disponible 24h/24, 7j/7 dans Paris et la Petite Couronne.</p>
            </div>
          </div>
        </div>
        <div className="home-bannerImage-container">
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
