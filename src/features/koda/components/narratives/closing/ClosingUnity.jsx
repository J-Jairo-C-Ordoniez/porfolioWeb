"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ClosingUnity() {
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
      ".unity-lead",
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" }
    ).fromTo(
      ".unity-statement",
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, duration: 0.9, ease: "power4.out" },
      "-=0.4"
    );
  }, { scope: containerRef });

  return (
    <article
      ref={containerRef}
      className="w-full px-[8vw] py-20 flex flex-col justify-center min-h-screen"
    >
      <div className="max-w-6xl">
        <p className="unity-lead opacity-0 will-change-transform text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-primary/80 leading-tight mb-4 md:mb-6">
          Todo conectado.
        </p>
        <h2 className="unity-statement opacity-0 will-change-transform text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight text-primary leading-tight">
          Todo dentro del mismo lugar.
        </h2>
      </div>
    </article>
  );
}
