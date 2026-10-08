"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ClosingIntro from "./closing/ClosingIntro";
import ClosingChain from "./closing/ClosingChain";
import ClosingStatement from "./closing/ClosingStatement";
import ClosingFinale from "./closing/ClosingFinale";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Closing() {
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
            end: "+=4000",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

        const S = 1 / 4;
        tl.to(f1.current, { autoAlpha: 1, duration: 0.01 }, 0 * S)
          .fromTo(".cc-f1-title",
            { clipPath: "inset(100% 0 0 0)" },
            { clipPath: "inset(0% 0 0 0)", ease: "none", duration: 0.07 }, 0 * S + 0.01)
          .fromTo(".cc-f1-line .cc-word",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.01 }, 0 * S + 0.10)
          .to(f1.current, { autoAlpha: 0, duration: 0.015 }, 0 * S + 0.235)
          .to(f2.current, { autoAlpha: 1, duration: 0.01 }, 1 * S)
          .fromTo(".cc-chain-item",
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, ease: "none", duration: 0.015, stagger: 0.03 }, 1 * S + 0.02)
          .to(f2.current, { autoAlpha: 0, duration: 0.015 }, 1 * S + 0.235)
          .to(f3.current, { autoAlpha: 1, duration: 0.01 }, 2 * S)
          .fromTo(".cc-f3-line1 .cc-word",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.008 }, 2 * S + 0.02)
          .fromTo(".cc-f3-line2 .cc-word",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.008 }, 2 * S + 0.10)
          .to(f3.current, { autoAlpha: 0, duration: 0.015 }, 2 * S + 0.235)
          .to(f4.current, { autoAlpha: 1, duration: 0.01 }, 3 * S)
          .fromTo(".cc-f4-text",
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, ease: "none", duration: 0.1 }, 3 * S + 0.05)

        ScrollTrigger.refresh();
      }
    }, 100);
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="next"
      className="relative w-full h-screen overflow-hidden bg-background text-primary"
    >
      <ClosingIntro ref={f1} />
      <ClosingChain ref={f2} />
      <ClosingStatement ref={f3} />
      <ClosingFinale ref={f4} />
    </section>
  );
}
