"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function TshirtConclusion() {
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
        ".tshirt-conc-lead",
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          ".tshirt-conc-title",
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0, duration: 1, ease: "power4.out" },
          "-=0.4"
        )
        .fromTo(
          ".tshirt-conc-sub",
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" },
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
      <div className="max-w-6xl">
        <p className="tshirt-conc-lead opacity-0 text-primary/80 block text-2xl md:text-4xl lg:text-5xl font-light tracking-tight leading-relaxed">
          Mi primera reacción fue pensar que podía programar algo para resolverlo.
        </p>

        <div className="mt-8 overflow-hidden md:mt-12">
          <h3 className="tshirt-conc-title opacity-0 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-primary leading-tight">
            Todavía no sabía que, antes de construir una solución,
          </h3>
          <p className="tshirt-conc-sub opacity-0 mt-6 text-primary/80 text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight">
            necesitaba comprender por qué alguien querría utilizarla.
          </p>
        </div>
      </div>
    </article>
  );
}
