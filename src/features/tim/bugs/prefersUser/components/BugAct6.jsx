"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const learnings = [
  {
    title: "La evidencia debe preceder a la corrección.",
    body: "Una correlación aparente con dispositivos Apple no era suficiente para atribuir el problema al navegador. Reproducir antes de conjeturar es la única regla que no tiene excepciones.",
  },
  {
    title: "La accesibilidad no es un interruptor binario.",
    body: "Respetar prefers-reduced-motion no consiste en cortar en seco una secuencia de GSAP y dejar el DOM desprotegido. Exige concebir desde el principio una experiencia estática intencional, legible y con la misma dignidad visual.",
  },
  {
    title: "Las animaciones no deben sostener la estructura del contenido.",
    body: "Una experiencia narrativa puede depender de ellas para transmitir intención, ritmo y emoción, pero el orden y la legibilidad deben mantenerse independientemente de esa capa.",
  },
];

const statusItems = [
  "Causa desencadenante identificada y reproducida.",
  "Mitigación temporal aplicada y comprobada.",
  "Dependencia entre posicionamiento absoluto y secuencia animada identificada.",
  "Refactorización propuesta para separar la estructura del contenido de su presentación.",
  "Validación pendiente de la implementación definitiva, incluyendo movimiento reducido, pantallas pequeñas y escenas con mucho texto.",
];

export default function BugAct6() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) {
        gsap.set(".act6-elem", { autoAlpha: 1, y: 0, scaleX: 1 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".act6-number",
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" }
      )
        .fromTo(
          ".act6-line",
          { scaleX: 0, transformOrigin: "left" },
          { scaleX: 1, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(
          ".act6-content",
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <article
      ref={containerRef}
      className="flex min-h-screen w-full flex-col justify-center px-[8vw] py-24 md:py-32"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-3">
          <span className="act6-number act6-elem will-change-transform block font-bold leading-none tracking-tighter text-primary/10 text-8xl md:text-9xl lg:text-[11rem] select-none opacity-0">
            06
          </span>
        </div>

        <div className="lg:col-span-9">
          <div className="act6-line act6-elem will-change-transform h-[1.5px] w-full bg-primary/20" />

          <div className="pt-8">
            <p className="act6-content act6-elem will-change-transform text-xl font-light leading-relaxed tracking-tight text-primary/70 opacity-0 md:text-2xl lg:text-3xl mb-10">
              El error comenzó como un problema visual difícil de reproducir. La segunda confirmación aumentó la relevancia del reporte, pero fue la posibilidad de reproducirlo bajo una condición específica la que permitió identificar su causa.
            </p>

            <div className="act6-content act6-elem opacity-0 flex flex-col gap-8 md:gap-10 mb-12">
              {learnings.map((l, i) => (
                <div key={i} className="border-b border-primary/10 pb-8 last:border-b-0">
                  <p className="text-lg font-semibold tracking-tight text-primary md:text-xl lg:text-2xl mb-2">
                    {l.title}
                  </p>
                  <p className="text-lg font-light leading-relaxed tracking-tight text-primary/70 md:text-xl lg:text-2xl">
                    {l.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="act6-content act6-elem opacity-0 border-l-2 border-primary/20 pl-6 md:pl-8">
              <p className="font-mono text-xs uppercase tracking-widest text-primary/40 mb-4">Estado del caso</p>
              <ul className="flex flex-col gap-3">
                {statusItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base font-light leading-relaxed text-primary/60 md:text-lg lg:text-xl">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
