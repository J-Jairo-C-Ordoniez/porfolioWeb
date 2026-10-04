"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

function Words({ children, wordClass = "ch5-word", className = "", style }) {
  return (
    <span className={className} style={style}>
      {String(children).split(" ").map((word, i) => (
        <span key={i} className={`${wordClass} inline-block mr-[0.28em]`}>{word}</span>
      ))}
    </span>
  );
}

const QUESTIONS  = ["¿Qué necesita estar ahí?", "¿Qué puede desaparecer?", "¿Qué debe ser evidente?"];
const MINIMALISM = ["No consiste en usar menos elementos.", "Consiste en reducir el ruido.", "Reducir la fricción.", "Hacer más evidente lo importante."];
const TOOLS      = ["Investigación.", "Arquitectura de información.", "Flujos.", "Interfaces.", "Interacciones."];

export default function ChapterDecide() {
  const containerRef = useRef(null);
  const f1 = useRef(null);
  const f2 = useRef(null);
  const f3 = useRef(null);
  const f4 = useRef(null);
  const f5 = useRef(null);
  const f6 = useRef(null);

  useGSAP(() => {
    const initInterval = setInterval(() => {
      if (typeof window !== "undefined" && window.__storyScrollTween) {
        clearInterval(initInterval);

        const frames = [f1, f2, f3, f4, f5, f6].map(r => r.current);
        gsap.set(frames, { autoAlpha: 0 });

        // 6 frames × ~1000px = 6000px de scroll extra
        const S = 1 / 6; // slot por frame

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            start: "top top",
            end: "+=6000",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

    // ── FRAME 1: "Comprender cambia las decisiones." ───────────────
    tl.to(f1.current, { autoAlpha: 1, duration: 0.01 }, 0 * S)
      .fromTo(".ch5-title",
        { clipPath: "inset(100% 0 0 0)" },
        { clipPath: "inset(0% 0 0 0)", ease: "none", duration: S * 0.40 }, 0 * S + 0.01)
      .fromTo(".ch5-f1-sub .ch5-word",
        { opacity: 0, y: 55 },
        { opacity: 1, y: 0, ease: "none", duration: 0.008, stagger: 0.008 }, 0 * S + S * 0.55)
      .to(f1.current, { autoAlpha: 0, duration: 0.01 }, 0 * S + S * 0.92)

    // ── FRAME 2: "Empiezas a mirar..." ─────────────────────────────
      .to(f2.current, { autoAlpha: 1, duration: 0.01 }, 1 * S)
      .fromTo(".ch5-f2 .ch5-word",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.01 }, 1 * S + 0.01)
      .to(f2.current, { autoAlpha: 0, duration: 0.01 }, 1 * S + S * 0.92)

    // ── FRAME 3: las 3 preguntas ───────────────────────────────────
      .to(f3.current, { autoAlpha: 1, duration: 0.01 }, 2 * S)
      .fromTo(".ch5-f3-label",
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, ease: "none", duration: 0.01 }, 2 * S + 0.01)
      .fromTo(".ch5-question",
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, ease: "none", duration: 0.01, stagger: 0.02 }, 2 * S + S * 0.15)
      .to(f3.current, { autoAlpha: 0, duration: 0.01 }, 2 * S + S * 0.92)

    // ── FRAME 4: "Para mí, el minimalismo no es estética." ─────────
      .to(f4.current, { autoAlpha: 1, duration: 0.01 }, 3 * S)
      .fromTo(".ch5-f4-label",
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, ease: "none", duration: 0.01 }, 3 * S + 0.01)
      .fromTo(".ch5-f4-text .ch5-word",
        { opacity: 0, y: -55 },
        { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.01 }, 3 * S + S * 0.12)
      .to(f4.current, { autoAlpha: 0, duration: 0.01 }, 3 * S + S * 0.92)

    // ── FRAME 5: 4 líneas del minimalismo ─────────────────────────
      .to(f5.current, { autoAlpha: 1, duration: 0.01 }, 4 * S)
      .fromTo(".ch5-minimalism-line",
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, ease: "none", duration: 0.01, stagger: 0.022 }, 4 * S + 0.01)
      .to(f5.current, { autoAlpha: 0, duration: 0.01 }, 4 * S + S * 0.92)

    // ── FRAME 6: herramientas + cierre ────────────────────────────
      .to(f6.current, { autoAlpha: 1, duration: 0.01 }, 5 * S)
      .fromTo(".ch5-f6-label",
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, ease: "none", duration: 0.01 }, 5 * S + 0.01)
      .fromTo(".ch5-tool",
        { opacity: 0, x: -70 },
        { opacity: 1, x: 0, ease: "none", duration: 0.01, stagger: 0.018 }, 5 * S + S * 0.12)
      .fromTo(".ch5-closing .ch5-word",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, ease: "none", duration: 0.008, stagger: 0.008 }, 5 * S + S * 0.72);

      }
    }, 100);
  }, { scope: containerRef });

  const fs      = "clamp(1.2rem, 2.2vw, 1.7rem)";
  const fsLg    = "clamp(1.5rem, 3vw, 2.6rem)";
  const fsLabel = "clamp(0.7rem, 1vw, 0.85rem)";

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-background text-primary"
    >
      {/* FRAME 1 — Izquierda: headline */}
      <div ref={f1} className="absolute inset-0 flex flex-col justify-center px-[8vw]">
        <div className="overflow-hidden">
          <h2 className="ch5-title font-bold tracking-tighter leading-tight"
              style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}>
            Comprender<br />cambia las decisiones.
          </h2>
        </div>
        <p className="ch5-f1-sub mt-8 text-primary/40 font-normal" style={{ fontSize: fs }}>
          <Words wordClass="ch5-word">Cuando entiendes el problema, empiezas a mirar diferente.</Words>
        </p>
      </div>

      {/* FRAME 2 — Izquierda: consecuencia */}
      <div ref={f2} className="absolute inset-0 flex flex-col justify-center px-[8vw]">
        <p className="ch5-f2 text-primary/60 leading-snug max-w-xl" style={{ fontSize: fsLg }}>
          <Words wordClass="ch5-word">
            Empiezas a mirar una interfaz de otra manera y comienzas a preguntarte cosas.
          </Words>
        </p>
      </div>

      {/* FRAME 3 — Derecha: las 3 preguntas */}
      <div ref={f3} className="absolute inset-0 flex flex-col justify-center items-end px-[8vw]">
        <p className="ch5-f3-label mb-10 text-primary/30 font-medium text-right"
           style={{ fontSize: fsLabel, letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Cosas como:
        </p>
        <ul className="flex flex-col items-end gap-6">
          {QUESTIONS.map((q, i) => (
            <li key={i} className="ch5-question text-primary font-medium text-right"
                style={{ fontSize: "clamp(1.5rem, 3.2vw, 3rem)" }}>
              {q}
            </li>
          ))}
        </ul>
      </div>

      {/* FRAME 4 — Izquierda: filosofía */}
      <div ref={f4} className="absolute inset-0 flex flex-col justify-center px-[8vw]">
        <p className="ch5-f4-label mb-10 text-primary/30 font-medium"
           style={{ fontSize: fsLabel, letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Aquí entra mi filosofía sobre el minimalismo:
        </p>
        <p className="ch5-f4-text text-primary font-bold tracking-tight leading-tight max-w-2xl"
           style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}>
          <Words wordClass="ch5-word">Para mí, el minimalismo no es estética.</Words>
        </p>
      </div>

      {/* FRAME 5 — Derecha: 4 líneas del minimalismo */}
      <div ref={f5} className="absolute inset-0 flex flex-col justify-center items-end px-[8vw]">
        <ul className="flex flex-col items-end gap-6">
          {MINIMALISM.map((line, i) => (
            <li key={i}
                className={`ch5-minimalism-line text-right font-medium ${i === 0 ? "text-primary/40" : "text-primary"}`}
                style={{ fontSize: i === 0 ? fsLg : "clamp(1.5rem, 3.2vw, 3rem)" }}>
              {line}
            </li>
          ))}
        </ul>
      </div>

      {/* FRAME 6 — Izquierda: herramientas + cierre */}
      <div ref={f6} className="absolute inset-0 flex flex-col justify-center px-[8vw]">
        <p className="ch5-f6-label mb-10 text-primary/30 font-medium"
           style={{ fontSize: fsLabel, letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Y entonces el diseño UX/UI aparece naturalmente:
        </p>
        <ul className="flex flex-col gap-4 mb-16">
          {TOOLS.map((tool, i) => (
            <li key={i} className="ch5-tool text-primary font-medium"
                style={{ fontSize: "clamp(1.3rem, 2.8vw, 2.6rem)" }}>
              {tool}
            </li>
          ))}
        </ul>
        <p className="ch5-closing text-primary/40 font-normal" style={{ fontSize: fs }}>
          <Words wordClass="ch5-word">Como herramientas para tomar mejores decisiones.</Words>
        </p>
      </div>
    </div>
  );
}
