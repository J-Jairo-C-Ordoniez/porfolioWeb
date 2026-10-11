"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const simplicityPoints = [
  "KODA debía ser rápido y claro.",
  "Fácil de entender.",
  "Y tan simple que registrar una venta no sea otra tarea más.",
];

export default function ExperienceClarity() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".clarity-item",
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <article
      ref={containerRef}
      className="w-full px-[8vw] py-20 flex flex-col justify-center min-h-screen"
    >
      <div className="max-w-5xl">
        <ul className="flex flex-col">
          {simplicityPoints.map((point, index) => (
            <li
              key={index}
              className="clarity-item opacity-0 will-change-transform border-b border-primary/20 py-6 md:py-10 first:pt-0 text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary leading-tight"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
