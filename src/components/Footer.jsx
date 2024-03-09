import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Dentista Profesional</p>
        <div className="footer-links">
          <a href="#services">Servicios</a>
          <a href="#testimonials">Testimonios</a>
          <a href="#contact">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
