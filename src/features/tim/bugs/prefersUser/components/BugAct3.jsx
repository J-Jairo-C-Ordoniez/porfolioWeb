"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BugCodeBlock from "./BugCodeBlock";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const faultyCssSnippet = `/* TestimonialQuoteScene.tsx — Contenedores compartiendo el mismo centro */
<div className="absolute inset-0 flex items-center justify-center">
  <p className="testimonial-text">{quote.text}</p>
</div>`;

export default function BugAct3() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) {
        gsap.set(".act3-elem", { autoAlpha: 1, y: 0, scaleX: 1 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".act3-number",
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" }
      )
        .fromTo(
          ".act3-line",
          { scaleX: 0, transformOrigin: "left" },
          { scaleX: 1, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(
          ".act3-content",
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <article
      ref={containerRef}
      className="flex min-h-screen w-full flex-col justify-center px-[8vw] py-24 md:py-32"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-3">
          <span className="act3-number act3-elem will-change-transform block font-bold leading-none tracking-tighter text-primary/10 text-8xl md:text-9xl lg:text-[11rem] select-none opacity-0">
            03
          </span>
        </div>

        <div className="lg:col-span-9">
          <div className="act3-line act3-elem will-change-transform h-[1.5px] w-full bg-primary/20" />

          <div className="pt-8">
            <p className="act3-content act3-elem will-change-transform text-xl font-light leading-relaxed tracking-tight text-primary/70 opacity-0 md:text-2xl lg:text-3xl mb-6">
              En escenas como <em>TestimonialQuoteScene.tsx</em>, todos los bloques de texto compartían exactamente las mismas coordenadas dentro de un único viewport:
            </p>

            <div className="act3-content act3-elem opacity-0">
              <BugCodeBlock
                filename="TestimonialQuoteScene.tsx"
                code={faultyCssSnippet}
              />
            </div>

            <p className="act3-content act3-elem will-change-transform text-xl font-light leading-relaxed tracking-tight text-primary/70 opacity-0 md:text-2xl lg:text-3xl mt-6 mb-6">
              Esta composición funcionaba porque GSAP y ScrollTrigger actuaban como directores de la secuencia: GSAP ocultaba los bloques al inicializar la escena, ScrollTrigger fijaba temporalmente el viewport durante el recorrido, y el progreso del scroll controlaba la aparición y desaparición de cada texto. La secuencia permitía leer las frases por separado, aunque estuvieran superpuestas físicamente en el DOM.
            </p>

            <p className="act3-content act3-elem will-change-transform text-xl font-light leading-relaxed tracking-tight text-primary/70 opacity-0 md:text-2xl lg:text-3xl mb-6">
              El problema surgía cuando se activaba la alternativa de movimiento reducido. El código hacía visibles todos los bloques y abandonaba la secuencia que normalmente los alternaba. El navegador mostraba correctamente los elementos según los estilos y estados que había recibido. El fallo estaba en la relación entre la estructura del contenido y la lógica de presentación.
            </p>

            <p className="act3-content act3-elem will-change-transform text-2xl font-normal leading-relaxed tracking-tight text-primary opacity-0 md:text-3xl lg:text-4xl">
              <strong>La animación no solo controlaba cómo se mostraba el contenido: era también lo que impedía que el contenido se superpusiera.</strong> Esta dependencia convirtió una condición de accesibilidad en un fallo de legibilidad.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
