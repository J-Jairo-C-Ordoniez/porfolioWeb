"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function IdeationConclusion() {
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
        ".idea-conclusion-text",
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.2, ease: "power3.out" }
      );
    },
    { scope: containerRef }
  );

  return (
    <article
      ref={containerRef}
      className="flex min-h-screen w-full justify-end px-[8vw] py-24"
    >
      <div className="flex w-full flex-col justify-center gap-6 md:gap-8 lg:w-3/4 xl:w-2/3">
        <p className="idea-conclusion-text will-change-transform text-3xl font-normal leading-tight tracking-tight text-background/80 opacity-0 md:text-5xl lg:text-6xl">
          Reconocer a Tim antes de recorrer sus dimensiones.
        </p>
        <p className="idea-conclusion-text will-change-transform text-3xl font-normal leading-tight tracking-tight text-background opacity-0 md:text-5xl lg:text-6xl">
          El punto de partida para construir TIM.
        </p>
      </div>
    </article>
  );
}
