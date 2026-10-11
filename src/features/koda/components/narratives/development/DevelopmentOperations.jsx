"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const operations = [
  "Una venta debía actualizar el inventario.",
  "Una deuda debía quedar registrada.",
  "Un producto sin stock no debía seguir apareciendo como disponible...",
];

export default function DevelopmentOperations() {
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
      ".dev-ops-lead",
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" }
    ).fromTo(
      ".dev-ops-item",
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.14, ease: "power2.out" },
      "-=0.4"
    );
  }, { scope: containerRef });

  return (
    <article
      ref={containerRef}
      className="w-full px-[8vw] py-20 flex flex-col justify-center min-h-screen"
    >
      <div className="max-w-5xl">
        <p className="dev-ops-lead opacity-0 mb-8 text-2xl font-light tracking-tight text-primary/80 md:mb-12 md:text-4xl lg:text-5xl">
          KODA necesitaba conectar el negocio por dentro
        </p>

        <ul className="flex flex-col">
          {operations.map((item, index) => (
            <li
              key={index}
              className="dev-ops-item opacity-0 border-b border-primary/20 py-4 text-3xl font-medium tracking-tight text-primary sm:text-4xl md:py-6 md:text-6xl"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
