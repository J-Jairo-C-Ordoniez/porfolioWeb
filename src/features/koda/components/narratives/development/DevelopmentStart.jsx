"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function DevelopmentStart() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".dev-start-title",
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <article
      ref={containerRef}
      className="w-full px-[8vw] py-20 flex flex-col justify-center min-h-screen"
    >
      <header className="max-w-5xl">
        <h2 className="dev-start-title opacity-0 will-change-transform text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-primary leading-tight">
          Después de comprender y decidir,
          <span className="block mt-4 font-light text-primary/80">
            tocaba construir.
          </span>
        </h2>
      </header>
    </article>
  );
}
