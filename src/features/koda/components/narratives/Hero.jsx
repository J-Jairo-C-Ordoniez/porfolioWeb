"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const descriptionWords = ["Koda", "conecta", "las", "operaciones", "de", "tu", "negocio", "en", "un", "mismo", "lugar."];

export default function Hero() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reducedMotion) {
        gsap.set(".koda-hero-title, .koda-hero-letter", { autoAlpha: 1, y: 0 });
        gsap.set(".koda-hero-photo-mask", { clipPath: "inset(0 0% 0% 0%)" });
        gsap.set(".koda-hero-photo", { scale: 1 });
        return undefined;
      }

      const timeline = gsap.timeline();

      timeline
        .fromTo(
          ".koda-hero-title",
          { autoAlpha: 0, y: 64, scale: 0.96 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 1.1, ease: "power4.out" }
        )
        .fromTo(
          ".koda-hero-letter",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.02, ease: "power2.out" },
          "-=0.2"
        )
        .fromTo(
          ".koda-hero-photo-mask",
          { clipPath: "inset(0 5% 100% 5%)" },
          { clipPath: "inset(0 0% 0% 0%)", duration: 1.2, ease: "power4.inOut" },
          "-=0.05"
        )
        .fromTo(
          ".koda-hero-photo",
          { scale: 1.1 },
          { scale: 1, duration: 1.35, ease: "power3.out" },
          "<"
        );

      return undefined;
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="koda"
      className="bg-background pb-20 pt-25 text-primary lg:pt-50"
    >
      <div className="conatiner mx-auto max-w-7xl px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="koda-hero-title mb-6 text-4xl font-bold tracking-tight text-primary opacity-0 will-change-transform md:text-5xl lg:text-7xl">
            Mucho que ordenar.
          </h1>

          <div className="koda-hero-supporting mx-auto mt-6 max-w-5xl md:mt-5">
            <p className="text-primary/80 block text-2xl md:text-4xl lg:text-5xl font-light tracking-tight leading-relaxed">
              {descriptionWords.map((word, wordIndex) => {
                const letters = word.split("").map((letter, letterIndex) => (
                  <span key={`${word}-${letterIndex}`} className="koda-hero-letter inline-block opacity-0 will-change-transform">
                    {letter}
                  </span>
                ));

                return wordIndex === 0 ? (
                  <strong key={word} className="mr-[0.3em] inline-block font-bold text-primary">
                    {letters}
                  </strong>
                ) : (
                  <span key={word} className="mr-[0.3em] inline-block">
                    {letters}
                  </span>
                );
              })}
            </p>
          </div>
        </div>

        <figure className="mt-10 md:mt-14">
          <div className="koda-hero-photo-mask overflow-hidden rounded-2xl bg-primary/5 [clip-path:inset(0_5%_100%_5%)] motion-reduce:[clip-path:inset(0_0_0_0)] md:rounded-[2rem]">
            <Image
              className="koda-hero-photo h-auto w-full object-cover motion-reduce:scale-100"
              src="/fotoPrincipal.png"
              alt="Persona trabajando en el dashboard de KODA desde una boutique"
              width={1254}
              height={1254}
              sizes="(max-width: 768px) 100vw, (max-width: 1440px) 90vw, 1408px"
              priority
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
