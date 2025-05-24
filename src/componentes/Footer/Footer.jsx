export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#0a192f] text-gray-400 text-center py-8">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Danny CV. Todos los derechos reservados.
        </p>
        <div className="mt-3 flex justify-center gap-6">
          <a
            href="https://github.com/DLV19"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/tu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:tuemail@dominio.com"
            className="hover:text-orange-400 transition-colors"
          >
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
