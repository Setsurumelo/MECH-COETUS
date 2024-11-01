import React, { useEffect } from 'react';
import Slider from 'react-slick';
import './inicio.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Autos1 from './imagen/Autos1.jpg';
import Autos2 from './imagen/Autos2.jpg';
import Autos3 from './imagen/Autos3.jpg';

const Inicio = () => {
    useEffect(() => {
        document.title = "Inicio";
    }, []);

    const settings = {
        dots: false, // Desactiva los puntos de navegación
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div id="inicio">
            <div className="carousel-container"> {/* Contenedor del carrusel */}
                <Slider {...settings} className="carousel">
                    <div>
                        <img src={Autos1} alt="Autos1" />
                    </div>
                    <div>
                        <img src={Autos2} alt="Autos2" />
                    </div>
                    <div>
                        <img src={Autos3} alt="Autos3" />
                    </div>
                </Slider>
            </div>

            <div className="description-section">
                <h3>Sobre el Taller</h3>
                <p>En Mech Coetus, ofrecemos servicios de reparación y mantenimiento para todo tipo de vehículos. Nuestro equipo de expertos está comprometido en brindar un servicio de calidad y garantizar la satisfacción del cliente.</p>
            </div>
        </div>
    );
};

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow next" onClick={onClick}>
            &gt; {/* Icono de flecha derecha */}
        </div>
    );
};

const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow prev" onClick={onClick}>
            &lt; {/* Icono de flecha izquierda */}
        </div>
    );
};

export default Inicio;
