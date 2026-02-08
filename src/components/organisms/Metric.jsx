"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import MCardMetric from "../molecules/CardMetric";
import MDialog from "../molecules/Dialog";

export default function OMetric({ data }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const containerRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const contentWidth = containerRef.current.scrollWidth / 2;

      // Set initial position
      gsap.set(containerRef.current, { x: 0 });

      tweenRef.current = gsap.to(containerRef.current, {
        x: -contentWidth,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [data]);

  const handleOpen = (metric) => {
    setSelected(metric);
    setOpen(true);
  };

  return (
    <article className="overflow-hidden py-20 relative">
      <div
        ref={containerRef}
        className="flex w-max gap-10"
        onMouseEnter={() => tweenRef.current?.pause()}
        onMouseLeave={() => tweenRef.current?.play()}
      >
        {[...data, ...data].map((metric, i) => (
          <MCardMetric
            key={i}
            data={metric}
            onClick={() => handleOpen(metric)}
          />
        ))}
      </div>

      {selected && <MDialog data={selected} open={open} setOpen={setOpen} />}
    </article>
  );
}
