"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

// Cap. 04 — HORIZONTAL PIN (filosofía del minimalismo)
const PANELS = [
  {
    label: "04 — Decidir",
    headline: "Comprender\ncambia las decisiones.",
    sub: null,
  },
  {
    label: null,
    headline: "El minimalismo no consiste\nen usar menos elementos.",
    sub: "Consiste en reducir el ruido.",
    accent: true,
  },
  {
    label: null,
    headline: "Hacer más evidente\nlo importante.",
    sub: "Que el usuario no tenga que luchar contra la interfaz.",
    accent: false,
  },
];

const UX_TOOLS = ["Investigación.", "Arquitectura.", "Flujos.", "Wireframes.", "Prototipos.", "Interfaces."];

export default function Chapter04() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray(".ch04-panel");
    const totalWidth = panels.reduce((acc, el) => acc + el.offsetWidth, 0);
    const scrollDistance = totalWidth - window.innerWidth;

    const scrollTween = gsap.to(trackRef.current, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + scrollDistance,
        invalidateOnRefresh: true,
      },
    });

    // Animar contenido de cada panel cuando entra en view
    panels.forEach((panel) => {
      const headlineEl = panel.querySelector(".ch04-headline");
      const subEl = panel.querySelector(".ch04-sub");
      const labelEl = panel.querySelector(".ch04-plabel");

      if (labelEl) {
        gsap.set(labelEl, { opacity: 0 });
        gsap.to(labelEl, {
          opacity: 1, duration: 0.8,
          scrollTrigger: { trigger: panel, containerAnimation: scrollTween, start: "left 80%", toggleActions: "play none none reverse" },
        });
      }

      if (headlineEl) {
        gsap.set(headlineEl, { clipPath: "inset(100% 0 0 0)" });
        gsap.to(headlineEl, {
          clipPath: "inset(0% 0 0 0)", duration: 1.4, ease: "power4.out",
          scrollTrigger: { trigger: panel, containerAnimation: scrollTween, start: "left 70%", toggleActions: "play none none reverse" },
        });
      }

      if (subEl) {
        gsap.set(subEl, { opacity: 0, y: 20 });
        gsap.to(subEl, {
          opacity: 1, y: 0, duration: 1, ease: "power2.out",
          scrollTrigger: { trigger: panel, containerAnimation: scrollTween, start: "left 55%", toggleActions: "play none none reverse" },
        });
      }

      // Tools list (last panel)
      const tools = panel.querySelectorAll(".ch04-tool");
      if (tools.length > 0) {
        gsap.set(tools, { opacity: 0, x: -20 });
        tools.forEach((tool, j) => {
          gsap.to(tool, {
            opacity: 1, x: 0, duration: 0.5, delay: j * 0.08, ease: "power3.out",
            scrollTrigger: { trigger: panel, containerAnimation: scrollTween, start: "left 60%", toggleActions: "play none none reverse" },
          });
        });
      }

      // Dreamlabs
      const dreamlabs = panel.querySelector(".ch04-dreamlabs");
      if (dreamlabs) {
        gsap.set(dreamlabs, { opacity: 0, y: 30 });
        gsap.to(dreamlabs, {
          opacity: 1, y: 0, duration: 1.1, ease: "power2.out",
          scrollTrigger: { trigger: panel, containerAnimation: scrollTween, start: "left 50%", toggleActions: "play none none reverse" },
        });
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full h-screen bg-background overflow-hidden">
      <div ref={trackRef} className="flex h-screen will-change-transform" style={{ width: "max-content" }}>

        {/* Panels de filosofía */}
        {PANELS.map((panel, i) => (
          <div
            key={i}
            className={`ch04-panel w-screen h-screen flex-shrink-0 flex flex-col justify-center px-[8vw] ${i > 0 ? "border-l border-zinc-100" : ""}`}
          >
            {panel.label && (
              <p className="ch04-plabel text-xs tracking-widest uppercase text-zinc-400 font-semibold mb-12 select-none">
                {panel.label}
              </p>
            )}
            <div className="overflow-hidden">
              <h2
                className="ch04-headline font-bold text-zinc-900 whitespace-pre-line"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 6.5rem)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                }}
              >
                {panel.headline}
              </h2>
            </div>
            {panel.sub && (
              <p
                className={`ch04-sub mt-8 ${panel.accent ? "text-zinc-900 font-bold" : "text-zinc-500"}`}
                style={{ fontSize: "clamp(1rem, 2.5vw, 2rem)" }}
              >
                {panel.sub}
              </p>
            )}
          </div>
        ))}

        {/* Panel final: herramientas + DreamLabs */}
        <div className="ch04-panel w-[90vw] h-screen flex-shrink-0 flex flex-col justify-center px-[8vw] border-l border-zinc-100">
          <div className="flex flex-col gap-3 mb-12 pl-6 border-l-2 border-zinc-200">
            {UX_TOOLS.map((tool, i) => (
              <span key={i} className="ch04-tool text-zinc-700 font-medium" style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.2rem)" }}>
                {tool}
              </span>
            ))}
            <span className="ch04-tool text-zinc-400 text-sm italic mt-2">
              No como pasos. Como herramientas para mejores decisiones.
            </span>
          </div>

          <div className="ch04-dreamlabs border border-zinc-200 p-8 max-w-lg">
            <p className="text-xs tracking-widest uppercase text-zinc-400 font-semibold mb-4">Proyecto</p>
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">DreamLabsPC</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Antes de diseñar una pantalla, quise entender el negocio.
              Descubrí que un PC podía ser mucho más que hardware.
              <br /><span className="text-zinc-700 font-medium">Rendimiento. Personalización. Estética. Identidad.</span>
            </p>
            <a href="#" className="group flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-zinc-900">
              Explorar DreamLabs <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
