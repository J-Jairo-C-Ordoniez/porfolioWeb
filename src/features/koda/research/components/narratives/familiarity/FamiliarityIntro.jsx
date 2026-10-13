"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function FamiliarityIntro() {
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
        ".fam-step",
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }
      )
        .fromTo(
          ".fam-title",
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          ".fam-lead",
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-full">
      <div className="fam-step mb-4 flex items-center gap-2">
        <span className="font-mono text-xs uppercase tracking-widest text-primary/60">Hipótesis de Interfaz</span>
      </div>

      <h2 className="fam-title mb-6 text-3xl font-bold tracking-tight text-primary md:text-5xl lg:text-7xl">
        Utilizar el sistema no debía ser otro problema.
      </h2>

      <div className="fam-lead max-w-4xl">
        <p className="text-2xl font-light leading-relaxed tracking-tight text-primary/80 md:text-4xl lg:text-5xl">
          Aunque algunos negocios no utilizaban software administrativo especializado, las personas sí estaban familiarizadas con herramientas digitales cotidianas, como las redes sociales.
        </p>
      </div>
    </div>
  );
}
