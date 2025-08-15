import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  const soft  = t("skills.soft",  { returnObjects: true }) || [];
  const tech  = t("skills.tech",  { returnObjects: true }) || [];
  const langs = t("skills.langs", { returnObjects: true }) || [];

  return (
    <section id="skills" className="min-h-screen px-6 py-20 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-8 animate-pulse">
          {t("skills.title")}
        </h2>
        <div className="w-16 h-1 bg-orange-400 rounded-full mb-8 mx-auto" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

          {/* 🧠 Soft skills */}
          <div className="bg-[#112240]/70 backdrop-blur-md shadow-lg p-6 border-l-4 border-orange-400 rounded-tl-lg rounded-br-lg">
            <h3 className="text-2xl font-semibold text-orange-300 mb-4">{t("skills.softTitle")}</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {soft.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          {/* ⚙️ Tech */}
          <div className="bg-[#112240]/70 backdrop-blur-md shadow-lg p-6 border-l-4 border-orange-400 rounded-tl-lg rounded-br-lg">
            <h3 className="text-2xl font-semibold text-orange-300 mb-4">{t("skills.techTitle")}</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {tech.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          {/* 🌐 Languages */}
          <div className="bg-[#112240]/70 backdrop-blur-md shadow-lg p-6 border-l-4 border-orange-400 rounded-tl-lg rounded-br-lg">
            <h3 className="text-2xl font-semibold text-orange-300 mb-4">{t("skills.langsTitle")}</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {langs.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
