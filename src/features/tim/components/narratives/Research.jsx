"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ListenIntro from "./listen/ListenIntro";
import ListenRelation from "./listen/ListenRelation";
import ListenObservation from "./listen/ListenObservation";
import ListenTurn from "./listen/ListenTurn";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Research() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const track = containerRef.current.querySelector(".listen-track");
      if (!track) return;

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

      // Animaciones de entrada del primer frame cuando la sección entra en pantalla
      gsap.from(".listen-intro-lead", {
        y: 28,
        opacity: 0,
        duration: 0.55,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".listen-intro-statement", {
        y: 72,
        opacity: 0,
        duration: 0.8,
        delay: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      // Animaciones ligadas al scroll horizontal
      [
        [
          ".listen-relation-lead, .listen-relation-statement",
          ".listen-frame--relation",
          { y: 40, stagger: 0.12 },
        ],
        [
          ".listen-observation-title, .listen-observation-item",
          ".listen-frame--observation",
          { y: 24, stagger: 0.12 },
        ],
        [
          ".listen-turn-conclusion",
          ".listen-frame--turn",
          { y: 56 },
        ],
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
      id="research"
      ref={containerRef}
      className="h-screen overflow-hidden bg-primary text-background"
    >
      <div className="listen-track flex h-screen w-max">
        <ListenIntro />
        <ListenRelation />
        <ListenObservation />
        <ListenTurn />
      </div>
    </section>
  );
}
