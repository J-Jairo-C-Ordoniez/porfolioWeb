"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DevelopmentArchitecture from "./development/DevelopmentArchitecture";
import DevelopmentOperations from "./development/DevelopmentOperations";
import DevelopmentStart from "./development/DevelopmentStart";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Development() {
  const containerRef = useRef(null);
  useGSAP(() => {
    gsap.set(".development-frame", { autoAlpha: 0 });
    const timeline = gsap.timeline({ scrollTrigger: { trigger: containerRef.current, start: "top top", end: () => `+=${window.innerHeight * 4}`, pin: true, scrub: 1, invalidateOnRefresh: true } });
    timeline
      .set(".development-frame--start", { autoAlpha: 1 })
      .fromTo(".development-start", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power4.out" })
      .fromTo(".development-lead", { y: 44, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" }, "-=0.25")
      .to(".development-frame--start", { autoAlpha: 0, duration: 0.3 }, "+=0.55")
      .set(".development-frame--operations", { autoAlpha: 1 })
      .fromTo(".development-operation", { x: 64, opacity: 0 }, { x: 0, opacity: 1, duration: 0.35, stagger: 0.12, ease: "power3.out" })
      .to(".development-frame--operations", { autoAlpha: 0, duration: 0.3 }, "+=0.65")
      .set(".development-frame--architecture", { autoAlpha: 1 })
      .fromTo(".development-architecture-lead", { y: 64, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" })
      .fromTo(".development-architecture-item", { y: 44, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, stagger: 0.1, ease: "power3.out" }, "-=0.15")
      .fromTo(".development-conclusion", { y: 64, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "+=0.4");
  }, { scope: containerRef });
  return <section id="construir-el-sistema" ref={containerRef} className="relative h-screen overflow-hidden bg-background text-primary"><DevelopmentStart /><DevelopmentOperations /><DevelopmentArchitecture /></section>;
}
