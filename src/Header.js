import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import balanza from './assets/balanza.jpg'; 

const mainMenu = [
  { to: '/', text: 'Inicio' },
  { to: '/about', text: 'Sobre Nosotros' },
  { to: '/services/asesoria-penal', text: 'Asesoría Penal' },
  { to: '/services/defensa-penal', text: 'Defensa Penal' },
  { to: '/services/representacion-victimas', text: 'Representación Víctimas' },
  { to: '/services/intervencion-delitos', text: 'Intervención Delitos' },
  { to: '/services/fases-proceso', text: 'Fases del Proceso' },
  { to: '/services/recursos-apelaciones', text: 'Recursos y Apelaciones' },
  { to: '/contact', text: 'Contacto' },
];

function Header() {
  const location = useLocation();
  return (
    <header>
      {/* Franja dorada superior */}
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
          <a href="tel:+573184799311" style={{ color: '#232C3B', fontWeight: 700, textDecoration: 'none' }}>
            +57 318 479 9311
          </a>
        </span>
      </div>
      {/* Menú horizontal fondo balanza */}
      <div style={{
        position: 'relative',
        background: '#ede6da', // Tono café claro, cambia si prefieres otro
        fontFamily: 'Georgia, Times New Roman, serif',
        padding: '28px 0 28px 0',
        minHeight: '120px',
        overflow: 'visible'
      }}>
        {/* Imagen balanza marca de agua */}
        <img
          src={balanza}
          alt="balanza fondo"
          style={{
            position: 'absolute',
            top: '55%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            height: '105px',
            opacity: 0.14,
            zIndex: 0,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
          draggable={false}
        />
        {/* Menú deslizable */}
        <nav style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          flexWrap: 'nowrap',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '1.13rem',
          overflowX: 'auto',
          maxWidth: '100vw',
          WebkitOverflowScrolling: 'touch',
        }}>
          {mainMenu.map(({ to, text }) => (
            <Link
              key={to}
              to={to}
              style={{
                color: location.pathname === to ? '#b38529' : '#232C3B',
                fontWeight: 'bold',
                fontSize: '1.13rem',
                textDecoration: 'none',
                borderRadius: '12px',
                padding: '0.59rem 1.70rem',
                background: location.pathname === to ? '#FFD37B' : '#ede6da',
                transition: 'background 0.14s, color 0.13s',
                whiteSpace: 'nowrap'
              }}
              onMouseOver={e => {
                e.target.style.background = "#FFD37B";
                e.target.style.color = "#b38529";
              }}
              onMouseOut={e => {
                if (location.pathname === to) {
                  e.target.style.background = "#FFD37B";
                  e.target.style.color = "#b38529";
                } else {
                  e.target.style.background = "#ede6da";
                  e.target.style.color = "#232C3B";
                }
              }}
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
      {/* CSS responsive para móvil: menú deslizable y cómodo */}
      <style>
        {`
        @media (max-width: 700px) {
          nav {
            gap: 0.5rem !important;
            padding: 0.7rem 0.2rem 0.7rem 0.2rem !important;
            font-size: 1rem !important;
            max-width: 100vw !important;
            overflow-x: auto !important;
            flex-wrap: nowrap !important;
            justify-content: flex-start !important;
          }
          nav a {
            font-size: 1rem !important;
            padding: 0.7rem 1.0rem !important;
            white-space: nowrap !important;
          }
        }
        `}
      </style>
    </header>
  );
}

export default Header;
