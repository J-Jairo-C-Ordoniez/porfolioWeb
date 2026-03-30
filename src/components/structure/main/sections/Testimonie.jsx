"use client";

import { useEffect, useRef, useState } from "react";
import data from "../../../../data/home/Testimonie";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import CardTestimonie from "../ui/CardTestimonie";

gsap.registerPlugin(ScrollTrigger);

export default function STestimonials() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const metricRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([".test-header", gridRef.current.children], {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      if (metricRef.current) {
        const contentWidth = metricRef.current.scrollWidth / 2;
        gsap.set(metricRef.current, { x: 0 });
        tweenRef.current = gsap.to(metricRef.current, {
          x: -contentWidth,
          duration: 40,
          ease: "none",
          repeat: -1,
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, [data]);

  const handleOpen = (metric) => {
    setSelected(metric);
    setOpen(true);
  };

  return (
    <section
      ref={containerRef}
      id="testimonies"
      className="relative min-h-[calc(100vh-100px)] overflow-x-hidden flex justify-center"
    >
      <div className="container mx-auto py-10">
        <header className="test-header mb-24">
          <span className="font-sans text-xs tracking-wider text-accent opacity-80 mb-4 block uppercase font-bold">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-wider max-w-2xl font-bold text-primary">
            {data.title}
          </h2>
        </header>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16"
        >
          {data.items?.map((testimonie) => (
            <CardTestimonie
              key={testimonie.id}
              data={testimonie}
            />
          ))}
        </div>

        {/* Embedded Metrics Scroller */}
        {/* {data.metrics && (
        <div className="mt-40 border-t border-white/5 pt-32 overflow-hidden relative">
          <div
            ref={metricRef}
            className="flex w-max gap-12 px-12"
            onMouseEnter={() => tweenRef.current?.pause()}
            onMouseLeave={() => tweenRef.current?.play()}
          >
            {[...data.metrics, ...data.metrics].map((metric, i) => (
              <CardMetric
                key={i}
                data={metric}
                onClick={() => handleOpen(metric)}
              />
            ))}
          </div>
        </div>
      )}

      {selected && <Dialog data={selected} open={open} setOpen={setOpen} />} */}
      </div>
    </section>
  );
}
