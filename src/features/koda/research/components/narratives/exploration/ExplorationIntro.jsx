"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ExplorationIntro() {
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
        ".explor-step",
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }
      )
        .fromTo(
          ".explor-title",
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          ".explor-lead",
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-full">
      <div className="explor-step mb-4 flex items-center gap-2">
        <span className="font-mono text-xs uppercase tracking-widest text-primary/60">Cambio de Mirada</span>
      </div>

      <h2 className="explor-title mb-6 text-3xl font-bold tracking-tight text-primary md:text-5xl lg:text-7xl">
        Dejé de buscar una tienda que necesitara software.
      </h2>

      <div className="explor-lead max-w-4xl">
        <p className="text-2xl font-light leading-relaxed tracking-tight text-primary/80 md:text-4xl lg:text-5xl">
          Empecé a estudiar experiencia de usuario, pensamiento sistémico, comunicación y Design Thinking.{" "}
          <span className="text-primary font-normal">
            Quería entender cómo tomar mejores decisiones antes de empezar a construir.
          </span>
        </p>
        <p className="mt-6 text-lg text-primary/70 md:text-xl font-light leading-relaxed">
          Así que volví a las tiendas de ropa, pero con otra actitud: entraba como cliente, observaba cómo se organizaban y conversaba cuando surgía la oportunidad. Sin guiones rígidos, contrastando suposiciones con la realidad.
        </p>
      </div>
    </div>
  );
}
