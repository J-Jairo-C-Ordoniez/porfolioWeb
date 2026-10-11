"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ProblemGrid() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".p-card",
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="w-full px-[8vw] flex flex-col gap-6 md:gap-10"
    >
      <article className="p-card opacity-0 will-change-transform bg-background rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row items-center min-h-[600px]">
        <header className="w-full md:w-1/2 p-[4vw] lg:p-[6vw] flex flex-col justify-center">
          <p className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary leading-relaxed">
            El dueño
          </p>
          <span className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-primary/80 leading-tight">
            necesitaba controlar el negocio.
          </span>
        </header>

        <figure className="w-full md:w-1/2 h-[600px] md:h-full relative min-h-[600px]">
          <Image
            src="/koda/mainHero.png"
            alt="Controlar negocio"
            fill
            className="object-cover"
          />
        </figure>
      </article>

      <article className="p-card opacity-0 will-change-transform bg-background rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row items-center min-h-[600px]">
        <header className="w-full md:w-1/2 p-[4vw] lg:p-[6vw] flex flex-col justify-center">
          <p className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary leading-relaxed">
            Los empleados
          </p>
          <span className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-primary/80 leading-tight">
            necesitaban vender rápido.
          </span>
        </header>

        <figure className="w-full md:w-1/2 h-[600px] md:h-full relative min-h-[600px]">
          <Image
            src="/koda/salesPos.png"
            alt="Controlar negocio"
            fill
            className="object-cover"
          />
        </figure>
      </article>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <article className="p-card opacity-0 will-change-transform bg-background rounded-[2.5rem] overflow-hidden flex flex-col items-center min-h-[600px]">
          <header className="w-full p-[4vw] lg:p-[6vw] flex flex-col justify-center">
            <p className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary leading-relaxed">
              El inventario
            </p>
            <span className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-primary/80 leading-tight">
              necesitaba mantenerse actualizado
            </span>
          </header>

          <figure className="w-full h-[500px] md:h-full relative min-h-[500px]">
            <Image
              src="/koda/productCatalog.png"
              alt="Controlar negocio"
              fill
              className="object-cover"
            />
          </figure>
        </article>

        <article className="p-card opacity-0 will-change-transform bg-background rounded-[2.5rem] overflow-hidden flex flex-col items-center min-h-[600px]">
          <header className="w-full p-[4vw] lg:p-[6vw] flex flex-col justify-center">
            <p className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary leading-relaxed">
              Los clientes
            </p>
            <span className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-primary/80 leading-tight">
              necesitaban una experiencia sencilla
            </span>
          </header>

          <figure className="w-full h-[500px] relative min-h-[500px]">
            <Image
              src="/koda/storeCustomers.png"
              alt="Controlar negocio"
              fill
              className="object-cover"
            />
          </figure>
        </article>
      </div>

      <article className="p-card opacity-0 will-change-transform bg-background rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row items-center min-h-[600px]">
        <header className="w-full md:w-3/4 p-[4vw] lg:p-[6vw] flex flex-col justify-center">
          <p className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary leading-relaxed">
            Toda esa información
          </p>
          <span className="text-xl md:text-3xl lg:text-4xl font-light tracking-tight text-primary/80 leading-tight">
            tenía que relacionarse entre sí.
          </span>

          <p className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary/80 leading-tight py-4">
            Porque una venta no termina cuando alguien paga:
          </p>

          <ul className="flex flex-col gap-3">
            {[
              "También cambia el inventario.",
              "Puede generar una deuda.",
              "Puede involucrar a un empleado."
            ].map((point, i) => (
              <li key={i} className="flex items-center gap-4 text-xl md:text-3xl lg:text-4xl font-light tracking-tight text-primary/80 leading-tight">
                <span className="block mt-2.5 w-2 h-2 rounded-full bg-primary/80 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </header>

        <figure className="w-full lg:w-1/2 h-[400px] lg:h-full relative lg:min-h-[650px]">
          <Image src="/koda/manualNotebook.jpeg" alt="Sistema entrelazado" fill className="object-cover" />
        </figure>
      </article>
    </section>
  );
}
