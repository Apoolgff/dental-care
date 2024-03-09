import React from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Dentista Profesional</div>
      <ul className="navbar-menu">
        <li><a href="#services">Servicios</a></li>
        <li><a href="#testimonials">Testimonios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;