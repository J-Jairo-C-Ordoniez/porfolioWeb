"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const relations = [
  "Tim Bergling en el centro.",
  "Avicii como su identidad artística.",
  "El proceso creativo y la música.",
  "Los recuerdos compartidos en vivo.",
  "Y una comunidad que mantiene vivo su legado.",
];

export default function DefinitionFragments() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".def-frag-lead",
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" }
      ).fromTo(
        ".def-frag-item",
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" },
        "-=0.4"
      );
    },
    { scope: containerRef }
  );

  return (
    <article
      ref={containerRef}
      className="flex min-h-screen w-full flex-col justify-center px-[8vw] py-20"
    >
      <div className="max-w-5xl">
        <p className="def-frag-lead will-change-transform mb-[3vw] block text-xl font-light leading-relaxed tracking-tight text-background/80 opacity-0 md:text-2xl lg:text-4xl">
          Y los elementos de su historia empezaron a conectarse:
        </p>

        <ul className="flex flex-col">
          {relations.map((item, index) => (
            <li
              key={index}
              className="def-frag-item will-change-transform border-b border-background/20 py-5 text-3xl font-medium tracking-tight text-background opacity-0 first:pt-0 md:py-8 md:text-5xl lg:text-6xl"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
