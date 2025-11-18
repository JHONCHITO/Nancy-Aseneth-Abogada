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

      {/* Botón hamburguesa */}
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

      {/* Menú flotante responsivo */}
      <nav
        className={open ? 'menu-open' : ''}
        style={{
          position: open ? 'fixed' : 'relative',
          top: open ? 0 : undefined,
          left: open ? 0 : undefined,
          width: open ? '100vw' : '100%',
          height: open ? '100vh' : 'auto',
          background: open ? 'rgba(25,33,53,0.98)' : '#fff',
          fontFamily: 'Georgia, Times New Roman, serif',
          padding: open ? '80px 0 0 0' : '22px 0',
          zIndex: 9999,
          transition: 'all 0.33s cubic-bezier(.4,2,.35,1)',
          display: 'flex',
          alignItems: open ? 'flex-start' : 'center',
          justifyContent: open ? 'center' : 'center',
          flexDirection: open ? 'column' : 'row'
        }}
      >
        {open && (
          <button
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              color: '#FFD37B',
              fontSize: '2.2rem',
              position: 'absolute',
              top: 30,
              right: 25,
              zIndex: 10000,
              cursor: 'pointer'
            }}
          >
            ×
          </button>
        )}
        <div
          style={{
            display: 'flex',
            flexDirection: open ? 'column' : 'row',
            alignItems: open ? 'flex-start' : 'center',
            justifyContent: 'center',
            gap: open ? '1rem' : '1.15rem',
            width: open ? '100%' : 'auto',
            paddingLeft: open ? '12%' : 0
          }}>
          {mainMenu.map(({ to, text }) => (
            <Link
              key={to}
              to={to}
              onClick={handleLink}
              style={{
                color: open ? '#FFD37B' : (location.pathname === to ? '#b38529' : '#232C3B'),
                fontWeight: 'bold',
                fontSize: open ? '1.38rem' : '1.13rem',
                textDecoration: 'none',
                borderRadius: '12px',
                padding: open ? '1.10rem 0.7rem' : '0.59rem 1.70rem',
                background: location.pathname === to && !open ? '#FFD37B' : 'transparent',
                transition: 'background 0.14s, color 0.13s',
                width: open ? '99%' : 'auto',
                display: open ? 'block' : 'inline-block',
                textAlign: open ? 'left' : 'center'
              }}
            >
              {text}
            </Link>
          ))}
        </div>
      </nav>
      {/* CSS Responsive */}
      <style>
        {`
        @media (max-width: 900px) {
          .menu-burger {
            display: block !important;
          }
          nav {
            flex-direction: column !important;
          }
        }
        @media (min-width: 901px) {
          .menu-burger {
            display: none !important;
          }
          nav > div {
            display: flex !important;
            flex-direction: row !important;
          }
        }
        `}
      </style>
    </header>
  );
}

export default Header;
