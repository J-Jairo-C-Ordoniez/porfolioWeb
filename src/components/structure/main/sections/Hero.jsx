"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import data from "../../../../data/home/Hero"
import Name from "../ui/Name";
import Text from "../ui/Text";
import CTA from "../ui/CTA"

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current.children, {
        opacity: 0,
        y: 60,
        duration: 2,
        stagger: 0.15,
        ease: "expo.out",
      });

      gsap.from(footerRef.current, {
        opacity: 0,
        duration: 1.5,
        delay: 1,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[calc(100vh-100px)] overflow-x-hidden flex items-center justify-center"
    >
      <div className="container mx-auto">
        <article
          ref={titleRef}
          className="flex-col gap-12"
        >
          <h2 className="text-center font-sans font-medium text-sm tracking-widest text-secondary opacity-80 pb-6 block translate-y-2">
            {data.user.rol}
          </h2>

          <Name
            name={data.user.name}
            lastName={data.user.lastName}
          />

          <div className="py-6 max-w-2xl mx-auto">
            <Text text={data.user.description} />
          </div>
        </article>

        <article
          ref={footerRef}
          className="mt-24 flex flex-col items-center gap-12"
        >
          <CTA
            href={data.cta[0].href}
            text={data.cta[0].text}
            icon={data.cta[0].icon}
          />
        </article>
      </div>
    </section>
  );
}
