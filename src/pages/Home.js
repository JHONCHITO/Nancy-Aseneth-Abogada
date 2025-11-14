import React from 'react';
import heroImage from '../assets/imagen5.jpg';

function Home() {
  return (
    <section className="home" style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2.5rem',
      minHeight: '70vh'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '410px',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(40,60,120,0.09)',
        overflow: 'hidden'
      }}>
        <img 
          src={heroImage} 
          alt="VIM LEGIS - Imagen principal" 
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '16px'
          }}
        />
      </div>
      <div style={{maxWidth: '520px'}}>
        {/* Bloque abogada */}
        <div style={{
          marginBottom: '2.2rem',
          fontFamily: 'Times New Roman, Georgia, serif',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            letterSpacing: '1px',
            color: '#222'
          }}>
            NANCY ASENETH MELO
          </div>
          <div style={{
            fontSize: '1.45rem',
            fontWeight: 'bold',
            color: '#222',
            marginBottom: '0.6rem'
          }}>
            ABOGADA
          </div>
          <div style={{
            fontSize: '1.09rem',
            color: '#2e3d50',
            fontWeight: 'bold'
          }}>
            Especialista en derecho penal,<br />
            constitucional y justicia militar
          </div>
        </div>
        {/* Slogan y descripción */}
        <p className="slogan" style={{
          fontStyle: 'italic',
          color: '#d4af37',
          fontSize: '1.3rem',
          fontWeight: 'bold',
          margin: 0,
          marginBottom: '0.8rem'
        }}>
          Firma Legal - Gestión Jurídica y Servicios Legales
        </p>
        <p style={{
          fontSize: '1.15rem',
          color: '#444',
          maxWidth: '400px',
          textAlign: 'center',
          margin: 0
        }}>
          Especialistas en Derecho Penal, Constitucional y Justicia Militar.<br/>
          Profesionales en defensa, asesoría y respaldo legal para individuos y entidades.
        </p>
      </div>
    </section>
  );
}

export default Home;
