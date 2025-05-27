import { FaTools } from "react-icons/fa";

export default function Aboutme() {
  return (
    <section id="aboutme" className="min-h-screen px-6 py-20 text-white bg-transparent flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 animate-pulse text-center">Sobre mí</h2>
      <div className="w-16 h-1 bg-orange-400 rounded-full mb-8" />

      <div className="bg-[#112240]/70 backdrop-blur-md shadow-lg border-l-4 border-orange-400 p-8 rounded-tl-lg rounded-br-lg max-w-4xl text-left space-y-6">
        <div className="flex justify-center">
          <img
            src="/image/foto-dany.jpg"
            alt="Foto de Dany"
            className="w-40 h-40 rounded-full border-4 border-orange-400 object-cover"
          />
        </div>

        <p className="text-gray-300 text-lg leading-relaxed">
          Ingeniero en Informática con más de 8 años de experiencia en el área de IT,
           especializado en soporte técnico de nivel 2 y administración de infraestructura.
            Actualmente cursando la Licenciatura en Desarrollo Web,
             con un fuerte interés en ampliar mi experiencia en desarrollo de software y prácticas DevOps.
              Me destaco por mi enfoque en la resolución de problemas y mi capacidad para adaptarme rápidamente a nuevos entornos tecnológicos.
        </p>

        <blockquote className="italic text-orange-300 border-l-4 border-orange-400 pl-4">
          “Me encanta aprender, construir y mejorar procesos con tecnología.”
        </blockquote>

        <p className="text-gray-400 text-base leading-relaxed">
          Valoro el trabajo en equipo, el aprendizaje constante y el uso de buenas prácticas...
        </p>

        <div>
          <h3 className="text-lg font-semibold text-orange-300 mb-2 flex items-center gap-2">
            <FaTools /> Tech stack actual
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
            <li>Frontend: React, TailwindCSS, HTML, CSS, JavaScript</li>
            <li>Backend: PHP, Python, MySQL</li>
            <li>Infraestructura: Docker, Render, Railway, Linux</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
