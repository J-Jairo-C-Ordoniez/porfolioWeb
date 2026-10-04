"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const QUESTIONS = [
  "¿Cómo debería construirlo?",
  "¿Cómo debería organizarlo para que pueda crecer?",
  "¿Realmente deberíamos construirlo así?",
];

export default function Chapter02Questions() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.set(".ch2q-question", { opacity: 0, y: 60 });

    const initInterval = setInterval(() => {
      if (typeof window !== "undefined" && window.__storyScrollTween) {
        clearInterval(initInterval);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 2,
            end: "+=2800",
            invalidateOnRefresh: true,
          },
        });

        QUESTIONS.forEach((_, i) => {
          tl
            .to(`.ch2q-question-${i}`, {
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: "power3.out",
            }, i === 0 ? "+=0" : "+=0.2")
            .to(`.ch2q-question-${i}`, {
              opacity: 0,
              y: -50,
              duration: 1,
              ease: "power2.in",
            }, "+=1.5");
        });

        ScrollTrigger.refresh();
      }
    }, 50);

    return () => clearInterval(initInterval);
  }, { scope: containerRef });

  return (
    <article
      ref={containerRef}
      className="relative w-full h-screen bg-background overflow-hidden flex"
    >
      <p className="absolute top-[8vw] left-[8vw] text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight max-w-4xl">
        Entonces aparecen las preguntas:
      </p>
      <div className="w-1/2 shrink-0" />
      <div className="relative flex items-center justify-start w-1/2 shrink-0 pr-[8vw]">
        {QUESTIONS.map((q, i) => (
          <p
            key={i}
            className={`ch2q-question ch2q-question-${i} absolute text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-primary leading-tight`}
          >
            {q}
          </p>
        ))}
      </div>
    </article>
  );
}
