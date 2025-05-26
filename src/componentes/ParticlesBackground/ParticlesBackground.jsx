import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  const iniciarParticulas = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] custom-gradient">
      <Particles
        id="tsparticles"
        init={iniciarParticulas}
        options={{
          fullScreen: { enable: false },
          background: {
            color: "transparent",
          },
          particles: {
            number: {
              value: 120,
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
    </div>
  );
}
