import React from 'react';
import '../styles/Hero.css';
import heroImage from '/images/hero.jpg'

const Hero = () => {
    return (
        <div className='hero-container' style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="hero">
                <h1 className="hero-title">Bienvenido/a al Dentista Profesional</h1>
                <p className="hero-subtitle">Cuida de tu sonrisa con nosotros</p>
                <a href="#appointment"><button className="hero-cta">Agendar Cita</button></a>
            </div>
        </div>
    );
};

export default Hero;

