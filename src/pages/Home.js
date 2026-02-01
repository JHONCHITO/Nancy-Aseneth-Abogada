import React from 'react';
import heroImage from '../assets/imagen5.jpg';

// Dorados elegantes (más oscuros)
const GOLD = '#8F7324';      // dorado oscuro y lujoso
const GOLD_SOFT = '#70571A'; // aún más oscuro para bordes/resaltados

const DARK_BG = '#0B0C10';   // casi negro
const CARD_BG = '#13141A';   // gris muy oscuro

const TIMES = '"Times New Roman", Times, serif';

function Home() {
  return (
    <>
      <section
        className="home-bg-centro"
        style={{
          width: '100vw',
          minHeight: '480px',
          background: DARK_BG,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '3rem 0',
          fontFamily: TIMES,
        }}
      >
        <div
          className="home-content-centro"
          style={{
            maxWidth: 1000,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: TIMES,
            padding: '0 1rem',
          }}
        >
          {/* BLOQUE PRINCIPAL */}
          <div
            className="home-text-block"
            style={{
              background: CARD_BG,
              color: GOLD,
              borderRadius: '20px',
              padding: '2rem 1.5rem',
              boxShadow: '0 7px 24px #00000066',
              marginBottom: '2rem',
              width: '100%',
              maxWidth: 900,
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',          // CENTRAR TEXTO
              border: `1px solid ${GOLD_SOFT}`,
              fontFamily: TIMES,
            }}
          >
            {/* TITULOS */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',       // CENTRAR CONTENEDOR
                gap: '0.6rem',
                marginBottom: '1.2rem',
                fontFamily: TIMES,
              }}
            >
              <h1
                style={{
                  fontFamily: TIMES,
                  fontSize: '2rem',         // MISMO TAMAÑO BASE
                  fontWeight: 900,
                  color: '#FFFFFF',
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                ⚖️Especialista en procedimiento penal, constitucional y justicia militar
              </h1>

              <p
                style={{
                  fontSize: '2rem',         // MISMO TAMAÑO QUE EL H1
                  margin: 0,
                  color: '#E5E7EB',
                  fontWeight: 900,
                  fontFamily: TIMES,
                  lineHeight: 1.3,
                }}
              >
                Magíster en derechos humanos y derecho internacional de los conflictos armados
              </p>
            </div>

            <a
              href="/contact"
              style={{
                background: GOLD,
                color: '#0B0C10',
                fontWeight: 'bold',
                padding: '0.9rem 2.3rem',
                borderRadius: '30px',
                fontSize: '1.05rem',
                letterSpacing: '1px',
                boxShadow: '0 2px 6px #00000088',
                border: 'none',
                textDecoration: 'none',
                marginTop: '0.5rem',
                display: 'inline-block',
                fontFamily: TIMES,
              }}
            >
              AGENDAR CONSULTA
            </a>
          </div>

          {/* BLOQUE IMAGEN Y PERFIL */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: CARD_BG,
              borderRadius: '18px',
              boxShadow: '0 10px 50px #00000055',
              padding: '2.2rem 1.5rem',
              maxWidth: 900,
              margin: '0 auto',
              border: `1px solid ${GOLD_SOFT}`,
              fontFamily: TIMES,
            }}
          >
            <img
              src={heroImage}
              alt="Abogada Nancy Aseneth Melo Canamejoy"
              className="hero-image-principal"
              style={{
                width: 320,
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '18px',
                boxShadow: '0 7px 18px #00000099',
                marginBottom: '1.1rem',
                display: 'block',
              }}
            />
            <h2
              style={{
                color: GOLD,
                fontWeight: 'bold',
                fontSize: '2rem',
                textAlign: 'center',
                marginBottom: '0.6rem',
                fontFamily: TIMES,
              }}
            >
              Nancy Aseneth Melo Canamejoy
            </h2>
            <h3
              style={{
                color: '#FFFFFF',
                fontWeight: 900,
                fontSize: '2rem',
                textAlign: 'center',
                fontFamily: TIMES,
                marginBottom: '0.5rem',
              }}
            >
                Abogada con sólida formación jurídica y experiencia en la asesoría y representación legal. Me caracterizo por un enfoque ético, responsable y estratégico en la resolución de conflictos, priorizando siempre la defensa de los intereses de mis clientes con rigor jurídico y compromiso profesional.
            </h3>
            <p
              style={{
                color: '#FFFFFF',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: '2rem',
                marginBottom: '0.6rem',
                fontFamily: TIMES,
              }}
            >
              
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
