"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ExperienceTurn() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".turn-statement",
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
        }
      }
    );
  }, { scope: containerRef });

  return (
    <article
      ref={containerRef}
      className="w-full px-[8vw] py-20 flex flex-col justify-center min-h-screen"
    >
      <div className="max-w-5xl">
        <h2 className="turn-statement opacity-0 will-change-transform text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-primary leading-none">
          No al revés.
        </h2>
      </div>
    </article>
  );
}
