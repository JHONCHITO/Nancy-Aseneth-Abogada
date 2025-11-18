import React from 'react';
import imgPenal from '../../assets/imagen6.jpg';

function AsesoriaPenal() {
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
        maxWidth: '600px',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(40,60,120,0.09)',
        overflow: 'hidden'
      }}>
        <img src={imgPenal} alt="Asesoría Jurídica Penal" style={{
          width: '100%',height:'auto',objectFit:'cover',borderRadius:'16px'
        }}/>
      </div>
      <div style={{maxWidth: '520px'}}>
        <h2 style={{
          color: '#1a4d7a',fontSize:'2rem',fontWeight:'bold',marginBottom:'1rem'
        }}>🔹 Asesoría Jurídica Penal</h2>
        <ul style={{
          padding:0,margin:'1rem 0',listStyle:'none',color:'#202F45',fontSize:'1.37rem'
        }}>
          <li style={{padding:'0.4rem 0'}}>Evaluación de casos penales.</li>
          <li style={{padding:'0.4rem 0'}}>Análisis de riesgos legales.</li>
          <li style={{padding:'0.4rem 0'}}>Orientación sobre derechos y deberes del imputado o víctima.</li>
          <li style={{padding:'0.4rem 0'}}>Redacción de denuncias o querellas.</li>
        </ul>
      </div>
    </section>
  );
}
export default AsesoriaPenal;
