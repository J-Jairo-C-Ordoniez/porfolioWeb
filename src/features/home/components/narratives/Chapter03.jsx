"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const CONTEXT_LIST = [
  "El negocio.",
  "El sector.",
  "Las personas.",
  "Los procesos.",
  "Las restricciones."
];

export default function Chapter03() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    const initInterval = setInterval(() => {
      if (typeof window !== "undefined" && window.__storyScrollTween) {
        clearInterval(initInterval);

        const track = trackRef.current;

        // El scroll horizontal principal
        const scrollTween = gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => "+=" + track.scrollWidth,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // 0. Punchline
        gsap.fromTo(".ch3-bridge",
          { opacity: 0, y: 60 },
          {
            opacity: 1, y: 0, duration: 1, ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(".ch3-punchline",
          { opacity: 0, y: 120 },
          {
            opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // 1. Entrada "Antes de..."
        gsap.from(".ch3-swap-text-container", {
          opacity: 0, y: 60, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: ".ch3-swap-panel",
            containerAnimation: scrollTween,
            start: "left 85%",
            toggleActions: "play none none reverse",
          }
        });

        // 2. Swap Timeline
        const swapTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".ch3-swap-panel",
            containerAnimation: scrollTween,
            start: "left left",
            end: "right right",
            scrub: true,
          }
        });

        swapTl.to(".ch3-swap-text", { x: () => window.innerWidth, ease: "none", duration: 1 }, 0);
        swapTl
          .to(".ch3-word-1", { opacity: 0, y: -40, duration: 0.2 }, 0.15)
          .fromTo(".ch3-word-2", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.2 }, 0.15)
          .to(".ch3-word-2", { opacity: 0, y: -40, duration: 0.2 }, 0.65)
          .fromTo(".ch3-word-3", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.2 }, 0.65);

        // Paneles normales
        gsap.utils.toArray('.ch3-anim').forEach(el => {
          gsap.from(el, {
            opacity: 0, y: 40, duration: 1, ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              containerAnimation: scrollTween,
              start: "left 80%",
              toggleActions: "play none none reverse",
            }
          });
        });

        // ─── PANEL COMPRENDO (300vw) ───
        // El panel ocupa 3 pantallas. Mientras el panel scrollea 2 pantallas (left→right),
        // movemos el contenedor interno +2vw por cada 1vw desplazado → efecto de anclado.
        // Exactamente el mismo truco que swapTl con .ch3-swap-text.
        const contextTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".ch3-context-panel",
            containerAnimation: scrollTween,
            start: "left left",   // cuando el panel entra a la pantalla
            end: "right right",   // cuando el panel sale completamente
            scrub: 1,
          }
        });

        // Contra-movimiento: panel = 300vw, por lo tanto desplazamiento = 200vw
        // Movemos el sticky +200vw para que parezca fijo en pantalla
        contextTl.to(".ch3-context-sticky", {
          x: () => window.innerWidth * 2,
          ease: "none",
          duration: 1,
        }, 0);

        // "comprendo:" aparece al inicio (primeros 10% del timeline)
        contextTl.fromTo(".ch3-comprendo",
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, ease: "power3.out", duration: 0.1 },
          0
        );

        // Items: se reparten entre el 15% y el 95% del timeline
        const slotSize = 0.80 / CONTEXT_LIST.length;

        gsap.utils.toArray(".ch3-list-item").forEach((item, i) => {
          const line = item.querySelector(".ch3-line-reveal");
          const text = item.querySelector(".ch3-item-text");
          const slotStart = 0.10 + i * slotSize;
          const lineEnd   = slotStart + slotSize * 0.45;
          const textEnd   = slotStart + slotSize * 0.75;

          // Línea se dibuja de derecha a izquierda
          contextTl.fromTo(line,
            { scaleX: 0, transformOrigin: "right center" },
            { scaleX: 1, ease: "power2.out", duration: lineEnd - slotStart },
            slotStart
          );

          // Texto aparece deslizándose
          contextTl.fromTo(text,
            { opacity: 0, x: 24 },
            { opacity: 1, x: 0, ease: "power2.out", duration: textEnd - lineEnd },
            lineEnd
          );
        });

        ScrollTrigger.refresh();
      }
    }, 50);

    return () => clearInterval(initInterval);
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full h-screen bg-[#111] text-[#f4f4f0] overflow-hidden">

      <div ref={trackRef} className="flex h-full w-max items-center">

        {/* PANEL 0: Punchline */}
        <div className="w-screen h-screen flex flex-col justify-center items-end px-20 pb-20 bg-background text-primary shrink-0 relative">
          <p className="ch3-bridge text-2xl md:text-3xl font-medium tracking-tight text-primary/50 text-right mb-6">
            Y poco a poco entendí algo:
          </p>
          <p className="ch3-punchline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-right w-2/3 leading-tight">
            antes de construir una solución, tenía que entender el problema.
          </p>
        </div>

        {/* PANEL 1: "Antes de..." */}
        <div className="ch3-swap-panel w-[200vw] h-screen flex flex-col justify-center shrink-0">
          <div className="ch3-swap-text w-screen relative flex justify-center items-center">
            <p className="ch3-swap-text-container text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white flex items-center">
              <span className="text-white/60 whitespace-pre">Antes de </span>
              <span className="inline-grid text-left ml-3 md:ml-4 text-white">
                <span className="ch3-word-1 col-start-1 row-start-1">la interfaz.</span>
                <span className="ch3-word-2 col-start-1 row-start-1 opacity-0">el diseño.</span>
                <span className="ch3-word-3 col-start-1 row-start-1 opacity-0">el código.</span>
              </span>
            </p>
          </div>
        </div>

        {/* PANEL 2: comprendo — 300vw de ancho, el sticky va a contramano */}
        <div className="ch3-context-panel w-[300vw] h-screen flex shrink-0 relative overflow-hidden">

          {/* Este div se mueve +200vw a medida que el panel se desplaza, efecto anclado */}
          <div className="ch3-context-sticky w-screen h-screen shrink-0 relative">

            {/* "comprendo:" top-left */}
            <div className="absolute top-16 left-20">
              <p className="ch3-comprendo text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white/40 leading-none">
                comprendo:
              </p>
            </div>

            {/* Lista — derecha, con margen del borde */}
            <div className="absolute inset-0 flex items-center justify-end pr-32">
              <div className="flex flex-col items-end gap-8">
                {CONTEXT_LIST.map((item, i) => (
                  <div key={i} className="ch3-list-item flex flex-col items-end gap-2">
                    {/* Línea animada */}
                    <div className="ch3-line-reveal w-64 h-[1.5px] bg-white/40" />
                    {/* Texto */}
                    <span className="ch3-item-text text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white/80 text-right">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* PANEL 4: Observación */}
        <div className="w-screen flex flex-col justify-center items-center px-32 shrink-0">
          <p className="ch3-anim text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight max-w-3xl text-white/60">
            Observo el mercado, los comportamientos y aquello que ocurre alrededor del producto.
          </p>
        </div>

        {/* PANEL 5: Clímax */}
        <div className="w-[90vw] flex flex-col justify-center px-20 pr-40 shrink-0">
          <p className="ch3-anim text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight max-w-5xl text-white">
            Porque una aplicación no existe aislada,<br/>
            <span className="text-white/40">existe dentro de un </span>
            sistema.
          </p>
        </div>

      </div>
    </section>
  );
}
