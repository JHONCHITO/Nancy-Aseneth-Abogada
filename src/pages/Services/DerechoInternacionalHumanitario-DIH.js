import React from 'react';
import imgDIH from '../../assets/imagen3.jpg';  // usa aquí tu imagen real

const GOLD = '#8F7324';
const GOLD_SOFT = '#70571A';
const DARK_BG = '#0B0C10';
const CARD_BG = '#13141A';
const TIMES = '"Times New Roman", Times, serif';

function DerechoInternacionalHumanitarioDIH() {
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
            src={imgDIH}
            alt="Derecho Internacional Humanitario"
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
            🌍 Derecho Internacional Humanitario - DIH
          </h2>

          <p
            style={{
              fontSize: '1.25rem',
              color: '#E5E7EB',
              marginBottom: '1.2rem',
              lineHeight: 1.5,
            }}
          >
            Asesoría jurídica especializada en:
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
              Aplicación y análisis del DIH en contextos de conflicto armado.
            </li>
            <li style={{ padding: '0.4rem 0' }}>
              Evaluación jurídica de operaciones militares y policiales.
            </li>
            <li style={{ padding: '0.4rem 0' }}>
              Asesoría y acompañamiento en procesos de competencia de la
              Jurisdicción Especial para la Paz - JEP.
            </li>
            <li style={{ padding: '0.4rem 0' }}>
              Defensa de derechos humanos en escenarios de conflicto.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default DerechoInternacionalHumanitarioDIH;
