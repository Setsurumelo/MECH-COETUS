import React, { useEffect } from 'react';
import './sobreNosotros.css';
import lamboVideo from './video/lambo.mp4';
import CEOImage from './imagen/CEO.jpg';
import COOImage from './imagen/COO.jpg';
import DesarrolladorJunior from './imagen/DesarrolladorJunior.jpg';
import Fronter from './imagen/Fronter.jpg';

const SobreNosotros = () => {
    useEffect(() => {
        document.title = "Sobre Nosotros";
    }, []);

    const integrantes = [
        { nombre: "Tobias Nehuen Arfaras", ocupacion: "CEO", img: CEOImage },
        { nombre: "Santino Brussa De Marco", ocupacion: "COO", img: COOImage },
        { nombre: "Luca Mangiameli", ocupacion: "Desarrollador Junior", img: DesarrolladorJunior },
        { nombre: "Joaquin Aramayo", ocupacion: "Fronter", img: Fronter }
    ];

    return (
        <div id="sobre-nosotros">
            <video autoPlay loop muted playsInline className="video-background">
                <source src={lamboVideo} type="video/mp4" />
            </video>
            
            <div className="contenido">
                <h2>SOBRE NOSOTROS</h2>
                <div className="equipo-container">
                    <div className="equipo-row">
                        {integrantes.slice(0, 3).map((integrante, index) => (
                            <div key={index} className="equipo-card">
                                <img src={integrante.img} alt={integrante.nombre} />
                                <h3>{integrante.nombre}</h3>
                                <p>{integrante.ocupacion}</p>
                            </div>
                        ))}
                    </div>
                    <div className="equipo-row">
                        {integrantes.slice(3).map((integrante, index) => (
                            <div key={index + 3} className="equipo-card">
                                <img src={integrante.img} alt={integrante.nombre} />
                                <h3>{integrante.nombre}</h3>
                                <p>{integrante.ocupacion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SobreNosotros;
