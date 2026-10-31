"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const decisions = [
  {
    step: "01",
    lead: "Explorar el inicio.",
    description:
      "Entre la infancia de Tim y el vínculo con su comunidad, descarté anécdotas sin contexto previo: el visitante necesitaba entender antes de conectar.",
    image: "/tim/gallery1.png",
    alt: "Exploración del punto de inicio para la narrativa de TIM",
  },
  {
    step: "02",
    lead: "Replantear la introducción.",
    description:
      "Separé el contexto textual de la imagen: primero un texto conciso sobre Tim Bergling y Avicii, seguido de un espacio amplio dedicado a su fotografía.",
    image: "/tim/gallery2.png",
    alt: "Estructura de la pantalla introductoria y fotografía de Tim",
  },
  {
    step: "03",
    lead: "Lenguaje visual.",
    description:
      "Combiné la calma pausada de un formato editorial con la fuerza cinematográfica del ritmo audiovisual, la música y la tipografía en movimiento.",
    image: "/tim/gallery3.png",
    alt: "Equilibrio entre diseño editorial y recursos cinematográficos",
  },
  {
    step: "04",
    lead: "Conectar las escenas.",
    description:
      "Fotografías, testimonios, archivo y transiciones al desplazarse: ningún recurso es decorativo, cada uno aporta continuidad entre la persona y su legado.",
    image: "/tim/gallery4.png",
    alt: "Articulación y continuidad fluida entre momentos de la experiencia",
  },
  {
    step: "05",
    lead: "Aterrizar la propuesta.",
    description:
      "Ni biografía tradicional ni galería de homenajes: una experiencia interactiva que conecta perspectivas alrededor del ser humano detrás del creador.",
    image: "/tim/gallery5.png",
    alt: "Aterrizaje final de la propuesta interactiva de TIM",
  },
];

export default function DecideCards() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    el.scrollTo({ left: 0 });
    updateScrollState();

    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const handleScroll = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const gap = parseFloat(getComputedStyle(el).gap) || 32;
    const scrollAmount = (cardWidth + gap) * direction;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reducedMotion) {
        gsap.set(".decide-card-item, .decide-card-controls", {
          autoAlpha: 1,
          y: 0,
        });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".decide-card-item",
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power2.out" }
      ).fromTo(
        ".decide-card-controls",
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      );
    },
    { scope: containerRef }
  );

  return (
    <article
      ref={containerRef}
      className="flex min-h-screen w-full flex-col justify-center overflow-hidden py-16 md:py-24"
    >
      <div
        ref={trackRef}
        style={{
          scrollPaddingLeft: "8vw",
          scrollPaddingRight: "8vw",
          paddingLeft: "8vw",
          paddingRight: "8vw",
        }}
        className="flex snap-x snap-mandatory gap-12 overflow-x-auto overscroll-x-contain scroll-smooth pb-6 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-16"
      >
        {decisions.map((item, index) => (
          <article
            key={index}
            className="decide-card-item will-change-transform flex w-[min(46rem,calc(100vw_-_16vw))] shrink-0 snap-start flex-col text-left"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[2rem]">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) calc(100vw - 16vw), 740px"
                className="object-cover select-none"
              />
            </div>

            <div className="mt-6 md:mt-8">
              <p className="text-xl font-light tracking-tight leading-relaxed text-background/80 md:text-2xl lg:text-3xl">
                <strong className="block font-semibold text-background mb-2 sm:inline sm:mb-0 sm:mr-3">
                  {item.lead}
                </strong>
                {item.description}
              </p>
            </div>
          </article>
        ))}
        <div className="w-[8vw] shrink-0" aria-hidden="true" />
      </div>

      <div className="decide-card-controls will-change-transform mt-8 flex items-center justify-end gap-4 px-[8vw] md:mt-12">
        <button
          type="button"
          onClick={() => handleScroll(-1)}
          disabled={!canScrollLeft}
          aria-label="Desplazar a la izquierda"
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-background/20 bg-background/5 text-background transition-colors hover:border-background/40 hover:bg-background/15 disabled:cursor-not-allowed disabled:opacity-20"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          onClick={() => handleScroll(1)}
          disabled={!canScrollRight}
          aria-label="Desplazar a la derecha"
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-background/20 bg-background/5 text-background transition-colors hover:border-background/40 hover:bg-background/15 disabled:cursor-not-allowed disabled:opacity-20"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </article>
  );
}
