"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function BugHero() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion) {
        gsap.set(".bug-hero-el", { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        ".bug-hero-el",
        { autoAlpha: 0, y: 35 },
        { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" }
      );
    },
    { scope: containerRef }
  );

  return (
    <header
      ref={containerRef}
      className="flex min-h-[75vh] w-full flex-col justify-center px-[8vw] pt-32 pb-16 md:pt-40 md:pb-24"
    >
      <div className="max-w-5xl">
        {/* Metadatos y etiquetas */}
        <div className="bug-hero-el will-change-transform mb-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-background/20 bg-background/5 px-3.5 py-1 text-xs uppercase tracking-wider text-background/80 font-medium">
            Caso de estudio
          </span>
          <span className="text-xs uppercase tracking-wider text-background/50">
            TIM · Depuración & Accesibilidad
          </span>
        </div>

        {/* Título principal con estilo editorial */}
        <h1 className="bug-hero-el will-change-transform text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-background leading-tight">
          De un bug de animación a una decisión de arquitectura
        </h1>

        {/* Subtítulo / Tagline */}
        <p className="bug-hero-el will-change-transform mt-6 text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-background/80 leading-relaxed max-w-4xl">
          Depuración, accesibilidad y diseño de experiencias narrativas en la web.
        </p>

        {/* Resumen ejecutivo de apertura */}
        <div className="bug-hero-el will-change-transform mt-10 border-l border-accent/60 pl-6 md:pl-8">
          <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-background/70 max-w-3xl">
            Una experiencia narrativa basada en scroll funcionaba correctamente durante el desarrollo, pero algunos usuarios comenzaron a reportar un problema visual: varios bloques de texto aparecían superpuestos. La investigación permitió reproducir el error, identificar su causa y plantear una arquitectura en la que la integridad del contenido no dependa de las animaciones.
          </p>
        </div>
      </div>
    </header>
  );
}
