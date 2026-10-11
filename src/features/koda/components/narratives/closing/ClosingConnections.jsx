"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const layers = [
  "Detrás del inventario había ventas.",
  "Detrás de las ventas había clientes.",
  "Detrás de los clientes había deudas.",
  "Detrás de los empleados había operaciones..."
];

export default function ClosingConnections() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".connection-item",
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
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
          {layers.map((layer, index) => {
            return (
              <li
                key={index}
                className={`connection-item opacity-0 will-change-transform border-b border-primary/20 py-5 md:py-8 first:pt-0 tracking-tight text-3xl md:text-5xl lg:text-6xl font-medium text-primary/80`}
              >
                {layer}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
