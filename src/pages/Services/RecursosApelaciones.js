import React from 'react';
import bannerRecursos from '../../assets/banner_recursos.jpg';

function RecursosApelaciones() {
  return (
    <section style={{
      padding: 0,
      background: 'none',
      boxShadow: 'none',
      maxWidth: 'none',
      margin: 0,
      borderRadius: 0
    }}>
      <div
        style={{
          width: '100%',
          minHeight: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          borderRadius: '18px',
          backgroundImage: `url(${bannerRecursos})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          overflow: 'hidden',
          margin: '0 auto 2.7rem auto'
        }}
      >
        {/* Oscurecer imagen para que texto sea más legible */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(25,30,48,0.43)',
          zIndex: 1
        }}></div>
        {/* Contenido encima de la imagen */}
        <div style={{
          position:'relative',
          zIndex: 2,
          width: '100%',
          textAlign: 'center',
          padding: '3.2rem 1.2rem 2.2rem 1.2rem',
          maxWidth: '940px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize:'3.2rem',
            color:'#EBC16F',
            fontFamily:'Georgia, Times New Roman, serif',
            fontWeight:'bold',
            textShadow:'0 4px 14px #161717, 0 1px 0 #fff',
            margin:'0 0 2.1rem 0',
            letterSpacing:'1px'
          }}>
            Recursos y Apelaciones
          </h1>
          <ul style={{
            listStyle:'none',
            margin:'0 auto',
            color:'#fff',
            fontWeight:500,
            fontSize:'1.45rem',
            textShadow:'0 1px 8px #161717',
            maxWidth:'840px',
          }}>
            <li style={{margin:'2.1rem 0 1.2rem 0'}}>
              Recurso de apelación.
              <div style={{
                fontSize:'1.37rem',
                color:'#ffe8bb',
                fontWeight:400,
                marginTop:'0.7rem',
                textShadow:'0 1px 6px #141717'
              }}>
                Permite que una decisión judicial sea revisada por un tribunal superior, buscando corregir posibles errores.
              </div>
            </li>
            <li style={{margin:'2.1rem 0 1.2rem 0'}}>
              Recurso de casación.
              <div style={{
                fontSize:'1.37rem',
                color:'#ffe8bb',
                fontWeight:400,
                marginTop:'0.7rem',
                textShadow:'0 1px 6px #141717'
              }}>
                Se emplea para analizar si una sentencia se ajusta a la ley y a los principios jurídicos fundamentales.
              </div>
            </li>
            <li style={{margin:'2.1rem 0 1rem 0'}}>
              Revisión de sentencias firmes.
              <div style={{
                fontSize:'1.37rem',
                color:'#ffe8bb',
                fontWeight:400,
                marginTop:'0.7rem',
                textShadow:'0 1px 6px #141717'
              }}>
                Es un procedimiento excepcional que permite reexaminar decisiones definitivas en casos muy específicos.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default RecursosApelaciones;
