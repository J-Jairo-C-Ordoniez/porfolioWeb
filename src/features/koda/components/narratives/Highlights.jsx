"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const slides = [
  { copy: "Lo importante del día, siempre a la vista.", image: "/summary.png", alt: "Resumen de KODA mostrado en una tableta" },
  { copy: "Cada prenda sabe dónde está.", image: "/catalog.png", alt: "Catálogo de productos de KODA mostrado en una tableta" },
  { copy: "Vender rápido también puede sentirse simple.", image: "/sales.png", alt: "Punto de venta de KODA mostrado en una tableta" },
  { copy: "Tus pendientes no se pierden de vista.", image: "/customers.png", alt: "Gestión de clientes de KODA mostrada en una tableta" },
  { copy: "Todos saben qué pasó y quién estuvo.", image: "/team.png", alt: "Gestión de equipo de KODA mostrada en una tableta" },
];

const AUTOPLAY_DELAY = 6500;

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Highlights() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const slideRefs = useRef([]);
  const isAnimatingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reducedMotion) {
        gsap.set(".highlights-title, .highlights-carousel", { autoAlpha: 1, y: 0 });
        return undefined;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
        },
      });

      timeline
        .fromTo(
          ".highlights-title",
          { autoAlpha: 0, y: 32 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(
          ".highlights-carousel",
          { autoAlpha: 0, y: 48 },
          { autoAlpha: 1, y: 0, duration: 0.95, ease: "power3.out" },
          "-=0.45"
        );

      return undefined;
    },
    { scope: containerRef }
  );

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const autoplay = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(autoplay);
  }, [isPaused]);

  useEffect(() => {
    const carousel = carouselRef.current;
    const activeSlide = slideRefs.current[activeIndex];

    if (!carousel || !activeSlide) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const centeredPosition = activeSlide.offsetLeft - (carousel.clientWidth - activeSlide.clientWidth) / 2;
    isAnimatingRef.current = true;

    const tween = gsap.to(carousel, {
      scrollLeft: Math.max(0, centeredPosition),
      duration: reducedMotion ? 0 : 0.95,
      ease: "power3.inOut",
      overwrite: true,
      onComplete: () => {
        isAnimatingRef.current = false;
      },
    });

    return () => tween.kill();
  }, [activeIndex]);

  useEffect(
    () => () => {
      if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
    },
    []
  );

  const handleScroll = () => {
    if (isAnimatingRef.current || !carouselRef.current) return;

    if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);

    scrollTimeoutRef.current = window.setTimeout(() => {
      const carousel = carouselRef.current;
      const closestIndex = slideRefs.current.reduce((closest, slide, index) => {
        if (!slide) return closest;

        const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
        const closestCenter = slideRefs.current[closest].offsetLeft + slideRefs.current[closest].clientWidth / 2;
        const carouselCenter = carousel.scrollLeft + carousel.clientWidth / 2;

        return Math.abs(slideCenter - carouselCenter) < Math.abs(closestCenter - carouselCenter)
          ? index
          : closest;
      }, 0);

      setActiveIndex(closestIndex);
    }, 100);
  };

  return (
    <section
      ref={containerRef}
      id="highlights"
      className="overflow-hidden min-h-screen flex flex-col justify-center items-center bg-primary/5 py-14 text-primary sm:py-16 lg:py-20"
    >
      <header className="w-full px-6 md:px-8 lg:px-12 xl:px-20">
        <h2 className="highlights-title text-left text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-priamry w-full md:w-3/4 leading-relaxed opacity-0 will-change-transform">
          Todo en su lugar.
        </h2>
      </header>

      <div
        className="highlights-carousel mt-8 w-screen opacity-0 will-change-transform md:mt-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
        }}
      >
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scroll-smooth px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-6 md:px-8 lg:px-12 xl:pl-[calc((100vw_-_80rem)_/_2_+_5rem)] xl:pr-[calc((100vw_-_80rem)_/_2_+_5rem)]"
        >
          {slides.map((slide, index) => (
            <article
              key={slide.copy}
              ref={(element) => {
                slideRefs.current[index] = element;
              }}
              className="w-[min(70rem,calc(100vw_-_3rem))] shrink-0 snap-center rounded-2xl bg-background px-5 pb-6 pt-7 text-center sm:rounded-[2rem] sm:px-8 sm:pb-8 sm:pt-9 md:px-10 md:pb-8 md:pt-9"
              aria-hidden={index !== activeIndex}
            >
              <h3 className="mx-auto max-w-xl text-xl md:text-3xl lg:text-4xl font-light tracking-tight text-primary/80 leading-relaxed">
                {slide.copy}
              </h3>

              <Image
                className="mx-auto mt-5 h-auto w-full max-w-2xl select-none sm:mt-6"
                src={slide.image}
                alt={slide.alt}
                width={1536}
                height={1024}
                sizes="(max-width: 768px) calc(100vw - 3rem), 672px"
                priority={index === 0}
              />
            </article>
          ))}
        </div>

        <div
          className="mt-7 flex justify-center"
          role="tablist"
          aria-label="Secciones de KODA"
        >
          <div className="flex items-center gap-4 rounded-full bg-primary/5 px-5 py-3 sm:px-6 sm:py-4">
            {slides.map((slide, index) => (
              <button
                key={slide.copy}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Ver ${slide.copy}`}
                onClick={() => setActiveIndex(index)}
                className={`h-5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${index === activeIndex ? "w-16 bg-primary" : "w-5 bg-primary/25 hover:bg-primary/50"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
