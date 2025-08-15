import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative z-20 bg-[#0a192f]/80 backdrop-blur-md text-gray-400 text-center py-8 border-t border-orange-400">
      <div className="container mx-auto px-4">
        {/* 📝 Derechos de autor */}
        <p className="text-sm">
          © {new Date().getFullYear()} {t("footer.powered")}
        </p>

        {/* 🚀 Logo de React + Vite (asegúrate que vite.svg esté en /public) */}
        <img
          src="/vite.svg"
          alt={t("footer.altLogo")}
          className="mx-auto mt-2 w-5 h-auto"
        />

        {/* 🌐 Enlaces sociales */}
        <div className="mt-3 flex justify-center gap-6 text-lg">
          <a
            href="https://github.com/DLV19"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors flex items-center gap-2"
            aria-label={t("footer.github")}
          >
            <FaGithub />
            {t("footer.github")}
          </a>

          <a
            href="https://www.linkedin.com/in/daniel-landeros-valenzuela"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors flex items-center gap-2"
            aria-label={t("footer.linkedin")}
          >
            <FaLinkedin />
            {t("footer.linkedin")}
          </a>

          <a
            href="mailto:daniel.landeros.valenzuela@gmail.com"
            className="hover:text-orange-400 transition-colors flex items-center gap-2"
            aria-label={t("footer.contact")}
          >
            <FaEnvelope />
            {t("footer.contact")}
          </a>
        </div>
      </div>
    </footer>
  );
}
