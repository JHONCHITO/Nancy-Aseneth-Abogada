import React from 'react';
import heroImage from '../assets/imagen5.jpg';

function Home() {
  return (
    <>
      <section style={{
        width: '100vw',
        minHeight: '480px',
        background: '#232c3b',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3rem 0'
      }}>
        <div style={{
          maxWidth: 1050,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{
            color: '#FFD37B',
            fontWeight: 700,
            fontSize: '2.23rem',
            fontFamily: 'Georgia,Times New Roman,serif',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Defendemos tus derechos
          </div>
          <h1 style={{
            fontFamily: 'Georgia, Times New Roman, serif',
            fontSize: '2.45rem',
            fontWeight: 900,
            color: '#fff',
            margin: '0 0 1.05rem 0',
            textAlign: 'center'
          }}>
            Firma Jurídica Especializada<br />
            en Derecho Penal y Constitucional
          </h1>
          <div style={{
            fontSize: '1.33rem',
            marginBottom: '1.15rem',
            color: '#dce3f5',
            fontWeight: 500,
            textAlign: 'center'
          }}>
            <b>Nancy Aseneth Melo</b> - Abogada. Especialista en derecho penal, constitucional y justicia militar.
            Defensa, asesoría y respaldo legal para individuos y entidades.
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
              marginBottom: '2rem'
            }}>
            AGENDAR CONSULTA
          </a>
          {/* Bloque imagen y perfil */}
          <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: '#151A26',
            borderRadius: '18px',
            boxShadow: '0 10px 50px #10152425',
            padding: '2.3rem 1.1rem',
            maxWidth: 900,
            margin: '0 auto'
          }}>
            <img
              src={heroImage}
              alt="Abogada Vim Legis"
              style={{
                width: 385,
                height: 385,
                objectFit: 'cover',
                borderRadius: '18px',
                boxShadow: '0 7px 18px #232c3b85',
                marginBottom: '1.25rem'
              }}
            />
            <h2 style={{
              color: '#FFD37B',
              fontWeight: 'bold',
              fontSize: '2.1rem',
              textAlign: 'center',
              marginBottom: '0.85rem',
              fontFamily: 'Georgia, Times New Roman, serif'
            }}>Nancy Aseneth Melo</h2>
            <h3 style={{
              color: '#FFD37B',
              fontWeight: 700,
              fontSize: '1.15rem',
              textAlign: 'center',
              fontFamily: 'Georgia, Times New Roman, serif',
              marginBottom: '.55rem'
            }}>Abogada - Especialista en derecho penal, constitucional y justicia militar</h3>
            <p style={{
              color: '#ffd37b',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: '1.05rem',
              marginBottom: '0.9rem',
              fontFamily: 'Georgia, Times New Roman, serif'
            }}>
              Defensa, asesoría y respaldo legal para individuos y entidades.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
