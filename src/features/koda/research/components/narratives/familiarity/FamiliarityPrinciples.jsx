"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function FamiliarityPrinciples() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".fam-quote",
        { autoAlpha: 0, y: 35 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="py-12 border-t border-primary/10">
      <div className="max-w-4xl">
        <blockquote className="fam-quote text-2xl md:text-3xl lg:text-4xl font-light text-primary/80 leading-relaxed">
          Una interfaz no tenía que ser comprensible solamente para quien la construía.{" "}
          <strong className="text-primary font-semibold block mt-4">
            Tenía que tener sentido para quien iba a utilizarla.
          </strong>
        </blockquote>
        <p className="mt-8 text-lg md:text-xl text-primary/70 font-light leading-relaxed">
          Y eso significaba prestar atención no solo a qué opciones estaban disponibles en la pantalla, sino también a cómo se presentaban, cómo se relacionaban y qué esperaba encontrar una persona en cada momento del flujo.
        </p>
      </div>
    </div>
  );
}
