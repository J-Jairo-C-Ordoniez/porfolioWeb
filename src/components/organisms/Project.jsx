"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MCardProject from "../molecules/CardProject";

gsap.registerPlugin(ScrollTrigger);

export default function OProject({ data }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = containerRef.current.children;

      Array.from(cards).forEach((card, index) => {
        gsap.set(card, { opacity: 0, y: 80, scale: 0.9 });
        gsap.set(card.querySelector('figure'), { scale: 1.1, opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        tl.to(card, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        })
          .to(card.querySelector('figure'), {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          }, "-=0.5")
          .from(card.querySelector('article').children, {
            y: 20,
            opacity: 0,
            stagger: 0.08,
            duration: 0.4,
            ease: "power2.out",
          }, "-=0.4");
      });

      Array.from(cards).forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -12,
            scale: 1.01,
            boxShadow: "0 25px 50px rgba(0, 200, 150, 0.2)",
            duration: 0.4,
            ease: "power2.out",
          });

          const figure = card.querySelector('figure img');
          if (figure) {
            gsap.to(figure, {
              scale: 1.08,
              duration: 0.5,
              ease: "power2.out",
            });
          }
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: "0 0 0 rgba(0, 200, 150, 0)",
            duration: 0.4,
            ease: "power2.out",
          });

          const figure = card.querySelector('figure img');
          if (figure) {
            gsap.to(figure, {
              scale: 1,
              duration: 0.5,
              ease: "power2.out",
            });
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [data]);

  return (
    <div
      ref={containerRef}
      className="mt-10 space-y-10 pb-10"
    >
      {data.map((project) => (
        <article
          key={project.id}
          className="mx-auto flex flex-col items-center justify-between gap-10 rounded-4xl border border-slate-600/20 bg-[#1A2534] py-10 px-6 ring-1 ring-slate-700/6 w-full sm:w-[98%] sm:flex-col lg:w-[96%] lg:flex-row xl:w-[90%] transition-all duration-300 overflow-hidden cursor-pointer"
        >
          <MCardProject data={project} />
        </article>
      ))}
    </div>
  );
}
