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

        // 0. Animaciones de entrada vertical para el Punchline
        gsap.fromTo(".ch3-bridge",
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
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
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // 1. Entrada de la frase completa ("Antes de la interfaz.")
        gsap.from(".ch3-swap-text-container", {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ch3-swap-panel",
            containerAnimation: scrollTween,
            start: "left 85%", // Se anima al entrar a la pantalla
            toggleActions: "play none none reverse",
          }
        });

        // 2. Swap Timeline ("Antes de la interfaz, diseño, código")
        const swapTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".ch3-swap-panel",
            containerAnimation: scrollTween,
            start: "left left",
            end: "right right",
            scrub: true,
          }
        });

        // Efecto "Sticky" horizontal: movemos el texto a la derecha a la misma velocidad
        swapTl.to(".ch3-swap-text", {
          x: () => window.innerWidth,
          ease: "none",
          duration: 1
        }, 0);

        // Cambios de palabras coordinados (solo cambia la última parte)
        swapTl
          .to(".ch3-word-1", { opacity: 0, y: -40, duration: 0.2 }, 0.15)
          .fromTo(".ch3-word-2", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.2 }, 0.15)
          
          .to(".ch3-word-2", { opacity: 0, y: -40, duration: 0.2 }, 0.65)
          .fromTo(".ch3-word-3", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.2 }, 0.65);


        // Animaciones de los paneles normales
        gsap.utils.toArray('.ch3-anim').forEach(el => {
          gsap.from(el, {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              containerAnimation: scrollTween,
              start: "left 80%",
              toggleActions: "play none none reverse",
            }
          });
        });

        // "comprendo:" entra desde la izquierda
        gsap.from(".ch3-comprendo", {
          opacity: 0,
          x: -60,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ch3-context-panel",
            containerAnimation: scrollTween,
            start: "left 80%",
            toggleActions: "play none none reverse",
          }
        });

        // Lista entra en cascada desde abajo (derecha)
        gsap.from(".ch3-list-item", {
          opacity: 0,
          y: 50,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ch3-context-panel",
            containerAnimation: scrollTween,
            start: "left 70%",
            toggleActions: "play none none reverse",
          }
        });

        ScrollTrigger.refresh();
      }
    }, 50);

    return () => clearInterval(initInterval);
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full h-screen bg-[#111] text-[#f4f4f0] overflow-hidden">
      
      <div ref={trackRef} className="flex h-full w-max items-center">
        
        {/* PANEL 0: Punchline desde el final del Capítulo 2 (Fondo claro) */}
        <div className="w-screen h-screen flex flex-col justify-end items-end px-20 pb-20 bg-background text-primary shrink-0 relative">
          <p className="ch3-bridge text-2xl md:text-3xl font-medium tracking-tight text-primary/50 text-right mb-6">
            Y poco a poco entendí algo:
          </p>
          <p className="ch3-punchline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-right w-2/3 leading-tight">
            antes de construir una solución, tenía que entender el problema.
          </p>
        </div>

        {/* PANEL 1: "Antes de..." - Intercambio en el sitio (Sticky Fake) */}
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

        {/* PANEL 2+3 Unificado: "comprendo:" top-left, lista centrada derecha */}
        <div className="ch3-context-panel w-screen h-screen flex shrink-0 relative">
          {/* Top-left: "comprendo:" */}
          <div className="absolute top-16 left-20">
            <p className="ch3-comprendo text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white/40 leading-none">
              comprendo:
            </p>
          </div>

          {/* Center-right: lista — más hacia el centro */}
          <div className="absolute bottom-1/4 right-1/4 flex flex-col">
            {CONTEXT_LIST.map((item, i) => (
              <p
                key={i}
                className="ch3-list-item text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white/80 border-t border-white/10 py-6 text-right last:border-b last:border-white/10"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* PANEL 4: Observación */}
        <div className="w-[80vw] flex flex-col justify-center px-20 shrink-0">
          <p className="ch3-anim text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight max-w-4xl text-white/60">
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
