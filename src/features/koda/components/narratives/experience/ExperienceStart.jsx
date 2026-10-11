"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const questions = [
  {
    title: "¿Qué necesita ver el dueño?",
    description: "Un resumen real del negocio: ventas del día, inventario actual, deudas pendientes y quién hizo qué."
  },
  {
    title: "¿Qué necesita un vendedor mientras trabaja?",
    description: "Registrar la venta rápido, sin buscadores complicados ni pasos innecesarios."
  },
  {
    title: "¿Qué información debe aparecer inmediatamente?",
    description: "Solo lo que importa en ese momento: precio, stock disponible y si el cliente tiene un saldo pendiente."
  },
  {
    title: "¿Qué puede desaparecer?",
    description: "Todo lo que no se usa a diario, el ruido visual también es un problema."
  }
];

const galleryImages = [
  { src: "/koda/productCatalog.png", alt: "Catálogo de productos" },
  { src: "/koda/salesPos.png", alt: "Registro de ventas" },
  { src: "/koda/dailySummary.png", alt: "Resumen del negocio" },
  { src: "/koda/teamManagement.png", alt: "Equipo de trabajo" },
];

const GALLERY_DELAY = 9000;

export default function ExperienceStart() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeGallery, setActiveGallery] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveGallery((i) => (i + 1) % galleryImages.length);
    }, GALLERY_DELAY);
    return () => window.clearInterval(interval);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(".design-title",
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" }
    )
      .fromTo(".design-card",
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(".design-item",
        { autoAlpha: 0, x: -20 },
        { autoAlpha: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(".design-gallery",
        { autoAlpha: 0, scale: 0.95 },
        { autoAlpha: 1, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );
  }, { scope: containerRef });

  return (
    <article
      ref={containerRef}
      className="w-full px-[8vw] py-14 sm:py-16 lg:py-20 flex flex-col justify-center min-h-screen"
    >
      <header className="w-full pb-[4vw]">
        <h2 className="design-title opacity-0 text-left text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-priamry w-full md:w-3/4 leading-relaxed will-change-transform">
          Ahora sí, había que decidir qué debía existir.
        </h2>
      </header>

      <div className="design-card opacity-0 will-change-transform flex flex-col-reverse md:flex-row gap-8 md:gap-10 lg:gap-16 items-start bg-primary/5 rounded-[2rem] p-6 md:p-8 lg:p-12">
        <section className="w-full md:w-2/5 flex flex-col gap-3 items-start">
          {questions.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={item.title}
                onClick={() => setActiveIndex(index)}
                className={`design-item opacity-0 will-change-transform group flex flex-col text-left transition-all duration-500 ease-in-out overflow-hidden cursor-pointer ${isActive
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
                    <Plus size={16} />
                  </div>
                  <span
                    className={`transition-all duration-500 text-md md:text-lg lg:text-xl font-bold tracking-tight leading-relaxed ${isActive
                      ? "text-primary block"
                      : "text-primary/80 group-hover:text-primary truncate"
                      }`}
                  >
                    {item.title}
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
          <div className="design-gallery opacity-0 will-change-transform relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden">
            {galleryImages.map((img, index) => (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                fill
                className={`object-cover transition-opacity duration-700 ease-in-out ${index === activeGallery ? "opacity-100" : "opacity-0"
                  }`}
                priority={index === 0}
              />
            ))}
          </div>

          <div
            className="mt-7 flex justify-center"
            role="tablist"
          >
            <div className="flex items-center gap-4 rounded-full bg-primary/5 px-5 py-3 sm:px-6 sm:py-4">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveGallery(index)}
                  className={`h-5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${index === activeGallery ? "w-16 bg-primary" : "w-5 bg-primary/25 hover:bg-primary/50"
                    }`}
                />
              ))}
            </div>
          </div>
        </figure>

      </div>
    </article>
  );
}
