"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { ATitleBold } from "../atoms/Title";
import { ABtnBold, ABtnCTA } from "../atoms/Btn";
import AText from "../atoms/Text";
import ALabel from "../atoms/Label";
import APicture from "../atoms/Picture";

export default function MHeroDoc({ data, onClick }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
      gsap.fromTo(
        ".hero-image",
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, delay: 0.2 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full flex flex-col items-center justify-between lg:flex-row"
    >
      <div className="hero-content w-[100%] p-10 lg:w-[60%] lg:p-2 opacity-0">
        <ATitleBold
          data={data.title}
          color="#e0e0e0"
          fontSize="text-5xl"
        />

        <AText
          data={data.description}
          fontSize="text-lg"
        />

        <div className="mt-8 flex items-center gap-6">
          <ABtnCTA data={data.Btn} onClick={onClick} />

          <ABtnBold data={data.link} />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {data.tecnologies.map((label) => (
            <ALabel key={label.id} data={label} />
          ))}
        </div>
      </div>

      <figure
        className="hero-image flex h-80 w-80 items-center justify-center rounded-xl border border-slate-600/20 bg-[#1A2534] ring-1 ring-slate-700/6 opacity-0"
      >
        <APicture src={data.logo} alt={data.title} size="200" />
      </figure>
    </section>
  );
}