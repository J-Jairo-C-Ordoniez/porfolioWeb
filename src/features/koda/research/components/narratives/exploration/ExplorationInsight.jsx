"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ExplorationInsight() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".explor-quote",
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
        <blockquote className="explor-quote text-2xl md:text-3xl lg:text-4xl font-light text-primary/80 leading-relaxed">
          Empecé a entender que, antes de proponer una herramienta, tenía que conocer la manera en que cada negocio trabajaba, las costumbres que había construido y la relación que mantenía con lo que ya utilizaba.
          <strong className="block mt-6 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary leading-tight">
            La pregunta dejó de ser qué podía digitalizar. Quería comprender qué estaba ocurriendo realmente.
          </strong>
        </blockquote>
      </div>
    </div>
  );
}
