import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

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

const menuLink = {
  color: '#efb810',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1.11rem',
  borderRadius: '7px',
  padding: '0.41rem 1.2rem',
  marginRight: '3px',
  transition: 'background 0.13s'
};

function Header() {
  return (
    <header>
      <div style={{
        background: '#ddbc71',
        color: '#232C3B',
        height: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '1rem',
        padding: '0 2rem'
      }}>
        <span style={{
          fontWeight: 'bold',
          fontSize: '1.09rem',
          letterSpacing: '2px',
          fontFamily: 'Georgia, Times New Roman, serif'
        }}>VIM LEGIS</span>
        <span>
          <a href="tel:+5732184799311" style={{ color: '#232C3B', fontWeight: 700, textDecoration:'none' }}>
            +57 318 479 9311
          </a>
        </span>
      </div>
      {/* Menú horizontal */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.15rem',
        margin: 0,
        padding: '1.15rem 0.6rem 1.1rem 0.6rem',
        background: '#091a24c2',
        fontFamily: 'Georgia, Times New Roman, serif'
      }}>
        <Link to="/" style={{ ...menuLink, background: '#FFD37B', color: '#232C3B' }}>Inicio</Link>
        <Link to="/about" style={menuLink}>Sobre Nosotros</Link>
        <Link to="/services/asesoria-penal" style={menuLink}>Asesoría Penal</Link>
        <Link to="/services/defensa-penal" style={menuLink}>Defensa Penal</Link>
        <Link to="/services/representacion-victimas" style={menuLink}>Representación Víctimas</Link>
        <Link to="/services/intervencion-delitos" style={menuLink}>Intervención Delitos</Link>
        <Link to="/services/fases-proceso" style={menuLink}>Fases del Proceso</Link>
        <Link to="/services/recursos-apelaciones" style={menuLink}>Recursos y Apelaciones</Link>
        <Link to="/contact" style={menuLink}>Contacto</Link>
      </nav>
    </header>
  );
}

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
        <Header />
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
