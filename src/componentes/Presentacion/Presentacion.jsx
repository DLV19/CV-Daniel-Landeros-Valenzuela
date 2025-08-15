import { useTranslation } from "react-i18next";

export default function Presentacion() {
  const { t } = useTranslation();

  return (
    <section
      id="inicio"
      className="h-screen flex flex-col justify-center items-center text-center text-white px-4"
    >
      <p className="text-orange-400 text-xl md:text-2xl animate-pulse uppercase tracking-widest">
        {t("hero.hi")}
      </p>

      <h1 className="text-4xl md:text-6xl font-extrabold mt-2 leading-tight">
        {t("hero.name")}
      </h1>

      <h2 className="text-md md:text-xl font-medium text-gray-300 mt-3 tracking-wide">
        {t("hero.role")}
      </h2>

      <p className="text-gray-400 max-w-xl mt-4 italic">
        {t("hero.tagline")}
      </p>
    </section>
  );
}
