import React from 'react';
import { Link } from 'react-router-dom'; // Importez Link depuis react-router-dom
import Serrurier from "../Assets/serrurier.jpg";
import Plomberie from "../Assets/plombier.jpg";
import Electricite from "../Assets/electricien.jpg";

const Services = () => {
  return (
    
    <div id="why" className="services-container">
      <div className="services-content">
        <div className="services-header">
          <p className="services-title">Pour vous </p>
          <p className="services-subtitle">Nos différentes prestations</p>
        </div>
        <div className="services-grid">
          <div className="service-item">
            <img
              src={Serrurier}
              alt="serrurerie"
              className="portfolio-img"
            />
            <p className="service-title">Serrurerie</p>
            <div className="service-buttons">
              <Link to="/serrurerie">
                <button className="portfolio-button">Lire la suite</button>
              </Link>
            </div>
          </div>

          <div className="service-item">
            <img
              src={Plomberie}
              alt="plomberie"
              className="portfolio-img"
            />
            <p className="service-title">Plomberie/Chauffage</p>
            <div className="service-buttons">
              <Link to="/serrurerie">
                <button className="portfolio-button">Lire la suite</button>
              </Link>
            </div>
          </div>

          <div className="service-item">
            <img
              src={Electricite}
              alt="electricien"
              className="portfolio-img"
            />
            <p className="service-title">Electricité</p>
            <div className="service-buttons">
              <Link to="/serrurerie">
                <button className="portfolio-button">Lire la suite</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
