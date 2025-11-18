import React from 'react';
import heroImage from '../assets/imagen5.jpg';

function Home() {
  return (
    <>
      <section
        className="home-bg-centro"
        style={{
          width: '100vw',
          minHeight: '480px',
          background: '#232c3b',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '3rem 0',
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
          }}
        >
          {/* BLOQUE AZUL centrado */}
          <div
            className="home-text-block"
            style={{
              background: '#232c3b',
              color: '#FFD37B',
              borderRadius: '20px',
              padding: '2.2rem 1.2rem',
              boxShadow: '0 7px 24px #2225',
              marginBottom: '2rem',
              width: '100%',
              maxWidth: 900,         // MÁS ANCHO
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'left',
            }}
          >
            {/* TITULOS PROFESIONALES Y ALINEADOS */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '0.4rem',
                marginBottom: '1rem',
              }}
            >
              <h2
                style={{
                  fontWeight: 700,
                  fontSize: '2.8rem',
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  margin: 0,
                  letterSpacing: '0.08em',
                  color: '#FFD37B',
                  lineHeight: 1,
                  whiteSpace: 'nowrap',   // 👉 una sola línea
                }}
              >
                Defendemos tus derechos
              </h2>

              <h1
                style={{
                  fontFamily: 'Merriweather, Georgia, "Times New Roman", serif',
                  fontSize: '2.6rem',
                  fontWeight: 900,
                  color: '#fff',
                  margin: 0,
                  lineHeight: 1.1,
                  whiteSpace: 'nowrap',   // 👉 solo se parte en el <br />
                }}
              >
                Firma Jurídica Especializada en
                <br />
                Derecho Penal y Constitucional
              </h1>
            </div>

            <div
              style={{
                fontSize: '1.15rem',
                marginTop: '0.3rem',
                marginBottom: '1rem',
                color: '#dce3f5',
                fontWeight: 900,
                textAlign: 'left',
              }}
            >
              <b>Nancy Aseneth Melo</b> - Abogada. Especialista en derecho penal,
              constitucional y justicia militar. Defensa, asesoría y respaldo legal
              para individuos y entidades.
            </div>

            <a
              href="/contact"
              style={{
                background: '#FFD37B',
                color: '#232C3B',
                fontWeight: 'bold',
                padding: '0.99rem 2.4rem',
                borderRadius: '33px',
                fontSize: '1.14rem',
                letterSpacing: '1.2px',
                boxShadow: '0 2px 6px #1c233166',
                border: 'none',
                textDecoration: 'none',
                marginBottom: '1rem',
                display: 'inline-block',
              }}
            >
              AGENDAR CONSULTA
            </a>
          </div>

          {/* Bloque imagen y perfil */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: '#151A26',
              borderRadius: '18px',
              boxShadow: '0 10px 50px #10152425',
              padding: '2.3rem 1.1rem',
              maxWidth: 900,
              margin: '0 auto',
            }}
          >
            <img
              src={heroImage}
              alt="Abogada Vim Legis"
              className="hero-image-principal"
              style={{
                width: 330,
                maxWidth: '95vw',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '18px',
                boxShadow: '0 7px 18px #232c3b85',
                marginBottom: '1.25rem',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <h2
              style={{
                color: '#FFD37B',
                fontWeight: 'bold',
                fontSize: '2.1rem',
                textAlign: 'center',
                marginBottom: '0.85rem',
                fontFamily: 'Georgia, "Times New Roman", serif',
              }}
            >
              Nancy Aseneth Melo
            </h2>
            <h3
              style={{
                color: '#FFD37B',
                fontWeight: 700,
                fontSize: '1.15rem',
                textAlign: 'center',
                fontFamily: 'Georgia, "Times New Roman", serif',
                marginBottom: '.55rem',
              }}
            >
              Abogada - Especialista en derecho penal, constitucional y justicia militar
            </h3>
            <p
              style={{
                color: '#ffd37b',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: '1.05rem',
                marginBottom: '0.9rem',
                fontFamily: 'Georgia, "Times New Roman", serif',
              }}
            >
              Defensa, asesoría y respaldo legal para individuos y entidades.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
