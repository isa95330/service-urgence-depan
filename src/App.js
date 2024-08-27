import React, { useEffect } from 'react';
import "./App.css";
import Home from "./Components/Home";
import Services from "./Components/Services";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

// Import du logo pour le favicon
import logo from './Assets/logo-ud.png';

function App() {
  useEffect(() => {
    // Créer un élément link pour le favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = logo;

    // Ajouter le favicon au head du document
    document.head.appendChild(link);

    // Nettoyage (optionnel) : supprimer le favicon quand le composant est démonté
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="App">
      <Home />
      <Services />
      <About />
      <Work />
      {/*<Testimonial />*/}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
