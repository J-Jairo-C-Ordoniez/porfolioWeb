"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ExperienceConclusion() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(".design-conclusion-text",
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.2, ease: "power3.out" }
    )
      .fromTo(".design-conclusion-link",
        { autoAlpha: 0, x: -20 },
        { autoAlpha: 1, x: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );
  }, { scope: containerRef });

  return (
    <article ref={containerRef} className="w-full px-[8vw] py-24 flex flex-col justify-center min-h-screen">
      <div className="w-full flex justify-end">
        <div className="w-full lg:w-3/4 xl:w-2/3 flex flex-col gap-6 md:gap-8">
          <p className="design-conclusion-text opacity-0 will-change-transform text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-primary/80 leading-tight">
            Diseñado para la realidad del mostrador.
          </p>

          <p className="design-conclusion-text opacity-0 will-change-transform text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-primary leading-tight">
            Cada decisión de interfaz existió para proteger el tiempo y la atención de quien opera.
          </p>

          {/* <div className="design-conclusion-link opacity-0 will-change-transform mt-10 md:mt-16 flex justify-end">
            <Link
              href="/projects/koda/evidence/ux-ui-decisions"
              className="group inline-flex items-center w-fit gap-4 mt-24 text-2xl md:text-3xl font-medium border-b border-primary/20 pb-2 text-primary hover:text-primary/80 transition-all"
            >
              Ver las decisiones UX/UI
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div> */}
        </div>
      </div>
    </article>
  );
}
