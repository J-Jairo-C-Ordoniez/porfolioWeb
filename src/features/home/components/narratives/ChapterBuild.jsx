"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, ArrowDown } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

function Words({ children, wordClass = "cb-word", className = "", style }) {
  return (
    <span className={className} style={style}>
      {String(children).split(" ").map((word, i) => (
        <span key={i} className={`${wordClass} inline-block mr-[0.28em]`}>{word}</span>
      ))}
    </span>
  );
}

const BUILD_STEPS = [
  "Frontend.",
  "Arquitectura.",
  "Interacción.",
  "Motion.",
  "Tecnología."
];

const CHAIN = [
  "Contexto",
  "Investigación",
  "Sistema",
  "Personas",
  "Problema",
  "Experiencia",
  "Interfaz",
  "Tecnología"
];

export default function ChapterBuild() {
  const containerRef = useRef(null);
  const f1 = useRef(null);
  const f2 = useRef(null);
  const f3 = useRef(null);
  const f4 = useRef(null);
  const f5 = useRef(null);

  useGSAP(() => {
    const initInterval = setInterval(() => {
      if (typeof window !== "undefined" && window.__storyScrollTween) {
        clearInterval(initInterval);

        const frames = [f1, f2, f3, f4, f5].map(r => r.current);
        gsap.set(frames, { autoAlpha: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            start: "top top",
            end: "+=5000",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

        const S = 1 / 5;

        // ── FRAME 1 ────────────────────────────────────────────
        tl.to(f1.current, { autoAlpha: 1, duration: 0.01 }, 0.00)
          .fromTo(".cb-f1-title",
            { clipPath: "inset(100% 0 0 0)" },
            { clipPath: "inset(0% 0 0 0)", ease: "none", duration: 0.07 }, 0.01)
          .fromTo(".cb-step",
            { opacity: 0, x: 40 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01, stagger: 0.015 }, 0.10)
          .to(f1.current, { autoAlpha: 0, duration: 0.015 }, 0.185)

        // ── FRAME 2 ───────────────────────────────────────
          .to(f2.current, { autoAlpha: 1, duration: 0.01 }, 0.20)
          .fromTo(".cb-f2-line1 .cb-word",
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, ease: "none", duration: 0.012, stagger: 0.012 }, 0.21)
          .fromTo(".cb-f2-line2 .cb-word",
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, ease: "none", duration: 0.012, stagger: 0.012 }, 0.28)
          .to(f2.current, { autoAlpha: 0, duration: 0.015 }, 0.385)

        // ── FRAME 3: Cadena ─────────────────────────────────────────
          .to(f3.current, { autoAlpha: 1, duration: 0.01 }, 0.40)
          .fromTo(".cb-chain-item",
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.015 }, 0.41)
          .to(f3.current, { autoAlpha: 0, duration: 0.015 }, 0.585)

        // ── FRAME 4: Focusfy ─────────────────────────────────────────────
          .to(f4.current, { autoAlpha: 1, duration: 0.01 }, 0.60)
          .fromTo(".cb-f4-text .cb-word",
            { opacity: 0, y: 55 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.009 }, 0.61)
          .fromTo(".cb-cta-1",
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01 }, 0.73)
          .to(f4.current, { autoAlpha: 0, duration: 0.015 }, 0.785)

        // ── FRAME 5: TIM ───────────────────────────────────────────
          .to(f5.current, { autoAlpha: 1, duration: 0.01 }, 0.80)
          .fromTo(".cb-f5-line1 .cb-word",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.009 }, 0.81)
          .fromTo(".cb-f5-line2 .cb-word",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.009 }, 0.86)
          .fromTo(".cb-cta-2",
            { opacity: 0, x: 30 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01 }, 0.95);

        ScrollTrigger.refresh();
      }
    }, 100);
  }, { scope: containerRef });

  const fs      = "clamp(1.2rem, 2.2vw, 1.7rem)";
  const fsLg    = "clamp(1.5rem, 3vw, 2.6rem)";
  const fsXl    = "clamp(2rem, 5vw, 4.5rem)";

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-background text-primary"
    >
      {/* FRAME 1 — Izquierda */}
      <div ref={f1} className="absolute inset-0 flex flex-col justify-center px-[8vw]">
        <div className="overflow-hidden">
          <h2 className="cb-f1-title font-bold tracking-tighter leading-tight max-w-2xl"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}>
            Después de<br />todo eso, construyo.
          </h2>
        </div>
        <ul className="flex flex-col gap-4 mt-12">
          {BUILD_STEPS.map((step, i) => (
            <li key={i} className="cb-step text-primary/60 font-medium"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)" }}>
              {step}
            </li>
          ))}
        </ul>
      </div>

      {/* FRAME 2 — Izquierda */}
      <div ref={f2} className="absolute inset-0 flex flex-col justify-center px-[8vw]">
        <p className="cb-f2-line1 text-primary font-bold leading-snug max-w-2xl mb-8" style={{ fontSize: fsXl }}>
          <Words>La tecnología no es el punto de partida.</Words>
        </p>
        <p className="cb-f2-line2 text-primary/60 font-medium leading-snug max-w-2xl" style={{ fontSize: fsLg }}>
          <Words>Es una herramienta dentro de una cadena de decisiones.</Words>
        </p>
      </div>

      {/* FRAME 3 — Derecha (Cadena) */}
      <div ref={f3} className="absolute inset-0 flex flex-col justify-center items-end px-[8vw]">
        <ul className="flex flex-col items-center gap-2 mr-[10vw]">
          {CHAIN.map((word, i) => (
            <li key={i} className="cb-chain-item flex flex-col items-center">
              <span className="font-bold tracking-tight text-primary/80" style={{ fontSize: "clamp(1.1rem, 2.2vw, 2rem)" }}>
                {word}
              </span>
              {i !== CHAIN.length - 1 && (
                <ArrowDown size={20} className="text-primary/30 my-2" />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* FRAME 4 — Izquierda (Focusfy) */}
      <div ref={f4} className="absolute inset-0 flex flex-col justify-center px-[8vw]">
        <p className="cb-f4-text text-primary/80 leading-snug max-w-2xl mb-12" style={{ fontSize: fsLg }}>
          <Words>Otros proyectos nacieron simplemente de querer experimentar con interacción, productividad y experiencia visual.</Words>
        </p>
        <a href="/projects/focusfy"
           className="cb-cta-1 group inline-flex items-center gap-4 text-primary font-semibold border-b border-primary/20 pb-1.5 hover:border-primary/70 transition-colors duration-300 w-fit"
           style={{ fontSize: "clamp(1rem, 1.6vw, 1.3rem)" }}>
          Ver Focusfy
          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
        </a>
      </div>

      {/* FRAME 5 — Derecha (TIM) */}
      <div ref={f5} className="absolute inset-0 flex flex-col justify-center items-end px-[8vw]">
        <p className="cb-f5-line1 text-primary/50 leading-snug max-w-xl text-right mb-6" style={{ fontSize: fs }}>
          <Words>Y otros no buscan resolver un problema comercial.</Words>
        </p>
        <p className="cb-f5-line2 text-primary font-medium leading-snug max-w-xl text-right mb-12" style={{ fontSize: fsLg }}>
          <Words>Buscan explorar algo diferente: interacción, emoción, comunidad y expresión.</Words>
        </p>
        <a href="/projects/tim"
           className="cb-cta-2 group inline-flex items-center gap-4 text-primary font-semibold border-b border-primary/20 pb-1.5 hover:border-primary/70 transition-colors duration-300 w-fit"
           style={{ fontSize: "clamp(1rem, 1.6vw, 1.3rem)" }}>
          Ver TIM
          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
}
