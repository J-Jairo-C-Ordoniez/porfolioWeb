"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ClosingHero() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      ".closing-hero-photo-mask",
      { clipPath: "inset(0 4% 10% 4%)", autoAlpha: 0, scale: 0.96 },
      {
        clipPath: "inset(0 0% 0% 0%)",
        autoAlpha: 1,
        scale: 1,
        duration: 1.2,
        ease: "power4.inOut",
      }
    ).fromTo(
      ".closing-hero-text",
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );
  }, { scope: containerRef });

  return (
    <article
      ref={containerRef}
      className="w-full px-[8vw] py-16 md:py-24 flex flex-col justify-center min-h-screen"
    >
      <div className="mx-auto w-full max-w-7xl">
        <figure className="relative w-full aspect-[16/10] max-h-[70vh] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-primary/5 border border-primary/10">
          <div className="closing-hero-photo-mask relative h-full w-full">
            <Image
              src="/koda/closingHero.png"
              alt="Persona operando KODA en su laptop"
              fill
              className="object-cover"
              priority
            />
          </div>
        </figure>

        <div className="mt-8 md:mt-12 max-w-4xl">
          <p className="closing-hero-text opacity-0 will-change-transform text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-primary/80 leading-relaxed">
            <strong className="font-bold text-primary block mb-2 md:mb-3">
              KODA no nació para reemplazar una libreta.
            </strong>
            Nació porque una forma de trabajar que antes era suficiente empezó a quedarse pequeña.
          </p>
        </div>
      </div>
    </article>
  );
}
