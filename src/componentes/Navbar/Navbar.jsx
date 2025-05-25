export default function Navbar() {
  return (
    <header className="fixed w-full bg-[#0a192f]/80 backdrop-blur-md text-white shadow-md z-50">
      <nav className="flex justify-between items-center px-6 py-4">
        <h1 className="text-xl md:text-2xl font-bold text-orange-400 tracking-wide">
          Curriculum web
        </h1>
        <ul className="hidden md:flex space-x-6 text-sm uppercase tracking-wide">
          <li>
            <a href="#inicio" className="cursor-pointer hover:text-orange-400">
              Inicio
            </a>
          </li>
          <li>
            <a href="#aboutme" className="cursor-pointer hover:text-orange-400">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#experiencia" className="cursor-pointer hover:text-orange-400">
              Experiencia
            </a>
          </li>
          <li>
            <a href="#educacion" className="cursor-pointer hover:text-orange-400">
              Educación y cursos
            </a>
          </li>
          <li>
            <a href="#skills" className="cursor-pointer hover:text-orange-400">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#contacto" className="cursor-pointer hover:text-orange-400">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
