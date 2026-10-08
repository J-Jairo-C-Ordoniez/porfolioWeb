"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import DecideIntro from "./decide/DecideIntro";
import DecidePerspective from "./decide/DecidePerspective";
import DecideQuestions from "./decide/DecideQuestions";
import DecideMinimalism from "./decide/DecideMinimalism";
import DecidePrinciples from "./decide/DecidePrinciples";
import DecideTools from "./decide/DecideTools";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Decide() {
  const containerRef = useRef(null);
  const f1 = useRef(null);
  const f2 = useRef(null);
  const f3 = useRef(null);
  const f4 = useRef(null);
  const f5 = useRef(null);
  const f6 = useRef(null);

  useGSAP(() => {
    const initInterval = setInterval(() => {
      if (typeof window !== "undefined" && window.__storyScrollTween) {
        clearInterval(initInterval);

        const frames = [f1, f2, f3, f4, f5, f6].map(r => r.current);
        gsap.set(frames, { autoAlpha: 0 });
        const S = 1 / 6;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            start: "top top",
            end: "+=6000",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

        tl.to(f1.current, { autoAlpha: 1, duration: 0.01 }, 0 * S)
          .fromTo(".ch5-title",
            { clipPath: "inset(100% 0 0 0)" },
            { clipPath: "inset(0% 0 0 0)", ease: "none", duration: S * 0.40 }, 0 * S + 0.01)
          .fromTo(".ch5-f1-sub .ch5-word",
            { opacity: 0, y: 55 },
            { opacity: 1, y: 0, ease: "none", duration: 0.008, stagger: 0.008 }, 0 * S + S * 0.55)
          .to(f1.current, { autoAlpha: 0, duration: 0.01 }, 0 * S + S * 0.92)

          .to(f2.current, { autoAlpha: 1, duration: 0.01 }, 1 * S)
          .fromTo(".ch5-f2 .ch5-word",
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.01 }, 1 * S + 0.01)
          .to(f2.current, { autoAlpha: 0, duration: 0.01 }, 1 * S + S * 0.92)

          .to(f3.current, { autoAlpha: 1, duration: 0.01 }, 2 * S)
          .fromTo(".ch5-f3-label",
            { opacity: 0, x: 40 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01 }, 2 * S + 0.01)
          .fromTo(".ch5-question",
            { opacity: 0, x: 80 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01, stagger: 0.02 }, 2 * S + S * 0.15)
          .to(f3.current, { autoAlpha: 0, duration: 0.01 }, 2 * S + S * 0.92)

          .to(f4.current, { autoAlpha: 1, duration: 0.01 }, 3 * S)
          .fromTo(".ch5-f4-label",
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01 }, 3 * S + 0.01)
          .fromTo(".ch5-f4-text .ch5-word",
            { opacity: 0, y: -55 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.01 }, 3 * S + S * 0.12)
          .to(f4.current, { autoAlpha: 0, duration: 0.01 }, 3 * S + S * 0.92)

          .to(f5.current, { autoAlpha: 1, duration: 0.01 }, 4 * S)
          .fromTo(".ch5-minimalism-line",
            { opacity: 0, x: 80 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01, stagger: 0.022 }, 4 * S + 0.01)
          .to(f5.current, { autoAlpha: 0, duration: 0.01 }, 4 * S + S * 0.92)

          .to(f6.current, { autoAlpha: 1, duration: 0.01 }, 5 * S)
          .fromTo(".ch5-f6-label",
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01 }, 5 * S + 0.01)
          .fromTo(".ch5-tool",
            { opacity: 0, x: -70 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01, stagger: 0.018 }, 5 * S + S * 0.12)
      }
    }, 100);
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="decide"
      className="relative w-full h-screen overflow-hidden bg-background text-primary"
    >
      <DecideIntro ref={f1} />
      <DecidePerspective ref={f2} />
      <DecideQuestions ref={f3} />
      <DecideMinimalism ref={f4} />
      <DecidePrinciples ref={f5} />
      <DecideTools ref={f6} />
    </section>
  );
}
