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
  return (
    <>
      {/* ✨ Fondo animado con partículas */}
      <ParticlesBackground />

      {/* 🚀 Barra de navegación */}
      <Navbar />

      {/* 🧱 Contenido principal sobre el fondo */}
      <main className="relative z-10 pt-20">
        <Presentacion />
        <Aboutme />
        <Experiencia />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* 🔚 Pie de página */}
      <Footer />
    </>
  );
}

export default App;
