import React, { useState } from 'react';
import '../styles/Appoinment.css';

const Appoinment = () => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='form-container'>
        <div className="formulario-container" id='appointment'>
            <h2>Agendar Cita</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Teléfono:</label>
                    <input
                        type="tel"
                        id="telefono"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fecha">Fecha:</label>
                    <input
                        type="date"
                        id="fecha"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="hora">Hora:</label>
                    <input
                        type="time"
                        id="hora"
                        value={hora}
                        onChange={(e) => setHora(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Agendar</button>
            </form>
        </div>
        </div>
    );
};

export default Appoinment;
