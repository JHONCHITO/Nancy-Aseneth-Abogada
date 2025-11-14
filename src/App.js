import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import AsesoriaPenal from './pages/Services/AsesoriaPenal';
import DefensaPenal from './pages/Services/DefensaPenal';
import RepresentacionVictimas from './pages/Services/RepresentacionVictimas';
import IntervencionDelitos from './pages/Services/IntervencionDelitos';
import FasesProceso from './pages/Services/FasesProceso';
import RecursosApelaciones from './pages/Services/RecursosApelaciones';

import './styles.css';

function App() {
  return (
    <Router>
      <header>
        <div className="logo-container" style={{textAlign:'center', marginBottom:'1.2rem'}}>
          <div
            style={{
              fontFamily: 'Georgia, Times New Roman, serif',
              fontSize: '4.2rem',
              fontWeight: 'bold',
              color: '#EBC16F',
              letterSpacing: '14px',
              lineHeight: 1,
              textShadow: '0 6px 24px #2c364f, 0 1px #fff',
              paddingTop: '0.8rem',
              textAlign: 'center'
            }}
          >
            VIM LEGIS
          </div>
          <div className="tagline" style={{
            fontStyle: 'italic',
            color: '#d1e0f3',
            fontSize: '1.27rem',
            fontWeight: 'bold',
            marginTop: '0.4rem'
          }}>
            Firma Legal - Gestión Jurídica y Servicios Legales
          </div>
        </div>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/about">Sobre Nosotros</Link>
          <Link to="/services/asesoria-penal">Asesoría Penal</Link>
          <Link to="/services/defensa-penal">Defensa Penal</Link>
          <Link to="/services/representacion-victimas">Representación Víctimas</Link>
          <Link to="/services/intervencion-delitos">Intervención Delitos</Link>
          <Link to="/services/fases-proceso">Fases del Proceso</Link>
          <Link to="/services/recursos-apelaciones">Recursos y Apelaciones</Link>
          <Link to="/contact">Contacto</Link>
        </nav>
      </header>
      <main>
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
      <footer>
        <div className="footer-bottom">
          <p>© 2025 Vim Legis - Todos los derechos reservados</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
