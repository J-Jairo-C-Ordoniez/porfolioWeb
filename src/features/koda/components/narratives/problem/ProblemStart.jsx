"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ProblemStart() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".problem-title", 
      { autoAlpha: 0, y: 30 },
      { 
        autoAlpha: 1, 
        y: 0, 
        duration: 1, 
        ease: "power3.out", 
        scrollTrigger: { 
          trigger: containerRef.current, 
          start: "top 80%",
          toggleActions: "play none none reverse"
        } 
      }
    );
  }, { scope: containerRef });

  return (
    <header 
      ref={containerRef} 
      className="w-full px-[8vw] pt-24 pb-12 flex flex-col justify-center">
      <h2 className="problem-title opacity-0 will-change-transform text-left text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary w-full md:w-3/4 leading-relaxed">
        El problema no era el cuaderno.<br/>
        <span className="font-light text-primary/70">Era todo lo que había detrás.</span>
      </h2>
    </header>
  );
}
