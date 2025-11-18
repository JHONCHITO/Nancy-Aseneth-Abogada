import React from 'react';
import Tilt from 'react-parallax-tilt';
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
    <Tilt
      glareEnable
      glareMaxOpacity={0.13}
      tiltMaxAngleX={15}
      tiltMaxAngleY={8}
      perspective={1100}
      scale={1.03}
      transitionSpeed={1300}
      style={{ background: 'transparent', borderRadius: "0 0 13px 13px", margin: 0, padding: 0 }}
    >
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 999,
        background: 'transparent',
        boxShadow: '0 2px 8px #0002'
      }}>
        {/* Barra dorada */}
        <div style={{
          background: '#ddbc71',
          color: '#232C3B',
          height: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.97rem',
          padding: '0 1rem',
          borderTopLeftRadius: 11,
          borderTopRightRadius: 11,
          boxShadow: '0 3px 10px #c2a04215'
        }}>
          <span style={{
            fontWeight: 'bold',
            fontSize: '1.03rem',
            letterSpacing: '2px',
            fontFamily: 'Georgia, Times New Roman, serif'
          }}>VIM LEGIS</span>
          <span>
            <a href="tel:+573184799311" style={{
              color: '#232C3B', fontWeight: 700, textDecoration: 'none', fontSize: '0.97rem'
            }}>
              +57 318 479 9311
            </a>
          </span>
        </div>
        {/* Menú horizontal-grid */}
        <div style={{
          position: 'relative',
          background: 'linear-gradient(90deg, #ede6da 70%, #ddbc71 100%)',
          fontFamily: 'Georgia, Times New Roman, serif',
          padding: '9px 0 11px 0',
          minHeight: '45px',
          overflow: 'visible',
          borderBottomLeftRadius: 11,
          borderBottomRightRadius: 11
        }}>
          <img
            src={balanza}
            alt="balanza fondo"
            style={{
              position: 'absolute',
              top: '49%',
              left: '50%',
              transform: 'translate(-50%,-50%) scale(1.04)',
              height: '39px',
              opacity: 0.13,
              zIndex: 0,
              userSelect: 'none',
              pointerEvents: 'none',
              transition: "transform 0.4s cubic-bezier(.27,2,.17,1.7)"
            }}
            draggable={false}
          />
          <nav style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '0.7rem',
            alignItems: 'center',
            justifyItems: 'center',
            padding: '0.75rem 1.2rem',
            background: 'rgba(237,230,218, 0.97)',
            borderRadius: '10px',
            maxWidth: '100%',
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
                  borderRadius: '13px',
                  padding: '0.37rem 1rem',
                  background: location.pathname === to ? '#FFD37B' : '#ede6da',
                  color: location.pathname === to ? '#b38529' : '#232C3B',
                  transition: 'background 0.14s, color 0.14s, transform 0.20s, box-shadow 0.19s',
                  whiteSpace: 'nowrap',
                  boxShadow: location.pathname === to ? '0 2px 10px #bca97130' : 'none',
                  margin: '0.15rem',
                  textAlign: 'center'
                }}
              >
                {text}
              </Link>
            ))}
          </nav>
        </div>
        {/* Animación 3D avanzada y responsive */}
        <style>
          {`
          .menu3d {
            transition: transform 0.27s, box-shadow 0.25s;
            will-change: transform, box-shadow;
            perspective: 360px;
          }
          .menu3d:hover, .menu3d:focus {
            color: #b38529 !important;
            background: #FFD37B !important;
            transform: perspective(400px) rotateY(13deg) scale(1.10) rotateX(6deg) !important;
            box-shadow: 0 6px 24px #b3852970, 0 2px 7px #2222;
            text-shadow: 0 2px 7px #fff5,0 1px 2px #FFD37B22;
          }
          .menu3d-active {
            font-weight: bold;
            background: #FFD37B !important;
            color: #b38529 !important;
            box-shadow: 0 3px 14px #ceb0603d;
            text-shadow: 0 2px 8px #fff6,0 1.3px 3.3px #b3852922;
            transform: perspective(320px) rotateY(7deg) scale(1.06) rotateX(2deg);
          }
          @media (max-width: 850px) {
            nav {
              grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)) !important;
              gap: 0.45rem !important;
              padding: 0.45rem 0.5rem !important;
            }
            nav a, nav .menu3d, nav .menu3d-active {
              font-size: 0.97rem !important;
              padding: 0.36rem 0.6rem !important;
              border-radius: 10px !important;
              white-space: nowrap !important;
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
