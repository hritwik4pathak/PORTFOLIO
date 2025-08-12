tsParticles.load("tsparticles", {
  background: {
    color: { value: "#0f0f0f" }
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" }, // camelCase
      resize: true
    },
    modes: {
      grab: {
        distance: 150,
        links: { opacity: 0.6 } // 'line_linked' → 'links'
      }
    }
  },
  particles: {
    number: { value: 60, density: { enable: true, area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.4 },
    size: { value: { min: 1, max: 3 } },
    links: { // 'line_linked' → 'links'
      enable: true,
      distance: 120,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      outModes: { default: "bounce" }
    }
  },
  detectRetina: true
});
