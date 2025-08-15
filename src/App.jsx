import "./i18n";            // ⬅️ Cárgalo primero
import "./App.css";

import { Suspense } from "react";
import ParticlesBackground from "./componentes/ParticlesBackground/ParticlesBackground";
import Navbar from "./componentes/Navbar/Navbar";
import Presentacion from "./componentes/Presentacion/Presentacion";
import Aboutme from "./componentes/Aboutme/Aboutme";
import Experiencia from "./componentes/Experience/Experience";
import Skills from "./componentes/Skills/Skills";
import Education from "./componentes/Education/Education";
import Contact from "./componentes/Contact/Contact";
import Footer from "./componentes/Footer/Footer";

function App() {
  return (
    <Suspense fallback={null}>
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
    </Suspense>
  );
}

export default App;
