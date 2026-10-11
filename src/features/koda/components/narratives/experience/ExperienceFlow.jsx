"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ExperienceFlow() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(".flow-lead",
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(".flow-statement",
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" },
      "-=0.4"
    );
  }, { scope: containerRef });

  return (
    <article
      ref={containerRef}
      className="w-full px-[8vw] py-20 flex flex-col justify-center min-h-screen"
    >
      <div className="max-w-5xl">
        <p className="flow-lead opacity-0 will-change-transform text-2xl font-light tracking-tight leading-tight text-primary/80 md:text-4xl lg:text-5xl mb-6 md:mb-10">
          Incluso el flujo principal de venta debía resolverse en pocos pasos.
        </p>

        <h3 className="flow-statement opacity-0 will-change-transform text-2xl font-bold tracking-tight leading-tight text-primary md:text-4xl lg:text-5xl">
          La interfaz tenía que adaptarse a la forma de trabajar del negocio.
        </h3>
      </div>
    </article>
  );
}
