"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const LIST_ITEMS = [
  "Cómo se estructura.",
  "Cómo se utiliza.",
  "Qué necesita una persona.",
  "Qué problema intenta resolver un negocio.",
];

export default function Chapter02Insight() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const initInterval = setInterval(() => {
      if (typeof window !== "undefined" && window.__storyScrollTween) {
        clearInterval(initInterval);

        // Pequeño timeout adicional para garantizar que los pines anteriores se hayan refrescado
        setTimeout(() => {
          // 1. Lead paragraph — entrada más pronunciada
          gsap.fromTo(".ch2i-lead",
            { opacity: 0, y: 120 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".ch2i-lead",
                start: "top 85%", // Dispara un poco más abajo para que se note
                toggleActions: "play none none reverse",
              },
            }
          );

          // 2. Lista — slide lateral más evidente
          gsap.fromTo(".ch2i-item",
            { opacity: 0, x: -80 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power3.out",
              stagger: 0.15,
              scrollTrigger: {
                trigger: ".ch2i-list",
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          );

          ScrollTrigger.refresh();
        }, 100);
      }
    }, 50);

    return () => clearInterval(initInterval);
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full bg-background text-primary overflow-hidden">

      {/* FRAME 1 — Lead + Lista */}
      <section className="h-screen w-full flex flex-col justify-center px-20 gap-16">
        {/* Lead */}
        <p className="ch2i-lead text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary/70 leading-tight max-w-4xl">
          Empecé a interesarme no solo por cómo funcionaba un producto, sino por las{" "}
          <span className="text-primary font-semibold">decisiones que había detrás de él.</span>
        </p>

        {/* Lista con líneas separadoras */}
        <div className="ch2i-list flex flex-col w-full max-w-4xl ml-auto">
          {LIST_ITEMS.map((item, i) => (
            <p
              key={i}
              className="ch2i-item text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-primary border-b border-primary/20 py-6 last:border-b-0"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

    </div>
  );
}
