"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BusinessContext from "./business/BusinessContext";
import BusinessIntro from "./business/BusinessIntro";
import BusinessNotes from "./business/BusinessNotes";
import BusinessTurn from "./business/BusinessTurn";

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
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.from(".business-intro-lead", { y: 28, opacity: 0, duration: 0.55, ease: "power3.out" });
      gsap.from(".business-intro-statement", { y: 72, opacity: 0, duration: 0.8, delay: 0.12, ease: "power4.out" });

      [
        [".business-note", ".business-frame--notes", { y: 24, stagger: 0.12 }],
        [".business-context-lead, .business-context-statement", ".business-frame--context", { y: 40, stagger: 0.12 }],
        [".business-turn-conclusion", ".business-frame--turn", { y: 56 }],
      ].forEach(([target, trigger, properties]) => {
        gsap.from(target, {
          ...properties,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger,
            containerAnimation: horizontalScroll,
            start: "left 72%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="business"
      ref={containerRef}
      className="h-screen overflow-hidden bg-background text-primary"
    >
      <div className="business-track flex h-screen w-max">
        <BusinessIntro />
        <BusinessNotes />
        <BusinessContext />
        <BusinessTurn />
      </div>
    </section>
  );
}
