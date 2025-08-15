import { FaTools } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Aboutme() {
  const { t } = useTranslation();
  const bio = t("about.bio", { returnObjects: true });     // array de párrafos
  const stack = t("about.stack", { returnObjects: true }); // array de bullets

  return (
    <section id="aboutme" className="min-h-screen px-6 py-20 text-white bg-transparent flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 animate-pulse text-center">
        {t("about.title")}
      </h2>
      <div className="w-16 h-1 bg-orange-400 rounded-full mb-8" />

      <div className="bg-[#112240]/70 backdrop-blur-md shadow-lg border-l-4 border-orange-400 p-8 rounded-tl-lg rounded-br-lg max-w-4xl text-left space-y-6">
        <div className="flex justify-center">
          <img
            src="/image/foto-dany.jpg"
            alt={t("about.photoAlt")}
            className="w-40 h-40 rounded-full border-4 border-orange-400 object-cover"
          />
        </div>

        {bio.map((p, i) => (
          <p key={i} className="text-gray-300 text-lg leading-relaxed">
            {p}
          </p>
        ))}

        <blockquote className="italic text-orange-300 border-l-4 border-orange-400 pl-4">
          {t("about.quote")}
        </blockquote>

        <div>
          <h3 className="text-lg font-semibold text-orange-300 mb-2 flex items-center gap-2">
            <FaTools /> {t("about.stackTitle")}
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
            {stack.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
