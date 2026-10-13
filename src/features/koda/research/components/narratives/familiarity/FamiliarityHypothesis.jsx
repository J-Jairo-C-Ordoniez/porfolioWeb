"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, Sparkles } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function FamiliarityHypothesis() {
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
        ".hypo-card",
        { autoAlpha: 0, y: 35 },
        { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="my-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article className="hypo-card rounded-[2rem] border border-primary/10 bg-background p-8 md:p-12">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 text-primary">
            <Compass size={24} />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary/60">
            La hipótesis de diseño
          </span>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Aprovechar la familiaridad preexistente
          </h3>
          <p className="mt-4 text-base md:text-lg text-primary/80 font-light leading-relaxed">
            La idea no era convertir un sistema de gestión en una red social. Era explorar si patrones visuales e interacciones conocidos (feeds, tarjetas reconocibles, estados claros) podían ayudar a las personas a orientarse sin tener que aprenderlo todo desde cero.
          </p>
        </article>

        <article className="hypo-card rounded-[2rem] border border-primary/10 bg-background p-8 md:p-12">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 text-primary">
            <Sparkles size={24} />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary/60">
            Exploración y contraste
          </span>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Probar cómo se entiende la interfaz
          </h3>
          <p className="mt-4 text-base md:text-lg text-primary/80 font-light leading-relaxed">
            Exploré informalmente algunas propuestas con compañeros y usuarios. Aquellas aproximaciones me permitieron cuestionar cómo se entendían las pantallas que construía, ampliando mi forma de pensar el diseño más allá del código.
          </p>
        </article>
      </div>
    </div>
  );
}
