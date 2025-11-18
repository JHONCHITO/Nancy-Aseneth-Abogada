import React, { useState } from 'react';
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
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleLink = () => setOpen(false);

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
          <a href="tel:+573184799311" style={{ color: '#232C3B', fontWeight: 700, textDecoration:'none' }}>
            +57 318 479 9311
          </a>
        </span>
      </div>

      {/* Botón hamburguesa sólo en móvil */}
      <button
        className="menu-burger"
        aria-label="Abrir menú"
        onClick={() => setOpen(!open)}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '2.3rem',
          display: 'none',
          position: 'absolute',
          top: 62,
          right: 25,
          zIndex: 100
        }}
      >
        <span style={{display: 'block', width: '31px', height: '4px', background: '#b38529', margin: '7px 0', borderRadius:'3px'}} />
        <span style={{display: 'block', width: '31px', height: '4px', background: '#b38529', margin: '7px 0', borderRadius:'3px'}} />
        <span style={{display: 'block', width: '31px', height: '4px', background: '#b38529', margin: '7px 0', borderRadius:'3px'}} />
      </button>

      {/* Menú */}
      <nav
        className={open ? 'menu-open' : ''}
        style={{
          position: 'relative',
          background: '#fff',
          fontFamily: 'Georgia, Times New Roman, serif',
          padding: '22px 0',
          minHeight: 'unset',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.13rem',
            width: '100%',
            ...(open ? { flexDirection: 'column', gap: '0.4rem', alignItems:'flex-start', paddingLeft:'12%'} : {})
          }}
        >
          {mainMenu.map(({ to, text }) => (
            <Link
              key={to}
              to={to}
              onClick={handleLink}
              style={{
                color: location.pathname === to ? '#b38529' : '#232C3B',
                fontWeight: 'bold',
                fontSize: '1.13rem',
                textDecoration: 'none',
                borderRadius: '12px',
                padding: '0.59rem 1.70rem',
                background: location.pathname === to ? '#FFD37B' : '#fff',
                transition: 'background 0.14s, color 0.13s',
                display: open ? 'block' : 'inline-block',
                width: open ? '90%' : 'auto'
              }}
            >
              {text}
            </Link>
          ))}
        </div>
      </nav>

      {/* CSS Responsive incluido en el mismo archivo */}
      <style>
        {`
        @media (max-width: 900px) {
          .menu-burger {
            display: block !important;
          }
          nav {
            flex-direction: column !important;
            padding-top: 20px !important;
          }
          nav .menu-open > div,
          .menu-open > div {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding-left: 11% !important;
            background: #fff !important;
          }
          nav:not(.menu-open) > div {
            display: none !important;
          }
        }
        @media (min-width: 901px) {
          .menu-burger {
            display: none !important;
          }
          nav > div {
            display: flex !important;
          }
        }
        `}
      </style>
    </header>
  );
}

export default Header;
