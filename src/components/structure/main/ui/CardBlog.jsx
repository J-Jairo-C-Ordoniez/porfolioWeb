import { useEffect, useRef } from "react";
import gsap from "gsap";

import { ATitleBold } from "../atoms/Title";
import { ALabel } from "../atoms/Label";
import { AText } from "../atoms/Text";
import { AIcon } from "../atoms/Icon";
import { APicture } from "../atoms/Picture";
import { ALink } from "../atoms/Link";

export default function MCardBlog({ data }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 95%",
        },
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <ALink href={data.href} className="block group h-full">
      <article
        ref={cardRef}
        className="flex h-full flex-col border border-white/5 bg-white/[0.01] p-8 transition-all duration-500 hover:border-accent hover:bg-white/[0.03]"
      >
        {/* Image */}
        <figure className="aspect-video w-full overflow-hidden bg-white/5 border border-white/5 mb-8">
          <APicture
            src={data.poster.src}
            alt={data.poster.alt}
            size="100"
            className="h-full w-full object-cover grayscale contrast-125 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
        </figure>

        {/* Content */}
        <div className="flex grow flex-col gap-6">
          {/* Category & Date */}
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <ALabel data={data.category} />
            <div className="flex items-center gap-2 text-text-secondary opacity-40">
              <AIcon data="Calendar" size={12} />
              <AText data={data.date} color="text-text-secondary" fontSize="text-[10px]" className="font-caps tracking-widest" />
            </div>
          </div>

          {/* Title */}
          <ATitleBold
            data={data.title}
            color="text-text-main"
            fontSize="text-xl lg:text-2xl"
            className="font-bold tracking-tight line-clamp-2 group-hover:text-accent transition-colors"
          />

          {/* Excerpt */}
          <AText
            data={data.excerpt}
            fontSize="text-sm lg:text-base"
            color="text-text-secondary"
            className="opacity-70 line-clamp-3 leading-relaxed"
          />

          {/* Read Time & CTA */}
          <div className="mt-auto flex items-center justify-between pt-6">
            <div className="flex items-center gap-2 text-text-secondary opacity-40">
              <AIcon data="Timer" size={12} />
              <AText data={data.readTime} color="text-text-secondary" fontSize="text-[10px]" className="font-caps tracking-widest" />
            </div>
            
            <div className="h-px grow mx-6 bg-white/5" />

            <span className="font-sans font-caps text-[10px] tracking-widest text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Read More
            </span>
          </div>
        </div>
      </article>
    </ALink>
  );
}
