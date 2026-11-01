"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function BugHook() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) {
        gsap.set(".bug-hook-text", { autoAlpha: 1, y: 0 });
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
        ".bug-hook-text",
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 1, stagger: 0.25, ease: "power3.out" }
      );
    },
    { scope: containerRef }
  );

  return (
    <article
      ref={containerRef}
      className="flex min-h-screen w-full flex-col justify-center px-[8vw] py-24 md:py-32"
    >
      <div className="max-w-5xl">
        <p className="bug-hook-text will-change-transform text-3xl font-light leading-relaxed tracking-tight text-primary/70 opacity-0 md:text-5xl lg:text-6xl mb-6">
          En desarrollo, la experiencia fluía con naturalidad.
        </p>
        <p className="bug-hook-text will-change-transform text-3xl font-bold leading-relaxed tracking-tight text-primary opacity-0 md:text-5xl lg:text-6xl">
          En producción, todas las frases colapsaron en el mismo segundo.
        </p>
      </div>
    </article>
  );
}
