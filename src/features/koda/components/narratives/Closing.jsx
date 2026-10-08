"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ClosingConnections from "./closing/ClosingConnections";
import ClosingStart from "./closing/ClosingStart";
import ClosingSummary from "./closing/ClosingSummary";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Closing() {
  const containerRef = useRef(null);
  useGSAP(() => {
    gsap.set(".closing-frame", { autoAlpha: 0 });
    const timeline = gsap.timeline({ scrollTrigger: { trigger: containerRef.current, start: "top top", end: () => `+=${window.innerHeight * 4}`, pin: true, scrub: 1, invalidateOnRefresh: true } });
    timeline
      .set(".closing-frame--start", { autoAlpha: 1 })
      .fromTo(".closing-start", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power4.out" })
      .fromTo(".closing-lead", { y: 44, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" }, "-=0.25")
      .to(".closing-frame--start", { autoAlpha: 0, duration: 0.3 }, "+=0.55")
      .set(".closing-frame--connections", { autoAlpha: 1 })
      .fromTo(".closing-connection", { x: -64, opacity: 0 }, { x: 0, opacity: 1, duration: 0.35, stagger: 0.12, ease: "power3.out" })
      .to(".closing-frame--connections", { autoAlpha: 0, duration: 0.3 }, "+=0.65")
      .set(".closing-frame--summary", { autoAlpha: 1 })
      .fromTo(".closing-summary-lead", { y: 64, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" })
      .fromTo(".closing-system-item", { y: 44, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, stagger: 0.1, ease: "power3.out" }, "-=0.2")
      .fromTo(".closing-final", { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power4.out" }, "+=0.3");
  }, { scope: containerRef });
  return <section id="lo-que-es-koda" ref={containerRef} className="relative h-screen overflow-hidden bg-primary text-background"><ClosingStart /><ClosingConnections /><ClosingSummary /></section>;
}
