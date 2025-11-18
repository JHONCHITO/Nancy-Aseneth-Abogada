import React from 'react';
import imgDefensa from '../../assets/imagen2.jpg';

function DefensaPenal() {
  return (
    <section>
      <div className="contenido-info">
        <div className="columna-imagen">
          <img src={imgDefensa} alt="Defensa Penal" />
        </div>
        <div className="columna-texto">
          <h2 style={{
            color: '#1a4d7a',
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            🔹 Defensa Penal
          </h2>
          <ul style={{
            padding: 0,
            margin: '1rem 0',
            listStyle: 'none',
            color: '#222',
            fontSize: '1.37rem'
          }}>
            <li style={{ padding: '0.4rem 0' }}>Defensa de personas acusadas de delitos, desde faltas menores hasta crímenes graves.</li>
            <li style={{ padding: '0.4rem 0' }}>Representación ante la policía, fiscalía y juzgados.</li>
            <li style={{ padding: '0.4rem 0' }}>Elaboración de estrategias de defensa.</li>
            <li style={{ padding: '0.4rem 0' }}>Preparación de pruebas, testigos y peritajes.</li>
            <li style={{ padding: '0.4rem 0' }}>Apelaciones y recursos.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default DefensaPenal;
