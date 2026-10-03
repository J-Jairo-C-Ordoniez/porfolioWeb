"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const splitText = (text, wordClass) => {
  return text.split(" ").map((word, i) => (
    <span key={i} className="inline-flex overflow-hidden mr-[0.25em] pb-[0.1em]">
      <span className={`${wordClass} inline-block will-change-transform`}>
        {word}
      </span>
    </span>
  ));
};

export default function LearningToBuild() {
  const panelRef = useRef(null);
  const frame1Ref = useRef(null);
  const frame2Ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      panelRef.current,
      {
        borderTopLeftRadius: "20vw",
        borderTopRightRadius: "20vw",
      },
      {
        borderTopLeftRadius: "0vw",
        borderTopRightRadius: "0vw",
        ease: "none",
        scrollTrigger: {
          trigger: panelRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      }
    );

    const initInterval = setInterval(() => {
      if (typeof window !== "undefined" && window.__storyScrollTween) {
        clearInterval(initInterval);

        gsap
          .from(".frame1-word", {
            opacity: 0,
            y: 80,
            stagger: 0.04,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: frame1Ref.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            }
          });
        gsap
          .from(".frame2-word", {
            opacity: 0,
            y: 80,
            stagger: 0.02,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: frame2Ref.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          });
        ScrollTrigger.refresh();
      }
    }, 50);

  }, { scope: panelRef });

  return (
    <section
      ref={panelRef}
      className="w-full bg-primary text-background origin-top overflow-hidden"
    >
      <article
        ref={frame1Ref}
        className="h-screen w-full flex flex-col justify-center px-[8vw]"
      >
        <div className="flex justify-start w-full">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] text-left max-w-4xl">
            {splitText("Aprendí a programar,", "frame1-word")}
          </h2>
        </div>
      </article>

      <article
        ref={frame2Ref}
        className="h-screen w-full flex flex-col justify-center px-32"
      >
        <div className="flex justify-start w-full">
          <p className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-background/70 w-full md:w-3/4 leading-relaxed">
            {splitText("a trabajar con React, Next.js y otras herramientas que poco a poco fueron formando mi base como desarrollador.", "frame2-word")}
          </p>
        </div>
      </article>
    </section>
  );
}
