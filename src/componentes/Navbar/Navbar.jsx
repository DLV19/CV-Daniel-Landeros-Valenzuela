import { Link } from "react-scroll";

export default function Navbar(){
    return (
        <header className="fixed w-full bg-[#0a192f] text-white shadow-md z-50">
      <nav className="flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-orange-400"></h1>
        <ul className="flex space-x-6 text-sm uppercase">
          <li><Link to="inicio" smooth duration={500} className="cursor-pointer hover:text-orange-400">Inicio</Link></li>
          <li><Link to="Aboutme" smooth={true} duration={500} spy={true} offset={-80} className="cursor-pointer hover:text-orange-400">Sobre mí</Link></li>
          <li><Link to="experiencia" smooth duration={500} className="cursor-pointer hover:text-orange-400">Experiencia</Link></li>
          <li><Link to="educacion" smooth duration={500} className="cursor-pointer hover:text-orange-400">Educación</Link></li>
          <li><Link to="skills" smooth duration={500} className="cursor-pointer hover:text-orange-400">Skills</Link></li>
          <li><Link to="contacto" smooth duration={500} className="cursor-pointer hover:text-orange-400">Contacto</Link></li>
        </ul>
      </nav>
    </header>

    );
    

}