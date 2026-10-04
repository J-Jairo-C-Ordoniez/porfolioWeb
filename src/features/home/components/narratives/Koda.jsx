"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import KodaIntro from "./koda/KodaIntro";
import KodaAppearance from "./koda/KodaAppearance";
import KodaComplexity from "./koda/KodaComplexity";
import KodaProblem from "./koda/KodaProblem";
import KodaResolution from "./koda/KodaResolution";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Koda() {
  const containerRef = useRef(null);
  const f1 = useRef(null);
  const f2 = useRef(null);
  const f3 = useRef(null);
  const f4 = useRef(null);
  const f5 = useRef(null);

  useGSAP(() => {
    const initInterval = setInterval(() => {
      if (typeof window !== "undefined" && window.__storyScrollTween) {
        clearInterval(initInterval);

        const frames = [f1, f2, f3, f4, f5].map(r => r.current);
        gsap.set(frames, { autoAlpha: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            start: "top top",
            end: "+=8000",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

        tl.to(f1.current, { autoAlpha: 1, duration: 0.01 }, 0.00)
          .fromTo(".koda-title",
            { clipPath: "inset(100% 0 0 0)" },
            { clipPath: "inset(0% 0 0 0)", ease: "none", duration: 0.07 }, 0.01)
          .fromTo(".koda-f1-sub .koda-word",
            { opacity: 0, y: 55 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.01 }, 0.10)
          .to(f1.current, { autoAlpha: 0, duration: 0.015 }, 0.185)

          .to(f2.current, { autoAlpha: 1, duration: 0.01 }, 0.20)
          .fromTo(".koda-f2 .koda-word",
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, ease: "none", duration: 0.012, stagger: 0.012 }, 0.21)
          .to(f2.current, { autoAlpha: 0, duration: 0.015 }, 0.385)

          .to(f3.current, { autoAlpha: 1, duration: 0.01 }, 0.40)
          .fromTo(".koda-f3-label",
            { opacity: 0, x: 40 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01 }, 0.41)
          .fromTo(".koda-list-item",
            { opacity: 0, x: 80 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01, stagger: 0.015 }, 0.43)
          .to(f3.current, { autoAlpha: 0, duration: 0.015 }, 0.585)

          .to(f4.current, { autoAlpha: 1, duration: 0.01 }, 0.60)
          .fromTo(".koda-f4-label",
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01 }, 0.61)
          .fromTo(".koda-f4-quote .koda-word",
            { opacity: 0, y: -55 },
            { opacity: 1, y: 0, ease: "none", duration: 0.012, stagger: 0.012 }, 0.63)
          .to(f4.current, { autoAlpha: 0, duration: 0.015 }, 0.785)

          .to(f5.current, { autoAlpha: 1, duration: 0.01 }, 0.80)
          .fromTo(".koda-res1 .koda-word",
            { opacity: 0, x: 70 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01, stagger: 0.009 }, 0.81)
          .fromTo(".koda-res2 .koda-word",
            { opacity: 0, x: 70 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01, stagger: 0.009 }, 0.87)
          .fromTo(".koda-cta",
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01 }, 0.95);
      }
    }, 100);

    return () => clearInterval(initInterval);
  }, { scope: containerRef });

  return (
    <section
      id="koda"
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-background text-primary"
    >
      <KodaIntro ref={f1} />
      <KodaAppearance ref={f2} />
      <KodaComplexity ref={f3} />
      <KodaProblem ref={f4} />
      <KodaResolution ref={f5} />
    </section>
  );
}
