"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react"

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function GrowthConclusion() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(".conclusion-text",
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.2, ease: "power3.out" }
    )
      .fromTo(".conclusion-link",
        { autoAlpha: 0, x: -20 },
        { autoAlpha: 1, x: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );
  }, { scope: containerRef });

  return (
    <article
      ref={containerRef}
      className="w-full px-[8vw] py-24 min-h-screen flex justify-end"
    >
      <div className="w-3/4 flex flex-col justify-center">
        <p className="conclusion-text opacity-0 max-w-5xl text-primary/80 text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
          El negocio seguía funcionando.
        </p>

        <p className="conclusion-text opacity-0 mt-8 max-w-5xl text-primary text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
          Pero cada vez era más difícil saber exactamente qué estaba pasando.
        </p>

        <div className="flex w-full justify-end">
          <Link
            href="/projects/koda/evidence/research"
            className="group inline-flex items-center w-fit gap-4 mt-24 text-2xl md:text-3xl font-medium border-b border-primary/20 pb-2 text-primary hover:text-primary/80 transition-all"
          >
            Ver la investigación
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </article>
  );
}
