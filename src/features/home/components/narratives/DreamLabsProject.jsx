"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
  "Su propuesta",
  "Su fundador",
  "Sus clientes",
  "Su estética"
];

const QUALITIES = [
  "Rendimiento",
  "Personalización",
  "Estética",
  "Identidad",
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

        tl.to(f1.current, { autoAlpha: 1, duration: 0.01 }, 0.00)
          .fromTo(".dl-title",
            { clipPath: "inset(100% 0 0 0)" },
            { clipPath: "inset(0% 0 0 0)", ease: "none", duration: 0.07 }, 0.01)
          .fromTo(".dl-f1-sub .dl-word",
            { opacity: 0, y: 55 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.01 }, 0.10)
          .to(f1.current, { autoAlpha: 0, duration: 0.015 }, 0.185)

          .to(f2.current, { autoAlpha: 1, duration: 0.01 }, 0.20)
          .fromTo(".dl-f2-line1 .dl-word",
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, ease: "none", duration: 0.012, stagger: 0.012 }, 0.21)
          .fromTo(".dl-f2-line2 .dl-word",
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, ease: "none", duration: 0.012, stagger: 0.012 }, 0.28)
          .to(f2.current, { autoAlpha: 0, duration: 0.015 }, 0.385)

          .to(f3.current, { autoAlpha: 1, duration: 0.01 }, 0.40)
          .fromTo(".dl-f3-label",
            { opacity: 0, x: 40 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01 }, 0.41)
          .fromTo(".dl-understanding-item",
            { opacity: 0, x: 80 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01, stagger: 0.015 }, 0.43)
          .to(f3.current, { autoAlpha: 0, duration: 0.015 }, 0.585)

          .to(f4.current, { autoAlpha: 1, duration: 0.01 }, 0.60)
          .fromTo(".dl-f4-label",
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01 }, 0.61)
          .fromTo(".dl-quality",
            { opacity: 0, x: -80 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01, stagger: 0.015 }, 0.63)
          .to(f4.current, { autoAlpha: 0, duration: 0.015 }, 0.785)

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

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-primary text-background"
    >
      <article
        key={1}
        ref={f1}
        className="absolute inset-0 flex flex-col justify-center px-[8vw]"
      >
        <div className="overflow-hidden">
          <h2 className="dl-title text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-background">
            DREAMLABS
          </h2>
        </div>
        <p className="dl-f1-sub mt-8 text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-background/80 leading-tight">
          <Words>El siguiente proyecto. Otra forma de pensar.</Words>
        </p>
      </article>

      <article
        key={2}
        ref={f2}
        className="absolute inset-0 flex flex-col justify-center px-[8vw]"
      >
        <p className="dl-f2-line1 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-background leading-tight max-w-5xl mb-10">
          <Words>Entonces empecé a aplicar esa forma de pensar desde el principio.</Words>
        </p>
        <p className="dl-f2-line2 text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-background/80 leading-tight max-w-5xl">
          <Words>Antes de diseñar DreamLabs, no quería empezar por una pantalla.</Words>
        </p>
      </article>

      <article
        key={3}
        ref={f3}
        className="absolute inset-0 flex flex-col justify-center px-[8vw]"
      >
        <p className="dl-f3-label mb-10 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-background leading-tight">
          <Words>Quería entender:</Words>
        </p>
        <ul className="flex flex-col items-end gap-5">
          {UNDERSTANDING.map((item, i) => (
            <li key={i} className="dl-understanding-item text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-background/80 leading-tight">
              {item}
            </li>
          ))}
        </ul>
      </article>

      <article
        key={4}
        ref={f4}
        className="absolute inset-0 flex flex-col justify-center px-[8vw]"
      >
        <p className="dl-f4-label mb-10 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-background/80 leading-tight max-w-5xl">
          Y descubrí que un PC podía ser mucho más que hardware, era:
        </p>
        <ul className="flex flex-col gap-5">
          {QUALITIES.map((q, i) => (
            <li key={i} className="dl-quality text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-background leading-tight">
              {q}
            </li>
          ))}
        </ul>
      </article>

      <article
        key={5}
        ref={f5}
        className="absolute inset-0 flex flex-col justify-center items-end px-[8vw]"
      >
        <p className="dl-f5-closing text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-background/80 leading-tight max-w-5xl">
          <Words>La experiencia empezó a construirse alrededor de esa idea.</Words>
        </p>
        <Link href="/projects/dreamlabs"
          className="dl-cta group inline-flex items-center gap-4 mt-24 text-2xl md:text-3xl font-medium border-b border-background/20 pb-2 text-background hover:text-background/80 transition-all">
          Explorar DreamLabs
          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </article>
    </section>
  );
}
