"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function BeyondInventoryIntro() {
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
        ".beyond-step",
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }
      )
        .fromTo(
          ".beyond-title",
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          ".beyond-lead",
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-full">
      <div className="beyond-step mb-4 flex items-center gap-2">
        <span className="font-mono text-xs uppercase tracking-widest text-primary/60">Comprensión Sistémica</span>
      </div>

      <h2 className="beyond-title mb-6 text-3xl font-bold tracking-tight text-primary md:text-5xl lg:text-7xl">
        Algo más que un inventario.
      </h2>

      <div className="beyond-lead max-w-4xl">
        <p className="text-2xl font-light leading-relaxed tracking-tight text-primary/80 md:text-4xl lg:text-5xl">
          Cuanto más pensaba en aquellas experiencias, más difícil me resultaba reducir el problema a una sola tarea.
        </p>
        <p className="mt-6 text-lg text-primary/70 md:text-xl font-light leading-relaxed">
          Un negocio de ropa no es únicamente una colección de prendas almacenadas en algún lugar. Detrás de cada producto hay decisiones, movimientos y relaciones constantes.
        </p>
      </div>
    </div>
  );
}
