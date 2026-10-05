"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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

export default function ChapterBuild() {
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
        tl.to(f1.current, { autoAlpha: 1, duration: 0.01 }, 0.00)
          .fromTo(".cb-f1-title",
            { clipPath: "inset(100% 0 0 0)" },
            { clipPath: "inset(0% 0 0 0)", ease: "none", duration: 0.07 }, 0.01)
          .fromTo(".cb-step",
            { opacity: 0, x: 40 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01, stagger: 0.015 }, 0.10)
          .to(f1.current, { autoAlpha: 0, duration: 0.015 }, 0.185)

          .to(f2.current, { autoAlpha: 1, duration: 0.01 }, 0.20)
          .fromTo(".cb-f2-line1 .cb-word",
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, ease: "none", duration: 0.012, stagger: 0.012 }, 0.21)
          .fromTo(".cb-f2-line2 .cb-word",
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, ease: "none", duration: 0.012, stagger: 0.012 }, 0.28)
          .to(f2.current, { autoAlpha: 0, duration: 0.015 }, 0.385)

          .to(f3.current, { autoAlpha: 1, duration: 0.01 }, 0.60)
          .fromTo(".cb-f4-text .cb-word",
            { opacity: 0, y: 55 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.009 }, 0.61)
          .fromTo(".cb-cta-1",
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01 }, 0.73)
          .to(f3.current, { autoAlpha: 0, duration: 0.015 }, 0.785)

          .to(f4.current, { autoAlpha: 1, duration: 0.01 }, 0.80)
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

  return (
    <section
      ref={containerRef}
      id="build-meaning"
      className="relative w-full h-screen overflow-hidden bg-background text-primary"
    >
      <article
        ref={f1}
        className="absolute inset-0 flex flex-col justify-center px-[8vw]"
      >
        <div className="overflow-hidden">
          <h2
            className="cb-f1-title text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-primary max-w-5xl"
            style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
          >
            Después de todo eso, construyo.
          </h2>
        </div>
        <ul className="flex flex-col gap-4 mt-12">
          {BUILD_STEPS.map((step, i) => (
            <li key={i} className="cb-step text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary/80 leading-tight">
              {step}
            </li>
          ))}
        </ul>
      </article>

      <article
        ref={f2}
        className="absolute inset-0 flex flex-col justify-center px-[8vw]"
      >
        <p className="cb-f2-line1 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-primary leading-tight max-w-5xl mb-10">
          <Words>La tecnología no es el punto de partida.</Words>
        </p>
        <p className="cb-f2-line2 text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary/80 leading-tight max-w-5xl">
          <Words>Es una herramienta dentro de una cadena de decisiones.</Words>
        </p>
      </article>

      <article
        ref={f3}
        className="absolute inset-0 flex flex-col justify-center px-[8vw]"
      >
        <p className="cb-f4-text text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary/80 leading-tight max-w-5xl mb-10">
          <Words>Otros proyectos nacieron de querer experimentar con interacción, productividad y experiencia visual.</Words>
        </p>
        <Link
          href="/projects/focusfy"
          className="cb-cta-1 group inline-flex items-center gap-4 mt-24 text-2xl w-fit md:text-3xl font-medium border-b border-primary/20 pb-2 text-primary hover:text-primary/80 transition-all"
        >
          Ver Focusfy
          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </article>

      <article
        ref={f4}
        className="absolute inset-0 flex flex-col justify-center items-end px-[8vw]"
      >
        <p className="cb-f5-line1 text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary/80 leading-tight max-w-5xl mb-10">
          <Words>Y otros no buscan resolver un problema comercial.</Words>
        </p>
        <p className="cb-f5-line2 text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary/80 leading-tight max-w-5xl mb-12">
          <Words>Buscan explorar algo diferente: interacción, emoción, comunidad y expresión.</Words>
        </p>
        <Link
          href="/projects/tim"
          className="cb-cta-2 group inline-flex items-center gap-4 mt-24 text-2xl w-fit md:text-3xl font-medium border-b border-primary/20 pb-2 text-primary hover:text-primary/80 transition-all"
        >
          Ver TIM
          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </article>
    </section>
  );
}
