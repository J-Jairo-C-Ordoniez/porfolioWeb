"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ResearchHero() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reducedMotion) {
        gsap.set(".research-hero-line-1, .research-hero-line-2", {
          autoAlpha: 1,
          y: 0,
        });
        return undefined;
      }

      const timeline = gsap.timeline();

      timeline
        .fromTo(
          ".research-hero-line-1",
          { autoAlpha: 0, y: 60 },
          { autoAlpha: 1, y: 0, duration: 1.1, ease: "power4.out" }
        )
        .fromTo(
          ".research-hero-line-2",
          { autoAlpha: 0, y: 45 },
          { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.65"
        );

      return undefined;
    },
    { scope: containerRef }
  );

  return (
    <header
      ref={containerRef}
      id="research-hero"
      className="relative flex min-h-[85vh] flex-col justify-center bg-background px-6 pt-32 pb-16 text-primary sm:px-8 md:px-12 lg:px-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <h1 className="research-hero-title max-w-5xl text-5xl font-bold tracking-tight text-primary sm:text-7xl md:text-8xl lg:text-9xl leading-[1.02]">
          <span className="research-hero-line-1 block opacity-0 will-change-transform">
            Comprender
          </span>
          <span className="research-hero-line-2 block font-light text-primary/80 opacity-0 will-change-transform mt-2 sm:mt-4">
            antes de construir.
          </span>
        </h1>
      </div>
    </header>
  );
}
