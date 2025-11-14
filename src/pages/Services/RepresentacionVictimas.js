import React from 'react';
import imgVictimas from '../../assets/imagen3.jpg';

function RepresentacionVictimas() {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2.5rem',
      minHeight: '60vh'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '350px',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(40,60,120,0.09)',
        overflow: 'hidden'
      }}>
        <img src={imgVictimas} alt="Representación de Víctimas" style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          borderRadius: '16px'
        }}/>
      </div>
      <div style={{maxWidth: '520px'}}>
        <h2 style={{
          color: '#1a4d7a',
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>🔹 Representación de Víctimas</h2>
        <ul style={{padding:0, margin:'1rem 0', listStyle:'none', color:'#444', fontSize:'1.07rem'}}>
          <li style={{padding:'0.5rem 0'}}>Acompañamiento en la presentación de denuncias o querellas.</li>
          <li style={{padding:'0.5rem 0'}}>Solicitud de medidas cautelares (protección, alejamiento, etc.).</li>
          <li style={{padding:'0.5rem 0'}}>Reclamación de indemnizaciones por daños y perjuicios.</li>
          <li style={{padding:'0.5rem 0'}}>Representación en juicio como acusación particular.</li>
        </ul>
      </div>
    </section>
  );
}
export default RepresentacionVictimas;
