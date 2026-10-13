"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpen, FileSpreadsheet, AlertCircle } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ExplorationCases() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".case-card",
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      ).fromTo(
        ".case-conclusion",
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Case A */}
        <article className="case-card rounded-[2rem] border border-primary/10 bg-background p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 text-primary">
              <BookOpen size={24} />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary/60">Caso Observado A</span>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-primary md:text-3xl">
              Estética moderna, libreta física
            </h3>
            <p className="mt-4 text-base md:text-lg text-primary/80 font-light leading-relaxed">
              Una tienda pequeña, de apariencia moderna y cuidada, donde una persona mayor seguía confiando en un libro físico para llevar las cuentas y el control cotidiano.
            </p>
          </div>
          <div className="mt-8 border-t border-primary/10 pt-4">
            <span className="text-xs font-mono uppercase tracking-wider text-primary/50">
              Confianza construida en el papel
            </span>
          </div>
        </article>

        {/* Case B */}
        <article className="case-card rounded-[2rem] border border-primary/10 bg-background p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 text-primary">
              <FileSpreadsheet size={24} />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary/60">Caso Observado B</span>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-primary md:text-3xl">
              Propietario joven, hojas de cálculo
            </h3>
            <p className="mt-4 text-base md:text-lg text-primary/80 font-light leading-relaxed">
              En otra tienda, un propietario joven utilizaba Excel para controlar solo una parte de su negocio, apoyándose en su memoria para el resto.
            </p>
          </div>
          <div className="mt-8 border-t border-primary/10 pt-4">
            <span className="text-xs font-mono uppercase tracking-wider text-primary/50">
              Fragmentación de herramientas
            </span>
          </div>
        </article>
      </div>

      {/* Cuestionamiento */}
      <div className="case-conclusion mt-12 rounded-[2rem] border border-primary/20 bg-background/60 p-8 md:p-12">
        <div className="flex items-start gap-4">
          <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary">
            <AlertCircle size={18} />
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-semibold text-primary tracking-tight">
              Cuestionar las suposiciones dadas por sentado
            </h4>
            <p className="mt-3 text-lg md:text-xl font-light text-primary/80 leading-relaxed">
              Dos experiencias distintas. Ninguna permitía sacar conclusiones sobre todos los comerciantes, pero ambas me ayudaron a derribar una suposición clásica:{" "}
              <strong className="font-medium text-primary">
                la relación de una persona con la tecnología no se deduce fácilmente por su edad, por la apariencia del establecimiento o por tener un computador a mano.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
