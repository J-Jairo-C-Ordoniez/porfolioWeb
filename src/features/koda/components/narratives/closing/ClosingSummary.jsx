"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ClosingSummary() {
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
      ".final-text",
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" }
    ).fromTo(
      ".final-cta",
      { autoAlpha: 0, scale: 0.96 },
      { autoAlpha: 1, scale: 1, duration: 0.7, ease: "power2.out" },
      "-=0.4"
    );
  }, { scope: containerRef });

  return (
    <article
      ref={containerRef}
      className="w-full px-[8vw] py-24 flex flex-col justify-center min-h-screen"
    >
      <div className="w-full flex justify-end">
        <div className="w-full lg:w-3/4 xl:w-2/3 flex flex-col gap-8 md:gap-12">
          <p className="final-text opacity-0 will-change-transform text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-primary leading-tight">
            Porque el objetivo fue que el negocio fuera más entendible.
          </p>

          <div className="final-cta opacity-0 will-change-transform flex justify-end pt-6 md:pt-10">
            <a
              href="https://kodaebon.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 text-2xl md:text-4xl lg:text-5xl font-medium text-primary pb-3 border-b-2 border-primary/30 hover:border-primary transition-all duration-300 w-max"
            >
              Explorar KODA
              <ArrowUpRight
                size={36}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
