// src/components/Turnos.js
import React, { useState } from 'react';
import trabajos from './data'; // Importa la lista de trabajos desde el archivo data.js
import './turnos.css'; // Asegúrate de tener estilos para la sección

const Turnos = () => {
    const [cliente, setCliente] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        auto: '',
        patente: '',
        trabajos: [],
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCliente({ ...cliente, [name]: value });
    };

    const handleCheckboxChange = (event) => {
        const { value } = event.target;
        const trabajosSeleccionados = cliente.trabajos.includes(value)
            ? cliente.trabajos.filter((trabajo) => trabajo !== value) // Desmarcar
            : [...cliente.trabajos, value]; // Marcar

        // Limitar a un máximo de 5 trabajos
        if (trabajosSeleccionados.length <= 5) {
            setCliente({ ...cliente, trabajos: trabajosSeleccionados });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes manejar la lógica para enviar los datos
        console.log('Datos del cliente:', cliente);

        // Guardar en localStorage
        const turnosGuardados = JSON.parse(localStorage.getItem('turnos')) || [];
        turnosGuardados.push(cliente);
        localStorage.setItem('turnos', JSON.stringify(turnosGuardados));

        // Resetear el formulario
        setCliente({
            nombre: '',
            apellido: '',
            dni: '',
            auto: '',
            patente: '',
            trabajos: [],
        });
    };

    return (
        <div id="turnos">
            <h2>Reservar Turno</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={cliente.nombre}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    value={cliente.apellido}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="dni"
                    placeholder="DNI"
                    value={cliente.dni}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="auto"
                    placeholder="Auto"
                    value={cliente.auto}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="patente"
                    placeholder="Patente"
                    value={cliente.patente}
                    onChange={handleInputChange}
                    required
                />
                <div>
                    <h3>Selecciona los trabajos</h3>
                    {trabajos.map((trabajo) => (
                        <div key={trabajo.id}>
                            <input
                                type="checkbox"
                                value={trabajo.nombre}
                                checked={cliente.trabajos.includes(trabajo.nombre)}
                                onChange={handleCheckboxChange}
                            />
                            <label>{trabajo.nombre}</label>
                        </div>
                    ))}
                </div>
                <button type="submit">Reservar Turno</button>
            </form>
        </div>
    );
};

export default Turnos;
