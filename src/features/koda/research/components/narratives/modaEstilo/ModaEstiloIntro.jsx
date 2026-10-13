"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ModaEstiloIntro() {
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
        ".moda-step",
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }
      )
        .fromTo(
          ".moda-title",
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          ".moda-lead",
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-full">
      <div className="moda-step mb-4 flex items-center gap-2">
        <span className="font-mono text-xs uppercase tracking-widest text-primary/60">Primer Proyecto Real</span>
      </div>

      <h2 className="moda-title mb-6 text-3xl font-bold tracking-tight text-primary md:text-5xl lg:text-7xl">
        Construir el sistema era suficiente.
      </h2>

      <div className="moda-lead max-w-4xl">
        <p className="text-2xl font-light leading-relaxed tracking-tight text-primary/80 md:text-4xl lg:text-5xl">
          Aquel primer proyecto se llamó <strong className="font-medium text-primary">Moda y Estilo</strong>.
          <span className="block mt-4 text-xl md:text-2xl text-primary/70 font-light">
            Durante algo más de un mes trabajé en el sistema. Programaba entre semana y me reunía los sábados para presentar avances. Era mi primera experiencia para un negocio real.
          </span>
        </p>
      </div>
    </div>
  );
}
