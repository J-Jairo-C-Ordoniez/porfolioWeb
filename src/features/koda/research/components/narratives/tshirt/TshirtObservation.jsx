"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const observations = [
  "Entré a una tienda por una camiseta que me gustaba.",
  "Me la probé, la compré.",
  "Y pregunté cómo funcionaba lo que yo no podía ver como cliente.",
  "El inventario y las ventas no parecían conectados.",
  "Había un computador, pero no era parte activa de la operación.",
];

export default function TshirtObservation() {
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
        ".tshirt-obs-lead",
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" }
      ).fromTo(
        ".tshirt-obs-item",
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out" },
        "-=0.4"
      );
    },
    { scope: containerRef }
  );

  return (
    <article
      ref={containerRef}
      className="w-full px-[8vw] py-20 flex flex-col justify-center min-h-screen"
    >
      <div className="max-w-5xl">
        <p className="tshirt-obs-lead opacity-0 mb-8 text-2xl font-light tracking-tight text-primary/80 md:mb-12 md:text-4xl lg:text-5xl">
          Una experiencia cotidiana:
        </p>

        <ul className="flex flex-col">
          {observations.map((item, index) => (
            <li
              key={index}
              className="tshirt-obs-item opacity-0 border-b border-primary/20 py-4 text-3xl font-medium tracking-tight text-primary/80 sm:text-4xl md:py-6 md:text-6xl"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
