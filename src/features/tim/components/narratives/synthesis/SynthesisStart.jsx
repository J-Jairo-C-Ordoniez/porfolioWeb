"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function SynthesisStart() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".synth-lead",
      { y: 28, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.55, ease: "power3.out" }
    );
    gsap.fromTo(
      ".synth-statement",
      { y: 72, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.12, ease: "power4.out" }
    );
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="flex h-screen w-screen shrink-0 flex-col justify-center px-[8vw]"
    >
      <p className="synth-lead opacity-0 will-change-transform text-2xl font-light tracking-tight leading-tight text-background/80 md:text-4xl lg:text-5xl mb-6 md:mb-10">
        No se trataba de contarlo todo.
      </p>
      <h2 className="synth-statement opacity-0 will-change-transform text-5xl font-bold tracking-tight leading-none text-background md:text-7xl lg:text-8xl xl:text-9xl">
        Era encontrar qué contar.
      </h2>
    </div>
  );
}
