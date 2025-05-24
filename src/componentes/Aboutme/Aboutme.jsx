export default function Aboutme() {
  return (
    <section
      id="aboutme"
      className="min-h-screen px-6 py-20 text-white bg-transparent flex flex-col items-center text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-orange-400 animate-pulse">
        Sobre mí
      </h2>
      <div className="w-16 h-1 bg-orange-400 rounded-full mb-8" />

      {/* Imagen de perfil */}
      <img
        src="image/foto-dany.jpg"
        alt="Foto de Danny"
        className="w-48 h-48 rounded-full mb-6 border-4 border-orange-400 object-cover "
      />

      <p className="max-w-3xl text-gray-300 text-lg leading-relaxed">
        Me desempeño como Ingeniero en Informática cuento con más de 8 años de experiencia en soporte técnico e infraestructura TI.
        Actualmente estoy en transición hacia el desarrollo web,
        combinando mis habilidades técnicas con una gran pasión por resolver problemas y crear soluciones útiles.
      </p>

      <p className="max-w-3xl text-gray-400 text-md leading-relaxed mt-6">
        Valoro profundamente el trabajo en equipo, el aprendizaje constante y la aplicación de buenas prácticas.
        Mi enfoque está en el desarrollo de mis habilidades como desarrollador,
        disfruto la exploración de tecnologías modernas y en el desarrollo de una sólida comprensión de la cultura DevOps.
      </p>
    </section>
  );
}
