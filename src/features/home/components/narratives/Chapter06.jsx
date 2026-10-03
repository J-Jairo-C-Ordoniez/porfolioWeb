"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { label: "Primero", action: "comprender." },
  { label: "Después", action: "decidir." },
  { label: "Finalmente", action: "construir." },
];

// Cap. 06 — Lo que sigue (cierre, vuelve a light mode)
export default function Chapter06() {
  const container = useRef(null);

  useGSAP(() => {
    // Fade in general
    gsap.set(".ch06-opening", { opacity: 0 });
    gsap.to(".ch06-opening", {
      opacity: 1, duration: 1.5,
      scrollTrigger: { trigger: ".ch06-opening", start: "top 80%", toggleActions: "play none none reverse" },
    });

    // Pasos enormes
    gsap.utils.toArray(".ch06-step").forEach((el, i) => {
      gsap.set(el, { opacity: 0, x: -40 });
      gsap.to(el, {
        opacity: 1, x: 0, duration: 1, delay: i * 0.3, ease: "power3.out",
        scrollTrigger: { trigger: ".ch06-steps-wrap", start: "top 70%", toggleActions: "play none none reverse" },
      });
    });

    // Párrafo final
    gsap.set(".ch06-final", { opacity: 0, y: 30 });
    gsap.to(".ch06-final", {
      opacity: 1, y: 0, duration: 1.2, ease: "power2.out",
      scrollTrigger: { trigger: ".ch06-final", start: "top 85%", toggleActions: "play none none reverse" },
    });

    // Cierre
    gsap.set(".ch06-cta", { opacity: 0, scale: 0.95 });
    gsap.to(".ch06-cta", {
      opacity: 1, scale: 1, duration: 1.5, ease: "power3.out",
      scrollTrigger: { trigger: ".ch06-cta", start: "top 90%", toggleActions: "play none none reverse" },
    });

  }, { scope: container });

  return (
    <section ref={container} className="w-full min-h-screen bg-background px-[8vw] py-32 flex flex-col justify-center">
      <div className="max-w-6xl w-full mx-auto">
        <p className="ch06-opening text-xs tracking-widest uppercase text-zinc-400 font-semibold mb-24 select-none">
          06 — Lo que sigue
        </p>

        {/* Pasos */}
        <div className="ch06-steps-wrap flex flex-col gap-6 md:gap-10 mb-32">
          {STEPS.map((step, i) => (
            <div key={i} className="ch06-step flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 border-b border-zinc-200 pb-6 md:pb-10">
              <span className="text-zinc-400 font-medium" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
                {step.label}
              </span>
              <span className="text-zinc-900 font-bold tracking-tight" style={{ fontSize: "clamp(3rem, 7vw, 7rem)", lineHeight: 0.9 }}>
                {step.action}
              </span>
            </div>
          ))}
        </div>

        <p className="ch06-final text-zinc-600 font-medium leading-relaxed max-w-4xl mb-24" style={{ fontSize: "clamp(1.2rem, 3vw, 2.2rem)" }}>
          Porque crear un producto digital no consiste únicamente en hacerlo funcionar.
          Consiste en entender <span className="text-zinc-900 font-bold">por qué debería existir</span>,
          para quién y qué puede hacer mejor.
        </p>

        <h2 className="ch06-cta font-bold text-zinc-900 tracking-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", letterSpacing: "-0.03em" }}>
          Eso es lo que<br />estoy construyendo.
        </h2>
      </div>
    </section>
  );
}
