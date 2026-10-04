"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Chapter02() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Usamos initInterval igual que en StoryLine y LearningToBuild para que
    // el cálculo de posición sea preciso después del pin horizontal.
    const initInterval = setInterval(() => {
      if (typeof window !== "undefined" && window.__storyScrollTween) {
        clearInterval(initInterval);

        // Texto 1: entra desde abajo con retraso 0
        gsap.from(".ch2-line-1", {
          opacity: 0,
          y: 100,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });

        // Texto 2: entra desde abajo, levemente después
        gsap.from(".ch2-line-2", {
          opacity: 0,
          y: 120,
          duration: 1.2,
          delay: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });

        ScrollTrigger.refresh();
      }
    }, 50);

    return () => clearInterval(initInterval);
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full bg-background flex flex-col justify-center items-end px-20 pb-20"
    >
      <p className="ch2-line-1 text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-right w-2/3 leading-tight mb-8">
        con ello comencé a descubrir que una solución podía funcionar perfectamente…
      </p>

      <p className="ch2-line-2 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-right w-2/3 leading-tight">
        y aun así no ser una buena solución.
      </p>
    </section>
  );
}
