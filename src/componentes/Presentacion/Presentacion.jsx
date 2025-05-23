// src/componentes/Presentacion/Presentacion.jsx
export default function Presentacion() {
  return (
    <section id="inicio" className="h-screen flex flex-col justify-center items-center text-center text-white px-4">
      <p className="text-orange-400 text-xl md:text-1xl animate-pulse uppercase tracking-wide">Hola, soy</p>
      <h1 className="text-4xl md:text-6xl font-bold mt-2">Daniel Landeros</h1>
      <h2 className="text-lg md:text-2xl font-light text-gray-300 mt-2">
        Ingeniero en Soporte Tecnico Nivel II & Desarrollador en formación
      </h2>
      <p className="text-gray-400 max-w-xl mt-4">
        Me apasiona resolver problemas. Actualmente enfocado en desarrollo web moderno y cultura DevOps.
      </p>
    </section>
  );
}
