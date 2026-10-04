"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

function Words({ children, cls = "koda-word", className = "", style }) {
  return (
    <span className={className} style={style}>
      {String(children).split(" ").map((word, i) => (
        <span key={i} className={`${cls} inline-block mr-[0.28em]`}>{word}</span>
      ))}
    </span>
  );
}

const COMPLEXITY = [
  "productos y variantes",
  "inventario en tiempo real",
  "clientes y fiados",
  "catálogo digital",
  "empleados",
  "conversaciones por WhatsApp",
];

export default function KodaProject() {
  const containerRef = useRef(null); // pin target
  const f1 = useRef(null);
  const f2 = useRef(null);
  const f3 = useRef(null);
  const f4 = useRef(null);
  const f5 = useRef(null);

  useGSAP(() => {
    // Esperar a que Chapter03 haya registrado su pin y spacing
    // antes de calcular nuestra posición de trigger
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

    // Cada frame ocupa 0.2 del timeline (0–1)
    // ── FRAME 1: KODA ────────────────────────────────────────────
    tl.to(f1.current, { autoAlpha: 1, duration: 0.01 }, 0.00)
      .fromTo(".koda-title",
        { clipPath: "inset(100% 0 0 0)" },
        { clipPath: "inset(0% 0 0 0)", ease: "none", duration: 0.07 }, 0.01)
      .fromTo(".koda-f1-sub .koda-word",
        { opacity: 0, y: 55 },
        { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.01 }, 0.10)
      .to(f1.current, { autoAlpha: 0, duration: 0.015 }, 0.185)

    // ── FRAME 2: apariencia ───────────────────────────────────────
      .to(f2.current, { autoAlpha: 1, duration: 0.01 }, 0.20)
      .fromTo(".koda-f2 .koda-word",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, ease: "none", duration: 0.012, stagger: 0.012 }, 0.21)
      .to(f2.current, { autoAlpha: 0, duration: 0.015 }, 0.385)

    // ── FRAME 3: lista ────────────────────────────────────────────
      .to(f3.current, { autoAlpha: 1, duration: 0.01 }, 0.40)
      .fromTo(".koda-f3-label",
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, ease: "none", duration: 0.01 }, 0.41)
      .fromTo(".koda-list-item",
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, ease: "none", duration: 0.01, stagger: 0.015 }, 0.43)
      .to(f3.current, { autoAlpha: 0, duration: 0.015 }, 0.585)

    // ── FRAME 4: problema ─────────────────────────────────────────
      .to(f4.current, { autoAlpha: 1, duration: 0.01 }, 0.60)
      .fromTo(".koda-f4-label",
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, ease: "none", duration: 0.01 }, 0.61)
      .fromTo(".koda-f4-quote .koda-word",
        { opacity: 0, y: -55 },
        { opacity: 1, y: 0, ease: "none", duration: 0.012, stagger: 0.012 }, 0.63)
      .to(f4.current, { autoAlpha: 0, duration: 0.015 }, 0.785)

    // ── FRAME 5: resolución + CTA ─────────────────────────────────
      .to(f5.current, { autoAlpha: 1, duration: 0.01 }, 0.80)
      .fromTo(".koda-res1 .koda-word",
        { opacity: 0, x: 70 },
        { opacity: 1, x: 0, ease: "none", duration: 0.01, stagger: 0.009 }, 0.81)
      .fromTo(".koda-res2 .koda-word",
        { opacity: 0, x: 70 },
        { opacity: 1, x: 0, ease: "none", duration: 0.01, stagger: 0.009 }, 0.87)
      .fromTo(".koda-cta",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, ease: "none", duration: 0.01 }, 0.95);

      }
    }, 100);
  }, { scope: containerRef });

  const fs      = "clamp(1.2rem, 2.2vw, 1.7rem)";
  const fsLg    = "clamp(1.5rem, 3vw, 2.6rem)";
  const fsXl    = "clamp(2rem, 5vw, 4.5rem)";
  const fsLabel = "clamp(0.7rem, 1vw, 0.85rem)";

  return (
    // El contenedor es h-screen — GSAP lo pina y agrega el espacio de scroll
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-background text-primary"
    >
      {/* FRAME 1 — Izquierda: KODA */}
      <div ref={f1} className="absolute inset-0 flex flex-col justify-center px-[8vw]">
        <div className="overflow-hidden">
          <h2 className="koda-title font-bold tracking-tighter leading-none"
              style={{ fontSize: "clamp(5rem, 16vw, 16rem)" }}>
            KODA
          </h2>
        </div>
        <p className="koda-f1-sub mt-8 text-primary/50 font-normal" style={{ fontSize: fs }}>
          <Words>Nació de mirar ese sistema.</Words>
        </p>
      </div>

      {/* FRAME 2 — Izquierda: la apariencia */}
      <div ref={f2} className="absolute inset-0 flex flex-col justify-center px-[8vw]">
        <p className="koda-f2 text-primary/60 leading-snug font-normal max-w-xl" style={{ fontSize: fsLg }}>
          <Words>Una tienda de ropa local puede parecer sencilla desde fuera.</Words>
        </p>
      </div>

      {/* FRAME 3 — Derecha: la complejidad real */}
      <div ref={f3} className="absolute inset-0 flex flex-col justify-center items-end px-[8vw]">
        <p className="koda-f3-label mb-10 text-primary/30 font-medium text-right"
           style={{ fontSize: fsLabel, letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Pero detrás de una venta:
        </p>
        <ul className="flex flex-col items-end gap-4">
          {COMPLEXITY.map((item, i) => (
            <li key={i} className="koda-list-item text-primary font-medium text-right"
                style={{ fontSize: "clamp(1.3rem, 2.8vw, 2.6rem)" }}>
              {item}.
            </li>
          ))}
        </ul>
      </div>

      {/* FRAME 4 — Izquierda: el problema */}
      <div ref={f4} className="absolute inset-0 flex flex-col justify-center px-[8vw]">
        <p className="koda-f4-label mb-10 text-primary/30 font-medium"
           style={{ fontSize: fsLabel, letterSpacing: "0.12em", textTransform: "uppercase" }}>
          El problema no era simplemente:
        </p>
        <p className="koda-f4-quote text-primary font-bold tracking-tight leading-tight"
           style={{ fontSize: fsXl }}>
          <Words>&ldquo;necesitan un sistema de inventario.&rdquo;</Words>
        </p>
      </div>

      {/* FRAME 5 — Derecha: resolución + CTA */}
      <div ref={f5} className="absolute inset-0 flex flex-col justify-center items-end px-[8vw]">
        <p className="koda-res1 max-w-lg text-primary/60 leading-relaxed text-right" style={{ fontSize: fs }}>
          <Words>Había procesos fragmentados que necesitaban funcionar juntos.</Words>
        </p>
        <p className="koda-res2 mt-8 max-w-lg text-primary font-medium leading-relaxed text-right" style={{ fontSize: fs }}>
          <Words>KODA nació para convertir ese conjunto de procesos en un sistema coherente.</Words>
        </p>
        <a href="/projects/koda"
           className="koda-cta group inline-flex items-center gap-4 mt-16 text-primary font-semibold border-b border-primary/20 pb-1.5 hover:border-primary/70 transition-colors duration-300"
           style={{ fontSize: "clamp(1rem, 1.6vw, 1.3rem)" }}>
          Conocer KODA
          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
}
