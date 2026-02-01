import React, { useState } from 'react';
import contactoImg from '../assets/imagen6.jpg';

const GOLD = '#8F7324';
const GOLD_SOFT = '#70571A';
const DARK_BG = '#0B0C10';
const CARD_BG = '#13141A';
const TIMES = '"Times New Roman", Times, serif';

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
    <section
      style={{
        background: DARK_BG,
        padding: '3rem 1rem',
        fontFamily: TIMES,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        className="contenido-info"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: 1100,
          width: '100%',
          background: CARD_BG,
          borderRadius: 18,
          border: `1px solid ${GOLD_SOFT}`,
          boxShadow: '0 10px 40px #00000077',
          overflow: 'hidden',
        }}
      >
        <div
          className="columna-imagen"
          style={{
            flex: '1 1 320px',
            minWidth: 280,
          }}
        >
          <img
            src={contactoImg}
            alt="Contacto &quot;nancy-aseneth-abogada&quot;"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>

        <div
          className="columna-texto"
          style={{
            flex: '1 1 360px',
            padding: '2rem 2.3rem',
            color: '#F5F5F5',
            fontFamily: TIMES,
          }}
        >
          <h2
            style={{
              color: GOLD,
              fontSize: '2.2rem',
              fontWeight: 'bold',
              marginBottom: '1.2rem',
              textAlign: 'center',
            }}
          >
            Contacto
          </h2>

          <form
            onSubmit={handleSubmit}
            style={{
              background: '#111319',
              borderRadius: 14,
              border: `1px solid ${GOLD_SOFT}`,
              boxShadow: '0 4px 18px #00000066',
              padding: '1.4rem 1.2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.7rem',
              width: '100%',
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
                border: `1px solid ${GOLD_SOFT}`,
                background: '#060709',
                color: '#F5F5F5',
                borderRadius: 9,
                padding: '0.8rem 1.2rem',
                fontSize: '1.05rem',
                width: '100%',
                maxWidth: 360,
                outline: 'none',
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
                border: `1px solid ${GOLD_SOFT}`,
                background: '#060709',
                color: '#F5F5F5',
                borderRadius: 9,
                padding: '0.8rem 1.2rem',
                fontSize: '1.05rem',
                width: '100%',
                maxWidth: 360,
                outline: 'none',
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
                border: `1px solid ${GOLD_SOFT}`,
                background: '#060709',
                color: '#F5F5F5',
                borderRadius: 9,
                padding: '0.9rem 1.2rem',
                fontSize: '1.05rem',
                width: '100%',
                maxWidth: 360,
                resize: 'vertical',
                outline: 'none',
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                background: GOLD,
                color: DARK_BG,
                fontWeight: 700,
                border: 'none',
                borderRadius: 24,
                padding: '0.85rem 2.6rem',
                fontSize: '1.07rem',
                cursor: 'pointer',
                boxShadow: '0 4px 14px #000000aa',
              }}
            >
              Enviar Mensaje
            </button>
            {submitted && (
              <p
                style={{
                  color: '#3DD67B',
                  fontWeight: 'bold',
                  marginTop: '1rem',
                  fontSize: '1.07rem',
                  textAlign: 'center',
                }}
              >
                ¡Gracias por contactarnos! Te responderemos pronto.
              </p>
            )}
          </form>

          <div
            style={{
              textAlign: 'center',
              background: '#181922',
              borderRadius: 11,
              padding: '1.3rem 1rem 1.6rem 1rem',
              maxWidth: 520,
              margin: '0 auto',
              border: `1px solid ${GOLD_SOFT}`,
            }}
          >
            <h3
              style={{
                fontSize: '1.6rem',
                color: GOLD,
                fontWeight: 700,
                marginBottom: '0.6rem',
              }}
            >
              Contáctanos directamente
            </h3>

            <a
              href="https://wa.me/573184799311"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(90deg,#25d366 80%,#8F7324 100%)',
                color: 'white',
                fontWeight: 700,
                padding: '0.82rem 2.2rem',
                borderRadius: 20,
                textDecoration: 'none',
                fontSize: '1.12rem',
                display: 'inline-block',
                margin: '0.9rem 0 0.6rem 0',
              }}
            >
              💬 WhatsApp: 318 479 9311
            </a>

            <p
              style={{
                fontSize: '1.1rem',
                color: '#E5E7EB',
                marginTop: '0.4rem',
                fontWeight: 'bold',
              }}
            >
              Correo electrónico:{' '}
              <a
                href="mailto:asistenciajuridica16@gmail.com"
                style={{ color: GOLD, textDecoration: 'underline' }}
              >
                asistenciajuridica16@gmail.com
              </a>
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                color: '#E5E7EB',
                marginTop: '0.6rem',
                lineHeight: 1.5,
              }}
            >
              Dirección de la oficina: <br />
              <b>
                Carrera 4 No. 11 - 45 oficina 512, Edificio Banco de Bogotá,
                Cali - Colombia
              </b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
