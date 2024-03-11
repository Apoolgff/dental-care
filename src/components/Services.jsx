import React from 'react';
import '../styles/Services.css';
import protesis from '/images/protesis.svg'
import caries from '/images/caries.svg'
import whitening from '/images/whitening.svg'

const Services = () => {
    return (
        <section id="services" className="services">
            <h2 className="section-title">Nuestros Servicios</h2>
            <div className="services-container">
                <div className="service-card">
                    <h3>Blanqueamiento</h3>
                    <img src={caries} alt="whitening Icon" className="icon-svg" />
                    <p>El blanqueamiento dental profesional es un procedimiento
                        que ayuda a eliminar las manchas y
                        aclarar el color de los dientes,
                        dejando una sonrisa más brillante y atractiva.
                    </p>
                    <p><span>1000$</span></p>
                </div>
                <div className="service-card">
                    <h3>Implantes Dentales</h3>
                    <img src={protesis} alt="protesis Icon" className="icon-svg" />
                    <p>Los implantes dentales son una solución
                        permanente para reemplazar dientes perdidos.
                        Vuelva a tener una sonrisa reluciente.
                    </p>
                    <p><span>5000$</span></p>
                </div>
                <div className="service-card">
                    <h3>Tratamiento de Caries</h3>
                    <img src={whitening} alt="caries Icon" className="icon-svg" />
                    <p>El tratamiento de caries dental implica
                        la eliminación del tejido dental afectado
                        por la caries y la restauración del diente dañado.</p>
                    <p><span>2500$</span></p>
                </div>
            </div>
        </section>
    );
};

export default Services;
