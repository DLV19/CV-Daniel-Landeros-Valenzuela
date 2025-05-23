import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  const iniciarParticulas = useCallback(async (engine) => {
    console.log("🌀 Cargando partículas");
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={iniciarParticulas}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: "#0a192f",
        },
        particles: {
          number: {
            value: 80,
            density: { enable: true, area: 800 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3, random: true },
          move: {
            enable: true,
            speed: 1,
            outModes: { default: "out" },
          },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            opacity: 0.4,
            width: 1,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
