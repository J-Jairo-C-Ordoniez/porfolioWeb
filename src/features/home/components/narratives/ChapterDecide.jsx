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

const QUESTIONS = ["¿Qué necesita estar ahí?", "¿Qué puede desaparecer?", "¿Qué debe ser evidente?"];
const MINIMALISM = ["No consiste en usar menos elementos.", "Consiste en reducir el ruido.", "Reducir la fricción.", "Hacer más evidente lo importante."];
const TOOLS = ["Investigación.", "Arquitectura de información.", "Flujos.", "Interfaces.", "Interacciones."];

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
        const S = 1 / 6;

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

        tl.to(f1.current, { autoAlpha: 1, duration: 0.01 }, 0 * S)
          .fromTo(".ch5-title",
            { clipPath: "inset(100% 0 0 0)" },
            { clipPath: "inset(0% 0 0 0)", ease: "none", duration: S * 0.40 }, 0 * S + 0.01)
          .fromTo(".ch5-f1-sub .ch5-word",
            { opacity: 0, y: 55 },
            { opacity: 1, y: 0, ease: "none", duration: 0.008, stagger: 0.008 }, 0 * S + S * 0.55)
          .to(f1.current, { autoAlpha: 0, duration: 0.01 }, 0 * S + S * 0.92)

          .to(f2.current, { autoAlpha: 1, duration: 0.01 }, 1 * S)
          .fromTo(".ch5-f2 .ch5-word",
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.01 }, 1 * S + 0.01)
          .to(f2.current, { autoAlpha: 0, duration: 0.01 }, 1 * S + S * 0.92)

          .to(f3.current, { autoAlpha: 1, duration: 0.01 }, 2 * S)
          .fromTo(".ch5-f3-label",
            { opacity: 0, x: 40 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01 }, 2 * S + 0.01)
          .fromTo(".ch5-question",
            { opacity: 0, x: 80 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01, stagger: 0.02 }, 2 * S + S * 0.15)
          .to(f3.current, { autoAlpha: 0, duration: 0.01 }, 2 * S + S * 0.92)

          .to(f4.current, { autoAlpha: 1, duration: 0.01 }, 3 * S)
          .fromTo(".ch5-f4-label",
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01 }, 3 * S + 0.01)
          .fromTo(".ch5-f4-text .ch5-word",
            { opacity: 0, y: -55 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.01 }, 3 * S + S * 0.12)
          .to(f4.current, { autoAlpha: 0, duration: 0.01 }, 3 * S + S * 0.92)

          .to(f5.current, { autoAlpha: 1, duration: 0.01 }, 4 * S)
          .fromTo(".ch5-minimalism-line",
            { opacity: 0, x: 80 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01, stagger: 0.022 }, 4 * S + 0.01)
          .to(f5.current, { autoAlpha: 0, duration: 0.01 }, 4 * S + S * 0.92)

          .to(f6.current, { autoAlpha: 1, duration: 0.01 }, 5 * S)
          .fromTo(".ch5-f6-label",
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01 }, 5 * S + 0.01)
          .fromTo(".ch5-tool",
            { opacity: 0, x: -70 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01, stagger: 0.018 }, 5 * S + S * 0.12)
      }
    }, 100);
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="decide"
      className="relative w-full h-screen overflow-hidden bg-background text-primary"
    >
      <article
        ref={f1}
        className="absolute inset-0 flex flex-col justify-center px-[8vw]"
      >
        <div className="overflow-hidden">
          <h2 className="ch5-title font-bold tracking-tighter leading-none text-3xl md:text-5xl lg:text-6xl text-primary">
            Comprender cambia las decisiones.
          </h2>
        </div>
        <p className="ch5-f1-sub mt-8 text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary/80 leading-tight">
          <Words wordClass="ch5-word">Cuando entiendes el problema, empiezas a mirar diferente.</Words>
        </p>
      </article>

      <article
        ref={f2}
        className="absolute inset-0 flex flex-col justify-center px-[8vw] max-w-5xl"
      >
        <p className="ch5-f2 text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
          <Words wordClass="ch5-word">
            Empiezas a mirar una interfaz de otra manera y comienzas a preguntarte cosas.
          </Words>
        </p>
      </article>

      <article
        ref={f3}
        className="absolute inset-0 flex flex-col justify-center px-[8vw]"
      >
        <p className="ch5-f3-label mb-10 text-primary/80 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none">
          Cosas como:
        </p>
        <ul className="flex flex-col items-end gap-6">
          {QUESTIONS.map((q, i) => (
            <li key={i} className="ch5-question text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
              {q}
            </li>
          ))}
        </ul>
      </article>

      <article
        ref={f4}
        className="absolute inset-0 flex flex-col justify-center px-[8vw] max-w-6xl"
      >
        <p className="ch5-f4-label mb-10 text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
          Aquí entra mi filosofía sobre el minimalismo:
        </p>

        <p className="ch5-f4-text text-primary text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
          <Words wordClass="ch5-word">El cual para mí, es más que estética.</Words>
        </p>
      </article>

      <article
        ref={f5}
        className="absolute inset-0 flex flex-col justify-center items-end px-[8vw]"
      >
        <ul className="flex flex-col items-end gap-6">
          {MINIMALISM.map((line, i) => (
            <li key={i}
              className={`ch5-minimalism-line text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight ${i === 0 ? "text-primary/80" : "text-primary"}`}>
              {line}
            </li>
          ))}
        </ul>
      </article>

      <article
        ref={f6}
        className="absolute inset-0 flex flex-col justify-center px-[8vw]"
      >
        <p className="ch5-f6-label mb-10 text-primary text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight max-w-5xl">
          Y entonces el diseño UX/UI aparece naturalmente:
        </p>
        <ul className="flex flex-col gap-4 mb-16">
          {TOOLS.map((tool, i) => (
            <li key={i} className="ch5-tool text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
              {tool}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
