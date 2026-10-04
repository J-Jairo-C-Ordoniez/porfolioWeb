"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowDown } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

function Words({ children, wordClass = "cc-word", className = "", style }) {
  return (
    <span className={className} style={style}>
      {String(children).split(" ").map((word, i) => (
        <span key={i} className={`${wordClass} inline-block mr-[0.28em]`}>{word}</span>
      ))}
    </span>
  );
}

const CHAIN = [
  "Primero comprender.",
  "Después decidir.",
  "Finalmente construir."
];

export default function ChapterClosing() {
  const containerRef = useRef(null);
  const f1 = useRef(null);
  const f2 = useRef(null);
  const f3 = useRef(null);
  const f4 = useRef(null);

  useGSAP(() => {
    const initInterval = setInterval(() => {
      if (typeof window !== "undefined" && window.__storyScrollTween) {
        clearInterval(initInterval);

        const frames = [f1, f2, f3, f4].map(r => r.current);
        gsap.set(frames, { autoAlpha: 0 });

        // 4 frames = 4000px de scroll
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            start: "top top",
            end: "+=4000",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

        const S = 1 / 4; // 0.25

        // ── FRAME 1 ────────────────────────────────────────────
        tl.to(f1.current, { autoAlpha: 1, duration: 0.01 }, 0 * S)
          .fromTo(".cc-f1-title",
            { clipPath: "inset(100% 0 0 0)" },
            { clipPath: "inset(0% 0 0 0)", ease: "none", duration: 0.07 }, 0 * S + 0.01)
          .fromTo(".cc-f1-line .cc-word",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.01 }, 0 * S + 0.10)
          .to(f1.current, { autoAlpha: 0, duration: 0.015 }, 0 * S + 0.235)

        // ── FRAME 2: Cadena ───────────────────────────────────────
          .to(f2.current, { autoAlpha: 1, duration: 0.01 }, 1 * S)
          .fromTo(".cc-chain-item",
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, ease: "none", duration: 0.015, stagger: 0.03 }, 1 * S + 0.02)
          .to(f2.current, { autoAlpha: 0, duration: 0.015 }, 1 * S + 0.235)

        // ── FRAME 3: Filosofía ─────────────────────────────────────────
          .to(f3.current, { autoAlpha: 1, duration: 0.01 }, 2 * S)
          .fromTo(".cc-f3-line1 .cc-word",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.008 }, 2 * S + 0.02)
          .fromTo(".cc-f3-line2 .cc-word",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.008 }, 2 * S + 0.10)
          .to(f3.current, { autoAlpha: 0, duration: 0.015 }, 2 * S + 0.235)

        // ── FRAME 4: Cierre final ─────────────────────────────────────────────
          .to(f4.current, { autoAlpha: 1, duration: 0.01 }, 3 * S)
          .fromTo(".cc-f4-text",
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, ease: "none", duration: 0.1 }, 3 * S + 0.05)
          // Se mantiene hasta el final

        ScrollTrigger.refresh();
      }
    }, 100);
  }, { scope: containerRef });

  const fsLg    = "clamp(1.5rem, 3vw, 2.6rem)";
  const fsXl    = "clamp(2rem, 5vw, 4.5rem)";

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-background text-primary"
    >
      {/* FRAME 1 — Izquierda */}
      <div ref={f1} className="absolute inset-0 flex flex-col justify-center px-[8vw]">
        <div className="overflow-hidden mb-8">
          <h2 className="cc-f1-title font-bold tracking-tighter leading-tight"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7.5rem)" }}>
            Aún estoy construyendo.
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <p className="cc-f1-line text-primary/60 font-medium" style={{ fontSize: fsLg }}>
            <Words>Sigo aprendiendo.</Words>
          </p>
          <p className="cc-f1-line text-primary/60 font-medium" style={{ fontSize: fsLg }}>
            <Words>Sigo haciendo preguntas.</Words>
          </p>
          <p className="cc-f1-line text-primary/60 font-medium max-w-2xl" style={{ fontSize: fsLg }}>
            <Words>Sigo probando nuevas formas de diseñar, desarrollar y comunicar.</Words>
          </p>
        </div>
      </div>

      {/* FRAME 2 — Derecha (Cadena) */}
      <div ref={f2} className="absolute inset-0 flex flex-col justify-center items-end px-[8vw]">
        <ul className="flex flex-col items-center gap-4 mr-[10vw]">
          {CHAIN.map((word, i) => (
            <li key={i} className="cc-chain-item flex flex-col items-center">
              <span className="font-bold tracking-tight text-primary/80" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
                {word}
              </span>
              {i !== CHAIN.length - 1 && (
                <ArrowDown size={28} className="text-primary/30 my-4" />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* FRAME 3 — Izquierda */}
      <div ref={f3} className="absolute inset-0 flex flex-col justify-center px-[8vw]">
        <p className="cc-f3-line1 text-primary font-bold leading-snug max-w-4xl mb-8" style={{ fontSize: fsXl }}>
          <Words>Porque para mí, crear un producto digital no consiste únicamente en hacerlo funcionar.</Words>
        </p>
        <p className="cc-f3-line2 text-primary/60 font-medium leading-snug max-w-3xl" style={{ fontSize: fsLg }}>
          <Words>Consiste en entender por qué debería existir, para quién y qué puede hacer mejor.</Words>
        </p>
      </div>

      {/* FRAME 4 — Centro */}
      <div ref={f4} className="absolute inset-0 flex flex-col justify-center items-center px-[8vw] text-center">
        <h2 className="cc-f4-text font-bold tracking-tighter leading-tight"
            style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}>
          Eso es lo que estoy<br />construyendo.
        </h2>
      </div>
    </div>
  );
}
