"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STORY_WORDS = [
  { text: "Al", type: "normal" },
  { text: "principio", type: "normal" },
  { text: "quería", type: "normal" },
  { text: "aprender", type: "bounce" },
  { text: "a hacer", type: "normal" },
  { text: "cosas:", type: "normal" },
  { text: "Interfaces,", type: "bounce" },
  { text: "Aplicaciones,", type: "normal" },
  { text: "Sistemas.", type: "bounce" },
];

export default function StoryLine() {
  const container = useRef(null);

  useEffect(() => {
    const initInterval = setInterval(() => {
      if (!window.__storyScrollTween) return;
      clearInterval(initInterval);

      gsap.utils.toArray(".story-normal-word").forEach(word => {
        const letters = word.querySelectorAll(".story-normal-char");
        gsap.set(letters, { opacity: 0, y: 20 });
        
        gsap.to(letters, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: "power2.out",
          scrollTrigger: {
            trigger: word,
            containerAnimation: window.__storyScrollTween,
            start: "left 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
      gsap.utils.toArray(".story-bounce-word").forEach(word => {
        const chars = word.querySelectorAll(".story-bounce-char");
        gsap.set(chars, { opacity: 0, y: -100, scale: 0.2, rotationX: 90 });
        
        gsap.to(chars, {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.5,
          stagger: 0.1,
          ease: "elastic.out(1, 0.4)",
          scrollTrigger: {
            trigger: word,
            containerAnimation: window.__storyScrollTween,
            start: "left 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, 100);

    return () => clearInterval(initInterval);
  }, []);

  return (
    <section
      ref={container}
      className="narrative-section relative h-screen flex-shrink-0 flex items-center bg-background w-max"
    >
      <div className="flex items-baseline gap-4 pl-6 pr-100 whitespace-nowrap text-4xl md:text-5xl lg:text-7xl tracking-tight">
        {STORY_WORDS.map((item, i) => {
          if (item.type === "normal") {
            return (
              <span
                key={i}
                className="story-normal-word inline-flex text-primary/80 font-normal mr-2"
              >
                {item.text.split("").map((char, j) => (
                  <span 
                    key={j}
                    className="story-normal-char inline-block"
                    >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            );
          } else {
            return (
              <span 
                key={i} 
                className="story-bounce-word inline-flex font-bold text-primary ml-1 mr-3"
                >
                {item.text.split("").map((char, j) => (
                  <span 
                    key={j}
                    className="story-bounce-char inline-block"
                  >
                    {char}
                  </span>
                ))}
              </span>
            );
          }
        })}
      </div>
    </section>
  );
}
