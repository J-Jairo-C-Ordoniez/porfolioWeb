"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SynthesisStart from "./synthesis/SynthesisStart";
import SynthesisSignals from "./synthesis/SynthesisSignals";
import SynthesisOrigin from "./synthesis/SynthesisOrigin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Synthesis() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const track = containerRef.current.querySelector(".synth-track");

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

      gsap.fromTo(
        ".synth-lead",
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, ease: "power3.out" }
      );
      gsap.fromTo(
        ".synth-statement",
        { y: 72, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.12, ease: "power4.out" }
      );

      gsap.fromTo(
        ".synth-signals-lead",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".synth-frame--signals",
            containerAnimation: horizontalScroll,
            start: "left 72%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        ".synth-signal",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".synth-frame--signals",
            containerAnimation: horizontalScroll,
            start: "left 65%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".synth-origin-lead",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".synth-frame--origin",
            containerAnimation: horizontalScroll,
            start: "left 72%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        ".synth-origin-statement",
        { y: 72, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".synth-frame--origin",
            containerAnimation: horizontalScroll,
            start: "left 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="h-screen overflow-hidden bg-primary text-background"
    >
      <div className="synth-track flex h-screen w-max">
        <SynthesisStart />
        <SynthesisSignals />
        <SynthesisOrigin />
      </div>
    </section>
  );
}
