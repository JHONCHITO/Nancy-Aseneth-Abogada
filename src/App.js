import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import Header from './Header'; // <-- Importa aquí TU Header.js nuevo
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AsesoriaPenal from './pages/Services/AsesoriaPenal';
import DefensaPenal from './pages/Services/DefensaPenal';
import RepresentacionVictimas from './pages/Services/RepresentacionVictimas';
import IntervencionDelitos from './pages/Services/IntervencionDelitos';
import FasesProceso from './pages/Services/FasesProceso';
import RecursosApelaciones from './pages/Services/RecursosApelaciones';
import bgGreek from './assets/hermosa-plantilla-griega-antigua.jpg';

import './styles.css';

function Footer() {
  return (
    <footer style={{
      background: '#232c3b',
      color: '#eee',
      fontFamily: 'Georgia, Times New Roman, serif',
      textAlign: 'center',
      padding: '2rem 0 0.6rem 0',
      marginTop: '3rem'
    }}>
      <div style={{
        display: 'flex',
        gap: '2.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1.4rem'
      }}>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"
          style={{color:'#4267B2', fontSize:'2.3rem', textDecoration:'none', background:'#232C3B', borderRadius:'13px', padding:'0.5rem 0.85rem', display:'flex', alignItems:'center'}}
        >
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
          style={{color:'#FFD37B', fontSize:'2.3rem', textDecoration:'none', background:'#232C3B', borderRadius:'13px', padding:'0.5rem 0.85rem', display:'flex', alignItems:'center'}}
        >
          <FaInstagram />
        </a>
        <a href="https://wa.me/573246467069" target="_blank" rel="noopener noreferrer"
          style={{color:'#25D366', fontSize:'2.3rem', textDecoration:'none', background:'#232C3B', borderRadius:'13px', padding:'0.5rem 0.85rem', display:'flex', alignItems:'center'}}
        >
          <FaWhatsapp />
        </a>
      </div>
      <div className="footer-bottom">
        <p style={{ margin:0, fontSize:'1.09rem' }}>© 2025 Vim Legis - Todos los derechos reservados</p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      backgroundImage: `url(${bgGreek})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      position: 'relative',
    }}>
      <Router>
        <Header />                 {/* <-- Aquí tu header 3D nuevo */}
        <main style={{ background: "transparent" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/asesoria-penal" element={<AsesoriaPenal />} />
            <Route path="/services/defensa-penal" element={<DefensaPenal />} />
            <Route path="/services/representacion-victimas" element={<RepresentacionVictimas />} />
            <Route path="/services/intervencion-delitos" element={<IntervencionDelitos />} />
            <Route path="/services/fases-proceso" element={<FasesProceso />} />
            <Route path="/services/recursos-apelaciones" element={<RecursosApelaciones />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
