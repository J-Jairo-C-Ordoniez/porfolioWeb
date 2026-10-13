"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function TshirtStart() {
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
        ".tshirt-title",
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          ".tshirt-lead",
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          ".tshirt-statement",
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.4"
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
        <h2 className="tshirt-title opacity-0 will-change-transform text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-primary leading-tight">
          Comprar una camiseta.
        </h2>

        <div className="mt-8 overflow-hidden md:mt-12">
          <p className="tshirt-lead opacity-0 text-primary/80 block text-2xl md:text-4xl lg:text-5xl font-light tracking-tight leading-relaxed">
            No estaba buscando un proyecto.
          </p>
          <p className="tshirt-statement opacity-0 mt-4 text-primary block text-2xl md:text-4xl lg:text-5xl font-light tracking-tight leading-relaxed">
            Tampoco tenía un plan de investigación.
          </p>
        </div>
      </div>
    </article>
  );
}
