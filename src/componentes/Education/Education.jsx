export default function Education() {
  return (
    <section id="educacion" className="min-h-screen px-6 py-20 bg-transparent text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 animate-pulse">
          Educación
        </h2>
        <div className="w-16 h-1 bg-orange-400 rounded-full mx-auto mb-10" />

        {/* 🎓 Educación formal */}
        <div className="bg-[#112240]/70 backdrop-blur-md shadow-lg p-6 text-left border-l-4 border-orange-400 rounded-tl-lg rounded-br-lg mb-8">
          <h3 className="text-xl font-semibold text-orange-300 mb-4">Formación académica</h3>

          <div className="mb-6">
            <p className="text-lg font-semibold text-white">Licenciatura en Informática</p>
            <p className="text-sm text-gray-300">2010 - 2014</p>
            <p className="text-sm text-gray-400">Centro Universitario UTEG</p>
          </div>

          <div>
            <p className="text-lg font-semibold text-white">Licenciatura en Desarrollo Web</p>
            <p className="text-sm text-gray-300">2023 - en curso</p>
            <p className="text-sm text-gray-400">Universidad de Guadalajara</p>
          </div>
        </div>

        {/* 🏅 Cursos y certificaciones */}
        <div className="bg-[#112240]/70 backdrop-blur-md shadow-lg p-6 text-left border-l-4 border-orange-400 rounded-tl-lg rounded-br-lg">
          <h3 className="text-xl font-semibold text-orange-300 mb-4">Cursos y certificaciones</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Curso Python — Udemy, 2024</li>
            <li>Especialista Grandstream — Network Solutions, 2023</li>
            <li>Linux Bash Shell Scripting — Udemy, 2022</li>
            <li>Kubernetes para administradores IT — LinkedIn Learning, 2022</li>
            <li>DevOps con Docker — Udemy, 2022</li>
            <li>Google Cloud Infrastructure — LinkedIn Learning, 2022</li>
            <li>CCNA Fundamentos de Networking IP — Udemy, 2021</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
