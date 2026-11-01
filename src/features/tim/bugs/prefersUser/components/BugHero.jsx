"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function BugHero() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) {
        gsap.set(".bug-hero-title, .bug-hero-subtitle", { autoAlpha: 1, y: 0 });
        gsap.set(".bug-hero-photo-mask", { clipPath: "inset(0 0% 0% 0%)" });
        gsap.set(".bug-hero-photo", { scale: 1 });
        return undefined;
      }

      const timeline = gsap.timeline();

      timeline
        .fromTo(
          ".bug-hero-title",
          { autoAlpha: 0, y: 64, scale: 0.96 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 1.1, ease: "power4.out" }
        )
        .fromTo(
          ".bug-hero-subtitle",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" },
          "-=0.2"
        )
        .fromTo(
          ".bug-hero-photo-mask",
          { clipPath: "inset(0 5% 100% 5%)" },
          { clipPath: "inset(0 0% 0% 0%)", duration: 1.2, ease: "power4.inOut" },
          "-=0.05"
        )
        .fromTo(
          ".bug-hero-photo",
          { scale: 1.1 },
          { scale: 1, duration: 1.35, ease: "power3.out" },
          "<"
        );

      return undefined;
    },
    { scope: containerRef }
  );

  return (
    <header
      ref={containerRef}
      className="bg-background pb-20 pt-25 text-primary lg:pt-50"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="bug-hero-title mb-6 text-4xl font-bold tracking-tight text-primary opacity-0 will-change-transform md:text-5xl lg:text-7xl">
            Cuando la animación falla.
          </h1>

          <div className="mx-auto mt-6 max-w-5xl md:mt-5">
            <p className="block text-2xl font-light leading-relaxed tracking-tight text-primary/80 md:text-4xl lg:text-5xl">
              <strong className="bug-hero-subtitle mr-[0.3em] inline-block font-bold text-primary opacity-0 will-change-transform">
                TIM.
              </strong>
              <span className="bug-hero-subtitle inline opacity-0 will-change-transform">
                Depuración, accesibilidad y diseño de experiencias narrativas en la web.
              </span>
            </p>
          </div>
        </div>

        <figure className="mt-10 md:mt-14">
          <div className="bug-hero-photo-mask overflow-hidden rounded-2xl bg-primary/5 [clip-path:inset(0_5%_100%_5%)] motion-reduce:[clip-path:inset(0_0_0_0)] md:rounded-[2rem]">
            <Image
              className="bug-hero-photo h-auto w-full object-cover motion-reduce:scale-100"
              src="/tim/bugPreferences.png"
              alt="Caso de estudio de animación y arquitectura en TIM"
              width={1254}
              height={836}
              sizes="(max-width: 768px) 100vw, (max-width: 1440px) 90vw, 1408px"
              priority
            />
          </div>
        </figure>
      </div>
    </header>
  );
}
