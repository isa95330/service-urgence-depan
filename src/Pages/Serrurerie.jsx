import React from 'react';
import Footer from '../Components/Footer'; // Assurez-vous que le chemin est correct
import Plombier from '../Assets/plombier.jpg'; // Importer l'image
import Electricien from '../Assets/electricien.jpg'; // Importer l'image
import Serrurier from '../Assets/serrurier.jpg'; // Importer l'image

const Serrurerie = () => {
  return (
    <div>

      <div className="serrurerie-container">
        <h1>Services de Serrurerie Professionnels</h1>
        <div className="service-section">
          <img src={Serrurier} alt="Serrurerie" className="service-image" />
          <div className="service-description">
            <h2>Serrurerie de Qualité Supérieure</h2>
            <p>Nous offrons des <strong>services de serrurerie complets</strong> pour répondre à tous vos besoins. Que vous ayez besoin d'<strong>installation de serrure</strong>, de <strong>réparation de serrure</strong>, ou de <strong>dépannage serrurerie</strong>, notre équipe de <strong>serruriers professionnels</strong> est disponible <strong>24/7</strong>. Nous garantissons une <strong>sécurisation de domicile</strong> efficace avec nos <strong>services de serrurerie résidentielle</strong> et <strong>commerciale</strong>. Profitez de notre expertise pour <strong>changer votre serrure</strong> ou <strong>ouvrir une porte</strong> en toute sécurité.</p>
          </div>
        </div>

        <h1>Services de Plomberie et Chauffage</h1>
        <div className="service-section">
          <img src={Plombier} alt="Plomberie" className="service-image" />
          <div className="service-description">
            <h2>Plomberie et Chauffage Professionnels</h2>
            <p>Nos <strong>services de plomberie</strong> incluent l'<strong>installation de plomberie</strong>, la <strong>réparation de plomberie</strong>, et l'<strong>entretien de plomberie</strong>. Que ce soit pour un <strong>dépannage plomberie</strong> urgent ou pour installer un <strong>système de chauffage</strong>, nous vous garantissons un service rapide et fiable. Notre équipe de <strong>plombiers-chauffagistes</strong> est prête à assurer un <strong>entretien de chauffage</strong> efficace et une <strong>réparation de chauffage</strong> professionnelle.</p>
          </div>
        </div>

        <h1>Services d'Électricité</h1>
        <div className="service-section">
          <img src={Electricien} alt="Électricité" className="service-image" />
          <div className="service-description">
            <h2>Électricité et Dépannage Électrique</h2>
            <p>Nous proposons des <strong>services électriques</strong> complets, allant de l'<strong>installation électrique</strong> à la <strong>réparation électrique</strong> et l'<strong>entretien électrique</strong>. Nos <strong>électriciens professionnels</strong> sont disponibles pour des interventions urgentes, mettre vos installations électriques aux normes, ou effectuer des <strong>dépannages électriques</strong>. Bénéficiez de notre expertise pour l'<strong>installation de prises électriques</strong> et d'<strong>éclairage</strong> moderne.</p>
          </div>
        </div>
      </div>

      <Footer /> {/* Inclure le composant Footer en bas de la page */}
    </div>
  );
};

export default Serrurerie;
