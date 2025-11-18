import React from 'react';
import imgNosotros from '../assets/imagen1.jpg';

function About() {
  return (
    <section>
      <div className="contenido-info">
        <div className="columna-imagen">
          <img src={imgNosotros} alt="Sobre Nosotros - Vim Legis" />
        </div>
        <div className="columna-texto">
          <h2 style={{
            color: '#1a4d7a',
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>Sobre Nosotros</h2>
          <p style={{
            fontSize: '1.29rem',
            color: '#444',
            marginBottom: '0.8rem',
            lineHeight: '1.63'
          }}>
            <b>VIM LEGIS</b> es una firma legal liderada por la abogada <b>Nancy Aseneth Melo</b>, especialista en Derecho Penal, Constitucional y Justicia Militar. Nuestra misión es defender, asesorar y orientar con ética y excelencia a nuestros clientes.
          </p>
          <ul style={{padding:0,margin:'1rem 0',listStyle:'none',color:'#202F45',fontSize:'1.36rem'}}>
            <li style={{padding:'0.28rem 0'}}>✓ Derecho Penal</li>
            <li style={{padding:'0.28rem 0'}}>✓ Derecho Constitucional</li>
            <li style={{padding:'0.28rem 0'}}>✓ Justicia Militar</li>
            <li style={{padding:'0.28rem 0'}}>✓ Defensa de Derechos Humanos</li>
            <li style={{padding:'0.28rem 0'}}>✓ Representación de víctimas e imputados</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default About;
