"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HeroStory from "./narratives/HeroStory";
import StoryLine from "./narratives/StoryLine";
import LearningToBuild from "./narratives/LearningToBuild";
import Question from "./narratives/Question";
import Grasp from "./narratives/Grasp";
import Koda from "./narratives/Koda";
import ChapterDecide from "./narratives/ChapterDecide";
import DreamLabsProject from "./narratives/DreamLabsProject";
import ChapterBuild from "./narratives/ChapterBuild";
import ChapterClosing from "./narratives/ChapterClosing";

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
      <Question />
      <Grasp />
      <Koda />
      <ChapterDecide />
      <DreamLabsProject />
      <ChapterBuild />
      <ChapterClosing />
    </main>
  );
}