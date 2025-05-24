export default function Experiencia() {
  const trabajos = [
    {
      empresa: "Perfect Choice",
      periodo: "Mayo 2023 - Actual",
      puesto: "Ingeniero de Infraestructura y Soporte IT",
      descripcion: [
        "Administración de redes y VLANs",
        "Configuración de firewall Sonicwall",
        "Infraestructura Cisco y Grandstream",
        "Virtualización y respaldos",
        "Soporte a usuarios y gestión con ClickUp",
        "Administración y configuración de servidores",
        "Respaldos paquetería Contpaq Contabilidad Nóminas",
        "Administración de ActiveDirectory (creación de cuentasde usuarios y gestión de permisos)",
        "Administración de cuentas en workspace",
        "Soporte a usuarios."
      ],
      logo: "/image/logo-perfect.png",
    },
    {
      empresa: "Betterware de México",
      periodo: "Mayo 2021 - Diciembre 2022",
      puesto: "Ingeniero de Soporte Técnico",
      descripcion: [
        "Resolución de incidencias nivel 2",
        "Manejo de VMware y respaldo de datos",
        "Configuración de VPN y gestión de garantías",
        "Administración de ActiveDirectory",
        "Administración servicios de Google workspace y Microsoft office 365",
        "Resolución de incidencias mediante sistema de tickers jira software",
        "Asignación y Configuración de equipos de cómputo",
        "Gestión de garantías y proveedores"
      ],
      logo: "/image/logo-better-2.png",
    },
    {
      empresa: "Idear Electrónica",
      periodo: "Mayo 2019 - Diciembre 2021",
      puesto: "Auxiliar de Soporte Técnico",
      descripcion: [
        "Cableado estructurado",
        "Mantenimiento correctivo y preventivo",
        "Atención en planta y documentación ISO",
        "Configuración de equipo de cómputo"
      ],
      logo: "/image/sistema-bea.png",
    },
    {
      empresa: "BIOS Instala 2.0",
      periodo: "Agosto 2018 - Mayo 2019",
      puesto: "Técnico en Informática",
      descripcion: [
        "Diagnóstico de equipo de cómputo",
        "Mantenimiento correctivo y preventivo",
        "Apoyo a personal administrativo"
      ],
      logo: "/image/Bios-Instala.png",
    }
  ];

  return (
    <section id="experiencia" className="bg-transparent text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-400 text-center mb-2 animate-pulse">
          Experiencia Laboral
        </h2>
        <div className="w-16 h-1 bg-orange-400 rounded-full mx-auto mb-10" />

        <div className="grid gap-8">
          {trabajos.map((trabajo, index) => (
            <div
              key={index}
              className="bg-[#112240]/70 backdrop-blur-md p-6 rounded-tl-lg rounded-br-lg shadow-lg border-l-4 border-orange-400 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-orange-300">{trabajo.puesto}</h3>
                  <p className="text-sm text-gray-400">{trabajo.empresa} • {trabajo.periodo}</p>
                  <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
                    {trabajo.descripcion.map((punto, idx) => (
                      <li key={idx}>{punto}</li>
                    ))}
                  </ul>
                </div>

                {/* 📸 Imagen del logo */}
                <div className="w-28 h-28 flex-shrink-0 bg-white rounded-md p-2 shadow-inner">
                  <img
                    src={trabajo.logo}
                    alt={`Logo de ${trabajo.empresa}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
