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
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 999,
      background: 'transparent',
      boxShadow: '0 2px 6px #0002'
    }}>
      {/* Franja dorada superior */}
      <div style={{
        background: '#ddbc71',
        color: '#232C3B',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.94rem',
        padding: '0 1rem'
      }}>
        <span style={{
          fontWeight: 'bold',
          fontSize: '1rem',
          letterSpacing: '2px',
          fontFamily: 'Georgia, Times New Roman, serif'
        }}>VIM LEGIS</span>
        <span>
          <a href="tel:+573184799311" style={{
            color: '#232C3B', fontWeight: 700, textDecoration: 'none', fontSize: '0.98rem'
          }}>
            +57 318 479 9311
          </a>
        </span>
      </div>
      {/* Menú horizontal fondo balanza */}
      <div style={{
        position: 'relative',
        background: '#ede6da',
        fontFamily: 'Georgia, Times New Roman, serif',
        padding: '12px 0 12px 0',
        minHeight: '52px',
        overflow: 'visible'
      }}>
        {/* Imagen balanza marca de agua */}
        <img
          src={balanza}
          alt="balanza fondo"
          style={{
            position: 'absolute',
            top: '52%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            height: '50px',
            opacity: 0.12,
            zIndex: 0,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
          draggable={false}
        />
        <nav style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          flexWrap: 'nowrap',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '0.7rem',
          overflowX: 'auto',
          maxWidth: '100vw',
          WebkitOverflowScrolling: 'touch',
        }}>
          {mainMenu.map(({ to, text }) => (
            <Link
              key={to}
              to={to}
              className={location.pathname === to ? "active-link3d" : "menu3d"}
              style={{
                fontFamily: 'Georgia, Times New Roman, serif',
                fontWeight: 'bold',
                fontSize: '1rem',
                textDecoration: 'none',
                borderRadius: '12px',
                padding: '0.39rem 1.10rem',
                background: location.pathname === to ? '#FFD37B' : '#ede6da',
                color: location.pathname === to ? '#b38529' : '#232C3B',
                transition: 'background 0.14s, color 0.13s, transform 0.19s cubic-bezier(.49,1.6,.56,1.1), box-shadow 0.19s',
                whiteSpace: 'nowrap',
                boxShadow: location.pathname === to ? '0 2px 12px #aa993030' : 'none'
              }}
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
      {/* Animación 3D avanzado CSS */}
      <style>
        {`
        .menu3d {
          perspective: 300px !important;
        }
        .menu3d:hover, .menu3d:focus {
          color: #b38529 !important;
          background: #FFD37B !important;
          transform: perspective(280px) rotateX(12deg) scale(1.10);
          box-shadow: 0 4px 32px #b3852950, 0 1px 2px #2221;
          text-shadow: 0 3px 8px #fff8,0 1.3px 3.3px #FFD37B22;
        }
        .active-link3d {
          font-weight: bold;
          background: #FFD37B !important;
          color: #b38529 !important;
          box-shadow: 0 5px 18px #ceb06050;
          text-shadow: 0 2.5px 6px #fff6,0 1.3px 3.3px #b3852925;
          transform: perspective(240px) rotateX(10deg) scale(1.06);
        }
        @media (max-width: 700px) {
          header > div {
            height: 21px !important;
            font-size: 0.89rem !important;
            padding: 0 0.2rem !important;
          }
          nav {
            gap: 0.21rem !important;
            padding: 0.2rem 0.1rem 0.24rem 0.1rem !important;
            min-height: 35px !important;
            max-width: 100vw !important;
            overflow-x: auto !important;
          }
          nav a, nav .menu3d {
            font-size: 0.89rem !important;
            padding: 0.21rem 0.66rem !important;
            white-space: nowrap !important;
          }
          img[alt="balanza fondo"] {
            height: 19px !important;
          }
        }
        `}
      </style>
    </header>
  );
}

export default Header;
