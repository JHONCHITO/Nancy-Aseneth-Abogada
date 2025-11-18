import React from 'react';
import imgVictimas from '../../assets/imagen3.jpg';

function RepresentacionVictimas() {
  return (
    <section>
      <div className="contenido-info">
        <div className="columna-imagen">
          <img src={imgVictimas} alt="Representación de Víctimas" />
        </div>
        <div className="columna-texto">
          <h2 style={{
            color: '#1a4d7a',
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            🔹 Representación de Víctimas
          </h2>
          <ul style={{padding:0, margin:'1rem 0', listStyle:'none', color:'#444', fontSize:'1.37rem'}}>
            <li style={{padding:'0.5rem 0'}}>Acompañamiento en la presentación de denuncias o querellas.</li>
            <li style={{padding:'0.5rem 0'}}>Solicitud de medidas cautelares (protección, alejamiento, etc.).</li>
            <li style={{padding:'0.5rem 0'}}>Reclamación de indemnizaciones por daños y perjuicios.</li>
            <li style={{padding:'0.5rem 0'}}>Representación en juicio como acusación particular.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default RepresentacionVictimas;
