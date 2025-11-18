import React from 'react';
import imgDelitos from '../../assets/imagen4.jpg';

function IntervencionDelitos() {
  return (
    <section>
      <div className="contenido-info">
        <div className="columna-imagen">
          <img src={imgDelitos} alt="Intervención de Delitos" />
        </div>
        <div className="columna-texto">
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
      </div>
    </section>
  );
}
export default IntervencionDelitos;
