"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Copy, Terminal, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function BugInvestigation() {
  const containerRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const codeString = `const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion) {
        gsap.set(".bug-invest-el", { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        ".bug-invest-el",
        { autoAlpha: 0, y: 35 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="flex w-full flex-col justify-center px-[8vw] py-16 md:py-24 border-t border-background/10"
    >
      <div className="max-w-5xl">
        {/* Encabezado */}
        <div className="bug-invest-el will-change-transform mb-6 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-background/20 bg-background/5 text-xs font-semibold text-accent">
            02
          </span>
          <span className="text-xs uppercase tracking-widest text-background/60 font-medium">
            Depuración y diagnóstico
          </span>
        </div>

        <h2 className="bug-invest-el will-change-transform text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-background leading-tight">
          Reproducir antes de corregir
        </h2>

        {/* Narrativa */}
        <div className="bug-invest-el will-change-transform mt-8 space-y-6 text-base sm:text-lg md:text-xl font-light leading-relaxed text-background/80">
          <p>
            Utilicé una simulación del navegador para probar la experiencia con diferentes condiciones de ejecución. Durante la investigación también revisé minuciosamente el código responsable de controlar la visibilidad y las transiciones de las escenas.
          </p>
          <p>
            El hallazgo decisivo fue una preferencia de accesibilidad del sistema operativo:{" "}
            <code className="rounded bg-background/10 px-2 py-0.5 font-mono text-accent text-sm md:text-base">
              prefers-reduced-motion
            </code>
            .
          </p>
        </div>

        {/* Bloque de código con terminal oscura */}
        <div className="bug-invest-el will-change-transform mt-8 overflow-hidden rounded-2xl border border-background/15 bg-background/5 shadow-2xl">
          <div className="flex items-center justify-between border-b border-background/10 px-5 py-3 bg-background/[0.02]">
            <div className="flex items-center gap-2 text-xs font-mono text-background/60">
              <Terminal size={14} className="text-accent" />
              <span>accessibilityQuery.ts</span>
            </div>
            <button
              type="button"
              onClick={copyCode}
              className="flex items-center gap-1.5 text-xs text-background/60 hover:text-background transition-colors"
              aria-label="Copiar fragmento de código"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-accent" />
                  <span className="text-accent">Copiado</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>
          <pre className="overflow-x-auto p-5 text-sm sm:text-base font-mono leading-relaxed text-background/90 selection:bg-accent/30">
            <code>
              <span className="text-accent">const</span> prefersReducedMotion = window.
              <span className="text-background font-semibold">matchMedia</span>(
              {"\n"}  <span className="text-accent/90">&quot;(prefers-reduced-motion: reduce)&quot;</span>
              {"\n"}).matches;
            </code>
          </pre>
        </div>

        <p className="bug-invest-el will-change-transform mt-6 text-base sm:text-lg font-light leading-relaxed text-background/70">
          Esta consulta permite detectar si el usuario ha solicitado reducir el movimiento en su sistema. En el código original, esa preferencia activaba una rama que mostraba simultáneamente varios bloques de texto y evitaba la creación de la secuencia de animación de GSAP.
        </p>

        {/* La prueba decisiva */}
        <div className="bug-invest-el will-change-transform mt-10 rounded-2xl border border-accent/30 bg-accent/5 p-6 sm:p-8">
          <div className="flex items-center gap-3 text-accent mb-3">
            <CheckCircle2 size={24} />
            <h3 className="text-lg md:text-xl font-bold text-background">
              La prueba decisiva: El bug reproducido
            </h3>
          </div>
          <p className="text-base sm:text-lg font-light leading-relaxed text-background/80">
            Activé la emulación de movimiento reducido en Chrome DevTools y recorrí la sección afectada.{" "}
            <strong className="text-background font-semibold">El problema apareció de inmediato.</strong>{" "}
            Los textos se amontonaban en el mismo espacio, reproduciendo fielmente el error reportado por los usuarios.
          </p>
          <p className="mt-4 text-sm sm:text-base font-light text-background/70">
            Al retirar temporalmente el condicional y repetir la prueba con la preferencia activada, el solapamiento desapareció. Esto confirmó de forma concluyente que la condición de movimiento reducido desencadenaba el fallo, descartando incompatibilidades de Safari.
          </p>
        </div>
      </div>
    </section>
  );
}
