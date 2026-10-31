"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function DecideIntro() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReduced) {
        gsap.set(".decide-intro-elem", { autoAlpha: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".decide-intro-elem",
        { autoAlpha: 0, y: 35 },
        { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      );
    },
    { scope: containerRef }
  );

  return (
    <article
      ref={containerRef}
      id="decide"
      className="flex min-h-screen w-full flex-col justify-center px-[8vw] py-20"
    >
      <div className="max-w-5xl">
        <h2 className="decide-intro-elem will-change-transform text-4xl font-bold leading-tight tracking-tight text-background md:text-6xl lg:text-7xl">
          Dar forma, probar y decidir.
        </h2>
        <p className="decide-intro-elem will-change-transform mt-4 max-w-4xl text-2xl font-light leading-tight tracking-tight text-background/80 md:mt-6 md:text-4xl lg:text-5xl">
          Decisiones visuales y narrativas para estructurar la experiencia.
        </p>
        <div className="decide-intro-elem will-change-transform mt-8 md:mt-12">
          <Link
            href="/projects/tim/bugs/prefersUser"
            className="group inline-flex items-center w-fit gap-4 text-2xl md:text-3xl font-medium border-b border-background/20 pb-2 text-background hover:text-background/80 transition-all duration-300"
          >
            Un bug inesperado en TIM
            <ArrowRight
              size={24}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
