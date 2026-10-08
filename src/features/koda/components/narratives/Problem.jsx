"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProblemActors from "./problem/ProblemActors";
import ProblemStart from "./problem/ProblemStart";
import ProblemSystem from "./problem/ProblemSystem";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Problem() {
  const containerRef = useRef(null);
  useGSAP(() => {
    gsap.set(".problem-frame", { autoAlpha: 0 });
    const timeline = gsap.timeline({ scrollTrigger: { trigger: containerRef.current, start: "top top", end: () => `+=${window.innerHeight * 4}`, pin: true, scrub: 1, invalidateOnRefresh: true } });
    timeline
      .set(".problem-frame--start", { autoAlpha: 1 })
      .fromTo(".problem-start", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power4.out" })
      .to(".problem-frame--start", { autoAlpha: 0, duration: 0.3 }, "+=0.7")
      .set(".problem-frame--actors", { autoAlpha: 1 })
      .fromTo(".problem-actors-lead", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" })
      .fromTo(".problem-actor", { x: -64, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, stagger: 0.13, ease: "power3.out" }, "-=0.2")
      .to(".problem-frame--actors", { autoAlpha: 0, duration: 0.3 }, "+=0.55")
      .set(".problem-frame--system", { autoAlpha: 1 })
      .fromTo(".problem-sale", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" })
      .fromTo(".problem-impact", { x: 64, opacity: 0 }, { x: 0, opacity: 1, duration: 0.35, stagger: 0.12, ease: "power3.out" }, "-=0.15")
      .fromTo(".problem-system", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, ease: "power4.out" }, "+=0.4");
  }, { scope: containerRef });
  return <section id="el-problema" ref={containerRef} className="relative h-screen overflow-hidden bg-primary text-background"><ProblemStart /><ProblemActors /><ProblemSystem /></section>;
}
