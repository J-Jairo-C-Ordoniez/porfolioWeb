"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import QuestionIntro from "./question/QuestionIntro";
import QuestionList from "./question/QuestionList";
import QuestionInsight from "./question/QuestionInsight";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Question() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.set(".q-question", { opacity: 0, y: 60 });

    const initInterval = setInterval(() => {
      if (typeof window !== "undefined" && window.__storyScrollTween) {
        clearInterval(initInterval);

        gsap.from(".q-line-1", {
          opacity: 0,
          y: 100,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".q-line-1",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(".q-line-2", {
          opacity: 0,
          y: 120,
          duration: 1.2,
          delay: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".q-line-1",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        const listTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".q-list-panel",
            pin: true,
            scrub: 2,
            end: "+=2800",
            invalidateOnRefresh: true,
          },
        });

        [0, 1, 2].forEach((_, i) => {
          listTl
            .to(`.q-question-${i}`, {
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: "power3.out",
            }, i === 0 ? "+=0" : "+=0.2")
            .to(`.q-question-${i}`, {
              opacity: 0,
              y: -50,
              duration: 1,
              ease: "power2.in",
            }, "+=1.5");
        });

        gsap.fromTo(".q-insight-lead",
          { opacity: 0, y: 120 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".q-insight-lead",
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(".q-insight-item",
          { opacity: 0, x: -80 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: ".q-insight-list",
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );

        ScrollTrigger.refresh();
      }
    }, 50);

    return () => clearInterval(initInterval);
  }, { scope: containerRef });

  return (
    <div id="question" ref={containerRef} className="w-full">
      <QuestionIntro />
      <QuestionList />
      <QuestionInsight />
    </div>
  );
}
