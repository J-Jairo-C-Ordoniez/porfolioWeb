"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "../../../../data/home/Testimonie";
import CardMetric from "../ui/CardMetric";
import CardTestimonie from "../ui/CardTestimonie";
import Dialog from "../ui/Dialog";
import gsap from "gsap";

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
      <div className="container mx-auto py-10 px-4">
        <header className="mb-10 flex flex-col">
          <span className="pl-2 font-sans text-xs tracking-wider text-accent opacity-80 mb-2 block uppercase font-bold">
            Testimonials
          </span>
          <h3 className="text-xl font-medium text-primary tracking-wider uppercase pb-4 pl-2 border-b border-primary/10">
            {data.title}
          </h3>
        </header>

        <div
          ref={gridRef}
          className="grid justify-center items-center p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
        >
          {data.items?.map((testimonie) => (
            <CardTestimonie
              key={testimonie.id}
              data={testimonie}
            />
          ))}
        </div>

        {data.metrics && (
          <div className="mt-10 overflow-hidden relative">
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

        {selected && <Dialog 
          data={selected} 
          open={open} 
          setOpen={setOpen} 
        />}
      </div>
    </section>
  );
}
