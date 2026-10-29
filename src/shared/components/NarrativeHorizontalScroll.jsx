"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Reusable horizontal scroll section — pure text, no images.
 * Mirrors Business.jsx from Koda with identical text styles.
 *
 * Props:
 *   id        — string, section id
 *   mode      — "light" | "dark"
 *   trackId   — unique class prefix (e.g. "tim-research") — must be unique per instance
 *   frames    — array of frame objects:
 *
 *     { type: "intro", tag?: string, lead: string, title: string }
 *       → small tag (optional) + medium light lead + large bold title
 *
 *     { type: "notes", label?: string, items: string[] }
 *       → optional small label + large font-medium list with border-b (like BusinessNotes)
 *
 *     { type: "context", statement: string, lead: string }
 *       → large bold statement + medium light lead below (like BusinessContext)
 *
 *     { type: "turn", text: string }
 *       → single large font-medium text (like BusinessTurn)
 */
export default function NarrativeHorizontalScroll({
  id,
  mode = "light",
  trackId = "hs",
  frames = [],
}) {
  const containerRef = useRef(null);

  const dark = mode === "dark";

  /* Color tokens — mirror exactly what Koda uses, flipped for dark */
  const bg        = dark ? "bg-primary"         : "bg-background";
  const text      = dark ? "text-background"    : "text-primary";
  const textMuted = dark ? "text-background/80" : "text-primary/80";
  const border    = dark ? "border-background/20" : "border-primary/20";

  /* Unique GSAP class names per instance */
  const trackCls  = `${trackId}-track`;
  const introLead = `${trackId}-intro-lead`;
  const introH2   = `${trackId}-intro-h2`;
  const noteItem  = `${trackId}-note`;
  const ctxEl     = `${trackId}-ctx`;
  const turnEl    = `${trackId}-turn`;

  const px = "px-6 sm:px-8 md:px-12 lg:px-20";

  useGSAP(
    () => {
      const section = containerRef.current;
      const track   = section.querySelector(`.${trackCls}`);

      /* Main horizontal pin */
      const horizontalScroll = gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      /* Intro frame — fires immediately (no containerAnimation) */
      gsap.from(`.${introLead}`, {
        y: 28, opacity: 0, duration: 0.55, ease: "power3.out",
      });
      gsap.from(`.${introH2}`, {
        y: 72, opacity: 0, duration: 0.8, delay: 0.12, ease: "power4.out",
      });

      /* Subsequent frames */
      const pairs = [
        [`.${noteItem}`, `.${trackId}-frame--notes`, { y: 24, stagger: 0.12 }],
        [`.${ctxEl}`,    `.${trackId}-frame--ctx`,   { y: 40, stagger: 0.12 }],
        [`.${turnEl}`,   `.${trackId}-frame--turn`,  { y: 56 }],
      ];

      pairs.forEach(([target, trigger, props]) => {
        const els = section.querySelectorAll(target);
        if (!els.length) return;
        gsap.from(target, {
          ...props,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger,
            containerAnimation: horizontalScroll,
            start: "left 72%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id={id}
      ref={containerRef}
      className={`h-screen overflow-hidden ${bg} ${text}`}
    >
      <div className={`${trackCls} flex h-screen w-max`}>
        {frames.map((frame, i) => {

          /* ── INTRO ── small tag + medium lead + large bold title */
          if (frame.type === "intro") {
            return (
              <article
                key={i}
                className={`${trackId}-frame ${trackId}-frame--intro flex h-screen w-screen shrink-0 items-center ${px}`}
              >
                <div className="max-w-6xl">
                  {frame.tag && (
                    <p className={`${introLead} ${textMuted} block text-xl md:text-2xl font-light tracking-tight leading-relaxed mb-1`}>
                      {frame.tag}
                    </p>
                  )}
                  <p className={`${introLead} ${textMuted} block text-2xl md:text-4xl lg:text-5xl font-light tracking-tight leading-relaxed`}>
                    {frame.lead}
                  </p>
                  <div className="mt-4 overflow-hidden md:mt-6">
                    <h2 className={`${introH2} text-4xl font-bold tracking-tight ${text} will-change-transform md:text-5xl lg:text-7xl`}>
                      {frame.title}
                    </h2>
                  </div>
                </div>
              </article>
            );
          }

          /* ── NOTES ── exact BusinessNotes style: optional small label + big list */
          if (frame.type === "notes") {
            return (
              <article
                key={i}
                className={`${trackId}-frame ${trackId}-frame--notes flex h-screen w-screen shrink-0 items-center ${px}`}
              >
                <div className="w-full max-w-5xl">
                  {frame.label && (
                    <p className={`${noteItem} ${textMuted} text-xl md:text-2xl font-light tracking-tight mb-8`}>
                      {frame.label}
                    </p>
                  )}
                  <ul className="w-full">
                    {frame.items.map((item, j) => (
                      <li
                        key={j}
                        className={`${noteItem} border-b ${border} py-4 text-3xl font-medium tracking-tight ${textMuted} sm:text-4xl md:py-6 md:text-6xl`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          }

          /* ── CONTEXT ── large bold statement + medium light lead (like BusinessContext) */
          if (frame.type === "context") {
            return (
              <article
                key={i}
                className={`${trackId}-frame ${trackId}-frame--ctx flex h-screen w-screen shrink-0 items-center ${px}`}
              >
                <div className="max-w-6xl">
                  <p className={`${ctxEl} text-4xl font-bold tracking-tight ${text} will-change-transform md:text-5xl lg:text-7xl`}>
                    {frame.statement}
                  </p>
                  <div className="mt-4 overflow-hidden md:mt-6">
                    <p className={`${ctxEl} ${textMuted} block text-2xl md:text-4xl lg:text-5xl font-light tracking-tight leading-relaxed`}>
                      {frame.lead}
                    </p>
                  </div>
                </div>
              </article>
            );
          }

          /* ── TURN ── single large medium-weight statement (like BusinessTurn) */
          if (frame.type === "turn") {
            return (
              <article
                key={i}
                className={`${trackId}-frame ${trackId}-frame--turn flex h-screen w-screen shrink-0 items-center ${px}`}
              >
                <div className="max-w-5xl">
                  <div className="overflow-hidden">
                    <p className={`${turnEl} text-3xl font-medium tracking-tight ${textMuted} sm:text-4xl md:py-6 md:text-6xl`}>
                      {frame.text}
                    </p>
                  </div>
                </div>
              </article>
            );
          }

          return null;
        })}
      </div>
    </section>
  );
}
