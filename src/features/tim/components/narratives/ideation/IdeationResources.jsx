"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const resources = [
  "Fotografía, música y registros de archivo documental.",
  "Testimonios y expresiones espontáneas de la comunidad.",
  "Tipografía en movimiento y transiciones que marcan el ritmo narrativo.",
];

export default function IdeationResources() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".idea-res-item",
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
          },
        }
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
        <ul className="flex flex-col">
          {resources.map((point, index) => (
            <li
              key={index}
              className="idea-res-item will-change-transform border-b border-background/20 py-6 text-3xl font-medium leading-tight tracking-tight text-background opacity-0 first:pt-0 md:py-10 md:text-5xl lg:text-6xl"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
