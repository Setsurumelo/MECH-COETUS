import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Inicio from './components/inicio';
import SobreNosotros from './components/sobreNosotros';
import Trabajos from './components/trabajos';
import Turnos from './components/turnos';
import './App.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
        <li><Link to="/trabajos">Trabajos</Link></li>
        <li><Link to="/turnos">Turnos</Link></li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <p>MECH COETUS</p>
          <p>Taller mecánico | MECH COETUS</p>
        </div>
        <div>
          <p>Ⓒ2024 Copyright. All rights reserved - MechCoetus.com</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div>
        <h2 id="empresa">
          <Link to="/" style={{ textDecoration: 'none' }}>MECH COETUS</Link>
        </h2>

        <Routes>
          <Route path="/" element={<><Navigation /><Inicio /></>} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/trabajos" element={<Trabajos />} />
          <Route path="/turnos" element={<Turnos />} />
        </Routes>

        <Footer /> {/* Agregar el componente Footer aquí */}
      </div>
    </Router>
  );
}

export default App;
