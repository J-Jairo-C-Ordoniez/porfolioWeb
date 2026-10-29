"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const wordsList = [
  { text: "Tim", isStrong: true },
  { text: "Bergling,", isStrong: true },
  { text: "conocido", isStrong: false },
  { text: "como", isStrong: false },
  { text: "Avicii.", isStrong: false },
  { text: "Un", isStrong: false },
  { text: "músico,", isStrong: false },
  { text: "un", isStrong: false },
  { text: "creador", isStrong: false },
  { text: "y", isStrong: false },
  { text: "una", isStrong: false },
  { text: "persona", isStrong: false },
  { text: "cuya", isStrong: false },
  { text: "historia", isStrong: false },
  { text: "va", isStrong: false },
  { text: "más", isStrong: false },
  { text: "allá", isStrong: false },
  { text: "de", isStrong: false },
  { text: "las", isStrong: false },
  { text: "canciones", isStrong: false },
  { text: "que", isStrong: false },
  { text: "el", isStrong: false },
  { text: "mundo", isStrong: false },
  { text: "llegó", isStrong: false },
  { text: "a", isStrong: false },
  { text: "conocer.", isStrong: false },
];

export default function Hero() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reducedMotion) {
        gsap.set(".tim-hero-letter", { autoAlpha: 1, y: 0 });
        gsap.set(".tim-hero-photo-mask", { clipPath: "inset(0 0% 0% 0%)" });
        gsap.set(".tim-hero-photo", { scale: 1 });
        return undefined;
      }

      const timeline = gsap.timeline();

      timeline
        .fromTo(
          ".tim-hero-letter",
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.012, ease: "power2.out" }
        )
        .fromTo(
          ".tim-hero-photo-mask",
          { clipPath: "inset(0 5% 100% 5%)" },
          { clipPath: "inset(0 0% 0% 0%)", duration: 1.2, ease: "power4.inOut" },
          "-=0.05"
        )
        .fromTo(
          ".tim-hero-photo",
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
      id="tim-hero"
      className="bg-primary pb-20 pt-25 text-background lg:pt-40"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-light tracking-tight leading-relaxed md:leading-relaxed text-background/80">
            {wordsList.map((item, wordIndex) => {
              const letters = item.text.split("").map((letter, letterIndex) => (
                <span
                  key={`${item.text}-${wordIndex}-${letterIndex}`}
                  className="tim-hero-letter inline-block opacity-0 will-change-transform"
                >
                  {letter}
                </span>
              ));

              return item.isStrong ? (
                <strong
                  key={`${item.text}-${wordIndex}`}
                  className="mr-[0.3em] inline-block font-bold text-background"
                >
                  {letters}
                </strong>
              ) : (
                <span key={`${item.text}-${wordIndex}`} className="mr-[0.3em] inline-block">
                  {letters}
                </span>
              );
            })}
          </h1>
        </div>

        <figure className="mt-10 md:mt-14">
          <div className="tim-hero-photo-mask overflow-hidden rounded-2xl bg-background/5 [clip-path:inset(0_5%_100%_5%)] motion-reduce:[clip-path:inset(0_0_0_0)] md:rounded-[2rem]">
            <Image
              className="tim-hero-photo h-auto w-full object-cover motion-reduce:scale-100"
              src="/tim/aviciiHero.png"
              alt="Tim Bergling (Avicii)"
              width={1672}
              height={941}
              sizes="(max-width: 768px) 100vw, (max-width: 1440px) 90vw, 1408px"
              priority
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
