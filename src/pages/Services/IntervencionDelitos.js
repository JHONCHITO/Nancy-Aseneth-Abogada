import React from 'react';
import imgDelitos from '../../assets/imagen4.jpg';

function IntervencionDelitos() {
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
        <img src={imgDelitos} alt="Intervención de Delitos" style={{
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
        }}>🔹 Intervención en Todo Tipo de Delitos</h2>
        <ul style={{padding:0, margin:'1rem 0', listStyle:'none', color:'#444', fontSize:'1.37rem'}}>
          <li style={{padding:'0.5rem 0'}}>Delitos contra las personas (homicidios, lesiones, amenazas, violencia de género).</li>
          <li style={{padding:'0.5rem 0'}}>Delitos contra la propiedad (hurtos, estafas).</li>
          <li style={{padding:'0.5rem 0'}}>Delitos sexuales.</li>
          <li style={{padding:'0.5rem 0'}}>Delitos económicos (blanqueo de capitales, fraudes).</li>
          <li style={{padding:'0.5rem 0'}}>Delitos informáticos.</li>
          <li style={{padding:'0.5rem 0'}}>Delitos relacionados con estupefacientes.</li>
          <li style={{padding:'0.5rem 0'}}>Delitos de funcionarios públicos (prevaricación, cohecho, etc.).</li>
        </ul>
      </div>
    </section>
  );
}
export default IntervencionDelitos;
