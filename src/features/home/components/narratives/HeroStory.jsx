"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react"

export default function HeroStory() {
  const container = useRef(null);
  const letterRef = useRef(null);

  const descriptionLines = [
    "Desarrollador Web",
    "enfocado en construir",
    "productos con sentido."
  ];

  useGSAP(() => {
    const tl = gsap.timeline();

    tl
      .fromTo(letterRef.current, {
        y: 100,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      })
      .fromTo(".hero-text-1", {
        y: 20,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      }, "-=0.8")
      .fromTo(".hero-letter", {
        y: 20,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.35,
        stagger: 0.02,
        ease: "power2.out",
      }, "-=0.2") // Start slightly overlapping with the previous text
      .fromTo(".hero-text-3", {
        y: 20,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      }, "-=0.1"); // Start immediately after letters
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative w-screen h-screen flex flex-col justify-center items-center overflow-hidden bg-background shrink-0"
    >
      <div
        ref={letterRef}
        className="absolute select-none flex items-center justify-center font-extrabold leading-none z-0 pointer-events-none text-[60vw] text-background opacity-0 [text-shadow:10px_10px_30px_rgba(0,0,0,0.05),_-10px_-10px_30px_rgba(255,255,255,1)]"
      >
        J
      </div>

      <div className="relative z-10 max-w-4xl px-8 flex flex-col items-start w-full">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-primary mb-6">
          <span className="hero-text-1 block opacity-0">Soy Jhon Jairo.</span>

          <span className="text-primary/80 font-normal mt-4 block text-4xl md:text-5xl lg:text-7xl tracking-tight">
            {descriptionLines.map((line, lineIndex) => (
              <span key={lineIndex} className="block overflow-hidden pb-2">
                {line.split(" ").map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block mr-[0.3em]">
                    {word.split("").map((char, charIndex) => (
                      <span
                        key={charIndex}
                        className="hero-letter inline-block opacity-0"
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                ))}
              </span>
            ))}
          </span>
        </h1>

        <div className="hero-text-3 mt-8 opacity-0">
          <p className="group flex items-center gap-3 text-xs md:text-sm tracking-widest uppercase font-semibold text-primary cursor-pointer">
            Descubre mi historia
            <ArrowRight size={22} strokeWidth={2} />
          </p>
        </div>
      </div>
    </section>
  );
}
