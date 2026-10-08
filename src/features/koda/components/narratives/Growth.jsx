"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GrowthConclusion from "./growth/GrowthConclusion";
import GrowthFragments from "./growth/GrowthFragments";
import GrowthStart from "./growth/GrowthStart";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Growth() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.set(".growth-frame", { autoAlpha: 0 });
    const timeline = gsap.timeline({
      scrollTrigger: { trigger: containerRef.current, start: "top top", end: () => `+=${window.innerHeight * 4}`, pin: true, scrub: 1, invalidateOnRefresh: true },
    });

    timeline
      .set(".growth-frame--start", { autoAlpha: 1 })
      .fromTo(".growth-start", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power4.out" })
      .fromTo(".growth-scale", { y: 48, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.12, ease: "power3.out" }, "-=0.25")
      .to(".growth-frame--start", { autoAlpha: 0, duration: 0.3 }, "+=0.5")
      .set(".growth-frame--fragments", { autoAlpha: 1 })
      .fromTo(".growth-fragments-lead", { y: 64, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" })
      .fromTo(".growth-fragment", { x: 64, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, stagger: 0.15, ease: "power3.out" }, "-=0.2")
      .to(".growth-frame--fragments", { autoAlpha: 0, duration: 0.3 }, "+=0.6")
      .set(".growth-frame--conclusion", { autoAlpha: 1 })
      .fromTo(".growth-conclusion-lead", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" })
      .fromTo(".growth-conclusion-statement", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power4.out" }, "-=0.15");
  }, { scope: containerRef });

  return <section id="cuando-dejo-de-ser-suficiente" ref={containerRef} className="relative h-screen overflow-hidden bg-background text-primary"><GrowthStart /><GrowthFragments /><GrowthConclusion /></section>;
}
