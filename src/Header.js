import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Link, useLocation } from 'react-router-dom';
import balanza from './assets/balanza.jpg';

// Dorados elegantes (más oscuros, consistentes con el Home)
const GOLD = '#8F7324';      // dorado oscuro y lujoso
const GOLD_SOFT = '#70571A'; // aún más oscuro para bordes/resaltados

const DARK_BG = '#0B0C10';
const HEADER_BG = '#13141A';

const mainMenu = [
  { to: '/', text: 'Inicio' },
  { to: '/services/asesoria-penal', text: 'Derecho Penal' },                    // misma ruta que en App.js
  { to: '/services/defensa-penal', text: 'Derecho Penal Militar y Policial' },  // misma ruta que en App.js
  { to: '/services/derecho-constitucional', text: 'Derecho Constitucional' },
  { to: '/services/derecho-internacional-humanitario', text: 'Derecho Internacional Humanitario - DIH' },
  { to: '/contact', text: 'Contacto' },                                         // 👈 añadido
];

function Header() {
  const location = useLocation();

  return (
    <Tilt
      glareEnable
      glareMaxOpacity={0.13}
      tiltMaxAngleX={15}
      tiltMaxAngleY={8}
      perspective={1100}
      scale={1.03}
      transitionSpeed={1300}
      style={{
        background: 'transparent',
        borderRadius: '0 0 13px 13px',
        margin: 0,
        padding: 0,
      }}
    >
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 999,
          background: 'transparent',
          boxShadow: '0 2px 8px #0008',
        }}
      >
        {/* Franja superior solo con teléfono, sin título */}
        <div
          style={{
            background: GOLD,
            color: DARK_BG,
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            fontSize: '0.97rem',
            padding: '0 1rem',
            borderTopLeftRadius: 11,
            borderTopRightRadius: 11,
            boxShadow: '0 3px 10px #00000040',
          }}
        >
          <a
            href="tel:+573184799311"
            style={{
              color: DARK_BG,
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '0.97rem',
            }}
          >
            +57 318 479 9311
          </a>
        </div>

        {/* Menú */}
        <div
          style={{
            position: 'relative',
            background: `linear-gradient(90deg, ${HEADER_BG} 65%, ${DARK_BG} 100%)`,
            fontFamily: 'Georgia, Times New Roman, serif',
            padding: '9px 0 11px 0',
            minHeight: '45px',
            overflow: 'visible',
            borderBottomLeftRadius: 11,
            borderBottomRightRadius: 11,
          }}
        >
          <img
            src={balanza}
            alt="balanza fondo"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%) scale(1.04)',
              height: '39px',
              opacity: 0.12,
              zIndex: 0,
              userSelect: 'none',
              pointerEvents: 'none',
              filter: 'grayscale(100%)',
              transition: 'transform 0.4s cubic-bezier(.27,2,.17,1.7)',
            }}
            draggable={false}
          />

          <nav
            style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', // más ancho para 2 líneas limpias
              gap: '0.7rem',
              alignItems: 'center',
              justifyItems: 'center',
              padding: '0.75rem 1.2rem',
              background: 'rgba(10,10,10,0.92)',
              borderRadius: '10px',
              maxWidth: '100%',
              border: `1px solid ${GOLD_SOFT}`,
            }}
          >
            {mainMenu.map(({ to, text }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={isActive ? 'menu3d-active' : 'menu3d'}
                  style={{
                    fontFamily: 'Georgia, Times New Roman, serif',
                    fontWeight: 'bold',
                    fontSize: '0.98rem',        // un poco más pequeño
                    textDecoration: 'none',
                    borderRadius: '13px',
                    padding: '0.45rem 1rem',    // algo más de alto
                    background: isActive ? GOLD : '#151515',
                    color: isActive ? DARK_BG : '#F5F5F5',
                    transition:
                      'background 0.14s, color 0.14s, transform 0.20s, box-shadow 0.19s',
                    whiteSpace: 'normal',       // permite varias líneas
                    textAlign: 'center',        // centra el texto
                    lineHeight: 1.25,           // da aire entre las dos líneas
                    boxShadow: isActive ? '0 2px 10px #00000080' : 'none',
                    margin: '0.15rem',
                    border: isActive ? `1px solid ${GOLD_SOFT}` : '1px solid #333',
                  }}
                >
                  {text}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Estilos 3D adaptados a la nueva paleta */}
        <style>
          {`
          .menu3d {
            transition: transform 0.27s, box-shadow 0.25s, background 0.2s, color 0.2s;
            will-change: transform, box-shadow;
            perspective: 360px;
          }
          .menu3d:hover,
          .menu3d:focus {
            color: ${DARK_BG} !important;
            background: ${GOLD} !important;
            transform: perspective(400px) rotateY(13deg) scale(1.10) rotateX(6deg) !important;
            box-shadow: 0 6px 24px #000000aa, 0 2px 7px #00000088;
            text-shadow: 0 2px 7px #ffffff33, 0 1px 2px ${GOLD_SOFT}33;
            border-color: ${GOLD_SOFT} !important;
          }
          .menu3d-active {
            font-weight: bold;
            background: ${GOLD} !important;
            color: ${DARK_BG} !important;
            box-shadow: 0 3px 14px #000000aa;
            text-shadow: 0 2px 8px #ffffff33, 0 1.3px 3.3px ${GOLD_SOFT}33;
            transform: perspective(320px) rotateY(7deg) scale(1.06) rotateX(2deg);
          }
          @media (max-width: 850px) {
            nav {
              grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)) !important;
              gap: 0.45rem !important;
              padding: 0.45rem 0.5rem !important;
            }
            nav a, nav .menu3d, nav .menu3d-active {
              font-size: 0.97rem !important;
              padding: 0.36rem 0.6rem !important;
              border-radius: 10px !important;
              white-space: normal !important;
              text-align: center !important;
              line-height: 1.25 !important;
            }
            img[alt="balanza fondo"] {
              height: 22px !important;
            }
          }
        `}
        </style>
      </header>
    </Tilt>
  );
}

export default Header;
