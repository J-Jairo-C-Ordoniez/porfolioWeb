"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ATitleBold } from "../atoms/Title";
import ALabel from "../atoms/Label";
import AText from "../atoms/Text";
import AIcon from "../atoms/Icon";
import APicture from "../atoms/Picture";
import ALink from "../atoms/Link";

gsap.registerPlugin(ScrollTrigger);

export default function MCardBlog({ data }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <ALink href={data.href}>
      <article
        ref={cardRef}
        className="group w-full flex flex-col cursor-pointer bg-transparent border border-slate-700/40 rounded-xl p-6 transition-all duration-300 hover:border-slate-600/60 hover:bg-slate-800/20"
      >
        {/* Image */}
        <figure className="w-full h-48 overflow-hidden rounded-lg mb-5 bg-slate-800/30">
          <APicture
            src={data.poster.src}
            alt={data.poster.alt}
            size="100"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </figure>

        {/* Content */}
        <div className="flex flex-col space-y-3">
          {/* Category & Date */}
          <div className="flex items-center justify-between">
            <ALabel data={data.category} />
            <div className="flex items-center gap-1.5 text-slate-500">
              <AIcon data="Calendar" />
              <AText data={data.date} color="#94a3b8" fontSize="text-xs" />
            </div>
          </div>

          {/* Title */}
          <ATitleBold
            data={data.title}
            color="#f1f5f9"
            fontSize="text-xl lg:text-2xl"
            className="line-clamp-2 group-hover:text-slate-200 transition-colors"
          />

          {/* Excerpt */}
          <AText
            data={data.excerpt}
            fontSize="text-sm lg:text-base"
            color="#cbd5e1"
            className="line-clamp-3"
          />

          {/* Read Time */}
          <div className="flex items-center gap-1.5 pt-2 text-slate-500">
            <AIcon data="Timer" />
            <AText data={data.readTime} color="#94a3b8" fontSize="text-xs" />
          </div>
        </div>
      </article>
    </ALink>
  );
}
