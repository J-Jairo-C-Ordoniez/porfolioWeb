"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const descriptionLines = [
  "Una forma de conectar un negocio que",
  "había empezado a crecer.",
];

export default function Hero() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          ".koda-hero-title",
          { y: 100, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1.5, ease: "power2.out" }
        )
        .fromTo(
          ".koda-hero-letter",
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.35,
            stagger: 0.02,
            ease: "power2.out",
          },
          "-=0.2"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="flex min-h-screen items-center overflow-hidden px-6 sm:px-8 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl">
        <div className="overflow-hidden">
          <h1 className="koda-hero-title text-7xl font-bold leading-none tracking-tight sm:text-8xl md:text-9xl">
            KODA
          </h1>
        </div>
        <p
          aria-label="Una forma de conectar un negocio que había empezado a crecer."
          className="mt-10 max-w-3xl text-2xl font-normal leading-tight tracking-tight text-primary/80 md:mt-14 md:text-4xl"
        >
          {descriptionLines.map((line) => (
            <span key={line} aria-hidden="true" className="block overflow-hidden pb-2">
              {line.split(" ").map((word) => (
                <span key={word} className="mr-1 inline-block sm:mr-2">
                  {word.split("").map((character, index) => (
                    <span key={`${character}-${index}`} className="koda-hero-letter inline-block opacity-0">
                      {character}
                    </span>
                  ))}
                </span>
              ))}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
