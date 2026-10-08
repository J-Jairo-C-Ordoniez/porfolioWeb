"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BusinessContext from "./business/BusinessContext";
import BusinessIntro from "./business/BusinessIntro";
import BusinessNotes from "./business/BusinessNotes";
import BusinessTurn from "./business/BusinessTurn";
import BusinessWorks from "./business/BusinessWorks";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Business() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const track = containerRef.current.querySelector(".business-track");
      const horizontalScroll = gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.from(".business-intro-lead", { y: 48, opacity: 0, duration: 0.6, ease: "power3.out" });
      gsap.from(".business-intro-statement", { y: 110, opacity: 0, duration: 0.9, delay: 0.15, ease: "power4.out" });

      [
        [".business-note", ".business-frame--notes", { x: -72, stagger: 0.18 }],
        [".business-context-lead, .business-context-statement", ".business-frame--context", { y: 72, stagger: 0.15 }],
        [".business-works-statement", ".business-frame--works", { scale: 0.85 }],
        [".business-turn-statement, .business-turn-conclusion", ".business-frame--turn", { y: 90, stagger: 0.18 }],
      ].forEach(([target, trigger, properties]) => {
        gsap.from(target, {
          ...properties,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger,
            containerAnimation: horizontalScroll,
            start: "left 75%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="el-negocio" ref={containerRef} className="h-screen overflow-hidden bg-primary text-background">
      <div className="business-track flex h-screen w-max">
        <BusinessIntro />
        <BusinessNotes />
        <BusinessContext />
        <BusinessWorks />
        <BusinessTurn />
      </div>
    </section>
  );
}
