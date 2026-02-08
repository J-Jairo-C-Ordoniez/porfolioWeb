"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MCardTestimonie from "../molecules/CardTestimonie";

gsap.registerPlugin(ScrollTrigger);

export default function OTestimonie({ data }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = containerRef.current.children;

      gsap.set(cards, {
        y: 60,
        opacity: 0,
        rotateX: -10,
        scale: 0.95,
      });

      gsap.to(cards, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        scale: 1,
        duration: 0.8,
        stagger: {
          amount: 0.6,
          from: "start",
        },
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      Array.from(cards).forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(147, 51, 234, 0.2)",
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: "0 0 0 rgba(147, 51, 234, 0)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [data]);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-10 py-10 sm:px-12 md:px-20 lg:px-32 xl:px-35"
    >
      {data.map((testimonie) => (
        <article
          className="relative rounded-2xl border border-slate-600/20 bg-[#1A2534] ring-1 ring-slate-700/6 p-6 transition-all duration-300 cursor-pointer"
          key={testimonie.id}
        >
          <MCardTestimonie data={testimonie} />
        </article>
      ))}
    </div>
  );
}
