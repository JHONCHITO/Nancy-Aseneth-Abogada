import React from 'react';
import imgPenal from '../../assets/imagen6.jpg';

function AsesoriaPenal() {
  return (
    <section>
      <div className="contenido-info">
        <div className="columna-imagen">
          <img src={imgPenal} alt="Asesoría Jurídica Penal" />
        </div>
        <div className="columna-texto">
          <h2 style={{
            color: '#1a4d7a',
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            🔹 Asesoría Jurídica Penal
          </h2>
          <ul style={{
            padding: 0,
            margin: '1rem 0',
            listStyle: 'none',
            color: '#202F45',
            fontSize: '1.37rem'
          }}>
            <li style={{ padding: '0.4rem 0' }}>Evaluación de casos penales.</li>
            <li style={{ padding: '0.4rem 0' }}>Análisis de riesgos legales.</li>
            <li style={{ padding: '0.4rem 0' }}>Orientación sobre derechos y deberes del imputado o víctima.</li>
            <li style={{ padding: '0.4rem 0' }}>Redacción de denuncias o querellas.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default AsesoriaPenal;
