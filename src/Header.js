import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
          <a href="tel:+573184799311" style={{
            color: '#232C3B', fontWeight: 700, textDecoration: 'none'
          }}>
            +57 318 479 9311
          </a>
        </span>
      </div>

      {/* Menú scroll horizontal */}
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '1.13rem',
          padding: '1.1rem 0.4rem 1.15rem 0.4rem',
          background: '#fff',
          fontFamily: 'Georgia, Times New Roman, serif',
          flexWrap: 'nowrap',
          overflowX: 'auto',
          maxWidth: '100vw',
          WebkitOverflowScrolling: 'touch'
        }}
      >
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
              background: location.pathname === to ? '#FFD37B' : '#fff',
              transition: 'background 0.14s, color 0.13s',
              whiteSpace: 'nowrap'
            }}
          >
            {text}
          </Link>
        ))}
      </nav>

      {/* CSS RESPONSIVE */}
      <style>
        {`
        @media (max-width: 700px) {
          nav {
            gap: 0.6rem !important;
            padding: 0.5rem 0.2rem 0.7rem 0.2rem !important;
            font-size: 1rem !important;
            max-width: 100vw !important;
            overflow-x: auto !important;
            flex-wrap: nowrap !important;
          }
          nav a {
            font-size: 1rem !important;
            padding: 0.7rem 0.9rem !important;
            white-space: nowrap !important;
          }
        }
        `}
      </style>
    </header>
  );
}

export default Header;
