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
    // Estado inicial de las preguntas
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

        // Cada pregunta entra, se queda y sale
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
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-background overflow-hidden flex"
    >
      {/* Top-left: texto contextual — una o dos líneas máximo */}
      <p className="absolute top-12 left-20 text-4xl md:text-5xl font-medium tracking-tight text-primary/70 leading-snug max-w-lg">
        Entonces aparecen las preguntas:
      </p>

      {/* Izquierda: espacio vacío que balancea el peso visual */}
      <div className="w-1/2 shrink-0" />

      {/* Derecha: preguntas rotando — estilo ch2-line-2 */}
      <div className="relative flex items-center justify-start w-1/2 shrink-0 pr-20">
        {QUESTIONS.map((q, i) => (
          <p
            key={i}
            className={`ch2q-question ch2q-question-${i} absolute text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-primary leading-tight`}
          >
            {q}
          </p>
        ))}
      </div>
    </div>
  );
}
