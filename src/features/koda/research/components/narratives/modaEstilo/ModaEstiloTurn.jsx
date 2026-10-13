"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ModaEstiloTurn() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".moda-turn-pill",
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }
      )
        .fromTo(
          ".moda-turn-quote",
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          ".moda-turn-comparison",
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="py-12 border-t border-primary/10">
      <span className="moda-turn-pill inline-block text-xs font-mono uppercase tracking-widest text-primary/60 mb-6">
        El punto de inflexión
      </span>

      <blockquote className="moda-turn-quote max-w-4xl text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-primary/80">
        Recuerdo esa experiencia como un punto de inflexión porque me obligó a enfrentar una diferencia que hasta entonces no había comprendido del todo:
        <strong className="block mt-4 text-primary font-semibold">
          Una cosa es terminar un producto y otra conseguir que tenga sentido para las personas que deberían utilizarlo.
        </strong>
      </blockquote>

      <div className="moda-turn-comparison mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        <div className="rounded-2xl border border-primary/10 bg-background/60 p-8">
          <p className="text-xs font-mono uppercase tracking-wider text-primary/50 mb-3">
            Perspectiva del desarrollador
          </p>
          <p className="text-lg md:text-xl font-medium text-primary leading-snug">
            “Había visto una oportunidad técnica. Si creaba las entidades, las pantallas y los formularios, el sistema estaría terminado.”
          </p>
        </div>

        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
          <p className="text-xs font-mono uppercase tracking-wider text-primary/60 mb-3">
            Perspectiva del negocio
          </p>
          <p className="text-lg md:text-xl font-medium text-primary leading-snug">
            “El sistema podía estar terminado en código. Pero el problema seguía sin resolverse en el día a día de la tienda.”
          </p>
        </div>
      </div>

      <p className="moda-turn-comparison mt-10 text-xl font-light text-primary/70 max-w-3xl">
        Y si quería volver a intentarlo, necesitaba cambiar algo más que el código.
      </p>
    </div>
  );
}
