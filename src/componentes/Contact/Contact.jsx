import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contacto" className="min-h-screen px-6 py-20 bg-transparent text-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 animate-pulse">Contacto</h2>
        <div className="w-16 h-1 bg-orange-400 rounded-full mx-auto mb-10" />

        <div className="bg-[#112240]/70 backdrop-blur-md shadow-lg p-8 space-y-6 text-left border-l-4 border-orange-400 rounded-tl-lg rounded-br-lg transition-transform hover:scale-[1.02] duration-300">
          <div className="flex items-center gap-4">
            <FaPhone className="text-orange-400 text-2xl" />
            <a href="tel:3321470223" className="hover:text-orange-300 transition">33-21-47-02-23</a>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-orange-400 text-2xl" />
            <a href="mailto:daniel.landeros.valenzuela@gmail.com" className="hover:text-orange-300 transition">
              daniel.landeros.valenzuela@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-orange-400 text-2xl" />
            <a
              href="https://www.linkedin.com/in/daniel-landeros-valenzuela"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-300 transition"
            >
              linkedin.com/in/daniel-landeros-valenzuela
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaGithub className="text-orange-400 text-2xl" />
            <a
              href="https://github.com/DLV19"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-300 transition"
            >
              github.com/DLV19
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
