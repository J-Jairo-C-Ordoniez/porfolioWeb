"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function DefinitionStart() {
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
        ".def-start-lead",
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          ".def-start-title",
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".def-start-sub",
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        );
    },
    { scope: containerRef }
  );

  return (
    <article
      ref={containerRef}
      className="flex min-h-[75vh] w-full flex-col justify-center px-[8vw] py-20"
    >
      <div className="max-w-5xl">
        <p className="def-start-lead will-change-transform mb-6 text-xl font-light tracking-tight text-background/80 opacity-0 md:mb-8 md:text-2xl lg:text-3xl">
          Al observar cómo su comunidad se relacionaba con Avicii, encontré el punto de partida:
        </p>
        <h2 className="def-start-title will-change-transform text-4xl font-bold leading-tight tracking-tight text-background opacity-0 md:text-6xl lg:text-7xl">
          No quería contar solo al artista.
        </h2>
        <p className="def-start-sub will-change-transform mt-4 text-2xl font-light leading-tight tracking-tight text-background/80 opacity-0 md:mt-6 md:text-4xl lg:text-5xl">
          Quería acercarme a la persona detrás del nombre.
        </p>
      </div>
    </article>
  );
}
