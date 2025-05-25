import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  const iniciarParticulas = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={iniciarParticulas}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: "#0a192f", // fondo base
        },
        particles: {
          number: {
            value: 120, // 💥 un poquito más cargado
            density: { enable: true, area: 800 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.3,
            random: true,
          },
          size: {
            value: 2,
            random: true,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "bounce" },
          },
          links: {
            enable: true,
            distance: 120,
            color: "#ffffff",
            opacity: 0.3,
            width: 0.7,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
              parallax: { enable: false },
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
              },
            },
          },
        },
        detectRetina: true,
        fpsLimit: 60,
      }}
    />
  );
}
