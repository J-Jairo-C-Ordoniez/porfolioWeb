"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Sparkles } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function BugSolution() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion) {
        gsap.set(".bug-sol-el", { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        ".bug-sol-el",
        { autoAlpha: 0, y: 35 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="flex w-full flex-col justify-center px-[8vw] py-16 md:py-24 border-t border-background/10"
    >
      <div className="max-w-5xl">
        {/* Mitigación inmediata */}
        <div className="bug-sol-el will-change-transform mb-6 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-background/20 bg-background/5 text-xs font-semibold text-accent">
            04
          </span>
          <span className="text-xs uppercase tracking-widest text-background/60 font-medium">
            Fase de contención
          </span>
        </div>

        <h2 className="bug-sol-el will-change-transform text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-background leading-tight">
          La mitigación inmediata vs. la solución de fondo
        </h2>

        <div className="bug-sol-el will-change-transform mt-8 space-y-6 text-base sm:text-lg md:text-xl font-light leading-relaxed text-background/80">
          <p>
            Como primera medida, retiré temporalmente el condicional que provocaba la superposición defectuosa. Esto permitió estabilizar la experiencia para todos los visitantes mientras preparaba una refactorización integral.
          </p>
          <p>
            Sin embargo, eliminar el condicional evita la rama rota, pero no resuelve la fragilidad arquitectónica que la hizo posible. La verdadera solución requería rediseñar la relación entre contenido y animación.
          </p>
        </div>

        {/* Separación de contenido y animación */}
        <div className="bug-sol-el will-change-transform mt-16 border-t border-background/10 pt-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-background/20 bg-background/5 text-xs font-semibold text-accent">
              05
            </span>
            <span className="text-xs uppercase tracking-widest text-background/60 font-medium">
              Nueva Arquitectura
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-background">
            Separar contenido y animación
          </h3>

          <p className="mt-6 text-base sm:text-lg md:text-xl font-light leading-relaxed text-background/80">
            En lugar de forzar todos los bloques en un único viewport y depender de GSAP para separarlos visualmente, cada bloque narrativo debe disponer de su propio espacio dentro del flujo natural del documento HTML.
          </p>
          <p className="mt-4 text-base sm:text-lg font-light leading-relaxed text-background/70">
            La animación pasa a ser una capa de mejora progresiva que enriquece la experiencia, en lugar de ser el mecanismo indispensable para sostener la legibilidad.
          </p>

          {/* Comparativa de los dos modos */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-background/15 bg-background/5 p-6 sm:p-8">
              <div className="flex items-center gap-3 text-accent mb-4">
                <ShieldCheck size={24} />
                <h4 className="text-xl font-bold text-background">Modo Movimiento Reducido</h4>
              </div>
              <p className="text-sm sm:text-base font-light leading-relaxed text-background/80">
                Los contenidos se recorren en su orden natural mediante scroll, sin depender de transiciones animadas para hacerse visibles. La experiencia es completa, comprensible y accesible sin esfuerzo.
              </p>
            </div>

            <div className="rounded-2xl border border-background/15 bg-background/5 p-6 sm:p-8">
              <div className="flex items-center gap-3 text-accent mb-4">
                <Sparkles size={24} />
                <h4 className="text-xl font-bold text-background">Modo Movimiento Estándar</h4>
              </div>
              <p className="text-sm sm:text-base font-light leading-relaxed text-background/80">
                GSAP y ScrollTrigger añaden transiciones cinemáticas y sincronización rítmica que enriquecen la narrativa, sabiendo que si se desactivan, el contenido permanece 100% íntegro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
