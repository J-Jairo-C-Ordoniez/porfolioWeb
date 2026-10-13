"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    number: "01",
    title: "La funcionalidad técnica no garantiza la adopción",
    description: "Un software puede compilar sin errores, persistir en bases de datos y estar 100% terminado; si no resuelve la fricción real del comerciante, será abandonado.",
  },
  {
    number: "02",
    title: "Trascender la perspectiva de desarrollador",
    description: "No se pueden interpretar las necesidades de un negocio proyectando únicamente la conveniencia técnica o el entusiasmo por programar herramientas.",
  },
  {
    number: "03",
    title: "Diseñar para la persona, no para la estructura de datos",
    description: "La arquitectura de la información y la interfaz deben hablar el lenguaje de quien atiende la tienda, no el esquema de las tablas relacionales.",
  },
];

export default function SynthesisPrinciples() {
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
        ".principle-item",
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power2.out" }
      ).fromTo(
        ".golden-rule",
        { autoAlpha: 0, scale: 0.95, y: 40 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.2"
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="my-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {principles.map((item) => (
          <article
            key={item.number}
            className="principle-item rounded-2xl border border-primary/10 bg-background p-8 flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-primary/60">
                Aprendizaje
              </span>
              <h3 className="mt-4 text-xl font-bold tracking-tight text-primary md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 text-base font-light text-primary/75 leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-primary/50">
              <Check size={14} className="text-primary" />
              <span>Validado en campo</span>
            </div>
          </article>
        ))}
      </div>

      {/* Golden Motto */}
      <div className="golden-rule mt-16 rounded-[2.5rem] border border-primary/20 bg-background p-10 md:p-16 text-center">
        <p className="text-sm font-mono uppercase tracking-widest text-primary/60 mb-4">
          El principio que rige todo el proyecto KODA
        </p>
        <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-tight">
          Primero comprender.
          <span className="block font-medium text-primary/80">Después decidir.</span>
          <span className="block font-light text-primary/60">Finalmente construir.</span>
        </p>
      </div>
    </div>
  );
}
