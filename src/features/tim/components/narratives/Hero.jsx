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
          { clipPath: "inset(0 0% 100% 0%)" },
          { clipPath: "inset(0 0% 0% 0%)", duration: 1.25, ease: "power4.inOut" },
          "-=0.2"
        )
        .fromTo(
          ".tim-hero-photo",
          { scale: 1.08 },
          { scale: 1, duration: 1.4, ease: "power3.out" },
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
      className="relative w-full bg-background text-primary"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8 md:px-12 text-center pt-70 pb-30">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-light tracking-tight leading-relaxed md:leading-relaxed text-primary/80">
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
                className="mr-[0.3em] inline-block font-bold text-primary"
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

      <figure className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 w-full">
        <div className="tim-hero-photo-mask w-full overflow-hidden [clip-path:inset(0_0%_100%_0%)] motion-reduce:[clip-path:inset(0_0_0_0)]">
          <Image
            className="tim-hero-photo h-auto w-full object-cover select-none motion-reduce:scale-100"
            src="/tim/aviciiHero.png"
            alt="Tim Bergling (Avicii)"
            width={1672}
            height={941}
            sizes="100vw"
            priority
          />
        </div>
      </figure>
    </section>
  );
}
