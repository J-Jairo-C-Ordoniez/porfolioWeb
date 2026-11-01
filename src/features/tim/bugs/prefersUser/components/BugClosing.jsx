"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function BugClosing() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) {
        gsap.set(".bug-close-elem", { autoAlpha: 1, y: 0 });
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
        ".bug-close-elem",
        { autoAlpha: 0, y: 35 },
        { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      );
    },
    { scope: containerRef }
  );

  return (
    <article
      ref={containerRef}
      className="flex min-h-screen w-full flex-col justify-center px-[8vw] py-24 md:py-32"
    >
      <div className="flex w-full justify-end">
        <div className="flex w-full flex-col gap-10 md:gap-14 lg:w-3/4 xl:w-2/3">
          <blockquote className="bug-close-elem will-change-transform border-l-2 border-primary/30 pl-6 md:pl-10">
            <p className="text-2xl font-light italic leading-relaxed tracking-tight text-primary md:text-4xl lg:text-5xl">
              &ldquo;Un diseño que solo funciona cuando todo sale bien no es un diseño terminado; es apenas una hipótesis.&rdquo;
            </p>
          </blockquote>

          <div className="bug-close-elem will-change-transform flex flex-wrap items-center justify-end gap-6 pt-6">
            <a
              href="https://tim-azure.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 border-b-2 border-primary/30 pb-2 text-xl font-medium text-primary/70 transition-all duration-300 hover:border-primary hover:text-primary md:text-2xl lg:text-3xl"
            >
              <span>Explorar TIM</span>
              <ArrowUpRight
                size={24}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
