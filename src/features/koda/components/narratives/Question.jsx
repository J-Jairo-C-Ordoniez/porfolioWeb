"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import QuestionOrigin from "./question/QuestionOrigin";
import QuestionSignals from "./question/QuestionSignals";
import QuestionStart from "./question/QuestionStart";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Question() {
  const containerRef = useRef(null);
  useGSAP(() => {
    gsap.set(".question-frame", { autoAlpha: 0 });
    const timeline = gsap.timeline({ scrollTrigger: { trigger: containerRef.current, start: "top top", end: () => `+=${window.innerHeight * 4}`, pin: true, scrub: 1, invalidateOnRefresh: true } });
    timeline
      .set(".question-frame--start", { autoAlpha: 1 })
      .fromTo(".question-title", { y: 110, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, ease: "power4.out" })
      .fromTo(".question-lead", { y: 44, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" }, "-=0.25")
      .to(".question-frame--start", { autoAlpha: 0, duration: 0.3 }, "+=0.65")
      .set(".question-frame--signals", { autoAlpha: 1 })
      .fromTo(".question-understanding", { y: 64, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" })
      .fromTo(".question-signal", { x: 64, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3, stagger: 0.1, ease: "power3.out" }, "-=0.18")
      .to(".question-frame--signals", { autoAlpha: 0, duration: 0.3 }, "+=0.6")
      .set(".question-frame--origin", { autoAlpha: 1 })
      .fromTo(".question-origin-lead", { y: 64, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" })
      .fromTo(".question-origin-name", { y: 110, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power4.out" }, "-=0.2");
  }, { scope: containerRef });
  return <section id="la-pregunta" ref={containerRef} className="relative h-screen overflow-hidden bg-background text-primary"><QuestionStart /><QuestionSignals /><QuestionOrigin /></section>;
}
