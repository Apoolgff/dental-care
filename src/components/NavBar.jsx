import React from 'react';
import '../styles/NavBar.css';
import dentist from '/images/dentist.svg'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand"><img src={dentist} alt="caries Icon" className="icon-svg" />Dentista Profesional</div>
      
      <ul className="navbar-menu">
        <li><a href="#services">Servicios</a></li>
        <li><a href="#testimonials">Testimonios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;