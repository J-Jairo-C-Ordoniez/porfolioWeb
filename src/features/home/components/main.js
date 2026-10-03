"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HeroStory from "./narratives/HeroStory";
import StoryLine from "./narratives/StoryLine";
import LearningToBuild from "./narratives/LearningToBuild";
import Chapter02 from "./narratives/Chapter02";
import Chapter02Questions from "./narratives/Chapter02Questions";
import Chapter02Insight from "./narratives/Chapter02Insight";
import Chapter03 from "./narratives/Chapter03";
// import Chapter04 from "./narratives/Chapter04";
// import Chapter05 from "./narratives/Chapter05";
// import Chapter06 from "./narratives/Chapter06";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Main() {
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

    const ro = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });
    if (trackRef.current) {
      ro.observe(trackRef.current);
    }

    return () => {
      window.__storyScrollTween = null;
      ro.disconnect();
    };
  }, { scope: containerRef });

  return (
    <main className="main-layout">
      <section
        ref={containerRef}
        className="w-full h-screen bg-background text-zinc-900 overflow-hidden"
      >
        <div
          ref={trackRef}
          className="flex h-screen will-change-transform w-max"
        >
          <div className="narrative-section w-screen h-screen flex-shrink-0">
            <HeroStory />
          </div>
          <StoryLine />
        </div>
      </section>

      <LearningToBuild />
      <Chapter02 />
      <Chapter02Questions />
      <Chapter02Insight />
      <Chapter03 />
      {/* <Chapter04 /> */}
      {/* <Chapter05 /> */}
      {/* <Chapter06 /> */}
    </main>
  );
}