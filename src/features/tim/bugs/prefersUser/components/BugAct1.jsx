"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function BugAct1() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) {
        gsap.set(".act1-elem", { autoAlpha: 1, y: 0, scaleX: 1 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".act1-number",
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" }
      )
        .fromTo(
          ".act1-line",
          { scaleX: 0, transformOrigin: "left" },
          { scaleX: 1, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(
          ".act1-content",
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <article
      ref={containerRef}
      className="flex min-h-screen w-full flex-col justify-center px-[8vw] py-24 md:py-32"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-3">
          <span className="act1-number act1-elem will-change-transform block font-bold leading-none tracking-tighter text-primary/10 text-8xl md:text-9xl lg:text-[11rem] select-none opacity-0">
            01
          </span>
        </div>

        <div className="lg:col-span-9">
          <div className="act1-line act1-elem will-change-transform h-[1.5px] w-full bg-primary/20" />

          <div className="pt-8">
            <p className="act1-content act1-elem will-change-transform text-xl font-light leading-relaxed tracking-tight text-primary/70 opacity-0 md:text-2xl lg:text-3xl mb-6">
              El primer reporte llegó de un usuario que experimentó una superposición de textos durante la experiencia de TIM. El problema no aparecía en mis pruebas locales, ni al comprobar el comportamiento habitual en mi ordenador y teléfono.
            </p>

            <p className="act1-content act1-elem will-change-transform text-xl font-light leading-relaxed tracking-tight text-primary/70 opacity-0 md:text-2xl lg:text-3xl mb-6">
              Inicialmente, no tenía evidencia suficiente para determinar si se trataba de un problema de compatibilidad entre navegadores, una diferencia en el renderizado o un error en la lógica de las animaciones.
            </p>

            <p className="act1-content act1-elem will-change-transform text-xl font-light leading-relaxed tracking-tight text-primary/70 opacity-0 md:text-2xl lg:text-3xl mb-6">
              La situación cambió cuando otro usuario confirmó que también había experimentado el problema. Ya no era un único caso, aunque todavía necesitábamos comprobar si ambos reportes compartían la misma causa.
            </p>

            <p className="act1-content act1-elem will-change-transform text-xl font-light leading-relaxed tracking-tight text-primary/70 opacity-0 md:text-2xl lg:text-3xl">
              Al observar que varios de los usuarios afectados parecían utilizar dispositivos Apple, consideré la posibilidad de que existiera una diferencia de comportamiento entre navegadores o sistemas operativos. Esta hipótesis era razonable como punto de partida, pero no podía darse por cierta sin reproducir el error en un entorno diferente. En lugar de modificar el código inmediatamente, decidí investigar por mi cuenta y buscar una manera de reproducirlo en condiciones controladas.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
