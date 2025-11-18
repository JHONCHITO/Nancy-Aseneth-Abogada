import React from 'react';
import imgFases from '../../assets/imagen7.jpg';

function FasesProceso() {
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
        <img src={imgFases} alt="Fases del Proceso Penal" style={{
          width: '100%',height:'auto',objectFit:'cover',borderRadius:'16px'
        }}/>
      </div>
      <div style={{maxWidth: '520px'}}>
        <h2 style={{
          color: '#1a4d7a',fontSize:'2rem',fontWeight:'bold',marginBottom:'1rem'
        }}>🔹 Actuaciones en Distintas Fases del Proceso Penal</h2>
        <ul style={{padding:0, margin:'1rem 0', listStyle:'none', color:'#444', fontSize:'1.37rem'}}>
          <li style={{padding:'0.5rem 0'}}>
            <b>Fase de investigación (instrucción):</b> acompañamiento en declaraciones, recursos ante imputaciones.
          </li>
          <li style={{padding:'0.5rem 0'}}>
            <b>Fase intermedia:</b> revisión de la acusación, preparación de juicio.
          </li>
          <li style={{padding:'0.5rem 0'}}>
            <b>Juicio oral:</b> defensa o acusación en el juzgado.
          </li>
          <li style={{padding:'0.5rem 0'}}>
            <b>Ejecución de sentencia:</b> revisión de penas, solicitudes de libertad condicional y recursos ante el juzgado de ejecución.
          </li>
        </ul>
      </div>
    </section>
  );
}
export default FasesProceso;
