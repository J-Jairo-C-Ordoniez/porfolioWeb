"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import { ATitleBold } from "../atoms/Title";
import AIcon from "../atoms/Icon";
import AText from "../atoms/Text";

export default function OSkill({ data }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current.children, {
        opacity: 0,
        x: -40,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "all"
      });
    }, containerRef);

    return () => ctx.revert();
  }, [data]);

  return (
    <div
      ref={containerRef}
      className="my-5 flex flex-col flex-wrap gap-10 p-6"
    >
      {data.map((skill) => (
        <article
          key={skill.id}
          className="flex w-fit items-center gap-4 rounded-2xl border border-slate-600/20 bg-[#1A2534] ring-1 ring-slate-700/6 px-6 py-4 text-[#e0e0e0] duration-300 ease-in hover:scale-105"
        >
          <div className="hidden md:block">
            <AIcon data={skill.icon} />
          </div>
          <ATitleBold data={skill.name} fontSize="text-md" color="#e0e0e0" />

          <AText data={skill.description} />
        </article>
      ))}
    </div>
  );
}
