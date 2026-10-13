"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function TshirtInsight() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".tshirt-insight-quote",
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
    <div ref={containerRef} className="py-12 border-b border-primary/10">
      <div className="max-w-4xl">
        <p className="text-sm font-mono uppercase tracking-widest text-primary/50 mb-4">
          La primera reacción del desarrollador
        </p>
        <blockquote className="tshirt-insight-quote text-2xl md:text-3xl lg:text-4xl font-light text-primary/80 leading-relaxed">
          Mi primera reacción fue pensar que podía construir algo para resolverlo.{" "}
          <strong className="font-semibold text-primary block mt-4">
            Todavía no sabía que, antes de aprender a construir una solución, necesitaba aprender a comprender por qué alguien querría utilizarla.
          </strong>
        </blockquote>
      </div>
    </div>
  );
}
