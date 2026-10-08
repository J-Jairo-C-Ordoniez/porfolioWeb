"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import DreamLabsIntro from "./dreamlabs/DreamLabsIntro";
import DreamLabsApproach from "./dreamlabs/DreamLabsApproach";
import DreamLabsUnderstanding from "./dreamlabs/DreamLabsUnderstanding";
import DreamLabsQualities from "./dreamlabs/DreamLabsQualities";
import DreamLabsClosing from "./dreamlabs/DreamLabsClosing";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function DreamLabsProject() {
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
            end: "+=5000",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

        tl.to(f1.current, { autoAlpha: 1, duration: 0.01 }, 0.00)
          .fromTo(".dl-title",
            { clipPath: "inset(100% 0 0 0)" },
            { clipPath: "inset(0% 0 0 0)", ease: "none", duration: 0.07 }, 0.01)
          .fromTo(".dl-f1-sub .dl-word",
            { opacity: 0, y: 55 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.01 }, 0.10)
          .to(f1.current, { autoAlpha: 0, duration: 0.015 }, 0.185)

          .to(f2.current, { autoAlpha: 1, duration: 0.01 }, 0.20)
          .fromTo(".dl-f2-line1 .dl-word",
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, ease: "none", duration: 0.012, stagger: 0.012 }, 0.21)
          .fromTo(".dl-f2-line2 .dl-word",
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, ease: "none", duration: 0.012, stagger: 0.012 }, 0.28)
          .to(f2.current, { autoAlpha: 0, duration: 0.015 }, 0.385)

          .to(f3.current, { autoAlpha: 1, duration: 0.01 }, 0.40)
          .fromTo(".dl-f3-label",
            { opacity: 0, x: 40 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01 }, 0.41)
          .fromTo(".dl-understanding-item",
            { opacity: 0, x: 80 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01, stagger: 0.015 }, 0.43)
          .to(f3.current, { autoAlpha: 0, duration: 0.015 }, 0.585)

          .to(f4.current, { autoAlpha: 1, duration: 0.01 }, 0.60)
          .fromTo(".dl-f4-label",
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01 }, 0.61)
          .fromTo(".dl-quality",
            { opacity: 0, x: -80 },
            { opacity: 1, x: 0, ease: "none", duration: 0.01, stagger: 0.015 }, 0.63)
          .to(f4.current, { autoAlpha: 0, duration: 0.015 }, 0.785)

          .to(f5.current, { autoAlpha: 1, duration: 0.01 }, 0.80)
          .fromTo(".dl-f5-closing .dl-word",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01, stagger: 0.009 }, 0.81)
          .fromTo(".dl-cta",
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, ease: "none", duration: 0.01 }, 0.90);

        ScrollTrigger.refresh();
      }
    }, 100);
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-primary text-background"
    >
      <DreamLabsIntro ref={f1} />
      <DreamLabsApproach ref={f2} />
      <DreamLabsUnderstanding ref={f3} />
      <DreamLabsQualities ref={f4} />
      <DreamLabsClosing ref={f5} />
    </section>
  );
}
