"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function GrowthFragments() {
  const containerRef = useRef(null);

  const sources = [
    "Una cosa para las ventas.",
    "Otra para el inventario.",
    "Otra para los fiados.",
    "Y las conversaciones... en WhatsApp."
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(".fragment-lead",
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(".fragment-item",
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" },
        "-=0.4"
      );
  }, { scope: containerRef });

  return (
    <article
      ref={containerRef}
      className="w-full px-[8vw] py-20 flex flex-col justify-center min-h-screen"
    >
      <div className="max-w-5xl">
        <p className="fragment-lead opacity-0 text-primary/80 block text-xl md:text-2xl lg:text-4xl font-light tracking-tight leading-relaxed mb-[3vw]">
          Y la información empezó a vivir en distintos lugares.
        </p>

        <ul className="flex flex-col">
          {sources.map((source, index) => (
            <li
              key={index}
              className="fragment-item opacity-0 will-change-transform border-b border-primary/20 py-5 md:py-8 first:pt-0 text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary"
            >
              {source}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
