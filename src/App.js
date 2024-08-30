import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./Components/Home";
import Services from "./Components/Services";
import About from "./Components/About";
import Description from "./Components/Description";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Serrurerie from "./Pages/Serrurerie";
import PromoBanner from "./Components/PromoBanner";
import Navbar from "./Components/Navbar"; // Importez le composant Navbar
import logo from './Assets/logo-ud.jpg';

function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = logo;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar /> {/* Ajoutez la Navbar ici */}
        <Routes>
          <Route path="/" element={
            <>
              <PromoBanner />
              <Home />
              <Services />
              <About />
              <Description />
              <Work />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/serrurerie" element={<Serrurerie />} /> {/* Route pour la page Serrurerie */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
