export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-6 py-20 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-8  animate-pulse">Habilidades</h2>
        <div className="w-16 h-1 bg-orange-400 rounded-full mb-8 mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          
          {/* 🧠 Habilidades Blandas */}
          <div>
            <h3 className="text-2xl font-semibold text-orange-300 mb-4">Habilidades blandas</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Trabajo en equipo</li>
              <li>Pensamiento analítico</li>
              <li>Resolución de problemas</li>
              <li>Adaptabilidad</li>
              <li>Comunicación efectiva</li>
            </ul>
          </div>

          {/* ⚙️ Habilidades Técnicas */}
          <div>
            <h3 className="text-2xl font-semibold text-orange-300 mb-4">Tecnologías y herramientas</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>React, HTML, CSS, JavaScript, PHP, Python</li>
              <li>Bases de datos SQL</li>
              <li>Docker, Kubernetes, Linux Shell Scripting</li>
              <li>Google Cloud, VMware, Active Directory</li>
              <li>Contpaq, Sonicwall, Cisco, Grandstream</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
