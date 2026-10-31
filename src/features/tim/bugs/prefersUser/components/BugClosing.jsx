"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ExternalLink } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function BugClosing() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion) {
        gsap.set(".bug-closing-el", { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        ".bug-closing-el",
        { autoAlpha: 0, y: 35 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.14,
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
      className="flex w-full flex-col justify-center px-[8vw] py-20 md:py-32 border-t border-background/10"
    >
      <div className="max-w-5xl">
        {/* Conclusión narrativa */}
        <div className="bug-closing-el will-change-transform border-l-4 border-accent px-8 md:px-12 py-6 md:py-8">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-background leading-relaxed">
            Al principio buscaba una incompatibilidad entre navegadores. Al reproducir el error y examinar la estructura de las escenas, encontré una dependencia entre la animación y la legibilidad del contenido.
          </p>
        </div>

        <div className="bug-closing-el will-change-transform mt-10 space-y-5 text-base sm:text-lg md:text-xl font-light leading-relaxed text-background/75">
          <p>
            La corrección inmediata permitió recuperar la experiencia. La investigación, sin embargo, apuntó hacia una mejora más importante: construir una estructura capaz de conservar su integridad incluso cuando las condiciones de presentación cambian.
          </p>
          <p>
            En TIM, el objetivo no es únicamente conseguir que una animación funcione. Es conseguir que la experiencia siga teniendo sentido para quien la recorre, <strong className="text-background font-medium">independientemente de cómo necesite interactuar con ella.</strong>
          </p>
        </div>

        {/* Navegación de cierre */}
        <div className="bug-closing-el will-change-transform mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 border-t border-background/10 pt-10">
          <Link
            href="/projects/tim#decide"
            className="group inline-flex items-center gap-3 text-base sm:text-lg md:text-xl font-medium border-b border-background/20 pb-2 text-background hover:text-background/70 hover:border-background transition-all"
          >
            <ArrowLeft size={20} className="transition-transform duration-300 group-hover:-translate-x-2" />
            Volver a las decisiones de TIM
          </Link>

          <Link
            href="/projects/tim"
            className="group inline-flex items-center gap-2.5 text-sm sm:text-base font-light text-background/60 hover:text-background transition-colors"
          >
            Explorar TIM completo
            <ExternalLink size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
