"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BugCodeBlock from "./BugCodeBlock";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const accessibilitySnippet = `const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;`;

export default function BugAct2() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) {
        gsap.set(".act2-elem", { autoAlpha: 1, y: 0, scaleX: 1 });
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
        ".act2-number",
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" }
      )
        .fromTo(
          ".act2-line",
          { scaleX: 0, transformOrigin: "left" },
          { scaleX: 1, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(
          ".act2-content",
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
          <span className="act2-number act2-elem will-change-transform block font-bold leading-none tracking-tighter text-primary/10 text-8xl md:text-9xl lg:text-[11rem] select-none opacity-0">
            02
          </span>
        </div>

        <div className="lg:col-span-9">
          <div className="act2-line act2-elem will-change-transform h-[1.5px] w-full bg-primary/20" />

          <div className="pt-8">
            <p className="act2-content act2-elem will-change-transform text-xl font-light leading-relaxed tracking-tight text-primary/70 opacity-0 md:text-2xl lg:text-3xl mb-6">
              Utilicé una simulación del navegador para probar la experiencia con diferentes condiciones de ejecución. Durante la investigación también revisé el código responsable de controlar la visibilidad y las transiciones de las escenas.
            </p>

            <p className="act2-content act2-elem will-change-transform text-xl font-light leading-relaxed tracking-tight text-primary/70 opacity-0 md:text-2xl lg:text-3xl mb-6">
              El hallazgo decisivo fue una preferencia de accesibilidad del sistema operativo: <em>prefers-reduced-motion</em>. Esta consulta permite detectar si el usuario ha solicitado reducir el movimiento:
            </p>

            <div className="act2-content act2-elem opacity-0">
              <BugCodeBlock
                filename="accessibilityQuery.ts"
                code={accessibilitySnippet}
              />
            </div>

            <p className="act2-content act2-elem will-change-transform text-xl font-light leading-relaxed tracking-tight text-primary/70 opacity-0 md:text-2xl lg:text-3xl mt-6 mb-6">
              En el código original, esa preferencia activaba una rama que mostraba simultáneamente varios bloques de texto y evitaba la creación de la secuencia de animación de GSAP.
            </p>

            <p className="act2-content act2-elem will-change-transform text-xl font-light leading-relaxed tracking-tight text-primary/70 opacity-0 md:text-2xl lg:text-3xl mb-6">
              Activé la emulación de movimiento reducido en Chrome DevTools y recorrí la sección afectada. <strong className="font-semibold text-primary">El problema apareció.</strong> Los textos se amontonaban en el mismo espacio, reproduciendo el comportamiento reportado por los usuarios.
            </p>

            <p className="act2-content act2-elem will-change-transform text-xl font-light leading-relaxed tracking-tight text-primary/70 opacity-0 md:text-2xl lg:text-3xl">
              Después retiré temporalmente el condicional y repetí la prueba con la preferencia activada. El solapamiento dejó de producirse. Con esto confirmé que la condición de movimiento reducido desencadenaba el error. La hipótesis inicial sobre una incompatibilidad específica de Safari dejó de ser la explicación principal.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
