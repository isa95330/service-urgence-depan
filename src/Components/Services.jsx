import React from "react";
import Serrurier from "../Assets/serrurier.jpg";
import Plomberie from "../Assets/plombier.jpg";
import Electricite from "../Assets/electricien.jpg";

const Services = () => {
  return (
    <div id="portfolio" className="services-container">
      <div className="services-content">
        <div className="services-header">
          <p className="services-title">Portfolio</p>
          <p className="services-subtitle">Mes différents projets</p>
        </div>
        <div className="services-grid">
          <div className="service-item">
            <img
              src={Serrurier}
              alt="serrurerie"
              className="portfolio-img"
            />
            <p className="service-title">Dépannage BTP</p>
            <div className="service-buttons">
              <button className="portfolio-button">Lire la suite</button>
            </div>
          </div>

          <div className="service-item">
            <img
              src={Plomberie}
              alt="plomberie"
              className="portfolio-img"
            />
            <p className="service-title">Mon Portfolio</p>
            <div className="service-buttons">
              <button className="portfolio-button">Lire la suite</button>
            </div>
          </div>

          <div className="service-item">
            <img
              src={Electricite}
              alt="electricien"
              className="portfolio-img"
            />
            <p className="service-title">Hair ecommerce</p>
            <div className="service-buttons">
              <button className="portfolio-button">Lire la suite</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
