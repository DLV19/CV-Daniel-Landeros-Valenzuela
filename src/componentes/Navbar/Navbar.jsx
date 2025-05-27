export default function Navbar() {
  return (
    <header className="fixed w-full bg-[#0a192f]/80 backdrop-blur-md text-white shadow-md z-50">
      <nav className="flex justify-between items-center px-6 py-4" aria-label="Navegación principal">
        <h1 className="text-xl md:text-2xl font-bold text-orange-400 tracking-wide">
          Curriculum web
        </h1>
        <ul className="hidden md:flex space-x-6 text-sm uppercase tracking-wide">
          {[
            { to: "#inicio", label: "Inicio" },
            { to: "#aboutme", label: "Sobre mí" },
            { to: "#experiencia", label: "Experiencia" },
            { to: "#educacion", label: "Educación y cursos" },
            { to: "#skills", label: "Habilidades" },
            { to: "#contacto", label: "Contacto" },
          ].map((item) => (
            <li key={item.to}>
              <a href={item.to} className="cursor-pointer hover:text-orange-400">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
