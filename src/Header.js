import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// Cambia el nombre si tu imagen es diferente:
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
      {/* Dorado superior */}
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
        background: '#a69696ff',
        fontFamily: 'Georgia, Times New Roman, serif',
        padding: '28px 0 28px 0',
        minHeight: '140px',
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
          draggable={true}
        />
        <nav style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.13rem'
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
                background: location.pathname === to ? '#FFD37B' : '#847878ff',
                transition: 'background 0.14s, color 0.13s'
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
                  e.target.style.background = "#766666ff";
                  e.target.style.color = "#232C3B";
                }
              }}
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
