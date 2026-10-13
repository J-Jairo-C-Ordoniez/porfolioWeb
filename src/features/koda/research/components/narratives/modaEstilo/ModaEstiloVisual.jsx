"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ModaEstiloVisual() {
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
        ".moda-card",
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          ".moda-photo",
          { scale: 1.08 },
          { scale: 1, duration: 1.2, ease: "power2.out" },
          "<"
        )
        .fromTo(
          ".moda-point",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" },
          "-=0.5"
        );
    },
    { scope: containerRef }
  );

  return (
    <article
      ref={containerRef}
      className="moda-card my-12 overflow-hidden rounded-[2rem] bg-background border border-primary/10 md:rounded-[2.5rem]"
    >
      <div className="flex flex-col lg:flex-row-reverse">
        {/* Visual asset */}
        <div className="relative h-[400px] w-full overflow-hidden bg-primary/5 sm:h-[500px] lg:h-auto lg:w-1/2">
          <Image
            src="/koda/research/modaYEstilo.jpg"
            alt="Moda y Estilo - Primer prototipo de software comercial"
            fill
            className="moda-photo object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute bottom-6 left-6 rounded-full bg-background/80 backdrop-blur px-4 py-2 text-xs font-mono uppercase tracking-wider text-primary">
            Recurso Visual · Moda y Estilo
          </div>
        </div>

        {/* Narrative */}
        <div className="flex w-full flex-col justify-center p-8 sm:p-12 lg:w-1/2 lg:p-16">
          <span className="moda-point text-xs font-mono uppercase tracking-widest text-primary/60">
            La brecha comunicativa
          </span>

          <p className="moda-point mt-4 text-xl font-light leading-relaxed text-primary/90 md:text-2xl">
            Cuando llegaba el momento de presentar lo que había hecho, me concentraba demasiado en explicar el sistema: cómo funcionaba, qué había construido y qué podía hacer técnicamente.
          </p>

          <p className="moda-point mt-4 text-2xl font-medium tracking-tight text-primary md:text-3xl">
            Me costaba conectar esas explicaciones con algo mucho más importante: por qué aquello podía ser útil para el negocio.
          </p>

          <div className="moda-point mt-8 border-t border-primary/10 pt-6">
            <p className="text-base text-primary/70 leading-relaxed md:text-lg">
              Finalmente, terminé el sistema y lo presenté. Sin embargo, el negocio no llegó a incorporarlo a su trabajo cotidiano. El software estaba listo, pero no tenía sentido en su rutina.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
