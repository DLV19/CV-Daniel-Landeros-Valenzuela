import { useTranslation } from "react-i18next";

export default function Education() {
  const { t } = useTranslation();
  const formal = t("education.formal", { returnObjects: true });   // [{degree, years, school}]
  const courses = t("education.courses", { returnObjects: true }); // ["curso 1", "curso 2", ...]

  return (
    <section id="educacion" className="min-h-screen px-6 py-20 bg-transparent text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 animate-pulse">
          {t("education.title")}
        </h2>
        <div className="w-16 h-1 bg-orange-400 rounded-full mx-auto mb-10" />

        {/* 🎓 Educación formal */}
        <div className="bg-[#112240]/70 backdrop-blur-md shadow-lg p-6 text-left border-l-4 border-orange-400 rounded-tl-lg rounded-br-lg mb-8">
          <h3 className="text-xl font-semibold text-orange-300 mb-4">
            {t("education.formalTitle")}
          </h3>

          {formal.map((item, idx) => (
            <div key={idx} className={idx === 0 ? "mb-6" : ""}>
              <p className="text-lg font-semibold text-white">{item.degree}</p>
              <p className="text-sm text-gray-300">{item.years}</p>
              <p className="text-sm text-gray-400">{item.school}</p>
            </div>
          ))}
        </div>

        {/* 🏅 Cursos y certificaciones */}
        <div className="bg-[#112240]/70 backdrop-blur-md shadow-lg p-6 text-left border-l-4 border-orange-400 rounded-tl-lg rounded-br-lg">
          <h3 className="text-xl font-semibold text-orange-300 mb-4">
            {t("education.coursesTitle")}
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {courses.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
