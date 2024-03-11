import React from 'react';
import '../styles/Contact.css';


const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contáctanos</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" rows="4"></textarea>
        </div>
        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
