"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DEFAULT_AUTOPLAY_DELAY = 6500;

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HighlightsGallery({
  id = "highlights",
  title = "Todo en su lugar.",
  slides = [],
  mode = "light",
  autoplayDelay = DEFAULT_AUTOPLAY_DELAY,
  ariaLabel = "Galería destacada",
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const slideRefs = useRef([]);
  const isAnimatingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  const isDark = mode === "dark";

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
    if (isPaused || slides.length === 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const autoplay = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, autoplayDelay);

    return () => window.clearInterval(autoplay);
  }, [isPaused, slides.length, autoplayDelay]);

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
        const closestCenter =
          slideRefs.current[closest].offsetLeft + slideRefs.current[closest].clientWidth / 2;
        const carouselCenter = carousel.scrollLeft + carousel.clientWidth / 2;

        return Math.abs(slideCenter - carouselCenter) < Math.abs(closestCenter - carouselCenter)
          ? index
          : closest;
      }, 0);

      setActiveIndex(closestIndex);
    }, 100);
  };

  const sectionBg = isDark ? "bg-background/5 text-background" : "bg-primary/5 text-primary";
  const titleColor = isDark ? "text-background" : "text-primary";
  const cardStyle = isDark
    ? "bg-primary text-background"
    : "bg-background text-primary";
  const copyColor = isDark ? "text-background/80" : "text-primary/80";
  const dotsContainerBg = isDark
    ? "bg-background/5"
    : "bg-primary/5";
  const dotActive = isDark ? "w-16 bg-background" : "w-16 bg-primary";
  const dotInactive = isDark
    ? "w-5 bg-background/25 hover:bg-background/50"
    : "w-5 bg-primary/25 hover:bg-primary/50";
  const focusRing = isDark
    ? "focus-visible:outline-background"
    : "focus-visible:outline-primary";

  return (
    <section
      ref={containerRef}
      id={id}
      className={`overflow-hidden min-h-screen flex flex-col justify-center items-center py-14 sm:py-16 lg:py-20 ${sectionBg}`}
    >
      <header className="w-full px-6 md:px-8 lg:px-12 xl:px-20">
        <h2
          className={`highlights-title text-left text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight w-full md:w-3/4 leading-relaxed opacity-0 will-change-transform ${titleColor}`}
        >
          {title}
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
              key={`${slide.copy}-${index}`}
              ref={(element) => {
                slideRefs.current[index] = element;
              }}
              className={`w-[min(70rem,calc(100vw_-_3rem))] shrink-0 snap-center rounded-2xl px-5 pb-6 pt-7 text-center sm:rounded-[2rem] sm:px-8 sm:pb-8 sm:pt-9 md:px-10 md:pb-8 md:pt-9 ${cardStyle}`}
              aria-hidden={index !== activeIndex}
            >
              <h3
                className={`mx-auto max-w-xl text-xl md:text-3xl lg:text-4xl font-light tracking-tight leading-relaxed ${copyColor}`}
              >
                {slide.copy}
              </h3>

              <div className="relative mx-auto mt-5 w-full max-w-2xl sm:mt-6 overflow-hidden rounded-xl">
                <Image
                  className="mx-auto h-auto w-full object-cover select-none"
                  src={slide.image}
                  alt={slide.alt || slide.copy}
                  width={1536}
                  height={1024}
                  sizes="(max-width: 768px) calc(100vw - 3rem), 672px"
                  priority={index === 0}
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 flex justify-center" role="tablist" aria-label={ariaLabel}>
          <div className={`flex items-center gap-4 rounded-full px-5 py-3 sm:px-6 sm:py-4 ${dotsContainerBg}`}>
            {slides.map((slide, index) => (
              <button
                key={`${slide.copy}-dot-${index}`}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Ver ${slide.copy}`}
                onClick={() => setActiveIndex(index)}
                className={`h-5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 ${focusRing} ${
                  index === activeIndex ? dotActive : dotInactive
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
