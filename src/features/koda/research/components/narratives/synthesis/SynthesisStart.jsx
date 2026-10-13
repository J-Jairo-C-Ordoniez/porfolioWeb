"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function SynthesisStart() {
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
        ".synth-step",
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }
      )
        .fromTo(
          ".synth-title",
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          ".synth-lead",
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-full">
      <div className="synth-step mb-4 flex items-center gap-2">
        <span className="font-mono text-xs uppercase tracking-widest text-primary/60">Síntesis y Conclusión</span>
      </div>

      <h2 className="synth-title mb-6 text-3xl font-bold tracking-tight text-primary md:text-5xl lg:text-7xl">
        La investigación.
      </h2>

      <div className="synth-lead max-w-4xl">
        <p className="text-2xl font-light leading-relaxed tracking-tight text-primary/80 md:text-4xl lg:text-5xl">
          Cuando miro hacia atrás, no veo un estudio que me entregara una lista definitiva de requisitos para KODA.
        </p>
        <p className="mt-6 text-lg text-primary/70 md:text-xl font-light leading-relaxed">
          Veo una primera experiencia que no salió como esperaba, distintas formas de gestionar pequeños negocios y una serie de preguntas que comenzaron a cambiar mi manera de trabajar. No tenía todas las respuestas, pero había dejado de asumir que ya las tenía.
        </p>
      </div>
    </div>
  );
}
