"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layout, Maximize2, FileText, SlidersHorizontal, Accessibility } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const technicalDecisions = [
  {
    title: "Estructura del documento",
    desc: "Reducir el uso de position: absolute para bloques de contenido que deben mantener un orden de lectura lógico en el flujo natural del DOM.",
    icon: Layout,
  },
  {
    title: "Altura flexible (min-height: 100svh)",
    desc: "Asegurar que cada escena ocupe al menos la pantalla completa, pero permitiendo crecer si el volumen de texto o la pantalla pequeña lo demandan.",
    icon: Maximize2,
  },
  {
    title: "Secciones con mucho texto",
    desc: "En vistas con scroll horizontal o denso contenido, la legibilidad y el reflujo de texto prevalecen sobre cualquier composición rígida original.",
    icon: FileText,
  },
  {
    title: "Estados de animación desacoplados",
    desc: "Revisar pin, scrub, opacity y la limpieza de timelines: desactivar una animación nunca debe dejar un elemento con opacity: 0 o fuera de pantalla.",
    icon: SlidersHorizontal,
  },
  {
    title: "Diseño inclusivo de movimiento reducido",
    desc: "Ofrecer una experiencia editorial refinada y natural que respete la salud y comodidad visual del usuario sin degradar la calidad del relato.",
    icon: Accessibility,
  },
];

export default function BugRefactorDecisions() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion) {
        gsap.set(".bug-refactor-el", { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        ".bug-refactor-el",
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
        <div className="bug-refactor-el will-change-transform mb-6 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-background/20 bg-background/5 text-xs font-semibold text-accent">
            06
          </span>
          <span className="text-xs uppercase tracking-widest text-background/60 font-medium">
            Ingeniería de software
          </span>
        </div>

        <h2 className="bug-refactor-el will-change-transform text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-background leading-tight">
          Decisiones técnicas para la refactorización
        </h2>

        <p className="bug-refactor-el will-change-transform mt-6 text-base sm:text-lg md:text-xl font-light leading-relaxed text-background/80">
          La propuesta requirió repensar la arquitectura desde sus cimientos, no simplemente aplicar un parche CSS superficial:
        </p>

        {/* Grid de 5 pilares técnicos */}
        <div className="bug-refactor-el will-change-transform mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalDecisions.map((decision, index) => (
            <div
              key={index}
              className="rounded-2xl border border-background/10 bg-background/5 p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="text-accent mb-4">
                  <decision.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-background mb-3">{decision.title}</h3>
                <p className="text-sm font-light leading-relaxed text-background/70">{decision.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
