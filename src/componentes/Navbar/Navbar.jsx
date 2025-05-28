import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  const cerrarMenu = () => setMenuAbierto(false);

  const items = [
    { to: "#inicio", label: "Inicio" },
    { to: "#aboutme", label: "Sobre mí" },
    { to: "#experiencia", label: "Experiencia" },
    { to: "#educacion", label: "Educación y cursos" },
    { to: "#skills", label: "Habilidades" },
    { to: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="fixed w-full bg-[#0a192f]/80 backdrop-blur-md text-white shadow-md z-50">
      <nav className="flex justify-between items-center px-6 py-4">
        
        {/* Botón hamburguesa - solo visible en móvil */}
        <button
          className="md:hidden text-orange-400"
          onClick={toggleMenu}
          aria-label="Menú"
        >
          {menuAbierto ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú */}
        <ul
  className={`${
    menuAbierto ? "flex flex-col items-start pl-6" : "hidden"
  } absolute top-16 left-0 w-full bg-[#0a192f] md:static md:flex md:space-x-6 md:justify-end md:bg-transparent text-sm uppercase tracking-wide text-left`}
>
  {items.map((item) => (
    <li key={item.to}>
      <a
        href={item.to}
        className="block py-3 md:py-0 hover:text-orange-400"
        onClick={cerrarMenu}
      >
        {item.label}
      </a>
    </li>
  ))}
</ul>

      </nav>
    </header>
  );
}
