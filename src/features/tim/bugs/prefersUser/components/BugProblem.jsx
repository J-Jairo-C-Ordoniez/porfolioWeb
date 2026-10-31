"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Smartphone } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function BugProblem() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion) {
        gsap.set(".bug-problem-el", { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        ".bug-problem-el",
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
        {/* Encabezado de sección con badge numeral */}
        <div className="bug-problem-el will-change-transform mb-6 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-background/20 bg-background/5 text-xs font-semibold text-accent">
            01
          </span>
          <span className="text-xs uppercase tracking-widest text-background/60 font-medium">
            El síntoma inicial
          </span>
        </div>

        <h2 className="bug-problem-el will-change-transform text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-background leading-tight">
          Un error que no conseguíamos reproducir
        </h2>

        {/* Narrativa principal */}
        <div className="bug-problem-el will-change-transform mt-8 space-y-6 text-base sm:text-lg md:text-xl font-light leading-relaxed text-background/80">
          <p>
            El primer reporte llegó de un usuario que experimentó una superposición de textos durante la experiencia de TIM. El problema no aparecía en mis pruebas locales, ni al comprobar el comportamiento habitual en mi ordenador y teléfono.
          </p>
          <p>
            Inicialmente, no tenía evidencia suficiente para determinar si se trataba de un problema de compatibilidad entre navegadores, una diferencia en el renderizado o un error en la lógica de las animaciones.
          </p>
          <p>
            La situación cambió cuando otro usuario confirmó que también había experimentado el problema. Ya no teníamos un único caso, aunque todavía necesitábamos comprobar si ambos reportes compartían la misma causa.
          </p>
        </div>

        {/* Tarjeta de hipótesis inicial */}
        <div className="bug-problem-el will-change-transform mt-12 rounded-2xl bg-background/5 p-6 sm:p-8 md:p-10 border border-background/10">
          <div className="flex items-center gap-3 text-accent mb-4">
            <Smartphone size={22} />
            <h3 className="text-lg md:text-xl font-semibold text-background">
              Mi primera hipótesis: La trampa de la correlación
            </h3>
          </div>
          <p className="text-base sm:text-lg font-light leading-relaxed text-background/80">
            Al observar que varios de los usuarios afectados parecían utilizar dispositivos Apple, consideré la posibilidad de que existiera una diferencia de comportamiento entre navegadores o sistemas operativos.
          </p>
          <p className="mt-4 text-sm sm:text-base font-light text-background/60 italic">
            Esta hipótesis era razonable como punto de partida, pero no podía darse por cierta sin reproducir el error en un entorno controlado. En lugar de modificar el código a ciegas, decidí investigar a fondo antes de actuar.
          </p>
        </div>
      </div>
    </section>
  );
}
