"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HeroStory from "./history/HeroStory";
import StoryLine from "./history/StoryLine";
import LearningToBuild from "./history/LearningToBuild";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function History() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    const scrollTween = gsap.to(trackRef.current, {
      xPercent: -100,
      x: () => window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + (trackRef.current ? trackRef.current.scrollWidth : 2000),
        invalidateOnRefresh: true,
      },
    });

    window.__storyScrollTween = scrollTween;

    const resizeObserver = new ResizeObserver(() => ScrollTrigger.refresh());
    if (trackRef.current) resizeObserver.observe(trackRef.current);

    return () => {
      window.__storyScrollTween = null;
      resizeObserver.disconnect();
    };
  }, { scope: containerRef });

  return <>
    <section ref={containerRef} className="w-full h-screen bg-background text-zinc-900 overflow-hidden">
      <div ref={trackRef} className="flex h-screen will-change-transform w-max">
        <div className="narrative-section w-screen h-screen flex-shrink-0"><HeroStory /></div>
        <StoryLine />
      </div>
    </section>
    <LearningToBuild />
  </>;
}
