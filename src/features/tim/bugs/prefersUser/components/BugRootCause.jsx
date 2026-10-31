"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layers, EyeOff, Pin, Play } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const gsapSequenceSteps = [
  {
    step: "1",
    title: "Ocultamiento inicial",
    desc: "GSAP forzaba la opacidad a cero en todos los bloques al inicializar la escena en el DOM.",
    icon: EyeOff,
  },
  {
    step: "2",
    title: "Fijación del Viewport",
    desc: "ScrollTrigger fijaba temporalmente el viewport ('pin: true') para congelar la pantalla.",
    icon: Pin,
  },
  {
    step: "3",
    title: "Aparición progresiva",
    desc: "El avance del scroll alternaba la visibilidad de cada bloque a lo largo del timeline.",
    icon: Play,
  },
  {
    step: "4",
    title: "Ilusión de separación",
    desc: "La secuencia permitía leer las frases por separado, aunque físicamente estuvieran superpuestas en las mismas coordenadas.",
    icon: Layers,
  },
];

export default function BugRootCause() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion) {
        gsap.set(".bug-cause-el", { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        ".bug-cause-el",
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
        <div className="bug-cause-el will-change-transform mb-6 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-background/20 bg-background/5 text-xs font-semibold text-accent">
            03
          </span>
          <span className="text-xs uppercase tracking-widest text-background/60 font-medium">
            Diagnóstico estructural
          </span>
        </div>

        <h2 className="bug-cause-el will-change-transform text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-background leading-tight">
          La causa raíz: el contenido dependía de la animación
        </h2>

        {/* Narrativa */}
        <div className="bug-cause-el will-change-transform mt-8 space-y-6 text-base sm:text-lg md:text-xl font-light leading-relaxed text-background/80">
          <p>
            La investigación reveló un problema más profundo que el condicional de accesibilidad.
            En componentes como <code className="rounded bg-background/10 px-2 py-0.5 font-mono text-accent text-sm md:text-base">TestimonialQuoteScene.tsx</code>, los distintos bloques de texto utilizaban una estructura de posicionamiento absoluto sobre un mismo contenedor:
          </p>
        </div>

        {/* Snippet CSS problemático */}
        <div className="bug-cause-el will-change-transform mt-6 rounded-xl border border-rose-500/30 bg-rose-950/10 p-5 font-mono text-sm sm:text-base text-rose-300">
          <code>absolute inset-0 flex items-center justify-center</code>
        </div>

        <p className="bug-cause-el will-change-transform mt-6 text-base sm:text-lg font-light leading-relaxed text-background/70">
          Todos los bloques compartían las mismas coordenadas dentro de un único viewport. Esta composición funcionaba únicamente porque GSAP y ScrollTrigger actuaban como directores de la secuencia:
        </p>

        {/* Lista de pasos secuenciales */}
        <div className="bug-cause-el will-change-transform mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {gsapSequenceSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-background/10 bg-background/5 p-6 transition-colors hover:border-background/20"
            >
              <div className="flex items-center gap-3 mb-3 text-accent">
                <item.icon size={20} />
                <span className="text-xs font-mono uppercase tracking-wider text-background/50">
                  Fase {item.step}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-background mb-2">{item.title}</h4>
              <p className="text-sm font-light leading-relaxed text-background/70">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Conclusión clave destacada */}
        <div className="bug-cause-el will-change-transform mt-12 rounded-2xl border-l-4 border-accent bg-background/5 p-8 md:p-10">
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-background leading-relaxed">
            &ldquo;La animación no solo controlaba cómo se mostraba el contenido: era también lo que impedía que el contenido se superpusiera.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm sm:text-base font-medium text-accent">
            Esta dependencia arquitectónica convirtió una condición de accesibilidad en un fallo directo de legibilidad.
          </p>
        </div>
      </div>
    </section>
  );
}
