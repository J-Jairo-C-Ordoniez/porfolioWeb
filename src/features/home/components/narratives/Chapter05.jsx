"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    name: "BloodyYue",
    desc: "Sistemas de contenido y experiencias visuales para un artista.",
    href: "/docs/bloodyyue",
  },
  {
    name: "Focusfy",
    desc: "Interacción, productividad y experiencia visual.",
    href: "#",
  },
  {
    name: "TIM",
    desc: "Explorar interacción, emoción y comunidad.",
    href: "#",
  },
];

// Cap. 05 — Construir con sentido (vertical, grandes contrastes y tipografía)
export default function Chapter05() {
  const container = useRef(null);

  useGSAP(() => {
    // Reveal de texto enorme "Y después..."
    gsap.set(".ch05-headline", { clipPath: "inset(100% 0 0 0)" });
    gsap.to(".ch05-headline", {
      clipPath: "inset(0% 0 0 0)",
      duration: 1.4,
      ease: "power4.out",
      scrollTrigger: { trigger: ".ch05-headline", start: "top 80%", toggleActions: "play none none reverse" },
    });

    // Subtítulo tech
    gsap.set(".ch05-tech", { opacity: 0, y: 30 });
    gsap.to(".ch05-tech", {
      opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.3,
      scrollTrigger: { trigger: ".ch05-tech", start: "top 85%", toggleActions: "play none none reverse" },
    });

    // Filosofía GSAP
    gsap.set(".ch05-gsap-wrap", { opacity: 0, scale: 0.95 });
    gsap.to(".ch05-gsap-wrap", {
      opacity: 1, scale: 1, duration: 1.2, ease: "power3.out",
      scrollTrigger: { trigger: ".ch05-gsap-wrap", start: "top 75%", toggleActions: "play none none reverse" },
    });

    // Proyectos escalonados
    gsap.utils.toArray(".ch05-project").forEach((el, i) => {
      gsap.set(el, { opacity: 0, y: 40 });
      gsap.to(el, {
        opacity: 1, y: 0, duration: 0.8, delay: i * 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".ch05-projects-wrap", start: "top 80%", toggleActions: "play none none reverse" },
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="w-full min-h-screen bg-zinc-900 text-zinc-50 px-[8vw] py-32 flex flex-col justify-center relative">
      <div className="max-w-5xl w-full mx-auto">
        <p className="text-xs tracking-widest uppercase text-zinc-500 font-semibold mb-12 select-none">
          05 — Construir
        </p>

        <div className="overflow-hidden mb-8">
          <h2
            className="ch05-headline font-bold leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)", letterSpacing: "-0.04em" }}
          >
            Y después de<br />todo eso,<br />construyo.
          </h2>
        </div>

        <p className="ch05-tech text-zinc-400 font-medium mb-32 max-w-2xl" style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>
          La tecnología no es el punto de partida.<br />
          Es una herramienta dentro de una cadena de decisiones.
        </p>

        {/* Filosofía Motion destacada */}
        <div className="ch05-gsap-wrap bg-zinc-800 p-8 md:p-16 rounded-2xl mb-32 max-w-4xl">
          <p className="text-zinc-400 text-lg md:text-2xl font-medium mb-4 italic">
            Incluso con GSAP, la pregunta no es &ldquo;¿qué animación puedo hacer?&rdquo;
          </p>
          <p className="text-zinc-50 font-bold text-2xl md:text-5xl leading-tight mb-8">
            Sino: ¿qué debería sentir el usuario en este momento?
          </p>
          <p className="text-zinc-300 font-medium" style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}>
            No quiero animar elementos. Quiero animar la atención.
          </p>
        </div>

        {/* Proyectos */}
        <div className="ch05-projects-wrap grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <a
              key={i}
              href={project.href}
              className="ch05-project group block bg-zinc-800/50 hover:bg-zinc-800 p-8 rounded-xl transition-colors duration-300 border border-zinc-700 hover:border-zinc-500"
            >
              <h4 className="text-xl font-bold text-zinc-100 mb-4">{project.name}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">{project.desc}</p>
              <span className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-zinc-300 group-hover:text-white transition-colors">
                Ver proyecto
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
