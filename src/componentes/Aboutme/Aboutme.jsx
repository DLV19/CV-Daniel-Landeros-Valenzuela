export default function Aboutme() {
  return (
    <section
      id="Aboutme"
      className="min-h-screen px-6 py-20 text-white bg-[#0a192f] flex flex-col items-center text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-orange-400">
        Sobre mí
      </h2>
      <div className="w-16 h-1 bg-orange-400 rounded-full mb-8" />

      <p className="max-w-3xl text-gray-300 text-lg leading-relaxed">
        Soy un Ingeniero en Informática con más de 8 años de experiencia en soporte técnico e infraestructura TI.
        Actualmente estoy en transición hacia el desarrollo web,
        combinando mis habilidades técnicas con una gran pasión por resolver problemas y crear soluciones útiles.
      </p>

      <p className="max-w-3xl text-gray-400 text-md leading-relaxed mt-6">
        Me gusta trabajar en equipo, aprender cosas nuevas constantemente y aplicar buenas prácticas en todo lo que hago.
        Estoy enfocado en mejorar mis habilidades como desarrollador y disfruto explorar tecnologías modernas como React, Node.js y DevOps.
      </p>
    </section>
  );
}
