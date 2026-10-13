"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function BeyondInventoryKeyQuote() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".beyond-quote-box",
        { autoAlpha: 0, y: 35 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
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
    <div ref={containerRef} className="py-12 border-t border-primary/10">
      <div className="beyond-quote-box max-w-4xl">
        <p className="text-xl md:text-2xl font-light text-primary/80 leading-relaxed">
          Ya no quería tomar una tarea aislada y convertirla automáticamente en una aplicación. Quería entender cómo se relacionaba con las demás y qué ocurría cuando la información y las operaciones se encontraban separadas.
        </p>

        <blockquote className="mt-8 rounded-2xl border-l-4 border-primary bg-background p-8 md:p-10">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary leading-tight">
            El reto no era simplemente digitalizar una tarea, sino pensar en cómo las distintas partes del negocio podían trabajar juntas.
          </p>
        </blockquote>
      </div>
    </div>
  );
}
