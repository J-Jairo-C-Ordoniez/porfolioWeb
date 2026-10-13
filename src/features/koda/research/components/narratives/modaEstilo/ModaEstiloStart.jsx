"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ModaEstiloStart() {
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
        ".moda-start-title",
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          ".moda-start-lead",
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        );
    },
    { scope: containerRef }
  );

  return (
    <article
      ref={containerRef}
      className="w-full px-[8vw] py-20 flex flex-col justify-center min-h-screen"
    >
      <div className="max-w-5xl">
        <h2 className="moda-start-title opacity-0 will-change-transform text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-primary leading-tight">
          Construir el sistema era suficiente.
        </h2>

        <div className="mt-8 overflow-hidden md:mt-12">
          <p className="moda-start-lead opacity-0 text-primary/80 block text-2xl md:text-4xl lg:text-5xl font-light tracking-tight leading-relaxed">
            Aquel primer proyecto se llamó <strong className="font-semibold text-primary">Moda y Estilo</strong>.
          </p>
        </div>
      </div>
    </article>
  );
}
