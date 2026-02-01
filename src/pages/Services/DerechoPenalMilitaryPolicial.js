import React from 'react';
import imgDefensa from '../../assets/imagen2.jpg';

const GOLD = '#8F7324';      // dorado oscuro y lujoso
const GOLD_SOFT = '#70571A'; // borde / detalles
const DARK_BG = '#0B0C10';
const CARD_BG = '#13141A';
const TIMES = '"Times New Roman", Times, serif';

function DefensaPenal() {
  return (
    <section
      style={{
        background: DARK_BG,
        padding: '3rem 1rem',
        fontFamily: TIMES,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        className="contenido-info"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: 1100,
          width: '100%',
          background: CARD_BG,
          borderRadius: 18,
          border: `1px solid ${GOLD_SOFT}`,
          boxShadow: '0 10px 40px #00000077',
          overflow: 'hidden',
        }}
      >
        <div
          className="columna-imagen"
          style={{
            flex: '1 1 320px',
            minWidth: 280,
          }}
        >
          <img
            src={imgDefensa}
            alt="Derecho penal militar y policial"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>

        <div
          className="columna-texto"
          style={{
            flex: '1 1 360px',
            padding: '2rem 2.3rem',
            color: '#F5F5F5',
            fontFamily: TIMES,
          }}
        >
          <h2
            style={{
              color: GOLD,
              fontSize: '2.2rem',
              fontWeight: 'bold',
              marginBottom: '1.2rem',
            }}
          >
            🎖️ Derecho Penal Militar y Policial
          </h2>

          <p
            style={{
              fontSize: '1.25rem',
              color: '#E5E7EB',
              marginBottom: '1.2rem',
              lineHeight: 1.5,
            }}
          >
            Asistencia jurídica especializada a miembros de la Fuerza Pública:
          </p>

          <ul
            style={{
              padding: 0,
              margin: 0,
              listStyle: 'none',
              color: '#E5E7EB',
              fontSize: '1.25rem',
              lineHeight: 1.5,
            }}
          >
            <li style={{ padding: '0.4rem 0' }}>
              Defensa en procesos ante la Justicia Penal Militar y Policial.
            </li>
            <li style={{ padding: '0.4rem 0' }}>
              Acompañamiento en investigaciones disciplinarias y penales.
            </li>
            <li style={{ padding: '0.4rem 0' }}>
              Análisis de legalidad del uso de la fuerza y operaciones.
            </li>
            <li style={{ padding: '0.4rem 0' }}>
              Protección de derechos y garantías constitucionales del personal uniformado.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default DefensaPenal;
