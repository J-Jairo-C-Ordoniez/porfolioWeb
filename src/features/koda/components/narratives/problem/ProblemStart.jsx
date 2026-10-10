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
      className="w-full pt-[4vw] pb-[2vw] px-[8vw]"
    >
      <h2 className="problem-title text-left text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-priamry w-full md:w-3/4 leading-relaxed opacity-0 will-change-transform">
        El problema no era el cuaderno.
      </h2>
      <p className="problem-title opacity-0 max-w-5xl text-primary/80 text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
        Era todo lo que había detrás.
      </p>
    </header>
  );
}
