"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function BugAct4() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) {
        gsap.set(".act4-elem", { autoAlpha: 1, y: 0, scaleX: 1 });
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
        ".act4-number",
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" }
      )
        .fromTo(
          ".act4-line",
          { scaleX: 0, transformOrigin: "left" },
          { scaleX: 1, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(
          ".act4-content",
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
          <span className="act4-number act4-elem will-change-transform block font-bold leading-none tracking-tighter text-primary/10 text-8xl md:text-9xl lg:text-[11rem] select-none opacity-0">
            04
          </span>
        </div>

        <div className="lg:col-span-9">
          <div className="act4-line act4-elem will-change-transform h-[1.5px] w-full bg-primary/20" />

          <div className="pt-8">
            <p className="act4-content act4-elem will-change-transform text-xl font-light leading-relaxed tracking-tight text-primary/70 opacity-0 md:text-2xl lg:text-3xl mb-6">
              Como primera medida, decidí retirar temporalmente el condicional que provocaba el comportamiento defectuoso. Esta decisión permitió recuperar la presentación correcta y comprobar que la preferencia de movimiento reducido estaba directamente relacionada con el problema.
            </p>

            <p className="act4-content act4-elem will-change-transform text-xl font-light leading-relaxed tracking-tight text-primary/70 opacity-0 md:text-2xl lg:text-3xl mb-6">
              Sin embargo, no consideré esta medida una solución definitiva. Eliminar el condicional evita la rama defectuosa, pero no resuelve la dependencia arquitectónica que la hizo posible. Tampoco constituye, por sí solo, una implementación adecuada de la preferencia de movimiento reducido.
            </p>

            <p className="act4-content act4-elem will-change-transform text-2xl font-normal leading-relaxed tracking-tight text-primary opacity-0 md:text-3xl lg:text-4xl">
              La solución inmediata permitió estabilizar la experiencia mientras preparaba una propuesta más completa. La mitigación y la corrección arquitectónica son dos etapas distintas del trabajo.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
