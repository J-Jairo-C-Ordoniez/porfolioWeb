"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BuildIntro from "./build/BuildIntro";
import BuildTechnology from "./build/BuildTechnology";
import BuildFocusfy from "./build/BuildFocusfy";
import BuildTim from "./build/BuildTim";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Build() {
  const containerRef = useRef(null);
  const f1 = useRef(null);
  const f2 = useRef(null);
  const f3 = useRef(null);
  const f4 = useRef(null);

  useGSAP(() => {
    const initInterval = setInterval(() => {
      if (typeof window !== "undefined" && window.__storyScrollTween) {
        clearInterval(initInterval);

        const frames = [f1, f2, f3, f4].map(r => r.current);
        gsap.set(frames, { autoAlpha: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            start: "top top",
            end: "+=5000",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });
        tl.to(f1.current, { autoAlpha: 1, duration: 0.01 }, 0.00)
          .fromTo(".cb-f1-title",
            { clipPath: "inset(100% 0 0 0)" },
            { clipPath: "inset(0% 0 0 0)", ease: "none", duration: 0.07 }, 0.01)
          .fromTo(".cb-step",
            { opacity: 0, x: 40 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01, stagger: 0.015 }, 0.10)
          .to(f1.current, { autoAlpha: 0, duration: 0.015 }, 0.185)

          .to(f2.current, { autoAlpha: 1, duration: 0.01 }, 0.20)
          .fromTo(".cb-f2-line1 .cb-word",
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, ease: "none", duration: 0.012, stagger: 0.012 }, 0.21)
          .fromTo(".cb-f2-line2 .cb-word",
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, ease: "none", duration: 0.012, stagger: 0.012 }, 0.28)
          .to(f2.current, { autoAlpha: 0, duration: 0.015 }, 0.385)

          .to(f3.current, { autoAlpha: 1, duration: 0.01 }, 0.60)
          .fromTo(".cb-f4-text .cb-word",
            { opacity: 0, y: 55 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.009 }, 0.61)
          .fromTo(".cb-cta-1",
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01 }, 0.73)
          .to(f3.current, { autoAlpha: 0, duration: 0.015 }, 0.785)

          .to(f4.current, { autoAlpha: 1, duration: 0.01 }, 0.80)
          .fromTo(".cb-f5-line1 .cb-word",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.009 }, 0.81)
          .fromTo(".cb-f5-line2 .cb-word",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.009 }, 0.86)
          .fromTo(".cb-cta-2",
            { opacity: 0, x: 30 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01 }, 0.95);

        ScrollTrigger.refresh();
      }
    }, 100);
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="build-meaning"
      className="relative w-full h-screen overflow-hidden bg-background text-primary"
    >
      <BuildIntro ref={f1} />
      <BuildTechnology ref={f2} />
      <BuildFocusfy ref={f3} />
      <BuildTim ref={f4} />
    </section>
  );
}
