import { useState } from 'react';
import './App.css';
import ParticlesBackground from './componentes/ParticlesBackground/ParticlesBackground';
import Navbar from './componentes/Navbar/Navbar';
import Presentacion from './componentes/Presentacion/Presentacion';
import Aboutme from './componentes/Aboutme/Aboutme';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ParticlesBackground />
      <Navbar />

      <div className="z-10 relative pt-20">
        <Presentacion />
        <Aboutme /> {/* 👈 Aquí va tu sección 'Sobre mí' */}
      </div>
    </>
  );
}

export default App;
