import { useTranslation } from "react-i18next";
import { companyLogos } from "../../data/companyLogos";

export default function Experiencia() {
  const { t } = useTranslation();
  const trabajos = t("experience.items", { returnObjects: true }) || [];

  return (
    <section id="experiencia" className="bg-transparent text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-400 text-center mb-2 animate-pulse">
          {t("experience.title")}
        </h2>
        <div className="w-16 h-1 bg-orange-400 rounded-full mx-auto mb-10" />

        <div className="grid gap-8">
          {trabajos.map((job) => {
            const logoSrc = companyLogos[job.id]; // <-- usar el id del JSON
            return (
              <article
                key={`${job.company}-${job.period}`}
                className="bg-[#112240]/70 backdrop-blur-md p-6 rounded-tl-lg rounded-br-lg shadow-lg border-l-4 border-orange-400 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-orange-300">{job.role}</h3>
                    <p className="text-sm text-gray-400">
                      {job.company} • {job.period}
                    </p>
                    <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
                      {(job.points || []).map((punto, idx) => (
                        <li key={idx}>{punto}</li>
                      ))}
                    </ul>
                  </div>

                  {logoSrc && (
                    <div className="w-28 h-28 flex-shrink-0 bg-white rounded-md p-2 shadow-inner">
                      <img
                        src={logoSrc}
                        alt={t("experience.logoAlt", { company: job.company })}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
