import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setMenuAbierto((v) => !v);
  const cerrarMenu = () => setMenuAbierto(false);
  const setLang = (lng) => {
    i18n.changeLanguage(lng);
    cerrarMenu();
  };

  const items = [
    { to: "#inicio", label: t("nav.home") },
    { to: "#aboutme", label: t("nav.about") },
    { to: "#experiencia", label: t("nav.experience") },
    { to: "#educacion", label: t("nav.education") },
    { to: "#skills", label: t("nav.skills") },
    { to: "#contacto", label: t("nav.contact") },
  ];

  return (
    <header className="fixed w-full bg-[#0a192f]/80 backdrop-blur-md text-white shadow-md z-50">
      <nav className="flex justify-between items-center px-6 py-4">
        {/* 🍔 Hamburguesa (móvil) */}
        <button
          className="md:hidden text-orange-400"
          onClick={toggleMenu}
          aria-label="Menú"
        >
          {menuAbierto ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* 🌍 Switch de idioma (escritorio) */}
        <div className="hidden md:flex gap-2 ml-auto">
          <button
            onClick={() => setLang("es")}
            className={`px-2 py-1 rounded text-lg ${
              i18n.language.startsWith("es")
                ? "bg-orange-400 text-[#0a192f]"
                : "hover:text-orange-400"
            }`}
            aria-label="Cambiar a Español"
          >
            Español
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-2 py-1 rounded text-lg ${
              i18n.language.startsWith("en")
                ? "bg-orange-400 text-[#0a192f]"
                : "hover:text-orange-400"
            }`}
            aria-label="Switch to English"
          >
            English
          </button>
        </div>
      </nav>

      {/* 📱 Menú enlaces + switch (móvil) */}
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

        {/* 🌐 Switch idioma también en móvil */}
        <li className="flex gap-3 py-3 md:hidden">
          <button onClick={() => setLang("es")} aria-label="Español">🇲🇽</button>
          <button onClick={() => setLang("en")} aria-label="English">🇺🇸</button>
        </li>
      </ul>
    </header>
  );
}
