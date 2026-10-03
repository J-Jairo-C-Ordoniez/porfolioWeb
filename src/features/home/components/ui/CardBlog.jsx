"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import Text from "./Text";

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
    <Link
      href={data.href}
      className="block group h-full"
    >
      <article
        ref={cardRef}
        className="flex h-full flex-col border border-primary/5  p-8 transition-all duration-500 hover:border-accent"
      >

        <figure className="aspect-video w-full overflow-hidden bg-white/5 mb-8">
          <Image
            src={data.poster.src}
            alt={data.poster.alt}
            width={400}
            height={400}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
          />
        </figure>

        <div className="flex grow flex-col gap-6">
          <div className="flex items-center justify-between border-b border-primary/5 pb-4">
            <span className="font-sans text-xs tracking-wider text-accent opacity-80 uppercase bg-accent/20 w-fit px-2 py-1 rounded-full">
              {data.category}
            </span>
            <Text text={data.date} />
          </div>

          <h3 className="text-xs uppercase text-primary/90 font-medium tracking-wider line-clamp-2 group-hover:text-accent transition-colors">
            {data.title}
          </h3>

          <Text
            text={data.excerpt}
            aling="left"
          />

          <Text
            text={data.readTime}
            aling="left"
          />
        </div>
      </article>
    </Link>
  );
}
