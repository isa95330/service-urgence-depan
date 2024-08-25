import React from "react";
import Logo from "../Assets/logo-ud.png";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-logo-container">
          <img src={Logo} alt="Depanne-moi Logo" className="footer-logo" />
        </div>
        <div className="footer-contact-info">
          <h3 className="contact-header">Contactez-nous</h3>
          <p className="phone-number">Téléphone: 07.81.03.48.36</p>
          <p>Email: urgencedepan@yahoo.fr</p>
          <p>Carrières: contact@urgencedepan.fr</p>
        </div>
        <div className="footer-icons">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <SiLinkedin />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/33781034836" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-rgpd">
        <p><strong>Transparence</strong></p>
        <p><strong>Sécurité</strong></p>
        <p><strong>Droits des utilisateurs</strong></p>
      </div>
      <div className="footer-legal">
        <a href="/mentions-legales">Mentions Légales</a>
      </div>
    </footer>
  );
};

export default Footer;
