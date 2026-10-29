"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeatureTabsGallery({
  id,
  title,
  items = [],
  mode = "light",
  ariaLabel = "Galería interactiva de pestañas",
  className = "",
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const isDark = mode === "dark";

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reducedMotion) {
        gsap.set(".feature-tabs-title, .feature-tabs-card, .feature-tabs-item, .feature-tabs-image", {
          autoAlpha: 1,
          y: 0,
          x: 0,
          scale: 1,
        });
        return undefined;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      timeline
        .fromTo(
          ".feature-tabs-title",
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" }
        )
        .fromTo(
          ".feature-tabs-card",
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          ".feature-tabs-item",
          { autoAlpha: 0, x: -20 },
          { autoAlpha: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          ".feature-tabs-image",
          { autoAlpha: 0, scale: 0.95 },
          { autoAlpha: 1, scale: 1, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        );

      return undefined;
    },
    { scope: containerRef }
  );

  const sectionBg = isDark ? "bg-primary text-background" : "bg-background text-primary";
  const titleColor = isDark ? "text-background" : "text-primary";
  const cardContainerBg = isDark
    ? "bg-background/5 border border-background/10"
    : "bg-primary/5";
  const buttonActive = isDark
    ? "bg-primary text-background border border-background/20 rounded-3xl p-5 md:p-6 w-full shadow-md"
    : "bg-background text-primary rounded-3xl p-5 md:p-6 w-full shadow-sm";
  const buttonInactive = isDark
    ? "bg-background/5 hover:bg-background/10 text-background/80 hover:text-background rounded-full px-5 py-3 max-w-full"
    : "bg-background/80 hover:bg-background text-primary/80 hover:text-primary rounded-full px-5 py-3 max-w-full";
  const iconWrapper = isDark
    ? "w-7 h-7 rounded-full border border-background/60 text-background/80 group-hover:text-background group-hover:border-background shrink-0"
    : "w-7 h-7 rounded-full border border-primary/80 text-primary/80 group-hover:text-primary group-hover:border-primary shrink-0";
  const titleActive = isDark ? "text-background block" : "text-primary block";
  const titleInactive = isDark
    ? "text-background/80 group-hover:text-background truncate"
    : "text-primary/80 group-hover:text-primary truncate";
  const descColor = isDark ? "text-background/80" : "text-primary/80";
  const imageFrameBg = isDark ? "bg-background/5" : "bg-primary/5";

  return (
    <section
      ref={containerRef}
      id={id}
      aria-label={ariaLabel}
      className={`flex min-h-screen w-full flex-col justify-center px-6 py-14 sm:py-16 md:px-8 lg:px-12 lg:py-20 xl:px-20 ${sectionBg} ${className}`}
    >
      <header className="w-full pb-[4vw]">
        <h2
          className={`feature-tabs-title will-change-transform w-full text-left text-2xl font-bold leading-relaxed tracking-tight opacity-0 md:w-3/4 md:text-4xl lg:text-5xl ${titleColor}`}
        >
          {title}
        </h2>
      </header>

      <div
        className={`feature-tabs-card will-change-transform flex w-full flex-col-reverse items-start gap-8 rounded-[2rem] p-6 opacity-0 md:flex-row md:gap-10 md:p-8 lg:gap-16 lg:p-12 ${cardContainerBg}`}
      >
        <div className="flex w-full flex-col items-start gap-3 md:w-2/5" role="tablist">
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`feature-tabpanel-${index}`}
                id={`feature-tab-${index}`}
                onClick={() => setActiveIndex(index)}
                className={`feature-tabs-item will-change-transform group flex cursor-pointer flex-col overflow-hidden text-left opacity-0 transition-all duration-500 ease-in-out ${
                  isActive ? buttonActive : buttonInactive
                }`}
              >
                <div className="flex w-full items-center gap-4">
                  <div
                    className={`flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? "m-0 hidden w-0 overflow-hidden border-0 opacity-0"
                        : `${iconWrapper} opacity-100`
                    }`}
                  >
                    <Plus size={16} />
                  </div>
                  <span
                    className={`text-md transition-all duration-500 font-bold leading-relaxed tracking-tight md:text-lg lg:text-xl ${
                      isActive ? titleActive : titleInactive
                    }`}
                  >
                    {item.title}.
                  </span>
                </div>

                <div
                  id={`feature-tabpanel-${index}`}
                  role="tabpanel"
                  aria-labelledby={`feature-tab-${index}`}
                  className={`grid w-full transition-all duration-500 ease-in-out ${
                    isActive ? "mt-2 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`text-lg font-light leading-relaxed tracking-tight md:text-xl lg:text-2xl ${descColor}`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <figure className="w-full md:w-3/5">
          <div
            className={`feature-tabs-image will-change-transform relative aspect-[4/3] w-full overflow-hidden rounded-2xl opacity-0 md:aspect-[16/10] ${imageFrameBg}`}
          >
            {items.map((item, index) => (
              <Image
                key={item.img}
                src={item.img}
                alt={item.alt || item.title}
                fill
                className={`object-cover transition-opacity duration-500 ease-in-out ${
                  index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            ))}
          </div>
        </figure>
      </div>
    </section>
  );
}
