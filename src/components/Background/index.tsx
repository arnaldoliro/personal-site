"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { useCallback } from "react";

export default function Background() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <Particles
        init={particlesInit}
        options={{
          background: {
            color: "#171717",
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: ["#f97316", "#facc15", "#f5f5f5"],
            },
            links: {
              enable: true,
              color: "#f5f5f5",
              distance: 150,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.6,
            },
            size: {
              value: 2,
              random: true,
            },
            opacity: {
              value: 0.5,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
