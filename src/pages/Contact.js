import React, { useState } from 'react';
import contactoImg from '../assets/imagen6.jpg';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
      gap: '2.5rem',
      minHeight: '65vh'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '600px',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(40,60,120,0.09)',
        overflow: 'hidden'
      }}>
        <img src={contactoImg} alt="Contacto Vim Legis" style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          borderRadius: '16px'
        }}/>
      </div>
      <div style={{maxWidth: '500px', width:'100%'}}>
        <h2 style={{
          color: '#1a4d7a', fontSize:'2.2rem', fontWeight:'bold', marginBottom:'1.2rem'
        }}>Contacto</h2>
        <form 
          onSubmit={handleSubmit} 
          style={{
            background: '#7ab4eeff',
            borderRadius: '12px',
            boxShadow: '0 3px 13px rgba(40,60,120,0.04)',
            padding: '1.2rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.7rem',
            width: '100%'
          }}
        >
          <input
            name="name"
            type="text"
            placeholder="Tu nombre completo"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              border: '1px solid #c8d6e7',
              borderRadius: '8px',
              padding: '0.8rem 1.2rem',
              fontSize: '1.05rem',
              width: '100%',
              maxWidth: 320
            }}
          />
          <input
            name="email"
            type="email"
            placeholder="Tu correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              border: '1px solid #c8d6e7',
              borderRadius: '8px',
              padding: '0.8rem 1.2rem',
              fontSize: '1.05rem',
              width: '100%',
              maxWidth: 320
            }}
          />
          <textarea
            name="message"
            placeholder="Cuéntanos en qué podemos ayudarte"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            style={{
              border: '1px solid #c8d6e7',
              borderRadius: '8px',
              padding: '0.9rem 1.2rem',
              fontSize: '1.05rem',
              width: '100%',
              maxWidth: 320,
              resize: 'vertical'
            }}
          ></textarea>
          <button 
            type="submit"
            style={{
              background: 'linear-gradient(90deg,#1a4d7a,#2670c4)',
              color: 'white',
              fontWeight: 700,
              border: 'none',
              borderRadius: '24px',
              padding: '0.8rem 2.5rem',
              fontSize: '1.07rem',
              cursor: 'pointer'
            }}
          >
            Enviar Mensaje
          </button>
          {submitted && (
            <p style={{ color: '#28a745', fontWeight: 'bold', marginTop: '1rem', fontSize: '1.07rem' }}>
              ¡Gracias por contactarnos! Te responderemos pronto.
            </p>
          )}
        </form>
        <div style={{
          textAlign: 'left',
          background: '#d5b176ff',
          borderRadius: '11px',
          padding: '1.2rem 1rem 1.6rem 1rem',
          maxWidth: 480,
          margin: '0 auto'
        }}>
          <h3 style={{
            fontSize: '1.7rem',
            color: '#1a4d7a',
            fontWeight: 700,
            marginBottom: '0.6rem'
          }}>
            Contáctanos Directamente:
          </h3>
          <a 
            href="https://wa.me/573184799311" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(90deg,#25d366 80%,#1a4d7a 100%)',
              color: 'white',
              fontWeight: 700,
              padding: '0.82rem 2.2rem',
              borderRadius: '20px',
              textDecoration: 'none',
              fontSize: '1.12rem',
              display: 'inline-block',
              margin: '0.9rem 0 0.6rem 0'
            }}
          >
            💬 WhatsApp: 3184799311
          </a>
          <p style={{
            fontSize: '1.1rem',
            color: '#333',
            marginTop: '0.4rem',
            fontWeight: 'bold'
          }}>
            Correo Electrónico: <a href="mailto:asistenciajuridica16@gmail.com" style={{color:'#2670c4', textDecoration:'underline'}}>asistenciajuridica16@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
