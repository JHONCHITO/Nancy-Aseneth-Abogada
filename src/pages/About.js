import React from 'react';
import imgNosotros from '../assets/imagen1.jpg';

function About() {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2.5rem',
      minHeight: '65vh'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '370px',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(40,60,120,0.1)',
        overflow: 'hidden'
      }}>
        <img src={imgNosotros} alt="Sobre Nosotros - Vim Legis" style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          borderRadius: '16px'
        }}/>
      </div>
      <div style={{maxWidth: '550px'}}>
        <h2 style={{
          color: '#1a4d7a',
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>Sobre Nosotros</h2>
        <p style={{
          fontSize: '1.09rem',
          color: '#444',
          marginBottom: '0.8rem',
          lineHeight: '1.63'
        }}>
          <b>VIM LEGIS</b> es una firma legal liderada por la abogada <b>Nancy Aseneth Melo</b>, especialista en Derecho Penal, Constitucional y Justicia Militar. Nuestra misión es defender, asesorar y orientar con ética y excelencia a nuestros clientes.
        </p>
        <ul style={{padding:0,margin:'1rem 0',listStyle:'none',color:'#202F45',fontSize:'1.06rem'}}>
          <li style={{padding:'0.28rem 0'}}>✓ Derecho Penal</li>
          <li style={{padding:'0.28rem 0'}}>✓ Derecho Constitucional</li>
          <li style={{padding:'0.28rem 0'}}>✓ Justicia Militar</li>
          <li style={{padding:'0.28rem 0'}}>✓ Defensa de Derechos Humanos</li>
          <li style={{padding:'0.28rem 0'}}>✓ Representación de víctimas e imputados</li>
        </ul>
      </div>
    </section>
  );
}
export default About;
