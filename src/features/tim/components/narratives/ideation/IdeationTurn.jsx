"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function IdeationTurn() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".idea-turn-statement",
        { autoAlpha: 0, y: 60, scale: 0.95 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "power4.out",
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
    <article
      ref={containerRef}
      className="flex min-h-screen w-full flex-col justify-center px-[8vw] py-20"
    >
      <div className="max-w-5xl">
        <h2 className="idea-turn-statement will-change-transform text-5xl font-bold leading-none tracking-tight text-background opacity-0 md:text-7xl lg:text-8xl xl:text-9xl">
          El movimiento no era decorativo.
        </h2>
      </div>
    </article>
  );
}
