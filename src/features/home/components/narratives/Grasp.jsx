"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import GraspBridge from "./grasp/GraspBridge";
import GraspSwap from "./grasp/GraspSwap";
import GraspContext from "./grasp/GraspContext";
import GraspObservation from "./grasp/GraspObservation";
import GraspClimax from "./grasp/GraspClimax";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Grasp() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    const initInterval = setInterval(() => {
      if (typeof window !== "undefined" && window.__storyScrollTween) {
        clearInterval(initInterval);

        const track = trackRef.current;
        const scrollTween = gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => "+=" + track.scrollWidth,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
        
        gsap.fromTo(".grasp-bridge",
          { opacity: 0, y: 60 },
          {
            opacity: 1, y: 0, duration: 1, ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(".grasp-punchline",
          { opacity: 0, y: 120 },
          {
            opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.from(".grasp-swap-text-container", {
          opacity: 0, y: 60, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: ".grasp-swap-panel",
            containerAnimation: scrollTween,
            start: "left 85%",
            toggleActions: "play none none reverse",
          }
        });

        const swapTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".grasp-swap-panel",
            containerAnimation: scrollTween,
            start: "left left",
            end: "right right",
            scrub: true,
          }
        });

        swapTl.to(".grasp-swap-text", { x: () => window.innerWidth, ease: "none", duration: 1 }, 0);
        swapTl
          .to(".grasp-word-1", { opacity: 0, y: -40, duration: 0.2 }, 0.15)
          .fromTo(".grasp-word-2", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.2 }, 0.15)
          .to(".grasp-word-2", { opacity: 0, y: -40, duration: 0.2 }, 0.65)
          .fromTo(".grasp-word-3", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.2 }, 0.65);
        
        gsap.utils.toArray('.grasp-anim').forEach(el => {
          gsap.from(el, {
            opacity: 0, y: 40, duration: 1, ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              containerAnimation: scrollTween,
              start: "left 80%",
              toggleActions: "play none none reverse",
            }
          });
        });

        // Single scrubbed timeline: sticky movement + staggered list reveal
        const contextTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".grasp-context-panel",
            containerAnimation: scrollTween,
            start: "left left",
            end: "right right",
            scrub: true,
          }
        });

        // Counter-move sticky div so it stays in place
        contextTl.to(".grasp-context-sticky", {
          x: () => window.innerWidth * 2,
          ease: "none",
          duration: 1,
        }, 0);

        // Title fades in at the start
        contextTl.fromTo(".grasp-comprendo",
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, ease: "none", duration: 0.08 },
          0.02
        );

        // List items reveal one by one across the scroll
        const itemDuration = 0.1;
        const itemStart = 0.15;
        const itemGap = 0.14;

        [0, 1, 2, 3, 4].forEach((i) => {
          contextTl.fromTo(`.grasp-list-item:nth-child(${i + 1})`,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, ease: "none", duration: itemDuration },
            itemStart + i * itemGap
          );
        });

        ScrollTrigger.refresh();
      }
    }, 50);

    return () => clearInterval(initInterval);
  }, { scope: containerRef });

  return (
    <section
      id="grasp"
      ref={containerRef}
      className="w-full h-screen bg-primary text-background overflow-hidden"
    >
      <div
        ref={trackRef}
        className="flex h-full w-max items-center"
      >
        <GraspBridge />
        <GraspSwap />
        <GraspContext />
        <GraspObservation />
        <GraspClimax />
      </div>
    </section>
  );
}
