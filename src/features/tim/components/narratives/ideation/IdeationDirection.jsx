"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function IdeationDirection() {
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
        ".idea-dir-lead",
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" }
      ).fromTo(
        ".idea-dir-statement",
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" },
        "-=0.4"
      );
    },
    { scope: containerRef }
  );

  return (
    <article
      ref={containerRef}
      className="flex min-h-screen w-full flex-col justify-center px-[8vw] py-20"
    >
      <div className="max-w-5xl">
        <p className="idea-dir-lead will-change-transform mb-6 text-2xl font-light leading-tight tracking-tight text-background/80 opacity-0 md:mb-10 md:text-4xl lg:text-5xl">
          La dirección fue clara:
        </p>
        <h3 className="idea-dir-statement will-change-transform text-4xl font-bold leading-tight tracking-tight text-background opacity-0 md:text-6xl lg:text-7xl">
          Primero la persona. Después su legado.
        </h3>
      </div>
    </article>
  );
}
