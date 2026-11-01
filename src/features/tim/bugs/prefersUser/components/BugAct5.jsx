"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BugCodeBlock from "./BugCodeBlock";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const refactorSnippet = `// Arquitectura resiliente: contenido independiente por defecto
export default function TestimonialScene({ testimonials }) {
  const isReduced = usePrefersReducedMotion();

  // El contenido fluye de manera natural en el documento;
  // GSAP orquesta las transiciones solo como mejora progresiva.
  return (
    <div className="scene-flow flex flex-col gap-16 md:gap-24">
      {testimonials.map((item) => (
        <article key={item.id} className="scene-item min-h-[50vh] flex items-center">
          <p className="scene-quote">{item.quote}</p>
        </article>
      ))}
    </div>
  );
}`;

const technicalDecisions = [
  {
    label: "Estructura del documento",
    body: "Reducir el uso de position: absolute para los bloques de contenido que necesitan conservar su orden. Los elementos decorativos y las capas que realmente requieran superposición pueden seguir utilizando posicionamiento absoluto.",
  },
  {
    label: "Altura flexible",
    body: "Emplear min-height: 100svh cuando una escena deba ocupar al menos una pantalla, permitiendo que crezca si el contenido lo necesita. No todas las escenas deben tener una altura fija.",
  },
  {
    label: "Estados de animación",
    body: "Revisar pin, scrub, opacity, visibility y transform, además de la inicialización y limpieza de los timelines. Desactivar una animación no debe dejar contenido oculto, fuera del flujo o inaccesible.",
  },
  {
    label: "Movimiento reducido",
    body: "Definir una alternativa de presentación coherente que respete la preferencia del usuario sin sacrificar la lectura ni la navegación. La experiencia debe seguir siendo completa y comprensible.",
  },
];

export default function BugAct5() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) {
        gsap.set(".act5-elem", { autoAlpha: 1, y: 0, scaleX: 1 });
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
        ".act5-number",
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" }
      )
        .fromTo(
          ".act5-line",
          { scaleX: 0, transformOrigin: "left" },
          { scaleX: 1, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(
          ".act5-content",
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
          <span className="act5-number act5-elem will-change-transform block font-bold leading-none tracking-tighter text-primary/10 text-8xl md:text-9xl lg:text-[11rem] select-none opacity-0">
            05
          </span>
        </div>

        <div className="lg:col-span-9">
          <div className="act5-line act5-elem will-change-transform h-[1.5px] w-full bg-primary/20" />

          <div className="pt-8">
            <p className="act5-content act5-elem will-change-transform text-xl font-light leading-relaxed tracking-tight text-primary/70 opacity-0 md:text-2xl lg:text-3xl mb-6">
              La propuesta es cambiar la relación entre el contenido y el sistema de animación. En lugar de colocar todos los bloques en un único viewport y depender de GSAP para separarlos visualmente, cada bloque narrativo debe disponer de su propio espacio dentro del flujo del documento.
            </p>

            <p className="act5-content act5-elem will-change-transform text-xl font-light leading-relaxed tracking-tight text-primary/70 opacity-0 md:text-2xl lg:text-3xl mb-8">
              La intención no es eliminar las animaciones, sino hacer que la experiencia siga funcionando cuando deban reducirse o desactivarse. Con movimiento reducido activado, los contenidos se recorren en su orden natural mediante el scroll. Con movimiento normal, GSAP añade las transiciones, la sincronización con el scroll y los recursos narrativos que caracterizan a TIM.
            </p>

            <div className="act5-content act5-elem opacity-0">
              <BugCodeBlock
                filename="ResilientSceneArchitecture.tsx"
                code={refactorSnippet}
              />
            </div>

            <div className="act5-content act5-elem opacity-0 mt-10 flex flex-col gap-8 md:gap-10">
              {technicalDecisions.map((d, i) => (
                <div key={i} className="border-b border-primary/10 pb-8 last:border-b-0">
                  <p className="text-xs font-mono uppercase tracking-widest text-primary/40 mb-2">{d.label}</p>
                  <p className="text-lg font-light leading-relaxed tracking-tight text-primary/70 md:text-xl lg:text-2xl">
                    {d.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
