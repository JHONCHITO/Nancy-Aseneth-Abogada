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
      boxShadow: '0 1px 7px #0002',
    }}>
      {/* Franja dorada compacta */}
      <div style={{
        background: '#ddbc71',
        color: '#232C3B',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.92rem',
        padding: '0 1rem'
      }}>
        <span style={{
          fontWeight: 'bold',
          fontSize: '1rem',
          letterSpacing: '2px',
          fontFamily: 'Georgia, Times New Roman, serif',
        }}>VIM LEGIS</span>
        <span>
          <a href="tel:+573184799311" style={{
            color: '#232C3B', fontWeight: 700, textDecoration: 'none', fontSize: '0.98rem'
          }}>
            +57 318 479 9311
          </a>
        </span>
      </div>
      {/* Menú horizontal con animación 3D */}
      <div style={{
        position: 'relative',
        background: 'linear-gradient(90deg, #ede6da 65%, #e5d09d 95%)',
        fontFamily: 'Georgia, Times New Roman, serif',
        padding: '9px 0 9px 0',
        minHeight: '49px',
        overflow: 'visible',
      }}>
        <img
          src={balanza}
          alt="balanza fondo"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            height: '50px',
            opacity: 0.11,
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
          gap: '0.82rem',
          overflowX: 'auto',
          maxWidth: '100vw',
          WebkitOverflowScrolling: 'touch',
          paddingLeft: '0.2rem',
        }}>
          {mainMenu.map(({ to, text }) => (
            <Link
              key={to}
              to={to}
              className={location.pathname === to ? "menu3d-active" : "menu3d"}
              style={{
                fontFamily: 'Georgia, Times New Roman, serif',
                fontWeight: 'bold',
                fontSize: '1rem',
                textDecoration: 'none',
                borderRadius: '14px',
                padding: '0.45rem 1.15rem',
                background: location.pathname === to ? '#FFD37B' : '#ede6da',
                color: location.pathname === to ? '#b38529' : '#232C3B',
                transition: 'background 0.18s, color 0.18s, transform 0.24s cubic-bezier(.18,1.9,.45,1.1), box-shadow 0.17s',
                whiteSpace: 'nowrap',
                margin: '0 0 0 0',
                boxShadow: location.pathname === to ? '0 3px 15px #bca97144' : 'none',
                perspective: '300px'
              }}
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
      {/* CSS animación 3D y responsive */}
      <style>
        {`
        .menu3d {
          perspective: 420px !important;
        }
        .menu3d:hover, .menu3d:focus {
          color: #b38529 !important;
          background: #FFD37B !important;
          transform: perspective(330px) rotateY(16deg) scale(1.15) rotateX(6deg);
          box-shadow: 0 8px 36px #b3852977, 0 2px 7px #2222;
          text-shadow: 0 2.5px 10px #fff9,0 1.2px 2.4px #FFD37B44;
        }
        .menu3d-active {
          font-weight: bold;
          background: #FFD37B !important;
          color: #b38529 !important;
          box-shadow: 0 5px 20px #ceb06048;
          text-shadow: 0 2.5px 8px #fff6,0 1.3px 3.3px #b3852925;
          transform: perspective(290px) rotateY(9deg) scale(1.10) rotateX(2deg);
        }
        @media (max-width: 700px) {
          header > div {
            height: 21px !important;
            font-size: 0.88rem !important;
            padding: 0 0.16rem !important;
          }
          nav {
            gap: 0.19rem !important;
            padding: 0.13rem 0.08rem 0.15rem 0.08rem !important;
            min-height: 38px !important;
            max-width: 100vw !important;
            overflow-x: auto !important;
          }
          nav a, nav .menu3d, nav .menu3d-active {
            font-size: 0.92rem !important;
            padding: 0.29rem 0.76rem !important;
            border-radius: 11px !important;
            white-space: nowrap !important;
          }
          img[alt="balanza fondo"] {
            height: 18px !important;
          }
        }
        `}
      </style>
    </header>
  );
}

export default Header;
