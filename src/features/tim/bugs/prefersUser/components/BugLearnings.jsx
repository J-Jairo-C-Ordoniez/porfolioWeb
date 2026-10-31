"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Clock, BookOpen } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const learnings = [
  {
    title: "La evidencia debe preceder a la corrección.",
    desc: "Una correlación aparente con dispositivos Apple no era suficiente para atribuir el problema al navegador. Reproducir el error bajo condiciones controladas fue determinante.",
  },
  {
    title: "La accesibilidad debe formar parte de la arquitectura.",
    desc: "Una preferencia del sistema operativo no debería convertir una experiencia legible en una composición ilegible. La inclusión no puede ser un caso borde.",
  },
  {
    title: "Las animaciones no deben sostener la estructura del contenido.",
    desc: "Una experiencia narrativa puede depender de ellas para transmitir intención, ritmo y emoción. Pero el orden y la legibilidad deben mantenerse independientemente de esa capa.",
  },
];

const statusItems = [
  { label: "Causa desencadenante identificada y reproducida.", done: true },
  { label: "Mitigación temporal aplicada y comprobada.", done: true },
  { label: "Dependencia entre posicionamiento absoluto y secuencia animada identificada.", done: true },
  { label: "Refactorización propuesta para separar estructura y presentación.", done: true },
  { label: "Validación pendiente: movimiento reducido, pantallas pequeñas y escenas densas.", done: false },
];

export default function BugLearnings() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion) {
        gsap.set(".bug-learn-el", { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        ".bug-learn-el",
        { autoAlpha: 0, y: 35 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
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
    <section
      ref={containerRef}
      className="flex w-full flex-col justify-center px-[8vw] py-16 md:py-24 border-t border-background/10"
    >
      <div className="max-w-5xl">

        {/* Encabezado */}
        <div className="bug-learn-el will-change-transform mb-6 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-background/20 bg-background/5 text-xs font-semibold text-accent">
            07
          </span>
          <span className="text-xs uppercase tracking-widest text-background/60 font-medium">
            Síntesis y cierre
          </span>
        </div>

        <h2 className="bug-learn-el will-change-transform text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-background leading-tight">
          Qué cambió a partir de esta investigación
        </h2>

        <p className="bug-learn-el will-change-transform mt-6 text-base sm:text-lg md:text-xl font-light leading-relaxed text-background/80">
          El error comenzó como un problema visual difícil de reproducir. La segunda confirmación aumentó su relevancia, pero fue la posibilidad de reproducirlo bajo una condición específica lo que permitió identificar su causa real.
        </p>

        {/* Los tres aprendizajes */}
        <div className="bug-learn-el will-change-transform mt-10 flex flex-col divide-y divide-background/10">
          {learnings.map((item, index) => (
            <div key={index} className="flex gap-5 py-8 md:py-10 first:pt-0 last:pb-0">
              <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-bold mt-1">
                <BookOpen size={16} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-background mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-background/70">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Estado del caso */}
        <div className="bug-learn-el will-change-transform mt-16 rounded-2xl border border-background/15 bg-background/5 p-6 sm:p-8 md:p-10">
          <h3 className="text-xl font-bold text-background mb-6 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse inline-block" />
            Estado del caso
          </h3>
          <ul className="flex flex-col gap-4">
            {statusItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3.5">
                {item.done ? (
                  <CheckCircle2 size={20} className="text-accent mt-0.5 flex-shrink-0" />
                ) : (
                  <Clock size={20} className="text-background/40 mt-0.5 flex-shrink-0" />
                )}
                <span className={`text-sm sm:text-base font-light leading-relaxed ${item.done ? "text-background/85" : "text-background/45"}`}>
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
