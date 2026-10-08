"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExperienceConclusion from "./experience/ExperienceConclusion";
import ExperienceQuestions from "./experience/ExperienceQuestions";
import ExperienceStart from "./experience/ExperienceStart";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef(null);
  useGSAP(() => {
    gsap.set(".experience-frame", { autoAlpha: 0 });
    const timeline = gsap.timeline({ scrollTrigger: { trigger: containerRef.current, start: "top top", end: () => `+=${window.innerHeight * 4}`, pin: true, scrub: 1, invalidateOnRefresh: true } });
    timeline
      .set(".experience-frame--start", { autoAlpha: 1 })
      .fromTo(".experience-start", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power4.out" })
      .to(".experience-frame--start", { autoAlpha: 0, duration: 0.3 }, "+=0.65")
      .set(".experience-frame--questions", { autoAlpha: 1 })
      .fromTo(".experience-lead", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" })
      .fromTo(".experience-question", { x: -64, opacity: 0 }, { x: 0, opacity: 1, duration: 0.35, stagger: 0.13, ease: "power3.out" }, "-=0.18")
      .to(".experience-frame--questions", { autoAlpha: 0, duration: 0.3 }, "+=0.55")
      .set(".experience-frame--conclusion", { autoAlpha: 1 })
      .fromTo(".experience-conclusion-lead", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" })
      .fromTo(".experience-conclusion-statement", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power4.out" }, "-=0.15");
  }, { scope: containerRef });
  return <section id="negocio-en-uso" ref={containerRef} className="relative h-screen overflow-hidden bg-primary text-background"><ExperienceStart /><ExperienceQuestions /><ExperienceConclusion /></section>;
}
