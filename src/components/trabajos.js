// src/components/Trabajos.js
import React, { useEffect } from 'react';
import trabajos from './data.js'; // Asegúrate de que la ruta sea correcta
import './trabajos.css';

const Trabajos = () => {
    useEffect(() => {
        document.title = "Trabajos"; // Cambia el título de la página
    }, []);

    return (
        <div id="trabajos">
            <h2>Trabajos Disponibles</h2>
            <table className="trabajos-table">
                <thead>
                    <tr>
                        <th>NUM</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {trabajos.map((trabajo) => (
                        <tr key={trabajo.id}>
                            <td>{trabajo.id}</td>
                            <td>{trabajo.nombre}</td>
                            <td>{trabajo.descripcion}</td>
                            <td>${trabajo.precio.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Trabajos;
