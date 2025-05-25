import { useState } from 'react';
import './App.css';

// 🧩 Componentes personalizados
import ParticlesBackground from './componentes/ParticlesBackground/ParticlesBackground';
import Navbar from './componentes/Navbar/Navbar';
import Presentacion from './componentes/Presentacion/Presentacion';
import Aboutme from './componentes/Aboutme/Aboutme';
import Footer from './componentes/Footer/Footer';
import Skills from './componentes/Skills/Skills';
import Experiencia from './componentes/Experience/Experience';
import Contact from './componentes/Contact/Contact';
import Education from './componentes/Education/Education';

function App() {
  const [count, setCount] = useState(0); // 👉 puedes quitar esto si no lo estás usando

  return (
    <>
      {/* ✨ Fondo animado con partículas */}
      <ParticlesBackground />

      {/* 🚀 Barra de navegación */}
      <Navbar />

      {/* 🧱 Contenido principal con z-index para que esté sobre las partículas */}
      <div className="z-10 relative pt-20">
        <Presentacion />     {/* 🧑‍💻 Sección de presentación */}
        <Aboutme />          {/* 📖 Sección 'Sobre mí' */}
        <Experiencia />          {/* 📖 Sección 'Experiencia' */}
        <Skills />          {/* 📖 Sección 'habilidades' */}
        <Education />          {/* 📖 Sección 'Educacion' */}
        <Contact />          {/* 📖 Sección 'contacto' */}
      </div>

      {/* 🔚 Pie de página */}
      <Footer />
    </>
  );
}

export default App;
