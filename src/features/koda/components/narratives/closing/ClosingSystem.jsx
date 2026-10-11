"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const pieces = [
  "Inventario.",
  "Ventas.",
  "Clientes.",
  "Empleados.",
  "Deudas.",
  "Catálogo.",
];

export default function ClosingSystem() {
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
      ".system-lead",
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" }
    ).fromTo(
      ".system-item",
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
      },
      "-=0.4"
    );
  }, { scope: containerRef });

  return (
    <article
      ref={containerRef}
      className="w-full px-[8vw] py-20 flex flex-col justify-center min-h-screen"
    >
      <div className="max-w-5xl">
        <p className="system-lead opacity-0 will-change-transform text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-primary/80 leading-tight mb-8 md:mb-12">
          KODA conecta esas piezas en un mismo sistema.
        </p>

        <ul className="flex flex-col">
          {pieces.map((piece, index) => (
            <li
              key={index}
              className="system-item opacity-0 will-change-transform border-b border-primary/20 py-4 md:py-6 first:pt-0 text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary"
            >
              {piece}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
