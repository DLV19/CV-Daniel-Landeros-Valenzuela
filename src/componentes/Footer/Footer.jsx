import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#0a192f] text-gray-400 text-center py-8">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Danny CV. Todos los derechos reservados.
        </p>
        <div className="mt-3 flex justify-center gap-6 text-lg">
          <a
            href="https://github.com/DLV19"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors flex items-center gap-2"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-landeros-valenzuela"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors flex items-center gap-2"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="mailto:daniel.landeros.valenzuela@gmail.com"
            className="hover:text-orange-400 transition-colors flex items-center gap-2"
          >
            <FaEnvelope /> Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
