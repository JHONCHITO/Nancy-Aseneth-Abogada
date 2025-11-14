import React from 'react';
import imgDefensa from '../../assets/imagen2.jpg';

function DefensaPenal() {
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
        boxShadow: '0 8px 24px rgba(40,60,120,0.09)',
        overflow: 'hidden'
      }}>
        <img src={imgDefensa} alt="Defensa Penal" style={{
          width:'100%',height:'auto',objectFit:'cover',borderRadius:'16px'
        }}/>
      </div>
      <div style={{maxWidth: '520px'}}>
        <h2 style={{
          color: '#1a4d7a',fontSize:'2rem',fontWeight:'bold',marginBottom:'1rem'
        }}>🔹 Defensa Penal</h2>
        <ul style={{
          padding:0,margin:'1rem 0',listStyle:'none',color:'#222',fontSize:'1.07rem'
        }}>
          <li style={{padding:'0.4rem 0'}}>Defensa de personas acusadas de delitos, desde faltas menores hasta crímenes graves.</li>
          <li style={{padding:'0.4rem 0'}}>Representación ante la policía, fiscalía y juzgados.</li>
          <li style={{padding:'0.4rem 0'}}>Elaboración de estrategias de defensa.</li>
          <li style={{padding:'0.4rem 0'}}>Preparación de pruebas, testigos y peritajes.</li>
          <li style={{padding:'0.4rem 0'}}>Apelaciones y recursos.</li>
        </ul>
      </div>
    </section>
  );
}
export default DefensaPenal;
