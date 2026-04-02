"use client";

import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "../../../../data/home/Testimonie";
import CardTestimonie from "../ui/CardTestimonie";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function STestimonials() {

  const containerRef = useRef(null);
  const gridRef = useRef(null);

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
    }, containerRef);
    return () => ctx.revert();
  }, [data]);

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
      </div>
    </section>
  );
}
