"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus } from "lucide-react"

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "Más productos",
    description: "El inventario crece y el control manual genera graves pérdidas.",
    img: "/inventario.png",
    alt: "Inventario descontrolado"
  },
  {
    title: "Más ventas",
    description: "Mayor volumen exige rapidez; anotar a mano retrasa cada transacción.",
    img: "/ventas.png",
    alt: "Registro de ventas"
  },
  {
    title: "Más clientes",
    description: "Aumentan los fiados; es vital registrar la deuda sin errores.",
    img: "/clientes.png",
    alt: "Clientes y fiados"
  },
  {
    title: "Más cosas que recordar",
    description: "La carga mental sube al dispersarse la información del negocio.",
    img: "/cargaMental.png",
    alt: "Carga mental acumulada"
  }
];

export default function GrowthStart() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(".growth-title",
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" }
    )
      .fromTo(".growth-card",
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(".growth-item",
        { autoAlpha: 0, x: -20 },
        { autoAlpha: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(".growth-image",
        { autoAlpha: 0, scale: 0.95 },
        { autoAlpha: 1, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );

  }, { scope: containerRef });

  return (
    <article
      ref={containerRef}
      className="w-full px-6 md:px-8 lg:px-12 xl:px-20 py-14 sm:py-16 lg:py-20 flex flex-col justify-center min-h-screen"
    >
      <header className="w-full pb-[4vw]">
        <h2 className="growth-title text-left text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-priamry w-full md:w-3/4 leading-relaxed opacity-0 will-change-transform">
          El problema apareció cuando todo empezó a crecer.
        </h2>
      </header>

      <div className="growth-card w-full opacity-0 will-change-transform flex flex-col-reverse md:flex-row gap-8 md:gap-10 lg:gap-16 items-start bg-primary/5 rounded-[2rem] p-6 md:p-8 lg:p-12">
        <section className="w-full md:w-2/5 flex flex-col gap-3 items-start">
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={item.title}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer growth-item opacity-0 will-change-transform group flex flex-col text-left transition-all duration-500 ease-in-out overflow-hidden ${isActive
                  ? "bg-background rounded-3xl p-5 md:p-6 w-full"
                  : "bg-background/80 hover:bg-background rounded-full px-5 py-3 max-w-full"
                  }`}
              >
                <div className="flex items-center gap-4 w-full">
                  <div
                    className={`flex items-center justify-center transition-all duration-500 ${isActive
                      ? "w-0 opacity-0 overflow-hidden m-0 border-0 hidden"
                      : "w-7 h-7 opacity-100 rounded-full border border-primary/80 text-primary/80 group-hover:text-primary shrink-0"
                      }`}
                  >
                    <Plus />
                  </div>
                  <span
                    className={`transition-all duration-500 text-md md:text-lg lg:text-xl font-bold tracking-tight leading-relaxed ${isActive
                      ? "text-lg text-primary block"
                      : "text-base text-primary/80 group-hover:text-primary truncate"
                      }`}
                  >
                    {item.title}.
                  </span>
                </div>

                <div
                  className={`grid transition-all duration-500 ease-in-out w-full ${isActive ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-lg md:text-xl lg:text-2xl font-light tracking-tight text-primary/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </section>

        <figure className="w-full md:w-3/5">
          <div className="growth-image opacity-0 will-change-transform relative w-full aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden bg-primary/5">
            {items.map((item, index) => (
              <Image
                key={item.img}
                src={item.img}
                alt={item.alt}
                fill
                className={`object-cover transition-opacity duration-500 ease-in-out ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
                priority={index === 0}
              />
            ))}
          </div>
        </figure>
      </div>
    </article>
  );
}
