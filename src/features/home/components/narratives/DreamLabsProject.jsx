"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

function Words({ children, wordClass = "dl-word", className = "", style }) {
  return (
    <span className={className} style={style}>
      {String(children).split(" ").map((word, i) => (
        <span key={i} className={`${wordClass} inline-block mr-[0.28em]`}>{word}</span>
      ))}
    </span>
  );
}

const UNDERSTANDING = [
  "Su propuesta.",
  "Su fundador.",
  "Sus clientes.",
  "Su estética.",
  "Lo que significa comprar y personalizar un PC.",
];

const QUALITIES = [
  "Rendimiento.",
  "Personalización.",
  "Estética.",
  "Identidad.",
];

export default function DreamLabsProject() {
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

        // ── FRAME 1: DREAMLABS ────────────────────────────────────────────
        tl.to(f1.current, { autoAlpha: 1, duration: 0.01 }, 0.00)
          .fromTo(".dl-title",
            { clipPath: "inset(100% 0 0 0)" },
            { clipPath: "inset(0% 0 0 0)", ease: "none", duration: 0.07 }, 0.01)
          .fromTo(".dl-f1-sub .dl-word",
            { opacity: 0, y: 55 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.01 }, 0.10)
          .to(f1.current, { autoAlpha: 0, duration: 0.015 }, 0.185)

        // ── FRAME 2: Entonces empecé ───────────────────────────────────────
          .to(f2.current, { autoAlpha: 1, duration: 0.01 }, 0.20)
          .fromTo(".dl-f2-line1 .dl-word",
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, ease: "none", duration: 0.012, stagger: 0.012 }, 0.21)
          .fromTo(".dl-f2-line2 .dl-word",
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, ease: "none", duration: 0.012, stagger: 0.012 }, 0.28)
          .to(f2.current, { autoAlpha: 0, duration: 0.015 }, 0.385)

        // ── FRAME 3: Lista entender ─────────────────────────────────────────
          .to(f3.current, { autoAlpha: 1, duration: 0.01 }, 0.40)
          .fromTo(".dl-f3-label",
            { opacity: 0, x: 40 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01 }, 0.41)
          .fromTo(".dl-understanding-item",
            { opacity: 0, x: 80 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01, stagger: 0.015 }, 0.43)
          .to(f3.current, { autoAlpha: 0, duration: 0.015 }, 0.585)

        // ── FRAME 4: Cualidades ─────────────────────────────────────────────
          .to(f4.current, { autoAlpha: 1, duration: 0.01 }, 0.60)
          .fromTo(".dl-f4-label",
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01 }, 0.61)
          .fromTo(".dl-quality",
            { opacity: 0, x: -80 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01, stagger: 0.015 }, 0.63)
          .to(f4.current, { autoAlpha: 0, duration: 0.015 }, 0.785)

        // ── FRAME 5: Cierre + CTA ───────────────────────────────────────────
          .to(f5.current, { autoAlpha: 1, duration: 0.01 }, 0.80)
          .fromTo(".dl-f5-closing .dl-word",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.009 }, 0.81)
          .fromTo(".dl-cta",
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01 }, 0.90);

        ScrollTrigger.refresh();
      }
    }, 100);
  }, { scope: containerRef });

  const fs      = "clamp(1.2rem, 2.2vw, 1.7rem)";
  const fsLg    = "clamp(1.5rem, 3vw, 2.6rem)";
  const fsLabel = "clamp(0.7rem, 1vw, 0.85rem)";

  return (
    // Contenedor pinned, exactamente como KodaProject y ChapterDecide
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#111] text-[#f4f4f0]"
    >
      {/* FRAME 1 — Izquierda */}
      <div ref={f1} className="absolute inset-0 flex flex-col justify-center px-[8vw]">
        <div className="overflow-hidden">
          <h2 className="dl-title font-bold tracking-tighter leading-none"
              style={{ fontSize: "clamp(4rem, 14vw, 14rem)" }}>
            DREAMLABS
          </h2>
        </div>
        <p className="dl-f1-sub mt-8 text-white/40 font-normal" style={{ fontSize: fs }}>
          <Words>El siguiente proyecto. Otra forma de pensar.</Words>
        </p>
      </div>

      {/* FRAME 2 — Izquierda */}
      <div ref={f2} className="absolute inset-0 flex flex-col justify-center px-[8vw]">
        <p className="dl-f2-line1 text-white/60 leading-snug max-w-xl mb-10" style={{ fontSize: fsLg }}>
          <Words>Entonces empecé a aplicar esa forma de pensar desde el principio.</Words>
        </p>
        <p className="dl-f2-line2 text-white font-medium leading-snug max-w-xl" style={{ fontSize: fsLg }}>
          <Words>Antes de diseñar DreamLabsPC, no quería empezar por una pantalla.</Words>
        </p>
      </div>

      {/* FRAME 3 — Derecha */}
      <div ref={f3} className="absolute inset-0 flex flex-col justify-center items-end px-[8vw]">
        <p className="dl-f3-label mb-10 text-white/30 font-medium text-right"
           style={{ fontSize: fsLabel, letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Quería entender:
        </p>
        <ul className="flex flex-col items-end gap-5">
          {UNDERSTANDING.map((item, i) => (
            <li key={i} className="dl-understanding-item text-white font-medium text-right"
                style={{ fontSize: "clamp(1.3rem, 2.8vw, 2.6rem)" }}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* FRAME 4 — Izquierda */}
      <div ref={f4} className="absolute inset-0 flex flex-col justify-center px-[8vw]">
        <p className="dl-f4-label mb-10 text-white/30 font-medium"
           style={{ fontSize: fsLabel, letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Y descubrí que un PC podía ser mucho más que hardware, era:
        </p>
        <ul className="flex flex-col gap-5">
          {QUALITIES.map((q, i) => (
            <li key={i} className="dl-quality text-white font-bold"
                style={{ fontSize: "clamp(1.8rem, 4vw, 4rem)" }}>
              {q}
            </li>
          ))}
        </ul>
      </div>

      {/* FRAME 5 — Derecha */}
      <div ref={f5} className="absolute inset-0 flex flex-col justify-center items-end px-[8vw]">
        <p className="dl-f5-closing text-white/60 leading-snug max-w-lg mb-16 text-right" style={{ fontSize: fsLg }}>
          <Words>La experiencia empezó a construirse alrededor de esa idea.</Words>
        </p>
        <a href="/projects/dreamlabs"
           className="dl-cta group inline-flex items-center gap-4 text-white font-semibold border-b border-white/20 pb-1.5 hover:border-white/70 transition-colors duration-300"
           style={{ fontSize: "clamp(1rem, 1.6vw, 1.3rem)" }}>
          Explorar DreamLabs
          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
}
