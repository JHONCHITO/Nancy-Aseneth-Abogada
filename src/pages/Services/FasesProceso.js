import React from 'react';
import imgFases from '../../assets/imagen7.jpg';

function FasesProceso() {
  return (
    <section>
      <div className="contenido-info">
        <div className="columna-imagen">
          <img src={imgFases} alt="Fases del Proceso Penal" />
        </div>
        <div className="columna-texto">
          <h2 style={{
            color: '#1a4d7a',
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            🔹 Actuaciones en Distintas Fases del Proceso Penal
          </h2>
          <ul style={{
            padding: 0,
            margin: '1rem 0',
            listStyle: 'none',
            color: '#444',
            fontSize: '1.37rem'
          }}>
            <li style={{ padding: '0.5rem 0' }}>
              <b>Fase de investigación (instrucción):</b> acompañamiento en declaraciones, recursos ante imputaciones.
            </li>
            <li style={{ padding: '0.5rem 0' }}>
              <b>Fase intermedia:</b> revisión de la acusación, preparación de juicio.
            </li>
            <li style={{ padding: '0.5rem 0' }}>
              <b>Juicio oral:</b> defensa o acusación en el juzgado.
            </li>
            <li style={{ padding: '0.5rem 0' }}>
              <b>Ejecución de sentencia:</b> revisión de penas, solicitudes de libertad condicional y recursos ante el juzgado de ejecución.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FasesProceso;
